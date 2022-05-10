class WordFinder
{
	constructor () {
		this.dictionary = []
		this.allMyLetters = []
	}

	setDictionary (dictionary) {
		this.dictionary = dictionary
	}
	
	createLettersArray (letters) {
		let tempArray = []
		for (let letter of letters) {
			let newLetter = true
			for (let item of tempArray) {
				if (item.letter == letter) {
					item.increaseCount()
					newLetter = false
				}
			}
			if (newLetter) {
				tempArray.push(new Letter(letter))
			}
		}
		return tempArray
	}
	
	findWords (letters) {
		this.allMyLetters = this.createLettersArray(letters)
		this.allMyLetters.sort((a, b) => (a.letter > b.letter) ? 1 : -1)
		let scrabbleWords = []

		for (let word of this.dictionary) {
			if (word.length <= letters.length) {
				let letterArray = this.createLettersArray(word)
				if (this.compareLetters(letterArray)) {
					scrabbleWords.push(word)
				}
			}
		}

		scrabbleWords = this.sortWordsLenght(scrabbleWords)
		if (scrabbleWords.length == 0) {
			return scrabbleWords
		}
		return this.create2dArray(scrabbleWords)
	}
	
	compareLetters (letterArr) {
		let result = true
		let wildCount = this.allMyLetters[0].letter == '?' ? this.allMyLetters[0].count : 0
		for (let letter of letterArr) {
			for (let myLetter of this.allMyLetters) {
				if (letter.letter == myLetter.letter) {
					if (letter.count > myLetter.count) {
						wildCount -= letter.count - myLetter.count
					}
					result = true
					break
				} else if (myLetter.letter != '?') {
					result = false
				}
			}
			if (!result) {
				wildCount -= letter.count
			}
			if (wildCount < 0) {
				result = false
				break
			}
		}
		return result
	}
	
	sortWordsLenght (array) {
		array.sort(function (a,b) {
			if (a.length > b.length){
				return -1;
			}
			if (a.length < b.length) {
				return 1;
			}
			// a must be equal to b
			return 0;
		})
		return array
	}
	
	create2dArray (newArray) {
		let wordLength = newArray[0].length
		let tempArray = []
		let temp2dArray = []
		for (let i = 0; i < newArray.length; i++) {
			if (wordLength == newArray[i].length) {
				tempArray.push(newArray[i])
			} else {
				wordLength = newArray[i].length
				temp2dArray.push(tempArray)
				tempArray = []
				tempArray.push(newArray[i])
			}
			if (i == newArray.length-1) {
				temp2dArray.push(tempArray)
			}
		}
		return temp2dArray
	}
	
}
