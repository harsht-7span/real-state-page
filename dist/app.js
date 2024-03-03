const hamBurgerMenu = document.getElementById("hamBurgerMenu");

const menu = document.getElementById("menu");

hamBurgerMenu.addEventListener("click", function () {
  if (menuListMobile.classList.contains("!left-0")) {
    menuListMobile.classList.remove("!left-0");
    document.body.classList.remove("overflow-hidden");
  } else {
    menuListMobile.classList.add("!left-0");
    document.body.classList.add("overflow-hidden");
  }
  menu.addEventListener("click", function () {
    menuListMobile.classList.remove("!left-0");
    document.body.classList.remove("overflow-hidden");
  });
});
