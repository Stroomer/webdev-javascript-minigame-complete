function randomNumBetween(min, max) 
{
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to transform a normal string into bullshit
String.prototype.bullshitify = function() 
{
	let result     = "";
	let strlen     = this.length;
	let iterations = strlen * 100;
	let iteration  = 0;

	while(++iteration < iterations) 
	{
		const index1 = randomNumBetween(0, strlen);
		const index2 = randomNumBetween(0, strlen);

		const char1  = this.substring(index1,1);
		const char2  = this.substring(index2,1);

		let chars = this.split('');
		chars[index1] = char2;
		chars[index2] = char1;
		result = chars.join('');
	}

	return result;
}

var test = "Hallo wereld";
console.log(test.bullshitify());