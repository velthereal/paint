let canvas = document.getElementById('canva');
let color_cells = document.querySelectorAll('.colors li');
let ctx = canvas.getContext('2d');
let penSize = document.querySelector('input[type="range"]');
let size = 50 / 5;
let colorPicker = document.querySelector('input[type="color"]');
let currentColor = 'black';

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