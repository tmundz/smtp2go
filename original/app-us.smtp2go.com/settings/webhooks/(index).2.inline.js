// function for the zdesk cat authorization
var jwtFnUrl =
  "/zdesk_chat_auth" +
  "?CSRF_key=" +
  encodeURIComponent("KoU12MtjCA+SESDjtsuzj38WzEYXQVF+NjA4NJaU5vU");
window.zESettings = {
  webWidget: {
    offset: { vertical: "32px" },
    contactOptions: {
      enabled: true,
      contactButton: { "*": "Get in touch" },
    },
    contactForm: {
      subject: true,
    },
    helpCenter: {
      chatButton: {
        "*": "Contact us",
      },
    },
    authenticate: {
      chat: {
        jwtFn: function (callback) {
          var r = HTML.ajax("POST", jwtFnUrl, null);
          r.success(function (data) {
            if (data.status == "OK") {
              HTML.set_time(data, null, true);
              callback(data.results.jwt);
            }
          });
        },
      },
    },
    chat: {
      suppress: false,
    },
  },
};

// This is where the username and email are pulled from
zE(function () {
  var userIdentifier = "1010395";
  var userFullName = "roy kent";
  var userMail = "0xcaphe+roy@wearehackerone.com";
  zE("webWidget", "hide");
  zE("webWidget", "prefill", {
    name: {
      value: userFullName,
      readOnly: true,
    },
    email: {
      value: userMail,
      readOnly: true,
    },
  });
  $(".chat-button").removeClass("is-hidden");
  $("body").addClass("chat-enabled");
});

$(document).on("click", function () {
  if ($(".zEWidget-webWidget").attr("tabindex") >= 0) {
    setTimeout(function () {
      $(".chat-button").addClass("is-hidden");
    }, 100);
  }
});

zE("webWidget:on", "close", function () {
  $(".chat-button").removeClass("is-hidden");
});
