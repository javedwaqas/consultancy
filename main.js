const menuIcon = document.getElementById("menu-icon");
const menuCloseIcon = document.getElementById("menu-close-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("searchbox");

// searchIcon.addEventListener('click', function () {
//   if (searchBox.style.top == '72px') {
//     searchBox.style.top = '24px';
//     searchBox.style.pointerEvents = 'none';
//   } else {
//     searchBox.style.top = '72px';
//     searchBox.style.pointerEvents = 'auto';
//   }
// });

// menuIcon.addEventListener('click', function () {
//   if (slideoutMenu.style.opacity == "1") {
//     slideoutMenu.style.opacity = '0';
//     slideoutMenu.style.pointerEvents = 'none';
//   } else {
//     slideoutMenu.style.opacity = '1';
//     slideoutMenu.style.pointerEvents = 'auto';
//   }
// });

menuIcon.addEventListener('click', function () {
    slideoutMenu.style.opacity = '1';
    slideoutMenu.style.pointerEvents = 'auto';

    menuIcon.classList.remove("menuIconDisplay");
    menuCloseIcon.classList.add("menuIconDisplay");
    // menuIcon.style.display = 'none';
    // menuCloseIcon.style.display = 'flex';
});

menuCloseIcon.addEventListener('click', function () {
    slideoutMenu.style.opacity = '0';
    slideoutMenu.style.pointerEvents = 'none';

    menuIcon.classList.add("menuIconDisplay");
    menuCloseIcon.classList.remove("menuIconDisplay");
    // menuIcon.style.display = 'flex';
    // menuCloseIcon.style.display = 'none';
});
