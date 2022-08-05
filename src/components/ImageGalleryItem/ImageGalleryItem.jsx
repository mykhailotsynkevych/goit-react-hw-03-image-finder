const ImageGalleryItem = ({ id, webformatURL}) => {
  return (
    <li key={id} className="ImageGalleryItem">
      <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;

// <li className={s.item}>
//   <p className={s.discription}>{name}</p>
//   <p className={s.discription}>{number}</p>
//   <button className={s.button} onClick={() => onDeleteContact(id)}>
//     Удалить
//   </button>
// </li>
