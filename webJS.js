var current_image;
var i = 0;
var images = ["seventeen.jpg", "chungha.jpg", "bts.jpg", "gem.jpg"];

function show_images() {
	i = i + 1;
	if (i >= images.length) {
		i = 0;
	}
	current_image = images[i];
	document.getElementById("slideshow").src = current_image;
}
