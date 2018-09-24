window.addEventListener('DOMContentLoaded', function() {

//Создаем основную функцию для запуска функции timer
function clockStart() {
	//Задаем интервал для функции timer в 1 секунду
	let timerId = setInterval(timer, 1000);
};

//Функция таймер
function timer() {
			//Задаем функцию для добавления 0 к числам до 9 (01, 02 и т.д.)
			function addZero(num){
			if(num <= 9) {
				return '0'+ num;
			} else return num;
		};
	//Задаем переменным поля в DOM для вывода часов, минут и секунд
	let hoursField = document.getElementById('hours'),
		minutesField = document.getElementById('minutes'),
		secondsField = document.getElementById('seconds'),
		/* Основной объект для работы с датами, содержащий текущий момент времени
		(секунду, минуту, час и т.д.) */
		date = new Date(),
		//Получаем текущее время (часы, минуты и секунды)
		hours = date.getHours(),
		minutes = date.getMinutes(),
		seconds = date.getSeconds();

	//Выводим текущее время в заданые поля DOM
	hoursField.textContent = addZero(hours) + ' :';
	minutesField.textContent = addZero(minutes) + ' :';
	secondsField.textContent = addZero(seconds);
};

//Запускаем функцию таймер
clockStart();

});