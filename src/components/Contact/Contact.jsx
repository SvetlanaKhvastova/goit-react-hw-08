import css from "./Contact.module.css";
import { FaUserSecret } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact, txtBtn }) => {
  const { id, name, number } = contact;

  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <li id={id} className={css.item}>
        <div>
          <p>
            <FaUserSecret />
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
    </>
  );
};

export default Contact;
