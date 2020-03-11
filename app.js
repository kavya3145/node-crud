var express = require('express');
const employee = require('./routes/employees')
const app = express();

const config = require('./config/mongoose.js');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(config.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use('employees',employee);

const PORT = process.env.PORT || 8080;
app.listen(PORT,() => {console.log(`server is listening on ${PORT}`)});
