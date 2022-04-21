import {createSlice, PayloadAction} from '@reduxjs/toolkit';


interface IAuthState {
  isAuth: boolean,
  username: string
}

const initialState: IAuthState = {
  isAuth: false,
  username: ''
}

export const authReducer = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    toggleAuthState(state, action: PayloadAction<IAuthState>) {
      state.isAuth = action.payload.isAuth;
      state.username = action.payload.username;
    }
  }
})

export default authReducer.reducer;