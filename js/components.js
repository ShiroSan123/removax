(function () {
  var body = document.body;
  var menu = document.querySelector(".js-mobile-menu");
  var overlay = document.querySelector(".js-overlay");
  var burgerButtons = document.querySelectorAll(".js-burger");
  var closeButtons = document.querySelectorAll(".js-mobile-close");
  var submenuButtons = document.querySelectorAll(".js-submenu-toggle");
  var accordionButtons = document.querySelectorAll(".js-accordion-head");

  function openMenu() {
    if (!menu || !overlay) {
      return;
    }

    menu.classList.add("is-open");
    overlay.classList.add("is-active");
    body.classList.add("no-scroll");
  }

  function closeMenu() {
    if (!menu || !overlay) {
      return;
    }

    menu.classList.remove("is-open");
    overlay.classList.remove("is-active");
    body.classList.remove("no-scroll");
  }

  burgerButtons.forEach(function (button) {
    button.addEventListener("click", openMenu);
  });

  closeButtons.forEach(function (button) {
    button.addEventListener("click", closeMenu);
  });

  if (overlay) {
    overlay.addEventListener("click", closeMenu);
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  submenuButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var submenu = button.nextElementSibling;
      var isOpen = button.classList.toggle("is-open");

      button.setAttribute("aria-expanded", String(isOpen));

      if (submenu) {
        submenu.classList.toggle("is-open", isOpen);
      }
    });
  });

  accordionButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var item = button.closest(".accordion__item");

      if (!item) {
        return;
      }

      var isOpen = item.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
})();
