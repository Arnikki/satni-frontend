import reducer from './reducers';
import * as actions from './actions';
import {Set} from 'immutable';

const initialState = {
  articlesByLemma: {},
  search: {
    'isSearching': false,
    'searchItems': Set(),
    'usedSearchKeys': Set()
  },
  selectedLemma: ''
};

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SELECT_LEMMA', () => {
    expect(reducer(initialState, {
      type: actions.SELECT_LEMMA,
      lemma: 'guolli'
    })).toEqual({
      articlesByLemma: {},
      search: {
        isSearching: false,
        searchItems: Set(),
        usedSearchKeys: Set()
      },
      selectedLemma: 'guolli'
    });
  });

  it('should handle REQUEST_ITEMS', () => {
    expect(reducer(initialState, {
      type: actions.REQUEST_ITEMS
    })).toEqual({
      articlesByLemma: {},
      search: {
        'isSearching': true,
        'searchItems': Set(),
        'usedSearchKeys': Set()
      },
      selectedLemma: ''
    });
  });

  it('should handle RECEIVE_ITEMS', () => {
    expect(reducer(initialState, {
      type: actions.RECEIVE_ITEMS,
      key: 'guol',
      searchItems: Set.of({key: 'value'}),
      usedSearchKeys: Set.of('guol')
    })).toEqual({
      'articlesByLemma': {},
      'search': {
        'isSearching': false,
        'searchItems': Set.of({'key': 'value'}),
        'usedSearchKeys': Set.of('guol')
      },
      'selectedLemma': ''
    });
  });

  it('should handle REQUEST_ARTICLES', () => {
    expect(reducer({
      articlesByLemma: {},
      search: {
        isSearching: false,
        searchItems: Set(),
        usedSearchKeys: Set()
      },
      selectedLemma: 'guolli'
    },
      {
        type: actions.REQUEST_ARTICLES,
        lemma: 'guolli'
      })).toEqual({
        'articlesByLemma': {
          'guolli': {
            'isFetching': true,
            'items': []
          }
        },
        'search': {
          'isSearching': false,
          'searchItems': Set(),
          'usedSearchKeys': Set()
        },
        'selectedLemma': 'guolli'});
  });

  it('should handle RECEIVE_ARTICLES', () => {
    expect(reducer({
      'articlesByLemma': {
        'guolli': {
          'isFetching': true,
          'items': []
        }
      },
      'search': {
        'isSearching': false,
        'searchItems': Set(),
        'usedSearchKeys': Set()
      },
      'selectedLemma': 'guolli'},
      {
        type: actions.RECEIVE_ARTICLES,
        lemma: 'guolli',
        articles: [
          {
            'def': null,
            'dict': 'SD-terms',
            'expl': null,
            'lang': 'smj',
            'pos': 'S',
            'status': null,
            'term': 'guolle',
            'termwikiref': '6046',
            'tg': [
              {
                '#text': [`\n            `, `\n        `],
                't': 'guolli',
                'xml:lang': 'sme'
              }, {
                '#text': [`\n            `, `\n        `],
                't': 'fisk',
                'xml:lang': 'nor'
              },
              {
                '#text': [`\n            `, `\n        `],
                't': 'guolle',
                'xml:lang': 'smj'
              },
              {
                '#text': [`\n            `, `\n        `],
                't': 'guelie',
                'xml:lang': 'sma'
              }
            ]
          }
        ]
      })).toEqual({
        'articlesByLemma': {
          'guolli': {
            'isFetching': false,
            'items': [
              {
                'def': null,
                'dict': 'SD-terms',
                'expl': null,
                'lang': 'smj',
                'pos': 'S',
                'status': null,
                'term': 'guolle',
                'termwikiref': '6046',
                'tg': [
                  {
                    '#text': [`\n            `, `\n        `],
                    't': 'guolli',
                    'xml:lang': 'sme'
                  },
                  {
                    '#text': [`\n            `, `\n        `],
                    't': 'fisk',
                    'xml:lang': 'nor'
                  },
                  {
                    '#text': [`\n            `, `\n        `],
                    't': 'guolle',
                    'xml:lang': 'smj'
                  },
                  {
                    '#text': [`\n            `, `\n        `],
                    't': 'guelie',
                    'xml:lang': 'sma'
                  }
                ]
              }
            ]
          }
        },
        'search': {
          'isSearching': false,
          'searchItems': Set(),
          'usedSearchKeys': Set()
        },
        'selectedLemma': 'guolli'
      });
  });
});