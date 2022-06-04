import React from "react";
import ContactList from "../component/ContactList";
import Filter from "../component/Filter";
import ContactForm from "../component/ContactForm";
import styles from "../component/Phonebook/Phonebook.module.css";
import { connect } from "react-redux";

// import { changeFilter } from "../../redux/phonebook/phonebook-actions";

import {
  phonebookOperations,
  phonebookSelectors,
  changeFilter,
} from "../redux/phonebook";

const ContactsView = ({
  getContactsLength,
  visibleContacts,
  filter,
  onChangeFilter,
  onAddContact,
  onDeleteContact,
}) => {
  const contactsLength = visibleContacts.length;

  return (
    <div className={styles.app}>
      <h1 className={styles.header}>Phonebook</h1>
      <ContactForm onSubmit={onAddContact}></ContactForm>
      {contactsLength > 0 && <h2 className={styles.header}>Contacts</h2>}
      <Filter
        contactsLength={getContactsLength}
        value={filter}
        onChange={onChangeFilter}
      ></Filter>
      <ContactList
        contacts={visibleContacts}
        onDeleteContact={onDeleteContact}
      ></ContactList>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    getContactsLength: phonebookSelectors.getContactsLength(state),
    visibleContacts: phonebookSelectors.getVisibleContacts(state),
    filter: phonebookSelectors.getFilter(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddContact: ({ name, number }) =>
      dispatch(phonebookOperations.addContact(name, number)),
    onDeleteContact: (id) => dispatch(phonebookOperations.deleteContact(id)),
    onChangeFilter: (value) => dispatch(changeFilter(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
