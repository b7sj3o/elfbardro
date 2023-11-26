$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});

var counterValue;

document.addEventListener('DOMContentLoaded', function () {
    var decrementButton = document.getElementById('decrement');
    var incrementButton = document.getElementById('increment');
    var counterElement = document.getElementById('counter');

    // Отримуємо збережене значення лічильника з локального сховища
    counterValue = localStorage.getItem('counterValue') || 0;

    // Оновлення значення лічильника в DOM
    function updateCounter() {
        counterElement.textContent = counterValue;

        // Зберігаємо значення лічильника в локальному сховищі
        localStorage.setItem('counterValue', counterValue);
    }

    // Функція для зменшення значення лічильника
    function decrement() {
        counterValue--;
        updateCounter();
    }

    // Функція для збільшення значення лічильника
    function increment() {
        counterValue++;
        updateCounter();
    }

    // Додаємо обробники подій для кнопок
    decrementButton.addEventListener('click', decrement);
    incrementButton.addEventListener('click', increment);

    // Ініціалізуємо лічильник при завантаженні сторінки
    updateCounter();

    // Тепер, коли лічильник ініціалізовано, викликаємо колбек
    if (typeof onCounterInitialized === 'function') {
        onCounterInitialized();
    }
});

// Поза областю видимості функції, де можна використовувати counterValue
function onCounterInitialized() {
    console.log(counterValue);
}
tovars = {
    tovar1: {
      buyPrice: 100,
      sellPrice: 200,
      img: 'img/tovar1.png',
      text: 'text'
    }
}
