document.addEventListener('DOMContentLoaded', function () {
   const menuItems = document.querySelectorAll('.mob-category-menu-item.has-submenu');

   menuItems.forEach(item => {
    const mainLink = item.querySelector('.mob-category-item-link');
    const subcategory = item.querySelector('.mob-category-item-subcategory');
    const backBtn = item.querySelector('.back-to-main');

    mainLink.addEventListener('click', function (e) {
     e.preventDefault();
     subcategory.classList.add('active');
    });

    backBtn.addEventListener('click', function () {
     subcategory.classList.remove('active');
    });
   });
  });