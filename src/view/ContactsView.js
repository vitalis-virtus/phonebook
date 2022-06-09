import React from "react";
import ContactList from "../component/ContactList";
import Filter from "../component/Filter";
import ContactForm from "../component/ContactForm";
import { connect } from "react-redux";
import styles from "./styles/ContactsView.module.scss";

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
      <div className={styles.edit_field}>
        <ContactForm onSubmit={onAddContact}></ContactForm>
        <Filter
          contactsLength={getContactsLength}
          value={filter}
          onChange={onChangeFilter}
        ></Filter>
      </div>
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
