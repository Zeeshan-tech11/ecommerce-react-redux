import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { configureStore } from './store';
import { Provider } from 'react-redux';
const firebaseConfig = {
  apiKey: "AIzaSyCzm90n9rzHrUccJX8j4dICCPOsELqXkAk",
  authDomain: "ecom-218e5.firebaseapp.com",
  projectId: "ecom-218e5",
  storageBucket: "ecom-218e5.appspot.com",
  messagingSenderId: "1048667368803",
  appId: "1:1048667368803:web:3e1437bf5eca15d0ddb756",
  measurementId: "G-DB58JWSSEV"
};
 const app = initializeApp(firebaseConfig);
export let db=getFirestore(app)
const store=configureStore()
console.log(store.getState());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

