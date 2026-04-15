$(".simple-faq-answer").slideUp(0);

$(".simple-faq-question").on("click", function () {
  if ($(this).hasClass("is-expanded")) {
    $(this).removeClass("is-expanded").next("dd").slideUp(150);
  } else {
    $(this).addClass("is-expanded").siblings("dt").removeClass("is-expanded");
    $(this).next("dd").slideDown(150).siblings("dd").slideUp(150);
  }
});
