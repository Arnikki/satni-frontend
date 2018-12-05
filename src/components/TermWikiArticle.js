import React from 'react';
import { css } from 'react-emotion';
import { Trans } from '@lingui/macro';

import { ArticleDiv } from '../components';
import Stems from './Stems';
import Source from './Source';

const TermWikiArticle = ({stems, termwikiref, dictionary}) => {
  return (
    <ArticleDiv>
      <Stems stems={stems} />
      <div className={css({
        textAlign: 'right',
        marginTop: '1%',
        paddingBottom: '0',
        fontSize: '90%'
      })}>
        {dictionary === 'termwiki'
        ? <a
          href={`https://satni.uit.no/termwiki/index.php?title=${termwikiref}`}
          target='_blank'>
          <Trans>This article on the TermWiki</Trans>
        </a>
        : <Source source={dictionary} />
        }
      </div>
    </ArticleDiv>
  );
};

export default TermWikiArticle;
