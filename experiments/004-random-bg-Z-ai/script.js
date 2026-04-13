document.addEventListener('DOMContentLoaded', function() {
    
    const colorBtn = document.getElementById('colorBtn');
    const colorValue = document.getElementById('colorValue');
    const body = document.body;

    const beautifulColors = [
        { hex: '#0f0f23', name: 'Тёмно-синий' },
        { hex: '#1a1a2e', name: 'Ночной индиго' },
        { hex: '#16213e', name: 'Глубокий океан' },
        { hex: '#1b2631', name: 'Морская волна' },
        { hex: '#0d1b2a', name: 'Полуночное море' },
        { hex: '#1b1b2f', name: 'Космос' },
        { hex: '#162447', name: 'Королевский синий' },
        { hex: '#1f1f38', name: 'Аметистовая ночь' },
        { hex: '#0b132b', name: 'Бездна' },
        { hex: '#1c2541', name: 'Стальной синий' },
        { hex: '#232946', name: 'Графит' },
        { hex: '#121629', name: 'Обсидиан' },
        { hex: '#0e1424', name: 'Чёрный жемчуг' },
        { hex: '#15192b', name: 'Тёмная лаванда' },
        { hex: '#171c2f', name: 'Ночной бархат' }
    ];

    let currentColorIndex = 0;

    function getRandomColor() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * beautifulColors.length);
        } while (newIndex === currentColorIndex && beautifulColors.length > 1);
        
        currentColorIndex = newIndex;
        return beautifulColors[newIndex];
    }

    function applyNewColor() {
        const newColor = getRandomColor();
        
        body.style.backgroundColor = newColor.hex;
        colorValue.textContent = newColor.hex.toUpperCase();
        colorValue.style.color = newColor.hex;
        
        console.log('Цвет изменён на: ' + newColor.name + ' (' + newColor.hex + ')');
    }

    colorBtn.addEventListener('click', applyNewColor);

    console.log('Скрипт успешно загружен!');
});
