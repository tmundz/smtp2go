$(function () {
  $(document).on("click", ".nav-more.is-closed", function () {
    $(".global-nav").addClass("is-open");
    $(this).removeClass("is-closed").addClass("is-open");
  });

  $(document).on("click", ".nav-more.is-open", function () {
    $(".global-nav").removeClass("is-open");
    $(this).removeClass("is-open").addClass("is-closed");
  });
});
