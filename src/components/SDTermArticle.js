import React from 'react';

import { ArticleDiv } from './ArticleDiv';
import Stems from './Stems';
import Source from './Source';

const SDTermArticle = ({stems, dictionary}) => {
  return (
    <ArticleDiv>
      <Source source={dictionary} />
      <Stems stems={stems} />
    </ArticleDiv>
  );
};

export default SDTermArticle;
