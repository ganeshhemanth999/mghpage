//hiding the menu
const helloPage = document.getElementById("hello-page");
const helloWish = document.getElementById("hello-wish");
const exploreAi = document.getElementById("exploreAi");
const explore = document.getElementById("explore");
const scrollbar = document.getElementById("scrollbar");
const y = document.getElementById("menu");
const bodyPage = document.getElementById("body-wrap");

const menuHide = document.getElementById("logo");

menuHide.addEventListener("mousedown", showHideMenu);

helloPage.addEventListener("click", showHideMenu);
menuHide.addEventListener("touchcancel", showHideMenu);

function showHideMenu() {
  setTimeout(function () {
    if (y.style.display === "flex") {
      y.style.opacity = "1";
      y.style.transition = "opacity 0.4s ease 1s";
      y.style.display = "none";
      y.style.position = "fixed";
      y.style.marginBottom = "65vh";
    } else {
      y.style.opacity = "1";
      y.style.transition = "opacity 0.4s ease 1s";
      y.style.position = "fixed";
      y.style.display = "flex";
      y.style.marginBottom = "65vh";
    }
  }, 100);
}

helloPage.addEventListener("click", showHideExplore);
menuHide.addEventListener("click", showHideExplore);
function showHideExplore() {
  const msq = window.matchMedia("(max-width: 1400px)");
  if (msq.matches) {
    const ex = document.getElementById("exp");
    const logosvg = document.getElementById("logosv");
    logosvg.classList.toggle("logosvgactive");
    ex.classList.toggle("exphide");
  }
}

const mq = window.matchMedia("(min-width: 1100px)");
//scaling th home-page down
const body = document.getElementById("body-wrap");
const logoWrap = document.getElementById("logo");

logoWrap.addEventListener("mouseover", scalePage);
function scalePage() {
  const mq = window.matchMedia("(min-width: 1100px)");
  if (mq.matches) {
    const helloPage = document.getElementById("hello-page");
    helloPage.style.transition = "all 0.4s ease";
    helloPage.style.transform = "scale(0.8,0.8)";
  }
}

//scaling the home-page up

logoWrap.addEventListener("mouseout", scalePage1);
function scalePage1() {
  const mq = window.matchMedia("(min-width: 1100px)");
  if (mq.matches) {
    const helloPage = document.getElementById("hello-page");
    helloPage.style.transition = "all 0.4s ease";
    helloPage.style.transform = "scale(1,1)";
  }
}

helloPage.addEventListener("click", pageMove1);

function pageMove1() {
  const body = document.getElementById("body-wrap");
  body.style.transition = "all 0.4s ease";
  body.classList.toggle("bodyStyle");
}

//move the hello-page far down

logoWrap.addEventListener("mousedown", pageMove);
logoWrap.addEventListener("touchcancel", pageMove);
function pageMove() {
  const body = document.getElementById("body-wrap");
  body.style.transition = "all 0.4s ease";
  body.classList.toggle("bodyStyle");
}

exploreAi.addEventListener("click", exEvent);
exploreAi.addEventListener("click", createElements);
helloPage.addEventListener("wheel", scrollEvents);
helloPage.addEventListener("wheel", createElements);
helloPage.addEventListener("keypress", scrollEvents);

function scrollEvents(event) {
  event.preventDefault();

  if (event.deltaY > 0) {
    helloPage.style.transition = "opacity 0.4s ease";
    helloPage.className = "helloPageChange";
    helloPage.style.animationName = "changeImg";
    helloWish.style.display = "none";
    helloPage.style.opacity = "1";
  } else {
    helloPage.style.transition = "opacity 0.4s ease";
    helloPage.className = "hello-page";
    helloWish.style.display = "flex";
    helloPage.style.opacity = "1";
  }
}

function createElements() {
  if (createElements.done) return;
  createElements.done = true;

  const pagebrief = document.createElement("div");
  const num = document.createElement("h2");
  const line = document.createElement("div");
  const intro = document.createElement("h2");
  const intro1 = document.createElement("h1");
  const counter = document.createElement("h2");
  counter.id = "counter";
  num.innerHTML = "01";
  intro.innerHTML = "About";
  intro1.innerHTML = "Hey there!! <br>How you doing?";
  pagebrief.appendChild(num);
  pagebrief.appendChild(line);
  pagebrief.appendChild(intro);
  helloPage.appendChild(pagebrief);
  helloPage.appendChild(intro1);
  helloPage.appendChild(counter);
  counter.innerHTML = "";
  pagebrief.style.color = "white";
  intro1.style.color = "white";
  intro1.style.fontSize = "2.5rem";
  pagebrief.style.display = "flex";
  pagebrief.style.marginTop = "10vh";
  pagebrief.style.marginLeft = "2vh";
  intro1.style.marginTop = "2rem";
  intro1.style.marginLeft = "2vh";
  line.style.width = "4rem";
  line.style.height = "1px";
  line.style.backgroundColor = "white";
  line.style.alignSelf = "center";
  line.style.marginLeft = "1rem";
}
function exEvent(e) {
  e.preventDefault();
  helloPage.style.background =
    "url(../images/andy-kelly-0E_vhMVqL9g-unsplash.jpg)";
  helloPage.style.backgroundSize = "cover";
  helloPage.className = "helloPageChange";
  helloPage.style.animationName = "changeImg";
  helloWish.style.display = "none";
}

// ripple effect
const menubtn1 = document.getElementById("rb1");
const menubtn2 = document.getElementById("rb2");
const menubtn3 = document.getElementById("rb3");
const menubtn4 = document.getElementById("rb4");
const menubtn5 = document.getElementById("rb5");

menubtn1.addEventListener("click", createRipple);
menubtn2.addEventListener("click", createRipple);
menubtn3.addEventListener("click", createRipple);
menubtn4.addEventListener("click", createRipple);
menubtn4.addEventListener("click", createRipple);

function createRipple(e) {
  const mc = window.matchMedia("(max-width: 1100px)");
  if (mc.matches) {
    var d = 100;
    var circle = document.createElement("div");
    this.appendChild(circle);
    circle.style.width = circle.style.height = d + "px";
    circle.style.left = e.clientX - d / 2 + "px";
    circle.style.top = e.clientY - d / 2 + "px";

    circle.classList.add("ripple");
  }
}

menuHide.addEventListener("click", createRipple1);

function createRipple1(e) {
  const mc = window.matchMedia("(max-width: 1100px)");
  if (mc.matches) {
    var circle = document.createElement("div");
    this.appendChild(circle);

    var d = Math.min(this.clientWidth, this.clientHeight);
    circle.style.width = circle.style.height = d + "px";
    circle.style.position = "fixed";
    circle.style.left = e.clientX - d / 2 + "px";
    circle.style.top = e.clientY - d / 2 + "px";

    circle.classList.add("ripple1");
  }
}
