var jq = document.createElement('script');
jq.src = "//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js";
document.querySelector('head').appendChild(jq);

jq.onload = animations;

function animations()
{
	$(document).ready(function(){
	    $('a[href^="#down"]').click(function(e) {
	        e.preventDefault();
	        var target = this.hash, $target = $(target);
	        $('html, body').stop().animate({
	            'scrollDown': $target.offset().top
	        }, 900, 'swing', function() {
	            window.location.hash = target;
	        });
	    });
	});

}
