"use strict";

(function () {
  const openBtn = document.querySelector(".story-view");
  const source = document.getElementById("comic-story");
  const dialog = document.getElementById("comic-lightbox");
  const viewer = document.getElementById("comic-viewer");
  if (!openBtn || !source || !dialog || !viewer) return;

  const closeBtns = dialog.querySelectorAll("[data-comic-close]");
  const closeBtn = dialog.querySelector(".comic-lb-close");
  let lastFocus = null;

  function focusables() {
    return [closeBtn, viewer].filter(Boolean);
  }

  function open() {
    lastFocus = openBtn;
    viewer.innerHTML = "";
    const clone = source.cloneNode(true);
    clone.removeAttribute("id");
    viewer.appendChild(clone);
    dialog.hidden = false;
    dialog.classList.add("is-open");
    document.body.classList.add("comic-lb-open");
    viewer.scrollTop = 0;
    closeBtn.focus();
  }

  function close() {
    if (dialog.hidden) return;
    dialog.hidden = true;
    dialog.classList.remove("is-open");
    document.body.classList.remove("comic-lb-open");
    viewer.innerHTML = "";
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  openBtn.addEventListener("click", open);
  closeBtns.forEach(function (el) {
    el.addEventListener("click", close);
  });

  document.addEventListener("keydown", function (event) {
    if (dialog.hidden) return;
    if (event.key === "Escape") {
      event.preventDefault();
      close();
      return;
    }
    if (event.key !== "Tab") return;
    const list = focusables();
    const first = list[0];
    const last = list[list.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
})();
