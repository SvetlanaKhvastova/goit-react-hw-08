import Modal from "react-modal";
import css from "./ModalConfirm.module.css";
Modal.setAppElement("#root");

const ModalConfirm = ({ message, confirmDelete, isOpen, close }) => {
  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={close} className={css.Modal} overlayClassName={css.Overlay}>
        <h3>{message}</h3>
        <div className={css.btn_wrapper}>
          <button className={css.button_no} onClick={close}>
            No
          </button>
          <button className={css.button_yes} onClick={confirmDelete}>
            Yes
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ModalConfirm;
