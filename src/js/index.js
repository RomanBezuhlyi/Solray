import { initSeeMore } from './modules/info'
import { initLangSwitches } from './modules/lang'
import { initPhoneMask } from './modules/mask'
import { initMobileMenu } from './modules/menu'
import { initProductsSwiper1, initProductsSwiper2 } from './modules/products'
import { initReviewsSwiper } from './modules/reviews'
import { initMobileSearch } from './modules/search'

document.addEventListener('DOMContentLoaded', () => {
	initLangSwitches()
	initReviewsSwiper()
	initSeeMore()
	initProductsSwiper1()
	initProductsSwiper2()
	initPhoneMask()
	initMobileMenu()
	initMobileSearch()
})
