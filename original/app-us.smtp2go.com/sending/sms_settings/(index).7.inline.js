// define a fake Custom.init function here, I don't want layout.html initialising stuff
var Custom = (function () {
  return { init: function () {} };
})();

// run general to get all the standard stuff in
HTML.general();

var user_data = {
  accountID: 1010395,
  email: "0xcaphe+roy@wearehackerone.com",
  username: "roy kent",
  plan_duration: 1,
  acting_role_label: "",
  sms_banned: false,
  tfn_subs: {},
};

const PAGE_DATA = {
  csrfkey: "KoU12MtjCA+SESDjtsuzj38WzEYXQVF+NjA4NJaU5vU",
  apMetadata: JSON.parse("{}"),
  show_info_splash: true,
  show_upgrade_splash: true,
  clientTimezone: JSON.parse("null"),
  hide_payment_splash: false,
  show_subaccount_splash: false,
  sms_account: null,
  user_data: user_data,
  is_master: false,
  show_switch_processor_splash: false,
};
