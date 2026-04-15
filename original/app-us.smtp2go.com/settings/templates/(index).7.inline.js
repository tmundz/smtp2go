// define a fake Custom.init function here, I don't want layout.html initialising stuff
var Custom = (function () {
  return { init: function () {} };
})();

// run general to get all the standard stuff in
HTML.general();

// set a page data dic
var PAGE_DATA = {
  apMetadata: {
    app_settings: {
      show_template_id_col: true,
      show_template_subject_col: true,
      show_template_tags_col: true,
      show_template_updated_col: true,
      template_recip_email: null,
      template_sender_email: null,
      template_sending_acct: null,
    },
    disable_add: false,
    username: "0xcaphe+roy@wearehackerone.com",
  },
  csrfkey: "KoU12MtjCA+SESDjtsuzj38WzEYXQVF+NjA4NJaU5vU",
  show_splash: true,
};
