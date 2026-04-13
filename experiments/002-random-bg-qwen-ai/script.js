document.addEventListener("DOMContentLoaded", function () {

    var button = document.getElementById("colorBtn");

    button.addEventListener("click", function () {

        // Генерируем случайный цвет в формате #RRGGBB
        var randomColor = "#" + Math.floor(Math.random() * 16777215)
                                          .toString(16)
                                          .padStart(6, "0");

        // Применяем цвет к фону страницы
        document.body.style.backgroundColor = randomColor;

        // Меняем текст кнопки на текущий цвет
        button.textContent = "🎨 Цвет: " + randomColor.toUpperCase();
    });
});
