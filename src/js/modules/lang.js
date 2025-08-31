export function initLangSwitches() {
	const switches = document.querySelectorAll('.lang-switch')

	switches.forEach(switcher => {
		const button = switcher.querySelector('.lang-switch__btn')
		const list = switcher.querySelector('.lang-switch__list')
		const current = switcher.querySelector('.lang-switch__current')

		button.addEventListener('click', () => {
			list.classList.toggle('open')
		})

		list.addEventListener('click', e => {
			if (e.target.classList.contains('lang-switch__item')) {
				current.textContent = e.target.dataset.lang
				list.classList.remove('open')
			}
		})

		// Закриття при кліку поза елементом
		document.addEventListener('click', e => {
			if (!switcher.contains(e.target)) {
				list.classList.remove('open')
			}
		})
	})
}
