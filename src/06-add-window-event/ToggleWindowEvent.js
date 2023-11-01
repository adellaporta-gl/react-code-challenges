import React from 'react'
import WindowEvent from './WindowEvent'

class ToggleWindowEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowEvent: false
    }
    window.addEventListener('dblclick', this.handleWindowDoubleClick);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleWindowEvent}>Toggle Window Event</button>
        {this.state.windowEvent && <WindowEvent />}
      </div>
    );
  }
  handleWindowEvent = (syntheticEvent) => {
    this.setState(
      function (prevState, props) {
        const prevWindowEvent = prevState.windowEvent;
        return {
          windowEvent: !prevWindowEvent
        }
      }
    );
  }
  handleWindowDoubleClick = () => {
    if (this.state.windowEvent) {
      alert('you double clicked the current window');
    }
  }
}
export default ToggleWindowEvent;