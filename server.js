// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data

var jsonData = {count: 12, message: 'hey'};

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static('public'))


app.get('/', function(req, res){
    res.sendFile(__dirname + 'index.html', function(err){
        if(err){
            res.status(500).send(err);
        }
    });
});

app.get('/data', function(req, res){
    res.json(jsonData);
});



app.listen(PORT, function(){
    console.log('Running on port ' + PORT);
});
