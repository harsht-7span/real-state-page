const hamBurgerMenu = document.getElementById("hamBurgerMenu");
const registerButton = document.getElementById("register-btn");

hamBurgerMenu.addEventListener("click", function () {
  if (
    menuList.classList.contains("hidden") &&
    registerButton.classList.contains("hidden")
  ) {
    menuList.classList.remove("hidden");
    // registerButton.classList.("hidden");
  } else {
    menuList.classList.add("hidden");
    registerButton.classList.add("hidden");
  }
});

