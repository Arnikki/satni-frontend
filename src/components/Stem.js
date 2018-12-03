import React from 'react';
import { css } from 'react-emotion';
import { Set } from 'immutable';
import { t, Trans } from '@lingui/macro';

const languages = [
  t`eng`,
  t`fin`,
  t`lat`,
  t`nob`,
  t`nno`,
  t`sme`,
  t`sma`,
  t`smj`,
  t`smn`,
  t`sms`,
  t`swe`
];

const partOfSpeech = [
  t`N`,
  t`A`,
  t`Adv`,
  t`V`,
  t`Pron`,
  t`CS`,
  t`CC`,
  t`Adp`,
  t`Po`,
  t`Pr`,
  t`Interj`,
  t`Pcle`,
  t`Num`,
  t`ABBR`,
  t`MWE`,
];

const korpLangs = Set.of('sma', 'sme', 'smj', 'smn', 'sms');

const KorpLink = (lang, lemma) => {
  const searchString = `Search for ${lemma} in Korp`;
  const korpAddress = (lang !== 'sme' && korpLangs.has(lang))
                        ? `http://gtweb.uit.no/korp/?mode=${lang}#?search=cqp|[lemma%3D"${lemma}"]`
                        : `http://gtweb.uit.no/korp/#?search=cqp|[lemma%3D"${lemma}"]`;
  return (
    <span className={css({
      float: 'right',
      display: 'inline'
    })}><a href={korpAddress} target='_blank'>{searchString}</a></span>
  );
};

const Stem = ({ stem: {lemma, pos, lang, key}}) => {
  return (
    <div
      className={css({
        width: '100%',
        key: key
      })}>
      <span className={css({ display: 'inline'})}>{key ? <span className={css({
        fontWeight: 'bold',
        marginLeft: '2%'
      })}>{lemma}</span> : lemma} <Trans id={pos} /> <Trans id={lang} /></span>
      {korpLangs.has(lang) && (KorpLink(lang, lemma))}
    </div>
  );
};

export default Stem;
