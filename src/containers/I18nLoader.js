import React from 'react'
import { connect } from 'react-redux'
import { I18nProvider } from '@lingui/react'

class I18nLoader extends React.Component {
  state = {
    catalogs: {}
  }

  loadLanguage = (language) => {
    import(
      /* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
      `@lingui/loader!../locales/${language}/messages.po`)
    .then(catalog =>
      this.setState(state => ({
        catalogs: {
          ...state.catalogs,
          [language]: catalog
        }
      }))
    )
  }

  componentDidMount() {
    this.loadLanguage(this.props.uiLanguage)
  }

  shouldComponentUpdate(nextProps, { catalogs }) {
    if (nextProps.uiLanguage !== this.props.uiLanguage && !catalogs[nextProps.uiLanguage]) {
      this.loadLanguage(nextProps.uiLanguage)
      return false
    }

    return true
  }

  render() {
    const { catalogs } = this.state
    const { children, uiLanguage } = this.props

    if (!catalogs[uiLanguage]) return null

    return (
      <I18nProvider language={uiLanguage} catalogs={catalogs}>
        {children}
      </I18nProvider>
    )
  }
}

const mapStateToProps = (state) => {
  const {uiLanguage} = state

  return {uiLanguage}
}

export default connect(mapStateToProps)(I18nLoader);
