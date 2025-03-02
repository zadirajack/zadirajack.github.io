document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.menu-icon');
  const menuList = document.querySelector('.menu-list');

  // Функция для переключения состояния меню и обновления ARIA-атрибута
  function toggleMenu() {
    const isExpanded = menuIcon.getAttribute('aria-expanded') === 'true';
    menuIcon.setAttribute('aria-expanded', !isExpanded);
    menuList.classList.toggle('show-menu');
  }

  menuIcon.addEventListener('click', toggleMenu);
});
