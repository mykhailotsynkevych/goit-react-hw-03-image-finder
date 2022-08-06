import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

const ImageGallery = ({ fotos }) => {
  return (
  <ul className="ImageGallery">
    {fotos.map(image => (
            <ImageGalleryItem
            key={image.id}
            id={image.id}
            webformatURL={image.webformatURL}
          />
    ))}
  </ul>
  );
};

export default ImageGallery;