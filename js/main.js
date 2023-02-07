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

// Fill the Job title Text with main color.
setTimeout(function () {
  document.querySelector(".job-title").style.color = "var(--main-color)";
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

window.addEventListener("scroll", function () {
  if (this.scrollY > portfolioSection.offsetTop - 350) {
    appearCards(portfolioCards);
  }
  if (this.scrollY > skillsSection.offsetTop - 350) {
    appearCards(skillsGroup);
  }
  if (this.scrollY > servicesSection.offsetTop - 350) {
    appearCards(servicesCards);
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
