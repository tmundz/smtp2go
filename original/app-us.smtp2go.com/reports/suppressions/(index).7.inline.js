// define a fake Custom.init function here, I don't want layout.html initialising stuff
var Custom = (function () {
  return { init: function () {} };
})();

// run general to get all the standard stuff in
HTML.general();

const PAGE_DATA = {
  apMetadata: JSON.parse(
    '{"app_settings": {"show_suppressions_reason_col": false, "show_suppressions_subject_col": false}}',
  ),
  clientTimezone: JSON.parse("null"),
  actingRole: "owner",
};
