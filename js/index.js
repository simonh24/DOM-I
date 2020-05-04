const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// header
let nav = document.querySelector("nav").children;
let navArr = Array.from(nav);
let navValues = Object.values(siteContent.nav);
navArr.forEach((item, ind) => item.textContent = navValues[ind]);
document.querySelector("header img").setAttribute("src", siteContent.nav["img-src"]);

// cta
let cta = siteContent.cta;
document.querySelector(".cta h1").textContent = cta.h1;
document.querySelector(".cta button").textContent = cta.button;
document.querySelector(".cta img").setAttribute("src", cta["img-src"]);

// main content - top content
let mainContent = siteContent["main-content"];
let topContent = document.querySelector(".top-content").children;
let topContentArr = Array.from(topContent);
topContentArr[0].querySelector("h4").textContent = mainContent["features-h4"];
topContentArr[0].querySelector("p").textContent = mainContent["features-content"];
topContentArr[1].querySelector("h4").textContent = mainContent["about-h4"];
topContentArr[1].querySelector("p").textContent = mainContent["about-content"];

// main content - img
document.querySelector(".middle-img").setAttribute("src", mainContent["middle-img-src"]);

// main content - bottom content
let bottomContent = document.querySelector(".bottom-content").children;
let bottomContentArr = Array.from(bottomContent);
bottomContentArr[0].querySelector("h4").textContent = mainContent["services-h4"];
bottomContentArr[0].querySelector("p").textContent = mainContent["services-content"];
bottomContentArr[1].querySelector("h4").textContent = mainContent["product-h4"];
bottomContentArr[1].querySelector("p").textContent = mainContent["product-content"];
bottomContentArr[2].querySelector("h4").textContent = mainContent["vision-h4"];
bottomContentArr[2].querySelector("p").textContent = mainContent["vision-content"];

// contact
let cont = siteContent.contact;
let contact = document.querySelector(".contact");
contact.querySelector("h4").textContent = cont["contact-h4"];
let parContactArr = Array.from(contact.querySelectorAll("p"));
parContactArr[0].textContent = cont["address"];
parContactArr[1].textContent = cont["phone"];
parContactArr[2].textContent = cont["email"];

//footer
document.querySelector("footer p").textContent = siteContent.footer.copyright;

// task 3
navArr.forEach(item => item.style.color = "green");
let taskThreeOne = document.createElement("a");
taskThreeOne.setAttribute("href", "#");
taskThreeOne.textContent = "First";
let taskThreeTwo = document.createElement("a");
taskThreeTwo.setAttribute("href", "#");
taskThreeTwo.textContent = "Last";
document.querySelector("nav").append(taskThreeTwo);
document.querySelector("nav").prepend(taskThreeOne);

// stretch
let stretchButton = document.createElement("button");
stretchButton.textContent = "Change";
stretchButton.onclick = function() {
  newNavArr = Array.from(document.querySelector("nav").children);
  if (newNavArr[1].style.color === "red") {
    newNavArr.forEach(item => item.style.color = "blue");
  } else {
    newNavArr.forEach(item => item.style.color = "red");
  }
}
document.querySelector("nav").append(stretchButton);