// define a fake Custom.init function here, I don't want layout.html initialising stuff
var Custom = (function () {
  return { init: function () {} };
})();

// run general to get all the standard stuff in
HTML.general();

// set a page data dic
var PAGE_DATA = {
  organisation: $("<div/>").html("hackerone").text(), // decode html entities, strips script tags
  acting_role: "owner",
  csrfkey: encodeURIComponent("KoU12MtjCA+SESDjtsuzj38WzEYXQVF+NjA4NJaU5vU"),
  is_2fa_enforced: false,
  is_subaccount: false,
};
