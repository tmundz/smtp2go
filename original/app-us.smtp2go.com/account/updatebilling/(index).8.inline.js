$(document).on("click", ".modal-actions-trigger", function () {
  $(this)
    .parents(".download")
    .find(".modal-actions-overlay")
    .addClass("is-active");
  $(this).parents(".download").find(".modal-actions").addClass("is-active");
});

$(document).on("click", ".modal-actions-overlay", function () {
  $(this).parents(".download").find(".modal-actions").removeClass("is-active");
  $(this).removeClass("is-active");
});
