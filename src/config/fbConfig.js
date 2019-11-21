import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBtTOrsIfW3TZtbIMQeB4-WRoyFz4SIW2c",
  authDomain: "redgate-vineyard-db904.firebaseapp.com",
  databaseURL: "https://redgate-vineyard-db904.firebaseio.com",
  projectId: "redgate-vineyard-db904",
  storageBucket: "redgate-vineyard-db904.appspot.com",
  messagingSenderId: "552346875576",
  appId: "1:552346875576:web:459a9161ea97065911e64d",
  measurementId: "G-DWVRE1NXBN"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});
