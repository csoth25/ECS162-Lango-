"strict mode"
const express = require('express')
const port = 52547

//API setup
const APIrequest = require('request');
const http = require('http');

const APIkey = "AIzaSyDX-JBLv3lKySRgBgMF0MQkFntTmR6VOwE";  // ADD API KEY HERE
const url = "https://translation.googleapis.com/language/translate/v2?key="+APIkey

//Database setup
const sqlite3 = require("sqlite3").verbose();  // use sqlite
const fs = require("fs"); // file system

const dbFileName = "FlashCards.db"
const db = new sqlite3.Database(dbFileName);


function queryHandler(req, res, next) {
    let qObj = req.query;
    //console.log(qObj);
    
    if (qObj.word != undefined) {
      //res.json( {"word" : qObj.word} );

    // An object containing the data expressing the query to the translate API.
    // Below, gets stringified and put into the body of an HTTP PUT request.
    let requestObject =
        {
        "source": "en",
        "target": "es",
        "q": [
            " "
        ]
        }

    requestObject.q[0] = qObj.word;
    console.log("English phrase: ", requestObject.q[0]);

    // The call that makes a request to the API
    // Uses the Node request module, which packs up and sends off
    // an HTTP message containing the request to the API server
    APIrequest(
        { // HTTP header stuff
            url: url,
            method: "POST",
            headers: {"content-type": "application/json"},
            // will turn the given object into JSON
            json: requestObject	},
          // callback function for API request
          APIcallback
        );
      // callback function, called when data is received from API
      function APIcallback(err, APIresHead, APIresBody) {
        // gets three objects as input
        if ((err) || (APIresHead.statusCode != 200)) {
          // API is not working
          console.log("Got API error");
          console.log(APIresBody);
        } else {
          if (APIresHead.error) {
            // API worked but is not giving you data
            console.log(APIresHead.error);
          } else {
            var text = APIresBody.data.translations[0].translatedText;
            console.log("In Spanish: ", text);
            //output to the browser
            res.json( {"word" : text} );
            
            console.log("\n\nJSON was:");
            console.log(JSON.stringify(APIresBody, undefined, 2));
            // print it out as a string, nicely formatted
          }
        }
      } // end callback function
    }
    else {
      next();
    }
}


/*Teach server to respond to AJAX queries of the form:
http://server162.site:52547/store?english=hi&spanish=hola*/

function storeHandler(req, res, next){
    let qObj = req.store;
    
    //query URL
    //source: https://www.w3schools.com/nodejs/nodejs_url.asp
    const myurl = require('url');
    const adr = req.url;
    const q = myurl.parse(adr, true);
    var qdata = q.query;
    
    if (qdata.english!= undefined && qdata.spanish != undefined){
        //Return a HTTP response with an empty body, to let the browswer know everything went well.
        res.json( {} );
        var source = qdata.english;
        var target = qdata.spanish;
        
        
        //currently code proceeds to store immediately
        //next step: set up onclick in FlashcardsDB.js
        //have the browser send the store request when the user hits the "Save" button.
        const cmdStr = 'INSERT into Flashcards (user, source, target, seen, correct ) VALUES (1, @0, @1, 0, 0)'
        db.run(cmdStr, source, target, insertCallback);
    }
}

function insertCallback(err) {
    if ("insertion error: ",err) {
        console.log(err);
    } else {
        console.log("flashcard saved!");
        
        /*for debugging
        get output from database
        return all rows in data base with user 1*/
        db.all(('SELECT * FROM Flashcards WHERE user = 1'), arrayCallback);
    }
}


//arrayData contains an array of objects, each object contains one row
function arrayCallback(err, arrayData){
    if(err) {
        console.log("error: ", err, "\n");
    } else {
        console.log("array: ", arrayData, "\n");
        dumpDB();
        //use below to delete all data from DB when needed
        //db.all('DELETE FROM Flashcards');
    }
}

/*
 //to update a row, do NOT omit WHERE, risk changing all columns in all rows
 db.run('UPDATE Flashcards SET seen = 1 WHERE rowid = 1'), errorCallback);
 */



//To test program, print out the whole database
dumpDB() {
    db.all ( 'SELECT * FROM flashcards', dataCallback);
    function dataCallback( err, data ) {console.log(data)}
}



function fileNotFound(req, res) {
    let url = req.url;
    res.type('text/plain');
    res.status(404);
    res.send('Cannot find '+url);
    }

// put together the server pipeline
const app = express()
app.use(express.static('public'));  // can I find a static file? 
app.get('/query', queryHandler);   // if not, is it a valid query?
app.get('/store', storeHandler);
app.use( fileNotFound );            // otherwise not found
app.listen(port, function (){console.log('Listening...');} )
