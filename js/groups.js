$(".like").on("click", function () {
  $(".like").hide();
  $(".liked").show();
});

$(".liked").on("click", function () {
  $(".liked").hide();
  $(".like").show();
});

$(".comment-see-all").on("click", function () {
  window.location.replace("comments.html");
});

$(".comment").on("click", function () {
  window.location.replace("comments.html");
});

$(".reply").on("click", function () {
  $(".replied").show();
  $(".reply").hide();
  $(".reply-div").show();
});

$(".replied").on("click", function () {
  $(".replied").hide();
  $(".reply").show();
  $(".reply-div").hide();
});

$(".reply-send").on("click", function () {
  $(".replied").hide();
  $(".reply").show();
  $(".reply-div").hide();
});

$(".back").on("click", function () {
  window.location.replace("search.html");
});

$(".show-members").on("click", function () {
  window.location.replace("view_members.html");
});

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
