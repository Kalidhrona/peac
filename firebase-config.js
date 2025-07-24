// PeaceChat Firebase Config

const firebaseConfig = {
  apiKey: "AIzaSyCrBmQoyXoNIu03o73wOAhBP3pPg57PjGY",
  authDomain: "peace-a97c6.firebaseapp.com",
  projectId: "peace-a97c6",
  storageBucket: "peace-a97c6.firebasestorage.app",
  messagingSenderId: "107462595309",
  appId: "1:107462595309:web:616628b59e09692370f2e4",
  databaseURL: "https://peace-a97c6-default-rtdb.firebaseio.com"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
