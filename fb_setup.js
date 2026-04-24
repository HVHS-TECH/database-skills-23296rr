/**************************************************************/
// fb_initialise()
// Initialize firebase, connect to the Firebase project.
// 
// Find the config data in the Firebase console. Cog wheel > Project Settings > General > Your Apps > SDK setup and configuration > Config
//
// Input:  n/a
// Return: n/a
/**************************************************************/
  
  const firebaseConfig = {
    apiKey: "AIzaSyCB9Br_Jb9KqYC5mCiV88_Y--I677PEGtc",
    authDomain: "pin-that-ball-3fc56.firebaseapp.com",
    databaseURL: "https://pin-that-ball-3fc56-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "pin-that-ball-3fc56",
    storageBucket: "pin-that-ball-3fc56.firebasestorage.app",
    messagingSenderId: "829901276897",
    appId: "1:829901276897:web:9cd58edd48463c763259a0",
    measurementId: "G-Z51N0FS158"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // This log prints the firebase object to the console to show that it is working.
  // As soon as you have the script working, delete this log.
  console.log("Firebase initialize finished:");
  console.log(firebase);
