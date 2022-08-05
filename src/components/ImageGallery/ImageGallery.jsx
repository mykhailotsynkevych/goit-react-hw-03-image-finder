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

// const ContactsList = ({ contactsList, onDeleteContact}) => {
//   return (
//     <div className={s.wrap}>
//       <ul className={s.list} >
//         {contactsList.map(contactEl => (
//             <ContactsEl
//             key={contactEl.id}
//             id={contactEl.id}
//             name={contactEl.name}
//             number={contactEl.number}
//             onDeleteContact={onDeleteContact}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// };