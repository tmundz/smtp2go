var capterra_vkey = "e8d9ae7bf0620c4338ae4a9a4bbd9434",
  capterra_vid = "2116162",
  capterra_prefix =
    "https:" == document.location.protocol
      ? "https://ct.capterra.com"
      : "http://ct.capterra.com";

(function () {
  var ct = document.createElement("script");
  ct.type = "text/javascript";
  ct.async = true;
  ct.src =
    capterra_prefix +
    "/capterra_tracker.js?vid=" +
    capterra_vid +
    "&vkey=" +
    capterra_vkey;
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(ct, s);
})();
