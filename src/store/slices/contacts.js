import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',

  initialState: [],

  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },

    updateContact: (state, action) => {
      const {
        id,
        firstName,
        lastName,
        phoneNumber,
        position
      } = action.payload;

      const existingContact = state.find(contact => contact.id === id);
      if (existingContact) {
        existingContact.firstName = firstName;
        existingContact.lastName = lastName;
        existingContact.phoneNumber = phoneNumber;
        existingContact.position = position;
      }
    }
  }

});

export const { addContact, updateContact } = contactsSlice.actions;
export default contactsSlice.reducer;
