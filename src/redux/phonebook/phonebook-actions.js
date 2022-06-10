/* eslint-disable import/no-anonymous-default-export */
import { createAction } from "@reduxjs/toolkit";

export const fetchContactsRequest = createAction(
  "phonebook/fetchContactsRequest"
);
export const fetchContactsSuccess = createAction(
  "phonebook/fetchContactsSucces"
);
export const fetchContactsError = createAction("phonebook/fetchContactsError");

export const addContactRequest = createAction("phonebook/addContactRequest");
export const addContactSuccess = createAction("phonebook/addContactSucces");
export const addContactError = createAction("phonebook/addContactError");

export const deleteContact = createAction("phonebook/deleteContact");

export const deleteContactRequest = createAction(
  "phonebook/deleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "phonebook/deleteContactSucces"
);
export const deleteContactError = createAction("phonebook/deleteContactError");

export const changeFilter = createAction("phonebook/changeFilter");
