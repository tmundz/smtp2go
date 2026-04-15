// define a fake Custom.init function here, I don't want layout.html initialising stuff
var Custom = (function () {
  return { init: function () {} };
})();

// run general to get all the standard stuff in
HTML.general();

const PAGE_DATA = {
  csrfkey: "KoU12MtjCA+SESDjtsuzj38WzEYXQVF+NjA4NJaU5vU",
  show_splash: true,
  id: null,
  apMetadata: JSON.parse(
    '{"app_settings": {"show_data_export_author_col": true, "show_data_export_format_col": true, "show_data_export_frequency_col": true, "show_data_export_origin_col": true, "show_data_export_recipients_col": true}}',
  ),
};
