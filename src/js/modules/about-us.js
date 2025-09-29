export function initAboutUsSwiper() {
	const thumbs = new Swiper('.about-us__slider-small', {
		spaceBetween: 24,
		slidesPerView: 3,
		freeMode: true,
		watchSlidesProgress: true,
		watchSlidesVisibility: true,
		breakpoints: {
			// коли ширина <= 320px
			991: {
				slidesPerView: 6.5,
			},
		},
	})

	const main = new Swiper('.about-us__slider-large', {
		spaceBetween: 10,
		navigation: {
			nextEl: '.about-us__slider-button-next',
			prevEl: '.about-us__slider-button-prev',
		},
		thumbs: {
			swiper: thumbs,
		},
	})
}
