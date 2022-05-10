class EditDiv
{
	addContent (array, id) {
		let divID = array[0].length
		this.addElement('div', id, divID, '')
		let text = this.headerText(array)
		this.addElement('h3', divID, '', text)
		text = this.paragraphText(array)
		this.addElement('p', divID, '', text)
	}

	addElement (ele, targetID, setID, string) {
		let element = document.createElement(ele)
		let text = document.createTextNode(string)
		element.appendChild(text)
		element.setAttribute("id", setID)
		document.getElementById(targetID).appendChild(element)
	}

	headerText (array) {
		let plural = array.length > 1 ? 's' : ''
		return array[0].length + ' Letter Word' + plural
	}

	paragraphText (array) {
		let string = ''
		for (let i = 0; i < array.length; i++) {
			string += array[i] + ' '
		}
		return string
	}
	
	removeContent (id) {
		let x = document.getElementById(id);
		x.textContent = ''
	}
}
