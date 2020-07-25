const menuIcon = document.getElementById("menu-icon");
const menuCloseIcon = document.getElementById("menu-close-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("searchbox");

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

// close slideoutMenu once a link is clicked
slideoutMenu.addEventListener('click', function () {
    slideoutMenu.style.opacity = '0';
    slideoutMenu.style.pointerEvents = 'none';

    menuIcon.classList.add("menuIconDisplay");
    menuCloseIcon.classList.remove("menuIconDisplay");
});


// Window scrolling handlers
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // if (document.body.scrollTop > window.innerHeight/2 || document.documentElement.scrollTop > window.innerHeight/2) {
  //   document.getElementById("logo-withouttext").classList.add("hidden");
  //   document.getElementById("logo-withtext").classList.remove("hidden");
  // } else {
  //   document.getElementById("logo-withouttext").classList.remove("hidden");
  //   document.getElementById("logo-withtext").classList.add("hidden");
  // }
}

// Window resize handlers
  window.addEventListener('resize', resizeCanvas, false);

  function resizeCanvas() {
          // canvas.width = window.innerWidth;
          // canvas.height = window.innerHeight;

          /**
           * Your drawings need to be inside this function otherwise they will be reset when
           * you resize the browser window and the canvas goes will be cleared.
           */
          // drawStuff();
  }
  resizeCanvas();

// Flocking code ***************
