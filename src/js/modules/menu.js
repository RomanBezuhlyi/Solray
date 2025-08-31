export function initMobileMenu() {
	const burgerBtn = document.querySelector('.header-mobile-top__burger')
	const closeBtn = document.querySelector('.header-mobile-menu__close')
	const mobileMenu = document.querySelector('.header-mobile-menu')
	const menuLinks = document.querySelectorAll('.header-mobile-menu__item')

	// Функція для відкриття меню
	const openMenu = () => {
		mobileMenu.classList.add('open-menu')
		document.body.style.overflow = 'hidden' // блокуємо скрол
	}

	// Функція для закриття меню
	const closeMenu = () => {
		mobileMenu.classList.remove('open-menu')
		document.body.style.overflow = '' // повертаємо скрол
	}

	// Відкриття по бургеру
	burgerBtn.addEventListener('click', openMenu)

	// Закриття по кнопці закриття
	closeBtn.addEventListener('click', closeMenu)

	// Закриття по кліку на пункт меню
	menuLinks.forEach(link => {
		link.addEventListener('click', closeMenu)
	})
}
