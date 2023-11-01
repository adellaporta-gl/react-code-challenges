import React from 'react'

class ColorPicker extends React.Component {
  render() {
    const colors = ['red', 'blue', 'yellow', 'green', 'black', 'white', 'purple']
    return (
      <div>
        <h1>Choose a color</h1>
        {colors.map(color => <button key={color} style={{ backgroundColor: color }} onClick={this.handleClick} value={color} />)}
      </div>
    );
  }
  handleClick = (syntheticEvent) => {
    this.props.colorHandler(syntheticEvent.target.value);
  }
}

class Pixel extends React.Component {
  state = {
    pixelColor: 'lightgray'
  }
  render() {
    return (
      <div
        style={{
          height: '20px',
          width: '20px',
          backgroundColor: this.state.pixelColor,
          margin: '1px'
        }}
        onClick={this.pixelHandler}
      />);
  }
  pixelHandler = () => {
    this.setState({
      pixelColor: this.props.color
    })
  }
}

class Pixels extends React.Component {
  render() {
    const pixels = []
    for (let i = 0; i < 100; i++) {
      pixels.push(<Pixel key={i} color={this.props.selectedColor} />)
    }
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', width: '210px', margin: '0 auto' }}>
        {pixels}
      </div>
    );
  }
}

class PixelArt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'lightgray'
    }
  }
  render() {
    return (
      <div>
        <ColorPicker colorHandler={this.handleColorSelection} />
        <Pixels selectedColor={this.state.color} />
      </div>
    );
  }
  handleColorSelection = (color) => {
    this.setState({
      color: color
    });
  }
}
export default PixelArt;