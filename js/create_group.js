$(".add-image").on("click", function () {
  $("#file").click();
});

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $('.img').attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]); // convert to base64 string
	$(".add-image").hide();
	$(".img").show();
  }
}

$("#file").change(function() {
  readURL(this);
});

$(".close").on("click", function () {
  window.location.replace("settings.html");
});

$(".create").on("click", function () {
  window.location.replace("settings.html");
});
