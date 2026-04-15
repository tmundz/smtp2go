//checkbox on/off stuff
$(".remember-text, .remember-checkbox").on("click", function () {
  var me = $("#remember_me"),
    box = $(".remember-checkbox");
  if (box.hasClass("checked")) {
    me.attr("checked", ""); // For IE
    me.removeAttr("checked"); // For other browsers
    me.checked = false;
    box.removeClass("checked");
  } else {
    me.attr("checked", "checked");
    me.checked = true;
    box.addClass("checked");
  }
});
