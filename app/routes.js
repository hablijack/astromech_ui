var path = require( 'path' );
var soundboard = require( './soundboard.js');
var recorder = require( './recorder.js' );


module.exports = function ( app ) {
	app.get( '/', function( req, res ) {
		res.sendFile( path.resolve( 'public/index.html' ) );
	});

	app.get( '/favicon.ico', function( req, res ) {
		res.sendFile( path.resolve( 'public/img/favicon.ico' ) );
	});

	app.post( '/movement', function( req, res ) {
		res.json( { 'job' : 'accepted' } );
	});

	app.post( '/play-sound', function( req, res ) {
		var soundName = req.body.sound_name;
		soundboard.play( soundName );
		res.json( { 'job' : 'accepted' } ); 
	});

	app.post( '/record-sound', function( req, res ) {
		var duration = req.body.duration;
		recorder().record( duration );
		res.json( { 'job' : 'accepted' } ); 
	});
};
