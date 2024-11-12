import React, { useRef, useState } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import './ImageCropper.css';

const ImageCropper = () => {
  const cropperRef = useRef(null);
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const onChange = (e) => {
    e.preventDefault();
    const files = e.target.files;
    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(files[0]);
    }
  };

  const cropImage = () => {
    if (!image) {
      alert("Por favor, carregue uma imagem antes de tentar cortar.");
      return;
    }

    const cropper = cropperRef.current?.cropper;
    const croppedDataUrl = cropper.getCroppedCanvas({
      width: 1384,
      height: 500,
    }).toDataURL();
    setCroppedImage(croppedDataUrl);
  };

  const downloadImage = () => {
    if (!croppedImage) return;
    const link = document.createElement('a');
    link.href = croppedImage;
    link.download = 'cropped-image.png';
    link.click();
  };

  return (
    <div className="image-cropper-container">
      <input type="file" onChange={onChange} accept="image/*" />
      {image && (
        <Cropper
          src={image}
          style={{ height: 400, width: '100%' }}
          initialAspectRatio={1384 / 500}
          aspectRatio={1384 / 500}
          guides={false}
          ref={cropperRef}
        />
      )}
      <button onClick={cropImage}>Cortar Imagem</button>
      {croppedImage && (
        <div className="cropped-image-preview">
          <h2>Imagem Cortada</h2>
          <img src={croppedImage} alt="Cortada" />
          <button onClick={downloadImage}>Baixar Imagem Cortada</button>
        </div>
      )}
    </div>
  );
};

export default ImageCropper;
