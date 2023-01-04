let controller = new Vue({
	el: '#input_letter',
	data: {
		input: '',
		toggleDiv: new ToggleDiv(),
		wordFinder: new WordFinder(),
	},
	methods: {
		checkInput: function (string) {
			let regex = /^[a-z?]*$/
			return regex.test(string)
		},
		getString: function () {
			this.toggleDiv.hideDiv()
			if (this.input.length > 1 && this.checkInput(this.input)) {
				let foundWords = this.wordFinder.findWords(this.input.toLowerCase())
				if (foundWords.length == 0) {
					this.toggleDiv.showDiv('no_words')
				} else {
					this.displayLetter(foundWords)
				}
			}
		},
		clearInput: function () {
			this.input = ''
		},
		setDictionary: function (data) {
			let arrayMaker = new ArrayMaker()
			let tempArr = arrayMaker.createArray(data)
			this.wordFinder.setDictionary(tempArr)
			this.toggleDiv.hideById('vueFileReader')
		},
		displayLetter: function (foundWords) {
			let editDiv = new EditDiv()
			let id = 'output'
			editDiv.removeContent(id)
			this.toggleDiv.showDiv(id)
			for (let i = 0; i < foundWords.length; i++) {
				editDiv.addContent(foundWords[i], id)
			}
		}
	}
})
