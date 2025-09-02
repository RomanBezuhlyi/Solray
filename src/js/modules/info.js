export function initSeeMore() {
	const btn = document.querySelector('.info__block-content--btn')
	const overlay = document.querySelector('.overlay')

	if (!btn || !overlay) return // якщо елементів немає — вихід

	btn.addEventListener('click', () => {
		const isHidden = overlay.style.opacity === '0'

		if (isHidden) {
			overlay.style.opacity = '1'
			overlay.style.pointerEvents = 'all'
			btn.textContent = 'Читать полностью'
		} else {
			overlay.style.opacity = '0'
			overlay.style.pointerEvents = 'none'
			btn.textContent = 'Скрыть'
		}
	})
}
