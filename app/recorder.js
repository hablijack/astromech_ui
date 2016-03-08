var Sound = require('node-arecord');

module.exports = function () {

	var sound = new Sound({
		debug: false,
		destination_folder: './records',
		filename: 'record.wav',
		alsa_format: 'dat',
		alsa_device: 'plughw:1,0'
	});

	function record() {
		sound.record();
	}

	function stop() {
		sound.stop();
	}

	return {
		record : function(ms) {
			record();
			setTimeout(function () {
				stop();
			}, ms);
		}
	}
};
