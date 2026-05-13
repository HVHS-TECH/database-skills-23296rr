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

let ran = "Ran";
let ranHighScore = "17500";
let ranLowScore = "-1000";

const person = {
  name: {
    first: "John",
    last: "Doe",
  },
  age: 50,
  eyeColor: "blue"
};

function bingbong() {
  console.log("Running bingbong()")
  firebase.database().ref('/').set(
    {
      pinthatball: {
        game1: {
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
            highscore: 20000000,
            lowscore: 20000000,
          },
          Savin: {
            highscore: 1000,
            lowscore: 100000000,
          },
        }
      },
      game2: {
      users: {
        Dima: {
            highscore: 64000,
            lowscore: 3400,
          },
          Toby: {
            highscore: 543000,
            lowscore: 34000,
          },
          Yannik: {
            highscore: 4324000,
            lowscore: 0,
          },
          Jacob: {
            highscore: 27400000,
            lowscore: 27400000,
          },
          Savin: {
            highscore: 160000,
            lowscore: 1000,
          },
      }
      }
      }
    }
  )
}

function bingbongSimple() {
  console.log("Running bingbongSimple()")
  firebase.database().ref('/').set(
    {
      pinthatball: {
        game1: {
        users: {
          Dima: 7000,
          Toby: 50000,
          Yannik: 560000,
          Jacob: 123000,
          Savin: 2134000,
        }
      },
      game2: {
      users: {
          Dima: 27000,
          Toby: 9450000,
          Yannik: 721560000,
          Jacob: 321123000,
          Savin: 572134000,
        }
      }
      }
    }
  )
}

function saferead() {
  console.log("Begun safe reading")
  firebase.database().ref('/pinthatball/game1').once('value', DO_THIS, fb_readError)
}

function listening() {
  console.log("Begun listening")
  firebase.database().ref('/pinthatball/game1/users/Jacob/highscore').on('value', DO_THIS, fb_readError)
}

function DO_THIS(snapshot) {
  var dbData = snapshot.val();
  if (dbData == null) {
    console.log('There was no record when trying to read the message');
  } else {
    console.log(dbData)
  }
}

function fb_readError(error) {
  console.log("There was an error reading the message");
  console.error(error);
}

function complexReadDima() {
  firebase.database().ref('/pinthatball/game1').once('value', fb_displayDimaHighScores, fb_readError)
}

function complexReadJacob() {
  firebase.database().ref('/pinthatball/game1').once('value', fb_displayJacobHighScores, fb_readError)
}

function fb_displayDimaHighScores(snapshot) {
  let Dima = snapshot.val().users.Dima.highscore
  console.log("Dima got "+ Dima + " for their high score" )
}
function fb_displayJacobHighScores(snapshot) {
  let Jacob = snapshot.val().users.Jacob.lowscore
  console.log("Jacob got "+Jacob + " for their low score" )
}

function keysScore(snapshot) {
  let names = Object.keys(person["name"]);
  console.log(person["name"])
}

function allHighScores() {
  firebase.database().ref('/pinthatball/game1/users').once('value', fb_displayAllHighScores, fb_readError)
}

function fb_displayAllHighScores(snapshot) {
  let highScores = Object.keys(snapshot.val())
  var dbData = snapshot.val();
  console.log(dbData)
  for(i = 0; i < highScores.length; i++){
    let key = highScores[i];
    console.log("Player " + i + " is " + key + ", they got a highscore of " + dbData[key]["highscore"] + " and a low score of " + dbData[key]["lowscore"])
  }
}


function orderedScore() {
  firebase.database().ref('/pinthatball/game1/users').orderByValue().once('value', fb_displayOrderedScore, fb_readError)
}

function fb_displayOrderedScore(snapshot) {
  snapshot.forEach(fb_showOneScore)
}

function fb_showOneScore(child) {
  console.log(child.key + " got a score of " + child.val()["highscore"])
}













function read() {
  console.log("Begun reading")
  firebase.database().ref('/pinthatball/users/Jacob/lowscore').once('value', DO_THIS_UNSAFE)
}

function DO_THIS_UNSAFE(snapshot) {
  console.log(snapshot.val())
}

function addRan() {
  firebase.database().ref('/pinthatball/game1/users/' + ran).set(
    {
        highscore: ranHighScore,
        lowscore: ranLowScore,
      }
  )
  console.log('added ran')
}