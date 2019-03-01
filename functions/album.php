<?php
require 'php/displayImgs.php';

function newAlbum($album, $des){
  $str = <<<EOF
  <div class="info">
    <div class="row r-12 c-12">
      <div class="c-6">
        <div class="img-container-h">
          <img src="photos/$album.jpg">
          <h3 class="album-name"> $album </h3>
        </div>
      </div>
      <div class="c-6 dark-grey des">
        <h3> about the album </h3>
        <p> $des </p>
      </div>
    </div>
  </div>
  <div class="main-content">
    <div class="pictures">
EOF;
  echo $str;
      displayImgs("photos/$album");
  $str = <<<EOF
    </div>
  </div>
EOF;

  echo $str;
}
?>
