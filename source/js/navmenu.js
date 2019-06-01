let toggleMenu = function () {
  let navMain = document.querySelector(".page-header");
  let navToggle = navMain.querySelector(".page-header__toggle");
  if (!navMain || !navToggle) return;
  navMain.classList.remove("page-header--nojs");

  navToggle.addEventListener("click", function() {
    navMain.classList.toggle("page-header--menu-opened");
  });
};

toggleMenu();
