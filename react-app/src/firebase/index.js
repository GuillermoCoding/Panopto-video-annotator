import firebase from 'firebase/app';
import 'firebase/storage';


var config = {
  apiKey: "AIzaSyBU0Z_zeRHqInBE9hrWsMbQLozt-Zk7lSU",
  authDomain: "video-annotator-937e6.firebaseapp.com",
  databaseURL: "https://video-annotator-937e6.firebaseio.com",
  projectId: "video-annotator-937e6",
  storageBucket: "video-annotator-937e6.appspot.com",
  messagingSenderId: "186242356252"
};

firebase.initializeApp(config);
const storage = firebase.storage();

export {
  storage, firebase as default

}
