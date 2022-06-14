import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.scss";

import ClipLoader from "react-spinners/ClipLoader";

import { connect } from "react-redux";

import { phonebookOperations, phonebookSelectors } from "../../redux/phonebook";
class ContactList extends Component {
  state = {
    contacts: [],
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className={styles.list__wrapper}>
        <div className={styles.list__heading}>
          <h4>Name</h4>
          <h4>Phone</h4>
        </div>

        {this.props.isLoadingContacts && (
          <div className={styles.spinner_Container}>
            <ClipLoader loading={true} cssOverride={{}} size={100} />
          </div>
        )}
        <ul className={styles.list}>
          {this.props.contacts.map((contact) => (
            <li key={contact.id} className={styles.listItem}>
              <p className={styles.name}>{contact.name}</p>
              <p className={styles.number}>{contact.number}</p>
              <button
                type="button"
                onClick={() => this.props.onDeleteContact(contact.id)}
                className={styles.deleteButton}
              >
                <span>Delete</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
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
