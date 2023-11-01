import React from 'react'
import Color from './Color'

const colors = [{
  hex: '#91A6FF',
  name: 'Cornflower Blue'
},
{
  hex: '#FF88DC',
  name: 'Persian Pink'
},
{
  hex: '#80FF72',
  name: 'Screamin Green'
},
{
  hex: '#FF5154',
  name: 'Tart Orange'
}]

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'white'
    }
  }
  render() {
    const backgroundStyle = {
      backgroundColor: this.state.backgroundColor
    }
    return (
      <div className='page' style={backgroundStyle}>
        {
          colors.map(color => (
            <Color
              key={color.hex}
              hex={color.hex}
              name={color.name}
              colorHandler={this.handleColorChange}
            />
          ))
        }
      </div>
    );
  }
  handleColorChange = (newBackgroundColor) => {
    this.setState({
      backgroundColor: newBackgroundColor
    })    
  }
}
export default ColorPicker;