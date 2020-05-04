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

let linebreak = document.createElement("br");

// header
let nav = document.querySelector("nav").children;
let navArr = Array.from(nav);
let navValues = Object.values(siteContent.nav);
navArr.forEach((item, ind) => item.textContent = navValues[ind]);
document.querySelector("header img").setAttribute("src", siteContent.nav["img-src"]);

// cta
document.querySelector(".cta h1").textContent = "DOM Is Awesome";
document.querySelector(".cta button").textContent = "Get Started";
document.querySelector(".cta img").setAttribute("src", "img/header-img.png");

// main content - top content
let topContent = document.querySelector(".top-content").children;
let topContentArr = Array.from(topContent);
topContentArr[0].querySelector("h4").textContent = "Features";
topContentArr[0].querySelector("p").textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
topContentArr[1].querySelector("h4").textContent = "About";
topContentArr[1].querySelector("p").textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// main content - img
document.querySelector(".middle-img").setAttribute("src", "img/mid-page-accent.jpg");

// main content - bottom content
let bottomContent = document.querySelector(".bottom-content").children;
let bottomContentArr = Array.from(bottomContent);
bottomContentArr[0].querySelector("h4").textContent = "Services";
bottomContentArr[0].querySelector("p").textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottomContentArr[1].querySelector("h4").textContent = "Product";
bottomContentArr[1].querySelector("p").textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottomContentArr[2].querySelector("h4").textContent = "Vision";
bottomContentArr[2].querySelector("p").textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// contact
let contact = document.querySelector(".contact");
contact.querySelector("h4").textContent = "Contact";
let parContactArr = Array.from(contact.querySelectorAll("p"));
parContactArr[0].textContent = "123 Way 456 Street Somewhere, USA";
parContactArr[1].textContent = "1 (888) 888-8888";
parContactArr[2].textContent = "sales@greatidea.io";

//footer
document.querySelector("footer p").textContent = "Copyright Great Idea! 2018";