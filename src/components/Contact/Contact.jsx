import css from "./Contact.module.css";

import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { BiSolidCat } from "react-icons/bi";
import { useToggle } from "../../hooks/useToggle";
import ModalConfirm from "../ModalConfirm/ModalConfirm";

const Contact = ({ contact, txtBtn }) => {
  const { id, name, number } = contact;

  const { isOpen, open, close } = useToggle();

  const dispatch = useDispatch();
  const handleDelete = () => {
    open();
  };

  const confirmDelete = () => {
    dispatch(deleteContact(id));
    close();
  };

  return (
    <>
      <li id={id} className={css.item}>
        <div>
          <p>
            <BiSolidCat />
            {name}
          </p>
          <p>
            <FaPhone />
            {number}
          </p>
        </div>
        <button className={css.button} onClick={handleDelete}>
          {txtBtn}
        </button>
      </li>
      <ModalConfirm isOpen={isOpen} close={close} confirmDelete={confirmDelete} message="Are you sure you want to delete this contact?" />
    </>
  );
};

export default Contact;
