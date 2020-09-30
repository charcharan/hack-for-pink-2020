var express = require('express')
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
// var apiRouting = require('./api/api');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});

app.use(cors());
middleWare =  function(req,res,next){

	next();
}
// app.use("/api", apiRouting);
app.get('/', (req, res) => {
    res.send('I am running...');
});
app.get('/flamingo', (req, res) => {
    res.sendFile('/dist/index.html');
});