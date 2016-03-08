// set up ======================================================================
var express = require( 'express' );
var compression = require( 'compression' );
var morgan = require( 'morgan' );
var bodyParser = require( 'body-parser' );
var methodOverride = require( 'method-override' );
var figlet = require( 'figlet' );

// own modules: 
var soundboard = require( './app/soundboard.js');
var recorder = require( './app/recorder.js' );

// print image =================================================================

var figletConfig = {
	font: 'Standard',
	horizontalLayout: 'default',
	verticalLayout: 'default'
};

figlet.text( '==:: R2B9 ::==', figletConfig, function(err, data) {
	console.log(data);
});

// configuration ===============================================================
var app = express(); 
var port = process.env.PORT || 8080;
var oneDay = 84600000;
app.use( '/js', express.static( __dirname + '/public/js', { maxAge: oneDay }) );
app.use( '/img', express.static( __dirname + '/public/img', { maxAge: oneDay }) );
app.use( '/font', express.static( __dirname + '/public/font', { maxAge: oneDay }) );
app.use( '/css', express.static( __dirname + '/public/css', { maxAge: oneDay }) );

// log every request to the console
app.use( morgan( 'dev' ) );
// parse application/x-www-form-urlencoded
app.use( bodyParser.urlencoded( { 'extended': 'true' } ) );
// parse application/json
app.use( bodyParser.json() );
// parse application/vnd.api+json as json
app.use( bodyParser.json( { type: 'application/vnd.api+json' } ) );
// override with the X-HTTP-Method-Override header in the request
app.use( methodOverride( 'X-HTTP-Method-Override' ) );
// compress responses
app.use( compression() );

// routes ======================================================================
require('./app/routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);

soundboard.initsound();

recorder().record(2000);




