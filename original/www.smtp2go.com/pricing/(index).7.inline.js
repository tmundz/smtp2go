var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split("&"),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split("=");

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? null : sParameterName[1];
    }
  }
  return null;
};

/**
 * Work out any add funnels to push through signup
 */
try {
  var gclid = getUrlParameter("gclid");
  var utm_source = getUrlParameter("utm_source");
  var utm_medium = getUrlParameter("utm_medium");
  var utm_term = getUrlParameter("utm_term");
  var utm_campaign = getUrlParameter("utm_campaign");

  // google adwords id
  if (gclid !== null) {
    $.cookie("funnel", "google", { path: "/" });
    var fid = {
      gclid: gclid,
      utm_medium: utm_medium,
      utm_campaign: utm_campaign,
    };
    $.cookie("funnel_id", JSON.stringify(fid), { path: "/" });
  }
  // bing and other...
  else if (utm_source !== null) {
    $.cookie("funnel", utm_source, { path: "/" });
    var fid = {
      utm_medium: utm_medium,
      utm_term: utm_term,
      utm_campaign: utm_campaign,
    };
    $.cookie("funnel_id", JSON.stringify(fid), { path: "/" });
  }
} catch (e) {
  // hmm
}
