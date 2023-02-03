// Creator div

// let theCreatorDiv = document.getElementById("creator");

// window.addEventListener("load", function () {
//   if (this.scrollY === 0) {
//     theCreatorDiv.classList.remove("hidden");
//     this.document.body.style.overflowY = "hidden";
//   }
// });

// setTimeout(() => {
//   theCreatorDiv.classList.add("hidden");
//   document.body.style.overflowY = "visible";
// }, 3000);

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
