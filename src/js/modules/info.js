export function initSeeMore() {
	const btn = document.querySelector('.info__block-content--btn')
	const overlay = document.querySelector('.overlay')

	btn.addEventListener('click', () => {
		const isHidden = overlay.style.opacity === '0'

		if (isHidden) {
			// Показати оверлей
			overlay.style.opacity = '1'
			overlay.style.pointerEvents = 'all'
			btn.textContent = 'Читать полностью'
		} else {
			// Сховати оверлей
			overlay.style.opacity = '0'
			overlay.style.pointerEvents = 'none'
			btn.textContent = 'Скрыть'
		}
	})
}
