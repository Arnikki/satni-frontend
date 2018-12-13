import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchParadigmIfNeeded } from '../actions';
import FetchArticlesError from '../components/FetchArticlesError';
import NounParadigm from '../components/NounParadigm';
import VerbParadigm from '../components/VerbParadigm';
import AdjParadigm from '../components/AdjParadigm';
import { normaliseNounParadigm, normaliseAdjParadigm, normaliseVerbParadigm } from '../utils.js';

class Paradigm extends Component {
  componentDidUpdate () {
    this.props.fetchParadigmIfNeeded(this.props.lemma, this.props.lang, this.props.pos);
  }

  componentDidMount () {
    this.props.fetchParadigmIfNeeded(this.props.lemma, this.props.lang, this.props.pos);
  }

  render () {
    const {errorMessage, paradigmsByKey, lemma, lang, pos} = this.props;

    const {
      isFetching,
      items
    } = paradigmsByKey[`${this.props.lemma}_${this.props.lang}_${this.props.pos}`] || {
      isFetching: false,
      items: ''
    };

    if (errorMessage) {
      return (
        <FetchArticlesError message={errorMessage} />
      );
    }

    if (isFetching) {
      return <div>Loading paradigms …</div>;
    }

    try {
      if (pos === 'N') {
        return <NounParadigm paradigm={normaliseNounParadigm(items)} />;
      } else if (pos === 'A') {
        return <AdjParadigm paradigm={normaliseAdjParadigm(items)} />;
      } else if (pos === 'V') {
        return <VerbParadigm paradigm={normaliseVerbParadigm(items)} />;
      } else {
        return <div>Cannot provide paradigm for {lemma} {lang} {pos} {items}</div>;
      }
    } catch (error) {
      return <div>{lemma} {lang} {pos} {items}</div>;
    }
  }
}

Paradigm.propTypes = {
  paradigmsByKey: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  const { paradigmsByKey, errorMessage } = state;

  return {
    paradigmsByKey,
    errorMessage
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchParadigmIfNeeded: (nextLemma, nextLang, nextPos) => {
    dispatch(fetchParadigmIfNeeded(nextLemma, nextLang, nextPos));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Paradigm);
