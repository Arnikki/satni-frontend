import * as Sentry from '@sentry/browser';
import fetch from 'cross-fetch';
import {normaliseArticles, toJson} from './utils';

export const FETCH_PARADIGM_REQUEST = 'FETCH_PARADIGM_REQUEST';
export const FETCH_ARTICLES_REQUEST = 'FETCH_ARTICLES_REQUEST';
export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const SELECT_KEY = 'SELECT_KEY';

export const FETCH_PARADIGM_SUCCESS = 'FETCH_PARADIGM_SUCCESS';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';

export const FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR';
export const FETCH_PARADIGM_ERROR = 'FETCH_PARADIGM_ERROR';

export const CHANGE_UI_LANGUAGE = 'CHANGE_UI_LANGUAGE';

export const changeUILanguage = (languageCode) => ({
  type: CHANGE_UI_LANGUAGE,
  languageCode
});

export const selectKey = (key) => ({
  type: SELECT_KEY,
  key
});

export const requestArticles = (lemma) => ({
  type: FETCH_ARTICLES_REQUEST,
  lemma
});

export const requestItems = (key) => ({
  type: REQUEST_ITEMS
});

export const requestParadigm = (lemma, lang, pos) => ({
  type: FETCH_PARADIGM_REQUEST,
  lemma, lang, pos
});

export const receiveArticles = (lemma, json) => ({
  type: FETCH_ARTICLES_SUCCESS,
  lemma,
  articles: json
});

export const receiveItems = (key, json) => ({
  type: RECEIVE_ITEMS,
  key,
  searchItems: json
});

export const receiveParadigm = (lemma, lang, pos, text) => ({
  type: FETCH_PARADIGM_SUCCESS,
  lemma, lang, pos,
  paradigm: text
});

const apifetchArticle = (lemma) => {
  let url = `http://satni.uit.no:8080/exist/restxq/satni/article/${lemma}`;
  return fetch(encodeURI(url));
};

export const fetchArticles = (lemma) => (dispatch) => {
  dispatch(requestArticles(lemma));

  return apifetchArticle(lemma)
    .then(response => response.text())
    .then(text => {
      return dispatch(receiveArticles(lemma, normaliseArticles(toJson(text))));
    })
    .catch(error => {
      Sentry.captureException(lemma);
      Sentry.captureException(error);
      dispatch({
        type: FETCH_ARTICLES_ERROR,
        message: `Could not show articles for «${lemma}»`
      });
    });
};

const fetchItems = (key) => (dispatch) => {
  dispatch(requestItems(key));

  let url = `http://satni.uit.no:8080/exist/restxq/satni/search?query=${key}`;
  return fetch(encodeURI(url))
      .then(response => response.text())
      .then(text => dispatch(receiveItems(key, toJson(text))));
};

export const fetchParadigm = (lemma, lang, pos) => (dispatch) => {
  dispatch(requestParadigm(lemma, lang, pos));

  let url = `http://gtweb.uit.no/cgi-bin/smi/smi.cgi?text=${lemma}&pos=${pos}&mode=standard&action=paradigm&lang=${lang}`;
  return fetch(encodeURI(url))
      .then(response => response.text())
      .then(text => dispatch(receiveParadigm(lemma, lang, pos, text)))
      .catch(error => {
        dispatch({
          type: FETCH_PARADIGM_ERROR,
          message: `Could not fetch paradigm for ${lemma} ${lang} ${pos}`
        });
      });
};

export const shouldFetchArticles = (state, lemma) => {
  const articles = state.articlesByLemma[lemma];
  if (!lemma ||
    (articles && articles.isFetching) ||
    (articles && !articles.isFetching && articles.items)) {
    return false;
  } else {
    return true;
  }
};

export const shouldFetchParadigm = (state, lemma, lang, pos) => {
  const paradigms = state.paradigmsByKey[`${lemma}_${lang}_${pos}`];
  if (!lemma ||
    (paradigms && paradigms.isFetching) ||
    (paradigms && !paradigms.isFetching && paradigms.items)) {
    return false;
  } else {
    return true;
  }
};

export const shouldFetchItems = (state, key) => {
  if (state.usedSearchKeys.has(key)) {
    return false;
  } else {
    return true;
  }
};

export const fetchArticlesIfNeeded = (lemma) => (dispatch, getState) => {
  if (shouldFetchArticles(getState(), lemma)) {
    return dispatch(fetchArticles(lemma));
  }
};

export const fetchItemsIfNeeded = (key) => (dispatch, getState) => {
  if (shouldFetchItems(getState().search, key)) {
    return dispatch(fetchItems(key));
  }
};

export const fetchParadigmIfNeeded = (lemma, lang, pos) => (dispatch, getState) => {
  if (shouldFetchParadigm(getState(), lemma, lang, pos)) {
    return dispatch(fetchParadigm(lemma, lang, pos));
  }
};

