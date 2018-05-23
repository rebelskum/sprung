import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
import 'react-image-crop/dist/ReactCrop.css';
import ReactCrop, { makeAspectCrop } from 'react-image-crop';

function getBase64(file) {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  return new Promise(resolve => {
    reader.onload = function () {
     console.log(reader.result);
     resolve(reader.result);
    };
    reader.onerror = function (error) {
     console.log('Error: ', error);
    };
  })
}

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
      img: '',
      croppedImg: '',
      crop: {
        x: 20,
        y: 20,
        width: 50,
        height: 50
      }
    };

    this.handleOnDrop = this.handleOnDrop.bind(this);
    this.handleGetCroppedImage = this.handleGetCroppedImage.bind(this);
    this.handleIsCropping = this.handleIsCropping.bind(this);
  }

  handleOnDrop(pictures) {
    getBase64(pictures[0]).then(picture => {
      this.setState({
        img: picture,
        isCropping: true,
      });
      console.log(pictures);
    })
  }

  handleGetCroppedImage(e) {
    var img = new Image();
    img.src = this.state.img;
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
          <div>
            <ReactCrop src={this.state.img} crop={this.state.crop} onChange={
              (crop) => {
              this.setState({ crop });
            }}/>
            <br/>
            <button onClick={this.handleGetCroppedImage}>Crop</button>
          </div>
        )
      } else {
        return (
          <div>
            <img src={this.state.croppedImg} onClick={this.handleIsCropping}/>
            <ImageUploader withIcon={false} withLabel={false} buttonText="Choose image" onChange={this.handleOnDrop} imgExtension={[".jpg", ".gif", ".png"]} maxFileSize={5242880}/>
          </div>
        );
      }
  }
}

export default Picture;
