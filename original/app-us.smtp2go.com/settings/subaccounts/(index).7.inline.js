// define a fake Custom.init function here, I don't want layout.html initialising stuff
var Custom = (function () {
  return { init: function () {} };
})();

// run general to get all the standard stuff in
HTML.general();

const PAGE_DATA = {
  apMetadata: JSON.parse(
    '{"app_settings": {"show_subaccount_2fa_col": false, "show_subaccount_archive_col": false, "show_subaccount_dedip_col": false, "show_subaccount_email_col": true, "show_subaccount_id_col": false, "show_subaccount_ippool_col": false, "show_subaccount_plan_col": false, "show_subaccount_region_col": false, "show_subaccount_sms_col": false, "show_subaccount_status_col": true, "show_subaccount_usage_col": true}, "can_send_emails": true, "disable_add": false, "master_sms_limit": 50, "sponsor": 1010395}',
  ),
  show_info_splash: false,
  master_region: "us",
  show_upgrade_splash: true,
  rollover_unix: null,
};

//attach a class to parent element if splash is turned on
if (
  PAGE_DATA.show_info_splash === true ||
  PAGE_DATA.show_upgrade_splash === true
) {
  $(".page-content").addClass("splash-on");
}

var mainTitle = "Subaccounts";
var mainText =
  '<p>Subaccounts allow you to separate your customers\' activity from each other, and are perfect for agencies and resellers with multiple customers. See <a href = "https://support.smtp2go.com/hc/en-gb/articles/900004307303" target="_BLANK"> more info</a > about subaccounts.</p >';
var migrateTitle = "Migrate existing senders to a subaccount";
var migrateText =
  "<p>If you have existing SMTP users, Authenticated IPs or API Keys that you’d like to assign to a subaccount, select the senders you’d like to migrate, then choose a subaccount to assign them to.</p>";
var migrateNote =
  '<div class="bar-notice notice-top is-info is-grouped"><p class="has-icon"><span class="notice-icon"></span><span class="bar-notice-message"><strong>Before proceeding, make sure you\'re aware of the following:</strong></span></p><ul><li>To keep sending emails, the new subaccount of the sender(s) will need to have Verified Senders directly within the subaccount, or be granted access to the master account\'s relevant Verifed Senders.</li><li>Any templates used by the sender(s) will need to be copied to the new subaccount.</li><li>Senders who are also team members cannot be migrated.</li></ul></div>';
var addSubaccountTitle = "Add new subaccount";
var addSubaccountText =
  "<p>Enter the new subaccount's details and monthly email limit below.</p>";

//generic tab toggle
$(document).on("click", "[data-tab]", function () {
  var thisTab = $(this).data("tab");
  var thisTarget = $("#" + thisTab);
  $(".options-list .tab").each(function () {
    $(this).removeClass("is-active");
  });
  $(".options-list .card--tab").each(function () {
    $(this).removeClass("is-active");
  });
  $(this).addClass("is-active");
  thisTarget.addClass("is-active");
});

// $(document).on('click', '.page-title .icon-back, .button-cancel', function(){
//   showMainPage();
// });

$(document).on("click", ".button-migrate", function () {
  showMigratePage();
});

// $(document).on('click', '.button-add-subaccount', function(){
//   showAddSubaccountPage();
// });

//migrate screen toggle on animation sequence
function showMigratePage() {
  $(".card-subaccounts").addClass("is-fadeout");
  $(".sg-feature--header").addClass("is-fadeout");
  $(".options-list").removeClass("hide");
  $(".options-actions").removeClass("hide");
  setTimeout(function () {
    $(".page-title-text").text(migrateTitle);
    $(".sg-feature--header .lead-toggle").html(migrateText + migrateNote);
    $(".page-title .icon-back").removeClass("hide");
    $(".title-icon").addClass("hide");
    $(".sg-feature--header").removeClass("is-fadeout");
    $(".options-list").removeClass("is-fadeout");
    $(".options-actions").removeClass("is-fadeout");
    $(".card-subaccounts").addClass("hide");
  }, 150);
}

//demo checkbox toggle
// TODO This should be handled in the Vue app part but it should be okay for now.
$(document).on("click", ".list-checkbox, .list-name", function () {
  $(this).parents("li").find(".checker .checkbox-faux").toggleClass("checked");
});
