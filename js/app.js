
var script_tag = document.getElementById('import')
var blog = script_tag.getAttribute("data-blog");

if (blog != null) {
  blog = true
  prefix = "../"
} else {
  prefix = ""
}

header = document.createElement("script");
header.src = prefix + "js/header.js"

footer = document.createElement("script");
footer.src = prefix + "js/footer.js"

document.body.prepend(header);
document.body.prepend(footer);

function timelineGridCreate () {
  var blurbs = document.getElementsByClassName('timeline')[0].getElementsByClassName('blurb');
  for (i = 0; i < blurbs.length; i++) {
    blurbs[i].className = blurbs[i].className + ' grid-x grid-x-padding';
  }
}

$(document).foundation()

var scrollToTop = () => {
  var c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};
