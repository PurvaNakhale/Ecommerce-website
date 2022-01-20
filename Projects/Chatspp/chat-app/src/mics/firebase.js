import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyBYlqQkte9nmTQccPNWGev0XVAaPw4pUz4',
  authDomain: 'chat-web-app-98e9b.firebaseapp.com',
  databaseURL: 'https://chat-web-app-98e9b-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-98e9b',
  storageBucket: 'chat-web-app-98e9b.appspot.com',
  messagingSenderId: '971386595376',
  appId: '1:971386595376:web:0e17a2f109304c4d3be5f5',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
