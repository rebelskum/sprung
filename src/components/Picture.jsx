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

function getCroppedImage(image, cropRect) {
  const canvas = document.createElement('canvas');
  const imgWidth = image.naturalWidth;
  const imgHeight = image.naturalHeight;
  const canvasWidth = (cropRect.width * imgWidth) / 100;
  const canvasHeight = (cropRect.height * imgHeight) / 100;
  canvas.width = canvasWidth; //imgWidth;
  canvas.height = canvasHeight;//imgHeight;
  const ctx = canvas.getContext('2d');
  // const img = document.getElementById('imageid');
  console.log(cropRect, "pixel crop here");
  console.log(imgWidth, "image width here");

  ctx.drawImage(
    image,
    (cropRect.x * imgWidth) / 100,
    (cropRect.y * imgHeight) / 100,
    canvasWidth,
    canvasHeight,
    0,
    0,
    canvasWidth,
    canvasHeight
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
    });
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
            <h1>Hello world</h1>
            <ReactCrop src={this.state.img} crop={this.state.crop} onChange={
              (crop, pixelCrop) => {
                console.log('Crop: ', crop);
                console.log('pixelCrop: ', pixelCrop);
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
