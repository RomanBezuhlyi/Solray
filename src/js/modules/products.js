export function initProductsSwiper1() {
	new Swiper('.swiperProducts1', {
		spaceBetween: 30,
		slidesPerView: 4,
		navigation: {
			prevEl: '.products__prev',
			nextEl: '.products__next',
		},
	})
}

export function initProductsSwiper2() {
	new Swiper('.swiperProducts2', {
		spaceBetween: 30,
		slidesPerView: 4,
		navigation: {
			prevEl: '.products__prev',
			nextEl: '.products__next',
		},
	})
}
