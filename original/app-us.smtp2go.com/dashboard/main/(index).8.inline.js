var translations = { time: { 3600: "hour", 86400: "day" } };
$(function () {
  window.setInterval(function () {
    $(".renew-notice .btn.blue").toggleClass("highlight");
  }, 2000);
  $(".active").addClass("is-dashboard");
});

//toggling onboarding steps
var allTrigs = document.querySelectorAll("[data-tabtrigger]");

function toggleActive() {
  var thisTrig = this.dataset.tabtrigger;
  var activeTarget = document.querySelector(
    '.onboarding-tab-content-block [data-tabtarget="' +
      thisTrig +
      '"].is-active',
  );

  if (this.classList.contains("is-active") && activeTarget) {
    this.classList.remove("is-active");
    activeTarget.classList.remove("is-active");

    var contentBlock = document.querySelector(".onboarding-tab-content-block");
    if (contentBlock) {
      contentBlock.classList.remove(thisTrig + "-active");
    }

    updateOnboardingBackdropState();
    return;
  }
  var allEls = document.querySelectorAll("[data-tabtarget]");
  var thisTrig = this.dataset.tabtrigger;
  var thisEl = document.querySelectorAll('[data-tabtarget="' + thisTrig + '"]');
  var contentBlock = document.querySelector(".onboarding-tab-content-block");
  contentBlock.className = "onboarding-tab-content-block";

  for (var i = 0; i < allEls.length; i++) {
    allEls[i].classList.remove("is-active");
  }
  for (var i = 0; i < allTrigs.length; i++) {
    allTrigs[i].classList.remove("is-active");
  }
  this.classList.add("is-active");
  thisEl[0].classList.add("is-active");
  contentBlock.classList.add(thisTrig + "-active");

  updateOnboardingBackdropState();
}

for (var i = 0; i < allTrigs.length; i++) {
  allTrigs[i].addEventListener("click", toggleActive, false);
}

function updateOnboardingBackdropState() {
  if (window.innerWidth >= 768) {
    return;
  }

  var backdrop = document.querySelector(".onboarding-backdrop");
  if (!backdrop) {
    return;
  }

  var hasActive = document.querySelector(
    ".onboarding-tab-content-block [data-tabtrigger].is-active",
  );

  if (hasActive) {
    backdrop.classList.remove("none-active");
  } else {
    backdrop.classList.add("none-active");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updateOnboardingBackdropState();
});
