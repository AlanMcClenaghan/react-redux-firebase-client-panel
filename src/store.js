import { createStore, combineReducers, compose } from "redux";
import firebase, { firestore } from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

import apiKey from "./api-key";

// Reducers
import notifyReducer from "./reducers/notifyReducer";

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "react-client-panel-fbbb4.firebaseapp.com",
  databaseURL: "https://react-client-panel-fbbb4.firebaseio.com",
  projectId: "react-client-panel-fbbb4",
  storageBucket: "react-client-panel-fbbb4.appspot.com",
  messagingSenderId: "1082811958930",
  appId: "1:1082811958930:web:a1b5bd6ed489e137"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize firestore
// const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: notifyReducer
});

// Create store with reducers and initial state
const initialState = {};

// Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
