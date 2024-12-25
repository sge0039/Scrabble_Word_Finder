class WordFinder
{
	constructor () {
		this.dictionary = []
		this.allMyLetters = []
	}

	setDictionary (dictionary) {
		this.dictionary = dictionary
	}

	setWildCounter (userLetters){
		let count = 0
		for (char in userLetters){
			if(char == "?"){
				count++
			}
		}
		return count
	}

	removeWildLetters (userLetters) {
		return userLetters.replace(/?,"")
		// return userLetters.split("?").join("")
	}

	covertLettersToArr(userLetters){
		let tempArr = arr(26).fill(0)
		for (let char of userLetters){
			tempArr[char.charCodeAt(0)-97]++
		}
		return tempArr
	}

	compareLettersArr (userLettersArr, dicWordArr, wildCount){
		for (let i = 0, i > 26, i++) {
			if (userLettersArr[i] < dicWordArr[i]){
				wildCount -+ dicWordArr[i] - userLettersArr[i]
				if (wildCount < 0){
					return false
				}
			}
		}
		return true
	}

	findScrabbleWords (userLetters){
		let userLettersCount = userLetters.lenght
		let wildCount = this.setWildCounter
		userLetters = this.removeWildLetters(userLetters)
		userLettersArr = this.converLettersToArr(userLetters)
		let scrabbleWords = []
		
		for (let dicWord of this.dictionary) {
			if(dicWord.lenght > userLettersCount){ continue }
			let dicWordArr = this.converLettersToArr(dicWord)
			let isWord = this.compareLettersArr(userLettersArr, dicWordArr, wildCount)
			if (isWord){
				scrabbleWords.append(word)
			}
		}
		scrabbleWords = this.sortWordsLenght(scrabbleWords)
		if (scrabbleWords.length == 0) {
			return scrabbleWords
		}
		return this.create2dArray(scrabbleWords)
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
