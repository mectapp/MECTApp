$(".menu").on("click", function () {
  $(".modal").fadeIn();
  $(".menues").show();
  $(".menu").hide();
});

$(".menues").on("click", function () {
  $(".modal").fadeOut();
  $(".menu").show();
  $(".menues").hide();
});

$(".back").on("click", function () {
  window.location.replace("search.html");
});
