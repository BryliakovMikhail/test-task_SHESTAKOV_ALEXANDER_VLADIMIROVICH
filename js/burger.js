const $btn = document.querySelector(".burger");
const $nav = document.querySelector(".header__nav");
const $navLinks = document.querySelectorAll(".nav__link");
const $body = document.body;

$btn.addEventListener("click", () => {
  $btn.classList.toggle("active");
  $nav.classList.toggle("active");
  $nav.style.transition =
    "visibility 0.3s ease-in-out, transform 0.3s ease-in-out, opacity 0.3s ease-in-out";
  $body.classList.toggle("lock");
});

$nav.addEventListener("transitionend", function () {
  if (!$nav.classList.contains("active")) {
    $nav.removeAttribute("style");
  }
});

$navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if ($btn.classList.contains("active")) {
      $btn.classList.remove("active");
    }
    if ($nav.classList.contains("active")) {
      $nav.classList.remove("active");
    }
    if ($body.classList.contains("lock")) {
      $body.classList.remove("lock");
    }
  });
});
