import { initSeeMore } from './modules/info'
// import { initLangSwitch } from './modules/lang'
import { initPhoneMask } from './modules/mask'
import { initProductsSwiper1, initProductsSwiper2 } from './modules/products'
import { initReviewsSwiper } from './modules/reviews'

document.addEventListener('DOMContentLoaded', () => {
	// initLangSwitch()
	initReviewsSwiper()
	initSeeMore()
	initProductsSwiper1()
	initProductsSwiper2()
	initPhoneMask()
})
