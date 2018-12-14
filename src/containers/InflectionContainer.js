import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Set } from 'immutable';
import Paradigm from './Paradigm';
import { fetchArticlesIfNeeded } from '../actions';

const langs = Set(['sma', 'sme', 'smj', 'smn', 'sms', 'fin']);
const poses = Set(['N', 'V', 'A']);

const kna = (items) => {
  const myarray = [];
  const myset = Set();

  items.forEach(item => {
    item.stems.forEach(stem => {
      if (!/\s/.test(stem.lemma) && langs.has(stem.lang) && poses.has(stem.pos)) {
        myarray.push(`${stem.lemma}_${stem.lang}_${stem.pos}`);
      }
    });
  });

  return Set(myarray).toArray();
};

class InflectionContainer extends Component {
  componentDidUpdate () {
    this.props.fetchArticlesIfNeeded(this.props.lemma);
  }

  componentDidMount () {
    this.props.fetchArticlesIfNeeded(this.props.lemma);
  }

  render () {
    const {errorMessage, articlesByLemma, lemma} = this.props;

    console.log(lemma);
    const {
      isFetching,
      items
    } = articlesByLemma[lemma] || {
      isFetching: false,
      items: []
    };

    if (errorMessage) {
      return null;
    }

    if (isFetching) {
      return null;
    }

    const uff = kna(items);
    console.log(54, uff);
    return <div>
      {uff.map((uf, i) => {
        const parts = uf.split('_');
        return <Paradigm lemma={parts[0]} lang={parts[1]} pos={parts[2]} />;
      })}
    </div>;
  }
}
// .filter(stem => stem.lang && stem.pos && langs.has(stem.lang) && poses.has(stem.pos))
// .map(stem => {
//   console.log(stem);
//   return <Paradigm
//   lemma={stem.lang}
//   pos={stem.pos}
//   lang={stem.lang}/>})

InflectionContainer.propTypes = {
  articlesByLemma: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  const { articlesByLemma, errorMessage } = state;

  return {
    articlesByLemma,
    errorMessage
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchArticlesIfNeeded: (nextLemma) => {
    dispatch(fetchArticlesIfNeeded(nextLemma));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(InflectionContainer);
