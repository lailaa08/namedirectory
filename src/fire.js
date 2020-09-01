import firebase from 'firebase'
var config = {  
  apiKey: "AIzaSyAPrTPcEsqFYZxrOtb1_0p82BsLZK7sgK0",
  authDomain: "fir-trial-dfd23.firebaseapp.com",
  databaseURL: "https://fir-trial-dfd23.firebaseio.com",
  storageBucket: "fir-trial-dfd23.appspot.com",
  messagingSenderId: "160677754503"
};
var fire = firebase.initializeApp(config);
export default fire;