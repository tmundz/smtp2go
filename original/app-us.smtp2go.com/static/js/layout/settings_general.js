jQuery.fn.mouseIsOver = function () {
  if ($(this[0]).is(":hover")) {
    return true;
  }
  return false;
};

jQuery(function ($) {
  var bounces_expanded = false;

  $(this)
    .find("tr")
    .each(function () {
      if ($(this).index() % 2 == 0) $(this).removeClass("odd");
      else $(this).addClass("odd");
    });

  // 'Remove' button functionality
  $(document).on("click", ".table-remove", function () {
    if ($(this).hasClass("confirm")) {
      var el = $(this);
      var req = Custom.build_remove_request(el);
      if (req != null) {
        req.success(function (data) {
          if (data.status == "OK") {
            HTML.set_time(data);
            el.parent().parent().remove();
            Custom.tableChange();
          } else {
            HTML.handleError(data);
          }
        });
      }
    } else {
      $(this).addClass("confirm").text("Confirm Remove?");
      $(
        '<a href="javascript:void(0);" class="table-remove-cancel is-hidden">Cancel</a>',
      ).insertAfter(this);
      $(this).parent().find(".inspect-problem").addClass("is-hidden");

      setTimeout(function () {
        $(".table-remove-cancel").removeClass("is-hidden");
      }, 5);
    }
    return false;
  });

  $(document).on("click", ".table-remove-cancel", function () {
    $(this)
      .parent()
      .find(".table-remove.confirm")
      .removeClass("confirm")
      .text("× Remove");
    $(this).parent().find(".inspect-problem").removeClass("is-hidden");
    $(this).remove();
  });

  // Remove row functionality
  $(document).on("click", ".row-remove.confirm", function () {
    var el = $(this);
    var req = Custom.build_remove_request(el);
    if (req != null) {
      req.success(function (data) {
        if (data.status == "OK") {
          HTML.set_time(data);
          el.parents("tr").remove();
          Custom.tableChange();
        } else {
          HTML.handleError(data);
        }
      });
    }
    return false;
  });

  // close the dropdown element when clicked outside
  $(document).mouseup(function (e) {
    var container = $(".row-delete-popup");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.find(".dropdown-options").removeClass("is-active");
      $(".drop-content").removeClass("options-on");
    }
  });

  var handleCheckedState = function (a, g, t) {
    if (t == null) t = this;
    $(t)
      .parent()
      .addClass(t.checked ? "checked" : "")
      .removeClass(t.checked ? "" : "checked");
    var td = $(t).parents("td");
    td.find(".allow-notify-label").text(t.checked ? "Enabled" : "Disabled");
    td.find(".allow-notify-label")
      .addClass(t.checked ? "success" : "disabled")
      .removeClass(t.checked ? "disabled" : "success");
  };

  $(document).on("click", 'input[name="allow_notify"]', handleCheckedState);

  // 'Card Add' button functionality
  $(document).on("click", ".card--add .btn", function () {
    var that = $(this).parent().parent().parent();
    if ($(that).is("#ip-auth")) {
      $(
        '<tr class="created inline-disabled"><td data-title="IP Address"><input class="inline-edit" type="text" value="124.255.255.244"></td><td data-title="Description"><input type="text" value="Test"></td><td class="table-action"><a href="#" class="table-remove">× Remove</a><input class="btn blue" type="submit" value="Save"><input class="btn grey" type="submit" value="Cancel"></td></tr>',
      ).insertBefore($(that).find("table tbody tr:first-child"));
    } else if ($(that).is("#tracking-domains")) {
      $(
        '<tr class="created"><td data-title="Subdomain">test2.test.com</td><td data-title="Status"><a class="label error refreshable checkable">Inactive <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 18" enable-background="new 0 0 23 18"><path d="M16.7 11.1l3.1-3.2h-2.2C17.2 3.5 13.5.3 9 .3 4.2.3.3 4.2.3 9s3.9 8.7 8.7 8.7c2.4 0 4.6-1 6.1-2.5l-1.6-1.6c-1.2 1.2-2.7 1.9-4.5 1.9-3.5 0-6.4-2.9-6.4-6.4 0-3.5 2.9-6.4 6.4-6.4 3.1 0 5.7 2.7 6.3 5.4h-1.8l3.2 3z"/></svg></span></td><td class="table-action"><a href="#" class="table-remove">&times; Remove</a></td></tr>',
      ).insertBefore($(that).find("table tbody tr:first-child"));
    } else if ($(this).parent().parent().is("#users-app")) {
      $(
        '<tr class="created inline-disabled"><td data-title="Username"><input type="text" class="inline-edit" value="test@test.com"></td><td data-title="Type"><a href="javascript:void(0);" class="users-app-dropdown">Admin</a></td><td data-title="Notifications"><div class="checker"><span class="checked"><input type="checkbox" checked=""></span></div><span class="label success">Enabled</span></td><td class="table-action"><a href="#" class="table-remove">× Remove</a><input class="btn blue" type="submit" value="Save"><input class="btn grey" type="submit" value="Cancel"></td></tr>',
      ).insertBefore(
        $(this).parent().parent().find("table tbody tr:first-child"),
      );
    } else if ($(that).is("#custom-dkim")) {
      $(
        '<tr class="created"><td data-title="Domain">test.test.com</td><td data-title="Status"><a class="label error refreshable verifiable" href="javascript:void(0);">Verify domain <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 18" enable-background="new 0 0 23 18"><path d="M16.7 11.1l3.1-3.2h-2.2C17.2 3.5 13.5.3 9 .3 4.2.3.3 4.2.3 9s3.9 8.7 8.7 8.7c2.4 0 4.6-1 6.1-2.5l-1.6-1.6c-1.2 1.2-2.7 1.9-4.5 1.9-3.5 0-6.4-2.9-6.4-6.4 0-3.5 2.9-6.4 6.4-6.4 3.1 0 5.7 2.7 6.3 5.4h-1.8l3.2 3z"></path></svg></a></td><td data-title="Default"><div class="radio"><span><input type="radio"></span></div></td><td class="table-action"><a href="#" class="table-remove">× Remove</a></td></tr>',
      ).insertBefore($(that).find("table tbody tr:first-child"));
    }
    $(".created").animate({ backgroundColor: "#FFFFFF" }, 1000, function () {
      $(".created").removeClass("created").removeAttr("style");
    });
    return false;
  });

  $(document).on("click", ".table-cancel", function () {
    var tr = $(this).parent().parent();
    tr.find("input").each(function () {
      if ($(this).prop("type") == "checkbox") {
        this.checked = $(this).data("checked") == "checked" ? true : false;
        handleCheckedState(null, null, this);
      }
      $(this).prop("disabled", true);
    });
  });

  // Inline Disabled/Edit functionality
  $(document).on("click", ".inline-edit", function () {
    var wrapper = $(this).parent().parent();

    if ($(wrapper).hasClass("inline-disabled")) {
      $(wrapper).removeClass("inline-disabled").addClass("inline-editing");
    }
    wrapper.find("input").prop("disabled", false);
    return false;
  });

  // Inline Edit Button functionality
  $(document).on("click", ".inline-editing .btn", function () {
    $(this)
      .parent()
      .parent()
      .removeClass("inline-editing")
      .addClass("inline-disabled");

    return false;
  });

  // Tab change functionality
  $(document).on(
    "click",
    ".card--tab-list .tab, #mobile-tab .tab",
    function () {
      if (!$(this).hasClass("active")) {
        var tab = $(this).attr("data-tab");
        $(this).parent().find(".tab").removeClass("active");
        $(this)
          .parent("li")
          .parent(".dropdown-menu")
          .find(".tab")
          .removeClass("active");
        $(this).addClass("active");
        $(".card--tab").addClass("card--tab-hidden");
        $("#" + tab).removeClass("card--tab-hidden");
      }
    },
  );

  // Dropdowns

  // Close Dropdown when you click on the page
  $(document).on("click", function () {
    $(".users-app-dropdown--options").addClass("is-trans");
    setTimeout(function () {
      $(".users-app-dropdown--options").remove();
      $(".users-app-dropdown.is-open").removeClass("is-open");
    }, 250);
  });

  $(document).on("click", "#users-app .inline-editing .btn", function () {
    $(".users-app-dropdown--options").addClass("is-trans");
    setTimeout(function () {
      $(".users-app-dropdown--options").remove();
      $(".users-app-dropdown.is-open").removeClass("is-open");
    }, 250);
  });

  // Open Dropdown when you click on the button
  $(document).on(
    "click",
    ".card--add .users-app-dropdown, .inline-editing .users-app-dropdown",
    function (e) {
      if ($(this).hasClass("is-open")) {
        $(".users-app-dropdown--options").addClass("is-trans");
        setTimeout(function () {
          $(".users-app-dropdown--options").remove();
          $(".users-app-dropdown.is-open").removeClass("is-open");
        }, 250);
      }
    },
  );

  // Open Dropdown when you click on the button
  $(document).on("click", ".users-app-dropdown", function (e) {
    if ($(this).hasClass("is-open")) {
      $(".users-app-dropdown--options").addClass("is-trans");
      setTimeout(function () {
        $(".users-app-dropdown--options").remove();
        $(".users-app-dropdown.is-open").removeClass("is-open");
      }, 250);
    } else {
      $(this).addClass("is-open");
      $(".users-app-dropdown--options").remove();
      $(
        '<ul class="users-app-dropdown--options is-trans"><li class="admin"><a href="javascript:void(0);"><h6>Admin</h6><p>Full access except billing/plan management.</p></a></li><li class="reports"><a href="javascript:void(0);"><h6>Reports</h6><p>Reports section only.</p></a></li></ul>',
      ).insertAfter(this); //extracted <li class="owner"><a href="javascript:void(0);"><h6>Owner</h6><p>Full control panel access.</p></a></li>
      setTimeout(function () {
        $(".users-app-dropdown--options").removeClass("is-trans");
      }, 100);
    }

    e.stopPropagation();
  });

  $(document).on(
    "click",
    ".users-app-dropdown--options .admin a",
    function (e) {
      $(".users-app-dropdown--options")
        .parent()
        .find(".users-app-dropdown")
        .html('Admin<input type="hidden" name="user_access" value="admin"/>');
      $(".users-app-dropdown--options").remove();
      $(".users-app-dropdown.is-open").removeClass("is-open");
      e.stopPropagation();
    },
  );

  $(document).on(
    "click",
    ".users-app-dropdown--options .reports a",
    function (e) {
      $(".users-app-dropdown--options")
        .parent()
        .find(".users-app-dropdown")
        .html(
          'Reports<input type="hidden" name="user_access" value="reports"/>',
        );
      $(".users-app-dropdown--options").remove();
      $(".users-app-dropdown.is-open").removeClass("is-open");
      e.stopPropagation();
    },
  );

  // Click 'Refreshable' label
  $(document).on("click", ".refreshable", function () {
    if ($(this).hasClass("checkable")) {
      $(this).text("Checking…").removeClass("error");
      //} else if ($(this).hasClass('verifiable')) {
      //  $(this).text('Verifying…').removeClass('error');
    }
  });

  // Default Rate Limit
  $(document).on("click", ".rate-limit-defaults .change", function () {
    $(this).parent().removeClass("is-closed").addClass("is-open");
  });

  // Hide input field if Default Rate Limit is set to Unlimited
  $(document).on("change", ".rate-limit-defaults select", function () {
    var prefix = "per_auth";
    var what = $(this).parent().parent().data("what");
    if (what === "ipaddr") {
      prefix = "per_ipauth";
    } else if (what === "apikey") {
      prefix = "per_apikey";
    }

    if ($(this).val() == "unlimited") {
      $(".rate-limit-defaults").addClass("is-unlimited");
      $(".rate-limit-defaults")
        .find('input[name="' + prefix + '_relay_limit"]')
        .val("");
      $(".rate-limit-defaults")
        .find('input[name="' + prefix + '_relay_limit"]')
        .prop("disabled", true);
    } else {
      $(".rate-limit-defaults").removeClass("is-unlimited");
      $(".rate-limit-defaults")
        .find('input[name="' + prefix + '_relay_limit"]')
        .prop("disabled", false);
    }
  });

  // Hide input field if SMTP User Rate Limit is set to Unlimited
  $(document).on("change", ".bootbox-body .rate-limit select", function () {
    if ($(this).val() == "unlimited") {
      $(".bootbox-body .rate-limit").addClass("is-unlimited");
      $('.bootbox-body input[name="ratelimit_limit"]').val("");
      $('.bootbox-body input[name="ratelimit_limit"]').prop("disabled", true);
    } else {
      $(".bootbox-body .rate-limit").removeClass("is-unlimited");
      $('.bootbox-body input[name="ratelimit_limit"]').prop("disabled", false);
    }
  });

  $(document).on("click", ".rate-limit-defaults .change-cancel", function () {
    $(this).parent().addClass("is-closed").removeClass("is-open");
  });

  $(document).on("click", ".rate-limit-defaults .change-save", function () {
    $(".alert_list").empty();
    var fdin = function () {
      setTimeout(function () {
        $(".inline-message, .inline-error").fadeIn();
      }, 150);
    };

    var fdout = function () {
      setTimeout(function () {
        $(".inline-message, .inline-error").fadeOut(500, function () {
          $(".inline-message, .inline-error").remove();
        });
      }, 2000);
    };

    var prefix = "per_auth";
    var what = $(this).parent().data("what");
    if (what === "ipaddr") {
      prefix = "per_ipauth";
    }
    if (what === "apikey") {
      prefix = "per_apikey";
    }

    var btn = $(this);
    var inp = { smtpclassname: what };
    inp[prefix + "_relay_limit"] = $(
      'input[name="' + prefix + '_relay_limit"]',
    ).val();
    if (inp[prefix + "_relay_limit"] < 0) {
      $(
        '<span class="inline-error" style="display: none;">The limit cannot be negative.</span>',
      ).insertAfter('input[name="' + prefix + '_relay_limit"]');
      fdin();
      fdout(); //clear existing errors.
      return;
    }
    $(this).parent().addClass("is-closed").removeClass("is-open");
    inp[prefix + "_relay_limit_period"] = $(
      'select[name="' + prefix + '_relay_limit_period"]',
    ).val();
    var resp = HTML.ajax(
      "PUT",
      END_POINTS.urls()["Authentication"],
      inp,
      null,
      true,
    );
    resp.success(function (data) {
      if (data.status == "OK") {
        btn
          .parent()
          .prepend(
            '<span class="inline-message" style="display: none;">Saved changes</span>',
          );
        Custom.def_rl_period = inp[prefix + "_relay_limit_period"];
        Custom.def_rl_limit = inp[prefix + "_relay_limit"];
        $(".current_limit").text(
          HTML.format_ratelimit(Custom.def_rl_limit, Custom.def_rl_period),
        );
      } else {
        btn
          .parent()
          .prepend(
            '<span class="inline-error" style="display: none;">Error Occurred</span>',
          );
        HTML.handleError(data);
      }
      fdin();
      fdout();
    });
  });

  // Bootbox Users SMTP

  $(document).on("click", 'input[name="unsubscribe_enabled"]', function () {
    var $this = $(this);
    var thisParent = $this.parents(".unsubscribe-open");
    $this
      .parents(".unsubscribes")
      .toggleClass("is-closed")
      .toggleClass("is-open");
    $(".tab-content").removeAttr("style");

    if (thisParent.hasClass("unsubscribe-footer-enabled")) {
      thisParent.removeClass("unsubscribe-footer-enabled");
    } else {
      thisParent.addClass("unsubscribe-footer-enabled");
    }
  });

  $(document).on("click", 'input[name="archive_enabled"]', function () {
    $(this).parent("label").toggleClass("is-closed").toggleClass("is-open");
  });

  $(document).on("click", 'input[name="open_tracking_enabled"]', function () {
    $(this).parent().toggleClass("is-closed").toggleClass("is-open");
  });

  $(document).on("click", 'input[name="click_tracking_enabled"]', function () {
    $(this).parent().toggleClass("is-closed").toggleClass("is-open");
  });

  $(document).on("click", 'input[name="smtp_enabled_picker"]', function () {
    $(this).parent().toggleClass("is-closed").toggleClass("is-open");
    if ($(this).parent().hasClass("is-open")) {
      $('input[name="smtp_enabled"]').val("allowed");
    } else {
      $('input[name="smtp_enabled"]').val("blocked");
    }
  });

  $(document).on("click", 'input[name="forward_bounces_enabled"]', function () {
    var $this = $(this);
    $this.parent().toggleClass("is-closed").toggleClass("is-open");
    $(".tab-content").removeAttr("style");

    var ison = $this.attr("checked");

    if (ison == "checked") {
      $this.parents(".archiving-open").addClass("content-expanded");
      $this.parents(".form-group").addClass("is-expanded");
      bounces_expanded = true;
    } else {
      $this.parents(".archiving-open").removeClass("content-expanded");
      $this.parents(".form-group").removeClass("is-expanded");
      bounces_expanded = false;
    }
  });

  $(document).on("click", ".bounces-options label", function () {
    var $this = $(this);
    var radiob = $this.find('input[type="radio"]');
    if (radiob.is(":checked")) {
      $(".bounces-options label").removeClass("is-active");
      $this.addClass("is-active");
    }

    if ($this.hasClass("input-activate") && radiob.is(":checked")) {
      $this.next("input").focus();
    }
  });

  $(document).on("click", '.rate-limit input[type="checkbox"]', function () {
    var ea = function () {
      if (
        $(this).prop("name") == "ratelimit_limit" &&
        $(".bootbox-body .rate-limit select").val() == "unlimited"
      ) {
      } else
        $(this).prop(
          "disabled",
          $(".form-group.rate-limit").hasClass("is-default"),
        );
      if ($(".form-group.rate-limit").hasClass("is-default")) {
        $(this).val(
          $(this).prop("name") == "ratelimit_limit"
            ? Custom.def_rl_limit
            : Custom.def_rl_period,
        );
      }
    };

    if ($(".form-group.rate-limit").hasClass("is-default")) {
      $(".form-group.rate-limit")
        .removeClass("is-default")
        .addClass("is-custom");
      $(".form-group.rate-limit").find(".form-control").each(ea);
    } else {
      $(".form-group.rate-limit")
        .addClass("is-default")
        .removeClass("is-custom");
      if (Custom.def_rl_period == "unlimited")
        $(".form-group.rate-limit").addClass("is-unlimited");
      else $(".form-group.rate-limit").removeClass("is-unlimited");
      $(".form-group.rate-limit").find(".form-control").each(ea);
    }
  });

  $(document).on("click", ".password-show-hide", function () {
    if ($(this).hasClass("is-hidden")) {
      $(this).removeClass("is-hidden").addClass("is-shown");
      $(this)
        .parent()
        .find("input")
        .each(function () {
          $('<input class="form-control input-md" type="text" />')
            .attr({ name: this.name, value: this.value })
            .insertBefore(this);
        })
        .remove();
    } else {
      $(this).removeClass("is-shown").addClass("is-hidden");
      $(this)
        .parent()
        .find("input")
        .each(function () {
          $('<input class="form-control input-md" type="password" />')
            .attr({ name: this.name, value: this.value })
            .insertBefore(this);
        })
        .remove();
    }
  });

  $(document).on("click", ".fullkey-show-hide", function () {
    if ($(this).hasClass("is-hidden")) {
      $(this).removeClass("is-hidden").addClass("is-shown");
      $(this)
        .parent()
        .find("input[id=api_key]")
        .each(function () {
          $(this)
            .val($(this).attr("full-data"))
            .prop("readonly", $(this).data("isnew"));
        });
    } else {
      $(this).removeClass("is-shown").addClass("is-hidden");
      $(this)
        .parent()
        .find("input[id=api_key]")
        .each(function () {
          $(this).val($(this).attr("min-data")).prop("readonly", true);
        });
    }
  });

  $(document).on("keyup", 'input[name="auth_password"]', function () {
    if ($(this).val().length === 0) {
      $(".password-gen").removeClass("hide");
    } else {
      $(".password-gen").addClass("hide");
    }
  });

  $(document).on("click", ".password-gen", function () {
    var pw = Custom.generatePassword();
    $(document).find('input[name="auth_password"]').val(pw);
  });

  // Edit for box smtp users of all types.
  // FIXME untranslatable  - the text embedded in this resists simple translation onto other natural languages

  var smtp_box = function (data, what) {
    var user = null;
    if (data && data.results.user) user = data.results.user;
    if (what == null && user) what = user.smtpclassname;
    if (what == null) what = "smtp-auth";
    var humanwhat = {
      null: "SMTP User",
      "salesforce-newuser": "Salesforce Integration",
      salesforce: "Salesforce Integration",
      "non-sender": "ERROR ERROR",
      apikey: "API Key",
      ipaddr: "IP Address",
      unknown: "ERROR ERROR ERROR",
      "smtp-noauth": "SMTP User",
      "smtp-auth": "SMTP User",
    }[what];
    if (!humanwhat) {
      alert("oops - what am i editing:" + what);
      return null;
    }
    var title = "Add " + humanwhat;

    var ratelimit_default = "checked";
    var ratelimit_period = "unlimited";
    var ratelimit_limit = "";

    var default_ippool =
      data != null ? data.results["default_ippool"] : Custom.default_ippool;
    var method = "POST";
    var unsubscribe_enabled = false;
    var unsubscribe_tag = "%%UNSUBSCRIBE%%";
    var unsubscribe_domain = "";
    var default_html;
    var default_text;
    var unsubscribe_html = (default_html =
      '<br>\r\n<p><a href="' + unsubscribe_tag + '">unsubscribe</a></p>');
    var unsubscribe_text = (default_text =
      "To unsubscribe click: " + unsubscribe_tag);
    var archive_enabled = false;
    var archive_opts_visible = Custom.archive_opts_visible;
    var show_bounce_notifications = Custom.show_bounce_notifications;
    var open_tracking_enabled = false;
    var click_tracking_enabled = false;
    var audit_email = null;
    var selected_ippool = "";
    var blocked = "";
    var html_suggestion = false;
    var txt_suggestion = false;
    var permissions_tab = null;

    if (user && user.ratelimit_custom) {
      ratelimit_default = "";
    } else {
      ratelimit_period = Custom.def_rl_period;
      ratelimit_limit = Custom.def_rl_limit;
    }

    if (user) {
      if (user.auth_uid) {
        title = "Edit " + humanwhat;
        method = "PUT";
      }
      var password = user.password;
      if (password == null) password = "";

      if (user.ratelimit_limit != null || user.ratelimit_custom)
        ratelimit_limit = user.ratelimit_limit;
      if (user.ratelimit_period != null || user.ratelimit_custom)
        ratelimit_period = user.ratelimit_period;

      if (user.unsub_enabled != null) {
        unsubscribe_enabled = user.unsub_enabled;
        html_suggestion = true;
        txt_suggestion = true;
      }
      if (ratelimit_period == null) ratelimit_period = "unlimited";

      if (user.unsub_tag != null) {
        unsubscribe_tag = user.unsub_tag;
        unsubscribe_html = default_html =
          '<br>\r\n<p><a href="' + unsubscribe_tag + '">unsubscribe</a></p>';
        unsubscribe_text = default_text =
          "To unsubscribe click: " + unsubscribe_tag + "";
      }
      if (user.unsub_domain != null) {
        unsubscribe_domain = user.unsub_domain;
      }
      if (user.unsub_html != null) {
        unsubscribe_html = user.unsub_html;
        html_suggestion = false;
      }
      if (user.unsub_text != null) {
        unsubscribe_text = user.unsub_text;
        txt_suggestion = false;
      }
      if (user.archive_enabled != null) {
        archive_enabled = user.archive_enabled;
      }
      if (user.archive_enabled != null) {
        archive_enabled = user.archive_enabled;
      }
      if (user.audit_email != null) {
        audit_email = user.audit_email;
      }
      if (user.open_tracking_enabled != null) {
        open_tracking_enabled = user.open_tracking_enabled;
      }
      if (user.click_tracking_enabled != null) {
        click_tracking_enabled = user.click_tracking_enabled;
      }
      if (user.ippool != null) {
        selected_ippool = user.ippool;
      }
    } else {
      password = Custom.generatePassword();
    }
    var set_tab_class = function (e) {
      e.preventDefault();
      var el = e.target;
      var target = $(el).attr("href").substr(1);
      $(el)
        .parents(".bootbox-tabs")
        .parent()
        .removeClass()
        .addClass(target + "-open");
    };

    var tablist = $("<ul></ul>")
      .addClass("bootbox-tabs")
      .attr("role", "tablist");
    if (what == "salesforce") {
      tablist.append(
        $("<li></li>")
          .addClass("bootbox-tabs__tab active")
          .append(
            $("<a></a>")
              .attr("href", "#details")
              .attr("role", "tab")
              .attr("data-toggle", "tab")
              .text("Details")
              .on("click", set_tab_class),
          ),
      );
    } else {
      tablist.append(
        $("<li></li>")
          .addClass("bootbox-tabs__tab active")
          .append(
            $("<a></a>")
              .attr("href", "#details")
              .attr("role", "tab")
              .attr("data-toggle", "tab")
              .text(
                what === "ipaddr"
                  ? "IP Address Details"
                  : what === "apikey"
                    ? "API Details"
                    : "SMTP Details",
              )
              .on("click", set_tab_class),
          ),
      );
    }

    // create the permissions tab for api keys
    if (what == "apikey") {
      // append a new 'Permissions' tab to the bootbox-tabs
      tablist.append(
        $("<li></li>")
          .addClass("bootbox-tabs__tab")
          .append(
            $("<a></a>")
              .attr("href", "#permissions")
              .attr("role", "tab")
              .attr("data-toggle", "tab")
              .text("Permissions")
              .on("click", set_tab_class),
          ),
      );

      // create the content for the permission tab
      permissions_tab = $("<div></div>")
        .attr("role", "tabpanel")
        .addClass("tab-pane user-tab-permissions")
        .attr("id", "permissions");
      permissions_tab.append(
        $("<div></div>")
          .addClass("permissions")
          .append(
            $("<div></div>")
              .addClass("form-group no-margin-bottom")
              .append(api_users_build_permissions(data.results.api_index)),
          ),
      );
    }

    if (what != "salesforce")
      tablist.append(
        $("<li></li>")
          .addClass("bootbox-tabs__tab")
          .append(
            $("<a></a>")
              .attr("href", "#unsubscribe")
              .attr("role", "tab")
              .attr("data-toggle", "tab")
              .text("Unsubscribe Footer")
              .on("click", set_tab_class),
          ),
      );

    tablist.append(
      $("<li></li>")
        .addClass("bootbox-tabs__tab")
        .append(
          $("<a></a>")
            .attr("href", "#tracking")
            .attr("role", "tab")
            .attr("data-toggle", "tab")
            .text("Tracking & Status")
            .on("click", set_tab_class),
        ),
    );

    tablist.append(
      $("<li></li>")
        .addClass("bootbox-tabs__tab")
        .append(
          $("<a></a>")
            .attr("href", "#archiving")
            .attr("role", "tab")
            .attr("data-toggle", "tab")
            .text("Advanced")
            .on("click", set_tab_class),
        ),
    );

    var wrapper = $("<div></div>");
    if (what == "salesforce") {
      wrapper
        .append(
          $("<p></p>").text(
            "This user is directly linked to a Salesforce account. You can optionally specify a rate limit, or choose advanced options.",
          ),
        )
        .append(tablist);
    } else if (what == "ipaddr") {
      wrapper
        .append(
          $("<p></p>").text(
            "Edit the IP address details below. Optionally set a rate limit, unsubscribe footer, or choose advanced options.",
          ),
        )
        .append(tablist);
    } else {
      if (what == "apikey") {
        wrapper
          .append(
            $("<p></p>").text(
              "Edit the API key rate limit below. You can also specify endpoint permissions and an unsubscribe footer, " +
                "which will be automatically added to the end of every email.",
            ),
          )
          .append(tablist);
      } else {
        wrapper
          .append(
            $("<p></p>").text(
              "Edit the user’s credentials and rate limit below. You can also specify an unsubscribe footer, which will be automatically added to the end of every email.",
            ),
          )
          .append(tablist);
      }
    }

    var page = $("<form></form>")
      .addClass("form-horizontal")
      .prop("id", "smtp-user-edit");
    page.append($("<div></div>").addClass("modal-error").css("margin-top", 10));
    //tab
    // var details_tab = $('<div></div>').addClass('tab-content');
    // details_tab.append( $('<div></div>').attr('role','tabpanel').addClass('tab-pane user-tab-details active').attr('id','details') );
    var details_tab = $("<div></div>")
      .attr("role", "tabpanel")
      .addClass("tab-pane user-tab-details active")
      .attr("id", "details");
    if (user) {
      details_tab.append(
        $("<input></input>")
          .prop("type", "hidden")
          .prop("name", "edit")
          .val(user.auth_uid),
      );
    }

    // SMTP AUTH user
    if (what == "smtp-auth") {
      //username
      details_tab.append(
        $("<div></div>")
          .addClass("form-group")
          .append(
            $("<label></label>")
              .addClass("col-md-4 control-label new-label")
              .text("Username"),
          ),
      );
      $(details_tab.find(".form-group")[0]).append(
        $("<div></div>")
          .addClass("col-md-5")
          .append(
            $("<input></input>")
              .prop("type", "text")
              .addClass("form-control input-md")
              .prop("autocomplete", "off")
              .prop("name", "auth_username"),
          ),
      );
      if (user) {
        details_tab.find('input[name="auth_username"]').val(user.username);
      } else {
        if (
          data &&
          data.results.prefilled_username !== undefined &&
          data.results.prefilled_username !== null
        ) {
          details_tab
            .find('input[name="auth_username"]')
            .val(data.results.prefilled_username);
          $(
            '<p class="info-right">(We\'ve provided a suggested username)</p>',
          ).insertAfter(details_tab.find('input[name="auth_username"]'));
        }
      }

      //password
      details_tab.append(
        $("<div></div>")
          .addClass("form-group")
          .append(
            $("<label></label>")
              .addClass("col-md-4 control-label new-label")
              .text("Password"),
          )
          .append(
            $("<div></div>")
              .addClass("col-md-5")
              .append(
                $("<input></input>")
                  .prop("type", "text")
                  .addClass("form-control input-md")
                  .prop("autocomplete", "off")
                  .prop("name", "auth_password")
                  .val(password),
              ),
          ),
      );

      if (user) {
        details_tab
          .find('input[name="auth_password"]')
          .prop("type", "password");
      }
      details_tab
        .find('input[name="auth_password"]')
        .after(
          $("<a></a>")
            .addClass("password-show-hide is-shown")
            .append(
              $(
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 10" enable-background="new 0 0 13 10"><path fill="#828da0" d="M12.9 4.9c-1.2 1.2-2.3 2.5-3.5 3.5-1.8 1.6-4.5 1.4-6.2-.3L.1 5l.3-.3 2.8-2.8c2-2 4.8-2 6.8 0 .9 1 1.9 2 2.9 3zm-11.2 0c1 1 1.8 1.9 2.7 2.8 1.3 1.1 3.2 1 4.5-.2l1.6-1.6c.3-.3.6-.6.9-.8-.9-.9-1.7-1.9-2.6-2.7-1.1-1-2.8-1.1-4.1-.3-.4.2-.6.5-.9.7L1.7 4.9zM6.5 2.6c1.3 0 2.4 1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4C5.1 7.4 4 6.3 4 5c.1-1.4 1.2-2.4 2.5-2.4zm0 1.5c0 .5.3.9.8.9s.9-.3.9-.8-.3-.9-.8-.9-.9.3-.9.8z"/></svg>',
              ),
            ),
        );
      if (data) {
        details_tab
          .find(".password-show-hide")
          .addClass("is-hidden")
          .removeClass("is-shown");
      }
    } else if (what == "ipaddr") {
      //username
      details_tab.append(
        $("<div></div>")
          .addClass("form-group")
          .append(
            $("<label></label>")
              .addClass("col-md-4 control-label new-label")
              .text("IP Address"),
          ),
      );
      $(details_tab.find(".form-group")[0]).append(
        $("<div></div>")
          .addClass("col-md-5")
          .append(
            $("<input></input>")
              .prop("type", "text")
              .addClass("form-control input-md")
              .prop("autocomplete", "off")
              .prop("name", "ipaddress"),
          ),
      );

      if (data) {
        $(details_tab.find(".form-group")[0]).append(
          $("<input></input>")
            .prop("type", "hidden")
            .prop("name", "auth_uid")
            .val(user.auth_uid),
        );
        details_tab.find('input[name="ipaddress"]').val(user.ipaddr);
      }
    } else if (what == "salesforce-newuser") {
      var page = $("<div></div>")
        .addClass("form-horizontal")
        .prop("id", "smtp-user-edit");
      page.append(
        $("<div></div>").addClass("modal-error").css("margin-top", 10),
      );

      // Salesforce newuser
      //extract the email part of the username
      if (user.username.slice(0, 9) == "/SF-init/")
        user.username = user.username.slice(9);

      var fg = $("<div class=form-group></div>")
        .append(
          $("<label></label>")
            .addClass("col-md-5 control-label new-label")
            .text("Activation Address:"),
        )
        .append(
          $("<div></div>")
            .addClass("col-md-6 copy-field")
            .append(
              $(
                '<input onclick="this.focus();this.select()" readonly="readonly" class="form-control activ-address input-md"><button onclick="copyToClipboard(\'.activ-address\')" type="submit">Copy Link</button>',
              ).val(user.username),
            ),
        );

      details_tab.append(fg);

      details_tab.append(fg);
      page.append(details_tab);

      Custom.bb = bootbox.alert({
        title: title,
        message: page,
      });
      return;
    } else if (what == "salesforce") {
      // Salesforce user
      details_tab
        .append(
          $("<div></div>")
            .addClass("form-group")
            .append(
              $("<label></label>")
                .addClass("col-md-4 control-label new-label")
                .text("Salesforce ID"),
            ),
        )
        .append(
          $("<div></div>")
            .addClass("col-md-5")
            .append($("<span></span>").text(user.username)),
        );
    } else if (what === "apikey") {
      // if new api key is present in the data, we are adding an apikey
      var newApiKey = null;
      if (data.results.new_api_key !== undefined) {
        newApiKey = data.results.new_api_key;
        newApiKeyHash = data.results.new_api_key_hash;
        title = "Add " + humanwhat;
        method = "POST";
      }

      _api_key = newApiKey !== null ? newApiKey : user.api_key;

      details_tab.append(
        $("<div></div>")
          .addClass("form-group")
          .append(
            $("<label></label>")
              .addClass("col-md-4 control-label new-label")
              .text("API Key"),
          ),
      );
      $(details_tab.find(".form-group")[0])
        .append(
          $("<div></div>")
            .addClass("col-md-5")
            .append(
              $("<input></input>")
                .prop("type", "text")
                .addClass("form-control input-md")
                .prop("autocomplete", "off")
                .prop("name", "username")
                .prop("readonly", true),
            ),
        )
        .append(
          $("<div></div>")
            .addClass("col-md-4 collapse-left")
            .append($("<input></input>").prop("type", "hidden").val(_api_key))
            .append(
              $("<a></a>")
                .addClass(
                  "btn button-download copy-button copy-button-modal mobile-hide",
                )
                .text("Copy"),
            ),
        );

      if (data || newApiKey !== null) {
        username = newApiKey !== null ? newApiKey : user.api_key;
        api_hash = newApiKey !== null ? newApiKeyHash : user.api_key_hash;
        $(details_tab.find(".form-group")[0]).append(
          $("<input></input>")
            .prop("type", "hidden")
            .prop("name", "auth_uid")
            .val(username),
        );
        $(details_tab.find(".form-group")[0]).append(
          $("<input></input>")
            .prop("type", "hidden")
            .prop("name", "api_hash")
            .val(api_hash),
        );
        var api_username = username.substr(0, 9) + Array(24).join("x");
        details_tab.find('input[name="username"]').val(api_username);
      }
    }

    // description
    var desc = $("<div></div>")
      .addClass("form-group")
      .append(
        $("<label></label>")
          .addClass("col-md-4 control-label new-label")
          .text("Description"),
      );
    var descinput = $("<input></input>")
      .prop("type", "text")
      .addClass("form-control input-md")
      .prop("autocomplete", "off")
      .prop("name", "comment")
      .prop("placeholder", "Optional");
    desc.append($("<div></div>").addClass("col-md-5").append(descinput));

    if (user) {
      descinput.val(user.comment);
    }

    // now insert the description input where needed

    if (what == "salesforce-newuser") {
      // no more form this type.
      return;
    } else if (what === "apikey") {
      // override description placeholder
      descinput.prop("placeholder", "Used to keep track of your keys");
    } else if (what == "indescribable") {
      // are there any types that have no description?
      desc = false;
    }
    if (desc) {
      details_tab.append(desc);
    }

    // Pools
    if (Custom.hasippools) {
      var ippools = $("<select></select>")
        .prop("name", "ippool")
        .addClass("form-control");
      for (var i = 0; i < Custom.ippool.length; i++) {
        var poolHasIps = Custom.ippool[i][2];
        if (poolHasIps) {
          ippools = ippools.append(
            $("<option></option>")
              .val(Custom.ippool[i][0])
              .prop(
                "selected",
                Custom.ippool[i][0] == selected_ippool ? true : false,
              )
              .text("" + Custom.ippool[i][1]),
          );
        }
      }
      details_tab.append(
        $("<div></div>")
          .addClass("form-group details-ippool")
          .append(
            $("<label></label>")
              .addClass("col-md-4 control-label new-label")
              .text("IP Pool"),
          )
          .append($("<div></div>").addClass("col-md-5").append(ippools)),
      );
      setTimeout(function () {
        $(".page-users .tab-content").addClass("has-ippool");
      }, 100);
    }

    // set-up the rate-limit period dropdown.
    // ensure that this user's ratelimit_peiod is one of the options
    if (
      !Custom.available_periods.filter(function (r) {
        return r[0] == ratelimit_period;
      }).length
    ) {
      Custom.available_periods.push([
        ratelimit_period,
        'Per "' + ratelimit_period + '"',
        9e9,
      ]);
    }
    // populate the rate limit dropdown.
    var opts = $();
    for (var i = 0; i < Custom.available_periods.length; i++) {
      var opt = $("<option></option>")
        .val(Custom.available_periods[i][0])
        .text(Custom.available_periods[i][1]);
      if (Custom.available_periods[i][0] == ratelimit_period) {
        opt.prop("selected", true);
      }
      opts = opts.add(opt);
    }

    details_tab.append(
      $("<div></div>")
        .addClass("form-group rate-limit")
        .append(
          $("<label></label>")
            .addClass("col-md-4 control-label new-label")
            .text("Rate Limit"),
        )
        .append(
          $("<div></div>")
            .addClass("col-md-2")
            .append(
              $("<input></input>")
                .prop("type", "number")
                .addClass("form-control")
                .prop("name", "ratelimit_limit"),
            ),
        )
        .append(
          $("<div></div>")
            .addClass("col-md-3 collapse-left")
            .append(
              $("<select></select>")
                .addClass("form-control")
                .prop("name", "ratelimit_period")
                .append(opts),
            ),
        )
        .append(
          $("<div></div>")
            .addClass("col-md-4 collapse-left")
            .append(
              $("<label></label>")
                .addClass("ratelimit-label")
                .append(
                  $("<input></input>")
                    .prop("type", "checkbox")
                    .addClass("ratelimit_default")
                    .prop("name", "ratelimit_default"),
                )
                .append(" Use default"),
            ),
        ),
    );
    if (ratelimit_default == "") {
      details_tab.find(".rate-limit").addClass("is-custom");
    } else {
      details_tab.find(".rate-limit").addClass("is-default");
      details_tab.find('input[name="ratelimit_default"]').prop("checked", true);
      details_tab.find('input[name="ratelimit_period"]').prop("disabled", true);
      details_tab.find('input[name="ratelimit_limit"]').prop("disabled", true);
    }

    if (default_ippool && !user) {
      details_tab.find('select[name="ippool"]').val(default_ippool);
    }

    if (ratelimit_period == "unlimited" || Custom.def_rl_limit == "") {
      details_tab.find(".rate-limit").addClass("is-unlimited");
    }
    details_tab.find('input[name="ratelimit_limit"]').val(ratelimit_limit);

    if (
      ratelimit_limit == "" ||
      ratelimit_limit == null ||
      ratelimit_default != ""
    ) {
      details_tab.find('input[name="ratelimit_limit"]').prop("disabled", true);
    }

    //Unsubscribes
    var unsub_tab = $("<div></div>")
      .attr("role", "tabpanel")
      .addClass("tab-pane user-tab-unsubscribe")
      .attr("id", "unsubscribe");
    var domains = $();
    for (var i = 0; i < Custom.unsub_domains.length; i++) {
      var domain = $("<option></option>")
        .val(Custom.unsub_domains[i][0])
        .text(Custom.unsub_domains[i][1]);
      if (Custom.unsub_domains[i][0] == unsubscribe_domain) {
        domain.prop("selected", true);
      }
      domains = domains.add(domain);
    }
    var set_default = function (e) {
      var btn = $(e.target);
      $(btn.data("target")).val(btn.data("value"));
      return true;
    };

    unsub_tab.append(
      $("<div></div>")
        .addClass("unsubscribes")
        .append(
          $("<div></div>")
            .addClass("form-group no-margin-bottom")
            .append(
              $(
                '<label class="col-md-4 control-label new-label">Add&nbsp;Footer</label>',
              ),
            )
            .append(
              $("<div></div>")
                .addClass("col-md-7")
                .append(
                  $("<label></label>")
                    .addClass("inline-checkbox")
                    .append(
                      $("<input></input>")
                        .prop("type", "checkbox")
                        .prop("name", "unsubscribe_enabled"),
                    )
                    .append(""),
                )
                .append(
                  $("<small></small>")
                    .append(" ")
                    .append(
                      $("<a></a>")
                        .prop(
                          "href",
                          "https://support.smtp2go.com/hc/en-gb/articles/223087607",
                        )
                        .prop("target", "_blank")
                        .text("(What's this?)"),
                    ),
                ),
            )
            .append(
              $('<div id="unsub_dd"></div>')
                .css("display", "none")
                .addClass("form-group-inner toggle")
                .append(
                  $("<label></label>")
                    .addClass("col-md-4 control-label new-label")
                    .html("Domain"),
                )
                .append(
                  $("<div></div>")
                    .addClass("col-md-5")
                    .append(
                      $("<select></select>")
                        .addClass("form-control smtp-user-domain")
                        .prop("name", "unsubscribe_domain")
                        .append(domains),
                    ),
                  $("<div></div>")
                    .addClass("col-md-3")
                    .append($('<span class="also">This is optional.</span>')),
                ),
            )
            .append(
              $("<div></div>")
                .addClass("form-group-inner toggle")
                .append(
                  $('<div class="col-md-4 control-label new-label"></div>')
                    .append($("<label>HTML</label>"))
                    .append(
                      $("<a></a>")
                        .text("use default")
                        .on("click", set_default)
                        .data("value", default_html)
                        .data("target", 'textarea[name="unsubscribe_html"]'),
                    ),
                )
                .append(
                  $("<div></div>")
                    .addClass("col-md-9")
                    .append(
                      $("<textarea></textarea>")
                        .addClass("form-control")
                        .prop("name", "unsubscribe_html"),
                    ),
                ),
            )
            .append(
              $("<div></div>")
                .addClass("form-group-inner toggle")
                .append(
                  $('<div class="col-md-4 control-label new-label"></div>')
                    .append($("<label>Plain Text</label>"))
                    .append(
                      $("<a></a>")
                        .text("use default")
                        .data("value", default_text)
                        .data("target", 'textarea[name="unsubscribe_text"]')
                        .on("click", set_default),
                    ),
                )
                .append(
                  $("<div></div>")
                    .addClass("col-md-9")
                    .append(
                      $("<textarea></textarea>")
                        .addClass("form-control")
                        .prop("name", "unsubscribe_text"),
                    ),
                ),
            )
            .append($("").append($("").text("")).append()),
        ),
    );

    if (unsubscribe_enabled) {
      unsub_tab.find(".unsubscribes").addClass("is-open");
      unsub_tab.find('input[name="unsubscribe_enabled"]').prop("checked", true);

      if (!$(".unsubscribe-open").hasClass("unsubscribe-footer-enabled")) {
        $(".unsubscribe-open").addClass("unsubscribe-footer-enabled");
      }
    } else {
      unsub_tab.find(".unsubscribes").addClass("is-closed");
      $(".unsubscribe-open").removeClass("unsubscribe-footer-enabled");
    }
    unsub_tab.find('textarea[name="unsubscribe_html"]').text(unsubscribe_html);
    unsub_tab.find('textarea[name="unsubscribe_text"]').text(unsubscribe_text);

    $(document).on("click", '[href="#unsubscribe"]', function () {
      if ($(".unsubscribes").hasClass("is-open")) {
        $(".unsubscribe-open").addClass("unsubscribe-footer-enabled");
      } else {
        $(".unsubscribe-open").removeClass("unsubscribe-footer-enabled");
      }
    });

    // Advanced tab
    var archive_tab = $("<div></div>")
      .attr("role", "tabpanel")
      .addClass("tab-pane user-tab-archiving")
      .attr("id", "archiving");
    var content = '<div class="archiving">';
    if (archive_opts_visible) {
      content +=
        '<div class="form-group no-margin-bottom">' +
        '<label class="col-md-3 control-label new-label">Email&nbsp;Archiving</label>' +
        '<div class="col-md-9">' +
        '<label class="inline-checkbox checkbox-archive"><input type="checkbox" name="archive_enabled" /></label>' +
        '<small><a href="https://support.smtp2go.com/hc/en-gb/articles/115003599568" target="_blank">(What\'s this?)</a></small>' +
        '<p style="font-size:13px;">Enable email archiving to store the content and delivery record of your emails.<br /><small>Archived emails involve an extra charge.</small></p>' +
        "</div>" +
        "</div>";
    }

    content +=
      '<div class="form-group no-margin-bottom" style="margin-top: 10px;">' +
      '<label class="col-md-3 control-label new-label">Email&nbsp;Auditing</label>' +
      '<div class="col-md-9">' +
      '<input type="text" name="audit_email" class="form-control input-md" style="max-width: 50%; margin-bottom: .5em;" />' +
      '<p class="nowrap-desktop" style="font-size:13px;">Send a BCC copy of every email to this address. Separate addresses with commas.<br /><small>BCC copies count towards monthly quota. Leave blank to disable this feature.</small></p>' +
      "</div>" +
      "</div>";

    if (show_bounce_notifications === true) {
      // work out the display
      var enabled = false;
      var fwdbounces_to = "";
      var checkOriginal = true;
      var checkOther = false;
      if (user) {
        // if this is null - it means it's behaving like 'from' so turn it on
        if (user.verp === null) {
          enabled = true;
          bounces_expanded = true;
        }
        // otherwise if it's anything but 'drop' turn it on
        else if (user.verp !== "drop") {
          enabled = true;
          bounces_expanded = true;
          if (user.verp !== "from") {
            fwdbounces_to = user.verp;
            checkOther = true;
            checkOriginal = false;
          } else {
            checkOriginal = true;
            checkOther = false;
          }
        }
      } else {
        // bounce notifications enabled by default for ip/smtp but no api keys
        if (what === "apikey") {
          enabled = false;
          bounces_expanded = false;
        } else {
          enabled = true;
          bounces_expanded = true;
        }
      }

      $(document).on("click", "#bounce_notices_email", function () {
        setTimeout(function () {
          var allBounceFields = $(document).find(".bounces-options label");
          var allBounceItems = $(document).find(
            '.bounces-options label input[type="radio"]',
          );
          var inputFieldOn = $(document).find(".input-activate");
          var inputOn = $(document).find('.input-activate input[type="radio"]');
          checkOther = true;
          allBounceItems.prop("checked", false);
          allBounceFields.removeClass("is-active");
          inputFieldOn.addClass("is-active");
          inputOn.prop("checked", true);
        }, 10);
      });

      setTimeout(function () {
        $('[name="forward_bounces_enabled"]')
          .parents(".tab-content")
          .addClass("has-bounces");
      }, 1000);

      content +=
        '<div class="form-group no-margin-bottom ' +
        (enabled ? "is-expanded" : "") +
        '">' +
        '<label class="col-md-3 control-label new-label" style="padding-top:0; margin-top: -2px;">Bounce Notifications</label>' +
        '<div class="col-md-9">' +
        '<label class="inline-checkbox ' +
        (enabled ? "is-open" : "is-closed") +
        '"><input type="checkbox" name="forward_bounces_enabled" ' +
        (enabled ? "checked" : "") +
        "/></label>" +
        '<p style="font-size:13px;">Enable this to receive a notification email whenever an email bounces.</p>' +
        '<div class="bounces-options">' +
        '<label class="' +
        (checkOriginal ? "is-active" : "") +
        '"><input type="radio" name="fwdbounces" value="original" ' +
        (checkOriginal ? "checked" : "") +
        ">Send bounce notification emails to the original sender</label><br>" +
        '<label class="' +
        (checkOther ? "is-active" : "") +
        ' input-activate"><input type="radio" name="fwdbounces" value="other" ' +
        (checkOther ? "checked" : "") +
        ">Send bounce notification emails to:</label>" +
        '<input type="text" id="bounce_notices_email" name="fwdbounces_to" placeholder="example@domain.com" value="' +
        fwdbounces_to +
        '">' +
        "</div></div></div>";
    }

    +"</div>"; // end of archiving div

    archive_tab.append($(content));
    if (archive_enabled) {
      archive_tab
        .find(".archiving .inline-checkbox.checkbox-archive")
        .addClass("is-open");
      archive_tab.find('input[name="archive_enabled"]').prop("checked", true);
    } else {
      archive_tab
        .find(".archiving .inline-checkbox.checkbox-archive")
        .addClass("is-closed");
    }

    $(document).on("click", '[href="#archiving"]', function () {
      if (bounces_expanded == false) {
        $(".archiving-open").removeClass("content-expanded");
      } else {
        $(".archiving-open").addClass("content-expanded");
      }
    });

    if (audit_email !== null) {
      archive_tab.find('input[name="audit_email"]').val(audit_email);
    }

    // Tracking
    var tracking_tab = $("<div></div>")
      .attr("role", "tabpanel")
      .addClass("tab-pane user-tab-tracking")
      .attr("id", "tracking");
    var content =
      '<div class="tracking">' +
      '<div class="form-group no-margin-bottom">' +
      '<label class="col-md-3 control-label new-label">Open&nbsp;Tracking</label>' +
      '<div class="col-md-9">' +
      '<label class="inline-checkbox is-closed"><input type="checkbox" name="open_tracking_enabled" /></label>' +
      '<small><a href="https://support.smtp2go.com/hc/en-gb/articles/360003124714-Open-Tracking" target="_blank">(What\'s this?)</a></small>' +
      '<p style="font-size:13px;"> Enable open tracking to find out when a recipient has opened an email.</p>' +
      "</div>" +
      "</div>" +
      '<div class="form-group no-margin-bottom">' +
      '<label class="col-md-3 control-label new-label">Click&nbsp;Tracking</label>' +
      '<div class="col-md-9">' +
      '<label class="inline-checkbox is-closed"><input type="checkbox" name="click_tracking_enabled" /></label>' +
      '<small><a href="https://support.smtp2go.com/hc/en-gb/articles/900002237106" target="_blank">(What\'s this?)</a></small>' +
      '<p style="font-size:13px;"> Enable click tracking to find out when a recipient has clicked a link in an email.</p>' +
      "</div>" +
      "</div>";

    // Status bits
    var userStatusAllowed =
      user !== null
        ? user.mail === null
          ? true
          : user.mail != "BLOCKED"
        : true;
    var userEnabled =
      user !== null ? (user.enabled === null ? true : user.enabled) : true;
    var userSandboxMode = user !== null ? user.sandboxed : false;

    var userStatus = "allowed";
    if (!userStatusAllowed) {
      userStatus = "blocked";
    }
    if (userSandboxMode) {
      userStatus = "sandboxed";
    }

    // work out a nice display for the disable message
    var userType = "SMTP user";
    if (what === "ipaddr") {
      userType = "IP address";
    } else if (what === "apikey") {
      userType = "API key from sending emails";
    }

    // content info messages
    var contentMessages = {
      allowed: 'Sending is <span class="emphasis green">allowed</span>.',
      blocked: 'Sending is <span class="emphasis red">denied</span>.',
      sandboxed:
        'Sending is <span class="emphasis green">allowed</span>, but <span class="emphasis orange">emails won\'t be delivered</span> to the recipient.<ul class="dropdown-info-list"><li>Emails will show on your Activity page with a <span class="extra-strong">Rejected</span> status.</li><li>Emails will still be delivered to any email addresses using the <span class="extra-strong">Email Auditing</span> feature.</li></ul>',
    };

    content +=
      '<div class="form-group no-margin-bottom is-expanded">' +
      '<input type="hidden" name="smtp_enabled" value="' +
      userStatus +
      '"/>' +
      '<label class="col-md-3 control-label new-label">User&nbsp;Status</label>' +
      '<div class="form-group-item col-md-9">' +
      '<div class="app-dropdown-wrapper">' +
      '<div class="user-mode-dropdown mode-dropdown-select is-active">' +
      '<span class="selected" style="text-transform:capitalize">' +
      userStatus +
      "</span>" +
      "</div>" +
      '<dl class="mode-dropdown-option is-active">' +
      '<div class="dropdown-item blue ' +
      (userStatus == "allowed" ? "is-active" : "") +
      '">' +
      "<dt>Allowed</dt>" +
      '<dd>Sending is <span class="emphasis green">allowed</span>.' +
      '<span class="hide">' +
      contentMessages["allowed"] +
      "</span></dd>" +
      "</div>" +
      '<div class="dropdown-item red ' +
      (userStatus == "blocked" ? "is-active" : "") +
      '">' +
      "<dt>Blocked</dt>" +
      '<dd>Sending is <span class="emphasis red">denied</span>.' +
      '<span class="hide">' +
      contentMessages["blocked"] +
      "</span></dd>" +
      "</div>" +
      '<div class="dropdown-item orange ' +
      (userStatus == "sandboxed" ? "is-active" : "") +
      '">' +
      "<dt>Sandboxed</dt>" +
      '<dd>Sending is <span class="emphasis green">allowed</span>, but <span class="emphasis orange">emails won\'t be delivered</span>, and will show as Rejected. Email Auditing still functions.' +
      '<span class="hide">' +
      contentMessages["sandboxed"] +
      "</span></dd>" +
      "</div>" +
      "</dl>" +
      '<div class="mode-dropdown-info mode-dropdown-api">' +
      (userStatus == "allowed" ? contentMessages["allowed"] : "") +
      (userStatus == "blocked" ? contentMessages["blocked"] : "") +
      (userStatus == "sandboxed" ? contentMessages["sandboxed"] : "") +
      "</div>" +
      "</div>" + // app-dropdown-wrapper
      "</div>" + // form-group-item
      "</div>"; // form-group

    tracking_tab.append($(content));
    if (open_tracking_enabled) {
      tracking_tab
        .find('input[name="open_tracking_enabled"]')
        .prop("checked", true);
      tracking_tab
        .find('input[name="open_tracking_enabled"]')
        .parent(".inline-checkbox")
        .removeClass("is-closed")
        .addClass("is-open");
    }
    if (click_tracking_enabled) {
      tracking_tab
        .find('input[name="click_tracking_enabled"]')
        .prop("checked", true);
      tracking_tab
        .find('input[name="click_tracking_enabled"]')
        .parent(".inline-checkbox")
        .removeClass("is-closed")
        .addClass("is-open");
    }

    if (audit_email !== null) {
      archive_tab.find('input[name="audit_email"]').val(audit_email);
    }

    // augment the tab-content with a custom class to control half size tab-content ( ie. hidden elements )
    var tab_content_aug = "";
    if (!archive_opts_visible) {
      // archiving is disabled, height needs to be less
      tab_content_aug = " min";
    }

    //submit
    page
      .append(
        $("<div></div>")
          .addClass("tab-content" + tab_content_aug)
          .append(details_tab)
          .append(permissions_tab)
          .append(unsub_tab)
          .append(tracking_tab)
          .append(archive_tab),
      )
      .append(
        $("<div></div>")
          .addClass("form-group modal-body-footer")
          .append(
            what === "apikey"
              ? '<span>Check out our <a href="https://developers.smtp2go.com/" target="_blank">API Documentation</a> if you\'re unsure about any options</label></span>'
              : "",
            $("<input></input>")
              .prop("type", "button")
              .addClass("smtp-modal-save btn blue")
              .val("Save")
              .data("method", method)
              .data("what", what),
          ),
      );
    wrapper.append(page);

    Custom.bb = bootbox.dialog({
      title: title,
      message: wrapper,
      //message : message,
    });

    // once the bb is shown add the code to control the permissions groups
    if (what === "apikey") {
      api_users_initialise_permissions(user);
    }

    // show the drop-down if it's got more than just 'default'
    if (Custom.unsub_domains.length > 1) {
      $("#unsub_dd").css("display", "block");
    }

    if (
      user &&
      "password" in user &&
      user.password !== null &&
      user.password.length >= 1
    )
      $(".password-gen").addClass("hide");
    else $(".password-gen").removeClass("hide");

    // little hacky but bootbox modal doesn't work with ClipboardJS because of tabindex having negative value.
    $(".copy-button-modal").click(function () {
      navigator.clipboard.writeText($(this).prev().val());
    });
  };

  // handle SMTP/IPAuth/APIKey modal 'Save' button
  $(document).on("click", ".smtp-modal-save", function () {
    // grab the data-what and data-method fields
    var savewhat = $(this).data("what");
    var method = $(this).data("method");

    // figure out endpoint to hit based on what
    var endpoint = savewhat === "ipaddr" ? "IP Authentication" : "SMTP Users";
    endpoint = savewhat === "apikey" ? "API Keys" : endpoint;

    // hit the endpoint with ajax using the appropriate method
    HTML.ajax(
      method,
      END_POINTS.urls()[endpoint] + "?ignoreme=" + Custom.getid(),
      $("#smtp-user-edit").serialize(),
      function (data) {
        if (data["status"] == "OK") {
          $("#smtp-user-list > tbody").empty();
          Custom.setHeaders(data);
          for (var i = 0; i < data.results.users.length; i++) {
            Custom.addSmtp(data.results.users[i], data);
          }
          Custom.tableChange();
          Custom.bb.modal("hide");
          Custom.bb = null;
          HTML.alertUser(HTML.alertType.success, data["message"]);
        } else {
          Custom.bb.modal("show");
          setTimeout(HTML.handleError, 500, data, null, ".modal-error");
        }
      },
      true,
      "Loading...",
    );
  });

  $(document).on("change", ".pool_default", function (e) {
    var poolSelect = $('select[name="ippool"]');
    poolSelect.prop("disabled", !poolSelect.prop("disabled"));
    if (poolSelect.prop("disabled")) {
      poolSelect.val($(this).attr("data-default-pool"));
    }
  });

  $(document).on("click", ".users-smtp-edit", function (e) {
    var target = $($(e.target)[0]);
    var what = target.data("what");
    var id = target.data("name");
    var $this = $(this);

    // sanitize id to null if anything not an id
    if (id === undefined || id.length === 0) {
      id = null;
    }

    if (what == "salesforce-newuser" || what === undefined) {
      var url;
      if (id) {
        url = END_POINTS.urls()["SMTP Users"] + "?edit=" + id + Custom.getid();
      } else if (what) {
        url = END_POINTS.urls()["SMTP Users"] + "?new=" + what + Custom.getid();
      } else {
        url = END_POINTS.urls()["SMTP Users"] + "?" + Custom.getid();
      }
      var request = HTML.ajax("GET", url, null, null, true, "Loading...");
      request.success(function (data) {
        if (data.status == "OK") {
          data.message = null;
          HTML.set_time(data);
          smtp_box(data);
          $(".bootbox").addClass("users-modal");

          if ($this.hasClass("btn")) {
            $(".users-modal")
              .find(".password-show-hide")
              .removeClass("is-hidden")
              .addClass("is-shown");
          }

          if (what == "salesforce-newuser") {
            $(".form-horizontal").before(
              '<p>Follow the step-by-step instructions for Salesforce integration with our <a target="_blank" href="https://www.smtp2go.com/setupguide/salesforce/" >Salesforce setup guide</a>. Use the activation email shown below as part of the setup process.</p>',
            );

            $(".users-modal").addClass("salesforce-modal");
          }
          $(".modal-footer > .btn-primary").text("Save");
        } else {
          HTML.handleError(data);
        }
      });
    } else if (id !== null && what === "ipaddr") {
      var request = HTML.ajax(
        "GET",
        END_POINTS.urls()["IP Authentication"] +
          "?username=" +
          id +
          Custom.getid(),
        null,
        null,
        true,
        "Loading...",
      );
      request.success(function (data) {
        if (data.status == "OK") {
          data.message = null;
          HTML.set_time(data);
          smtp_box(data, what);
          $(".bootbox").addClass("users-modal");
        }
      });
    } else if (what === "apikey") {
      if (id === null) {
        id = "";
      }
      var request = HTML.ajax(
        "GET",
        END_POINTS.urls()["API Keys"] + "?username=" + id + Custom.getid(),
        null,
        null,
        true,
        "Loading...",
      );
      request.success(function (data) {
        if (data.status == "OK") {
          data.message = null;
          HTML.set_time(data);
          smtp_box(data, what);
          $(".bootbox").addClass("users-modal");
        }
      });
    } else {
      smtp_box(null, what);
      $(".bootbox").addClass("users-modal");
    }
  });

  $(document).on("click", "#ip-auth .inspect-problem", function () {
    bootbox.dialog({
      title: "Unusual Activity",
      message:
        "<p>We have detected unusual activity (possibly spam) originating from this IP address. Be sure to check the Spam and Bounces pages under the ‘Reports’ section of this web app to help identify any sources of spam, and then put measures in place to stop it being sent.</p><p.You must fix the underlying problem before reactivating this IP address. You can alternatively choose to delete this IP address.</p>",
      buttons: {
        save: {
          label: "I fixed the problem",
          className: "btn blue",
        },
        remove: {
          label: "Delete",
          className: "btn red",
        },
      },
    });
  });

  // Custom DKIM Verify bootbox

  $(document).on("click", "#custom-dkim .verifiable", function () {
    bootbox.dialog({
      title: "Verify this domain",
      message:
        "<p>To authenticate emails for your domain using SPF and DKIM, Mandrill requires you to verify your domain. By verifying your domain, you confirm ownership of that domain and prevent other Mandrill accounts from sending mail authenticated by your domain. Once you verify a domain, other Mandrill users cannot have their emails signed by that domain unless they also verify it.</p><p>Enter an email address for the domain you wish to verify. We’ll send a confirmation email with a link to confirm ownership.</p>" +
        '<input type="text" class="form-control" placeholder="Your email address">',
      buttons: {
        save: {
          label: "Send Verification Email",
          className: "btn blue",
        },
      },
    });
  });

  // Custom DKIM Setup Instructions

  $(document).on("click", "#custom-dkim .instructions", function () {
    bootbox.dialog({
      title: "Setup Instructions",
      message: "Instructions modal",
      buttons: {
        save: {
          label: "Got it",
          className: "btn blue",
        },
      },
    });
  });

  // Dedicated IPs New IP Address bootbox

  $(document).on("click", "#dedicated-ips .add-ip", function () {
    bootbox.dialog({
      title: "Add an IP address",
      message:
        "<p>Each dedicated IP address is charged at $29 per month. If you add an IP address part way through your billing month, you will only be charged for the relevant portion of that month.</p>" +
        '<table><thead><tr><th>Price</th><th>Quantity</th><th class="right">Total</th></tr></thead><tbody><tr><td class="right">$29</td><td><select><option>1</option></td><td>$29</td></tr></tbody></table>',
      buttons: {
        save: {
          label: "Purchase",
          className: "btn blue dedicated-ip-purchase",
          callback: function () {
            $(
              '<tr class="created"><td data-title="IP Address"><span>New One</span></td><td class="table-action"><a href="#" class="table-remove">&times; Remove</a></td></tr>',
            ).prependTo($('.card[data-pool="main"] table tbody'));
            $(".created").animate(
              { backgroundColor: "#FFFFFF" },
              1000,
              function () {
                $(".created").removeClass("created").removeAttr("style");
              },
            );
          },
        },
      },
    });
  });

  // Dedicated IPs New Pool bootbox

  $(document).on("click", "#dedicated-ips .add-pool", function () {
    bootbox.dialog({
      title: "Add an IP Pool",
      message:
        "<p>A description of what a pool is and how it costs nothing goes here.</p>" +
        '<form class="form-horizontal"><div class="form-group"><label class="col-md-4 control-label new-label">Pool Name</label><div class="col-md-5"><input type="text" class="form-control input-md pool-name"></div></div></form>',
      buttons: {
        save: {
          label: "Add Pool",
          className: "btn blue dedicated-ip-pool",
          callback: function () {
            var poolname = $(".pool-name").val();
            $(
              '<article class="card" data-pool="test-pool"><div class="table-action pool-action"><a href="#" class="table-remove pool-remove">× Remove</a></div><h2 class="card--title is-underlined">' +
                poolname +
                '</h2><table><thead><tr><th colspan="2">IP Address</th></tr></thead><tbody></tbody></table></article>',
            ).appendTo($("#dedicated-ips"));
          },
        },
      },
    });
  });

  // Dedicated IPs Drag & Drop Addresses

  if ($(window).width() < 768) {
    // Smaller than 768
  } else {
    // Larger than 768
    var isDown = false;
    var isOver = false;
    $(document).on(
      "mousedown",
      '#dedicated-ips tbody tr td[data-title="IP Address"] span',
      function (e) {
        $("body").addClass("dragging");
        $(this).addClass("floating");
        $("table").addClass("floating-droppable-area");
        $(this)
          .parent()
          .parent()
          .parent()
          .parent()
          .removeClass("floating-droppable-area");
        $(".floating-droppable-area").before(
          '<div class="drop-ip-address-here">Drop IP address here</div>',
        );
        isDown = true;
      },
    );

    $(document).on("mouseover", ".drop-ip-address-here", function () {
      $(".drop-ip-address-here").addClass("highlighted");
      $(this).addClass("ready");
      isOver = true;
    });

    $(document).on("mouseleave", ".drop-ip-address-here", function () {
      $(".drop-ip-address-here").removeClass("highlighted");
      $(this).removeClass("ready");
      isOver = false;
    });

    $(document).on("mouseup", "#dedicated-ips", function () {
      if (isOver == true) {
        row = $(".floating").parent().parent();
        row.detach();

        $(".ready").parent().find("table").prepend(row);
        isOver = false;
        $(".floating").parent().parent().addClass("created");
        $(".created").animate(
          { backgroundColor: "#FFFFFF" },
          1000,
          function () {
            $(".created").removeClass("created").removeAttr("style");
          },
        );
      }

      $("body").removeClass("dragging");
      $(".floating").removeClass("floating");
      $("table").removeClass("floating-droppable-area");
      $(".drop-ip-address-here").remove();
      $(".highlighted").removeClass("highlighted");
    });

    $(document).on("mousemove", function (e) {
      $(".floating").css({
        left: e.pageX + 10,
        top: e.pageY,
      });
    });
  }

  // Email Testing textarea toggle

  $(document).on("click", "#email-testing .paste--html", function () {
    $(".paste").removeClass("is-text").addClass("is-html");
    $(".paste--html").addClass("paste--active");
    $(".paste--text").removeClass("paste--active");
  });

  $(document).on("click", "#email-testing .paste--text", function () {
    $(".paste").addClass("is-text").removeClass("is-html");
    $(".paste--html").removeClass("paste--active");
    $(".paste--text").addClass("paste--active");
  });

  // Email Testing inline label selection

  $(document).on("click", ".inner-label label", function () {
    $(this).parent().find("input").focus();
  });

  // Email Testing Preview bootbox

  $(document).on("click", "#email-testing .preview", function () {
    bootbox.dialog({
      title: "Preview this email in your inbox",
      message:
        "<p>Check how your email looks in your own inbox.<br>Where shall we send your preview?</p>" +
        '<input type="text" class="form-control" placeholder="Your email address" value="email@inyouraccount.com">',
      buttons: {
        save: {
          label: "Send it to me",
          className: "btn blue",
        },
      },
    });
  });

  // Email Testing Spam Test bootbox

  $(document).on("click", "#email-testing .filter", function () {
    bootbox.dialog({
      title: "Run a Spam Filter Test",
      message:
        "<p>Find out if your recipients will actually receive your emails. Improve your email delivery with this spam test, and see exactly how popular spam filters will respond to your email.</p>" +
        "<table><thead><tr><th>Test Type</th><th>Price</th><th>Total</th></tr></thead><tbody><tr><td>Spam Test</td><td>$1.00</td><td>$1.00</td></tr></tbody></table>" +
        '<p class="boot-print">Spam Tests are powered by Litmus.</p>',
      buttons: {
        save: {
          label: "Submit Test",
          className: "btn blue",
        },
      },
    });
  });

  // Email Testing Screenshot Test bootbox

  $(document).on("click", "#email-testing .screenshot", function () {
    bootbox.dialog({
      title: "Run a Screenshot Test",
      message:
        "<p>Different email apps display emails in different ways. This screenshot test will show you exactly how different email apps will display your email, to make sure things look right for everyone.</p>" +
        "<table><thead><tr><th>Test Type</th><th>Price</th><th>Total</th></tr></thead><tbody><tr><td>Screenshot Test</td><td>$2.00</td><td>$2.00</td></tr></tbody></table>" +
        '<p class="boot-print">Screenshot Tests are powered by Litmus.</p>',
      buttons: {
        save: {
          label: "Submit Test",
          className: "btn blue",
        },
      },
    });
  });
});
