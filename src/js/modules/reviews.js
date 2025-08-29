export function initReviewsSwiper() {
	new Swiper('.swiperReviews', {
		spaceBetween: 30,
		slidesPerView: 3,
		navigation: {
			prevEl: '.reviews__nav-prev',
			nextEl: '.reviews__nav-next',
		},
	})
}
