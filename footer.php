<?php
    $str = <<<EOF
    
<!--Footer ------------------------>
    	<footer class="footer">
		<div class="row">
		  <div class="small-12 medium-6 medium-push-6 columns">
		    <p class="logo show-for-small-only"><i class="fi-target"></i> Riverdale Raiders Robotics</p>
		    <form class="footer-form">
		      <div class="row">
		        <div class="medium-9 medium-push-1 columns">
		          <label>
		            <label for="email" class="contact">Contact Us</label>
		            <input type="email" id="email" placeholder="Our contact is currently under revision" />
		          </label>
		        </div>
		      </div>
		      <div class="row">
		        <div class="medium-9 medium-push-4 columns">
		          <label>
		            <textarea rows="5" id="message" placeholder="Please email us directly if you have any questions at riverdaleraidersrobotics@gmail.com. We are unable to recieve emails from this location at the moment. Sorry for the inconvenience."></textarea>
		          </label>
		        </div>
		        <div class="row">
		          <div class="medium-9 medium-push-1 columns">
		            <button class="submit" type="submit" value="riverdaleraidersrobotics@gmail.com">Send</button>
		          </div>
		        </div>
		      </div>
		    </form>
		  </div>
	
			  <div class="small-12 medium-6 medium-pull-6 columns">
				    <p class="logo hide-for-small-only"><i class="fi-target"></i> Riverdale Raiders Robotics</p>
				    
				    <hr>
				    
				    <p class = "copywrite"><i class="fi-home"></i> Riverdale Collegiate Insitute</p>
				    <p class = "copywrite"><i class="fi-marker"></i> 1094 Gerrard St E, Toronto, ON M4M 2A1</p>
				    <p class = "copywrite"><i class="fi-telephone"></i> (416) 393-9820</p>
				
				
				    <p class="footer-links">
					      <a href="index.php">Home</a>
					      <a href="team.php">Team</a>
					      <a href="sponsors.php">Sponsors</a>
				    </p>
				    
				    <ul class="inline-list social">
					      <a href="https://www.facebook.com/riverdalerobotics"><i class="fi-social-facebook"></i></a>
					      <a href="https://twitter.com/frc5834"><i class="fi-social-twitter"></i></a>
					      <a href="https://github.com/riverdalerobotics"><i class="fi-social-github"></i></a>
				    </ul>
			  
			  </div>
		</div>
	</footer>
	
	<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
	<script src="http://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.js"></script>
	<script>
		$(document).foundation();
	</script>
</body>

</html>

EOF;

  echo $str;
 ?>