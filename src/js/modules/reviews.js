export function initReviewsSwiper() {
	new Swiper('.swiperReviews', {
		spaceBetween: 30,
		slidesPerView: 1,
		navigation: {
			prevEl: '.reviews__nav-prev',
			nextEl: '.reviews__nav-next',
		},
		breakpoints: {
			767: {
				slidesPerView: 2,
			},
			991: {
				slidesPerView: 3,
			},
		},
	})
}
