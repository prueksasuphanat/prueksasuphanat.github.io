//  Toggle menu
function ToggleMenu() {
  const ToggleMenu = document.querySelector(".nav__menu");
  ToggleMenu.classList.add("show-menu");
}

//  Close menu
function CloseMenu() {
  const CloseMenu = document.querySelector(".show-menu");
  CloseMenu.classList.remove("show-menu");
}

function toggleContent(type) {
  const educationContent = document.querySelector(
    ".education__content--education"
  );
  const experienceContent = document.querySelector(
    ".education__content--experience"
  );

  const educationBtn = document.querySelector(".education__btn--education");
  const experienceBtn = document.querySelector(".education__btn--experience");

  if (type === "education") {
    educationContent.classList.add("education__content-active");
    experienceContent.classList.remove("education__content-active");
    educationBtn.classList.add("education__active");
    experienceBtn.classList.remove("education__active");
  } else if (type === "experience") {
    experienceContent.classList.add("education__content-active");
    educationContent.classList.remove("education__content-active");
    experienceBtn.classList.add("education__active");
    educationBtn.classList.remove("education__active");
  }
}

// Scrollup

function Scrollup() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", function () {
  const scrollUp = document.querySelector(".scrollup");
  if (window.scrollY >= 200) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
});

// Menu link

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav__link");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const sectionId = this.getAttribute("href").substring(1);
      scrollToSection(sectionId);
    });
  });
});
