import React from 'react';
import { connect } from 'react-redux';
import I18nLoaderComponent from '../components/I18nLoaderComponent';

const mapStateToProps = (state) => {
  const {uiLanguage} = state;

  return {uiLanguage};
};

export default connect(mapStateToProps)(I18nLoaderComponent);
