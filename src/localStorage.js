export const loadUiLanguage = () => {
  try {
    const uiLanguage = localStorage.getItem('uiLanguage');
    if (uiLanguage === null) {
      return 'se';
    }
    return uiLanguage;
  } catch (error) {
    return 'se';
  }
};

export const saveUiLanguage = (uiLanguage) => {
  try {
    localStorage.setItem('uiLanguage', uiLanguage);
  } catch (err) {
    // Ignore write errors.
  }
};
