let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let topLine = document.querySelector('.top');
let color_cells = document.querySelectorAll('.colors li');
let colorPicker = document.querySelector('input[type="color"]');
let currentColor = 'black';

let penSize = document.querySelector('input[type="range"]');
let size = 50 / 5;


// canvas.addEventListener('mousedown', function(){
// 	canvas.onmousemove = function(e){
// 		let x = e.offsetX;
// 		let y = e.offsetY;
// 		ctx.beginPath();
// 		ctx.arc(x,y,size,0, Math.PI * 2);
// 		ctx.fillStyle = currentColor;
// 		ctx.fill();
// 	}
// 	canvas.onmouseup = function(){
// 		canvas.onmousemove = null;
// 	}
// });

let square = document.querySelector('.figure .square');
let isDrawing = false;
let startX, startY;
square.addEventListener('click', function(){
	isDrawing = true;
});
canvas.addEventListener('mousedown', (e) => {
	if(!isDrawing){
		let x = e.offsetX;
		let y = e.offsetY;
		ctx.beginPath();
		ctx.arc(x, y, size, 0, Math.PI * 2);
		ctx.fillStyle = currentColor;
		ctx.fill();

		canvas.onmousemove = function(e) {
			 let x = e.offsetX;
			 let y = e.offsetY;
			 ctx.beginPath();
			 ctx.arc(x, y, size, 0, Math.PI * 2);
			 ctx.fillStyle = currentColor;
			 ctx.fill();
		}

		canvas.onmouseup = function() {
			 canvas.onmousemove = null;
		}
	} 
	// else {
	// 	canvas.addEventListener('mousemove', (e) => {
	// 		if (!isDrawing) return;
		
	// 		let x = e.clientX - canvas.getBoundingClientRect().left;
	// 		let y = e.clientY - canvas.getBoundingClientRect().top;
		
	// 		ctx.clearRect(0, 0, canvas.width, canvas.height);
		
	// 		ctx.strokeStyle = currentColor;
	// 		ctx.lineWidth = 2;
	// 		ctx.strokeRect(startX, startY, x - startX, y - startY);
	// 	});
		
	// 	canvas.addEventListener('mouseup', () => {
	// 		isDrawing = false;
	// 	});
	// }
});




penSize.addEventListener('input', () => {
	size = penSize.value / 5;
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