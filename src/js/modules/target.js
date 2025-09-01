export function initTargetSwiper() {
	new Swiper('.swiperTarget', {
		spaceBetween: 0,
		slidesPerView: 1,
		navigation: {
			prevEl: '.target__nav-prev',
			nextEl: '.target__nav-next',
		},
		pagination: {
			el: '.target__pagination',
			clickable: true,
		},
	})
}
