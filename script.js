/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");

/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/
function helloWorld(){
  console.log("Running helloWorld()")
  firebase.database().ref('/').set(
    {
      message: 'bye'
    }
  )
}

function read() {
  console.log("Begun reading")
  firebase.database().ref('/message').once('value', DO_THIS)
}
  
function DO_THIS(snapshot) {
  console.log("do this is doing this")
  var dbData = snapshot.val();
  if (dbData == null) {
    console.log('There was no record when trying to read the message');
  } else {
    console.log("The message is: " + dbData)
  }
}