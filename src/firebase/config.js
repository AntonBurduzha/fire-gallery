import app from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
};

app.initializeApp(firebaseConfig);

const projectStorage = app.storage();
const projectFirestore = app.firestore();
const firebaseTimestamp = app.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, firebaseTimestamp };
