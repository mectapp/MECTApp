$(".close").on("click", function () {
  window.location.replace("post.html");
});
setInterval(function () {
  var values = $("input").val();
  if(values.length > 1) {
    $(".results").show();
  }
  else {
    $(".results").hide();
  }
}, 300);
