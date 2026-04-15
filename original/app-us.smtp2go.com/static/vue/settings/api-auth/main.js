(function (t) {
  function e(e) {
    for (
      var s, o, r = e[0], c = e[1], l = e[2], _ = 0, d = [];
      _ < r.length;
      _++
    )
      ((o = r[_]),
        Object.prototype.hasOwnProperty.call(a, o) && a[o] && d.push(a[o][0]),
        (a[o] = 0));
    for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (t[s] = c[s]);
    u && u(e);
    while (d.length) d.shift()();
    return (n.push.apply(n, l || []), i());
  }
  function i() {
    for (var t, e = 0; e < n.length; e++) {
      for (var i = n[e], s = !0, r = 1; r < i.length; r++) {
        var c = i[r];
        0 !== a[c] && (s = !1);
      }
      s && (n.splice(e--, 1), (t = o((o.s = i[0]))));
    }
    return t;
  }
  var s = {},
    a = { app: 0 },
    n = [];
  function o(e) {
    if (s[e]) return s[e].exports;
    var i = (s[e] = { i: e, l: !1, exports: {} });
    return (t[e].call(i.exports, i, i.exports, o), (i.l = !0), i.exports);
  }
  ((o.m = t),
    (o.c = s),
    (o.d = function (t, e, i) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (o.r = function (t) {
      ("undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 }));
    }),
    (o.t = function (t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (o.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var s in t)
          o.d(
            i,
            s,
            function (e) {
              return t[e];
            }.bind(null, s),
          );
      return i;
    }),
    (o.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return (o.d(e, "a", e), e);
    }),
    (o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = "/"));
  var r = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = r.push.bind(r);
  ((r.push = e), (r = r.slice()));
  for (var l = 0; l < r.length; l++) e(r[l]);
  var u = c;
  (n.push([0, "chunk-vendors"]), i());
})({
  0: function (t, e, i) {
    t.exports = i("56d7");
  },
  "015f": function (t, e, i) {},
  1: function (t, e) {},
  10: function (t, e) {},
  11: function (t, e) {},
  12: function (t, e) {},
  13: function (t, e) {},
  14: function (t, e) {},
  2: function (t, e) {},
  "243e": function (t, e, i) {
    "use strict";
    i("e2f7");
  },
  2567: function (t, e, i) {},
  3: function (t, e) {},
  "31bd": function (t, e, i) {
    "use strict";
    i("55d8");
  },
  4: function (t, e) {},
  "403a": function (t, e, i) {},
  5: function (t, e) {},
  5176: function (t, e, i) {
    "use strict";
    i("9d14");
  },
  "55d8": function (t, e, i) {},
  "56d7": function (t, e, i) {
    "use strict";
    i.r(e);
    (i("cadf"), i("551c"), i("f751"), i("097d"));
    var s,
      a,
      n = i("2b0e"),
      o = i("2b27"),
      r = i.n(o),
      c = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          {
            class: { "smtpauth-splash-on": t.isSplashVisible },
            attrs: { id: "app smtp-auth" },
          },
          [
            e("main-page"),
            e(
              "div",
              {
                staticClass:
                  "info-splash { 'smtpauth-splash-on': isSplashVisible }",
              },
              [
                t._m(0),
                e("h2", { staticClass: "splash-block-500" }, [
                  t._v(
                    "\n      API Keys allow you to integrate SMTP2GO with your other software.\n    ",
                  ),
                ]),
                e("p", { staticClass: "lead-in splash-block-500" }, [
                  t._v(
                    "\n      On this page you can create a new API key and manage endpoint\n      permissions.\n    ",
                  ),
                ]),
                e("p", [
                  e(
                    "button",
                    {
                      staticClass: "btn green",
                      on: {
                        click: function (e) {
                          return (
                            e.preventDefault(),
                            t.hideSplash.apply(null, arguments)
                          );
                        },
                      },
                    },
                    [t._v("Continue")],
                  ),
                ]),
              ],
            ),
          ],
          1,
        );
      },
      l = [
        function () {
          var t = this,
            e = t._self._c;
          return e("figure", [
            e("img", {
              staticClass: "img-apikeys",
              attrs: {
                src: "/static/smtp2go_assets/splash-webhooks.png",
                width: "268",
                alt: "SMTP2GO Apikeys",
              },
            }),
          ]);
        },
      ],
      u = (i("8e6e"), i("ac6a"), i("456d"), i("ade3")),
      _ = i("2f62");
    function d(t, e) {
      var i = "".concat(e, "/");
      return Object.keys(t).reduce(function (e, s) {
        return (
          (e[s] = Object.keys(t[s]).reduce(function (e, a) {
            return ((e[a] = "".concat(i).concat(t[s][a])), e);
          }, {})),
          e
        );
      }, {});
    }
    var p,
      m,
      f,
      h = {
        getters: {
          IS_AJAX_RUNNING: "IS_AJAX_RUNNING",
          BACKEND_URL: "BACKEND_URL",
          GET_SHOW_SPLASH: "GET_SHOW_SPLASH",
        },
        mutations: {
          SET_CSRF_KEY: "SET_CSRF_KEY",
          SET_SHOW_SPLASH: "SET_SHOW_SPLASH",
          SET_END_POINTS: "END_POINTS",
          INC_RUNNING_AJAX_REQUESTS: "INC_RUNNING_AJAX_REQUESTS",
          DEC_RUNNING_AJAX_REQUESTS: "DEC_RUNNING_AJAX_REQUESTS",
        },
        actions: {},
      },
      E = d(h, "root"),
      g = {
        running_ajax_requests: 0,
        csrf_key: "",
        end_points: {},
        show_splash: !1,
      },
      b =
        ((s = {}),
        Object(u["a"])(s, h.getters.IS_AJAX_RUNNING, function (t) {
          return t.running_ajax_requests > 0;
        }),
        Object(u["a"])(s, h.getters.BACKEND_URL, function (t) {
          return function (e, i) {
            return "" !== i
              ? t.end_points[e] + "?action=" + i + "&CSRF_key=" + t.csrf_key
              : t.end_points[e] + "?CSRF_key=" + t.csrf_key;
          };
        }),
        Object(u["a"])(s, h.getters.GET_SHOW_SPLASH, function (t) {
          return t.show_splash;
        }),
        s),
      v =
        ((a = {}),
        Object(u["a"])(a, h.mutations.SET_CSRF_KEY, function (t, e) {
          t.csrf_key = e;
        }),
        Object(u["a"])(a, h.mutations.SET_SHOW_SPLASH, function (t, e) {
          t.show_splash = e;
        }),
        Object(u["a"])(a, h.mutations.SET_END_POINTS, function (t, e) {
          t.end_points = e;
        }),
        Object(u["a"])(a, h.mutations.INC_RUNNING_AJAX_REQUESTS, function (t) {
          t.running_ajax_requests++;
        }),
        Object(u["a"])(a, h.mutations.DEC_RUNNING_AJAX_REQUESTS, function (t) {
          t.running_ajax_requests--;
        }),
        a),
      O = {},
      T = { namespaced: !0, state: g, getters: b, mutations: v, actions: O },
      A = (i("386d"), i("2909")),
      D = (i("55dd"), i("a481"), i("bc3a")),
      I = i.n(D),
      S = I.a.create(),
      C = function (t) {
        (S.interceptors.request.use(function (e) {
          return (t.commit("root/INC_RUNNING_AJAX_REQUESTS"), e);
        }),
          S.interceptors.response.use(
            function (e) {
              if (
                (t.commit("root/DEC_RUNNING_AJAX_REQUESTS"),
                (e = e.data),
                "error" in e)
              )
                return Promise.reject(e.error);
              var i = e.message,
                s = e.results;
              return Promise.resolve({ results: s, message: i });
            },
            function (e) {
              return (
                t.commit("root/DEC_RUNNING_AJAX_REQUESTS"),
                Promise.reject(e)
              );
            },
          ));
      };
    function L(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        (e &&
          (s = s.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          i.push.apply(i, s));
      }
      return i;
    }
    function M(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? L(Object(i), !0).forEach(function (e) {
              Object(u["a"])(t, e, i[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : L(Object(i)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(i, e),
                );
              });
      }
      return t;
    }
    var P = {
        getters: {
          GET_IS_COLUMN_SHOWN: "GET_IS_COLUMN_SHOWN",
          GET_IS_AUTOMATIC_COLS: "GET_IS_AUTOMATIC_COLS",
          GET_ACTIVE_USERS: "GET_ACTIVE_USERS",
          IS_FETCHING_ACTIVE_USERS: "IS_FETCHING_ACTIVE_USERS",
          IS_FETCHING_MORE_ACTIVE_USERS: "IS_FETCHING_MORE_ACTIVE_USERS",
          IS_EDITING_USER: "IS_EDITING_USER",
          GET_DEFAULT_RL_LIMIT: "GET_DEFAULT_RL_LIMIT",
          GET_DEFAULT_RL_PERIOD: "GET_DEFAULT_RL_PERIOD",
          GET_IP_POOL_LABEL: "GET_IP_POOL_LABEL",
          GET_IP_POOLS: "GET_IP_POOLS",
          HAS_IP_POOLS: "HAS_IP_POOLS",
          GET_IS_ALLOWED_ARCHIVING: "GET_IS_ALLOWED_ARCHIVING",
          GET_PREFILLED_USERNAME: "GET_PREFILLED_USERNAME",
          GET_SHOW_PASSWORDLESS_COLUMN: "GET_SHOW_PASSWORDLESS_COLUMN",
          GET_SHOW_STATUS_COLUMN: "GET_SHOW_STATUS_COLUMN",
          CURRENT_PAGE: "CURRENT_PAGE",
          CAN_LOAD_MORE: "CAN_LOAD_MORE",
          GET_SEARCH_TEXT: "GET_SEARCH_TEXT",
          GET_NO_USER_MESSAGE: "GET_NO_USER_MESSAGE",
          GET_SHOW_PASSWORD_ON_MODAL: "GET_SHOW_PASSWORD_ON_MODAL",
          GET_GENERATED_KEY_DATA: "GET_GENERATED_KEY_DATA",
          GET_IS_API_ONLINE: "GET_IS_API_ONLINE",
          GET_API_INDEX: "GET_API_INDEX",
          GET_API_NOTIFICATION_SEEN: "GET_API_NOTIFICATION_SEEN",
          EDIT_MODAL_IS_PASSWORDLESS: "EDIT_MODAL_IS_PASSWORDLESS",
          EDIT_MODAL_IS_EDITING: "EDIT_MODAL_IS_EDITING",
          EDIT_MODAL_USERNAME: "EDIT_MODAL_USERNAME",
          EDIT_MODAL_OLD_USERNAME: "EDIT_MODAL_OLD_USERNAME",
          EDIT_MODAL_PASSWORD: "EDIT_MODAL_PASSWORD",
          EDIT_MODAL_DESCRIPTION: "EDIT_MODAL_DESCRIPTION",
          EDIT_MODAL_IPPOOL: "EDIT_MODAL_IPPOOL",
          EDIT_MODAL_RL_LIMIT: "EDIT_MODAL_RL_LIMIT",
          EDIT_MODAL_RL_PERIOD: "EDIT_MODAL_RL_PERIOD",
          EDIT_MODAL_RL_CUSTOM: "EDIT_MODAL_RL_CUSTOM",
          EDIT_MODAL_FB_ENABLED: "EDIT_MODAL_FB_ENABLED",
          EDIT_MODAL_FB_TEXT: "EDIT_MODAL_FB_TEXT",
          EDIT_MODAL_FB_HTML: "EDIT_MODAL_FB_HTML",
          EDIT_MODAL_OPEN_TRACKING: "EDIT_MODAL_OPEN_TRACKING",
          EDIT_MODAL_CLICK_TRACKING: "EDIT_MODAL_CLICK_TRACKING",
          EDIT_MODAL_BLOCKED: "EDIT_MODAL_BLOCKED",
          EDIT_MODAL_SANDBOX_MODE: "EDIT_MODAL_SANDBOX_MODE",
          EDIT_MODAL_ARCHIVING: "EDIT_MODAL_ARCHIVING",
          EDIT_MODAL_ARCHIVING_INITIAL: "EDIT_MODAL_ARCHIVING_INITIAL",
          EDIT_MODAL_AUDIT_EMAIL: "EDIT_MODAL_AUDIT_EMAIL",
          EDIT_MODAL_BOUNCE_NOTIFICATIONS: "EDIT_MODAL_BOUNCE_NOTIFICATIONS",
          EDIT_MODAL_BOUNCE_TARGET: "EDIT_MODAL_BOUNCE_TARGET",
          EDIT_MODAL_ENDPOINTS: "EDIT_MODAL_ENDPOINTS",
          EDIT_MODAL_HASH: "EDIT_MODAL_HASH",
        },
        mutations: {
          TOGGLE_IS_COLUMN_SHOWN: "TOGGLE_IS_COLUMN_SHOWN",
          SET_IS_AUTOMATIC_COLS: "SET_IS_AUTOMATIC_COLS",
          SET_APP_SETTINGS: "SET_APP_SETTINGS",
          SET_SHOW_PASSWORD_ON_MODAL: "SET_SHOW_PASSWORD_ON_MODAL",
          SET_NO_USER_MESSAGE: "SET_NO_USER_MESSAGE",
          SET_ACTIVE_USERS: "SET_ACTIVE_USERS",
          ADD_ACTIVE_USERS: "ADD_ACTIVE_USERS",
          SET_IS_FETCHING_ACTIVE_USERS: "SET_IS_FETCHING_ACTIVE_USERS",
          SET_IS_FETCHING_MORE_ACTIVE_USERS:
            "SET_IS_FETCHING_MORE_ACTIVE_USERS",
          SET_ACTIVE_USER_PROPERTY: "SET_ACTIVE_USER_PROPERTY",
          REMOVE_ACTIVE_USER: "REMOVE_ACTIVE_USER",
          UPDATE_ACTIVE_USER: "UPDATE_ACTIVE_USER",
          TOGGLE_EDIT_MODAL: "TOGGLE_EDIT_MODAL",
          UPDATE_DEFAULT_RATELIMIT: "UPDATE_DEFAULT_RATELIMIT",
          SET_DEFAULT_RL_LIMIT: "SET_DEFAULT_RL_LIMIT",
          SET_DEFAULT_RL_PERIOD: "SET_DEFAULT_RL_PERIOD",
          SET_IP_POOLS: "SET_IP_POOLS",
          SET_IS_ALLOWED_ARCHIVING: "SET_IS_ALLOWED_ARCHIVING",
          SET_PREFILLED_USERNAME: "SET_PREFILLED_USERNAME",
          SET_CURRENT_PAGE: "SET_CURRENT_PAGE",
          CAN_LOAD_MORE: "CAN_LOAD_MORE",
          SET_SEARCH_TEXT: "SET_SEARCH_TEXT",
          SET_SEARCH_TEXT_CHANGED: "SET_SEARCH_TEXT_CHANGED",
          SET_GENERATED_KEY_DATA: "SET_GENERATED_KEY_DATA",
          SET_IS_API_ONLINE: "SET_IS_API_ONLINE",
          SET_API_INDEX: "SET_API_INDEX",
          SET_API_NOTIFICATION_SEEN: "SET_API_NOTIFICATION_SEEN",
          EDIT_MODAL_USERNAME: "EDIT_MODAL_USERNAME",
          EDIT_MODAL_PASSWORD: "EDIT_MODAL_PASSWORD",
          EDIT_MODAL_DESCRIPTION: "EDIT_MODAL_DESCRIPTION",
          EDIT_MODAL_IPPOOL: "EDIT_MODAL_IPPOOL",
          EDIT_MODAL_RL_LIMIT: "EDIT_MODAL_RL_LIMIT",
          EDIT_MODAL_RL_PERIOD: "EDIT_MODAL_RL_PERIOD",
          EDIT_MODAL_RL_CUSTOM: "EDIT_MODAL_RL_CUSTOM",
          EDIT_MODAL_FB_ENABLED: "EDIT_MODAL_FB_ENABLED",
          EDIT_MODAL_FB_TEXT: "EDIT_MODAL_FB_TEXT",
          EDIT_MODAL_FB_HTML: "EDIT_MODAL_FB_HTML",
          EDIT_MODAL_OPEN_TRACKING: "EDIT_MODAL_OPEN_TRACKING",
          EDIT_MODAL_CLICK_TRACKING: "EDIT_MODAL_CLICK_TRACKING",
          EDIT_MODAL_BLOCKED: "EDIT_MODAL_BLOCKED",
          EDIT_MODAL_SANDBOX_MODE: "EDIT_MODAL_SANDBOX_MODE",
          EDIT_MODAL_ARCHIVING: "EDIT_MODAL_ARCHIVING",
          EDIT_MODAL_ARCHIVING_INITIAL: "EDIT_MODAL_ARCHIVING_INITIAL",
          EDIT_MODAL_AUDIT_EMAIL: "EDIT_MODAL_AUDIT_EMAIL",
          EDIT_MODAL_BOUNCE_NOTIFICATIONS: "EDIT_MODAL_BOUNCE_NOTIFICATIONS",
          EDIT_MODAL_BOUNCE_TARGET: "EDIT_MODAL_BOUNCE_TARGET",
          EDIT_MODAL_ENDPOINTS: "EDIT_MODAL_ENDPOINTS",
          ADD_EDIT_MODAL_ENDPOINTS: "ADD_EDIT_MODAL_ENDPOINTS",
          DELETE_EDIT_MODAL_ENDPOINTS: "DELETE_EDIT_MODAL_ENDPOINTS",
        },
        actions: {
          SAVE_COLUMNS: "SAVE_COLUMNS",
          LOAD_ACTIVE_USERS: "LOAD_ACTIVE_USERS",
          REMOVE_ACTIVE_USER: "REMOVE_ACTIVE_USER",
          UPDATE_ACTIVE_USER: "UPDATE_ACTIVE_USER",
          UPDATE_DEFAULT_RATELIMIT: "UPDATE_DEFAULT_RATELIMIT",
          SEARCH_USERS: "SEARCH_USERS",
          QUERY_API_STATUS: "QUERY_API_STATUS",
        },
      },
      y = d(P, "apiauth"),
      N = {
        columns_need_saving: !1,
        app_settings: {},
        automatic_cols: {},
        active_users: [],
        isFetchingActiveUsers: !1,
        isFetchingMoreActiveUsers: !1,
        ip_pools: [],
        default_ippool: -1,
        default_ippool_label: "",
        isEditModalShowing: !1,
        editModalData: {},
        defaultFBText: "To unsubscribe click: %%UNSUBSCRIBE%%",
        defaultFBHTML:
          '<br />\n<p><a href="%%UNSUBSCRIBE%%">unsubscribe</a></p>',
        defaultRLLimit: null,
        defaultRLPeriod: null,
        isAllowedArchiving: !1,
        prefilled_username: null,
        show_passwordless_column: !1,
        show_status_column: !1,
        searchText: "",
        searchTextChanged: !1,
        noUserMessage: "You currently don't have any API Keys.",
        showPasswordOnModal: !1,
        generatedKeyData: null,
        apiOnline: null,
        current_page: 0,
        canLoadMore: !1,
        apiIndex: {},
        apiNotificationSeen: !1,
      };
    function R(t, e) {
      var i = t.username.toLowerCase().replace(/[^0-9a-z]/gi, ""),
        s = e.username.toLowerCase().replace(/[^0-9a-z]/gi, ""),
        a = i.localeCompare(s);
      return 0 === a ? 0 : a > 0 ? 1 : -1;
    }
    var k =
        ((p = {}),
        Object(u["a"])(p, P.getters.GET_IS_COLUMN_SHOWN, function (t) {
          return function (e) {
            if (t.app_settings["apiauth_automatic_cols"])
              return t.automatic_cols[e];
            var i = "show_apiauth_" + e + "_col";
            return (
              void 0 !== t.app_settings[i] &&
              null !== t.app_settings[i] &&
              t.app_settings[i]
            );
          };
        }),
        Object(u["a"])(p, P.getters.GET_GENERATED_KEY_DATA, function (t) {
          return null === t.generatedKeyData ? { key: "" } : t.generatedKeyData;
        }),
        Object(u["a"])(p, P.getters.GET_IS_AUTOMATIC_COLS, function (t) {
          return t.app_settings["apiauth_automatic_cols"];
        }),
        Object(u["a"])(p, P.getters.GET_NO_USER_MESSAGE, function (t) {
          return t.noUserMessage;
        }),
        Object(u["a"])(p, P.getters.CURRENT_PAGE, function (t) {
          return t.current_page;
        }),
        Object(u["a"])(p, P.getters.CAN_LOAD_MORE, function (t) {
          return t.canLoadMore;
        }),
        Object(u["a"])(p, P.getters.GET_ACTIVE_USERS, function (t) {
          return t.active_users;
        }),
        Object(u["a"])(p, P.getters.IS_FETCHING_ACTIVE_USERS, function (t) {
          return t.isFetchingActiveUsers;
        }),
        Object(u["a"])(
          p,
          P.getters.IS_FETCHING_MORE_ACTIVE_USERS,
          function (t) {
            return t.isFetchingMoreActiveUsers;
          },
        ),
        Object(u["a"])(p, P.getters.IS_EDITING_USER, function (t) {
          return t.isEditModalShowing;
        }),
        Object(u["a"])(p, P.getters.GET_DEFAULT_RL_LIMIT, function (t) {
          return t.defaultRLLimit;
        }),
        Object(u["a"])(p, P.getters.GET_DEFAULT_RL_PERIOD, function (t) {
          return t.defaultRLPeriod;
        }),
        Object(u["a"])(p, P.getters.HAS_IP_POOLS, function (t) {
          return t.ip_pools.length > 0;
        }),
        Object(u["a"])(p, P.getters.GET_IP_POOLS, function (t) {
          return t.ip_pools;
        }),
        Object(u["a"])(p, P.getters.GET_IP_POOL_LABEL, function (t) {
          return function (e) {
            var i = null;
            return "default" === e
              ? null != t.default_ippool_label && "" != t.default_ippool_label
                ? "Use default (" + t.default_ippool_label + ")"
                : "Use default"
              : (void 0 !== e &&
                  null !== e &&
                  t.ip_pools.forEach(function (t) {
                    t.id === e && (i = t.label);
                  }),
                i);
          };
        }),
        Object(u["a"])(p, P.getters.GET_SEARCH_TEXT, function (t) {
          return t.searchText;
        }),
        Object(u["a"])(p, P.getters.GET_SHOW_PASSWORD_ON_MODAL, function (t) {
          return t.showPasswordOnModal;
        }),
        Object(u["a"])(p, P.getters.GET_PREFILLED_USERNAME, function (t) {
          return t.prefilled_username;
        }),
        Object(u["a"])(p, P.getters.GET_SHOW_PASSWORDLESS_COLUMN, function (t) {
          return t.show_passwordless_column;
        }),
        Object(u["a"])(p, P.getters.GET_SHOW_STATUS_COLUMN, function (t) {
          return t.show_status_column;
        }),
        Object(u["a"])(p, P.getters.GET_API_NOTIFICATION_SEEN, function (t) {
          return t.apiNotificationSeen;
        }),
        Object(u["a"])(p, P.getters.EDIT_MODAL_IS_PASSWORDLESS, function () {
          return !0;
        }),
        Object(u["a"])(p, P.getters.EDIT_MODAL_IS_EDITING, function (t) {
          return null !== t.editModalData &&
            void 0 !== t.editModalData.is_editing &&
            null !== t.editModalData.is_editing
            ? t.editModalData.is_editing
            : "";
        }),
        Object(u["a"])(p, P.getters.EDIT_MODAL_USERNAME, function (t) {
          return null !== t.editModalData &&
            void 0 !== t.editModalData.username &&
            null !== t.editModalData.username
            ? t.editModalData.username
            : "";
        }),
        Object(u["a"])(p, P.getters.EDIT_MODAL_OLD_USERNAME, function (t) {
          return null !== t.editModalData &&
            void 0 !== t.editModalData.old_username &&
            null !== t.editModalData.old_username
            ? t.editModalData.old_username
            : "";
        }),
        Object(u["a"])(p, P.getters.EDIT_MODAL_PASSWORD, function (t) {
          return null !== t.editModalData &&
            void 0 !== t.editModalData.password &&
            null !== t.editModalData.password
            ? t.editModalData.password
            : "";
        }),
        Object(u["a"])(p, P.getters.EDIT_MODAL_DESCRIPTION, function (t) {
          return null !== t.editModalData &&
            void 0 !== t.editModalData.description &&
            null !== t.editModalData.description
            ? t.editModalData.description
            : "";
        }),
        Object(u["a"])(p, P.getters.EDIT_MODAL_IPPOOL, function (t) {
          return null !== t.editModalData &&
            void 0 !== t.editModalData.ippool &&
            null !== t.editModalData.ippool
            ? t.editModalData.ippool
            : "";
        }),
        Object(u["a"])(p, P.getters.EDIT_MODAL_RL_LIMIT, function (t) {
          return null !== t.editModalData &&
            void 0 !== t.editModalData.ratelimit_limit &&
            null !== t.editModalData.ratelimit_limit
            ? t.editModalData.ratelimit_limit
            : "";
        }),
        Object(u["a"])(p, P.getters.EDIT_MODAL_RL_PERIOD, function (t) {
          return null !== t.editModalData &&
            void 0 !== t.editModalData.ratelimit_period &&
            null !== t.editModalData.ratelimit_period
            ? t.editModalData.ratelimit_period
            : "unlimited";
        }),
        Object(u["a"])(p, P.getters.EDIT_MODAL_RL_CUSTOM, function (t) {
          return (
            null !== t.editModalData &&
            void 0 !== t.editModalData.ratelimit_custom &&
            null !== t.editModalData.ratelimit_custom &&
            t.editModalData.ratelimit_custom
          );
        }),
        Object(u["a"])(p, P.getters.EDIT_MODAL_FB_ENABLED, function (t) {
          return (
            null !== t.editModalData &&
            void 0 !== t.editModalData.feedback_enabled &&
            null !== t.editModalData.feedback_enabled &&
            t.editModalData.feedback_enabled
          );
        }),
        Object(u["a"])(p, P.getters.EDIT_MODAL_FB_TEXT, function (t) {
          return null !== t.editModalData &&
            void 0 !== t.editModalData.feedback_text &&
            null !== t.editModalData.feedback_text
            ? t.editModalData.feedback_text
            : t.defaultFBText;
        }),
        Object(u["a"])(p, P.getters.EDIT_MODAL_FB_HTML, function (t) {
          return null !== t.editModalData &&
            void 0 !== t.editModalData.feedback_html &&
            null !== t.editModalData.feedback_html
            ? t.editModalData.feedback_html
            : t.defaultFBHTML;
        }),
        Object(u["a"])(p, P.getters.EDIT_MODAL_OPEN_TRACKING, function (t) {
          return (
            null !== t.editModalData &&
            void 0 !== t.editModalData.open_tracking &&
            null !== t.editModalData.open_tracking &&
            t.editModalData.open_tracking
          );
        }),
        Object(u["a"])(p, P.getters.EDIT_MODAL_CLICK_TRACKING, function (t) {
          return (
            null !== t.editModalData &&
            void 0 !== t.editModalData.click_tracking &&
            null !== t.editModalData.click_tracking &&
            t.editModalData.click_tracking
          );
        }),
        Object(u["a"])(p, P.getters.EDIT_MODAL_BLOCKED, function (t) {
          return (
            null !== t.editModalData &&
            void 0 !== t.editModalData.blocked &&
            null !== t.editModalData.blocked &&
            t.editModalData.blocked
          );
        }),
        Object(u["a"])(p, P.getters.EDIT_MODAL_SANDBOX_MODE, function (t) {
          return (
            null !== t.editModalData &&
            void 0 !== t.editModalData.sandbox_mode &&
            null !== t.editModalData.sandbox_mode &&
            t.editModalData.sandbox_mode
          );
        }),
        Object(u["a"])(p, P.getters.EDIT_MODAL_ARCHIVING, function (t) {
          return (
            null !== t.editModalData &&
            void 0 !== t.editModalData.archiving &&
            null !== t.editModalData.archiving &&
            t.editModalData.archiving
          );
        }),
        Object(u["a"])(p, P.getters.EDIT_MODAL_ARCHIVING_INITIAL, function (t) {
          return (
            null !== t.editModalData &&
            void 0 !== t.editModalData.archiving_initial &&
            null !== t.editModalData.archiving_initial &&
            t.editModalData.archiving_initial
          );
        }),
        Object(u["a"])(p, P.getters.EDIT_MODAL_AUDIT_EMAIL, function (t) {
          return null !== t.editModalData &&
            void 0 !== t.editModalData.audit_email &&
            null !== t.editModalData.audit_email
            ? t.editModalData.audit_email
            : "";
        }),
        Object(u["a"])(
          p,
          P.getters.EDIT_MODAL_BOUNCE_NOTIFICATIONS,
          function (t) {
            return (
              null !== t.editModalData &&
              void 0 !== t.editModalData.bounce_notifications &&
              null !== t.editModalData.bounce_notifications &&
              t.editModalData.bounce_notifications
            );
          },
        ),
        Object(u["a"])(p, P.getters.EDIT_MODAL_BOUNCE_TARGET, function (t) {
          return null !== t.editModalData &&
            void 0 !== t.editModalData.bounce_target &&
            null !== t.editModalData.bounce_target
            ? t.editModalData.bounce_target
            : "";
        }),
        Object(u["a"])(p, P.getters.EDIT_MODAL_HASH, function (t) {
          return null !== t.editModalData &&
            void 0 !== t.editModalData._hash &&
            null !== t.editModalData._hash
            ? t.editModalData._hash
            : "";
        }),
        Object(u["a"])(p, P.getters.EDIT_MODAL_ENDPOINTS, function (t) {
          return null !== t.editModalData &&
            void 0 !== t.editModalData.endpoints &&
            null !== t.editModalData.endpoints
            ? t.editModalData.endpoints
            : [];
        }),
        Object(u["a"])(p, P.getters.GET_IS_ALLOWED_ARCHIVING, function (t) {
          return t.isAllowedArchiving;
        }),
        Object(u["a"])(p, P.getters.GET_IS_API_ONLINE, function (t) {
          return t.apiOnline;
        }),
        Object(u["a"])(p, P.getters.GET_API_INDEX, function (t) {
          return t.apiIndex;
        }),
        p),
      w = function (t) {
        var e = {
            description: !1,
            ippool: !1,
            unsubscribes: !1,
            ratelimit: !1,
            archiving: !1,
            open_tracking: !1,
            click_tracking: !1,
          },
          i = function (t) {
            return "string" == typeof t && t.length > 0;
          };
        (t.active_users.forEach(function (s) {
          (s.blocked && (t.show_status_column = !0),
            s.sandbox_mode && (t.show_status_column = !0),
            s.passwordless && (t.show_passwordless_column = !0),
            (null !== s.ippool && void 0 !== s.ippool) ||
              (s.ippool = t.default_ippool),
            !e.description && i(s.description) && (e.description = !0),
            e.ippool ||
              s.ippool === t.default_ippool ||
              "default" == s.ippool ||
              (e.ippool = !0),
            !e.unsubscribes && s.feedback_enabled && (e.unsubscribes = !0),
            !e.ratelimit && s.ratelimit_custom && (e.ratelimit = !0),
            !e.archiving && s.archiving && (e.archiving = !0),
            !e.open_tracking && s.open_tracking && (e.open_tracking = !0),
            !e.click_tracking && s.click_tracking && (e.click_tracking = !0));
        }),
          (t.automatic_cols = e));
      },
      U =
        ((m = {}),
        Object(u["a"])(m, P.mutations.SET_GENERATED_KEY_DATA, function (t, e) {
          t.generatedKeyData = e;
        }),
        Object(u["a"])(m, P.mutations.SET_IS_API_ONLINE, function (t, e) {
          t.apiOnline = e;
        }),
        Object(u["a"])(
          m,
          P.mutations.SET_SHOW_PASSWORD_ON_MODAL,
          function (t, e) {
            t.showPasswordOnModal = e;
          },
        ),
        Object(u["a"])(m, P.mutations.SET_APP_SETTINGS, function (t, e) {
          t.app_settings = e;
        }),
        Object(u["a"])(m, P.mutations.TOGGLE_IS_COLUMN_SHOWN, function (t, e) {
          var i = "show_apiauth_" + e + "_col";
          (n["a"].set(t.app_settings, i, !t.app_settings[i]),
            (t.columns_need_saving = !0));
        }),
        Object(u["a"])(m, P.mutations.SET_IS_AUTOMATIC_COLS, function (t, e) {
          (n["a"].set(t.app_settings, "apiauth_automatic_cols", e),
            !1 === e &&
              (null === t.app_settings["show_apiauth_description_col"] &&
                (t.app_settings["show_apiauth_description_col"] =
                  t.automatic_cols["description"]),
              null === t.app_settings["show_apiauth_ippool_col"] &&
                (t.app_settings["show_apiauth_ippool_col"] =
                  t.automatic_cols["ippool"]),
              null === t.app_settings["show_apiauth_unsubscribes_col"] &&
                (t.app_settings["show_apiauth_unsubscribes_col"] =
                  t.automatic_cols["unsubscribes"]),
              null === t.app_settings["show_apiauth_ratelimit_col"] &&
                (t.app_settings["show_apiauth_ratelimit_col"] =
                  t.automatic_cols["ratelimit"]),
              null === t.app_settings["show_apiauth_archiving_col"] &&
                (t.app_settings["show_apiauth_archiving_col"] =
                  t.automatic_cols["archiving"]),
              null === t.app_settings["show_apiauth_open_tracking_col"] &&
                (t.app_settings["show_apiauth_open_tracking_col"] =
                  t.automatic_cols["open_tracking"]),
              null === t.app_settings["show_apiauth_click_tracking_col"] &&
                (t.app_settings["show_apiauth_click_tracking_col"] =
                  t.automatic_cols["click_tracking"])),
            (t.columns_need_saving = !0));
        }),
        Object(u["a"])(m, P.mutations.SET_NO_USER_MESSAGE, function (t, e) {
          t.noUserMessage = e;
        }),
        Object(u["a"])(m, P.mutations.SET_ACTIVE_USERS, function (t, e) {
          ((t.active_users = e.sort(function (t, e) {
            return R(t, e);
          })),
            w(t));
        }),
        Object(u["a"])(m, P.mutations.ADD_ACTIVE_USERS, function (t, e) {
          var i = t.active_users;
          (i.push.apply(i, Object(A["a"])(e)),
            (t.active_users = i.sort(function (t, e) {
              return R(t, e);
            })),
            w(t));
        }),
        Object(u["a"])(m, P.mutations.CAN_LOAD_MORE, function (t, e) {
          t.canLoadMore = e;
        }),
        Object(u["a"])(m, P.mutations.SET_SEARCH_TEXT, function (t, e) {
          ((t.searchText = e), (t.searchTextChanged = !0));
        }),
        Object(u["a"])(m, P.mutations.SET_SEARCH_TEXT_CHANGED, function (t, e) {
          t.searchTextChanged = e;
        }),
        Object(u["a"])(
          m,
          P.mutations.SET_IS_FETCHING_ACTIVE_USERS,
          function (t, e) {
            t.isFetchingActiveUsers = e;
          },
        ),
        Object(u["a"])(
          m,
          P.mutations.SET_IS_FETCHING_MORE_ACTIVE_USERS,
          function (t, e) {
            t.isFetchingMoreActiveUsers = e;
          },
        ),
        Object(u["a"])(
          m,
          P.mutations.SET_API_NOTIFICATION_SEEN,
          function (t, e) {
            t.apiNotificationSeen = e;
          },
        ),
        Object(u["a"])(
          m,
          P.mutations.SET_ACTIVE_USER_PROPERTY,
          function (t, e) {
            var i = e.active_user,
              s = e.key,
              a = e.value;
            n["a"].set(i, s, a);
          },
        ),
        Object(u["a"])(m, P.mutations.REMOVE_ACTIVE_USER, function (t, e) {
          var i = e.username;
          t.active_users.forEach(function (e, s) {
            e.username === i && t.active_users.splice(s, 1);
          });
        }),
        Object(u["a"])(m, P.mutations.UPDATE_ACTIVE_USER, function (t, e) {
          var i = e.full_api_key,
            s = e.results,
            a = !1;
          (t.active_users.forEach(function (e, o) {
            if (e.password === i)
              return (n["a"].set(t.active_users, o, s), void (a = !0));
          }),
            a || n["a"].set(t.active_users, t.active_users.length, s),
            (t.active_users = t.active_users.sort(function (t, e) {
              return R(t, e);
            })),
            w(t));
        }),
        Object(u["a"])(m, P.mutations.TOGGLE_EDIT_MODAL, function (t, e) {
          var s = e.visible,
            a = e.data;
          if (((t.isEditModalShowing = s), s && null !== a && void 0 !== a))
            ((a.old_username = a.username),
              (a.is_editing = !0),
              (a.archiving_initial = a.archiving),
              console.log("EDIT_MODAL_DATA:", a),
              (t.editModalData = M({}, a)),
              (t.showPasswordOnModal = !1));
          else {
            var n = i("25b7"),
              o = n.generate({ length: 16, numbers: !0 }),
              r = [401],
              c = {
                is_editing: !1,
                username: "",
                description: "",
                ippool: "default",
                use_default_ippool: !0,
                feedback_enabled: !1,
                feedback_text: t.defaultFBText,
                feedback_html: t.defaultFBHTML,
                open_tracking: !1,
                click_tracking: !1,
                blocked: !1,
                sandbox_mode: !1,
                archiving: !1,
                archiving_initial: !1,
                audit_email: "",
                bounce_notifications: !1,
                bounce_target: "",
                endpoints: r,
                password: o,
                passwordless: !1,
              };
            ((c.ratelimit_limit = t.defaultRLLimit),
              (c.ratelimit_period = t.defaultRLPeriod),
              (c.ratelimit_custom = !1),
              (t.editModalData = M({}, c)),
              (t.showPasswordOnModal = !0));
          }
        }),
        Object(u["a"])(m, P.mutations.SET_DEFAULT_RL_LIMIT, function (t, e) {
          t.defaultRLLimit = e;
        }),
        Object(u["a"])(m, P.mutations.SET_DEFAULT_RL_PERIOD, function (t, e) {
          t.defaultRLPeriod = e;
        }),
        Object(u["a"])(m, P.mutations.SET_IP_POOLS, function (t, e) {
          ((t.ip_pools = e),
            t.ip_pools.forEach(function (e) {
              e.is_default &&
                ((t.default_ippool = e.id), (t.default_ippool_label = e.label));
            }));
        }),
        Object(u["a"])(m, P.mutations.SET_PREFILLED_USERNAME, function (t, e) {
          t.prefilled_username = e;
        }),
        Object(u["a"])(m, P.mutations.EDIT_MODAL_USERNAME, function (t, e) {
          ((t.editModalData.username = e), (t.prefilled_username = null));
        }),
        Object(u["a"])(m, P.mutations.EDIT_MODAL_PASSWORD, function (t, e) {
          t.editModalData.password = e;
        }),
        Object(u["a"])(m, P.mutations.EDIT_MODAL_DESCRIPTION, function (t, e) {
          t.editModalData.description = e;
        }),
        Object(u["a"])(m, P.mutations.EDIT_MODAL_IPPOOL, function (t, e) {
          t.editModalData.ippool = e;
        }),
        Object(u["a"])(m, P.mutations.EDIT_MODAL_RL_LIMIT, function (t, e) {
          t.editModalData.ratelimit_limit = e;
        }),
        Object(u["a"])(m, P.mutations.EDIT_MODAL_RL_PERIOD, function (t, e) {
          t.editModalData.ratelimit_period = e;
        }),
        Object(u["a"])(m, P.mutations.EDIT_MODAL_RL_CUSTOM, function (t, e) {
          ((t.editModalData.ratelimit_custom = e),
            e ||
              ((t.editModalData.ratelimit_limit = t.defaultRLLimit),
              (t.editModalData.ratelimit_period = t.defaultRLPeriod)));
        }),
        Object(u["a"])(m, P.mutations.EDIT_MODAL_FB_ENABLED, function (t, e) {
          t.editModalData.feedback_enabled = e;
        }),
        Object(u["a"])(m, P.mutations.EDIT_MODAL_FB_TEXT, function (t, e) {
          t.editModalData.feedback_text = e;
        }),
        Object(u["a"])(m, P.mutations.EDIT_MODAL_FB_HTML, function (t, e) {
          t.editModalData.feedback_html = e;
        }),
        Object(u["a"])(
          m,
          P.mutations.EDIT_MODAL_OPEN_TRACKING,
          function (t, e) {
            t.editModalData.open_tracking = e;
          },
        ),
        Object(u["a"])(
          m,
          P.mutations.EDIT_MODAL_CLICK_TRACKING,
          function (t, e) {
            t.editModalData.click_tracking = e;
          },
        ),
        Object(u["a"])(m, P.mutations.EDIT_MODAL_BLOCKED, function (t, e) {
          n["a"].set(t.editModalData, "blocked", e);
        }),
        Object(u["a"])(m, P.mutations.EDIT_MODAL_SANDBOX_MODE, function (t, e) {
          n["a"].set(t.editModalData, "sandbox_mode", e);
        }),
        Object(u["a"])(m, P.mutations.EDIT_MODAL_ARCHIVING, function (t, e) {
          t.editModalData.archiving = e;
        }),
        Object(u["a"])(
          m,
          P.mutations.EDIT_MODAL_ARCHIVING_INITIAL,
          function (t, e) {
            t.editModalData.archiving_initial = e;
          },
        ),
        Object(u["a"])(m, P.mutations.EDIT_MODAL_AUDIT_EMAIL, function (t, e) {
          t.editModalData.audit_email = e;
        }),
        Object(u["a"])(
          m,
          P.mutations.EDIT_MODAL_BOUNCE_NOTIFICATIONS,
          function (t, e) {
            t.editModalData.bounce_notifications = e;
          },
        ),
        Object(u["a"])(
          m,
          P.mutations.EDIT_MODAL_BOUNCE_TARGET,
          function (t, e) {
            t.editModalData.bounce_target = e;
          },
        ),
        Object(u["a"])(m, P.mutations.EDIT_MODAL_ENDPOINTS, function (t, e) {
          t.editModalData.endpoints = e;
        }),
        Object(u["a"])(
          m,
          P.mutations.ADD_EDIT_MODAL_ENDPOINTS,
          function (t, e) {
            t.editModalData.endpoints.push(e);
          },
        ),
        Object(u["a"])(
          m,
          P.mutations.DELETE_EDIT_MODAL_ENDPOINTS,
          function (t, e) {
            t.editModalData.endpoints = t.editModalData.endpoints.filter(
              function (t) {
                return t !== e;
              },
            );
          },
        ),
        Object(u["a"])(
          m,
          P.mutations.SET_IS_ALLOWED_ARCHIVING,
          function (t, e) {
            t.isAllowedArchiving = e;
          },
        ),
        Object(u["a"])(m, P.mutations.SET_CURRENT_PAGE, function (t, e) {
          t.current_page = e;
        }),
        Object(u["a"])(m, P.mutations.SET_API_INDEX, function (t, e) {
          t.apiIndex = e;
        }),
        m),
      x =
        ((f = {}),
        Object(u["a"])(f, P.actions.SAVE_COLUMNS, function (t) {
          if (t.state.columns_need_saving)
            return new Promise(function (e, i) {
              S.put(
                t.rootGetters[E.getters.BACKEND_URL](
                  "API Keys",
                  "save-columns",
                ),
                { shown_columns: t.state.app_settings },
              )
                .then(function (i) {
                  ((t.columns_need_saving = !1), e(i));
                })
                .catch(function (t) {
                  i(t);
                });
            });
        }),
        Object(u["a"])(f, P.actions.LOAD_ACTIVE_USERS, function (t, e) {
          var i = e.isSearch;
          (void 0 !== i &&
            i &&
            t.commit(
              P.mutations.SET_NO_USER_MESSAGE,
              "No API Keys users matched the search criteria",
            ),
            N.searchTextChanged && t.commit(P.mutations.SET_CURRENT_PAGE, 0));
          var s = !1;
          return (
            0 === N.current_page
              ? t.commit(P.mutations.SET_IS_FETCHING_ACTIVE_USERS, !0)
              : ((s = !0),
                t.commit(P.mutations.SET_IS_FETCHING_MORE_ACTIVE_USERS, !0)),
            new Promise(function (e, i) {
              var a = new URLSearchParams(window.location.search),
                n = a.has("show_hidden_endpoints");
              S.post(
                t.rootGetters[E.getters.BACKEND_URL](
                  "API Keys",
                  "load-active-users",
                ),
                {
                  page_offset: N.current_page,
                  search_text: N.searchText,
                  show_hidden_endpoints: n,
                },
              )
                .then(function (i) {
                  (t.commit(P.mutations.SET_SEARCH_TEXT_CHANGED, !1),
                    s
                      ? t.commit(P.mutations.ADD_ACTIVE_USERS, i.results.users)
                      : t.commit(P.mutations.SET_ACTIVE_USERS, i.results.users),
                    t.commit(
                      P.mutations.SET_GENERATED_KEY_DATA,
                      i.results.generated_key,
                    ),
                    t.commit(
                      P.mutations.CAN_LOAD_MORE,
                      i.results.total_users > N.active_users.length,
                    ),
                    t.commit(P.mutations.SET_CURRENT_PAGE, N.current_page + 1),
                    t.commit(
                      P.mutations.SET_API_INDEX,
                      i.results.api_index.groups,
                    ),
                    e(i));
                })
                .catch(function (t) {
                  i(t);
                });
            }).then(function () {
              s
                ? t.commit(P.mutations.SET_IS_FETCHING_MORE_ACTIVE_USERS, !1)
                : t.commit(P.mutations.SET_IS_FETCHING_ACTIVE_USERS, !1);
            })
          );
        }),
        Object(u["a"])(f, P.actions.REMOVE_ACTIVE_USER, function (t, e) {
          var i = e.username;
          return new Promise(function (e, s) {
            S.post(
              t.rootGetters[E.getters.BACKEND_URL](
                "API Keys",
                "remove-active-user",
              ),
              { username: i },
            )
              .then(function (s) {
                (t.commit(P.mutations.REMOVE_ACTIVE_USER, { username: i }),
                  e(s));
              })
              .catch(function (t) {
                s(t);
              });
          });
        }),
        Object(u["a"])(f, P.actions.UPDATE_ACTIVE_USER, function (t, e) {
          var i = e.full_api_key,
            s = e.description,
            a = e.ippool,
            n = e.ratelimit_limit,
            o = e.ratelimit_period,
            r = e.ratelimit_custom,
            c = e.feedback_enabled,
            l = e.feedback_text,
            u = e.feedback_html,
            _ = e.open_tracking,
            d = e.click_tracking,
            p = e.blocked,
            m = e.sandbox_mode,
            f = e.archiving,
            h = e.audit_email,
            g = e.bounce_notifications,
            b = e.endpoints,
            v = e.is_editing,
            O = e.api_notification_seen,
            T = e._key,
            A = e._hash;
          return new Promise(function (e, D) {
            var I = !1;
            (N.ip_pools.forEach(function (t) {
              t.id === a && (I = t.is_default);
            }),
              S.post(
                t.rootGetters[E.getters.BACKEND_URL](
                  "API Keys",
                  "update-active-user",
                ),
                {
                  full_api_key: i,
                  description: s,
                  ippool: a,
                  ratelimit_limit: n,
                  ratelimit_period: o,
                  ratelimit_custom: r,
                  feedback_enabled: c,
                  feedback_text: l,
                  feedback_html: u,
                  open_tracking: _,
                  click_tracking: d,
                  blocked: p,
                  sandbox_mode: m,
                  archiving: f,
                  audit_email: h,
                  bounce_notifications: g,
                  endpoints: b,
                  use_default_ippool: I,
                  is_editing: v,
                  api_notification_seen: O,
                  _key: T,
                  _hash: A,
                },
              )
                .then(function (s) {
                  (t.commit(P.mutations.UPDATE_ACTIVE_USER, {
                    full_api_key: i,
                    results: s.results.user,
                  }),
                    t.commit(
                      P.mutations.SET_GENERATED_KEY_DATA,
                      s.results.generated_key,
                    ),
                    e(s));
                })
                .catch(function (t) {
                  D(t);
                }));
          });
        }),
        Object(u["a"])(f, P.actions.UPDATE_DEFAULT_RATELIMIT, function (t, e) {
          var i = e.ratelimit_limit,
            s = e.ratelimit_period;
          return new Promise(function (e, a) {
            S.post(
              t.rootGetters[E.getters.BACKEND_URL](
                "API Keys",
                "update-default-ratelimit",
              ),
              { ratelimit_limit: i, ratelimit_period: s },
            )
              .then(function (i) {
                (t.commit(
                  P.mutations.SET_DEFAULT_RL_LIMIT,
                  i.results.ratelimit_limit,
                ),
                  t.commit(
                    P.mutations.SET_DEFAULT_RL_PERIOD,
                    i.results.ratelimit_period,
                  ),
                  e(i));
              })
              .catch(function (t) {
                a(t);
              });
          });
        }),
        Object(u["a"])(f, P.actions.QUERY_API_STATUS, function (t) {
          return new Promise(function (e, i) {
            var s = I.a.create();
            s.get("https://api.smtp2go.com/v3/api/echo")
              .then(function () {
                (t.commit(P.mutations.SET_IS_API_ONLINE, !0), e());
              })
              .catch(function () {
                (t.commit(P.mutations.SET_IS_API_ONLINE, !1), i());
              });
          });
        }),
        f),
      j = { namespaced: !0, state: N, getters: k, mutations: U, actions: x },
      G = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "template-page" },
          [
            e(
              "div",
              {
                staticClass: "content-main",
                class: { "is-active": !t.isEditModalActive },
              },
              [
                e(
                  "page",
                  {
                    attrs: { title: "API Keys" },
                    scopedSlots: t._u([
                      {
                        key: "description",
                        fn: function () {
                          return [
                            e("p", [
                              t._v(
                                "Create and manage API keys required to use the SMTP2GO API.",
                              ),
                            ]),
                          ];
                        },
                        proxy: !0,
                      },
                    ]),
                  },
                  [
                    e(
                      "div",
                      {
                        staticClass: "col-lg-12 col-md-12 col-sm-12 col-xs-12",
                      },
                      [
                        e(
                          "div",
                          {
                            staticClass:
                              "card padded dataTables_wrapper card-manage",
                          },
                          [
                            e(
                              "div",
                              { staticClass: "card--tab has-full-functions" },
                              [
                                e("h2", { staticClass: "card--title" }, [
                                  t._v("Manage API Keys"),
                                ]),
                                e("div", { staticClass: "card-functions" }, [
                                  e(
                                    "button",
                                    {
                                      staticClass: "btn button-dropdown",
                                      attrs: { type: "button", role: "button" },
                                      on: {
                                        click: function (e) {
                                          return (e.preventDefault(), t.add());
                                        },
                                      },
                                    },
                                    [
                                      t._v("\n                Add "),
                                      e(
                                        "span",
                                        { staticClass: "mobile-hide" },
                                        [t._v("API Key")],
                                      ),
                                      e(
                                        "span",
                                        { staticClass: "desktop-hide" },
                                        [t._v("new")],
                                      ),
                                    ],
                                  ),
                                ]),
                              ],
                            ),
                            e(
                              "div",
                              { staticClass: "top search-grouped bar-full" },
                              [
                                e(
                                  "div",
                                  {
                                    staticClass: "search",
                                    attrs: { "data-v-07c74042": "" },
                                  },
                                  [
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "dataTables_filter has-search-options",
                                      },
                                      [
                                        e("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: t.searchText,
                                              expression: "searchText",
                                            },
                                          ],
                                          staticClass:
                                            "form-control input-small input-inline mixinTriggerable_layer",
                                          attrs: {
                                            type: "search",
                                            "aria-controls": "emails_bounces",
                                            id: "main-search",
                                            placeholder:
                                              "Search for an API key...",
                                          },
                                          domProps: { value: t.searchText },
                                          on: {
                                            keyup: function (e) {
                                              return !e.type.indexOf("key") &&
                                                t._k(
                                                  e.keyCode,
                                                  "enter",
                                                  13,
                                                  e.key,
                                                  "Enter",
                                                )
                                                ? null
                                                : (e.preventDefault(),
                                                  t.search.apply(
                                                    null,
                                                    arguments,
                                                  ));
                                            },
                                            input: function (e) {
                                              e.target.composing ||
                                                (t.searchText = e.target.value);
                                            },
                                          },
                                        }),
                                        e(
                                          "button",
                                          {
                                            staticClass: "btn blue btn-search",
                                            attrs: {
                                              type: "button",
                                              role: "button",
                                            },
                                            on: {
                                              click: function (e) {
                                                return (
                                                  e.preventDefault(),
                                                  t.search.apply(
                                                    null,
                                                    arguments,
                                                  )
                                                );
                                              },
                                            },
                                          },
                                          [
                                            e("span", {
                                              staticClass: "icon-search",
                                            }),
                                            e(
                                              "span",
                                              { staticClass: "button-text" },
                                              [t._v(" Search")],
                                            ),
                                          ],
                                        ),
                                      ],
                                    ),
                                  ],
                                ),
                              ],
                            ),
                            t.isFetchingActiveUsers
                              ? e(
                                  "div",
                                  { staticClass: "manage-ips-loader" },
                                  [
                                    e("base-loader", {
                                      attrs: { isFullScreen: "" },
                                    }),
                                  ],
                                  1,
                                )
                              : t._e(),
                            t.has_active_users
                              ? e("manage-user-table")
                              : t._e(),
                            t.isFetchingActiveUsers || t.has_active_users
                              ? t._e()
                              : e("empty-table-note", {
                                  scopedSlots: t._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function () {
                                          return [
                                            t._v(
                                              "\n              " +
                                                t._s(t.noUserMessage) +
                                                "\n            ",
                                            ),
                                          ];
                                        },
                                        proxy: !0,
                                      },
                                    ],
                                    null,
                                    !1,
                                    135827392,
                                  ),
                                }),
                            e("user-settings"),
                          ],
                          1,
                        ),
                      ],
                    ),
                  ],
                ),
              ],
              1,
            ),
            e("user-edit", { attrs: { "is-active": t.isEditModalActive } }),
          ],
          1,
        );
      },
      H = [],
      B = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          [
            e("header", { staticClass: "sg-feature--header" }, [
              e(
                "h3",
                { staticClass: "page-title" },
                [
                  t.hasBackButton
                    ? e("back-button", {
                        staticClass: "back-button",
                        on: { click: t.goBack },
                      })
                    : e("span", { staticClass: "title-icon" }, [
                        e(
                          "svg",
                          {
                            attrs: {
                              fill: "none",
                              height: "35",
                              viewBox: "0 0 35 35",
                              width: "35",
                              xmlns: "http://www.w3.org/2000/svg",
                              "xmlns:xlink": "http://www.w3.org/1999/xlink",
                            },
                          },
                          [
                            e(
                              "linearGradient",
                              { attrs: { id: "a" } },
                              [
                                e("stop", {
                                  attrs: {
                                    offset: "0",
                                    "stop-color": "#52b3ee",
                                  },
                                }),
                                e("stop", {
                                  attrs: {
                                    offset: "1",
                                    "stop-color": "#3ca4e3",
                                  },
                                }),
                              ],
                              1,
                            ),
                            e("linearGradient", {
                              attrs: {
                                id: "b",
                                gradientUnits: "userSpaceOnUse",
                                x1: "17.5029",
                                x2: "17.5029",
                                "xlink:href": "#a",
                                y1: ".199219",
                                y2: "34.1992",
                              },
                            }),
                            e("linearGradient", {
                              attrs: {
                                id: "c",
                                gradientUnits: "userSpaceOnUse",
                                x1: "10.5",
                                x2: "10.5",
                                "xlink:href": "#a",
                                y1: "0",
                                y2: "21",
                              },
                            }),
                            e("clipPath", { attrs: { id: "d" } }, [
                              e("path", {
                                attrs: { d: "m7.22363 7.42969h21v21h-21z" },
                              }),
                            ]),
                            e("rect", {
                              attrs: {
                                fill: "url(#b)",
                                height: "34",
                                rx: "5",
                                width: "34",
                                x: ".50293",
                                y: ".199219",
                              },
                            }),
                            e("g", { attrs: { "clip-path": "url(#d)" } }, [
                              e("path", {
                                attrs: {
                                  d: "m0 0h21v21h-21z",
                                  fill: "url(#c)",
                                  transform: "translate(7.22363 7.42969)",
                                },
                              }),
                              e(
                                "g",
                                {
                                  attrs: {
                                    stroke: "#fff",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "1.5",
                                  },
                                },
                                [
                                  e("path", {
                                    attrs: {
                                      d: "m18.3799 16.0109c-.0003-.9819-.2759-1.944-.7955-2.7771s-1.2625-1.5038-2.1441-1.9359c-.8817-.4321-1.8669-.6083-2.8437-.5085-.9768.0997-1.906.4714-2.6822 1.0727-.77616.6014-1.36812 1.4084-1.70866 2.3293-.34053.9209-.41598 1.9189-.21779 2.8806.1982.9616.6621 1.8484 1.33902 2.5596.67693.7113 1.53973 1.2184 2.49043 1.4639v5.369c0 .3481.1383.6819.3844.9281.2461.2461.58.3844.9281.3844s.6819-.1383.9281-.3844c.2461-.2462.3844-.58.3844-.9281v-5.369c1.1271-.291 2.1256-.9484 2.8384-1.8689.7127-.9204 1.0994-2.0516 1.0991-3.2157z",
                                    },
                                  }),
                                  e("path", {
                                    attrs: {
                                      d: "m19.0913 21.2109c.6856-.0947 1.3456-.3246 1.9416-.6764l4.2937 4.2927c.2475.2391.5791.3714.9232.3684s.6733-.141.9167-.3843c.2433-.2434.3813-.5726.3843-.9167s-.1293-.6757-.3684-.9232l-4.2962-4.2928c.5894-.9984.8318-2.1638.6893-3.3144s-.6619-2.2217-1.4771-3.0461-1.8804-1.3558-3.0294-1.5112c-1.1489-.1554-2.317.0739-3.3219.6521",
                                    },
                                  }),
                                  e("path", {
                                    attrs: {
                                      d: "m13.1299 16.667c.7249 0 1.3125-.5876 1.3125-1.3125s-.5876-1.3125-1.3125-1.3125-1.3125.5876-1.3125 1.3125.5876 1.3125 1.3125 1.3125z",
                                    },
                                  }),
                                  e("path", {
                                    attrs: {
                                      d: "m13.1299 14.0421v-3.9874c0-.52216.2074-1.02292.5766-1.39213s.87-.57663 1.3921-.57663c.5222 0 1.0229.20742 1.3921.57663.3693.36921.5767.86997.5767 1.39213v.8654",
                                    },
                                  }),
                                ],
                              ),
                            ]),
                          ],
                          1,
                        ),
                      ]),
                  t._v("\n      " + t._s(t.title) + "\n    "),
                ],
                1,
              ),
              e(
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
      F = [],
      V = function () {
        var t = this,
          e = t._self._c;
        return e("button", {
          staticClass: "back-button",
          on: {
            click: function (e) {
              return t.$emit("click");
            },
          },
        });
      },
      K = [],
      W = (i("d3df"), i("2877")),
      X = {},
      q = Object(W["a"])(X, V, K, !1, null, "1317654f", null),
      Y = q.exports,
      Q = {
        components: { BackButton: Y },
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
      J = Q,
      z =
        (i("aa61"),
        i("d96c"),
        Object(W["a"])(J, B, F, !1, null, "5562029a", null)),
      Z = z.exports,
      tt = function () {
        var t = this,
          e = t._self._c;
        return e(
          "table",
          {
            staticClass: "dataTable table table-striped table-hover display",
            attrs: { id: "usersTable" },
          },
          [
            e("thead", [
              e(
                "tr",
                [
                  t._l(t.displayColumns, function (i) {
                    return e(
                      "th",
                      { key: i.id, attrs: { id: "table-" + i.id } },
                      [t._v("\n        " + t._s(i.label) + "\n      ")],
                    );
                  }),
                  t._m(0),
                ],
                2,
              ),
            ]),
            e("tbody", [
              e("tr", { staticClass: "ip-auth-result-wrapper" }, [
                e(
                  "td",
                  { staticClass: "no-content", attrs: { colspan: "100%" } },
                  [
                    e("div", { staticClass: "table-blank" }, [
                      e("div", { staticClass: "table-blank-content" }, [
                        e("p", [t._t("default")], 2),
                      ]),
                    ]),
                  ],
                ),
              ]),
            ]),
          ],
        );
      },
      et = [
        function () {
          var t = this,
            e = t._self._c;
          return e("th", { attrs: { id: "table-options" } }, [
            e("div", { staticClass: "dropdown-container is-disabled" }, [
              e(
                "span",
                {
                  staticClass: "dropdown-icon-container",
                  attrs: {
                    "data-toggle-trigger": "columns",
                    "data-trigger-on-close": "true",
                  },
                },
                [e("span", { staticClass: "dropdown-icon" })],
              ),
            ]),
          ]);
        },
      ],
      it = {
        data: function () {
          return {
            displayColumns: [
              { id: "username", label: "API Key" },
              { id: "description", label: "Description" },
              { id: "ippool", label: "IP Pool" },
              { id: "ratelimit", label: "Rate Limit" },
              { id: "unsubscribes", label: "Unsubscribes" },
              { id: "archiving", label: "Archiving" },
              { id: "open_tracking", label: "Open Tracking" },
              { id: "click_tracking", label: "Click Tracking" },
            ],
          };
        },
      },
      st = it,
      at = (i("ea5d"), Object(W["a"])(st, tt, et, !1, null, "7713bb92", null)),
      nt = at.exports,
      ot =
        (i("6762"),
        i("2fdb"),
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "table",
            {
              staticClass: "dataTable table table-striped table-hover display",
              attrs: { id: "usersTable" },
            },
            [
              e("thead", [
                e(
                  "tr",
                  [
                    t._l(t.activeColumns, function (i) {
                      return e(
                        "th",
                        { key: i.id, attrs: { id: "table-" + i.id } },
                        [t._v("\n        " + t._s(i.label) + "\n      ")],
                      );
                    }),
                    e("th", { attrs: { id: "table-options" } }, [
                      e("div", { staticClass: "dropdown-container" }, [
                        e(
                          "span",
                          {
                            staticClass: "dropdown-icon-container",
                            on: { click: t.triggerable_toggleOpened },
                          },
                          [e("span", { staticClass: "dropdown-icon" })],
                        ),
                        e(
                          "ul",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: t.triggerable_isOpen,
                                expression: "triggerable_isOpen",
                              },
                            ],
                            staticClass:
                              "dropdown-menu dropdown-options column-filter is-active mixin-triggerable-layer",
                            class: { "automatic-active": t.isAutomatic },
                            attrs: { id: "columns" },
                          },
                          [
                            e("li", { staticClass: "events-toggler" }, [
                              t._m(0),
                              e(
                                "a",
                                {
                                  staticClass: "btn blue events-latest",
                                  class: { "is-active": t.isAutomatic },
                                  attrs: { id: "display_automatic" },
                                  on: {
                                    click: function (e) {
                                      t.isAutomatic = !t.isAutomatic;
                                    },
                                  },
                                },
                                [e("span", [t._v("Automatic")])],
                              ),
                              e(
                                "a",
                                {
                                  staticClass: "btn blue events-all",
                                  class: { "is-active": !t.isAutomatic },
                                  attrs: { id: "display_custom" },
                                  on: {
                                    click: function (e) {
                                      t.isAutomatic = !t.isAutomatic;
                                    },
                                  },
                                },
                                [e("span", [t._v("Custom")])],
                              ),
                            ]),
                            t._l(t.columnFilters, function (i) {
                              return e(
                                "li",
                                {
                                  key: i.id,
                                  staticClass: "columns-filter",
                                  attrs: { id: "columns-filter-" + i.id },
                                  on: {
                                    click: function (e) {
                                      return t.handleColumnToggle(e, i);
                                    },
                                  },
                                },
                                [
                                  e("div", { staticClass: "checker" }, [
                                    e(
                                      "span",
                                      {
                                        staticClass: "checker-box",
                                        class: {
                                          checked: t.isColumnShown(i.id),
                                        },
                                      },
                                      [
                                        e("input", {
                                          attrs: {
                                            type: "checkbox",
                                            name: "columns[]",
                                          },
                                          domProps: { value: i.id },
                                        }),
                                      ],
                                    ),
                                  ]),
                                  e(
                                    "span",
                                    { staticClass: "column-indicator-copy" },
                                    [t._v(t._s(i.label))],
                                  ),
                                ],
                              );
                            }),
                          ],
                          2,
                        ),
                      ]),
                    ]),
                  ],
                  2,
                ),
              ]),
              e(
                "tbody",
                [
                  t._l(t.tableResults, function (i, s) {
                    return e(
                      "tr",
                      {
                        key: s,
                        staticClass: "ip-auth-result-wrapper",
                        on: {
                          click: function (e) {
                            return t.checkMobileAction(i);
                          },
                        },
                      },
                      [
                        t._l(t.activeColumns, function (s) {
                          return e(
                            "td",
                            { key: s.id, class: "cell-" + s.id },
                            [
                              "username" !== s.id || t.isMobile
                                ? "description" === s.id
                                  ? [
                                      i[s.id]
                                        ? e(
                                            "span",
                                            { attrs: { title: i[s.id] } },
                                            [t._v(t._s(i[s.id]))],
                                          )
                                        : t._e(),
                                    ]
                                  : "passwordless" === s.id &&
                                      !t.isMobile &&
                                      t.showPasswordlessColumn
                                    ? [
                                        i["passwordless"]
                                          ? e(
                                              "span",
                                              { staticClass: "label disabled" },
                                              [t._v("Not Required")],
                                            )
                                          : e(
                                              "span",
                                              {
                                                staticClass: "label secondary",
                                              },
                                              [t._v("Required")],
                                            ),
                                      ]
                                    : "unsubscribes" === s.id
                                      ? [
                                          i["feedback_enabled"]
                                            ? e(
                                                "span",
                                                {
                                                  staticClass:
                                                    "label secondary",
                                                },
                                                [t._v("Enabled")],
                                              )
                                            : e(
                                                "span",
                                                {
                                                  staticClass: "label disabled",
                                                },
                                                [t._v("Disabled")],
                                              ),
                                        ]
                                      : "ippool" === s.id
                                        ? [
                                            e("span", [
                                              t._v(
                                                t._s(t.prettyPrintIPPool(i)),
                                              ),
                                            ]),
                                          ]
                                        : "status" === s.id &&
                                            t.showStatusColumn
                                          ? [
                                              i["sandbox_mode"]
                                                ? e(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "label yellow",
                                                    },
                                                    [t._v("Sandboxed")],
                                                  )
                                                : i["blocked"]
                                                  ? e(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "label error",
                                                      },
                                                      [t._v("Blocked")],
                                                    )
                                                  : e(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "label primary",
                                                      },
                                                      [t._v("Allowed")],
                                                    ),
                                            ]
                                          : "ratelimit" === s.id
                                            ? [
                                                e(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "label ratelimit",
                                                  },
                                                  [
                                                    t._v(
                                                      t._s(t.prettyPrintRL(i)),
                                                    ),
                                                  ],
                                                ),
                                              ]
                                            : [
                                                  "archiving",
                                                  "open_tracking",
                                                  "click_tracking",
                                                ].includes(s.id)
                                              ? [
                                                  i[s.id]
                                                    ? e(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "label secondary",
                                                        },
                                                        [t._v("Enabled")],
                                                      )
                                                    : e(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "label disabled",
                                                        },
                                                        [t._v("Disabled")],
                                                      ),
                                                ]
                                              : e("span", [t._v(t._s(i[s.id]))])
                                : [
                                    e(
                                      "a",
                                      {
                                        attrs: { href: "#" },
                                        on: {
                                          click: function (e) {
                                            return (
                                              e.preventDefault(),
                                              t.edit(i)
                                            );
                                          },
                                        },
                                      },
                                      [
                                        t._v(
                                          t._s(t.obfuscateUsername(i[s.id])),
                                        ),
                                      ],
                                    ),
                                    e(
                                      "a",
                                      {
                                        staticClass:
                                          "btn button-download copy-button",
                                        attrs: { "key-src": i.password },
                                        on: {
                                          click: function (e) {
                                            return (
                                              e.preventDefault(),
                                              t.copyFullAPIKeyToClipboard.apply(
                                                null,
                                                arguments,
                                              )
                                            );
                                          },
                                        },
                                      },
                                      [t._v("Copy")],
                                    ),
                                  ],
                            ],
                            2,
                          );
                        }),
                        e("td", { staticClass: "table-action" }, [
                          e(
                            "div",
                            {
                              staticClass:
                                "drop-content is-active row-delete-popup",
                              class: { "options-on": i.displayDeletePopup },
                            },
                            [
                              e(
                                "a",
                                {
                                  staticClass:
                                    "table-remove-toggler row-remove-toggler",
                                  on: {
                                    click: function (e) {
                                      return (
                                        e.stopPropagation(),
                                        t.deletePopupClick(i)
                                      );
                                    },
                                  },
                                },
                                [t._v("×")],
                              ),
                              i.displayDeletePopup
                                ? e(
                                    "ul",
                                    {
                                      staticClass:
                                        "dropdown-menu dropdown-options",
                                    },
                                    [
                                      e("li", [
                                        e(
                                          "span",
                                          {
                                            staticClass:
                                              "tooltip-confirm-title",
                                          },
                                          [t._v("Confirm remove?")],
                                        ),
                                        e(
                                          "a",
                                          {
                                            staticClass: "table-remove confirm",
                                            attrs: {
                                              href: "javascript:void(0);",
                                              disabled:
                                                t.deleteRequests[i.username],
                                            },
                                            on: {
                                              click: function (e) {
                                                return (
                                                  e.stopPropagation(),
                                                  t.performDeleteClick(i)
                                                );
                                              },
                                            },
                                          },
                                          [e("span", [t._v("Remove")])],
                                        ),
                                        e(
                                          "a",
                                          {
                                            staticClass: "table-remove-cancel",
                                            attrs: {
                                              disabled:
                                                t.deleteRequests[i.username],
                                              href: "javascript:void(0);",
                                            },
                                            on: {
                                              click: function (e) {
                                                return (
                                                  e.stopPropagation(),
                                                  t.closeDeletePopUpClick(i)
                                                );
                                              },
                                            },
                                          },
                                          [t._v("Cancel")],
                                        ),
                                      ]),
                                    ],
                                  )
                                : t._e(),
                              i.displayDeletePopup
                                ? e("div", {
                                    staticClass: "remove-overlay",
                                    on: {
                                      click: function (e) {
                                        return (
                                          e.stopPropagation(),
                                          t.deletePopupClick(i)
                                        );
                                      },
                                    },
                                  })
                                : t._e(),
                              t.deleteRequests[i.username]
                                ? e("base-loader", {
                                    staticClass: "cover-parent",
                                  })
                                : t._e(),
                            ],
                            1,
                          ),
                        ]),
                      ],
                      2,
                    );
                  }),
                  e("LoadMore"),
                ],
                2,
              ),
            ],
          );
        }),
      rt = [
        function () {
          var t = this,
            e = t._self._c;
          return e("p", [
            e("strong", [t._v("Column display")]),
            e("br"),
            t._v(
              "\n                Choose Automatic to show columns relevant to your account, or\n                customize which columns to display.\n              ",
            ),
          ]);
        },
      ],
      ct =
        (i("3b2b"),
        i("14b9"),
        i("7f7f"),
        i("7514"),
        i("0d6d"),
        Object.freeze({
          TRIGGERABLE_OPENED: "mixin-triggerable-opened",
          TRIGGERABLE_CLOSED: "mixin-triggerable-closed",
        })),
      lt = {
        data: function () {
          return { layers: [], isOpen: !1, isMobile: !1 };
        },
        created: function () {
          ($(".page-content-wrapper .page-content").on(
            "click.Bst",
            this.$_windowClicked,
          ),
            this.$eventBus.$on("mixin-triggerable-opened", this.$_opened));
        },
        mounted: function () {
          var t = this;
          ((this.layers = $(this.$el).find(".mixin-triggerable-layer")),
            this.updateDevice(),
            window.addEventListener("resize", function () {
              t.updateDevice();
            }));
        },
        destroyed: function () {
          ($(window).off(
            ".page-content-wrapper .page-content",
            this.$_windowClicked,
          ),
            this.$eventBus.$off("mixin-triggerable-opened", this.$_opened));
        },
        methods: {
          $_windowClicked: function (t) {
            for (var e = !1, i = 0; i < this.layers.length; ++i) {
              var s = $(this.layers[i]);
              this.isOpen &&
                (0 !== s.has(t.target).length || s.is(t.target)) &&
                (e = !0);
            }
            (this.isOpen != e && this.$_emitEvent(e), (this.isOpen = e));
          },
          $_opened: function (t) {
            t === this.$options.name ||
            ("AllFilter" === this.$options.name &&
              ("PeriodFilter" === t || "EventFilter" === t))
              ? (this.$eventBus.$emit("mixin-global-triggerable-opened"),
                (this.isOpen = !0))
              : (this.isOpen = !1);
          },
          $_emitEvent: function (t) {
            if (t)
              this.$eventBus.$emit(
                "mixin-triggerable-opened",
                this.$options.name,
              );
            else {
              if (
                (this.$eventBus.$emit(
                  "mixin-triggerable-closed",
                  this.$options.name,
                ),
                this.isMobile &&
                  ("PeriodFilter" === this.$options.name ||
                    "EventFilter" === this.$options.name))
              )
                return !1;
              (this.$eventBus.$emit("mixin-global-triggerable-closed"),
                this.$eventBus.$emit("mixin-search-trigger"));
            }
          },
          triggerable_toggleOpened: function (t) {
            (t.stopImmediatePropagation(),
              (this.isOpen = !this.isOpen),
              this.$_emitEvent(this.isOpen));
          },
          triggerable_toggleClose: function (t) {
            (t.stopImmediatePropagation(),
              (this.isOpen = !1),
              this.$_emitEvent(this.isOpen));
          },
          updateDevice: function () {
            window.innerWidth < 768
              ? (this.isMobile = !0)
              : (this.isMobile = !1);
          },
        },
        computed: {
          triggerable_isOpen: function () {
            return this.isOpen;
          },
        },
      },
      ut = i("3835"),
      _t =
        (i("ffc1"),
        {
          methods: {
            mixinEventListener_register: function (t) {
              this.mixinEventListener_eventMap = t;
            },
            mixinEventListener_on: function () {
              var t = this;
              this.mixinEventListener_isOn ||
                (Object.entries(this.mixinEventListener_eventMap).forEach(
                  function (e) {
                    var i = Object(ut["a"])(e, 2),
                      s = i[0],
                      a = i[1];
                    t.$eventBus.$on(s, a);
                  },
                ),
                (this.mixinEventListener_isOn = !0));
            },
            mixinEventListener_off: function () {
              var t = this;
              (Object.entries(this.mixinEventListener_eventMap).forEach(
                function (e) {
                  var i = Object(ut["a"])(e, 2),
                    s = i[0],
                    a = i[1];
                  t.$eventBus.$off(s, a);
                },
              ),
                (this.mixinEventListener_isOn = !1));
            },
          },
          data: function () {
            return {
              mixinEventListener_isOn: !1,
              mixinEventListener_eventMap: {},
            };
          },
        }),
      dt = _t,
      pt = {
        methods: {
          mixinAlerts_clear: mt,
          mixinAlerts_info: ft,
          mixinAlerts_success: ht,
          mixinAlerts_warn: Et,
          mixinAlerts_error: gt,
        },
      };
    function mt() {
      var t = $("#user-alert");
      (t.removeClass(), t.empty());
    }
    function ft(t) {
      (mt(), t && HTML.alertUser("info", t));
    }
    function ht(t) {
      (mt(), t && HTML.alertUser("success", t));
    }
    function Et(t) {
      (mt(), t && HTML.alertUser("warning", t));
    }
    function gt(t) {
      (mt(), t && HTML.alertUser("error", t));
    }
    var bt = pt,
      vt =
        (i("28a5"),
        i("4917"),
        { methods: { mixinHelpers_prettyPrintRatelimit: Ot } });
    function Ot(t, e) {
      e = null === e || void 0 === e || "" === e ? "unlimited" : e;
      var i = {
          unlimited: "Unlimited",
          "01:00:00": "per hour",
          "1 day": "per day",
          "7 days": "per week",
          "1 mon": "per month",
          "30 days": "per month",
          "04:00:00": "every 4 hours",
          "00:15:00": "every 15 minutes",
        },
        s = void 0 === i[e] ? "Custom(" + e + ")" : i[e];
      if (2 == (e.match(/:/g) || []).length) {
        var a = e.split(":");
        s = "every " + a[0] + "h " + a[1] + "m ";
      }
      return "unlimited" === e
        ? "Unlimited"
        : parseInt(t).toLocaleString() + " " + s;
    }
    var Tt = vt,
      At = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          {
            staticClass: "loader-wrapper",
            class: {
              "is-block": t.isBlock,
              "is-padded": t.isPadded,
              "is-light": t.isLight,
              "is-fullscreen": t.isFullScreen,
            },
          },
          [e("div", { staticClass: "blockUI blockOverlay" }), t._m(0)],
        );
      },
      Dt = [
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "loader-box" }, [
            e("div", { staticClass: "loader" }, [
              e("span", { staticClass: "icon-circles" }, [
                e("span", { staticClass: "dot-circle pending" }),
                e("span", { staticClass: "dot-circle soft-bounced" }),
                e("span", { staticClass: "dot-circle hard-bounced" }),
                e("span", { staticClass: "dot-circle rejected" }),
                e("span", { staticClass: "dot-circle spam" }),
                e("span", { staticClass: "dot-circle delivered" }),
                e("span", { staticClass: "dot-circle unsubscribed" }),
                e("span", { staticClass: "dot-circle unblocked" }),
                e("span", { staticClass: "dot-circle opened" }),
                e("span", { staticClass: "dot-circle clicked" }),
              ]),
            ]),
          ]);
        },
      ],
      It = {
        props: {
          isBlock: { type: Boolean, default: !1 },
          isPadded: { type: Boolean, default: !1 },
          isLight: { type: Boolean, default: !1 },
          isFullScreen: { type: Boolean, default: !0 },
        },
      },
      St = It,
      Ct = (i("cd12"), Object(W["a"])(St, At, Dt, !1, null, "61172654", null)),
      Lt = Ct.exports,
      Mt = function () {
        var t = this,
          e = t._self._c;
        return e("tr", { class: { loading: t.isFetchingMoreActiveUsers } }, [
          e(
            "td",
            {
              staticClass: "load-more load-centered",
              attrs: { colspan: "100%" },
            },
            [
              !t.isFetchingMoreActiveUsers && t.canLoadMore
                ? e(
                    "button",
                    {
                      staticClass: "btn btn-outlined btn-sm",
                      attrs: { type: "button" },
                      on: {
                        click: function (e) {
                          return t.loadMore();
                        },
                      },
                    },
                    [t._v("\n      Load More Results\n    ")],
                  )
                : t._e(),
              t.isFetchingMoreActiveUsers
                ? e("div", { staticClass: "loading-spinner" }, [t._m(0)])
                : t._e(),
            ],
          ),
        ]);
      },
      Pt = [
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "loader" }, [
            e("span", { staticClass: "icon-circles" }, [
              e("span", { staticClass: "dot-circle pending" }),
              e("span", { staticClass: "dot-circle soft-bounced" }),
              e("span", { staticClass: "dot-circle hard-bounced" }),
              e("span", { staticClass: "dot-circle rejected" }),
              e("span", { staticClass: "dot-circle spam" }),
              e("span", { staticClass: "dot-circle delivered" }),
              e("span", { staticClass: "dot-circle unsubscribed" }),
              e("span", { staticClass: "dot-circle unblocked" }),
              e("span", { staticClass: "dot-circle opened" }),
              e("span", { staticClass: "dot-circle clicked" }),
            ]),
          ]);
        },
      ];
    function yt(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        (e &&
          (s = s.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          i.push.apply(i, s));
      }
      return i;
    }
    function Nt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? yt(Object(i), !0).forEach(function (e) {
              Object(u["a"])(t, e, i[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : yt(Object(i)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(i, e),
                );
              });
      }
      return t;
    }
    var Rt = {
        name: "load-more",
        computed: Nt(
          {},
          Object(_["b"])({
            isFetchingMoreActiveUsers: y.getters.IS_FETCHING_MORE_ACTIVE_USERS,
            canLoadMore: y.getters.CAN_LOAD_MORE,
          }),
        ),
        methods: {
          loadMore: function () {
            this.$store.dispatch(y.actions.LOAD_ACTIVE_USERS, { isSearch: !1 });
          },
        },
      },
      kt = Rt,
      wt =
        (i("d2bb"),
        i("8aa3"),
        Object(W["a"])(kt, Mt, Pt, !1, null, "26ee5526", null)),
      Ut = wt.exports;
    function xt(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        (e &&
          (s = s.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          i.push.apply(i, s));
      }
      return i;
    }
    function jt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? xt(Object(i), !0).forEach(function (e) {
              Object(u["a"])(t, e, i[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : xt(Object(i)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(i, e),
                );
              });
      }
      return t;
    }
    var Gt = {
        mixins: [dt, lt, bt, Tt],
        name: "manage-user-table",
        components: { BaseLoader: Lt, LoadMore: Ut },
        data: function () {
          return {
            columnIsSaving: !1,
            displayColumns: [
              {
                id: "username",
                label: "API Key",
                always_active: !0,
                isBoolean: !1,
              },
              {
                id: "description",
                label: "Description",
                filterable: !0,
                isBoolean: !1,
              },
              {
                id: "passwordless",
                label: "Password",
                always_active: !0,
                filterable: !1,
                isBoolean: !0,
              },
              { id: "ippool", label: "IP Pool", filterable: !0, isBoolean: !1 },
              {
                id: "ratelimit",
                label: "Rate Limit",
                filterable: !0,
                isBoolean: !1,
              },
              {
                id: "unsubscribes",
                label: "Unsubscribes",
                filterable: !0,
                isBoolean: !0,
              },
              {
                id: "status",
                label: "Status",
                always_active: !0,
                filterable: !1,
                isBoolean: !0,
              },
              {
                id: "archiving",
                label: "Archiving",
                filterable: !0,
                isBoolean: !0,
              },
              {
                id: "open_tracking",
                label: "Open Tracking",
                filterable: !0,
                isBoolean: !0,
              },
              {
                id: "click_tracking",
                label: "Click Tracking",
                filterable: !0,
                isBoolean: !0,
              },
            ],
            deleteRequests: {},
          };
        },
        computed: jt(
          jt(
            {},
            Object(_["b"])({
              isColumnShown: y.getters.GET_IS_COLUMN_SHOWN,
              showPasswordlessColumn: y.getters.GET_SHOW_PASSWORDLESS_COLUMN,
              showStatusColumn: y.getters.GET_SHOW_STATUS_COLUMN,
              tableResults: y.getters.GET_ACTIVE_USERS,
              has_ip_pools: y.getters.HAS_IP_POOLS,
              is_allowed_archiving: y.getters.GET_IS_ALLOWED_ARCHIVING,
              canLoadMore: y.getters.CAN_LOAD_MORE,
            }),
          ),
          {},
          {
            isAutomatic: {
              get: function () {
                return this.$store.getters[y.getters.GET_IS_AUTOMATIC_COLS];
              },
              set: function (t) {
                (this.$store.commit(y.mutations.SET_IS_AUTOMATIC_COLS, t),
                  this.activeColumnCountToClass());
              },
            },
            activeColumns: function () {
              var t = this;
              return this.displayColumns.filter(function (e) {
                return (
                  !("archiving" === e.id && !t.is_allowed_archiving) &&
                  !("ippool" === e.id && !t.has_ip_pools) &&
                  !("passwordless" === e.id && !t.showPasswordlessColumn) &&
                  !("status" === e.id && !t.showStatusColumn) &&
                  (!!e.always_active || t.isColumnShown(e.id))
                );
              });
            },
            columnFilters: function () {
              var t = this;
              return this.displayColumns.filter(function (e) {
                return (
                  !("archiving" === e.id && !t.is_allowed_archiving) &&
                  !("ippool" === e.id && !t.has_ip_pools) &&
                  e.filterable
                );
              });
            },
          },
        ),
        mounted: function () {
          ($(".page-content-wrapper .page-content").on(
            "click.Bst",
            this.windowClicked,
          ),
            this.activeColumnCountToClass());
        },
        created: function () {
          (this.mixinEventListener_register(
            Object(u["a"])({}, ct.TRIGGERABLE_CLOSED, this.onTriggerableClosed),
          ),
            this.mixinEventListener_on());
        },
        destroyed: function () {
          ($(window).off(
            ".page-content-wrapper .page-content",
            this.windowClicked,
          ),
            this.mixinEventListener_off());
        },
        methods: {
          obfuscateUsername: function (t) {
            return t.substr(0, 9) + "x".repeat(10);
          },
          copyFullAPIKeyToClipboard: function (t) {
            var e = $(t.target),
              i = $(t.target).attr("key-src");
            try {
              (navigator.clipboard.writeText(i),
                e.text("Copied!"),
                e.addClass("success"));
            } catch (t) {
              (console.log(t), e.text("Failed to Copy!"), e.addClass("error"));
            }
            window.setTimeout(function () {
              (e.text("Copy"),
                e.removeClass("error"),
                e.removeClass("success"));
            }, 2e3);
          },
          prettyPrintIPPool: function (t) {
            var e = t.ippool;
            return t.use_default_ippool
              ? "Default"
              : this.$store.getters[y.getters.GET_IP_POOL_LABEL](e);
          },
          prettyPrintRL: function (t) {
            return t.ratelimit_custom
              ? this.mixinHelpers_prettyPrintRatelimit(
                  t.ratelimit_limit,
                  t.ratelimit_period,
                )
              : "Default";
          },
          removeClassByPrefix: function (t, e) {
            var i = new RegExp("\\b" + e + "[^ ]*[ ]?\\b", "g");
            return ((t.className = t.className.replace(i, "")), t);
          },
          activeColumnCountToClass: function () {
            var t = document.getElementById("usersTable"),
              e = document.querySelectorAll(
                "#columns .checker-box.checked",
              ).length;
            (this.removeClassByPrefix(t, "active-"),
              t.classList.add("active-" + e));
          },
          handleColumnToggle: function (t, e) {
            (console.log("handle column toggle"),
              void 0 !== t && t.stopImmediatePropagation(),
              this.$store.commit(y.mutations.TOGGLE_IS_COLUMN_SHOWN, e.id),
              this.activeColumnCountToClass());
          },
          hideAllDeletePopup: function () {
            var t = this;
            this.tableResults.forEach(function (e) {
              t.$store.commit(y.mutations.SET_ACTIVE_USER_PROPERTY, {
                active_user: e,
                key: "displayDeletePopup",
                value: !1,
              });
            });
          },
          deletePopupClick: function (t) {
            var e = t.displayDeletePopup;
            (this.hideAllDeletePopup(),
              this.$store.commit(y.mutations.SET_ACTIVE_USER_PROPERTY, {
                active_user: t,
                key: "displayDeletePopup",
                value: !e,
              }));
          },
          performDeleteClick: function (t) {
            var e = this;
            (this.mixinAlerts_clear(),
              this.$set(this.deleteRequests, t.username, !0),
              this.$store
                .dispatch(y.actions.REMOVE_ACTIVE_USER, {
                  username: t.username,
                })
                .then(function () {
                  ((e.deleteRequests[t.username] = void 0),
                    e.$store.commit(y.mutations.SET_ACTIVE_USER_PROPERTY, {
                      active_user: t,
                      key: "displayDeletePopup",
                      value: !1,
                    }),
                    e.mixinAlerts_success("Successfully deleted API Key"));
                })
                .catch(function (t) {
                  e.mixinAlerts_error(t);
                }));
          },
          closeDeletePopUpClick: function (t) {
            this.$store.commit(y.mutations.SET_ACTIVE_USER_PROPERTY, {
              active_user: t,
              key: "displayDeletePopup",
              value: !1,
            });
          },
          windowClicked: function (t) {
            var e = ".row-delete-popup";
            $(t.target).parents(e).length || this.hideAllDeletePopup();
          },
          onTriggerableClosed: function () {
            this.$store.dispatch(y.actions.SAVE_COLUMNS);
          },
          saveColumn: function () {
            var t = this;
            if (this.columnIsSaving) return !1;
            this.columnIsSaving = !0;
            var e = !0,
              i = {};
            this.mixinAjax_put(
              this.requestPoint,
              "save-columns",
              i,
              function () {
                t.columnIsSaving = !1;
              },
              function () {
                t.columnIsSaving = !1;
              },
              e,
            );
          },
          edit: function (t) {
            (this.$store.commit(y.mutations.TOGGLE_EDIT_MODAL, {
              visible: !0,
              data: t,
            }),
              this.$nextTick(function () {
                window.scrollTo({ top: 0, left: 0, behavior: "instant" });
              }),
              setTimeout(function () {
                var t = document.querySelector(".block-user-edit"),
                  e = document.querySelector(".sg-feature--header"),
                  i = document.querySelector(".page-content"),
                  s = t.offsetHeight + e.offsetHeight + 45;
                ((i.style.height = "".concat(s, "px")),
                  i.classList.add("is-edit"));
              }, 300));
          },
          checkMobileAction: function (t) {
            this.isMobile && this.edit(t);
          },
        },
      },
      Ht = Gt,
      $t = (i("cd64"), Object(W["a"])(Ht, ot, rt, !1, null, "015a130a", null)),
      Bt = $t.exports,
      Ft = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          {
            staticClass: "edit-user",
            class: { "is-active": t.isActive },
            attrs: { id: "useredit" },
          },
          [
            e("header", { staticClass: "sg-feature--header has-functions" }, [
              e("h3", { staticClass: "page-title" }, [
                e("button", {
                  staticClass: "icon-back",
                  on: {
                    click: function (e) {
                      return (
                        e.preventDefault(),
                        t.close.apply(null, arguments)
                      );
                    },
                  },
                }),
                e("span", { staticClass: "page-title-text" }, [
                  t._v(t._s(this.is_editing ? "Edit API" : "Add API") + " Key"),
                ]),
              ]),
              e("div", { staticClass: "lead-toggle" }, [
                e("p", [
                  t._v(
                    t._s(this.is_editing ? "Edit" : "Add") +
                      "  your API Key details below. Optionally set an email sending rate limit, unsubscribe footer, or choose advanced options for additional features.",
                  ),
                ]),
              ]),
            ]),
            e(
              "div",
              {
                staticClass:
                  "col-lg-12 col-md-12 col-sm-12 col-xs-12 block-user-edit",
              },
              [
                e(
                  "div",
                  {
                    staticClass: "edit-user-form card has-tabs",
                    class: [
                      "".concat(t.activeTab, "-open"),
                      t.feedback_enabled
                        ? "unsubscribe-footer-enabled"
                        : "unsubscribe-footer-disabled",
                      t.bounce_notifications
                        ? "advanced-bounces-on"
                        : "advanced-bounces-off",
                    ],
                  },
                  [
                    e("div", { staticClass: "card--tab-list" }, [
                      e(
                        "a",
                        {
                          staticClass: "tab",
                          class: { active: "details" === t.activeTab },
                          attrs: { href: "javascript:void(0);" },
                          on: {
                            click: function (e) {
                              (e.preventDefault(), (t.activeTab = "details"));
                            },
                          },
                        },
                        [e("span", [t._v("Details")])],
                      ),
                      e(
                        "a",
                        {
                          staticClass: "tab",
                          class: { active: "permissions" === t.activeTab },
                          attrs: { href: "javascript:void(0);" },
                          on: {
                            click: function (e) {
                              (e.preventDefault(),
                                (t.activeTab = "permissions"));
                            },
                          },
                        },
                        [e("span", [t._v("Permissions")])],
                      ),
                      e(
                        "a",
                        {
                          staticClass: "tab",
                          class: { active: "unsubscribe" === t.activeTab },
                          attrs: { href: "javascript:void(0);" },
                          on: {
                            click: function (e) {
                              (e.preventDefault(),
                                (t.activeTab = "unsubscribe"));
                            },
                          },
                        },
                        [t._m(0)],
                      ),
                      e(
                        "a",
                        {
                          staticClass: "tab",
                          class: { active: "tracking" === t.activeTab },
                          attrs: { href: "javascript:void(0);" },
                          on: {
                            click: function (e) {
                              (e.preventDefault(), (t.activeTab = "tracking"));
                            },
                          },
                        },
                        [t._m(1)],
                      ),
                      e(
                        "a",
                        {
                          staticClass: "tab",
                          class: { active: "archiving" === t.activeTab },
                          attrs: { href: "javascript:void(0);" },
                          on: {
                            click: function (e) {
                              (e.preventDefault(), (t.activeTab = "archiving"));
                            },
                          },
                        },
                        [e("span", [t._v("Advanced")])],
                      ),
                    ]),
                    e("div", { staticClass: "content-body" }, [
                      e("form", [
                        this.error_msg_visible
                          ? e(
                              "div",
                              {
                                class: [
                                  "card-error",
                                  "error",
                                  { visible: this.error_msg_visible },
                                ],
                              },
                              [
                                t._v(
                                  "\n            " + t._s(this.error_msg) + " ",
                                ),
                                e(
                                  "span",
                                  {
                                    staticClass: "error-close",
                                    on: {
                                      click: function (e) {
                                        t.error_msg_visible =
                                          !t.error_msg_visible;
                                      },
                                    },
                                  },
                                  [t._v("×")],
                                ),
                              ],
                            )
                          : t._e(),
                        e(
                          "div",
                          {
                            ref: "tabWrapper",
                            staticClass: "tab-content",
                            class: { "tab-content-open": t.dropdownIsActive },
                          },
                          [
                            e(
                              "div",
                              {
                                ref: "details",
                                staticClass: "tab-pane user-tab-details",
                                class: {
                                  "tab-pane-hidden": t.dropdownIsActive,
                                  active: "details" === t.activeTab,
                                },
                                attrs: { role: "tabpanel" },
                              },
                              [
                                e("div", { staticClass: "form-group" }, [
                                  e(
                                    "label",
                                    { staticClass: "form-group-label" },
                                    [t._v("API Key")],
                                  ),
                                  e(
                                    "div",
                                    {
                                      staticClass: "form-group-item item-split",
                                    },
                                    [
                                      e("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.username,
                                            expression: "username",
                                          },
                                        ],
                                        staticClass: "form-control input-md",
                                        attrs: {
                                          type: "text",
                                          readonly: "",
                                          autocomplete: "off",
                                          "data-lpignore": "true",
                                        },
                                        domProps: { value: t.username },
                                        on: {
                                          input: function (e) {
                                            e.target.composing ||
                                              (t.username = e.target.value);
                                          },
                                        },
                                      }),
                                    ],
                                  ),
                                  e(
                                    "a",
                                    {
                                      staticClass:
                                        "btn button-download copy-button",
                                      attrs: { "key-src": t.password },
                                      on: {
                                        click: function (e) {
                                          return (
                                            e.preventDefault(),
                                            t.copyFullAPIKeyToClipboard.apply(
                                              null,
                                              arguments,
                                            )
                                          );
                                        },
                                      },
                                    },
                                    [t._v("Copy")],
                                  ),
                                ]),
                                e("div", { staticClass: "form-group" }, [
                                  e(
                                    "label",
                                    { staticClass: "form-group-label" },
                                    [t._v("Description")],
                                  ),
                                  e(
                                    "div",
                                    {
                                      staticClass: "form-group-item item-split",
                                    },
                                    [
                                      e("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.description,
                                            expression: "description",
                                          },
                                        ],
                                        staticClass: "form-control input-md",
                                        attrs: {
                                          type: "text",
                                          autocomplete: "off",
                                          name: "comment",
                                          placeholder: "Optional",
                                          maxlength: "512",
                                        },
                                        domProps: { value: t.description },
                                        on: {
                                          input: function (e) {
                                            e.target.composing ||
                                              (t.description = e.target.value);
                                          },
                                        },
                                      }),
                                    ],
                                  ),
                                ]),
                                t.has_ip_pools && t.ip_pools.length > 1
                                  ? e("div", { staticClass: "form-group" }, [
                                      e(
                                        "label",
                                        { staticClass: "form-group-label" },
                                        [t._v("IP Pool")],
                                      ),
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "form-group-item item-split",
                                        },
                                        [
                                          e(
                                            "div",
                                            {
                                              staticClass:
                                                "form-select-wrapper",
                                            },
                                            [
                                              e(
                                                "select",
                                                {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: t.ippool,
                                                      expression: "ippool",
                                                    },
                                                  ],
                                                  staticClass:
                                                    "form-control input-md",
                                                  on: {
                                                    change: function (e) {
                                                      var i =
                                                        Array.prototype.filter
                                                          .call(
                                                            e.target.options,
                                                            function (t) {
                                                              return t.selected;
                                                            },
                                                          )
                                                          .map(function (t) {
                                                            var e =
                                                              "_value" in t
                                                                ? t._value
                                                                : t.value;
                                                            return e;
                                                          });
                                                      t.ippool = e.target
                                                        .multiple
                                                        ? i
                                                        : i[0];
                                                    },
                                                  },
                                                },
                                                [
                                                  e(
                                                    "option",
                                                    {
                                                      attrs: {
                                                        value: "default",
                                                      },
                                                    },
                                                    [
                                                      t._v(
                                                        t._s(
                                                          t.prettyPrintIPPool(
                                                            "default",
                                                          ),
                                                        ),
                                                      ),
                                                    ],
                                                  ),
                                                  t._l(
                                                    t.ip_pools,
                                                    function (i) {
                                                      return e(
                                                        "option",
                                                        {
                                                          key: i.id,
                                                          domProps: {
                                                            value: i.id,
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            "\n                        " +
                                                              t._s(
                                                                t.prettyPrintIPPool(
                                                                  i.id,
                                                                ),
                                                              ),
                                                          ),
                                                        ],
                                                      );
                                                    },
                                                  ),
                                                ],
                                                2,
                                              ),
                                            ],
                                          ),
                                        ],
                                      ),
                                    ])
                                  : t._e(),
                                e("div", { staticClass: "form-group" }, [
                                  e(
                                    "label",
                                    { staticClass: "form-group-label" },
                                    [t._v("Rate Limit")],
                                  ),
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "form-group-item form-group-ratelimit",
                                    },
                                    [
                                      e(
                                        "div",
                                        { staticClass: "content-block" },
                                        [
                                          e("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: t.ratelimit_limit,
                                                expression: "ratelimit_limit",
                                              },
                                            ],
                                            staticClass:
                                              "form-control input-md",
                                            attrs: {
                                              type: "number",
                                              name: "ratelimit_limit",
                                              disabled:
                                                !t.ratelimit_custom ||
                                                "unlimited" ==
                                                  t.ratelimit_period,
                                            },
                                            domProps: {
                                              value: t.ratelimit_limit,
                                            },
                                            on: {
                                              input: function (e) {
                                                e.target.composing ||
                                                  (t.ratelimit_limit =
                                                    e.target.value);
                                              },
                                            },
                                          }),
                                          e(
                                            "div",
                                            {
                                              staticClass:
                                                "form-select-wrapper",
                                            },
                                            [
                                              e(
                                                "select",
                                                {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: t.ratelimit_period,
                                                      expression:
                                                        "ratelimit_period",
                                                    },
                                                  ],
                                                  staticClass:
                                                    "form-control input-md",
                                                  attrs: {
                                                    disabled:
                                                      !t.ratelimit_custom,
                                                  },
                                                  on: {
                                                    change: function (e) {
                                                      var i =
                                                        Array.prototype.filter
                                                          .call(
                                                            e.target.options,
                                                            function (t) {
                                                              return t.selected;
                                                            },
                                                          )
                                                          .map(function (t) {
                                                            var e =
                                                              "_value" in t
                                                                ? t._value
                                                                : t.value;
                                                            return e;
                                                          });
                                                      t.ratelimit_period = e
                                                        .target.multiple
                                                        ? i
                                                        : i[0];
                                                    },
                                                  },
                                                },
                                                [
                                                  e(
                                                    "option",
                                                    {
                                                      attrs: {
                                                        value: "unlimited",
                                                      },
                                                    },
                                                    [t._v("Unlimited")],
                                                  ),
                                                  e(
                                                    "option",
                                                    {
                                                      attrs: {
                                                        value: "01:00:00",
                                                      },
                                                    },
                                                    [t._v("per hour")],
                                                  ),
                                                  e(
                                                    "option",
                                                    {
                                                      attrs: { value: "1 day" },
                                                    },
                                                    [t._v("per day")],
                                                  ),
                                                  e(
                                                    "option",
                                                    {
                                                      attrs: {
                                                        value: "7 days",
                                                      },
                                                    },
                                                    [t._v("per week")],
                                                  ),
                                                  e(
                                                    "option",
                                                    {
                                                      attrs: { value: "1 mon" },
                                                    },
                                                    [t._v("per month")],
                                                  ),
                                                ],
                                              ),
                                            ],
                                          ),
                                          e(
                                            "div",
                                            {
                                              staticClass:
                                                "ratelimit-default-checkbox",
                                            },
                                            [
                                              e(
                                                "div",
                                                {
                                                  staticClass: "checker",
                                                  on: {
                                                    click: function (e) {
                                                      (e.preventDefault(),
                                                        (t.ratelimit_custom =
                                                          !t.ratelimit_custom));
                                                    },
                                                  },
                                                },
                                                [
                                                  e("span", {
                                                    staticClass: "checker-box",
                                                    class: {
                                                      checked:
                                                        !t.ratelimit_custom,
                                                    },
                                                  }),
                                                ],
                                              ),
                                              e(
                                                "span",
                                                {
                                                  staticClass:
                                                    "inline-checkbox-desc",
                                                  on: {
                                                    click: function (e) {
                                                      (e.preventDefault(),
                                                        (t.ratelimit_custom =
                                                          !t.ratelimit_custom));
                                                    },
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    " Use\n                        default",
                                                  ),
                                                ],
                                              ),
                                            ],
                                          ),
                                        ],
                                      ),
                                      e("p", { staticClass: "field-info" }, [
                                        t._v(
                                          "Specify the number of emails that can be sent per time period.",
                                        ),
                                      ]),
                                    ],
                                  ),
                                ]),
                              ],
                            ),
                            e(
                              "div",
                              {
                                ref: "permissions",
                                staticClass: "tab-pane user-tab-permissions",
                                class: {
                                  "tab-pane-hidden": t.dropdownIsActive,
                                  active: "permissions" === t.activeTab,
                                },
                                attrs: { role: "tabpanel" },
                              },
                              [
                                t._m(2),
                                e(
                                  "div",
                                  { staticClass: "permission-columns" },
                                  [
                                    e(
                                      "ul",
                                      {
                                        staticClass:
                                          "column-permissions left-column",
                                      },
                                      t._l(
                                        t.leftColumnEndpoints,
                                        function (i, s) {
                                          return e(
                                            "li",
                                            {
                                              key: s,
                                              class: [
                                                "permission-panel",
                                                t.isGroupSelected(s),
                                                {
                                                  "child-active":
                                                    t.isPanelOpen(s),
                                                },
                                              ],
                                              attrs: { title: s },
                                            },
                                            [
                                              e("input", {
                                                staticClass:
                                                  "pp-select-all permission-parent-input is-select-all",
                                                attrs: { type: "checkbox" },
                                                on: {
                                                  change: function (e) {
                                                    return t.toggleSelectAll(s);
                                                  },
                                                },
                                              }),
                                              e(
                                                "h4",
                                                {
                                                  staticClass:
                                                    "permission-panel-title",
                                                  on: {
                                                    click: function (e) {
                                                      return t.togglePanel(s);
                                                    },
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    "\n                      " +
                                                      t._s(s) +
                                                      "\n                    ",
                                                  ),
                                                ],
                                              ),
                                              e("button", {
                                                staticClass: "list-toggler",
                                                class: {
                                                  "is-rotated":
                                                    t.isPanelOpen(s),
                                                },
                                                attrs: { type: "button" },
                                                on: {
                                                  click: function (e) {
                                                    return (
                                                      e.preventDefault(),
                                                      t.togglePanel(s)
                                                    );
                                                  },
                                                },
                                              }),
                                              e(
                                                "ul",
                                                {
                                                  staticClass: "panel-dropdown",
                                                  class: {
                                                    "is-active":
                                                      t.isPanelOpen(s),
                                                  },
                                                },
                                                t._l(i.endpoints, function (i) {
                                                  return e(
                                                    "li",
                                                    {
                                                      key: i.path,
                                                      staticClass:
                                                        "permission-row panel-dropdown-item",
                                                    },
                                                    [
                                                      e(
                                                        "label",
                                                        {
                                                          class: {
                                                            "is-selected":
                                                              t.isEndpointSelected(
                                                                i.permission_id,
                                                              ),
                                                          },
                                                          on: {
                                                            click: function (
                                                              e,
                                                            ) {
                                                              return (
                                                                e.preventDefault(),
                                                                t.togglePermissionItem(
                                                                  i.permission_id,
                                                                )
                                                              );
                                                            },
                                                          },
                                                        },
                                                        [
                                                          e("input", {
                                                            staticClass:
                                                              "permission-panel-input",
                                                            attrs: {
                                                              type: "checkbox",
                                                              name: "endpoint[]",
                                                            },
                                                          }),
                                                          t._v(
                                                            "\n                          " +
                                                              t._s(i.path) +
                                                              "\n                        ",
                                                          ),
                                                        ],
                                                      ),
                                                    ],
                                                  );
                                                }),
                                                0,
                                              ),
                                            ],
                                          );
                                        },
                                      ),
                                      0,
                                    ),
                                    e(
                                      "ul",
                                      {
                                        staticClass:
                                          "column-permissions right-column",
                                      },
                                      t._l(
                                        t.rightColumnEndpoints,
                                        function (i, s) {
                                          return e(
                                            "li",
                                            {
                                              key: s,
                                              class: [
                                                "permission-panel",
                                                t.isGroupSelected(s),
                                                {
                                                  "child-active":
                                                    t.isPanelOpen(s),
                                                },
                                              ],
                                              attrs: { title: s },
                                            },
                                            [
                                              e("input", {
                                                staticClass:
                                                  "pp-select-all permission-parent-input is-select-all",
                                                attrs: { type: "checkbox" },
                                                on: {
                                                  change: function (e) {
                                                    return t.toggleSelectAll(s);
                                                  },
                                                },
                                              }),
                                              e(
                                                "h4",
                                                {
                                                  staticClass:
                                                    "permission-panel-title",
                                                  on: {
                                                    click: function (e) {
                                                      return t.togglePanel(s);
                                                    },
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    "\n                      " +
                                                      t._s(s) +
                                                      "\n                    ",
                                                  ),
                                                ],
                                              ),
                                              e("button", {
                                                staticClass: "list-toggler",
                                                class: {
                                                  "is-rotated":
                                                    t.isPanelOpen(s),
                                                },
                                                attrs: { type: "button" },
                                                on: {
                                                  click: function (e) {
                                                    return (
                                                      e.preventDefault(),
                                                      t.togglePanel(s)
                                                    );
                                                  },
                                                },
                                              }),
                                              e(
                                                "ul",
                                                {
                                                  staticClass: "panel-dropdown",
                                                  class: {
                                                    "is-active":
                                                      t.isPanelOpen(s),
                                                  },
                                                },
                                                t._l(i.endpoints, function (i) {
                                                  return e(
                                                    "li",
                                                    {
                                                      key: i.path,
                                                      staticClass:
                                                        "permission-row panel-dropdown-item",
                                                    },
                                                    [
                                                      e(
                                                        "label",
                                                        {
                                                          class: {
                                                            "is-selected":
                                                              t.isEndpointSelected(
                                                                i.permission_id,
                                                              ),
                                                          },
                                                          on: {
                                                            click: function (
                                                              e,
                                                            ) {
                                                              return (
                                                                e.preventDefault(),
                                                                t.togglePermissionItem(
                                                                  i.permission_id,
                                                                )
                                                              );
                                                            },
                                                          },
                                                        },
                                                        [
                                                          e("input", {
                                                            staticClass:
                                                              "permission-panel-input",
                                                            attrs: {
                                                              type: "checkbox",
                                                              name: "endpoint[]",
                                                            },
                                                          }),
                                                          t._v(
                                                            "\n                          " +
                                                              t._s(i.path) +
                                                              "\n                        ",
                                                          ),
                                                        ],
                                                      ),
                                                    ],
                                                  );
                                                }),
                                                0,
                                              ),
                                            ],
                                          );
                                        },
                                      ),
                                      0,
                                    ),
                                  ],
                                ),
                              ],
                            ),
                            e(
                              "div",
                              {
                                ref: "unsubscribe",
                                staticClass: "tab-pane user-tab-unsubscribe",
                                class: {
                                  "tab-pane-hidden": t.dropdownIsActive,
                                  active: "unsubscribe" === t.activeTab,
                                },
                                attrs: { role: "tabpanel" },
                              },
                              [
                                e(
                                  "div",
                                  {
                                    staticClass: "unsubscribes",
                                    class: [
                                      t.feedback_enabled
                                        ? "is-open"
                                        : "is-closed",
                                    ],
                                  },
                                  [
                                    e("div", { staticClass: "form-group" }, [
                                      e(
                                        "label",
                                        { staticClass: "form-group-label" },
                                        [t._v("Add Footer")],
                                      ),
                                      e(
                                        "div",
                                        { staticClass: "form-group-item" },
                                        [
                                          e(
                                            "div",
                                            { staticClass: "group-item-label" },
                                            [
                                              e(
                                                "label",
                                                {
                                                  staticClass:
                                                    "inline-checkbox",
                                                  class: [
                                                    t.feedback_enabled
                                                      ? "is-open"
                                                      : "is-closed",
                                                  ],
                                                },
                                                [
                                                  e("input", {
                                                    staticClass: "toggle",
                                                    attrs: { type: "checkbox" },
                                                    on: {
                                                      change: function (e) {
                                                        t.feedback_enabled =
                                                          !t.feedback_enabled;
                                                      },
                                                    },
                                                  }),
                                                ],
                                              ),
                                              t._m(3),
                                            ],
                                          ),
                                        ],
                                      ),
                                    ]),
                                    e("div", { staticClass: "toggle" }, [
                                      e("div", { staticClass: "form-group" }, [
                                        e(
                                          "label",
                                          { staticClass: "form-group-label" },
                                          [
                                            t._v(
                                              "\n                      HTML\n                      ",
                                            ),
                                            e("br"),
                                            e("small", [
                                              e(
                                                "a",
                                                {
                                                  attrs: { href: "#" },
                                                  on: {
                                                    click: function (e) {
                                                      return (
                                                        e.preventDefault(),
                                                        t.useDefaultHTML.apply(
                                                          null,
                                                          arguments,
                                                        )
                                                      );
                                                    },
                                                  },
                                                },
                                                [t._v("use default")],
                                              ),
                                            ]),
                                          ],
                                        ),
                                        e(
                                          "div",
                                          { staticClass: "form-group-item" },
                                          [
                                            e("textarea", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: t.feedback_html,
                                                  expression: "feedback_html",
                                                },
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                name: "unsubscribe_html",
                                              },
                                              domProps: {
                                                value: t.feedback_html,
                                              },
                                              on: {
                                                input: function (e) {
                                                  e.target.composing ||
                                                    (t.feedback_html =
                                                      e.target.value);
                                                },
                                              },
                                            }),
                                          ],
                                        ),
                                      ]),
                                    ]),
                                    e("div", { staticClass: "toggle" }, [
                                      e("div", { staticClass: "form-group" }, [
                                        e(
                                          "label",
                                          { staticClass: "form-group-label" },
                                          [
                                            t._v(
                                              "\n                      Plain Text\n                      ",
                                            ),
                                            e("br"),
                                            e("small", [
                                              e(
                                                "a",
                                                {
                                                  attrs: { href: "#" },
                                                  on: {
                                                    click: function (e) {
                                                      return (
                                                        e.preventDefault(),
                                                        t.useDefaultText.apply(
                                                          null,
                                                          arguments,
                                                        )
                                                      );
                                                    },
                                                  },
                                                },
                                                [t._v("use default")],
                                              ),
                                            ]),
                                          ],
                                        ),
                                        e(
                                          "div",
                                          { staticClass: "form-group-item" },
                                          [
                                            e("textarea", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: t.feedback_text,
                                                  expression: "feedback_text",
                                                },
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                name: "unsubscribe_text",
                                              },
                                              domProps: {
                                                value: t.feedback_text,
                                              },
                                              on: {
                                                input: function (e) {
                                                  e.target.composing ||
                                                    (t.feedback_text =
                                                      e.target.value);
                                                },
                                              },
                                            }),
                                          ],
                                        ),
                                      ]),
                                    ]),
                                  ],
                                ),
                              ],
                            ),
                            e(
                              "div",
                              {
                                ref: "tracking",
                                staticClass: "tab-pane user-tab-tracking",
                                class: { active: "tracking" === t.activeTab },
                                attrs: { role: "tabpanel" },
                              },
                              [
                                e("div", { staticClass: "tracking" }, [
                                  e("div", { staticClass: "form-group" }, [
                                    e(
                                      "label",
                                      { staticClass: "form-group-label" },
                                      [t._v("Open Tracking")],
                                    ),
                                    e(
                                      "div",
                                      { staticClass: "form-group-item" },
                                      [
                                        e(
                                          "div",
                                          { staticClass: "group-item-label" },
                                          [
                                            e(
                                              "label",
                                              {
                                                staticClass: "inline-checkbox",
                                                class: [
                                                  t.open_tracking
                                                    ? "is-open"
                                                    : "is-closed",
                                                ],
                                              },
                                              [
                                                e("input", {
                                                  staticClass: "toggle",
                                                  attrs: { type: "checkbox" },
                                                  on: {
                                                    change: function (e) {
                                                      t.open_tracking =
                                                        !t.open_tracking;
                                                    },
                                                  },
                                                }),
                                              ],
                                            ),
                                            t._m(4),
                                          ],
                                        ),
                                        e(
                                          "span",
                                          { staticClass: "field-info" },
                                          [
                                            t._v(
                                              "Enable open tracking to find out when a recipient has opened an\n                      email.",
                                            ),
                                          ],
                                        ),
                                      ],
                                    ),
                                  ]),
                                  e("div", { staticClass: "form-group" }, [
                                    e(
                                      "label",
                                      { staticClass: "form-group-label" },
                                      [t._v("Click Tracking")],
                                    ),
                                    e(
                                      "div",
                                      { staticClass: "form-group-item" },
                                      [
                                        e(
                                          "div",
                                          { staticClass: "group-item-label" },
                                          [
                                            e(
                                              "label",
                                              {
                                                staticClass: "inline-checkbox",
                                                class: [
                                                  t.click_tracking
                                                    ? "is-open"
                                                    : "is-closed",
                                                ],
                                              },
                                              [
                                                e("input", {
                                                  staticClass: "toggle",
                                                  attrs: { type: "checkbox" },
                                                  on: {
                                                    change: function (e) {
                                                      t.click_tracking =
                                                        !t.click_tracking;
                                                    },
                                                  },
                                                }),
                                              ],
                                            ),
                                            t._m(5),
                                          ],
                                        ),
                                        e(
                                          "span",
                                          { staticClass: "field-info" },
                                          [
                                            t._v(
                                              "Enable click tracking to find out when a recipient has clicked a link in\n                      an email.",
                                            ),
                                          ],
                                        ),
                                      ],
                                    ),
                                  ]),
                                  e("div", { staticClass: "form-group" }, [
                                    e(
                                      "label",
                                      { staticClass: "form-group-label" },
                                      [t._v("User Status")],
                                    ),
                                    e(
                                      "div",
                                      { staticClass: "form-group-item" },
                                      [
                                        e(
                                          "div",
                                          {
                                            ref: "dropdownWrapper",
                                            staticClass: "app-dropdown-wrapper",
                                          },
                                          [
                                            e(
                                              "div",
                                              {
                                                staticClass:
                                                  "user-mode-dropdown mode-dropdown-select",
                                                class: {
                                                  "is-active":
                                                    t.dropdownIsActive,
                                                },
                                                on: { click: t.toggleDropdown },
                                              },
                                              [
                                                e(
                                                  "span",
                                                  { staticClass: "selected" },
                                                  [
                                                    t._v(
                                                      t._s(
                                                        t.getSelectedItem.name,
                                                      ),
                                                    ),
                                                  ],
                                                ),
                                              ],
                                            ),
                                            e(
                                              "dl",
                                              {
                                                staticClass:
                                                  "mode-dropdown-option",
                                                class: {
                                                  "is-active":
                                                    t.dropdownIsActive,
                                                },
                                              },
                                              t._l(
                                                t.dropdownItems,
                                                function (i) {
                                                  return e(
                                                    "div",
                                                    {
                                                      key: i.name,
                                                      staticClass:
                                                        "dropdown-item",
                                                      class: [
                                                        i.colorClass,
                                                        {
                                                          "is-active":
                                                            i.name ===
                                                            t.selectedDropdownItemName,
                                                        },
                                                      ],
                                                      on: {
                                                        click: function (e) {
                                                          return t.selectItem(
                                                            i,
                                                          );
                                                        },
                                                      },
                                                    },
                                                    [
                                                      e("dt", [
                                                        t._v(t._s(i.name)),
                                                      ]),
                                                      e("dd", {
                                                        domProps: {
                                                          innerHTML: t._s(
                                                            i.description,
                                                          ),
                                                        },
                                                      }),
                                                    ],
                                                  );
                                                },
                                              ),
                                              0,
                                            ),
                                            e("div", {
                                              staticClass: "mode-dropdown-info",
                                              domProps: {
                                                innerHTML: t._s(
                                                  t.getSelectedItem.description,
                                                ),
                                              },
                                            }),
                                          ],
                                        ),
                                      ],
                                    ),
                                  ]),
                                ]),
                              ],
                            ),
                            e(
                              "div",
                              {
                                ref: "archiving",
                                staticClass: "tab-pane user-tab-archiving",
                                class: {
                                  "tab-pane-hidden": t.dropdownIsActive,
                                  active: "archiving" === t.activeTab,
                                },
                                attrs: { role: "tabpanel" },
                              },
                              [
                                e("div", { staticClass: "archiving" }, [
                                  t.isAllowedArchiving
                                    ? e("div", { staticClass: "form-group" }, [
                                        e(
                                          "label",
                                          { staticClass: "form-group-label" },
                                          [t._v("Email Archiving")],
                                        ),
                                        e(
                                          "div",
                                          { staticClass: "form-group-item" },
                                          [
                                            e(
                                              "div",
                                              {
                                                staticClass: "group-item-label",
                                              },
                                              [
                                                e(
                                                  "label",
                                                  {
                                                    staticClass:
                                                      "inline-checkbox",
                                                    class: [
                                                      t.archiving
                                                        ? "is-open"
                                                        : "is-closed",
                                                    ],
                                                  },
                                                  [
                                                    e("input", {
                                                      staticClass: "toggle",
                                                      attrs: {
                                                        type: "checkbox",
                                                      },
                                                      on: {
                                                        change:
                                                          t.handleArchivingToggle,
                                                      },
                                                    }),
                                                  ],
                                                ),
                                                t._m(6),
                                              ],
                                            ),
                                            t._m(7),
                                          ],
                                        ),
                                      ])
                                    : t._e(),
                                  e("div", { staticClass: "form-group" }, [
                                    e(
                                      "label",
                                      { staticClass: "form-group-label" },
                                      [t._v("Email Auditing")],
                                    ),
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "form-group-item item-split",
                                      },
                                      [
                                        e("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: t.audit_email,
                                              expression: "audit_email",
                                            },
                                          ],
                                          staticClass: "form-control input-md",
                                          attrs: {
                                            type: "text",
                                            autocomplete: "off",
                                          },
                                          domProps: { value: t.audit_email },
                                          on: {
                                            input: function (e) {
                                              e.target.composing ||
                                                (t.audit_email =
                                                  e.target.value);
                                            },
                                          },
                                        }),
                                        t._m(8),
                                      ],
                                    ),
                                  ]),
                                  e(
                                    "div",
                                    {
                                      staticClass: "form-group",
                                      class: {
                                        "is-expanded": t.bounce_notifications,
                                      },
                                    },
                                    [
                                      e(
                                        "label",
                                        { staticClass: "form-group-label" },
                                        [t._v("Bounce Notifications")],
                                      ),
                                      e(
                                        "div",
                                        { staticClass: "form-group-item" },
                                        [
                                          e(
                                            "label",
                                            {
                                              staticClass: "inline-checkbox",
                                              class: [
                                                t.bounce_notifications
                                                  ? "is-open"
                                                  : "is-closed",
                                              ],
                                            },
                                            [
                                              e("input", {
                                                staticClass: "toggle",
                                                attrs: { type: "checkbox" },
                                                on: {
                                                  change: function (e) {
                                                    t.bounce_notifications =
                                                      !t.bounce_notifications;
                                                  },
                                                },
                                              }),
                                            ],
                                          ),
                                          e(
                                            "span",
                                            { staticClass: "field-info" },
                                            [
                                              t._v(
                                                "\n                      Enable this to receive a notification email whenever an email bounces.\n                    ",
                                              ),
                                            ],
                                          ),
                                          e(
                                            "div",
                                            {
                                              ref: "bounceOptions",
                                              staticClass: "bounces-options",
                                            },
                                            [
                                              e(
                                                "label",
                                                {
                                                  class: {
                                                    "is-active":
                                                      t.bounce_target_original,
                                                  },
                                                },
                                                [
                                                  e("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          t.bounce_target_original,
                                                        expression:
                                                          "bounce_target_original",
                                                      },
                                                    ],
                                                    staticClass: "toggle",
                                                    attrs: {
                                                      type: "radio",
                                                      name: "bounce-type",
                                                    },
                                                    domProps: {
                                                      value: !0,
                                                      checked: t._q(
                                                        t.bounce_target_original,
                                                        !0,
                                                      ),
                                                    },
                                                    on: {
                                                      change: function (e) {
                                                        t.bounce_target_original =
                                                          !0;
                                                      },
                                                    },
                                                  }),
                                                  t._v(
                                                    "\n                        Send bounce notification emails to the original sender\n                      ",
                                                  ),
                                                ],
                                              ),
                                              e("br"),
                                              e(
                                                "label",
                                                {
                                                  staticClass: "input-activate",
                                                  class: {
                                                    "is-active":
                                                      t.bounce_target_email,
                                                  },
                                                },
                                                [
                                                  e("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          t.bounce_target_email,
                                                        expression:
                                                          "bounce_target_email",
                                                      },
                                                    ],
                                                    staticClass: "toggle",
                                                    attrs: {
                                                      type: "radio",
                                                      name: "bounce-type",
                                                    },
                                                    domProps: {
                                                      value: !0,
                                                      checked: t._q(
                                                        t.bounce_target_email,
                                                        !0,
                                                      ),
                                                    },
                                                    on: {
                                                      change: function (e) {
                                                        t.bounce_target_email =
                                                          !0;
                                                      },
                                                    },
                                                  }),
                                                  t._v(
                                                    "\n                        Send bounce notification emails to:\n                      ",
                                                  ),
                                                ],
                                              ),
                                              e("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: t.bounce_target,
                                                    expression: "bounce_target",
                                                  },
                                                ],
                                                ref: "customBounceNotificationsReceiver",
                                                attrs: {
                                                  type: "text",
                                                  name: "fwdbounces_to",
                                                  placeholder:
                                                    "example@domain.com",
                                                },
                                                domProps: {
                                                  value: t.bounce_target,
                                                },
                                                on: {
                                                  focus: t.onFwdBouncesFocus,
                                                  input: function (e) {
                                                    e.target.composing ||
                                                      (t.bounce_target =
                                                        e.target.value);
                                                  },
                                                },
                                              }),
                                            ],
                                          ),
                                        ],
                                      ),
                                    ],
                                  ),
                                ]),
                              ],
                            ),
                          ],
                        ),
                        e(
                          "div",
                          { staticClass: "card-footer" },
                          [
                            e(
                              "base-button",
                              {
                                staticClass: "smtp-modal-save",
                                attrs: {
                                  variant: "blue",
                                  "is-loading": t.isSaving,
                                },
                                on: {
                                  click: function (e) {
                                    return t.save(!1);
                                  },
                                },
                              },
                              [
                                t._v(
                                  t._s(
                                    this.is_editing
                                      ? "Save Changes"
                                      : "Add API Key",
                                  ),
                                ),
                              ],
                            ),
                            e(
                              "base-button",
                              {
                                attrs: { variant: "button-dropdown" },
                                on: {
                                  click: function (e) {
                                    return (
                                      e.preventDefault(),
                                      t.close.apply(null, arguments)
                                    );
                                  },
                                },
                              },
                              [t._v("Back")],
                            ),
                          ],
                          1,
                        ),
                      ]),
                    ]),
                  ],
                ),
                e("div", { staticClass: "side-panel" }, [
                  e("h5", [t._v("Connection information")]),
                  t._m(9),
                  e("p", [
                    e("strong", [t._v("API Status: ")]),
                    e(
                      "span",
                      { style: t.apiStatusStyle, attrs: { id: "api_status" } },
                      [t._v(t._s(t.apiStatus))],
                    ),
                  ]),
                  t._m(10),
                ]),
              ],
            ),
            e(
              "div",
              {
                staticClass: "modal-dialog modal-confirm-archives",
                class: { "is-active": t.showArchivesModal },
              },
              [
                e("div", { staticClass: "modal-body" }, [
                  e(
                    "button",
                    {
                      staticClass: "bootbox-close-button close",
                      attrs: { type: "button" },
                      on: {
                        click: function (e) {
                          t.showArchivesModal = !1;
                        },
                      },
                    },
                    [t._v("×")],
                  ),
                  t._m(11),
                  e("div", { staticClass: "modal-body-footer" }, [
                    e(
                      "button",
                      {
                        staticClass: "btn blue",
                        on: { click: t.confirmDisableArchiving },
                      },
                      [t._v("Confirm")],
                    ),
                    e(
                      "button",
                      {
                        staticClass: "btn button-outlined bootbox-close-button",
                        on: {
                          click: function (e) {
                            t.showArchivesModal = !1;
                          },
                        },
                      },
                      [t._v("Cancel")],
                    ),
                  ]),
                ]),
              ],
            ),
            e("div", {
              staticClass: "modal-backdrop",
              class: { "is-active": t.showArchivesModal },
              on: {
                click: function (e) {
                  t.showArchivesModal = !1;
                },
              },
            }),
            e(
              "div",
              {
                staticClass: "modal-dialog modal-confirm-permissions",
                class: { "is-active": t.showPermissionsModal },
              },
              [
                e("div", { staticClass: "modal-body" }, [
                  e(
                    "button",
                    {
                      staticClass: "bootbox-close-button close",
                      attrs: { type: "button" },
                      on: {
                        click: function (e) {
                          ((t.showPermissionsModal = !1),
                            (t.apiNotificationSeen = !1));
                        },
                      },
                    },
                    [t._v("×")],
                  ),
                  t._m(12),
                  e("div", { staticClass: "modal-body-footer" }, [
                    e("div", [
                      e(
                        "button",
                        {
                          staticClass: "btn blue",
                          on: {
                            click: function (e) {
                              return t.save(!0);
                            },
                          },
                        },
                        [t._v("Add API Key")],
                      ),
                      e(
                        "button",
                        {
                          staticClass:
                            "btn button-outlined bootbox-close-button",
                          on: {
                            click: function (e) {
                              ((t.showPermissionsModal = !1),
                                (t.activeTab = "permissions"),
                                (t.hasSeenPermissionsModal = !0),
                                (t.apiNotificationSeen = !1));
                            },
                          },
                        },
                        [t._v("Cancel")],
                      ),
                    ]),
                    e("div", [
                      e(
                        "label",
                        {
                          class: [
                            "permission-modal-label",
                            { "is-selected": t.apiNotificationSeen },
                          ],
                          on: {
                            click: function (e) {
                              return (
                                e.preventDefault(),
                                t.toggleModalStopNotifying.apply(
                                  null,
                                  arguments,
                                )
                              );
                            },
                          },
                        },
                        [
                          e("input", {
                            staticClass: "permission-modal-input",
                            attrs: { type: "checkbox" },
                          }),
                          t._v("Don't notify me again\n          "),
                        ],
                      ),
                    ]),
                  ]),
                ]),
              ],
            ),
            e("div", {
              staticClass: "modal-backdrop",
              class: { "is-active": t.showPermissionsModal },
              on: {
                click: function (e) {
                  ((t.showPermissionsModal = !1),
                    (t.activeTab = "permissions"),
                    (t.hasSeenPermissionsModal = !0),
                    (t.apiNotificationSeen = !1));
                },
              },
            }),
          ],
        );
      },
      Vt = [
        function () {
          var t = this,
            e = t._self._c;
          return e("span", [
            e("span", { staticClass: "mobile-hide" }, [
              t._v("Unsubscribe\n            "),
            ]),
            t._v("Footer"),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("span", [
            e("span", { staticClass: "mobile-hide" }, [
              t._v("Tracking &\n            "),
            ]),
            t._v("Status"),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "notice-container" }, [
            e(
              "div",
              { staticClass: "bar-notice is-active is-info is-transparent" },
              [
                e("p", [
                  e("span", { staticClass: "notice-icon" }),
                  e("span", { staticClass: "bar-notice-message" }, [
                    t._v("Choose which permissions the API key is allowed."),
                  ]),
                ]),
              ],
            ),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("small", [
            e(
              "a",
              {
                attrs: {
                  href: "https://support.smtp2go.com/hc/en-gb/articles/223087607",
                  target: "_blank",
                },
              },
              [t._v("(What's\n                          this?)")],
            ),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("small", [
            e(
              "a",
              {
                attrs: {
                  href: "https://support.smtp2go.com/hc/en-gb/articles/360003124714-Open-Tracking",
                  target: "_blank",
                },
              },
              [t._v("(What's this?)")],
            ),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("small", [
            e(
              "a",
              {
                attrs: {
                  href: "https://support.smtp2go.com/hc/en-gb/articles/900002237106",
                  target: "_blank",
                },
              },
              [t._v("(What's\n                          this?)")],
            ),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("small", [
            e(
              "a",
              {
                attrs: {
                  href: "https://support.smtp2go.com/hc/en-gb/articles/115003599568",
                  target: "_blank",
                },
              },
              [t._v("(What's\n                          this?)")],
            ),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("span", { staticClass: "field-info" }, [
            t._v(
              "\n                      Enable email archiving to store the content and delivery record of your emails.\n                      ",
            ),
            e("br"),
            e("small", [t._v("Archived emails involve an extra charge.")]),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("span", { staticClass: "field-info" }, [
            t._v(
              "\n                      Send a BCC copy of every email to this address. Separate addresses with commas.\n                      ",
            ),
            e("br"),
            e("small", [
              t._v(
                "BCC copies count towards monthly quota. Leave blank to disable this feature.",
              ),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("p", [
            e("strong", [t._v("API Base URL: ")]),
            t._v(" https://api.smtp2go.com/v3/"),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("p", [
            e("strong", [t._v("API Docs: ")]),
            e(
              "a",
              {
                attrs: {
                  target: "_blank",
                  href: "https://developers.smtp2go.com/",
                },
              },
              [t._v("View")],
            ),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "option-banner" }, [
            e("figure", [
              e("img", {
                attrs: {
                  src: "/static/smtp2go_assets/alert-sign.png",
                  width: "109",
                  alt: "SMTP2GO",
                },
              }),
            ]),
            e("h4", [t._v("Disable Archiving")]),
            e("p", [
              t._v(
                "Once email archiving is disabled, all future emails sent from this sender will no longer be archived.",
              ),
            ]),
            e("p", [
              t._v(
                "Please note that disabling archiving does not delete existing archives. If you'd like to also delete existing archived emails from this sender, delete them from the ",
              ),
              e("a", { attrs: { href: "/reports/archive/" } }, [
                t._v("Archives page"),
              ]),
              t._v("."),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "option-banner" }, [
            e("h4", [t._v("Review Permissions")]),
            e("p", [
              t._v("Your API key has only one permission enabled: "),
              e("strong", [t._v("/email/send")]),
            ]),
            e("p", [
              t._v(
                "If you meant to include more permissions, you can add them on the Permissions tab on this page. Otherwise, click ‘Add API Key’ below.",
              ),
            ]),
          ]);
        },
      ],
      Kt =
        (i("ac4d"),
        i("8a81"),
        i("5df3"),
        i("1c4c"),
        i("6b54"),
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "button",
            {
              staticClass: "btn",
              class: [t.variant, { "is-loading": t.isLoading }],
              attrs: { role: "button", type: t.type, disabled: t.isLoading },
              on: { click: t.handleClick },
            },
            [
              t._t("default"),
              t.isLoading
                ? e("span", { staticClass: "loader-spinner" })
                : t._e(),
            ],
            2,
          );
        }),
      Wt = [],
      Xt = {
        name: "base-button",
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
      qt = Xt,
      Yt = (i("243e"), Object(W["a"])(qt, Kt, Wt, !1, null, "736e1569", null)),
      Qt = Yt.exports;
    function Jt(t, e) {
      var i =
        ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
        t["@@iterator"];
      if (!i) {
        if (
          Array.isArray(t) ||
          (i = zt(t)) ||
          (e && t && "number" === typeof t.length)
        ) {
          i && (t = i);
          var s = 0,
            a = function () {};
          return {
            s: a,
            n: function () {
              return s >= t.length ? { done: !0 } : { done: !1, value: t[s++] };
            },
            e: function (t) {
              throw t;
            },
            f: a,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      }
      var n,
        o = !0,
        r = !1;
      return {
        s: function () {
          i = i.call(t);
        },
        n: function () {
          var t = i.next();
          return ((o = t.done), t);
        },
        e: function (t) {
          ((r = !0), (n = t));
        },
        f: function () {
          try {
            o || null == i.return || i.return();
          } finally {
            if (r) throw n;
          }
        },
      };
    }
    function zt(t, e) {
      if (t) {
        if ("string" === typeof t) return Zt(t, e);
        var i = Object.prototype.toString.call(t).slice(8, -1);
        return (
          "Object" === i && t.constructor && (i = t.constructor.name),
          "Map" === i || "Set" === i
            ? Array.from(t)
            : "Arguments" === i ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
              ? Zt(t, e)
              : void 0
        );
      }
    }
    function Zt(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
      return s;
    }
    function te(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        (e &&
          (s = s.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          i.push.apply(i, s));
      }
      return i;
    }
    function ee(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? te(Object(i), !0).forEach(function (e) {
              Object(u["a"])(t, e, i[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : te(Object(i)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(i, e),
                );
              });
      }
      return t;
    }
    var ie = {
        mixins: [bt],
        props: { isActive: { type: Boolean, default: !1 } },
        components: { BaseButton: Qt },
        data: function () {
          return {
            isFirstRenderHappened: !1,
            activeTab: "details",
            isCustomBounceNotificationsReceiver: !1,
            isSaving: !1,
            bnOriginal: !1,
            bnEmail: !1,
            error_msg: "",
            error_msg_visible: !1,
            windowWidth: window.innerWidth,
            dropdownIsActive: !1,
            dropdownItems: [
              {
                name: "Allowed",
                description:
                  'Sending is <span class="emphasis green">allowed</span>.',
                colorClass: "blue",
              },
              {
                name: "Blocked",
                description:
                  'Sending is <span class="emphasis red">denied</span>, along with all other API access.',
                colorClass: "red",
              },
              {
                name: "Sandboxed",
                description:
                  'Sending is <span class="emphasis green">allowed</span>, but <span class="emphasis orange">emails won\'t be delivered</span>, and will show as Rejected. Email Auditing still functions.',
                details:
                  'Sending is <span class="emphasis green">allowed</span>, but <span class="emphasis orange">emails won\'t be delivered</span> to the recipient.<ul class="dropdown-info-list"><li>Emails will show on your Activity page with a <span class="extra-strong">Rejected</span> status.</li><li>Emails will still be delivered to any email addresses using the <span class="extra-strong">Email Auditing</span> feature.</li></ul>',
                colorClass: "orange",
              },
            ],
            openPanels: [],
            isClosing: !1,
            showArchivesModal: !1,
            showPermissionsModal: !1,
            hasSeenPermissionsModal: !1,
            hasToggledPermissions: !1,
            apiNotificationSeen: !1,
          };
        },
        computed: ee(
          ee(
            {},
            Object(_["b"])({
              isPasswordless: y.getters.EDIT_MODAL_IS_PASSWORDLESS,
              isApiOnline: y.getters.GET_IS_API_ONLINE,
              apiIndex: y.getters.GET_API_INDEX,
              savedApiNotificationSeen: y.getters.GET_API_NOTIFICATION_SEEN,
            }),
          ),
          {},
          {
            apiStatusStyle: function () {
              return null === this.isApiOnline
                ? ""
                : this.isApiOnline
                  ? "background: #e2f8e8; color: #006042; display: inline-block; padding: 0 3px; border-radius: 3px !important; width: auto; min-height: auto;"
                  : "background: #fdefed; color: #ce715f; display: inline-block; padding: 0 3px; border-radius: 3px !important; width: auto; min-height: auto;";
            },
            apiStatus: function () {
              return null === this.isApiOnline
                ? "Querying API..."
                : this.isApiOnline
                  ? "Online"
                  : "Offline";
            },
            inputType: function () {
              return this.showPassword ? "input" : "password";
            },
            showPassword: {
              get: function () {
                return this.$store.getters[
                  y.getters.GET_SHOW_PASSWORD_ON_MODAL
                ];
              },
            },
            is_editing: {
              get: function () {
                return this.$store.getters[y.getters.EDIT_MODAL_IS_EDITING];
              },
            },
            ip_pools: {
              get: function () {
                return this.$store.getters[y.getters.GET_IP_POOLS];
              },
            },
            has_ip_pools: {
              get: function () {
                return this.$store.getters[y.getters.HAS_IP_POOLS];
              },
            },
            old_username: {
              get: function () {
                return this.$store.getters[y.getters.EDIT_MODAL_OLD_USERNAME];
              },
            },
            has_prefilled: {
              get: function () {
                var t = this.$store.getters[y.getters.GET_PREFILLED_USERNAME];
                return null !== t && void 0 != t && t.length > 0;
              },
            },
            username: {
              get: function () {
                var t = this.$store.getters[y.getters.EDIT_MODAL_PASSWORD];
                return (
                  this.is_editing ||
                    (t =
                      this.$store.getters[y.getters.GET_GENERATED_KEY_DATA]
                        .key),
                  t.substr(0, 9) + "x".repeat(23)
                );
              },
              set: function (t) {
                this.$store.commit(y.mutations.EDIT_MODAL_PASSWORD, t);
              },
            },
            password: {
              get: function () {
                return this.is_editing
                  ? this.$store.getters[y.getters.EDIT_MODAL_PASSWORD]
                  : this.$store.getters[y.getters.GET_GENERATED_KEY_DATA].key;
              },
              set: function (t) {
                this.$store.commit(y.mutations.EDIT_MODAL_PASSWORD, t);
              },
            },
            description: {
              get: function () {
                return this.$store.getters[y.getters.EDIT_MODAL_DESCRIPTION];
              },
              set: function (t) {
                this.$store.commit(y.mutations.EDIT_MODAL_DESCRIPTION, t);
              },
            },
            ippool: {
              get: function () {
                return this.$store.getters[y.getters.EDIT_MODAL_IPPOOL];
              },
              set: function (t) {
                this.$store.commit(y.mutations.EDIT_MODAL_IPPOOL, t);
              },
            },
            ratelimit_limit: {
              get: function () {
                return this.$store.getters[y.getters.EDIT_MODAL_RL_LIMIT];
              },
              set: function (t) {
                this.$store.commit(y.mutations.EDIT_MODAL_RL_LIMIT, t);
              },
            },
            ratelimit_period: {
              get: function () {
                return this.$store.getters[y.getters.EDIT_MODAL_RL_PERIOD];
              },
              set: function (t) {
                this.$store.commit(y.mutations.EDIT_MODAL_RL_PERIOD, t);
              },
            },
            ratelimit_custom: {
              get: function () {
                return this.$store.getters[y.getters.EDIT_MODAL_RL_CUSTOM];
              },
              set: function (t) {
                this.$store.commit(y.mutations.EDIT_MODAL_RL_CUSTOM, t);
              },
            },
            feedback_enabled: {
              get: function () {
                return this.$store.getters[y.getters.EDIT_MODAL_FB_ENABLED];
              },
              set: function (t) {
                this.$store.commit(y.mutations.EDIT_MODAL_FB_ENABLED, t);
              },
            },
            feedback_text: {
              get: function () {
                return this.$store.getters[y.getters.EDIT_MODAL_FB_TEXT];
              },
              set: function (t) {
                this.$store.commit(y.mutations.EDIT_MODAL_FB_TEXT, t);
              },
            },
            feedback_html: {
              get: function () {
                return this.$store.getters[y.getters.EDIT_MODAL_FB_HTML];
              },
              set: function (t) {
                this.$store.commit(y.mutations.EDIT_MODAL_FB_HTML, t);
              },
            },
            open_tracking: {
              get: function () {
                return this.$store.getters[y.getters.EDIT_MODAL_OPEN_TRACKING];
              },
              set: function (t) {
                this.$store.commit(y.mutations.EDIT_MODAL_OPEN_TRACKING, t);
              },
            },
            click_tracking: {
              get: function () {
                return this.$store.getters[y.getters.EDIT_MODAL_CLICK_TRACKING];
              },
              set: function (t) {
                this.$store.commit(y.mutations.EDIT_MODAL_CLICK_TRACKING, t);
              },
            },
            blocked: {
              get: function () {
                return this.$store.getters[y.getters.EDIT_MODAL_BLOCKED];
              },
              set: function (t) {
                this.$store.commit(y.mutations.EDIT_MODAL_BLOCKED, t);
              },
            },
            sandbox_mode: {
              get: function () {
                return this.$store.getters[y.getters.EDIT_MODAL_SANDBOX_MODE];
              },
              set: function (t) {
                this.$store.commit(y.mutations.EDIT_MODAL_SANDBOX_MODE, t);
              },
            },
            archiving: {
              get: function () {
                return this.$store.getters[y.getters.EDIT_MODAL_ARCHIVING];
              },
              set: function (t) {
                this.$store.commit(y.mutations.EDIT_MODAL_ARCHIVING, t);
              },
            },
            archiving_initial: {
              get: function () {
                return this.$store.getters[
                  y.getters.EDIT_MODAL_ARCHIVING_INITIAL
                ];
              },
              set: function (t) {
                this.$store.commit(y.mutations.EDIT_MODAL_ARCHIVING_INITIAL, t);
              },
            },
            audit_email: {
              get: function () {
                return this.$store.getters[y.getters.EDIT_MODAL_AUDIT_EMAIL];
              },
              set: function (t) {
                this.$store.commit(y.mutations.EDIT_MODAL_AUDIT_EMAIL, t);
              },
            },
            bounce_notifications: {
              get: function () {
                return this.$store.getters[
                  y.getters.EDIT_MODAL_BOUNCE_NOTIFICATIONS
                ];
              },
              set: function (t) {
                var e = this;
                (this.$store.commit(
                  y.mutations.EDIT_MODAL_BOUNCE_NOTIFICATIONS,
                  t,
                ),
                  this.$nextTick(function () {
                    var i = 55;
                    (t || (i = -i),
                      (e.$refs.tabWrapper.style.height = "".concat(
                        parseFloat(e.$refs.tabWrapper.style.height) + i,
                        "px",
                      )));
                  }));
              },
            },
            bounce_target: {
              get: function () {
                return this.$store.getters[y.getters.EDIT_MODAL_BOUNCE_TARGET];
              },
              set: function (t) {
                (this.$store.commit(y.mutations.EDIT_MODAL_BOUNCE_TARGET, t),
                  (this.bnOriginal = !t),
                  (this.bnEmail = t));
              },
            },
            bounce_target_original: {
              get: function () {
                return this.bnOriginal;
              },
              set: function (t) {
                ((this.bnOriginal = t), (this.bnEmail = !t));
              },
            },
            bounce_target_email: {
              get: function () {
                return this.bnEmail;
              },
              set: function (t) {
                ((this.bnOriginal = !t), (this.bnEmail = t));
              },
            },
            endpoints: {
              get: function () {
                return this.$store.getters[y.getters.EDIT_MODAL_ENDPOINTS];
              },
              set: function (t) {
                this.$store.commit(y.mutations.EDIT_MODAL_ENDPOINTS, t);
              },
            },
            isAllowedArchiving: {
              get: function () {
                return this.$store.getters[y.getters.GET_IS_ALLOWED_ARCHIVING];
              },
            },
            edit_hash: {
              get: function () {
                return this.$store.getters[y.getters.EDIT_MODAL_HASH];
              },
            },
            selectedDropdownItemName: function () {
              return this.sandbox_mode
                ? "Sandboxed"
                : this.blocked
                  ? "Blocked"
                  : "Allowed";
            },
            getSelectedItem: function () {
              var t = this;
              return this.dropdownItems.find(function (e) {
                return e.name === t.selectedDropdownItemName;
              });
            },
            leftColumnEndpoints: function () {
              for (
                var t = {}, e = 0, i = 0, s = Object.entries(this.apiIndex);
                i < s.length;
                i++
              ) {
                var a = Object(ut["a"])(s[i], 2),
                  n = a[0],
                  o = a[1];
                (e % 2 === 0 && (t[n] = o), e++);
              }
              return t;
            },
            rightColumnEndpoints: function () {
              for (
                var t = {}, e = 0, i = 0, s = Object.entries(this.apiIndex);
                i < s.length;
                i++
              ) {
                var a = Object(ut["a"])(s[i], 2),
                  n = a[0],
                  o = a[1];
                (e % 2 === 1 && (t[n] = o), e++);
              }
              return t;
            },
          },
        ),
        methods: ee(
          ee(
            {},
            Object(_["c"])({
              addEndpoints: y.mutations.ADD_EDIT_MODAL_ENDPOINTS,
              deleteEndpoints: y.mutations.DELETE_EDIT_MODAL_ENDPOINTS,
              saveApiNotificationSeen: y.mutations.SET_API_NOTIFICATION_SEEN,
            }),
          ),
          {},
          {
            copyFullAPIKeyToClipboard: function (t) {
              var e = $(t.target),
                i = $(t.target).attr("key-src");
              try {
                (navigator.clipboard.writeText(i),
                  e.text("Copied!"),
                  e.addClass("success"));
              } catch (t) {
                (e.text("Failed to Copy!"), e.addClass("error"));
              }
              window.setTimeout(function () {
                (e.text("Copy"),
                  e.removeClass("error"),
                  e.removeClass("success"));
              }, 2e3);
            },
            onFwdBouncesFocus: function () {
              ((this.bnEmail = !0), (this.bnOriginal = !1));
            },
            prettyPrintIPPool: function (t) {
              return this.$store.getters[y.getters.GET_IP_POOL_LABEL](t);
            },
            useDefaultText: function () {
              this.feedback_text = this.$store.state.apiauth.defaultFBText;
            },
            useDefaultHTML: function () {
              this.feedback_html = this.$store.state.apiauth.defaultFBHTML;
            },
            close: function () {
              var t = this;
              ((this.hasSeenPermissionsModal = !1),
                (this.hasToggledPermissions = !1),
                (this.isClosing = !0),
                (this.error_msg_visible = !1),
                this.$store.commit(y.mutations.TOGGLE_EDIT_MODAL, {
                  visible: !1,
                  data: null,
                }),
                this.$nextTick(function () {
                  t.activeTab = "details";
                }),
                setTimeout(function () {
                  t.isClosing = !1;
                }, 300));
              var e = document.querySelector(".dataTables_wrapper"),
                i = document.querySelector(".page-content"),
                s = document.querySelector(".sg-feature--header"),
                a = e.offsetHeight + s.offsetHeight + 45;
              ((i.style.height = "".concat(a, "px")),
                i.classList.remove("is-edit"));
              var n = document.querySelectorAll("ul.panel-dropdown");
              n.forEach(function (t) {
                t.removeAttribute("style");
              });
            },
            updateHeight: function () {
              ((this.$refs.tabWrapper.style.height = "".concat(
                this.$refs[this.activeTab].clientHeight + 2,
                "px",
              )),
                (this.bnEmail = "" !== this.bounce_target),
                (this.bnOriginal = !this.bnEmail));
            },
            setupCheckboxMutationObserver: function () {
              var t = this,
                e = document.querySelectorAll(".inline-checkbox");
              if (e.length) {
                var i = new MutationObserver(function (e) {
                    var i,
                      s = Jt(e);
                    try {
                      for (s.s(); !(i = s.n()).done; ) {
                        var a = i.value,
                          n = document.querySelector(".edit-user.is-active");
                        n &&
                          "attributes" === a.type &&
                          "class" === a.attributeName &&
                          (a.target.classList.contains("is-open") ||
                            a.target.classList.contains("is-closed")) &&
                          setTimeout(function () {
                            t.adjustPageHeigthEdit();
                          }, 300);
                      }
                    } catch (o) {
                      s.e(o);
                    } finally {
                      s.f();
                    }
                  }),
                  s = { attributes: !0, attributeFilter: ["class"] };
                (e.forEach(function (t) {
                  return i.observe(t, s);
                }),
                  (this.checkboxObserver = i));
              }
            },
            buildSavePayload: function () {
              var t = "";
              t = this.bounce_notifications
                ? this.bounce_target_original
                  ? "from"
                  : this.bounce_target
                : "drop";
              var e = {
                full_api_key: this.password,
                description: this.description,
                ippool: this.ippool,
                ratelimit_limit: this.ratelimit_limit,
                ratelimit_period: this.ratelimit_period,
                ratelimit_custom: this.ratelimit_custom,
                feedback_enabled: this.feedback_enabled,
                feedback_text: this.feedback_text,
                feedback_html: this.feedback_html,
                open_tracking: this.open_tracking,
                click_tracking: this.click_tracking,
                blocked: this.blocked,
                sandbox_mode: this.sandbox_mode,
                archiving: this.archiving,
                audit_email: this.audit_email,
                bounce_notifications: t,
                endpoints: this.endpoints,
                is_editing: this.is_editing,
              };
              return (
                this.apiNotificationSeen &&
                  (e.api_notification_seen = this.apiNotificationSeen),
                this.is_editing
                  ? (e._hash = this.edit_hash)
                  : ((e.full_api_key =
                      this.$store.getters[
                        y.getters.GET_GENERATED_KEY_DATA
                      ].key),
                    (e._hash =
                      this.$store.getters[
                        y.getters.GET_GENERATED_KEY_DATA
                      ].hash)),
                e
              );
            },
            save: function (t) {
              var e = this;
              if (
                ((this.isSaving = !0),
                (this.error_msg_visible = !1),
                !this.is_editing)
              ) {
                if (
                  !(
                    this.hasSeenPermissionsModal ||
                    this.hasToggledPermissions ||
                    t ||
                    this.savedApiNotificationSeen
                  )
                )
                  return (
                    (this.isSaving = !1),
                    void (this.showPermissionsModal = !0)
                  );
                this.showPermissionsModal = !1;
              }
              (this.apiNotificationSeen && this.saveApiNotificationSeen(!0),
                this.$store
                  .dispatch(
                    y.actions.UPDATE_ACTIVE_USER,
                    this.buildSavePayload(),
                  )
                  .then(function () {
                    ((e.isSaving = !1),
                      e.is_editing
                        ? e.mixinAlerts_success("Successfully updated API Key")
                        : (e.mixinAlerts_success("Successfully added API Key"),
                          (e.hasSeenPermissionsModal = !1),
                          (e.hasToggledPermissions = !1)),
                      e.close());
                  })
                  .catch(function (t) {
                    ((e.isSaving = !1),
                      (e.error_msg = t),
                      (e.error_msg_visible = !0),
                      e.$nextTick(function () {
                        e.adjustPageHeigthEdit();
                      }));
                  }));
            },
            togglePassword: function () {
              this.$store.commit(
                y.mutations.SET_SHOW_PASSWORD_ON_MODAL,
                !this.showPassword,
              );
            },
            toggleDropdown: function () {
              this.dropdownIsActive = !this.dropdownIsActive;
            },
            handleOutsideClick: function (t) {
              var e = this.$refs.dropdownWrapper;
              e && !e.contains(t.target) && (this.dropdownIsActive = !1);
            },
            selectItem: function (t) {
              ("Blocked" == t.name
                ? ((this.blocked = !0), (this.sandbox_mode = !1))
                : "Sandboxed" == t.name
                  ? ((this.blocked = !1), (this.sandbox_mode = !0))
                  : ((this.blocked = !1), (this.sandbox_mode = !1)),
                (this.dropdownIsActive = !1));
              var e = document.querySelector(".tab-pane .tracking"),
                i = document.querySelector(".tab-content");
              e &&
                i &&
                setTimeout(function () {
                  var t = e.clientHeight,
                    s = t + 38;
                  i.style.height = "".concat(s, "px");
                }, 20);
            },
            toggleHeight: function () {
              this.$nextTick(function () {
                var t = document.querySelector(".notice-container"),
                  e = document.querySelector(".permission-columns"),
                  i = document.querySelector(".tab-content");
                t &&
                  e &&
                  i &&
                  setTimeout(function () {
                    var s = t.offsetHeight,
                      a = e.offsetHeight,
                      n = s + a + 38;
                    i.style.height = "".concat(n, "px");
                  }, 20);
              });
            },
            toggleSelectAll: function (t) {
              if (
                ((this.hasToggledPermissions = !0),
                "child-selected" != this.isGroupSelected(t))
              ) {
                var e,
                  i = Jt(this.apiIndex[t].endpoints);
                try {
                  for (i.s(); !(e = i.n()).done; ) {
                    var s = e.value;
                    this.endpoints.includes(s.permission_id) ||
                      this.addEndpoints(s.permission_id);
                  }
                } catch (r) {
                  i.e(r);
                } finally {
                  i.f();
                }
              } else {
                var a,
                  n = Jt(this.apiIndex[t].endpoints);
                try {
                  for (n.s(); !(a = n.n()).done; ) {
                    var o = a.value;
                    this.deleteEndpoints(o.permission_id);
                  }
                } catch (r) {
                  n.e(r);
                } finally {
                  n.f();
                }
              }
            },
            togglePanel: function (t) {
              var e = this,
                i = document.querySelector(
                  '.permission-panel[title="'.concat(t, '"] .panel-dropdown'),
                );
              if (this.openPanels.includes(t))
                ((this.openPanels = this.openPanels.filter(function (e) {
                  return e !== t;
                })),
                  this.$nextTick(function () {
                    var t =
                      e.$refs[e.activeTab].clientHeight - i.scrollHeight + 2;
                    ((e.$refs.tabWrapper.style.height = "".concat(t, "px")),
                      (i.style.maxHeight = null));
                  }));
              else {
                ((i.style.visibility = "hidden"),
                  (i.style.maxHeight = "none"),
                  i.classList.add("is-active"));
                var s = i.scrollHeight + 6;
                ((i.style.visibility = ""),
                  (i.style.maxHeight = ""),
                  this.openPanels.push(t),
                  this.$nextTick(function () {
                    ((i.style.maxHeight = "".concat(s, "px")),
                      (e.$refs.tabWrapper.style.height = "".concat(
                        e.$refs[e.activeTab].clientHeight + 2,
                        "px",
                      )));
                  }));
              }
              setTimeout(function () {
                e.adjustPageHeigthEdit();
              }, 300);
            },
            adjustPageHeigthEdit: function () {
              var t = document.querySelector(".block-user-edit"),
                e = document.querySelector(".sg-feature--header"),
                i = document.querySelector(".page-content"),
                s = "tracking" === this.activeTab ? 146 : 76,
                a = t.offsetHeight + e.offsetHeight + s;
              i.style.height = "".concat(a, "px");
            },
            togglePermissionItem: function (t) {
              ((this.hasToggledPermissions = !0),
                this.endpoints.includes(t)
                  ? this.deleteEndpoints(t)
                  : this.addEndpoints(t));
            },
            toggleModalStopNotifying: function () {
              this.apiNotificationSeen = !this.apiNotificationSeen;
            },
            isGroupSelected: function (t) {
              var e = !0,
                i = !0,
                s = this.endpoints;
              return (
                this.apiIndex[t]["endpoints"].forEach(function (t) {
                  s.includes(t.permission_id) ? (i = !1) : (e = !1);
                }),
                e
                  ? "child-selected"
                  : i
                    ? "child-deselected"
                    : "child-indeterminate"
              );
            },
            isEndpointSelected: function (t) {
              return !!this.endpoints.includes(t);
            },
            isPanelOpen: function (t) {
              return !!this.openPanels.includes(t);
            },
            handleArchivingToggle: function () {
              this.archiving
                ? this.archiving_initial
                  ? (this.showArchivesModal = !0)
                  : (this.archiving = !1)
                : (this.archiving = !0);
            },
            confirmDisableArchiving: function () {
              ((this.archiving = !1),
                (this.archiving_initial = !1),
                (this.showArchivesModal = !1));
            },
          },
        ),
        mounted: function () {
          var t = this;
          (this.$nextTick(function () {
            ((t.isFirstRenderHappened = !0), t.updateHeight());
          }),
            document.addEventListener("click", this.handleOutsideClick),
            this.setupCheckboxMutationObserver());
        },
        beforeDestroy: function () {
          (document.removeEventListener("click", this.handleOutsideClick),
            this.checkboxObserver && this.checkboxObserver.disconnect());
        },
        watch: {
          isActive: function (t) {
            var e = this;
            t &&
              this.$nextTick(function () {
                ((e.openPanels = []), e.updateHeight());
              });
          },
          activeTab: function () {
            var t = this;
            ((this.dropdownIsActive = !1),
              this.isClosing ||
                this.$nextTick(function () {
                  (t.updateHeight(),
                    setTimeout(function () {
                      t.adjustPageHeigthEdit();
                    }, 300));
                }));
          },
        },
      },
      se = ie,
      ae = (i("97ea"), Object(W["a"])(se, Ft, Vt, !1, null, "1a7df38e", null)),
      ne = ae.exports,
      oe = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "card--fyi" }, [
          e("div", { staticClass: "card--fyi--small" }, [
            e("h5", [t._v("Connection information")]),
            t._m(0),
            e("p", [
              e("strong", [t._v("API Status: ")]),
              e(
                "span",
                { style: t.apiStatusStyle, attrs: { id: "api_status" } },
                [t._v(t._s(t.apiStatus))],
              ),
            ]),
            t._m(1),
          ]),
          e("div", { staticClass: "card--fyi--large" }, [
            e("h5", [t._v("Default Rate Limit Per API Key")]),
            e("p", [
              t._v(
                "\n      If an API key has no rate limit set, they'll use this default limit.\n    ",
              ),
            ]),
            e("p", { staticClass: "current_limit--outer" }, [
              t._v("\n      It's currently set to\n      "),
              e("strong", [
                e("span", { staticClass: "current_limit" }, [
                  t._v(t._s(t.prettyPrintRL)),
                ]),
              ]),
              t._v(".\n    "),
            ]),
            e(
              "div",
              {
                staticClass: "rate-limit rate-limit-defaults",
                class: [
                  t.isControlsVisible ? "is-open" : "is-closed",
                  "unlimited" === t.ratelimit_period ? "is-unlimited" : "",
                ],
                attrs: { "data-what": "ipaddr" },
              },
              [
                e("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: t.ratelimit_limit,
                      expression: "ratelimit_limit",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "number",
                    name: "per_apiauth_relay_limit",
                    disabled: "unlimited" === t.ratelimit_period,
                  },
                  domProps: { value: t.ratelimit_limit },
                  on: {
                    input: function (e) {
                      e.target.composing ||
                        (t.ratelimit_limit = e.target.value);
                    },
                  },
                }),
                e("div", { staticClass: "rate-limit-select" }, [
                  e(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.ratelimit_period,
                          expression: "ratelimit_period",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { name: "per_apiauth_relay_limit_period" },
                      on: {
                        change: function (e) {
                          var i = Array.prototype.filter
                            .call(e.target.options, function (t) {
                              return t.selected;
                            })
                            .map(function (t) {
                              var e = "_value" in t ? t._value : t.value;
                              return e;
                            });
                          t.ratelimit_period = e.target.multiple ? i : i[0];
                        },
                      },
                    },
                    [
                      e("option", { attrs: { value: "unlimited" } }, [
                        t._v("Unlimited"),
                      ]),
                      e("option", { attrs: { value: "01:00:00" } }, [
                        t._v("per hour"),
                      ]),
                      e("option", { attrs: { value: "1 day" } }, [
                        t._v("per day"),
                      ]),
                      e("option", { attrs: { value: "7 days" } }, [
                        t._v("per week"),
                      ]),
                      e("option", { attrs: { value: "1 mon" } }, [
                        t._v("per month"),
                      ]),
                    ],
                  ),
                ]),
                e(
                  "base-button",
                  {
                    staticClass: "change-save",
                    class: { disabled: t.saveDisabled },
                    attrs: { variant: "blue", "is-loading": t.isSaving },
                    on: {
                      click: function (e) {
                        return (
                          e.preventDefault(),
                          t.save.apply(null, arguments)
                        );
                      },
                    },
                  },
                  [t._v("Save")],
                ),
                e(
                  "a",
                  {
                    staticClass: "change-cancel btn grey",
                    attrs: { href: "#" },
                    on: {
                      click: function (e) {
                        return (
                          e.preventDefault(),
                          t.hideControls.apply(null, arguments)
                        );
                      },
                    },
                  },
                  [t._v("Cancel")],
                ),
                e(
                  "a",
                  {
                    staticClass: "change btn grey",
                    attrs: { href: "#" },
                    on: {
                      click: function (e) {
                        return (
                          e.preventDefault(),
                          t.showControls.apply(null, arguments)
                        );
                      },
                    },
                  },
                  [t._v("Change Rate Limit Default")],
                ),
                e(
                  "span",
                  {
                    staticClass: "message-saved",
                    class: { "is-visible": t.isSavedMessageShowing },
                  },
                  [t._v("Saved changes")],
                ),
              ],
              1,
            ),
          ]),
        ]);
      },
      re = [
        function () {
          var t = this,
            e = t._self._c;
          return e("p", [
            e("strong", [t._v("API Base URL: ")]),
            t._v(" https://api.smtp2go.com/v3/"),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("p", [
            e("strong", [t._v("API Docs: ")]),
            e(
              "a",
              {
                attrs: {
                  target: "_blank",
                  href: "https://developers.smtp2go.com/",
                },
              },
              [t._v("View")],
            ),
          ]);
        },
      ];
    function ce(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        (e &&
          (s = s.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          i.push.apply(i, s));
      }
      return i;
    }
    function le(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ce(Object(i), !0).forEach(function (e) {
              Object(u["a"])(t, e, i[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : ce(Object(i)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(i, e),
                );
              });
      }
      return t;
    }
    var ue = {
        mixins: [bt, Tt],
        components: { BaseButton: Qt },
        data: function () {
          return {
            isControlsVisible: !1,
            ratelimit_period: "",
            ratelimit_limit: "",
            isSavedMessageShowing: !1,
            isSaving: !1,
          };
        },
        mounted: function () {
          ((this.ratelimit_limit = this.$store.state.apiauth.defaultRLLimit),
            (this.ratelimit_period =
              this.$store.state.apiauth.defaultRLPeriod));
        },
        computed: le(
          le({}, Object(_["b"])({ isApiOnline: y.getters.GET_IS_API_ONLINE })),
          {},
          {
            apiStatusStyle: function () {
              return null === this.isApiOnline
                ? ""
                : this.isApiOnline
                  ? "background: #e2f8e8; color: #006042; display: inline-block; padding: 0 3px; border-radius: 3px !important; width: auto; min-height: auto;"
                  : "background: #fdefed; color: #ce715f; display: inline-block; padding: 0 3px; border-radius: 3px !important; width: auto; min-height: auto;";
            },
            apiStatus: function () {
              return null === this.isApiOnline
                ? "Querying API..."
                : this.isApiOnline
                  ? "Online"
                  : "Offline";
            },
            prettyPrintRL: function () {
              return this.mixinHelpers_prettyPrintRatelimit(
                this.$store.state.apiauth.defaultRLLimit,
                this.$store.state.apiauth.defaultRLPeriod,
              );
            },
            saveDisabled: function () {
              return (
                "unlimited" !== this.ratelimit_period &&
                "" === this.ratelimit_limit
              );
            },
          },
        ),
        methods: {
          showControls: function () {
            this.isControlsVisible = !0;
          },
          hideControls: function () {
            this.isControlsVisible = !1;
          },
          save: function () {
            var t = this;
            if (
              (this.mixinAlerts_clear(),
              "" !== this.ratelimit_limit ||
                "unlimited" === this.ratelimit_period)
            ) {
              var e = parseInt(this.ratelimit_limit);
              (isNaN(e) || e <= 0) && "unlimited" !== this.ratelimit_period
                ? this.mixinAlerts_error("Limit must be a number")
                : ((this.isSaving = !0),
                  this.$store
                    .dispatch(y.actions.UPDATE_DEFAULT_RATELIMIT, {
                      ratelimit_limit: this.ratelimit_limit,
                      ratelimit_period: this.ratelimit_period,
                    })
                    .then(function () {
                      ((t.isSaving = !1), t.hideControls());
                    })
                    .catch(function (e) {
                      (t.mixinAlerts_error(e),
                        (t.isSaving = !1),
                        t.hideControls());
                    }));
            } else
              this.mixinAlerts_error(
                "Please provide a limit or select unlimited",
              );
          },
        },
      },
      _e = ue,
      de = (i("daaf"), Object(W["a"])(_e, oe, re, !1, null, "492b55c2", null)),
      pe = de.exports;
    function me(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        (e &&
          (s = s.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          i.push.apply(i, s));
      }
      return i;
    }
    function fe(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? me(Object(i), !0).forEach(function (e) {
              Object(u["a"])(t, e, i[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : me(Object(i)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(i, e),
                );
              });
      }
      return t;
    }
    var he = {
        components: {
          Page: Z,
          EmptyTableNote: nt,
          ManageUserTable: Bt,
          UserEdit: ne,
          UserSettings: pe,
          BaseLoader: Lt,
        },
        computed: fe(
          fe(
            {},
            Object(_["b"])({
              active_users: y.getters.GET_ACTIVE_USERS,
              isFetchingActiveUsers: y.getters.IS_FETCHING_ACTIVE_USERS,
              isEditModalActive: y.getters.IS_EDITING_USER,
              noUserMessage: y.getters.GET_NO_USER_MESSAGE,
            }),
          ),
          {},
          {
            searchText: {
              get: function () {
                return this.$store.getters[y.getters.GET_SEARCH_TEXT];
              },
              set: function (t) {
                this.$store.commit(y.mutations.SET_SEARCH_TEXT, t);
              },
            },
            has_active_users: function () {
              return (
                void 0 !== this.active_users &&
                null !== this.active_users &&
                this.active_users.length > 0
              );
            },
          },
        ),
        methods: {
          add: function () {
            (this.$store.commit(y.mutations.TOGGLE_EDIT_MODAL, {
              visible: !0,
              data: null,
            }),
              setTimeout(function () {
                var t = document.querySelector(".block-user-edit"),
                  e = document.querySelector(".sg-feature--header"),
                  i = document.querySelector(".page-content"),
                  s = t.offsetHeight + e.offsetHeight + 75;
                ((i.style.height = "".concat(s, "px")),
                  i.classList.add("is-edit"));
              }, 300));
          },
          search: function () {
            (this.$store.commit(y.mutations.SET_CURRENT_PAGE, 0),
              this.$store.dispatch(y.actions.LOAD_ACTIVE_USERS, {
                isSearch: !0,
              }));
          },
        },
      },
      Ee = he,
      ge =
        (i("5176"),
        i("cbb0"),
        Object(W["a"])(Ee, G, H, !1, null, "4c2d82f3", null)),
      be = ge.exports;
    function ve(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        (e &&
          (s = s.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          i.push.apply(i, s));
      }
      return i;
    }
    function Oe(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ve(Object(i), !0).forEach(function (e) {
              Object(u["a"])(t, e, i[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : ve(Object(i)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(i, e),
                );
              });
      }
      return t;
    }
    var Te = {
        name: "app",
        mixins: [bt],
        components: { MainPage: be },
        computed: Oe(
          Oe(
            {},
            Object(_["b"])({ isSplashVisible: E.getters.GET_SHOW_SPLASH }),
          ),
          {},
          {
            displayPopupIP: function () {
              return void 0 !== this.popupItem.last_ip &&
                null !== this.popupItem.last_ip &&
                this.popupItem.last_ip.length > 0
                ? this.popupItem.first_ip + " - " + this.popupItem.last_ip
                : this.popupItem.first_ip;
            },
          },
        ),
        data: function () {
          return {
            activePage: "main",
            activePopup: null,
            shouldPopupAnimate: !0,
            popupItem: { trusted_email: "", first_ip: "", last_ip: "" },
          };
        },
        mounted: function () {
          var t = this;
          (this.$store
            .dispatch(y.actions.LOAD_ACTIVE_USERS, { isSearch: !1 })
            .catch(function (e) {
              t.mixinAlerts_error(e);
            }),
            this.$store.dispatch(y.actions.QUERY_API_STATUS),
            this.$eventBus.$on("showPopup", this.showPopup),
            this.$eventBus.$on(
              "showPopupImmediately",
              this.showPopupImmediately,
            ));
        },
        methods: {
          hideSplash: function () {
            this.$store.commit(E.mutations.SET_SHOW_SPLASH, !1);
          },
          showPopup: function (t, e) {
            ((this.activePopup = t), (this.popupItem = e));
          },
          showPopupImmediately: function (t, e) {
            var i = this;
            ((this.shouldPopupAnimate = !1),
              this.showPopup(t, e),
              setTimeout(function () {
                i.shouldPopupAnimate = !0;
              }, 0));
          },
          hidePopup: function () {
            this.activePopup = null;
          },
          setPage: function (t) {
            this.activePage = t;
          },
        },
      },
      Ae = Te,
      De =
        (i("31bd"),
        i("b356"),
        Object(W["a"])(Ae, c, l, !1, null, "17abb530", null)),
      Ie = De.exports;
    n["a"].use(_["a"]);
    var Se = new _["a"].Store({
        strict: !1,
        getters: {},
        mutations: {},
        actions: {},
        modules: { root: T, apiauth: j },
      }),
      Ce = Se;
    (n["a"].use(r.a),
      (n["a"].config.productionTip = !1),
      (n["a"].prototype.$eventBus = new n["a"]()),
      Ce.commit(E.mutations.SET_CSRF_KEY, PAGE_DATA.csrfkey),
      Ce.commit(E.mutations.SET_SHOW_SPLASH, PAGE_DATA.showSplash),
      Ce.commit(E.mutations.SET_END_POINTS, END_POINTS.urls()),
      Ce.commit(y.mutations.SET_APP_SETTINGS, PAGE_DATA.appSettings),
      Ce.commit(y.mutations.SET_IP_POOLS, PAGE_DATA.ip_pools),
      Ce.commit(
        y.mutations.SET_API_NOTIFICATION_SEEN,
        PAGE_DATA.api_notification_seen,
      ),
      Ce.commit(
        y.mutations.SET_DEFAULT_RL_LIMIT,
        PAGE_DATA.ratelimits.default_limit,
      ),
      Ce.commit(
        y.mutations.SET_DEFAULT_RL_PERIOD,
        PAGE_DATA.ratelimits.default_period,
      ),
      Ce.commit(
        y.mutations.SET_IS_ALLOWED_ARCHIVING,
        PAGE_DATA.isAllowedArchiving,
      ),
      C(Ce),
      new n["a"]({
        store: Ce,
        render: function (t) {
          return t(Ie);
        },
      }).$mount("#app"));
  },
  "5bc7": function (t, e, i) {},
  6: function (t, e) {},
  "6ff0": function (t, e, i) {},
  7: function (t, e) {},
  "72a3": function (t, e, i) {},
  8: function (t, e) {},
  8065: function (t, e, i) {},
  "8aa3": function (t, e, i) {
    "use strict";
    i("6ff0");
  },
  9: function (t, e) {},
  "97ea": function (t, e, i) {
    "use strict";
    i("c9b7");
  },
  "9d14": function (t, e, i) {},
  aa61: function (t, e, i) {
    "use strict";
    i("d23c");
  },
  b356: function (t, e, i) {
    "use strict";
    i("f611");
  },
  b98f: function (t, e, i) {},
  c9b7: function (t, e, i) {},
  cbb0: function (t, e, i) {
    "use strict";
    i("403a");
  },
  cd12: function (t, e, i) {
    "use strict";
    i("b98f");
  },
  cd64: function (t, e, i) {
    "use strict";
    i("d31f");
  },
  d23c: function (t, e, i) {},
  d2bb: function (t, e, i) {
    "use strict";
    i("2567");
  },
  d31f: function (t, e, i) {},
  d3df: function (t, e, i) {
    "use strict";
    i("015f");
  },
  d96c: function (t, e, i) {
    "use strict";
    i("72a3");
  },
  daaf: function (t, e, i) {
    "use strict";
    i("8065");
  },
  e2f7: function (t, e, i) {},
  ea5d: function (t, e, i) {
    "use strict";
    i("5bc7");
  },
  f611: function (t, e, i) {},
});
//# sourceMappingURL=app.5c64cb8e.js.map
