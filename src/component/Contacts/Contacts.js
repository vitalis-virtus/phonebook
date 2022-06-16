import React from "react";
import styles from "./Contacts.module.scss";

export default function Contacts({ contacts, onDeleteContact }) {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={styles.listItem}>
          <p className={styles.name}>{contact.name}</p>
          <p className={styles.number}>{contact.number}</p>
          <button
            type="button"
            onClick={() => onDeleteContact(contact.id)}
            className={styles.deleteButton}
          >
            <span>Delete</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
