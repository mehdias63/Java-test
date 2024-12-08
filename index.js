const counterValue = document.querySelector('.numCount')
let count = Number(counterValue.textContent)
const button = document.querySelectorAll('.btn')

button.forEach(btn => {
	btn.addEventListener('click', () => {
		const classList = btn.classList
		if (classList.contains('increment')) count++
		else if (classList.contains('decrement')) count--
		else count = 0
		if (count > 0) counterValue.style.color = 'green'
		else counterValue.style.color = 'red'
		counterValue.textContent = count
	})
})
