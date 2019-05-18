const sqlite3 = require("sqlite3").verbose();  // use sqlite
const fs = require("fs"); // file system

console.log('FlashcardsDB.js code running');


// Create the XHR object.
function createDBRequest(method, url) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);  // call its open method
    return xhr;
}

// Make the actual server request.

function makeDbRequest {
    //need to retrieve source and target to create url
    let searchInput = document.getElementById("save");
    let source = searchInput.value; // need to figure out how to retrieve each value
    let target = searchInput.value;
    let url = "store?english=" + source + "&spanish=" + target;
    let xhr = createDBRequest('GET', url);
    
    if (!xhr) {
        alert('Request not found');
        return;
    }
    
    // Load some functions into response handlers.
    xhr.onload = function() {
        let responseStr = xhr.responseText;  // get the JSON string
        let object = JSON.parse(responseStr);  // turn it into an object
    }
    
    xhr.onerror = function() {
        alert('Woops, there was an error making the request.');
    };
    
    // Actually send request to server
    xhr.send();
}
