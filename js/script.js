/** @format */

const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  preloader.classList.add("active");
});

// nav menu

const menuBtn = document.querySelector(".nav-menu-btn");
const menuContent = document.querySelector(".nav-bar");

menuBtn.addEventListener("click", () => {
  menuContent.classList.toggle("active");
  menuBtn.classList.toggle("fa-xmark");
});

window.addEventListener("scroll", () => {
  menuContent.classList.remove("active");
  menuBtn.classList.remove("fa-xmark");
});

// nav menu end

const youtubeVideoBtn = document.querySelectorAll(".youtube-modal-btn");
const youtubeVideoContent = document.querySelector(".youtube-video-modal");

for (let i = 0; i < youtubeVideoBtn.length; i++) {
  youtubeVideoBtn[i].addEventListener("click", () => {
    youtubeVideoContent.classList.add("active");
    const atr = youtubeVideoBtn[i].getAttribute("data-youtube-link");
    youtubeVideoContent.querySelector("iframe").setAttribute("src", atr);
  });
}

youtubeVideoContent.querySelector("i").addEventListener("click", () => {
  youtubeVideoContent.classList.remove("active");
      youtubeVideoContent.querySelector("iframe").setAttribute("src", null);
});
