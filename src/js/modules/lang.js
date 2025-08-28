export function initLangSwitch() {
	const switcher = document.querySelector('.header__top-lang')
	const button = switcher.querySelector('.header__top-lang__button')
	const list = switcher.querySelector('.header__top-lang__list')
	const current = switcher.querySelector('.header__top-lang__current')

	button.addEventListener('click', () => {
		list.classList.toggle('header__top-lang__list--open')
		switcher.classList.toggle('header__top-lang--open')
	})

	list.addEventListener('click', e => {
		if (e.target.classList.contains('header__top-lang__item')) {
			current.textContent = e.target.dataset.lang
			list.classList.remove('header__top-lang__list--open')
			switcher.classList.remove('header__top-lang--open')
		}
	})
}
