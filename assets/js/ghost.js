function Ghost(x, y, image, direction, keys)
{
	this.x       = x;
	this.y       = y;
	this.image   = this.load('./assets/img/'+image);
	this.direction = direction;
	this.speedX  = 0;
	this.speedY  = 0;
	this.scale   = 4;
	this.keys    = keys;
	this.sprites = [ {x:0,  y:0, w:16, h:16}, 
		             {x:16, y:0, w:16, h:16}, 
					 {x:32, y:0, w:16, h:16}, 
					 {x:48, y:0, w:16, h:16} ];
}

Ghost.prototype.load = function(src) 
{
    const img = new Image();
	img.onload = (obj) => { 
		this.width  = obj.currentTarget.width;
		this.height = obj.currentTarget.height; 
	};
	img.src = src;
	return img; 
}

Ghost.prototype.checkInput = function() 
{
	if(keysDown[this.keys.left])       { this.direction = directions.left;  this.speedX =-1; this.speedY = 0; }  // cursor left
	else if(keysDown[this.keys.up])    { this.direction = directions.up;    this.speedX = 0; this.speedY =-1; }  // cursor up
	else if(keysDown[this.keys.right]) { this.direction = directions.right; this.speedX = 1; this.speedY = 0; }  // cursor right
	else if(keysDown[this.keys.down])  { this.direction = directions.down;  this.speedX = 0; this.speedY = 1; }  // cursor down
}

Ghost.prototype.update = function() 
{
	this.x += this.speedX;
	this.y += this.speedY;
}

Ghost.prototype.render = function(ctx) 
{
	const image = this.image;
	const sprite = this.sprites[this.direction];
	const x = this.x;
	const y = this.y;
	const w = sprite.w * this.scale;
	const h = sprite.h * this.scale;	

	ctx.drawImage(image, sprite.x, sprite.y, sprite.w, sprite.h, x-(w/2), y-(h/2), w, h);
}