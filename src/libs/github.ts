import firebase from '@/libs/firebase';

export const scopes = 'notifications';

export function signinWithGithubUsingFirebase() {
  const provider = new firebase.auth.GithubAuthProvider();
  provider.addScope(scopes);

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result);
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
