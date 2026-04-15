var errorTypes = { error: "error", info: "info" };

var shakeForm = function () {
  $("body").addClass("inline-error");
  setTimeout(function () {
    $("body").removeClass("inline-error");
  }, 2000);
};
var displayCallbackMessage = function (message, messageType) {
  $(".login-notice").removeClass("error");
  $(".login-notice").find("p").remove();
  $(".login-notice").append("<p>" + message + "</p>");
  $("body").removeClass("notice-hidden");
  $("#login-submit").removeAttr("disabled");
  if (messageType == errorTypes.error) {
    $("body").removeClass("logging-in");
    $(".login-notice").addClass("error");
    shakeForm();
  }
};

var Login = (function () {
  var initializeLogin = function () {
    $(window).on("load", function () {
      $(".content").css("display", "");
    });

    $(".forgot-pw").on("click", function () {
      $("body").removeClass("forget-hidden").addClass("login-hidden");
    });

    $(".forgot-nvm").on("click", function () {
      $("body").removeClass("login-hidden").addClass("forget-hidden");
      $("form.login-form").css("display", "block");
    });

    $(".login-form").validate({
      rules: {
        username: {
          required: true,
        },
        password: {
          required: true,
        },
        remember: {
          required: false,
        },
      },
      messages: {
        username: {
          required: "Username is required.",
        },
        password: {
          required: "Password is required.",
        },
      },
      success: function (label) {
        label.closest(".form-group").removeClass("has-error");
        label.remove();
      },
      submitHandler: function (form) {
        fs = $("form[name=signin]");

        // make the request
        var request = $.ajax({
          type: form.method,
          beforeSend: function () {
            $("#login-submit").attr("disabled", true);
            $("body").addClass("logging-in");
          },
          url: form.action,
          data: fs.serialize(),
          headers: {
            "Frontend-Validation": true,
          },
        });

        request.success(function (data) {
          if (data.status != "OK") {
            displayCallbackMessage(data.error, errorTypes.error);
            return;
          }
          $("#login-submit").attr("disabled", true);
          HTML.set_time(data);
          if ("goto" in data.results) {
            window.location = data.results.goto;
          } else {
            window.location = END_POINTS.fronts()["in"];
          }
        });

        request.error(function (httpObj, textStatus) {
          displayCallbackMessage(
            "Something went wrong, please try again or contact support.",
            errorTypes.error,
          );
        });
      },
    });

    $(".login-form input").keypress(function (e) {
      if (e.which == 13) {
        if ($(".login-form").validate().form()) {
          $(".login-form").submit();
        }
        return false;
      }
    });
  };

  var initializeForgetPassword = function () {
    $(".forget-form").validate({
      rules: {
        email: {
          required: true,
          email: true,
        },
      },

      messages: {
        email: {
          required: "Email is required.",
        },
      },

      success: function (label) {
        label.closest(".form-group").removeClass("has-error");
        label.remove();
      },

      submitHandler: function (form) {
        $("#forget-submit").attr("disabled", true);
        $("body").addClass("logging-in");
        form.submit();
      },
    });

    $(".forget-form input").keypress(function (e) {
      if (e.which == 13) {
        if ($(".forget-form").validate().form()) {
          $(".forget-form").submit();
        }
        return false;
      }
    });
  };

  return {
    //main function to initiate the module
    init: function () {
      initializeLogin();
      initializeForgetPassword();
      var isLoginNotice = $(".login-notice").find("p").length > 0;

      if (isLoginNotice) {
        $("body").removeClass("notice-hidden");
      }
    },
  };
})();
