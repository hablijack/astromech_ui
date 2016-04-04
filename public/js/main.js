$( document ).ready( function() {

	$('#fullpage').fullpage({
		controlArrows: false,
		anchors: ['action'],
		continuousVertical: true,
		afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
			if(slideAnchor == 'control'){
				$("#camera").fadeIn("slow");
				$("#head_movement_control").fadeIn("slow");
				$("#movement_joystick_zone").fadeIn("slow");
				$("#eye_joystick_zone").fadeIn("slow");
			}
		}
	});

	$("nav ul li").click(function() {
		$("#camera").hide();
		$("#head_movement_control").hide();
		$("#movement_joystick_zone").hide();
		$("#eye_joystick_zone").hide();
	});

	var movementJoystick = nipplejs.create({
		zone: document.getElementById('movement_joystick_zone'),
		color: 'red'
	});

	var eyeJoystick = nipplejs.create({
		zone: document.getElementById('eye_joystick_zone'),
		color: 'green'
	});

	$('.soundbtn').click( function() {
		$.ajax({
			type: 'POST',
			url: '/play-sound',
			data: 'sound_name=' + $(this).val()
		});
	});
});
