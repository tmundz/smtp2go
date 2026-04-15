jQuery(document).ready(function () {
  // set the client_timezone in a cookie
  try {
    Cookie.create("client_timezone", moment.tz.guess(), 0);
  } catch (e) {
    alert(e);
  }

  Login.init();

  $("#username").focus(function () {
    $(".email-changed-message").css("display", "block");
    $(".login-footer").css("margin-top", "300px");
  });
});
