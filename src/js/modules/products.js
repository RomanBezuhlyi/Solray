export function initProductsSwiper1() {
	new Swiper('.swiperProducts1', {
		spaceBetween: 30,
		slidesPerView: 1,
		navigation: {
			prevEl: '.products__prev',
			nextEl: '.products__next',
		},
		breakpoints: {
			767: {
				slidesPerView: 2,
			},
			991: {
				slidesPerView: 4,
			},
		},
	})
}

export function initProductsSwiper2() {
	new Swiper('.swiperProducts2', {
		spaceBetween: 30,
		slidesPerView: 1,
		navigation: {
			prevEl: '.products__prev',
			nextEl: '.products__next',
		},
		breakpoints: {
			767: {
				slidesPerView: 2,
			},
			991: {
				slidesPerView: 4,
			},
		},
	})
}
