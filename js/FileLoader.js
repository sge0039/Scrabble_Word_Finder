function loadFile (file) {
	fetch(file)
		.then(response => response.text())
		// .then(data => console.log(data))
		.then(data => controller.setDictionary(data))
}
