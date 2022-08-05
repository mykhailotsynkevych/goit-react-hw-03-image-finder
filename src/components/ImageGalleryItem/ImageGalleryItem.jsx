const ImageGalleryItem = ({ id, webformatURL}) => {
  return (
    <li key={id} className="ImageGalleryItem">
      <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
