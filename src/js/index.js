import { initAboutUsSwiper } from './modules/about-us'
import { initDropdowns } from './modules/dropdown'
import { initSeeMore } from './modules/info'
import { initLangSwitches } from './modules/lang'
import { initPhoneMask } from './modules/mask'
import { initMobileMenu } from './modules/menu'
import {
	initCalcComponent,
	initCharacteristicsOpen,
	initProductSwiperDesktop,
	initProductSwiperMobile,
} from './modules/product'
import {
	initProductsSwiper1,
	initProductsSwiper2,
	initProductsSwiper3,
} from './modules/products'
import { initReviewsSwiper } from './modules/reviews'
import { initMobileSearch } from './modules/search'
import { initShopSwitcher } from './modules/shop'
import { initTargetSwiper } from './modules/target'
import { initVideoOverlay } from './modules/video'

document.addEventListener('DOMContentLoaded', () => {
	initLangSwitches()
	initReviewsSwiper()
	initSeeMore()
	initProductsSwiper1()
	initProductsSwiper2()
	initProductsSwiper3()
	initPhoneMask()
	initMobileMenu()
	initMobileSearch()
	initDropdowns()
	initTargetSwiper()
	initProductSwiperDesktop()
	initProductSwiperMobile()
	initCharacteristicsOpen()
	initCalcComponent()
	initShopSwitcher()
	initAboutUsSwiper()
	initVideoOverlay()
})
