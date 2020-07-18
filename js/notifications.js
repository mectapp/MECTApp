$(".search").on("click", function () {
  window.location.replace("search.html");
});

$(".home").on("click", function () {
  window.location.replace("home.html");
});

$(".notification-comment").on("click", function () {
  window.location.replace("notification_comment.html");
});

$(".notification-reply").on("click", function () {
  window.location.replace("notification_reply.html");
});

$(".notification-post").on("click", function () {
  window.location.replace("notification_comment.html");
});

$(".accept").on("click", function () {
  $(".notification-group").fadeOut();
});

$(".decline").on("click", function () {
  $(".notification-group").fadeOut();
});

$(".settings").on("click", function () {
  window.location.replace("settings.html");
});
