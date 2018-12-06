import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { t, Trans } from '@lingui/macro';
import { connect } from 'react-redux';
import { changeUILanguage } from '../actions'

const uiLanguages = [
  {name: 'Lule Sami', code: 'smj'},
  {name: 'South Sami', code: 'sma'},
  {name: 'Davvisámegiella', code: 'se'},
  {name: 'Norsk', code: 'no'},
  {name: 'Finnish', code: 'fi'},
  {name: 'Svenska', code: 'sv'},
  {name: 'Inari Sami', code: 'smn'},
  {name: 'Skolt Sami', code: 'sms'},
  {name: 'English', code: 'en'}
];

class LanguageSwitcher extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  selectedItem = (event, languageCode) => {
    this.setState({
      anchorEl: null
    })
    this.props.changeUILanguage(languageCode)
  }

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <Trans>Languages</Trans>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          value={this.state.selectedItem}
          onChange={this.selectedItem}
        >
          {
            uiLanguages.map((uiLanguage) => {
              if (this.props.activeCode ===  uiLanguage.code) {
                return (
                  <MenuItem
                    key={uiLanguage.code}
                    selected={true}
                  >
                    {uiLanguage.name}
                  </MenuItem>
                )
              } else {
                return (
                  <MenuItem
                    key={uiLanguage.code}
                    onClick={event => this.selectedItem(event, uiLanguage.code)}
                  >
                    {uiLanguage.name}
                  </MenuItem>
                )
              }
            }
          )}
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {uiLanguage} = state

  return {uiLanguage}
}

const mapDispatchToProps = (dispatch) => ({
  changeUILanguage: (languageCode) => {
    dispatch(changeUILanguage(languageCode))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSwitcher);
