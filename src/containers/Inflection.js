import React from 'react';
import queryString from 'query-string';
import Paradigm from '../containers/Paradigm';
const Inflection = ({ match, location }) => {
  const parsed = queryString.parse(location.search);

  // return (
  //   <div>
  //     <div>Testing, 1, 2, 3</div>
  //     <div>{match.params.lemma}</div>
  //     <div>{parsed.lang}</div>
  //     <div>{parsed.pos}</div>
  //   </div>
  // );
  return <Paradigm
    lemma={match.params.lemma}
    lang={parsed.lang}
    pos={parsed.pos} />;
};

export default Inflection;
