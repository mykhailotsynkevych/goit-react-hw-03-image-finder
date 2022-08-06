import { createPortal } from 'react-dom';

const modalContainer = document.getElementById('modal');

const Modal = ({ modalFoto, setModalFoto }) => {
  const handleModalClose = e => {
    if (e.target === e.currentTarget) return;
    setModalFoto();
  };

  return createPortal(
    <div className="Overlay" onClick={handleModalClose}>
      <div className="Modal">
        <img src={modalFoto} alt="" />
      </div>
    </div>,
    modalContainer
  );
};

export default Modal;
