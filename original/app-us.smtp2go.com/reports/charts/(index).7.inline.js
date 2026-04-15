// define a fake Custom.init function here, I don't want layout.html initialising stuff
var Custom = (function () {
  return { init: function () {} };
})();

// run general to get all the standard stuff in
HTML.general();

// simple formatNumber function to do precision
var formatNumber = function (num, precision, suffix) {
  if (isNaN(num)) {
    return num;
  }
  var n = Number(num);
  if (n % 1 != 0) {
    return n.toFixed(precision) + (suffix !== undefined ? suffix : "");
  } else {
    return n + (suffix !== undefined ? suffix : "");
  }
};

// mount the custom tags ( wrap in compile to do them in order )
riot.mount("charts", {
  has_open_trackers: false,
  has_click_trackers: false,
  date_registered: 1776219272,
  ap_metadata: JSON.parse(
    '{"events": {"10": {"api-tag": "processed", "bounce-type": "", "filter-label": "Email processed", "indicator-class": "pending", "indicator-label": "Processed", "show-in-list": true, "show-in-modal": true, "tooltip-text": "Queued for delivery"}, "115": {"api-tag": "opened", "bounce-type": "", "filter-label": "Opened by recipient", "indicator-class": "opened", "indicator-label": "Opened", "show-in-list": true, "show-in-modal": true, "tooltip-text": "This email has been opened by the recipient"}, "120": {"api-tag": "clicked", "bounce-type": "", "filter-label": "Link clicked by recipient", "indicator-class": "clicked", "indicator-label": "Clicked", "show-in-list": true, "show-in-modal": true, "tooltip-text": "A link in this email has been clicked by the recipient"}, "14": {"api-tag": "rejected", "bounce-type": "", "filter-label": "Rejected", "indicator-class": "rejected", "indicator-label": "Rejected", "show-in-list": true, "show-in-modal": true, "tooltip-text": "This email was rejected"}, "2": {"api-tag": "soft-bounced", "bounce-type": "", "filter-label": "Soft bounced", "indicator-class": "soft-bounced", "indicator-label": "Soft Bounce", "show-in-list": true, "show-in-modal": true, "tooltip-text": "This email soft bounced while being delivered to the recipient"}, "22": {"api-tag": "", "bounce-type": "", "filter-label": "", "indicator-class": "", "indicator-label": "", "show-in-list": false, "show-in-modal": true, "tooltip-text": ""}, "3": {"api-tag": "delivered", "bounce-type": "", "filter-label": "Delivered to recipient", "indicator-class": "delivered", "indicator-label": "Delivered", "show-in-list": true, "show-in-modal": true, "tooltip-text": "This email has been delivered to the recipient"}, "30": {"api-tag": "", "bounce-type": "", "filter-label": "", "indicator-class": "", "indicator-label": "", "show-in-list": false, "show-in-modal": true, "tooltip-text": ""}, "4": {"api-tag": "rejected", "bounce-type": "", "filter-label": "Rejected", "indicator-class": "rejected", "indicator-label": "Rejected", "show-in-list": true, "show-in-modal": true, "tooltip-text": "This email was rejected"}, "40": {"api-tag": "soft-bounced", "bounce-type": "", "filter-label": "Soft bounced", "indicator-class": "soft-bounced", "indicator-label": "Soft Bounce", "show-in-list": true, "show-in-modal": true, "tooltip-text": "This email soft bounced while being delivered to the recipient"}, "42": {"api-tag": "hard-bounced", "bounce-type": "", "filter-label": "Hard bounced", "indicator-class": "hard-bounced", "indicator-label": "Hard Bounce", "show-in-list": true, "show-in-modal": true, "tooltip-text": "This email hard bounced while being delivered to the recipient"}, "45": {"api-tag": "soft-bounced", "bounce-type": "", "filter-label": "Soft bounced", "indicator-class": "soft-bounced", "indicator-label": "Soft Bounce", "show-in-list": true, "show-in-modal": true, "tooltip-text": "This email was returned while being delivered to the recipient"}, "5": {"api-tag": "unsubscribed", "bounce-type": "", "filter-label": "Recipient unsubscribed", "indicator-class": "unsubscribed", "indicator-label": "Unsubscribed", "show-in-list": true, "show-in-modal": true, "tooltip-text": "The recipient unsubscribed from this email"}, "50": {"api-tag": "delivered", "bounce-type": "", "filter-label": "Delivered to recipient", "indicator-class": "delivered", "indicator-label": "Delivered", "show-in-list": true, "show-in-modal": true, "tooltip-text": "This email has been delivered to the recipient"}, "6": {"api-tag": "spam", "bounce-type": "", "filter-label": "Marked as spam", "indicator-class": "spam", "indicator-label": "Spam", "show-in-list": true, "show-in-modal": true, "tooltip-text": "The recipient made a spam complaint about this email"}, "60": {"api-tag": "rejected", "bounce-type": "", "filter-label": "Rejected", "indicator-class": "rejected", "indicator-label": "Rejected", "show-in-list": true, "show-in-modal": true, "tooltip-text": "This email was rejected"}, "7": {"api-tag": "resubscribed", "bounce-type": "", "filter-label": "Recipient resubscribed", "indicator-class": "unblocked", "indicator-label": "Manual Unblock", "show-in-list": true, "show-in-modal": true, "tooltip-text": "The recipient resubscribed to the email"}, "70": {"api-tag": "unsubscribed", "bounce-type": "", "filter-label": "Recipient unsubscribed", "indicator-class": "unsubscribed", "indicator-label": "Unsubscribed", "show-in-list": true, "show-in-modal": true, "tooltip-text": "The recipient unsubscribed from this email"}, "80": {"api-tag": "spam", "bounce-type": "", "filter-label": "Marked as spam", "indicator-class": "spam", "indicator-label": "Spam", "show-in-list": true, "show-in-modal": true, "tooltip-text": "The recipient made a spam complaint about this email"}, "90": {"api-tag": "resubscribed", "bounce-type": "", "filter-label": "Recipient resubscribed", "indicator-class": "unblocked", "indicator-label": "Manual Unblock", "show-in-list": true, "show-in-modal": true, "tooltip-text": "The recipient resubscribed to the email"}}, "has_subaccounts": false, "record_id": 1010395}',
  ),
  cjs_date_expr: "MM/DD/YYYY",
});

$(document).on("ready", function () {
  $("body").addClass("page-charts");
});
