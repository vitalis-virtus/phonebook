/* eslint-disable no-unused-expressions */
import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
// import * as actions from "./phonebook-actions";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  // deleteContact,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  changeFilter,
} from "./phonebook-actions";

const phonebookInitialState = {
  contacts: {
    items: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  },
};

const alertMessage = (name) => {
  alert(`${name} is already in contacts`);
};

const contactsReducer = createReducer(phonebookInitialState.contacts.items, {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => {
    const findNameMatches = state.find(
      (contact) => contact.name === payload.name
    );
    if (findNameMatches) {
      alertMessage(findNameMatches.name);
    } else {
      return [...state, payload];
    }
  },
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const filterReducer = createReducer(phonebookInitialState.contacts.filter, {
  [changeFilter]: (state, { payload }) => {
    return payload ? payload : "";
  },
});

export default combineReducers({
  items: contactsReducer,
  filter: filterReducer,
  loading,
});
