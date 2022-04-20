import {useSelector, useDispatch, TypedUseSelectorHook} from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { authReducer } from '../store/reducers/authReducer';
import { contactsReducer } from '../store/reducers/contactsReducer';
import { bindActionCreators } from 'redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAction = () => {
  const dispatch = useDispatch();
  return {
    authReducer: bindActionCreators(authReducer.actions, dispatch),
    contactsReducer: bindActionCreators(contactsReducer.actions, dispatch)
  }
};
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;