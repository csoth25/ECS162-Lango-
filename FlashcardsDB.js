const sqlite3 = require("sqlite3").verbose();  // use sqlite
const fs = require("fs"); // file system

const dbFileName = "FlashCards.db"
// makes the object that represents the database in our code
const db = new sqlite3.Database(dbFileName);

console.log('FlashcardsDB.js code running');

//get input from sql statement and save flashcard onclick
function storeinDB(){
  console.log("inside storeinDB function");
  const cmdStr = 'INSERT into Flashcards (user, source, target, seen, correct ) VALUES (1, @0, @1, 0, 0)'
  db.run(cmdStr, src, trg, insertCallback);
}

function insertCallback(err) {
  if ("insertion error: ",err) {
    console.log(err);
  } else {
    console.log("saved!");
  }
}

//not sure what to do with the below features yet
//get output from database
//to return all rows in data base with user 1
/*
db.all('SELECT * FROM Flashcards WHERE user = 1)', arrayCallback);

//arrayData contains an array of objects, each object contains one row
function arrayCallback(err, arrayData){
  if(err) {
    console.log("error: ", err, "\n");
  } else {
    console.log("array: ", arrayData, "\n");
  }
}

//update a row, do NOT omit WHERE, risk changing all columns in all rows
db.run('UPDATE Flashcards SET seen = 1 WHERE rowid = 1'), errorCallback);

*/
