
// as the page loads, call these scripts
$(document).ready(function() {

	$('.btn-group a').on('click', function(e) {
		e.preventDefault();
	});

	// Play/Pause
	$('.play').on('click', function() {
		if($('audio').get(0).paused ) {
			$('audio').trigger('play');
			$(this).addClass('active');
		}else{
			$('audio').trigger('pause');
			$(this).removeClass('active');
		}
	});

	// Stop/Cue
	$('.cue').on('click', function() {
		$('audio').get(0).currentTime = 0;
		$('audio').trigger('pause');
		$('.btn').removeClass('active');
	});

	// Cue points 1-4
	cuePosition1 = false;
	$('.cue-point-1').on('click', function() {
		if(cuePosition1==false) {
			cuePosition1 = $('audio').get(0).currentTime;
		} else {
			$('audio').get(0).currentTime = cuePosition1;
			$('audio').trigger('play');
		}
	});
	cuePosition2 = false;
	$('.cue-point-2').on('click', function() {
		if(cuePosition2==false) {
			cuePosition2 = $('audio').get(0).currentTime;
		} else {
			$('audio').get(0).currentTime = cuePosition2;
			$('audio').trigger('play');
		}
	});
	cuePosition3 = false;
	$('.cue-point-3').on('click', function() {
		if(cuePosition3==false) {
			cuePosition3 = $('audio').get(0).currentTime;
		} else {
			$('audio').get(0).currentTime = cuePosition3;
			$('audio').trigger('play');
		}
	});
	cuePosition4 = false;
	$('.cue-point-4').on('click', function() {
		if(cuePosition4==false) {
			cuePosition4 = $('audio').get(0).currentTime;
		} else {
			$('audio').get(0).currentTime = cuePosition4;
			$('audio').trigger('play');
		}
	});


	// Loop
	$('.loop-in').on('click', function() {
		loopStart = $('audio').get(0).currentTime;
	});
	$('.loop-out').on('click', function() {
		loopEnd = $('audio').get(0).currentTime;
		$('audio').get(0).currentTime = loopStart;
		// alert(loopStart);
		alert($('audio').get(0).currentTime);
		// loop();
	});

	// Pitch deck A
	// $('.pitch-a').on('change', function(){
	//     $('audio').get(0).playbackRate  = parseFloat(this.value / 50);
	// });

	$('.pitch-down').on('click', function(){
		currentSpeed = $('audio').get(0).playbackRate;
	    $('audio').get(0).playbackRate = currentSpeed-0.025;
	});
	$('.pitch-up').on('click', function(){
		currentSpeed = $('audio').get(0).playbackRate;
	    $('audio').get(0).playbackRate = currentSpeed+0.025;
	});
	

	// Volume deck A
	$('.volume-a').on('change', function(){
	    $('audio').get(0).volume = parseFloat(this.value / 10);
	});


    
}); /* end of as page load scripts */
