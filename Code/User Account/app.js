const express = require('express');
const path = require('path');
const app = express();
const router = require('./router')
var bodyParser = require('body-parser');
var session = require('express-session');
const http = require('http');

app.use('/public/',express.static(path.join(__dirname,'./public/')));
app.use('/node_modules/',express.static(path.join(__dirname,'./node_modules/')));

app.engine('html',require('express-art-template'));
app.set('views',path.join(__dirname,'./views/'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))


app.use(router);

http.createServer(app).listen(5000,'0.0.0.0',function(){
    console.log('running...');
})