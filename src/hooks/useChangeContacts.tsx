import {  useAppSelector, useAppDispatch } from './../hooks/redux';
import { useEffect } from 'react';
import { postContactsToServer} from '../store/reducers/contactsReducer';


export const useChangeContacts = () => {
  const {username} = useAppSelector(state => state.authReducer);
  const {contacts} = useAppSelector(state => state.contactsReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(postContactsToServer({username, contacts}))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contacts])
}