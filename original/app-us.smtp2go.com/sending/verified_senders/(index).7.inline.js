// define a fake Custom.init function here, I don't want layout.html initialising stuff
var Custom = (function () {
  return { init: function () {} };
})();

// run general to get all the standard stuff in
HTML.general();

// mount the custom tags ( wrap in compile to do them in order )
riot.store = new DataStoreMixin();
riot.compile(function () {
  var opts = {
    show_young_warnings: true,
    is_trial_disabled: false,
    show_splash: true,
    show_banner: false,
    hide_payment_splash: false,
    holdrate_seconds: 3600,
    disable_add: false,
    is_subaccount: false,
    has_subaccounts: null,
    hide_sender_email_performance_tips: false,
  };
  riot.mount("sender-domains", opts);
});

function fixMobileHeight() {
  var getElHeight = $(".sd-detail").outerHeight(true) + 56;
  $("body").append(
    "<style>#sender-domains.is-detail {height: " + getElHeight + "px;}</style>",
  );
}
