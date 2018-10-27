
//references canvas in html file
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//canvas.width = 700;
//canvas.height = 700;


//context variable
var c = canvas.getContext('2d');
c.beginPath();

//rectangle object
function Rectangle(x,y,width, height,velocity)
{
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.velocity = velocity;

	this.draw = function()
	{
		c.fillRect(this.x,this.y,this.width,this.height);
		c.strokeStyle = "black";
		c.stroke();
	}
	this.rise = function()
	{
		this.y -= velocity;
		this.draw();

	}
}

var rectArray = [];
for(var i = 0; i < 10; i ++)
{
	var xCord = Math.random() * innerWidth;
	var yCord = innerHeight + 300;
	var width = Math.random() * 100;
	if(width < 30)
	{
		width += 40;
	}
	var height = width;
	var velocity = Math.random() * 6;
	if(velocity < 5)
	{
		velocity += 2;
	}
	rectArray.push(new Rectangle(xCord,yCord, width, height,velocity));
}
function animate()
{
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth, innerHeight);
	for(var i =0; i < rectArray.length; i ++)
	{
		var curr = rectArray[i];			
		if(curr.y < -100)
		{
			curr.y = innerHeight + 100;
			curr.width = Math.random() * 100;
			if(curr.width < 30)
			{
				curr.width += 40;
			}
			curr.height = rectArray[i].width;
			curr.velocity = Math.random() * 6;
			if(curr.velocity <5)
			{
				curr.velocity += 2;
			}
		}
		curr.rise();
	}
}
animate();


