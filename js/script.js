let canvas = document.getElementById('canva');
let ctx = canvas.getContext('2d');

let color_cells = document.querySelectorAll('.colors li');
let colorPicker = document.querySelector('input[type="color"]');
let currentColor = 'black';

let penSize = document.querySelector('input[type="range"]');
let size = 50 / 5;

let square = document.querySelector('.figure .square');
let isDrawing = false;
let startX, startY;

let flag = false;
square.addEventListener('click', () => {
	flag = true;
})
if(flag){
	canvas.addEventListener('mousedown', (e) => {
		isDrawing = true;
		startX = e.clientX - canvas.getBoundingClientRect().left;
		startY = e.clientY - canvas.getBoundingClientRect().top;
  });
  
  canvas.addEventListener('mousemove', (e) => {
		if (!isDrawing) return;
		
		let x = e.clientX - canvas.getBoundingClientRect().left;
		let y = e.clientY - canvas.getBoundingClientRect().top;
  
		ctx.clearRect(0, 0, canvas.width, canvas.height);
  
		ctx.strokeStyle = currentColor;
		ctx.lineWidth = 2;
		ctx.strokeRect(startX, startY, x - startX, y - startY);
  });
  
  canvas.addEventListener('mouseup', () => {
		isDrawing = false;
  });
	
} else {
	canvas.addEventListener('mousedown', function(){
		canvas.onmousemove = function(e){
			let x = e.offsetX;
			let y = e.offsetY;
			ctx.beginPath();
			ctx.arc(x,y,size,0, Math.PI * 2);
			ctx.fillStyle = currentColor;
			ctx.fill();
		}
		canvas.onmouseup = function(){
			canvas.onmousemove = null;
		}
	});
}

penSize.addEventListener('input', () => {
	size = penSize.value / 5;
	console.log(penSize.value);
})

colorPicker.addEventListener('input', () => {
	currentColor = colorPicker.value;
})

for(let i = 0; i < color_cells.length; i++){
	color_cells[i].addEventListener('click', function(e){
		let colorClick = e.target.getAttribute('data-color');
		currentColor = colorClick;
	});
}