let canvas = document.getElementById('canva');
let ctx = canvas.getContext('2d');

canvas.addEventListener('mousedown', function(){
	canvas.onmousemove = function(e){
		let x = e.offsetX;
		let y = e.offsetY;
		ctx.beginPath();
		ctx.arc(x,y,5,0, Math.PI * 2);
		ctx.fillStyle = 'black';
		// ctx.rect(x, y, 5, 5,);
		ctx.fill();
		canvas.style.cursor = 'pointer';
	}
	canvas.onmouseup = function(){
		canvas.onmousemove = null;
		canvas.style.cursor = 'default';

	}
})

// canvas.onmousedown = function(e){
// 	canvas.onmousemove = function(e){
// 		let x = e.offsetX;
// 		let y = e.offsetY;
// 		ctx.fillRect(x, y, 2, 2);
// 		ctx.fillStyle = 'red';
// 		ctx.fill();
// 	}
// 	canvas.onmouseup = function(){
// 		canvas.onmousemove = null;
// 	}
// }




// let color_cells = document.querySelectorAll('.colors li');

// for(let i = 0; i < color_cells.length; i++){
// 	color_cells[i].addEventListener('click', changeColor);
// }
// function changeColor(e){
// 	let colorClick = e.target.getAttribute('data-color');
// 	// text.style.color = colorClick;
// }