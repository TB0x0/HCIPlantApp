const firebaseConfig = {
    apiKey: "AIzaSyBPyrECQrG0sU6CIvvsn7xebBg51vikQEY",
    authDomain: "plantly-hci.firebaseapp.com",
    databaseURL: "https://plantly-hci.firebaseio.com",
    projectId: "plantly-hci",
    storageBucket: "plantly-hci.appspot.com",
    messagingSenderId: "493354786680",
    appId: "1:493354786680:web:33edebde76104b522f728d"
  };
  
  // Initialize your Firebase app
  firebase.initializeApp(firebaseConfig);
  
  // Reference to your entire Firebase database
  var myFirebase = firebase.database().ref();

  function pushPlant(){
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture : imageUrl
      }, function(error) {
        if (error) {
          // The write failed...
        } else {
          // Data saved successfully!
        }
      });
    }
  }