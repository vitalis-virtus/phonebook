import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

import { connect } from "react-redux";

import { phonebookOperations, phonebookSelectors } from "../../redux/phonebook";

// import phonebookOperations from "../../redux/phonebook/phonebook-operations";

// import phonebookSelectors from "../../redux/phonebook/phonebook-selectors.js";

class ContactList extends Component {
  state = {
    contacts: [],
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <ul className={styles.list}>
        {this.props.isLoadingContacts && (
          <h3 className={styles.loading}>Loading contacts...</h3>
        )}
        {this.props.contacts.map((contact) => (
          <li key={contact.id} className={styles.listItem}>
            {contact.name}: {contact.number}
            <button
              type="button"
              onClick={() => this.props.onDeleteContact(contact.id)}
              className={styles.deleteButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isLoadingContacts: phonebookSelectors.getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
