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
  console.log(myJob);
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
let portfolioSection = document.querySelector(".portfolio");

window.addEventListener("scroll", function () {
  if (this.scrollY > servicesSection.offsetTop - 150) {
    appearCards("services");
    if (this.scrollY > portfolioSection.offsetTop) {
      // let servicesLink = document.querySelector("#links a");
      // console.log(servicesLink.href);
    }
  }
  if (this.scrollY > portfolioSection.offsetTop - 150) {
    appearCards("portfolio");
  }
});

function appearCards(section) {
  let theTargetCards = document.querySelectorAll(`.${section} .card`);
  if (section === "services") {
    theTargetCards.forEach((card) => {
      card.style.cssText = `opacity: 1; top: 0`;
    });
  } else {
    theTargetCards.forEach((card) => {
      card.style.cssText = `opacity: 1; left: 0`;
    });
  }
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
