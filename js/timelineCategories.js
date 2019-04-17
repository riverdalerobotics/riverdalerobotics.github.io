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
    var showingBlurbs = []
    var hidingBlurbs = []
    if (tag == "all") {
      waithide(blurbs, [])
    } else {
      for (i = 0; i < blurbs.length; i++) {
        var blurb = blurbs[i];
        var tags = blurb.getAttribute('data-tags').split(' ')
        //console.log(tags + "    " + contains(tags, tag));
        if (contains(tags, tag)) {
          showingBlurbs.push(blurb)
        } else {
          hidingBlurbs.push(blurb)
        }
      }
    }
    waithide(showingBlurbs, hidingBlurbs)
    timelineGridCreate();
}
var buttons = document.getElementsByClassName('category-button');

for (i = 0; i < buttons.length; i++) {
  buttons[i].onclick = reply_click;
}

function waithide(show, hide)
{
  for (i = 0; i < show.length; i++) {
    var blurb = show[i]
    var blurbSuffix = blurb.className.split(' ')[1]
    if (blurbSuffix == 'hide' || blurbSuffix == 'ghost') {
      blurb.className = "blurb show"
    }
  }
  for (i = 0; i < hide.length; i++) {
    var blurb = hide[i]
    var blurbSuffix = blurb.className.split(' ')[1]
    console.log(blurbSuffix);
    if (blurbSuffix == 'grid-x' || blurbSuffix == 'show' || blurbSuffix == undefined) {
      blurb.className = "blurb hide-transition"
    }
  }

  setTimeout(
    function removethis()
    {
      for (i = 0; i < show.length; i++) {
        var blurb = show[i]
        blurb.className = "blurb"
      }
      for (i = 0; i < hide.length; i++) {
        var blurb = hide[i]
        blurb.className = "blurb ghost"
      }
    }, 1000);
}
