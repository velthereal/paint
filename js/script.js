let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let topLine = document.querySelector('.top');
let color_cells = document.querySelectorAll('.colors li');
let colorPicker = document.querySelector('input[type="color"]');
let currentColor = 'black';

let penSize = document.querySelector('input[type="range"]');
let size = 50 / 5;

let square = document.querySelector('.figure.square');
let pen = document.querySelector('.figure.pen');
let isDrawing = false;
let startX, startY;
square.addEventListener('click', clickSquare);
pen.addEventListener('click', clickPen);
function clickSquare(){
	canvas.addEventListener('mousedown', (e) => {
		startX = e.offsetX;
		startY = e.offsetY;
		canvas.onmousemove = function(e) {
			let x = e.offsetX;
			let y = e.offsetY;
			
			ctx.clearRect(0, 0, canvas.width, canvas.height);
		
			ctx.strokeStyle = currentColor;
			ctx.lineWidth = 2;
			ctx.strokeRect(startX, startY, x - startX, y - startY);
		}

		canvas.onmouseup = function() {
			canvas.onmousemove = null;
		}
	});
}
function clickPen(){
	canvas.addEventListener('mousedown', (e) => {
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
	});
}

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