// Home Section Animation

let swipeTxtSpan = document.getElementById("swipe_txt");

let txtMsg = ["Graphics", "UI/UX", "Poster", "Web"];
// let txtMsg = ["Graphics"];
let txtMsgIndex = 0;
setInterval(() => {
  swipeTxtSpan.innerHTML =
    txtMsg[(txtMsgIndex = Math.floor(Math.random() * txtMsg.length))];
}, 1500);

// Showcase indicator

let leftPointer = document.getElementById("left-pointer");

let rightPointer = document.getElementById("right-pointer");

let sliderDiv = document.querySelector("#showcase_container");

leftPointer.addEventListener("click", (e) => {
  e.preventDefault();
  sliderDiv.scrollLeft -= 170;
});

rightPointer.addEventListener("click", (e) => {
  e.preventDefault();
  sliderDiv.scrollLeft += 170;
});

// Scroll to top
let stickBtn = document.querySelector(".sticky_btn");
let scrollBtn = document.querySelector(".scroll_top");
window.addEventListener("scrollend", () => {
  stickBtn.style.display = "none";
});

window.addEventListener("scroll", () => {
  stickBtn.style.display = "flex";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
//Animation on visible
const the_animation = document.querySelectorAll(".animation");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll-animation");
      } else {
        entry.target.classList.remove("scroll-animation");
      }
    });
  },
  { threshold: 0.5 }
);
//
for (let i = 0; i < the_animation.length; i++) {
  const elements = the_animation[i];
  if (window.innerWidth > 640) {
    observer.observe(elements);
  }
}

// Modal Toggle

let modal = document.getElementById("modal");
let showCaseContainer = document.getElementById("showcase_container");
let closeModal = document.getElementById("close-modal");

for (let index = 0; index < showCaseContainer.children.length; index++) {
  const element = showCaseContainer.children[index];
  element.addEventListener("click", () => {
    modal.style.display = "flex";
    if (index == 0) {
      modal.children[0].src = "./assets/NIKE WEBPAGE.png";
    } else if (index == 1) {
      modal.children[0].src = "./assets/Home Page.png";
    } else if (index == 2) {
      modal.children[0].src = "./assets/Game Controler Poster.png";
    } else if (index == 3) {
      modal.children[0].src = "./assets/Dashboard.png";
    } else if (index == 4) {
      modal.children[0].src = "./assets/food_main.png";
    } else if (index == 5) {
      modal.children[0].src = "./assets/air_peagus.png";
    }
  });
}

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

//Navigation Toggle on swipe
let openNav = document.getElementById("open-nav");
let closeNav = document.getElementById("close-nav");
let mobileNavBox = document.getElementById("mobile-nav-box");
let navLink = document.querySelectorAll(".nav-link");
openNav.addEventListener("click", () => {
  mobileNavBox.style.transform = "translateX(0%)";
});

closeNav.addEventListener("click", () => {
  mobileNavBox.style.transform = "translateX(100%)";
});

navLink.forEach((elm) => {
  elm.addEventListener("click", () => {
    mobileNavBox.style.transform = "translateX(100%)";
  });
});
