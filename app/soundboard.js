var player = require( 'play-sound' )( opts = {} );

module.exports = function () {

	var BASE_PATH = './sounds/';

	function play( filepath ) {
		player.play( BASE_PATH + filepath, function(err){
			if(err != "null") {
				console.log("... MP3 abgespielt.");
			} else {
				console.error(err);
			}
		});
	}

	return {
		initsound: function() {
			play( 'initialize.mp3' );
		},
		angry : function() {
			play( 'angry.mp3' );
		},
		alarm : function() {
			play( 'alarm.mp3' );
		},
		tumdedum : function() {
			play( 'tum_de_dum.mp3' );
		},
		error : function() {
			play( 'error.mp3' );
		},
		angry : function() {
			play( 'angry.mp3' );
		},
		info : function() {
			play( 'info.mp3' );
		},
		process : function() {
			play( 'process.mp3' );
		},
		play_cuckoo : function() {
			play( 'cuckoo.mp3' );
		},
		play_surprise : function() {
			play( 'surprise.mp3' );
		},
		play_whistle : function() {
			play( 'whistle.mp3' );
		},
		play_wow : function() {
			play( 'wow.mp3' );
		},
		play_quak : function() {
			play( 'zaap.mp3' );
		}
	}
}();
