// toolkit -----------------------------------------------------
import { createAction, nanoid } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/addContact", (newContact) => {
  return {
    payload: {
      id: nanoid(),
      ...newContact,
    },
  };
});

export const deleteContact = createAction("contacts/deleteContacts", (contactId) => {
  return {
    payload: contactId,
  };
});

export const getNameFilter = createAction("filters/getNameFilter", (txt) => {
  return {
    payload: txt,
  };
});

// redux -----------------------------------------------------
// import { nanoid } from "@reduxjs/toolkit";

// export const addContact = (newContact) => {
//   return {
//     type: "contacts/addContact",
//     payload: {
//       id: nanoid(),
//       ...newContact,
//     },
//   };
// };

// export const deleteContact = (contactId) => {
//   return {
//     type: "contacts/deleteContacts",
//     payload: contactId,
//   };
// };

// export const getNameFilter = (txt) => {
//   return {
//     type: "filters/getNameFilter",
//     payload: txt,
//   };
// };
