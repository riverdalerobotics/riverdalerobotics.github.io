header = document.createElement("script");
header.src = "js/header.js"

footer = document.createElement("script");
footer.src = "js/footer.js"

document.body.prepend(header);
document.body.prepend(footer);

function timelineGridCreate () {
  var blurbs = document.getElementsByClassName('timeline')[0].getElementsByClassName('blurb');
  for (i = 0; i < blurbs.length; i++) {
    blurbs[i].className = blurbs[i].className + ' grid-x grid-x-padding';
  }
}


timelineGridCreate();

$(document).foundation()

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var scrollToTop = () => {
  var c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};
