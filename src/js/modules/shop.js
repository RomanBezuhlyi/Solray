export function initShopSwitcher() {
	const switches = document.querySelectorAll('.shop__switch')
	const blocks = document.querySelectorAll('.shop__body > div')

	// функція активації потрібного індексу
	function activate(index) {
		// зняти активний стан з усіх
		switches.forEach(s => s.classList.remove('active'))
		blocks.forEach(b => (b.style.display = 'none'))

		// активувати потрібний, якщо існує
		if (switches[index]) {
			switches[index].classList.add('active')
		}
		if (blocks[index]) {
			blocks[index].style.display = 'block'
		}
	}

	// додати слухачі на всі перемикачі
	switches.forEach((switchEl, index) => {
		switchEl.addEventListener('click', e => {
			e.preventDefault()
			activate(index)
		})
	})

	// показати активний або перший блок при завантаженні
	const activeIndex = [...switches].findIndex(s =>
		s.classList.contains('active')
	)
	if (activeIndex >= 0) {
		activate(activeIndex)
	} else {
		activate(0)
	}
}
