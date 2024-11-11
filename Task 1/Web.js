const cards = document.querySelectorAll('.card');

cards.forEach(card => {
	card.addEventListener('click', () => {
		// Тут можно добавить код для открытия дополнительной информации
		// Например:
		// alert("Вы нажали на карточку!");
		// console.log(card.querySelector('h3').textContent);
	});
});
