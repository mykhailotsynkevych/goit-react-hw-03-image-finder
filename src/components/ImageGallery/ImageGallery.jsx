const ImageGallery = ({ fotos}) => {
  return (
  <ul className="ImageGallery">
    {fotos.map(({ id, webformatURL}) => (
      <li key={id} className="ImageGalleryItem">
<img src={webformatURL} alt="" className="ImageGalleryItem-image"/>
      </li>
    ))}
  </ul>
  );
};

export default ImageGallery;