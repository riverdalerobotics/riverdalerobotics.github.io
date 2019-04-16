header = document.createElement("script");
header.src = "js/header.js"

footer = document.createElement("script");
footer.src = "js/footer.js"

document.body.prepend(header);
document.body.prepend(footer);

$(document).foundation()

var scrollToTop = () => {
  var c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};
