<script type='text/javascript' src="/libs/smoothwheel.js"></script>
<!-- Fixed navbar -->
		<nav class="navbar navbar-default navbar-fixed-top normal" role="navigation">
		  <div class="container">
			<div class="navbar-header">
			  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
				<span class="sr-only">Toggle Navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			  </button>
			  <a class="navbar-brand" href="#"><img src="img/logo/boxbox-logo.png" /></a>
			</div>
			<div class="navbar-collapse collapse">
			  </ul>
			  <ul class="nav navbar-nav navbar-right">
				<li><a href="#home">Home</a></li>
				<li><a href="#about">About</a></li>
                <li><a href="#points">Chat Points</a></li>
                <li><a href="#sub">Subscribe</a></li>
				<li><a href="#youtube">Youtube</a></li>
                <li><a href="#donate">Donate</a></li>
			  </ul>
			</div><!--/.nav-collapse -->
		  </div>
		</nav>
		
		<script>
			$(window).scroll(function() {
			if ($(document).scrollTop() > 150) {
			$('.navbar').addClass('shrink');
			}
			else {
			$('.navbar').removeClass('shrink'); }
			});
</script>