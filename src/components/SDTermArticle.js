import React from 'react';

import { ArticleDiv } from './ArticleDiv';
import Stems from './Stems';
import Source from './Source';

const SDTermArticle = ({stems, dictionary}) => {
  return (
    <ArticleDiv>
      <Stems stems={stems} />
      <Source source={dictionary} />
    </ArticleDiv>
  );
};

export default SDTermArticle;
