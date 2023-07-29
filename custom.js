window.addEventListener("scroll", function () {
  const body = document.querySelector("body");
  if (window.scrollY > 0) {
    body.classList.add("scrolled");
  } else {
    body.classList.remove("scrolled");
  }
});

const links = document.querySelectorAll(".navbar a");
links.forEach((link) => {
  link.addEventListener("click", function (event) {
    links.forEach((link) => {
      link.classList.remove("change-color");
    });

    // Thêm lớp "change-color" cho thẻ <a> được click
    this.classList.add("change-color");
  });
});
