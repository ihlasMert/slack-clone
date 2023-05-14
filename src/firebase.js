import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyADwlhjEw06gMd-hdDFC96QZqIDbdvcIA0",
  authDomain: "slack-clone-d8d91.firebaseapp.com",
  projectId: "slack-clone-d8d91",
  storageBucket: "slack-clone-d8d91.appspot.com",
  messagingSenderId: "839392172700",
  appId: "1:839392172700:web:cf601b93445eb9a2b5eb59",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
