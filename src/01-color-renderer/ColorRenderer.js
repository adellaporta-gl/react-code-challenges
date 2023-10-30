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

var colorIndex = 0;
export default function ColorRenderer() {
  return (
    <div>
      {
        colors.map(color => {
          return <Color key={"color-key-".concat(colorIndex++)} hex={color.hex} name={color.name} />
        })
      }
    </div>
    // <h2>
    //   Use the Color component to render each
    //    item in the colors array on the page!
    // </h2>
  );
}
