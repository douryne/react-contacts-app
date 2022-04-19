import {createSlice, PayloadAction} from  '@reduxjs/toolkit';

interface IContact {
  id: number,
  name: string,
  telNumber: string
}

interface IContactsState {
  contacts: IContact[]
}

const initialState: IContactsState = {
  contacts: [
    {id: 1, name: 'Василий', telNumber: '1111111'},
    {id: 2, name: 'Андрей', telNumber: '1111111'},
    {id: 3, name: 'Глеб', telNumber: '1111111'}
  ]
}

export const contactsReducer = createSlice({
  name: 'contactsReducer',
  initialState,
  reducers: {
    removeContact(state, action: PayloadAction<number>) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    addContact(state, action: PayloadAction<IContact>) {
      state.contacts.push(action.payload);
    }
  }
})

export default contactsReducer.reducer;