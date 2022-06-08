/* eslint-disable no-restricted-globals */
import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.scss";

const Filter = ({ contactsLength, value, onChange }) => (
  <>
    {contactsLength > 0 && (
      <div className={styles.filter__wrapper}>
        <h3 className={styles.header}>Find contacts by name</h3>
        <form className={styles.form}>
          <label className={styles.label}>
            <input
              placeholder="Filter"
              autoComplete="off"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              type="text"
              value={value}
              onChange={(event) => {
                onChange(event.currentTarget.value);
              }}
              className={styles.input}
            />
          </label>
        </form>
      </div>
    )}
  </>
);

Filter.propTypes = {
  contactsLength: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
