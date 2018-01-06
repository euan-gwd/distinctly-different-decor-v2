import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAfTOlvuzNltnSEGi-gM_a15hoPk15WaOY',
  authDomain: 'distinctly-different-decor.firebaseapp.com',
  databaseURL: 'https://distinctly-different-decor.firebaseio.com',
  projectId: 'distinctly-different-decor',
  storageBucket: 'distinctly-different-decor.appspot.com',
  messagingSenderId: '898117636789'
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const database = firebase.database();
const storage = firebase.storage();
const messaging = firebase.messaging();

export { auth, database, storage, messaging };
