import React, { Component } from 'react';
import 'react-image-crop/dist/ReactCrop.css';
import ReactCrop, { makeAspectCrop } from 'react-image-crop';

function getCroppedImage(image, pixelCrop) {
  const canvas = document.createElement('canvas');
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;
  const ctx = canvas.getContext('2d');
  console.log(pixelCrop);

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  return canvas.toDataURL('image/jpeg')
}


class Picture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCropping: false,
      croppedImg: 'bono.jpg',
      picture: '',
      crop: {
        x: 20,
        y: 10,
        width: 30,
        height: 40
      }
    };
    this.handleGetCroppedImage = this.handleGetCroppedImage.bind(this);
    this.handleIsCropping = this.handleIsCropping.bind(this);
  }
  handleGetCroppedImage(e) {
    var img = new Image();
    img.src = 'bono.jpg';
    this.setState({
      croppedImg: getCroppedImage(img, this.state.crop),
      isCropping: false,
    });
  }

  handleIsCropping(e) {
    this.setState({
      isCropping: true,
    })
  }


  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
      if (this.state.isCropping){
        return(
          <div >
            <ReactCrop src="bono.jpg" crop={this.state.crop} onChange={
              (crop) => {
              this.setState({ crop });
            }}/>
            <br/>
            <button onClick={this.handleGetCroppedImage}>Crop</button>
          </div>
        )
      } else {
        return (
          <img src={this.state.croppedImg} onClick={this.handleIsCropping}/>
        )
      }
  }
}

export default Picture;
