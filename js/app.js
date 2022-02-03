const navbar = document.querySelector(".main-header");

window.onscroll = function () {
  if (window.pageYOffset >= 2) {
    navbar.classList.add("fixed-bar");
    navbar.style.backgroundColor = `rgba(240, 240, 240,.8)`;
  } else {
    navbar.classList.remove("fixed-bar");
    navbar.style.backgroundColor = `rgb(240, 240, 240)`;
  }
};

var slideIndex = 0;
showDiapo(slideIndex);

// Next & previous buttons
var btn_left = document.getElementById("btn_left");
var btn_right = document.getElementById("btn_right");

btn_left.onclick = function () {
  avanzaDiapo(-1);
};
btn_right.onclick = function () {
  avanzaDiapo(1);
};

function avanzaDiapo(n) {
  showDiapo((slideIndex += n));
}

// Dots controls
function currentDiapo(n) {
  showDiapo((slideIndex = n));
}

// Carousel function: loops over the elements.
function showDiapo(n) {
  // select all elements with class "slide" and then "dot"
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");

  // return to first slide if going next from last one
  if (n > slides.length - 1) {
    slideIndex = 0;
  }
  // got to last slide if coming back from first one
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  // loop over the slides to hide them
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // loop over the dots to switch them to inactive
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }

  // display the slide at current index
  slides[slideIndex].style.display = "grid";
  // display the slide for the corresponding active dot
  dots[slideIndex].className += " active";
}

// Go Top button

goTop = document.getElementById("goTop");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
    goTop.style.display = "block";
  } else {
    goTop.style.display = "none";
  }
};
