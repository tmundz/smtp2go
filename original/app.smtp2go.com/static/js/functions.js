// Various useful functions/etc
//  vim: set ts=4 sw=4 et :

// the syntax error is not on line 1, search this file for "eval"

var Globals = (function () {
  return {
    //location of the backend webserver.
    BACKEND: "",
  };
})();

var Cookie = (function () {
  return {
    create: function (name, value, hours) {
      var expires;
      if (hours) {
        var date = new Date();
        date.setTime(date.getTime() + hours * 60 * 60 * 1000);
        expires = "; expires=" + date.toGMTString();
      } else {
        expires = "";
      }
      document.cookie =
        escape(name) + "=" + escape(value) + expires + "; path=/";
    },

    read: function (name) {
      var nameEQ = escape(name) + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0)
          return unescape(c.substring(nameEQ.length, c.length));
      }
      return null;
    },

    erase: function (name) {
      Cookie.create(name, "", -1);
    },
  };
})();

var HTML = (function () {
  var evaluate = function (r, x, _default) {
    // IE11 doesn't support default values in function args.
    // if it's not passed to the function, it'll be null.
    // if it's null, set it to the default value.
    if (_default == null) {
      _default = "Can't";
    }
    // evaluate expression x in the context of object r
    // may begin with '=' to escape that context
    try {
      if (/^[a-zA-Z0-9_\[\]\.]*$/.test(x)) {
        if (/^[0-9]+$/.test(x)) {
          return r[int(x)];
        } else {
          return eval("r." + x);
        }
      } else if ((x[0] = "=")) {
        return eval(x.slice(1)); // syntax error in x shows as at 1,1
      } else {
        return _default;
      }
    } catch (e) {
      return _default;
    }
  };

  return {
    general: function () {
      if (END_POINTS.fronts()["Timezone"] != null)
        $("#current_time").prop(
          "href",
          Globals.BACKEND + END_POINTS.fronts()["Timezone"],
        );
      var logout_button = $('a:contains("Log Out")');
      var query = HTML.getQueryParams(document.location.search);
      logout_button.off().on("click", function (e) {
        res = HTML.ajax("GET", "/logout/");

        function clear() {
          Cookie.erase("session");
          Cookie.erase("login_id");
          if (END_POINTS != null)
            window.location = END_POINTS.fronts()["Login"] + "?message=1";
          else window.location = "/login/?message=1";
        }
        //clear on success, or 1.5 secs after pinging backend (should be enough time for the request to reach the server?)
        res.success(clear);
        setTimeout(clear, 1500);
      });
    },
    isProgrammaticClickEvent: function (e) {
      return (
        !e.hasOwnProperty("originalEvent") &&
        !e.hasOwnProperty("clientX") &&
        !e.hasOwnProperty("clientY")
      );
    },
    getQueryParams: function (qs) {
      qs = qs.split("+").join(" ");
      var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

      while ((tokens = re.exec(qs))) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
      }
      return params;
    },

    RequestError: function (httpObj, textStatus) {
      // ignore aborts
      if (textStatus === "abort") {
        return;
      }

      if (httpObj.status == 401) {
        var error = "1";
        window.location =
          END_POINTS.fronts()["Login"] + "?error=" + encodeURI(error);
        return;
      }
      HTML.handleError({
        error: "A network error occurred, please try again.",
      });
      return false;
    },

    escapeHTML: function (str) {
      var escapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
      };
      return ("" + str).replace(/[&<>"']/g, function (match) {
        return escapes[match];
      });
    },
    clearError: function (errorID) {
      // notice, .bar-notice
      $(".err-id-" + errorID).removeClass("visible is-active");
      $(".err-id-" + errorID).removeClass("err-id-" + errorID);
    },
    alertType: { error: "error", warning: "warning", success: "successful" },
    handleError: function (data, usepopup, selector) {
      $("#user-login-message").removeClass("visible");
      var errorBaseClass = selector == ".modal-error" ? "notice" : "bar-notice";
      selector = selector == null ? "#user-error-alert" : selector;
      var e = new Error("dummy");
      if (e.stack) {
        var stack = e.stack
          .replace(/^[^\(]+?[\n$]/gm, "")
          .replace(/^\s+at\s+/gm, "")
          .replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@")
          .split("\n");
        console.log(stack);
      }

      console.log(data);
      if (data.error == "sessionexpired" || data.error == "login-required") {
        window.location = END_POINTS.fronts()["Login"] + "?error=1";
        return;
      } else if (data.error == "invalidsession") {
        window.location = END_POINTS.fronts()["Login"] + "?error=1";
        return;
      } else if (data.errorcode < 0) {
        //it's a login error.
        window.location = END_POINTS.fronts()["Login"] + "?error=2";
        return;
      }
      //show the error dialog.
      if (usepopup == null) {
        $(selector).empty();
        $(selector).addClass(errorBaseClass);
        if (data.errorID != null) {
          $(selector).addClass("err-id-" + data.errorID);
        }
        alrt = $("<div></div>");
        alrtcontainer = $('<div class="error-content"></div>');
        if (selector != ".modal-error") {
          alrt.append($("<a>&times;</a>").addClass("button-close"));
          alrt.prepend($('<span class="notice-icon"></span>'));
        }
        if (alrt.length == 0) usepopup = true;

        var isGenericError = data.error == "An Error Occurred";
        if (isGenericError && !data.web_errors) {
          alrt.append(alrtcontainer);
          alrtcontainer
            .append(document.createTextNode(data.error))
            .append($("<br/>"));
        }
        if (data.error && !isGenericError) {
          alrt.append(alrtcontainer);
          alrtcontainer
            .append(document.createTextNode(data.error))
            .append($("<br/>"));
        }
        if (/\n/.test(data.error)) {
          alrt.css("whiteSpace", "pre");
        }
        if (data.items) {
          alrtul = $("<ul></ul>");
          for (var key in data.items) {
            if (data.items.hasOwnProperty(key)) {
              alrtul.append($("<li></li>").text(data.items[key]));
            }
          }
          alrtcontainer.append(alrtul);
          $("#user-error-alert").addClass("notice-list");
        }
        if (data.items || data.error) {
          $(selector).append(alrt);
        }

        if (
          data.web_errors
        ) //web_errors is a list of objects. some with input name values, some without.
        {
          for (var i = 0; i < data.web_errors.length; i += 1) {
            error = data.web_errors[i];
            alrt.append($("<div></div>").append(error.message));
            if (error.hasOwnProperty("input")) {
              var inp = $("input").filter(function () {
                return this.value == error.input;
              });
              if (!inp.length) {
                inp = $(error.input);
              }

              if (
                inp.parents("form").length &&
                inp.parents("form").data("alert-ignore") != null
              ) {
                var ignore = inp.parents("form").data("alert-ignore");
                inp = inp.filter(function () {
                  return this.name == ignore ? false : true;
                });
              }
              console.log(inp);

              if (inp.length) {
                inp.next().remove(); //remove any previous errors.
                inp.parents(".form-group").addClass("has-error");
                inp.after(alrt);
              } else {
                $(selector).append(alrt);
              }
            } else {
              $(selector).append(alrt);
            }
          }
        }
      }
      if (usepopup) {
        if (data.items) bootbox.alert(data.error + "\n<br/>" + data.items);
        else bootbox.alert("Error: " + data.error);
      }
      $(selector)
        .removeClass("successful")
        .addClass("error")
        .addClass("visible");
      $(selector)
        .find(".button-close")
        .on("click", function (event) {
          $(".notice, .bar-notice").removeClass("visible is-active");
          // $('.notice, .bar-notice').removeClass (function (index, className) {
          //     return (className.match (/(^|\s)err-id-\S+/g) || []).join(' ');
          // });
        });
    },
    createInlineLoadingGIF: function (parentSelector, isCentered, customCSS) {
      // Takes a selector for the enclosing element of the loading animation, then inserts the loading GIF into the DOM
      if (!customCSS) customCSS = "";
      if (isCentered) {
        $(parentSelector).append(
          '<div class="loading-spinner" style="' +
            customCSS +
            '"><div class="loader"></div></div>',
        );
      } else {
        $(parentSelector).prepend(
          '<div class="loader loader-abs-left loader-modal-footer"></div>',
        );
      }
    },
    removeInlineLoadingGIF: function (parentSelector) {
      // removes loading GIF from inside enclosed selector
      $(parentSelector).find(".loader").remove();
      $(parentSelector).find(".loading-spinner").remove();
    },
    trunc_subject: function (string, length) {
      // deprecated. don't use. remove in/after 2017
      location.reload(true); // old scripts will be reloaded?
      // nothing should call this function.
    },

    format_percent: function (n, hide, locale) {
      if (isNaN(n)) return n;
      n = Number(n);
      if (hide) {
        if (n == 0) return "";
      }
      if (HTML.getInternetExplorerVersion() > 0) n = n * 100; //because IE.

      if (!locale) {
        locale = window.navigator.userLanguage;
      }
      n = n.toLocaleString(locale, {
        style: "percent",
        minimumFractionDigits: 2,
        maximumFractionDigits: 4,
      });
      if (
        navigator.userAgent.indexOf("Safari") != -1 &&
        navigator.userAgent.indexOf("Chrome") == -1
      ) {
        n = parseFloat(n);
        //n = n * 100;
        n = n.toFixed(2);
        n = HTML.format_number(n) + "%";
      } else if (
        HTML.getInternetExplorerVersion() > 0 &&
        n.indexOf("%") === -1
      ) {
        n = n + "%";
      }
      n = n.replace(/\s+/g, "");
      return n;
    },

    format_number: function (n, hide, precision) {
      if (isNaN(n)) return n;
      n = Number(n);
      if (hide) {
        if (n == 0) return "";
      }

      if (precision === undefined) {
        n = n.toLocaleString(window.navigator.userLanguage, {
          style: "decimal",
        });
      } else {
        n = n.toLocaleString(window.navigator.userLanguage, {
          style: "decimal",
          minimumFractionDigits: precision,
        });
      }

      return n;
    },

    format_currency: function (n, hide) {
      if (isNaN(n)) return n;
      n = Number(n);
      if (hide) {
        if (n == 0) return "";
      }
      n = n.toLocaleString(window.navigator.userLanguage, {
        style: "currency",
        currencyDisplay: "symbol",
        currency: "USD",
      });
      return n;
    },

    format_byte: function (n, hide) {
      if (isNaN(n)) return n;
      n = Number(n);
      if (hide) {
        if (n == 0) return "";
      }
      var count = 0;
      var formats = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      while (n / 1024 > 9.99 && count < 8) {
        n = n / 1024;
        count += 1;
      }
      n = Math.round(n);
      n = n.toLocaleString(window.navigator.userLanguage);
      n = n + " " + formats[count];
      return n;
    },
    //TODO: Replace below with standard library. We should'nt be rolling our own date formatting.
    format_date: function (n, output_format, ignore_ms) {
      timezone = null;
      if (
        output_format != null ||
        /\t$/.test(n)
      ) //if trailing tab exists, assume null.
      {
        // assume y-m-d format.
        var z = n.split("-");
        var y = z[0];
        var m = z[1];
        var d = z[2];
        var h = 0;
        var M = 0;
        var s = 0;
        var S = 0;
        if (d != null && isNaN(d)) {
          // This is an awful hack. Because sometimes, the date looks like Y-m-d HH:MM:ss.SSS
          // But if this is the case we should include those values in our date.
          h = d.split(" ");
          d = h[0];
          h = h[1].split(":");
          M = h[1];
          s = h[2].split(".");
          if (s.length > 1 && (ignore_ms === undefined || ignore_ms === false))
            S = s[1];
          s = s[0];
          h = h[0];
        }
        var date = new Date(
          parseInt(y),
          parseInt(m) - 1,
          parseInt(d),
          parseInt(h),
          parseInt(M),
          parseInt(s),
          parseInt(S),
        );
        if (output_format != null) {
          if (date.toString == null)
            console.log(
              "ERROR: NO toString FUNCTION EXISTS. is date.js Included?",
            );
          return date.toString(output_format);
        }
        if (timezone != null) {
          try {
            n = date.toLocaleDateString(timezone); //date
          } catch (e) {
            n = date.toLocaleDateString();
          }
        } else {
          n = date.toLocaleDateString();
        }

        //If we've got time values, add them to our output.
        if (h != 0 || M != 0 || s != 0 || S != 0) {
          try {
            n = n + " " + date.toLocaleTimeString(timezone); //time
          } catch (e) {
            n = n + " " + date.toLocaleTimeString();
          }
        }
        //console.log(n);
      }
      return n;
    },

    format_ratelimit: function (limit, period) {
      //Format the limit & period into pretty text.
      var res = "Unlimited",
        periods = [
          ["per 15 minutes", "00:15:00"],
          ["per hour", "01:00:00"],
          ["per 4 hours", "04:00:00"],
          ["per day", "1 day"],
          ["per week", "7 days"],
          ["per month", "1 mon"],
        ];
      if (!limit) return res;

      res = HTML.format_number(limit) + ' per "' + period + '"'; // default is something meaningful if not pretty.
      for (var i = 0; i < periods.length; i++)
        if (periods[i][1].localeCompare(period) == 0) {
          res = HTML.format_number(limit) + " " + periods[i][0];
        }
      return res;
    },

    isNothing: function (v) {
      return v === "" || v === null || v === undefined;
    },

    getInternetExplorerVersion: function () {
      // Returns the version of Internet Explorer or a -1
      // (indicating the use of another browser).
      var rv = -1; // Return value assumes failure.
      if (navigator.appName == "Microsoft Internet Explorer") {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
      }
      return rv;
    },
    set_time: function (data, selector, noScroll) {
      selector = selector == null ? ".alert_list" : selector;
      if (data != null) {
        if (
          END_POINTS.fronts !== undefined &&
          END_POINTS.fronts()["Timezone"] != null
        )
          $("#current_time").prop(
            "href",
            Globals.BACKEND + END_POINTS.fronts()["Timezone"],
          );
        if (data["has_back"] != null) {
          $("#has_back").removeClass("hide");
          $("#has_back > a").on("click", function (e) {
            e.preventDefault();
            var bck = HTML.ajax(
              "post",
              "/logout/",
              {
                BACK: null,
              },
              null,
              true,
              "Loading...",
            );
            bck.success(function (data2) {
              HTML.set_time(data2);
              window.location = END_POINTS.fronts()["Account Summary"];
            });
            return true;
          });
        }
        if (data.username != null) {
          $(".username").html(data.username);
        }
        if (data.login_message != null) {
          alrtclass = "successful";
          if (data.login_message_class != null) {
            if (data.login_message_class == "warning") alrtclass = "warning";
            else if (data.login_message_class == "error") alrtclass = "error";
          }

          loginMessage = $("#user-login-message");
          loginMessage.empty();
          loginMessage.addClass("bar-notice visible").addClass(alrtclass);
          loginMessage.append(data.login_message);
          var closeButton = $("<a>&times;</a>");
          closeButton.addClass("button-close");
          closeButton.on("click", function () {
            $("." + alrtclass).hide();
          });

          loginMessage.append(closeButton);
          loginMessage.prepend($('<span class="notice-icon"></span>'));
        }

        if (data.message != null) {
          if (data.message_class) {
            HTML.alertUser(data.message_class, data.message);
          } else {
            HTML.alertUser(HTML.alertType.error, data.message);
          }
        }

        if (data.verification != null) {
          if (data.verification.email_not_verified) {
            $("#email-verification-notice").addClass("is-active");
            $("#email-verification-notice .email-address").text(
              data.verification.email_address,
            );

            // handle verification email message links
            $(".resend-verification-email")
              .unbind()
              .click(function (event) {
                var request = HTML.ajax(
                  "POST",
                  "/onboarding/?action=resend-verify-email",
                  null,
                  null,
                  true,
                  "Sending...",
                );
                if (request) {
                  request.success(function (data) {
                    if (data.status == "OK") {
                      HTML.set_time(data);
                    } else {
                      HTML.handleError({
                        error: "Oops, something went wrong, please try again.",
                      });
                    }
                  });
                  request.error(HTML.RequestError);
                }
              });

            $(document).on("click", "#change_email_address", function () {
              window.location.href = "/dashboard/team/";
            });
            $("#setup-status.onboarding-backdrop").addClass(
              "with-email-verification",
            );
          }
        } else {
          $("body").addClass("email-verified");
          $(".resend-verification-email-wrapper").hide();
        }
      } else {
        $("#current_time").html("Current Time: " + Cookie.read("servertime"));
      }
      // if (noScroll === undefined){
      //     console.log('scrolling');
      //     $('html, body').animate({
      //         scrollTop: 0
      //     }, 'fast');
      // }
    },

    conform_to: function (data) {
      //updates HTML elements that have class 'automatic'
      // in several different ways => see sub_conform_to
      //error checking.
      if (data["status"] == "OK") HTML.set_time(data);
      else if (!HTML.CUSTOM_ERROR) {
        HTML.handleError(data);
      }
      return HTML.sub_conform_to(data, $);
    },

    sub_conform_to: function (data, ztx) {
      // conform_to on a subset of the document
      var ctx;
      var r = data.results;

      if (ztx == null || ztx == $) {
        ctx = $;
      } else {
        // ctx= s => ztx.find(s); // no work in IE
        ctx = function (s) {
          return ztx.find(s);
        };
      }
      // eg: HTML.sub_conform_to(dataz,$('#foo').find)
      if (ctx == $ && typeof form !== "undefined") {
        ctx($(form).find("input"))
          .parents(".form-control")
          .removeClass("has-error")
          .removeClass("has-warning");
      }

      // show-hide as per data-requires (EG changeplan)
      $(ctx(".automatic[data-requires]")).each(function (i, e) {
        var j = $(e);
        var req_list = j.attr("data-requires").split(" ");
        for (var i = 0; i < req_list.length; i++) {
          if (evaluate(data.results, req_list[i], false)) {
            j.removeClass("hide");
            break;
          } else {
            j.addClass("hide");
          }
        }
      });

      ctx(".automatic[data-exclude]").each(function (i, e) {
        var j = $(e);
        var excl_list = j.attr("data-exclude").split(" ");
        for (var i = 0; i < excl_list.length; i++) {
          //console.log("excl-",excl_list[i],i,data.results)
          if (evaluate(data.results, excl_list[i], false)) {
            j.addClass("hide");
            break;
          } else {
            j.removeClass("hide");
          }
        }
      });

      ctx("select.automatic[data-populate]").each(function (q, e) {
        var j = $(e).empty();
        var x = j.attr("data-populate");
        var v = evaluate(data.results, x, []);
        var opts = $();
        for (var i = 0; i < v.length; i++) {
          j.append($("<option></option>").val(v[i][0]).text(v[i][1]));
        }
      });

      // add a title attribute with the value of data-title
      ctx(".automatic[data-title]").each(function (i, e) {
        var j = $(e);
        var x = j.attr("data-title");
        var v;
        v = evaluate(data.results, x, "**VALUE-SUPRESSED** (" + x + ")");
        j.attr("title", v);
      });

      // populate as per data-display: (EG changeplan)
      ctx(".automatic[data-display]").each(function (i, e) {
        // console.log('Scamp')
        // console.log(data.results);
        var j = $(e);
        var x = j.attr("data-display");
        var v;

        v = evaluate(data.results, x, "**VALUE-SUPRESSED** (" + x + ")");

        if (j.hasClass("money"))
          // format as money...
          v = HTML.format_currency(v);
        else if (j.hasClass("cash"))
          // format as money without leading 'US'...
          v = HTML.format_currency(v).replace(/US/, "");
        else if (j.hasClass("count"))
          // format as integer...
          v = HTML.format_number(v);
        else if (j.hasClass("bytecount"))
          // format as B/K/M/G size...
          v = HTML.format_byte(v); // no formatting
        else v = v;

        if (j.is("select")) j.val(v);
        else if (j.is("input[type=checkbox]")) {
          //console.log("data-display",x,v,e)
          e.checked = !!v;

          if (
            e.parentNode.parentNode.className == "checker" &&
            e.parentNode.parentNode.nodeName == "DIV"
          )
            e.parentNode.className = e.checked ? "checked" : undefined;
        } else if (j.is("input") && !j.is("input[type=textarea]")) j.val(v);
        else if (j.hasClass("rawhtml"))
          // no formatting HTML
          j.html(v);
        else if (j.is("img")) j.attr("src", v);
        else j.text(v);
      });

      ctx(".automatic-repeat[data-display]").each(function (i, e) {
        // determine data-value as above

        var j = $(e);
        var x = j.attr("data-display");
        var v = evaluate(data.results, x, []);

        // first delete exiting copies of this node.
        while (
          e.nextSibling &&
          e.nextSibling.getAttribute &&
          e.nextSibling.getAttribute("data-copy-of") == e
        ) {
          e.parentNode.removeChild(e.nextSibling);
        }

        // Next loop though data making and populating copies as needed.
        var after = j;
        var parent = j.parent();
        for (var i = 0; i < v.length; i++) {
          var nu = j.clone();
          nu.attr("data-copy-of", e);
          nu.removeClass("automatic-repeat");
          nu.removeClass("hide");
          after.after(nu);
          after = nu;
          HTML.sub_conform_to({ results: v[i] }, nu);
        }
      });
    },

    init: function () {
      //Magic for allowing you to use the dialog by clicking outside the box.
      //HTML.general();
      $(document).on("click", ".bootbox", function (event) {
        var target = event.target;
        while (target !== this) {
          target = target.parentNode;
          if (target.className.indexOf !== "function") {
            return;
          }
          if (target.className.indexOf("modal-dialog") !== -1) {
            return;
          }
        }
        bootbox.hideAll();
      });

      //auto submits function.
      //
      //form element needs class "auto-submit"
      //submit button needs to be <button type="submit"></button>
      //
      $('form.auto-submit button[type="submit"]').each(
        function (index, object) {
          $(this).unbind("click", HTML.autoajax);
          $(this).on("click", HTML.autoajax);
        },
      );
    },

    conform_forms: function (data) {
      HTML.conform_to(data);
      for (var k in data.results) {
        var v = data.results[k];
        $('form.autoajax input[name="' + k + '"]').each(function (e, h) {
          i = $(h);
          if (i.is(":checkbox")) {
            if (
              i.val() == v ||
              (i.val() == "true" && v)
            ) // fixme - should allow v is an array
            {
              i.attr("checked", "checked");
              i.parent("div.checker").addClass("checked");
              i.parent("div.checker span").addClass("checked");
            } else {
              i.attr("checked", false);
              i.parent("div.checker").addClass("checked");
              i.parent("div.checker span").removeClass("checked");
            }
          } // fixme add code here for <select> etc...
          else i.val(v);
          if (typeof i.data("ui-update") == "function") {
            i.data("ui-update").call(h);
          }
        });
        $('form.autoajax textarea[name="' + k + '"]').each(function (e, h) {
          i = $(h);
          i.val(v);
          if (typeof i.data("ui-update") == "function") {
            i.data("ui-update").call(h);
          }
        });
        $('form.autoajax select[name="' + k + '"]').each(function (e, h) {
          i = $(h);
          i.val(v);
          if (typeof i.data("ui-update") == "function") {
            i.data("ui-update").call(h);
          }
        });
      }
    },

    ajax: function (type, url, data, success, block, blockmessage, async) {
      if (type == null) type = "GET";
      if (async == null) async = true;
      if (!data) data = "";

      if (0 < ["get", "POST", "PUT", "DELETE"].indexOf(type.toUpperCase())) {
        if (typeof data == "string")
          data += "&CSRF_key=" + encodeURIComponent(HTML.csrfkey);
        else if (typeof data == "object") data["CSRF_key"] = HTML.csrfkey;
      }

      var request = $.ajax({
        type: type,
        url: url,
        data: data,
        async: async,
        crossDomain: true,
        xhrFields: {
          withCredentials: true,
        },
        headers: {
          "X_S2G-Version": "20170519",
          "Frontend-Validation": true,
        },
        beforeSend: function () {
          if (block) {
            if (blockmessage) {
              Metronic.blockUI({
                message: blockmessage,
                boxed: true,
              });
            } else {
              Metronic.blockUI({
                message: "Updating...",
                boxed: true,
              });
            }
          }
        },
        complete: function () {
          if (block) {
            $.unblockUI();
          }
        },
      });
      if (success != null) {
        request.success(success);
      }

      request.error(HTML.RequestError);

      return request;
    },

    hiddenField: function (f_name, f_value, f_class) {
      // Default parameters don't work properly on some browsers
      f_class = typeof f_class !== "undefined" ? f_class : null;
      var hid = document.createElement("input");
      hid.setAttribute("type", "hidden");
      hid.setAttribute("name", f_name);
      hid.setAttribute("value", f_value);
      if (f_class != null) hid.setAttribute("class", f_class);
      return hid;
    },

    form: function (form, url, success, element, data) {
      var type = form.attr("method");
      if (type == null) type = "POST";
      if (url == null) url = form.attr("action");

      $(form)
        .find("input:checkbox:not(:checked)")
        .each(function (index) {
          var el = $(this);
          var hid = HTML.hiddenField(el.prop("name"), "0", "remove_me");
          form.append(hid);
        });

      if (data == null) data = form.serialize();

      var multipart = form.attr("enctype");
      if (!multipart) {
        $(form).find(".remove_me").remove();
        return HTML.ajax(type, url, data, success, true);
      }

      if (0 < ["get", "POST", "PUT", "DELETE"].indexOf(type.toUpperCase())) {
        $(form).append(HTML.hiddenField("CSRF_key", HTML.csrfkey, "remove_me"));
      }

      //console.log(element);
      data = new FormData(element[0]);
      //console.log(data);
      var resp = $.ajax({
        type: type,
        url: url,
        data: data,
        async: true,
        //'crossDomain' : true,
        headers: {
          "X_S2G-Version": "20170519a",
        },
        xhrFields: {
          withCredentials: true,
        },
        beforeSend: function () {
          $.blockUI({
            message: "Updating...",
          });
        },
        complete: function () {
          $.unblockUI();
        },
        processData: false,
        contentType: false,
      });
      resp.error(HTML.RequestError);
      $(form).find(".remove_me").remove();
      return resp;
    },

    submitButton: null,

    autoajax: function (evnt) {
      evnt.preventDefault();
      HTML.submitButton = evnt.target;
      var res = HTML.ajaxSubmit(evnt.target, HTML.conform_to);
      if ($(evnt.target.form).data("success-function")) {
        var func = $(evnt.target.form).data("success-function");
        res.success(window["Custom"][func]);
      }
      if ($(evnt.target.form).data("failure-function")) {
        HTML.CUSTOM_ERROR = true;
        var func = $(evnt.target.form).data("failure-function");
        var onfailure = function (data) {
          if (data.status != "OK") {
            window["Custom"][func](data);
          }
        };
        res.success(onfailure);
      }
      return false;
    },

    ajaxSubmit: function (submit, success, method) {
      var form;
      if (submit.nodeName == "FORM") {
        form = submit;
        submit = null;
      } else {
        form = submit.form;
        submit = submit;
      }
      var type = form.getAttribute("method");
      if (type == null) type = "POST";
      if (method != null) type = method;
      var url = form.getAttribute("action");
      url = Globals.BACKEND + url;
      $(form)
        .find("input:checkbox:not(:checked)")
        .each(function (index) {
          var el = $(this);
          var hid = HTML.hiddenField(el.prop("name"), "0", "remove_me");
          $(form).append(hid);
        });

      $(form).append(HTML.hiddenField("CSRF_key", HTML.csrfkey, "remove_me"));

      var data = $(form).serialize();

      // temporarily add submit button as hidden field
      // so that jquery form serialize can see it
      if (submit != null && submit.getAttribute("name")) {
        var inp = document.createElement("input");
        inp.setAttribute("type", "hidden");
        inp.setAttribute("name", submit.getAttribute("name"));
        inp.setAttribute("value", submit.getAttribute("value"));
        form.appendChild(inp);
        data = $(form).serialize();
        form.removeChild(inp);
      }

      $(form).find(".remove_me").remove();

      //console.log(data);
      return HTML.ajax(type, url, data, success, true);
    },
    LG_SP_GOOD: 0.05,
    LG_SP_BAD: 0.1,
    SM_SP_GOOD: 0.05,
    SM_SP_BAD: 0.1,
    LG_BN_GOOD: 5,
    LG_BN_BAD: 10,
    SM_BN_GOOD: 5,
    SM_BN_BAD: 10,

    search: function (url, method, datatable, post_data, success) {
      var page = 0;
      var finished = false;
      var rel = [];
      var start = new Date().getTime();

      var loopme = function (url, method, datatable, post_data, success) {
        post_data.page = page;
        //console.log('POST DATA');
        //console.log(post_data);
        if (page > 0) post_data.prev_page = page - 1 < 0 ? 0 : page - 1;
        if (post_data.length) post_data.length = 35;
        if (post_data.direction == 0 && page > 0) post_data.direction = 1;
        var request = HTML.ajax(method, url, post_data);
        //if ( success ) request.success(success);

        page = page + 1;
        request.success(function (data) {
          if (data.status != "OK") {
            HTML.handleError(data);
            finished = true;
            return;
          }
          if (page == 0) {
            rel = rel.concat(data.results.data);
          } else {
            rel = rel.concat(data.results.data);
          }

          page = page + 1;
          delete data.results.data;
          data.results.data = rel;
          if (data.results.finished) {
            //console.log('DATA LENGTH:'+data.results.data.length);
            finished = true;
            data.results.total_available = data.results.data.length;
          } else {
            data.results.total_available = data.results.data.length + 1;
          }

          if (success) success(data);

          if (new Date().getTime() / 1000 - start > 30)
            //cancel the search if it's been going longer than 30 seconds.
            HTML.SEARCH_CANCEL = true;

          if (!finished && !HTML.SEARCH_CANCEL) {
            post_data["start_exim"] = data.results.startid;
            post_data["end_exim"] =
              data.results.data[data.results.data.length - 1]["xid"];
            post_data["anchor"] = data.results.anchor;
            loopme(url, method, datatable, post_data, success);
          }
        });
      };
      return loopme(url, method, datatable, post_data, success);
    },
    SEARCH_CANCEL: false,
    CUSTOM_ERROR: false,

    makeForm: function (data, submit, url, method) {
      // make a form with hidden fields and optional submit button.
      // Default parameters don't work on some browsers
      submit = typeof submit !== "undefined" ? submit : "submit";
      url = typeof url !== "undefined" ? url : "";
      method = typeof method !== "undefined" ? method : "post";
      var form = document.createElement("form");
      form.setAttribute("method", method);
      form.setAttribute("action", url);

      for (var key in data)
        if (data.hasOwnProperty(key))
          form.appendChild(HTML.hiddenField(key, data[key]));
      if (typeof submit != "undefined") {
        hid = document.createElement("input");
        hid.setAttribute("type", "submit");
        hid.setAttribute("value", submit);
        form.appendChild(hid);
      }
      return form;
    },
    applyDateRangeSelection: function (
      theTable,
      dateRange,
      dateChangeOptFunc,
      changeOpts,
    ) {
      var start = $('input[name="from"]').prop("value");
      var end = $('input[name="to"]').prop("value");
      if (dateRange.std != start || dateRange.etd != end) {
        theTable.api().settings()[0].clearCache = true;
        if (dateChangeOptFunc && changeOpts) {
          dateChangeOptFunc(changeOpts);
        }
      }
      if (!$(".date-range").hasClass("hide")) {
        dateRange.std = start;
        dateRange.etd = end;
      }
      theTable.api().settings()[0].clearCache = false;
    },
    addDataTableExtensions: function () {
      $.fn.dataTableExt.oApi.fnMultiFilter = function (oSettings, oData) {
        for (var key in oData) {
          if (oData.hasOwnProperty(key)) {
            for (var i = 0, iLen = oSettings.aoColumns.length; i < iLen; i++) {
              if (oSettings.aoColumns[i].sName == key) {
                /* Add single column filter */
                oSettings.aoPreSearchCols[i].sSearch = oData[key];
                break;
              }
            }
          }
        }
        this.oApi._fnReDraw(oSettings);
      };
      jQuery.fn.dataTableExt.oApi.fnFilterClear = function (oSettings) {
        var i, iLen;
        /* Remove global filter */
        oSettings.oPreviousSearch.sSearch = "";
        /* Remove the text of the global filter in the input boxes */
        if (typeof oSettings.aanFeatures.f != "undefined") {
          var n = oSettings.aanFeatures.f;
          for (i = 0, iLen = n.length; i < iLen; i++) {
            $("input", n[i]).val("");
          }
        }
        for (i = 0, iLen = oSettings.aoPreSearchCols.length; i < iLen; i++) {
          oSettings.aoPreSearchCols[i].sSearch = "";
        }
        /* Redraw */
        //oSettings.oApi._fnReDraw( oSettings );
      };
      $.fn.dataTableExt.oApi.fnLengthChange = function (oSettings, iDisplay) {
        oSettings._iDisplayLength = iDisplay;
        oSettings.oApi._fnCalculateEnd(oSettings);
        /* If we have space to show extra rows (backing up from the end point - then do so */
        if (oSettings._iDisplayEnd == oSettings.aiDisplay.length) {
          oSettings._iDisplayStart =
            oSettings._iDisplayEnd - oSettings._iDisplayLength;
          if (oSettings._iDisplayStart < 0) {
            oSettings._iDisplayStart = 0;
          }
        }

        if (oSettings._iDisplayLength == -1) {
          oSettings._iDisplayStart = 0;
        }

        oSettings.oApi._fnDraw(oSettings);
      };
    },
    alertUserInline: function (parentSelector, alertType, messageHTML) {
      var labelColor = alertType == HTML.alertType.success ? "green" : "red";
      setTimeout(function () {
        $(".footer-note").remove();
        var messageContainer = $("<span></span>")
          .addClass("footer-note label left " + labelColor)
          .html(messageHTML)
          .css("text-align", "left");
        $(parentSelector).append(messageContainer);
        $(parentSelector).removeClass("is-hidden").addClass("is-fadein");
        setTimeout(function () {
          if (alertType == HTML.alertType.success) {
            $(messageContainer).removeClass("label " + labelColor);
          } else {
            $(messageContainer).removeClass("is-fadein");
          }
        }, 2000);
      }, 10);
    },
    alertUser: function (alertType, message, isModal, selector) {
      var sideWidth = $(".page-sidebar").width(),
        contWidth = $(".page-content").outerWidth(),
        headHeight = $(".page-header").height();

      $("#user-login-message").removeClass("visible");
      $("#user-error-alert").removeClass("visible");
      var baseAlertClass = isModal ? "notice" : "bar-notice";
      var alert = selector || $("#user-alert");

      alert.removeClass();
      alert.empty();
      alert.html(
        HTML.escapeHTML(message) ||
          (alertType == this.alertType.error
            ? "Oops something went wrong, please try again or contact support"
            : "Updated successfully"),
      );

      if (!isModal) {
        alert.prepend($('<span class="notice-icon"></span>'));
        alert.append($("<a>&times;</a>").addClass("button-close"));
        alert.find(".button-close").on("click", function (event) {
          alert.removeClass("visible is-active");
        });
      }
      alert
        .removeClass()
        .addClass(baseAlertClass)
        .addClass(alertType)
        .addClass("visible is-active");
      if (alertType == this.alertType.success || alertType == "success")
        setTimeout(function () {
          alert.removeClass("visible is-active");
        }, 7000);
    },

    renderSearchQuery: function () {
      var query = "";
      var search = [];
      var has_complex = false;

      var subject = $.trim($("#search-subject").val());
      var sender = $.trim($("#search-sender").val());
      var recipient = $.trim($("#search-recipient").val());
      var contents = $.trim($("#search-contents").val());
      var hasAttachments = $("#search-attachments").is(":checked");

      if (subject !== "") {
        search.push("subject:'" + subject + "'");
        has_complex = true;
      }
      if (sender !== "") {
        search.push("sender:'" + sender + "'");
        has_complex = true;
      }
      if (recipient !== "") {
        search.push("recipient:'" + recipient + "'");
        has_complex = true;
      }
      if (contents !== "") {
        var prefix = "";
        if (has_complex) {
          prefix = "emailContains:'";
        }
        search.push(prefix + contents + (prefix !== "" ? "'" : ""));
      }
      if (hasAttachments) {
        search.push("hasAttachment:'True'");
        has_complex = true;
      }

      if (search.length > 0) {
        $("#main-search").val(search.join(" "));
      } else {
        $("#main-search").val("");
        $("#main-search").attr("placeholder", "Search");
      }
    },

    processPrimarySearchFieldInput: function (event) {
      var queryParser = /([^\W]+)\s{0,}[:|=]\s{0,}(["'])(.*?)\2/g;
      var query = $("#main-search").val();

      // clear the search fields
      $("#search-subject").val("");
      $("#search-sender").val("");
      $("#search-recipient").val("");
      $("#search-contents").val("");
      $("#search-attachments").prop("checked", false);
      $.uniform.update("#search-attachments");

      var match;
      while ((match = queryParser.exec(query)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (match.index === queryParser.lastIndex) {
          regex.lastIndex++;
        }

        if (match[1] == "subject") {
          $("#search-subject").val(match[3]);
        } else if (match[1] == "sender") {
          $("#search-sender").val(match[3]);
        } else if (match[1] == "recipient") {
          $("#search-recipient").val(match[3]);
        } else if (match[1] == "emailContains") {
          $("#search-contents").val(match[3]);
        } else if (match[1] == "hasAttachment") {
          var b = false;
          if (
            match[3].toLowerCase() === "true" ||
            match[3].toLowerCase() === "1"
          ) {
            b = true;
          }
          $("#search-attachments").prop("checked", b);
          $.uniform.update("#search-attachments");
        }
      }
    },

    getUserColorIndex: function (str) {
      var hash = 0;
      for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
      }
      return (Math.abs(hash) % 7) + 1;
    },
  };
})();

// used to conform  ui formatting to json results in data.
function conform_to_data(data) {
  HTML.conform_to(data);
  console.log("Pbsolete code: call HTML.conform_to instead");
}

/**
 * Simple cache buster function used to re-cache local
 * graph colors in the event of additions or changes
 */
function cache_bust_graph_colors(graph_colors) {
  // cache bust with the new opens color
  if (graph_colors[5] === undefined || graph_colors[5] != "#3BB67F") {
    // 9ed468 was the initial test color for opens
    graph_colors[5] = "#3BB67F";
    localStorage.setItem("graphcolors", JSON.stringify(graph_colors));
  }

  // return the augmented list
  return graph_colors;
}
