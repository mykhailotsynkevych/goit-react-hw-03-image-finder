import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

const ImageGallery = ({ fotos, setModalFoto }) => {
  return (
  <ul className="ImageGallery">
    {fotos.map(image => (
      <ImageGalleryItem
            key={image.id}
            id={image.id}
        webformatURL={image.webformatURL}
        largeImageURL={image.largeImageURL}
        setModalFoto={setModalFoto}
          />
    ))}
  </ul>
  );
};

export default ImageGallery;