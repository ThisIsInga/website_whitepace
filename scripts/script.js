const headerBurger = document.querySelector(".header-burger");

headerBurger.addEventListener("click", function () {
    headerBurger.classList.toggle("header-burger-active");

    const headerCategory = document.querySelector(".header-category");
    if (headerCategory) {
        headerCategory.classList.toggle("header-category-active")
    }
});
