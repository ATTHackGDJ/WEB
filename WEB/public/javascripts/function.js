var jq = document.createElement('script');
jq.src = "//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js";
document.querySelector('head').appendChild(jq);

jq.onload = animations;

function animations()
{
	$(document).ready(function() { 

	    $("main").niceScroll();

	  }

	);
	$document().ready(function() {
		on(){
		$('#openPopup').click(function() {
			$('#popup').show(400, function(){
			});
			/* Act on the event */
		});

		}
		
	});

}

