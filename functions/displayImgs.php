<?php

function displayImgs($folderName){

	  $files = glob("$folderName/*.*");
	
	  for ($i=0; $i< ceil(count($files) / 9.0); $i++){

		   echo '<div class="row-charlie">';
		   
		   for ($j=0; $j<9; $j++){
		       $image = $files[$i*9 + $j];
    		   $supported_file = array(
    		     'gif',
    		     'jpg',
    		     'jpeg',
    		     'JPG',
    		     'png'
    		   );
    		
    		   //returns the extension of the image
    		   $ext = strtolower(pathinfo($image, PATHINFO_EXTENSION));
    		   if (in_array($ext, $supported_file)) {
    			     echo '<div class="charlie"> 
    			              <div class="">
    			                <img src="'.$image .'">
    			              </div>
    			            </div>';
    		   }
		   }
		   echo '</div>';
	
	 }

}

?>
