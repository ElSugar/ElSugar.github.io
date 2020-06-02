import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDhByyeB_MZrv5QLdpGLIBAsIbpSZz6h68",
  authDomain: "converter-currency-74bab.firebaseapp.com",
  databaseURL: "https://converter-currency-74bab.firebaseio.com",
  projectId: "converter-currency-74bab",
  storageBucket: "converter-currency-74bab.appspot.com",
  messagingSenderId: "127766949566",
  appId: "1:127766949566:web:167d88398ee736b3c278ef"
};

const fire = firebase.initializeApp(config);
export default fire;