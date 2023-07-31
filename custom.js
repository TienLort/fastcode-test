window.addEventListener("scroll", function () {
  const body = document.querySelector("body");
  if (window.scrollY > 0) {
    body.classList.add("scrolled");
  } else {
    body.classList.remove("scrolled");
  }
});

const links = document.querySelectorAll(".navbar .nav-link");
links.forEach((link) => {
  link.addEventListener("click", function (event) {
    links.forEach((link) => {
      link.classList.remove("change-color");
    });
    this.classList.add("change-color");
  });
});

const numberLinks = document.querySelectorAll(".number-link");
numberLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    // event.preventDefault();
    numberLinks.forEach((otherLink) => {
      otherLink.classList.remove("active");
    });
    this.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  function isAtBottom() {
    var windowHeight = window.innerHeight;
    var fullHeight = document.documentElement.scrollHeight;
    var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    return scrollPosition + windowHeight >= fullHeight;
  }

  function highlightCurrentSection() {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll(".navbar .nav-link");
    const numberLinks = document.querySelectorAll(".number-link");

    let currentSectionIndex = sections.length - 1;
    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect();

      if (rect.top <= 0 && rect.bottom >= 0) {
        currentSectionIndex = i;
        break;
      }
    }
    numberLinks.forEach((otherLink) => {
      otherLink.classList.remove("active");
    });
    numberLinks[currentSectionIndex].classList.add("active");
    links.forEach((link) => link.classList.remove("change-color"));

    links[currentSectionIndex].classList.add("change-color");

    if (isAtBottom()) {
      numberLinks.forEach((otherLink) => {
        otherLink.classList.remove("active");
      });
      links.forEach((link) => link.classList.remove("change-color"));
      numberLinks[currentSectionIndex + 1].classList.add("active");

      links[currentSectionIndex + 1].classList.add("change-color");
    }
  }

  highlightCurrentSection();

  window.addEventListener("scroll", highlightCurrentSection);
});

function toggleNav() {
  var navLinks = document.getElementById("navLinks");
  var navbarNav = document.getElementById("navbarNav");
  if (navLinks.classList.contains("responsive")) {
    navLinks.classList.remove("responsive");
    navbarNav.classList.remove("responsive");
  } else {
    navLinks.classList.add("responsive");
    navbarNav.classList.add("responsive");
  }
}
