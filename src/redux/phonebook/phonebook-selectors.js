/* eslint-disable import/no-anonymous-default-export */

import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.phonebook.loading;
const getFilter = (state) => state.phonebook.filter;
const getContacts = (state) => state.phonebook.items;
const getContactsLength = (state) => getContacts(state).length;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

// const getVisibleContacts = (state) => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

export default {
  getLoading,
  getFilter,
  getContacts,
  getVisibleContacts,
  getContactsLength,
};
