import React, { useState } from "react";
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

import Modal from "react-modal";
Modal.setAppElement("#root");

const ContactsView = ({
  getContactsLength,
  visibleContacts,
  filter,
  onChangeFilter,
  onAddContact,
  onDeleteContact,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div id="ContactsView" className={styles.app}>
      <div className={styles.edit_field}>
        <ContactForm onSubmit={onAddContact}></ContactForm>
        <Filter
          contactsLength={getContactsLength}
          value={filter}
          onChange={onChangeFilter}
        ></Filter>
      </div>

      <div className={styles.edit_field_mobile}>
        <button className={styles.add_contact} onClick={openModal}>
          +
        </button>
        <Filter
          contactsLength={getContactsLength}
          value={filter}
          onChange={onChangeFilter}
        ></Filter>
        {/* <button className={styles.filter_contact}>find</button> */}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.Modal}
        contentLabel="Example Modal"
        overlayClassName={styles.Overlay}
      >
        <ContactForm onSubmit={onAddContact}></ContactForm>
      </Modal>

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
