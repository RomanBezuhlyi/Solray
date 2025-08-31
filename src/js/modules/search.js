export function initMobileSearch() {
	const searchBtn = document.querySelector('.search')
	const searchBlock = document.querySelector('.header-mobile-top__search-block')

	// Відкриття пошуку
	const openSearch = () => {
		searchBlock.classList.add('open-search')
	}

	// Закриття пошуку
	const closeSearch = () => {
		searchBlock.classList.remove('open-search')
	}

	// Перевірка чи клік був поза блоком пошуку
	const isClickOutsideSearch = event => {
		return (
			!searchBlock.contains(event.target) && !searchBtn.contains(event.target)
		)
	}

	// Клік по кнопці пошуку
	searchBtn.addEventListener('click', event => {
		event.stopPropagation() // щоб не спрацював document click
		openSearch()
	})

	// Клік поза блоком пошуку
	document.addEventListener('click', event => {
		if (
			searchBlock.classList.contains('open-search') &&
			isClickOutsideSearch(event)
		) {
			closeSearch()
		}
	})

	// Скрол — закриття пошуку
	window.addEventListener('scroll', () => {
		if (searchBlock.classList.contains('open-search')) {
			closeSearch()
		}
	})
}
