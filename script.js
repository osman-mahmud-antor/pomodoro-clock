$(document).ready(function () {
	var buzzer = $('#buzzer')[0];
	var count = parseInt($('#num').html());

	var breakTime = parseInt($('#breaknum').html());
	console.log(count);
	$('#reset').hide();

	$('#start').click(function(){
		var counter = setInterval(timer,1000);

		function timer() {
			$('#start,#minus5clock,#add5clock,#minus5break,#add5break,#breaknum,.title1,.title2').hide();
			$('#timeType').html('Session-Time:');
			count-=1;



			if (count===0) {
				buzzer.play();
				clearInterval(counter);
			}
			$('#num').html(count);
		}
	});


	$('#minus5clock').click(function(){
		if(count>5){
			count -= 5;
			$("#num").html(count);
		}
	});



	$('#add5clock').click(function(){
		
		count += 5;
		$("#num").html(count);
	});



	$('#minus5break').click(function(){
		if(breakTime>5){
			breakTime -= 5;
			$("#breaknum").html(breakTime);
		}
	});



	$('#add5break').click(function(){
		
		breakTime += 5;
		$("#breaknum").html(breakTime);
	});
});