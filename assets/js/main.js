let canvas   = null;
let ctx      = null;
let ghost1   = null;
let ghost2   = null;
let keysDown = null;
let directions = null; 

window.onload = function() {
	canvas = document.getElementById('game');
	ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	keysDown = [];
	directions = { right:0, left:1, up:2, down:3 }; 

	const oneThirdCanvas = convertToInteger(canvas.width/3);
	const twoThirdCanvas = convertToInteger((canvas.width/3)*2);
	const halfCanvas     = convertToInteger(canvas.height/2);

	ghost1 = new Ghost( oneThirdCanvas, halfCanvas, 'ghost1.png', directions.right, {left:65, up:87, right:68, down:83});
	ghost2 = new Ghost( twoThirdCanvas, halfCanvas, 'ghost2.png', directions.left,  {left:37, up:38, right:39, down:40});

	window.addEventListener("keydown", function(e) {
		keysDown[e.keyCode] = true;
	});

	window.addEventListener("keyup", function(e) {
		keysDown[e.keyCode] = false;
	});

	setInterval(function() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		
		ghost1.checkInput();
		ghost2.checkInput();

		ghost1.update();
		ghost2.update();

		ghost1.render(ctx);
		ghost2.render(ctx);
	}, 1000/60);
}