let canvas = document.getElementById('canva');
let ctx = canvas.getContext('2d');

canvas.onmousedown = function(e){
	canvas.onmousemove = function(e){
		let x = e.offsetX;
		let y = e.offsetY;
		console.log(x, y);
		ctx.fillRect(x, y, 2, 2);
		ctx.fillStyle = 'red';
		ctx.fill();
	}
	canvas.onmouseup = function(){
		canvas.onmousemove = null;
	}
}




// let color_cells = document.querySelectorAll('.colors li');

// for(let i = 0; i < color_cells.length; i++){
// 	color_cells[i].addEventListener('click', changeColor);
// }
// function changeColor(e){
// 	let colorClick = e.target.getAttribute('data-color');
// 	// text.style.color = colorClick;
// }