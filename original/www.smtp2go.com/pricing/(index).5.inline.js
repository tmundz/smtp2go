var userIP;

$.getJSON("https://api.ipify.org/?format=json", function (e) {
  userIP = e.ip;
});
