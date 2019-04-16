var reply_click = function()
{
    var tag =  this.getAttribute('data-target-tag');
    var blurbs = document.getElementsByClassName('blurb');
    if (tag == "all") {
      for (i = 0; i < blurbs.length; i++) {
        blurbs[i].className = 'blurb'
      }
    } else {
      for (i = 0; i < blurbs.length; i++) {
        var blurb = blurbs[i];
        if (blurb.getAttribute('data-tags') == tag) {
          blurb.className = 'blurb'
        } else {
          blurb.className = "blurb ghost"
        }
      }
    }
}
var buttons = document.getElementsByClassName('category-button');

for (i = 0; i < buttons.length; i++) {
  buttons[i].onclick = reply_click;
}
