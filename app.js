const config = require('config');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const   { engine } = require('express-handlebars');


//define default application configuration parameters
const appPort = config.get('app.port');
const dbUrl = config.get('db.name') + '://' + config.get('db.host') + ':' + config.get('db.port') + '/' + config.get('db.collection');


//define the application instance
const app = express();


//configure express
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static( path.join(__dirname,'public')));

//configure the Mongoose ODB
mongoose.connect( dbUrl, { useNewUrlParser: true } ).then(response => {
    console.log("Mongoose Object Database connected sucessfully.")
    console.log("DbUrl:"+ dbUrl);
}).catch(_err => {
    console.log("Mongoose Database connection failed.");
});

//Views settings
app.engine('handlebars', engine({
    extname: '.hbs', 
    defaultLayout: 'default',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials'
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

//Set the default site directory
app.use(express.static('public'));

//Routes
const defaultRoutes = require('./routes/defaultRoutes');
const { login } = require('./routes/login');
const { admin } = require('./routes/admin');

app.use('/', defaultRoutes);
app.use('/login', defaultRoutes.use(login));
app.use('/admin', defaultRoutes.use(admin));


//create the Server and start it listening on a given port
app.listen(appPort, () => {
    console.log('Server running on port: ' + appPort);
});