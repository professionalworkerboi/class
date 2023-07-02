import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDsIT-FAhVHWIHgahc7Q_HUCczmS32GXwU",
  authDomain: "food-recipe-159ce.firebaseapp.com",
  projectId: "food-recipe-159ce",
  storageBucket: "food-recipe-159ce.appspot.com",
  messagingSenderId: "183751859804",
  appId: "1:183751859804:web:e0d60e591abe0af64ad099"
};

const app = initializeApp(firebaseConfig);
export default firebase.firestore();