// ****************************************************
// *************** Window Load ************************
// ****************************************************

window.addEventListener("load", function () {
  // [1] Get the Saved MODE
  let savedMode = window.localStorage.getItem("mode");

  if (savedMode === "day") {
    darkModeOff();
    sunToMoon();
  } else {
    darkModeOn();
  }

  // [2] Get the Saved direction
  let savedDir = window.localStorage.getItem("direction");
  let languagesBtn = document.getElementById("languagesBtn");

  if (savedDir === "rtl") {
    let lang = "ar";
    transTo(lang);
    changeDir(lang);
    greetAutoTyping(lang);
    jobTitleFill(lang);
    jobDescAutoTyping(lang);

    // Update data-lang attribute for lang btn
    languagesBtn.setAttribute("data-lang", "ar");
  } else {
    // This function will run if the savedDir = ltr OR
    //  there is NO data in the localStorage.
    let lang = "en";
    transTo(lang);
    changeDir(lang);
    greetAutoTyping(lang);
    jobTitleFill(lang);
    jobDescAutoTyping(lang);
  }

  // [3] Disable the languages button on load
  disableBtn(languagesBtn, 4200);
});

// ****************************************************
// ******************* Dark Mode **********************
// ****************************************************
let darkModeBtn = document.querySelector(".dark-light-btn");

darkModeBtn.addEventListener("click", () => {
  let darkModeIcon = document.querySelector(".dark-light-btn .icon");
  // Turn on / off the Dark MODE
  document.body.classList.toggle("dark-mode");
  // Change ICON shape.
  darkModeIcon.classList.toggle("night");
  // Save Mode in LocalStorage
  let isDark = document.body.classList.contains("dark-mode");
  if (isDark) {
    window.localStorage.setItem("mode", "night");
  } else {
    window.localStorage.setItem("mode", "day");
  }
});

function darkModeOn() {
  document.body.classList.add("dark-mode");
}

function darkModeOff() {
  document.body.classList.remove("dark-mode");
}

function sunToMoon() {
  document.querySelector(".dark-light-btn .icon").classList.add("night");
}

// ****************************************************
// ************ Toggle Menu ***************************
// ****************************************************

let toggleIcon = document.getElementById("toggleMenu");

toggleIcon.addEventListener("click", function () {
  let navLink = document.getElementById("links");

  toggleIcon.classList.toggle("opened");
  navLink.classList.toggle("opened");
});

// ****************************************************
// ************ Landing Text Functions ****************
// ****************************************************

function greetAutoTyping(language) {
  let theGreetText = document.querySelector(".greet .text");
  // Reset to Empty text
  theGreetText.textContent = "";

  if (language === "ar") {
    setTimeout(() => autoTyping(theGreetText, "مرحباً، أنا أيوب"), 300);
  } else {
    setTimeout(() => autoTyping(theGreetText, "Hi, I'm Ayoub"), 300);
  }
}

function jobTitleFill(language) {
  let theJobTitle = document.querySelector(".job-title");

  if (language === "ar") {
    theJobTitle.classList.add("ar");
    setTimeout(() => theJobTitle.classList.add("filled"), 1600);
  } else {
    theJobTitle.classList.remove("ar");
    setTimeout(() => theJobTitle.classList.add("filled"), 1200);
  }
}

function jobDescAutoTyping(language) {
  let myJobDesc = document.querySelector(".info .my-job .text");
  myJobDesc.textContent = "";

  if (language === "ar") {
    setTimeout(
      () => autoTyping(myJobDesc, "مختص في انشاء مواقع ذات اداء عالي."),
      2100
    );
  } else {
    setTimeout(
      () => autoTyping(myJobDesc, "I create high performance websites."),
      2100
    );
  }
}

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

// ****************************************************
// ********* Appear | Disappear Sections **************
// ****************************************************
window.addEventListener("scroll", function () {
  let servicesSection = document.querySelector(".services");
  let servicesCards = document.querySelectorAll(".services .card");

  let portfolioSection = document.querySelector(".portfolio");
  let portfolioCards = document.querySelectorAll(".portfolio .card");

  let skillsSection = document.querySelector(".skills");
  let skillsGroup = document.querySelectorAll(".skills .skills-group");

  let contactSection = document.querySelector(".contact");

  let theIndent = 250;

  if (this.scrollY > portfolioSection.offsetTop - theIndent) {
    appearHeading(portfolioSection);
    appearCards(portfolioCards);
  }
  if (this.scrollY > skillsSection.offsetTop - theIndent) {
    appearHeading(skillsSection);
    appearCards(skillsGroup);
  }
  if (this.scrollY > servicesSection.offsetTop - theIndent) {
    appearHeading(servicesSection);
    appearCards(servicesCards);
  }
  if (this.scrollY > contactSection.offsetTop - theIndent) {
    appearHeading(contactSection);
  }
});

function appearCards(cards) {
  cards.forEach((card) => {
    card.classList.add("visible");
  });
}

function appearHeading(section) {
  let theMainHeading = section.querySelector(".main-heading");
  theMainHeading.classList.add("active");
}

// Switch Languages
let languagesBtn = document.getElementById("languagesBtn");

languagesBtn.addEventListener("click", function (e) {
  let currentLang = e.target.getAttribute("data-lang");

  if (currentLang === "en") {
    // Change HTML attribute value
    e.target.setAttribute("data-lang", "ar");
    // Change JS variable value
    currentLang = "ar";
    // Change LocalStorage item value
    window.localStorage.setItem("direction", "rtl");

    // Retype the Autotype Text in Landing
    greetAutoTyping("ar");
    jobTitleFill("ar");
    jobDescAutoTyping("ar");
  } else {
    e.target.setAttribute("data-lang", "en");
    currentLang = "en";
    window.localStorage.setItem("direction", "ltr");

    // Retype the Autotype Text in Landing
    greetAutoTyping("en");
    jobTitleFill("en");
    jobDescAutoTyping("en");
  }
  disableBtn(e.target, 4200);
  transTo(currentLang);
  changeDir(currentLang);
});

let transTo = (language) => {
  let allElements = document.querySelectorAll("[data-transKey]");

  let myReq = new XMLHttpRequest();
  myReq.open("GET", "../data/langs.json");
  myReq.send();
  myReq.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let jsData = JSON.parse(myReq.responseText);

      allElements.forEach((ele) => {
        let transKey = ele.getAttribute("data-transKey");
        ele.textContent = jsData[language][transKey];
      });
    }
  };
};

let changeDir = (language) => {
  let navbar = document.querySelector(".landing nav");
  // Change Page Dir
  if (language === "ar") {
    document.body.classList.add("arabic");
    navbar.classList.add("arabic");
  } else {
    document.body.classList.remove("arabic");
    navbar.classList.remove("arabic");
  }

  // Change Landing Image Place
  changeImagePlace(language);
};

// Change Landing Image Place
function changeImagePlace(language) {
  let landingImage = document.querySelector(".landing .hero .image");

  if (window.innerWidth > 767) {
    if (language === "ar") {
      landingImage.classList.add("left");
      landingImage.classList.remove("right");
    } else {
      landingImage.classList.add("right");
      landingImage.classList.remove("left");
    }
  }
}

function disableBtn(theBtn, duration) {
  // Disable the button for 3s To solve a BUG.
  theBtn.classList.add("disabled");
  setTimeout(function () {
    theBtn.classList.remove("disabled");
  }, duration);
}

// ****************************************************
// *************** Scroll to Top **********************
// ****************************************************
let scrollBtn = document.getElementById("scrollToTop");

// Appear & Disappear
window.addEventListener("scroll", function () {
  let skillsSection = document.querySelector(".skills");

  if (this.scrollY > skillsSection.offsetTop - 350) {
    scrollBtn.classList.add("visible");
  } else {
    scrollBtn.classList.remove("visible");
  }
});

// Event Listener
scrollBtn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
