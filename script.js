"use strict";
const navBtn = document.querySelector(".header__buttons");
const header = document.querySelector("header");
const copyright = document.querySelector(".footer__copyright span");
const heroSction = document.querySelector(".hero");
const links = document.querySelectorAll("a");

navBtn.addEventListener("click", function (e) {
  e.currentTarget.classList.toggle("hide-menu");
  header.classList.toggle("translate-nav");
});
// ****************
// ****************
// Copyright
const year = new Date().getFullYear();
copyright.textContent = year;

// Sticky nav
const obs = new IntersectionObserver(
  function (entries) {
    if (!entries[0].isIntersecting) {
      heroSction.classList.add("sticky");
      document.querySelectorAll("body").classList.add("mg");
    } else {
      heroSction.classList.remove("sticky");
      document.querySelector("body").classList.remove("mg");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px 0px 0px 0px",
  }
);
obs.observe(heroSction);

// links
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");

    if (href === "#home") {
      window.scrollTo({
        top: "0",
        behavior: "smooth",
      });
      // navbar
      navBtn.classList.remove("hide-menu");
      header.classList.remove("translate-nav");
    } else if (href !== "#") {
      const sectionEl = document.querySelector(href);
      const pos = sectionEl.offsetTop;
      window.scrollTo({
        top: pos - 79,
        behavior: "smooth",
      });
      // navbar
      navBtn.classList.remove("hide-menu");
      header.classList.remove("translate-nav");
    }
  });
});
