import { createPortal } from 'react-dom';

const modalContainer = document.getElementById("modal")

const Modal = ({ largeImageURL }) => {
  return createPortal (
    <div className="Overlay">
      <div className="Modal">
        <img src={largeImageURL} alt="" />
      </div>
    </div>, modalContainer
  );
};

export default Modal;
