import React from 'react';
class DogPics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: 'https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4172.jpg'
    }
    this.changeDogImage = this.changeDogImage.bind(this);
  }
  changeDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(jsonResponse => {
        console.log('jsonResponse: \n', jsonResponse);
        this.setState({
          imgSrc: jsonResponse.message
        })
      })

  }
  render() {
    return (
      <div className='dog-pics'>
        <img src={this.state.imgSrc} />
        <button onClick={this.changeDogImage}>🐶</button>
      </div>
    );
  }
}
export default DogPics;

// export default function DogPics() {
//   // API: https://dog.ceo/dog-api/
//   //
//   return (
//     <div className='dog-pics'>
//       <img src='https://dog.ceo/api/breeds/image/random' />
//       <button>🐶</button>
//     </div>
//   )
// }
