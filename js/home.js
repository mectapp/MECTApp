$(".post").on("click", function () {
  window.location.replace("post.html");
});

$(".notifications").on("click", function () {
  window.location.replace("notifications.html");
});

$(".search").on("click", function () {
  window.location.replace("search.html");
});

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

$(".group7").on("click", function () {
  window.location.replace("groups_more.html");
})

$(".settings").on("click", function () {
  window.location.replace("settings.html");
});
