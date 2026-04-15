var Daterange = {
  init: function () {
    var $document = $(document);

    $(".daterange-group").each(function () {
      var $group = $(this);

      var $moduleCustom = $group.find(".daterange-group__module_custom");
      var $moduleCustomFrom = $moduleCustom.find(".daterange-group__from");
      var $moduleCustomFromInput = $moduleCustomFrom.find("> input");
      var $moduleCustomFromTimeGroup = $moduleCustomFrom.find(
        ".daterange-group__time",
      );
      var $moduleCustomFromTimeLabel = $moduleCustomFromTimeGroup.find(
        ".daterange-group__time-label",
      );
      var $moduleCustomFromTimeValue = $moduleCustomFromTimeLabel.find(
        ".daterange-group__time-value",
      );
      var $moduleCustomFromTimeValueHours = $moduleCustomFromTimeValue.find(
        ".daterange-group__time-value-hours",
      );
      var $moduleCustomFromTimeValueMinutes = $moduleCustomFromTimeValue.find(
        ".daterange-group__time-value-minutes",
      );
      var $moduleCustomFromTimeValuePeriod = $moduleCustomFromTimeValue.find(
        ".daterange-group__time-value-period",
      );
      var $moduleCustomFromTimeInputsWrapper = $moduleCustomFromTimeGroup.find(
        ".daterange-group__time-inputs",
      );
      var $moduleCustomFromTimeInputHours =
        $moduleCustomFromTimeInputsWrapper.find(
          ".daterange-group__time-input_hours",
        );
      var $moduleCustomFromTimeInputMinutes =
        $moduleCustomFromTimeInputsWrapper.find(
          ".daterange-group__time-input_minutes",
        );
      var $moduleCustomFromTimeInputPeriod =
        $moduleCustomFromTimeInputsWrapper.find(
          ".daterange-group__time-input_period",
        );
      var $moduleCustomTo = $moduleCustom.find(".daterange-group__to");
      var $moduleCustomToInput = $moduleCustomTo.find("> input");
      var $moduleCustomToTimeGroup = $moduleCustomTo.find(
        ".daterange-group__time",
      );
      var $moduleCustomToTimeLabel = $moduleCustomToTimeGroup.find(
        ".daterange-group__time-label",
      );
      var $moduleCustomToTimeValue = $moduleCustomToTimeLabel.find(
        ".daterange-group__time-value",
      );
      var $moduleCustomToTimeValueHours = $moduleCustomToTimeValue.find(
        ".daterange-group__time-value-hours",
      );
      var $moduleCustomToTimeValueMinutes = $moduleCustomToTimeValue.find(
        ".daterange-group__time-value-minutes",
      );
      var $moduleCustomToTimeValuePeriod = $moduleCustomToTimeValue.find(
        ".daterange-group__time-value-period",
      );
      var $moduleCustomToTimeInputsWrapper = $moduleCustomToTimeGroup.find(
        ".daterange-group__time-inputs",
      );
      var $moduleCustomToTimeInputHours = $moduleCustomToTimeInputsWrapper.find(
        ".daterange-group__time-input_hours",
      );
      var $moduleCustomToTimeInputMinutes =
        $moduleCustomToTimeInputsWrapper.find(
          ".daterange-group__time-input_minutes",
        );
      var $moduleCustomToTimeInputPeriod =
        $moduleCustomToTimeInputsWrapper.find(
          ".daterange-group__time-input_period",
        );
      var $moduleCustomTimeButton = $moduleCustom.find(
        ".daterange-group__time-button",
      );

      var $moduleNative = $group.find(".daterange-group__module_native");
      var $moduleNativeFrom = $moduleNative.find(".daterange-group__from");
      var $moduleNativeFromInputs = $moduleNativeFrom.find("input");
      var $moduleNativeFromDateInput = $moduleNativeFromInputs.eq(0);
      var $moduleNativeFromTimeInput = $moduleNativeFromInputs.eq(1);
      var $moduleNativeTo = $moduleNative.find(".daterange-group__to");
      var $moduleNativeToInputs = $moduleNativeTo.find("input");
      var $moduleNativeToDateInput = $moduleNativeToInputs.eq(0);
      var $moduleNativeToTimeInput = $moduleNativeToInputs.eq(1);

      var isTimeSelectionEnabled =
        $moduleCustom.find(".daterange-group__time").length === 2 &&
        $moduleNativeFromTimeInput.length > 0 &&
        $moduleNativeToTimeInput.length > 0;

      var $moduleCustomInputs = $()
        .add($moduleCustomFromInput)
        .add($moduleCustomToInput);
      var fromDate = moment(Date.now()).startOf("day");
      var toDate = fromDate.clone().endOf("day").startOf("second");

      function debounce(cb, time) {
        var handle = null;
        var func = function () {
          func.cancel();
          handle = setTimeout(cb, time);
        };
        func.cancel = function () {
          if (!handle) return;
          clearTimeout(handle);
          handle = null;
        };
        return func;
      }

      function renderTime($groupBlock) {
        var groupType = $groupBlock.hasClass("daterange-group__from")
          ? "FROM"
          : "TO";
        var date = groupType === "FROM" ? getStartDate() : getEndDate();
        var $valueHours =
          groupType === "FROM"
            ? $moduleCustomFromTimeValueHours
            : $moduleCustomToTimeValueHours;
        var $valueMinutes =
          groupType === "FROM"
            ? $moduleCustomFromTimeValueMinutes
            : $moduleCustomToTimeValueMinutes;
        var $valuePeriod =
          groupType === "FROM"
            ? $moduleCustomFromTimeValuePeriod
            : $moduleCustomToTimeValuePeriod;
        var $hoursInput =
          groupType === "FROM"
            ? $moduleCustomFromTimeInputHours
            : $moduleCustomToTimeInputHours;
        var $minutesInput =
          groupType === "FROM"
            ? $moduleCustomFromTimeInputMinutes
            : $moduleCustomToTimeInputMinutes;
        var $periodInput =
          groupType === "FROM"
            ? $moduleCustomFromTimeInputPeriod
            : $moduleCustomToTimeInputPeriod;

        $valueHours.text(date.format("hh"));
        $valueMinutes.text(date.format("mm"));
        $valuePeriod.text(date.format("A"));

        $hoursInput.val(date.format("hh"));
        $minutesInput.val(date.format("mm"));
        $periodInput.val(date.format("A"));
      }

      function setDaterangepickerDate($input, date) {
        var clonedDate = date.clone();
        var daterangepicker = $input.data("daterangepicker");
        daterangepicker.setStartDate(clonedDate);
        daterangepicker.setEndDate(clonedDate);
        $input.trigger("hide.daterangepicker");

        if (isTimeSelectionEnabled) {
          renderTime($input.parent());
        }
      }

      function setNativeDate($input, date) {
        $input.val(date.format("YYYY-MM-DD"));
      }

      function setNativeTime($input, date) {
        $input.val(date.format("HH:mm"));
      }

      function updateNativeInputsRestrictions(
        daterangepicker,
        $nativeDateInput,
        $nativeTimeInput,
      ) {
        if (daterangepicker.minDate) {
          $nativeDateInput.attr(
            "min",
            daterangepicker.minDate.format("YYYY-MM-DD"),
          );

          if (isTimeSelectionEnabled) {
            if (
              moment($nativeDateInput.val(), "YYYY-MM-DD").isSame(
                daterangepicker.minDate,
                "day",
              )
            ) {
              $nativeTimeInput.attr(
                "min",
                daterangepicker.minDate.format("HH:mm"),
              );
            } else {
              $nativeTimeInput.attr("min", "");
            }
          }
        } else {
          $nativeDateInput.attr("min", "");

          if (isTimeSelectionEnabled) {
            $nativeTimeInput.attr("min", "");
          }
        }

        if (daterangepicker.maxDate) {
          $nativeDateInput.attr(
            "max",
            daterangepicker.maxDate.format("YYYY-MM-DD"),
          );

          if (isTimeSelectionEnabled) {
            if (
              moment($nativeDateInput.val(), "YYYY-MM-DD").isSame(
                daterangepicker.maxDate,
                "day",
              )
            ) {
              $nativeTimeInput.attr(
                "max",
                daterangepicker.maxDate.format("HH:mm"),
              );
            } else {
              $nativeTimeInput.attr("max", "");
            }
          }
        } else {
          $nativeDateInput.attr("max", "");

          if (isTimeSelectionEnabled) {
            $nativeTimeInput.attr("max", "");
          }
        }
      }

      function useDaterangepickerDate() {
        var daterangepickerFrom =
          $moduleCustomFromInput.data("daterangepicker");
        var daterangepickerTo = $moduleCustomToInput.data("daterangepicker");

        setNativeDate(
          $moduleNativeFromDateInput,
          daterangepickerFrom.startDate,
        );
        setNativeDate($moduleNativeToDateInput, daterangepickerTo.startDate);

        if (isTimeSelectionEnabled) {
          setNativeTime(
            $moduleNativeFromTimeInput,
            daterangepickerFrom.startDate,
          );
          setNativeTime($moduleNativeToTimeInput, daterangepickerTo.startDate);
        }

        updateNativeInputsRestrictions(
          daterangepickerFrom,
          $moduleNativeFromDateInput,
          $moduleNativeFromTimeInput,
        );
        updateNativeInputsRestrictions(
          daterangepickerTo,
          $moduleNativeToDateInput,
          $moduleNativeToTimeInput,
        );
      }

      function initNative() {
        if (
          $moduleNativeFromDateInput.attr("type") === "date" &&
          (!isTimeSelectionEnabled ||
            $moduleNativeFromTimeInput.attr("type") === "time")
        ) {
          $group.addClass("daterange-group_supports_native");
        }

        $moduleNativeFromInputs.on("blur", function () {
          if (isTimeSelectionEnabled) {
            setDaterangepickerDate(
              $moduleCustomFromInput,
              moment(
                $moduleNativeFromDateInput.val() +
                  " " +
                  $moduleNativeFromTimeInput.val(),
                "YYYY-MM-DD HH:mm",
              ),
            );
          } else {
            setDaterangepickerDate(
              $moduleCustomFromInput,
              moment($moduleNativeFromDateInput.val(), "YYYY-MM-DD").startOf(
                "day",
              ),
            );
          }

          $moduleCustomFromInput.trigger("hide.daterangepicker");
        });

        $moduleNativeToInputs.on("blur", function () {
          if (isTimeSelectionEnabled) {
            setDaterangepickerDate(
              $moduleCustomToInput,
              moment(
                $moduleNativeToDateInput.val() +
                  " " +
                  $moduleNativeToTimeInput.val(),
                "YYYY-MM-DD HH:mm",
              ).endOf("minute"),
            );
          } else {
            setDaterangepickerDate(
              $moduleCustomToInput,
              moment($moduleNativeToDateInput.val(), "YYYY-MM-DD").endOf("day"),
            );
          }

          $moduleCustomToInput.trigger("hide.daterangepicker");
        });
      }

      function initCustom() {
        $moduleCustomInputs.each(function () {
          var $input = $(this);
          var $parent = $input.parent();

          $input.daterangepicker(
            {
              startDate: fromDate,
              singleDatePicker: true,
              showDropdowns: true,
              timePicker: isTimeSelectionEnabled,
              timePickerSeconds: true,
              autoApply: true,
              locale: {
                format: "MM/DD/YYYY",
              },
              template:
                '<div class="daterangepicker daterange-group__picker">' +
                '<div class="ranges"></div>' +
                '<div class="drp-calendar left">' +
                '<div class="calendar-table"></div>' +
                '<div class="calendar-time" style="display: none;"></div>' +
                "</div>" +
                '<div class="drp-calendar right">' +
                '<div class="calendar-table"></div>' +
                '<div class="calendar-time"></div>' +
                '<div class="calendar-controls"></div>' +
                "</div>" +
                "</div>",
            },
            function () {
              if (isTimeSelectionEnabled) {
                renderTime($parent);
              }
            },
          );
        });

        var fromDaterangepicker =
          $moduleCustomFromInput.data("daterangepicker");
        var toDaterangepicker = $moduleCustomToInput.data("daterangepicker");

        $([fromDaterangepicker, toDaterangepicker]).each(
          function (i, daterangepicker) {
            // Prevent calendar from closing on drag
            (function () {
              var dragging = false;

              function onTouchstart() {
                dragging = false;
              }

              function onTouchmove() {
                dragging = true;
              }

              function onTouchend(e) {
                if (dragging) {
                  return;
                }

                return daterangepicker._outsideClickProxy(e);
              }

              daterangepicker.element.on("show.daterangepicker", function () {
                $document.off(
                  "touchend.daterangepicker",
                  daterangepicker._outsideClickProxy,
                );
                $document.on("touchstart.daterangepicker", onTouchstart);
                $document.on("touchmove.daterangepicker", onTouchmove);
                $document.on("touchend.daterangepicker", onTouchend);
              });
              daterangepicker.element.on("hide.daterangepicker", function () {
                $document.off("touchstart.daterangepicker", onTouchstart);
                $document.off("touchmove.daterangepicker", onTouchmove);
                $document.off("touchend.daterangepicker", onTouchend);
              });
            })();

            daterangepicker.container
              .find(".drp-calendar")
              .on(
                "mousedown.daterangepicker",
                "td.available",
                $.proxy(daterangepicker.clickApply, daterangepicker),
              );

            $moduleCustomFromInput.on("apply.daterangepicker", function () {
              $moduleCustomToInput.trigger("click");
            });
          },
        );

        setDaterangepickerDate($moduleCustomToInput, toDate);

        function markInRangeDates(date) {
          var startDate = fromDaterangepicker.startDate.clone().startOf("day");
          var endDate = toDaterangepicker.startDate.clone().endOf("day");

          if (startDate.isBefore(endDate)) {
            if (date.clone().startOf("day").isSame(startDate)) {
              return "startDate";
            }
            if (date.clone().endOf("day").isSame(endDate)) {
              return "endDate";
            }
            if (
              date.isAfter(startDate) &&
              date.isBefore(toDaterangepicker.endDate)
            ) {
              return "in-range";
            }
          }

          return "";
        }

        fromDaterangepicker.isCustomDate = markInRangeDates;
        toDaterangepicker.isCustomDate = markInRangeDates;

        $moduleCustomInputs.on("show.daterangepicker", function (e) {
          $(e.target).parent().addClass("is-active");
        });

        $moduleCustomFromInput.on("hide.daterangepicker", function () {
          if (fromDaterangepicker.startDate > toDaterangepicker.startDate) {
            setDaterangepickerDate(
              $moduleCustomToInput,
              fromDaterangepicker.startDate
                .clone()
                .endOf("day")
                .startOf("second"),
            );
          }
        });

        $moduleCustomToInput.on("hide.daterangepicker", function () {
          if (fromDaterangepicker.startDate > toDaterangepicker.startDate) {
            setDaterangepickerDate(
              $moduleCustomFromInput,
              toDaterangepicker.startDate.clone().startOf("day"),
            );
          }
        });

        $moduleCustomInputs.on("hide.daterangepicker", function (e) {
          $(e.target).parent().removeClass("is-active");
          useDaterangepickerDate();
          $group.trigger("change.daterangeGroup");
        });

        $moduleCustomTimeButton.click(function () {
          $moduleCustom.addClass("is-time-visible");
        });

        $.each(
          [
            {
              $groupBlock: $moduleCustomFrom,
              $timeGroup: $moduleCustomFromTimeGroup,
              $label: $moduleCustomFromTimeLabel,
              $labelHours: $moduleCustomFromTimeValueHours,
              $labelMinutes: $moduleCustomFromTimeValueMinutes,
              $labelPeriod: $moduleCustomFromTimeValuePeriod,
              $inputHours: $moduleCustomFromTimeInputHours,
              $inputMinutes: $moduleCustomFromTimeInputMinutes,
              $inputPeriod: $moduleCustomFromTimeInputPeriod,
            },
            {
              $groupBlock: $moduleCustomTo,
              $timeGroup: $moduleCustomToTimeGroup,
              $label: $moduleCustomToTimeLabel,
              $labelHours: $moduleCustomToTimeValueHours,
              $labelMinutes: $moduleCustomToTimeValueMinutes,
              $labelPeriod: $moduleCustomToTimeValuePeriod,
              $inputHours: $moduleCustomToTimeInputHours,
              $inputMinutes: $moduleCustomToTimeInputMinutes,
              $inputPeriod: $moduleCustomToTimeInputPeriod,
            },
          ],
          function (_, data) {
            var applyTimeDebounced = debounce(function () {
              var getDateFunction;
              var setDateFunction;

              if ($moduleCustomFrom.is(data.$groupBlock)) {
                getDateFunction = getStartDate;
                setDateFunction = setStartDate;
              } else if ($moduleCustomTo.is(data.$groupBlock)) {
                getDateFunction = getEndDate;
                setDateFunction = setEndDate;
              }

              var date = getDateFunction();
              var hours = parseInt(data.$inputHours.val());
              var minutes = parseInt(data.$inputMinutes.val());
              if (data.$inputPeriod.val() === "PM") {
                if (hours !== 12) {
                  hours += 12;
                }
              } else if (hours === 12) {
                hours = 0;
              }
              date.hours(hours).minutes(minutes);
              setDateFunction(date);
              renderTime(data.$groupBlock);
            }, 50);

            var $numberInputs = $()
              .add(data.$inputHours)
              .add(data.$inputMinutes);
            var currentArrowsControlStartTimeoutId;
            var currentArrowsControlIntervalId;

            $numberInputs.on("keydown", function (e) {
              if (e.keyCode >= 48 && e.keyCode <= 57) {
                // digits 0-9
                if (
                  e.target.value.length >= 2 &&
                  e.target.selectionEnd - e.target.selectionStart === 0
                ) {
                  e.target.value = "";
                }
              }

              if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                e.preventDefault();
                if (currentArrowsControlStartTimeoutId == null) {
                  var $el = $(e.target);
                  var direction;
                  if (e.key === "ArrowUp") {
                    direction = 1;
                  } else {
                    direction = -1;
                  }

                  var nextStep = function () {
                    var newValue = (
                      parseInt(e.target.value) +
                      1 * direction
                    ).toString();
                    $el.val(newValue);
                    $el.trigger("input");
                    $el.eq(0).selectionStart = newValue.length;
                    $el.eq(0).selectionEnd = newValue.length;
                  };

                  nextStep();

                  currentArrowsControlStartTimeoutId = setTimeout(function () {
                    currentArrowsControlIntervalId = setInterval(nextStep, 200);
                  }, 750);
                }
              }
            });

            $numberInputs.on("keyup", function (e) {
              if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                e.preventDefault();
                clearTimeout(currentArrowsControlStartTimeoutId);
                currentArrowsControlStartTimeoutId = null;
                clearInterval(currentArrowsControlIntervalId);
                currentArrowsControlIntervalId = null;
              }
            });

            $numberInputs.on("blur", function (e) {
              if (e.target.value.length < 2) {
                e.target.value =
                  Array(2 - e.target.value.length)
                    .fill("0")
                    .join("") + e.target.value;
              }
            });

            $numberInputs.on("input", function (e) {
              var rawValue = e.target.value;
              var numberValue = parseInt(rawValue);
              var onlyDigitsValue = rawValue.replace(/\D/g, "");

              if (numberValue && numberValue < 0) {
                onlyDigitsValue = "-" + onlyDigitsValue;
              }

              if (rawValue !== onlyDigitsValue) {
                var selectionStart = e.target.selectionStart;
                var selectionEnd = e.target.selectionEnd;
                e.target.value = onlyDigitsValue;
                e.target.selectionStart = selectionStart - 1;
                e.target.selectionEnd = selectionEnd - 1;
              }
            });

            data.$inputHours.on("input", function () {
              var rawHours = data.$inputHours.val();
              var hours = parseInt(rawHours);

              var validHours = Math.max(Math.min(hours, 12), 0);

              if (isNaN(validHours)) {
                validHours = "";
              }

              if (hours !== validHours) {
                data.$inputHours.val(validHours);
              }
            });

            data.$inputMinutes.on("input", function () {
              var rawMinutes = data.$inputMinutes.val();
              var minutes = parseInt(rawMinutes);

              var validMinutes = Math.max(Math.min(minutes, 59), 0);

              if (isNaN(validMinutes)) {
                validMinutes = "";
              }

              if (minutes !== validMinutes) {
                data.$inputMinutes.val(validMinutes);
              }
            });

            var $allInputs = $().add($numberInputs).add(data.$inputPeriod);

            $allInputs.on("blur", function (e) {
              data.$timeGroup.removeClass("is-inputs-visible");
              applyTimeDebounced();
            });

            $allInputs.on("focus", function () {
              applyTimeDebounced.cancel();
              data.$timeGroup.addClass("is-inputs-visible");
            });

            $allInputs.on("change", function (e) {
              e.stopPropagation();
            });

            $allInputs.on("keydown", function (e) {
              if (e.key === "Enter") {
                $(e.target).blur();
              }
            });

            data.$label.click(function (e) {
              data.$timeGroup.addClass("is-inputs-visible");
              var $target = $(e.target);

              if ($target.is(data.$labelMinutes)) {
                data.$inputMinutes.focus();
              } else if ($target.is(data.$labelPeriod)) {
                data.$inputPeriod.focus();
              } else {
                data.$inputHours.focus();
              }
            });
          },
        );

        renderTime($moduleCustomFrom);
        renderTime($moduleCustomTo);

        useDaterangepickerDate();
      }

      initNative();
      initCustom();

      function getStartDate() {
        return $moduleCustomFromInput.data("daterangepicker").startDate.clone();
      }

      function getEndDate() {
        var date = $moduleCustomToInput
          .data("daterangepicker")
          .startDate.clone();
        if (!isTimeSelectionEnabled) {
          date.endOf("day");
        }
        return date;
      }

      function setStartDate(date) {
        var validInput = date.clone().milliseconds(0);
        setDaterangepickerDate($moduleCustomFromInput, validInput);
        var validDate = getStartDate();
        setNativeDate($moduleNativeFromDateInput, validDate);
        if (isTimeSelectionEnabled) {
          setNativeTime($moduleNativeFromTimeInput, validDate);
        }
        $group.trigger("change.daterangeGroup");
      }

      function setEndDate(date) {
        var validInput = date.clone().milliseconds(0);
        setDaterangepickerDate($moduleCustomToInput, validInput);
        var validDate = getEndDate();
        setNativeDate($moduleNativeToDateInput, validDate);
        if (isTimeSelectionEnabled) {
          setNativeTime($moduleNativeToTimeInput, validDate);
        }
        $group.trigger("change.daterangeGroup");
      }

      function setDateRestriction(restriction, date) {
        date = date.clone().milliseconds(0);
        var dateStartOfHour = date.clone().startOf("hour");
        var dateHalfOfHour = dateStartOfHour.clone().add(30, "minutes");
        var dateEndOfDay = date.clone().endOf("day").milliseconds(0);
        var validDate;

        if (
          date.isSame(dateStartOfHour) ||
          date.isSame(dateHalfOfHour) ||
          date.isSame(dateEndOfDay)
        ) {
          validDate = date.clone();
        } else if (date.isBefore(dateHalfOfHour)) {
          validDate = dateHalfOfHour.clone();
        } else {
          validDate = dateStartOfHour.clone().add(1, "hour");
        }

        $moduleCustomFromInput.data("daterangepicker")[restriction] = validDate;
        $moduleCustomToInput.data("daterangepicker")[restriction] = validDate;

        setDaterangepickerDate($moduleCustomFromInput, getStartDate());
        setDaterangepickerDate($moduleCustomToInput, getEndDate());
        useDaterangepickerDate();
      }

      function setMaxDate(date) {
        setDateRestriction("maxDate", date);
      }

      function setMinDate(date) {
        setDateRestriction("minDate", date);
      }

      function getMaxDate() {
        if ($moduleCustomToInput.data("daterangepicker").maxDate) {
          return $moduleCustomToInput.data("daterangepicker").maxDate.clone();
        }

        return false;
      }

      function getMinDate() {
        if ($moduleCustomFromInput.data("daterangepicker").minDate) {
          return $moduleCustomFromInput.data("daterangepicker").minDate.clone();
        }

        return false;
      }

      function hideTimeIfUnchanged() {
        var startDate = getStartDate();
        var startDateStartOfDay = startDate.clone().startOf("day");
        var endDate = getEndDate();
        var endDateEndOfDay = endDate.clone().endOf("day").startOf("second");
        var minDate = getMinDate();
        var maxDate = getMaxDate();

        if (
          (startDate.isSame(startDateStartOfDay) ||
            (minDate && startDate.isSame(minDate))) &&
          (endDate.isSame(endDateEndOfDay) ||
            (maxDate && endDate.isSame(maxDate)))
        ) {
          $moduleCustom.removeClass("is-time-visible");
        }
      }

      $group.data("daterangeGroup", {
        setStartDate: setStartDate,
        setEndDate: setEndDate,
        getStartDate: getStartDate,
        getEndDate: getEndDate,
        setMaxDate: setMaxDate,
        setMinDate: setMinDate,
        getMaxDate: getMaxDate,
        getMinDate: getMinDate,
        hideTimeIfUnchanged: hideTimeIfUnchanged,
      });
    });
  },
};
