class ToggleDiv
{
	hideDiv () {
		let className = 'hidden-div'
		let x = document.getElementsByClassName(className)
		for (let i = 0; i < x.length; i++) {
			x[i].style.display = 'none';
		}
	}

	hideById (id) {
		let x = document.getElementById(id)
		if (x != null) {
			x.style.display = 'none'
		}
	}
	
	showDiv (id) {
		let x = document.getElementById(id)
		x.style.display = 'block'
	}
	
}
