//remove value from SMS code fields if larger than 9
$(".input-number-widget").on("keyup keydown", function (e) {
  var thisVal = $(this).val();
  var getLastVal = parseInt(+thisVal.toString().split("").pop());
  if ($(this).val() > 9 && e.keyCode !== 46 && e.keyCode !== 8) {
    e.preventDefault();
    $(this).val(getLastVal);
  }

  if ($(this).val() < 0) {
    e.preventDefault();
    $(this).val(0);
  }

  if (
    e.keyCode === 69 ||
    e.keyCode === 188 ||
    e.keyCode === 189 ||
    e.keyCode === 190 ||
    e.keyCode === 109 ||
    e.keyCode === 107
  ) {
    e.preventDefault();
    $(this).val("");
  }
});
