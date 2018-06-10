import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
  apiKey: "AIzaSyDUPc2at3SDgbhC0UrjJVTRvOvSUMeT7Pg",
  authDomain: "smoothies-99a52.firebaseapp.com",
  databaseURL: "https://smoothies-99a52.firebaseio.com",
  projectId: "smoothies-99a52",
  storageBucket: "smoothies-99a52.appspot.com",
  messagingSenderId: "185959016167"
};

const firebaseApp = firebase.initializeApp(config);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()


