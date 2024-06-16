import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";
// import { getContacts, getFilter } from "../../redux-slice/selectors";

const getVisibleContacts = (contacts, searchValue) => {
  return contacts.filter((contact) => contact.name.toLowerCase().includes(searchValue.toLowerCase()));
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectNameFilter);
  const visibleContacts = getVisibleContacts(contacts, filterValue);

  return (
    <>
      <ul className={css.list}>
        {visibleContacts.map((contact) => {
          return <Contact key={contact.id} contact={contact} txtBtn="Delete" />;
        })}
      </ul>
    </>
  );
};

export default ContactList;
