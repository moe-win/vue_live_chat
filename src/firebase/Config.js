import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCJDliAsEl7Ezkb5Tut5mSKoW3lOUPMU9U",
    authDomain: "vue-first-project-45fd0.firebaseapp.com",
    projectId: "vue-first-project-45fd0",
    storageBucket: "vue-first-project-45fd0.appspot.com",
    messagingSenderId: "538450258097",
    appId: "1:538450258097:web:6c808af11e8fe767b95a90"
  };

  firebase.initializeApp(firebaseConfig);
  let db=firebase.firestore();
  let auth=firebase.auth();
  let timeStamp=firebase.firestore.FieldValue.serverTimestamp;
  export {db,timeStamp,auth}
