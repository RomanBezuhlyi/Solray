export function initProductSwiperDesktop() {
	const thumbs = new Swiper('.gallery-thumbs-desktop', {
		spaceBetween: 10,
		slidesPerView: 5,
		freeMode: true,
		watchSlidesProgress: true,
		watchSlidesVisibility: true,
	})

	const main = new Swiper('.gallery-top-desktop', {
		spaceBetween: 10,
		navigation: {
			nextEl: '.gallery-swiper-button-next',
			prevEl: '.gallery-swiper-button-prev',
		},
		thumbs: {
			swiper: thumbs,
		},
	})
}

export function initProductSwiperMobile() {
	const thumbs = new Swiper('.gallery-thumbs-mobile', {
		spaceBetween: 10,
		slidesPerView: 5,
		freeMode: true,
		watchSlidesProgress: true,
		watchSlidesVisibility: true,
	})

	const main = new Swiper('.gallery-top-mobile', {
		spaceBetween: 10,
		navigation: {
			nextEl: '.gallery-swiper-button-next',
			prevEl: '.gallery-swiper-button-prev',
		},
		thumbs: {
			swiper: thumbs,
		},
	})
}

export function initCharacteristicsOpen() {
	const items = document.querySelectorAll('.product__descr-item--top')

	items.forEach(top => {
		top.addEventListener('click', () => {
			const parentItem = top.parentElement
			const body = parentItem.querySelector('.product__descr-item--body')
			const icon = parentItem.querySelector('.product__descr-item--icon')

			const isOpen = body.style.maxHeight && body.style.maxHeight !== '0px'

			if (isOpen) {
				// Закриваємо
				body.style.maxHeight = '0'
				body.style.padding = '0'
				icon.style.transform = 'rotateX(0deg)'
			} else {
				// Відкриваємо на висоту контенту
				body.style.maxHeight = body.scrollHeight + 100 + 'px'
				body.style.padding = '25px 0'
				icon.style.transform = 'rotateX(180deg)'
			}
		})
	})
}

export function initCalcComponent() {
	const minusBtns = document.querySelectorAll('.qty-minus')
	const plusBtns = document.querySelectorAll('.qty-plus')

	minusBtns.forEach(btn => {
		btn.addEventListener('click', () => {
			const input = btn.nextElementSibling
			let value = parseInt(input.value)
			if (value > 1) input.value = value - 1
		})
	})

	plusBtns.forEach(btn => {
		btn.addEventListener('click', () => {
			const input = btn.previousElementSibling
			let value = parseInt(input.value)
			input.value = value + 1
		})
	})
}
