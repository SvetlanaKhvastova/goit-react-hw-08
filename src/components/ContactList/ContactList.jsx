import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectError, selectFilteredContacts, selectLoading } from "../../redux/contacts/selectors";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}

      <ul className={css.list}>
        {visibleContacts.map((contact) => {
          return <Contact key={contact.id} contact={contact} txtBtn="Delete" />;
        })}
      </ul>
    </>
  );
};

export default ContactList;
