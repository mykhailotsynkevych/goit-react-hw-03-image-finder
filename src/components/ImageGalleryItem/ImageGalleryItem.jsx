const ImageGalleryItem = ({ id, webformatURL, setModalFoto, largeImageURL}) => {
  return (
    <li key={id} className="ImageGalleryItem" onClick={() => setModalFoto(largeImageURL)}>
      <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
