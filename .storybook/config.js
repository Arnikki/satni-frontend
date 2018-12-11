import { configure } from '@storybook/react';

function loadStories () {
  require('../src/components/AdjParadigm.stories.js');
  require('../src/components/DictArticle.stories.js');
  require('../src/components/Examples.stories.js');
  require('../src/components/Example.stories.js');
  require('../src/components/NounParadigm.stories.js');
  require('../src/components/PresentArticles.stories.js');
  require('../src/components/SDTermArticle.stories.js');
  require('../src/components/Source.stories.js');
  require('../src/components/Stems.stories.js');
  require('../src/components/Stem.stories.js');
  require('../src/components/TermWikiArticle.stories.js');
  require('../src/components/VerbParadigm.stories.js');
  require('../src/components/KorpLinks.stories.js');
}

configure(loadStories, module);
