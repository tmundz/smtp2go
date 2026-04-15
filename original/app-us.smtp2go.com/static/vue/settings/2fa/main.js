(function (t) {
  function e(e) {
    for (
      var s, r, a = e[0], c = e[1], u = e[2], _ = 0, p = [];
      _ < a.length;
      _++
    )
      ((r = a[_]),
        Object.prototype.hasOwnProperty.call(o, r) && o[r] && p.push(o[r][0]),
        (o[r] = 0));
    for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (t[s] = c[s]);
    l && l(e);
    while (p.length) p.shift()();
    return (i.push.apply(i, u || []), n());
  }
  function n() {
    for (var t, e = 0; e < i.length; e++) {
      for (var n = i[e], s = !0, a = 1; a < n.length; a++) {
        var c = n[a];
        0 !== o[c] && (s = !1);
      }
      s && (i.splice(e--, 1), (t = r((r.s = n[0]))));
    }
    return t;
  }
  var s = {},
    o = { app: 0 },
    i = [];
  function r(e) {
    if (s[e]) return s[e].exports;
    var n = (s[e] = { i: e, l: !1, exports: {} });
    return (t[e].call(n.exports, n, n.exports, r), (n.l = !0), n.exports);
  }
  ((r.m = t),
    (r.c = s),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      ("undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 }));
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var s in t)
          r.d(
            n,
            s,
            function (e) {
              return t[e];
            }.bind(null, s),
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return (r.d(e, "a", e), e);
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = "/"));
  var a = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = a.push.bind(a);
  ((a.push = e), (a = a.slice()));
  for (var u = 0; u < a.length; u++) e(a[u]);
  var l = c;
  (i.push([0, "chunk-vendors"]), n());
})({
  0: function (t, e, n) {
    t.exports = n("56d7");
  },
  "00d4": function (t, e, n) {},
  "077a": function (t, e, n) {
    "use strict";
    n("5712");
  },
  "09aa": function (t, e, n) {
    "use strict";
    n("00d4");
  },
  "15f3": function (t, e, n) {
    "use strict";
    n("74ac");
  },
  "180a": function (t, e, n) {
    "use strict";
    n("8e02");
  },
  2043: function (t, e, n) {},
  "263f": function (t, e, n) {},
  "2b99": function (t, e, n) {
    "use strict";
    n("5094");
  },
  "437c": function (t, e, n) {},
  4535: function (t, e, n) {
    "use strict";
    n("2043");
  },
  5094: function (t, e, n) {},
  5155: function (t, e, n) {},
  "56d7": function (t, e, n) {
    "use strict";
    n.r(e);
    (n("cadf"), n("551c"), n("f751"), n("097d"));
    var s,
      o,
      i = n("2b0e"),
      r = n("2b27"),
      a = n.n(r),
      c = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { attrs: { id: "app" } },
          [
            n("DisplayMessage"),
            n(
              "transition",
              { attrs: { name: "page-fade", mode: "out-in" } },
              [
                t.isSecurityCheckPassed
                  ? [
                      "main" === t.activePage
                        ? n("main-page", {
                            attrs: {
                              services: t.services,
                              primaryAuth: t.primaryAuth,
                            },
                            on: {
                              updatePrimaryAuth: t.updatePrimaryAuth,
                              setPage: t.setPage,
                              disableService: t.disableService,
                              requestToDisable2FA: t.requestDisableBoth2FA,
                            },
                          })
                        : n(
                            t.pageComponents[
                              t.services[t.activePage].pageComponent
                            ],
                            {
                              tag: "component",
                              attrs: {
                                id: t.activePage,
                                serviceData: t.services[t.activePage],
                              },
                              on: {
                                setPage: t.setPage,
                                showPopup: t.showPopup,
                              },
                            },
                          ),
                    ]
                  : n("div", { key: "splash", staticClass: "info-splash" }, [
                      n("figure", [
                        n("img", {
                          attrs: {
                            src: "/static/smtp2go_assets/splash-2fa.png",
                            srcset:
                              "/static/smtp2go_assets/splash-2fa@2x.png 2x",
                            alt: "key",
                            width: "86",
                            height: "65",
                          },
                        }),
                      ]),
                      n("h2", [t._v("Security Check")]),
                      n("p", { staticClass: "lead-in" }, [
                        t._v(
                          "Please confirm your password to edit your 2FA settings:",
                        ),
                      ]),
                      n(
                        "form",
                        {
                          staticClass: "splash-form",
                          on: {
                            submit: function (e) {
                              return (
                                e.preventDefault(),
                                t.checkPassword.apply(null, arguments)
                              );
                            },
                          },
                        },
                        [
                          n("div", [
                            n("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.password,
                                  expression: "password",
                                },
                              ],
                              ref: "passwordInput",
                              staticClass:
                                "form-control input-md password-input",
                              attrs: {
                                type: "password",
                                placeholder: "Your password",
                              },
                              domProps: { value: t.password },
                              on: {
                                input: function (e) {
                                  e.target.composing ||
                                    (t.password = e.target.value);
                                },
                              },
                            }),
                          ]),
                          n(
                            "div",
                            [
                              n(
                                "button-input",
                                { attrs: { type: "submit", variant: "blue" } },
                                [t._v("\n            Continue\n          ")],
                              ),
                            ],
                            1,
                          ),
                        ],
                      ),
                    ]),
              ],
              2,
            ),
            n("div", {
              staticClass: "modal-backdrop fade",
              class: { in: null != t.activePopup },
              on: {
                click: function (e) {
                  return e.target !== e.currentTarget
                    ? null
                    : t.hidePopup.apply(null, arguments);
                },
              },
            }),
            n(
              "div",
              {
                staticClass: "modal-dialog modal-confirm",
                class: { "is-active": "exit" === t.activePopup },
              },
              [
                n(
                  "button",
                  {
                    staticClass: "bootbox-close-button close",
                    attrs: { type: "button" },
                    on: { click: t.hidePopup },
                  },
                  [t._v("×")],
                ),
                t._m(0),
                t._m(1),
                n(
                  "div",
                  { staticClass: "modal-footer" },
                  [
                    n(
                      "button-input",
                      {
                        attrs: { variant: "blue" },
                        on: { click: t.hidePopup },
                      },
                      [t._v("\n        Continue editing\n      ")],
                    ),
                    n(
                      "button-input",
                      {
                        attrs: { variant: "btn-outlined" },
                        on: {
                          click: function (e) {
                            return t.setPage("main");
                          },
                        },
                      },
                      [t._v("\n        Exit without saving\n      ")],
                    ),
                  ],
                  1,
                ),
              ],
            ),
            n(
              "div",
              {
                staticClass: "modal-dialog modal-confirm",
                class: { "is-active": "disable-2fa" === t.activePopup },
              },
              [
                n("div", { staticClass: "modal-body" }, [
                  n(
                    "button",
                    {
                      staticClass: "bootbox-close-button close",
                      attrs: { type: "button" },
                      on: { click: t.hidePopup },
                    },
                    [t._v("×")],
                  ),
                  t._m(2),
                  "app" == t.authToDisable
                    ? n("p", [
                        t._v(
                          "Please enter the 6-digit number provided by authenticator app to disable 2FA:",
                        ),
                      ])
                    : t._e(),
                  "sms" == t.authToDisable
                    ? n("p", [
                        t._v(
                          "SMS will be sent shortly, please enter the 6-digit number provided by SMS to disable 2FA:",
                        ),
                      ])
                    : t._e(),
                  n("div", { staticClass: "auth-code-wrapper" }, [
                    n("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.code,
                          expression: "code",
                        },
                      ],
                      ref: "codeInput",
                      staticClass: "form-control input-md code-input",
                      attrs: { type: "text" },
                      domProps: { value: t.code },
                      on: {
                        input: function (e) {
                          e.target.composing || (t.code = e.target.value);
                        },
                      },
                    }),
                  ]),
                  "sms" == t.authToDisable
                    ? n(
                        "a",
                        {
                          staticClass: "resend-sms",
                          on: { click: t.resendSMS },
                        },
                        [t._v("Resend SMS")],
                      )
                    : t._e(),
                ]),
                n(
                  "div",
                  { staticClass: "modal-footer" },
                  [
                    n(
                      "button-input",
                      {
                        attrs: { variant: "blue" },
                        on: { click: t.confirm2FADisablePopup },
                      },
                      [t._v("\n        Disable 2FA\n      ")],
                    ),
                    n(
                      "button-input",
                      {
                        attrs: { variant: "btn-outlined" },
                        on: { click: t.hidePopup },
                      },
                      [t._v("\n        Cancel\n      ")],
                    ),
                  ],
                  1,
                ),
              ],
            ),
            n("AjaxLoadingSpinner"),
            n("enforce-2fa-splash", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: t.showSplash,
                  expression: "showSplash",
                },
              ],
            }),
          ],
          1,
        );
      },
      u = [
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("header", { staticClass: "modal-header" }, [
            n("h4", [t._v("Exit without saving?")]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "modal-body" }, [
            n("p", [
              t._v(
                "Closing the editor without saving will remove all of your changes since the last save.",
              ),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("header", { staticClass: "modal-header" }, [
            n("h4", [t._v("Security check")]),
          ]);
        },
      ],
      l = (n("8e6e"), n("ac6a"), n("456d"), n("bd86")),
      _ = n("2f62"),
      p = (n("a481"), n("c46f"));
    function f(t, e) {
      return Object(p["a"])(
        e,
        function (e, n, s) {
          return (
            (e[s] = Object(p["a"])(
              n,
              function (e, n, s) {
                return ((e[s] = n.replace(t, "")), e);
              },
              {},
            )),
            e
          );
        },
        {},
      );
    }
    function d(t, e, n) {
      var s = t.indexOf("?") > -1 ? "&" : "?";
      return null !== n && void 0 !== n && n.length > 0
        ? t + s + e + "=" + encodeURIComponent(n)
        : t;
    }
    var E,
      S,
      h,
      m = "root/",
      v = {
        getters: {
          GET_IS_AJAX_RUNNING: m + "GET_IS_AJAX_RUNNING",
          GET_BACKEND_URL: m + "GET_BACKEND_URL",
          GET_END_POINTS: m + "GET_END_POINTS",
          GET_IMAGE_URLS: m + "GET_IMAGE_URLS",
          GET_SUCCESS_MESSAGE: m + "GET_SUCCESS_MESSAGE",
          GET_ERROR_MESSAGE: m + "GET_ERROR_MESSAGE",
          GET_IS_QUIET_REQUEST: m + "GET_IS_QUIET_REQUEST",
        },
        mutations: {
          SET_CSRF_KEY: m + "SET_CSRF_KEY",
          SET_END_POINTS: m + "END_POINTS",
          SET_IMAGE_URLS: m + "SET_IMAGE_URLS",
          INC_RUNNING_AJAX_REQUESTS: m + "INC_RUNNING_AJAX_REQUESTS",
          DEC_RUNNING_AJAX_REQUESTS: m + "DEC_RUNNING_AJAX_REQUESTS",
          SET_SUCCESS_MESSAGE: m + "SET_SUCCESS_MESSAGE",
          SET_ERROR_MESSAGE: m + "SET_ERROR_MESSAGE",
          CLEAR_SUCCESS_MESSAGE: m + "CLEAR_SUCCESS_MESSAGE",
          CLEAR_ERROR_MESSAGE: m + "CLEAR_ERROR_MESSAGE",
          SET_IS_QUIET_REQUEST: m + "SET_IS_QUIET_REQUEST",
        },
        actions: { UPDATE_SUCCESS_MESSAGE: m + "UPDATE_SUCCESS_MESSAGE" },
      },
      b = f(m, v),
      g = {
        running_ajax_requests: 0,
        csrf_key: "",
        end_points: {},
        image_urls: {},
        success_message: null,
        error_message: null,
        is_quiet_request: !1,
      },
      T =
        ((s = {}),
        Object(l["a"])(s, b.getters.GET_IS_AJAX_RUNNING, function (t) {
          return t.running_ajax_requests > 0;
        }),
        Object(l["a"])(s, b.getters.GET_END_POINTS, function (t) {
          return t.end_points;
        }),
        Object(l["a"])(s, b.getters.GET_BACKEND_URL, function (t) {
          return function (e, n) {
            var s = d(t.end_points[e], "action", n);
            return d(s, "CSRF_key", t.csrf_key);
          };
        }),
        Object(l["a"])(s, b.getters.GET_IMAGE_URLS, function (t) {
          return t.image_urls;
        }),
        Object(l["a"])(s, b.getters.GET_SUCCESS_MESSAGE, function (t) {
          return t.success_message;
        }),
        Object(l["a"])(s, b.getters.GET_ERROR_MESSAGE, function (t) {
          return t.error_message;
        }),
        Object(l["a"])(s, b.getters.GET_IS_QUIET_REQUEST, function (t) {
          return t.is_quiet_request;
        }),
        s),
      A =
        ((o = {}),
        Object(l["a"])(o, b.mutations.SET_CSRF_KEY, function (t, e) {
          t.csrf_key = e;
        }),
        Object(l["a"])(o, b.mutations.SET_END_POINTS, function (t, e) {
          t.end_points = e;
        }),
        Object(l["a"])(o, b.mutations.SET_IMAGE_URLS, function (t, e) {
          t.image_urls = e;
        }),
        Object(l["a"])(o, b.mutations.INC_RUNNING_AJAX_REQUESTS, function (t) {
          t.running_ajax_requests++;
        }),
        Object(l["a"])(o, b.mutations.DEC_RUNNING_AJAX_REQUESTS, function (t) {
          t.running_ajax_requests--;
        }),
        Object(l["a"])(o, b.mutations.SET_SUCCESS_MESSAGE, function (t, e) {
          t.success_message = e;
        }),
        Object(l["a"])(o, b.mutations.SET_ERROR_MESSAGE, function (t, e) {
          t.error_message = e;
        }),
        Object(l["a"])(o, b.mutations.CLEAR_SUCCESS_MESSAGE, function (t) {
          t.success_message = null;
        }),
        Object(l["a"])(o, b.mutations.CLEAR_ERROR_MESSAGE, function (t) {
          t.error_message = null;
        }),
        Object(l["a"])(o, b.mutations.SET_IS_QUIET_REQUEST, function (t, e) {
          t.is_quiet_request = e;
        }),
        o),
      O = Object(l["a"])({}, b.actions.UPDATE_SUCCESS_MESSAGE, function (t, e) {
        var n = e.success_message;
        (t.commit(b.mutations.SET_SUCCESS_MESSAGE, n),
          setTimeout(function () {
            t.commit(b.mutations.CLEAR_SUCCESS_MESSAGE);
          }, 5e3));
      }),
      C = { namespaced: !0, state: g, getters: T, mutations: A, actions: O },
      y = n("bc3a"),
      P = n.n(y),
      w = P.a.create(),
      R = function (t) {
        (w.interceptors.request.use(function (e) {
          return (
            t.commit("root/INC_RUNNING_AJAX_REQUESTS"),
            t.commit("root/CLEAR_SUCCESS_MESSAGE"),
            t.commit("root/CLEAR_ERROR_MESSAGE"),
            e
          );
        }),
          w.interceptors.response.use(
            function (e) {
              if (
                (t.commit("root/DEC_RUNNING_AJAX_REQUESTS"),
                (e = e.data),
                "error" in e)
              )
                return Promise.reject(e.error);
              var n = e.message,
                s = e.results;
              return Promise.resolve({ results: s, message: n });
            },
            function (e) {
              return (
                t.commit("root/DEC_RUNNING_AJAX_REQUESTS"),
                Promise.reject(e)
              );
            },
          ));
      },
      D = "two_factor_auth/",
      j = {
        getters: {
          GET_IS_SECURITY_CHECK_PASSED: D + "GET_IS_SECURITY_CHECK_PASSED",
          GET_SMS_NUMBER: D + "GET_SMS_NUMBER",
          GET_SERVICES: D + "GET_SERVICES",
          GET_PRIMARY_AUTH: D + "GET_PRIMARY_AUTH",
          GET_TOTP_SECRET_KEY: D + "GET_TOTP_SECRET_KEY",
          GET_TOTP_KEY: D + "GET_TOTP_KEY",
          GET_EDIT_TOKEN: D + "GET_EDIT_TOKEN",
          GET_IS_2FA_ENFORCED: D + "GET_IS_2FA_ENFORCED",
          GET_SHOW_SPLASH: D + "GET_SHOW_SPLASH",
          GET_IS_OWNER: D + "GET_IS_OWNER",
          GET_HAS_2FA: D + "GET_HAS_2FA",
        },
        mutations: {
          SET_AUTH_STATUS: D + "SET_AUTH_STATUS",
          SET_IS_SECURITY_CHECK_PASSED: D + "SET_IS_SECURITY_CHECK_PASSED",
          SET_SMS_NUMBER: D + "SET_SMS_NUMBER",
          SET_PRIMARY_AUTH: D + "SET_PRIMARY_AUTH",
          SET_EDIT_TOKEN: D + "SET_EDIT_TOKEN",
          SET_IS_2FA_ENFORCED: D + "SET_IS_2FA_ENFORCED",
          SET_SHOW_SPLASH: D + "SET_SHOW_SPLASH",
        },
        actions: {
          CHECK_PASS: D + "CHECK_PASS",
          SEND_SMS: D + "SEND_SMS",
          SEND_SMS_DISABLE: D + "SEND_SMS_DISABLE",
          VERIFY_SMS_CODE: D + "VERIFY_SMS_CODE",
          UPDATE_PRIMARY_AUTH: D + "UPDATE_PRIMARY_AUTH",
          VERIFY_APP_CODE: D + "VERIFY_APP_CODE",
          TOGGLE_2FA_ENFORCEMENT: D + "TOGGLE_2FA_ENFORCEMENT",
        },
      },
      G = f(D, j),
      M = {
        enforce2FA: !1,
        showSplash: !1,
        smsNumber: "",
        serviceID: "",
        isSecurityCheckPassed: !1,
        primaryAuth: "",
        totpSecretKey: "",
        totpKey: "",
        editToken: "",
        isOwner: !1,
        has2FA: !1,
        services: {
          sms: {
            title: "SMS Authentication",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><defs><filter id="a" width="102.3%" height="104.1%" x="-1.2%" y="-1.9%" filterUnits="objectBoundingBox"><feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1"/><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0596127717 0"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><g filter="url(#a)" transform="translate(-17 -19)" fill="#D8D8D8" stroke="#828DA0" fill-opacity=".5" fill-rule="evenodd" stroke-linejoin="round"><path d="M31.5 20.5a1 1 0 011 1v9a1 1 0 01-1 1l-1.317.001c-.038.899.142 1.646.541 2.241-1.59.157-2.778-.59-3.564-2.241L18.5 31.5a1 1 0 01-1-1v-9a1 1 0 011-1h13z"/></g></svg>',
            description:
              "Verify your phone number by setting up SMS authentication. We'll send you a text message when you log in.",
            isActive: !1,
            pageComponent: "SMSServicePage",
          },
          app: {
            title: "App Authentication",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><defs><filter id="a" width="102.2%" height="109.4%" x="-1.1%" y="-4.7%" filterUnits="objectBoundingBox"><feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1"/><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0596127717 0"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><g filter="url(#a)" transform="translate(-17 -20)" stroke="#828DA0" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><g transform="translate(19.64 19.972)"><rect width="9.675" height="15.05" x=".538" y=".537" fill="#BDC3CC" fill-opacity=".5" rx="1"/><path stroke-width="2" d="M3.763 1.075h3.225"/></g></g></svg>',
            description: "Use an authentication app of your choice to login.",
            isActive: !1,
            pageComponent: "AppServicePage",
          },
        },
      },
      k =
        ((E = {}),
        Object(l["a"])(E, G.getters.GET_SERVICES, function (t) {
          return t.services;
        }),
        Object(l["a"])(E, G.getters.GET_IS_SECURITY_CHECK_PASSED, function (t) {
          return t.isSecurityCheckPassed;
        }),
        Object(l["a"])(E, G.getters.GET_SMS_NUMBER, function (t) {
          return t.smsNumber;
        }),
        Object(l["a"])(E, G.getters.GET_PRIMARY_AUTH, function (t) {
          return t.primaryAuth;
        }),
        Object(l["a"])(E, G.getters.GET_TOTP_SECRET_KEY, function (t) {
          return t.totpSecretKey;
        }),
        Object(l["a"])(E, G.getters.GET_TOTP_KEY, function (t) {
          return t.totpKey;
        }),
        Object(l["a"])(E, G.getters.GET_EDIT_TOKEN, function (t) {
          return t.editToken;
        }),
        Object(l["a"])(E, G.getters.GET_IS_2FA_ENFORCED, function (t) {
          return t.enforce2FA;
        }),
        Object(l["a"])(E, G.getters.GET_SHOW_SPLASH, function (t) {
          return t.showSplash;
        }),
        Object(l["a"])(E, G.getters.GET_IS_OWNER, function (t) {
          return t.isOwner;
        }),
        Object(l["a"])(E, G.getters.GET_HAS_2FA, function (t) {
          return t.has2FA;
        }),
        E),
      N =
        ((S = {}),
        Object(l["a"])(S, G.mutations.SET_AUTH_STATUS, function (t, e) {
          (i["a"].set(t.services.sms, "isActive", e.sms_auth),
            i["a"].set(t.services.app, "isActive", e.app_auth),
            (t.primaryAuth = e.primary_auth),
            (t.totpSecretKey = e.totp_secret_key),
            (t.totpKey = e.totp_key),
            (t.isOwner = e.is_owner),
            (t.has2FA = t.services.sms.isActive || t.services.app.isActive));
        }),
        Object(l["a"])(
          S,
          G.mutations.SET_IS_SECURITY_CHECK_PASSED,
          function (t, e) {
            t.isSecurityCheckPassed = e;
          },
        ),
        Object(l["a"])(S, G.mutations.SET_SMS_NUMBER, function (t, e) {
          t.smsNumber = e;
        }),
        Object(l["a"])(S, G.mutations.SET_PRIMARY_AUTH, function (t, e) {
          t.primaryAuth = e;
        }),
        Object(l["a"])(S, G.mutations.SET_EDIT_TOKEN, function (t, e) {
          t.editToken = e;
        }),
        Object(l["a"])(S, G.mutations.SET_IS_2FA_ENFORCED, function (t, e) {
          t.enforce2FA = e;
        }),
        Object(l["a"])(S, G.mutations.SET_SHOW_SPLASH, function (t, e) {
          t.showSplash = e;
        }),
        S),
      I =
        ((h = {}),
        Object(l["a"])(h, G.actions.CHECK_PASS, function (t, e) {
          return new Promise(function (n, s) {
            w.post(
              t.rootGetters[v.getters.GET_BACKEND_URL](
                "Two-Factor Auth",
                "verify_auth",
              ),
              { password: e },
            )
              .then(function (e) {
                (t.commit(G.mutations.SET_AUTH_STATUS, e.results.auth_status),
                  t.commit(G.mutations.SET_IS_SECURITY_CHECK_PASSED, !0),
                  t.commit(G.mutations.SET_EDIT_TOKEN, e.results.token),
                  n(e));
              })
              .catch(function (e) {
                (t.commit("root/SET_ERROR_MESSAGE", e, { root: !0 }), s(e));
              });
          });
        }),
        Object(l["a"])(h, G.actions.SEND_SMS, function (t, e) {
          return new Promise(function (n, s) {
            (t.commit("root/SET_IS_QUIET_REQUEST", !0, { root: !0 }),
              w
                .post(
                  t.rootGetters[v.getters.GET_BACKEND_URL](
                    "Two-Factor Auth",
                    "send_2fa_sms",
                  ),
                  { edit_token: t.getters.GET_EDIT_TOKEN, sms_number: e },
                )
                .then(function (e) {
                  (t.commit(G.mutations.SET_SMS_NUMBER, e.results.sms_number),
                    t.dispatch(
                      "root/UPDATE_SUCCESS_MESSAGE",
                      { success_message: e.message },
                      { root: !0 },
                    ),
                    n(e));
                })
                .catch(function (e) {
                  (t.commit("root/SET_ERROR_MESSAGE", e, { root: !0 }), s(e));
                })
                .finally(function () {
                  t.commit("root/SET_IS_QUIET_REQUEST", !1, { root: !0 });
                }));
          });
        }),
        Object(l["a"])(h, G.actions.SEND_SMS_DISABLE, function (t) {
          return new Promise(function (e, n) {
            (t.commit("root/SET_IS_QUIET_REQUEST", !0, { root: !0 }),
              w
                .post(
                  t.rootGetters[v.getters.GET_BACKEND_URL](
                    "Two-Factor Auth",
                    "send_2fa_sms_disable",
                  ),
                  { edit_token: t.getters.GET_EDIT_TOKEN },
                )
                .then(function (n) {
                  (t.commit(G.mutations.SET_SMS_NUMBER, n.results.sms_number),
                    t.dispatch(
                      "root/UPDATE_SUCCESS_MESSAGE",
                      { success_message: n.message },
                      { root: !0 },
                    ),
                    e(n));
                })
                .catch(function (e) {
                  (t.commit("root/SET_ERROR_MESSAGE", e, { root: !0 }), n(e));
                })
                .finally(function () {
                  t.commit("root/SET_IS_QUIET_REQUEST", !1, { root: !0 });
                }));
          });
        }),
        Object(l["a"])(h, G.actions.VERIFY_SMS_CODE, function (t, e) {
          var n = e.code,
            s = e.authToDisable;
          return new Promise(function (e, o) {
            w.post(
              t.rootGetters[v.getters.GET_BACKEND_URL](
                "Two-Factor Auth",
                "verify_sms_2fa",
              ),
              {
                edit_token: t.getters.GET_EDIT_TOKEN,
                verification_code: n,
                sms_number: t.getters.GET_SMS_NUMBER,
                auth_to_disable: s,
              },
            )
              .then(function (n) {
                (t.commit(G.mutations.SET_AUTH_STATUS, n.results.auth_status),
                  t.dispatch(
                    "root/UPDATE_SUCCESS_MESSAGE",
                    { success_message: n.message },
                    { root: !0 },
                  ),
                  e(n));
              })
              .catch(function (e) {
                (t.commit("root/SET_ERROR_MESSAGE", e, { root: !0 }), o(e));
              });
          });
        }),
        Object(l["a"])(h, G.actions.UPDATE_PRIMARY_AUTH, function (t, e) {
          return new Promise(function (n, s) {
            w.post(
              t.rootGetters[v.getters.GET_BACKEND_URL](
                "Two-Factor Auth",
                "update_primary_auth",
              ),
              { edit_token: t.getters.GET_EDIT_TOKEN, primary_auth: e },
            )
              .then(function (e) {
                (t.commit(G.mutations.SET_AUTH_STATUS, e.results.auth_status),
                  t.dispatch(
                    "root/UPDATE_SUCCESS_MESSAGE",
                    { success_message: e.message },
                    { root: !0 },
                  ),
                  n(e));
              })
              .catch(function (e) {
                (t.commit("root/SET_ERROR_MESSAGE", e, { root: !0 }), s(e));
              });
          });
        }),
        Object(l["a"])(h, G.actions.VERIFY_APP_CODE, function (t, e) {
          var n = e.code,
            s = e.authToDisable;
          return new Promise(function (e, o) {
            w.post(
              t.rootGetters[v.getters.GET_BACKEND_URL](
                "Two-Factor Auth",
                "verify_app_2fa",
              ),
              {
                edit_token: t.getters.GET_EDIT_TOKEN,
                verification_code: n,
                totp_secret_key: t.getters.GET_TOTP_SECRET_KEY,
                auth_to_disable: s,
              },
            )
              .then(function (n) {
                (t.commit(G.mutations.SET_AUTH_STATUS, n.results.auth_status),
                  t.state.enforce2FA ||
                    t.dispatch(
                      "root/UPDATE_SUCCESS_MESSAGE",
                      { success_message: n.message },
                      { root: !0 },
                    ),
                  e(n));
              })
              .catch(function (e) {
                (t.commit("root/SET_ERROR_MESSAGE", e, { root: !0 }), o(e));
              });
          });
        }),
        Object(l["a"])(h, G.actions.TOGGLE_2FA_ENFORCEMENT, function (t, e) {
          var n = e.enforce_2fa;
          return (
            t.commit("root/SET_IS_QUIET_REQUEST", !0, { root: !0 }),
            new Promise(function (e, s) {
              w.post(
                t.rootGetters[v.getters.GET_BACKEND_URL](
                  "Two-Factor Auth",
                  "toggle_2fa_enforcement",
                ),
                { edit_token: t.getters.GET_EDIT_TOKEN, enforce_2fa: n },
              )
                .then(function (n) {
                  (t.commit(
                    G.mutations.SET_IS_2FA_ENFORCED,
                    n.results.enforce_2fa,
                  ),
                    e(n));
                })
                .catch(function (e) {
                  (t.commit("root/SET_IS_QUIET_REQUEST", !1, { root: !0 }),
                    s(e));
                });
            })
          );
        }),
        h),
      U = { namespaced: !0, state: M, getters: k, mutations: N, actions: I },
      x = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", [
          n(
            "div",
            {
              staticClass: "bar-notice  success",
              class: { "is-active": t.successMessage },
              attrs: { id: "user-alert" },
            },
            [
              n("span", { staticClass: "notice-icon" }),
              n("span", { staticClass: "notice-message-text" }, [
                t._v(t._s(t.successMessage)),
              ]),
              n(
                "span",
                {
                  staticClass: "button-close",
                  on: {
                    click: function (e) {
                      return t.clearSuccessMessage();
                    },
                  },
                },
                [t._v("×")],
              ),
            ],
          ),
          n(
            "div",
            {
              staticClass: "bar-notice error",
              class: { visible: t.errorMessage },
              attrs: { id: "user-error-alert" },
            },
            [
              n("span", { staticClass: "notice-icon" }),
              n("span", { staticClass: "notice-message-text" }, [
                t._v(t._s(t.errorMessage)),
              ]),
              n(
                "span",
                {
                  staticClass: "button-close",
                  on: {
                    click: function (e) {
                      return t.clearErrorMessage();
                    },
                  },
                },
                [t._v("×")],
              ),
            ],
          ),
        ]);
      },
      F = [];
    function B(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        (e &&
          (s = s.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, s));
      }
      return n;
    }
    function L(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? B(Object(n), !0).forEach(function (e) {
              Object(l["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : B(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e),
                );
              });
      }
      return t;
    }
    var H = {
        name: "DisplayMessage",
        mixins: [],
        data: function () {
          return {};
        },
        computed: L(
          {},
          Object(_["b"])({
            successMessage: v.getters.GET_SUCCESS_MESSAGE,
            errorMessage: v.getters.GET_ERROR_MESSAGE,
          }),
        ),
        methods: L(
          {},
          Object(_["c"])({
            clearSuccessMessage: v.mutations.CLEAR_SUCCESS_MESSAGE,
            clearErrorMessage: v.mutations.CLEAR_ERROR_MESSAGE,
          }),
        ),
      },
      K = H,
      Y = (n("09aa"), n("2877")),
      Q = Object(Y["a"])(K, x, F, !1, null, "6fc09dcd", null),
      $ = Q.exports,
      W = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.isAjaxRunning && !t.isQuiteRequest
          ? n("div", { staticClass: "loading" }, [
              t._m(0),
              n("div", { staticClass: "loading-backdrop" }),
            ])
          : t._e();
      },
      q = [
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "load-more load-centered" }, [
            n("div", { staticClass: "loading-spinner" }, [
              n("div", { staticClass: "loader" }, [
                n("span", { staticClass: "icon-circles" }, [
                  n("span", { staticClass: "dot-circle pending" }),
                  n("span", { staticClass: "dot-circle soft-bounced" }),
                  n("span", { staticClass: "dot-circle hard-bounced" }),
                  n("span", { staticClass: "dot-circle rejected" }),
                  n("span", { staticClass: "dot-circle spam" }),
                  n("span", { staticClass: "dot-circle delivered" }),
                  n("span", { staticClass: "dot-circle unsubscribed" }),
                  n("span", { staticClass: "dot-circle unblocked" }),
                  n("span", { staticClass: "dot-circle opened" }),
                ]),
              ]),
            ]),
          ]);
        },
      ];
    function V(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        (e &&
          (s = s.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, s));
      }
      return n;
    }
    function J(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? V(Object(n), !0).forEach(function (e) {
              Object(l["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : V(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e),
                );
              });
      }
      return t;
    }
    var X = {
        name: "AjaxLoadingSpinner",
        computed: J(
          {},
          Object(_["b"])({
            isAjaxRunning: v.getters.GET_IS_AJAX_RUNNING,
            isQuiteRequest: v.getters.GET_IS_QUIET_REQUEST,
          }),
        ),
      },
      Z = X,
      z = (n("077a"), Object(Y["a"])(Z, W, q, !1, null, "060ed454", null)),
      tt = z.exports,
      et = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "button",
          {
            staticClass: "btn",
            class: [t.variant, { "is-loading": t.isLoading }],
            attrs: { role: "button", type: t.type, disabled: t.isLoading },
            on: { click: t.handleClick },
          },
          [
            t._t("default"),
            t.isLoading ? n("span", { staticClass: "loader-spinner" }) : t._e(),
          ],
          2,
        );
      },
      nt = [],
      st = {
        name: "button-input",
        props: {
          variant: { type: String, default: "" },
          type: { type: String, default: "button" },
          isLoading: { type: Boolean, default: !1 },
        },
        methods: {
          handleClick: function (t) {
            this.$emit("click", t);
          },
        },
      },
      ot = st,
      it = (n("7768"), Object(Y["a"])(ot, et, nt, !1, null, "3a5e20f1", null)),
      rt = it.exports,
      at = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "page",
          {
            attrs: {
              hasBackButton: !t.showSplash,
              title: "Two-Factor Authentication",
            },
            on: { goBack: t.backToTeamPage },
            scopedSlots: t._u([
              {
                key: "description",
                fn: function () {
                  return [
                    n("p", [
                      t._v(
                        "\n        Increase the security of your account by enabling two-factor authentication (2FA). We'll ask you to verify yourself either by SMS or an authentication app when you login.\n      ",
                      ),
                    ]),
                  ];
                },
                proxy: !0,
              },
            ]),
          },
          [
            t.isOwner
              ? n("controlBar", { attrs: { has2FA: t.has2FA } })
              : t._e(),
            t.hasActivated2FA
              ? n(
                  "div",
                  { staticClass: "bar-control is-enforced" },
                  [
                    n("p", [
                      n("span", { staticClass: "control-icon" }),
                      t._v("Two-factor authentication has been "),
                      n("strong", [t._v(" added successfully.")]),
                    ]),
                    n("button-input", { on: { click: t.backToDashboard } }, [
                      t._v("\n        Return to Dashboard\n      "),
                    ]),
                  ],
                  1,
                )
              : t._e(),
            n(
              "div",
              { staticClass: "col-lg-12 col-md-12 col-sm-12 col-xs-12" },
              [
                n(
                  "div",
                  { staticClass: "services-list" },
                  t._l(t.services, function (e, s) {
                    return n(
                      "card",
                      {
                        key: s,
                        attrs: { id: s, title: e.title, icon: e.icon },
                        scopedSlots: t._u(
                          [
                            {
                              key: "footer",
                              fn: function () {
                                return [
                                  n(
                                    "buttons-row",
                                    [
                                      e.isActive
                                        ? [
                                            t.primaryAuth === s
                                              ? n(
                                                  "button-input",
                                                  {
                                                    attrs: {
                                                      variant:
                                                        "green primary-indicator",
                                                    },
                                                  },
                                                  [
                                                    n(
                                                      "svg",
                                                      {
                                                        attrs: {
                                                          xmlns:
                                                            "http://www.w3.org/2000/svg",
                                                          width: "14",
                                                          height: "13",
                                                          viewBox: "0 0 14 13",
                                                        },
                                                      },
                                                      [
                                                        n("defs", [
                                                          n(
                                                            "filter",
                                                            {
                                                              attrs: {
                                                                id: "prefix__a",
                                                                width: "102.2%",
                                                                height:
                                                                  "104.8%",
                                                                x: "-1.1%",
                                                                y: "-2.4%",
                                                                filterUnits:
                                                                  "objectBoundingBox",
                                                              },
                                                            },
                                                            [
                                                              n("feOffset", {
                                                                attrs: {
                                                                  dy: "2",
                                                                  in: "SourceAlpha",
                                                                  result:
                                                                    "shadowOffsetOuter1",
                                                                },
                                                              }),
                                                              n(
                                                                "feGaussianBlur",
                                                                {
                                                                  attrs: {
                                                                    in: "shadowOffsetOuter1",
                                                                    result:
                                                                      "shadowBlurOuter1",
                                                                    stdDeviation:
                                                                      "1",
                                                                  },
                                                                },
                                                              ),
                                                              n(
                                                                "feColorMatrix",
                                                                {
                                                                  attrs: {
                                                                    in: "shadowBlurOuter1",
                                                                    result:
                                                                      "shadowMatrixOuter1",
                                                                    values:
                                                                      "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0596127717 0",
                                                                  },
                                                                },
                                                              ),
                                                              n(
                                                                "feMerge",
                                                                [
                                                                  n(
                                                                    "feMergeNode",
                                                                    {
                                                                      attrs: {
                                                                        in: "shadowMatrixOuter1",
                                                                      },
                                                                    },
                                                                  ),
                                                                  n(
                                                                    "feMergeNode",
                                                                    {
                                                                      attrs: {
                                                                        in: "SourceGraphic",
                                                                      },
                                                                    },
                                                                  ),
                                                                ],
                                                                1,
                                                              ),
                                                            ],
                                                            1,
                                                          ),
                                                        ]),
                                                        n(
                                                          "g",
                                                          {
                                                            attrs: {
                                                              fill: "none",
                                                              stroke: "#FFF",
                                                              "stroke-linecap":
                                                                "round",
                                                              "stroke-linejoin":
                                                                "round",
                                                              "stroke-width":
                                                                "1.5",
                                                              filter:
                                                                "url(#prefix__a)",
                                                              transform:
                                                                "translate(-470 -72)",
                                                            },
                                                          },
                                                          [
                                                            n("path", {
                                                              attrs: {
                                                                d: "M4.53 8.356L6.356 10.473 11.53 4.473",
                                                                transform:
                                                                  "translate(469 69)",
                                                              },
                                                            }),
                                                          ],
                                                        ),
                                                      ],
                                                    ),
                                                    t._v(
                                                      "\n                  Primary\n                ",
                                                    ),
                                                  ],
                                                )
                                              : n(
                                                  "button-input",
                                                  {
                                                    attrs: {
                                                      variant:
                                                        "button-dropdown",
                                                    },
                                                    on: {
                                                      click: function (e) {
                                                        return t.updatePrimaryAuth(
                                                          s,
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      "\n                  Set as primary\n                ",
                                                    ),
                                                  ],
                                                ),
                                            n(
                                              "button-input",
                                              {
                                                attrs: {
                                                  variant: "button-dropdown",
                                                },
                                                on: {
                                                  click: function (e) {
                                                    return t.setPage(s);
                                                  },
                                                },
                                              },
                                              [
                                                t._v(
                                                  "\n                  Edit\n                ",
                                                ),
                                              ],
                                            ),
                                          ]
                                        : n(
                                            "button-input",
                                            {
                                              attrs: { variant: "blue" },
                                              on: {
                                                click: function (e) {
                                                  return t.setPage(s);
                                                },
                                              },
                                            },
                                            [
                                              t._v(
                                                "\n                Set up\n              ",
                                              ),
                                            ],
                                          ),
                                    ],
                                    2,
                                  ),
                                ];
                              },
                              proxy: !0,
                            },
                            e.isActive && t.canDisable
                              ? {
                                  key: "footer-extra",
                                  fn: function () {
                                    return [
                                      n(
                                        "button-input",
                                        {
                                          attrs: { variant: "button-dropdown" },
                                          on: {
                                            click: function (e) {
                                              return t.disableService(s);
                                            },
                                          },
                                        },
                                        [
                                          t._v(
                                            "\n              Disable\n            ",
                                          ),
                                        ],
                                      ),
                                    ];
                                  },
                                  proxy: !0,
                                }
                              : null,
                          ],
                          null,
                          !0,
                        ),
                      },
                      [
                        n("p", {
                          domProps: { textContent: t._s(e.description) },
                        }),
                      ],
                    );
                  }),
                  1,
                ),
                t.hasActiveServices && t.canDisable
                  ? n(
                      "button-input",
                      {
                        attrs: { variant: "button-dropdown disable-2fa" },
                        on: { click: t.requestToDisable2FA },
                      },
                      [
                        t._v(
                          "\n        Disable Two-Factor Authentication\n      ",
                        ),
                      ],
                    )
                  : t._e(),
              ],
              1,
            ),
          ],
          1,
        );
      },
      ct = [],
      ut = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          [
            n("header", { staticClass: "sg-feature--header" }, [
              n(
                "h3",
                { staticClass: "page-title" },
                [
                  t.hasBackButton
                    ? n("back-button", {
                        staticClass: "back-button",
                        on: { click: t.goBack },
                      })
                    : t._e(),
                  t._v("\n      " + t._s(t.title) + "\n    "),
                ],
                1,
              ),
              n(
                "div",
                { staticClass: "lead-toggle" },
                [t._t("description")],
                2,
              ),
            ]),
            t._t("default"),
          ],
          2,
        );
      },
      lt = [],
      _t = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("button", {
          staticClass: "back-button",
          on: {
            click: function (e) {
              return t.$emit("click");
            },
          },
        });
      },
      pt = [],
      ft = (n("ef5e"), {}),
      dt = Object(Y["a"])(ft, _t, pt, !1, null, "7a5ad422", null),
      Et = dt.exports,
      St = {
        components: { BackButton: Et },
        props: {
          title: { type: String, default: "" },
          hasBackButton: { type: Boolean, default: !1 },
        },
        methods: {
          goBack: function () {
            this.$emit("goBack");
          },
        },
      },
      ht = St,
      mt = (n("936e"), Object(Y["a"])(ht, ut, lt, !1, null, "cdc23c98", null)),
      vt = mt.exports,
      bt = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "setup-2fa-card" }, [
          t.title
            ? n("div", { staticClass: "header" }, [
                t.icon
                  ? n("span", {
                      staticClass: "icon",
                      domProps: { innerHTML: t._s(t.icon) },
                    })
                  : t._e(),
                n("h3", {
                  staticClass: "heading",
                  domProps: { textContent: t._s(t.title) },
                }),
              ])
            : t._e(),
          n("div", { staticClass: "body" }, [t._t("default")], 2),
          n("div", { staticClass: "footer" }, [
            n("div", { staticClass: "footer-main" }, [t._t("footer")], 2),
            n(
              "div",
              { staticClass: "footer-extra" },
              [t._t("footer-extra")],
              2,
            ),
          ]),
        ]);
      },
      gt = [],
      Tt = {
        props: {
          id: { type: String, default: null },
          title: { type: String, default: null },
          icon: { type: String, default: void 0 },
        },
      },
      At = Tt,
      Ot =
        (n("4535"),
        n("8c68"),
        Object(Y["a"])(At, bt, gt, !1, null, "cafbe660", null)),
      Ct = Ot.exports,
      yt = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "buttons-row" }, [t._t("default")], 2);
      },
      Pt = [],
      wt = (n("180a"), {}),
      Rt = Object(Y["a"])(wt, yt, Pt, !1, null, "b2a479ae", null),
      Dt = Rt.exports,
      jt = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "control-container" },
          [
            n(
              "div",
              {
                staticClass: "bar-control",
                class: { "is-enforced": t.enforce2FA, "has-2fa": t.has2FA },
              },
              [
                n("p", [
                  n("span", { staticClass: "control-icon" }),
                  n("span", [
                    t._v(" Authentication is currently "),
                    t.enforce2FA
                      ? n("strong", [t._v("enforced")])
                      : n("strong", [t._v("optional")]),
                    t._v(" in your account. "),
                  ]),
                  t.has2FA
                    ? t._e()
                    : n("span", [
                        t._v(
                          "To turn on enforcement, you must firstly enable two-factor authentication for yourself.",
                        ),
                      ]),
                  t._v("\n       "),
                  n(
                    "a",
                    {
                      attrs: {
                        href: "https://support.smtp2go.com/hc/en-gb/articles/360012260594-Two-Factor-Authentication-2FA",
                        target: "_blank",
                      },
                    },
                    [t._v("Learn more")],
                  ),
                ]),
                t.enforce2FA && t.has2FA
                  ? n(
                      "button",
                      {
                        on: {
                          click: function (e) {
                            t.modalActive = !t.modalActive;
                          },
                        },
                      },
                      [t._v("Change")],
                    )
                  : t.has2FA
                    ? n(
                        "button",
                        {
                          on: {
                            click: function (e) {
                              t.modalActive = !t.modalActive;
                            },
                          },
                        },
                        [t._v("Enforce")],
                      )
                    : t._e(),
              ],
            ),
            n("transition", [
              t.modalActive
                ? n("div", {
                    staticClass: "modal-backdrop fade in",
                    on: { click: t.toggleModal },
                  })
                : t._e(),
            ]),
            n("transition", [
              t.modalActive
                ? n("div", { staticClass: "modal-container" }, [
                    n(
                      "div",
                      {
                        staticClass: "modal-dialog modal-medium",
                        class: { "is-active": t.modalActive },
                      },
                      [
                        n("div", { staticClass: "modal-body" }, [
                          n(
                            "button",
                            {
                              staticClass: "bootbox-close-button close",
                              attrs: { type: "button" },
                              on: { click: t.toggleModal },
                            },
                            [t._v("×")],
                          ),
                          n("div", { staticClass: "option-banner" }, [
                            n("figure"),
                            n("h4", [
                              t._v("Sure you want to "),
                              t.enforce2FA
                                ? n("span", [t._v("stop enforcing")])
                                : n("span", [t._v("enforce")]),
                              t._v(" two-factor authentication for all users?"),
                            ]),
                            t.enforce2FA
                              ? n("p", [
                                  t._v(
                                    "\n              Users may stop using two-factor authentication and can sign up without using it in future. Subaccounts are not affected by this change.\n            ",
                                  ),
                                ])
                              : n("p", [
                                  t._v(
                                    "\n              All users not currently using two-factor authentication will be required to set it up on their next sign in. Subaccounts are not affected by this change.\n            ",
                                  ),
                                ]),
                            null !== t.errorMessage
                              ? n(
                                  "div",
                                  { staticClass: "option-banner-error" },
                                  [
                                    n("p", [
                                      n("span", {
                                        staticClass: "error-exclamation",
                                      }),
                                      n(
                                        "span",
                                        { staticClass: "error-message" },
                                        [t._v(t._s(t.errorMessage))],
                                      ),
                                    ]),
                                  ],
                                )
                              : t._e(),
                          ]),
                          n("div", { staticClass: "modal-body-footer" }, [
                            t.enforce2FA
                              ? n(
                                  "button",
                                  {
                                    staticClass: "btn blue",
                                    class: { "spinner-button": t.isWorking },
                                    on: {
                                      click: function (e) {
                                        return (
                                          e.preventDefault(),
                                          t.toggleEnforce(!1)
                                        );
                                      },
                                    },
                                  },
                                  [t._v("Stop enforcing 2FA")],
                                )
                              : n(
                                  "button",
                                  {
                                    staticClass: "btn blue",
                                    class: { "spinner-button": t.isWorking },
                                    on: {
                                      click: function (e) {
                                        return (
                                          e.preventDefault(),
                                          t.toggleEnforce(!0)
                                        );
                                      },
                                    },
                                  },
                                  [t._v("Confirm")],
                                ),
                            n(
                              "button",
                              {
                                staticClass: "button-outlined",
                                on: { click: t.toggleModal },
                              },
                              [t._v("Cancel")],
                            ),
                          ]),
                        ]),
                      ],
                    ),
                  ])
                : t._e(),
            ]),
          ],
          1,
        );
      },
      Gt = [];
    function Mt(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        (e &&
          (s = s.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, s));
      }
      return n;
    }
    function kt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Mt(Object(n), !0).forEach(function (e) {
              Object(l["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Mt(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e),
                );
              });
      }
      return t;
    }
    var Nt = {
        name: "controlBar",
        props: { has2FA: Boolean },
        data: function () {
          return { modalActive: !1, isWorking: !1, errorMessage: null };
        },
        computed: kt(
          {},
          Object(_["b"])({ enforce2FA: j.getters.GET_IS_2FA_ENFORCED }),
        ),
        methods: {
          toggleModal: function () {
            this.isWorking || (this.modalActive = !this.modalActive);
          },
          toggleEnforce: function (t) {
            var e = this;
            ((this.isWorking = !0),
              (this.modalActive = !0),
              (this.errorMessage = null),
              this.$store
                .dispatch(j.actions.TOGGLE_2FA_ENFORCEMENT, { enforce_2fa: t })
                .then(function () {
                  ((e.isWorking = !1), (e.modalActive = !1));
                })
                .catch(function (t) {
                  ((e.isWorking = !1), (e.errorMessage = t));
                }));
          },
        },
      },
      It = Nt,
      Ut = (n("71f1"), Object(Y["a"])(It, jt, Gt, !1, null, "1c5b9804", null)),
      xt = Ut.exports;
    function Ft(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        (e &&
          (s = s.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, s));
      }
      return n;
    }
    function Bt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Ft(Object(n), !0).forEach(function (e) {
              Object(l["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Ft(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e),
                );
              });
      }
      return t;
    }
    var Lt = {
        components: {
          Page: vt,
          Card: Ct,
          ButtonsRow: Dt,
          ButtonInput: rt,
          controlBar: xt,
        },
        props: {
          services: {
            type: Object,
            default: function () {
              return {};
            },
          },
          primaryAuth: { type: String, default: null },
        },
        computed: Bt(
          Bt(
            {},
            Object(_["b"])({
              isOwner: j.getters.GET_IS_OWNER,
              has2FA: j.getters.GET_HAS_2FA,
              showSplash: j.getters.GET_SHOW_SPLASH,
              isEnforced: j.getters.GET_IS_2FA_ENFORCED,
            }),
          ),
          {},
          {
            canDisable: function () {
              return (
                !this.isEnforced ||
                (this.isEnforced && this.countActiveServices > 1)
              );
            },
            hasActivated2FA: function () {
              return this.showSplash && this.hasActiveServices;
            },
            countActiveServices: function () {
              var t = this,
                e = 0;
              return (
                Object.keys(this.services).map(function (n) {
                  t.services[n].isActive && e++;
                }),
                e
              );
            },
            hasActiveServices: function () {
              var t = this;
              return Object.keys(this.services).some(function (e) {
                return t.services[e].isActive;
              });
            },
          },
        ),
        methods: {
          updatePrimaryAuth: function (t) {
            this.$emit("updatePrimaryAuth", t);
          },
          setPage: function (t) {
            this.$emit("setPage", t);
          },
          disableService: function (t) {
            this.$emit("disableService", t);
          },
          requestToDisable2FA: function () {
            this.$emit("requestToDisable2FA");
          },
          backToTeamPage: function () {
            window.location = END_POINTS.fronts()["Edit Team"];
          },
          backToDashboard: function () {
            window.location = END_POINTS.fronts()["Dashboard"];
          },
        },
      },
      Ht = Lt,
      Kt = (n("9ed8"), Object(Y["a"])(Ht, at, ct, !1, null, "20261e00", null)),
      Yt = Kt.exports,
      Qt = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "page",
          {
            attrs: { hasBackButton: "", title: t.pageTitle },
            on: { goBack: t.exitWithSaveCheck },
            scopedSlots: t._u([
              {
                key: "description",
                fn: function () {
                  return [
                    n("p", {
                      domProps: {
                        textContent: t._s(t.serviceData.description),
                      },
                    }),
                  ];
                },
                proxy: !0,
              },
            ]),
          },
          [
            n(
              "div",
              { staticClass: "col-lg-12 col-md-12 col-sm-12 col-xs-12" },
              [
                n(
                  "card",
                  {
                    scopedSlots: t._u([
                      {
                        key: "footer",
                        fn: function () {
                          return [
                            n(
                              "buttons-row",
                              [
                                n(
                                  "button-input",
                                  {
                                    attrs: { variant: "blue" },
                                    on: { click: t.verifyCode },
                                  },
                                  [
                                    t._v(
                                      "\n            Verify code\n          ",
                                    ),
                                  ],
                                ),
                                n(
                                  "button-input",
                                  {
                                    attrs: { variant: "button-dropdown" },
                                    on: { click: t.exitWithSaveCheck },
                                  },
                                  [t._v("\n            Cancel\n          ")],
                                ),
                              ],
                              1,
                            ),
                          ];
                        },
                        proxy: !0,
                      },
                    ]),
                  },
                  [
                    n(
                      "service-card-step",
                      {
                        scopedSlots: t._u([
                          {
                            key: "heading",
                            fn: function () {
                              return [
                                t._v(
                                  "\n          What’s your mobile phone number?\n        ",
                                ),
                              ];
                            },
                            proxy: !0,
                          },
                        ]),
                      },
                      [
                        n(
                          "div",
                          { staticClass: "phone-section" },
                          [
                            n("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.smsNumber,
                                  expression: "smsNumber",
                                },
                              ],
                              ref: "phoneNumber",
                              staticClass: "input-md phone-number",
                              attrs: { type: "tel" },
                              domProps: { value: t.smsNumber },
                              on: {
                                change: function (e) {
                                  t.hasEdits = !0;
                                },
                                keyup: function (e) {
                                  return !e.type.indexOf("key") &&
                                    t._k(e.keyCode, "enter", 13, e.key, "Enter")
                                    ? null
                                    : t.sendCode.apply(null, arguments);
                                },
                                input: function (e) {
                                  e.target.composing ||
                                    (t.smsNumber = e.target.value);
                                },
                              },
                            }),
                            n(
                              "button-input",
                              {
                                attrs: {
                                  variant: "blue",
                                  "is-loading": t.isQuiteRequest,
                                },
                                on: { click: t.sendCode },
                              },
                              [t._v("\n            Send code\n          ")],
                            ),
                          ],
                          1,
                        ),
                      ],
                    ),
                    n(
                      "service-card-step",
                      {
                        scopedSlots: t._u([
                          {
                            key: "heading",
                            fn: function () {
                              return [
                                t._v(
                                  "\n          Enter the security code sent to your device\n        ",
                                ),
                              ];
                            },
                            proxy: !0,
                          },
                        ]),
                      },
                      [
                        n("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.verificationCode,
                              expression: "verificationCode",
                            },
                          ],
                          staticClass: "form-control input-md code-input",
                          attrs: { type: "text" },
                          domProps: { value: t.verificationCode },
                          on: {
                            change: function (e) {
                              t.hasEdits = !0;
                            },
                            keyup: function (e) {
                              return !e.type.indexOf("key") &&
                                t._k(e.keyCode, "enter", 13, e.key, "Enter")
                                ? null
                                : t.verifyCode.apply(null, arguments);
                            },
                            input: function (e) {
                              e.target.composing ||
                                (t.verificationCode = e.target.value);
                            },
                          },
                        }),
                      ],
                    ),
                  ],
                  1,
                ),
              ],
              1,
            ),
          ],
        );
      },
      $t = [],
      Wt = (n("f559"), n("05f3")),
      qt = n.n(Wt),
      Vt = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "service-card-step" }, [
          n("div", { staticClass: "header" }, [
            n("h4", { staticClass: "heading" }, [t._t("heading")], 2),
          ]),
          n("div", { staticClass: "body" }, [t._t("default")], 2),
        ]);
      },
      Jt = [],
      Xt = (n("15f3"), {}),
      Zt = Object(Y["a"])(Xt, Vt, Jt, !1, null, "dd355a0a", null),
      zt = Zt.exports;
    function te(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        (e &&
          (s = s.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, s));
      }
      return n;
    }
    function ee(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? te(Object(n), !0).forEach(function (e) {
              Object(l["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : te(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e),
                );
              });
      }
      return t;
    }
    var ne = {
        components: {
          Page: vt,
          Card: Ct,
          ServiceCardStep: zt,
          ButtonsRow: Dt,
          ButtonInput: rt,
        },
        props: {
          id: { type: String, default: null },
          serviceData: {
            type: Object,
            default: function () {
              return {};
            },
          },
        },
        computed: ee(
          ee(
            {},
            Object(_["b"])({ isQuiteRequest: v.getters.GET_IS_QUIET_REQUEST }),
          ),
          {},
          {
            pageTitle: function () {
              var t = this.serviceData.isActive ? "Edit" : "Add";
              return "".concat(t, " ").concat(this.serviceData.title);
            },
          },
        ),
        data: function () {
          return {
            smsNumber: "",
            intlTelInput: null,
            verificationCode: "",
            hasEdits: !1,
          };
        },
        mounted: function () {
          this.intlTelInput = qt()(this.$refs.phoneNumber, {
            separateDialCode: "true",
            hiddenInput: "full_number",
            initialCountry: "auto",
            geoIpLookup: function (t) {
              P.a
                .get("https://ipinfo.io")
                .then(function (e) {
                  var n = e.data,
                    s = n && n.country ? n.country : "";
                  t(s);
                })
                .catch(function () {});
            },
            preferredCountries: [],
            excludeCountries: [
              "AF",
              "GH",
              "LR",
              "SD",
              "BJ",
              "GN",
              "NG",
              "UG",
              "CM",
              "GW",
              "RW",
              "YE",
              "CD",
              "CI",
              "SS",
              "ZM",
              "ZW",
              "PK",
              "BR",
              "PH",
              "AE",
              "ID",
              "MM",
              "UZ",
              "BF",
              "TZ",
              "MY",
              "VN",
              "TL",
              "BD",
              "KG",
              "PS",
              "OM",
              "SY",
              "UZ",
              "BY",
              "BG",
              "UA",
              "ET",
              "NG",
              "AZ",
              "CN",
            ],
          });
        },
        methods: {
          openMainPage: function () {
            this.$emit("setPage", "main");
          },
          verifyCode: function () {
            var t = this;
            this.hasEdits = !0;
            var e = this.verificationCode,
              n = !1;
            this.$store
              .dispatch(j.actions.VERIFY_SMS_CODE, {
                code: e,
                authToDisable: n,
              })
              .then(function () {
                t.openMainPage();
              })
              .catch(function () {});
          },
          exitWithSaveCheck: function () {
            this.hasEdits
              ? this.showExitConfirmationPopup()
              : this.openMainPage();
          },
          showExitConfirmationPopup: function () {
            this.$emit("showPopup", "exit");
          },
          sendCode: function () {
            this.hasEdits = !0;
            var t = "+" + this.intlTelInput.selectedCountryData.dialCode,
              e = t + this.smsNumber;
            ((this.smsNumber.startsWith("+") || this.smsNumber.startsWith(t)) &&
              (e = this.smsNumber),
              this.$store
                .dispatch(j.actions.SEND_SMS, e)
                .catch(function () {}));
          },
        },
      },
      se = ne,
      oe =
        (n("2b99"),
        n("89c3"),
        Object(Y["a"])(se, Qt, $t, !1, null, "1eea1d49", null)),
      ie = oe.exports,
      re = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "page",
          {
            attrs: { hasBackButton: "", title: t.pageTitle },
            on: { goBack: t.exitWithSaveCheck },
            scopedSlots: t._u([
              {
                key: "description",
                fn: function () {
                  return [
                    n("p", {
                      domProps: {
                        textContent: t._s(t.serviceData.description),
                      },
                    }),
                  ];
                },
                proxy: !0,
              },
            ]),
          },
          [
            n(
              "div",
              { staticClass: "col-lg-12 col-md-12 col-sm-12 col-xs-12" },
              [
                n(
                  "card",
                  {
                    scopedSlots: t._u([
                      {
                        key: "footer",
                        fn: function () {
                          return [
                            n(
                              "buttons-row",
                              [
                                n(
                                  "button-input",
                                  {
                                    attrs: { variant: "blue" },
                                    on: { click: t.verifyCode },
                                  },
                                  [
                                    t._v(
                                      "\n            Verify code\n          ",
                                    ),
                                  ],
                                ),
                                n(
                                  "button-input",
                                  {
                                    attrs: { variant: "button-dropdown" },
                                    on: { click: t.exitWithSaveCheck },
                                  },
                                  [t._v("\n            Cancel\n          ")],
                                ),
                              ],
                              1,
                            ),
                          ];
                        },
                        proxy: !0,
                      },
                    ]),
                  },
                  [
                    n(
                      "service-card-step",
                      {
                        scopedSlots: t._u([
                          {
                            key: "heading",
                            fn: function () {
                              return [
                                t._v(
                                  "\n          Download an authentication app to your mobile device or computer\n        ",
                                ),
                              ];
                            },
                            proxy: !0,
                          },
                        ]),
                      },
                      [
                        n("div", { staticClass: "info-note" }, [
                          n("strong", [t._v("Note:")]),
                          t._v(
                            " We recommend Authy for 2FA on mobile and desktop devices. Download Authy for free for your ",
                          ),
                          n(
                            "a",
                            {
                              attrs: {
                                href: "https://itunes.apple.com/us/app/authy/id494168017",
                                target: "_blank",
                                rel: "noreferrer",
                              },
                            },
                            [t._v("iOS")],
                          ),
                          t._v(" or "),
                          n(
                            "a",
                            {
                              attrs: {
                                href: "https://play.google.com/store/apps/details?id=com.authy.authy",
                                target: "_blank",
                                rel: "noreferrer",
                              },
                            },
                            [t._v("Android")],
                          ),
                          t._v(
                            " devices, or download a similar 2FA app.\n        ",
                          ),
                        ]),
                      ],
                    ),
                    n(
                      "service-card-step",
                      {
                        scopedSlots: t._u([
                          {
                            key: "heading",
                            fn: function () {
                              return [
                                t._v(
                                  "\n          Scan this barcode using your app\n        ",
                                ),
                              ];
                            },
                            proxy: !0,
                          },
                        ]),
                      },
                      [
                        n(
                          "div",
                          {
                            staticClass: "qr-wrapper",
                            attrs: { id: "two-factor-qrcode" },
                          },
                          [
                            n("div", { staticClass: "qr-box" }, [
                              n("div", {
                                ref: "QRCodeHolder",
                                staticClass: "qrcode-holder",
                              }),
                            ]),
                          ],
                        ),
                        n("p", { staticClass: "help-text" }, [
                          t._v(
                            "\n          Alternatively, manually enter this code:\n        ",
                          ),
                        ]),
                        n("code", { staticClass: "manual-code" }, [
                          t._v(
                            "\n          " +
                              t._s(t.totpSecretKey) +
                              "\n        ",
                          ),
                        ]),
                      ],
                    ),
                    n(
                      "service-card-step",
                      {
                        scopedSlots: t._u([
                          {
                            key: "heading",
                            fn: function () {
                              return [
                                t._v(
                                  "\n          Enter the security code sent to your app\n        ",
                                ),
                              ];
                            },
                            proxy: !0,
                          },
                        ]),
                      },
                      [
                        n("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.verificationCode,
                              expression: "verificationCode",
                            },
                          ],
                          staticClass: "form-control input-md code-input",
                          attrs: { type: "text" },
                          domProps: { value: t.verificationCode },
                          on: {
                            change: function (e) {
                              t.hasEdits = !0;
                            },
                            keyup: function (e) {
                              return !e.type.indexOf("key") &&
                                t._k(e.keyCode, "enter", 13, e.key, "Enter")
                                ? null
                                : t.verifyCode.apply(null, arguments);
                            },
                            input: function (e) {
                              e.target.composing ||
                                (t.verificationCode = e.target.value);
                            },
                          },
                        }),
                      ],
                    ),
                  ],
                  1,
                ),
              ],
              1,
            ),
          ],
        );
      },
      ae = [];
    function ce(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        (e &&
          (s = s.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, s));
      }
      return n;
    }
    function ue(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ce(Object(n), !0).forEach(function (e) {
              Object(l["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : ce(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e),
                );
              });
      }
      return t;
    }
    var le = {
        components: {
          Page: vt,
          Card: Ct,
          ServiceCardStep: zt,
          ButtonsRow: Dt,
          ButtonInput: rt,
        },
        props: {
          id: { type: String, default: null },
          serviceData: {
            type: Object,
            default: function () {
              return {};
            },
          },
        },
        computed: ue(
          ue(
            {},
            Object(_["b"])({
              totpSecretKey: j.getters.GET_TOTP_SECRET_KEY,
              totpKey: j.getters.GET_TOTP_KEY,
              showSplash: j.getters.GET_SHOW_SPLASH,
            }),
          ),
          {},
          {
            pageTitle: function () {
              var t = this.serviceData.isActive ? "Edit" : "Add";
              return "".concat(t, " ").concat(this.serviceData.title);
            },
          },
        ),
        data: function () {
          return { verificationCode: "", hasEdits: !1 };
        },
        mounted: function () {
          new QRCode(this.$refs.QRCodeHolder, {
            text: this.totpKey + "&issuer=SMTP2GO",
            width: 268,
            height: 268,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H,
          });
        },
        methods: {
          openMainPage: function () {
            this.$emit("setPage", "main");
          },
          exitWithSaveCheck: function () {
            this.hasEdits
              ? this.showExitConfirmationPopup()
              : this.openMainPage();
          },
          verifyCode: function () {
            var t = this;
            this.hasEdits = !0;
            var e = this.verificationCode,
              n = !1;
            this.$store
              .dispatch(j.actions.VERIFY_APP_CODE, {
                code: e,
                authToDisable: n,
              })
              .then(function () {
                t.openMainPage();
              })
              .catch(function () {});
          },
          showExitConfirmationPopup: function () {
            this.$emit("showPopup", "exit");
          },
        },
      },
      _e = le,
      pe = (n("9438"), Object(Y["a"])(_e, re, ae, !1, null, "21e2028e", null)),
      fe = pe.exports,
      de = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.showSplash
          ? n("div", { staticClass: "info-splash splash-2fa" }, [
              t._m(0),
              n("h2", [t._v("Two-factor authentication is now required")]),
              n("p", { staticClass: "lead-in" }, [
                t._v(
                  "\n    An owner of your account has required that two-factor authentication be setup for all users within the account. You can choose App Authentication, SMS Authentication, or both.\n  ",
                ),
              ]),
              n("p", [
                n(
                  "button",
                  { staticClass: "btn green", on: { click: t.hideSplash } },
                  [t._v("Start setting up 2FA")],
                ),
              ]),
            ])
          : t._e();
      },
      Ee = [
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("figure", [
            n("img", {
              attrs: {
                src: "/static/smtp2go_assets/lock.png",
                alt: "sender",
                width: "268",
              },
            }),
          ]);
        },
      ],
      Se = {
        name: "enforce-2fa-splash",
        data: function () {
          return { showSplash: !0 };
        },
        methods: {
          hideSplash: function () {
            this.showSplash = !1;
          },
        },
      },
      he = Se,
      me = (n("83cf"), Object(Y["a"])(he, de, Ee, !1, null, null, null)),
      ve = me.exports;
    function be(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        (e &&
          (s = s.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, s));
      }
      return n;
    }
    function ge(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? be(Object(n), !0).forEach(function (e) {
              Object(l["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : be(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e),
                );
              });
      }
      return t;
    }
    var Te = {
        props: {},
        name: "app",
        components: {
          DisplayMessage: $,
          AjaxLoadingSpinner: tt,
          MainPage: Yt,
          SMSServicePage: ie,
          AppServicePage: fe,
          ButtonInput: rt,
          enforce2faSplash: ve,
        },
        computed: ge(
          ge(
            {},
            Object(_["b"])({
              isSecurityCheckPassed: j.getters.GET_IS_SECURITY_CHECK_PASSED,
              services: j.getters.GET_SERVICES,
              primaryAuth: j.getters.GET_PRIMARY_AUTH,
              showSplash: j.getters.GET_SHOW_SPLASH,
            }),
          ),
          {},
          {
            hasActiveServices: function () {
              var t = this;
              return Object.keys(this.services).some(function (e) {
                return t.services[e].isActive;
              });
            },
          },
        ),
        data: function () {
          return {
            activePage: "main",
            password: "",
            code: "",
            activePopup: null,
            authToDisable: "",
            disableBoth: !1,
            pageComponents: { SMSServicePage: ie, AppServicePage: fe },
          };
        },
        methods: {
          updatePrimaryAuth: function (t) {
            this.$store
              .dispatch(j.actions.UPDATE_PRIMARY_AUTH, t)
              .catch(function () {});
          },
          setPage: function (t) {
            ((this.activePage = t), this.hidePopup());
          },
          disableService: function (t) {
            var e = this;
            null != this.services[t] &&
              ((this.authToDisable = t),
              this.showPopup("disable-2fa"),
              ("sms" == this.authToDisable ||
                ("" == this.authToDisable && "sms" == this.primaryAuth)) &&
                this.$store
                  .dispatch(j.actions.SEND_SMS_DISABLE, "")
                  .catch(function () {}),
              this.$nextTick(function () {
                e.$refs.codeInput.focus();
              }));
          },
          showPopup: function (t) {
            this.activePopup = t;
          },
          hidePopup: function () {
            ((this.activePopup = null),
              (this.code = ""),
              (this.disableBoth = !1));
          },
          requestDisableBoth2FA: function () {
            ((this.disableBoth = !0), this.disableService(this.primaryAuth));
          },
          confirm2FADisablePopup: function () {
            var t = this,
              e = j.actions.VERIFY_SMS_CODE;
            ("app" == this.authToDisable ||
            ("" == this.authToDisable && "app" == this.primaryAuth)
              ? ((e = j.actions.VERIFY_APP_CODE), (this.authToDisable = "app"))
              : (this.authToDisable = "sms"),
              this.disableBoth && (this.authToDisable = "both"));
            var n = this.code,
              s = this.authToDisable;
            this.$store
              .dispatch(e, { code: n, authToDisable: s })
              .then(function () {
                t.hidePopup();
              })
              .catch(function () {});
          },
          checkPassword: function () {
            this.$store
              .dispatch(j.actions.CHECK_PASS, this.password)
              .catch(function () {});
          },
          resendSMS: function () {
            this.$store
              .dispatch(j.actions.SEND_SMS_DISABLE, "")
              .catch(function () {});
          },
        },
      },
      Ae = Te,
      Oe =
        (n("6294"),
        n("85e8"),
        Object(Y["a"])(Ae, c, u, !1, null, "61e3deb6", null)),
      Ce = Oe.exports;
    i["a"].use(_["a"]);
    var ye = new _["a"].Store({
        strict: !1,
        getters: {},
        mutations: {},
        actions: {},
        modules: { root: C, two_factor_auth: U },
      }),
      Pe = ye;
    (i["a"].use(a.a),
      (i["a"].config.productionTip = !1),
      (i["a"].prototype.$eventBus = new i["a"]()),
      Pe.commit(v.mutations.SET_CSRF_KEY, PAGE_DATA.csrfkey),
      Pe.commit(j.mutations.SET_IS_2FA_ENFORCED, PAGE_DATA.enforce_2fa),
      Pe.commit(j.mutations.SET_SHOW_SPLASH, PAGE_DATA.show_splash),
      PAGE_DATA.show_splash &&
        (Pe.commit(j.mutations.SET_AUTH_STATUS, PAGE_DATA.auth_status),
        Pe.commit(j.mutations.SET_IS_SECURITY_CHECK_PASSED, !0),
        Pe.commit(j.mutations.SET_EDIT_TOKEN, PAGE_DATA.edit_token)),
      Pe.commit(v.mutations.SET_END_POINTS, END_POINTS.urls()),
      R(Pe),
      new i["a"]({
        store: Pe,
        render: function (t) {
          return t(Ce);
        },
      }).$mount("#two-factor-auth"));
  },
  5712: function (t, e, n) {},
  "5d58": function (t, e, n) {},
  6294: function (t, e, n) {
    "use strict";
    n("437c");
  },
  "6b6d": function (t, e, n) {},
  7161: function (t, e, n) {},
  "71f1": function (t, e, n) {
    "use strict";
    n("6b6d");
  },
  "74ac": function (t, e, n) {},
  7768: function (t, e, n) {
    "use strict";
    n("db64");
  },
  "83cf": function (t, e, n) {
    "use strict";
    n("c956");
  },
  "85e8": function (t, e, n) {
    "use strict";
    n("263f");
  },
  "89c3": function (t, e, n) {
    "use strict";
    n("b338");
  },
  "8c68": function (t, e, n) {
    "use strict";
    n("5155");
  },
  "8e02": function (t, e, n) {},
  "936e": function (t, e, n) {
    "use strict";
    n("ecdf");
  },
  9438: function (t, e, n) {
    "use strict";
    n("b9a8");
  },
  "9ed8": function (t, e, n) {
    "use strict";
    n("7161");
  },
  b338: function (t, e, n) {},
  b9a8: function (t, e, n) {},
  c956: function (t, e, n) {},
  db64: function (t, e, n) {},
  ecdf: function (t, e, n) {},
  ef5e: function (t, e, n) {
    "use strict";
    n("5d58");
  },
});
//# sourceMappingURL=app.4e531b12.js.map
