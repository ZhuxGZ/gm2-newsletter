const rate = document.querySelector('.rate');
const display = document.querySelector('.display');
const svg = document.querySelectorAll('.rate svg');

rate.addEventListener('mousemove', (e) => {
	let coord = e.screenX;
	console.log(e.screenX);
	if (coord >= 1245) {
		svg[0].classList.add('selected');
	}
	if (coord >= 1280) {
		svg[1].classList.add('selected');
	}
});

rate.addEventListener('mouseleave', () => {
	svg.forEach((star) => {
		star.classList.remove('selected');
	});
});
