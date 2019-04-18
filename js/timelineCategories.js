timelineGridCreate();

var contains = function (arr, tag) {
  console.log("call");
  for (j = 0; j < arr.length; j++) {
    if (arr[j] == tag) {
      return true;
    }
  }
  return false;
}

var reply_click = function()
{
    var tag =  this.getAttribute('data-target-tag');
    var blurbs = document.getElementsByClassName('timeline')[0].getElementsByClassName('blurb');
    if (tag == "all") {
      for (i = 0; i < blurbs.length; i++) {
        blurbs[i].className = 'blurb'
      }
    } else {
      for (i = 0; i < blurbs.length; i++) {
        var blurb = blurbs[i];
        var tags = blurb.getAttribute('data-tags').split(' ')
        //console.log(tags + "    " + contains(tags, tag));
        if (contains(tags, tag)) {
          blurb.className = 'blurb'
        } else {
          blurb.className = "blurb ghost"
        }
      }
    }
    timelineGridCreate();
}
var buttons = document.getElementsByClassName('category-button');

for (i = 0; i < buttons.length; i++) {
  buttons[i].onclick = reply_click;
}
