window.addEventListener("scroll", function () {
  var myNav = document.querySelector("nav");
  myNav.classList.toggle("sticky", window.scrollY > 80);
  //
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 80) {
    document.querySelector("#img-logo").src =
      "website logo/300regulation-logo-black.png";
  } else {
    document.querySelector("#img-logo").src =
      "website logo/300regulation-logo-white.png";
  }
});

//  below the line code of responsive small dive for navbar menu;

var menu = document.querySelector(".menu-slide");
var menuopenBtn = document.querySelector(".menu-btn-icon");
var menucloseBtn = document.querySelector(".menu-censelbtn-icon");
var bodyTag = document.querySelector(".myBody");

menuopenBtn.addEventListener("click", function () {
  menu.classList.add("active");
  menuopenBtn.classList.add("hide");
  bodyTag.classList.add("scroll-hide");
});

menucloseBtn.addEventListener("click", function () {
  menu.classList.remove("active");
  menuopenBtn.classList.remove("hide");
  bodyTag.classList.remove("scroll-hide");
});

// ........... click link close slide menubar............

const linkClose = document.querySelector("#clickLink_close_menubar");

linkClose.addEventListener("click", function () {
  menu.classList.remove("active");
  menuopenBtn.classList.remove("hide");
  bodyTag.classList.remove("scroll-hide");
});

// link click close 1........
const linkClose1 = document.querySelector("#clickLink_close_menubar1");

linkClose1.addEventListener("click", function () {
  menu.classList.remove("active");
  menuopenBtn.classList.remove("hide");
  bodyTag.classList.remove("scroll-hide");
});

// end link click close 1.........

// link click close 2........
const linkClose2 = document.querySelector("#clickLink_close_menubar2");

linkClose2.addEventListener("click", function () {
  menu.classList.remove("active");
  menuopenBtn.classList.remove("hide");
  bodyTag.classList.remove("scroll-hide");
});

// end link click close 2.........

// link click close 3........
const linkClose3 = document.querySelector("#clickLink_close_menubar3");

linkClose3.addEventListener("click", function () {
  menu.classList.remove("active");
  menuopenBtn.classList.remove("hide");
  bodyTag.classList.remove("scroll-hide");
});

// end link click close 3.........

// link click close 4........
const linkClose4 = document.querySelector("#clickLink_close_menubar4");

linkClose4.addEventListener("click", function () {
  menu.classList.remove("active");
  menuopenBtn.classList.remove("hide");
  bodyTag.classList.remove("scroll-hide");
});

// end link click close 4.........

// link click close 5........
const linkClose5 = document.querySelector("#clickLink_close_menubar5");

linkClose5.addEventListener("click", function () {
  menu.classList.remove("active");
  menuopenBtn.classList.remove("hide");
  bodyTag.classList.remove("scroll-hide");
});

// end link click close 5.........

// link click close 6........
const linkClose6 = document.querySelector("#clickLink_close_menubar6");

linkClose6.addEventListener("click", function () {
  menu.classList.remove("active");
  menuopenBtn.classList.remove("hide");
  bodyTag.classList.remove("scroll-hide");
});

// end link click close 6.........

// link click close 7........
const linkClose7 = document.querySelector("#clickLink_close_menubar7");

linkClose7.addEventListener("click", function () {
  menu.classList.remove("active");
  menuopenBtn.classList.remove("hide");
  bodyTag.classList.remove("scroll-hide");
});

// end link click close 7.........

// link click close 8........
const linkClose8 = document.querySelector("#clickLink_close_menubar8");

linkClose8.addEventListener("click", function () {
  menu.classList.remove("active");
  menuopenBtn.classList.remove("hide");
  bodyTag.classList.remove("scroll-hide");
});

// end link click close 8.........

// link click close 9........
const linkClose9 = document.querySelector("#clickLink_close_menubar9");

linkClose9.addEventListener("click", function () {
  menu.classList.remove("active");
  menuopenBtn.classList.remove("hide");
  bodyTag.classList.remove("scroll-hide");
});

// end link click close 9.........

// link click close 10........
const linkClose10 = document.querySelector("#clickLink_close_menubar10");

linkClose10.addEventListener("click", function () {
  menu.classList.remove("active");
  menuopenBtn.classList.remove("hide");
  bodyTag.classList.remove("scroll-hide");
});

// end link click close 10.........

// link click close 11........
const linkClose11 = document.querySelector("#clickLink_close_menubar11");

linkClose11.addEventListener("click", function () {
  menu.classList.remove("active");
  menuopenBtn.classList.remove("hide");
  bodyTag.classList.remove("scroll-hide");
});

// end link click close 11.........

// ........... End up click link close slide menubar............

//..........contact from send massage input tag  code.................//
let sendInp = document.querySelector("#submit-btn");

sendInp.addEventListener("click", function () {
  alert(
    "Please contact my Gmail address or Social media. I wil fix soon contact form. Thanks for visit my website!!!!"
  );
});

// .......avalable freelancing section heair me freelaneing stop alrt code......//

let alertMass = document.querySelector("#heiarF");

alertMass.addEventListener("click", function () {
  alert(
    "Right now  i not avalable freelancing.com. Right now i am avalable fiverr.com "
  );
});
