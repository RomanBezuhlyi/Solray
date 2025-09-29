export function initVideoOverlay() {
	const videoWrapper = document.querySelector('.info__block-video')
	if (!videoWrapper) return

	const iframe = videoWrapper.querySelector('.info__block-video--iframe')
	const overlay = videoWrapper.querySelector('.info__block-video--overlay')
	const btn = videoWrapper.querySelector('.info__block-video--btn')

	btn.addEventListener('click', () => {
		// сховати кнопку й оверлей
		btn.style.display = 'none'
		overlay.style.display = 'none'

		// додати autoplay до iframe
		const src = iframe.getAttribute('src')
		if (!src.includes('autoplay=1')) {
			iframe.setAttribute(
				'src',
				src + (src.includes('?') ? '&' : '?') + 'autoplay=1'
			)
		}
	})
}
