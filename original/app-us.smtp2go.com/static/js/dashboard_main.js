// Handles the Ajax Posting for the login form.
//
if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function (predicate) {
    if (this == null) {
      throw new TypeError(
        "Array.prototype.findIndex called on null or undefined",
      );
    }
    if (typeof predicate !== "function") {
      throw new TypeError("predicate must be a function");
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return i;
      }
    }
    return -1;
  };
}

var Custom = (function () {
  var isOnboardingSetUp = false;

  var isLoadingMainAlready = false;
  var sCallbacks = [];
  var fCallbacks = [];

  function load_dashboard_main(data, success, failure) {
    sCallbacks.push(success);
    fCallbacks.push(failure);
    if (isLoadingMainAlready) {
      return;
    }
    isLoadingMainAlready = true;

    // taken from main.tag of charts page - use the same time-points
    data.unix_secs_start = Math.floor(
      moment().utc().subtract(30, "days").startOf("day").valueOf() / 1000,
    );
    data.unix_secs_end = Math.floor(
      moment().utc().endOf("day").valueOf() / 1000,
    );

    var request = HTML.ajax(
      "GET",
      Globals.BACKEND + END_POINTS.urls()["Account Summary"],
      data,
    );
    request.success(function (data) {
      isLoadingMainAlready = false;
      sCallbacks.forEach(function (scb, idx) {
        scb(data);
      });
      sCallbacks = [];
      fCallbacks = [];
    });
    request.error(function (res) {
      isLoadingMainAlready = false;
      fCallbacks.forEach(function (fcb, idx) {
        fcb(res);
      });
      sCallbacks = [];
      fCallbacks = [];
    });
  }

  function setupOnboardingBanner(serverData) {
    if (isOnboardingSetUp) {
      return;
    }

    if (serverData.force_hide_onboarding_popup) {
      return;
    }

    isOnboardingSetUp = true;
    var completedPercentage = Object.keys(serverData.setup_account).length * 25;

    if (serverData.is_subaccount) {
      completedPercentage =
        (Object.keys(serverData.setup_account).length - 1) * 33;
      $(".onboarding-steps").addClass("is-subaccount");
    }

    if (completedPercentage < 99) {
      if (serverData.show_onboarding_popup) {
        $("#setup-status").addClass("is-active");
      } else {
        $(".nav-setup-progress").addClass("is-active");
        $(".nav-support-dropdown").addClass("has-nav-setup-progress");
      }

      $("body").addClass("is-onboarding");
      $.each(serverData.setup_account, function (key, value) {
        $("#setup-status .onboarding-tab." + key).addClass("is-completed");
        $("#setup-status .onboarding-tab-content." + key).addClass(
          "is-disabled",
        );
      });
      // find the first item that's not finished and set active, happens in two places.
      $("[data-tabtrigger]").removeClass("is-active");
      $("[data-tabtarget]").removeClass("is-active");

      var $activeTriggers = $("[data-tabtrigger]:not(.is-completed)");
      var getTab = $activeTriggers.first().data("tabtrigger");

      $('[data-tabtrigger="' + getTab + '"]').addClass("is-active");
      $('[data-tabtarget="' + getTab + '"]').addClass("is-active");
      $(".onboarding-tab-content-block").addClass(getTab + "-active");

      $(".onboarding-progress").text(completedPercentage + "% complete");
      $(".setup-progress-visual").css("width", completedPercentage + "%");

      $("#setup-status .onboarding-dismiss").click(function () {
        $("#setup-status").removeClass("is-active");
        $(".nav-setup-progress").addClass("is-active");
        $(".nav-support-dropdown").addClass("has-nav-setup-progress");
        toggleOnboardingPopup();
      });

      $(document).on("click", ".nav-setup-progress button", function () {
        $("#setup-status").addClass("is-active");
        $(".nav-setup-progress").removeClass("is-active");
        $(".nav-support-dropdown").removeClass("has-nav-setup-progress");
        toggleOnboardingPopup();
      });
    }
  }

  function toggleOnboardingPopup() {
    var reqData = {
      action: "toggle-onboarding-popup",
    };
    var request = HTML.ajax(
      "PUT",
      Globals.BACKEND + END_POINTS.urls()["Account Summary"],
      reqData,
    );
    request.success(function () {
      // nothing to do
    });
  }

  function DesktopVersion() {
    var isDataLoaded = false;
    var graph;
    var graph_has_values = false;
    var graph_is_dummy = false;
    var sent_first_email = false;

    if (localStorage.getItem("graphcolors.1") === null) {
      var graph_colors_array = [
        "#A2D4FC",
        "#1892E6",
        "#e38b81",
        "#F0D78E",
        "#D0BA7B",
        "#3BB67F",
        "#B57AD4",
      ];
      localStorage.setItem("graphcolors.1", JSON.stringify(graph_colors_array));
    }
    var retrievedColorsArray = localStorage.getItem("graphcolors.1");
    var graph_colors = JSON.parse(retrievedColorsArray);

    // call the color cache buster used to update the local colors if need be
    graph_colors = cache_bust_graph_colors(graph_colors);

    var graph_colors_dash = new Array();
    graph_colors_dash = [
      graph_colors[0],
      graph_colors[3],
      graph_colors[2],
      graph_colors[5],
      graph_colors[6],
    ];

    var c_spam_good = HTML.SM_SP_GOOD;
    var c_spam_bad = HTML.SM_SP_BAD;
    var c_bn_good = HTML.SM_BN_GOOD;
    var c_bn_bad = HTML.SM_BN_BAD;

    //For Flot
    var date_display = {
      null: "%d/%m/%Y",
      "": "%d/%m/%Y",
      dmy: "%d/%m/%Y",
      mdy: "%m/%d/%Y",
      ymd: "%Y-%m-%d",
    };
    var selected_display = date_display[null];
    //For jQuery datepicker
    var date_display2 = {
      null: "dd/mm/yy",
      "": "dd/mm/yy",
      dmy: "dd/mm/yy",
      mdy: "mm/dd/yy",
      ymd: "yy-mm-dd",
    };
    var selected_display2 = date_display2[null];

    var lines = {};

    var nFormatter = function (num) {
      if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
      }
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
      }
      return num;
    };

    var get_contents = function () {
      jQuery.support.cors = true;
      data = {};
      if (Cookie.read("login_id") != null) {
        data = { login_id: Cookie.read("login_id") };
      }
      init_chart(null, true);
      load_dashboard_main(
        data,
        function (data) {
          if (data.status == "OK") {
            sent_first_email = data.results.sent_first_email;

            $(".tooltips").tooltip();
            $("#remaining").html(
              parseInt(data.results.used).toLocaleString() +
                "&#47;" +
                (
                  parseInt(data.results.remaining) + parseInt(data.results.used)
                ).toLocaleString(),
            );
            $("#remaining").removeClass("hidden");

            var prgress =
              parseInt(data.results.used) /
              (parseInt(data.results.remaining) + parseInt(data.results.used));

            if (prgress > 1) {
              var allocated =
                (parseInt(data.results.remaining) +
                  parseInt(data.results.used)) *
                3;
              var percentageValue = parseInt(data.results.used) / allocated;
              $(".progress")
                .addClass("progress-overflow")
                .append(
                  "<style>.progress.progress-overflow::after{width: " +
                    HTML.format_percent(percentageValue, null, "en-US") +
                    ";}.progress-overflow p.text-center.progress-bar-count{width: " +
                    HTML.format_percent(percentageValue, null, "en-US") +
                    " !important;}</style>",
                );
              if (percentageValue > 0.79) {
                $(".progress").addClass("progress-overflow-high");
              }
            } else {
              $(".progress-bar-count").css(
                "width",
                HTML.format_percent(prgress, null, "en-US"),
              );
            }
            setTimeout(function () {
              var progWidth = $(
                ".progress p.text-center.progress-bar-count",
              ).width();
              $(".progress-bar-tooltip-container").width(progWidth);
              if (progWidth < 16) {
                $(".progress-bar-tooltip-container").append(
                  "<style>.progress-bar-tooltip::after {left: calc(" +
                    progWidth +
                    "px + 6px);}.progress-bar-tooltip{left: -10px;}</style>",
                );
              } else if (progWidth > 15 && progWidth < 161) {
                $(".progress-bar-tooltip-container").append(
                  "<style>.progress-bar-tooltip::after {left: calc(" +
                    progWidth +
                    "px / 2 - 3px);}</style>",
                );
              }
            }, 300);

            $(".progress-bar").css(
              "width",
              HTML.format_percent(prgress, null, "en-US"),
            );

            if (
              END_POINTS.fronts()["Change Plan"] != null &&
              !data.results.hide_changeplan
            ) {
              $("#update_plan").removeClass("hidden");
            }

            var ext = "<sup>th</sup>";
            if (
              data.results.next_billing_day == 1 ||
              data.results.next_billing_day == 21 ||
              data.results.next_billing_day == 31
            )
              ext = "<sup>st</sup>";
            else if (
              data.results.next_billing_day == 2 ||
              data.results.next_billing_day == 22
            )
              ext = "<sup>nd</sup>";
            else if (
              data.results.next_billing_day == 3 ||
              data.results.next_billing_day == 23
            )
              ext = "<sup>rd</sup>";
            $("#emails-this-billing-month .meta").html(
              "Emails sent this billing month. Resets on " +
                data.results.next_billing_monthname +
                " " +
                data.results.next_billing_day +
                ext +
                ".",
            );

            if (
              data.results.setup_account["sender_domain_verified"] ===
                undefined ||
              !data.results.setup_account.sender_domain_verified
            ) {
              $(".enable-sender-domain-message").removeClass("hide");
            }

            setupOnboardingBanner(data.results);

            HTML.conform_to(data);

            if (data.results.plan_refresh == "1 day, 0:00:00")
              $("#emails-this-billing-month .meta").html(
                "Emails sent today. Resets at midnight GMT.",
              );

            if (data.results.plan_size > 50000) {
              c_spam_good = HTML.LG_SP_GOOD;
              c_spam_bad = HTML.LG_SP_BAD;
              c_bn_good = HTML.LG_BN_GOOD;
              c_bn_bad = HTML.LG_BN_BAD;
            } else {
              c_spam_good = HTML.SM_SP_GOOD;
              c_spam_bad = HTML.SM_SP_BAD;
              c_bn_good = HTML.SM_BN_GOOD;
              c_bn_bad = HTML.SM_BN_BAD;
            }

            var bnc = $("#thirty-day-bounce-rate .dash-stat-figure");
            bnc.html(
              '<span class="dash-stat-value">' +
                HTML.format_percent(
                  parseFloat(data.results.bounces.totals.bounce_percent) / 100,
                ) +
                "</span>",
            );
            if (data.results.bounces.totals.bounce_percent < c_bn_good) {
              bnc.html(
                bnc.html() +
                  '<div class="dash-stat-status dash-stat-status-good"><strong>Good</strong><div class="dash-stat-popout"><span>This is the percentage of emails that you have sent in the last 30 days that have bounced back. A reputation of ‘Good’ is given for a bounce percentage of up to ' +
                  c_bn_good +
                  '%.<br /><a href="https://support.smtp2go.com/hc/en-gb/articles/223087727-Bounce-Spam-Percentages-and-Ratings" target="_blank">Click here for more info.</a></span></div></div>',
              );
            } else if (data.results.bounces.totals.bounce_percent < c_bn_bad) {
              bnc.html(
                bnc.html() +
                  '<div class="dash-stat-status dash-stat-status-fair"><strong>Fair</strong><div class="dash-stat-popout"><span>This is the percentage of emails that you have sent in the last 30 days that have bounced back. A reputation of ‘Fair’ is given for a bounce percentage of ' +
                  c_bn_good +
                  "% to " +
                  c_bn_bad +
                  '%.<br /><a href="https://support.smtp2go.com/hc/en-gb/articles/223087727-Bounce-Spam-Percentages-and-Ratings" target="_blank">Click here for more info.</a></span></div></div>',
              );
            } else {
              bnc.html(
                bnc.html() +
                  '<div class="dash-stat-status dash-stat-status-poor"><strong>Poor</strong><div class="dash-stat-popout"><span>This is the percentage of emails that you have sent in the last 30 days that have bounced back. A reputation of ‘Poor’ is given for a bounce percentage above ' +
                  c_bn_bad +
                  '%.<br /><a href="https://support.smtp2go.com/hc/en-gb/articles/223087727-Bounce-Spam-Percentages-and-Ratings" target="_blank">Click here for more info.</a></span></div></div>',
              );
            }

            var spm = $("#thirty-day-spam-rate .dash-stat-figure");
            spm.html(
              '<span class="dash-stat-value">' +
                HTML.format_percent(
                  data.results.spam.totals.spam_percent / 100,
                ) +
                "</span>",
            );
            if (data.results.spam.totals.spam_percent < c_spam_good) {
              spm.html(
                spm.html() +
                  '<div class="dash-stat-status dash-stat-status-good"><strong>Good</strong><div class="dash-stat-popout"><span>This is the percentage of emails that you have sent in the last 30 days that have been marked as spam. A reputation of ‘Good’ is given for a spam percentage up to ' +
                  c_spam_good.toFixed(2) +
                  '%.<br /><a href="https://support.smtp2go.com/hc/en-gb/articles/223087727-Bounce-Spam-Percentages-and-Ratings" target="_blank">Click here for more info.</a></span></div></div>',
              );
            } else if (data.results.spam.totals.spam_percent < c_spam_bad) {
              spm.html(
                spm.html() +
                  '<div class="dash-stat-status dash-stat-status-fair"><strong>Fair</strong><div class="dash-stat-popout"><span>This is the percentage of emails that you have sent in the last 30 days that have been marked as spam. A reputation of ‘Fair’ is given for a spam percentage of ' +
                  c_spam_good.toFixed(2) +
                  "% to " +
                  c_spam_bad.toFixed(2) +
                  '%.<br /><a href="https://support.smtp2go.com/hc/en-gb/articles/223087727-Bounce-Spam-Percentages-and-Ratings" target="_blank">Click here for more info.</a></span></div></div>',
              );
            } else {
              spm.html(
                spm.html() +
                  '<div class="dash-stat-status dash-stat-status-poor"><strong>Poor</strong><div class="dash-stat-popout"><span>This is the percentage of emails that you have sent in the last 30 days that have been marked as spam. A reputation of ‘Poor’ is given for a spam percentage above ' +
                  c_spam_bad.toFixed(2) +
                  '%.<br /><a href="https://support.smtp2go.com/hc/en-gb/articles/223087727-Bounce-Spam-Percentages-and-Ratings" target="_blank">Click here for more info.</a></span></div></div>',
              );
            }

            if (data.results.ccard_status == "expiring") {
              $(".banner-notice.card-expiring").show();
            }

            if (data.results.ccard_status == "expired") {
              $(".banner-notice.card-expired").show();
            }

            try {
              init_chart(data, true);
            } catch (error) {}
          } else {
            HTML.handleError(data);
          }
        },
        HTML.RequestError,
      );
    };

    var wrapText = function (context, text, x, y, maxWidth, lineHeight) {
      var words = text.split(" ");
      var line = "";

      for (var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + " ";
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          context.fillText(line, x, y);
          line = words[n] + " ";
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      context.fillText(line, x, y);
    };

    var reposition_empty_text = function () {
      if (
        graph_has_values ||
        sent_first_email ||
        graph == null ||
        graph_is_dummy
      ) {
        return;
      }
      var canvas = graph.getCanvas();
      var ctx = canvas.getContext("2d"); //canvas context
      var x = canvas.width / (2 * window.devicePixelRatio);
      var y = canvas.height / (2 * window.devicePixelRatio);
      var text = "You'll see activity here once you start sending emails.";
      if (sent_first_email) {
        text = "Loading";
      }
      var maxWidth = screen.width - 70;
      var lineHeight = 25;
      var fontWeight = "normal";
      var fontSizePx = 14;
      var fontFamily = '"Open Sans", sans-serif';
      var textColor = "#38393e";
      var bgColor = "#ffffff";
      var padding = 10;

      ctx.font = fontWeight + " " + fontSizePx + "px " + fontFamily;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // measure text width/height
      var metrics = ctx.measureText(text);
      var textWidth = metrics.width;
      var textHeight = fontSizePx;

      // draw background rectangle behind text
      ctx.fillStyle = bgColor;
      ctx.fillRect(
        x - textWidth / 2 - padding,
        y - textHeight / 2 - padding,
        textWidth + padding * 2,
        textHeight + padding * 2,
      );

      // draw text on top
      ctx.fillStyle = textColor;
      if (screen.width < 500) {
        x = (canvas.width - maxWidth) / 2;
        y = 100;
      }
      wrapText(ctx, text, x, y, maxWidth, lineHeight);
    };

    var init_chart = function (data, first_run) {
      var emails = {
        label: "Emails",
        color: 0,
        lines: { lineWidth: 3, fill: false },
        shadowSize: 0,
        data: [],
      };
      var bounces = {
        label: "Bounces",
        color: 1,
        lines: { lineWidth: 3, fill: false },
        shadowSize: 0,
        data: [],
      };
      var spam = {
        label: "Spam",
        color: 2,
        lines: { lineWidth: 3, fill: false },
        shadowSize: 0,
        data: [],
      };
      var opens = {
        label: "Opens",
        color: 3,
        lines: { lineWidth: 3, fill: false },
        shadowSize: 0,
        data: [],
      };
      var clicks = {
        label: "Clicks",
        color: 4,
        lines: { lineWidth: 3, fill: false },
        shadowSize: 0,
        data: [],
      };

      var list = [];

      if (data === null) {
        data = {
          results: {
            date_display: "",
            emails: null,
            bounces: { rows: null },
            spam: { rows: null },
            opens: { rows: null },
            clicks: { rows: null },
          },
        };
        graph_is_dummy = true;
      } else {
        graph_is_dummy = false;
      }

      if (first_run) {
        graph_has_values = false;
        selected_display = date_display[data.results["date_display"]];
        selected_display2 = date_display2[data.results["date_display"]];
        if (data.results.emails != null) {
          for (var i = 0; i < data.results.emails.length; i++) {
            if (
              !isNaN(parseInt(data.results.emails[i].emails)) &&
              parseInt(data.results.emails[i].emails) > 0
            )
              graph_has_values = true;
            emails.data.push([
              data.results.emails[i].date,
              data.results.emails[i].emails,
            ]);
          }
        }

        if (data.results.bounces.rows != null) {
          for (var i = 0; i < data.results.bounces.rows.length; i++) {
            bounces.data.push([
              data.results.bounces.rows[i].date,
              data.results.bounces.rows[i].hardbounces +
                data.results.bounces.rows[i].softbounces,
            ]);
          }
        }

        if (data.results.spam.rows != null) {
          for (var i = 0; i < data.results.spam.rows.length; i++) {
            spam.data.push([
              data.results.spam.rows[i].date,
              data.results.spam.rows[i].spams,
            ]);
          }
        }

        if (g_has_open_trackers) {
          if (data.results.opens.rows != null) {
            for (var i = 0; i < data.results.opens.rows.length; i++) {
              opens.data.push([
                data.results.opens.rows[i].date,
                data.results.opens.rows[i].opens,
              ]);
            }
          }
        }

        if (g_has_click_trackers) {
          if (data.results.clicks.rows != null) {
            for (var i = 0; i < data.results.clicks.rows.length; i++) {
              clicks.data.push([
                data.results.clicks.rows[i].date,
                data.results.clicks.rows[i].clicks,
              ]);
            }
          }
        }

        if (emails.data.length > 0) lines[emails.label] = emails;
        if (bounces.data.length > 0) lines[bounces.label] = bounces;
        if (spam.data.length > 0) lines[spam.label] = spam;
        if (opens.data.length > 0) lines[opens.label] = opens;
        if (clicks.data.length > 0) lines[clicks.label] = clicks;

        if (g_has_open_trackers) {
          list.push(opens);
        }
        if (g_has_click_trackers) {
          list.push(clicks);
        }

        list.push(spam);
        list.push(bounces);
        list.push(emails);
      } else {
        var choiceContainer = $("#choices");

        choiceContainer.find(".custombox:not(.hide)").each(function () {
          var key = $(this).attr("name");
          if (key && lines[key]) list.push(lines[key]);
        });
      }

      var xpointcnt = 4;
      if ($(window).width() > 960) xpointcnt = 6;

      graph = $.plot($("#usage_chart"), list, {
        series: {
          lines: {
            show: true,
            lineWidth: 2,
          },
          points: {
            show: true,
            radius: 0,
            lineWidth: 1,
          },
        },
        grid: {
          hoverable: true,
          clickable: true,
          tickColor: "#eee",
          borderColor: "#eee",
          borderWidth: 1,
        },
        xaxis: {
          ticks: xpointcnt,
          tickDecimals: 0,
          tickColor: "#eee",
          mode: "time",
          timeformat: selected_display,
        },
        yaxis: {
          ticks: 8,
          tickDecimals: 0,
          tickColor: "#eee",
          min: 0,
          tickFormatter: nFormatter,
        },
        legend: { show: false },
        colors: graph_colors_dash,
      });

      reposition_empty_text();

      if (first_run) {
        var choiceContainer = $("#choices");
        choiceContainer.empty();
        var html = "";
        $.each(graph.getData().reverse(), function (i, series) {
          html =
            '<div class="chart-legend-item"><div id="clicker" class="clicker" style="border:1px solid #ccc; padding:1px; width:14px; height:14px;" onclick="Custom.checkbox(event);" >';
          html +=
            '<div style="width:4px; height:0; border:5px solid ' +
            series.color +
            '; overflow:hidden" id="id' +
            series.label.split(" ").join("_") +
            '" class="custombox" name="' +
            series.label +
            '">';
          html += "</div></div>";
          html +=
            '<label class="control-label" href="javascript:void(0);" onclick="Custom.checkbox(event);" for="id' +
            series.label.split(" ").join("_") +
            '">' +
            series.label +
            "</label></div>";
          choiceContainer.append(html);
        });

        choiceContainer.find("div").click(init_chart);
        choiceContainer.find("label").click(init_chart);
      }

      $("#usage_chart").bind("plothover", function (event, pos, item) {
        // wrap this in try catch - hiding plots causes these to go error mad
        try {
          $("#x").text(pos.x.toFixed(2));
          $("#y").text(pos.y.toFixed(2));

          if (item) {
            if (previousPoint != item.dataIndex) {
              previousPoint = item.dataIndex;

              $("#tooltip").remove();
              var x = item.datapoint[0].toFixed(2),
                y = item.datapoint[1].toFixed(2);
              var tzoffset = new Date().getTimezoneOffset();
              var x2 = Math.round(x) + tzoffset * 60 * 1000; // Flot interprets times in UTC, so un-apply TZ conversion
              var d = new Date(x2);
              d = $.datepicker.formatDate(selected_display2, d);
              var text = "";
              if (item.series.label == "Emails") {
                text =
                  HTML.format_number(Math.round(y)) +
                  " " +
                  item.series.label +
                  " Sent on " +
                  d;
              } else {
                text =
                  HTML.format_number(Math.round(y)) +
                  " " +
                  item.series.label +
                  " on " +
                  d;
              }
              showTooltip(item.pageX, item.pageY, text);
            }
          } else {
            $("#tooltip").remove();
            previousPoint = null;
          }
        } catch (err) {}
      });
    };

    function showTooltip(x, y, contents) {
      $('<div id="tooltip" class="tooltip-inner">' + contents + "</div>")
        .css({
          position: "absolute",
          display: "none",
          top: y + 5,
          left: x - 80,
          border: "1px solid #333",
          padding: "4px",
          color: "#333333",
          "border-radius": "3px",
          opacity: 0.8,
        })
        .appendTo("body")
        .fadeIn(200);
    }

    function onResize() {
      if (graph) {
        graph.resize();
        graph.setupGrid();
        graph.draw();
      }
      reposition_empty_text();
    }

    return {
      init: function () {
        if (!isDataLoaded) {
          get_contents();
          isDataLoaded = true;
        }
        $(window).on("resize", onResize);
        onResize();
      },
      terminate: function () {
        $(window).off("resize", onResize);
      },
    };
  }

  function MobileVersion() {
    var isBasicInitialized = false;
    var serverData;
    var $dashboard;
    var chart;
    var fullChartData;

    if (localStorage.getItem("graphcolors.1") === null) {
      var graph_colors_array = [
        "#A2D4FC",
        "#1892E6",
        "#e38b81",
        "#F0D78E",
        "#D0BA7B",
        "#3BB67F",
        "#B57AD4",
      ];
      localStorage.setItem("graphcolors.1", JSON.stringify(graph_colors_array));
    }
    var retrievedColorsArray = localStorage.getItem("graphcolors.1");
    var graph_colors = JSON.parse(retrievedColorsArray);

    // call the color cache buster used to update the local colors if need be
    graph_colors = cache_bust_graph_colors(graph_colors);

    var graph_colors_dash = [
      graph_colors[0],
      graph_colors[3],
      graph_colors[2],
      graph_colors[5],
      graph_colors[6],
    ];

    function getChartData(serverData) {
      var lines = {};
      var emails = {
        label: "Emails",
        color: 0,
        lines: { lineWidth: 3, fill: false },
        shadowSize: 0,
        data: [],
      };
      var bounces = {
        label: "Bounces",
        color: 1,
        lines: { lineWidth: 3, fill: false },
        shadowSize: 0,
        data: [],
      };
      var spam = {
        label: "Spam",
        color: 2,
        lines: { lineWidth: 3, fill: false },
        shadowSize: 0,
        data: [],
      };
      var opens = {
        label: "Opens",
        color: 3,
        lines: { lineWidth: 3, fill: false },
        shadowSize: 0,
        data: [],
      };
      var clicks = {
        label: "Clicks",
        color: 4,
        lines: { lineWidth: 3, fill: false },
        shadowSize: 0,
        data: [],
      };

      if (serverData.emails != null) {
        for (var i = 0; i < serverData.emails.length; i++) {
          emails.data.push([
            serverData.emails[i].date,
            serverData.emails[i].emails,
          ]);
        }
      }

      if (serverData.bounces.rows != null) {
        for (var i = 0; i < serverData.bounces.rows.length; i++) {
          bounces.data.push([
            serverData.bounces.rows[i].date,
            serverData.bounces.rows[i].hardbounces +
              serverData.bounces.rows[i].softbounces,
          ]);
        }
      }

      if (serverData.spam.rows != null) {
        for (var i = 0; i < serverData.spam.rows.length; i++) {
          spam.data.push([
            serverData.spam.rows[i].date,
            serverData.spam.rows[i].spams,
          ]);
        }
      }

      if (g_has_open_trackers) {
        if (serverData.opens.rows != null) {
          for (var i = 0; i < serverData.opens.rows.length; i++) {
            opens.data.push([
              serverData.opens.rows[i].date,
              serverData.opens.rows[i].opens,
            ]);
          }
        }
      }

      if (g_has_click_trackers) {
        if (serverData.clicks.rows != null) {
          for (var i = 0; i < serverData.clicks.rows.length; i++) {
            clicks.data.push([
              serverData.clicks.rows[i].date,
              serverData.clicks.rows[i].clicks,
            ]);
          }
        }
      }

      if (emails.data.length > 0) lines[emails.label] = emails;
      if (bounces.data.length > 0) lines[bounces.label] = bounces;
      if (spam.data.length > 0) lines[spam.label] = spam;
      if (opens.data.length > 0 && g_has_open_trackers)
        lines[opens.label] = opens;
      if (clicks.data.length > 0 && g_has_click_trackers)
        lines[clicks.label] = clicks;

      return lines;
    }

    function initChart($chartWrapper, serverData) {
      var dateDisplay = {
        null: "%d/%m/%Y",
        "": "%d/%m/%Y",
        dmy: "%d/%m/%Y",
        mdy: "%m/%d/%Y",
        ymd: "%Y-%m-%d",
      };
      var selectedDisplay = dateDisplay[serverData.date_display];
      var $chart = $chartWrapper.find(".usage-chart");

      function nFormatter(num) {
        if (num >= 1000000000) {
          return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
        }
        if (num >= 1000000) {
          return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
        }
        if (num >= 1000) {
          return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
        }
        return num;
      }

      fullChartData = getChartData(serverData);

      var chartHasValues = false;
      if (fullChartData.Emails && fullChartData.Emails.data.length > 0)
        for (var i = 0; i < fullChartData.Emails.data.length; i++) {
          if (fullChartData.Emails.data[i][1] > 0) {
            chartHasValues = true;
            break;
          }
        }

      var xpointcnt = 4;

      chart = $.plot($chart, Object.values(fullChartData), {
        series: {
          lines: {
            show: true,
            lineWidth: 2,
          },
          points: {
            show: true,
            radius: 0,
            lineWidth: 1,
          },
        },
        grid: {
          hoverable: true,
          clickable: true,
          tickColor: "#eee",
          borderColor: "#eee",
          borderWidth: 1,
        },
        xaxis: {
          ticks: xpointcnt,
          tickDecimals: 0,
          tickColor: "#eee",
          mode: "time",
          timeformat: selectedDisplay,
        },
        yaxis: {
          ticks: 8,
          tickDecimals: 0,
          tickColor: "#eee",
          min: 0,
          tickFormatter: nFormatter,
        },
        legend: { show: false },
        colors: graph_colors_dash,
      });

      if (!chartHasValues && !serverData.sent_first_email) {
        $chartWrapper.find(".message-no-emails").addClass("is-visible");
      }
    }

    function initBasic() {
      $dashboard = $(".js-dashboard.is-mobile");

      function getCloseHandler($popup, bindingEvent, closeFn) {
        return function (e) {
          if (e.originalEvent === bindingEvent.originalEvent) {
            return;
          }
          var $target = $(e.target);
          var $parentPopup = $target.parents(".js-rate-popup");
          var isCloseButton =
            $target.parents(".popup-close").length ||
            $target.is(".popup-close");

          if (!$parentPopup.is($popup) || isCloseButton) {
            closeFn();
          }
        };
      }

      $(".js-rate-button").on("click", function (e) {
        var $button = $(e.currentTarget);
        var target = $button.data("target");
        var $target = $(".js-rate-popup[data-name=" + target + "]");
        var buttonPosition = $button.position();
        var buttonHeight = $button.outerHeight();
        var closeHandler;

        function close() {
          $target.removeClass("is-visible");
          $(window).off("click", closeHandler);
        }

        closeHandler = getCloseHandler($target, e, close);
        $(window).on("click", closeHandler);

        $target.css({
          left: Math.min(buttonPosition.left, window.innerWidth - 16 - 288),
          top: buttonPosition.top + buttonHeight + 10,
        });
        $target.addClass("is-visible");
      });

      var $chartCheckboxes = $(".js-chart-checkboxes-wrapper .checker");
      $chartCheckboxes.find("input").on("change", function () {
        var $this = $(this);
        var $parent = $this.parents(".checker-box");
        $parent.toggleClass("checked");

        var currentData = chart.getData();
        if (this.checked) {
          currentData.push(fullChartData[$this.data("line")]);
        } else {
          var index = currentData.findIndex(function (el) {
            return el.label === $this.data("line");
          });

          if (index > -1) {
            currentData.splice(index, 1);
          }
        }

        chart.setData(currentData);
        chart.setupGrid();
        chart.draw();
      });

      if (g_has_open_trackers) {
        $chartCheckboxes
          .find('input[data-line="Opens"]')
          .parents(".item")
          .removeClass("hide");
      }

      if (g_has_click_trackers) {
        $chartCheckboxes
          .find('input[data-line="Clicks"]')
          .parents(".item")
          .removeClass("hide");
      }
    }

    function renderData() {
      var used = parseInt(serverData.used);
      var remaining = parseInt(serverData.remaining);
      var total = used + remaining;
      var usedPercents = used / (total / 100);

      var $usageBar = $dashboard.find(".js-usage-bar");
      var $filler = $usageBar.find(".filler");

      $usageBar
        .find(".content")
        .html(used.toLocaleString() + " &#47; " + total.toLocaleString());
      $filler.css("width", usedPercents + "%");
      if (usedPercents > 98) {
        $filler.addClass("is-rounded");
      } else {
        $filler.removeClass("is-rounded");
      }

      $dashboard
        .find(".js-resets-on")
        .text(
          serverData.next_billing_monthname.slice(0, 3) +
            " " +
            serverData.next_billing_day,
        );

      var rateSpamGood;
      var rateSpamBad;
      var rateBounceGood;
      var rateBounceBad;
      if (serverData.plan_size > 50000) {
        rateSpamGood = HTML.LG_SP_GOOD;
        rateSpamBad = HTML.LG_SP_BAD;
        rateBounceGood = HTML.LG_BN_GOOD;
        rateBounceBad = HTML.LG_BN_BAD;
      } else {
        rateSpamGood = HTML.SM_SP_GOOD;
        rateSpamBad = HTML.SM_SP_BAD;
        rateBounceGood = HTML.SM_BN_GOOD;
        rateBounceBad = HTML.SM_BN_BAD;
      }

      var $bounceRateBadge = $dashboard.find(".js-bounce-rate");
      var $bounceRatePopup = $dashboard.find(
        '.js-rate-popup[data-name="bounce"]',
      );
      var $bounceRatePopupScore = $bounceRatePopup.find(".score");
      var $bounceRatePopupValues = $bounceRatePopup.find(".values");
      $bounceRateBadge.text(
        HTML.format_percent(
          parseFloat(serverData.bounces.totals.bounce_percent) / 100,
        ),
      );
      if (serverData.bounces.totals.bounce_percent < rateBounceGood) {
        $bounceRateBadge.addClass("is-good");
        $bounceRatePopupScore.text("Good");
        $bounceRatePopupValues.text("of up to " + rateBounceGood + "%");
      } else if (serverData.bounces.totals.bounce_percent < rateBounceBad) {
        $bounceRateBadge.addClass("is-fair");
        $bounceRatePopupScore.text("Fair");
        $bounceRatePopupValues.text(
          "of " + rateBounceGood + "% to " + rateBounceBad + "%",
        );
      } else {
        $bounceRateBadge.addClass("is-poor");
        $bounceRatePopupScore.text("Poor");
        $bounceRatePopupValues.text("above " + rateBounceBad + "%");
      }

      var $spamRateBadge = $dashboard.find(".js-spam-rate");
      var $spamRatePopup = $dashboard.find('.js-rate-popup[data-name="spam"]');
      var $spamRatePopupScore = $spamRatePopup.find(".score");
      var $spamRatePopupValues = $spamRatePopup.find(".values");
      $spamRateBadge.text(
        HTML.format_percent(
          parseFloat(serverData.spam.totals.spam_percent) / 100,
        ),
      );
      if (serverData.spam.totals.spam_percent < rateSpamGood) {
        $spamRateBadge.addClass("is-good");
        $spamRatePopupScore.text("Good");
        $spamRatePopupValues.text("of up to " + rateSpamGood + "%");
      } else if (serverData.spam.totals.spam_percent < rateSpamBad) {
        $spamRateBadge.addClass("is-fair");
        $spamRatePopupScore.text("Fair");
        $spamRatePopupValues.text(
          "of " + rateSpamGood + "% to " + rateSpamBad + "%",
        );
      } else {
        $spamRateBadge.addClass("is-poor");
        $spamRatePopupScore.text("Poor");
        $spamRatePopupValues.text("above " + rateSpamBad + "%");
      }

      initChart($dashboard.find(".js-chart-wrapper"), serverData);

      if (
        serverData.setup_account["sender_domain_verified"] === undefined ||
        !serverData.setup_account.sender_domain_verified
      ) {
        $(".enable-sender-domain-message").removeClass("hide");
      }

      setupOnboardingBanner(serverData);
    }

    function setData(data) {
      serverData = data;
      if (isBasicInitialized) {
        renderData();
      }
    }

    function onResize() {
      if (chart) {
        // Prevent error when mobile version is hiding
        try {
          chart.resize();
          chart.setupGrid();
          chart.draw();
        } catch {}
      }
    }

    return {
      setData: setData,
      init: function () {
        if (!isBasicInitialized) {
          isBasicInitialized = true;
          initBasic();
          if (serverData != null) {
            renderData();
          }
        }
        $(window).on("resize", onResize);
      },
      terminate: function () {
        $(window).off("resize", onResize);
      },
    };
  }

  var desktopVersion = DesktopVersion();
  var mobileVersion = MobileVersion();
  var currentBreakpoint = null;

  function getData() {
    jQuery.support.cors = true;
    reqData = {};
    if (Cookie.read("login_id") != null) {
      reqData = { login_id: Cookie.read("login_id") };
    }
    load_dashboard_main(
      reqData,
      function (res) {
        if (res.status == "OK") {
          serverResponse = res;
          mobileVersion.setData(res.results);
          HTML.conform_to(res);
        }
      },
      HTML.handleError,
    );
  }

  function handleBreakpointChange() {
    if (window.innerWidth >= 768) {
      var breakpointName = "desktop";
      if (currentBreakpoint !== breakpointName) {
        mobileVersion.terminate();
        desktopVersion.init();
        currentBreakpoint = breakpointName;
      }
    } else {
      var breakpointName = "mobile";
      if (currentBreakpoint !== breakpointName) {
        desktopVersion.terminate();
        mobileVersion.init();
        currentBreakpoint = breakpointName;
      }
    }
  }

  return {
    init: function () {
      HTML.general();
      getData();

      if (
        Globals.BACKEND + END_POINTS.fronts()["Subaccounts"] !==
        "undefined"
      ) {
        $(".progress-bar-tooltip-container").removeClass("hide");
      }

      handleBreakpointChange();
      $(window).on("resize", handleBreakpointChange);
    },

    handlelogin: function (e) {
      var b = $(e.target);
      var data = {};
      data.LOGIN_AS = b.attr("value");
      var resp = HTML.ajax(
        "post",
        END_POINTS.urls()["Login"],
        data,
        null,
        true,
        "Loading...",
      );
      resp.success(function (data) {
        HTML.set_time(data);
        window.location =
          Globals.BACKEND + END_POINTS.fronts()["Account Summary"];
      });
    },

    checkbox: function (e) {
      var d = $(e.target);
      if (d.hasClass("control-label")) {
        d = $("#" + d.prop("for")).parent();
      } else if (d.hasClass("clicker")) {
        d = d.find("div");
      }
      var span = $(d.children());
      if (span.length > 0) {
        if (!span.hasClass("hide")) span.addClass("hide");
        else span.removeClass("hide");
      } else {
        if (d.hasClass("hide")) d.removeClass("hide");
        else d.addClass("hide");
      }
    },
  };
})();

$(function () {
  if ($('.sub-menu li a:contains("Charges")').length > 0) {
    $(".content-header, #usage").remove();
  }
});
