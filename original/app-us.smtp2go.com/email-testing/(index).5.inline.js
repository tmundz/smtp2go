END_POINTS.load(); //gives us a more accurate list of available end points.
jQuery(document).ready(function () {
  Metronic.init(); // init metronic core componets
  Layout.init(); // init layout
  QuickSidebar.init(); // init quick sidebar
  HTML.init();
  var saveMessage = "";
  var saveMessageClass = "";
  Custom.init();
  LayoutSubaccounts.init();
  if (Cookies) {
    Cookies.set("client_timezone", moment.tz.guess());
  }
  if (saveMessage && saveMessageClass) {
    HTML.alertUser(saveMessageClass, saveMessage);
  }

  // TODO: Remove this on the 31st of May
});

$(function () {
  $(".dataTables_processing").append("<div></div><div></div><div></div>");
  HTML.csrfkey = "KoU12MtjCA+SESDjtsuzj38WzEYXQVF+NjA4NJaU5vU";
});

$(function () {
  if ($(".nav-upgrade").length) {
    $(".dropdown-user").addClass("is-free");
    $('#update_plan a[href="/account/changeplan/"]').remove();
    $(".should-be-meta:empty").remove();
  }
});

// couple of helpers for the support pin
var showSupportPin = function (pin) {
  $("span.nav-support-pin").text(pin);
  $(".nav-support-copy .copy-textitem").text("Support PIN");

  setTimeout(function () {
    $(".nav-support-copy").addClass("pin-active");
    $(".nav-support-dropdown.has-pin").addClass("pin-visible");
    $("span.nav-support-pin").removeClass("is-hidden");
    $(".nav-support-copy").removeClass("pin-loading");
    $(".nav-support-dropdown.has-pin").removeClass("pin-block-hover");
  }, 1000);
};

var hideSupportPin = function () {
  $("li.nav-support-pin-generate").removeClass("hidden");
  $("span.nav-support-pin").addClass("is-hidden");
  $(".nav-support-copy").removeClass("pin-active");
  $(".nav-support-dropdown.has-pin").removeClass("pin-visible");
  $(".nav-support-copy .copy-textitem").text("Generate Support PIN");
  $(".nav-support-copy.copy-upgrade").text(
    "Upgrade for phone and live chat support.",
  );
};

// generate the local storage keys
var supportPinKey = "7a999f991a9fd6ac9ef279bf4c904300_sp";
var supportPinExpiresKey = "7a999f991a9fd6ac9ef279bf4c904300_spe";

// on page load if there is a valid support pin re-add it to the support menu
$(function () {
  var supportPin = window.localStorage.getItem(supportPinKey);
  var supportPinExpires = window.localStorage.getItem(supportPinExpiresKey);
  if (
    supportPin !== null &&
    supportPinExpires !== null &&
    supportPinExpires > moment().unix()
  ) {
    showSupportPin(supportPin);
  } else {
    hideSupportPin();
  }
});

$(".nav-support-pin-block, .nav-support-pin-generate").hover(
  function () {
    $(".nav-support-dropdown.has-pin").addClass("pin-hover");
  },
  function () {
    $(".nav-support-dropdown.has-pin").removeClass("pin-hover");
  },
);

// load a support pin
var pinLoading = false;
$("li.nav-support-pin-generate, li.nav-support-pin-block").on(
  "click",
  function () {
    // if the pin is already loading or is still valid don't re-use it
    if (pinLoading) {
      console.log("pin already loading");
      return;
    }
    if ($(".nav-support-dropdown").hasClass("pin-visible")) {
      console.log("pin already active");
      return;
    }

    $(".nav-support-copy").addClass("pin-loading");
    $(".nav-support-dropdown.has-pin").addClass("pin-block-hover");

    // grab any previous values
    var supportPin = window.localStorage.getItem(supportPinKey);
    var supportPinExpires = window.localStorage.getItem(supportPinExpiresKey);
    if (
      supportPin !== null &&
      supportPinExpires !== null &&
      supportPinExpires > moment().unix()
    ) {
      showSupportPin(supportPin);
      return;
    }

    // mark as loading
    hideSupportPin();
    pinLoading = true;
    var r = HTML.ajax(
      "GET",
      "/zdesk_chat_pin" +
        "?CSRF_key=" +
        encodeURIComponent("KoU12MtjCA+SESDjtsuzj38WzEYXQVF+NjA4NJaU5vU"),
      null,
    );
    r.success(function (data) {
      if (data.status == "OK") {
        pinLoading = false;
        HTML.set_time(data, null, true);
        window.localStorage.setItem(supportPinKey, data.results.code);
        window.localStorage.setItem(supportPinExpiresKey, data.results.expires);
        showSupportPin(data.results.code);
      }
    });
    r.error(function (error) {
      hideSupportPin();
      pinLoading = false;
      window.localStorage.removeItem(supportPinKey);
      window.localStorage.removeItem(supportPinExpiresKey);
      $(".nav-support-copy").removeClass("pin-loading");
      $(".nav-support-dropdown.has-pin").removeClass("pin-block-hover");
    });
  },
);

//separate the support pin block from the rest of the dropdown's behavior: additional class on mouseenter so it doesn't initiate the closing animation when clicked
$(document).on(
  "mouseenter",
  ".nav-support-pin-block, .nav-support-pin-generate",
  function () {
    $(".vert-nav-support").addClass("open support-on");
  },
);
//keep the 'open' class when clicked so the menu doesn't close when we click and move the mouse to siblings
$(document).on(
  "click",
  ".nav-support-pin-block, .nav-support-pin-generate",
  function () {
    setTimeout(function () {
      $(".vert-nav-support").addClass("open");
    }, 10);
  },
);
//remove the class on mouseout to return to normal beavior
$(document).on(
  "mouseleave",
  ".nav-support-pin-block, .nav-support-pin-generate",
  function () {
    $(".vert-nav-support").removeClass("support-on");
  },
);
