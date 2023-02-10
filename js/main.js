function autoTyping(target, text) {
  let i = 0;
  let theInterval = setInterval(() => {
    target.innerHTML += text[i];
    i++;
    if (i === text.length) {
      clearInterval(theInterval);
    }
  }, 60);
}

// Auto type my name.
setTimeout(function () {
  let theGreetText = document.querySelector(".greet .text");
  autoTyping(theGreetText, "Hi, I'm Ayoub");
}, 300);

// Fill the Job title Text with primary-theme-color.
setTimeout(function () {
  document.querySelector(".job-title").style.color =
    "var(--primary-theme-color)";
}, 1300);

// Auto type the Job Description Text
setTimeout(function () {
  let myJob = document.querySelector(".info .my-job .text");
  autoTyping(myJob, "I create high performance websites");
}, 2300);

// Toggle Menu
let toggleIcon = document.getElementById("toggleMenu");
let navLink = document.getElementById("links");

toggleIcon.addEventListener("click", function () {
  toggleIcon.classList.toggle("opened");
  navLink.classList.toggle("opened");
});

// Appear Cards in Services & Portfolio Sections
let servicesSection = document.querySelector(".services");
let servicesCards = document.querySelectorAll(".services .card");

let portfolioSection = document.querySelector(".portfolio");
let portfolioCards = document.querySelectorAll(".portfolio .card");

let skillsSection = document.querySelector(".skills");
let skillsGroup = document.querySelectorAll(".skills .skills-group");

let contactSection = document.querySelector(".contact");

window.addEventListener("scroll", function () {
  if (this.scrollY > portfolioSection.offsetTop - 350) {
    appearHeading(portfolioSection);
    appearCards(portfolioCards);
  }
  if (this.scrollY > skillsSection.offsetTop - 350) {
    appearCards(skillsGroup);
    appearHeading(skillsSection);
  }
  if (this.scrollY > servicesSection.offsetTop - 350) {
    appearCards(servicesCards);
    appearHeading(servicesSection);
  }
  if (this.scrollY > contactSection.offsetTop - 350) {
    appearHeading(contactSection);
  }
});

function appearCards(cards) {
  cards.forEach((card) => {
    if (card.classList.contains("lt")) {
      card.style.cssText = `opacity: 1; left: 0;`;
    } else if (card.classList.contains("rt")) {
      card.style.cssText = `opacity: 1; right: 0;`;
    } else {
      card.style.cssText = `opacity: 1; top: 0`;
      // console.log("FUU")
    }
  });
}

function appearHeading(section) {
  let theMainHeading = section.querySelector(".main-heading");
  theMainHeading.classList.add("active");
}

// Scroll to top Button
let scrollBtn = document.getElementById("scrollToTop");

// Appear & Disappear
window.addEventListener("scroll", function () {
  if (this.scrollY > 1000) {
    scrollBtn.classList.add("appear");
  } else {
    scrollBtn.classList.remove("appear");
  }
});

// The Functionality
scrollBtn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

// Get the Previous Mode from localStorage
let theFavMode = window.localStorage.getItem("mode");

let darkModeBtn = document.querySelector(".dark-light-btn");
let darkModeIcon = document.querySelector(".dark-light-btn .icon");

if (theFavMode) {
  if (theFavMode === "night") {
    // console.log("NIGHT");
    document.body.classList.add("dark-mode");
    darkModeIcon.classList.remove("night");
  } else {
    darkModeIcon.classList.add("night");
    // console.log("DAY");
    document.body.classList.remove("dark-mode");
  }
}

darkModeBtn.addEventListener("click", () => {
  // Turn on / off the Dark MODE
  document.body.classList.toggle("dark-mode");
  // Change ICON shape.
  darkModeIcon.classList.toggle("night");

  // Save in LocalStorage
  if (darkModeIcon.classList.contains("night")) {
    window.localStorage.setItem("mode", "day");
  } else {
    window.localStorage.setItem("mode", "night");
  }
});
