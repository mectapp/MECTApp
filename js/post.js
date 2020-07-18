$(".add-img").on("click", function () {
  $("input").click();
});

$(".add-tag").on("click", function () {
  window.location.replace("tag.html");
});

$(".back").on("click", function () {
  window.location.replace("home.html");
});

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $('.post-img').attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]); // convert to base64 string
  }
}

$("input").change(function() {
  readURL(this);
});

setInterval(function () {
  var vals = $("textarea").val();
  if(vals.length >= 1) {
    $(".post").css("color", "#ff914d");
    $(".add-post").css("color", "green");
  }
  else {
    $(".post").css("color", "#727272");
    $(".add-post").css("color", "#727272");
  }
}, 300);
