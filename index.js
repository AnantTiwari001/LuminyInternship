let color = "white";
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");

let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

let pre = document.getElementById("next");
setInterval(() => {
  p1.style.backgroundColor = "initial";
  p2.style.backgroundColor = "initial";
  p3.style.backgroundColor = "initial";
  p4.style.backgroundColor = "initial";
  let z = document.querySelector("[data-active]");
  console.log(z.id);
  if (z.id === "one") {
    p1.style.backgroundColor = "white";
  }
  if (z.id === "two") {
    p2.style.backgroundColor = "white";
  }
  if (z.id === "three") {
    p3.style.backgroundColor = "white";
  }
  if (z.id === "four") {
    p4.style.backgroundColor = "white";
  }
  pre.click();
}, 2000);

let arrow = document.getElementById("arrow");
arrow.addEventListener("click", () =>
  document.getElementById("scroll").scrollIntoView()
);

setInterval(() => {
  document.getElementById("next1").click();
}, 1500);

setTimeout(() => {
    setInterval(() => {
    document.getElementById('next2').click()
}, 1500);
}, 500);

document.getElementById('menu').addEventListener("focusin",()=>{
  document.getElementById('Nav').style.transform='translateX(0%)'
})

document.getElementById('menu').addEventListener("focusout",()=>{
  document.getElementById('Nav').style.transform='translateX(100%)'
})

