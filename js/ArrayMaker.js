class ArrayMaker {
	splitString (data) {
		let splitTypeArray = ['\r\n', '\r', '\n']
		for (let item of splitTypeArray) {
			if (data.indexOf(item) >= 0) {
				return item
			}
		}
	}
	createArray (data) {
		let splitType = this.splitString(data)
		let tempArray = data.split(splitType)
		let resultArray = []
		for (let item of tempArray) {
			resultArray.push(item.toLowerCase())
		}
		return resultArray
	}
}
