import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Trans } from '@lingui/macro';

import { ArticleDiv } from './ArticleDiv';
import Stems from './Stems';
import Source from './Source';

const TermWikiArticle = ({stems, termwikiref, dictionary}) => {
  return (
    <ArticleDiv>
      <div>
        {dictionary === 'termwiki'
        ? <a
          href={`https://satni.uit.no/termwiki/index.php?title=${termwikiref}`}
          target='_blank'>
          <Typography align='center' variant='body2'><Trans>This article on the TermWiki</Trans></Typography>
        </a>
        : <Source source={dictionary} />
        }
      </div>
      <Stems stems={stems} />
    </ArticleDiv>
  );
};

export default TermWikiArticle;
