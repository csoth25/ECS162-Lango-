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
