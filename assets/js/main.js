let canvas   = null;
let ctx      = null;

let car      = null;
let carList  = null;

window.onload = function() {
	canvas = document.getElementById('game');
	ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	

	setInterval(function() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		console.log('ik herhaal dingen, 60 keer per seconde!');
	}, 1000/60);
}