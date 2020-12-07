import firebase from 'firebase';

export interface User extends firebase.firestore.DocumentData {
  name: string;
  token: string;
}
