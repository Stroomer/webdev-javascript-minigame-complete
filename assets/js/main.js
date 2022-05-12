let canvas  = null;
let context = null;

window.onload = function() {
	canvas  = document.getElementById('game');
	context = canvas.getContext('2d');
	context.clearRect(0, 0, canvas.width, canvas.height);

	generateMondriaanPainting(canvas.width, canvas.height);
}

function generateMondriaanPainting(width, height)
{
	const iterations = 500;
	const colors     = ['red', 'blue', 'yellow', 'white', 'black'];
	const min        = 50;
	const max        = 300;

	context.strokeStyle = 'black';
	context.lineWidth   = 6;

	for(let i=0; i<iterations; i++) 
	{
		const x = randomNumBetween(0, width);
		const y = randomNumBetween(0, height);
		const w = randomNumBetween(min, max);
		const h = randomNumBetween(min, max);

		const index = randomNumBetween(0, colors.length-1);

		context.fillStyle = colors[index];
		context.fillRect(x,y,w,h);
		context.strokeRect(x,y,w,h);
	}
}

