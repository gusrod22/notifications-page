const markRead = document.querySelector("#mark-read");
const unreadNotif = document.querySelectorAll(".unread-notification");
const notifMarkers = document.querySelectorAll(".notification-marker");
const count = document.querySelector(".count-container");

markRead.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Mark read clicked");
  count.style.display = "none";

  notifMarkers.forEach(function (marker) {
    marker.style.display = "none";
  });
});
