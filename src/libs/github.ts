import firebase from '@/libs/firebase';
import { User } from '../types/storeEntities';
import { authState } from '../context/auth';

export const scopes = 'notifications';

export function signinWithGithubUsingFirebase(): void {
  const provider = new firebase.auth.GithubAuthProvider();
  provider.addScope(scopes);

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      if (result && result.credential && result.user && result.additionalUserInfo?.profile) {
        // @ts-ignore AuthCredential has accessToken but not defines in type
        const token = result.credential.accessToken;
        const user = result.user;

        return firebase.firestore().collection('users').doc(result.user.uid).set({
          name: user.displayName,
          token: token,
        });
      } else {
        throw 'user is not exsitance';
      }
    });
}

export function onChangeAuthState(callback: (user: authState) => void): void {
  firebase.auth().onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
      return firebase
        .firestore()
        .collection('users')
        .doc(firebaseUser.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            // @ts-ignore
            const data: User = doc.data();
            callback({
              firebaseUser,
              ...data,
            });
          }
        });
    } else {
      return null;
    }
  });
}
