const rate = document.querySelector(".rate");
const display = document.querySelector(".display");
const svg = document.querySelectorAll(".rate svg");
let rateValue = 0;

const addStatus = (event) => {
	svg.forEach((star) => {
		if (event.target.dataset.value >= star.dataset.value) {
			star.classList.add("selected");
		} else {
			star.classList.remove("selected");
		}
	});
	console.log(event.target.dataset.value);
};

svg.forEach((star) => {
	star.addEventListener("mouseenter", addStatus);
});

rate.addEventListener("click", (event) => {
	if (event.target != rate) {
		svg.forEach((star) => {
			if (star.classList.contains("selected")) {
				if (star.dataset.value > rateValue) {
					rateValue = star.dataset.value;
				}
			}

			star.removeEventListener("mouseenter", addStatus);
		});
		console.log(`FinalValue: ${rateValue}`);
	}
});
