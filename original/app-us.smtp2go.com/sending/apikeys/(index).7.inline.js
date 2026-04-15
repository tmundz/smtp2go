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
    api_notification_seen: false,
    apiauth_automatic_cols: true,
    show_apiauth_archiving_col: false,
    show_apiauth_click_tracking_col: false,
    show_apiauth_description_col: false,
    show_apiauth_ippool_col: false,
    show_apiauth_open_tracking_col: false,
    show_apiauth_ratelimit_col: false,
    show_apiauth_unsubscribes_col: false,
  },
  ratelimits: {
    default_limit: "",
    default_period: "unlimited",
    has_default: false,
  },
  ip_pools: [],
  isAllowedArchiving: false,
  api_notification_seen: false,
};
