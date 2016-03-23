var figlet = require( 'figlet' );

module.exports = function () {

	var figletConfig = {
		font: 'Standard',
		horizontalLayout: 'default',
		verticalLayout: 'default'
	};

	return {
		write : function(text) {
			figlet.text( text, figletConfig, function(err, data) {
				console.log(data);
			});
		}
	}
}();
