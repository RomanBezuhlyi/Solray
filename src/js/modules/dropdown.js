export function initDropdowns() {
	document.querySelectorAll('.dropdown').forEach(dropdown => {
		const toggle = dropdown.querySelector('.dropdown-toggle')
		const menuItems = dropdown.querySelectorAll('.dropdown-menu a')

		toggle.addEventListener('click', e => {
			e.stopPropagation()
			const isOpen = dropdown.classList.contains('open')
			closeAllDropdowns()
			if (!isOpen) dropdown.classList.add('open')
		})

		menuItems.forEach(item => {
			item.addEventListener('click', e => {
				e.preventDefault()
				toggle.childNodes[0].textContent = item.textContent + ' '
				dropdown.classList.remove('open')
			})
		})
	})

	function closeAllDropdowns() {
		document.querySelectorAll('.dropdown').forEach(d => {
			d.classList.remove('open')
		})
	}

	document.addEventListener('click', () => {
		closeAllDropdowns()
	})
}
