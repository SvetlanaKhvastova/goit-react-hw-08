// toolkit -----------------------------------------------------
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, getNameFilter } from "./actions";

const initialState = {
  contacts: {
    items: [
      {
        id: "id-1",
        name: "Rosie Simpson",
        number: "459-12-56",
      },
      {
        id: "id-2",
        name: "Hermione Kline",
        number: "443-89-12",
      },
      {
        id: "id-3",
        name: "Eden Clements",
        number: "645-17-79",
      },
      {
        id: "id-4",
        name: "Annie Copeland",
        number: "227-91-26",
      },
    ],
  },
  filters: {
    name: "",
  },
};

export const contactsReducer = createReducer(initialState.contacts, (builder) => {
  builder
    .addCase(addContact, (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    })
    .addCase(deleteContact, (state, action) => {
      return {
        ...state,
        items: [...state.items.filter((contact) => contact.id !== action.payload)],
      };
    });
});

export const filtersReducer = createReducer(initialState.filters, (builder) => {
  builder.addCase(getNameFilter, (state, action) => {
    return {
      ...state,
      name: action.payload,
    };
  });
});

// redux -----------------------------------------------------
// import { combineReducers } from "@reduxjs/toolkit";

// const initialState = {
//   contacts: {
//     items: [
//       {
//         id: "id-1",
//         name: "Rosie Simpson",
//         number: "459-12-56",
//       },
//       {
//         id: "id-2",
//         name: "Hermione Kline",
//         number: "443-89-12",
//       },
//       {
//         id: "id-3",
//         name: "Eden Clements",
//         number: "645-17-79",
//       },
//       {
//         id: "id-4",
//         name: "Annie Copeland",
//         number: "227-91-26",
//       },
//     ],
//   },
//   filters: {
//     name: "",
//   },
// };

// const contactsReducer = (state = initialState.contacts, action) => {
//   switch (action.type) {
//     case "contacts/addContact": {
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     }
//     case "contacts/deleteContacts": {
//       return {
//         ...state,
//         items: [...state.items.filter((contact) => contact.id !== action.payload)],
//       };
//     }
//     default:
//       return state;
//   }
// };

// const filtersReducer = (state = initialState.filters, action) => {
//   switch (action.type) {
//     case "filters/getNameFilter":
//       return {
//         ...state,
//         name: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filters: filtersReducer,
// });
