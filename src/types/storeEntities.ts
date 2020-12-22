import firebase from 'firebase';

export interface User extends firebase.firestore.DocumentData {
  githubId: string;
  name: string;
  token: string;
}
