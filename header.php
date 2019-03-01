<?php
function head($title){
    
if($title == "Welcome"){
	echo '<html class="index" lang="en">';
}else{
	echo '<html>';
}

	$str = <<<EOF
    	<head>
    		<meta charset="utf-8" />
    		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    		<title>R3P2 | $title </title>
    		<link rel="shortcut icon" type="image/png" href="images/favicon.ico" />
    		<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700|Roboto+Condensed:400,700" rel="stylesheet">
    		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/motion-ui/1.1.1/motion-ui.min.css"/>
    		<link rel="stylesheet" href="http://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.min.css"/>
    		<link rel="stylesheet" href="foundation-icons/foundation-icons.css" />
    		<link rel="stylesheet" type="text/css" href="css/style.css" />
    	</head>

    	<body>

      	    <!-- Start Top Bar -->
      	    <div data-sticky-container >
<div style="position: fixed; width: 100%; z-index: 999;"  data-sticky data-options="marginTop:0;"data-top-anchor="1" data-btm-anchor="content:bottom">
    		<div class="title-bar" data-responsive-toggle="main-menu" data-hide-for="medium" >
    		        <button class="menu-icon" type="button" data-toggle></button>
    		        <div class="title-bar-title">Riverdale Raiders Robotics</div>
    	    	</div>
    	    <div class="top-bar" id="main-menu">
    	        <div class="top-bar-left">
    	            <ul class="dropdown menu"  data-dropdown-menu>
    	                <li>
    	                    <a href="index.php"><img class="logo" src="images/r3p2-logo-white.png" /></a>
    	                </li>
    	                <li class="menu-text">Riverdale Raiders Robotics</li>
    	            </ul>
    	        </div>

    	        <div class="top-bar-right">
    	            <ul class="dropdown menu" data-dropdown-menu data-responsive-menu="drilldown medium-dropdown">
    	                <li>
    	               	    <a href="team.php"> Team </a>
    	                    <ul class="menu">
    	                        <li><a href="team.php">Who we are</a></li>
    	                        <li>
    	                        	<a href="team.php">Members</a>
    	                        	<ul class="menu">
    	                        	   <li><a href="student-leaders.php">Executive Team</a>
    	                        	   <li><a href="history.php">History</a>
    	                        	</ul>   	                        
    	                   	</li>
    	                        <li><a href="mentors.php">Mentors</a></li>
    	                       <!-- <li><a href = "schedule.php">Schedule</a></li>-->
    	                    </ul>
    	                </li>
    	                <li class="has-submenu">
    	                	<a href="competition.php">Competition</a>
    	                	<ul class="submenu menu vertical" data-submenu>
    	                	    <li><a href="robots.php">Robots</a></li>
    	                	    <li><a href="first.php">About FIRST</a></li>
    	                	</ul>
    	             	</li>
    	             	<li class="has-submenu">
    	             	<a href="media.php">Off Season</a>
    	             	<ul class="submenu menu vertical" data-submenu>
    	             		<li><a href="2016-media.php">2016</a></li>
    	             	<!-- <li><a href="2017-media.php">2017</a></li>
    	             		<li><a href="2018-media.php">2018</a></li>
    	             		<li><a href="2019-media.php">2019</a></li> -->
    	             	</ul>
    	             	</li>
    	             	
    	                <li><a href="sponsors.php">Sponsors</a></li>
    	                <li><a href="community.php">Community</a></li>
    	                <li><a href="contact.php">Get Involved</a></li>
    	            </ul>
    	        </div>
    	    </div>
    	   </div>
    	   </div>
    	    <!-- End Top Bar -->
EOF;

  echo $str;
}
 ?>