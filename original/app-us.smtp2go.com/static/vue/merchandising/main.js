(function (t) {
  function e(e) {
    for (
      var a, r, o = e[0], c = e[1], l = e[2], d = 0, p = [];
      d < o.length;
      d++
    )
      ((r = o[d]),
        Object.prototype.hasOwnProperty.call(n, r) && n[r] && p.push(n[r][0]),
        (n[r] = 0));
    for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (t[a] = c[a]);
    u && u(e);
    while (p.length) p.shift()();
    return (i.push.apply(i, l || []), s());
  }
  function s() {
    for (var t, e = 0; e < i.length; e++) {
      for (var s = i[e], a = !0, o = 1; o < s.length; o++) {
        var c = s[o];
        0 !== n[c] && (a = !1);
      }
      a && (i.splice(e--, 1), (t = r((r.s = s[0]))));
    }
    return t;
  }
  var a = {},
    n = { app: 0 },
    i = [];
  function r(e) {
    if (a[e]) return a[e].exports;
    var s = (a[e] = { i: e, l: !1, exports: {} });
    return (t[e].call(s.exports, s, s.exports, r), (s.l = !0), s.exports);
  }
  ((r.m = t),
    (r.c = a),
    (r.d = function (t, e, s) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s });
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
      var s = Object.create(null);
      if (
        (r.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          r.d(
            s,
            a,
            function (e) {
              return t[e];
            }.bind(null, a),
          );
      return s;
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
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = o.push.bind(o);
  ((o.push = e), (o = o.slice()));
  for (var l = 0; l < o.length; l++) e(o[l]);
  var u = c;
  (i.push([0, "chunk-vendors"]), s());
})({
  0: function (t, e, s) {
    t.exports = s("56d7");
  },
  "0615": function (t, e, s) {},
  "06f9": function (t, e, s) {},
  "0f91": function (t, e, s) {},
  1487: function (t, e, s) {
    "use strict";
    s("06f9");
  },
  1823: function (t, e, s) {},
  "198f": function (t, e, s) {
    "use strict";
    s("6db9");
  },
  "199b": function (t, e, s) {
    "use strict";
    s("36d1");
  },
  3079: function (t, e, s) {},
  3199: function (t, e, s) {
    "use strict";
    s("7a0d");
  },
  "36d1": function (t, e, s) {},
  3779: function (t, e, s) {},
  "38f8": function (t, e, s) {},
  3952: function (t, e, s) {},
  "3d99": function (t, e, s) {},
  "405e": function (t, e, s) {
    "use strict";
    s("ad69");
  },
  "40d1": function (t, e, s) {
    "use strict";
    s("6430");
  },
  4632: function (t, e, s) {},
  4678: function (t, e, s) {
    var a = {
      "./af": "2bfb",
      "./af.js": "2bfb",
      "./ar": "8e73",
      "./ar-dz": "a356",
      "./ar-dz.js": "a356",
      "./ar-kw": "423e",
      "./ar-kw.js": "423e",
      "./ar-ly": "1cfd",
      "./ar-ly.js": "1cfd",
      "./ar-ma": "0a84",
      "./ar-ma.js": "0a84",
      "./ar-sa": "8230",
      "./ar-sa.js": "8230",
      "./ar-tn": "6d83",
      "./ar-tn.js": "6d83",
      "./ar.js": "8e73",
      "./az": "485c",
      "./az.js": "485c",
      "./be": "1fc1",
      "./be.js": "1fc1",
      "./bg": "84aa",
      "./bg.js": "84aa",
      "./bm": "a7fa",
      "./bm.js": "a7fa",
      "./bn": "9043",
      "./bn-bd": "9686",
      "./bn-bd.js": "9686",
      "./bn.js": "9043",
      "./bo": "d26a",
      "./bo.js": "d26a",
      "./br": "6887",
      "./br.js": "6887",
      "./bs": "2554",
      "./bs.js": "2554",
      "./ca": "d716",
      "./ca.js": "d716",
      "./cs": "3c0d",
      "./cs.js": "3c0d",
      "./cv": "03ec",
      "./cv.js": "03ec",
      "./cy": "9797",
      "./cy.js": "9797",
      "./da": "0f14",
      "./da.js": "0f14",
      "./de": "b469",
      "./de-at": "b3eb",
      "./de-at.js": "b3eb",
      "./de-ch": "bb71",
      "./de-ch.js": "bb71",
      "./de.js": "b469",
      "./dv": "598a",
      "./dv.js": "598a",
      "./el": "8d47",
      "./el.js": "8d47",
      "./en-au": "0e6b",
      "./en-au.js": "0e6b",
      "./en-ca": "3886",
      "./en-ca.js": "3886",
      "./en-gb": "39a6",
      "./en-gb.js": "39a6",
      "./en-ie": "e1d3",
      "./en-ie.js": "e1d3",
      "./en-il": "7333",
      "./en-il.js": "7333",
      "./en-in": "ec2e",
      "./en-in.js": "ec2e",
      "./en-nz": "6f50",
      "./en-nz.js": "6f50",
      "./en-sg": "b7e9",
      "./en-sg.js": "b7e9",
      "./eo": "65db",
      "./eo.js": "65db",
      "./es": "898b",
      "./es-do": "0a3c",
      "./es-do.js": "0a3c",
      "./es-mx": "b5b7",
      "./es-mx.js": "b5b7",
      "./es-us": "55c9",
      "./es-us.js": "55c9",
      "./es.js": "898b",
      "./et": "ec18",
      "./et.js": "ec18",
      "./eu": "0ff2",
      "./eu.js": "0ff2",
      "./fa": "8df4",
      "./fa.js": "8df4",
      "./fi": "81e9",
      "./fi.js": "81e9",
      "./fil": "d69a",
      "./fil.js": "d69a",
      "./fo": "0721",
      "./fo.js": "0721",
      "./fr": "9f26",
      "./fr-ca": "d9f8",
      "./fr-ca.js": "d9f8",
      "./fr-ch": "0e49",
      "./fr-ch.js": "0e49",
      "./fr.js": "9f26",
      "./fy": "7118",
      "./fy.js": "7118",
      "./ga": "5120",
      "./ga.js": "5120",
      "./gd": "f6b4",
      "./gd.js": "f6b4",
      "./gl": "8840",
      "./gl.js": "8840",
      "./gom-deva": "aaf2",
      "./gom-deva.js": "aaf2",
      "./gom-latn": "0caa",
      "./gom-latn.js": "0caa",
      "./gu": "e0c5",
      "./gu.js": "e0c5",
      "./he": "c7aa",
      "./he.js": "c7aa",
      "./hi": "dc4d",
      "./hi.js": "dc4d",
      "./hr": "4ba9",
      "./hr.js": "4ba9",
      "./hu": "5b14",
      "./hu.js": "5b14",
      "./hy-am": "d6b6",
      "./hy-am.js": "d6b6",
      "./id": "5038",
      "./id.js": "5038",
      "./is": "0558",
      "./is.js": "0558",
      "./it": "6e98",
      "./it-ch": "6f12",
      "./it-ch.js": "6f12",
      "./it.js": "6e98",
      "./ja": "079e",
      "./ja.js": "079e",
      "./jv": "b540",
      "./jv.js": "b540",
      "./ka": "201b",
      "./ka.js": "201b",
      "./kk": "6d79",
      "./kk.js": "6d79",
      "./km": "e81d",
      "./km.js": "e81d",
      "./kn": "3e92",
      "./kn.js": "3e92",
      "./ko": "22f8",
      "./ko.js": "22f8",
      "./ku": "2421",
      "./ku.js": "2421",
      "./ky": "9609",
      "./ky.js": "9609",
      "./lb": "440c",
      "./lb.js": "440c",
      "./lo": "b29d",
      "./lo.js": "b29d",
      "./lt": "26f9",
      "./lt.js": "26f9",
      "./lv": "b97c",
      "./lv.js": "b97c",
      "./me": "293c",
      "./me.js": "293c",
      "./mi": "688b",
      "./mi.js": "688b",
      "./mk": "6909",
      "./mk.js": "6909",
      "./ml": "02fb",
      "./ml.js": "02fb",
      "./mn": "958b",
      "./mn.js": "958b",
      "./mr": "39bd",
      "./mr.js": "39bd",
      "./ms": "ebe4",
      "./ms-my": "6403",
      "./ms-my.js": "6403",
      "./ms.js": "ebe4",
      "./mt": "1b45",
      "./mt.js": "1b45",
      "./my": "8689",
      "./my.js": "8689",
      "./nb": "6ce3",
      "./nb.js": "6ce3",
      "./ne": "3a39",
      "./ne.js": "3a39",
      "./nl": "facd",
      "./nl-be": "db29",
      "./nl-be.js": "db29",
      "./nl.js": "facd",
      "./nn": "b84c",
      "./nn.js": "b84c",
      "./oc-lnc": "167b",
      "./oc-lnc.js": "167b",
      "./pa-in": "f3ff",
      "./pa-in.js": "f3ff",
      "./pl": "8d57",
      "./pl.js": "8d57",
      "./pt": "f260",
      "./pt-br": "d2d4",
      "./pt-br.js": "d2d4",
      "./pt.js": "f260",
      "./ro": "972c",
      "./ro.js": "972c",
      "./ru": "957c",
      "./ru.js": "957c",
      "./sd": "6784",
      "./sd.js": "6784",
      "./se": "ffff",
      "./se.js": "ffff",
      "./si": "eda5",
      "./si.js": "eda5",
      "./sk": "7be6",
      "./sk.js": "7be6",
      "./sl": "8155",
      "./sl.js": "8155",
      "./sq": "c8f3",
      "./sq.js": "c8f3",
      "./sr": "cf1e",
      "./sr-cyrl": "13e9",
      "./sr-cyrl.js": "13e9",
      "./sr.js": "cf1e",
      "./ss": "52bd",
      "./ss.js": "52bd",
      "./sv": "5fbd",
      "./sv.js": "5fbd",
      "./sw": "74dc",
      "./sw.js": "74dc",
      "./ta": "3de5",
      "./ta.js": "3de5",
      "./te": "5cbb",
      "./te.js": "5cbb",
      "./tet": "576c",
      "./tet.js": "576c",
      "./tg": "3b1b",
      "./tg.js": "3b1b",
      "./th": "10e8",
      "./th.js": "10e8",
      "./tk": "5aff",
      "./tk.js": "5aff",
      "./tl-ph": "0f38",
      "./tl-ph.js": "0f38",
      "./tlh": "cf75",
      "./tlh.js": "cf75",
      "./tr": "0e81",
      "./tr.js": "0e81",
      "./tzl": "cf51",
      "./tzl.js": "cf51",
      "./tzm": "c109",
      "./tzm-latn": "b53d",
      "./tzm-latn.js": "b53d",
      "./tzm.js": "c109",
      "./ug-cn": "6117",
      "./ug-cn.js": "6117",
      "./uk": "ada2",
      "./uk.js": "ada2",
      "./ur": "5294",
      "./ur.js": "5294",
      "./uz": "2e8c",
      "./uz-latn": "010e",
      "./uz-latn.js": "010e",
      "./uz.js": "2e8c",
      "./vi": "2921",
      "./vi.js": "2921",
      "./x-pseudo": "fd7e",
      "./x-pseudo.js": "fd7e",
      "./yo": "7f33",
      "./yo.js": "7f33",
      "./zh-cn": "5c3a",
      "./zh-cn.js": "5c3a",
      "./zh-hk": "49ab",
      "./zh-hk.js": "49ab",
      "./zh-mo": "3a6c",
      "./zh-mo.js": "3a6c",
      "./zh-tw": "90ea",
      "./zh-tw.js": "90ea",
    };
    function n(t) {
      var e = i(t);
      return s(e);
    }
    function i(t) {
      if (!s.o(a, t)) {
        var e = new Error("Cannot find module '" + t + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      return a[t];
    }
    ((n.keys = function () {
      return Object.keys(a);
    }),
      (n.resolve = i),
      (t.exports = n),
      (n.id = "4678"));
  },
  "4a19": function (t, e, s) {
    "use strict";
    s("bbbc");
  },
  "4d7c": function (t, e, s) {
    "use strict";
    s("3779");
  },
  "56d7": function (t, e, s) {
    "use strict";
    s.r(e);
    (s("cadf"), s("551c"), s("f751"), s("097d"));
    var a = s("2b0e"),
      n = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { attrs: { id: "app" } }, [s("router-view")], 1);
      },
      i = [],
      r = s("1157"),
      o = s.n(r),
      c = {
        methods: {
          mixinAlerts_clear: function () {
            l();
          },
          mixinAlerts_info: function (t) {
            u(t);
          },
          mixinAlerts_success: function (t) {
            d(t);
          },
          mixinAlerts_warn: function (t) {
            p(t);
          },
          mixinAlerts_error: function (t) {
            _(t);
          },
        },
      };
    function l() {
      var t = o()("#user-alert");
      (t.removeClass(), t.empty());
    }
    function u(t) {
      (l(), t && HTML.alertUser("info", t));
    }
    function d(t) {
      (l(), t && HTML.alertUser("success", t));
    }
    function p(t) {
      (l(), t && HTML.alertUser("warning", t));
    }
    function _(t) {
      (l(), t && HTML.alertUser("error", t));
    }
    var m,
      h,
      f = c,
      E = { name: "app", mixins: [f] },
      v = E,
      b = s("2877"),
      g = Object(b["a"])(v, n, i, !1, null, null, null),
      C = g.exports,
      T = s("2f62"),
      O = s("bd86"),
      y = (s("a481"), s("c46f"));
    function P(t, e) {
      return Object(y["a"])(
        e,
        function (e, s, a) {
          return (
            (e[a] = Object(y["a"])(
              s,
              function (e, s, a) {
                return ((e[a] = s.replace(t, "")), e);
              },
              {},
            )),
            e
          );
        },
        {},
      );
    }
    function S(t, e, s) {
      var a = t.indexOf("?") > -1 ? "&" : "?";
      return null !== s && void 0 !== s && s.length > 0
        ? t + a + e + "=" + encodeURIComponent(s)
        : t;
    }
    var A,
      N,
      w,
      D,
      R,
      I,
      j,
      M,
      k,
      L,
      G,
      x,
      U,
      V,
      $ = "root/",
      B = {
        getters: {
          GET_IS_AJAX_RUNNING: $ + "GET_IS_AJAX_RUNNING",
          GET_BACKEND_URL: $ + "GET_BACKEND_URL",
          GET_END_POINTS: $ + "GET_END_POINTS",
          GET_IMAGE_URLS: $ + "GET_IMAGE_URLS",
          GET_SUCCESS_MESSAGE: $ + "GET_SUCCESS_MESSAGE",
          GET_ERROR_MESSAGE: $ + "GET_ERROR_MESSAGE",
          GET_IS_QUIET_REQUEST: $ + "GET_IS_QUIET_REQUEST",
        },
        mutations: {
          SET_CSRF_KEY: $ + "SET_CSRF_KEY",
          SET_END_POINTS: $ + "END_POINTS",
          SET_IMAGE_URLS: $ + "SET_IMAGE_URLS",
          INC_RUNNING_AJAX_REQUESTS: $ + "INC_RUNNING_AJAX_REQUESTS",
          DEC_RUNNING_AJAX_REQUESTS: $ + "DEC_RUNNING_AJAX_REQUESTS",
          SET_SUCCESS_MESSAGE: $ + "SET_SUCCESS_MESSAGE",
          SET_ERROR_MESSAGE: $ + "SET_ERROR_MESSAGE",
          CLEAR_SUCCESS_MESSAGE: $ + "CLEAR_SUCCESS_MESSAGE",
          CLEAR_ERROR_MESSAGE: $ + "CLEAR_ERROR_MESSAGE",
          SET_IS_QUIET_REQUEST: $ + "SET_IS_QUIET_REQUEST",
        },
        actions: { UPDATE_SUCCESS_MESSAGE: $ + "UPDATE_SUCCESS_MESSAGE" },
      },
      F = P($, B),
      Y = {
        running_ajax_requests: 0,
        csrf_key: "",
        end_points: {},
        image_urls: {},
        success_message: null,
        error_message: null,
        is_quiet_request: !1,
      },
      H =
        ((m = {}),
        Object(O["a"])(m, F.getters.GET_IS_AJAX_RUNNING, function (t) {
          return t.running_ajax_requests > 0;
        }),
        Object(O["a"])(m, F.getters.GET_END_POINTS, function (t) {
          return t.end_points;
        }),
        Object(O["a"])(m, F.getters.GET_BACKEND_URL, function (t) {
          return function (e, s) {
            var a = S(t.end_points[e], "action", s);
            return S(a, "CSRF_key", t.csrf_key);
          };
        }),
        Object(O["a"])(m, F.getters.GET_IMAGE_URLS, function (t) {
          return t.image_urls;
        }),
        Object(O["a"])(m, F.getters.GET_SUCCESS_MESSAGE, function (t) {
          return t.success_message;
        }),
        Object(O["a"])(m, F.getters.GET_ERROR_MESSAGE, function (t) {
          return t.error_message;
        }),
        Object(O["a"])(m, F.getters.GET_IS_QUIET_REQUEST, function (t) {
          return t.is_quiet_request;
        }),
        m),
      z =
        ((h = {}),
        Object(O["a"])(h, F.mutations.SET_CSRF_KEY, function (t, e) {
          t.csrf_key = e;
        }),
        Object(O["a"])(h, F.mutations.SET_END_POINTS, function (t, e) {
          t.end_points = e;
        }),
        Object(O["a"])(h, F.mutations.SET_IMAGE_URLS, function (t, e) {
          t.image_urls = e;
        }),
        Object(O["a"])(h, F.mutations.INC_RUNNING_AJAX_REQUESTS, function (t) {
          t.running_ajax_requests++;
        }),
        Object(O["a"])(h, F.mutations.DEC_RUNNING_AJAX_REQUESTS, function (t) {
          t.running_ajax_requests--;
        }),
        Object(O["a"])(h, F.mutations.SET_SUCCESS_MESSAGE, function (t, e) {
          t.success_message = e;
        }),
        Object(O["a"])(h, F.mutations.SET_ERROR_MESSAGE, function (t, e) {
          t.error_message = e;
        }),
        Object(O["a"])(h, F.mutations.CLEAR_SUCCESS_MESSAGE, function (t) {
          t.success_message = null;
        }),
        Object(O["a"])(h, F.mutations.CLEAR_ERROR_MESSAGE, function (t) {
          t.error_message = null;
        }),
        Object(O["a"])(h, F.mutations.SET_IS_QUIET_REQUEST, function (t, e) {
          t.is_quiet_request = e;
        }),
        h),
      W = Object(O["a"])({}, F.actions.UPDATE_SUCCESS_MESSAGE, function (t, e) {
        var s = e.success_message;
        (t.commit(F.mutations.SET_SUCCESS_MESSAGE, s),
          setTimeout(function () {
            t.commit(F.mutations.CLEAR_SUCCESS_MESSAGE);
          }, 5e3));
      }),
      K = { namespaced: !0, state: Y, getters: H, mutations: z, actions: W },
      X = s("bc3a"),
      Q = s.n(X),
      q = Q.a.create(),
      J = function (t) {
        (q.interceptors.request.use(function (e) {
          return (
            t.commit("root/INC_RUNNING_AJAX_REQUESTS"),
            t.commit("root/CLEAR_SUCCESS_MESSAGE"),
            t.commit("root/CLEAR_ERROR_MESSAGE"),
            e
          );
        }),
          q.interceptors.response.use(
            function (e) {
              if (
                (t.commit("root/DEC_RUNNING_AJAX_REQUESTS"),
                (e = e.data),
                "error" in e)
              )
                return Promise.reject(e.error);
              var s = e.message,
                a = e.results,
                n = e.verification;
              return Promise.resolve({
                results: a,
                message: s,
                verification: n,
              });
            },
            function (e) {
              return (
                t.commit("root/DEC_RUNNING_AJAX_REQUESTS"),
                Promise.reject(e)
              );
            },
          ));
      },
      Z = "onboarding/",
      tt = {
        getters: {
          GET_ACTIVATION_DATA: Z + "GET_ACTIVATION_DATA",
          GET_ONBOARDING_STATE: Z + "GET_ONBOARDING_STATE",
          GET_REDIRECT_PAGE_URL: Z + "GET_REDIRECT_PAGE_URL",
        },
        mutations: {
          SET_ONBOARDING_STATE: Z + "SET_ONBOARDING_STATE",
          SET_ACTIVATION_DATA: Z + "SET_ACTIVATION_DATA",
          UPDATE_ONBOARDING_STATE: Z + "UPDATE_ONBOARDING_STATE",
        },
        actions: {
          ACTIVATE_ACCOUNT: Z + "ACTIVATE_ACCOUNT",
          FETCH_ONBOARDING_STATE: Z + "FETCH_ONBOARDING_STATE",
          SAVE_PARTNER_KEY: Z + "SAVE_PARTNER_KEY",
        },
      },
      et = P(Z, tt),
      st = {
        activation_data: { live_member_id: null, wanted_plan: null },
        onboarding_state: {
          state_loaded: !1,
          has_sender_domain: !1,
          has_api_key: !1,
          has_smtp_user: !1,
        },
        pages: {
          add_domain: "add-domain",
          choose_service: "choose-service",
          dashboard: "main",
        },
      },
      at =
        ((A = {}),
        Object(O["a"])(A, et.getters.GET_ACTIVATION_DATA, function (t) {
          return t.activation_data;
        }),
        Object(O["a"])(A, et.getters.GET_ONBOARDING_STATE, function (t) {
          return t.onboarding_state;
        }),
        Object(O["a"])(A, et.getters.GET_REDIRECT_PAGE_URL, function (t) {
          return t.onboarding_state.has_sender_domain
            ? t.onboarding_state.has_api_key || t.onboarding_state.has_smtp_user
              ? t.pages.dashboard
              : t.pages.choose_service
            : t.pages.add_domain;
        }),
        A),
      nt =
        ((N = {}),
        Object(O["a"])(N, et.mutations.SET_ACTIVATION_DATA, function (t, e) {
          t.activation_data = e;
        }),
        Object(O["a"])(N, et.mutations.SET_ONBOARDING_STATE, function (t, e) {
          t.onboarding_state = e;
        }),
        Object(O["a"])(
          N,
          et.mutations.UPDATE_ONBOARDING_STATE,
          function (t, e) {
            a["default"].set(t.onboarding_state, e, !0);
          },
        ),
        N),
      it =
        ((w = {}),
        Object(O["a"])(w, et.actions.ACTIVATE_ACCOUNT, function (t, e) {
          var s = e.partner_key,
            a = e.reddit_click_id;
          return new Promise(function (e, n) {
            q.post(t.rootGetters[B.getters.GET_BACKEND_URL]("Onboarding", ""), {
              partner_key: s,
              reddit_click_id: a,
            })
              .then(function (s) {
                (null == s.results && e(),
                  t.commit(
                    et.mutations.SET_ACTIVATION_DATA,
                    s.results.activation_data,
                  ),
                  t.commit(
                    et.mutations.SET_ONBOARDING_STATE,
                    s.results.onboarding_state,
                  ),
                  e());
              })
              .catch(function (t) {
                return n(t);
              });
          });
        }),
        Object(O["a"])(w, et.actions.SAVE_PARTNER_KEY, function (t, e) {
          var s = e.partner_key;
          return new Promise(function (e) {
            q.post(
              t.rootGetters[B.getters.GET_BACKEND_URL](
                "Onboarding Partner",
                "save-partner-key",
              ),
              { partner_key: s },
            )
              .then(function () {
                e();
              })
              .catch();
          });
        }),
        w),
      rt = {
        namespaced: !0,
        state: st,
        getters: at,
        mutations: nt,
        actions: it,
      },
      ot = (s("7f7f"), s("ac6a"), "plan/"),
      ct = {
        getters: {
          GET_IS_INITIALISED: ot + "GET_IS_INITIALISED",
          GET_PLAN_LIST: ot + "GET_PLAN_LIST",
          GET_PLAN_METADATA: ot + "GET_PLAN_METADATA",
          GET_PLAN_TIERS: ot + "GET_PLAN_TIERS",
          GET_CURRENT_PLAN: ot + "GET_CURRENT_PLAN",
          GET_SELECTED_PLAN: ot + "GET_SELECTED_PLAN",
          GET_EU_VAT_COUNTRIES: ot + "GET_EU_VAT_COUNTRIES",
          GET_WANT_CHECKOUT: ot + "GET_WANT_CHECKOUT",
          GET_DOWNGRADE_APPROVED: ot + "GET_DOWNGRADE_APPROVED",
          GET_DOWNGRADE_TO_FREE_CLICKED: ot + "GET_DOWNGRADE_TO_FREE_CLICKED",
        },
        mutations: {
          SET_IS_INITIALISED: ot + "SET_IS_INITIALISED",
          SET_PLAN_LIST: ot + "SET_PLAN_LIST",
          SET_PLAN_METADATA: ot + "SET_PLAN_METADATA",
          SELECT_PLAN: ot + "SELECT_PLAN",
          SELECT_FREE_PLAN: ot + "SELECT_FREE_PLAN",
          SET_EU_VAT_COUNTRIES: ot + "SET_EU_VAT_COUNTRIES",
          SET_WANT_CHECKOUT: ot + "SET_WANT_CHECKOUT",
          REMOVE_HAS_SCHEDULED_CHANGE: ot + "REMOVE_HAS_SCHEDULED_CHANGE",
          APPROVE_DOWNGRADE: ot + "APPROVE_DOWNGRADE",
          SET_DOWNGRADE_TO_FREE_CLICKED: ot + "SET_DOWNGRADE_TO_FREE_CLICKED",
        },
        actions: {
          FETCH_PLAN_LIST: ot + "FETCH_PLAN_LIST",
          PLAN_CONTACT_US: ot + "PLAN_CONTACT_US",
          CANCEL_DOWNGRADE: ot + "CANCEL_DOWNGRADE",
          CLOSE_ACCOUNT: ot + "CLOSE_ACCOUNT",
        },
      },
      lt = P(ot, ct),
      ut = {
        is_initialised: !1,
        plan_list: [],
        plan_metadata: {
          current_subscription: {},
          scheduled_downgrade_plan: 0,
          scheduled_downgrade_month: 1,
        },
        eu_vat_countries: [],
        plan_tiers: {
          free: 1e3,
          starter: 1e4,
          professional: 1e5,
          corporate: 1e6,
        },
        want_checkout: !1,
        downgrade_approved: !1,
        downgrade_to_free_clicked: !1,
      },
      dt =
        ((D = {}),
        Object(O["a"])(D, lt.getters.GET_IS_INITIALISED, function (t) {
          return t.is_initialised;
        }),
        Object(O["a"])(D, lt.getters.GET_PLAN_LIST, function (t) {
          return t.plan_list;
        }),
        Object(O["a"])(D, lt.getters.GET_CURRENT_PLAN, function (t) {
          var e = {};
          return (
            t.plan_list.forEach(function (t) {
              t.is_current && (e = t);
            }),
            e
          );
        }),
        Object(O["a"])(D, lt.getters.GET_SELECTED_PLAN, function (t) {
          var e = {};
          return (
            t.plan_list.forEach(function (t) {
              t.selected && (e = t);
            }),
            e
          );
        }),
        Object(O["a"])(D, lt.getters.GET_PLAN_METADATA, function (t) {
          return t.plan_metadata;
        }),
        Object(O["a"])(D, lt.getters.GET_PLAN_TIERS, function (t) {
          return t.plan_tiers;
        }),
        Object(O["a"])(D, lt.getters.GET_EU_VAT_COUNTRIES, function (t) {
          return t.eu_vat_countries;
        }),
        Object(O["a"])(D, lt.getters.GET_WANT_CHECKOUT, function (t) {
          return t.want_checkout;
        }),
        Object(O["a"])(D, lt.getters.GET_DOWNGRADE_APPROVED, function (t) {
          return t.downgrade_approved;
        }),
        Object(O["a"])(
          D,
          lt.getters.GET_DOWNGRADE_TO_FREE_CLICKED,
          function (t) {
            return t.downgrade_to_free_clicked;
          },
        ),
        D),
      pt =
        ((R = {}),
        Object(O["a"])(R, lt.mutations.SET_IS_INITIALISED, function (t, e) {
          t.is_initialised = e;
        }),
        Object(O["a"])(R, lt.mutations.SET_PLAN_LIST, function (t, e) {
          t.plan_list = e;
        }),
        Object(O["a"])(R, lt.mutations.SET_PLAN_METADATA, function (t, e) {
          t.plan_metadata = e;
        }),
        Object(O["a"])(R, lt.mutations.SELECT_PLAN, function (t, e) {
          var s = null;
          t.plan_list.forEach(function (t) {
            t.selected && ((s = t), a["default"].set(t, "selected", !1));
          });
          var n = !1;
          (null != s &&
            1 != s.months &&
            e.number_of_relays != s.number_of_relays &&
            t.plan_list.forEach(function (t) {
              t.months === s.months &&
                t.number_of_relays === e.number_of_relays &&
                ((n = !0), a["default"].set(t, "selected", !0));
            }),
            n ||
              t.plan_list.forEach(function (t) {
                t.plan_id === e.plan_id && a["default"].set(t, "selected", !0);
              }));
        }),
        Object(O["a"])(R, lt.mutations.SELECT_FREE_PLAN, function (t) {
          t.plan_list.forEach(function (e) {
            e.per_month_size === t.plan_tiers.free
              ? a["default"].set(e, "selected", !0)
              : a["default"].set(e, "selected", !1);
          });
        }),
        Object(O["a"])(R, lt.mutations.SET_EU_VAT_COUNTRIES, function (t, e) {
          t.eu_vat_countries = e;
        }),
        Object(O["a"])(R, lt.mutations.SET_WANT_CHECKOUT, function (t, e) {
          t.want_checkout = e;
        }),
        Object(O["a"])(
          R,
          lt.mutations.REMOVE_HAS_SCHEDULED_CHANGE,
          function (t) {
            a["default"].set(
              t.plan_metadata.current_subscription,
              "has_scheduled_changes",
              !1,
            );
          },
        ),
        Object(O["a"])(R, lt.mutations.APPROVE_DOWNGRADE, function (t) {
          t.downgrade_approved = !0;
        }),
        Object(O["a"])(
          R,
          lt.mutations.SET_DOWNGRADE_TO_FREE_CLICKED,
          function (t, e) {
            t.downgrade_to_free_clicked = e;
          },
        ),
        R),
      _t =
        ((I = {}),
        Object(O["a"])(I, lt.actions.FETCH_PLAN_LIST, function (t) {
          return new Promise(function (e, s) {
            q.get(t.rootGetters[B.getters.GET_BACKEND_URL]("Change Plan", ""))
              .then(function (s) {
                var a = s.results.plans;
                (a.forEach(function (t) {
                  t.selected = t.is_current;
                }),
                  702 == s.results.current_plan &&
                    a.unshift({
                      planname: "Free 10k",
                      selected: !0,
                      plan_id: 702,
                      per_month_size: 1e4,
                      is_legacy: !1,
                      full_price: 0,
                      orig_full_price: 0,
                      months: 1,
                      is_current: !0,
                    }),
                  t.commit(lt.mutations.SET_PLAN_LIST, a));
                var n = 0,
                  i = 1;
                (s.results.scheduled_downgrade_plan_id &&
                  a.forEach(function (t) {
                    t.plan_id == s.results.scheduled_downgrade_plan_id &&
                      ((n = t.per_month_size), (i = t.months));
                  }),
                  t.commit(lt.mutations.SET_PLAN_METADATA, {
                    account_status: s.results.account_status,
                    accountcode: s.results.accountcode,
                    card_holder_name: s.results.card_holder_name,
                    current_plan: s.results.current_plan,
                    end_date_epoch: s.results.end_date_epoch,
                    end_date_utc: s.results.end_date_utc,
                    subscription: "smtp2go_" + s.results.member_id,
                    card_last4: s.results.card_last4,
                    card_type: s.results.card_type,
                    current_subscription: s.results.current_subscription,
                    billing_details: s.results.billing_details,
                    has_subs: s.results.has_subs,
                    scheduled_downgrade_plan: n,
                    scheduled_downgrade_month: i,
                    coupon_id: s.results.coupon_id,
                    payment_type: s.results.payment_type,
                    paypal_email: s.results.paypal_email,
                    first_name: s.results.first_name,
                    last_name: s.results.last_name,
                    email: s.results.email,
                    pending_plan: s.results.pending_plan,
                    processor: s.results.processor,
                    price_rate: s.results.price_rate,
                    dedicated_ip_address: s.results.dedicated_ip_address,
                    dedicated_sms_number: s.results.dedicated_sms_number,
                    dedicated_ip_price: s.results.dedicated_ip_price,
                    dedicated_sms_price: s.results.dedicated_sms_price,
                    verified_sender_total: s.results.verified_sender_total,
                    team_member_total: s.results.team_member_total,
                    webhook_total: s.results.webhook_total,
                    activity_duration_addon: s.results.activity_duration_addon,
                    within_subscription_period:
                      s.results.within_subscription_period,
                    date_endperiod: s.results.date_endperiod,
                  }),
                  t.commit(
                    lt.mutations.SET_EU_VAT_COUNTRIES,
                    s.results.eu_vat_countries,
                  ),
                  t.commit(lt.mutations.SET_IS_INITIALISED, !0),
                  e(s));
              })
              .catch(function (e) {
                (t.commit(
                  "root/SET_ERROR_MESSAGE",
                  "Oops, something went wrong. Please try again after sometime.",
                  { root: !0 },
                ),
                  s(e));
              });
          });
        }),
        Object(O["a"])(I, lt.actions.PLAN_CONTACT_US, function (t, e) {
          var s = e.name,
            a = e.phone,
            n = e.size_estimate,
            i = e.comments;
          return new Promise(function (e, r) {
            q.post(
              t.rootGetters[B.getters.GET_BACKEND_URL]("Change Plan", "slack"),
              { name: s, phone: a, size_estimate: n, comments: i },
            )
              .then(function (t) {
                return e(t);
              })
              .catch(function (e) {
                (t.commit(
                  "root/SET_ERROR_MESSAGE",
                  "Oops, something went wrong. Please try again after sometime.",
                  { root: !0 },
                ),
                  r(e));
              });
          });
        }),
        Object(O["a"])(I, lt.actions.CANCEL_DOWNGRADE, function (t) {
          return new Promise(function (e, s) {
            q.post(
              t.rootGetters[B.getters.GET_BACKEND_URL](
                "Change Plan",
                "cancel_downgrade",
              ),
            )
              .then(function (s) {
                (t.dispatch(
                  "root/UPDATE_SUCCESS_MESSAGE",
                  { success_message: s.message },
                  { root: !0 },
                ),
                  e(s));
              })
              .catch(function (e) {
                (t.commit(
                  "root/SET_ERROR_MESSAGE",
                  "Oops, something went wrong. Please try again after sometime.",
                  { root: !0 },
                ),
                  s(e));
              });
          });
        }),
        Object(O["a"])(I, lt.actions.CLOSE_ACCOUNT, function (t, e) {
          var s = e.why,
            a = e.CLOZZACCT,
            n = e.currentPlanId;
          return new Promise(function (e, i) {
            q.post(
              t.rootGetters[B.getters.GET_BACKEND_URL]("Close Account", ""),
              { why: s, CLOZZACCT: a, currentPlanId: n },
            )
              .then(function (s) {
                var a = "Subscription is successfully closed.";
                (("700" != n && "702" != n) ||
                  (a = "Subscription is successfully closed."),
                  t.dispatch(
                    "root/UPDATE_SUCCESS_MESSAGE",
                    { success_message: a },
                    { root: !0 },
                  ),
                  e(s));
              })
              .catch(function (e) {
                (t.commit(
                  "root/SET_ERROR_MESSAGE",
                  "Oops, something went wrong. Please try again after sometime.",
                  { root: !0 },
                ),
                  i(e));
              });
          });
        }),
        I),
      mt = {
        namespaced: !0,
        state: ut,
        getters: dt,
        mutations: pt,
        actions: _t,
      },
      ht = "checkout/",
      ft = {
        getters: {
          GET_PAYMENT_TYPE: ht + "GET_PAYMENT_TYPE",
          GET_VALIDATION_ERRORS: ht + "GET_VALIDATION_ERRORS",
          GET_CC_VALIDATION_COMPLETE: ht + "GET_CC_VALIDATION_COMPLETE",
          GET_ADDR_VALIDATION_COMPLETE: ht + "GET_ADDR_VALIDATION_COMPLETE",
          GET_ADDRESS: ht + "GET_ADDRESS",
          GET_PAYPAL_TOKEN: ht + "GET_PAYPAL_TOKEN",
          GET_VAT_NUMBER: ht + "GET_VAT_NUMBER",
          GET_SHOW_CONFIRMATION: ht + "GET_SHOW_CONFIRMATION",
          GET_PLAN_NAME: ht + "GET_PLAN_NAME",
        },
        mutations: {
          SET_PAYMENT_TYPE: ht + "SET_PAYMENT_TYPE",
          SET_VALIDATION_ERROR: ht + "SET_VALIDATION_ERROR",
          SET_VALIDATION_ERRORS: ht + "SET_VALIDATION_ERRORS",
          SET_CC_VALIDATION_COMPLETE: ht + "SET_CC_VALIDATION_COMPLETE",
          SET_ADDR_VALIDATION_COMPLETE: ht + "SET_ADDR_VALIDATION_COMPLETE",
          SET_ADDRESS: ht + "SET_ADDRESS",
          SET_PAYPAL_TOKEN: ht + "SET_PAYPAL_TOKEN",
          SET_VAT_NUMBER: ht + "SET_VAT_NUMBER",
          SET_SHOW_CONFIRMATION: ht + "SET_SHOW_CONFIRMATION",
          SET_PLAN_NAME: ht + "SET_PLAN_NAME",
        },
        actions: {
          AUTHORIZE_PAYPAL: ht + "AUTHORIZE_PAYPAL",
          EXECUTE_PAYPAL_AGREEMENT: ht + "EXECUTE_PAYPAL_AGREEMENT",
          CCARD_CHECKOUT: ht + "CCARD_CHECKOUT",
          BANK_TRANSFER_CHECKOUT: ht + "BANK_TRANSFER_CHECKOUT",
          SUBMIT_GTM_DATA_LAYER: ht + "SUBMIT_GTM_DATA_LAYER",
          CREATE_PAYMENT_INTENT: ht + "CREATE_PAYMENT_INTENT",
          DIRECT_DEBIT_CHECKOUT: ht + "DIRECT_DEBIT_CHECKOUT",
        },
      },
      Et = P(ht, ft),
      vt = {
        payment_type: "ccard",
        validation_errors: {},
        cc_validation_complete: !0,
        addr_validation_complete: !0,
        paypal_token: "",
        address: {
          street: "",
          line2: "",
          city: "",
          region: "",
          postcode: "",
          country: "",
        },
        vat_number: "",
        show_confirmation: !1,
        plan_name: "",
      },
      bt =
        ((j = {}),
        Object(O["a"])(j, Et.getters.GET_PAYMENT_TYPE, function (t) {
          return t.payment_type;
        }),
        Object(O["a"])(j, Et.getters.GET_VALIDATION_ERRORS, function (t) {
          return t.validation_errors;
        }),
        Object(O["a"])(j, Et.getters.GET_CC_VALIDATION_COMPLETE, function (t) {
          return t.cc_validation_complete;
        }),
        Object(O["a"])(
          j,
          Et.getters.GET_ADDR_VALIDATION_COMPLETE,
          function (t) {
            return t.addr_validation_complete;
          },
        ),
        Object(O["a"])(j, Et.getters.GET_ADDRESS, function (t) {
          return t.address;
        }),
        Object(O["a"])(j, Et.getters.GET_PAYPAL_TOKEN, function (t) {
          return t.paypal_token;
        }),
        Object(O["a"])(j, Et.getters.GET_VAT_NUMBER, function (t) {
          return t.vat_number;
        }),
        Object(O["a"])(j, Et.getters.GET_SHOW_CONFIRMATION, function (t) {
          return t.show_confirmation;
        }),
        Object(O["a"])(j, Et.getters.GET_PLAN_NAME, function (t) {
          return t.plan_name;
        }),
        j),
      gt =
        ((M = {}),
        Object(O["a"])(M, Et.mutations.SET_PAYMENT_TYPE, function (t, e) {
          t.payment_type != e &&
            ((t.payment_type = e), (t.validation_errors = {}));
        }),
        Object(O["a"])(
          M,
          Et.mutations.SET_CC_VALIDATION_COMPLETE,
          function (t, e) {
            t.cc_validation_complete = e;
          },
        ),
        Object(O["a"])(
          M,
          Et.mutations.SET_ADDR_VALIDATION_COMPLETE,
          function (t, e) {
            t.addr_validation_complete = e;
          },
        ),
        Object(O["a"])(M, Et.mutations.SET_ADDRESS, function (t, e) {
          t.address = e;
        }),
        Object(O["a"])(M, Et.mutations.SET_VALIDATION_ERRORS, function (t, e) {
          t.validation_errors = e;
        }),
        Object(O["a"])(M, Et.mutations.SET_VALIDATION_ERROR, function (t, e) {
          var s = e.name,
            n = e.message;
          "" != n
            ? a["default"].set(t.validation_errors, s, n)
            : a["default"].delete(t.validation_errors, s);
        }),
        Object(O["a"])(M, Et.mutations.SET_PAYPAL_TOKEN, function (t, e) {
          t.paypal_token = e;
        }),
        Object(O["a"])(M, Et.mutations.SET_VAT_NUMBER, function (t, e) {
          t.vat_number = e;
        }),
        Object(O["a"])(M, Et.mutations.SET_SHOW_CONFIRMATION, function (t, e) {
          t.show_confirmation = e;
        }),
        Object(O["a"])(M, Et.mutations.SET_PLAN_NAME, function (t, e) {
          t.plan_name = e;
        }),
        M),
      Ct =
        ((k = {}),
        Object(O["a"])(k, Et.actions.AUTHORIZE_PAYPAL, function (t, e) {
          var s = e.exit_url;
          return new Promise(function (e, a) {
            q.post(
              t.rootGetters[B.getters.GET_BACKEND_URL](
                "Change Plan",
                "authorize_paypal",
              ),
              { exit_url: s },
            )
              .then(function (s) {
                (t.commit(
                  Et.mutations.SET_PAYPAL_TOKEN,
                  s.results.paypal_token,
                ),
                  e(s));
              })
              .catch(function (e) {
                (t.commit(
                  "root/SET_ERROR_MESSAGE",
                  "Something went wrong while authorizing PayPal.",
                  { root: !0 },
                ),
                  a(e));
              });
          });
        }),
        Object(O["a"])(k, Et.actions.EXECUTE_PAYPAL_AGREEMENT, function (t, e) {
          var s = e.paypal_token,
            a = e.plan_id,
            n = e.billing_address,
            i = e.vat_number;
          return new Promise(function (e, r) {
            q.post(
              t.rootGetters[B.getters.GET_BACKEND_URL](
                "Change Plan",
                "execute_billing_agreement",
              ),
              {
                paypal_token: s,
                plan_id: a,
                billing_address: n,
                vat_number: i,
              },
            )
              .then(function (s) {
                (t.dispatch(Et.actions.SUBMIT_GTM_DATA_LAYER, {
                  payload: s.results,
                }),
                  e());
              })
              .catch(function (e) {
                (t.commit("root/SET_ERROR_MESSAGE", e, { root: !0 }), r(e));
              });
          });
        }),
        Object(O["a"])(k, Et.actions.CCARD_CHECKOUT, function (t, e) {
          var s = e.token_id,
            a = e.plan_id,
            n = e.billing_address,
            i = e.vat_number;
          return new Promise(function (e, r) {
            q.post(
              t.rootGetters[B.getters.GET_BACKEND_URL](
                "Change Plan",
                "ccard_checkout",
              ),
              { token_id: s, plan_id: a, billing_address: n, vat_number: i },
            )
              .then(function (s) {
                (t.dispatch(Et.actions.SUBMIT_GTM_DATA_LAYER, {
                  payload: s.results,
                }),
                  e());
              })
              .catch(function (e) {
                (t.commit("root/SET_ERROR_MESSAGE", e, { root: !0 }), r(e));
              });
          });
        }),
        Object(O["a"])(k, Et.actions.BANK_TRANSFER_CHECKOUT, function (t, e) {
          var s = e.plan_id,
            a = e.billing_address,
            n = e.order_number,
            i = e.vat_number;
          return new Promise(function (e, r) {
            q.post(
              t.rootGetters[B.getters.GET_BACKEND_URL](
                "Change Plan",
                "bank_transfer_checkout",
              ),
              {
                plan_id: s,
                billing_address: a,
                order_number: n,
                vat_number: i,
              },
            )
              .then(function (s) {
                (t.dispatch(Et.actions.SUBMIT_GTM_DATA_LAYER, {
                  payload: s.results,
                }),
                  e());
              })
              .catch(function (e) {
                (t.commit("root/SET_ERROR_MESSAGE", e, { root: !0 }), r(e));
              });
          });
        }),
        Object(O["a"])(k, Et.actions.SUBMIT_GTM_DATA_LAYER, function (t, e) {
          var s = e.payload;
          ((window.dataLayer = window.dataLayer || []),
            dataLayer.push({ ecommerce: null }),
            dataLayer.push({
              event: "purchase",
              ecommerce: {
                transaction_id: s.transaction_id,
                affiliation: "SMTP2GO",
                value: s.value,
                tax: s.tax,
                currency: "USD",
                items: [
                  {
                    item_id: s.item_id,
                    item_name: t.getters.GET_PLAN_NAME,
                    affiliation: "SMTP2GO",
                    currency: "USD",
                    item_brand: "SMTP2GO",
                    item_category: "Subscription",
                    price: s.price,
                    quantity: 1,
                  },
                ],
              },
            }));
          var n = a["default"].$cookies.get("redditCID"),
            i = {
              event: "Purchase",
              conversionId: crypto.randomUUID(),
              itemCount: 1,
              currency: "USD",
              transactionValue: s.price,
              productRows: [{ id: s.item_id, name: t.getters.GET_PLAN_NAME }],
            };
          ("undefined" !== typeof n &&
            null != n &&
            "" != n &&
            (i["clickId"] = n),
            window.dataLayer.push(i));
        }),
        Object(O["a"])(k, Et.actions.CREATE_PAYMENT_INTENT, function (t) {
          return new Promise(function (e, s) {
            q.post(
              t.rootGetters[B.getters.GET_BACKEND_URL](
                "Change Plan",
                "create_payment_intent",
              ),
            )
              .then(function (t) {
                e(t);
              })
              .catch(function (e) {
                (t.commit("root/SET_ERROR_MESSAGE", e, { root: !0 }), s(e));
              });
          });
        }),
        Object(O["a"])(k, Et.actions.DIRECT_DEBIT_CHECKOUT, function (t, e) {
          var s = e.intent_id,
            a = e.plan_id,
            n = e.billing_address,
            i = e.vat_number;
          return new Promise(function (e, r) {
            q.post(
              t.rootGetters[B.getters.GET_BACKEND_URL](
                "Change Plan",
                "ccard_checkout",
              ),
              { intent_id: s, plan_id: a, billing_address: n, vat_number: i },
            )
              .then(function (s) {
                (t.dispatch(Et.actions.SUBMIT_GTM_DATA_LAYER, {
                  payload: s.results,
                }),
                  e());
              })
              .catch(function (e) {
                (t.commit("root/SET_ERROR_MESSAGE", e, { root: !0 }), r(e));
              });
          });
        }),
        k),
      Tt = {
        namespaced: !0,
        state: vt,
        getters: bt,
        mutations: gt,
        actions: Ct,
      },
      Ot = "updatebilling/",
      yt = {
        getters: {
          GET_SUBSCRIPTION: Ot + "GET_SUBSCRIPTION",
          GET_CCARD: Ot + "GET_CCARD",
          GET_CUSTOMER: Ot + "GET_CUSTOMER",
          GET_INVOICES: Ot + "GET_INVOICES",
          GET_IS_INITIALISED: Ot + "GET_IS_INITIALISED",
          GET_INVOICE_LIMIT: Ot + "GET_INVOICE_LIMIT",
          GET_INVOICE_NEXT_OFFSET: Ot + "GET_INVOICE_NEXT_OFFSET",
          GET_POPUP_ERROR_MESSAGE: Ot + "GET_POPUP_ERROR_MESSAGE",
          GET_POPUP_IS_SAVING: Ot + "GET_POPUP_IS_SAVING",
          GET_IS_INVOICE_QUIET_REQUEST: Ot + "GET_IS_INVOICE_QUIET_REQUEST",
          GET_PAYMENT_METHOD: Ot + "GET_PAYMENT_METHOD",
          GET_PAYMENT_METHOD_SELECTION: Ot + "GET_PAYMENT_METHOD_SELECTION",
          GET_BILLING_DETAILS: Ot + "GET_BILLING_DETAILS",
          GET_EU_VAT_COUNTRIES: Ot + "GET_EU_VAT_COUNTRIES",
          GET_PAYPAL_EMAIL: Ot + "GET_PAYPAL_EMAIL",
          GET_ALLOW_EXTEND: Ot + "GET_ALLOW_EXTEND",
          GET_ACCOUNT_EXPIRED: Ot + "GET_ACCOUNT_EXPIRED",
          GET_CREDITS: Ot + "GET_CREDITS",
          GET_SCHEDULED_PLAN: Ot + "GET_SCHEDULED_PLAN",
          GET_CONTACTS: Ot + "GET_CONTACTS",
          GET_CONTACTS_POPUP_ERROR_MESSAGE:
            Ot + "GET_CONTACTS_POPUP_ERROR_MESSAGE",
          GET_DIRECT_DEBIT_IN_PROGRESS: Ot + "GET_DIRECT_DEBIT_IN_PROGRESS",
        },
        mutations: {
          SET_SUBSCRIPTION: Ot + "SET_SUBSCRIPTION",
          SET_CCARD: Ot + "SET_CCARD",
          SET_CUSTOMER: Ot + "SET_CUSTOMER",
          SET_INVOICES: Ot + "SET_INVOICES",
          APPEND_INVOICES: Ot + "APPEND_INVOICES",
          SET_INVOICE_LIMIT: Ot + "SET_INVOICE_LIMIT",
          SET_IS_INITIALISED: Ot + "SET_IS_INITIALISED",
          SET_INVOICE_NEXT_OFFSET: Ot + "SET_INVOICE_NEXT_OFFSET",
          SET_POPUP_ERROR_MESSAGE: Ot + "SET_POPUP_ERROR_MESSAGE",
          INC_POPUP_IS_SAVING: Ot + "INC_POPUP_IS_SAVING",
          DEC_POPUP_IS_SAVING: Ot + "DEC_POPUP_IS_SAVING",
          SET_IS_INVOICE_QUIET_REQUEST: Ot + "SET_IS_INVOICE_QUIET_REQUEST",
          SET_PAYMENT_METHOD: Ot + "SET_PAYMENT_METHOD",
          SET_PAYMENT_METHOD_SELECTION: Ot + "SET_PAYMENT_METHOD_SELECTION",
          SET_BILLING_DETAILS: Ot + "SET_BILLING_DETAILS",
          UPDATE_BILLING_DETAILS: Ot + "UPDATE_BILLING_DETAILS",
          SET_EU_VAT_COUNTRIES: Ot + "SET_EU_VAT_COUNTRIES",
          SET_PAYPAL_EMAIL: Ot + "SET_PAYPAL_EMAIL",
          SET_ALLOW_EXTEND: Ot + "SET_ALLOW_EXTEND",
          SET_ACCOUNT_EXPIRED: Ot + "SET_ACCOUNT_EXPIRED",
          SET_INVOICES_FASTSPRING: Ot + "SET_INVOICES_FASTSPRING",
          POPULATE_FASTSPRING_INVOICE: Ot + "POPULATE_FASTSPRING_INVOICE",
          RESET_FASTSPRING_INVOICE: Ot + "RESET_FASTSPRING_INVOICE",
          SET_CREDITS: Ot + "SET_CREDITS",
          SET_SCHEDULED_PLAN: Ot + "SET_SCHEDULED_PLAN",
          SET_CONTACTS: Ot + "SET_CONTACTS",
          SET_CONTACTS_POPUP_ERROR_MESSAGE:
            Ot + "SET_CONTACTS_POPUP_ERROR_MESSAGE",
          SET_DIRECT_DEBIT_IN_PROGRESS: Ot + "SET_DIRECT_DEBIT_IN_PROGRESS",
        },
        actions: {
          FETCH_BILLING_DETAILS: Ot + "FETCH_BILLING_DETAILS",
          LOAD_INVOICES: Ot + "LOAD_INVOICES",
          DOWNLOAD_INVOICE: Ot + "DOWNLOAD_INVOICE",
          UPDATE_CUSTOMER: Ot + "UPDATE_CUSTOMER",
          UPDATE_CCARD: Ot + "UPDATE_CCARD",
          EXECUTE_PAYPAL_AGREEMENT: Ot + "EXECUTE_PAYPAL_AGREEMENT",
          UPDATE_BANK_TRANSFER: Ot + "UPDATE_BANK_TRANSFER",
          REACTIVATE_SUBSCRIPTION: Ot + "REACTIVATE_SUBSCRIPTION",
          CANCEL_DOWNGRADE: Ot + "CANCEL_DOWNGRADE",
          PAY_NOW: Ot + "PAY_NOW",
          TURN_AUTO_RENEWAL: Ot + "TURN_AUTO_RENEWAL",
          UPSERT_CONTACTS: Ot + "UPSERT_CONTACTS",
          UPDATE_DIRECT_DEBIT: Ot + "UPDATE_DIRECT_DEBIT",
        },
      },
      Pt = P(Ot, yt),
      St = {
        is_initialised: !1,
        ccard: { card_type: "", last4: "" },
        customer: { email: "" },
        subscription: {
          current_term_end: 0,
          plan_amount: 0,
          billing_period: 0,
          plan_id: "",
          status: "",
          mrr: 0,
        },
        invoices: [
          {
            date: null,
            currency_code: null,
            id: null,
            total: null,
            status: "",
            amount_paid: null,
            amount_due: null,
          },
        ],
        invoices_fastspring: [],
        invoice_limit: 5,
        invoice_next_offset: "",
        popup_error_message: "",
        contacts_popup_error_message: "",
        popup_is_saving: 0,
        is_invoice_quiet_request: !1,
        payment_method: "",
        payment_method_selection: "card",
        paypal_email: "",
        billing_details: {},
        eu_vat_countries: [],
        allow_extend: !1,
        account_expired: !1,
        has_fastspring_invoices: !1,
        credits: 0,
        scheduled_plan: { number_of_relays: null, duration: null },
        contacts: [],
        direct_debit_in_progress: !1,
      },
      At =
        ((L = {}),
        Object(O["a"])(L, Pt.getters.GET_IS_INITIALISED, function (t) {
          return t.is_initialised;
        }),
        Object(O["a"])(L, Pt.getters.GET_SUBSCRIPTION, function (t) {
          return t.subscription;
        }),
        Object(O["a"])(L, Pt.getters.GET_CCARD, function (t) {
          return t.ccard;
        }),
        Object(O["a"])(L, Pt.getters.GET_CUSTOMER, function (t) {
          return t.customer;
        }),
        Object(O["a"])(L, Pt.getters.GET_INVOICES, function (t) {
          return t.invoices;
        }),
        Object(O["a"])(L, Pt.getters.GET_INVOICE_LIMIT, function (t) {
          return t.invoice_limit;
        }),
        Object(O["a"])(L, Pt.getters.GET_INVOICE_NEXT_OFFSET, function (t) {
          return t.invoice_next_offset;
        }),
        Object(O["a"])(L, Pt.getters.GET_POPUP_ERROR_MESSAGE, function (t) {
          return t.popup_error_message;
        }),
        Object(O["a"])(L, Pt.getters.GET_POPUP_IS_SAVING, function (t) {
          return t.popup_is_saving > 0;
        }),
        Object(O["a"])(
          L,
          Pt.getters.GET_IS_INVOICE_QUIET_REQUEST,
          function (t) {
            return t.is_invoice_quiet_request;
          },
        ),
        Object(O["a"])(L, Pt.getters.GET_PAYMENT_METHOD, function (t) {
          return t.payment_method;
        }),
        Object(O["a"])(
          L,
          Pt.getters.GET_PAYMENT_METHOD_SELECTION,
          function (t) {
            return t.payment_method_selection;
          },
        ),
        Object(O["a"])(L, Pt.getters.GET_BILLING_DETAILS, function (t) {
          return t.billing_details;
        }),
        Object(O["a"])(L, Pt.getters.GET_EU_VAT_COUNTRIES, function (t) {
          return t.eu_vat_countries;
        }),
        Object(O["a"])(L, Pt.getters.GET_PAYPAL_EMAIL, function (t) {
          return t.paypal_email;
        }),
        Object(O["a"])(L, Pt.getters.GET_ALLOW_EXTEND, function (t) {
          return t.allow_extend;
        }),
        Object(O["a"])(L, Pt.getters.GET_ACCOUNT_EXPIRED, function (t) {
          return t.account_expired;
        }),
        Object(O["a"])(L, Pt.getters.GET_CREDITS, function (t) {
          return t.credits;
        }),
        Object(O["a"])(L, Pt.getters.GET_SCHEDULED_PLAN, function (t) {
          return t.scheduled_plan;
        }),
        Object(O["a"])(L, Pt.getters.GET_CONTACTS, function (t) {
          return t.contacts;
        }),
        Object(O["a"])(
          L,
          Pt.getters.GET_CONTACTS_POPUP_ERROR_MESSAGE,
          function (t) {
            return t.contacts_popup_error_message;
          },
        ),
        Object(O["a"])(
          L,
          Pt.getters.GET_DIRECT_DEBIT_IN_PROGRESS,
          function (t) {
            return t.direct_debit_in_progress;
          },
        ),
        L),
      Nt =
        ((G = {}),
        Object(O["a"])(G, Pt.mutations.SET_IS_INITIALISED, function (t, e) {
          t.is_initialised = e;
        }),
        Object(O["a"])(G, Pt.mutations.SET_SUBSCRIPTION, function (t, e) {
          t.subscription = e;
        }),
        Object(O["a"])(G, Pt.mutations.SET_CCARD, function (t, e) {
          t.ccard = e;
        }),
        Object(O["a"])(G, Pt.mutations.SET_CUSTOMER, function (t, e) {
          t.customer = e;
        }),
        Object(O["a"])(G, Pt.mutations.SET_INVOICES, function (t, e) {
          t.invoices = e;
        }),
        Object(O["a"])(G, Pt.mutations.APPEND_INVOICES, function (t, e) {
          t.invoices = t.invoices.concat(e);
        }),
        Object(O["a"])(G, Pt.mutations.SET_INVOICE_LIMIT, function (t, e) {
          t.invoice_limit = e;
        }),
        Object(O["a"])(
          G,
          Pt.mutations.SET_INVOICE_NEXT_OFFSET,
          function (t, e) {
            t.invoice_next_offset = e;
          },
        ),
        Object(O["a"])(
          G,
          Pt.mutations.SET_POPUP_ERROR_MESSAGE,
          function (t, e) {
            t.popup_error_message = e;
          },
        ),
        Object(O["a"])(G, Pt.mutations.INC_POPUP_IS_SAVING, function (t) {
          t.popup_is_saving++;
        }),
        Object(O["a"])(G, Pt.mutations.DEC_POPUP_IS_SAVING, function (t) {
          t.popup_is_saving--;
        }),
        Object(O["a"])(
          G,
          Pt.mutations.SET_IS_INVOICE_QUIET_REQUEST,
          function (t, e) {
            t.is_invoice_quiet_request = e;
          },
        ),
        Object(O["a"])(G, Pt.mutations.SET_PAYMENT_METHOD, function (t, e) {
          t.payment_method = e;
        }),
        Object(O["a"])(
          G,
          Pt.mutations.SET_PAYMENT_METHOD_SELECTION,
          function (t, e) {
            e && (t.payment_method_selection = e);
          },
        ),
        Object(O["a"])(G, Pt.mutations.SET_BILLING_DETAILS, function (t, e) {
          t.billing_details = e;
        }),
        Object(O["a"])(G, Pt.mutations.UPDATE_BILLING_DETAILS, function (t, e) {
          var s = e.key,
            n = e.value;
          a["default"].set(t.billing_details, s, n);
        }),
        Object(O["a"])(G, Pt.mutations.SET_EU_VAT_COUNTRIES, function (t, e) {
          t.eu_vat_countries = e;
        }),
        Object(O["a"])(G, Pt.mutations.SET_PAYPAL_EMAIL, function (t, e) {
          t.paypal_email = e;
        }),
        Object(O["a"])(G, Pt.mutations.SET_ALLOW_EXTEND, function (t, e) {
          t.allow_extend = e;
        }),
        Object(O["a"])(G, Pt.mutations.SET_ACCOUNT_EXPIRED, function (t, e) {
          t.account_expired = e;
        }),
        Object(O["a"])(
          G,
          Pt.mutations.SET_INVOICES_FASTSPRING,
          function (t, e) {
            t.invoices_fastspring = e;
          },
        ),
        Object(O["a"])(
          G,
          Pt.mutations.POPULATE_FASTSPRING_INVOICE,
          function (t) {
            if (t.invoices_fastspring.length > 0) {
              var e = t.invoice_limit;
              (t.invoices.length % t.invoice_limit != 0 &&
                (e -= t.invoices.length % t.invoice_limit),
                (t.invoices = t.invoices.concat(
                  t.invoices_fastspring.splice(0, e),
                )),
                t.invoices_fastspring.length > 0
                  ? (t.invoice_next_offset = "fastspring_invoices")
                  : (t.invoice_next_offset = ""),
                (t.has_fastspring_invoices = !0));
            }
          },
        ),
        Object(O["a"])(G, Pt.mutations.RESET_FASTSPRING_INVOICE, function (t) {
          var e = t.invoices.concat(t.invoices_fastspring);
          ((t.invoices = e.splice(0, t.invoice_limit)),
            (t.invoices_fastspring = e),
            t.invoices_fastspring.length > 0
              ? (t.invoice_next_offset = "fastspring_invoices")
              : (t.invoice_next_offset = ""));
        }),
        Object(O["a"])(G, Pt.mutations.SET_CREDITS, function (t, e) {
          t.credits = e;
        }),
        Object(O["a"])(G, Pt.mutations.SET_SCHEDULED_PLAN, function (t, e) {
          t.scheduled_plan = e;
        }),
        Object(O["a"])(G, Pt.mutations.SET_CONTACTS, function (t, e) {
          t.contacts = e;
        }),
        Object(O["a"])(
          G,
          Pt.mutations.SET_CONTACTS_POPUP_ERROR_MESSAGE,
          function (t, e) {
            t.contacts_popup_error_message = e;
          },
        ),
        Object(O["a"])(
          G,
          Pt.mutations.SET_DIRECT_DEBIT_IN_PROGRESS,
          function (t, e) {
            t.direct_debit_in_progress = e;
          },
        ),
        G),
      wt =
        ((x = {}),
        Object(O["a"])(x, Pt.actions.FETCH_BILLING_DETAILS, function (t, e) {
          var s = e.invoice_limit;
          return new Promise(function (e, a) {
            q.post(
              t.rootGetters[B.getters.GET_BACKEND_URL](
                "Billing Details New",
                "get-billing-details",
              ),
              { invoice_limit: s },
            )
              .then(function (s) {
                (t.commit(Pt.mutations.SET_CCARD, s.results.ccard),
                  t.commit(Pt.mutations.SET_CUSTOMER, s.results.customer),
                  t.commit(
                    Pt.mutations.SET_SUBSCRIPTION,
                    s.results.subscription,
                  ),
                  t.commit(
                    Pt.mutations.SET_INVOICES,
                    s.results.invoices.invoices,
                  ),
                  t.commit(
                    Pt.mutations.SET_INVOICES_FASTSPRING,
                    s.results.invoices.invoices_fastspring,
                  ),
                  t.commit(
                    Pt.mutations.SET_INVOICE_NEXT_OFFSET,
                    s.results.invoices.next_offset,
                  ),
                  t.commit(
                    Pt.mutations.SET_PAYMENT_METHOD,
                    s.results.payment_method,
                  ),
                  t.commit(
                    Pt.mutations.SET_PAYMENT_METHOD_SELECTION,
                    s.results.payment_method,
                  ),
                  t.commit(
                    Pt.mutations.SET_BILLING_DETAILS,
                    s.results.billing_details,
                  ),
                  t.commit(
                    Pt.mutations.SET_EU_VAT_COUNTRIES,
                    s.results.eu_vat_countries,
                  ),
                  t.commit(
                    Pt.mutations.SET_PAYPAL_EMAIL,
                    s.results.paypal_email,
                  ),
                  t.commit(
                    Pt.mutations.SET_ALLOW_EXTEND,
                    s.results.allow_extend,
                  ),
                  t.commit(
                    Pt.mutations.SET_ACCOUNT_EXPIRED,
                    s.results.account_expired,
                  ),
                  t.commit(Pt.mutations.SET_CREDITS, s.results.credits),
                  t.commit(
                    Pt.mutations.SET_SCHEDULED_PLAN,
                    s.results.scheduled_plan,
                  ),
                  t.commit(Pt.mutations.SET_CONTACTS, s.results.contacts),
                  t.commit(
                    Pt.mutations.SET_DIRECT_DEBIT_IN_PROGRESS,
                    s.results.direct_debit_in_progress,
                  ),
                  t.commit(Pt.mutations.SET_IS_INITIALISED, !0),
                  s.results.customer.hasOwnProperty("email") ||
                    t.commit(Pt.mutations.SET_BILLING_DETAILS, {
                      email: s.results.customer.email,
                    }),
                  t.state.invoice_next_offset ||
                    t.commit(Pt.mutations.POPULATE_FASTSPRING_INVOICE),
                  e(s));
              })
              .catch(function (e) {
                (t.commit(
                  "root/SET_ERROR_MESSAGE",
                  "Oops, something went wrong. Please try again after sometime.",
                  { root: !0 },
                ),
                  a(e));
              });
          });
        }),
        Object(O["a"])(x, Pt.actions.LOAD_INVOICES, function (t, e) {
          var s = e.invoice_limit,
            a = e.invoice_next_offset,
            n = e.isQuietRequest;
          return new Promise(function (e, i) {
            if ("fastspring_invoices" == t.state.invoice_next_offset)
              return (
                n
                  ? t.commit(Pt.mutations.POPULATE_FASTSPRING_INVOICE)
                  : t.commit(Pt.mutations.RESET_FASTSPRING_INVOICE),
                void e()
              );
            t.state.invoice_next_offset || !t.state.has_fastspring_invoices
              ? (n &&
                  (t.commit(Pt.mutations.SET_IS_INVOICE_QUIET_REQUEST, !0),
                  t.commit("root/SET_IS_QUIET_REQUEST", !0, { root: !0 })),
                q
                  .post(
                    t.rootGetters[B.getters.GET_BACKEND_URL](
                      "Billing Details New",
                      "get-invoices",
                    ),
                    { invoice_limit: s, invoice_next_offset: a },
                  )
                  .then(function (s) {
                    (n
                      ? t.commit(
                          Pt.mutations.APPEND_INVOICES,
                          s.results.invoices.invoices,
                        )
                      : t.commit(
                          Pt.mutations.SET_INVOICES,
                          s.results.invoices.invoices,
                        ),
                      s.results.invoices.next_offset
                        ? t.commit(
                            Pt.mutations.SET_INVOICE_NEXT_OFFSET,
                            s.results.invoices.next_offset,
                          )
                        : t.state.invoices_fastspring.length > 0
                          ? t.commit(Pt.mutations.POPULATE_FASTSPRING_INVOICE)
                          : t.commit(Pt.mutations.SET_INVOICE_NEXT_OFFSET, ""),
                      e(s));
                  })
                  .catch(function (e) {
                    (t.commit(
                      "root/SET_ERROR_MESSAGE",
                      "Oops, something went wrong. Please try again after sometime.",
                      { root: !0 },
                    ),
                      i(e));
                  })
                  .finally(function () {
                    n &&
                      (t.commit(Pt.mutations.SET_IS_INVOICE_QUIET_REQUEST, !1),
                      t.commit("root/SET_IS_QUIET_REQUEST", !1, { root: !0 }));
                  }))
              : t.commit(Pt.mutations.RESET_FASTSPRING_INVOICE);
          });
        }),
        Object(O["a"])(x, Pt.actions.DOWNLOAD_INVOICE, function (t, e) {
          var s = e.invoice_id,
            a = e.disposition_type;
          return new Promise(function (e, n) {
            q.post(
              t.rootGetters[B.getters.GET_BACKEND_URL](
                "Billing Details New",
                "get-invoice",
              ),
              { invoice_id: s, disposition_type: a },
            )
              .then(function (t) {
                e(t);
              })
              .catch(function (e) {
                (t.commit(
                  "root/SET_ERROR_MESSAGE",
                  "Oops, something went wrong. Please try again after sometime.",
                  { root: !0 },
                ),
                  n(e));
              });
          });
        }),
        Object(O["a"])(x, Pt.actions.UPDATE_CUSTOMER, function (t, e) {
          var s = e.customer,
            a = e.billing_address,
            n = e.vat_number;
          return new Promise(function (e, i) {
            (t.commit(Pt.mutations.SET_POPUP_ERROR_MESSAGE, ""),
              t.commit(Pt.mutations.SET_CONTACTS_POPUP_ERROR_MESSAGE, ""),
              t.commit(Pt.mutations.INC_POPUP_IS_SAVING),
              t.commit("root/SET_IS_QUIET_REQUEST", !0, { root: !0 }),
              q
                .post(
                  t.rootGetters[B.getters.GET_BACKEND_URL](
                    "Billing Details New",
                    "update-customer",
                  ),
                  { customer: s, billing_address: a, vat_number: n },
                )
                .then(function (s) {
                  (t.commit(Pt.mutations.SET_CUSTOMER, s.results.customer),
                    t.commit(
                      Pt.mutations.SET_BILLING_DETAILS,
                      s.results.billing_details,
                    ),
                    t.dispatch(
                      "root/UPDATE_SUCCESS_MESSAGE",
                      {
                        success_message:
                          "Billing information has been successfully updated.",
                      },
                      { root: !0 },
                    ),
                    e());
                })
                .catch(function (e) {
                  (t.commit(Pt.mutations.SET_POPUP_ERROR_MESSAGE, e), i());
                })
                .finally(function () {
                  (t.commit(Pt.mutations.DEC_POPUP_IS_SAVING),
                    t.commit("root/SET_IS_QUIET_REQUEST", !1, { root: !0 }));
                }));
          });
        }),
        Object(O["a"])(x, Pt.actions.UPDATE_CCARD, function (t, e) {
          var s = e.token_id;
          return new Promise(function (e, a) {
            (t.commit(Pt.mutations.SET_POPUP_ERROR_MESSAGE, ""),
              t.commit(Pt.mutations.SET_CONTACTS_POPUP_ERROR_MESSAGE, ""),
              t.commit(Pt.mutations.INC_POPUP_IS_SAVING),
              t.commit("root/SET_IS_QUIET_REQUEST", !0, { root: !0 }));
            var n = t.state.subscription.plan_id;
            q.post(
              t.rootGetters[B.getters.GET_BACKEND_URL](
                "Billing Details New",
                "update-ccard",
              ),
              { token_id: s, plan_id: n },
            )
              .then(function (s) {
                (t.commit(Pt.mutations.SET_CCARD, s.results.ccard),
                  t.commit(
                    Pt.mutations.SET_PAYMENT_METHOD,
                    s.results.payment_method,
                  ),
                  t.commit(
                    Pt.mutations.SET_PAYMENT_METHOD_SELECTION,
                    s.results.payment_method,
                  ),
                  t.commit(
                    Pt.mutations.SET_SUBSCRIPTION,
                    s.results.subscription,
                  ),
                  t.dispatch(
                    "root/UPDATE_SUCCESS_MESSAGE",
                    { success_message: "Payment details have been updated." },
                    { root: !0 },
                  ),
                  e());
              })
              .catch(function (e) {
                var s = e.replace(
                  "Unable to upgrade subscription.",
                  "Unable to save payment details.",
                );
                (t.commit(Pt.mutations.SET_POPUP_ERROR_MESSAGE, s), a());
              })
              .finally(function () {
                (t.commit(Pt.mutations.DEC_POPUP_IS_SAVING),
                  t.commit("root/SET_IS_QUIET_REQUEST", !1, { root: !0 }));
              });
          });
        }),
        Object(O["a"])(x, Pt.actions.EXECUTE_PAYPAL_AGREEMENT, function (t, e) {
          var s = e.paypal_token;
          return new Promise(function (e, a) {
            (t.commit(Pt.mutations.SET_POPUP_ERROR_MESSAGE, ""),
              t.commit(Pt.mutations.SET_CONTACTS_POPUP_ERROR_MESSAGE, ""),
              q
                .post(
                  t.rootGetters[B.getters.GET_BACKEND_URL](
                    "Billing Details New",
                    "execute-billing-agreement",
                  ),
                  { paypal_token: s },
                )
                .then(function (s) {
                  (t.commit(Pt.mutations.SET_CCARD, s.results.ccard),
                    t.commit(
                      Pt.mutations.SET_PAYMENT_METHOD,
                      s.results.payment_method,
                    ),
                    t.commit(
                      Pt.mutations.SET_PAYMENT_METHOD_SELECTION,
                      s.results.payment_method,
                    ),
                    t.commit(
                      Pt.mutations.SET_PAYPAL_EMAIL,
                      s.results.paypal_email,
                    ),
                    t.dispatch(
                      "root/UPDATE_SUCCESS_MESSAGE",
                      { success_message: "Payment details have been updated." },
                      { root: !0 },
                    ),
                    e());
                })
                .catch(function (e) {
                  var s = e.replace(
                    "Unable to upgrade subscription.",
                    "Unable to save payment details.",
                  );
                  (t.commit(Pt.mutations.SET_POPUP_ERROR_MESSAGE, s), a());
                }));
          });
        }),
        Object(O["a"])(x, Pt.actions.UPDATE_BANK_TRANSFER, function (t, e) {
          var s = e.email,
            a = e.billing_address,
            n = e.order_number;
          return new Promise(function (e, i) {
            (t.commit(Pt.mutations.SET_POPUP_ERROR_MESSAGE, ""),
              t.commit(Pt.mutations.SET_CONTACTS_POPUP_ERROR_MESSAGE, ""),
              t.commit(Pt.mutations.INC_POPUP_IS_SAVING),
              t.commit("root/SET_IS_QUIET_REQUEST", !0, { root: !0 }),
              q
                .post(
                  t.rootGetters[B.getters.GET_BACKEND_URL](
                    "Billing Details New",
                    "bank-transfer",
                  ),
                  { email: s, billing_address: a, order_number: n },
                )
                .then(function (s) {
                  (t.commit(Pt.mutations.SET_CCARD, s.results.ccard),
                    t.commit(
                      Pt.mutations.SET_PAYMENT_METHOD,
                      s.results.payment_method,
                    ),
                    t.commit(
                      Pt.mutations.SET_PAYMENT_METHOD_SELECTION,
                      s.results.payment_method,
                    ),
                    t.dispatch(
                      "root/UPDATE_SUCCESS_MESSAGE",
                      { success_message: "Payment details have been updated." },
                      { root: !0 },
                    ),
                    e());
                })
                .catch(function (e) {
                  (t.commit(Pt.mutations.SET_POPUP_ERROR_MESSAGE, e), i(e));
                })
                .finally(function () {
                  (t.commit(Pt.mutations.DEC_POPUP_IS_SAVING),
                    t.commit("root/SET_IS_QUIET_REQUEST", !1, { root: !0 }));
                }));
          });
        }),
        Object(O["a"])(x, Pt.actions.REACTIVATE_SUBSCRIPTION, function (t) {
          return new Promise(function (e, s) {
            (t.commit(Pt.mutations.SET_POPUP_ERROR_MESSAGE, ""),
              t.commit(Pt.mutations.SET_CONTACTS_POPUP_ERROR_MESSAGE, ""),
              q
                .post(
                  t.rootGetters[B.getters.GET_BACKEND_URL](
                    "Billing Details New",
                    "reactivate-subscription",
                  ),
                )
                .then(function (s) {
                  (t.commit(
                    Pt.mutations.SET_SUBSCRIPTION,
                    s.results.subscription,
                  ),
                    t.commit(Pt.mutations.SET_ACCOUNT_EXPIRED, !1),
                    t.dispatch(
                      "root/UPDATE_SUCCESS_MESSAGE",
                      { success_message: "Your subscription is reactivated." },
                      { root: !0 },
                    ),
                    e());
                })
                .catch(function (e) {
                  (t.commit(Pt.mutations.SET_POPUP_ERROR_MESSAGE, e), s());
                }));
          });
        }),
        Object(O["a"])(x, Pt.actions.CANCEL_DOWNGRADE, function (t) {
          return new Promise(function (e, s) {
            (t.commit(Pt.mutations.SET_POPUP_ERROR_MESSAGE, ""),
              t.commit(Pt.mutations.SET_CONTACTS_POPUP_ERROR_MESSAGE, ""),
              q
                .post(
                  t.rootGetters[B.getters.GET_BACKEND_URL](
                    "Billing Details New",
                    "cancel-downgrade",
                  ),
                )
                .then(function (s) {
                  (t.commit(
                    Pt.mutations.SET_SUBSCRIPTION,
                    s.results.subscription,
                  ),
                    t.commit(
                      Pt.mutations.SET_SCHEDULED_PLAN,
                      s.results.scheduled_plan,
                    ),
                    t.dispatch(
                      "root/UPDATE_SUCCESS_MESSAGE",
                      {
                        success_message:
                          "Your scheduled downgrade is cancelled.",
                      },
                      { root: !0 },
                    ),
                    e());
                })
                .catch(function (e) {
                  (t.commit(Pt.mutations.SET_POPUP_ERROR_MESSAGE, e), s());
                }));
          });
        }),
        Object(O["a"])(x, Pt.actions.PAY_NOW, function (t, e) {
          var s = e.auto_collection;
          return new Promise(function (e, a) {
            (t.commit(Pt.mutations.SET_POPUP_ERROR_MESSAGE, ""),
              t.commit(Pt.mutations.SET_CONTACTS_POPUP_ERROR_MESSAGE, ""),
              q
                .post(
                  t.rootGetters[B.getters.GET_BACKEND_URL](
                    "Billing Details New",
                    "pay-now",
                  ),
                  { auto_collection: s },
                )
                .then(function (s) {
                  (t.commit(
                    Pt.mutations.SET_SUBSCRIPTION,
                    s.results.subscription,
                  ),
                    t.commit(
                      Pt.mutations.SET_INVOICES,
                      s.results.invoices.invoices,
                    ),
                    t.commit(
                      Pt.mutations.SET_INVOICES_FASTSPRING,
                      s.results.invoices.invoices_fastspring,
                    ),
                    t.commit(
                      Pt.mutations.SET_INVOICE_NEXT_OFFSET,
                      s.results.invoices.next_offset,
                    ),
                    t.commit(
                      Pt.mutations.SET_ALLOW_EXTEND,
                      s.results.allow_extend,
                    ),
                    t.commit(
                      Pt.mutations.SET_ACCOUNT_EXPIRED,
                      s.results.account_expired,
                    ),
                    t.commit(Pt.mutations.SET_CREDITS, s.results.credits),
                    t.dispatch(
                      "root/UPDATE_SUCCESS_MESSAGE",
                      { success_message: "Payment made." },
                      { root: !0 },
                    ),
                    e());
                })
                .catch(function (e) {
                  (t.commit("root/SET_ERROR_MESSAGE", e, { root: !0 }), a());
                }));
          });
        }),
        Object(O["a"])(x, Pt.actions.TURN_AUTO_RENEWAL, function (t) {
          return new Promise(function (e, s) {
            (t.commit(Pt.mutations.SET_POPUP_ERROR_MESSAGE, ""),
              t.commit(Pt.mutations.SET_CONTACTS_POPUP_ERROR_MESSAGE, ""),
              q
                .post(
                  t.rootGetters[B.getters.GET_BACKEND_URL](
                    "Billing Details New",
                    "turn-auto-renewal",
                  ),
                )
                .then(function (s) {
                  (t.commit(
                    Pt.mutations.SET_SUBSCRIPTION,
                    s.results.subscription,
                  ),
                    t.commit(
                      Pt.mutations.SET_INVOICES,
                      s.results.invoices.invoices,
                    ),
                    t.commit(
                      Pt.mutations.SET_INVOICES_FASTSPRING,
                      s.results.invoices.invoices_fastspring,
                    ),
                    t.commit(
                      Pt.mutations.SET_INVOICE_NEXT_OFFSET,
                      s.results.invoices.next_offset,
                    ),
                    t.commit(
                      Pt.mutations.SET_ALLOW_EXTEND,
                      s.results.allow_extend,
                    ),
                    t.commit(
                      Pt.mutations.SET_ACCOUNT_EXPIRED,
                      s.results.account_expired,
                    ),
                    t.commit(Pt.mutations.SET_CREDITS, s.results.credits),
                    t.dispatch(
                      "root/UPDATE_SUCCESS_MESSAGE",
                      { success_message: "Auto renewal turned on." },
                      { root: !0 },
                    ),
                    e());
                })
                .catch(function (e) {
                  (t.commit("root/SET_ERROR_MESSAGE", e, { root: !0 }), s());
                }));
          });
        }),
        Object(O["a"])(x, Pt.actions.UPSERT_CONTACTS, function (t) {
          return new Promise(function (e, s) {
            (t.commit(Pt.mutations.SET_POPUP_ERROR_MESSAGE, ""),
              t.commit(Pt.mutations.SET_CONTACTS_POPUP_ERROR_MESSAGE, ""),
              t.commit(Pt.mutations.INC_POPUP_IS_SAVING),
              t.commit("root/SET_IS_QUIET_REQUEST", !0, { root: !0 }));
            var a = t.state.contacts;
            q.post(
              t.rootGetters[B.getters.GET_BACKEND_URL](
                "Billing Details New",
                "upsert-contacts",
              ),
              { contacts: a },
            )
              .then(function (s) {
                (t.dispatch(
                  "root/UPDATE_SUCCESS_MESSAGE",
                  { success_message: "Contacts updated." },
                  { root: !0 },
                ),
                  e(s));
              })
              .catch(function (e) {
                (t.commit(Pt.mutations.SET_CONTACTS_POPUP_ERROR_MESSAGE, e),
                  s(e));
              })
              .finally(function () {
                (t.commit(Pt.mutations.DEC_POPUP_IS_SAVING),
                  t.commit("root/SET_IS_QUIET_REQUEST", !1, { root: !0 }));
              });
          });
        }),
        Object(O["a"])(x, Pt.actions.UPDATE_DIRECT_DEBIT, function (t, e) {
          var s = e.intent_id;
          return new Promise(function (e, a) {
            (t.commit(Pt.mutations.SET_POPUP_ERROR_MESSAGE, ""),
              t.commit(Pt.mutations.SET_CONTACTS_POPUP_ERROR_MESSAGE, ""),
              t.commit(Pt.mutations.INC_POPUP_IS_SAVING));
            var n = t.state.subscription.plan_id;
            q.post(
              t.rootGetters[B.getters.GET_BACKEND_URL](
                "Billing Details New",
                "update-ccard",
              ),
              { intent_id: s, plan_id: n },
            )
              .then(function (s) {
                (t.commit(Pt.mutations.SET_CCARD, s.results.ccard),
                  t.commit(
                    Pt.mutations.SET_PAYMENT_METHOD,
                    s.results.payment_method,
                  ),
                  t.commit(
                    Pt.mutations.SET_PAYMENT_METHOD_SELECTION,
                    s.results.payment_method,
                  ),
                  t.commit(
                    Pt.mutations.SET_SUBSCRIPTION,
                    s.results.subscription,
                  ),
                  t.dispatch(
                    "root/UPDATE_SUCCESS_MESSAGE",
                    { success_message: "Payment details have been updated." },
                    { root: !0 },
                  ),
                  e());
              })
              .catch(function (e) {
                var s = e.replace(
                  "Unable to upgrade subscription.",
                  "Unable to save payment details.",
                );
                (t.commit("root/SET_ERROR_MESSAGE", s, { root: !0 }), a());
              })
              .finally(function () {
                t.commit(Pt.mutations.DEC_POPUP_IS_SAVING);
              });
          });
        }),
        x),
      Dt = {
        namespaced: !0,
        state: St,
        getters: At,
        mutations: Nt,
        actions: wt,
      },
      Rt = "currency/",
      It = {
        getters: {
          GET_CURRENCY_PREFIX: Rt + "GET_CURRENCY_PREFIX",
          GET_CURRENCY_CODE: Rt + "GET_CURRENCY_CODE",
        },
        mutations: {
          SET_CURRENCY_PREFIX: Rt + "SET_CURRENCY_PREFIX",
          SET_CURRENCY_CODE: Rt + "SET_CURRENCY_CODE",
        },
        actions: { FETCH_USER_CURRENCY: Rt + "FETCH_USER_CURRENCY" },
      },
      jt = P(Rt, It),
      Mt = { currency_prefix: "$", currency_code: "USD" },
      kt =
        ((U = {}),
        Object(O["a"])(U, jt.getters.GET_CURRENCY_PREFIX, function (t) {
          return t.currency_prefix;
        }),
        Object(O["a"])(U, jt.getters.GET_CURRENCY_CODE, function (t) {
          return t.currency_code;
        }),
        U),
      Lt =
        ((V = {}),
        Object(O["a"])(V, jt.mutations.SET_CURRENCY_PREFIX, function (t, e) {
          t.currency_prefix = e;
        }),
        Object(O["a"])(V, jt.mutations.SET_CURRENCY_CODE, function (t, e) {
          t.currency_code = e;
        }),
        V),
      Gt = Object(O["a"])({}, jt.actions.FETCH_USER_CURRENCY, function (t) {
        return new Promise(function (e, s) {
          q.post(t.rootGetters[B.getters.GET_BACKEND_URL]("Onboarding", ""))
            .then(function (s) {
              (t.commit(
                jt.mutations.SET_CURRENCY_PREFIX,
                s.results.currency_prefix,
              ),
                t.commit(
                  jt.mutations.SET_CURRENCY_CODE,
                  s.results.currency_code,
                ),
                e());
            })
            .catch(function (t) {
              return s(t);
            });
        });
      }),
      xt = {
        namespaced: !0,
        state: Mt,
        getters: kt,
        mutations: Lt,
        actions: Gt,
      },
      Ut = "close/",
      Vt = {
        getters: { GET_CANCEL_REASON: Ut + "GET_CANCEL_REASON" },
        mutations: { SET_CANCEL_REASON: Ut + "SET_CANCEL_REASON" },
        actions: { CLOSE_ACCOUNT: Ut + "CLOSE_ACCOUNT" },
      },
      $t = P(Ut, Vt),
      Bt = { cancel_reason: "" },
      Ft = Object(O["a"])({}, $t.getters.GET_CANCEL_REASON, function (t) {
        return t.cancel_reason;
      }),
      Yt = Object(O["a"])({}, $t.mutations.SET_CANCEL_REASON, function (t, e) {
        t.cancel_reason = e;
      }),
      Ht = Object(O["a"])({}, $t.actions.CLOSE_ACCOUNT, function (t, e) {
        var s = e.cancel_reason,
          a = e.cancel_why;
        return new Promise(function (e, n) {
          q.post(
            t.rootGetters[B.getters.GET_BACKEND_URL]("Close", "close-account"),
            { cancel_reason: s, cancel_why: a },
          )
            .then(function (s) {
              (t.dispatch(
                "root/UPDATE_SUCCESS_MESSAGE",
                { success_message: "Subscription is successfully closed." },
                { root: !0 },
              ),
                e(s));
            })
            .catch(function (e) {
              (t.commit("root/SET_ERROR_MESSAGE", e, { root: !0 }), n(e));
            });
        });
      }),
      zt = {
        namespaced: !0,
        state: Bt,
        getters: Ft,
        mutations: Yt,
        actions: Ht,
      };
    a["default"].use(T["a"]);
    var Wt = new T["a"].Store({
        strict: !1,
        getters: {},
        mutations: {},
        actions: {},
        modules: {
          root: K,
          plan: mt,
          checkout: Tt,
          onboarding: rt,
          updatebilling: Dt,
          currency: xt,
          close: zt,
        },
      }),
      Kt = Wt,
      Xt = s("4eb5"),
      Qt = s.n(Xt),
      qt = s("2b27"),
      Jt = s.n(qt),
      Zt = s("e21e"),
      te = s("8c4f"),
      ee = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "transition",
          { attrs: { name: "router-animation", mode: "out-in" } },
          [s("router-view", { ref: "page" })],
          1,
        );
      },
      se = [],
      ae = {
        name: "Dashboard",
        mounted: function () {
          Chargebee.init({
            site: "smtp2go",
            publishableKey: "live_uTBCvTkvPKId3XzFWcdm5wpw0QGpXXy30",
          });
        },
      },
      ne = ae,
      ie = (s("649f"), Object(b["a"])(ne, ee, se, !1, null, "52ce89b0", null)),
      re = ie.exports,
      oe = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "transition",
          { attrs: { name: "router-animation", mode: "out-in" } },
          [s("router-view", { ref: "page" })],
          1,
        );
      },
      ce = [];
    (s("8e6e"), s("456d"));
    function le(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function ue(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? le(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : le(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var de = {
        name: "Onboarding",
        computed: ue(
          {},
          Object(T["c"])({ planList: ct.getters.GET_PLAN_LIST }),
        ),
        mounted: function () {
          Chargebee.init({
            site: "smtp2go",
            publishableKey: "live_uTBCvTkvPKId3XzFWcdm5wpw0QGpXXy30",
          });
        },
      },
      pe = de,
      _e = (s("78c4"), Object(b["a"])(pe, oe, ce, !1, null, "4640eb96", null)),
      me = _e.exports,
      he = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { attrs: { id: "changeplan" } },
          [
            s("DisplayMessage"),
            t._m(0),
            s(
              "div",
              { attrs: { id: "plan-list-page" } },
              [
                s(
                  "section",
                  { staticClass: "sg-feature" },
                  [
                    s(
                      "PageHeader",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !t.$route.path.match("/onboarding/"),
                            expression: "!$route.path.match('/onboarding/')",
                          },
                        ],
                      },
                      [
                        s("span", { staticClass: "title-icon" }, [
                          s(
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
                              s(
                                "linearGradient",
                                {
                                  attrs: {
                                    id: "a",
                                    gradientUnits: "userSpaceOnUse",
                                    x1: "17.7451",
                                    x2: "17.7451",
                                    y1: ".77478",
                                    y2: "34.7748",
                                  },
                                },
                                [
                                  s("stop", {
                                    attrs: {
                                      offset: "0",
                                      "stop-color": "#82d868",
                                    },
                                  }),
                                  s("stop", {
                                    attrs: {
                                      offset: "1",
                                      "stop-color": "#62b560",
                                    },
                                  }),
                                ],
                                1,
                              ),
                              s("rect", {
                                attrs: {
                                  fill: "url(#a)",
                                  height: "34",
                                  rx: "5",
                                  width: "34",
                                  x: ".745117",
                                  y: ".77478",
                                },
                              }),
                              s(
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
                                  s("path", {
                                    attrs: {
                                      d: "m25.6238 8.77478h-15.316c-.74115 0-1.34198.60083-1.34198 1.34202v15.316c0 .7411.60083 1.342 1.34198 1.342h15.316c.7412 0 1.342-.6009 1.342-1.342v-15.316c0-.74119-.6008-1.34202-1.342-1.34202z",
                                    },
                                  }),
                                  s("path", {
                                    attrs: { d: "m17.9658 8.77478v18.00002" },
                                  }),
                                  s("path", {
                                    attrs: { d: "m8.96582 17.7748h17.99998" },
                                  }),
                                  s("path", {
                                    attrs: { d: "m13.4658 11.7748v3" },
                                  }),
                                  s("path", {
                                    attrs: { d: "m11.9658 13.2748h3" },
                                  }),
                                  s("path", {
                                    attrs: { d: "m14.9658 20.7748-3 3" },
                                  }),
                                  s("path", {
                                    attrs: { d: "m11.9658 20.7748 3 3" },
                                  }),
                                  s("path", {
                                    attrs: { d: "m20.9658 13.2748h3" },
                                  }),
                                  s("path", {
                                    attrs: { d: "m20.9658 20.7748h3" },
                                  }),
                                  s("path", {
                                    attrs: { d: "m20.9658 23.7748h3" },
                                  }),
                                ],
                              ),
                            ],
                            1,
                          ),
                        ]),
                        t._v("  \n        Select a plan\n        "),
                        s(
                          "p",
                          {
                            attrs: { slot: "afterHeader" },
                            slot: "afterHeader",
                          },
                          [
                            t._v(
                              "\n          Not sure which plan is right for you? Read more about our Starter\n          and Professional plans in our\n          ",
                            ),
                            s(
                              "a",
                              {
                                attrs: {
                                  href: "https://support.smtp2go.com/hc/en-gb/articles/900002200943",
                                  target: "_blank",
                                },
                              },
                              [
                                t._v("knowledge base\n            "),
                                s("span", { staticClass: "icon-external" }),
                              ],
                            ),
                          ],
                        ),
                      ],
                    ),
                    t.planMetadata.pending_plan
                      ? s(
                          "div",
                          { staticClass: "bar-notice notice-top warning" },
                          [
                            s("div", { staticClass: "notice-top-content" }, [
                              s("span", { staticClass: "notice-icon" }),
                              s("div", { staticClass: "bar-notice-message" }, [
                                t._m(1),
                                s("p", [
                                  t._v(
                                    "\n              If you've already submitted payment and need to change your plan, please contact our support team.\n              ",
                                  ),
                                  s("br"),
                                  s(
                                    "a",
                                    {
                                      staticClass: "button-outlined",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function (e) {
                                          return t.$router.push({
                                            name: "updatebilling",
                                          });
                                        },
                                      },
                                    },
                                    [t._v("Pay outstanding invoice")],
                                  ),
                                ]),
                              ]),
                            ]),
                          ],
                        )
                      : t._e(),
                    s(
                      "div",
                      { staticClass: "page-contents" },
                      [
                        s("PlanContents", { ref: "planContents" }),
                        s("SelectedContents", { ref: "selectedContents" }),
                      ],
                      1,
                    ),
                    s(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value:
                              !t.$route.path.match("/onboarding/") &&
                              t.initialised,
                            expression:
                              "!$route.path.match('/onboarding/') && initialised",
                          },
                        ],
                        staticClass: "other-plan-options",
                      },
                      [
                        s("p", { staticClass: "plan-free-downgrade" }, [
                          s(
                            "a",
                            {
                              attrs: { href: "#" },
                              on: {
                                click: function (e) {
                                  return t.toClosePage();
                                },
                              },
                            },
                            [t._v("Close your account")],
                          ),
                          t.isFreePlan || t.hasSubs
                            ? t._e()
                            : s("span", [
                                t._v("\n            or\n            "),
                                s(
                                  "a",
                                  {
                                    attrs: { href: "javascript:void(0);" },
                                    on: { click: t.activateDownGrade },
                                  },
                                  [t._v("downgrade to free")],
                                ),
                                t._v(
                                  "\n            (1,000 emails/month)\n          ",
                                ),
                              ]),
                        ]),
                      ],
                    ),
                  ],
                  1,
                ),
                s("MorePlansPopup"),
                s("ConfirmationPopup"),
                s("AjaxLoadingSpinner"),
                s("CancelDowngradePopup"),
              ],
              1,
            ),
          ],
          1,
        );
      },
      fe = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "logo" }, [
            s("a", {
              staticClass: "smtp2go-logo",
              attrs: { href: "https://www.smtp2go.com/" },
            }),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("p", [
            s("strong", [
              t._v(
                "You currently have an invoice with payment still outstanding.",
              ),
            ]),
            t._v(
              " Please make payment on this invoice first, before making further plan changes. \n            ",
            ),
          ]);
        },
      ],
      Ee =
        (s("c5f6"),
        s("4917"),
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "header",
            { staticClass: "sg-feature--header" },
            [
              s("h3", { staticClass: "page-title" }, [t._t("default")], 2),
              t._t("afterHeader"),
            ],
            2,
          );
        }),
      ve = [],
      be = { name: "PageHeader" },
      ge = be,
      Ce = Object(b["a"])(ge, Ee, ve, !1, null, null, null),
      Te = Ce.exports,
      Oe = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.isAjaxRunning && !t.isQuiteRequest
          ? s("div", { staticClass: "loading" }, [
              t._m(0),
              s("div", { staticClass: "loading-backdrop" }),
            ])
          : t._e();
      },
      ye = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "load-more load-centered" }, [
            s("div", { staticClass: "loading-spinner" }, [
              s("div", { staticClass: "loader" }, [
                s("span", { staticClass: "icon-circles" }, [
                  s("span", { staticClass: "dot-circle pending" }),
                  s("span", { staticClass: "dot-circle soft-bounced" }),
                  s("span", { staticClass: "dot-circle hard-bounced" }),
                  s("span", { staticClass: "dot-circle rejected" }),
                  s("span", { staticClass: "dot-circle spam" }),
                  s("span", { staticClass: "dot-circle delivered" }),
                  s("span", { staticClass: "dot-circle unsubscribed" }),
                  s("span", { staticClass: "dot-circle unblocked" }),
                  s("span", { staticClass: "dot-circle opened" }),
                ]),
              ]),
            ]),
          ]);
        },
      ];
    function Pe(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function Se(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Pe(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : Pe(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var Ae = {
        name: "AjaxLoadingSpinner",
        computed: Se(
          {},
          Object(T["c"])({
            isAjaxRunning: B.getters.GET_IS_AJAX_RUNNING,
            isQuiteRequest: B.getters.GET_IS_QUIET_REQUEST,
          }),
        ),
      },
      Ne = Ae,
      we = Object(b["a"])(Ne, Oe, ye, !1, null, null, null),
      De = we.exports,
      Re = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", [
          s(
            "div",
            {
              staticClass: "bar-notice  success",
              class: { "is-active": t.successMessage },
              attrs: { id: "user-alert" },
            },
            [
              s("span", { staticClass: "notice-icon" }),
              s("span", { staticClass: "notice-message-text" }, [
                t._v(t._s(t.successMessage)),
              ]),
              s(
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
          s(
            "div",
            {
              staticClass: "bar-notice error",
              class: { visible: t.errorMessage },
              attrs: { id: "user-error-alert" },
            },
            [
              s("span", { staticClass: "notice-message-text" }, [
                t._v(t._s(t.errorMessage)),
              ]),
              s(
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
      Ie = [];
    function je(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function Me(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? je(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : je(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var ke = {
        name: "DisplayMessage",
        mixins: [],
        data: function () {
          return {};
        },
        computed: Me(
          {},
          Object(T["c"])({
            successMessage: B.getters.GET_SUCCESS_MESSAGE,
            errorMessage: B.getters.GET_ERROR_MESSAGE,
          }),
        ),
        methods: Me(
          {},
          Object(T["d"])({
            clearSuccessMessage: B.mutations.CLEAR_SUCCESS_MESSAGE,
            clearErrorMessage: B.mutations.CLEAR_ERROR_MESSAGE,
          }),
        ),
      },
      Le = ke,
      Ge =
        (s("a244"),
        s("4a19"),
        Object(b["a"])(Le, Re, Ie, !1, null, "c937497e", null)),
      xe = Ge.exports,
      Ue = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: t.initialised,
                expression: "initialised",
              },
            ],
            staticClass:
              "col-lg-8 col-md-8 col-sm-8 col-xs-12 column-bleed plan-contents",
          },
          [
            s(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.$route.path.match("/onboarding/"),
                    expression: "$route.path.match('/onboarding/')",
                  },
                ],
                staticClass: "card has-tabs single-plan",
              },
              [s("PlanList", { attrs: { "all-plans": "" } })],
              1,
            ),
            s(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !t.$route.path.match("/onboarding/"),
                    expression: "!$route.path.match('/onboarding/')",
                  },
                ],
                staticClass: "card has-tabs",
              },
              [
                t._m(0),
                s("PlanList"),
                s(
                  "div",
                  { staticClass: "plan-group more-plans" },
                  [
                    s("transition", { attrs: { name: "slide" } }, [
                      s(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: t.isShowMorePlans,
                              expression: "isShowMorePlans",
                            },
                          ],
                        },
                        [s("PlanList", { attrs: { "is-more-plan": "" } })],
                        1,
                      ),
                    ]),
                    t.isShowMorePlans
                      ? t._e()
                      : s("div", { staticClass: "plan-group-title" }, [
                          s(
                            "button",
                            {
                              staticClass: "btn outlined",
                              on: { click: t.morePlansClick },
                            },
                            [t._v("More plans")],
                          ),
                        ]),
                  ],
                  1,
                ),
              ],
              1,
            ),
            s("transition", { attrs: { name: "fade" } }, [
              s(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: t.isShowMorePlans,
                      expression: "isShowMorePlans",
                    },
                  ],
                  staticClass: "block-message-lead",
                },
                [
                  s("p", [
                    s("span", { staticClass: "message-lead-top" }, [
                      t._v("Need more than 5 million emails per month?"),
                    ]),
                    s("br"),
                    s("span", { staticClass: "message-lead-bottom" }, [
                      s(
                        "a",
                        {
                          attrs: { href: "javascript:void(0);" },
                          on: { click: t.contactUsClick },
                        },
                        [t._v("Contact us")],
                      ),
                      t._v(
                        " to discuss options for high-volume accounts.\n        ",
                      ),
                    ]),
                  ]),
                ],
              ),
            ]),
          ],
          1,
        );
      },
      Ve = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "card--tab-list" }, [
            s("h1", { staticClass: "card--tab-title" }, [
              t._v("Choose a plan"),
            ]),
          ]);
        },
      ],
      $e =
        (s("0d6d"),
        Object.freeze({
          OPENED: "mixin-popup-trigger-opened",
          CLOSED: "mixin-popup-trigger-closed",
        })),
      Be = Object.freeze({
        CONFIRMATION_POPUP: "ConfirmationPopup",
        MORE_PLANS_POPUP: "MorePlansPopup",
        UPDATE_EMAIL_POPUP: "UpdateEmailPopup",
        EXTRA_CONTACTS_POPUP: "ExtraContactsPopup",
        UPDATE_CONTACT: "UpdateContact",
        UPDATE_PAYMENT_METHOD_POPUP: "UpdatePaymentMethodPopup",
        UPDATE_PAYMENT_METHOD: "UpdatePaymentMethod",
        CANCEL_DOWNGRADE_POPUP: "CancelDowngradePopup",
      }),
      Fe = {
        data: function () {
          return { isPopupOpen: !1, isChange: !1 };
        },
        created: function () {
          (console.log("popup-trigger created"),
            this.$eventBus.$on($e.OPENED, this.$_mixinPopupTriggerOpened),
            this.$eventBus.$on($e.CLOSED, this.$_mixinPopupTriggerClosed));
        },
        destroyed: function () {
          (console.log("popup-trigger destroyed"),
            this.$eventBus.$off($e.OPENED, this.$_mixinPopupTriggerOpened),
            this.$eventBus.$off($e.CLOSED, this.$_mixinPopupTriggerClosed));
        },
        methods: {
          $_mixinPopupTriggerOpened: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            (console.log("_mixinPopupTriggerOpened", t, e, this.$options.name),
              t === this.$options.name
                ? ((this.isPopupOpen = !0),
                  (this.isChange = !1),
                  e && (this.isChange = !0))
                : ((this.isPopupOpen = !1), (this.isChange = !1)));
          },
          $_mixinPopupTriggerClosed: function () {
            this.isPopupOpen = !1;
          },
          mixinPopupTriggerClose: function () {
            this.isPopupOpen = !1;
          },
        },
      },
      Ye = {
        computed: {
          selectedTab: function () {
            var t = this,
              e = {};
            return (
              Object.keys(this.tabs).forEach(function (s) {
                t.tabs[s].active && (e = t.tabs[s]);
              }),
              e
            );
          },
        },
      },
      He = Ye,
      ze = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          t._l(t.plansToDisplay, function (e) {
            return s("div", { key: e.plan_id }, [
              s(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        !t.$route.path.match("/onboarding/") ||
                        e.per_month_size === t.selectedPlan.per_month_size,
                      expression:
                        "!$route.path.match('/onboarding/') || plan.per_month_size === selectedPlan.per_month_size",
                    },
                  ],
                  staticClass: "plan-group",
                },
                [
                  t.planHeading(e)
                    ? s("h3", { staticClass: "plan-group-title" }, [
                        t._v(t._s(t.planHeading(e))),
                      ])
                    : t._e(),
                  s(
                    "div",
                    {
                      staticClass: "plan-block",
                      class: t.calculatePlanClass(e),
                      on: {
                        click: function (s) {
                          return t.doSelectPlan(e);
                        },
                      },
                    },
                    [
                      s("div", { staticClass: "plan-details" }, [
                        !e.is_legacy ||
                        [
                          63, 73, 64, 74, 66, 76, 67, 77, 843, 844, 210, 212,
                          220, 222,
                        ].includes(e.plan_id)
                          ? s("div", { staticClass: "checker" }, [
                              s(
                                "span",
                                {
                                  staticClass: "checker-box",
                                  class: {
                                    checked: t.isSameRangePlanActive(e),
                                  },
                                },
                                [
                                  s("input", {
                                    attrs: {
                                      type: "checkbox",
                                      name: "users-toggle-all",
                                      value: "users-toggle-all",
                                    },
                                  }),
                                ],
                              ),
                            ])
                          : t._e(),
                        s("div", { staticClass: "plan-value-block" }, [
                          s("span", { staticClass: "plan-value" }, [
                            t._v(t._s(t.formatPerMonthSize(e.per_month_size))),
                          ]),
                          s("span", [t._v(" emails/month ")]),
                          e.full_price > 0
                            ? s("span", [
                                s("span", [t._v("for ")]),
                                s("strong", [t._v(t._s(t.currencyPrefix))]),
                                s("span", { staticClass: "plan-value-price" }, [
                                  t._v(
                                    t._s(
                                      (e.plan_orig_full_price / e.months)
                                        .toFixed(2)
                                        .replace(
                                          /(\d)(?=(\d{3})+(?!\d))/g,
                                          "$1,",
                                        ),
                                    ),
                                  ),
                                ]),
                                s("span", [t._v("/")]),
                                s(
                                  "span",
                                  { staticClass: "billing-frequency" },
                                  [t._v("mo")],
                                ),
                                3 === e.months
                                  ? s("span", [t._v(", billed quarterly")])
                                  : t._e(),
                                12 === e.months
                                  ? s("span", [t._v(", billed annually")])
                                  : t._e(),
                              ])
                            : t._e(),
                          0 === e.full_price
                            ? s("span", [s("strong", [t._v("free")])])
                            : t._e(),
                        ]),
                        s("div", { staticClass: "plan-note" }, [
                          e.excess_per_1k
                            ? s("span", { staticClass: "plan-extra" }, [
                                t._v(
                                  "\n              + " +
                                    t._s(t.currencyPrefix) +
                                    t._s(e.excess_per_1k.toFixed(2)) +
                                    " per thousand extra emails.\n            ",
                                ),
                              ])
                            : t._e(),
                          e.per_month_size >= 1e5 ||
                          843 == e.plan_id ||
                          844 == e.plan_id
                            ? s("span", { staticClass: "plan-extra" }, [
                                t._v(
                                  "\n              1 free dedicated IP address included.\n            ",
                                ),
                              ])
                            : t._e(),
                        ]),
                        e.is_current && !t.$route.path.match("/onboarding/")
                          ? s("div", { staticClass: "block-meta" }, [
                              s("span", { staticClass: "indicator-current" }, [
                                t._v("Current plan"),
                              ]),
                            ])
                          : t._e(),
                        e.is_legacy
                          ? s("div", { staticClass: "block-meta" }, [
                              s("span", { staticClass: "indicator-legacy" }, [
                                t._v("Legacy plan"),
                              ]),
                            ])
                          : t._e(),
                      ]),
                    ],
                  ),
                ],
              ),
            ]);
          }),
          0,
        );
      },
      We = [];
    (s("6762"), s("2fdb"));
    function Ke(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function Xe(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Ke(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : Ke(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var Qe = {
        name: "PlanList",
        mixins: [He],
        props: { isMorePlan: Boolean, allPlans: Boolean },
        computed: Xe(
          Xe(
            {},
            Object(T["c"])({
              plans: ct.getters.GET_PLAN_LIST,
              planTiers: ct.getters.GET_PLAN_TIERS,
              currentPlan: ct.getters.GET_CURRENT_PLAN,
              selectedPlan: ct.getters.GET_SELECTED_PLAN,
              currencyPrefix: It.getters.GET_CURRENCY_PREFIX,
              currencyCode: It.getters.GET_CURRENCY_CODE,
              planMetadata: ct.getters.GET_PLAN_METADATA,
            }),
          ),
          {},
          {
            plansToDisplay: function () {
              var t = this;
              return this.plans.filter(function (e) {
                return t.isPlanDisplay(
                  e.per_month_size,
                  e.months,
                  e.show_down_grade,
                );
              });
            },
          },
        ),
        methods: Xe(
          Xe({}, Object(T["d"])({ selectPlan: ct.mutations.SELECT_PLAN })),
          {},
          {
            calculatePlanClass: function (t) {
              var e = "";
              return (
                (e += this.isSameRangePlanActive(t) ? "is-active " : ""),
                (e += t.is_current ? "plan-current " : ""),
                (e += t.is_legacy ? "plan-legacy " : ""),
                e.trim()
              );
            },
            isSameRangePlanActive: function (t) {
              return 843 == t.plan_id || 844 == t.plan_id
                ? 843 == this.selectedPlan.plan_id ||
                    844 == this.selectedPlan.plan_id
                : 220 == t.plan_id || 222 == t.plan_id
                  ? 220 == this.selectedPlan.plan_id ||
                    222 == this.selectedPlan.plan_id
                  : t.per_month_size === this.selectedPlan.per_month_size;
            },
            doSelectPlan: function (t) {
              if (
                this.isSameRangePlanActive(t) ||
                (t.is_legacy &&
                  ![
                    63, 73, 64, 74, 66, 76, 67, 77, 843, 844, 210, 212, 220,
                    222,
                  ].includes(t.plan_id))
              )
                return !1;
              this.selectPlan(t);
            },
            isPlanDisplay: function (t, e) {
              var s =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              return (
                (!this.planMetadata.has_subs || t != this.planTiers.free) &&
                !!e &&
                (1 === e || !t) &&
                (!!this.allPlans ||
                  !!(this.isMorePlan && t > this.planTiers.corporate) ||
                  (!this.isMorePlan &&
                    t <= this.planTiers.corporate &&
                    t != this.planTiers.free) ||
                  !(this.isMorePlan || !s) ||
                  (!this.isMorePlan &&
                    t == this.planTiers.free &&
                    this.currentPlan.per_month_size == this.planTiers.free))
              );
            },
            planHeading: function (t) {
              var e = "";
              return (
                this.$route.path.match("/onboarding/") || (e = "s"),
                0 == t.full_price
                  ? "Free Plan"
                  : t.per_month_size === this.planTiers.starter
                    ? "Starter Plan" + e
                    : this.displayProfessionalHeading(t)
                      ? "Professional Plan" + e
                      : 702 === this.currentPlan.plan_id &&
                        4e4 == t.per_month_size &&
                        "Starter Plan" + e
              );
            },
            displayProfessionalHeading: function (t) {
              return t.per_month_size === this.planTiers.professional;
            },
            formatPerMonthSize: function (t) {
              return t ? t.toLocaleString() : t;
            },
          },
        ),
      },
      qe = Qe,
      Je = Object(b["a"])(qe, ze, We, !1, null, null, null),
      Ze = Je.exports;
    function ts(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function es(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ts(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : ts(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var ss = {
        name: "PlanContents",
        mixins: [He],
        components: { PlanList: Ze },
        data: function () {
          return { showMorePlans: !1 };
        },
        computed: es(
          es(
            {},
            Object(T["c"])({
              initialised: ct.getters.GET_IS_INITIALISED,
              currentPlan: ct.getters.GET_CURRENT_PLAN,
              planTiers: ct.getters.GET_PLAN_TIERS,
            }),
          ),
          {},
          {
            isShowMorePlans: function () {
              return !!(
                this.showMorePlans ||
                this.currentPlan.per_month_size > this.planTiers.corporate
              );
            },
          },
        ),
        methods: {
          contactUsClick: function () {
            this.$eventBus.$emit($e.OPENED, "MorePlansPopup");
          },
          morePlansClick: function () {
            this.showMorePlans = !this.showMorePlans;
          },
        },
      },
      as = ss,
      ns = Object(b["a"])(as, Ue, Ve, !1, null, null, null),
      is = ns.exports,
      rs = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "aside",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: t.initialised,
                expression: "initialised",
              },
            ],
            staticClass:
              "col-lg-4 col-md-4 col-sm-4 col-xs-12 column-bleed selected-contents-wrapper fix-position",
          },
          [
            s(
              "transition",
              { attrs: { name: "slide-down-fade", mode: "out-in" } },
              [
                s(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value:
                          t.initialised &&
                          (!t.isCurrentRangePlanActive ||
                            t.$route.path.match("/onboarding/")),
                        expression:
                          "\n        initialised &&\n          (!isCurrentRangePlanActive || $route.path.match('/onboarding/'))\n      ",
                      },
                    ],
                  },
                  [
                    s("SelectedPlanOptions", { ref: "selectedPlanOptions" }, [
                      t._v("Total\n        "),
                      s("span", { staticClass: "right-all" }, [
                        s(
                          "span",
                          { staticClass: "tag-currency", staticStyle: {} },
                          [t._v("All prices in USD")],
                        ),
                      ]),
                    ]),
                    t.planMetadata.current_subscription.has_scheduled_changes
                      ? s(
                          "div",
                          { staticClass: "payment-info plan-scheduled" },
                          [
                            t.planMetadata.scheduled_downgrade_plan
                              ? s("div", { staticClass: "payment-info-text" }, [
                                  t._v(
                                    "\n          Your plan will be downgraded to the\n          ",
                                  ),
                                  1 === t.planMetadata.scheduled_downgrade_month
                                    ? s("span", [t._v("Monthly")])
                                    : t._e(),
                                  3 === t.planMetadata.scheduled_downgrade_month
                                    ? s("span", [t._v("Quarterly")])
                                    : t._e(),
                                  12 ===
                                  t.planMetadata.scheduled_downgrade_month
                                    ? s("span", [t._v("Annual")])
                                    : t._e(),
                                  t._v(
                                    "\n          " +
                                      t._s(
                                        t.planMetadata.scheduled_downgrade_plan
                                          .toFixed(0)
                                          .replace(
                                            /(\d)(?=(\d{3})+(?!\d))/g,
                                            "$1,",
                                          ),
                                      ) +
                                      "\n          emails/month plan at the end of your billing cycle (" +
                                      t._s(t.subscriptionRenewDate) +
                                      "}).\n        ",
                                  ),
                                ])
                              : s("div", { staticClass: "payment-info-text" }, [
                                  t._v(
                                    "\n          Your plan will be upgraded at the end of your billing cycle (" +
                                      t._s(t.subscriptionRenewDate) +
                                      ").\n        ",
                                  ),
                                ]),
                          ],
                        )
                      : t._e(),
                    s("transition", { attrs: { name: "slide-down-fade" } }, [
                      s(
                        "button",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                t.planMetadata.current_subscription
                                  .has_scheduled_changes &&
                                !t.planMetadata.pending_plan,
                              expression:
                                "planMetadata.current_subscription.has_scheduled_changes &&\n            !planMetadata.pending_plan",
                            },
                          ],
                          staticClass: "btn blue cancel-downgrade",
                          on: { click: t.cancelDowngradeAndUpdate },
                        },
                        [
                          t.planMetadata.scheduled_downgrade_plan
                            ? s("span", [
                                t._v("Cancel Downgrade & Proceed to Checkout"),
                              ])
                            : s("span", [
                                t._v("Cancel Upgrade & Proceed to Checkout"),
                              ]),
                        ],
                      ),
                    ]),
                    s("transition", { attrs: { name: "slide-down-fade" } }, [
                      s(
                        "button",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                !t.planMetadata.current_subscription
                                  .has_scheduled_changes &&
                                !t.planMetadata.pending_plan,
                              expression:
                                "!planMetadata.current_subscription.has_scheduled_changes && !planMetadata.pending_plan",
                            },
                          ],
                          staticClass: "btn blue proceed-to-checkout",
                          on: { click: t.proceedToCheckout },
                        },
                        [t._v("\n          Proceed to Checkout\n        ")],
                      ),
                    ]),
                  ],
                  1,
                ),
              ],
            ),
            s(
              "SelectedPlanOptions",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value:
                      !t.$route.path.match("/onboarding/") &&
                      "cancelled" !=
                        t.planMetadata.current_subscription.status &&
                      "non_renewing" !=
                        t.planMetadata.current_subscription.status,
                    expression:
                      "!$route.path.match('/onboarding/') && planMetadata.current_subscription.status != 'cancelled' && planMetadata.current_subscription.status != 'non_renewing'",
                  },
                ],
                ref: "currentPlanOptions",
                class: { "plan-selected": !t.isCurrentRangePlanActive },
                attrs: { "display-current-range-plan": "" },
              },
              [
                t._v("Current Plan\n      "),
                s("span", { staticClass: "right-all" }, [
                  s("span", { staticClass: "tag-currency" }, [
                    t._v("All prices in USD"),
                  ]),
                ]),
              ],
            ),
            t.isCurrentRangePlanActive &&
            t.planMetadata.current_subscription.has_scheduled_changes
              ? s("div", { staticClass: "payment-info plan-scheduled" }, [
                  t.planMetadata.scheduled_downgrade_plan
                    ? s("div", { staticClass: "payment-info-text" }, [
                        t._v(
                          "\n      Your plan will be downgraded to the\n      ",
                        ),
                        1 === t.planMetadata.scheduled_downgrade_month
                          ? s("span", [t._v("Monthly")])
                          : t._e(),
                        3 === t.planMetadata.scheduled_downgrade_month
                          ? s("span", [t._v("Quarterly")])
                          : t._e(),
                        12 === t.planMetadata.scheduled_downgrade_month
                          ? s("span", [t._v("Annual")])
                          : t._e(),
                        t._v(
                          "\n      " +
                            t._s(
                              t.planMetadata.scheduled_downgrade_plan
                                .toFixed(0)
                                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
                            ) +
                            "\n      emails/month plan at the end of your billing cycle (" +
                            t._s(t.subscriptionRenewDate) +
                            ").\n    ",
                        ),
                      ])
                    : s("div", { staticClass: "payment-info-text" }, [
                        t._v(
                          "\n      Your plan will be upgraded at the end of your billing cycle (" +
                            t._s(t.subscriptionRenewDate) +
                            ").\n    ",
                        ),
                      ]),
                ])
              : t._e(),
            "cancelled" == t.planMetadata.current_subscription.status
              ? s("div", { staticClass: "card splash-account-closed" }, [
                  t._m(0),
                  s("h4", [t._v("Your account is currently closed")]),
                  s("p", [
                    t._v(
                      "To reopen your account, select any plan and click the button below.",
                    ),
                  ]),
                  s(
                    "button",
                    {
                      staticClass: "btn blue",
                      on: {
                        click: function (e) {
                          return t.reactivateSubscriptionClick();
                        },
                      },
                    },
                    [t._v("Reopen Account")],
                  ),
                  t.errorMessage
                    ? s("div", { staticClass: "error-message-container" }, [
                        s("div", { staticClass: "error-message" }, [
                          t._v(t._s(t.errorMessage)),
                        ]),
                      ])
                    : t._e(),
                ])
              : t._e(),
            "non_renewing" == t.planMetadata.current_subscription.status
              ? s("div", { staticClass: "card splash-account-closed" }, [
                  t._m(1),
                  s("h4", [t._v("Your account is scheduled to close")]),
                  s("p", [
                    t._v("\n      Your account is scheduled to close on "),
                    s("b", { staticClass: "nowrap" }, [
                      t._v(t._s(t.subscriptionRenewDate)),
                    ]),
                    t._v(".\n    "),
                  ]),
                  s(
                    "button",
                    {
                      staticClass: "btn blue",
                      on: {
                        click: function (e) {
                          return t.reactivateSubscriptionClick();
                        },
                      },
                    },
                    [t._v("Cancel Scheduled Closure")],
                  ),
                  t.errorMessage
                    ? s("div", { staticClass: "error-message-container" }, [
                        s("div", { staticClass: "error-message" }, [
                          t._v(t._s(t.errorMessage)),
                        ]),
                      ])
                    : t._e(),
                ])
              : t._e(),
            s(
              "button",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value:
                      t.isCurrentRangePlanActive &&
                      t.planMetadata.current_subscription
                        .has_scheduled_changes &&
                      t.currentPlan.plan_id == t.selectedPlan.plan_id,
                    expression:
                      "\n      isCurrentRangePlanActive &&\n        planMetadata.current_subscription.has_scheduled_changes &&\n        currentPlan.plan_id == selectedPlan.plan_id\n    ",
                  },
                ],
                staticClass: "btn blue cancel-downgrade",
                on: { click: t.cancelDowngrade },
              },
              [
                t.planMetadata.scheduled_downgrade_plan
                  ? s("span", [t._v("Cancel Downgrade")])
                  : s("span", [t._v("Cancel Upgrade")]),
              ],
            ),
            s(
              "button",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value:
                      t.isCurrentRangePlanActive &&
                      t.planMetadata.current_subscription
                        .has_scheduled_changes &&
                      t.currentPlan.plan_id != t.selectedPlan.plan_id &&
                      !t.planMetadata.pending_plan,
                    expression:
                      "\n      isCurrentRangePlanActive &&\n        planMetadata.current_subscription.has_scheduled_changes &&\n        currentPlan.plan_id != selectedPlan.plan_id &&\n        !planMetadata.pending_plan\n    ",
                  },
                ],
                staticClass: "btn blue cancel-downgrade",
                on: { click: t.cancelDowngradeAndUpdate },
              },
              [
                t.planMetadata.scheduled_downgrade_plan
                  ? s("span", [t._v("Cancel Downgrade & Proceed to Checkout")])
                  : s("span", [t._v("Cancel Upgrade & Proceed to Checkout")]),
              ],
            ),
            s("transition", { attrs: { name: "slide-down-fade" } }, [
              s(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        t.isCurrentRangePlanActive &&
                        (t.currentPlan.plan_id != t.selectedPlan.plan_id ||
                          "chargebee" != t.planMetadata.processor) &&
                        !t.planMetadata.current_subscription
                          .has_scheduled_changes &&
                        !t.$route.path.match("/onboarding/") &&
                        !t.planMetadata.pending_plan,
                      expression:
                        "\n        isCurrentRangePlanActive &&\n          (currentPlan.plan_id != selectedPlan.plan_id || planMetadata.processor != 'chargebee') &&\n          !planMetadata.current_subscription.has_scheduled_changes &&\n          !$route.path.match('/onboarding/') &&\n          !planMetadata.pending_plan\n      ",
                    },
                  ],
                },
                [
                  s(
                    "button",
                    {
                      staticClass: "btn blue proceed-to-checkout",
                      on: { click: t.proceedToCheckout },
                    },
                    [t._v("\n        Proceed to Checkout\n      ")],
                  ),
                ],
              ),
            ]),
          ],
          1,
        );
      },
      os = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("figure", [
            s("img", {
              attrs: {
                src: "/static/smtp2go_assets/splash-changeplan-closed-puppy.png",
                width: "160",
                alt: "SMTP2GO plan closed",
              },
            }),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("figure", [
            s("img", {
              attrs: {
                src: "/static/smtp2go_assets/splash-changeplan-closed-puppy.png",
                width: "160",
                alt: "SMTP2GO plan closed",
              },
            }),
          ]);
        },
      ],
      cs = s("c1df"),
      ls = s.n(cs),
      us =
        (s("7f45"),
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return t.initialised && t.summaryPlan.per_month_size
            ? s(
                "div",
                { staticClass: "card plan-block-cart" },
                [
                  s(
                    "div",
                    { staticClass: "cart-block cart-block-title" },
                    [t._t("default")],
                    2,
                  ),
                  s("div", { staticClass: "cart-block cart-block-monthly" }, [
                    s("div", { staticClass: "cart-block-inner-title" }, [
                      s("span", [
                        t._v(
                          t._s(t.summaryPlan.per_month_size.toLocaleString()),
                        ),
                      ]),
                      t._v(" emails\n    "),
                    ]),
                  ]),
                  s(
                    "div",
                    { staticClass: "cart-block cart-block-payment-range" },
                    t._l(t.selectablePlans, function (e) {
                      return s(
                        "div",
                        {
                          key: e.plan_id,
                          on: {
                            click: function (s) {
                              return t.selectPlan(e);
                            },
                          },
                        },
                        [
                          s(
                            "div",
                            {
                              staticClass: "payment-options",
                              class: { "add-top-border": 1 !== e.months },
                            },
                            [
                              s(
                                "div",
                                { staticClass: "cart-block-inner-title" },
                                [
                                  s("div", [
                                    s("div", { staticClass: "radio" }, [
                                      s(
                                        "span",
                                        {
                                          class: {
                                            checked:
                                              e.plan_id ===
                                              t.summaryPlan.plan_id,
                                          },
                                        },
                                        [
                                          s("input", {
                                            attrs: { type: "radio" },
                                          }),
                                        ],
                                      ),
                                    ]),
                                    t._v("Pay\n            "),
                                    s("span", [
                                      t._v(t._s(t.getPeriodLabel(e.months))),
                                    ]),
                                  ]),
                                  e.is_current &&
                                  1 == e.months &&
                                  !t.$route.path.match("/onboarding/")
                                    ? s("div", { staticClass: "plan-info" }, [
                                        t._v("Current plan"),
                                      ])
                                    : e.is_current && 1 != e.months
                                      ? s("div", { staticClass: "plan-info" }, [
                                          t._v(
                                            "Save " +
                                              t._s(t.getDiscountPercentage(e)) +
                                              "% (Current plan)",
                                          ),
                                        ])
                                      : 1 !== e.months
                                        ? s(
                                            "div",
                                            { staticClass: "plan-info" },
                                            [
                                              t._v(
                                                "Save " +
                                                  t._s(
                                                    t.getDiscountPercentage(e),
                                                  ) +
                                                  "%",
                                              ),
                                            ],
                                          )
                                        : t._e(),
                                ],
                              ),
                              s(
                                "div",
                                { staticClass: "cart-block-inner-value" },
                                [
                                  1 !== e.months
                                    ? s(
                                        "span",
                                        { staticClass: "original-price" },
                                        [
                                          t._v(
                                            t._s(t.currencyPrefix) +
                                              t._s(
                                                t
                                                  .getOriginalTotalPrice(e)
                                                  .toFixed(2)
                                                  .replace(
                                                    /(\d)(?=(\d{3})+(?!\d))/g,
                                                    "$1,",
                                                  ),
                                              ),
                                          ),
                                        ],
                                      )
                                    : t._e(),
                                  s("span", [
                                    t._v(
                                      " " +
                                        t._s(t.currencyPrefix) +
                                        t._s(
                                          e.plan_orig_full_price
                                            .toFixed(2)
                                            .replace(
                                              /(\d)(?=(\d{3})+(?!\d))/g,
                                              "$1,",
                                            ),
                                        ),
                                    ),
                                  ]),
                                  s("span", [
                                    t._v(
                                      t._s(t.getPeriodLabelPostfix(e.months)),
                                    ),
                                  ]),
                                ],
                              ),
                            ],
                          ),
                        ],
                      );
                    }),
                    0,
                  ),
                  !t.displayCurrentRangePlan ||
                  (t.currentPlan.full_price > 0 &&
                    t.selectedPlan.per_month_size ==
                      t.currentPlan.per_month_size)
                    ? s("DiscountNotice")
                    : t._e(),
                  s("div", { staticClass: "cart-block cart-block-total" }, [
                    s("div", { staticClass: "cart-block-inner-title" }, [
                      t._v("\n      Total\n      "),
                      s("span", [
                        t._v(t._s(t.getPeriodLabel(t.summaryPlan.months))),
                      ]),
                    ]),
                    s("div", { staticClass: "cart-block-inner-value" }, [
                      t._v(
                        "\n      " +
                          t._s(t.currencyPrefix) +
                          t._s(t.subtotal) +
                          "\n    ",
                      ),
                    ]),
                  ]),
                ],
                1,
              )
            : t._e();
        }),
      ds = [],
      ps = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass: "cart-discount",
            class: { "is-active": t.discountPrice > 0 },
          },
          [
            s("span", [
              s("img", {
                attrs: {
                  width: "25",
                  height: "25",
                  src: "/static/smtp2go_assets/discount-popper.png",
                  alt: "smtp2go",
                },
              }),
              s("span", { staticClass: "discount-value-perc" }, [
                t._v(t._s(100 - 100 * t.planMetadata.price_rate)),
              ]),
              t._v("% Discount applied"),
            ]),
            s("span", [
              t._v("-$"),
              s("span", { staticClass: "discount-value" }, [
                t._v(
                  t._s(
                    t.discountPrice
                      .toFixed(2)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
                  ),
                ),
              ]),
            ]),
          ],
        );
      },
      _s = [];
    function ms(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function hs(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ms(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : ms(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var fs = {
        name: "DiscountNotice",
        computed: hs(
          hs(
            {},
            Object(T["c"])({
              selectedPlan: ct.getters.GET_SELECTED_PLAN,
              planMetadata: ct.getters.GET_PLAN_METADATA,
              currentPlan: ct.getters.GET_CURRENT_PLAN,
            }),
          ),
          {},
          {
            discountPrice: function () {
              return (
                (1 - this.planMetadata.price_rate) *
                this.selectedPlan.plan_orig_full_price
              );
            },
          },
        ),
      },
      Es = fs,
      vs = Object(b["a"])(Es, ps, _s, !1, null, null, null),
      bs = vs.exports;
    function gs(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function Cs(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? gs(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : gs(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var Ts = {
        name: "SelectedPlanOptions",
        mixins: [He],
        props: { displayCurrentRangePlan: Boolean },
        components: { DiscountNotice: bs },
        data: function () {
          return { discountActive: !0 };
        },
        computed: Cs(
          Cs(
            {},
            Object(T["c"])({
              initialised: ct.getters.GET_IS_INITIALISED,
              plans: ct.getters.GET_PLAN_LIST,
              planMetadata: ct.getters.GET_PLAN_METADATA,
              currentPlan: ct.getters.GET_CURRENT_PLAN,
              selectedPlan: ct.getters.GET_SELECTED_PLAN,
              currencyPrefix: It.getters.GET_CURRENCY_PREFIX,
              currencyCode: It.getters.GET_CURRENCY_CODE,
            }),
          ),
          {},
          {
            currentPlanEndDate: function () {
              return this.formatDate(this.planMetadata.end_date_utc);
            },
            summaryPlan: function () {
              return this.displayCurrentRangePlan &&
                this.selectedPlan.per_month_size !==
                  this.currentPlan.per_month_size
                ? this.currentPlan
                : this.selectedPlan;
            },
            getPriceCalculatedMonthly: function () {
              var t =
                this.summaryPlan.plan_orig_full_price / this.summaryPlan.months;
              return t.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
            },
            subtotal: function () {
              var t =
                this.summaryPlan.plan_orig_full_price *
                this.planMetadata.price_rate;
              return t.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
            },
            selectablePlans: function () {
              var t = this;
              return this.plans.filter(function (e) {
                return (
                  e.per_month_size === t.summaryPlan.per_month_size &&
                  843 != e.plan_id &&
                  844 != e.plan_id &&
                  (!e.is_legacy ||
                    210 == e.plan_id ||
                    212 == e.plan_id ||
                    220 == e.plan_id ||
                    222 == e.plan_id)
                );
              });
            },
          },
        ),
        methods: Cs(
          Cs({}, Object(T["d"])({ selectPlan: ct.mutations.SELECT_PLAN })),
          {},
          {
            formatDate: function (t) {
              var e = ls.a.tz.guess(),
                s = ls()(t).tz(e);
              return s.format("DD MMMM, YYYY");
            },
            getDiscountPercentage: function (t) {
              var e = this.getMonthlyPrice(t.per_month_size),
                s = 1 - t.plan_orig_full_price / (e * t.months);
              return (100 * s).toFixed();
            },
            getMonthlyPrice: function (t) {
              var e = 0;
              return (
                this.plans.forEach(function (s) {
                  s.per_month_size === t &&
                    1 === s.months &&
                    (e = s.plan_orig_full_price);
                }),
                e
              );
            },
            getOriginalTotalPrice: function (t) {
              var e = this.getMonthlyPrice(t.per_month_size),
                s = e * t.months;
              return s;
            },
            getPeriodLabel: function (t) {
              return 3 === t ? "quarterly" : 12 === t ? "annually" : "monthly";
            },
            getPeriodLabelPostfix: function (t) {
              return 3 === t ? "/quarter" : 12 === t ? "/year" : "/month";
            },
          },
        ),
      },
      Os = Ts,
      ys = Object(b["a"])(Os, us, ds, !1, null, null, null),
      Ps = ys.exports;
    function Ss(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function As(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Ss(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : Ss(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var Ns = {
        name: "SelectedContents",
        mixins: [Fe, He, f],
        components: { SelectedPlanOptions: Ps },
        computed: As(
          As(
            {},
            Object(T["c"])({
              plans: ct.getters.GET_PLAN_LIST,
              planMetadata: ct.getters.GET_PLAN_METADATA,
              initialised: ct.getters.GET_IS_INITIALISED,
              currentPlan: ct.getters.GET_CURRENT_PLAN,
              selectedPlan: ct.getters.GET_SELECTED_PLAN,
              planTiers: ct.getters.GET_PLAN_TIERS,
              errorMessage: yt.getters.GET_POPUP_ERROR_MESSAGE,
            }),
          ),
          {},
          {
            currentPlanEndDate: function () {
              return this.planMetadata.end_date_epoch;
            },
            isCurrentRangePlanActive: function () {
              return (
                !!this.initialised &&
                this.currentPlan.per_month_size ===
                  this.selectedPlan.per_month_size
              );
            },
            subscriptionRenewDate: function () {
              var t = ls.a.tz.guess(),
                e = ls.a
                  .unix(this.planMetadata.current_subscription.current_term_end)
                  .tz(t);
              return e.format("MMMM DD, YYYY");
            },
          },
        ),
        methods: As(
          As(
            As(
              {},
              Object(T["d"])({
                setWantCheckout: ct.mutations.SET_WANT_CHECKOUT,
                setSuccessMessage: B.mutations.SET_SUCCESS_MESSAGE,
              }),
            ),
            Object(T["b"])({
              reactivateSubscription: yt.actions.REACTIVATE_SUBSCRIPTION,
              fetchPlanList: ct.actions.FETCH_PLAN_LIST,
            }),
          ),
          {},
          {
            proceedToCheckout: function () {
              var t = this.$route.path.replace("changeplan", "confirmplan");
              this.$router.push({ path: t });
            },
            cancelDowngrade: function () {
              (this.setWantCheckout(!1),
                this.$eventBus.$emit($e.OPENED, Be.CANCEL_DOWNGRADE_POPUP));
            },
            cancelDowngradeAndUpdate: function () {
              (this.setWantCheckout(!0),
                this.$eventBus.$emit($e.OPENED, Be.CANCEL_DOWNGRADE_POPUP));
            },
            formatDate: function (t) {
              var e = ls.a.tz.guess(),
                s = ls.a.unix(t).tz(e);
              return s.format("MMMM DD");
            },
            reactivateSubscriptionClick: function () {
              var t = this;
              this.reactivateSubscription().then(
                function () {
                  t.$nextTick(function () {
                    t.fetchPlanList().then(function () {
                      (t.setSuccessMessage(
                        "Subscription successfully reactivated.",
                      ),
                        window.scrollTo({ top: 0, behavior: "smooth" }));
                    });
                  });
                },
                function (t) {
                  console.log(t);
                },
              );
            },
          },
        ),
      },
      ws = Ns,
      Ds = (s("1487"), Object(b["a"])(ws, rs, os, !1, null, "47cee8b5", null)),
      Rs = Ds.exports,
      Is = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: t.isPopupOpen,
                expression: "isPopupOpen",
              },
            ],
          },
          [
            s("div", {
              staticClass: "modal-overlay",
              on: { click: t.contactUsCloseClick },
            }),
            s("div", { staticClass: "modal-card modal-custom" }, [
              s(
                "button",
                {
                  staticClass: "modal-custom-close modal-close",
                  on: { click: t.contactUsCloseClick },
                },
                [t._v("\n      ×\n    ")],
              ),
              s("h3", [t._v("Premier Plans")]),
              s("p", [
                t._v(
                  "High-volume sender? Let's create the perfect plan for you!",
                ),
              ]),
              s("div", { staticClass: "modal-form" }, [
                s("h4", [t._v("How many emails do you send monthly?")]),
                s("div", { staticClass: "slider-custom-signup-container" }, [
                  s(
                    "div",
                    { staticClass: "slider-wrapper" },
                    [
                      s(
                        "vue-range-slider",
                        t._b(
                          {
                            ref: "slider",
                            model: {
                              value: t.sliderValue,
                              callback: function (e) {
                                t.sliderValue = e;
                              },
                              expression: "sliderValue",
                            },
                          },
                          "vue-range-slider",
                          t.sliderOptions,
                          !1,
                        ),
                      ),
                    ],
                    1,
                  ),
                  t._m(0),
                ]),
                s("h4", [t._v("Contact Phone Number")]),
                s("input", {
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
                  attrs: { type: "text" },
                  domProps: { value: t.smsNumber },
                  on: {
                    input: function (e) {
                      e.target.composing || (t.smsNumber = e.target.value);
                    },
                  },
                }),
                s("h4", [t._v("Comment")]),
                s("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: t.comments,
                      expression: "comments",
                    },
                  ],
                  staticClass: "input-full-block",
                  attrs: { id: "comments", rows: "4" },
                  domProps: { value: t.comments },
                  on: {
                    input: function (e) {
                      e.target.composing || (t.comments = e.target.value);
                    },
                  },
                }),
              ]),
              s("div", { staticClass: "modal-footer" }, [
                s(
                  "button",
                  {
                    staticClass: "btn blue",
                    on: { click: t.confirmationPopupClick },
                  },
                  [t._v("\n        Submit\n      ")],
                ),
              ]),
            ]),
          ],
        );
      },
      js = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "slider-values" }, [
            s("span", { staticClass: "slider-value" }, [
              s("span", { staticClass: "value-string" }, [t._v("Unsure")]),
            ]),
            s("span", { staticClass: "slider-value" }, [
              t._v("10"),
              s("span", { staticClass: "value-string" }, [t._v("M")]),
            ]),
            s("span", { staticClass: "slider-value" }, [
              t._v("15"),
              s("span", { staticClass: "value-string" }, [t._v("M")]),
            ]),
            s("span", { staticClass: "slider-value" }, [
              t._v("20"),
              s("span", { staticClass: "value-string" }, [t._v("M")]),
            ]),
            s("span", { staticClass: "slider-value" }, [
              t._v("25"),
              s("span", { staticClass: "value-string" }, [t._v("M")]),
            ]),
            s("span", { staticClass: "slider-value" }, [
              s("span", { staticClass: "value-string over-text" }, [
                t._v("Over"),
              ]),
              t._v(" 25"),
              s("span", { staticClass: "value-string" }, [t._v("M")]),
            ]),
          ]);
        },
      ],
      Ms = (s("f559"), s("4971")),
      ks = s.n(Ms),
      Ls = s("05f3"),
      Gs = s.n(Ls),
      xs =
        (s("83e3"),
        {
          name: "MorePlansPopup",
          mixins: [Fe],
          components: { VueRangeSlider: ks.a },
          data: function () {
            return {
              sliderValue: 1,
              smsNumber: "",
              comments: "",
              sliderOptions: this.$sliderOptions.sliderOptions,
              intlTelInput: null,
            };
          },
          methods: {
            contactUsCloseClick: function () {
              this.$eventBus.$emit($e.CLOSED);
            },
            confirmationPopupClick: function () {
              var t,
                e = this;
              t =
                1 === this.sliderValue
                  ? "Unsure"
                  : 6 === this.sliderValue
                    ? "Over 25M"
                    : 5 * this.sliderValue + "M";
              var s = "";
              void 0 != this.intlTelInput.selectedCountryData.dialCode &&
                (s = "+" + this.intlTelInput.selectedCountryData.dialCode);
              var a = s + this.smsNumber;
              (this.smsNumber.startsWith("+") ||
                this.smsNumber.startsWith(s)) &&
                (a = this.smsNumber);
              var n = { phone: a, size_estimate: t, comments: this.comments };
              (this.$store
                .dispatch(ct.actions.PLAN_CONTACT_US, n)
                .then(function () {
                  e.$eventBus.$emit($e.OPENED, Be.CONFIRMATION_POPUP);
                })
                .catch(function (t) {
                  console.log(t);
                }),
                this.$eventBus.$emit($e.CLOSED),
                window.scrollTo({ top: 0, behavior: "smooth" }));
            },
          },
          mounted: function () {
            this.intlTelInput = Gs()(this.$refs.phoneNumber, {
              separateDialCode: "true",
              hiddenInput: "full_number",
              initialCountry: "auto",
              geoIpLookup: function (t) {
                Q.a
                  .get("https://ipinfo.io")
                  .then(function (e) {
                    var s = e.data,
                      a = s && s.country ? s.country : "";
                    t(a);
                  })
                  .catch(function () {});
              },
              preferredCountries: [],
            });
          },
        }),
      Us = xs,
      Vs =
        (s("f084"),
        s("b485"),
        Object(b["a"])(Us, Is, js, !1, null, null, null)),
      $s = Vs.exports,
      Bs = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.isPopupOpen
          ? s("div", [
              s("div", {
                staticClass: "modal-overlay",
                on: { click: t.confirmationCloseClick },
              }),
              s("div", { staticClass: "modal-card modal-confirmation" }, [
                s("h3", [t._v("Great!")]),
                t._m(0),
                s("div", { staticClass: "modal-footer" }, [
                  s(
                    "button",
                    {
                      staticClass: "btn blue modal-close",
                      on: { click: t.confirmationCloseClick },
                    },
                    [t._v("OK")],
                  ),
                ]),
              ]),
            ])
          : t._e();
      },
      Fs = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("p", [
            t._v("We’ll be in touch by "),
            s("span", { staticClass: "contact-type" }, [t._v("email")]),
            t._v(" to help you set this up."),
          ]);
        },
      ],
      Ys = {
        name: "ConfirmationPopup",
        mixins: [Fe],
        methods: {
          confirmationCloseClick: function () {
            this.$eventBus.$emit($e.CLOSED);
          },
        },
      },
      Hs = Ys,
      zs = Object(b["a"])(Hs, Bs, Fs, !1, null, null, null),
      Ws = zs.exports,
      Ks = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.isPopupOpen
          ? s("div", [
              s("div", {
                staticClass: "modal-overlay",
                on: { click: t.cancelDowngradeCloseClick },
              }),
              s("div", { staticClass: "modal-card cancel-downgrade-popup" }, [
                s(
                  "button",
                  {
                    staticClass: "bootbox-close-button close",
                    attrs: { type: "button" },
                    on: { click: t.cancelDowngradeCloseClick },
                  },
                  [t._v("×")],
                ),
                s("h3", [t._v("Cancel Confirmation")]),
                s("p", [
                  t._v(
                    "Your plan change is scheduled to take effect on " +
                      t._s(t.subscriptionRenewDate) +
                      ". Are you sure you want to cancel your pending plan change?",
                  ),
                ]),
                s("div", { staticClass: "modal-footer" }, [
                  s(
                    "button",
                    {
                      staticClass: "btn blue action-button",
                      on: { click: t.cancelDowngradeConfirmClick },
                    },
                    [
                      t._v("Yes, cancel "),
                      s("span", { staticClass: "mobile-hide" }, [
                        t._v("my pending"),
                      ]),
                      t._v(" plan change"),
                    ],
                  ),
                  s(
                    "button",
                    {
                      staticClass: "btn button-outlined",
                      on: { click: t.cancelDowngradeCloseClick },
                    },
                    [
                      t._v("No, leave the "),
                      s("span", { staticClass: "mobile-hide" }, [
                        t._v("scheduled"),
                      ]),
                      t._v(" plan change intact"),
                    ],
                  ),
                ]),
              ]),
            ])
          : t._e();
      },
      Xs = [];
    function Qs(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function qs(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Qs(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : Qs(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var Js = {
        name: "CancelDowngradePopup",
        mixins: [Fe],
        computed: qs(
          {
            subscriptionRenewDate: function () {
              var t = ls.a.tz.guess(),
                e = ls.a
                  .unix(this.planMetadata.current_subscription.current_term_end)
                  .tz(t);
              return e.format("MMMM DD, YYYY");
            },
          },
          Object(T["c"])({
            getWantCheckout: ct.getters.GET_WANT_CHECKOUT,
            selectedPlan: ct.getters.GET_SELECTED_PLAN,
            planMetadata: ct.getters.GET_PLAN_METADATA,
            planTiers: ct.getters.GET_PLAN_TIERS,
          }),
        ),
        methods: qs(
          qs(
            {},
            Object(T["d"])({
              setWantCheckout: ct.mutations.SET_WANT_CHECKOUT,
              removeHasScheduledChange:
                ct.mutations.REMOVE_HAS_SCHEDULED_CHANGE,
            }),
          ),
          {},
          {
            cancelDowngradeConfirmClick: function () {
              var t = this;
              (this.$store
                .dispatch(ct.actions.CANCEL_DOWNGRADE)
                .then(function () {
                  if (t.getWantCheckout) {
                    var e = t.$route.path.replace("changeplan", "confirmplan");
                    t.$router.push({ path: e });
                  }
                  (t.removeHasScheduledChange(), t.setWantCheckout(!1));
                })
                .catch(function (t) {
                  console.log(t);
                }),
                this.$eventBus.$emit($e.CLOSED));
            },
            cancelDowngradeCloseClick: function () {
              this.$eventBus.$emit($e.CLOSED);
            },
          },
        ),
      },
      Zs = Js,
      ta = (s("e31d"), Object(b["a"])(Zs, Ks, Xs, !1, null, "3d020017", null)),
      ea = ta.exports;
    function sa(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function aa(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? sa(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : sa(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var na = {
        name: "PlanListPage",
        components: {
          PageHeader: Te,
          AjaxLoadingSpinner: De,
          DisplayMessage: xe,
          PlanContents: is,
          SelectedContents: Rs,
          MorePlansPopup: $s,
          ConfirmationPopup: Ws,
          CancelDowngradePopup: ea,
        },
        computed: aa(
          aa(
            {},
            Object(T["c"])({
              initialised: ct.getters.GET_IS_INITIALISED,
              plans: ct.getters.GET_PLAN_LIST,
              currentPlan: ct.getters.GET_CURRENT_PLAN,
              planTiers: ct.getters.GET_PLAN_TIERS,
              planMetadata: ct.getters.GET_PLAN_METADATA,
            }),
          ),
          {},
          {
            isFreePlan: function () {
              return 0 == this.currentPlan.full_price;
            },
            hasSubs: function () {
              return this.planMetadata.has_subs;
            },
          },
        ),
        methods: aa(
          aa(
            {},
            Object(T["d"])({
              setCsrfKey: B.mutations.SET_CSRF_KEY,
              selectPlan: ct.mutations.SELECT_PLAN,
              selectFreePlan: ct.mutations.SELECT_FREE_PLAN,
              downgradeToFreeClicked:
                ct.mutations.SET_DOWNGRADE_TO_FREE_CLICKED,
            }),
          ),
          {},
          {
            activateDownGrade: function () {
              (this.selectFreePlan(), this.downgradeToFreeClicked(!0));
              var t = this.$route.path.replace("changeplan", "confirmplan");
              (this.$router.push({ path: t }),
                window.scrollTo({ top: 0, behavior: "smooth" }));
            },
            toClosePage: function () {
              (this.$router.push({ name: "close" }),
                window.scrollTo({ top: 0, behavior: "smooth" }));
            },
            handlePlanDeepLink: function () {
              if (
                !this.$route.path.match("/onboarding/") &&
                "chargebee" != this.planMetadata.processor
              ) {
                var t = "1" === String(this.$route.query.auto_checkout || ""),
                  e = Number(this.currentPlan.plan_id);
                if (t && this.currentPlan && e) {
                  this.selectPlan(this.currentPlan);
                  var s = this.$route.path.replace("changeplan", "confirmplan");
                  this.$router.replace({ path: s });
                }
              }
            },
          },
        ),
        mounted: function () {
          var t = this;
          0 === this.plans.length
            ? this.$store
                .dispatch(ct.actions.FETCH_PLAN_LIST)
                .then(function (e) {
                  if (t.$route.path.match("/onboarding/"))
                    if (t.$cookies.get("wantedPlan")) {
                      var s = t.$cookies.get("wantedPlan");
                      (t.plans.forEach(function (e) {
                        e.plan_id == s && t.selectPlan(e);
                      }),
                        t.$cookies.remove("wantedPlan"));
                    } else t.$router.push({ name: "main" });
                  else HTML.set_time(e);
                  (void 0 === PAGE_DATA.csrfkey &&
                    void 0 !== e.results.csrfkey &&
                    t.setCsrfKey(e.results.csrfkey),
                    t.handlePlanDeepLink());
                })
                .catch(function (t) {
                  console.log(t);
                })
            : this.handlePlanDeepLink();
        },
      },
      ia = na,
      ra = Object(b["a"])(ia, he, fe, !1, null, null, null),
      oa = ra.exports,
      ca = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { attrs: { id: "changeplan" } },
          [
            s("DisplayMessage"),
            t._m(0),
            t.showDowngradeConfirmation || t.showConfirmation
              ? t._e()
              : s("div", { attrs: { id: "confirmation-page" } }, [
                  s(
                    "section",
                    { staticClass: "sg-feature" },
                    [
                      s("PageHeader", [
                        s("button", {
                          staticClass: "icon-back",
                          on: { click: t.backButtonClick },
                        }),
                        t._v("\n        Checkout"),
                      ]),
                      s(
                        "div",
                        { staticClass: "page-contents" },
                        [
                          s("CheckoutInfo", { ref: "checkoutInfo" }),
                          s("CheckoutSummary", {
                            ref: "checkoutSummary",
                            attrs: { disableConfirm: t.invalidInput },
                          }),
                        ],
                        1,
                      ),
                      s("div", { staticClass: "back-button-wrapper" }, [
                        s(
                          "button",
                          {
                            staticClass:
                              "back-button btn outlined mobile-button",
                            on: { click: t.backButtonClick },
                          },
                          [t._v("\n          Back\n        ")],
                        ),
                      ]),
                    ],
                    1,
                  ),
                ]),
            s(
              "transition",
              { attrs: { name: "confirmation" } },
              [
                t.showConfirmation
                  ? s("CheckoutConfirmationSplash", {
                      attrs: { "is-active": t.showConfirmation },
                    })
                  : t._e(),
              ],
              1,
            ),
            s(
              "transition",
              { attrs: { name: "confirmation" } },
              [
                t.showDowngradeConfirmation
                  ? s("DowngradeConfirmationSplash", {
                      attrs: { "is-active": t.showDowngradeConfirmation },
                    })
                  : t._e(),
              ],
              1,
            ),
            s("AjaxLoadingSpinner"),
          ],
          1,
        );
      },
      la = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "logo" }, [
            s("a", {
              staticClass: "smtp2go-logo",
              attrs: { href: "https://www.smtp2go.com/" },
            }),
          ]);
        },
      ],
      ua = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass:
              "col-lg-8 col-md-8 col-sm-8 col-xs-12 column-bleed checkout-info",
          },
          [
            s("SelectedPlan", { ref: "selectedPlan" }),
            s("Extras"),
            s("PaymentForm", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: t.paidPlanSelected,
                  expression: "paidPlanSelected",
                },
              ],
              ref: "paymentForm",
            }),
          ],
          1,
        );
      },
      da = [],
      pa = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.initialised && t.selectedPlan.per_month_size
          ? s("div", { staticClass: "card selected-plan" }, [
              s("div", { staticClass: "card--tab-list selected-plan-title" }, [
                t._v("\n    Plan\n  "),
              ]),
              s("div", { staticClass: "plan-group" }, [
                s("div", { staticClass: "plan-block" }, [
                  s("div", { staticClass: "plan-details" }, [
                    t._m(0),
                    s("div", { staticClass: "plan-value-block" }, [
                      s("span", { staticClass: "plan-value" }, [
                        t._v(
                          t._s(t.selectedPlan.per_month_size.toLocaleString()),
                        ),
                      ]),
                      t._v("\n          emails/month"),
                      t.selectedPlan.full_price > 0
                        ? s("span", [
                            3 === t.selectedPlan.months
                              ? s("span", [t._v(", billed quarterly")])
                              : t._e(),
                            12 === t.selectedPlan.months
                              ? s("span", [t._v(", billed annually")])
                              : t._e(),
                          ])
                        : t._e(),
                    ]),
                    s("div", { staticClass: "plan-note" }, [
                      t.selectedPlan.excess_per_1k
                        ? s("span", { staticClass: "plan-extra" }, [
                            t._v(
                              "\n            + " +
                                t._s(t.currencyPrefix) +
                                t._s(t.selectedPlan.excess_per_1k.toFixed(2)) +
                                " per thousand extra\n            emails.\n          ",
                            ),
                          ])
                        : t._e(),
                      t.selectedPlan.per_month_size >= 1e5 ||
                      843 == t.selectedPlan.plan_id ||
                      844 == t.selectedPlan.plan_id
                        ? s("span", { staticClass: "plan-extra" }, [
                            t._v(
                              "\n            1 free dedicated IP address included.\n          ",
                            ),
                          ])
                        : t._e(),
                    ]),
                    s("div", { staticClass: "block-meta" }, [
                      s("div", { staticClass: "selected-plan-price" }, [
                        t._v(
                          "\n            " +
                            t._s(t.currencyPrefix) +
                            t._s(
                              t.selectedPlan.plan_orig_full_price
                                .toFixed(2)
                                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
                            ) +
                            "\n          ",
                        ),
                      ]),
                      t.selectedPlan.full_price > 0
                        ? s("div", { staticClass: "selected-plan-frequency" }, [
                            1 === t.selectedPlan.months
                              ? s("span", [t._v("Monthly")])
                              : t._e(),
                            3 === t.selectedPlan.months
                              ? s("span", [t._v("Quarterly")])
                              : t._e(),
                            12 === t.selectedPlan.months
                              ? s("span", [t._v("Annually")])
                              : t._e(),
                          ])
                        : t._e(),
                    ]),
                  ]),
                ]),
              ]),
            ])
          : t._e();
      },
      _a = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "checker" }, [
            s("span", { staticClass: "checker-box checked" }, [
              s("input", {
                attrs: {
                  type: "checkbox",
                  name: "users-toggle-all",
                  value: "users-toggle-all",
                },
              }),
            ]),
          ]);
        },
      ];
    function ma(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function ha(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ma(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : ma(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var fa = {
        name: "SelectedPlan",
        mixins: [He],
        computed: ha(
          {},
          Object(T["c"])({
            initialised: ct.getters.GET_IS_INITIALISED,
            planTiers: ct.getters.GET_PLAN_TIERS,
            selectedPlan: ct.getters.GET_SELECTED_PLAN,
            currencyPrefix: It.getters.GET_CURRENCY_PREFIX,
            currencyCode: It.getters.GET_CURRENCY_CODE,
            planMetadata: ct.getters.GET_PLAN_METADATA,
          }),
        ),
        methods: {
          getPlanHeading: function (t) {
            return t === this.planTiers.free
              ? "Free"
              : t === this.planTiers.starter
                ? "Starter"
                : "Professional";
          },
        },
      },
      Ea = fa,
      va = Object(b["a"])(Ea, pa, _a, !1, null, null, null),
      ba = va.exports,
      ga = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.initialised &&
          t.selectedPlan.per_month_size &&
          (t.planMetadata.dedicated_ip_address > 0 ||
            t.planMetadata.dedicated_sms_number > 0 ||
            t.planMetadata.activity_duration_addon)
          ? s("div", { staticClass: "card selected-plan card-extras" }, [
              s("div", { staticClass: "card--tab-list selected-plan-title" }, [
                t._v("\n    Extras\n  "),
              ]),
              t.planMetadata.dedicated_ip_address > 0
                ? s("div", { staticClass: "extras-item" }, [
                    s("div", { staticClass: "extras-title" }, [
                      t._v("\n      Dedicated IP Address\n    "),
                    ]),
                    s("div", { staticClass: "extras-values" }, [
                      s("div", { staticClass: "extras-quantity" }, [
                        s("span", [t._v("Qty: ")]),
                        s("span", [
                          t._v(t._s(t.planMetadata.dedicated_ip_address)),
                        ]),
                      ]),
                      s("div", { staticClass: "extras-price" }, [
                        t._v(
                          "\n        " +
                            t._s(t.currencyPrefix) +
                            t._s(
                              (
                                t.planMetadata.dedicated_ip_address *
                                t.planMetadata.dedicated_ip_price *
                                this.selectedPlan.months
                              )
                                .toFixed(2)
                                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
                            ) +
                            "\n      ",
                        ),
                      ]),
                    ]),
                  ])
                : t._e(),
              t.planMetadata.dedicated_sms_number > 0
                ? s("div", { staticClass: "extras-item" }, [
                    s("div", { staticClass: "extras-title" }, [
                      t._v("\n      Dedicated SMS Number\n    "),
                    ]),
                    s("div", { staticClass: "extras-values" }, [
                      s("div", { staticClass: "extras-quantity" }, [
                        s("span", [t._v("Qty: ")]),
                        s("span", [
                          t._v(t._s(t.planMetadata.dedicated_sms_number)),
                        ]),
                      ]),
                      s("div", { staticClass: "extras-price" }, [
                        t._v(
                          "\n        " +
                            t._s(t.currencyPrefix) +
                            t._s(
                              (
                                t.planMetadata.dedicated_sms_number *
                                t.planMetadata.dedicated_sms_price *
                                this.selectedPlan.months
                              )
                                .toFixed(2)
                                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
                            ) +
                            "\n      ",
                        ),
                      ]),
                    ]),
                  ])
                : t._e(),
              t.planMetadata.activity_duration_addon
                ? s("div", { staticClass: "extras-item" }, [
                    s(
                      "div",
                      {
                        staticClass: "extras-title",
                        staticStyle: { "text-transform": "capitalize" },
                      },
                      [
                        t._v(
                          "\n      " +
                            t._s(
                              t.planMetadata.activity_duration_addon.replaceAll(
                                "_",
                                " ",
                              ),
                            ) +
                            "\n    ",
                        ),
                      ],
                    ),
                    s("div", { staticClass: "extras-values" }, [
                      s("div"),
                      s("div", { staticClass: "extras-price" }, [
                        t._v(
                          "\n        " +
                            t._s(t.currencyPrefix) +
                            t._s(
                              (t.activityAddonPrice * this.selectedPlan.months)
                                .toFixed(2)
                                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
                            ) +
                            "\n      ",
                        ),
                      ]),
                    ]),
                  ])
                : t._e(),
            ])
          : t._e();
      },
      Ca = [];
    s("7514");
    function Ta(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function Oa(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Ta(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : Ta(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var ya = {
        name: "SelectedPlan",
        mixins: [He],
        computed: Oa(
          Oa(
            {},
            Object(T["c"])({
              initialised: ct.getters.GET_IS_INITIALISED,
              planTiers: ct.getters.GET_PLAN_TIERS,
              selectedPlan: ct.getters.GET_SELECTED_PLAN,
              currencyPrefix: It.getters.GET_CURRENCY_PREFIX,
              currencyCode: It.getters.GET_CURRENCY_CODE,
              planMetadata: ct.getters.GET_PLAN_METADATA,
              planList: ct.getters.GET_PLAN_LIST,
            }),
          ),
          {},
          {
            activityAddonPrice: function () {
              var t = this,
                e = this.planList.find(function (e) {
                  return (
                    e.number_of_relays == t.selectedPlan.number_of_relays &&
                    1 == e.months
                  );
                }).plan_orig_full_price,
                s = 0;
              return (
                "60_days_activity_duration" ==
                this.planMetadata.activity_duration_addon
                  ? ((s = 0.15 * e), s < 3 && (s = 3))
                  : "120_days_activity_duration" ==
                      this.planMetadata.activity_duration_addon
                    ? ((s = 0.25 * e), s <= 5 && (s = 5))
                    : "1_year_activity_duration" ==
                        this.planMetadata.activity_duration_addon
                      ? ((s = 0.35 * e), s < 8 && (s = 8))
                      : "2_years_activity_duration" ==
                          this.planMetadata.activity_duration_addon &&
                        ((s = 0.5 * e), s < 15 && (s = 15)),
                s
              );
            },
          },
        ),
        methods: {},
      },
      Pa = ya,
      Sa = (s("9ad6"), Object(b["a"])(Pa, ga, Ca, !1, null, "f4aab3f8", null)),
      Aa = Sa.exports,
      Na = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "form",
          { staticClass: "payment-form", class: [t.isPayment, t.hasPaypal] },
          [
            s(
              "div",
              { staticClass: "card card-payment-method" },
              [
                s(
                  "div",
                  {
                    staticClass: "card--tab-list",
                    class: { "input-closed": !t.creditOpen },
                    on: {
                      click: function (e) {
                        t.creditOpen = !t.creditOpen;
                      },
                    },
                  },
                  [
                    s("h2", { staticClass: "card--tab-title" }, [
                      t._v("Payment Method "),
                    ]),
                    s("transition", { attrs: { name: "fade" } }, [
                      t.savedCreditNumber && !t.creditOpen
                        ? s(
                            "div",
                            {
                              staticClass: "saved-detail saved-creditcard",
                              class: t.planMetadata.card_type,
                            },
                            [
                              s(
                                "span",
                                { staticClass: "creditcard-hidden-number" },
                                [t._v("∗∗∗∗ ∗∗∗∗\n            ∗∗∗∗")],
                              ),
                              s("span", [t._v(t._s(t.savedCreditNumber))]),
                            ],
                          )
                        : t._e(),
                    ]),
                    s("div", { staticClass: "input-form-toggle" }),
                  ],
                  1,
                ),
                s(
                  "transition",
                  { attrs: { name: "slide-down", mode: "out-in" } },
                  [
                    s(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.creditOpen,
                            expression: "creditOpen",
                          },
                        ],
                        staticClass: "payment-switch",
                      },
                      [
                        s(
                          "div",
                          { staticClass: "credit-card-payment-wrapper" },
                          [
                            s(
                              "div",
                              {
                                staticClass: "credit-card-payment",
                                on: {
                                  click: function (e) {
                                    return t.setPaymentType("ccard");
                                  },
                                },
                              },
                              [
                                s("label", { attrs: { for: "credit-card" } }, [
                                  s("div", { staticClass: "radio" }, [
                                    s(
                                      "span",
                                      {
                                        class: {
                                          checked: "ccard" === t.paymentType,
                                        },
                                      },
                                      [
                                        s("input", {
                                          attrs: {
                                            type: "radio",
                                            value: "creditCard",
                                          },
                                          domProps: {
                                            checked: {
                                              checked:
                                                "ccard" === t.paymentType,
                                            },
                                          },
                                        }),
                                      ],
                                    ),
                                  ]),
                                  s(
                                    "span",
                                    { staticClass: "credit-card-label" },
                                    [t._v("Credit Card")],
                                  ),
                                ]),
                                s("span", { staticClass: "cc-list" }),
                              ],
                            ),
                          ],
                        ),
                        s("div", { staticClass: "paypal-payment-wrapper" }, [
                          s(
                            "div",
                            {
                              staticClass: "paypal-payment",
                              on: {
                                click: function (e) {
                                  return t.setPaymentType("paypal");
                                },
                              },
                            },
                            [
                              s("label", { attrs: { for: "paypal" } }, [
                                s("div", { staticClass: "radio" }, [
                                  s(
                                    "span",
                                    {
                                      class: {
                                        checked: "paypal" === t.paymentType,
                                      },
                                    },
                                    [
                                      s("input", {
                                        attrs: {
                                          type: "radio",
                                          value: "paypal",
                                        },
                                        domProps: {
                                          checked: {
                                            checked: "paypal" === t.paymentType,
                                          },
                                        },
                                      }),
                                    ],
                                  ),
                                ]),
                              ]),
                            ],
                          ),
                        ]),
                        s(
                          "div",
                          { staticClass: "direct-debit-payment-wrapper" },
                          [
                            s(
                              "div",
                              {
                                staticClass: "direct-debit-payment",
                                on: {
                                  click: function (e) {
                                    return t.setPaymentType("direct_debit");
                                  },
                                },
                              },
                              [
                                s("label", { attrs: { for: "direct-debit" } }, [
                                  s("div", { staticClass: "radio" }, [
                                    s(
                                      "span",
                                      {
                                        class: {
                                          checked:
                                            "direct_debit" === t.paymentType,
                                        },
                                      },
                                      [
                                        s("input", {
                                          attrs: {
                                            type: "radio",
                                            value: "direct-debit",
                                          },
                                          domProps: {
                                            checked: {
                                              checked:
                                                "direct_debit" ===
                                                t.paymentType,
                                            },
                                          },
                                        }),
                                      ],
                                    ),
                                  ]),
                                  s(
                                    "span",
                                    { staticClass: "direct-debit-label" },
                                    [t._v("Direct Debit (ACH)")],
                                  ),
                                  s(
                                    "div",
                                    { staticClass: "tooltip-ach-container" },
                                    [
                                      s("div", { staticClass: "tooltip-ach" }, [
                                        s("p", [
                                          t._v(
                                            "\n                    An ACH authorization will be securely setup via Stripe Financial Connections and Chargebee.\n                  ",
                                          ),
                                        ]),
                                      ]),
                                      s(
                                        "div",
                                        { staticClass: "tooltip-ach-icon" },
                                        [t._v("i")],
                                      ),
                                    ],
                                  ),
                                ]),
                              ],
                            ),
                          ],
                        ),
                        1 != t.selectedPlan.months
                          ? s(
                              "div",
                              { staticClass: "bank-transfer-payment-wrapper" },
                              [
                                s(
                                  "div",
                                  {
                                    staticClass: "bank-transfer-payment",
                                    on: {
                                      click: function (e) {
                                        return t.setPaymentType(
                                          "bank-transfer",
                                        );
                                      },
                                    },
                                  },
                                  [
                                    s(
                                      "label",
                                      { attrs: { for: "bank-transfer" } },
                                      [
                                        s("div", { staticClass: "radio" }, [
                                          s(
                                            "span",
                                            {
                                              class: {
                                                checked:
                                                  "bank-transfer" ===
                                                  t.paymentType,
                                              },
                                            },
                                            [
                                              s("input", {
                                                attrs: {
                                                  type: "radio",
                                                  value: "bank-transfer",
                                                },
                                                domProps: {
                                                  checked: {
                                                    checked:
                                                      "bank-transfer" ===
                                                      t.paymentType,
                                                  },
                                                },
                                              }),
                                            ],
                                          ),
                                        ]),
                                        s(
                                          "span",
                                          {
                                            staticClass: "bank-transfer-label",
                                          },
                                          [t._v("Bank Transfer")],
                                        ),
                                      ],
                                    ),
                                  ],
                                ),
                              ],
                            )
                          : t._e(),
                      ],
                    ),
                  ],
                ),
                s(
                  "transition",
                  { attrs: { name: "slide-down", mode: "out-in" } },
                  [
                    s(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.creditOpen,
                            expression: "creditOpen",
                          },
                        ],
                        staticClass: "payment-switch-wrapper",
                        class: {
                          "no-bank-transfer": 1 == t.selectedPlan.months,
                        },
                      },
                      [
                        s(
                          "transition",
                          { attrs: { name: "payment-switch", mode: "out-in" } },
                          [
                            s("ChargebeeCreditCard", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "ccard" === t.paymentType,
                                  expression: "paymentType === 'ccard'",
                                },
                              ],
                              ref: "ccard",
                            }),
                          ],
                          1,
                        ),
                        s(
                          "transition",
                          { attrs: { name: "payment-switch", mode: "out-in" } },
                          [
                            s(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: "paypal" === t.paymentType,
                                    expression: "paymentType === 'paypal'",
                                  },
                                ],
                                staticClass: "card-details paypal-info",
                              },
                              [
                                void 0 != t.planMetadata.paypal_email &&
                                "" != t.planMetadata.paypal_email
                                  ? s(
                                      "div",
                                      { staticClass: "paypal-user-logged-in" },
                                      [
                                        s("p", [
                                          t._v(
                                            "\n                PayPal account: \n                ",
                                          ),
                                          s("strong", [
                                            t._v(
                                              t._s(
                                                t.planMetadata.paypal_email,
                                              ) + ".",
                                            ),
                                          ]),
                                          t._v(" \n                "),
                                          s(
                                            "button",
                                            {
                                              staticClass: "button-link",
                                              on: {
                                                click: function (e) {
                                                  return (
                                                    e.stopPropagation(),
                                                    e.preventDefault(),
                                                    t.$router.push({
                                                      name: "updatebilling-redirect",
                                                    })
                                                  );
                                                },
                                              },
                                            },
                                            [
                                              t._v(
                                                "\n                  Change\n                ",
                                              ),
                                            ],
                                          ),
                                        ]),
                                      ],
                                    )
                                  : t._e(),
                              ],
                            ),
                          ],
                        ),
                        s(
                          "transition",
                          { attrs: { name: "payment-switch", mode: "out-in" } },
                          [
                            s("DirectDebit", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "direct_debit" === t.paymentType,
                                  expression: "paymentType === 'direct_debit'",
                                },
                              ],
                              ref: "directDebit",
                            }),
                          ],
                          1,
                        ),
                        s(
                          "transition",
                          { attrs: { name: "payment-switch", mode: "out-in" } },
                          [
                            s("BankTransfer", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "bank-transfer" === t.paymentType,
                                  expression: "paymentType === 'bank-transfer'",
                                },
                              ],
                              ref: "bankTransfer",
                            }),
                          ],
                          1,
                        ),
                      ],
                      1,
                    ),
                  ],
                ),
              ],
              1,
            ),
            s(
              "div",
              { staticClass: "card" },
              [
                s(
                  "div",
                  {
                    staticClass: "card--tab-list",
                    class: { "input-closed": !t.addressOpen },
                    on: {
                      click: function (e) {
                        t.addressOpen = !t.addressOpen;
                      },
                    },
                  },
                  [
                    s("h2", { staticClass: "card--tab-title" }, [
                      t._v("Billing Address"),
                    ]),
                    s("transition", { attrs: { name: "fade" } }, [
                      s(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !t.addressOpen,
                              expression: "!addressOpen",
                            },
                          ],
                          staticClass: "saved-detail",
                        },
                        [
                          t._v(
                            "\n          " +
                              t._s(t.savedAddress) +
                              "\n        ",
                          ),
                        ],
                      ),
                    ]),
                    s("div", { staticClass: "input-form-toggle" }),
                  ],
                  1,
                ),
                s(
                  "transition",
                  { attrs: { name: "slide-down", mode: "out-in" } },
                  [
                    s(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.addressOpen,
                            expression: "addressOpen",
                          },
                        ],
                        staticClass: "card-details user-info",
                      },
                      [s("BillingAddress", { ref: "address" })],
                      1,
                    ),
                  ],
                ),
              ],
              1,
            ),
          ],
        );
      },
      wa = [],
      Da = s("7618"),
      Ra = Object.freeze({
        MIXIN_POPUP_OPENED: "mixin-popup-opened",
        MIXIN_POPUP_CLOSED: "mixin-popup-closed",
        CONFIRM_PURCHASE: "confirm-purchase",
      }),
      Ia = Ra,
      ja = s("768b"),
      Ma =
        (s("ffc1"),
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
                    var s = Object(ja["a"])(e, 2),
                      a = s[0],
                      n = s[1];
                    t.$eventBus.$on(a, n);
                  },
                ),
                (this.mixinEventListener_isOn = !0));
            },
            mixinEventListener_off: function () {
              var t = this;
              (Object.entries(this.mixinEventListener_eventMap).forEach(
                function (e) {
                  var s = Object(ja["a"])(e, 2),
                    a = s[0],
                    n = s[1];
                  t.$eventBus.$off(a, n);
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
      ka = Ma,
      La = s("98f4"),
      Ga = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "chargebee-fieldset" },
          [
            s("div", { staticClass: "chargebee-field" }, [
              s("label", { staticClass: "chargebee-label" }, [
                t._v("Name on Card"),
              ]),
              s("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: t.name,
                    expression: "name",
                  },
                ],
                staticClass: "chargebee-input input-full",
                class: { val: t.name, error: t.isErrored.name },
                attrs: { type: "text", id: "name" },
                domProps: { value: t.name },
                on: {
                  input: [
                    function (e) {
                      e.target.composing || (t.name = e.target.value);
                    },
                    t.onChange,
                  ],
                  blur: t.onLoseFocus,
                },
              }),
              s("i", { staticClass: "chargebee-bar" }),
            ]),
            s(
              "CardComponent",
              {
                ref: "card",
                staticClass: "fieldset field",
                attrs: { styles: t.styles, classes: t.classes },
                on: { change: t.onChange },
              },
              [
                s(
                  "div",
                  { staticClass: "chargebee-field" },
                  [
                    s("label", { staticClass: "chargebee-label" }, [
                      t._v("Card Number"),
                    ]),
                    s("CardNumber", {
                      staticClass: "chargebee-input input-full",
                      class: { error: t.isErrored.number },
                      on: { blur: t.onLoseFocus },
                    }),
                    s("i", { staticClass: "chargebee-bar" }),
                  ],
                  1,
                ),
                s("div", { staticClass: "chargebee-fields" }, [
                  s(
                    "div",
                    { staticClass: "chargebee-field" },
                    [
                      s("label", { staticClass: "chargebee-label" }, [
                        t._v("Expiry"),
                      ]),
                      s("CardExpiry", {
                        staticClass: "chargebee-input input-xsmall",
                        style: [
                          t.isErrored.expiry
                            ? { border: "solid 1px #EF8A78" }
                            : {},
                        ],
                        attrs: { styles: t.stylesExpiry },
                        on: { blur: t.onLoseFocus },
                      }),
                      s("i", { staticClass: "chargebee-bar" }),
                    ],
                    1,
                  ),
                  s(
                    "div",
                    { staticClass: "chargebee-field" },
                    [
                      s("label", { staticClass: "chargebee-label" }, [
                        t._v("CVV"),
                      ]),
                      s("CardCvv", {
                        staticClass: "chargebee-input input-xsmall",
                        style: [
                          t.isErrored.cvv
                            ? { border: "solid 1px #EF8A78" }
                            : {},
                        ],
                        on: { blur: t.onLoseFocus },
                      }),
                      s("div", { staticClass: "tooltip-cvv-container" }, [
                        s("div", { staticClass: "tooltip-cvv" }, [
                          s("p", [
                            s("strong", [t._v("Your CVV code")]),
                            t._v(
                              " (sometimes called a Security Code) is a 3 digit number on the back of your card. For AMEX cards, it's a 4 digit number on the front of your card.",
                            ),
                          ]),
                        ]),
                        s("div", { staticClass: "tooltip-cvv-icon" }, [
                          t._v("i"),
                        ]),
                      ]),
                      s("i", { staticClass: "chargebee-bar" }),
                    ],
                    1,
                  ),
                ]),
              ],
            ),
          ],
          1,
        );
      },
      xa = [],
      Ua = (s("6b54"), s("28a5"), s("0078"));
    function Va(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function $a(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Va(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : Va(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var Ba = {
        name: "ChargebeeCreditCard",
        components: {
          CardComponent: Ua["a"],
          CardNumber: Ua["d"],
          CardExpiry: Ua["c"],
          CardCvv: Ua["b"],
        },
        mixins: [f],
        data: function () {
          return {
            isComplete: { name: !1, number: !1, expiry: !1, cvv: !1 },
            isErrored: { name: !1, number: !1, expiry: !1, cvv: !1 },
            name: "",
            classes: {
              focus: "focus",
              invalid: "invalid",
              empty: "empty",
              complete: "complete",
            },
            fonts: ["https://fonts.googleapis.com/css?family=Lato:400,700"],
            locale: "en",
            styles: {
              base: {
                color: "#38393e",
                fontWeight: "400",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "13px",
                fontSmoothing: "antialiased",
                "::placeholder": { color: "#828da0" },
                ":focus::placeholder": { color: "transparent" },
              },
              invalid: {
                ":focus": {},
                "::placeholder": { color: "transparent" },
              },
            },
            stylesExpiry: { base: { lineHeight: "6px" } },
          };
        },
        computed: $a(
          $a(
            {},
            Object(T["c"])({
              selectedPlan: ct.getters.GET_SELECTED_PLAN,
              planTiers: ct.getters.GET_PLAN_TIERS,
              address: ft.getters.GET_ADDRESS,
              VATNumber: ft.getters.GET_VAT_NUMBER,
            }),
          ),
          {},
          {
            isValid: function () {
              for (var t in this.isErrored)
                if (this.isErrored.hasOwnProperty(t) && 1 == this.isErrored[t])
                  return !1;
              return !0;
            },
          },
        ),
        methods: $a(
          $a(
            $a(
              {},
              Object(T["d"])({
                setValidationError: ft.mutations.SET_VALIDATION_ERROR,
                setCCValidationComplete:
                  ft.mutations.SET_CC_VALIDATION_COMPLETE,
                SetSuccessMessage: tt.mutations.SET_SUCCESS_MESSAGE,
                ClearSuccessMessage: tt.mutations.CLEAR_SUCCESS_MESSAGE,
                clearErrorMessage: B.mutations.CLEAR_ERROR_MESSAGE,
                setErrorMessage: B.mutations.SET_ERROR_MESSAGE,
                setShowConfirmation: ft.mutations.SET_SHOW_CONFIRMATION,
                setPlanName: ft.mutations.SET_PLAN_NAME,
              }),
            ),
            Object(T["b"])({ ccardCheckout: ft.actions.CCARD_CHECKOUT }),
          ),
          {},
          {
            validate: function () {
              for (var t in this.isComplete)
                this.isComplete.hasOwnProperty(t) &&
                  0 == this.isComplete[t] &&
                  ((this.isErrored[t] = !0),
                  this.setValidationError({
                    name: t,
                    message: "Card " + t + " is required",
                  }));
              this.setCCValidationComplete(this.isValid);
            },
            makePurchaseRequest: function (t) {
              var e = this,
                s = {
                  first_name: this.name.split(" ")[0],
                  last_name: this.name.split(" ")[1],
                  company: this.address.company,
                  phone: this.address.phone,
                  line1: this.address.street,
                  line2: this.address.line2,
                  city: this.address.city,
                  state: this.address.region,
                  zip: this.address.postcode,
                  country: this.address.country,
                };
              (this.setPlanName(this.selectedPlan.planname),
                this.ccardCheckout({
                  token_id: t,
                  plan_id: this.selectedPlan.plan_id,
                  billing_address: s,
                  vat_number: this.VATNumber,
                }).then(
                  function () {
                    e.setShowConfirmation(!0);
                  },
                  function (t) {
                    console.log("Error: " + t);
                  },
                ));
            },
            proceedPurchase: function (t) {
              var e = this;
              if (t) return (this.makePurchaseRequest(""), !1);
              (this.$store.commit("root/INC_RUNNING_AJAX_REQUESTS"),
                this.clearErrorMessage(),
                this.$refs.card
                  .tokenize({
                    firstName: this.name.split(" ")[0],
                    lastName: this.name.split(" ")[1],
                    billingAddr1: this.address.street,
                    billingCity: this.address.city,
                    billingState: this.address.region,
                    billingZip: this.address.postcode,
                    billingCountry: this.address.country,
                  })
                  .then(function (t) {
                    e.makePurchaseRequest(t.token);
                  })
                  .catch(function (t) {
                    (console.error(t),
                      t.toString().includes("VALIDATION_FAILED")
                        ? e.setErrorMessage(
                            "Please ensure your billing details are correct",
                          )
                        : e.setErrorMessage(
                            "Something went wrong talking to the payment provider: Problem while tokenizing your card details",
                          ));
                  }),
                this.$store.commit("root/DEC_RUNNING_AJAX_REQUESTS"));
            },
            onChange: function (t) {
              var e = "",
                s = "",
                a = !0;
              (t.target
                ? ((e = t.target.id), "" === this.name && (a = !1))
                : ((e = t.field),
                  (a = t.complete),
                  t.error && ((s = t.error.message), (a = !1))),
                a &&
                  ((this.isComplete[e] = a),
                  (this.isErrored[e] = !a),
                  this.setValidationError({ name: e, message: s }),
                  this.setCCValidationComplete(this.isValid)));
            },
            onLoseFocus: function () {
              this.setCCValidationComplete(this.isValid);
            },
          },
        ),
      },
      Fa = Ba,
      Ya = (s("405e"), Object(b["a"])(Fa, Ga, xa, !1, null, "03d96f67", null)),
      Ha = Ya.exports,
      za = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "chargebee-fieldset" }, [
          s("div", { staticClass: "chargebee-field" }, [
            s("label", { staticClass: "chargebee-label" }, [t._v("Name")]),
            s("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: t.firstname,
                  expression: "firstname",
                },
              ],
              staticClass: "chargebee-input firstname input-half",
              class: { val: t.firstname, error: t.isErrored.firstname },
              attrs: {
                type: "text",
                placeholder: "First Name",
                id: "firstname",
                tabindex: "1",
              },
              domProps: { value: t.firstname },
              on: {
                input: [
                  function (e) {
                    e.target.composing || (t.firstname = e.target.value);
                  },
                  t.onChange,
                ],
                blur: t.onLoseFocus,
              },
            }),
            s("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: t.lastname,
                  expression: "lastname",
                },
              ],
              staticClass: "chargebee-input lastname input-half",
              class: { val: t.lastname, error: t.isErrored.lastname },
              attrs: {
                type: "text",
                placeholder: "Last Name",
                id: "lastname",
                tabindex: "2",
              },
              domProps: { value: t.lastname },
              on: {
                input: [
                  function (e) {
                    e.target.composing || (t.lastname = e.target.value);
                  },
                  t.onChange,
                ],
                blur: t.onLoseFocus,
              },
            }),
          ]),
          s("div", { staticClass: "chargebee-field" }, [
            s("label", { staticClass: "chargebee-label" }, [
              t._v("Order Number"),
            ]),
            s("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: t.orderNumber,
                  expression: "orderNumber",
                },
              ],
              staticClass: "chargebee-input input-full",
              class: { val: t.orderNumber },
              attrs: {
                type: "text",
                placeholder: "Optional",
                id: "order-number",
                tabindex: "5",
              },
              domProps: { value: t.orderNumber },
              on: {
                input: function (e) {
                  e.target.composing || (t.orderNumber = e.target.value);
                },
              },
            }),
            s("div", { staticClass: "small-description" }, [
              t._v("\n      Enter a purchase order number if required\n    "),
            ]),
          ]),
        ]);
      },
      Wa = [];
    function Ka(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function Xa(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Ka(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : Ka(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var Qa = {
        name: "BankTransfer",
        components: {},
        mixins: [],
        data: function () {
          return {
            firstname: "",
            lastname: "",
            isComplete: { firstname: !1, lastname: !1 },
            isErrored: { firstname: !1, lastname: !1 },
            classes: {
              focus: "focus",
              invalid: "invalid",
              empty: "empty",
              complete: "complete",
            },
          };
        },
        computed: Xa(
          Xa(
            {},
            Object(T["c"])({
              selectedPlan: ct.getters.GET_SELECTED_PLAN,
              address: ft.getters.GET_ADDRESS,
              VATNumber: ft.getters.GET_VAT_NUMBER,
              planMetadata: ct.getters.GET_PLAN_METADATA,
            }),
          ),
          {},
          {
            isValid: function () {
              for (var t in this.isErrored)
                if (this.isErrored.hasOwnProperty(t) && 1 == this.isErrored[t])
                  return !1;
              for (var e in this.isComplete)
                if (
                  this.isComplete.hasOwnProperty(e) &&
                  0 == this.isComplete[e]
                )
                  return !1;
              return !0;
            },
          },
        ),
        methods: Xa(
          Xa(
            Xa(
              {},
              Object(T["d"])({
                setErrorMessage: B.mutations.SET_ERROR_MESSAGE,
                setValidationError: ft.mutations.SET_VALIDATION_ERROR,
                setCCValidationComplete:
                  ft.mutations.SET_CC_VALIDATION_COMPLETE,
                setShowConfirmation: ft.mutations.SET_SHOW_CONFIRMATION,
                setPlanName: ft.mutations.SET_PLAN_NAME,
              }),
            ),
            Object(T["b"])({
              bankTransferCheckout: ft.actions.BANK_TRANSFER_CHECKOUT,
            }),
          ),
          {},
          {
            validate: function () {
              for (var t in this.isComplete)
                this.isComplete.hasOwnProperty(t) &&
                  0 == this.isComplete[t] &&
                  ((this.isErrored[t] = !0),
                  this.setValidationError({
                    name: t,
                    message: "Bank transfer " + t + " is required",
                  }));
              this.setCCValidationComplete(this.isValid);
            },
            proceedBankTransferPurchase: function () {
              var t = this,
                e = {
                  first_name: this.firstname,
                  last_name: this.lastname,
                  line1: this.address.street,
                  line2: this.address.line2,
                  city: this.address.city,
                  state: this.address.region,
                  zip: this.address.postcode,
                  country: this.address.country,
                  company: this.address.company,
                  phone: this.address.phone,
                };
              if ((this.validate(), !this.isValid))
                return (
                  this.setErrorMessage(
                    "Bank transfer or billing address isn't correct.",
                  ),
                  !1
                );
              (this.setPlanName(this.selectedPlan.planname),
                this.bankTransferCheckout({
                  plan_id: this.selectedPlan.plan_id,
                  order_number: this.orderNumber,
                  billing_address: e,
                  vat_number: this.VATNumber,
                }).then(
                  function () {
                    t.setShowConfirmation(!0);
                  },
                  function (t) {
                    console.log(t);
                  },
                ));
            },
            onChange: function (t) {
              var e = "",
                s = "",
                a = !0;
              (t.target && ((e = t.target.id), "" === this[e] && (a = !1)),
                a &&
                  ((this.isComplete[e] = a),
                  (this.isErrored[e] = !a),
                  this.setValidationError({ name: e, message: s }),
                  this.setCCValidationComplete(this.isValid)));
            },
            onLoseFocus: function () {
              this.setCCValidationComplete(this.isValid);
            },
          },
        ),
        mounted: function () {
          ((this.firstname = this.planMetadata.first_name),
            (this.lastname = this.planMetadata.last_name),
            void 0 != this.planMetadata.first_name &&
              "" != this.planMetadata.first_name &&
              (this.isComplete.firstname = !0),
            void 0 != this.planMetadata.last_name &&
              "" != this.planMetadata.last_name &&
              (this.isComplete.lastname = !0));
        },
      },
      qa = Qa,
      Ja = (s("199b"), Object(b["a"])(qa, za, Wa, !1, null, "20bf2a40", null)),
      Za = Ja.exports,
      tn = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "chargebee-fieldset" }, [
          s("div", { staticClass: "chargebee-field" }, [
            s("label", { staticClass: "chargebee-label" }, [t._v("Name")]),
            s("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: t.firstname,
                  expression: "firstname",
                },
              ],
              staticClass: "chargebee-input firstname input-half",
              class: { val: t.firstname, error: t.isErrored.firstname },
              attrs: {
                type: "text",
                placeholder: "First Name",
                id: "firstname",
                tabindex: "1",
              },
              domProps: { value: t.firstname },
              on: {
                input: [
                  function (e) {
                    e.target.composing || (t.firstname = e.target.value);
                  },
                  t.onChange,
                ],
                blur: t.onLoseFocus,
              },
            }),
            s("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: t.lastname,
                  expression: "lastname",
                },
              ],
              staticClass: "chargebee-input lastname input-half",
              class: { val: t.lastname, error: t.isErrored.lastname },
              attrs: {
                type: "text",
                placeholder: "Last Name",
                id: "lastname",
                tabindex: "2",
              },
              domProps: { value: t.lastname },
              on: {
                input: [
                  function (e) {
                    e.target.composing || (t.lastname = e.target.value);
                  },
                  t.onChange,
                ],
                blur: t.onLoseFocus,
              },
            }),
          ]),
          s("div", { staticClass: "chargebee-field" }, [
            s("label", { staticClass: "chargebee-label" }, [t._v("Email")]),
            s("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: t.email,
                  expression: "email",
                },
              ],
              staticClass: "chargebee-input input-full",
              class: { val: t.email, error: t.isErrored.email },
              attrs: { type: "text", id: "email", tabindex: "5" },
              domProps: { value: t.email },
              on: {
                input: [
                  function (e) {
                    e.target.composing || (t.email = e.target.value);
                  },
                  t.onChange,
                ],
                blur: t.onLoseFocus,
              },
            }),
          ]),
        ]);
      },
      en = [];
    function sn(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function an(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? sn(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : sn(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var nn = {
        name: "DirectDebit",
        components: {},
        mixins: [],
        data: function () {
          return {
            firstname: "",
            lastname: "",
            email: "",
            isComplete: { firstname: !1, lastname: !1, email: !1 },
            isErrored: { firstname: !1, lastname: !1, email: !1 },
            classes: {
              focus: "focus",
              invalid: "invalid",
              empty: "empty",
              complete: "complete",
            },
          };
        },
        computed: an(
          an(
            {},
            Object(T["c"])({
              selectedPlan: ct.getters.GET_SELECTED_PLAN,
              address: ft.getters.GET_ADDRESS,
              VATNumber: ft.getters.GET_VAT_NUMBER,
              planMetadata: ct.getters.GET_PLAN_METADATA,
            }),
          ),
          {},
          {
            isValid: function () {
              for (var t in this.isErrored)
                if (this.isErrored.hasOwnProperty(t) && 1 == this.isErrored[t])
                  return !1;
              for (var e in this.isComplete)
                if (
                  this.isComplete.hasOwnProperty(e) &&
                  0 == this.isComplete[e]
                )
                  return !1;
              return !0;
            },
          },
        ),
        methods: an(
          an(
            an(
              {},
              Object(T["d"])({
                setErrorMessage: B.mutations.SET_ERROR_MESSAGE,
                setValidationError: ft.mutations.SET_VALIDATION_ERROR,
                setCCValidationComplete:
                  ft.mutations.SET_CC_VALIDATION_COMPLETE,
                setShowConfirmation: ft.mutations.SET_SHOW_CONFIRMATION,
                setPlanName: ft.mutations.SET_PLAN_NAME,
                clearErrorMessage: B.mutations.CLEAR_ERROR_MESSAGE,
              }),
            ),
            Object(T["b"])({
              directDebitCheckout: ft.actions.DIRECT_DEBIT_CHECKOUT,
              createPaymentIntent: ft.actions.CREATE_PAYMENT_INTENT,
            }),
          ),
          {},
          {
            validate: function () {
              for (var t in this.isComplete)
                this.isComplete.hasOwnProperty(t) &&
                  0 == this.isComplete[t] &&
                  ((this.isErrored[t] = !0),
                  this.setValidationError({
                    name: t,
                    message: "Direct debit " + t + " is required",
                  }));
              this.setCCValidationComplete(this.isValid);
            },
            proceedDirectDebitPurchase: function () {
              var t = this,
                e = {
                  first_name: this.firstname,
                  last_name: this.lastname,
                  line1: this.address.street,
                  line2: this.address.line2,
                  city: this.address.city,
                  state: this.address.region,
                  zip: this.address.postcode,
                  country: this.address.country,
                  company: this.address.company,
                  phone: this.address.phone,
                };
              if ((this.validate(), !this.isValid))
                return (
                  this.setErrorMessage(
                    "Direct Debit or billing address isn't correct.",
                  ),
                  !1
                );
              this.setPlanName(this.selectedPlan.planname);
              var s = {
                customer: {
                  firstName: this.firstname,
                  lastName: this.lastname,
                  email: this.email,
                },
              };
              (this.clearErrorMessage(),
                this.createPaymentIntent().then(
                  function (a) {
                    t.$store.commit("root/INC_RUNNING_AJAX_REQUESTS");
                    var n = Chargebee.getInstance();
                    n.load("direct_debit")
                      .then(function (n) {
                        (n.setPaymentIntent(a.results),
                          n
                            .handlePayment(s)
                            .then(function (s) {
                              t.directDebitCheckout({
                                intent_id: s.id,
                                plan_id: t.selectedPlan.plan_id,
                                billing_address: e,
                                vat_number: t.VATNumber,
                              }).then(
                                function () {
                                  t.setShowConfirmation(!0);
                                },
                                function (t) {
                                  console.log(t);
                                },
                              );
                            })
                            .catch(function (e) {
                              t.setErrorMessage(
                                "Something went wrong talking to the payment provider: " +
                                  e,
                              );
                            })
                            .finally(function () {
                              t.$store.commit("root/DEC_RUNNING_AJAX_REQUESTS");
                            }));
                      })
                      .catch(function (e) {
                        (t.$store.commit("root/DEC_RUNNING_AJAX_REQUESTS"),
                          t.setErrorMessage(
                            "Something went wrong talking to the payment provider: " +
                              e,
                          ));
                      });
                  },
                  function (t) {
                    console.log("Error: " + t);
                  },
                ));
            },
            onChange: function (t) {
              var e = "",
                s = "",
                a = !0;
              (t.target && ((e = t.target.id), "" === this[e] && (a = !1)),
                a &&
                  ((this.isComplete[e] = a),
                  (this.isErrored[e] = !a),
                  this.setValidationError({ name: e, message: s }),
                  this.setCCValidationComplete(this.isValid)));
            },
            onLoseFocus: function () {
              this.setCCValidationComplete(this.isValid);
            },
          },
        ),
        mounted: function () {
          ((this.firstname = this.planMetadata.first_name),
            (this.lastname = this.planMetadata.last_name),
            (this.email = this.planMetadata.email),
            void 0 != this.planMetadata.first_name &&
              "" != this.planMetadata.first_name &&
              (this.isComplete.firstname = !0),
            void 0 != this.planMetadata.last_name &&
              "" != this.planMetadata.last_name &&
              (this.isComplete.lastname = !0),
            void 0 != this.planMetadata.email &&
              "" != this.planMetadata.email &&
              (this.isComplete.email = !0));
        },
      },
      rn = nn,
      on = (s("ffdc"), Object(b["a"])(rn, tn, en, !1, null, "2a9b634a", null)),
      cn = on.exports,
      ln = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "address-fieldset" }, [
          s("div", { staticClass: "details-row chargebee-field" }, [
            s("label", { attrs: { for: "company" } }, [t._v("Company")]),
            s("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: t.company,
                  expression: "company",
                },
              ],
              staticClass: "input-company detail-input input-full",
              attrs: { placeholder: "Optional", id: "company" },
              domProps: { value: t.company },
              on: {
                input: [
                  function (e) {
                    e.target.composing || (t.company = e.target.value);
                  },
                  t.onChange,
                ],
              },
            }),
          ]),
          s("div", { staticClass: "details-row chargebee-field" }, [
            s("label", { attrs: { for: "phone" } }, [t._v("Phone")]),
            s("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: t.phone,
                  expression: "phone",
                },
              ],
              ref: "phoneNumber",
              staticClass: "input-phone phone-number detail-input",
              class: { error: !t.isComplete.phone },
              attrs: { type: "text", id: "phone" },
              domProps: { value: t.phone },
              on: {
                input: [
                  function (e) {
                    e.target.composing || (t.phone = e.target.value);
                  },
                  t.onChange,
                ],
              },
            }),
          ]),
          s("hr"),
          s("div", { staticClass: "details-row chargebee-field" }, [
            s("label", { attrs: { for: "street" } }, [t._v("Street Address")]),
            s("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: t.street,
                  expression: "street",
                },
              ],
              staticClass: "input-street detail-input input-large",
              class: { error: !t.isComplete.street },
              attrs: {
                "data-lpignore": "true",
                id: "street",
                "data-recurly": "street",
              },
              domProps: { value: t.street },
              on: {
                input: [
                  function (e) {
                    e.target.composing || (t.street = e.target.value);
                  },
                  t.onChange,
                ],
              },
            }),
            s("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: t.line2,
                  expression: "line2",
                },
              ],
              staticClass: "input-apt detail-input input-small",
              attrs: { placeholder: "Apt/Suite", id: "appartment" },
              domProps: { value: t.line2 },
              on: {
                input: [
                  function (e) {
                    e.target.composing || (t.line2 = e.target.value);
                  },
                  t.onChange,
                ],
              },
            }),
          ]),
          s("div", { staticClass: "details-row chargebee-field" }, [
            s("label", { attrs: { for: "city" } }, [t._v("City & Country")]),
            s("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: t.city,
                  expression: "city",
                },
              ],
              staticClass: "input-city detail-input input-half",
              class: { error: !t.isComplete.city },
              attrs: {
                "data-lpignore": "true",
                id: "city",
                "data-recurly": "city",
              },
              domProps: { value: t.city },
              on: {
                input: [
                  function (e) {
                    e.target.composing || (t.city = e.target.value);
                  },
                  t.onChange,
                ],
              },
            }),
            s(
              "div",
              {
                staticClass: "input-country detail-input input-half",
                on: { change: t.onChange },
              },
              [
                s("country-select", {
                  class: { error: !t.isComplete.country },
                  attrs: {
                    id: "country",
                    country: t.country,
                    topCountry: "US",
                    "data-recurly": "country",
                  },
                  model: {
                    value: t.country,
                    callback: function (e) {
                      t.country = e;
                    },
                    expression: "country",
                  },
                }),
              ],
              1,
            ),
          ]),
          s("div", { staticClass: "details-row chargebee-field" }, [
            s("label", { attrs: { for: "postcode" } }, [t._v("ZIP/Postcode")]),
            s("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: t.postcode,
                  expression: "postcode",
                },
              ],
              staticClass: "input-postcode detail-input input-half",
              class: { error: !t.isComplete.postcode },
              attrs: {
                "data-lpignore": "true",
                id: "postcode",
                "data-recurly": "postcode",
              },
              domProps: { value: t.postcode },
              on: {
                input: [
                  function (e) {
                    e.target.composing || (t.postcode = e.target.value);
                  },
                  t.onChange,
                ],
              },
            }),
            s(
              "div",
              {
                staticClass: "input-state detail-input input-half",
                on: { change: t.onChange },
              },
              [
                s("region-select", {
                  class: { error: !t.isComplete.region },
                  attrs: {
                    id: "region",
                    country: t.country,
                    region: t.region,
                    regionName: !0,
                    "data-recurly": "region",
                  },
                  model: {
                    value: t.region,
                    callback: function (e) {
                      t.region = e;
                    },
                    expression: "region",
                  },
                }),
              ],
              1,
            ),
          ]),
          t.EUVATCountries.includes(t.country) || "GB" == t.country
            ? s("div", { staticClass: "details-row chargebee-field" }, [
                s("label", { attrs: { for: "vat-number" } }, [
                  t._v("VAT Number"),
                ]),
                s("div", { staticClass: "vat-eu-container" }, [
                  s("span", { staticClass: "vat-country-code" }, [
                    t._v(t._s(t.country)),
                  ]),
                  s("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: t.VATNumber,
                        expression: "VATNumber",
                      },
                    ],
                    staticClass:
                      "input-vat-number detail-input input-full vat-number-eu",
                    attrs: { id: "vat-number", placeholder: "Optional" },
                    domProps: { value: t.VATNumber },
                    on: {
                      input: [
                        function (e) {
                          e.target.composing || (t.VATNumber = e.target.value);
                        },
                        t.onChange,
                      ],
                    },
                  }),
                ]),
                "GB" == t.country
                  ? s("div", { staticClass: "small-description" }, [
                      t._v(
                        "\n      Add a VAT number to avoid paying tax on future payments.\n    ",
                      ),
                    ])
                  : t._e(),
              ])
            : t._e(),
          "AU" == t.country || "NZ" == t.country
            ? s("div", { staticClass: "details-row chargebee-field" }, [
                s("label", { attrs: { for: "vat-number" } }, [
                  t._v("GST Number"),
                ]),
                s("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: t.VATNumber,
                      expression: "VATNumber",
                    },
                  ],
                  staticClass: "input-vat-number detail-input input-full",
                  attrs: { id: "vat-number", placeholder: "Optional" },
                  domProps: { value: t.VATNumber },
                  on: {
                    input: [
                      function (e) {
                        e.target.composing || (t.VATNumber = e.target.value);
                      },
                      t.onChange,
                    ],
                  },
                }),
                "AU" == t.country
                  ? s("div", { staticClass: "small-description" }, [
                      t._v(
                        "\n      Add a GST number to avoid paying tax on future payments.\n    ",
                      ),
                    ])
                  : t._e(),
                "NZ" == t.country
                  ? s("div", { staticClass: "small-description" }, [
                      t._v(
                        "\n      Add a GST number to avoid paying tax.\n    ",
                      ),
                    ])
                  : t._e(),
              ])
            : t._e(),
        ]);
      },
      un = [],
      dn = s("3f9a"),
      pn = s.n(dn);
    function _n(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function mn(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? _n(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : _n(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    a["default"].use(pn.a);
    var hn = {
        name: "BillingAddress",
        data: function () {
          return {
            isComplete: {
              phone: !0,
              street: !0,
              city: !0,
              country: !0,
              region: !0,
              postcode: !0,
            },
            company: "",
            phone: "",
            street: "",
            line2: "",
            city: "",
            country: "",
            region: "",
            postcode: "",
            VATNumber: "",
            intlTelInput: null,
          };
        },
        computed: mn(
          mn(
            {},
            Object(T["c"])({
              EUVATCountries: ct.getters.GET_EU_VAT_COUNTRIES,
              address: ft.getters.GET_ADDRESS,
              planMetadata: ct.getters.GET_PLAN_METADATA,
            }),
          ),
          {},
          {
            isValid: function () {
              for (var t in this.isComplete)
                if (
                  this.isComplete.hasOwnProperty(t) &&
                  0 == this.isComplete[t]
                )
                  return !1;
              return (
                ("" == this.company &&
                  "" == this.phone &&
                  "" == this.street &&
                  "" == this.line2 &&
                  "" == this.city &&
                  "" == this.country &&
                  "" == this.region &&
                  "" == this.postcode &&
                  "" == this.VATNumber) ||
                ("" != this.phone &&
                  "" != this.street &&
                  "" != this.city &&
                  "" != this.country &&
                  "" != this.region &&
                  "" != this.postcode)
              );
            },
          },
        ),
        methods: mn(
          mn(
            {},
            Object(T["d"])({
              setValidationError: ft.mutations.SET_VALIDATION_ERROR,
              setAddrValidationComplete:
                ft.mutations.SET_ADDR_VALIDATION_COMPLETE,
              setAddress: ft.mutations.SET_ADDRESS,
              setVATNumber: ft.mutations.SET_VAT_NUMBER,
            }),
          ),
          {},
          {
            validate: function () {
              (("" != this.phone && void 0 != this.phone) ||
                ((this.isComplete["phone"] = !1),
                this.setValidationError({
                  name: "phone",
                  message: "Phone number is required",
                }),
                (this.$refs.phoneNumber.value = "")),
                ("" != this.street && void 0 != this.street) ||
                  ((this.isComplete["street"] = !1),
                  this.setValidationError({
                    name: "street",
                    message: "Street Address is required",
                  })),
                ("" != this.city && void 0 != this.city) ||
                  ((this.isComplete["city"] = !1),
                  this.setValidationError({
                    name: "city",
                    message: "City is required",
                  })),
                ("" != this.country && void 0 != this.country) ||
                  ((this.isComplete["country"] = !1),
                  this.setValidationError({
                    name: "country",
                    message: "Country is required",
                  })),
                ("" != this.region && void 0 != this.region) ||
                  ((this.isComplete["region"] = !1),
                  this.setValidationError({
                    name: "region",
                    message: "State / Region is required",
                  })),
                ("" != this.postcode && void 0 != this.postcode) ||
                  ((this.isComplete["postcode"] = !1),
                  this.setValidationError({
                    name: "postcode",
                    message: "ZIP / Postcode is required",
                  })),
                this.setAddrValidationComplete(this.isValid));
            },
            onChange: function (t) {
              var e = t.target.id,
                s = "",
                a = !0;
              switch (e) {
                case "phone":
                  "" === this.phone &&
                    ((s = "Phone number is required"), (a = !1));
                  break;
                case "street":
                  "" == this.street &&
                    ((s = "Street Address is required"), (a = !1));
                  break;
                case "city":
                  "" == this.city && ((s = "City is required"), (a = !1));
                  break;
                case "country":
                  "" == this.country && ((s = "Country is required"), (a = !1));
                  break;
                case "region":
                  "" == this.region &&
                    ((s = "State / Region is required"), (a = !1));
                  break;
                case "postcode":
                  "" == this.postcode &&
                    ((s = "ZIP / Postcode is required"), (a = !1));
                  break;
                default:
                  break;
              }
              ((this.isComplete[e] = a), this.setVATNumber(this.VATNumber));
              var n = "";
              void 0 != this.intlTelInput.selectedCountryData.dialCode &&
                (n = "+" + this.intlTelInput.selectedCountryData.dialCode);
              var i = n + this.phone;
              if (
                (void 0 !== this.phone &&
                  (this.phone.startsWith("+") || this.phone.startsWith(n)) &&
                  (i = this.phone),
                "" != i &&
                  "" != this.street &&
                  "" != this.city &&
                  "" != this.country &&
                  "" != this.region &&
                  "" != this.postcode)
              ) {
                var r = {
                  company: this.company,
                  phone: i,
                  street: this.street,
                  line2: this.line2,
                  city: this.city,
                  country: this.country,
                  region: this.region,
                  postcode: this.postcode,
                };
                this.setAddress(r);
              }
              (this.setValidationError({ name: e, message: s }),
                this.setAddrValidationComplete(this.isValid));
            },
          },
        ),
        mounted: function () {
          var t = this;
          ("object" === Object(Da["a"])(this.planMetadata.billing_details) &&
            Object.keys(this.planMetadata.billing_details).length > 0 &&
            (this.setAddress(this.planMetadata.billing_details),
            this.setVATNumber(this.address.vatnumber)),
            (this.company = this.address.company),
            (this.street = this.address.street),
            (this.line2 = this.address.line2),
            (this.city = this.address.city),
            (this.country = this.address.country),
            (this.region = this.address.region),
            (this.postcode = this.address.postcode),
            (this.VATNumber = this.address.vatnumber),
            setTimeout(function () {
              var e = null;
              ((void 0 != t.address.phone && t.address.phone.includes("+")) ||
                (e = function (t) {
                  Q.a
                    .get("https://ipinfo.io")
                    .then(function (e) {
                      var s = e.data,
                        a = s && s.country ? s.country : "";
                      t(a);
                    })
                    .catch(function () {});
                }),
                void 0 != t.address.phone &&
                  t.address.phone.includes("+") &&
                  (t.phone = t.address.phone),
                t.$nextTick(function () {
                  ((t.intlTelInput = Gs()(t.$refs.phoneNumber, {
                    separateDialCode: "true",
                    hiddenInput: "full_number",
                    initialCountry: "auto",
                    geoIpLookup: e,
                    preferredCountries: [],
                  })),
                    "undefined" == t.address.phone && (t.phone = ""));
                }));
            }, 250),
            this.$nextTick(function () {
              setTimeout(function () {
                void 0 != t.address.phone &&
                  "" != t.address.phone &&
                  "undefined" != t.address.phone &&
                  (t.phone = t.address.phone.replace(
                    "+" + t.intlTelInput.selectedCountryData.dialCode,
                    "",
                  ));
              }, 500);
            }));
        },
      },
      fn = hn,
      En =
        (s("a99e"),
        s("acab"),
        s("ddef"),
        Object(b["a"])(fn, ln, un, !1, null, "5ccab2f0", null)),
      vn = En.exports;
    function bn(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function gn(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? bn(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : bn(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    a["default"].use(La["a"]);
    var Cn = {
        name: "PaymentForm",
        mixins: [He, ka],
        components: {
          ChargebeeCreditCard: Ha,
          BankTransfer: Za,
          DirectDebit: cn,
          BillingAddress: vn,
        },
        created: function () {
          (this.mixinEventListener_register(
            Object(O["a"])({}, Ia.CONFIRM_PURCHASE, this.onConfirmPurchase),
          ),
            this.mixinEventListener_on());
        },
        destroyed: function () {
          this.mixinEventListener_off();
        },
        data: function () {
          return {
            creditOpen: !0,
            addressOpen: !0,
            savedCreditNumber: null,
            classes: {
              focus: "focus",
              invalid: "invalid",
              empty: "empty",
              complete: "complete",
            },
            fonts: ["https://fonts.googleapis.com/css?family=Lato:400,700"],
            placeholder: { cvv: "CVV", expiry: "MM / YD" },
            locale: "en",
            styles: {
              base: {
                color: "#333",
                fontWeight: "500",
                fontFamily: "Lato, Segoe UI, Helvetica Neue, sans-serif",
                fontSize: "16px",
                fontSmoothing: "antialiased",
                ":focus": { color: "#424770" },
                "::placeholder": { color: "transparent" },
                ":focus::placeholder": { color: "#7b808c" },
              },
              invalid: {
                color: "#e41029",
                ":focus": { color: "#e44d5f" },
                "::placeholder": { color: "#FFCCA5" },
              },
            },
          };
        },
        computed: gn(
          gn(
            {},
            Object(T["c"])({
              getBackendUrl: B.getters.GET_BACKEND_URL,
              selectedPlan: ct.getters.GET_SELECTED_PLAN,
              planMetadata: ct.getters.GET_PLAN_METADATA,
              planTiers: ct.getters.GET_PLAN_TIERS,
              paymentType: ft.getters.GET_PAYMENT_TYPE,
              ccValidationComplete: ft.getters.GET_CC_VALIDATION_COMPLETE,
              addrValidationComplete: ft.getters.GET_ADDR_VALIDATION_COMPLETE,
              address: ft.getters.GET_ADDRESS,
              VATNumber: ft.getters.GET_VAT_NUMBER,
            }),
          ),
          {},
          {
            isPayment: function () {
              return "paypal" == this.paymentType
                ? "is-paypal"
                : "bank-transfer" == this.paymentType
                  ? "is-bank-transfer"
                  : "direct_debit" == this.paymentType
                    ? "is-direct-debit"
                    : "is-ccard";
            },
            hasPaypal: function () {
              return void 0 != this.planMetadata.paypal_email &&
                "" != this.planMetadata.paypal_email
                ? "has-paypal"
                : "";
            },
          },
        ),
        methods: gn(
          gn(
            {},
            Object(T["d"])({
              setErrorMessage: B.mutations.SET_ERROR_MESSAGE,
              setPaymentType: ft.mutations.SET_PAYMENT_TYPE,
              setAddress: ft.mutations.SET_ADDRESS,
            }),
          ),
          {},
          {
            onConfirmPurchase: function () {
              if (
                (this.$refs.address.validate(),
                !this.addrValidationComplete &&
                  this.selectedPlan.per_month_size > this.planTiers.free)
              )
                return (this.$refs.address.validate(), !1);
              if ("paypal" === this.paymentType) return !1;
              if ("ccard" === this.paymentType) {
                var t = !0;
                if (
                  (this.selectedPlan.per_month_size !== this.planTiers.free &&
                    !this.planMetadata.card_last4) ||
                  (this.planMetadata.card_last4 &&
                    this.$refs.ccard.isComplete.number)
                ) {
                  if (
                    ((t = !1),
                    this.$refs.ccard.validate(),
                    !this.ccValidationComplete)
                  )
                    return !1;
                  if (
                    (this.$refs.address.validate(),
                    !this.addrValidationComplete)
                  )
                    return (this.$refs.address.validate(), !1);
                }
                this.$refs.ccard.proceedPurchase(t);
              } else
                "direct_debit" === this.paymentType
                  ? this.$refs.directDebit.proceedDirectDebitPurchase()
                  : "bank-transfer" === this.paymentType &&
                    this.$refs.bankTransfer.proceedBankTransferPurchase();
            },
          },
        ),
        mounted: function () {
          (this.planMetadata.card_last4 &&
            ((this.creditOpen = !1),
            (this.savedCreditNumber = this.planMetadata.card_last4)),
            "paypal_express_checkout" == this.planMetadata.payment_type
              ? this.setPaymentType("paypal")
              : "direct_debit" == this.planMetadata.payment_type &&
                this.setPaymentType("direct_debit"),
            "object" === Object(Da["a"])(this.planMetadata.billing_details) &&
              Object.keys(this.planMetadata.billing_details).length > 0 &&
              (this.addressOpen = !1));
        },
      },
      Tn = Cn,
      On = Object(b["a"])(Tn, Na, wa, !1, null, "7dd17068", null),
      yn = On.exports;
    function Pn(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function Sn(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Pn(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : Pn(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var An = {
        name: "CheckoutInfo",
        mixins: [He],
        components: { SelectedPlan: ba, Extras: Aa, PaymentForm: yn },
        computed: Sn(
          Sn(
            {},
            Object(T["c"])({
              selectedPlan: ct.getters.GET_SELECTED_PLAN,
              planTiers: ct.getters.GET_PLAN_TIERS,
            }),
          ),
          {},
          {
            paidPlanSelected: function () {
              return this.selectedPlan.per_month_size > this.planTiers.free;
            },
          },
        ),
        methods: {
          backButtonClick: function () {
            this.$router.go(-1);
          },
        },
      },
      Nn = An,
      wn = Object(b["a"])(Nn, ua, da, !1, null, null, null),
      Dn = wn.exports,
      Rn = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.initialised
          ? s(
              "aside",
              {
                staticClass:
                  "col-lg-4 col-md-4 col-sm-4 col-xs-12 column-bleed checkout-summary-wrapper fix-position",
              },
              [
                s(
                  "div",
                  { staticClass: "card summary-block-wrapper" },
                  [
                    s(
                      "div",
                      { staticClass: "summary-block summary-block-title" },
                      [t._v("\n      Summary\n    ")],
                    ),
                    t.gettingSubscription
                      ? s(
                          "div",
                          {
                            staticClass: "summary-block summary-block-subtotal",
                          },
                          [t._m(0)],
                        )
                      : t._e(),
                    t.subscriptionReturned
                      ? s(
                          "div",
                          {
                            staticClass: "summary-block summary-block-subtotal",
                          },
                          [
                            s(
                              "div",
                              { staticClass: "summary-block-inner-title" },
                              [t._v("Subtotal")],
                            ),
                            s(
                              "div",
                              { staticClass: "summary-block-inner-value" },
                              [
                                t._v(
                                  "\n        " +
                                    t._s(t.currencyPrefix) +
                                    t._s(
                                      t.subtotal
                                        .toFixed(2)
                                        .replace(
                                          /(\d)(?=(\d{3})+(?!\d))/g,
                                          "$1,",
                                        ),
                                    ) +
                                    "\n      ",
                                ),
                              ],
                            ),
                          ],
                        )
                      : t._e(),
                    t.subscriptionReturned ? s("DiscountNotice") : t._e(),
                    t.subscriptionReturned &&
                    (t.planMetadata.dedicated_ip_address > 0 ||
                      t.planMetadata.dedicated_sms_number > 0 ||
                      t.planMetadata.activity_duration_addon)
                      ? s(
                          "div",
                          {
                            staticClass: "summary-block summary-block-subtotal",
                          },
                          [
                            s(
                              "div",
                              { staticClass: "summary-block-inner-title" },
                              [t._v("Extras")],
                            ),
                            s(
                              "div",
                              { staticClass: "summary-block-inner-value" },
                              [
                                t._v(
                                  "\n        " +
                                    t._s(t.currencyPrefix) +
                                    t._s(
                                      t.extras
                                        .toFixed(2)
                                        .replace(
                                          /(\d)(?=(\d{3})+(?!\d))/g,
                                          "$1,",
                                        ),
                                    ) +
                                    "\n      ",
                                ),
                              ],
                            ),
                          ],
                        )
                      : t._e(),
                    t.showFullTaxes
                      ? s(
                          "div",
                          {
                            on: {
                              click: function (e) {
                                t.showFullTaxes = !t.showFullTaxes;
                              },
                            },
                          },
                          t._l(t.taxes, function (e) {
                            return s(
                              "div",
                              {
                                key: e,
                                staticClass: "summary-block summary-block-vat",
                              },
                              [
                                s(
                                  "div",
                                  { staticClass: "summary-block-inner-title" },
                                  [t._v(t._s(e.description))],
                                ),
                                s(
                                  "div",
                                  { staticClass: "summary-block-inner-value" },
                                  [
                                    t._v(
                                      "\n          " +
                                        t._s(t.currencyPrefix) +
                                        t._s(
                                          (e.amount / 100)
                                            .toFixed(2)
                                            .replace(
                                              /(\d)(?=(\d{3})+(?!\d))/g,
                                              "$1,",
                                            ),
                                        ) +
                                        "\n        ",
                                    ),
                                  ],
                                ),
                              ],
                            );
                          }),
                          0,
                        )
                      : t._e(),
                    t.showFullTaxes || 0 == t.taxTotal
                      ? t._e()
                      : s(
                          "div",
                          {
                            on: {
                              click: function (e) {
                                t.showFullTaxes = !t.showFullTaxes;
                              },
                            },
                          },
                          [
                            s(
                              "div",
                              {
                                staticClass: "summary-block summary-block-vat",
                              },
                              [
                                s(
                                  "div",
                                  { staticClass: "summary-block-inner-title" },
                                  [t._v(t._s(t.taxDescription))],
                                ),
                                s(
                                  "div",
                                  { staticClass: "summary-block-inner-value" },
                                  [
                                    t._v(
                                      "\n          " +
                                        t._s(t.currencyPrefix) +
                                        t._s(
                                          (t.taxTotal / 100)
                                            .toFixed(2)
                                            .replace(
                                              /(\d)(?=(\d{3})+(?!\d))/g,
                                              "$1,",
                                            ),
                                        ) +
                                        "\n        ",
                                    ),
                                  ],
                                ),
                              ],
                            ),
                          ],
                        ),
                    t.subscriptionReturned
                      ? s(
                          "div",
                          { staticClass: "summary-block summary-block-total" },
                          [
                            s(
                              "div",
                              { staticClass: "summary-block-inner-title" },
                              [
                                "bank-transfer" == t.paymentType
                                  ? s("div", [t._v("Total payment")])
                                  : "bank-transfer" != t.paymentType
                                    ? s("div", [
                                        t._v(
                                          "\n          Total " +
                                            t._s(
                                              t.getPeriodLabel(
                                                t.selectedPlan.months,
                                              ),
                                            ) +
                                            " recurring payment\n        ",
                                        ),
                                      ])
                                    : t._e(),
                                t.subscriptionReturned
                                  ? s(
                                      "div",
                                      {
                                        staticClass:
                                          "summary-next-billing-date",
                                      },
                                      [
                                        t._v(
                                          "\n          Next billing date " +
                                            t._s(
                                              t.formatDate(t.nextChargeDate),
                                            ) +
                                            "\n        ",
                                        ),
                                      ],
                                    )
                                  : t._e(),
                              ],
                            ),
                            s(
                              "div",
                              { staticClass: "summary-block-inner-value" },
                              [
                                t._v(
                                  "\n        " +
                                    t._s(t.currencyPrefix) +
                                    t._s(
                                      t.recurringPayment
                                        .toFixed(2)
                                        .replace(
                                          /(\d)(?=(\d{3})+(?!\d))/g,
                                          "$1,",
                                        ),
                                    ) +
                                    "\n      ",
                                ),
                              ],
                            ),
                          ],
                        )
                      : t._e(),
                    t.selectedPlan.number_of_relays <
                    t.currentPlan.number_of_relays
                      ? s("div", [t._m(1)])
                      : t.selectedPlan.plan_id == t.currentPlan.plan_id &&
                          t.planMetadata.within_subscription_period
                        ? s("div", [
                            t.subscriptionReturned
                              ? s(
                                  "div",
                                  {
                                    staticClass:
                                      "summary-block summary-block-charge",
                                  },
                                  [
                                    "bank-transfer" == t.paymentType
                                      ? s(
                                          "div",
                                          {
                                            staticClass:
                                              "summary-block-inner-title",
                                          },
                                          [
                                            t._v(
                                              "\n          Amount invoiced today\n        ",
                                            ),
                                          ],
                                        )
                                      : t._e(),
                                    "bank-transfer" != t.paymentType
                                      ? s(
                                          "div",
                                          {
                                            staticClass:
                                              "summary-block-inner-title",
                                          },
                                          [
                                            t._v(
                                              "\n          Amount charged today\n        ",
                                            ),
                                          ],
                                        )
                                      : t._e(),
                                    s(
                                      "div",
                                      {
                                        staticClass:
                                          "summary-block-inner-value",
                                      },
                                      [
                                        t._v(
                                          "\n          " +
                                            t._s(t.currencyPrefix) +
                                            "0\n        ",
                                        ),
                                      ],
                                    ),
                                  ],
                                )
                              : t._e(),
                          ])
                        : s("div", [
                            t.subscriptionReturned
                              ? s(
                                  "div",
                                  {
                                    staticClass:
                                      "summary-block summary-block-charge",
                                  },
                                  [
                                    "bank-transfer" == t.paymentType
                                      ? s(
                                          "div",
                                          {
                                            staticClass:
                                              "summary-block-inner-title",
                                          },
                                          [
                                            t._v(
                                              "\n          Amount invoiced today\n        ",
                                            ),
                                          ],
                                        )
                                      : t._e(),
                                    "bank-transfer" != t.paymentType
                                      ? s(
                                          "div",
                                          {
                                            staticClass:
                                              "summary-block-inner-title",
                                          },
                                          [
                                            t._v(
                                              "\n          Amount charged today\n        ",
                                            ),
                                          ],
                                        )
                                      : t._e(),
                                    s(
                                      "div",
                                      {
                                        staticClass:
                                          "summary-block-inner-value",
                                      },
                                      [
                                        t._v(
                                          "\n          " +
                                            t._s(t.currencyPrefix) +
                                            t._s(
                                              t.payNow
                                                .toFixed(2)
                                                .replace(
                                                  /(\d)(?=(\d{3})+(?!\d))/g,
                                                  "$1,",
                                                ),
                                            ) +
                                            "\n        ",
                                        ),
                                      ],
                                    ),
                                  ],
                                )
                              : t._e(),
                          ]),
                    t.subscriptionReturned || t.gettingSubscription
                      ? t._e()
                      : s(
                          "div",
                          { staticClass: "summary-block summary-block-charge" },
                          [
                            "bank-transfer" == t.paymentType
                              ? s(
                                  "div",
                                  { staticClass: "summary-block-inner-title" },
                                  [
                                    t._v(
                                      "\n        Amount invoiced today\n      ",
                                    ),
                                  ],
                                )
                              : t._e(),
                            "bank-transfer" != t.paymentType
                              ? s(
                                  "div",
                                  { staticClass: "summary-block-inner-title" },
                                  [
                                    t._v(
                                      "\n        Amount charged today\n      ",
                                    ),
                                  ],
                                )
                              : t._e(),
                            s(
                              "div",
                              { staticClass: "summary-block-inner-value" },
                              [
                                t._v(
                                  "\n        " +
                                    t._s(t.currencyPrefix) +
                                    t._s(
                                      t.selectedPlan.full_price
                                        .toFixed(2)
                                        .replace(
                                          /(\d)(?=(\d{3})+(?!\d))/g,
                                          "$1,",
                                        ),
                                    ) +
                                    "\n      ",
                                ),
                              ],
                            ),
                          ],
                        ),
                  ],
                  1,
                ),
                s(
                  "div",
                  {
                    class: { "card error-block": !t.isValid },
                    attrs: { id: "error" },
                  },
                  [
                    t.isValid
                      ? t._e()
                      : s("div", { staticClass: "error-block-inner-title" }, [
                          t._v(
                            "\n      Please fix these errors then try again\n    ",
                          ),
                        ]),
                    t.isValid
                      ? t._e()
                      : s(
                          "div",
                          { staticClass: "error-block-item-list" },
                          t._l(t.validationErrors, function (e) {
                            return s(
                              "div",
                              { key: e, staticClass: "error-block-item" },
                              [
                                s("i", {
                                  staticClass:
                                    "error-block-item-icon fa fa-exclamation-circle",
                                  attrs: { "aria-hidden": "true" },
                                }),
                                t._v("\n        " + t._s(e) + "\n      "),
                              ],
                            );
                          }),
                          0,
                        ),
                    s("div", { staticClass: "confirm" }, [
                      "paypal" != t.paymentType
                        ? s(
                            "button",
                            {
                              staticClass: "btn blue confirm",
                              class: { disabled: !t.isValid },
                              attrs: { disabled: !t.isValid },
                              on: { click: t.confirmClick },
                            },
                            [t._v("\n        Confirm\n      ")],
                          )
                        : t._e(),
                      "paypal" == t.paymentType
                        ? s(
                            "button",
                            {
                              staticClass: "btn blue confirm",
                              class: { disabled: !t.isValid },
                              attrs: { disabled: !t.isValid },
                              on: {
                                click: function (e) {
                                  return t.confirmWithPaypalClick(!1);
                                },
                              },
                            },
                            [t._v("\n        Checkout with PayPal\n      ")],
                          )
                        : t._e(),
                    ]),
                  ],
                ),
                "bank-transfer" == t.paymentType
                  ? s("div", { staticClass: "card payment-info" }, [
                      s("div", { staticClass: "payment-info-text" }, [
                        null == t.currentPlan.plan_id ||
                        "700" == t.currentPlan.plan_id
                          ? s("span", [
                              t._v(
                                "\n        You'll remain on your free plan while your payment is being processed.\n        Once we've received the payment, you'll be upgraded to your requested\n        plan.\n      ",
                              ),
                            ])
                          : t._e(),
                        t._v(
                          "\n      You will receive the upgrade to your requested plan automatically once\n      payment is confirmed.\n    ",
                        ),
                      ]),
                    ])
                  : t._e(),
                t.subscriptionReturned &&
                t.creditApplied > 0 &&
                this.selectedPlan.number_of_relays >=
                  this.currentPlan.number_of_relays
                  ? s("div", { staticClass: "card payment-info" }, [
                      s("div", { staticClass: "payment-info-text" }, [
                        t._v(
                          "\n      Credit of " +
                            t._s(t.currencyPrefix) +
                            t._s(
                              t.creditApplied
                                .toFixed(2)
                                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
                            ) +
                            "\n      will be applied to your payment. You will be charged the difference\n      between your newly selected subscription and the existing subscription\n      from today until the end of your current billing cycle (" +
                            t._s(t.newPlanStarts) +
                            "\n      - " +
                            t._s(t.formatDate(t.nextChargeDate)) +
                            ").\n    ",
                        ),
                      ]),
                    ])
                  : t._e(),
              ],
            )
          : t._e();
      },
      In = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "loading-spinner" }, [
            s("div", { staticClass: "loader" }, [
              s("span", { staticClass: "icon-circles" }, [
                s("span", { staticClass: "dot-circle pending" }),
                s("span", { staticClass: "dot-circle soft-bounced" }),
                s("span", { staticClass: "dot-circle hard-bounced" }),
                s("span", { staticClass: "dot-circle rejected" }),
                s("span", { staticClass: "dot-circle spam" }),
                s("span", { staticClass: "dot-circle delivered" }),
                s("span", { staticClass: "dot-circle unsubscribed" }),
                s("span", { staticClass: "dot-circle unblocked" }),
                s("span", { staticClass: "dot-circle opened" }),
                s("span", { staticClass: "dot-circle clicked" }),
              ]),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "div",
            { staticClass: "summary-block summary-block-charge" },
            [
              s("div", { staticClass: "summary-block-inner-title" }, [
                t._v(
                  "\n          Plan will be downgraded at the end of your billing cycle.\n        ",
                ),
              ]),
            ],
          );
        },
      ];
    function jn(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function Mn(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? jn(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : jn(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var kn = {
        name: "CheckoutSummary",
        mixins: [He],
        components: { DiscountNotice: bs },
        data: function () {
          return {
            selectedPlanStartDate: "",
            selectedPlanEndDate: "",
            payNow: 0,
            estimate: {},
            taxes: {},
            taxTotal: 0,
            planTotal: 0,
            taxDescription: "",
            nextChargeDate: "",
            subscriptionReturned: !1,
            gettingSubscription: !1,
            showFullTaxes: !1,
            previousCountry: "",
            previousRegion: "",
            previousVAT: "",
            debouce: null,
            discountPrice: 0,
          };
        },
        created: function () {
          this.getFromChargebee();
        },
        computed: Mn(
          Mn(
            {},
            Object(T["c"])({
              initialised: ct.getters.GET_IS_INITIALISED,
              currentPlan: ct.getters.GET_CURRENT_PLAN,
              selectedPlan: ct.getters.GET_SELECTED_PLAN,
              planMetadata: ct.getters.GET_PLAN_METADATA,
              planTiers: ct.getters.GET_PLAN_TIERS,
              ccValidationComplete: ft.getters.GET_CC_VALIDATION_COMPLETE,
              addrValidationComplete: ft.getters.GET_ADDR_VALIDATION_COMPLETE,
              address: ft.getters.GET_ADDRESS,
              VATNumber: ft.getters.GET_VAT_NUMBER,
              validationErrors: ft.getters.GET_VALIDATION_ERRORS,
              currencyPrefix: It.getters.GET_CURRENCY_PREFIX,
              currencyCode: It.getters.GET_CURRENCY_CODE,
              paymentType: ft.getters.GET_PAYMENT_TYPE,
              paypalToken: ft.getters.GET_PAYPAL_TOKEN,
              planList: ct.getters.GET_PLAN_LIST,
            }),
          ),
          {},
          {
            newPlanStarts: function () {
              var t = ls.a.tz.guess(),
                e = ls()().tz(t);
              return e.format("DD MMMM, YYYY");
            },
            isValid: function () {
              if (this.selectedPlan.per_month_size === this.planTiers.free)
                return !0;
              for (var t in this.validationErrors) return !1;
              return !0;
            },
            extras: function () {
              var t = 0;
              return (
                this.planMetadata.dedicated_ip_address > 0 &&
                  (t +=
                    this.planMetadata.dedicated_ip_address *
                    this.selectedPlan.months *
                    this.planMetadata.dedicated_ip_price),
                this.planMetadata.dedicated_sms_number > 0 &&
                  (t +=
                    this.planMetadata.dedicated_sms_number *
                    this.selectedPlan.months *
                    this.planMetadata.dedicated_sms_price),
                this.planMetadata.activity_duration_addon &&
                  (t += this.activityAddonPrice() * this.selectedPlan.months),
                t
              );
            },
            subtotal: function () {
              var t = this.selectedPlan.plan_orig_full_price;
              return t;
            },
            recurringPayment: function () {
              var t =
                this.selectedPlan.plan_orig_full_price *
                this.planMetadata.price_rate;
              return ((t += this.extras), t);
            },
          },
        ),
        watch: {
          address: function () {
            (this.address.country == this.previousCountry &&
              this.address.region == this.previousRegion) ||
              ((this.previousCountry = this.address.country),
              (this.previousRegion = this.address.region),
              this.getFromChargebee());
          },
          VATNumber: function () {
            var t = this;
            this.VATNumber != this.previousVAT &&
              (clearTimeout(this.debounce),
              (this.debounce = setTimeout(function () {
                ((t.previousVAT = t.VATNumber), t.getFromChargebee());
              }, 500)));
          },
        },
        methods: Mn(
          Mn(
            Mn(
              {},
              Object(T["d"])({
                setValidationError: ft.mutations.SET_VALIDATION_ERROR,
                setShowConfirmation: ft.mutations.SET_SHOW_CONFIRMATION,
              }),
            ),
            Object(T["b"])({
              authorizePaypal: ft.actions.AUTHORIZE_PAYPAL,
              executePaypalAgreement: ft.actions.EXECUTE_PAYPAL_AGREEMENT,
              ccardCheckout: ft.actions.CCARD_CHECKOUT,
              setPlanName: ft.mutations.SET_PLAN_NAME,
            }),
          ),
          {},
          {
            formatDate: function (t) {
              var e = ls.a.tz.guess(),
                s = ls()(t).tz(e);
              return s.format("DD MMMM, YYYY");
            },
            confirmClick: function () {
              this.$eventBus.$emit(Ia.CONFIRM_PURCHASE);
            },
            getPeriodLabel: function (t) {
              return 3 === t ? "quarterly" : 12 === t ? "annually" : "monthly";
            },
            getFromChargebee: function () {
              ((this.subscriptionReturned = !1),
                (this.gettingSubscription = !0),
                (this.taxes = {}),
                (this.taxTotal = 0),
                (this.taxDescription = ""),
                "" !== this.planMetadata.subscription
                  ? this.updateSubscriptionEstimate()
                  : this.createSubscriptionEstimate());
            },
            calculateTaxTotal: function () {
              for (var t in ((this.taxTotal = 0), this.taxes))
                this.taxTotal += this.taxes[t].amount;
              ((this.taxDescription = "Taxes"),
                1 == this.taxes.length &&
                  (this.taxDescription = this.taxes[0].description));
            },
            processChargebeeEstimate: function (t) {
              var e = this;
              if (void 0 == t.invoice_estimate || null == t.invoice_estimate) {
                if (
                  void 0 == t.next_invoice_estimate ||
                  null == t.next_invoice_estimate
                )
                  return !1;
                t.invoice_estimate = t.next_invoice_estimate;
              }
              ((this.payNow = t.invoice_estimate.amount_due / 100),
                (this.nextChargeDate = ls.a
                  .unix(t.subscription_estimate.next_billing_at)
                  .utc()
                  .format("YYYY-MM-DD")),
                this.planMetadata.within_subscription_period &&
                  ((this.nextChargeDate = ls.a
                    .unix(this.planMetadata.date_endperiod)
                    .utc()
                    .format("YYYY-MM-DD")),
                  this.selectedPlan.months > 1 &&
                    1 == this.currentPlan.months &&
                    (this.nextChargeDate = ls.a
                      .unix(this.planMetadata.date_endperiod)
                      .utc()
                      .add(11, "months")
                      .format("YYYY-MM-DD"))),
                (this.creditApplied =
                  t.invoice_estimate.credits_applied / 100));
              var s = t.invoice_estimate.discounts;
              (void 0 != s &&
                s.length > 0 &&
                s.forEach(function (t) {
                  ("promotional_credits" == t.entity_type &&
                    (e.creditApplied += t.amount / 100),
                    "item_level_coupon" == t.entity_type &&
                      (e.discountPrice = t.amount / 100));
                }),
                t.invoice_estimate.line_item_taxes.length > 0 &&
                  (this.planTotal =
                    this.selectedPlan.full_price *
                      (t.invoice_estimate.line_item_taxes[0].tax_rate / 100) +
                    this.selectedPlan.full_price),
                (this.gettingSubscription = !1),
                (this.subscriptionReturned = !0),
                this.setValidationError({ name: "ChargeBee", message: "" }),
                (this.taxes = t.invoice_estimate.taxes),
                this.calculateTaxTotal(),
                (this.estimate = t));
            },
            getChargebeePayload: function () {
              var t = !1;
              "700" == this.currentPlan.plan_id && (t = !0);
              var e = !1;
              this.selectedPlan.number_of_relays <
                this.currentPlan.number_of_relays && (e = !0);
              var s = [];
              return (
                void 0 != this.planMetadata.coupon_id &&
                  (s = [this.planMetadata.coupon_id]),
                {
                  subscription: {
                    id: this.planMetadata.subscription,
                    plan_id: this.selectedPlan.plan_id,
                  },
                  billing_address: {
                    line1: this.address.street,
                    line2: this.address.line2,
                    city: this.address.city,
                    state_code: this.address.region,
                    zip: this.address.postcode,
                    country: this.address.country,
                  },
                  customer: { vat_number: this.VATNumber },
                  force_term_reset: t,
                  coupon_ids: s,
                  end_of_term: e,
                }
              );
            },
            updateSubscriptionEstimate: function () {
              var t = this,
                e = Chargebee.getInstance(),
                s = this.getChargebeePayload();
              (this.planMetadata.activity_duration_addon &&
                (s.addons = [
                  {
                    id: this.planMetadata.activity_duration_addon,
                    quantity: 1,
                    unit_price: Math.round(100 * this.activityAddonPrice()),
                  },
                ]),
                e.load("functions").then(function () {
                  e.estimates
                    .updateSubscriptionEstimate(s)
                    .then(function (e) {
                      t.processChargebeeEstimate(e.estimate);
                    })
                    .catch(function (e) {
                      "ClientError" === e.type &&
                      e.message.includes("does not exist")
                        ? t.createSubscriptionEstimate()
                        : t.handleChargebeeError(e);
                    });
                }));
            },
            createSubscriptionEstimate: function () {
              var t = this,
                e = Chargebee.getInstance();
              e.load("functions").then(function () {
                e.estimates
                  .createSubscriptionEstimate(t.getChargebeePayload())
                  .then(function (e) {
                    t.processChargebeeEstimate(e.estimate);
                  })
                  .catch(function (e) {
                    t.handleChargebeeError(e);
                  });
              });
            },
            handleChargebeeError: function (t) {
              var e = this;
              if (((this.gettingSubscription = !1), "" != this.VATNumber)) {
                var s = Chargebee.getInstance();
                s.load("functions").then(function () {
                  var a = {
                    country: e.address.country,
                    vat_number: e.VATNumber,
                  };
                  s.vat
                    .validateVat(a)
                    .then(function (s) {
                      if ((console.log(t), "INVALID" == s.status))
                        return (
                          e.setValidationError({
                            name: "ChargeBee",
                            message:
                              "VAT Number is invalid, if your number contains a country code, please remove and try again.",
                          }),
                          !1
                        );
                      e.setValidationError({
                        name: "ChargeBee",
                        message: t.message,
                      });
                    })
                    .catch(function (t) {
                      return (
                        e.setValidationError({
                          name: "ChargeBee",
                          message: t.message,
                        }),
                        !1
                      );
                    });
                });
              } else
                this.setValidationError({
                  name: "ChargeBee",
                  message: t.message,
                });
            },
            confirmWithPaypalClick: function (t) {
              var e = this;
              if (
                (this.$eventBus.$emit(Ia.CONFIRM_PURCHASE),
                !this.addrValidationComplete &&
                  this.selectedPlan.per_month_size > this.planTiers.free)
              )
                return !1;
              if (
                t ||
                void 0 == this.planMetadata.paypal_email ||
                "" == this.planMetadata.paypal_email
              )
                this.authorizePaypal({ exit_url: window.location.origin }).then(
                  function (t) {
                    var s = screen.width / 2 - 225,
                      a = screen.height / 2 - 362.5,
                      n = window.open(
                        t.results.url,
                        "",
                        "width=450,height=725, top=" + a + ", left=" + s,
                      ),
                      i = setInterval(function () {
                        if (
                          (void 0 == n && clearInterval(i),
                          n.closed && (clearInterval(i), "" != e.paypalToken))
                        ) {
                          var t = {
                            company: e.address.company,
                            phone: e.address.phone,
                            line1: e.address.street,
                            line2: e.address.line2,
                            city: e.address.city,
                            state: e.address.region,
                            zip: e.address.postcode,
                            country: e.address.country,
                          };
                          (e.setPlanName(e.selectedPlan.planname),
                            e
                              .executePaypalAgreement({
                                paypal_token: e.paypalToken,
                                plan_id: e.selectedPlan.plan_id,
                                billing_address: t,
                                vat_number: e.VATNumber,
                              })
                              .then(function () {
                                e.setShowConfirmation(!0);
                              }));
                        }
                      }, 200);
                  },
                );
              else {
                var s = {
                  company: this.address.company,
                  phone: this.address.phone,
                  line1: this.address.street,
                  line2: this.address.line2,
                  city: this.address.city,
                  state: this.address.region,
                  zip: this.address.postcode,
                  country: this.address.country,
                };
                this.ccardCheckout({
                  plan_id: this.selectedPlan.plan_id,
                  billing_address: s,
                  vat_number: this.VATNumber,
                }).then(function () {
                  e.setShowConfirmation(!0);
                });
              }
            },
            activityAddonPrice: function () {
              var t = this,
                e = this.planList.find(function (e) {
                  return (
                    e.number_of_relays == t.selectedPlan.number_of_relays &&
                    1 == e.months
                  );
                }).plan_orig_full_price,
                s = 0;
              return (
                "60_days_activity_duration" ==
                this.planMetadata.activity_duration_addon
                  ? ((s = 0.15 * e), s < 3 && (s = 3))
                  : "120_days_activity_duration" ==
                      this.planMetadata.activity_duration_addon
                    ? ((s = 0.25 * e), s <= 5 && (s = 5))
                    : "1_year_activity_duration" ==
                        this.planMetadata.activity_duration_addon
                      ? ((s = 0.35 * e), s < 8 && (s = 8))
                      : "2_years_activity_duration" ==
                          this.planMetadata.activity_duration_addon &&
                        ((s = 0.5 * e), s < 15 && (s = 15)),
                s
              );
            },
          },
        ),
      },
      Ln = kn,
      Gn = (s("6e47"), Object(b["a"])(Ln, Rn, In, !1, null, "e5a8a9c8", null)),
      xn = Gn.exports,
      Un = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "checkout-success" }, [
          s(
            "div",
            {
              staticClass: "success-splash",
              class: { "is-active": t.isActive },
            },
            [
              s(
                "div",
                {
                  staticClass: "success-splash-content",
                  class: {
                    "is-downgrade":
                      t.selectedPlan.per_month_size <
                      t.currentPlan.per_month_size,
                  },
                },
                [
                  t.selectedPlan.per_month_size >= t.currentPlan.per_month_size
                    ? s("img", {
                        attrs: {
                          src: "/static/smtp2go_assets/lightbox-popper.png",
                          alt: "upgrade successful",
                          width: "161",
                        },
                      })
                    : s("img", {
                        staticClass: "image-downgrade",
                        attrs: {
                          src: "/static/smtp2go_assets/heart-in-hand.png",
                          alt: "downgrade successful",
                          width: "200",
                        },
                      }),
                  t.selectedPlan.per_month_size >= t.currentPlan.per_month_size
                    ? s("div", [
                        s("h2", [
                          "bank-transfer" == t.paymentType
                            ? s("span", [t._v("You'll soon be on the ")])
                            : s("span", [t._v("You're now on the ")]),
                          t.selectedPlan.per_month_size >=
                          this.planTiers.professional
                            ? s("span", [t._v("Professional")])
                            : t.selectedPlan.per_month_size >
                                this.planTiers.free
                              ? s("span", [t._v("Starter")])
                              : s("span", [t._v("Free")]),
                          t._v("\n          plan!\n        "),
                        ]),
                        "bank-transfer" == t.paymentType
                          ? s("p", { staticClass: "success-splash-lead" }, [
                              t._v(
                                "\n          Thank you for choosing to upgrade.\n          Your invoice is\n          ",
                              ),
                              s(
                                "a",
                                {
                                  attrs: { href: "javascript:void(0);" },
                                  on: {
                                    click: function (e) {
                                      return (
                                        e.stopPropagation(),
                                        e.preventDefault(),
                                        t.$router.push({
                                          name: "latest-invoice-redirect",
                                        })
                                      );
                                    },
                                  },
                                },
                                [t._v("available here")],
                              ),
                              t._v(
                                ",\n          and will also be emailed to you.\n          Your new plan will be available as soon as payment is received by us.\n        ",
                              ),
                            ])
                          : s("p", { staticClass: "success-splash-lead" }, [
                              t._v(
                                "\n          Thank you for upgrading your plan. Your account will be updated with the new features within 10 minutes.\n        ",
                              ),
                            ]),
                      ])
                    : s("div", [
                        s("h2", [
                          t._v(
                            "\n          Downgrade scheduled to the\n          ",
                          ),
                          t.selectedPlan.per_month_size >=
                          this.planTiers.professional
                            ? s("span", [t._v("Professional")])
                            : t.selectedPlan.per_month_size >
                                this.planTiers.free
                              ? s("span", [t._v("Starter")])
                              : s("span", [t._v("Free")]),
                          t._v("\n          plan\n        "),
                        ]),
                        s(
                          "p",
                          { staticClass: "success-splash-lead lead-line" },
                          [
                            t._v(
                              "\n          Your plan will be downgraded at the end of your billing cycle.\n        ",
                            ),
                          ],
                        ),
                      ]),
                  s(
                    "ul",
                    {
                      staticClass: "success-splash-features",
                      class: {
                        "downgrade-free":
                          t.selectedPlan.per_month_size == this.planTiers.free,
                      },
                    },
                    [
                      s("li", [
                        s("strong", [
                          t._v(
                            t._s(
                              t.selectedPlan.per_month_size.toLocaleString(),
                            ),
                          ),
                        ]),
                        s("span", [t._v("emails/mo")]),
                      ]),
                      t.selectedPlan.per_month_size >=
                        this.planTiers.professional ||
                      843 == t.selectedPlan.plan_id ||
                      844 == t.selectedPlan.plan_id
                        ? s("li", [
                            s("strong", [t._v("Dedicated")]),
                            s("span", [t._v("IP address")]),
                          ])
                        : t._e(),
                      t.selectedPlan.per_month_size >=
                      this.planTiers.professional
                        ? s("li", [
                            s("strong", [t._v("Email testing")]),
                            s("span", [t._v("tool")]),
                          ])
                        : t._e(),
                      t.selectedPlan.per_month_size > this.planTiers.free
                        ? s("li", [
                            s("strong", [t._v("Subaccount")]),
                            s("span", [t._v("management")]),
                          ])
                        : t._e(),
                      t.selectedPlan.per_month_size > this.planTiers.free
                        ? s("li", [
                            s("strong", [t._v("30 days")]),
                            s("span", [t._v("of email reporting")]),
                          ])
                        : t._e(),
                      t.selectedPlan.per_month_size > this.planTiers.free
                        ? s("li", [
                            s("strong", [t._v("Ticket/chat/phone")]),
                            s("span", [t._v("support")]),
                          ])
                        : t._e(),
                      t.selectedPlan.per_month_size == this.planTiers.free
                        ? s("li", [
                            s("strong", [t._v("5 days")]),
                            s("span", [t._v("of email reporting")]),
                          ])
                        : t._e(),
                      t.selectedPlan.per_month_size == this.planTiers.free
                        ? s("li", [
                            s("strong", [t._v("Ticket support")]),
                            s("span", [t._v("only")]),
                          ])
                        : t._e(),
                    ],
                  ),
                ],
              ),
              s("div", { staticClass: "success-splash-footer" }, [
                s(
                  "a",
                  { staticClass: "btn green", on: { click: t.completeClick } },
                  [t._v("Continue")],
                ),
              ]),
            ],
          ),
        ]);
      },
      Vn = [];
    function $n(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function Bn(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? $n(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : $n(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var Fn = {
        name: "CheckoutConfirmationSplash",
        props: { isActive: { type: Boolean, default: !1 } },
        data: function () {
          return { delayedActive: !1 };
        },
        computed: Bn(
          {},
          Object(T["c"])({
            currentPlan: ct.getters.GET_CURRENT_PLAN,
            selectedPlan: ct.getters.GET_SELECTED_PLAN,
            planTiers: ct.getters.GET_PLAN_TIERS,
            paymentType: ft.getters.GET_PAYMENT_TYPE,
          }),
        ),
        methods: {
          completeClick: function () {
            this.$router.push({ name: "main" });
          },
        },
        mounted: function () {
          var t = this;
          ((window._conv_q = window._conv_q || []),
            _conv_q.push(["triggerConversion", "100031022"]),
            _conv_q.push([
              "pushRevenue",
              this.selectedPlan.full_price,
              this.selectedPlan.months,
              "100030808",
            ]),
            (window.uetq = window.uetq || []),
            window.uetq.push("event", "PRODUCT_PURCHASE", {
              ecomm_prodid: this.selectedPlan.plan_id,
              ecomm_pagetype: "PURCHASE",
              revenue_value: this.selectedPlan.full_price,
              currency: "USD",
            }),
            window.scrollTo({ top: 0, behavior: "smooth" }),
            this.isActive &&
              setTimeout(function () {
                t.delayedActive = !0;
              }, 100));
        },
        watch: {
          isActive: function (t) {
            var e = this;
            t
              ? setTimeout(function () {
                  e.delayedActive = !0;
                }, 100)
              : (this.delayedActive = !1);
          },
        },
      },
      Yn = Fn,
      Hn = (s("d4c5"), Object(b["a"])(Yn, Un, Vn, !1, null, "bf5c471c", null)),
      zn = Hn.exports,
      Wn = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass: "downgrade-confirm",
            class: {
              "is-approved": t.isApproved,
              "is-active": t.fadeIn && !t.isApproved,
            },
          },
          [
            s("div", { staticClass: "in-page-splash" }, [
              s("div", { staticClass: "in-page-splash-content" }, [
                s("img", {
                  staticClass: "in-page-splash-icon",
                  attrs: {
                    src: "/static/smtp2go_assets/alert-sign.png",
                    alt: "sender",
                    width: "118",
                  },
                }),
                s("div", [
                  s("h2", [t._v("\n          Important note\n        ")]),
                  0 === t.featureList
                    ? s("p", { staticClass: "success-splash-lead" }, [
                        t._v(
                          "\n          Downgrading to a free plan will remove the following features from your account:\n        ",
                        ),
                      ])
                    : 1 === t.featureList
                      ? s(
                          "p",
                          {
                            staticClass: "success-splash-lead",
                            class: { "lead-only": t.featureList > 0 },
                          },
                          [
                            t._v("\n          You currently have "),
                            t._m(0),
                            t._v(" If you wish to convert to a "),
                            s("strong", [t._v("free plan")]),
                            t._v(
                              ", you need to firstly reduce the number of verified senders in your account to ",
                            ),
                            t._m(1),
                            t._v(
                              " Alternatively, you can choose to close your account.\n        ",
                            ),
                          ],
                        )
                      : 2 === t.featureList
                        ? s(
                            "p",
                            {
                              staticClass: "success-splash-lead",
                              class: { "lead-only": t.featureList > 0 },
                            },
                            [
                              t._v("\n          You currently have "),
                              t._m(2),
                              t._v(" If you wish to convert to a "),
                              s("strong", [t._v("free plan")]),
                              t._v(
                                ", you need to firstly reduce the number of team members in your account to ",
                              ),
                              t._m(3),
                              t._v(
                                " Alternatively, you can choose to close your account.\n        ",
                              ),
                            ],
                          )
                        : 3 === t.featureList
                          ? s(
                              "p",
                              {
                                staticClass: "success-splash-lead",
                                class: { "lead-only": t.featureList > 0 },
                              },
                              [
                                t._v("\n          You currently have "),
                                t._m(4),
                                t._v(" If you wish to convert to a "),
                                s("strong", [t._v("free plan")]),
                                t._v(
                                  ", you need to firstly reduce the number of webhooks in your account to ",
                                ),
                                t._m(5),
                                t._v(
                                  " Alternatively, you can choose to close your account.\n        ",
                                ),
                              ],
                            )
                          : t._e(),
                ]),
                0 === t.featureList
                  ? s("ul", { staticClass: "downgrade-splash-features" }, [
                      t._m(6),
                      t._m(7),
                      t._m(8),
                      t._m(9),
                      t._m(10),
                      t._m(11),
                    ])
                  : t._e(),
              ]),
              s("div", { staticClass: "in-page-splash-footer" }, [
                0 === t.featureList
                  ? s("span", { staticClass: "downgrade-confirmation" }, [
                      s("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: t.approveText,
                            expression: "approveText",
                          },
                        ],
                        attrs: {
                          type: "text",
                          placeholder: "Type ‘APPROVE’ here",
                        },
                        domProps: { value: t.approveText },
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              (t.approveText = e.target.value);
                          },
                        },
                      }),
                      s(
                        "button",
                        {
                          staticClass: "btn red",
                          on: { click: t.downgradeClick },
                        },
                        [t._v("Downgrade")],
                      ),
                    ])
                  : t._e(),
                1 === t.featureList
                  ? s(
                      "a",
                      {
                        staticClass: "btn blue",
                        on: { click: t.goToVerifiedSenderClick },
                      },
                      [t._v("Go to Verified Senders page")],
                    )
                  : t._e(),
                2 === t.featureList
                  ? s(
                      "a",
                      {
                        staticClass: "btn blue",
                        on: { click: t.goToTeamMembersClick },
                      },
                      [t._v("Go to Team Members page")],
                    )
                  : t._e(),
                3 === t.featureList
                  ? s(
                      "a",
                      {
                        staticClass: "btn blue",
                        on: { click: t.goToWebhooksClick },
                      },
                      [t._v("Go to Webhooks page")],
                    )
                  : t._e(),
                s(
                  "button",
                  {
                    staticClass: "btn outlined",
                    on: { click: t.backButtonClick },
                  },
                  [t._v("Nevermind, go back")],
                ),
              ]),
            ]),
          ],
        );
      },
      Kn = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("span", { staticClass: "highlight-red" }, [
            s("span", { staticClass: "highlight-red-text" }, [
              t._v("more than 5 verified senders."),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("span", { staticClass: "highlight-red" }, [
            s("span", { staticClass: "highlight-red-text" }, [
              t._v("5 or fewer."),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("span", { staticClass: "highlight-red" }, [
            s("span", { staticClass: "highlight-red-text" }, [
              t._v("more than 2 team members."),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("span", { staticClass: "highlight-red" }, [
            s("span", { staticClass: "highlight-red-text" }, [
              t._v("2 or fewer."),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("span", { staticClass: "highlight-red" }, [
            s("span", { staticClass: "highlight-red-text" }, [
              t._v("more than 1 webhooks."),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("span", { staticClass: "highlight-red" }, [
            s("span", { staticClass: "highlight-red-text" }, [
              t._v("1 or fewer."),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("li", [
            s("strong", [t._v("Any IP addresses")]),
            t._v(" used with IP Authentication will be "),
            s("span", { staticClass: "highlight-red" }, [
              s("span", { staticClass: "highlight-red-text" }, [
                t._v("deleted."),
              ]),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("li", [
            s("strong", [t._v("Verified Senders")]),
            t._v(" will reduce from "),
            s("strong", [t._v("unlimited")]),
            t._v(" to a  "),
            s("span", { staticClass: "highlight-red" }, [
              s("span", { staticClass: "highlight-red-text" }, [
                t._v("maximum of 5."),
              ]),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("li", [
            s("strong", [t._v("The Activity page")]),
            t._v(" will reduce from "),
            s("strong", [t._v("30 days")]),
            t._v(" to "),
            s("span", { staticClass: "highlight-red" }, [
              s("span", { staticClass: "highlight-red-text" }, [
                t._v("5 days"),
              ]),
            ]),
            t._v(" of history.\n        "),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("li", [
            s("strong", [t._v("Phone and chat support")]),
            t._v(" will "),
            s("span", { staticClass: "highlight-red" }, [
              s("span", { staticClass: "highlight-red-text" }, [
                t._v("no longer be available."),
              ]),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("li", [
            s("strong", [t._v("A daily limit")]),
            t._v(" of "),
            s("span", { staticClass: "highlight-red" }, [
              s("span", { staticClass: "highlight-red-text" }, [
                t._v("200 emails"),
              ]),
            ]),
            t._v(" will apply.\n        "),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("li", [
            s("strong", [t._v("Email archiving and SMS messaging")]),
            t._v(" will "),
            s("span", { staticClass: "highlight-red" }, [
              s("span", { staticClass: "highlight-red-text" }, [
                t._v("no longer be available."),
              ]),
            ]),
          ]);
        },
      ];
    function Xn(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function Qn(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Xn(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : Xn(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var qn = {
        name: "DowngradeConfirmationSplash",
        props: { isActive: { type: Boolean, default: !1 } },
        data: function () {
          return { approveText: "", isApproved: !1, fadeIn: !1 };
        },
        computed: Qn(
          Qn(
            {},
            Object(T["c"])({
              planMetadata: ct.getters.GET_PLAN_METADATA,
              selectedPlan: ct.getters.GET_SELECTED_PLAN,
              planTiers: ct.getters.GET_PLAN_TIERS,
              address: ft.getters.GET_ADDRESS,
              VATNumber: ft.getters.GET_VAT_NUMBER,
              currentPlan: ct.getters.GET_CURRENT_PLAN,
            }),
          ),
          {},
          {
            featureList: function () {
              return (
                console.log(this.planMetadata.verified_sender_total),
                console.log(this.planMetadata.team_member_total),
                this.planMetadata.verified_sender_total > 5
                  ? 1
                  : this.planMetadata.team_member_total > 2
                    ? 2
                    : this.planMetadata.webhook_total > 1
                      ? 3
                      : 0
              );
            },
          },
        ),
        methods: Qn(
          Qn(
            Qn(
              {},
              Object(T["d"])({
                approveDowngrade: ct.mutations.APPROVE_DOWNGRADE,
                setPlanName: ft.mutations.SET_PLAN_NAME,
                setShowConfirmation: ft.mutations.SET_SHOW_CONFIRMATION,
                setDowngradeToFreeClicked:
                  ct.mutations.SET_DOWNGRADE_TO_FREE_CLICKED,
                selectPlan: ct.mutations.SELECT_PLAN,
              }),
            ),
            Object(T["b"])({ ccardCheckout: ft.actions.CCARD_CHECKOUT }),
          ),
          {},
          {
            backButtonClick: function () {
              var t = this;
              (this.selectPlan(this.currentPlan),
                this.$router.go(-1),
                setTimeout(function () {
                  t.setDowngradeToFreeClicked(!1);
                }, 100));
            },
            downgradeClick: function () {
              var t = this;
              if ("approve" == this.approveText.toLowerCase()) {
                var e = {
                  company: this.address.company,
                  phone: this.address.phone,
                  line1: this.address.street,
                  line2: this.address.line2,
                  city: this.address.city,
                  state: this.address.region,
                  zip: this.address.postcode,
                  country: this.address.country,
                };
                this.ccardCheckout({
                  plan_id: 700,
                  billing_address: e,
                  vat_number: this.VATNumber,
                }).then(
                  function () {
                    ((t.isApproved = !0),
                      setTimeout(function () {
                        (t.approveDowngrade(), t.setShowConfirmation(!0));
                      }, 300));
                  },
                  function (t) {
                    console.log("Error: " + t);
                  },
                );
              }
            },
            goToVerifiedSenderClick: function () {
              window.location = "/sending/verified_senders/";
            },
            goToTeamMembersClick: function () {
              window.location = "/account/team";
            },
            goToWebhooksClick: function () {
              window.location = "/settings/webhooks";
            },
          },
        ),
        mounted: function () {
          var t = this;
          this.isActive &&
            setTimeout(function () {
              t.fadeIn = !0;
            }, 200);
        },
        watch: {
          isActive: function (t) {
            var e = this;
            t
              ? setTimeout(function () {
                  e.fadeIn = !0;
                }, 200)
              : (this.fadeIn = !1);
          },
        },
      },
      Jn = qn,
      Zn = (s("d8c0"), Object(b["a"])(Jn, Wn, Kn, !1, null, "bfb3ada6", null)),
      ti = Zn.exports;
    function ei(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function si(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ei(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : ei(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var ai = {
        name: "ConfirmationPage",
        components: {
          PageHeader: Te,
          DisplayMessage: xe,
          CheckoutInfo: Dn,
          CheckoutSummary: xn,
          AjaxLoadingSpinner: De,
          CheckoutConfirmationSplash: zn,
          DowngradeConfirmationSplash: ti,
        },
        data: function () {
          return {};
        },
        computed: si(
          si(
            {},
            Object(T["c"])({
              plans: ct.getters.GET_PLAN_LIST,
              showConfirmation: ft.getters.GET_SHOW_CONFIRMATION,
              selectedPlan: ct.getters.GET_SELECTED_PLAN,
              downgradeApproved: ct.getters.GET_DOWNGRADE_APPROVED,
              downgradeToFreeClicked: ct.getters.GET_DOWNGRADE_TO_FREE_CLICKED,
            }),
          ),
          {},
          {
            invalidInput: function () {
              return !0;
            },
            showDowngradeConfirmation: function () {
              return !(!this.downgradeToFreeClicked || this.downgradeApproved);
            },
          },
        ),
        methods: si(
          si(
            {},
            Object(T["d"])({
              setValidationErrors: ft.mutations.SET_VALIDATION_ERRORS,
            }),
          ),
          {},
          {
            backButtonClick: function () {
              this.$router.go(-1);
            },
          },
        ),
        mounted: function () {
          (this.setValidationErrors({}),
            this.$nextTick(function () {
              window.scrollTo({ top: 0 });
            }));
        },
      },
      ni = ai,
      ii = Object(b["a"])(ni, ca, la, !1, null, null, null),
      ri = ii.exports,
      oi = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { attrs: { id: "updatebilling" } },
          [
            s("DisplayMessage"),
            s(
              "section",
              { staticClass: "sg-feature" },
              [
                s("PageHeader", [
                  s("span", { staticClass: "title-icon" }, [
                    s(
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
                        s(
                          "linearGradient",
                          {
                            attrs: {
                              id: "a",
                              gradientUnits: "userSpaceOnUse",
                              x1: "17.0952",
                              x2: "17.0952",
                              y1: ".13562",
                              y2: "34.1356",
                            },
                          },
                          [
                            s("stop", {
                              attrs: { offset: "0", "stop-color": "#82d868" },
                            }),
                            s("stop", {
                              attrs: { offset: "1", "stop-color": "#62b560" },
                            }),
                          ],
                          1,
                        ),
                        s("rect", {
                          attrs: {
                            fill: "url(#a)",
                            height: "34",
                            rx: "5",
                            width: "34",
                            x: ".095215",
                            y: ".13562",
                          },
                        }),
                        s(
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
                            s("path", {
                              attrs: {
                                d: "m25.4409 25.2606c0 .3315-.1317.6495-.3661.8839s-.5524.3661-.8839.3661h-13.75c-.3315 0-.64945-.1317-.88387-.3661s-.36611-.5524-.36611-.8839v-16.24998c0-.33152.13169-.64946.36611-.88388s.55237-.36612.88387-.36612h8.8575c.3313.00007.649.13165.8834.36583l4.8933 4.89335c.2342.2343.3657.552.3658.8833z",
                              },
                            }),
                            s("path", {
                              attrs: {
                                d: "m25.4409 14.0106h-5c-.3315 0-.6494-.1317-.8839-.3661-.2344-.2344-.3661-.5524-.3661-.8839v-4.99998",
                              },
                            }),
                            s("path", {
                              attrs: {
                                d: "m12.4826 16.7973c.1805.237.4154.4271.6849.554.2696.1269.5657.187.8634.1752.9492 0 1.7192-.5775 1.7192-1.2892s-.7675-1.2883-1.7158-1.2883c-.9484 0-1.7184-.5775-1.7184-1.29s.77-1.2892 1.7184-1.2892c.2977-.0121.5939.0479.8635.1749.2695.1269.5045.3171.6848.5543",
                              },
                            }),
                            s("path", {
                              attrs: { d: "m14.0342 17.5265v.8592" },
                            }),
                            s("path", {
                              attrs: { d: "m14.0342 11.5106v.8592" },
                            }),
                            s("path", { attrs: { d: "m17.3159 19.6356h5" } }),
                            s("path", {
                              attrs: { d: "m12.9409 23.3856h9.375" },
                            }),
                          ],
                        ),
                      ],
                      1,
                    ),
                  ]),
                  t._v("\n      Account Billing & Invoices\n      "),
                  s(
                    "p",
                    { attrs: { slot: "afterHeader" }, slot: "afterHeader" },
                    [
                      t._v(
                        "\n        On this page you can edit your billing settings and download past invoices.\n      ",
                      ),
                    ],
                  ),
                ]),
                t.isInitialised
                  ? s("div", { staticClass: "page-contents" }, [
                      t.allowExtend
                        ? s(
                            "div",
                            { staticClass: "billing-sections" },
                            [
                              s("BillingSubscription", {
                                staticClass: "billing-section",
                              }),
                              s("BillingDetails", {
                                staticClass: "billing-section",
                              }),
                              s("BillingEmail", {
                                staticClass: "billing-section",
                              }),
                            ],
                            1,
                          )
                        : t._e(),
                      s(
                        "div",
                        {
                          staticClass: "card updatebilling-history",
                          attrs: { id: "history" },
                        },
                        [
                          s("Invoices"),
                          1 != t.subscription.billing_period
                            ? s("ExtraServiceDescription")
                            : t._e(),
                        ],
                        1,
                      ),
                    ])
                  : t._e(),
              ],
              1,
            ),
            s("UpdateEmailPopup"),
            s("ExtraContactsPopup"),
            t.isInitialised ? s("UpdatePaymentMethodPopup") : t._e(),
            s("AjaxLoadingSpinner"),
          ],
          1,
        );
      },
      ci = [],
      li = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass: "card box-billing update-billing box-subscription",
            class: "subscription-" + t.subscription.status,
          },
          [
            t.subscription.has_scheduled_changes
              ? s("div", { staticClass: "billing-sub-grid" }, [
                  t.scheduledPlan.number_of_relays
                    ? s(
                        "h4",
                        { staticClass: "card-title subscription-title" },
                        [t._v("Downgrade Scheduled")],
                      )
                    : s(
                        "h4",
                        { staticClass: "card-title subscription-title" },
                        [t._v("Upgrade Scheduled")],
                      ),
                  t.scheduledPlan.number_of_relays
                    ? s("p", { attrs: { id: "text" } }, [
                        t._v(
                          "\n      Your plan will be downgraded to the\n      ",
                        ),
                        1 === t.scheduledPlan.duration
                          ? s("span", [t._v("Monthly")])
                          : t._e(),
                        3 === t.scheduledPlan.duration
                          ? s("span", [t._v("Quarterly")])
                          : t._e(),
                        12 === t.scheduledPlan.duration
                          ? s("span", [t._v("Annual")])
                          : t._e(),
                        t._v(
                          "\n      " +
                            t._s(
                              t.scheduledPlan.number_of_relays
                                .toFixed(0)
                                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
                            ) +
                            "\n      emails/month plan at the end of your billing cycle (",
                        ),
                        s("span", { staticClass: "nowrap" }, [
                          t._v(t._s(t.subscriptionRenewDate)),
                        ]),
                        t._v(").\n    "),
                      ])
                    : s("p", { attrs: { id: "text" } }, [
                        t._v(
                          "\n      Your plan will be upgraded at the end of your billing cycle (",
                        ),
                        s("span", { staticClass: "nowrap" }, [
                          t._v(t._s(t.subscriptionRenewDate)),
                        ]),
                        t._v(").\n    "),
                      ]),
                  s("div", { staticClass: "grid-button-group" }, [
                    s(
                      "button",
                      {
                        staticClass: "btn blue",
                        on: {
                          click: function (e) {
                            return t.cancelDowngrade();
                          },
                        },
                      },
                      [
                        t.scheduledPlan.number_of_relays
                          ? s("span", [t._v("Cancel Downgrade")])
                          : s("span", [t._v("Cancel Upgrade")]),
                      ],
                    ),
                    t.errorMessage
                      ? s("div", { staticClass: "error-message-container" }, [
                          s("div", { staticClass: "error-message" }, [
                            t._v(t._s(t.errorMessage)),
                          ]),
                        ])
                      : t._e(),
                  ]),
                ])
              : 0 != t.subscription.plan_amount ||
                  ("non_renewing" != t.subscription.status &&
                    "cancelled" != t.subscription.status)
                ? t.accountExpired
                  ? s("div", { staticClass: "billing-sub-grid" }, [
                      s(
                        "h4",
                        { staticClass: "card-title subscription-title" },
                        [t._v("Account Expired")],
                      ),
                      s("p", { attrs: { id: "text" } }, [
                        t._v(
                          "\n      Reactivate your subscription for\n      " +
                            t._s(t.currencyPrefix) +
                            t._s(t.paymentDuePrice) +
                            " (includes unpaid invoices from the past 12 months).\n      Your new subscription will start today and your billing details will be used for payment.\n    ",
                        ),
                      ]),
                      s("div", { staticClass: "grid-button-group" }, [
                        s(
                          "button",
                          {
                            staticClass: "btn blue",
                            on: {
                              click: function (e) {
                                return t.reactivateSubscriptionClick();
                              },
                            },
                          },
                          [t._v("\n        Reactivate subscription\n      ")],
                        ),
                        t.errorMessage
                          ? s(
                              "div",
                              { staticClass: "error-message-container" },
                              [
                                s("div", { staticClass: "error-message" }, [
                                  t._v(t._s(t.errorMessage)),
                                ]),
                              ],
                            )
                          : t._e(),
                      ]),
                    ])
                  : 0 == t.subscription.plan_amount
                    ? s("div", { staticClass: "billing-sub-grid" }, [
                        s(
                          "h4",
                          { staticClass: "card-title subscription-title" },
                          [t._v("Your Subscription")],
                        ),
                        t._m(0),
                        s("div", { staticClass: "grid-button-group" }, [
                          s(
                            "button",
                            {
                              staticClass: "btn blue btn-upgrade",
                              on: {
                                click: function (e) {
                                  return t.$router.push({
                                    name: "dashboard-changeplan",
                                  });
                                },
                              },
                            },
                            [t._v("\n        View upgrade options\n      ")],
                          ),
                        ]),
                      ])
                    : "non_renewing" == t.subscription.status
                      ? s("div", { staticClass: "billing-sub-grid" }, [
                          s(
                            "h4",
                            { staticClass: "card-title subscription-title" },
                            [t._v("Your Subscription")],
                          ),
                          s("p", { attrs: { id: "text" } }, [
                            t._v("\n      Your\n      "),
                            s("b", [
                              t._v(
                                "\n        " +
                                  t._s(t.currencyPrefix) +
                                  t._s(t.subscriptionPrice) +
                                  "\n        " +
                                  t._s(t.subscriptionPeriod) +
                                  " subscription",
                              ),
                            ]),
                            t._v("\n      will expire on\n      "),
                            s("b", { staticClass: "nowrap" }, [
                              t._v(t._s(t.subscriptionRenewDate)),
                            ]),
                            s("span", [t._v(".")]),
                          ]),
                          s("div", { staticClass: "grid-button-group" }, [
                            s(
                              "button",
                              {
                                staticClass: "btn blue",
                                on: {
                                  click: function (e) {
                                    return t.reactivateSubscriptionClick();
                                  },
                                },
                              },
                              [t._v("\n        Renew subscription\n      ")],
                            ),
                            t.errorMessage
                              ? s(
                                  "div",
                                  { staticClass: "error-message-container" },
                                  [
                                    s("div", { staticClass: "error-message" }, [
                                      t._v(t._s(t.errorMessage)),
                                    ]),
                                  ],
                                )
                              : t._e(),
                          ]),
                        ])
                      : "cancelled" == t.subscription.status
                        ? s("div", { staticClass: "billing-sub-grid" }, [
                            s(
                              "h4",
                              { staticClass: "card-title subscription-title" },
                              [t._v("Reactivate Subscription")],
                            ),
                            s("p", { attrs: { id: "text" } }, [
                              t._v(
                                "\n      Reactivate your subscription for\n      " +
                                  t._s(t.currencyPrefix) +
                                  t._s(t.paymentDuePrice) +
                                  " (includes unpaid invoices from the past 12 months).\n      Your new subscription will start today and your billing details will be used for payment.\n    ",
                              ),
                            ]),
                            s("div", { staticClass: "grid-button-group" }, [
                              s(
                                "button",
                                {
                                  staticClass: "btn blue",
                                  on: {
                                    click: function (e) {
                                      return t.reactivateSubscriptionClick();
                                    },
                                  },
                                },
                                [
                                  t._v(
                                    "\n        Reactivate subscription\n      ",
                                  ),
                                ],
                              ),
                              t.errorMessage
                                ? s(
                                    "div",
                                    { staticClass: "error-message-container" },
                                    [
                                      s(
                                        "div",
                                        { staticClass: "error-message" },
                                        [t._v(t._s(t.errorMessage))],
                                      ),
                                    ],
                                  )
                                : t._e(),
                            ]),
                          ])
                        : "future" == t.subscription.status
                          ? s("div", { staticClass: "billing-sub-grid" }, [
                              s(
                                "h4",
                                {
                                  staticClass: "card-title subscription-title",
                                },
                                [t._v("Your Plan")],
                              ),
                              s("p", { attrs: { id: "text" } }, [
                                s("b", [
                                  t._v(
                                    "\n        " +
                                      t._s(t.currencyPrefix) +
                                      t._s(t.subscriptionPrice) +
                                      " USD \n        " +
                                      t._s(t.subscriptionPeriod) +
                                      " subscription",
                                  ),
                                ]),
                              ]),
                              s("div", { staticClass: "grid-button-group" }, [
                                s(
                                  "button",
                                  {
                                    staticClass: "btn blue",
                                    on: {
                                      click: function (e) {
                                        return t.$router.push({
                                          name: "dashboard-changeplan",
                                        });
                                      },
                                    },
                                  },
                                  [
                                    t._v(
                                      "\n        Manage subscription\n      ",
                                    ),
                                  ],
                                ),
                              ]),
                            ])
                          : t.subscription.latest_payment_unpaid
                            ? s("div", { staticClass: "billing-sub-grid" }, [
                                s(
                                  "h4",
                                  {
                                    staticClass:
                                      "card-title subscription-title",
                                  },
                                  [t._v("Your Plan")],
                                ),
                                t.subscription.current_term_end <
                                Math.floor(Date.now() / 1e3) + 1728e3
                                  ? s("p", { attrs: { id: "text" } }, [
                                      t._v("\n      Your\n      "),
                                      s("b", [
                                        t._v(
                                          "\n        " +
                                            t._s(t.currencyPrefix) +
                                            t._s(t.subscriptionPrice) +
                                            " USD \n        " +
                                            t._s(t.subscriptionPeriod) +
                                            " subscription",
                                        ),
                                      ]),
                                      t._v("\n      is due.\n    "),
                                    ])
                                  : s("p", { attrs: { id: "text" } }, [
                                      t._v("\n      Your\n      "),
                                      s("b", [
                                        t._v(
                                          "\n        " +
                                            t._s(t.currencyPrefix) +
                                            t._s(t.subscriptionPrice) +
                                            "\n        " +
                                            t._s(t.subscriptionPeriod) +
                                            " subscription",
                                        ),
                                      ]),
                                      t._v("\n      will renew on\n      "),
                                      s("b", { staticClass: "nowrap" }, [
                                        t._v(
                                          t._s(
                                            t.subscriptionRenewDateWithAdvancedPayment,
                                          ),
                                        ),
                                      ]),
                                      s("span", [t._v(".")]),
                                    ]),
                                "off" == t.subscription.auto_collection &&
                                "" != t.paymentMethod &&
                                "bank_transfer" != t.paymentMethod
                                  ? s(
                                      "div",
                                      {
                                        staticClass:
                                          "is-open indicators-filter filter-toggler",
                                      },
                                      [
                                        s("div", { staticClass: "checker" }, [
                                          s(
                                            "span",
                                            {
                                              staticClass: "checker-box",
                                              class: { checked: t.autoCollect },
                                            },
                                            [
                                              s("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: t.autoCollect,
                                                    expression: "autoCollect",
                                                  },
                                                ],
                                                attrs: { type: "checkbox" },
                                                domProps: {
                                                  checked: Array.isArray(
                                                    t.autoCollect,
                                                  )
                                                    ? t._i(
                                                        t.autoCollect,
                                                        null,
                                                      ) > -1
                                                    : t.autoCollect,
                                                },
                                                on: {
                                                  change: function (e) {
                                                    var s = t.autoCollect,
                                                      a = e.target,
                                                      n = !!a.checked;
                                                    if (Array.isArray(s)) {
                                                      var i = null,
                                                        r = t._i(s, i);
                                                      a.checked
                                                        ? r < 0 &&
                                                          (t.autoCollect =
                                                            s.concat([i]))
                                                        : r > -1 &&
                                                          (t.autoCollect = s
                                                            .slice(0, r)
                                                            .concat(
                                                              s.slice(r + 1),
                                                            ));
                                                    } else t.autoCollect = n;
                                                  },
                                                },
                                              }),
                                            ],
                                          ),
                                        ]),
                                        s(
                                          "span",
                                          {
                                            staticClass: "inline-checkbox-desc",
                                            on: {
                                              click: function (e) {
                                                t.autoCollect = !t.autoCollect;
                                              },
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n        Enable auto-collection\n      ",
                                            ),
                                          ],
                                        ),
                                      ],
                                    )
                                  : t._e(),
                                "off" == t.subscription.auto_collection &&
                                "" != t.paymentMethod &&
                                "bank_transfer" != t.paymentMethod
                                  ? s(
                                      "div",
                                      {
                                        staticClass:
                                          "tooltip-autocollection-container",
                                      },
                                      [
                                        t._m(1),
                                        s(
                                          "div",
                                          {
                                            staticClass:
                                              "tooltip-autocollection-icon",
                                          },
                                          [t._v("i")],
                                        ),
                                      ],
                                    )
                                  : t._e(),
                                "off" == t.subscription.auto_collection &&
                                "" == t.paymentMethod &&
                                "bank_transfer" != t.paymentMethod
                                  ? s("div", { staticClass: "renew-info" }, [
                                      t._v(
                                        "\n      Please enter your payment method (to the right) before proceeding with pay now.\n    ",
                                      ),
                                    ])
                                  : t._e(),
                                s("div", { staticClass: "grid-button-group" }, [
                                  "bank_transfer" == t.paymentMethod ||
                                  t.directDebitInProgress
                                    ? t._e()
                                    : s(
                                        "button",
                                        {
                                          staticClass: "btn blue",
                                          class: {
                                            inactive: "" == t.paymentMethod,
                                          },
                                          on: {
                                            click: function (e) {
                                              return t.payNowClick();
                                            },
                                          },
                                        },
                                        [
                                          t._v(
                                            "\n        Pay due invoice now\n      ",
                                          ),
                                        ],
                                      ),
                                  t.errorMessage
                                    ? s(
                                        "div",
                                        {
                                          staticClass:
                                            "error-message-container",
                                        },
                                        [
                                          s(
                                            "div",
                                            { staticClass: "error-message" },
                                            [t._v(t._s(t.errorMessage))],
                                          ),
                                        ],
                                      )
                                    : t._e(),
                                ]),
                              ])
                            : s("div", { staticClass: "billing-sub-grid" }, [
                                s(
                                  "h4",
                                  {
                                    staticClass:
                                      "card-title subscription-title",
                                  },
                                  [t._v("Your Plan")],
                                ),
                                s("p", { attrs: { id: "text" } }, [
                                  t._v("\n      Your\n      "),
                                  s("b", [
                                    t._v(
                                      "\n        " +
                                        t._s(t.currencyPrefix) +
                                        t._s(t.subscriptionPrice) +
                                        " USD \n        " +
                                        t._s(t.subscriptionPeriod) +
                                        " subscription",
                                    ),
                                  ]),
                                  t._v("\n      will renew on\n      "),
                                  s("b", { staticClass: "nowrap" }, [
                                    t._v(
                                      t._s(
                                        t.subscriptionRenewDateWithAdvancedPayment,
                                      ),
                                    ),
                                  ]),
                                  s("span", [t._v(".")]),
                                  "off" == t.subscription.auto_collection &&
                                  "" != t.paymentMethod &&
                                  "bank_transfer" != t.paymentMethod
                                    ? s("span", [
                                        t._v(
                                          "\n        You'll receive an invoice around 20 days before your expiry date.\n      ",
                                        ),
                                      ])
                                    : t._e(),
                                  s("br"),
                                  "off" == t.subscription.auto_collection &&
                                  "" != t.paymentMethod &&
                                  "bank_transfer" != t.paymentMethod
                                    ? s(
                                        "button",
                                        {
                                          staticClass: "button-link",
                                          staticStyle: { left: "180px" },
                                          on: {
                                            click: function (e) {
                                              return t.turnAutoRenewal();
                                            },
                                          },
                                        },
                                        [
                                          t._v(
                                            "\n        Enable Automatic Renewal\n      ",
                                          ),
                                        ],
                                      )
                                    : t._e(),
                                ]),
                                s("div", { staticClass: "grid-button-group" }, [
                                  s(
                                    "button",
                                    {
                                      staticClass: "btn blue",
                                      on: {
                                        click: function (e) {
                                          return t.$router.push({
                                            name: "dashboard-changeplan",
                                          });
                                        },
                                      },
                                    },
                                    [
                                      t._v(
                                        "\n        Manage subscription\n      ",
                                      ),
                                    ],
                                  ),
                                ]),
                              ])
                : s("div", { staticClass: "billing-sub-grid" }, [
                    s("h4", { staticClass: "card-title subscription-title" }, [
                      t._v("Reopen Account"),
                    ]),
                    s("p", { attrs: { id: "text" } }, [
                      t._v("\n      You are currently on the free plan.\n    "),
                    ]),
                    s("div", { staticClass: "grid-button-group" }, [
                      s(
                        "button",
                        {
                          staticClass: "btn blue",
                          on: {
                            click: function (e) {
                              return t.reactivateSubscriptionClick();
                            },
                          },
                        },
                        [t._v("\n        Reopen account\n      ")],
                      ),
                      t.errorMessage
                        ? s("div", { staticClass: "error-message-container" }, [
                            s("div", { staticClass: "error-message" }, [
                              t._v(t._s(t.errorMessage)),
                            ]),
                          ])
                        : t._e(),
                    ]),
                  ]),
          ],
        );
      },
      ui = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("p", { attrs: { id: "text" } }, [
            t._v("\n      You are currently on the free plan."),
            s("br"),
            s("strong", [t._v("Unlock more sending power:")]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "tooltip-autocollection" }, [
            s("p", [
              t._v(
                "Automatically pay for your subscription and any extra charges when they become due.",
              ),
            ]),
          ]);
        },
      ];
    function di(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function pi(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? di(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : di(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var _i = {
        name: "BillingSubscription",
        data: function () {
          return { autoCollect: !0 };
        },
        computed: pi(
          pi(
            {},
            Object(T["c"])({
              subscription: yt.getters.GET_SUBSCRIPTION,
              currencyPrefix: It.getters.GET_CURRENCY_PREFIX,
              invoiceLimit: yt.getters.GET_INVOICE_LIMIT,
              accountExpired: yt.getters.GET_ACCOUNT_EXPIRED,
              scheduledPlan: yt.getters.GET_SCHEDULED_PLAN,
              errorMessage: yt.getters.GET_POPUP_ERROR_MESSAGE,
              paymentMethod: yt.getters.GET_PAYMENT_METHOD,
              directDebitInProgress: yt.getters.GET_DIRECT_DEBIT_IN_PROGRESS,
            }),
          ),
          {},
          {
            subscriptionPrice: function () {
              return (this.subscription.plan_amount / 100)
                .toFixed(2)
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
            },
            paymentDuePrice: function () {
              var t = this.subscription.total_dues,
                e = 2678400,
                s = e * this.subscription.billing_period;
              return (
                this.subscription.current_term_start + s < Date.now() / 1e3 &&
                  (t += parseInt(this.subscription.plan_amount)),
                (t / 100).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
              );
            },
            subscriptionPeriod: function () {
              return 1 === this.subscription.billing_period
                ? "monthly"
                : 3 === this.subscription.billing_period
                  ? "quarterly"
                  : 12 === this.subscription.billing_period
                    ? "annual"
                    : "";
            },
            subscriptionRenewDate: function () {
              var t = ls.a.unix(this.subscription.current_term_end).utc();
              return t.format("MMMM DD, YYYY z");
            },
            subscriptionRenewDateWithAdvancedPayment: function () {
              var t = this.subscription.current_term_end;
              this.subscription.next_billing_at >
                this.subscription.current_term_end &&
                (t = this.subscription.next_billing_at);
              var e = ls.a.unix(t).utc();
              return e.format("MMMM DD, YYYY z");
            },
          },
        ),
        methods: pi(
          pi(
            pi(
              {},
              Object(T["d"])({
                setSuccessMessage: B.mutations.SET_SUCCESS_MESSAGE,
              }),
            ),
            Object(T["b"])({
              reactivateSubscription: yt.actions.REACTIVATE_SUBSCRIPTION,
              fetchBillingDetails: yt.actions.FETCH_BILLING_DETAILS,
              cancelDowngrade: yt.actions.CANCEL_DOWNGRADE,
              payNow: yt.actions.PAY_NOW,
              turnAutoRenewal: yt.actions.TURN_AUTO_RENEWAL,
            }),
          ),
          {},
          {
            reactivateSubscriptionClick: function () {
              this.reactivateSubscription();
            },
            payNowClick: function () {
              "" != this.paymentMethod &&
                this.payNow({ auto_collection: this.autoCollect });
            },
          },
        ),
      },
      mi = _i,
      hi = (s("5849"), Object(b["a"])(mi, li, ui, !1, null, "5b08d972", null)),
      fi = hi.exports,
      Ei = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass: "card box-billing other-update-billing",
            class: {
              "is-expiring": "expiring" == t.ccard.status,
              "is-expired": "expired" == t.ccard.status,
            },
            staticStyle: { "min-height": "110px" },
          },
          [
            s(
              "h4",
              {
                staticClass: "card-title payment-method-title",
                class: t.ccard.card_type,
              },
              [t._v("\n    Payment Method\n  ")],
            ),
            s(
              "p",
              {
                class: [
                  "paypal_express_checkout" == t.paymentMethod
                    ? "paypal"
                    : t.ccard.card_type,
                ],
                attrs: { id: "text" },
              },
              [
                "" == t.paymentMethod
                  ? s("span", [t._v("Payment method isn't set up.")])
                  : t._e(),
                "" != t.paymentMethod
                  ? s("span", [
                      t._v("You're setup to pay via this method:"),
                      s("br"),
                    ])
                  : t._e(),
                "card" == t.paymentMethod
                  ? s(
                      "span",
                      { class: { "payment-card": t.ccard.card_type } },
                      [
                        t.ccard.card_type
                          ? s("span", { staticClass: "card-type" }, [
                              t._v("Card ending: "),
                            ])
                          : t._e(),
                        t.ccard.last4
                          ? s("b", [t._v(t._s(t.ccard.last4))])
                          : t._e(),
                        s("span", { staticClass: "card-exp" }, [t._v("Exp: ")]),
                        s("b", [
                          t._v(
                            t._s(("0" + t.ccard.expiry_month).slice(-2)) +
                              "/" +
                              t._s(t.ccard.expiry_year.toString().slice(-2)),
                          ),
                        ]),
                        t.ccard.card_type && t.ccard.last4
                          ? t._e()
                          : s("span", [t._v("Credit Card")]),
                      ],
                    )
                  : t._e(),
                "paypal_express_checkout" == t.paymentMethod
                  ? s("span", [
                      s("span", { staticClass: "card-type" }, [
                        t._v("PayPal: "),
                      ]),
                      s("b", [t._v(t._s(t.paypalEmail))]),
                    ])
                  : t._e(),
                "direct_debit" == t.paymentMethod
                  ? s("span", [
                      t._m(0),
                      s("b", { staticClass: "icon-direct-debit" }),
                    ])
                  : t._e(),
                "bank_transfer" == t.paymentMethod
                  ? s("span", [
                      s("span", { staticClass: "card-type" }, [
                        t._v("Bank Transfer"),
                      ]),
                      s("b", { staticClass: "icon-bank-transfer" }),
                    ])
                  : t._e(),
              ],
            ),
            s("div", { staticClass: "grid-button-group" }, [
              s(
                "button",
                {
                  staticClass: "btn blue",
                  on: { click: t.updatePaymentMethodClick },
                },
                [t._v("\n      Manage payment method\n    ")],
              ),
            ]),
          ],
        );
      },
      vi = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("span", { staticClass: "card-type" }, [
            s("b", [t._v("Direct Debit")]),
          ]);
        },
      ];
    function bi(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function gi(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? bi(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : bi(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var Ci = {
        name: "BillingDetail",
        mixins: [$e],
        computed: gi(
          {},
          Object(T["c"])({
            ccard: yt.getters.GET_CCARD,
            paymentMethod: yt.getters.GET_PAYMENT_METHOD,
            paypalEmail: yt.getters.GET_PAYPAL_EMAIL,
          }),
        ),
        methods: gi(
          gi(
            {},
            Object(T["d"])({
              setPopupErrorMessage: yt.mutations.SET_POPUP_ERROR_MESSAGE,
            }),
          ),
          {},
          {
            updatePaymentMethodClick: function () {
              (this.setPopupErrorMessage(""),
                this.$eventBus.$emit($e.OPENED, "UpdatePaymentMethodPopup"));
            },
          },
        ),
      },
      Ti = Ci,
      Oi = (s("de2c"), Object(b["a"])(Ti, Ei, vi, !1, null, null, null)),
      yi = Oi.exports,
      Pi = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "card box-billing update-billing" }, [
          s("h4", { staticClass: "card-title email-title" }, [
            t._v("Contact Details"),
          ]),
          s("p", { attrs: { id: "text" } }, [
            t._v("\n    We'll send your invoices to:"),
            s("br"),
            s("b", [t._v(t._s(t.customer.email))]),
          ]),
          s("div", { staticClass: "grid-button-group" }, [
            s(
              "button",
              { staticClass: "btn blue", on: { click: t.updateEmailClick } },
              [
                t._v("\n      Change "),
                s("span", { staticClass: "screen-l" }, [t._v("contact ")]),
                t._v("details\n    "),
              ],
            ),
            s(
              "button",
              {
                staticClass: "btn-outlined",
                on: { click: t.extraContactsClick },
              },
              [t._v("\n      Extra contacts\n    ")],
            ),
          ]),
        ]);
      },
      Si = [];
    function Ai(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function Ni(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Ai(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : Ai(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var wi = {
        name: "BillingEmail",
        mixins: [$e],
        computed: Ni({}, Object(T["c"])({ customer: yt.getters.GET_CUSTOMER })),
        methods: Ni(
          Ni(
            {},
            Object(T["d"])({
              setPopupErrorMessage: yt.mutations.SET_POPUP_ERROR_MESSAGE,
            }),
          ),
          {},
          {
            updateEmailClick: function () {
              (this.setPopupErrorMessage(""),
                this.$eventBus.$emit($e.OPENED, "UpdateEmailPopup"));
            },
            extraContactsClick: function () {
              (this.setPopupErrorMessage(""),
                this.$eventBus.$emit($e.OPENED, "ExtraContactsPopup"));
            },
          },
        ),
      },
      Di = wi,
      Ri = Object(b["a"])(Di, Pi, Si, !1, null, null, null),
      Ii = Ri.exports,
      ji = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", [
          s(
            "div",
            {
              staticClass: "card-title",
              class: { "has-credit-info": t.credits > 0 },
            },
            [
              s("h4", { staticClass: "invoices-title" }, [
                t._v("Your Invoices"),
              ]),
              s("div", { staticClass: "invoice-dropdown-wrapper" }, [
                s(
                  "select",
                  {
                    staticClass: "invoice-dropdown",
                    on: {
                      change: function (e) {
                        return t.invoiceCountChange(e);
                      },
                    },
                  },
                  [
                    s("option", { attrs: { value: "5" } }, [
                      t._v("Display 5 latest invoices"),
                    ]),
                    s("option", { attrs: { value: "10" } }, [
                      t._v("Display 10 latest invoices"),
                    ]),
                    s("option", { attrs: { value: "30" } }, [
                      t._v("Display 30 latest invoices"),
                    ]),
                    s("option", { attrs: { value: "60" } }, [
                      t._v("Display 60 latest invoices"),
                    ]),
                  ],
                ),
                s("i", { staticClass: "fa fa-angle-down" }),
              ]),
            ],
          ),
          t.credits > 0
            ? s("div", { staticClass: "bar-notice special is-visible" }, [
                t._m(0),
                s("div", { staticClass: "notice-message-content" }, [
                  s("span", { staticClass: "notice-message-title" }, [
                    t._v("You have "),
                    s("span", { staticClass: "notice-credit-amount" }, [
                      t._v("$"),
                      s("span", { staticClass: "credit-balance-value" }, [
                        t._v(t._s(t.formatPrice(t.credits))),
                      ]),
                    ]),
                    t._v(" in credit!"),
                  ]),
                  s("span", { staticClass: "notice-message-text" }, [
                    t._v("This credit balance will go toward future invoices."),
                  ]),
                ]),
              ])
            : t._e(),
          s("table", { staticClass: "table-striped table-hover" }, [
            t._m(1),
            t.invoices.length > 0
              ? s(
                  "tbody",
                  [
                    t._l(t.invoices, function (e, a) {
                      return s(
                        "tr",
                        {
                          key: e.id,
                          class: t.getOddOrEven(a),
                          attrs: { role: "row" },
                        },
                        [
                          s("td", { staticClass: "invoice-date" }, [
                            t._v(t._s(t.formatDate(e.date))),
                          ]),
                          s("td", { staticClass: "invoice-status" }, [
                            s(
                              "span",
                              {
                                staticClass: "status-display",
                                class: e.status,
                              },
                              [t._v(t._s(e.status.replace(/_/g, " ")))],
                            ),
                          ]),
                          s("td", { staticClass: "invoice-amount" }, [
                            s(
                              "span",
                              { staticClass: "invoice-amount-content" },
                              [
                                s("span", [
                                  t._v(
                                    t._s(t.currencyPrefix) +
                                      t._s(t.formatPrice(t.displayPayment(e))) +
                                      " USD ",
                                  ),
                                ]),
                                e.credits_applied > 0
                                  ? s("span", { staticClass: "block-credit" }, [
                                      s(
                                        "span",
                                        { staticClass: "block-credit-value" },
                                        [
                                          t._v(
                                            "\n                " +
                                              t._s(t.currencyPrefix) +
                                              t._s(
                                                t.formatPrice(
                                                  e.credits_applied,
                                                ),
                                              ) +
                                              " USD \n              ",
                                          ),
                                        ],
                                      ),
                                      t._v(" credit used\n            "),
                                    ])
                                  : t._e(),
                              ],
                            ),
                          ]),
                          s("td", { staticClass: "invoice-number" }, [
                            s(
                              "a",
                              {
                                on: {
                                  click: function (s) {
                                    return t.invoiceOpenClick(e.id);
                                  },
                                },
                              },
                              [t._v(t._s(e.id))],
                            ),
                          ]),
                          s("td", { staticClass: "download" }, [
                            s(
                              "a",
                              {
                                on: {
                                  click: function (s) {
                                    return t.invoiceDownloadClick(e.id);
                                  },
                                },
                              },
                              [t._v("Download")],
                            ),
                            s("div", {
                              staticClass: "desktop-hide modal-actions-overlay",
                            }),
                            s("div", {
                              staticClass: "modal-actions-trigger desktop-hide",
                            }),
                            s(
                              "div",
                              { staticClass: "modal-actions desktop-hide" },
                              [
                                s(
                                  "div",
                                  { staticClass: "modal-actions-name" },
                                  [t._v(t._s(e.id))],
                                ),
                                s(
                                  "div",
                                  { staticClass: "modal-actions-edit" },
                                  [
                                    s(
                                      "a",
                                      {
                                        on: {
                                          click: function (s) {
                                            return t.invoiceOpenClick(e.id);
                                          },
                                        },
                                      },
                                      [t._v("Open")],
                                    ),
                                  ],
                                ),
                                s(
                                  "div",
                                  { staticClass: "modal-actions-edit" },
                                  [
                                    s(
                                      "a",
                                      {
                                        on: {
                                          click: function (s) {
                                            return t.invoiceDownloadClick(e.id);
                                          },
                                        },
                                      },
                                      [t._v("Download")],
                                    ),
                                  ],
                                ),
                              ],
                            ),
                          ]),
                        ],
                      );
                    }),
                    t.isAjaxActive && t.isInvoiceQuiteRequest && t.nextOffset
                      ? s("tr", { staticClass: "loading" }, [t._m(2)])
                      : t.nextOffset
                        ? s("tr", { staticClass: "loading" }, [
                            s(
                              "td",
                              {
                                staticClass: "load-more load-centered",
                                attrs: { colspan: "100%" },
                              },
                              [
                                s(
                                  "button",
                                  {
                                    staticClass: "btn btn-outlined btn-sm",
                                    attrs: { type: "button" },
                                    on: { click: t.loadMoreInvoicesClick },
                                  },
                                  [
                                    t._v(
                                      "\n            Load More Invoices\n          ",
                                    ),
                                  ],
                                ),
                              ],
                            ),
                          ])
                        : t._e(),
                  ],
                  2,
                )
              : s("tbody", [t._m(3)]),
          ]),
        ]);
      },
      Mi = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("span", { staticClass: "notice-icon" }, [
            s("img", {
              attrs: {
                src: "/static/smtp2go_assets/lightbox-popper.png",
                alt: "upgrade successful",
                width: "36",
              },
            }),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("thead", [
            s("tr", { attrs: { role: "row" } }, [
              s("th", [t._v("Date")]),
              s("th", [t._v("Status")]),
              s("th", [t._v("Payment")]),
              s("th", [t._v("Invoice Number")]),
              s("th", [t._v("PDF")]),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "td",
            {
              staticClass: "load-more load-centered",
              attrs: { colspan: "100%" },
            },
            [
              s("div", { staticClass: "loading-spinner" }, [
                s("div", { staticClass: "loader" }, [
                  s("span", { staticClass: "icon-circles" }, [
                    s("span", { staticClass: "dot-circle pending" }),
                    s("span", { staticClass: "dot-circle soft-bounced" }),
                    s("span", { staticClass: "dot-circle hard-bounced" }),
                    s("span", { staticClass: "dot-circle rejected" }),
                    s("span", { staticClass: "dot-circle spam" }),
                    s("span", { staticClass: "dot-circle delivered" }),
                    s("span", { staticClass: "dot-circle unsubscribed" }),
                    s("span", { staticClass: "dot-circle unblocked" }),
                    s("span", { staticClass: "dot-circle opened" }),
                  ]),
                ]),
              ]),
            ],
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("tr", { staticClass: "no-results" }, [
            s("td", { attrs: { colspan: "100%" } }, [
              s("div", { staticClass: "table-blank" }, [
                s("div", { staticClass: "table-blank-content" }, [
                  s("p", [t._v("No invoices found.")]),
                ]),
              ]),
            ]),
          ]);
        },
      ];
    function ki(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function Li(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ki(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : ki(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var Gi = {
        name: "Invoices",
        computed: Li(
          {},
          Object(T["c"])({
            isAjaxActive: B.getters.GET_IS_AJAX_RUNNING,
            isInvoiceQuiteRequest: yt.getters.GET_IS_INVOICE_QUIET_REQUEST,
            invoices: yt.getters.GET_INVOICES,
            invoiceLimit: yt.getters.GET_INVOICE_LIMIT,
            nextOffset: yt.getters.GET_INVOICE_NEXT_OFFSET,
            currencyPrefix: It.getters.GET_CURRENCY_PREFIX,
            currencyCode: It.getters.GET_CURRENCY_CODE,
            credits: yt.getters.GET_CREDITS,
          }),
        ),
        methods: Li(
          Li(
            {},
            Object(T["d"])({ setInvoiceLimit: yt.mutations.SET_INVOICE_LIMIT }),
          ),
          {},
          {
            getOddOrEven: function (t) {
              return t % 2 == 0 ? "odd" : "even";
            },
            formatDate: function (t) {
              var e = ls.a.tz.guess(),
                s = ls.a.unix(t).tz(e);
              return s.format("DD MMM, YYYY");
            },
            formatPrice: function (t) {
              var e = t / 100;
              return e.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
            },
            invoiceCountChange: function (t) {
              this.setInvoiceLimit(parseInt(t.target.value));
              var e = !1;
              this.loadInvoices(e);
            },
            loadMoreInvoicesClick: function () {
              var t = !0;
              this.loadInvoices(t);
            },
            loadInvoices: function (t) {
              this.$store.dispatch(yt.actions.LOAD_INVOICES, {
                invoice_limit: this.invoiceLimit,
                invoice_next_offset: this.nextOffset,
                isQuietRequest: t,
              });
            },
            invoiceOpenClick: function (t) {
              var e = "inline";
              this.invoiceDownload(t, e);
            },
            invoiceDownloadClick: function (t) {
              var e = "attachment";
              this.invoiceDownload(t, e);
            },
            invoiceDownload: function (t, e) {
              var s = /SMTP2GO-\d+/g,
                a = t.match(s);
              if (a)
                this.$store
                  .dispatch(yt.actions.DOWNLOAD_INVOICE, {
                    invoice_id: t,
                    disposition_type: e,
                  })
                  .then(function (t) {
                    window.open(t.results.download_url, "_blank");
                  });
              else if ("inline" == e)
                window.open(
                  "https://sites.fastspring.com/smtp2go/order/invoice/" + t,
                  "_blank",
                );
              else {
                var n =
                    "https://sites.fastspring.com/smtp2go/order/invoice/" +
                    t +
                    "/pdf",
                  i = document.createElement("a");
                (i.setAttribute("href", n),
                  i.setAttribute("target", "_blank"),
                  i.click());
              }
            },
            displayPayment: function (t) {
              return t.amount_paid > 0 ? t.amount_paid : t.amount_due;
            },
          },
        ),
      },
      xi = Gi,
      Ui = (s("9cea"), Object(b["a"])(xi, ji, Mi, !1, null, "ed52305e", null)),
      Vi = Ui.exports,
      $i = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: t.isPopupOpen,
                expression: "isPopupOpen",
              },
            ],
            staticClass: "modal-container",
          },
          [
            s("div", {
              staticClass: "modal-overlay",
              on: { click: t.emailPopupCloseClick },
            }),
            s(
              "div",
              {
                staticClass:
                  "modal-card modal-custom update-popup modal-contact-details",
              },
              [
                s(
                  "button",
                  {
                    staticClass: "modal-custom-close modal-close",
                    on: { click: t.emailPopupCloseClick },
                  },
                  [t._v("\n      ×\n    ")],
                ),
                s("h3", [t._v("Update Contact Details")]),
                s("div", { staticClass: "modal-form" }, [
                  s("div", { staticClass: "address-fieldset" }),
                  s("div", { staticClass: "details-row chargebee-field" }, [
                    s("label", { attrs: { for: "email" } }, [
                      t._v("Email Address"),
                    ]),
                    s("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.email,
                          expression: "email",
                        },
                      ],
                      staticClass: "input-email detail-input input-full",
                      attrs: { id: "email", tabindex: "1" },
                      domProps: { value: t.email },
                      on: {
                        input: function (e) {
                          e.target.composing || (t.email = e.target.value);
                        },
                      },
                    }),
                  ]),
                  s("div", { staticClass: "email-description" }, [
                    t._v(
                      "\n        This is where we will send your invoices.\n      ",
                    ),
                  ]),
                  s("hr"),
                  s("div", { staticClass: "details-row chargebee-field" }, [
                    s("label", { staticClass: "chargebee-label" }, [
                      t._v("Name"),
                    ]),
                    s("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.firstname,
                          expression: "firstname",
                        },
                      ],
                      staticClass: "chargebee-input input-half",
                      attrs: {
                        type: "text",
                        placeholder: "First Name",
                        id: "firstname",
                        tabindex: "2",
                      },
                      domProps: { value: t.firstname },
                      on: {
                        input: function (e) {
                          e.target.composing || (t.firstname = e.target.value);
                        },
                      },
                    }),
                    s("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.lastname,
                          expression: "lastname",
                        },
                      ],
                      staticClass: "chargebee-input input-half",
                      attrs: {
                        type: "text",
                        placeholder: "Last Name",
                        id: "lastname",
                        tabindex: "3",
                      },
                      domProps: { value: t.lastname },
                      on: {
                        input: function (e) {
                          e.target.composing || (t.lastname = e.target.value);
                        },
                      },
                    }),
                  ]),
                  s("div", { staticClass: "details-row chargebee-field" }, [
                    s("label", { attrs: { for: "company" } }, [
                      t._v("Company"),
                    ]),
                    s("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.company,
                          expression: "company",
                        },
                      ],
                      staticClass: "input-company detail-input input-full",
                      attrs: {
                        placeholder: "Optional",
                        id: "company",
                        tabindex: "3",
                      },
                      domProps: { value: t.company },
                      on: {
                        input: function (e) {
                          e.target.composing || (t.company = e.target.value);
                        },
                      },
                    }),
                  ]),
                  s("div", { staticClass: "details-row chargebee-field" }, [
                    s("label", { attrs: { for: "phone" } }, [t._v("Phone")]),
                    s("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.phone,
                          expression: "phone",
                        },
                      ],
                      ref: "phoneNumber",
                      staticClass: "input-phone detail-input",
                      attrs: { id: "phone", type: "text", tabindex: "5" },
                      domProps: { value: t.phone },
                      on: {
                        input: function (e) {
                          e.target.composing || (t.phone = e.target.value);
                        },
                      },
                    }),
                    s("hr"),
                    s("div", { staticClass: "details-row chargebee-field" }, [
                      s("label", { attrs: { for: "street" } }, [
                        t._v("Billing Address"),
                      ]),
                      s("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: t.street,
                            expression: "street",
                          },
                        ],
                        staticClass: "input-street detail-input input-large",
                        attrs: {
                          placeholder: "Address",
                          id: "street",
                          tabindex: "6",
                        },
                        domProps: { value: t.street },
                        on: {
                          input: function (e) {
                            e.target.composing || (t.street = e.target.value);
                          },
                        },
                      }),
                      s("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: t.line2,
                            expression: "line2",
                          },
                        ],
                        staticClass: "input-apt detail-input input-small",
                        attrs: {
                          placeholder: "Apt/Suite",
                          id: "appartment",
                          tabindex: "7",
                        },
                        domProps: { value: t.line2 },
                        on: {
                          input: function (e) {
                            e.target.composing || (t.line2 = e.target.value);
                          },
                        },
                      }),
                    ]),
                    s("div", { staticClass: "details-row chargebee-field" }, [
                      s("label", { attrs: { for: "city" } }, [
                        t._v("City & State"),
                      ]),
                      s("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: t.city,
                            expression: "city",
                          },
                        ],
                        staticClass: "input-city detail-input input-half",
                        attrs: {
                          placeholder: "Address",
                          id: "city",
                          tabindex: "8",
                        },
                        domProps: { value: t.city },
                        on: {
                          input: function (e) {
                            e.target.composing || (t.city = e.target.value);
                          },
                        },
                      }),
                      s(
                        "div",
                        { staticClass: "input-state detail-input input-half" },
                        [
                          s("region-select", {
                            attrs: {
                              id: "region",
                              country: t.country,
                              region: t.region,
                              regionName: !0,
                              tabindex: "10",
                            },
                            model: {
                              value: t.region,
                              callback: function (e) {
                                t.region = e;
                              },
                              expression: "region",
                            },
                          }),
                        ],
                        1,
                      ),
                    ]),
                    s("div", { staticClass: "details-row chargebee-field" }, [
                      s("label", { attrs: { for: "postcode" } }, [
                        t._v("ZIP/Postcode"),
                      ]),
                      s("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: t.postcode,
                            expression: "postcode",
                          },
                        ],
                        staticClass: "input-postcode detail-input input-half",
                        attrs: {
                          placeholder: "12345",
                          id: "postcode",
                          tabindex: "11",
                        },
                        domProps: { value: t.postcode },
                        on: {
                          input: function (e) {
                            e.target.composing || (t.postcode = e.target.value);
                          },
                        },
                      }),
                      s(
                        "div",
                        {
                          staticClass: "input-country detail-input input-half",
                        },
                        [
                          s("country-select", {
                            attrs: {
                              id: "country",
                              country: t.country,
                              topCountry: "US",
                              tabindex: "12",
                            },
                            model: {
                              value: t.country,
                              callback: function (e) {
                                t.country = e;
                              },
                              expression: "country",
                            },
                          }),
                        ],
                        1,
                      ),
                    ]),
                    t.EUVATCountries.includes(t.country) || "GB" == t.country
                      ? s(
                          "div",
                          { staticClass: "details-row chargebee-field" },
                          [
                            s("label", { attrs: { for: "vat-number" } }, [
                              t._v("VAT Number"),
                            ]),
                            s("div", { staticClass: "vat-eu-container" }, [
                              s("span", { staticClass: "vat-country-code" }, [
                                t._v(t._s(t.country)),
                              ]),
                              s("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.vatnumber,
                                    expression: "vatnumber",
                                  },
                                ],
                                staticClass:
                                  "input-vat-number detail-input input-full vat-number-eu",
                                attrs: {
                                  id: "vat-number",
                                  placeholder: "Optional",
                                  tabindex: "13",
                                },
                                domProps: { value: t.vatnumber },
                                on: {
                                  input: function (e) {
                                    e.target.composing ||
                                      (t.vatnumber = e.target.value);
                                  },
                                },
                              }),
                            ]),
                            "GB" == t.country
                              ? s("div", { staticClass: "small-description" }, [
                                  t._v(
                                    "\n            Add a VAT number to avoid paying tax on future payments.\n          ",
                                  ),
                                ])
                              : t._e(),
                          ],
                        )
                      : t._e(),
                    "AU" == t.country || "NZ" == t.country
                      ? s(
                          "div",
                          { staticClass: "details-row chargebee-field" },
                          [
                            s("label", { attrs: { for: "vat-number" } }, [
                              t._v("GST Number"),
                            ]),
                            s("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.vatnumber,
                                  expression: "vatnumber",
                                },
                              ],
                              staticClass:
                                "input-vat-number detail-input input-full",
                              attrs: {
                                id: "vat-number",
                                placeholder: "Optional",
                                tabindex: "14",
                              },
                              domProps: { value: t.vatnumber },
                              on: {
                                input: function (e) {
                                  e.target.composing ||
                                    (t.vatnumber = e.target.value);
                                },
                              },
                            }),
                            "AU" == t.country
                              ? s("div", { staticClass: "small-description" }, [
                                  t._v(
                                    "\n            Add a GST number to avoid paying tax on future payments.\n          ",
                                  ),
                                ])
                              : t._e(),
                            "NZ" == t.country
                              ? s("div", { staticClass: "small-description" }, [
                                  t._v(
                                    "\n            Add a GST number to avoid paying tax.\n          ",
                                  ),
                                ])
                              : t._e(),
                          ],
                        )
                      : t._e(),
                  ]),
                ]),
                s(
                  "div",
                  { staticClass: "modal-footer" },
                  [
                    s(
                      "button",
                      {
                        staticClass: "btn blue",
                        class: { "is-saving": t.isSaving },
                        attrs: { tabindex: "15" },
                        on: { click: t.emailUpdateClick },
                      },
                      [
                        t._v("\n        Save changes\n        "),
                        s("div", { staticClass: "is-saving-spinner" }),
                      ],
                    ),
                    s("transition", { attrs: { name: "slide" } }, [
                      t.errorMessage
                        ? s("div", { staticClass: "error-message-container" }, [
                            s("div", { staticClass: "error-message" }, [
                              t._v(t._s(t.errorMessage)),
                            ]),
                          ])
                        : t._e(),
                    ]),
                  ],
                  1,
                ),
              ],
            ),
          ],
        );
      },
      Bi = [];
    function Fi(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function Yi(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Fi(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : Fi(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    a["default"].use(pn.a);
    var Hi = {
        name: "UpdateEmailPopup",
        mixins: [Fe],
        data: function () {
          return {
            intlTelInput: null,
            email: "",
            firstname: "",
            lastname: "",
            company: "",
            phone: "",
            street: "",
            line2: "",
            city: "",
            country: "",
            region: "",
            postcode: "",
            vatnumber: "",
          };
        },
        computed: Yi(
          {},
          Object(T["c"])({
            customer: yt.getters.GET_CUSTOMER,
            errorMessage: yt.getters.GET_POPUP_ERROR_MESSAGE,
            isSaving: yt.getters.GET_POPUP_IS_SAVING,
            EUVATCountries: yt.getters.GET_EU_VAT_COUNTRIES,
            billingDetails: yt.getters.GET_BILLING_DETAILS,
            invoiceLimit: yt.getters.GET_INVOICE_LIMIT,
          }),
        ),
        methods: Yi(
          Yi(
            Yi(
              {},
              Object(T["d"])({
                setErrorMessage: yt.mutations.SET_POPUP_ERROR_MESSAGE,
                setSuccessMessage: B.mutations.SET_SUCCESS_MESSAGE,
              }),
            ),
            Object(T["b"])({
              fetchBillingDetails: yt.actions.FETCH_BILLING_DETAILS,
            }),
          ),
          {},
          {
            emailPopupCloseClick: function () {
              this.$eventBus.$emit($e.CLOSED);
            },
            emailUpdateClick: function () {
              var t = this;
              if (!this.validateEmail())
                return (this.setErrorMessage("Email isn't valid."), !1);
              var e = {
                  email: this.email,
                  first_name: this.firstname,
                  last_name: this.lastname,
                },
                s = "";
              void 0 != this.intlTelInput.selectedCountryData.dialCode &&
                (s = "+" + this.intlTelInput.selectedCountryData.dialCode);
              var a = s + this.phone;
              (this.phone.startsWith("+") || this.phone.startsWith(s)) &&
                (a = this.phone);
              var n = {
                first_name: this.firstname,
                last_name: this.lastname,
                company: this.company,
                phone: a,
                line1: this.street,
                line2: this.line2,
                city: this.city,
                country: this.country,
                state: this.region,
                zip: this.postcode,
              };
              for (var i in n)
                if ("" == n[i] && "company" != i && "line2" != i)
                  return (
                    this.setErrorMessage(
                      i[0].toUpperCase() +
                        i.slice(1).replace("_", " ") +
                        " isn't valid.",
                    ),
                    "street" == i &&
                      this.setErrorMessage("Address isn't Valid."),
                    !1
                  );
              this.$store
                .dispatch(yt.actions.UPDATE_CUSTOMER, {
                  customer: e,
                  billing_address: n,
                  vat_number: this.vatnumber,
                })
                .then(function () {
                  (t.$eventBus.$emit($e.CLOSED),
                    window.scrollTo({ top: 0, behavior: "smooth" }));
                });
            },
            validateEmail: function () {
              var t = /\S+@\S+\.\S+/;
              return t.test(this.email);
            },
            setModalPosition: function () {
              var t = document.querySelector("#updatebilling .modal-card");
              ((t.style.top = ""),
                (t.style.left = ""),
                (t.style.transform = ""));
              var e = t.getBoundingClientRect(),
                s = Math.round(e.top),
                a = Math.round(e.left);
              ((t.style.top = s + "px"),
                (t.style.left = a + "px"),
                (t.style.transform = "none"));
            },
          },
        ),
        watch: {
          isPopupOpen: function (t) {
            var e = this;
            ((this.email = this.billingDetails.email),
              (this.firstname = this.billingDetails.firstname),
              (this.lastname = this.billingDetails.lastname),
              (this.company = this.billingDetails.company),
              (this.street = this.billingDetails.street),
              (this.line2 = this.billingDetails.line2),
              (this.city = this.billingDetails.city),
              (this.country = this.billingDetails.country),
              (this.region = this.billingDetails.region),
              (this.postcode = this.billingDetails.postcode),
              (this.vatnumber = this.billingDetails.vatnumber));
            var s = null;
            ((void 0 != this.billingDetails.phone &&
              this.billingDetails.phone.includes("+")) ||
              (s = function (t) {
                Q.a
                  .get("https://ipinfo.io")
                  .then(function (e) {
                    var s = e.data,
                      a = s && s.country ? s.country : "";
                    t(a);
                  })
                  .catch(function () {});
              }),
              void 0 != this.billingDetails.phone &&
                this.billingDetails.phone.includes("+") &&
                (this.phone = this.billingDetails.phone),
              this.$nextTick(function () {
                e.intlTelInput = Gs()(e.$refs.phoneNumber, {
                  separateDialCode: "true",
                  initialCountry: "auto",
                  geoIpLookup: s,
                  preferredCountries: [],
                });
              }),
              t &&
                setTimeout(function () {
                  (void 0 != e.billingDetails.phone &&
                    "" != e.billingDetails.phone &&
                    (e.phone = e.billingDetails.phone.replace(
                      "+" + e.intlTelInput.selectedCountryData.dialCode,
                      "",
                    )),
                    e.setModalPosition());
                }, 250),
              window.addEventListener("resize", function () {
                e.setModalPosition();
              }));
          },
        },
      },
      zi = Hi,
      Wi = (s("9851"), Object(b["a"])(zi, $i, Bi, !1, null, null, null)),
      Ki = Wi.exports,
      Xi = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: t.isPopupOpen,
                expression: "isPopupOpen",
              },
            ],
            staticClass: "modal-container",
            class: { "dropdown-active": t.isDropdownOpen },
            attrs: { id: "extra-contacts" },
          },
          [
            s("div", {
              staticClass: "modal-overlay",
              on: { click: t.emailPopupCloseClick },
            }),
            s(
              "div",
              {
                staticClass:
                  "modal-card modal-custom update-popup modal-contact-details",
              },
              [
                s(
                  "button",
                  {
                    staticClass: "modal-custom-close modal-close",
                    on: { click: t.emailPopupCloseClick },
                  },
                  [t._v("\n      ×\n    ")],
                ),
                s("h3", [t._v("Update Extra Contacts")]),
                s("div", { staticClass: "popup-description" }, [
                  t.errorMessage
                    ? s("div", { staticClass: "error-message-container" }, [
                        s("div", { staticClass: "error-message" }, [
                          s("div", { staticClass: "error-message-title" }, [
                            t._v(t._s(t.errorMessage)),
                          ]),
                          s(
                            "div",
                            { staticClass: "error-message-instructions" },
                            [t._v("Please fix this error and try again.")],
                          ),
                        ]),
                        s(
                          "span",
                          {
                            staticClass: "notice-close",
                            on: { click: t.closeMessage },
                          },
                          [t._v("×")],
                        ),
                      ])
                    : t.individualErrorMessages.length > 1
                      ? s("div", { staticClass: "error-message-container" }, [
                          s("div", { staticClass: "error-message" }, [
                            s(
                              "ul",
                              [
                                s(
                                  "li",
                                  { staticClass: "error-message-title" },
                                  [
                                    t._v(
                                      "Please fix these errors and try again",
                                    ),
                                  ],
                                ),
                                t._l(
                                  t.individualErrorMessages,
                                  function (e, a) {
                                    return s("li", { key: a }, [
                                      t._v(
                                        "\n              " +
                                          t._s(e) +
                                          "\n            ",
                                      ),
                                    ]);
                                  },
                                ),
                              ],
                              2,
                            ),
                          ]),
                          s(
                            "span",
                            {
                              staticClass: "notice-close",
                              on: { click: t.closeMessage },
                            },
                            [t._v("×")],
                          ),
                        ])
                      : 1 == t.individualErrorMessages.length
                        ? s(
                            "div",
                            { staticClass: "error-message-container" },
                            [
                              t._l(t.individualErrorMessages, function (e, a) {
                                return s(
                                  "div",
                                  { key: a, staticClass: "error-message" },
                                  [
                                    s(
                                      "div",
                                      { staticClass: "error-message-title" },
                                      [t._v(t._s(e))],
                                    ),
                                    s(
                                      "div",
                                      {
                                        staticClass:
                                          "error-message-instructions",
                                      },
                                      [
                                        t._v(
                                          "Please fix this error and try again.",
                                        ),
                                      ],
                                    ),
                                  ],
                                );
                              }),
                              s(
                                "span",
                                {
                                  staticClass: "notice-close",
                                  on: { click: t.closeMessage },
                                },
                                [t._v("×")],
                              ),
                            ],
                            2,
                          )
                        : t._e(),
                  s("p", [
                    t._v(
                      "\n        Send invoice, payment, and subscription-related emails to additional\n        people.\n      ",
                    ),
                  ]),
                ]),
                s(
                  "div",
                  { staticClass: "modal-form" },
                  [
                    t._l(t.contacts, function (e, a) {
                      return s(
                        "div",
                        { key: a, staticClass: "details-form-block" },
                        [
                          s(
                            "div",
                            {
                              staticClass: "details-row",
                              class: { "has-error": e.hasError },
                            },
                            [
                              s("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: e.first_name,
                                    expression: "contact.first_name",
                                  },
                                ],
                                staticClass: "chargebee-input input-half",
                                attrs: {
                                  type: "text",
                                  placeholder: "First name",
                                },
                                domProps: { value: e.first_name },
                                on: {
                                  input: function (s) {
                                    s.target.composing ||
                                      t.$set(e, "first_name", s.target.value);
                                  },
                                },
                              }),
                              s("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: e.last_name,
                                    expression: "contact.last_name",
                                  },
                                ],
                                staticClass: "chargebee-input input-half",
                                attrs: {
                                  type: "text",
                                  placeholder: "Last name",
                                },
                                domProps: { value: e.last_name },
                                on: {
                                  input: function (s) {
                                    s.target.composing ||
                                      t.$set(e, "last_name", s.target.value);
                                  },
                                },
                              }),
                              s("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: e.email,
                                    expression: "contact.email",
                                  },
                                ],
                                staticClass:
                                  "input-company detail-input input-full",
                                attrs: {
                                  type: "email",
                                  placeholder: "Enter email address",
                                },
                                domProps: { value: e.email },
                                on: {
                                  input: function (s) {
                                    s.target.composing ||
                                      t.$set(e, "email", s.target.value);
                                  },
                                },
                              }),
                              s(
                                "div",
                                { staticClass: "app-dropdown-wrapper" },
                                [
                                  s(
                                    "div",
                                    {
                                      staticClass:
                                        "user-mode-dropdown mode-dropdown-select",
                                      class: {
                                        "is-active": e.isDropdownActive,
                                      },
                                      on: {
                                        click: function (s) {
                                          return t.toggleDropdown(e);
                                        },
                                      },
                                    },
                                    [
                                      e.send_billing_email &&
                                      e.send_account_email
                                        ? s(
                                            "span",
                                            { staticClass: "selected" },
                                            [t._v("Billing & Updates")],
                                          )
                                        : t._e(),
                                      e.send_billing_email &&
                                      !e.send_account_email
                                        ? s(
                                            "span",
                                            { staticClass: "selected" },
                                            [t._v("Billing")],
                                          )
                                        : t._e(),
                                      !e.send_billing_email &&
                                      e.send_account_email
                                        ? s(
                                            "span",
                                            { staticClass: "selected" },
                                            [t._v("Account updates")],
                                          )
                                        : t._e(),
                                    ],
                                  ),
                                  s(
                                    "dl",
                                    {
                                      staticClass: "mode-dropdown-option",
                                      class: {
                                        "is-active": e.isDropdownActive,
                                      },
                                    },
                                    [
                                      s(
                                        "div",
                                        {
                                          staticClass: "dropdown-item blue",
                                          class: {
                                            "is-active":
                                              e.send_billing_email &&
                                              e.send_account_email,
                                          },
                                          on: {
                                            click: function (s) {
                                              return t.setMode(e, "both");
                                            },
                                          },
                                        },
                                        [s("dt", [t._v("Both")]), t._m(0, !0)],
                                      ),
                                      s(
                                        "div",
                                        {
                                          staticClass: "dropdown-item blue",
                                          class: {
                                            "is-active":
                                              e.send_billing_email &&
                                              !e.send_account_email,
                                          },
                                          on: {
                                            click: function (s) {
                                              return t.setMode(e, "billing");
                                            },
                                          },
                                        },
                                        [
                                          s("dt", [t._v("Billing emails")]),
                                          t._m(1, !0),
                                        ],
                                      ),
                                      s(
                                        "div",
                                        {
                                          staticClass: "dropdown-item blue",
                                          class: {
                                            "is-active":
                                              !e.send_billing_email &&
                                              e.send_account_email,
                                          },
                                          on: {
                                            click: function (s) {
                                              return t.setMode(e, "account");
                                            },
                                          },
                                        },
                                        [
                                          s("dt", [
                                            t._v("Account update emails"),
                                          ]),
                                          t._m(2, !0),
                                        ],
                                      ),
                                    ],
                                  ),
                                ],
                              ),
                            ],
                          ),
                          s(
                            "button",
                            {
                              staticClass: "modal-remove-contact",
                              on: {
                                click: function (e) {
                                  return t.removeContact(a);
                                },
                              },
                            },
                            [t._v("\n          ×\n        ")],
                          ),
                        ],
                      );
                    }),
                    s("div", { staticClass: "contact-button-row" }, [
                      s(
                        "button",
                        {
                          staticClass: "btn btn-outlined btn-sm",
                          attrs: {
                            type: "button",
                            disabled: t.contacts.length >= 6,
                          },
                          on: { click: t.addContact },
                        },
                        [t._v("\n        Add additional contact\n        ")],
                      ),
                    ]),
                  ],
                  2,
                ),
                s(
                  "div",
                  { staticClass: "modal-footer" },
                  [
                    s(
                      "button",
                      {
                        staticClass: "btn blue",
                        class: { "is-saving": t.isSaving },
                        attrs: { tabindex: "15" },
                        on: { click: t.emailUpdateClick },
                      },
                      [
                        t._v("\n        Save changes\n        "),
                        s("div", { staticClass: "is-saving-spinner" }),
                      ],
                    ),
                    s("transition", { attrs: { name: "slide" } }),
                  ],
                  1,
                ),
              ],
            ),
          ],
        );
      },
      Qi = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("dd", [
            s("span", { staticClass: "select-dd-content" }, [
              t._v(
                "If selected, this contact will receive all of the below\n                    emails",
              ),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("dd", [
            s("span", { staticClass: "select-dd-content" }, [
              t._v(
                "If selected, this contact will receive Invoice and\n                    Payment related emails",
              ),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("dd", [
            s("span", { staticClass: "select-dd-content" }, [
              t._v(
                "If selected, this contact will receive Subscription\n                    related emails",
              ),
            ]),
          ]);
        },
      ];
    (s("5df3"), s("1c4c"));
    function qi(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function Ji(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? qi(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : qi(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var Zi = {
        name: "ExtraContactsPopup",
        mixins: [Fe],
        data: function () {
          return {
            isPopupOpen: !1,
            contacts: [],
            isDropdownOpen: !1,
            individualErrorMessages: [],
          };
        },
        computed: Ji(
          {},
          Object(T["c"])({
            vueXcontacts: yt.getters.GET_CONTACTS,
            errorMessage: yt.getters.GET_CONTACTS_POPUP_ERROR_MESSAGE,
            isSaving: yt.getters.GET_POPUP_IS_SAVING,
          }),
        ),
        watch: {
          isPopupOpen: function (t) {
            (this.setErrorMessage(""),
              (this.individualErrorMessages = []),
              t &&
                (this.contacts = JSON.parse(JSON.stringify(this.vueXcontacts))),
              0 == this.contacts.length && this.addContact());
          },
        },
        methods: Ji(
          Ji(
            Ji(
              {},
              Object(T["d"])({
                setContacts: yt.mutations.SET_CONTACTS,
                setSuccessMessage: B.mutations.SET_SUCCESS_MESSAGE,
                setErrorMessage: yt.mutations.SET_CONTACTS_POPUP_ERROR_MESSAGE,
              }),
            ),
            Object(T["b"])({ upsertContacts: yt.actions.UPSERT_CONTACTS }),
          ),
          {},
          {
            emailPopupCloseClick: function () {
              (this.$eventBus.$emit($e.CLOSED), (this.isPopupOpen = !1));
            },
            addContact: function () {
              var t = {
                id: "",
                first_name: "",
                last_name: "",
                email: "",
                send_account_email: !0,
                send_billing_email: !0,
                isDropdownActive: !1,
              };
              (this.contacts.push(t), this.checkAndUpdateHeight());
            },
            removeContact: function (t) {
              (this.contacts.splice(t, 1),
                "" != this.errorMessage &&
                  (this.setErrorMessage(""),
                  (this.individualErrorMessages = []),
                  this.errorCheck()),
                this.checkAndUpdateHeight());
            },
            checkAndUpdateHeight: function () {
              var t = this;
              this.$nextTick(function () {
                var e = t.$el.querySelector("#extra-contacts .update-popup"),
                  s = document.querySelector("#updatebilling");
                if (e && s) {
                  var a = e.offsetHeight,
                    n = s.offsetHeight;
                  s.style.minHeight = a > n ? "".concat(a, "px") : "";
                }
              });
            },
            toggleDropdown: function (t) {
              (this.contacts.forEach(function (e) {
                e !== t && (e.isDropdownActive = !1);
              }),
                (t.isDropdownActive = !t.isDropdownActive),
                t.isDropdownActive
                  ? (this.isDropdownOpen = !0)
                  : (this.isDropdownOpen = !1));
            },
            handleClickOutside: function (t) {
              Array.from(
                this.$el.querySelectorAll(".mode-dropdown-select"),
              ).some(function (e) {
                return e.contains(t.target);
              }) ||
                (this.contacts.forEach(function (t) {
                  t.isDropdownActive = !1;
                }),
                (this.isDropdownOpen = !1));
            },
            setMode: function (t, e) {
              "both" == e
                ? ((t.send_billing_email = !0), (t.send_account_email = !0))
                : "billing" == e
                  ? ((t.send_billing_email = !0), (t.send_account_email = !1))
                  : "account" == e &&
                    ((t.send_billing_email = !1), (t.send_account_email = !0));
            },
            errorCheck: function () {
              var t = this,
                e = [];
              this.contacts.forEach(function (s) {
                t.individualErrorMessages.length > 0 ||
                  ((s.hasError = !1),
                  "" == s.first_name &&
                    (t.individualErrorMessages.push(
                      "First name cannot be empty for " + s.email,
                    ),
                    (s.hasError = !0)),
                  "" == s.last_name &&
                    ("" == s.email
                      ? t.individualErrorMessages.push(
                          "Last name cannot be empty.",
                        )
                      : t.individualErrorMessages.push(
                          "Last name cannot be empty for " + s.email,
                        ),
                    (s.hasError = !0)),
                  "" == s.email
                    ? (t.individualErrorMessages.push("Email cannot be empty."),
                      (s.hasError = !0))
                    : t.validateEmail(s.email) ||
                      (t.individualErrorMessages.push(
                        "Please enter a valid email address for your additional email address. " +
                          s.email,
                      ),
                      (s.hasError = !0)),
                  e.includes(s.email.trim()) &&
                    (t.individualErrorMessages.push(
                      "Duplicate emails found. " + s.email,
                    ),
                    (s.hasError = !0)),
                  e.push(s.email.trim()));
              });
            },
            closeMessage: function () {
              ((this.errorMessage = ""), (this.individualErrorMessages = []));
            },
            emailUpdateClick: function () {
              var t = this;
              if (
                (this.setErrorMessage(""),
                (this.individualErrorMessages = []),
                this.contacts.length > 1)
              ) {
                var e = [];
                (this.contacts.forEach(function (t, s) {
                  "" == t.email &&
                    "" == t.first_name &&
                    "" == t.last_name &&
                    e.push(s);
                }),
                  e.reverse().forEach(function (e) {
                    t.contacts.splice(e, 1);
                  }),
                  0 == this.contacts.length && this.addContact());
              }
              if (
                1 == this.contacts.length &&
                "" == this.contacts[0].email &&
                "" == this.contacts[0].first_name &&
                "" == this.contacts[0].last_name
              )
                this.setContacts([]);
              else {
                if (
                  (this.errorCheck(), 0 != this.individualErrorMessages.length)
                )
                  return null;
                this.setContacts(this.contacts);
              }
              this.upsertContacts().then(function () {
                t.$eventBus.$emit($e.CLOSED);
              });
            },
            validateEmail: function (t) {
              var e = /\S+@\S+\.\S+/;
              return e.test(t);
            },
          },
        ),
        mounted: function () {
          document.addEventListener("click", this.handleClickOutside);
        },
        beforeDestroy: function () {
          document.removeEventListener("click", this.handleClickOutside);
        },
      },
      tr = Zi,
      er = Object(b["a"])(tr, Xi, Qi, !1, null, null, null),
      sr = er.exports,
      ar = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: t.isPopupOpen,
                expression: "isPopupOpen",
              },
            ],
            staticClass: "modal-container",
          },
          [
            t._v("\n  " + t._s(t.paymentType) + "\n  "),
            s("div", {
              staticClass: "modal-overlay",
              on: { click: t.paymentMethodPopupCloseClick },
            }),
            s(
              "div",
              {
                staticClass: "modal-card modal-custom update-popup",
                class: t.isPayment(),
              },
              [
                s(
                  "button",
                  {
                    staticClass: "modal-custom-close modal-close",
                    on: { click: t.paymentMethodPopupCloseClick },
                  },
                  [t._v("\n      ×\n    ")],
                ),
                s("h3", [t._v("Manage payment method")]),
                s(
                  "p",
                  {
                    staticClass: "popup-description update-payment-description",
                  },
                  [
                    t._v(
                      "\n      We currently charge you " +
                        t._s(t.currencyPrefix) +
                        t._s(t.subscriptionPrice) +
                        "\n      " +
                        t._s(t.subscriptionPeriod) +
                        ". Use the form below to change your payment\n      details.\n    ",
                    ),
                  ],
                ),
                s("div", { staticClass: "modal-form update-payment-details" }, [
                  s("div", { staticClass: "payment-switch" }, [
                    s("div", { staticClass: "credit-card-payment-wrapper" }, [
                      s(
                        "div",
                        {
                          staticClass: "credit-card-payment",
                          on: {
                            click: function (e) {
                              return t.setPaymentType("card");
                            },
                          },
                        },
                        [
                          s("label", { attrs: { for: "credit-card" } }, [
                            s("div", { staticClass: "radio" }, [
                              s(
                                "span",
                                {
                                  class: { checked: "card" === t.paymentType },
                                },
                                [
                                  s("input", {
                                    attrs: {
                                      type: "radio",
                                      value: "creditCard",
                                    },
                                    domProps: {
                                      checked: {
                                        checked: "card" === t.paymentType,
                                      },
                                    },
                                  }),
                                ],
                              ),
                            ]),
                            s("span", { staticClass: "credit-card-label" }, [
                              t._v("Credit Card"),
                            ]),
                          ]),
                          s("span", { staticClass: "cc-list" }),
                        ],
                      ),
                    ]),
                    s("div", { staticClass: "paypal-payment-wrapper" }, [
                      s(
                        "div",
                        {
                          staticClass: "paypal-payment",
                          on: {
                            click: function (e) {
                              return t.setPaymentType(
                                "paypal_express_checkout",
                              );
                            },
                          },
                        },
                        [
                          s("label", { attrs: { for: "paypal" } }, [
                            s("div", { staticClass: "radio" }, [
                              s(
                                "span",
                                {
                                  class: {
                                    checked:
                                      "paypal_express_checkout" ===
                                      t.paymentType,
                                  },
                                },
                                [
                                  s("input", {
                                    attrs: { type: "radio", value: "paypal" },
                                    domProps: {
                                      checked: {
                                        checked:
                                          "paypal_express_checkout" ===
                                          t.paymentType,
                                      },
                                    },
                                  }),
                                ],
                              ),
                            ]),
                          ]),
                        ],
                      ),
                    ]),
                    s("div", { staticClass: "direct-debit-payment-wrapper" }, [
                      s(
                        "div",
                        {
                          staticClass: "direct-debit-payment",
                          on: {
                            click: function (e) {
                              return t.setPaymentType("direct_debit");
                            },
                          },
                        },
                        [
                          s("label", { attrs: { for: "direct-debit" } }, [
                            s("div", { staticClass: "radio" }, [
                              s(
                                "span",
                                {
                                  class: {
                                    checked: "direct_debit" === t.paymentType,
                                  },
                                },
                                [
                                  s("input", {
                                    attrs: {
                                      type: "radio",
                                      value: "direct-debit",
                                    },
                                    domProps: {
                                      checked: {
                                        checked:
                                          "direct_debit" === t.paymentType,
                                      },
                                    },
                                  }),
                                ],
                              ),
                            ]),
                            s("span", { staticClass: "direct-debit-label" }, [
                              t._v("Direct Debit (ACH)"),
                            ]),
                            t._m(0),
                          ]),
                        ],
                      ),
                    ]),
                    1 != t.subscription.billing_period
                      ? s(
                          "div",
                          { staticClass: "bank-transfer-payment-wrapper" },
                          [
                            s(
                              "div",
                              {
                                staticClass: "bank-transfer-payment",
                                on: {
                                  click: function (e) {
                                    return t.setPaymentType("bank_transfer");
                                  },
                                },
                              },
                              [
                                s(
                                  "label",
                                  { attrs: { for: "bank-transfer" } },
                                  [
                                    s("div", { staticClass: "radio" }, [
                                      s(
                                        "span",
                                        {
                                          class: {
                                            checked:
                                              "bank_transfer" === t.paymentType,
                                          },
                                        },
                                        [
                                          s("input", {
                                            attrs: {
                                              type: "radio",
                                              value: "bank-transfer",
                                            },
                                            domProps: {
                                              checked: {
                                                checked:
                                                  "bank_transfer" ===
                                                  t.paymentType,
                                              },
                                            },
                                          }),
                                        ],
                                      ),
                                    ]),
                                    s(
                                      "span",
                                      { staticClass: "bank-transfer-label" },
                                      [t._v("Bank Transfer")],
                                    ),
                                  ],
                                ),
                              ],
                            ),
                          ],
                        )
                      : t._e(),
                  ]),
                  s(
                    "div",
                    {
                      staticClass: "payment-switch-wrapper",
                      class: {
                        "no-bank-transfer": 1 == t.subscription.billing_period,
                      },
                    },
                    [
                      s(
                        "transition",
                        { attrs: { name: "payment-switch", mode: "out-in" } },
                        [
                          "card" === t.paymentType
                            ? s("UpdateCreditCard", { ref: "updateCreditCard" })
                            : "paypal_express_checkout" === t.paymentType
                              ? s(
                                  "div",
                                  { staticClass: "card-details paypal-info" },
                                  [
                                    s(
                                      "div",
                                      {
                                        staticClass:
                                          "paypal_execute_button_wrapper",
                                        on: {
                                          click: function (e) {
                                            return (
                                              e.preventDefault(),
                                              t.authorizePaypalClick(e)
                                            );
                                          },
                                        },
                                      },
                                      [
                                        s(
                                          "div",
                                          {
                                            staticClass:
                                              "paypal_execute_button",
                                          },
                                          [t._v("Login with PayPal")],
                                        ),
                                      ],
                                    ),
                                    s(
                                      "p",
                                      { staticClass: "paypal-info-text" },
                                      [
                                        t._v(
                                          "\n              A PayPal window will appear to log you in\n            ",
                                        ),
                                      ],
                                    ),
                                  ],
                                )
                              : "direct_debit" === t.paymentType
                                ? s("UpdateDirectDebit", {
                                    ref: "updateDirectDebit",
                                  })
                                : "bank_transfer" === t.paymentType
                                  ? s("UpdateBankTransfer", {
                                      ref: "updateBankTransfer",
                                    })
                                  : t._e(),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ]),
                s(
                  "div",
                  { staticClass: "modal-footer" },
                  [
                    s("div", [
                      s("div", { staticClass: "save-button-container" }, [
                        s(
                          "button",
                          {
                            staticClass: "btn blue",
                            class: { "is-saving": t.isSaving },
                            attrs: {
                              disabled:
                                "paypal_express_checkout" == t.paymentType,
                            },
                            on: { click: t.paymentMethodUpdateClick },
                          },
                          [
                            t._v("\n            Save changes\n            "),
                            s("div", { staticClass: "is-saving-spinner" }),
                          ],
                        ),
                      ]),
                      "off" == t.subscription.auto_collection &&
                      "bank_transfer" != t.paymentType
                        ? s(
                            "div",
                            {
                              staticClass:
                                "is-open indicators-filter filter-toggler checker-container",
                            },
                            [
                              s("div", { staticClass: "checker" }, [
                                s(
                                  "span",
                                  {
                                    staticClass: "checker-box",
                                    class: { checked: t.autoCollect },
                                  },
                                  [
                                    s("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: t.autoCollect,
                                          expression: "autoCollect",
                                        },
                                      ],
                                      attrs: { type: "checkbox" },
                                      domProps: {
                                        checked: Array.isArray(t.autoCollect)
                                          ? t._i(t.autoCollect, null) > -1
                                          : t.autoCollect,
                                      },
                                      on: {
                                        change: function (e) {
                                          var s = t.autoCollect,
                                            a = e.target,
                                            n = !!a.checked;
                                          if (Array.isArray(s)) {
                                            var i = null,
                                              r = t._i(s, i);
                                            a.checked
                                              ? r < 0 &&
                                                (t.autoCollect = s.concat([i]))
                                              : r > -1 &&
                                                (t.autoCollect = s
                                                  .slice(0, r)
                                                  .concat(s.slice(r + 1)));
                                          } else t.autoCollect = n;
                                        },
                                      },
                                    }),
                                  ],
                                ),
                              ]),
                              s(
                                "span",
                                { staticClass: "inline-checkbox-desc" },
                                [
                                  t._v(
                                    "\n            Enable automatic renewal (recommended)\n          ",
                                  ),
                                ],
                              ),
                              t._m(1),
                            ],
                          )
                        : t._e(),
                    ]),
                    s("div", { staticClass: "clear" }),
                    s("transition", { attrs: { name: "slide" } }, [
                      t.errorMessage
                        ? s("div", { staticClass: "error-message-container" }, [
                            s("div", { staticClass: "error-message" }, [
                              t._v(t._s(t.errorMessage)),
                            ]),
                          ])
                        : t._e(),
                    ]),
                  ],
                  1,
                ),
              ],
            ),
          ],
        );
      },
      nr = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "tooltip-ach-container" }, [
            s("div", { staticClass: "tooltip-ach" }, [
              s("p", [
                t._v(
                  "\n                    An ACH authorization will be securely setup via Stripe Financial Connections and Chargebee.\n                  ",
                ),
              ]),
            ]),
            s("div", { staticClass: "tooltip-ach-icon" }, [t._v("i")]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "tooltip-auto-renewal-container" }, [
            s("div", { staticClass: "tooltip-auto-renewal" }, [
              s("p", [
                t._v(
                  "\n                Enable the automatic renewal of your account using this payment method.\n                This will also allow any additional charges your account incurs to be billed automatically,\n                avoiding the need to make manual payments.\n              ",
                ),
              ]),
            ]),
            s("div", { staticClass: "tooltip-auto-renewal-icon" }, [t._v("i")]),
          ]);
        },
      ],
      ir = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "chargebee-fieldset" },
          [
            s("div", { staticClass: "chargebee-field" }, [
              s("label", { staticClass: "chargebee-label" }, [
                t._v("Name on Card"),
              ]),
              s("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: t.name,
                    expression: "name",
                  },
                ],
                staticClass: "chargebee-input input-full",
                class: { val: t.name, error: t.isErrored.name },
                attrs: { type: "text", id: "name" },
                domProps: { value: t.name },
                on: {
                  input: [
                    function (e) {
                      e.target.composing || (t.name = e.target.value);
                    },
                    t.onChange,
                  ],
                  blur: t.onLoseFocus,
                },
              }),
            ]),
            s(
              "CardComponent",
              {
                ref: "card",
                staticClass: "fieldset field",
                attrs: { styles: t.styles, classes: t.classes },
                on: { change: t.onChange },
              },
              [
                s(
                  "div",
                  { staticClass: "chargebee-field" },
                  [
                    s("label", { staticClass: "chargebee-label" }, [
                      t._v("Card Number"),
                    ]),
                    s("CardNumber", {
                      staticClass: "chargebee-input input-full",
                      class: { error: t.isErrored.number },
                      on: { blur: t.onLoseFocus },
                    }),
                  ],
                  1,
                ),
                s("div", { staticClass: "chargebee-fields" }, [
                  s(
                    "div",
                    { staticClass: "chargebee-field" },
                    [
                      s("label", { staticClass: "chargebee-label" }, [
                        t._v("Expiry"),
                      ]),
                      s("CardExpiry", {
                        staticClass: "chargebee-input input-xsmall",
                        style: [
                          t.isErrored.expiry
                            ? { border: "solid 1px #EF8A78" }
                            : {},
                        ],
                        attrs: { styles: t.stylesExpiry },
                        on: { blur: t.onLoseFocus },
                      }),
                    ],
                    1,
                  ),
                  s(
                    "div",
                    { staticClass: "chargebee-field" },
                    [
                      s("label", { staticClass: "chargebee-label" }, [
                        t._v("CVV"),
                      ]),
                      s("CardCvv", {
                        staticClass: "chargebee-input input-xsmall",
                        style: [
                          t.isErrored.cvv
                            ? { border: "solid 1px #EF8A78" }
                            : {},
                        ],
                        on: { blur: t.onLoseFocus },
                      }),
                      s("div", { staticClass: "tooltip-cvv-container" }, [
                        s("div", { staticClass: "tooltip-cvv" }, [
                          s("p", [
                            s("strong", [t._v("Your CVV code")]),
                            t._v(
                              " (sometimes called a Security Code) is a 3 digit number on the back of your card. For AMEX cards, it's a 4 digit number on the front of your card.",
                            ),
                          ]),
                        ]),
                        s("div", { staticClass: "tooltip-cvv-icon" }, [
                          t._v("i"),
                        ]),
                      ]),
                    ],
                    1,
                  ),
                ]),
              ],
            ),
          ],
          1,
        );
      },
      rr = [];
    function or(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function cr(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? or(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : or(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var lr = {
        name: "UpdateCreditCard",
        components: {
          CardComponent: Ua["a"],
          CardNumber: Ua["d"],
          CardExpiry: Ua["c"],
          CardCvv: Ua["b"],
        },
        data: function () {
          return {
            isComplete: { name: !1, number: !1, expiry: !1, cvv: !1 },
            isErrored: { name: !1, number: !1, expiry: !1, cvv: !1 },
            name: "",
            classes: {
              focus: "focus",
              invalid: "invalid",
              empty: "empty",
              complete: "complete",
            },
            fonts: ["https://fonts.googleapis.com/css?family=Lato:400,700"],
            locale: "en",
            styles: {
              base: {
                color: "#38393e",
                fontWeight: "400",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "13px",
                fontSmoothing: "antialiased",
                ":focus": { color: "#424770" },
                "::placeholder": { color: "transparent" },
                ":focus::placeholder": { color: "transparent" },
              },
              invalid: {
                ":focus": {},
                "::placeholder": { color: "transparent" },
              },
            },
            stylesExpiry: { base: { lineHeight: "6px" } },
          };
        },
        computed: {
          isValid: function () {
            for (var t in this.isErrored)
              if (this.isErrored.hasOwnProperty(t) && 1 == this.isErrored[t])
                return !1;
            for (var e in this.isComplete)
              if (this.isComplete.hasOwnProperty(e) && 0 == this.isComplete[e])
                return !1;
            return !0;
          },
        },
        methods: cr(
          cr(
            {},
            Object(T["d"])({
              setIsQuietRequest: B.mutations.SET_IS_QUIET_REQUEST,
              setErrorMessage: yt.mutations.SET_POPUP_ERROR_MESSAGE,
              incIsSaving: yt.mutations.INC_POPUP_IS_SAVING,
              decIsSaving: yt.mutations.DEC_POPUP_IS_SAVING,
            }),
          ),
          {},
          {
            proceedUpdateCCard: function () {
              var t = this;
              if (!this.isValid)
                return (this.setErrorMessage("Fields aren't valid."), !1);
              (this.incIsSaving(),
                this.$refs.card
                  .tokenize({
                    firstName: this.name.split(" ")[0],
                    lastName: this.name.split(" ")[1],
                  })
                  .then(function (e) {
                    t.makeUpdateCCardRequest(e.token);
                  })
                  .catch(function (e) {
                    (console.error(e),
                      e.toString().includes("VALIDATION_FAILED")
                        ? t.setErrorMessage(
                            "Validation failed, please ensure your payment details are correct",
                          )
                        : t.setErrorMessage(
                            "Something went wrong talking to the payment provider: Problem while tokenizing your card details",
                          ));
                  })
                  .finally(function () {
                    t.decIsSaving();
                  }));
            },
            makeUpdateCCardRequest: function (t) {
              var e = this;
              this.$store
                .dispatch(yt.actions.UPDATE_CCARD, { token_id: t })
                .then(function () {
                  (e.$eventBus.$emit($e.CLOSED),
                    window.scrollTo({ top: 0, behavior: "smooth" }));
                });
            },
            onChange: function (t) {
              var e = "",
                s = !0;
              (t.target
                ? ((e = t.target.id), "" === this.name && (s = !1))
                : ((e = t.field), (s = t.complete), t.error && (s = !1)),
                (s || t.error) &&
                  ((this.isComplete[e] = s), (this.isErrored[e] = !s)));
            },
            onLoseFocus: function (t) {
              var e = "",
                s = !0;
              (t.target
                ? ((e = t.target.id), "" === this.name && (s = !1))
                : ((e = t.field), (s = t.complete), t.error && (s = !1)),
                s || ((this.isComplete[e] = !1), (this.isErrored[e] = !0)));
            },
          },
        ),
      },
      ur = lr,
      dr = (s("8707"), Object(b["a"])(ur, ir, rr, !1, null, "3cb6687e", null)),
      pr = dr.exports,
      _r = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "chargebee-fieldset" }, [
          s("div", { staticClass: "chargebee-field" }, [
            s("label", { staticClass: "chargebee-label" }, [t._v("Name")]),
            s("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: t.firstname,
                  expression: "firstname",
                },
              ],
              staticClass: "chargebee-input firstname input-half",
              class: { val: t.firstname, error: t.isErrored.firstname },
              attrs: {
                type: "text",
                placeholder: "First Name",
                id: "firstname",
                tabindex: "1",
              },
              domProps: { value: t.firstname },
              on: {
                input: [
                  function (e) {
                    e.target.composing || (t.firstname = e.target.value);
                  },
                  t.onChange,
                ],
                blur: t.onLoseFocus,
              },
            }),
            s("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: t.lastname,
                  expression: "lastname",
                },
              ],
              staticClass: "chargebee-input lastname input-half",
              class: { val: t.lastname, error: t.isErrored.lastname },
              attrs: {
                type: "text",
                placeholder: "Last Name",
                id: "lastname",
                tabindex: "2",
              },
              domProps: { value: t.lastname },
              on: {
                input: [
                  function (e) {
                    e.target.composing || (t.lastname = e.target.value);
                  },
                  t.onChange,
                ],
                blur: t.onLoseFocus,
              },
            }),
          ]),
          s("div", { staticClass: "chargebee-field" }, [
            s("label", { staticClass: "chargebee-label" }, [t._v("Email")]),
            s("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: t.email,
                  expression: "email",
                },
              ],
              staticClass: "chargebee-input input-full",
              class: { val: t.email, error: t.isErrored.email },
              attrs: { type: "text", id: "email", tabindex: "5" },
              domProps: { value: t.email },
              on: {
                input: [
                  function (e) {
                    e.target.composing || (t.email = e.target.value);
                  },
                  t.onChange,
                ],
                blur: t.onLoseFocus,
              },
            }),
          ]),
        ]);
      },
      mr = [];
    function hr(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function fr(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? hr(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : hr(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var Er = {
        name: "UpdateDirectDebit",
        components: {},
        mixins: [],
        data: function () {
          return {
            firstname: "",
            lastname: "",
            email: "",
            isComplete: { firstname: !1, lastname: !1, email: !1 },
            isErrored: { firstname: !1, lastname: !1, email: !1 },
            classes: {
              focus: "focus",
              invalid: "invalid",
              empty: "empty",
              complete: "complete",
            },
          };
        },
        computed: fr(
          fr(
            {},
            Object(T["c"])({
              customer: yt.getters.GET_CUSTOMER,
              billingDetails: yt.getters.GET_BILLING_DETAILS,
            }),
          ),
          {},
          {
            isValid: function () {
              for (var t in this.isErrored)
                if (this.isErrored.hasOwnProperty(t) && 1 == this.isErrored[t])
                  return t;
              for (var e in this.isComplete)
                if (
                  this.isComplete.hasOwnProperty(e) &&
                  0 == this.isComplete[e]
                )
                  return e;
              return !0;
            },
          },
        ),
        methods: fr(
          fr(
            fr(
              {},
              Object(T["d"])({
                setErrorMessage: B.mutations.SET_ERROR_MESSAGE,
                updateBillingDetails: yt.mutations.UPDATE_BILLING_DETAILS,
              }),
            ),
            Object(T["b"])({
              updateDirectDebit: yt.actions.UPDATE_DIRECT_DEBIT,
              createPaymentIntent: ft.actions.CREATE_PAYMENT_INTENT,
            }),
          ),
          {},
          {
            proceedUpdateDirectDebit: function () {
              var t = this;
              if (1 != this.isValid)
                return (
                  this.setErrorMessage(this.isValid + " is not valid."),
                  !1
                );
              var e = {
                customer: {
                  firstName: this.firstname,
                  lastName: this.lastname,
                  email: this.email,
                },
              };
              (this.$eventBus.$emit($e.CLOSED),
                window.scrollTo({ top: 0, behavior: "smooth" }),
                this.createPaymentIntent().then(
                  function (s) {
                    t.$store.commit("root/INC_RUNNING_AJAX_REQUESTS");
                    var a = Chargebee.getInstance();
                    a.load("direct_debit")
                      .then(function (a) {
                        (a.setPaymentIntent(s.results),
                          a
                            .handlePayment(e)
                            .then(function (e) {
                              t.updateDirectDebit({ intent_id: e.id }).then(
                                function () {},
                                function (t) {
                                  console.log(t);
                                },
                              );
                            })
                            .catch(function (e) {
                              t.setErrorMessage(
                                "Something went wrong talking to the payment provider: " +
                                  e,
                              );
                            })
                            .finally(function () {
                              t.$store.commit("root/DEC_RUNNING_AJAX_REQUESTS");
                            }));
                      })
                      .catch(function (e) {
                        (t.$store.commit("root/DEC_RUNNING_AJAX_REQUESTS"),
                          t.setErrorMessage(
                            "Something went wrong talking to the payment provider: " +
                              e,
                          ));
                      });
                  },
                  function (t) {
                    console.log("Error: " + t);
                  },
                ));
            },
            onChange: function (t) {
              var e = "",
                s = !0;
              (t.target
                ? ((e = t.target.id), "" === this.name && (s = !1))
                : ((e = t.field), (s = t.complete), t.error && (s = !1)),
                (s || t.error) &&
                  ((this.isComplete[e] = s), (this.isErrored[e] = !s)));
            },
            onLoseFocus: function (t) {
              var e = "",
                s = !0;
              (t.target
                ? ((e = t.target.id), "" === this.name && (s = !1))
                : ((e = t.field), (s = t.complete), t.error && (s = !1)),
                s || ((this.isComplete[e] = !1), (this.isErrored[e] = !0)));
            },
          },
        ),
        mounted: function () {
          ((this.firstname = this.billingDetails.firstname),
            (this.lastname = this.billingDetails.lastname),
            (this.email = this.billingDetails.email),
            void 0 != this.billingDetails.firstname &&
              "" != this.billingDetails.firstname &&
              (this.isComplete.firstname = !0),
            void 0 != this.billingDetails.lastname &&
              "" != this.billingDetails.lastname &&
              (this.isComplete.lastname = !0),
            void 0 != this.billingDetails.email &&
              "" != this.billingDetails.email &&
              (this.isComplete.email = !0));
        },
      },
      vr = Er,
      br = (s("b0ce"), Object(b["a"])(vr, _r, mr, !1, null, "557ed0cc", null)),
      gr = br.exports,
      Cr = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "chargebee-fieldset" }, [
          s("div", { staticClass: "chargebee-field" }, [
            s("label", { staticClass: "chargebee-label" }, [t._v("Name")]),
            s("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: t.firstname,
                  expression: "firstname",
                },
              ],
              staticClass: "chargebee-input firstname input-half",
              class: { val: t.firstname, error: t.isErrored.firstname },
              attrs: {
                type: "text",
                placeholder: "First Name",
                id: "firstname",
                tabindex: "1",
              },
              domProps: { value: t.firstname },
              on: {
                blur: t.onLoseFocus,
                input: function (e) {
                  e.target.composing || (t.firstname = e.target.value);
                },
              },
            }),
            s("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: t.lastname,
                  expression: "lastname",
                },
              ],
              staticClass: "chargebee-input lastname input-half",
              class: { val: t.lastname, error: t.isErrored.lastname },
              attrs: {
                type: "text",
                placeholder: "Last Name",
                id: "lastname",
                tabindex: "2",
              },
              domProps: { value: t.lastname },
              on: {
                blur: t.onLoseFocus,
                input: function (e) {
                  e.target.composing || (t.lastname = e.target.value);
                },
              },
            }),
          ]),
          s("div", { staticClass: "chargebee-field" }, [
            s("label", { staticClass: "chargebee-label" }, [
              t._v("Order Number"),
            ]),
            s("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: t.orderNumber,
                  expression: "orderNumber",
                },
              ],
              staticClass: "chargebee-input input-full",
              class: { val: t.orderNumber },
              attrs: {
                type: "text",
                placeholder: "Optional",
                id: "order-number",
                tabindex: "5",
              },
              domProps: { value: t.orderNumber },
              on: {
                input: function (e) {
                  e.target.composing || (t.orderNumber = e.target.value);
                },
              },
            }),
            s("div", { staticClass: "small-description" }, [
              t._v("\n      Enter a purchase order number if required\n    "),
            ]),
          ]),
        ]);
      },
      Tr = [];
    function Or(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function yr(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Or(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : Or(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var Pr = {
        name: "UpdateBankTransfer",
        components: {},
        mixins: [],
        data: function () {
          return {
            isComplete: { firstname: !1, lastname: !1 },
            isErrored: { firstname: !1, lastname: !1 },
            classes: {
              focus: "focus",
              invalid: "invalid",
              empty: "empty",
              complete: "complete",
            },
            firstname: "",
            lastname: "",
          };
        },
        computed: yr(
          yr(
            {},
            Object(T["c"])({
              customer: yt.getters.GET_CUSTOMER,
              billingDetails: yt.getters.GET_BILLING_DETAILS,
            }),
          ),
          {},
          {
            isValid: function () {
              for (var t in this.isErrored)
                if (this.isErrored.hasOwnProperty(t) && 1 == this.isErrored[t])
                  return t;
              for (var e in this.isComplete)
                if (
                  this.isComplete.hasOwnProperty(e) &&
                  0 == this.isComplete[e]
                )
                  return e;
              return !0;
            },
          },
        ),
        methods: yr(
          yr(
            yr(
              {},
              Object(T["d"])({
                setErrorMessage: B.mutations.SET_ERROR_MESSAGE,
                updateBillingDetails: yt.mutations.UPDATE_BILLING_DETAILS,
              }),
            ),
            Object(T["b"])({
              updateBankTransfer: yt.actions.UPDATE_BANK_TRANSFER,
            }),
          ),
          {},
          {
            proceedUpdateBankTransfer: function () {
              var t = this,
                e = { first_name: this.firstname, last_name: this.lastname };
              if (!this.isValid)
                return (
                  this.setErrorMessage(this.isValid + " is not valid."),
                  !1
                );
              this.updateBankTransfer({
                email: this.customer.email,
                billing_address: e,
                order_number: this.orderNumber,
              }).then(function () {
                (t.$eventBus.$emit($e.CLOSED),
                  window.scrollTo({ top: 0, behavior: "smooth" }));
              });
            },
            onChange: function (t) {
              var e = "",
                s = !0;
              (t.target
                ? ((e = t.target.id), "" === this.name && (s = !1))
                : ((e = t.field), (s = t.complete), t.error && (s = !1)),
                (s || t.error) &&
                  ((this.isComplete[e] = s), (this.isErrored[e] = !s)));
            },
            onLoseFocus: function (t) {
              var e = "",
                s = !0;
              (t.target
                ? ((e = t.target.id), "" === this.name && (s = !1))
                : ((e = t.field), (s = t.complete), t.error && (s = !1)),
                s || ((this.isComplete[e] = !1), (this.isErrored[e] = !0)));
            },
          },
        ),
        mounted: function () {
          ((this.firstname = this.billingDetails.firstname),
            (this.lastname = this.billingDetails.lastname));
        },
      },
      Sr = Pr,
      Ar = (s("d04b"), Object(b["a"])(Sr, Cr, Tr, !1, null, "b67b752a", null)),
      Nr = Ar.exports;
    function wr(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function Dr(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? wr(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : wr(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    a["default"].use(La["a"]);
    var Rr = {
        props: {},
        name: "UpdatePaymentMethodPopup",
        mixins: [Fe],
        components: {
          UpdateCreditCard: pr,
          UpdateDirectDebit: gr,
          UpdateBankTransfer: Nr,
        },
        data: function () {
          return { paypalPaymentToken: null, autoCollect: !0 };
        },
        computed: Dr(
          Dr(
            {},
            Object(T["c"])({
              getBackendUrl: B.getters.GET_BACKEND_URL,
              ccard: yt.getters.GET_CCARD,
              subscription: yt.getters.GET_SUBSCRIPTION,
              errorMessage: yt.getters.GET_POPUP_ERROR_MESSAGE,
              isSaving: yt.getters.GET_POPUP_IS_SAVING,
              currencyPrefix: It.getters.GET_CURRENCY_PREFIX,
              currencyCode: It.getters.GET_CURRENCY_CODE,
              paypalToken: ft.getters.GET_PAYPAL_TOKEN,
              paymentType: yt.getters.GET_PAYMENT_METHOD_SELECTION,
            }),
          ),
          {},
          {
            subscriptionPrice: function () {
              return (this.subscription.plan_amount / 100)
                .toFixed(2)
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
            },
            subscriptionPeriod: function () {
              return 1 === this.subscription.billing_period
                ? "monthly"
                : 3 === this.subscription.billing_period
                  ? "quarterly"
                  : 12 === this.subscription.billing_period
                    ? "yearly"
                    : "";
            },
          },
        ),
        methods: Dr(
          Dr(
            Dr(
              {},
              Object(T["d"])({
                setErrorMessage: B.mutations.SET_ERROR_MESSAGE,
                setSuccessMessage: B.mutations.SET_SUCCESS_MESSAGE,
                setPaymentType: yt.mutations.SET_PAYMENT_METHOD_SELECTION,
              }),
            ),
            Object(T["b"])({
              executePaypalAgreement: yt.actions.EXECUTE_PAYPAL_AGREEMENT,
              authorizePaypal: ft.actions.AUTHORIZE_PAYPAL,
              turnAutoRenewal: yt.actions.TURN_AUTO_RENEWAL,
            }),
          ),
          {},
          {
            authorizePaypalClick: function () {
              var t = this;
              this.authorizePaypal({ exit_url: window.location.origin }).then(
                function (e) {
                  var s = screen.width / 2 - 225,
                    a = screen.height / 2 - 362.5,
                    n = window.open(
                      e.results.url,
                      "",
                      "width=450,height=725, top=" + a + ", left=" + s,
                    ),
                    i = setInterval(function () {
                      n.closed &&
                        (clearInterval(i),
                        t
                          .executePaypalAgreement({
                            paypal_token: t.paypalToken,
                          })
                          .then(
                            function () {
                              (t.setSuccessMessage(
                                "Payment details have been updated.",
                              ),
                                t.$eventBus.$emit($e.CLOSED));
                            },
                            function (e) {
                              t.setErrorMessage(e);
                            },
                          ));
                    }, 200);
                },
              );
            },
            paymentMethodPopupCloseClick: function () {
              this.$eventBus.$emit($e.CLOSED);
            },
            paymentMethodUpdateClick: function () {
              ("off" == this.subscription.auto_collection &&
                this.autoCollect &&
                "bank_transfer" != this.paymentType &&
                this.turnAutoRenewal(),
                "bank_transfer" == this.paymentType
                  ? this.$refs.updateBankTransfer.proceedUpdateBankTransfer()
                  : "direct_debit" === this.paymentType
                    ? this.$refs.updateDirectDebit.proceedUpdateDirectDebit()
                    : this.$refs.updateCreditCard.proceedUpdateCCard());
            },
            isPayment: function () {
              return "card" == this.paymentType
                ? "is-ccard"
                : "paypal_express_checkout" == this.paymentType
                  ? "is-paypal"
                  : "direct_debit" == this.paymentType
                    ? "is-direct-debit"
                    : "bank_transfer" == this.paymentType
                      ? "is-bank-transfer"
                      : "";
            },
          },
        ),
      },
      Ir = Rr,
      jr = (s("40d1"), Object(b["a"])(Ir, ar, nr, !1, null, "427cc112", null)),
      Mr = jr.exports,
      kr = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "card-footer footer-description" }, [
          t._m(0),
          s("div", { staticClass: "footer-description-content" }, [
            s("p", [
              t._v("\n      Any  "),
              t._m(1),
              t._v(
                " incurred are charged monthly once the balance reaches at least ",
              ),
              "bank_transfer" == t.paymentMethod
                ? s("span", [t._v("$200")])
                : s("span", [t._v("$10")]),
              t._v(".\n    "),
            ]),
          ]),
        ]);
      },
      Lr = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "footer-description-title" }, [
            s("h4", [t._v("Charges for email overage and add-on features")]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("span", { staticClass: "tooltip-container" }, [
            s("span", { staticClass: "tooltip-link" }, [
              t._v("additional charges"),
            ]),
            s("span", { staticClass: "tooltip" }, [
              t._v("Email overage, SMS messaging, email archiving"),
            ]),
          ]);
        },
      ];
    function Gr(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function xr(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Gr(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : Gr(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var Ur = {
        name: "ExtraServiceDescription",
        computed: xr(
          xr(
            {},
            Object(T["c"])({
              paymentMethod: yt.getters.GET_PAYMENT_METHOD,
              subscription: yt.getters.GET_SUBSCRIPTION,
            }),
          ),
          {},
          {
            getPaymentDuration: function () {
              return 12 == this.subscription.billing_period
                ? "annually"
                : "quarterly";
            },
          },
        ),
      },
      Vr = Ur,
      $r = Object(b["a"])(Vr, kr, Lr, !1, null, null, null),
      Br = $r.exports;
    function Fr(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function Yr(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Fr(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : Fr(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var Hr = {
        name: "UpdatebillingPage",
        components: {
          PageHeader: Te,
          AjaxLoadingSpinner: De,
          DisplayMessage: xe,
          BillingSubscription: fi,
          BillingDetails: yi,
          BillingEmail: Ii,
          Invoices: Vi,
          UpdateEmailPopup: Ki,
          ExtraContactsPopup: sr,
          UpdatePaymentMethodPopup: Mr,
          ExtraServiceDescription: Br,
        },
        computed: Yr(
          {},
          Object(T["c"])({
            isInitialised: yt.getters.GET_IS_INITIALISED,
            invoiceLimit: yt.getters.GET_INVOICE_LIMIT,
            allowExtend: yt.getters.GET_ALLOW_EXTEND,
            subscription: yt.getters.GET_SUBSCRIPTION,
          }),
        ),
        mounted: function () {
          this.$store.dispatch(yt.actions.FETCH_BILLING_DETAILS, {
            invoice_limit: this.invoiceLimit,
          });
        },
      },
      zr = Hr,
      Wr = (s("6b10"), Object(b["a"])(zr, oi, ci, !1, null, "21b3640a", null)),
      Kr = Wr.exports,
      Xr = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "offboarding-container" },
          [
            s("DisplayMessage"),
            s(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: 0 == t.cancelReason.length,
                    expression: "cancelReason.length == 0",
                  },
                ],
              },
              [
                t._m(0),
                s(
                  "div",
                  {
                    staticClass: "content-container",
                    staticStyle: { height: "474px" },
                  },
                  [
                    s("div", { staticClass: "step-1 is-active" }, [
                      s("h2", [t._v("We're sad to see you go...")]),
                      t._m(1),
                      s("div", { staticClass: "form-card radio-options" }, [
                        s(
                          "label",
                          {
                            on: {
                              click: function (e) {
                                return t.setCancelReason("missing-feature");
                              },
                            },
                          },
                          [
                            s("img", {
                              attrs: {
                                src: "/static/smtp2go_assets/offboarding/offboarding-icon-1.svg",
                                alt: "Missing features",
                              },
                            }),
                            t._v(
                              "\n            Missing features I need\n          ",
                            ),
                          ],
                        ),
                        s(
                          "label",
                          {
                            on: {
                              click: function (e) {
                                return t.setCancelReason("switching");
                              },
                            },
                          },
                          [
                            s("img", {
                              attrs: {
                                src: "/static/smtp2go_assets/offboarding/offboarding-icon-2.svg",
                                alt: "Switching product",
                              },
                            }),
                            t._v(
                              "\n            Switching to another product\n          ",
                            ),
                          ],
                        ),
                        s(
                          "label",
                          {
                            on: {
                              click: function (e) {
                                return t.setCancelReason("expensive");
                              },
                            },
                          },
                          [
                            s("img", {
                              attrs: {
                                src: "/static/smtp2go_assets/offboarding/offboarding-icon-3.svg",
                                alt: "Too expensive",
                              },
                            }),
                            t._v("\n            Too expensive\n          "),
                          ],
                        ),
                        s(
                          "label",
                          {
                            on: {
                              click: function (e) {
                                return t.setCancelReason("technical-issue");
                              },
                            },
                          },
                          [
                            s("img", {
                              attrs: {
                                src: "/static/smtp2go_assets/offboarding/offboarding-icon-4.svg",
                                alt: "Technical issues",
                              },
                            }),
                            t._v("\n            Technical issues\n          "),
                          ],
                        ),
                        s(
                          "label",
                          {
                            on: {
                              click: function (e) {
                                return t.setCancelReason("other");
                              },
                            },
                          },
                          [
                            s("img", {
                              attrs: {
                                src: "/static/smtp2go_assets/offboarding/offboarding-icon-5.svg",
                                alt: "Other reason",
                              },
                            }),
                            t._v("\n            Other\n          "),
                          ],
                        ),
                      ]),
                      s(
                        "a",
                        {
                          staticClass: "cancel-link",
                          attrs: { href: "#" },
                          on: {
                            click: function (e) {
                              return t.cancelClose();
                            },
                          },
                        },
                        [t._v("Nevermind, I don't want to cancel")],
                      ),
                    ]),
                  ],
                ),
              ],
            ),
            s("MissingFeature", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: "missing-feature" == t.cancelReason,
                  expression: "cancelReason == 'missing-feature'",
                },
              ],
            }),
            s("Switching", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: "switching" == t.cancelReason,
                  expression: "cancelReason == 'switching'",
                },
              ],
            }),
            s("Expensive", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: "expensive" == t.cancelReason,
                  expression: "cancelReason == 'expensive'",
                },
              ],
            }),
            s("TechnicalIssue", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: "technical-issue" == t.cancelReason,
                  expression: "cancelReason == 'technical-issue'",
                },
              ],
            }),
            s("Other", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: "other" == t.cancelReason,
                  expression: "cancelReason == 'other'",
                },
              ],
            }),
            s("AjaxLoadingSpinner"),
          ],
          1,
        );
      },
      Qr = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "image-container" }, [
            s("figure", { staticClass: "step-1 is-active" }, [
              s("img", {
                attrs: {
                  src: "/static/smtp2go_assets/offboarding/offboarding-fig-1.webp",
                  alt: "SMTP2GO team",
                },
              }),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("p", { staticClass: "default-description" }, [
            t._v(
              "\n          Our postmasters are having a moment of silence in your honor.",
            ),
            s("br"),
            t._v(
              "\n          You’d make their day if you let us know why you’re leaving.",
            ),
            s("br"),
            t._v(
              "\n          Every bit of feedback helps make our service better!\n        ",
            ),
          ]);
        },
      ],
      qr = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", [
          t._m(0),
          s(
            "div",
            {
              staticClass: "content-container",
              staticStyle: { height: "474px" },
            },
            [
              s("div", { staticClass: "step-2 is-active" }, [
                s("h2", [t._v("Which features were missing?")]),
                s("div", { staticClass: "form-card" }, [
                  t._m(1),
                  s("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: t.cancelWhy,
                        expression: "cancelWhy",
                      },
                    ],
                    staticStyle: { resize: "none" },
                    attrs: { rows: "6", placeholder: "I was unable to" },
                    domProps: { value: t.cancelWhy },
                    on: {
                      input: function (e) {
                        e.target.composing || (t.cancelWhy = e.target.value);
                      },
                    },
                  }),
                  t._m(2),
                  s("footer", { staticClass: "form-card-footer" }, [
                    s(
                      "button",
                      {
                        staticClass: "btn red",
                        attrs: { type: "button" },
                        on: {
                          click: function (e) {
                            return t.closeAccountClick();
                          },
                        },
                      },
                      [
                        t._v(
                          "\n            Submit answer & cancel account\n          ",
                        ),
                      ],
                    ),
                    s(
                      "button",
                      {
                        staticClass: "btn button-outlined",
                        attrs: { type: "button" },
                        on: {
                          click: function (e) {
                            return t.setCancelReason("");
                          },
                        },
                      },
                      [t._v("\n            Go back\n          ")],
                    ),
                  ]),
                ]),
                s(
                  "a",
                  {
                    staticClass: "cancel-link",
                    attrs: { href: "#" },
                    on: {
                      click: function (e) {
                        return t.cancelClose();
                      },
                    },
                  },
                  [t._v("Nevermind, I don't want to cancel")],
                ),
              ]),
            ],
          ),
        ]);
      },
      Jr = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "image-container" }, [
            s("figure", { staticClass: "step-2 is-active" }, [
              s("img", {
                attrs: {
                  src: "/static/smtp2go_assets/offboarding/offboarding-fig-4.webp",
                  alt: "SMTP2GO team",
                },
              }),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("p", [
            t._v(
              "\n          What missing features did you encounter?\n          ",
            ),
            s("br"),
            t._v(
              "\n          (Be honest, our postmasters love getting feedback!)\n        ",
            ),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "bar-notice is-warning" }, [
            s("span", { staticClass: "notice-icon" }),
            s("span", { staticClass: "bar-notice-message" }, [
              t._v(
                "Have you contacted our technical support team about the issue?\n            Perhaps they can help resolve it for you!",
              ),
            ]),
          ]);
        },
      ];
    function Zr(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function to(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Zr(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : Zr(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var eo = {
        name: "MissingFeature",
        components: {},
        data: function () {
          return { cancelWhy: "" };
        },
        computed: to({}, Object(T["c"])({})),
        methods: to(
          to(
            to(
              {},
              Object(T["d"])({
                setCancelReason: Vt.mutations.SET_CANCEL_REASON,
                setSuccessMessage: B.mutations.SET_SUCCESS_MESSAGE,
              }),
            ),
            Object(T["b"])({
              closeAccount: Vt.actions.CLOSE_ACCOUNT,
              fetchPlanList: ct.actions.FETCH_PLAN_LIST,
            }),
          ),
          {},
          {
            cancelClose: function () {
              (this.$router.push({ name: "dashboard-changeplan" }),
                window.scrollTo({ top: 0, behavior: "smooth" }));
            },
            closeAccountClick: function () {
              var t = this;
              this.closeAccount({
                cancel_reason: "missing-feature",
                cancel_why: this.cancelWhy,
              }).then(
                function () {
                  t.$nextTick(function () {
                    t.fetchPlanList().then(function () {
                      (t.setSuccessMessage(
                        "Subscription successfully cancelled.",
                      ),
                        t.$router.push({ name: "dashboard-changeplan" }),
                        window.scrollTo({ top: 0, behavior: "smooth" }));
                    });
                  });
                },
                function (t) {
                  console.log(t);
                },
              );
            },
          },
        ),
        mounted: function () {},
      },
      so = eo,
      ao = (s("3199"), Object(b["a"])(so, qr, Jr, !1, null, "6271a02e", null)),
      no = ao.exports,
      io = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", [
          t._m(0),
          s(
            "div",
            {
              staticClass: "content-container",
              staticStyle: { height: "474px" },
            },
            [
              s("div", { staticClass: "step-3 is-active" }, [
                s("h2", [t._v("Switching to another product")]),
                s("div", { staticClass: "form-card" }, [
                  t._m(1),
                  s("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: t.cancelWhy,
                        expression: "cancelWhy",
                      },
                    ],
                    staticStyle: { resize: "none" },
                    attrs: {
                      rows: "6",
                      placeholder: "I am switching services because",
                    },
                    domProps: { value: t.cancelWhy },
                    on: {
                      input: function (e) {
                        e.target.composing || (t.cancelWhy = e.target.value);
                      },
                    },
                  }),
                  s("footer", { staticClass: "form-card-footer" }, [
                    s(
                      "button",
                      {
                        staticClass: "btn red",
                        attrs: { type: "button" },
                        on: {
                          click: function (e) {
                            return t.closeAccountClick();
                          },
                        },
                      },
                      [
                        t._v(
                          "\n            Submit answer & cancel account\n          ",
                        ),
                      ],
                    ),
                    s(
                      "button",
                      {
                        staticClass: "btn button-outlined",
                        attrs: { type: "button" },
                        on: {
                          click: function (e) {
                            return t.setCancelReason("");
                          },
                        },
                      },
                      [t._v("\n            Go back\n          ")],
                    ),
                  ]),
                ]),
                s(
                  "a",
                  {
                    staticClass: "cancel-link",
                    attrs: { href: "#" },
                    on: {
                      click: function (e) {
                        return t.cancelClose();
                      },
                    },
                  },
                  [t._v("Nevermind, I don't want to cancel")],
                ),
              ]),
            ],
          ),
        ]);
      },
      ro = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "image-container" }, [
            s("figure", { staticClass: "step-3 is-active" }, [
              s("img", {
                attrs: {
                  src: "/static/smtp2go_assets/offboarding/offboarding-fig-3.webp",
                  alt: "SMTP2GO team",
                },
              }),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("p", [
            t._v(
              "\n          What’s motivating your switch to a different SMTP service? ",
            ),
            s("br"),
            t._v(
              "\n          (Be honest, our postmasters love getting feedback!)\n        ",
            ),
          ]);
        },
      ];
    function oo(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function co(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? oo(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : oo(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var lo = {
        name: "Switching",
        components: {},
        data: function () {
          return { cancelWhy: "" };
        },
        computed: co({}, Object(T["c"])({})),
        methods: co(
          co(
            co(
              {},
              Object(T["d"])({
                setCancelReason: Vt.mutations.SET_CANCEL_REASON,
                setSuccessMessage: B.mutations.SET_SUCCESS_MESSAGE,
              }),
            ),
            Object(T["b"])({
              closeAccount: Vt.actions.CLOSE_ACCOUNT,
              fetchPlanList: ct.actions.FETCH_PLAN_LIST,
            }),
          ),
          {},
          {
            cancelClose: function () {
              (this.$router.push({ name: "dashboard-changeplan" }),
                window.scrollTo({ top: 0, behavior: "smooth" }));
            },
            closeAccountClick: function () {
              var t = this;
              this.closeAccount({
                cancel_reason: "switching",
                cancel_why: this.cancelWhy,
              }).then(
                function () {
                  t.$nextTick(function () {
                    t.fetchPlanList().then(function () {
                      (t.setSuccessMessage(
                        "Subscription successfully cancelled.",
                      ),
                        t.$router.push({ name: "dashboard-changeplan" }),
                        window.scrollTo({ top: 0, behavior: "smooth" }));
                    });
                  });
                },
                function (t) {
                  console.log(t);
                },
              );
            },
          },
        ),
        mounted: function () {},
      },
      uo = lo,
      po = (s("e912"), Object(b["a"])(uo, io, ro, !1, null, "5a5a8467", null)),
      _o = po.exports,
      mo = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", [
          t._m(0),
          s(
            "div",
            {
              staticClass: "content-container",
              staticStyle: { height: "474px" },
            },
            [
              s("div", { staticClass: "step-4 is-active" }, [
                s("h2", [t._v("Cancel or downgrade?")]),
                s("div", { staticClass: "form-card" }, [
                  t._m(1),
                  s("p", [
                    t._v("\n          Would you like to save by\n          "),
                    s(
                      "a",
                      {
                        attrs: { href: "#" },
                        on: {
                          click: function (e) {
                            return t.cancelClose();
                          },
                        },
                      },
                      [t._v("downgrading to a cheaper plan")],
                    ),
                    t._v("?\n        "),
                  ]),
                  s("footer", { staticClass: "form-card-footer" }, [
                    s(
                      "button",
                      {
                        staticClass: "btn red",
                        attrs: { type: "button" },
                        on: {
                          click: function (e) {
                            return t.closeAccountClick();
                          },
                        },
                      },
                      [t._v("\n            Cancel account\n          ")],
                    ),
                    s(
                      "button",
                      {
                        staticClass: "btn button-outlined",
                        attrs: { type: "button" },
                        on: {
                          click: function (e) {
                            return t.setCancelReason("");
                          },
                        },
                      },
                      [t._v("\n            Go back\n          ")],
                    ),
                  ]),
                ]),
                s(
                  "a",
                  {
                    staticClass: "cancel-link",
                    attrs: { href: "#" },
                    on: {
                      click: function (e) {
                        return t.cancelClose();
                      },
                    },
                  },
                  [t._v("Nevermind, I don't want to cancel")],
                ),
              ]),
            ],
          ),
        ]);
      },
      ho = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "image-container" }, [
            s("figure", { staticClass: "step-4 is-active" }, [
              s("img", {
                attrs: {
                  src: "/static/smtp2go_assets/offboarding/offboarding-fig-2.webp",
                  alt: "SMTP2GO team",
                },
              }),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("p", [
            t._v(
              "\n          Did you know all of our plans allow you to send\n          ",
            ),
            s("strong", { staticClass: "accent" }, [t._v("up to 3 times")]),
            t._v(
              " your monthly limit\n          (you just pay a little more if you go over).\n        ",
            ),
          ]);
        },
      ];
    function fo(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function Eo(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? fo(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : fo(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var vo = {
        name: "Expensive",
        components: {},
        computed: Eo({}, Object(T["c"])({})),
        methods: Eo(
          Eo(
            Eo(
              {},
              Object(T["d"])({
                setCancelReason: Vt.mutations.SET_CANCEL_REASON,
                setSuccessMessage: B.mutations.SET_SUCCESS_MESSAGE,
              }),
            ),
            Object(T["b"])({
              closeAccount: Vt.actions.CLOSE_ACCOUNT,
              fetchPlanList: ct.actions.FETCH_PLAN_LIST,
            }),
          ),
          {},
          {
            cancelClose: function () {
              (this.$router.push({ name: "dashboard-changeplan" }),
                window.scrollTo({ top: 0, behavior: "smooth" }));
            },
            closeAccountClick: function () {
              var t = this;
              this.closeAccount({
                cancel_reason: "expensive",
                cancel_why: "",
              }).then(
                function () {
                  t.$nextTick(function () {
                    t.fetchPlanList().then(function () {
                      (t.setSuccessMessage(
                        "Subscription successfully cancelled.",
                      ),
                        t.$router.push({ name: "dashboard-changeplan" }),
                        window.scrollTo({ top: 0, behavior: "smooth" }));
                    });
                  });
                },
                function (t) {
                  console.log(t);
                },
              );
            },
          },
        ),
        mounted: function () {},
      },
      bo = vo,
      go = (s("a2f4"), Object(b["a"])(bo, mo, ho, !1, null, "4ff6ec77", null)),
      Co = go.exports,
      To = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", [
          t._m(0),
          s(
            "div",
            {
              staticClass: "content-container",
              staticStyle: { height: "474px" },
            },
            [
              s("div", { staticClass: "step-5 is-active" }, [
                s("h2", [t._v("Which technical issues?")]),
                s("div", { staticClass: "form-card" }, [
                  t._m(1),
                  s("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: t.cancelWhy,
                        expression: "cancelWhy",
                      },
                    ],
                    staticStyle: { resize: "none" },
                    attrs: { rows: "6", placeholder: "I was struggling with" },
                    domProps: { value: t.cancelWhy },
                    on: {
                      input: function (e) {
                        e.target.composing || (t.cancelWhy = e.target.value);
                      },
                    },
                  }),
                  t._m(2),
                  s("footer", { staticClass: "form-card-footer" }, [
                    s(
                      "button",
                      {
                        staticClass: "btn red",
                        attrs: { type: "button" },
                        on: {
                          click: function (e) {
                            return t.closeAccountClick();
                          },
                        },
                      },
                      [
                        t._v(
                          "\n            Submit answer & cancel account\n          ",
                        ),
                      ],
                    ),
                    s(
                      "button",
                      {
                        staticClass: "btn button-outlined",
                        attrs: { type: "button" },
                        on: {
                          click: function (e) {
                            return t.setCancelReason("");
                          },
                        },
                      },
                      [t._v("\n            Go back\n          ")],
                    ),
                  ]),
                ]),
                s(
                  "a",
                  {
                    staticClass: "cancel-link",
                    attrs: { href: "#" },
                    on: {
                      click: function (e) {
                        return t.cancelClose();
                      },
                    },
                  },
                  [t._v("Nevermind, I don't want to cancel")],
                ),
              ]),
            ],
          ),
        ]);
      },
      Oo = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "image-container" }, [
            s("figure", { staticClass: "step-5 is-active" }, [
              s("img", {
                attrs: {
                  src: "/static/smtp2go_assets/offboarding/offboarding-fig-4.webp",
                  alt: "SMTP2GO team",
                },
              }),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("p", [
            t._v("\n          What issues have you experienced?"),
            s("br"),
            t._v(
              "\n          (Be honest, our postmasters love getting feedback!)\n        ",
            ),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "bar-notice is-warning" }, [
            s("span", { staticClass: "notice-icon" }),
            s("span", { staticClass: "bar-notice-message" }, [
              t._v(
                "Have you contacted our technical support team about the issue?\n            Perhaps they can help resolve it for you!",
              ),
            ]),
          ]);
        },
      ];
    function yo(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function Po(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? yo(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : yo(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var So = {
        name: "TechnicalIssue",
        components: {},
        data: function () {
          return { cancelWhy: "" };
        },
        computed: Po({}, Object(T["c"])({})),
        methods: Po(
          Po(
            Po(
              {},
              Object(T["d"])({
                setCancelReason: Vt.mutations.SET_CANCEL_REASON,
                setSuccessMessage: B.mutations.SET_SUCCESS_MESSAGE,
              }),
            ),
            Object(T["b"])({
              closeAccount: Vt.actions.CLOSE_ACCOUNT,
              fetchPlanList: ct.actions.FETCH_PLAN_LIST,
            }),
          ),
          {},
          {
            cancelClose: function () {
              (this.$router.push({ name: "dashboard-changeplan" }),
                window.scrollTo({ top: 0, behavior: "smooth" }));
            },
            closeAccountClick: function () {
              var t = this;
              this.closeAccount({
                cancel_reason: "technical-issue",
                cancel_why: this.cancelWhy,
              }).then(
                function () {
                  t.$nextTick(function () {
                    t.fetchPlanList().then(function () {
                      (t.setSuccessMessage(
                        "Subscription successfully cancelled.",
                      ),
                        t.$router.push({ name: "dashboard-changeplan" }),
                        window.scrollTo({ top: 0, behavior: "smooth" }));
                    });
                  });
                },
                function (t) {
                  console.log(t);
                },
              );
            },
          },
        ),
        mounted: function () {},
      },
      Ao = So,
      No = (s("d2b8"), Object(b["a"])(Ao, To, Oo, !1, null, "5188b8e2", null)),
      wo = No.exports,
      Do = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", [
          t._m(0),
          s(
            "div",
            {
              staticClass: "content-container",
              staticStyle: { height: "474px" },
            },
            [
              s("div", { staticClass: "step-6 is-active" }, [
                s("h2", [t._v("Other")]),
                s("div", { staticClass: "form-card" }, [
                  t._m(1),
                  s("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: t.cancelWhy,
                        expression: "cancelWhy",
                      },
                    ],
                    staticStyle: { resize: "none" },
                    attrs: {
                      rows: "6",
                      placeholder: "Please enter your reasons",
                    },
                    domProps: { value: t.cancelWhy },
                    on: {
                      input: function (e) {
                        e.target.composing || (t.cancelWhy = e.target.value);
                      },
                    },
                  }),
                  t._m(2),
                  s("footer", { staticClass: "form-card-footer" }, [
                    s(
                      "button",
                      {
                        staticClass: "btn red",
                        attrs: { type: "button" },
                        on: {
                          click: function (e) {
                            return t.closeAccountClick();
                          },
                        },
                      },
                      [
                        t._v(
                          "\n            Submit answer & cancel account\n          ",
                        ),
                      ],
                    ),
                    s(
                      "button",
                      {
                        staticClass: "btn button-outlined",
                        attrs: { type: "button" },
                        on: {
                          click: function (e) {
                            return t.setCancelReason("");
                          },
                        },
                      },
                      [t._v("\n            Go back\n          ")],
                    ),
                  ]),
                ]),
                s(
                  "a",
                  {
                    staticClass: "cancel-link",
                    attrs: { href: "#" },
                    on: {
                      click: function (e) {
                        return t.cancelClose();
                      },
                    },
                  },
                  [t._v("Nevermind, I don't want to cancel")],
                ),
              ]),
            ],
          ),
        ]);
      },
      Ro = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "image-container" }, [
            s("figure", { staticClass: "step-6 is-active" }, [
              s("img", {
                attrs: {
                  src: "/static/smtp2go_assets/offboarding/offboarding-fig-1.webp",
                  alt: "SMTP2GO team",
                },
              }),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("p", [
            t._v("\n          We'd love to find out why you chose to cancel."),
            s("br"),
            t._v("\n          Let us know below, if you can!\n        "),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "bar-notice is-warning" }, [
            s("span", { staticClass: "notice-icon" }),
            s("span", { staticClass: "bar-notice-message" }, [
              t._v(
                "Have you contacted our technical support team about the issue?\n            Perhaps they can help resolve it for you!",
              ),
            ]),
          ]);
        },
      ];
    function Io(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function jo(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Io(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : Io(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var Mo = {
        name: "Other",
        components: {},
        data: function () {
          return { cancelWhy: "" };
        },
        computed: jo({}, Object(T["c"])({})),
        methods: jo(
          jo(
            jo(
              {},
              Object(T["d"])({
                setCancelReason: Vt.mutations.SET_CANCEL_REASON,
                setSuccessMessage: B.mutations.SET_SUCCESS_MESSAGE,
              }),
            ),
            Object(T["b"])({
              closeAccount: Vt.actions.CLOSE_ACCOUNT,
              fetchPlanList: ct.actions.FETCH_PLAN_LIST,
            }),
          ),
          {},
          {
            cancelClose: function () {
              (this.$router.push({ name: "dashboard-changeplan" }),
                window.scrollTo({ top: 0, behavior: "smooth" }));
            },
            closeAccountClick: function () {
              var t = this;
              this.closeAccount({
                cancel_reason: "other",
                cancel_why: this.cancelWhy,
              }).then(
                function () {
                  t.$nextTick(function () {
                    t.fetchPlanList().then(function () {
                      (t.setSuccessMessage(
                        "Subscription successfully cancelled.",
                      ),
                        t.$router.push({ name: "dashboard-changeplan" }),
                        window.scrollTo({ top: 0, behavior: "smooth" }));
                    });
                  });
                },
                function (t) {
                  console.log(t);
                },
              );
            },
          },
        ),
        mounted: function () {},
      },
      ko = Mo,
      Lo = (s("198f"), Object(b["a"])(ko, Do, Ro, !1, null, "81cfaac4", null)),
      Go = Lo.exports;
    function xo(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function Uo(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? xo(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : xo(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var Vo = {
        name: "ClosePage",
        components: {
          DisplayMessage: xe,
          MissingFeature: no,
          Switching: _o,
          Expensive: Co,
          TechnicalIssue: wo,
          Other: Go,
          AjaxLoadingSpinner: De,
        },
        data: function () {
          return {};
        },
        computed: Uo(
          {},
          Object(T["c"])({ cancelReason: Vt.getters.GET_CANCEL_REASON }),
        ),
        methods: Uo(
          Uo(
            {},
            Object(T["d"])({ setCancelReason: Vt.mutations.SET_CANCEL_REASON }),
          ),
          {},
          {
            cancelClose: function () {
              (this.$router.push({ name: "dashboard-changeplan" }),
                window.scrollTo({ top: 0, behavior: "smooth" }));
            },
          },
        ),
        mounted: function () {},
      },
      $o = Vo,
      Bo = (s("4d7c"), Object(b["a"])($o, Xr, Qr, !1, null, "83691054", null)),
      Fo = Bo.exports,
      Yo = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "slideshow-splash splash-0" }, [
          s("div", { staticClass: "slideshow-container" }, [
            s(
              "div",
              {
                staticClass: "slideshow-progress",
                class: { "step-2": t.displayBackgroundAnimation },
              },
              [t._m(0)],
            ),
            s(
              "div",
              { staticClass: "slideshow-items" },
              [
                s("transition", { attrs: { name: "fade" } }, [
                  t.displayContent
                    ? s("div", { staticClass: "slideshow-item item-rest" }, [
                        s(
                          "div",
                          {
                            staticClass: "slideshow-item-content",
                            staticStyle: { "text-align": "center" },
                          },
                          [
                            s("img", {
                              attrs: { src: t.imageURLS["activate-load"] },
                            }),
                          ],
                        ),
                        s(
                          "h2",
                          {
                            staticClass: "slideshow-item-title",
                            staticStyle: { "text-align": "center" },
                          },
                          [
                            t._v(
                              "\n            Activating your Account\n          ",
                            ),
                          ],
                        ),
                        t.error
                          ? s(
                              "p",
                              {
                                staticClass: "slideshow-item-copy",
                                staticStyle: {
                                  color: "red",
                                  "text-align": "center",
                                },
                              },
                              [
                                t._v(
                                  "\n            " +
                                    t._s(t.message) +
                                    "\n          ",
                                ),
                              ],
                            )
                          : t._e(),
                        t.error
                          ? t._e()
                          : s(
                              "p",
                              {
                                staticClass: "slideshow-item-copy",
                                staticStyle: { "text-align": "center" },
                              },
                              [
                                t._v(
                                  "\n            " +
                                    t._s(t.message) +
                                    "\n          ",
                                ),
                              ],
                            ),
                        s("div", { staticClass: "slideshow-item-footer" }),
                      ])
                    : t._e(),
                ]),
              ],
              1,
            ),
          ]),
        ]);
      },
      Ho = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "slide-2" }, [
            s("div", { staticClass: "svg-block-spinner" }),
            s("div", { staticClass: "svg-block-email-left" }),
            s("div", { staticClass: "svg-block-email-right" }),
            s("div", { staticClass: "svg-block-blob blob-1" }),
            s("div", { staticClass: "svg-block-blob blob-2" }),
          ]);
        },
      ];
    function zo(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        (e &&
          (a = a.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, a));
      }
      return s;
    }
    function Wo(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? zo(Object(s), !0).forEach(function (e) {
              Object(O["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : zo(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var Ko = {
        name: "ActivatePage",
        mixins: [],
        components: {},
        data: function () {
          return {
            displayContent: !1,
            displayBackgroundAnimation: !1,
            error: !1,
            message: "Please wait while we activate your account",
          };
        },
        computed: Wo(
          {},
          Object(T["c"])({
            imageURLS: B.getters.GET_IMAGE_URLS,
            activationData: tt.getters.GET_ACTIVATION_DATA,
          }),
        ),
        mounted: function () {
          var t = this;
          window.dataLayer.push({
            event: "Step 4 - Email Verification and Account Activation",
          });
          var e = this.$cookies.get("redditCID"),
            s = { event: "SignUp", conversionId: crypto.randomUUID() };
          ("undefined" !== typeof e &&
            null != e &&
            "" != e &&
            (s["clickId"] = e),
            window.dataLayer.push(s),
            (this.displayContent = !0),
            this.$nextTick(function () {
              setTimeout(function () {
                t.displayBackgroundAnimation = !0;
              }, 100);
            }));
          var a = this.$cookies.get("growSumoPartnerKey");
          this.$store
            .dispatch(tt.actions.ACTIVATE_ACCOUNT, {
              partner_key: a,
              reddit_click_id: e,
            })
            .then(
              function () {
                (null == t.activationData && (window.location = "/login/"),
                  "undefined" !== typeof a &&
                    null != a &&
                    "" != a &&
                    t.$store.dispatch(tt.actions.SAVE_PARTNER_KEY, {
                      partner_key: a,
                    }),
                  (window.dataLayer = window.dataLayer || []),
                  dataLayer.push({
                    event: "free_plan",
                    pagePath: "https://app.smtp2go.com/onboarding/activate/",
                  }),
                  void 0 !== window.linktr &&
                    window.lintrk("track", { conversion_id: 9419308 }),
                  (window.uetq = window.uetq || []),
                  window.uetq.push("event", "SignUp", {
                    event_category: "147389",
                  }),
                  t.$nextTick(function () {
                    setTimeout(function () {
                      void 0 == t.activationData.wanted_plan ||
                      null == t.activationData.wanted_plan ||
                      700 === t.activationData.wanted_plan ||
                      702 === t.activationData.wanted_plan
                        ? (window.location = "/dashboard/main/")
                        : (t.$cookies.set(
                            "wantedPlan",
                            t.activationData.wanted_plan,
                          ),
                          t.$nextTick(function () {
                            window.location = "/onboarding/changeplan/";
                          }));
                    }, 500);
                  }));
              },
              function (e) {
                ((t.error = !0), (t.message = e));
              },
            );
        },
      },
      Xo = Ko,
      Qo = Object(b["a"])(Xo, Yo, Ho, !1, null, null, null),
      qo = Qo.exports;
    a["default"].use(te["a"]);
    var Jo = [
        {
          path: "/dashboard/",
          component: re,
          children: [
            {
              path: "main/",
              name: "main",
              beforeEnter: function () {
                return ((window.location.href = "/dashboard/main/"), !1);
              },
            },
          ],
        },
        {
          path: "/account/",
          component: re,
          children: [
            {
              path: "changeplan/",
              name: "dashboard-changeplan",
              component: oa,
              meta: { changeplan: !0, title: "SMTP2GO | Change Plan" },
            },
            { path: "confirmplan/", component: ri, meta: { confirmplan: !0 } },
            {
              path: "updatebilling/",
              name: "updatebilling",
              component: Kr,
              meta: { title: "SMTP2GO | Update Billing" },
            },
            {
              path: "updatebilling/",
              name: "updatebilling-redirect",
              beforeEnter: function () {
                return ((window.location.href = "/account/updatebilling/"), !1);
              },
            },
            {
              path: "lastest-invoice/",
              name: "latest-invoice-redirect",
              beforeEnter: function () {
                return (
                  window.open("/dashboard/latest-invoice-redirect/", "_blank"),
                  !1
                );
              },
            },
            {
              path: "close/",
              name: "close",
              component: Fo,
              meta: { title: "SMTP2GO | Close Account" },
            },
          ],
        },
        {
          path: "/onboarding/",
          component: me,
          children: [
            { path: "activate/:token", component: qo, name: "activate" },
            {
              path: "changeplan/",
              name: "onboarding-changeplan",
              component: oa,
              meta: { changeplan: !0 },
            },
            { path: "confirmplan/", component: ri, meta: { confirmplan: !0 } },
          ],
        },
      ],
      Zo = new te["a"]({ mode: "history", routes: Jo });
    Zo.beforeEach(function (t, e, s) {
      var a = Kt.getters["onboarding/GET_ONBOARDING_STATE"];
      (t.matched.some(function (t) {
        return t.meta.addDomain;
      })
        ? a.has_sender_domain && s({ name: "choose-service" })
        : t.matched.some(function (t) {
              return t.meta.chooseService;
            })
          ? (a.has_smtp_user || a.has_api_key) && s({ name: "main" })
          : t.matched.some(function (t) {
              return t.meta.confirmplan;
            }) &&
            (e.meta.changeplan || s({ name: "main" })),
        "dashboard-changeplan" == t.name &&
          (o()(".page-sidebar-menu .sub-menu .active").removeClass("active"),
          o()('.page-sidebar-menu .sub-menu [href*="changeplan"]')
            .parents()
            .addClass("active")),
        "updatebilling" == t.name &&
          (o()(".page-sidebar-menu .sub-menu .active").removeClass("active"),
          o()('.page-sidebar-menu .sub-menu [href*="updatebilling"]')
            .parents()
            .addClass("active")),
        void 0 != t.meta.title && (document.title = t.meta.title),
        s());
    });
    var tc = Zo;
    (a["default"].use(Qt.a),
      a["default"].use(Jt.a),
      (a["default"].config.productionTip = !1),
      (a["default"].config.silent = !0),
      (a["default"].prototype.$eventBus = new a["default"]()),
      "undefined" !== typeof PAGE_DATA &&
        (Kt.commit(B.mutations.SET_CSRF_KEY, PAGE_DATA.csrfkey),
        Kt.commit(
          tt.mutations.SET_ONBOARDING_STATE,
          PAGE_DATA.onboardingState,
        )),
      "undefined" !== typeof IMAGE_URLS &&
        Kt.commit(B.mutations.SET_IMAGE_URLS, IMAGE_URLS),
      "undefined" !== typeof END_POINTS &&
        Kt.commit(B.mutations.SET_END_POINTS, END_POINTS.urls()),
      (a["default"].prototype.$sliderOptions = Zt),
      J(Kt),
      new a["default"]({
        store: Kt,
        router: tc,
        render: function (t) {
          return t(C);
        },
      }).$mount("#merchandising"));
  },
  5849: function (t, e, s) {
    "use strict";
    s("fc1c");
  },
  6430: function (t, e, s) {},
  "649f": function (t, e, s) {
    "use strict";
    s("7e65");
  },
  6608: function (t, e, s) {},
  6630: function (t, e, s) {},
  "6b10": function (t, e, s) {
    "use strict";
    s("c99b");
  },
  "6db9": function (t, e, s) {},
  "6e47": function (t, e, s) {
    "use strict";
    s("ad91");
  },
  "6f36": function (t, e, s) {},
  "706c": function (t, e, s) {},
  "78c4": function (t, e, s) {
    "use strict";
    s("706c");
  },
  "7a0d": function (t, e, s) {},
  "7bf5": function (t, e, s) {},
  "7e65": function (t, e, s) {},
  8707: function (t, e, s) {
    "use strict";
    s("0615");
  },
  "8e89": function (t, e, s) {},
  9851: function (t, e, s) {
    "use strict";
    s("cf01");
  },
  9863: function (t, e, s) {},
  "9ad6": function (t, e, s) {
    "use strict";
    s("ae2f");
  },
  "9cea": function (t, e, s) {
    "use strict";
    s("8e89");
  },
  a244: function (t, e, s) {
    "use strict";
    s("0f91");
  },
  a2f4: function (t, e, s) {
    "use strict";
    s("3952");
  },
  a99e: function (t, e, s) {
    "use strict";
    s("e75e");
  },
  ab50: function (t, e, s) {},
  acab: function (t, e, s) {
    "use strict";
    s("6608");
  },
  ad69: function (t, e, s) {},
  ad91: function (t, e, s) {},
  ae2f: function (t, e, s) {},
  b0ce: function (t, e, s) {
    "use strict";
    s("6f36");
  },
  b485: function (t, e, s) {
    "use strict";
    s("9863");
  },
  b762: function (t, e, s) {},
  bbbc: function (t, e, s) {},
  c99b: function (t, e, s) {},
  cf01: function (t, e, s) {},
  d04b: function (t, e, s) {
    "use strict";
    s("b762");
  },
  d2b8: function (t, e, s) {
    "use strict";
    s("3079");
  },
  d4c5: function (t, e, s) {
    "use strict";
    s("1823");
  },
  d8c0: function (t, e, s) {
    "use strict";
    s("7bf5");
  },
  ddef: function (t, e, s) {
    "use strict";
    s("6630");
  },
  de2c: function (t, e, s) {
    "use strict";
    s("ab50");
  },
  e21e: function (t) {
    t.exports = JSON.parse(
      '{"sliderOptions":{"min":1,"max":6,"tooltip":"none","height":"12px","dotSize":16}}',
    );
  },
  e31d: function (t, e, s) {
    "use strict";
    s("4632");
  },
  e75e: function (t, e, s) {},
  e912: function (t, e, s) {
    "use strict";
    s("3d99");
  },
  f084: function (t, e, s) {
    "use strict";
    s("38f8");
  },
  f83f: function (t, e, s) {},
  fc1c: function (t, e, s) {},
  ffdc: function (t, e, s) {
    "use strict";
    s("f83f");
  },
});
//# sourceMappingURL=app.5eb955d8.js.map
