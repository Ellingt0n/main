    const sidebar = document.getElementById('side-menu');

    // Наведение мышки
    sidebar.addEventListener('mouseenter', () => {
      sidebar.classList.add('open-menu');
    });

    sidebar.addEventListener('mouseleave', () => {
      sidebar.classList.remove('open-menu');
    });


    document.querySelectorAll('.side-menu-item.has-submenu').forEach(item => {
      let timeout;
      let currentItem = null;  // Переменная для отслеживания текущего элемента

      item.addEventListener('mouseenter', function () {
        // Задержка перед добавлением класса
        clearTimeout(timeout); // Если курсор быстро вернется, отменяем задержку
        timeout = setTimeout(() => {
          document.querySelector('.side-subcategory-inner').classList.add('active');
          // Добавляем класс active к текущему <li>
          currentItem = item;
          currentItem.classList.add('active');
        }, 300); // задержка 300 мс
      });

      item.addEventListener('mouseleave', function () {
        // Задержка перед удалением класса
        clearTimeout(timeout); // Отменяем задержку, если курсор возвращается
        timeout = setTimeout(() => {
          // Удаляем класс active с текущего <li>, когда подменю закрывается
          document.querySelector('.side-subcategory-inner').classList.remove('active');
          if (currentItem) {
            currentItem.classList.remove('active');
            currentItem = null; // Сбрасываем текущий элемент
          }
        }, 300); // задержка 300 мс
      });

      // Оставляем подменю открытым при наведении на него
      document.querySelector('.side-subcategory-inner').addEventListener('mouseenter', function () {
        clearTimeout(timeout); // Ожидаем перед удалением
        document.querySelector('.side-subcategory-inner').classList.add('active');
      });

      document.querySelector('.side-subcategory-inner').addEventListener('mouseleave', function () {
        timeout = setTimeout(() => {
          document.querySelector('.side-subcategory-inner').classList.remove('active');
          if (currentItem) {
            currentItem.classList.remove('active');
            currentItem = null; // Сбрасываем текущий элемент
          }
        }, 300); // задержка 300 мс
      });
    });
    document.querySelectorAll('.side-menu-item.has-submenu').forEach(item => {
      let timeout;
      let currentItem = null;  // Переменная для отслеживания текущего элемента

      item.addEventListener('mouseenter', function () {
        // Задержка перед добавлением класса
        clearTimeout(timeout); // Если курсор быстро вернется, отменяем задержку
        timeout = setTimeout(() => {
          // Добавляем класс active к текущему <li>
          currentItem = item;
          currentItem.classList.add('active');

          // Получаем значение data-target текущего элемента
          let target = item.getAttribute('data-target');

          // Показываем соответствующий .side-subcategory-menu-item
          document.querySelectorAll('.side-subcategory-menu-item').forEach(subItem => {
            // Скрываем все элементы подменю
            subItem.style.display = 'none';
            // Показываем только тот, который соответствует data-item текущего элемента
            if (subItem.getAttribute('data-item') === target) {
              subItem.style.display = 'block';
            }
          });

          // Открываем контейнер с подменю
          document.querySelector('.side-subcategory-inner').classList.add('active');
        }, 300); // задержка 300 мс
      });

      item.addEventListener('mouseleave', function () {
        // Задержка перед удалением класса
        clearTimeout(timeout); // Отменяем задержку, если курсор возвращается
        timeout = setTimeout(() => {
          // Удаляем класс active с текущего <li>
          if (currentItem) {
            currentItem.classList.remove('active');
            currentItem = null; // Сбрасываем текущий элемент
          }

          // Скрываем все элементы подменю
          document.querySelectorAll('.side-subcategory-menu-item').forEach(subItem => {
            subItem.style.display = 'none';
          });

          // Убираем класс active у .side-subcategory-inner
          document.querySelector('.side-subcategory-inner').classList.remove('active');
        }, 300); // задержка 300 мс
      });

      // Оставляем подменю открытым при наведении на него
      document.querySelector('.side-subcategory-inner').addEventListener('mouseenter', function () {
        clearTimeout(timeout); // Ожидаем перед удалением
        document.querySelector('.side-subcategory-inner').classList.add('active');
      });

      document.querySelector('.side-subcategory-inner').addEventListener('mouseleave', function () {
        timeout = setTimeout(() => {
          document.querySelector('.side-subcategory-inner').classList.remove('active');
          if (currentItem) {
            currentItem.classList.remove('active');
            currentItem = null; // Сбрасываем текущий элемент
          }
          // Скрываем все элементы подменю
          document.querySelectorAll('.side-subcategory-menu-item').forEach(subItem => {
            subItem.style.display = 'none';
          });
        }, 300); // задержка 300 мс
      });
    });


