(function() {
  "use strict";

  // Получаем элемент body, фон которого будем менять
  const bodyElement = document.getElementById('mainBody');
  const button = document.getElementById('colorChangeBtn');

  // Проверка наличия элементов (защита от ошибок)
  if (!bodyElement || !button) {
    console.error('Не найдены необходимые элементы DOM.');
    return;
  }

  /**
   * Генерирует случайный цвет в формате HSL с приятными параметрами.
   * Hue: 0-360 (весь спектр)
   * Saturation: 60% - 85% (достаточно насыщенно, но не кислотно)
   * Lightness: 65% - 85% (светлые, пастельные оттенки, чтобы текст читался)
   * 
   * Такой подход гарантирует, что цвета будут красивыми и мягкими,
   * не мешая восприятию контента.
   */
  function getRandomPastelColor() {
    const h = Math.floor(Math.random() * 360);
    // насыщенность в диапазоне 55-80% для живости
    const s = 55 + Math.floor(Math.random() * 30); // 55..84%
    // светлота 65-85% — светлый, воздушный фон
    const l = 65 + Math.floor(Math.random() * 21); // 65..85%
    
    return `hsl(${h}, ${s}%, ${l}%)`;
  }

  /**
   * Меняет цвет фона body на случайный пастельный.
   * Используется transition, заданный в CSS.
   */
  function changeBackgroundColor() {
    const newColor = getRandomPastelColor();
    bodyElement.style.backgroundColor = newColor;
    
    // Дополнительно: можно слегка менять градиентную текстуру,
    // но оставим только плавную смену основного цвета, 
    // чтобы не усложнять. Переход работает красиво.
  }

  // Назначаем обработчик клика на кнопку
  button.addEventListener('click', changeBackgroundColor);

  // Небольшое улучшение: при первой загрузке тоже можно задать случайный фон,
  // но оставим стартовый дефолтный градиент из CSS — так страница выглядит законченно.
  // Если захочется стартовый рандом, раскомментируй следующую строку:
  // changeBackgroundColor();
})();