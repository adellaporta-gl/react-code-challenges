import React from 'react';
class Color extends React.Component {
  render() {
    return (
      <button
        className='color-square'
        style={{ backgroundColor: this.props.hex }}
        onClick={this.colorHandler}
      >
        <h2>{this.props.name}</h2>
      </button>
    );
  }
  colorHandler = (syntheticEvent) => {
    this.props.colorHandler(this.props.hex);
  }
}
export default Color;