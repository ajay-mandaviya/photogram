// import firebase from "firebase/app";
import firebase from 'firebase/app'
import "firebase/storage";
import "firebase/firestore";
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyBLbFy7g5UmOUkj1UEfjKTKIwWHwCdMs5U",
    authDomain: "photo-gram-959ed.firebaseapp.com",
    projectId: "photo-gram-959ed",
    storageBucket: "photo-gram-959ed.appspot.com",
    messagingSenderId: "666576714110",
    appId: "1:666576714110:web:5822bf2e89f3130f045b2f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const projectAuth = firebase.auth();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage , projectFirestore , projectAuth , timestamp};

//   rules_version = '2';
// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }