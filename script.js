let visibleSlide = 1;
const lastSlide = 10;

function makeSlideVisible(slideID, visibleSlide) {
  let slide = document.getElementById(slideID);
  slide.style.opacity = "100%";
  slide.style.display = "block";

  let nav = document.getElementById("nav");
  if (visibleSlide > 1) {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }
}

function makeSlideHidden(slideID) {
  let slide = document.getElementById(slideID);
  slide.style.opacity = "0%";
  slide.style.display = "none";
}

function moveRight() {
  if (lastSlide == visibleSlide) {
    return;
  }

  makeSlideHidden(`slide${visibleSlide}`, visibleSlide);
  visibleSlide = visibleSlide + 1;
  makeSlideVisible(`slide${visibleSlide}`, visibleSlide);
}

function onNavItemClick(e) {
  console.log(e);
}

window.addEventListener("DOMContentLoaded", () => {
  makeSlideVisible(`slide${visibleSlide}`, visibleSlide);

  document.addEventListener("click", () => {
    moveRight();
  });

  [1, 2, 3, 4, 5, 6, 7, 8].forEach((value) => {
    let navItem = document.getElementById(`navbar-item-${value}`);
    navItem.addEventListener("click", (e) => {
      e.stopPropagation();
      makeSlideHidden(`slide${visibleSlide}`, visibleSlide);
      visibleSlide = value;
      makeSlideVisible(`slide${visibleSlide}`, visibleSlide);
    });
  });
});
