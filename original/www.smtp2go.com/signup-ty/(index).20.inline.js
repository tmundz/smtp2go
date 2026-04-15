setTimeout(function () {
  if (document.location.href.indexOf("signup-custom") === -1) {
    window.intercomSettings = {
      app_id: "iqq5xlx0",
      ip_adddress: userIP,
      custom_launcher_selector: "#hero-chat-trigger",
    };
  }
}, 1000);
