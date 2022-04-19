import {createSlice, PayloadAction} from '@reduxjs/toolkit';


interface IAuthState {
  isAuth: boolean
}

const initialState: IAuthState = {
  isAuth: false
}

export const authReducer = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    toggleAuthState(state, action: PayloadAction<boolean>) {
      console.log(action.payload)
      state.isAuth = action.payload;
    }
  }
})

export default authReducer.reducer;