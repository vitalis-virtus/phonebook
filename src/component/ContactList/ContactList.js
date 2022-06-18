import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.scss";

import ClipLoader from "react-spinners/ClipLoader";
import ReactPaginate from "react-paginate";
import Contacts from "../Contacts/Contacts";

import { connect } from "react-redux";

import { phonebookOperations, phonebookSelectors } from "../../redux/phonebook";

const ContactList = ({
  contacts,
  onDeleteContact,
  isLoadingContacts,
  fetchContacts,
}) => {
  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + 9;
    setCurrentItems(contacts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(contacts.length / 9));
  }, [contacts, itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 9) % contacts.length;
    setItemOffset(newOffset);
  };

  return (
    <div className={styles.list__wrapper}>
      <div className={styles.list__heading}>
        <h4>Name</h4>
        <h4>Phone</h4>
      </div>

      {isLoadingContacts && (
        <div className={styles.spinner_Container}>
          <ClipLoader loading={true} cssOverride={{}} size={100} />
        </div>
      )}
      {contacts && (
        <div className={styles.contacts_wrapper}>
          <Contacts contacts={currentItems} onDeleteContact={onDeleteContact} />
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={4}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            className={styles.pagination_wrapper}
            pageClassName={styles.pagination__element}
            activeLinkClassName={styles.pagination__element_active}
            previousClassName={styles.pagination__previous}
            nextClassName={styles.pagination__next}
            disabledClassName={styles.pagination__disabled}
          />
        </div>
      )}
    </div>
  );
};

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
