import {createAsyncThunk, createSlice, PayloadAction} from  '@reduxjs/toolkit';
import AuthServer from '../../API/AuthServer';

interface IContact {
  id: number,
  name: string,
  telNumber: string
}

interface IContactsState {
  contacts: IContact[]
}

const initialState: IContactsState = {
  contacts: []
}

interface fetchProps {
  username: string
}

export const fetchContactsByUser = createAsyncThunk(
  'contacts/fetchContactsByUser',
  async ({username}: fetchProps) => {
    const response = await AuthServer.getUser({username});
    return await response;
  }
)

export const contactsReducer = createSlice({
  name: 'contactsReducer',
  initialState,
  reducers: {
    removeContact(state, action: PayloadAction<number>) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    addContact(state, action: PayloadAction<IContact>) {
      state.contacts.push(action.payload);
    },
    editContact(state, action: PayloadAction<IContact>) {
      const editedContactIdx = state.contacts.findIndex(contact => contact.id === action.payload.id);
      state.contacts[editedContactIdx] = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContactsByUser.pending, (state, {payload} ) => {
      console.log('pending');
    })
    builder.addCase(fetchContactsByUser.fulfilled, (state, {payload} ) => {
      console.log('fulfilled');
      state.contacts = payload[0].contacts;
    })
    builder.addCase(fetchContactsByUser.rejected, (state, {payload, error} ) => {
      console.log('rejected');
      console.log(error.message);
    })
  },
})

export default contactsReducer.reducer;