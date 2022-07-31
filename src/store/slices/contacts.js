import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',

  initialState: [
    {
      id: 1,
      name: 'Vlad',
      surname: 'Trygub',
      phoneNumber: '123123123',
      position: 'developer'
    },
    {
      id: 2,
      name: 'Andrey',
      surname: 'Trygub',
      phoneNumber: '123123123',
      position: 'developer'
    },
    {
      id: 3,
      name: 'Ksenia',
      surname: 'Trygub',
      phoneNumber: '123123123',
      position: 'developer'
    },
    {
      id: 4,
      name: 'Ilona',
      surname: 'Trygub',
      phoneNumber: '123123123',
      position: 'developer'
    },
  ],

  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addContact } = contactsSlice.actions;
export default contactsSlice.reducer;
