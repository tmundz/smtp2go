$(function () {
  var email_address = "0xcaphe+roy@wearehackerone.com";

  conversionInfo = {
    event: "PageVisit",
    conversionId: crypto.randomUUID(),
    advancedMatchingParams: [],
  };

  if (email_address != null && email_address != "") {
    conversionInfo.advancedMatchingParams.push({
      name: "email",
      value: email_address,
    });
  }

  window.dataLayer.push(conversionInfo);
});
