// define a fake Custom.init function here, I don't want layout.html initialising stuff
var Custom = (function () {
  return { init: function () {} };
})();

// run general to get all the standard stuff in
HTML.general();

// set a page data dic
var PAGE_DATA = {
  csrfkey: encodeURIComponent("KoU12MtjCA+SESDjtsuzj38WzEYXQVF+NjA4NJaU5vU"),
  showSplash: true,
  appSettings: {
    show_smtpauth_archiving_col: null,
    show_smtpauth_click_tracking_col: null,
    show_smtpauth_description_col: null,
    show_smtpauth_ippool_col: null,
    show_smtpauth_open_tracking_col: null,
    show_smtpauth_ratelimit_col: null,
    show_smtpauth_unsubscribes_col: null,
    smtpauth_automatic_cols: true,
  },
  ratelimits: {
    default_limit: "",
    default_period: "unlimited",
    has_default: false,
  },
  ip_pools: [],
  isAllowedArchiving: false,
  region: "us",
};
