var jq = document.createElement('script');
jq.src = "//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js";
document.querySelector('head').appendChild(jq);

jq.onload = animations;

function animations() {
	$(document).ready(function() {
			$('#open-popup').click(function() {
				$('#popup').fadeIn('slow');
			});
			$('#close-popup').click(function() {
				$('#popup').fadeOut('slow');
			});
			$('#send-place-button').click(function(e) {
				e.preventDefault();
				$
					.post('http://9da38a76.ngrok.io/places', {
						name: $('#name-id').val(),
						organization: 2,
						beaconFactoryID: $('#beacon-id').val()
					})
					.done(function () {
						alert('Listo');
					});
			});
			$('#send-room-button').click(function(e) {
				e.preventDefault();
				$
					.post('http://9da38a76.ngrok.io/rooms', {
						name: $('#name-id').val(),
						place: 2,
						beaconFactoryID: $('#beacon-id').val()
					})
					.done(function () {
						alert('Listo');
					});
			});
			$('#send-event-button').click(function(e) {
				alert('Listo');
				e.preventDefault();
				var initial = $('#initial-id').val();
				var finish = $('#finish-id').val();
				$
					.post('http://9da38a76.ngrok.io/events', {
						name: $('#name-id').val(),
						place: 2,
						initialTime: new Date(initial, 12, 0, 0),
						finishTime: new Date(finish, 12, 30, 0)
					})
					.done(function () {
						
					});
			});
			$('#send-activity-button').click(function(e) {
				alert('Listo');
				e.preventDefault();
				var initial = $('#initial-id').val();
				var finish = $('#finish-id').val();
				$
					.post('http://9da38a76.ngrok.io/activities', {
						name: $('#name-id').val(),
						description: $('#description-id').val(),
						room: 2,
						event: 2,
						initialTime: new Date(initial, 12, 0, 0),
						finishTime: new Date(finish, 12, 30, 0)
					})
					.done(function () {
						
					});
			});
	});
}