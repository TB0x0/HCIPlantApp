var config = {
    apiKey: "AIzaSyBPyrECQrG0sU6CIvvsn7xebBg51vikQEY",
    authDomain: "plantly-hci.firebaseapp.com",
    databaseURL: "https://plantly-hci.firebaseio.com",
    storageBucket: "plantly-hci.appspot.com",
  };
  
  // Initialize your Firebase app
  firebase.initializeApp(config);
  
  // Reference to your entire Firebase database
  var myFirebase = firebase.database().ref();