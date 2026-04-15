// allow this to be used on other non riot enabled pages
if (typeof riot !== "undefined") {
  // Enable <raw content="{variable}"></raw> tags globally
  // to allow HTML to be injected
  riot.tag("raw", "<span></span>", function (opts) {
    this.updateContent = function () {
      if (typeof opts.content === "string") {
        this.root.innerHTML = opts.content;
      } else if (typeof opts.newline_content === "string") {
        this.root.innerHTML = opts.newline_content.replace("\n", "<br/>");
      }
    };
    this.on("update", function () {
      this.updateContent();
    });
    this.updateContent();
  });
}

// Simple mixin that allows for logs to be centralized across tags
var TagLogMixin = function (enabled, tagName) {
  var _enabled = enabled;
  var _tagName = tagName;

  var _build_args = function (p_args) {
    var ret = [_tagName];
    for (var i = 0; i < p_args.length; ++i) {
      ret.push(p_args[i]);
    }
    return ret;
  };

  return {
    init: function (opts) {
      if (_enabled) {
        this.on("*", function (eventName) {
          console.log(_tagName, eventName);
        });
      }
    },
    log: function () {
      if (_enabled) {
        console.log.apply(console, _build_args(arguments));
      }
    },
    info: function () {
      if (_enabled) {
        console.info.apply(console, _build_args(arguments));
      }
    },
    warn: function () {
      if (_enabled) {
        console.warn.apply(console, _build_args(arguments));
      }
    },
    error: function () {
      if (_enabled) {
        console.error.apply(console, _build_args(arguments));
      }
    },
  };
};

// HelperMixin contains a bunch of helper methods that can be shared amonst tags
var HelperMixin = function () {
  return {
    clearNotice: function () {
      $("#user-error-alert").removeClass(
        "is-active success error warning info visible",
      );
    },

    // get a start/end unix timestamp for searching that factors in users timezone
    getUnixSecsRangeByDays: function (nDays, client_timezone) {
      // work out the client_timezone offset in unix secs
      var tz = moment.tz.guess();
      try {
        if (client_timezone !== undefined && client_timezone !== null) {
          tz = moment.tz(client_timezone).tz();
        }
      } catch (e) {}
      if (client_timezone !== undefined) {
        return {
          start: moment
            .tz(tz)
            .subtract(nDays, "days")
            .startOf("day")
            .utc()
            .unix(),
          end: moment.tz(tz).endOf("day").utc().unix(),
        };
      } else {
        return {
          start: moment.utc().subtract(nDays, "days").startOf("day").unix(),
          end: moment.utc().endOf("day").unix(),
        };
      }
    },

    getUnixSecs: function (date, clientTimezone) {
      var tz;

      if (clientTimezone !== undefined && clientTimezone !== null) {
        tz = clientTimezone;
      } else {
        tz = moment.tz.guess();
      }

      return date.clone().tz(tz, true).unix();
    },

    // get a start/end unix timestamp for searching that factors in users timezone
    getUnixSecsRangeBetweenDatesUTC: function (from, to) {
      var fromDate = moment.utc(from, "MM/DD/YYYY").startOf("day").unix();
      var toDate = moment.utc(to, "MM/DD/YYYY").endOf("day").unix();

      var ret = {
        start: fromDate,
        end: toDate,
      };

      // otherwise just return the timestamps
      return ret;
    },

    // get a start/end unix timestamp for searching that factors in users timezone
    getUnixSecsRangeBetweenDates: function (from, to, client_timezone) {
      // work out the client_timezone offset in unix secs
      var guessedTZ = moment.tz.guess();
      if (client_timezone !== undefined && client_timezone !== null) {
        tz = moment.tz(client_timezone);
      } else {
        tz = moment.tz(guessedTZ);
      }
      var tzOffset = tz._offset * 60;

      var fromDate =
        moment.utc(from, "MM/DD/YYYY").startOf("day").unix() + tzOffset;
      var toDate = moment.utc(to, "MM/DD/YYYY").endOf("day").unix() + tzOffset;

      var ret = {
        start: fromDate,
        end: toDate,
      };

      // otherwise just return the timestamps
      return ret;
    },
  };
};

// Simple mixin to make backend requests and recieve results
var AJAXBackendMixin = function () {
  var _activeRequests = 0;
  var _tag = null;

  var _isFunction = function (obj) {
    return Object.prototype.toString.call(obj) == "[object Function]";
  };

  // make the actual request, used by the GET/POST/PUT/DELETE wrappers
  var _makeRequest = function (
    method,
    endpoint,
    action,
    payload,
    successCB,
    failedCB,
    quietRequest,
  ) {
    if (_tag.log !== undefined) {
      _tag.log("AJAXBackendMixin." + method + "(", payload, ")");
    }

    // quietRequest if set to true, doesn't modify the activeRequest counter
    if (quietRequest === undefined || quietRequest === null) {
      quietRequest = false;
    }

    // spin up an ajax request to the backend
    $.ajax(
      END_POINTS.urls()[endpoint] +
        "?action=" +
        encodeURIComponent(action) +
        "&CSRF_key=" +
        encodeURIComponent(HTML.csrfkey),
      {
        method: method,
        data: payload,
        complete: function (xhr, status) {
          // check if the tag has the TagLogMixin
          if (_tag.log !== undefined) {
            _tag.log(
              method + "(" + endpoint + ")[" + action + "] complete <",
              status,
              xhr,
              ">",
            );
          }

          if (status == "success") {
            // set this before any callbacks
            if (!quietRequest) {
              _activeRequests--;
            }

            try {
              // success doesn't always mean it's worked
              if ("error" in xhr.responseJSON && _isFunction(failedCB)) {
                failedCB(xhr);
              } else {
                // if successCB is somethign attempt to call it
                if (_isFunction(successCB)) {
                  successCB(xhr);
                }
              }
            } catch (err) {
              console.error("encountered error in AJAXBackendMixin, err:", err);
            }

            // update and return
            if (_tag.update !== undefined) {
              _tag.update();
            }
            return;
          } else {
            // decrement the counter
            if (!quietRequest) {
              _activeRequests--;
            }

            try {
              // otherwise fire off the failed one
              if (_isFunction(failedCB)) {
                failedCB(xhr);
              }
            } catch (err) {
              console.error("encountered error in AJAXBackendMixin, err:", err);
            }

            // update and return
            if (_tag.update !== undefined) {
              _tag.update();
            }
            return;
          }
        },
      },
    );

    // set the flag and update the tag
    if (!quietRequest) {
      _activeRequests++;
    }
    if (_tag.update !== undefined) {
      _tag.update();
    }
  };

  return {
    // initialise the mixin whilst saving off the tag
    init: function (opts) {
      _tag = this;
    },

    // hasActiveRequests returns true/false based on the _activeRequests counter
    hasActiveRequests: function () {
      return _activeRequests > 0;
    },

    // GET perform a get request to the url specified, passing an optional action/payload
    GET: function (
      endpoint,
      action,
      payload,
      successCB,
      failedCB,
      quietRequest,
    ) {
      return _makeRequest(
        "GET",
        endpoint,
        action,
        payload,
        successCB,
        failedCB,
        quietRequest,
      );
    },

    // POST perform a post request to the url specified, passing an optional action/payload
    POST: function (
      endpoint,
      action,
      payload,
      successCB,
      failedCB,
      quietRequest,
    ) {
      return _makeRequest(
        "POST",
        endpoint,
        action,
        payload,
        successCB,
        failedCB,
        quietRequest,
      );
    },

    // PUT perform a put request to the url specified, passing an optional action/payload
    PUT: function (
      endpoint,
      action,
      payload,
      successCB,
      failedCB,
      quietRequest,
    ) {
      return _makeRequest(
        "PUT",
        endpoint,
        action,
        payload,
        successCB,
        failedCB,
        quietRequest,
      );
    },

    // DELETE perform a delete request to the url specified, passing an optional action/payload
    DELETE: function (
      endpoint,
      action,
      payload,
      successCB,
      failedCB,
      quietRequest,
    ) {
      return _makeRequest(
        "DELETE",
        endpoint,
        action,
        payload,
        successCB,
        failedCB,
        quietRequest,
      );
    },

    incrementActiveRequest: function () {
      _activeRequests++;
    },

    decrementActiveRequest: function () {
      _activeRequests--;
    },
  };
};

// Simple datastore that allows for data to be centralized across tags
var DataStoreMixin = function () {
  _data_store_mixin_data = {};

  return {
    init: function (opts) {},
    set: function (key, data) {
      _data_store_mixin_data[key] = data;
    },
    get: function (key, def) {
      var v = _data_store_mixin_data[key];
      if (v === undefined) {
        return def;
      }
      return v;
    },
  };
};

// Simple cross tag observable Mixin
var ObservableMixin = function () {
  _observable_mixin_data = {
    internal: riot.observable(),
  };
  return {
    observer: function () {
      return _observable_mixin_data.internal;
    },
  };
};
