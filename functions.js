$(document).ready(function(){
			$('.add').click(function() {
				$('.users').append(
			"<div class ='user'"+ " desc=" + "'" + $('.email').val() + "'>"+ "<p class='n'>" + $('.fname').val() + " " + $('.lname').val() + "</p>")
			})

			$(document).on("click", ".user", function(){
				$(this).text($(this).attr("desc"));
			})
			
			$('.dat1').click(function(){
				alert($("div").data("descr"));
			})
		});














