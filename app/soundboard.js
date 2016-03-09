var player = require( 'play-sound' )( opts = {} );

module.exports = function () {

	var BASE_PATH = './sounds/';

	return {
		play : function( sound ) {
			player.play( BASE_PATH + sound + '.mp3', function(err){
				if(!err) {
					console.log("... MP3 abgespielt.");
				} else {
					console.error(err);
				}
			});
		}
	}
}();
