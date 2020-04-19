import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyBWqgoUE_IGzhyxNkMOGC4lpmPQcK-C3PA",
  authDomain: "invoicer-dev.firebaseapp.com",
  databaseURL: "https://invoicer-dev.firebaseio.com",
  projectId: "invoicer-dev",
  storageBucket: "invoicer-dev.appspot.com",
  messagingSenderId: "576241264595",
  appId: "1:576241264595:web:5ea395413189ba0de77126",
};

class Firebase {
  firestore: firebase.firestore.Firestore;

  // private collection: firebase.firestore.CollectionReference;

  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    this.firestore = firebase.firestore();
  }
  public invoices = () => this.firestore.collection("/invoices");
}
export default Firebase;
