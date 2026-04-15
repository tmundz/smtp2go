// define a fake Custom.init function here, I don't want layout.html initialising stuff
var Custom = (function () {
  return { init: function () {} };
})();

// run general to get all the standard stuff in
HTML.general();

// set a page data dic
var PAGE_DATA = {
  csrfkey: "KoU12MtjCA+SESDjtsuzj38WzEYXQVF+NjA4NJaU5vU",
  enforce_2fa: false,
  show_splash: false,
  auth_status: null,
  edit_token: null,
};
