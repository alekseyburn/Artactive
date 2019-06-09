let modalInitiate = function() {
  let link = document.querySelector(".button-js");
  let popup = document.querySelector(".modal");
  let overlay = document.querySelector(".overlay");
  let close = document.querySelector(".modal__close-btn");
  let lastFocus;

  if (!link || !popup || !overlay || !close) return;

  let modalShow = function() {
    popup.classList.add("modal--show");
    overlay.classList.add("overlay--show");
    lastFocus = document.activeElement;
    popup.setAttribute("tabindex", "0");
    popup.focus();
  };

  let modalClose = function() {
    popup.classList.remove("modal--show");
    overlay.classList.remove("overlay--show");
    lastFocus.focus();
  };

  link.addEventListener("click", function(event) {
    event.preventDefault();
    modalShow();
  });

  close.addEventListener("click", function(event) {
    event.preventDefault();
    modalClose();
  });

  overlay.addEventListener("click", function(event) {
    event.preventDefault();
    modalClose();
  });

  document.addEventListener("keyup", function(event) {
    if (event.defaultPrevented) {
      return;
    }

    var key = event.keyCode;

    if (key === "Escape" || key === "Esc" || key === 27) {
      event.preventDefault();
      if (popup.classList.contains("modal--show")) {
        modalClose();
      }
    }
  });
};

modalInitiate();
