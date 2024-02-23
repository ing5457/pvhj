function openTab(tabId) {
    // Скрыть все вкладки
    document.querySelectorAll('.tab-content').forEach(tabContent => {
        tabContent.style.display = 'none';
    });

    // Показать выбранную вкладку
    document.getElementById(tabId).style.display = 'block';

    // Плавно прокрутить страницу вверх
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    // Воспроизвести анимации
    playTopAnimations();
    playRightAnimations();
}

function navigate(direction) {
    const tabs = document.querySelectorAll('.tab-content');
    let currentTabId;

    tabs.forEach((tab, index) => {
        if (tab.style.display === 'block') {
            currentTabId = tab.id;
        }
    });

    let currentIndex = parseInt(currentTabId.replace('tab', ''), 10);
    let newIndex;

    if (direction === 'next') {
        newIndex = currentIndex < tabs.length ? currentIndex + 1 : currentIndex;
    } else if (direction === 'back') {
        newIndex = currentIndex > 1 ? currentIndex - 1 : currentIndex;
    }

    openTab('tab' + newIndex);
}

// Установить вкладку "tab1" по умолчанию
openTab('tab2');


function toggleTabs() {
    var tabs = document.querySelector('.tabs');
    tabs.style.display = tabs.style.display === 'none' ? 'flex' : 'none';
}

function activateTab(tabElement, tabId) {
    // Скрыть все вкладки
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Показать выбранную вкладку
    document.querySelectorAll('.tab-content').forEach(tabContent => {
        tabContent.style.display = 'none';
    });
    document.getElementById(tabId).style.display = 'block';

    // Плавно прокрутить страницу вверх
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    // Добавить border-bottom к активной кнопке
    tabElement.classList.add('active');
}

function zoomImage(img) {
    // Создаем overlay
    var overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    // Создаем увеличенное изображение
    var zoomedImage = document.createElement('img');
    zoomedImage.src = img.src;
    zoomedImage.classList.add('zoomed-image');
    document.body.appendChild(zoomedImage);

    // Показываем overlay и увеличенное изображение
    overlay.style.display = 'block';
    zoomedImage.style.display = 'block';

    // Закрытие по клику на overlay
    overlay.onclick = function() {
        overlay.style.display = 'none';
        zoomedImage.style.display = 'none';
        overlay.parentNode.removeChild(overlay);
        zoomedImage.parentNode.removeChild(zoomedImage);
    };
}
