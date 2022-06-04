/* eslint-disable no-restricted-globals */
import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ contactsLength, value, onChange }) => (
  <>
    {contactsLength > 0 && (
      <label className={styles.label}>
        <p>Find contacts by name</p>

        <input
          placeholder="Filter"
          type="text"
          value={value}
          onChange={(event) => {
            onChange(event.currentTarget.value);
          }}
          className={styles.input}
        />
      </label>
    )}
  </>
);

Filter.propTypes = {
  contactsLength: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
