import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Trans } from '@lingui/macro';

import { ArticleDiv } from './ArticleDiv';
import Stems from './Stems';
import Source from './Source';

const TermWikiArticle = ({stems, termwikiref, dictionary}) => {
  return (
    <ArticleDiv>
      <Source source={dictionary} termwikiref={termwikiref} lemma={stems[0].lemma} />
      <Stems stems={stems} />
    </ArticleDiv>
  );
};

export default TermWikiArticle;
