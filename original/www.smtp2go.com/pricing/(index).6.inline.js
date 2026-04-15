//IE11 matches fix
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector;
}
if (window.location.toString().indexOf("signup-special") > -1) {
  $("body").hide();
  window.location =
    "https://partners.smtp2go.com/signup-special" + window.location.search;
} else if (SMTP2GOHelpers.getUrlParameter("s")) {
  SMTP2GOHelpers.handleReferralPartner();
}
// immediately remove no-js class from body
$("body").removeClass("no-js");
