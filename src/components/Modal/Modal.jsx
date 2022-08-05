const Modal = ({ largeImageURL }) => {
  return (
    <div class="Overlay">
      <div class="Modal">
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

export default Modal;
