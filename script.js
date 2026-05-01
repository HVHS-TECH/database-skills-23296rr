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
function bingbong(){
  console.log("Running bingbong()")
  firebase.database().ref('/').set(
    {
      pinthatball: {
        users: {
          Dima: {
            highscore: 70000,
            lowscore: 1000,
          },
          Toby: {
            highscore: 7000,
            lowscore: 0,
          },
          Yannik: {
            highscore: 1000000,
            lowscore: 50000,
          },
          Jacob: {
            hightscore: 20000000,
            lowscore: 20000000,
          },
          Savin: {
            hightscore: 1000,
            lowscore: 100000000,
          },
        }
      }
    }
  )
}

function read() {
  console.log("Begun reading")
  firebase.database().ref('/pinthatball/users/jacob/lowscore').once('value', DO_THIS_UNSAFE)
}

function saferead() {
  console.log("Begun safe reading")
  firebase.database().ref('/bingbong/pinthatball/users/jacob/lowscore').once('value', DO_THIS, fb_readError)
}

function listening() {
  console.log("Begun listening")
  firebase.database().ref('/bingbong').on('value', DO_THIS, fb_readError)
}

function DO_THIS_UNSAFE(snapshot) {
  console.log(snapshot.val())
}

function DO_THIS(snapshot) {
  var dbData = snapshot.val();
  if (dbData == null) {
    console.log('There was no record when trying to read the message');
  } else {
    console.log("The message is: " + dbData)
  }
}

function fb_readError(error) {
  console.log("There was an error reading the message");
  console.error(error);
}