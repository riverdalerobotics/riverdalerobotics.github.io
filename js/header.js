includeHeader();

function includeHeader () {

  var navBar = document.getElementById("navbar");

  var anchor = document.createElement("a")
  anchor.href = "index.html"
  navBar.appendChild(anchor);

  var leftBar = document.createElement("div")
  leftBar.className = "top-bar-left"
  anchor.appendChild(leftBar);

  var leftDropDownList = document.createElement("ul");
  leftDropDownList.className = "dropdown menu";
  leftDropDownList.setAttribute("data-dropdown-menu","");
  leftBar.appendChild(leftDropDownList);

  var logo = document.createElement("img");
  logo.src = "images/r3p2-logo-white.png";
  leftDropDownList.appendChild(logo);

  var title = document.createElement("li");
  title.className = "menu-text";
  title.appendChild(document.createTextNode("Riverdale Raiders Robotics"));
  leftDropDownList.appendChild(title);

  var rightBar = document.createElement("div")
  rightBar.className = "top-bar-right"
  navBar.appendChild(rightBar);

  var rightDropDownMenu = document.createElement("ul");
  rightDropDownMenu.className = "dropdown menu";
  rightDropDownMenu.setAttribute("data-dropdown-menu","");
  rightBar.appendChild(rightDropDownMenu);

  teamMenu = createMenu (rightDropDownMenu, "Team", "#");

  addItem(teamMenu, "Who are we", "about.html");
  addItem(teamMenu, "Executive Team", "exec.html");
  addItem(teamMenu, "History", "history.html");
  addItem(teamMenu, "Mentors", "mentors.html");

  var competitionMenu = createMenu (rightDropDownMenu, "Competition", "competition.html");

  addItem(competitionMenu, "About First", "first.html");
  addItem(competitionMenu, "2019", "deep-space.html");
  addItem(competitionMenu, "2018", "power-up.html");
  addItem(competitionMenu, "2017", "steamworks.html");
  addItem(competitionMenu, "2016", "stronghold.html");

  addItem (rightDropDownMenu, "Community", "community.html");
  addItem (rightDropDownMenu, "Sponsors", "sponsors.html");
  addItem (rightDropDownMenu, "Gallery", "gallery.html");

}

function createMenu (menu, headTitle, headHREF) {

  var listItem = addItem(menu, headTitle, headHREF);

  var menu = document.createElement("ul");
  menu.className = "menu vertical";
  listItem.appendChild(menu);

  return menu

}

function addItem(menu, text, href) {

  var listItem = document.createElement("li");
  menu.appendChild(listItem);

  var anchor = document.createElement("a");
  anchor.href = href;
  anchor.appendChild(document.createTextNode(text));
  listItem.appendChild(anchor);

  return listItem;

}

/*

  <div class="top-bar-right">

    <ul class="dropdown menu" data-dropdown-menu>
      <li>
        <a>Team</a>
        <ul class="menu vertical">
          <li><a href="about.html">Who are we</a></li>
          <li><a href="exec.html">Executive Team</a></li>
          <li><a href="history.html">History</a></li>
          <li><a href="mentors.html">Mentors</a></li>
        </ul>
      </li>
      <li>
        <a href = "competition.html">Competition</a>
        <ul class="menu vertical">
          <li><a href="first.html">About FIRST</a></li>
          <li><a href="power-up.html">2018</a></li>
          <li><a href="steamworks.html">2017</a></li>
          <li><a href="stronghold.html">2016</a></li>
        </ul>
      </li>
      <li>
        <a href ="community.html">Community</a>
      </li>
      <li>
        <a href="sponsors.html">Sponsors</a>
      </li>
      <li>
        <a href="gallery.html">Gallery</a>
      </li>
    </ul>

  </div>
*/
