var LayoutSubaccounts = (function () {
  var requestInFlight = false;

  var getAnchor = function (e) {
    var anchor = $(e.currentTarget);
    if (!anchor.length) {
      anchor = $(e.target).closest("a");
    }
    return anchor;
  };

  var getLoginAs = function (anchor) {
    return anchor.attr("data-login-as") || anchor.attr("value");
  };

  var getRedirectUrl = function (data, fallbackUrl) {
    if (data && data.results && data.results.goto) {
      return data.results.goto;
    }
    if (data && data.url) {
      return data.url;
    }
    return fallbackUrl;
  };

  var switchAccount = function (anchor, payload, fallbackUrl) {
    if (requestInFlight || anchor.closest("li").hasClass("logged-in")) {
      return false;
    }

    if (!payload.LOGIN_AS) {
      HTML.handleError({
        error:
          "Unable to switch subaccounts right now. Please refresh and try again.",
      });
      return false;
    }

    requestInFlight = true;
    anchor.addClass("is-loading");

    var resp = HTML.ajax(
      "post",
      END_POINTS.urls()["Login"],
      payload,
      null,
      false,
      "Loading...",
    );
    resp.success(function (data) {
      HTML.set_time(data, null, true);
      window.location = getRedirectUrl(data, fallbackUrl);
    });
    resp.always(function () {
      requestInFlight = false;
      anchor.removeClass("is-loading");
    });

    return false;
  };

  var get_contents = function () {
    jQuery.support.cors = true;
    var search = $("#subaccount_search");
    var listElements = $("#subaccount_list > li");

    if (!search.length || !listElements.length) {
      return;
    }

    listElements.each(function () {
      var listItem = $(this);
      listItem.attr("data-search-text", listItem.text().toUpperCase());
    });

    // Add a filter listener based on search input
    search
      .off(".layoutSubaccounts")
      .on("click.layoutSubaccounts", function (event) {
        event.stopPropagation();
      })
      .on("input.layoutSubaccounts keyup.layoutSubaccounts", function () {
        var searchText = this.value.toUpperCase();

        if (!searchText) {
          listElements.show();
          return;
        }

        listElements.each(function () {
          var listItem = $(this);
          var matches =
            (listItem.attr("data-search-text") || "").indexOf(searchText) !==
            -1;
          listItem.toggle(matches);
        });
      });
  };

  return {
    init: function () {
      HTML.general();
      get_contents();
    },

    handlelogin: function (e) {
      e.preventDefault();
      e.stopPropagation();
      var anchor = getAnchor(e);
      var payload = {};
      payload.LOGIN_AS = getLoginAs(anchor);
      payload.STACK = "STACK";
      return switchAccount(
        anchor,
        payload,
        Globals.BACKEND + END_POINTS.fronts()["Account Summary"],
      );
    },

    handleback: function (e) {
      e.preventDefault();
      e.stopPropagation();
      var anchor = getAnchor(e);
      var payload = {};
      payload.LOGIN_AS = getLoginAs(anchor);
      payload.TO_MASTER = payload.LOGIN_AS;

      return switchAccount(anchor, payload, "/settings/subaccounts/");
    },
  };
})();
