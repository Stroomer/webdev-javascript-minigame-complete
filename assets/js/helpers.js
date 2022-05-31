function randomNumBetween(min, max) 
{
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function convertToInteger(value) 
{
	return Number.parseInt(value);
}

function convertToFloat(value)
{
	return Number.parseFloat(value);
}