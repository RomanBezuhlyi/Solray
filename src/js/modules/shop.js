export function initShopSwitcher() {
	const switches = document.querySelectorAll('.shop__switch')
	const blocks = document.querySelectorAll('.shop__body > div')

	switches.forEach((switchEl, index) => {
		switchEl.addEventListener('click', e => {
			e.preventDefault()

			// зняти активний стан з усіх
			switches.forEach(s => s.classList.remove('active'))
			blocks.forEach(b => (b.style.display = 'none'))

			// активувати потрібний
			switchEl.classList.add('active')
			blocks[index].style.display = 'block'
		})
	})

	// показати лише перший блок при завантаженні (можна змінити під "active")
	blocks.forEach(b => (b.style.display = 'none'))
	const activeIndex = [...switches].findIndex(s =>
		s.classList.contains('active')
	)
	if (activeIndex >= 0) {
		blocks[activeIndex].style.display = 'block'
	} else {
		blocks[0].style.display = 'block'
		switches[0].classList.add('active')
	}
}
