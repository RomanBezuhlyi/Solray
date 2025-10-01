export function initAllModals() {
	const openModal = modalId => {
		const modal = document.getElementById(modalId)
		if (modal) {
			modal.classList.add('active')
			document.body.classList.add('modal-open')
		}
	}

	const closeModal = modal => {
		modal.classList.remove('active')
		document.body.classList.remove('modal-open')
	}

	// відкриття по data-атрибуту
	document.querySelectorAll('[data-modal]').forEach(btn => {
		btn.addEventListener('click', () => {
			const modalId = btn.getAttribute('data-modal')
			openModal(modalId)
		})
	})

	// закриття по кнопці
	document.querySelectorAll('.modal__close').forEach(closeBtn => {
		closeBtn.addEventListener('click', () => {
			closeModal(closeBtn.closest('.modal'))
		})
	})

	// закриття по кліку на фон
	document.querySelectorAll('.modal').forEach(modal => {
		modal.addEventListener('click', e => {
			if (e.target === modal) closeModal(modal)
		})
	})

	// закриття по Esc
	document.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			document
				.querySelectorAll('.modal.active')
				.forEach(modal => closeModal(modal))
		}
	})
}
