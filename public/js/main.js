$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['action'],
		autoScrolling: false,
		controlArrows: false,
		css3: true,
		fitToSection: true
	});


	var dynamic = nipplejs.create({
        zone: document.getElementById('movement_joystick_zone'),
        color: 'blue'
    });
	
});
