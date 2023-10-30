import React from 'react';
class DarkMode extends React.Component {
  state = {
    isEnabled: false
  }
  handleChangeMode = (synthethicEvent) => {
    const isDarkModeEnabled = synthethicEvent.target.name == 'darkButton' ? true : false;
    this.setState({
      isEnabled: isDarkModeEnabled
    });
  }
  render() {
    return (
      <div className={'page'.concat(this.state.isEnabled ? ' dark-mode' : '')}>
        <button className='dark-mode-button' name='darkButton' onClick={this.handleChangeMode}>Dark Mode</button>
        <button className='light-mode-button' name='lightButton' onClick={this.handleChangeMode}>Light Mode</button>
      </div>
    );
  }
}
export default DarkMode;