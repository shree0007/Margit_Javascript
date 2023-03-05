const backButton = document.querySelector("#backToTop");
const header = document.querySelector("header");
const mobButton = document.querySelector(".mobile");
const nav = document.querySelector("nav ul");
const menuItems = document.querySelectorAll("nav ul li a");
const modalButton = document.querySelector("#modalButton");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector("#close");

window.onscroll = function () {
  scrollfunction();
};

const scrollfunction = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backButton.style.display = "block";
    header.classList.add("bg");
  } else {
    backButton.style.display = "none";
    header.classList.remove("bg");
  }
};

const getToTop = () => {
  document.body.scrollTop = 0; // for safari
  document.documentElement.scrollTop = 0; // for chrome, firefox, ....
};

const mobMenu = () => {
  for (const link of menuItems) {
    link.addEventListener("click", mobMenu);
  }
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
  } else {
    nav.classList.add("responsive");
  }
};

const modalShow = () => {
  overlay.classList.toggle("visible");
};

backButton.addEventListener("click", getToTop);
mobButton.addEventListener("click", mobMenu);
modalButton.addEventListener("click", modalShow);
closeButton.addEventListener("click", modalShow);

// shorter way :: for scrollfunction
// document.body.scrollTop > 200 || document.documentElement.scrollTop > 200
//     ? (backButton.style.display = "block") //if     condition? true:false
//     : (backButton.style.display = "none"); //else
