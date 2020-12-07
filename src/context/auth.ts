import { createContext } from 'react';
import { User } from '../types/storeEntities';
import firebase from 'firebase';

export interface authState extends User {
  firebaseUser: firebase.User;
}

export interface IAuthContext {
  authStatus: authState | null;
  isLoading: boolean;
}

export const AuthContext = createContext<IAuthContext>({
  authStatus: null,
  isLoading: true,
});
