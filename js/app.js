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

function gallery(page) {
  var galleryPage = document.getElementById("gallery-page");

  var path = "images/gallery/gallery-pages/" + page;

  var i=1;
  var currPath= path + "/image" + i + ".png";
  var notDone = true;
  while (notDone) {
    $.get(currPath)
      .done(function() {
        var img = document.createElement("img");
        img.src = currPath;
        galleryPage.appendChild(img);
        i++;
      }).fail(function() {
          notDone = false;
      })
  }

  while(notDone) {
    var currPath= path + "/image" + i + ".png";
    if (UrlExists("https://www.riverdalerobotics.github.io" + currPath)) {
      var img = document.createElement("img");
      img.src = currPath;
      galleryPage.appendChild(img);
    } else {
      notDone = false;
    }
  }
}

function UrlExists(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}
