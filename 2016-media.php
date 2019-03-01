<?php
	require 'header.php';
	require 'functions/displayImgs.php';
	
	head("Media 2016");
?>

<?php if (substr_count($_SERVER[‘HTTP_ACCEPT_ENCODING’], ‘gzip’)) ob_start(“ob_gzhandler”); else ob_start(); ?>

	<div class="blurb">
		<div class = "pad-c">
		    <center>
    			<h2> 2016 Media </h2>
    			
    			<p>
    			This page showcases our year in pictures, from the beginning of build season to community outreach and competition.
    			</p>
    		</div>
		</center>
	</div>
	
	
		
	<div class="media-row-4">
	    <center></center>
	    <div class = "img-container">
			<?php displayImgs('images/2015-2016/Off_season');?>
		</div>
		</center>
	</div>
	
	
<!--
php function media_grid_gallery($dir = 'images/2015-2016/Off_season',
        $columns = '4', $url = false, $width = '450,560,960') {
    
        
         $width = explode(600,500, $width);
     
      $transient = md5(serialize(media_grid_gallery()));
      
    	echo media_grid_gallery();		
    	
    	$style = '<style>
    .bm-grid-' . $transient . ' {
      background: #ffffff;
      -webkit-column-count: 1;
      -webkit-column-gap: 10px;
      -webkit-column-fill: auto;
      -moz-column-count: 1;
      -moz-column-gap: 10px;
      -moz-column-fill: auto;
      column-count: 1;
      column-gap: 15px;
      column-fill: auto;
    }

    .bm-grid-item-' . $transient . ' {
      display: inline-block;
      background: #F8F8F8;
      margin: 0 0 10px;
      padding: 15px;
      padding-bottom: 5px;
      -webkit-column-break-inside: avoid;
      -moz-column-break-inside: avoid;
      column-break-inside: avoid;
    }

    .bm-hr-grid-' . $transient . ' {
      display: block;
      height: 1px;
      border: 0;
      border-top: 1px solid #ccc;
      margin: .5em 10px;
      padding: 0;
    }

    .bm-grid-img-' . $transient . ' {
      width: 100%
    }

    .bm_p_grid-' . $transient . ' {
      margin: 10px;
      font-size: .8em;
      font-family: arial;
      line-height: 1.5em;
    }
   </style>';

  /* Scan all images in the image directory */
  $image_array = glob(rtrim($dir, '/') . '/*.{jpg,jpeg,png,gif}', GLOB_BRACE);

  foreach ($image_array AS $image) {
    $image = ($url !== false) ? rtrim($url, '/') . '/' . basename($image) : $image;
    $return .= '<div class="bm-grid-item-' . $transient . '"><img class="bm-grid-img-' .$transient . '" src="' . $image . '"></div>';
  }

  $return = '<div class="bm-grid-' . $transient . '">' . $style . $return . '</div>';

 return $return;
}

    
-->

	
<?php require 'footer.php'; ?>