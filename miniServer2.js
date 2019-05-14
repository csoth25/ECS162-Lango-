const express = require('express')
const port = // put your port number here

function handler(req, res) {
    let url = req.url;
    res.send('You requested '+url);
}

const app = express()
app.get('/*', handler )

app.listen(port, function (){console.log('Listening...');} )
