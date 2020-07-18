$(window).on("load", function() {
	if($(window).width()>600) {
	$(".wrapper").hide();
	alert("Please visit the website in a mobile browser!")
	}
	else {
	setTimeout(function () {
	$(".loading").hide();
	$(".main").fadeIn(800);
}, 3000);
	}
});

$(".signup").on("click", function () {
	window.location.replace("html/signup.html");
});

$(".login").on("click", function () {
	window.location.replace("html/home.html");
});
var request = 1;
jQuery.support.cors = true;
$.ajax({
			//headers: {  'Access-Control-Allow-Origin': '*' },
			url: "proxy.php",
			data: {request},
			type: "POST",
			success: function(data){
				alert(data);
			},
			error: function(err) {
			}
	});//end ajax
