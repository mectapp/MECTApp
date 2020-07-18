setInterval(function () {
var name = $(".search-input").val();
if(name.length >= 1) {
  $(".search-label").hide();
}
else {
  $(".search-label").show();
}
}, 300);

$(".notifications").on("click", function () {
  window.location.replace("notifications.html");
});

$(".home").on("click", function () {
  window.location.replace("home.html");
});

$(".settings").on("click", function () {
  window.location.replace("settings.html");
});

$(".search-result-profile").on("click", function () {
  window.location.replace("profile.html");
});

$(".search-result-group").on("click", function () {
  window.location.replace("groups.html");
});
