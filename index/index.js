//set countdown date
	var countDownDate = new Date("October 31, 2021 02:37").getTime();

//update count every second
	var x = setInterval(function() {
	
//get today's date
	var now = new Date().getTime();

//get distance between now and target date
	var distance = countDownDate - now;

//calculations for days, hours, minutes, seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / (1000));

//display result in the element with id=countdown
	document.getElementById("countdown").innerHTML = days + " Days " + hours + " Hours " + minutes + " Minues " + seconds + " Seconds ";

//if countdown is finished, display text
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("countdown").innerHTML = "Standby for next launch countdown"
	}
}, 1000);
