// Globals
const sqlite3 = require("sqlite3").verbose();  // use sqlite
const fs = require("fs"); // file system

const dbFileName = "FlashCards.db"
// makes the object that represents the database in our code
const db = new sqlite3.Database(dbFileName);

// Initialize table.
// If the table already exists, causes an error.
// Fix the error by removing or renaming Flashcards.db
const cmdStr = 'CREATE TABLE Flashcards (user INT, source TEXT, target TEXT, seen INT, correct TEXT )'
db.run(cmdStr,tableCreationCallback);

//get input from sql statement and save flashcard 
//const cmdStr = 'INSERT into Flashcards (user, source, target, seen, correct ) VALUES (1, @0, @1, 0, 0)'
//db.run(cmdStr, src, trg, insertCallback);

//get output from database
//return all rows in data base with user 1
//db.all('SELECT * FROM Flashcards WHERE user = 1)', arrayCallback);

//update a row, do NOT omit WHERE, risk changing all columns in all rows
//db.run('UPDATE Flashcards SET seen = 1 WHERE rowid = 1'), errorCallback);

// Always use the callback for database operations and print out any
// error messages you get.
function tableCreationCallback(err) {
	if (err) {
		console.log("Table creation error",err);
	} else {
		console.log("Database created");
		db.close();
	}
}

function insertCallback(err) {
  if ("insertion error: ",err) {
		console.log(err);
	}
}

//arrayData contains an array of objects, each object contains one row
function arrayCallback(err, arrayData){
	if(err) { 
		console.log("error: ", err, "\n");
	} else { 
		console.log("array: ", arrayData, "\n");
	}
}
