var plan_id = "700";

$(window).on("load", function () {
  if (plan_id) {
    var planStatus = "free";
    if (plan_id != "700") {
      planStatus = "paid";
    }
    dataLayer.push({ event: "signup_" + planStatus });
  }
});
