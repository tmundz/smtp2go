(function (t) {
  function e(e) {
    for (
      var i, o, r = e[0], c = e[1], l = e[2], d = 0, h = [];
      d < r.length;
      d++
    )
      ((o = r[d]),
        Object.prototype.hasOwnProperty.call(n, o) && n[o] && h.push(n[o][0]),
        (n[o] = 0));
    for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (t[i] = c[i]);
    u && u(e);
    while (h.length) h.shift()();
    return (a.push.apply(a, l || []), s());
  }
  function s() {
    for (var t, e = 0; e < a.length; e++) {
      for (var s = a[e], i = !0, r = 1; r < s.length; r++) {
        var c = s[r];
        0 !== n[c] && (i = !1);
      }
      i && (a.splice(e--, 1), (t = o((o.s = s[0]))));
    }
    return t;
  }
  var i = {},
    n = { app: 0 },
    a = [];
  function o(e) {
    if (i[e]) return i[e].exports;
    var s = (i[e] = { i: e, l: !1, exports: {} });
    return (t[e].call(s.exports, s, s.exports, o), (s.l = !0), s.exports);
  }
  ((o.m = t),
    (o.c = i),
    (o.d = function (t, e, s) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s });
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
      var s = Object.create(null);
      if (
        (o.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          o.d(
            s,
            i,
            function (e) {
              return t[e];
            }.bind(null, i),
          );
      return s;
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
  (a.push([0, "chunk-vendors"]), s());
})({
  0: function (t, e, s) {
    t.exports = s("56d7");
  },
  "117b": function (t, e, s) {
    "use strict";
    var i = s("9672"),
      n = s.n(i);
    n.a;
  },
  "153a": function (t, e, s) {
    "use strict";
    var i = s("29f8"),
      n = s.n(i);
    n.a;
  },
  "29f8": function (t, e, s) {},
  "41d0": function (t) {
    t.exports = JSON.parse(
      '{"requestPoint":"Subaccounts","searchPlaceHolder":"Search for a subaccount...","displayColumns":[{"id":"name","label":"Name","active":true},{"id":"logIn","label":"","active":true},{"id":"status","label":"Status","filterable":true,"active":true},{"id":"team","label":"Team Members","filterable":false,"active":true},{"id":"id","label":"ID","filterable":true,"active":false},{"id":"usage","label":"Usage","filterable":true,"active":true},{"id":"plan","label":"Plan","filterable":true,"active":false},{"id":"dedip","label":"Dedicated IP","filterable":true,"active":false},{"id":"ippool","label":"IP Pool","filterable":true,"active":false},{"id":"archive","label":"Archiving","filterable":true,"active":false},{"id":"sms","label":"SMS","filterable":true,"active":false},{"id":"2fa","label":"2FA","filterable":true,"active":false},{"id":"region","label":"Data region","filterable":true,"active":false}],"searchOptions":{},"statesToDisplay":[{"label":"All","id":"all"},{"label":"Active","id":"active"},{"label":"Suspended","id":"suspended"},{"label":"Closed","id":"closed"}],"regions":[{"id":"us","label":"United States"},{"id":"eu","label":"Europe"},{"id":"au","label":"Australia"}],"smsLimitOptions":[10,100,1000,2000,5000,10000,20000,50000,75000,100000]}',
    );
  },
  4678: function (t, e, s) {
    var i = {
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
      var e = a(t);
      return s(e);
    }
    function a(t) {
      if (!s.o(i, t)) {
        var e = new Error("Cannot find module '" + t + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      return i[t];
    }
    ((n.keys = function () {
      return Object.keys(i);
    }),
      (n.resolve = a),
      (t.exports = n),
      (n.id = "4678"));
  },
  "56d7": function (t, e, s) {
    "use strict";
    s.r(e);
    (s("cadf"), s("551c"), s("f751"), s("097d"));
    var i,
      n,
      a = s("2b0e"),
      o = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { attrs: { id: "subaccounts" }, on: { scrollToPos: t.onScrollPos } },
          [
            s("header", { staticClass: "sg-feature--header has-functions" }, [
              s("h3", { staticClass: "page-title" }, [
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
                            y1: ".095947",
                            y2: "34.0959",
                          },
                        },
                        [
                          s("stop", {
                            attrs: { offset: "0", "stop-color": "#52b3ee" },
                          }),
                          s("stop", {
                            attrs: { offset: "1", "stop-color": "#3ca4e3" },
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
                          y: ".095947",
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
                              d: "m23.0952 17.0959-4.375 2.5 4.375 2.5 4.375-2.5z",
                            },
                          }),
                          s("path", {
                            attrs: {
                              d: "m11.0952 17.0959-4.37499 2.5 4.37499 2.5 4.375-2.5z",
                            },
                          }),
                          s("path", {
                            attrs: {
                              d: "m18.7202 19.5959v4.375l4.375 2.5 4.375-2.5v-4.375",
                            },
                          }),
                          s("path", {
                            attrs: {
                              d: "m6.72021 19.5959v4.375l4.37499 2.5 4.375-2.5v-4.375",
                            },
                          }),
                          s("path", { attrs: { d: "m23.0952 22.0959v4.375" } }),
                          s("path", { attrs: { d: "m11.0952 22.0959v4.375" } }),
                          s("path", {
                            attrs: {
                              d: "m17.0952 7.72095-4.375 2.49995 4.375 2.5 4.375-2.5z",
                            },
                          }),
                          s("path", {
                            attrs: {
                              d: "m12.7202 10.2209v4.375l4.375 2.5 4.375-2.5v-4.375",
                            },
                          }),
                          s("path", { attrs: { d: "m17.0952 12.7209v4.375" } }),
                        ],
                      ),
                    ],
                    1,
                  ),
                ]),
                s("button", {
                  staticClass: "icon-back hide",
                  on: {
                    click: function (e) {
                      return (e.preventDefault(), t.onBackClicked(e));
                    },
                  },
                }),
                s("span", { staticClass: "page-title-text" }, [
                  t._v(" Subaccounts"),
                ]),
              ]),
              t._m(0),
            ]),
            t.showInfoSplash ? s("info-splash") : t._e(),
            t.showUpgradeSplash ? s("upgrade-splash") : t._e(),
            s("settings-subaccounts", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !t.showUpgradeSplash,
                  expression: "!showUpgradeSplash",
                },
              ],
              ref: "subaccounts",
              on: { scrollParent: t.onScrollParent },
            }),
          ],
          1,
        );
      },
      r = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "lead-toggle" }, [
            s("p", [
              t._v(
                "\n        Subaccounts allow you to separate your customers' activity from each other, \n        and are perfect for agencies and resellers with multiple customers. \n        See ",
              ),
              s(
                "a",
                {
                  staticClass: "external-icon",
                  attrs: {
                    href: "https://support.smtp2go.com/hc/en-gb/articles/900004307303",
                    target: "_BLANK",
                  },
                },
                [t._v("more info")],
              ),
              t._v(" about subaccounts.\n      "),
            ]),
          ]);
        },
      ],
      c = (s("8e6e"), s("ac6a"), s("456d"), s("ade3")),
      l =
        (s("0d6d"),
        Object.freeze({
          SATBOX_EDIT_CLICKED: "satbox-edit-clicked",
          SATBOX_LOGIN_AS_CLICKED: "satbox-login-as-clicked",
          SATBOX_REMOVE_CLICKED: "satbox-remove-clicked",
          BACK_TO_MAIN_PAGE: "back-to-main-page",
          ADD_SUBACCOUNT_CLICKED: "add-subaccount-clicked",
          REOPEN_SUBACCOUNT_CLICKED: "reopen-subaccount-clicked",
          TOGGLE_ARCHIVING_CLICKED: "toggle-archiving-clicked",
          TOGGLE_SMS_CLICKED: "toggle-sms-clicked",
          TOGGLE_2FA_CLICKED: "toggle-2fa-clicked",
          ADD_EDIT_SUBACCOUNT_REQUEST: "add-edit-subaccount-request",
          ADD_EDIT_SUBACCOUNT_SUCCEEDED: "add-edit-subaccount-succeeded",
          ADD_EDIT_SUBACCOUNT_FAILED: "add-edit-subaccount-failed",
          PLAN_CHANGED: "plan-changed",
          WORKING_STATE_CHANGED: "working-state-changed",
        })),
      u = l,
      d = s("2f62"),
      h = s("3835"),
      p =
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
                    var s = Object(h["a"])(e, 2),
                      i = s[0],
                      n = s[1];
                    t.$eventBus.$on(i, n);
                  },
                ),
                (this.mixinEventListener_isOn = !0));
            },
            mixinEventListener_off: function () {
              var t = this;
              (Object.entries(this.mixinEventListener_eventMap).forEach(
                function (e) {
                  var s = Object(h["a"])(e, 2),
                    i = s[0],
                    n = s[1];
                  t.$eventBus.$off(i, n);
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
      m = p,
      _ = (s("a481"), s("c46f"));
    function f(t, e) {
      return Object(_["a"])(
        e,
        function (e, s, i) {
          return (
            (e[i] = Object(_["a"])(
              s,
              function (e, s, i) {
                return ((e[i] = s.replace(t, "")), e);
              },
              {},
            )),
            e
          );
        },
        {},
      );
    }
    function b(t, e, s) {
      var i = t.indexOf("?") > -1 ? "&" : "?";
      return null !== s && void 0 !== s && s.length > 0
        ? t + i + e + "=" + encodeURIComponent(s)
        : t;
    }
    var g = "root/",
      v = {
        getters: {
          GET_IS_AJAX_RUNNING: g + "GET_IS_AJAX_RUNNING",
          GET_BACKEND_URL: g + "GET_BACKEND_URL",
          GET_END_POINTS: g + "GET_END_POINTS",
          GET_IMAGE_URLS: g + "GET_IMAGE_URLS",
          GET_SUCCESS_MESSAGE: g + "GET_SUCCESS_MESSAGE",
          GET_ERROR_MESSAGE: g + "GET_ERROR_MESSAGE",
          GET_IS_QUIET_REQUEST: g + "GET_IS_QUIET_REQUEST",
          GET_MASTER_REGION: g + "GET_MASTER_REGION",
        },
        mutations: {
          SET_CSRF_KEY: g + "SET_CSRF_KEY",
          SET_END_POINTS: g + "END_POINTS",
          SET_IMAGE_URLS: g + "SET_IMAGE_URLS",
          INC_RUNNING_AJAX_REQUESTS: g + "INC_RUNNING_AJAX_REQUESTS",
          DEC_RUNNING_AJAX_REQUESTS: g + "DEC_RUNNING_AJAX_REQUESTS",
          SET_SUCCESS_MESSAGE: g + "SET_SUCCESS_MESSAGE",
          SET_ERROR_MESSAGE: g + "SET_ERROR_MESSAGE",
          CLEAR_SUCCESS_MESSAGE: g + "CLEAR_SUCCESS_MESSAGE",
          CLEAR_ERROR_MESSAGE: g + "CLEAR_ERROR_MESSAGE",
          SET_IS_QUIET_REQUEST: g + "SET_IS_QUIET_REQUEST",
          SET_MASTER_REGION: g + "SET_MASTER_REGION",
        },
        actions: { UPDATE_SUCCESS_MESSAGE: g + "UPDATE_SUCCESS_MESSAGE" },
      },
      C = f(g, v),
      S = {
        running_ajax_requests: 0,
        csrf_key: "",
        end_points: {},
        image_urls: {},
        success_message: null,
        error_message: null,
        is_quiet_request: !1,
        master_region: "us",
      },
      E =
        ((i = {}),
        Object(c["a"])(i, C.getters.GET_IS_AJAX_RUNNING, function (t) {
          return t.running_ajax_requests > 0;
        }),
        Object(c["a"])(i, C.getters.GET_END_POINTS, function (t) {
          return t.end_points;
        }),
        Object(c["a"])(i, C.getters.GET_BACKEND_URL, function (t) {
          return function (e, s) {
            var i = b(t.end_points[e], "action", s);
            return b(i, "CSRF_key", t.csrf_key);
          };
        }),
        Object(c["a"])(i, C.getters.GET_IMAGE_URLS, function (t) {
          return t.image_urls;
        }),
        Object(c["a"])(i, C.getters.GET_SUCCESS_MESSAGE, function (t) {
          return t.success_message;
        }),
        Object(c["a"])(i, C.getters.GET_ERROR_MESSAGE, function (t) {
          return t.error_message;
        }),
        Object(c["a"])(i, C.getters.GET_IS_QUIET_REQUEST, function (t) {
          return t.is_quiet_request;
        }),
        Object(c["a"])(i, C.getters.GET_MASTER_REGION, function (t) {
          return t.master_region;
        }),
        i),
      T =
        ((n = {}),
        Object(c["a"])(n, C.mutations.SET_CSRF_KEY, function (t, e) {
          t.csrf_key = e;
        }),
        Object(c["a"])(n, C.mutations.SET_END_POINTS, function (t, e) {
          t.end_points = e;
        }),
        Object(c["a"])(n, C.mutations.SET_IMAGE_URLS, function (t, e) {
          t.image_urls = e;
        }),
        Object(c["a"])(n, C.mutations.INC_RUNNING_AJAX_REQUESTS, function (t) {
          t.running_ajax_requests++;
        }),
        Object(c["a"])(n, C.mutations.DEC_RUNNING_AJAX_REQUESTS, function (t) {
          t.running_ajax_requests--;
        }),
        Object(c["a"])(n, C.mutations.SET_SUCCESS_MESSAGE, function (t, e) {
          t.success_message = e;
        }),
        Object(c["a"])(n, C.mutations.SET_ERROR_MESSAGE, function (t, e) {
          t.error_message = e;
        }),
        Object(c["a"])(n, C.mutations.CLEAR_SUCCESS_MESSAGE, function (t) {
          t.success_message = null;
        }),
        Object(c["a"])(n, C.mutations.CLEAR_ERROR_MESSAGE, function (t) {
          t.error_message = null;
        }),
        Object(c["a"])(n, C.mutations.SET_IS_QUIET_REQUEST, function (t, e) {
          t.is_quiet_request = e;
        }),
        Object(c["a"])(n, C.mutations.SET_MASTER_REGION, function (t, e) {
          t.master_region = e;
        }),
        n),
      O = Object(c["a"])({}, C.actions.UPDATE_SUCCESS_MESSAGE, function (t, e) {
        var s = e.success_message;
        (t.commit(C.mutations.SET_SUCCESS_MESSAGE, s),
          setTimeout(function () {
            t.commit(C.mutations.CLEAR_SUCCESS_MESSAGE);
          }, 5e3));
      }),
      w = { namespaced: !0, state: S, getters: E, mutations: T, actions: O },
      A = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "info-splash splash-subaccounts is-visible" },
          [
            t._m(0),
            s("h2", [
              t._v("Separate your customers' activity with subaccounts"),
            ]),
            s("p", { staticClass: "lead-in" }, [
              t._v(
                "Subaccounts are designed for development agencies with customers who need to send emails. Each subaccount can login and view/manage their account, while billing is handled within your agency account.",
              ),
            ]),
            s("p", [
              t.apMetadata.disable_add
                ? t._e()
                : s(
                    "button",
                    {
                      staticClass: "btn green hide-splash",
                      on: { click: t.continueToSubaccountsClick },
                    },
                    [t._v("Continue")],
                  ),
            ]),
          ],
        );
      },
      x = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("figure", [
            s("img", {
              attrs: {
                src: "/static/smtp2go_assets/splash-subaccounts.png",
                srcset: "/static/smtp2go_assets/splash-subaccounts@2x.png 2x",
                alt: "SMTP2GO",
                width: "500",
              },
            }),
          ]);
        },
      ],
      y = {
        name: "InfoSplash",
        data: function () {
          return { apMetadata: PAGE_DATA.apMetadata };
        },
        methods: {
          continueToSubaccountsClick: function () {
            (this.$eventBus.$emit("hide-splash"),
              document
                .querySelector(".page-content")
                .classList.remove("splash-on"));
          },
        },
      },
      P = y,
      I = s("2877"),
      k = Object(I["a"])(P, A, x, !1, null, null, null),
      j = k.exports,
      D = function () {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      L = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "div",
            { staticClass: "info-splash splash-subaccounts is-visible" },
            [
              s("figure", [
                s("img", {
                  attrs: {
                    src: "/static/smtp2go_assets/splash-subaccounts.png",
                    srcset:
                      "/static/smtp2go_assets/splash-subaccounts@2x.png 2x",
                    alt: "SMTP2GO",
                    width: "500",
                  },
                }),
              ]),
              s("h2", [
                t._v("Separate your customers' activity with subaccounts"),
              ]),
              s("p", { staticClass: "lead-in" }, [
                t._v(
                  "Subaccounts are designed for development agencies with customers who need to send emails. Each subaccount can login and view/manage their account, while billing is handled within your agency account.",
                ),
              ]),
              s("p", { staticClass: "splash-block-button" }, [
                s(
                  "a",
                  {
                    staticClass: "btn btn-outlined",
                    attrs: {
                      href: "https://support.smtp2go.com/hc/en-gb/articles/900004307303-Subaccounts",
                      target: "_blank",
                    },
                  },
                  [t._v("See our guide")],
                ),
                t._v(" \n    "),
                s(
                  "a",
                  {
                    staticClass: "btn green",
                    attrs: { href: "/account/changeplan/" },
                  },
                  [t._v("See Upgrade Options")],
                ),
              ]),
              s("p", { staticClass: "lead-in splash-block-500 lead-small" }, [
                t._v("This feature is available to "),
                s("a", { attrs: { href: "/account/changeplan/" } }, [
                  t._v("paid accounts."),
                ]),
              ]),
            ],
          );
        },
      ],
      M = { name: "UpgradeSplash" },
      N = M,
      R = Object(I["a"])(N, D, L, !1, null, null, null),
      U = R.exports,
      G = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass: "col-lg-12 col-md-12 col-sm-12 col-xs-12",
            attrs: { id: "bounce-dtable-wrapper" },
          },
          [
            s(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.shouldShow,
                    expression: "shouldShow",
                  },
                ],
                staticClass: "card full-bleed card-subaccounts",
              },
              [
                s(
                  "TitleWithExportButton",
                  {
                    ref: "titleWithExport",
                    attrs: { canAdd: t.canAddSubaccounts },
                    on: { scrollToPos: t.onScrollPos },
                  },
                  [
                    s("span", [
                      t._v("Manage "),
                      s("span", { staticClass: "mobile-hide" }, [
                        t._v("subaccounts"),
                      ]),
                    ]),
                  ],
                ),
                s(
                  "div",
                  { staticClass: "top search-grouped bar-full" },
                  [
                    s("div", { staticClass: "btn-group btn-filter-by" }, [
                      s(
                        "a",
                        {
                          staticClass: "btn btn-default",
                          attrs: { "data-toggle": "dropdown" },
                        },
                        [
                          t._v(t._s(t.currentState.label) + " "),
                          s("i", { staticClass: "fa fa-angle-down" }),
                        ],
                      ),
                      s(
                        "ul",
                        {
                          staticClass: "dropdown-menu pull-right",
                          attrs: {
                            id: "subaccounts_filter_by",
                            "data-toggle-target": "filterby",
                          },
                        },
                        t._l(t.statesToDisplay, function (e) {
                          return s(
                            "li",
                            {
                              key: e.id,
                              on: {
                                click: function (s) {
                                  return t.stateChanged(e);
                                },
                              },
                            },
                            [s("a", [t._v(t._s(e.label))])],
                          );
                        }),
                        0,
                      ),
                    ]),
                    s("SearchBox", { ref: "searchBox" }),
                  ],
                  1,
                ),
                s("SubaccountsResultsDisplay", {
                  ref: "subaccountsResultsDisplay",
                  attrs: { canModify: t.canModifySubaccounts },
                  on: { scrollToPos: t.onScrollPos },
                }),
              ],
              1,
            ),
            t.fullPageLoad ? s("AjaxLoadingSpinner") : t._e(),
            s(
              "div",
              { staticClass: "options-list card has-tabs hide is-fadeout" },
              [
                t._m(0),
                s("transition", { attrs: { name: "tabs" } }, [
                  s(
                    "div",
                    {
                      staticClass: "card card--tab is-active",
                      attrs: { id: "tab-users" },
                    },
                    [
                      s(
                        "ul",
                        { staticClass: "list-striped" },
                        [
                          t.loadingUsers
                            ? s("li", [
                                s("span", { staticClass: "list-description" }, [
                                  t._v("Loading..."),
                                ]),
                              ])
                            : t._e(),
                          0 != t.smtpUsers.length || t.loadingUsers
                            ? t._e()
                            : s("li", { staticClass: "list-item-none" }, [
                                s("span", { staticClass: "list-description" }, [
                                  t._v("None found"),
                                ]),
                              ]),
                          t._l(t.validSmtpUsers, function (e) {
                            return s(
                              "li",
                              {
                                key: e["username"],
                                attrs: { id: "smtp-" + e["username"] },
                              },
                              [
                                s(
                                  "span",
                                  {
                                    staticClass:
                                      "list-checkbox indicators-filter event-indicator",
                                    on: {
                                      click: function (s) {
                                        return t.handleSelectUser(
                                          e["username"],
                                        );
                                      },
                                    },
                                  },
                                  [
                                    s("div", { staticClass: "checker" }, [
                                      s(
                                        "span",
                                        { staticClass: "checkbox-faux" },
                                        [
                                          s("input", {
                                            attrs: { type: "checkbox" },
                                          }),
                                        ],
                                      ),
                                    ]),
                                  ],
                                ),
                                s(
                                  "span",
                                  {
                                    staticClass: "list-name",
                                    on: {
                                      click: function (s) {
                                        return t.handleSelectUser(
                                          e["username"],
                                        );
                                      },
                                    },
                                  },
                                  [
                                    s(
                                      "button",
                                      { staticClass: "button-link" },
                                      [
                                        t._v(
                                          "\n                " +
                                            t._s(e["username"]) +
                                            "\n              ",
                                        ),
                                      ],
                                    ),
                                  ],
                                ),
                                s("span", { staticClass: "list-description" }, [
                                  t._v(t._s(e["description"])),
                                ]),
                              ],
                            );
                          }),
                        ],
                        2,
                      ),
                    ],
                  ),
                ]),
                s(
                  "div",
                  {
                    staticClass: "card card--tab",
                    attrs: { id: "tab-authips" },
                  },
                  [
                    s(
                      "ul",
                      { staticClass: "list-striped" },
                      [
                        t.loadingIPs
                          ? s("li", [
                              s("span", { staticClass: "list-description" }, [
                                t._v("Loading..."),
                              ]),
                            ])
                          : t._e(),
                        0 != t.authIPs.length || t.loadingIPs
                          ? t._e()
                          : s("li", { staticClass: "list-item-none" }, [
                              s("span", { staticClass: "list-description" }, [
                                t._v("None found"),
                              ]),
                            ]),
                        t._l(t.authIPs, function (e) {
                          return s(
                            "li",
                            {
                              key: e["username"],
                              attrs: { id: "authip-" + e["username"] },
                            },
                            [
                              s(
                                "span",
                                {
                                  staticClass:
                                    "list-checkbox indicators-filter event-indicator",
                                  on: {
                                    click: function (s) {
                                      return t.handleSelectUser(e["username"]);
                                    },
                                  },
                                },
                                [t._m(1, !0)],
                              ),
                              s(
                                "span",
                                {
                                  staticClass: "list-name",
                                  on: {
                                    click: function (s) {
                                      return t.handleSelectUser(e["username"]);
                                    },
                                  },
                                },
                                [
                                  s("button", { staticClass: "button-link" }, [
                                    t._v(t._s(e["ip"])),
                                  ]),
                                ],
                              ),
                              s("span", { staticClass: "list-description" }, [
                                t._v(t._s(e["description"])),
                              ]),
                            ],
                          );
                        }),
                      ],
                      2,
                    ),
                  ],
                ),
                s(
                  "div",
                  {
                    staticClass: "card card--tab",
                    attrs: { id: "tab-apikeys" },
                  },
                  [
                    s(
                      "ul",
                      { staticClass: "list-striped" },
                      [
                        t.loadingAPIKeys
                          ? s("li", [
                              s("span", { staticClass: "list-description" }, [
                                t._v("Loading..."),
                              ]),
                            ])
                          : t._e(),
                        0 != t.APIKeys.length || t.loadingAPIKeys
                          ? t._e()
                          : s("li", { staticClass: "list-item-none" }, [
                              s("span", { staticClass: "list-description" }, [
                                t._v("None found"),
                              ]),
                            ]),
                        t._l(t.APIKeys, function (e) {
                          return s(
                            "li",
                            {
                              key: e["username"],
                              attrs: { id: "api-" + e["username"] },
                            },
                            [
                              s(
                                "span",
                                {
                                  staticClass:
                                    "list-checkbox indicators-filter event-indicator",
                                  on: {
                                    click: function (s) {
                                      return t.handleSelectUser(e["username"]);
                                    },
                                  },
                                },
                                [t._m(2, !0)],
                              ),
                              s(
                                "span",
                                {
                                  staticClass: "list-name",
                                  on: {
                                    click: function (s) {
                                      return t.handleSelectUser(e["username"]);
                                    },
                                  },
                                },
                                [
                                  s("button", { staticClass: "button-link" }, [
                                    t._v(
                                      "\n              " +
                                        t._s(
                                          e["username"].substr(0, 9) +
                                            Array(12).join("x"),
                                        ) +
                                        "\n            ",
                                    ),
                                  ]),
                                ],
                              ),
                              s("span", { staticClass: "list-description" }, [
                                t._v(t._s(e["description"])),
                              ]),
                            ],
                          );
                        }),
                      ],
                      2,
                    ),
                  ],
                ),
              ],
              1,
            ),
            s("div", { staticClass: "options-actions card hide is-fadeout" }, [
              t._m(3),
              s("div", { staticClass: "card-content" }, [
                s("span", { staticClass: "select-container" }, [
                  s(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: t.migrateToSubaccount,
                          expression: "migrateToSubaccount",
                        },
                      ],
                      staticClass: "subaccounts-list",
                      attrs: { name: "subaccounts-list", id: "subslist" },
                      on: {
                        change: function (e) {
                          var s = Array.prototype.filter
                            .call(e.target.options, function (t) {
                              return t.selected;
                            })
                            .map(function (t) {
                              var e = "_value" in t ? t._value : t.value;
                              return e;
                            });
                          t.migrateToSubaccount = e.target.multiple ? s : s[0];
                        },
                      },
                    },
                    [
                      s(
                        "option",
                        { attrs: { disabled: "", selected: "", value: "" } },
                        [t._v("Choose a subaccount...")],
                      ),
                      t._l(t.activeSubaccounts, function (e) {
                        return s(
                          "option",
                          { key: e.record_id, domProps: { value: e } },
                          [
                            t._v(
                              "\n            " +
                                t._s(e["name"]) +
                                "\n          ",
                            ),
                          ],
                        );
                      }),
                    ],
                    2,
                  ),
                ]),
                t._m(4),
                t.subaccountChosen && 0 != t.selectedUsernames.length
                  ? s("p", { staticClass: "featured" }, [
                      t._v(
                        "\n        Clicking “Migrate senders” below will migrate the\n        ",
                      ),
                      s("strong", [
                        s("span", { staticClass: "sender-count" }, [
                          t._v(t._s(t.selectedUsernames.length)),
                        ]),
                        t._v("\n          selected " + t._s(t.senderText)),
                      ]),
                      t._v("\n        to the subaccount\n        "),
                      s("strong", [
                        t._v(
                          t._s(t.migrateToSubaccount.name) +
                            " (" +
                            t._s(
                              t.subaccountChosen
                                ? t.migrateToSubaccount.email
                                : "Choose a subaccount...",
                            ) +
                            ")",
                        ),
                      ]),
                      t._v(".\n      "),
                    ])
                  : t._e(),
                t.subaccountChosen &&
                !t.migrateToSubaccount.archiving_allowed &&
                t.selectedUserHasArchving
                  ? s("p", { staticClass: "featured" }, [
                      t._v(
                        "\n        At least one of the senders to be migrated has archiving already\n        enabled. If you continue, your subaccount will have archiving set to\n        Allowed.\n      ",
                      ),
                    ])
                  : t._e(),
              ]),
              s("footer", [
                s(
                  "button",
                  {
                    staticClass: "btn blue button-migrate",
                    attrs: {
                      disabled:
                        !t.subaccountChosen || 0 == t.selectedUsernames.length,
                    },
                    on: {
                      click: function (e) {
                        (e.stopPropagation(), (t.confirmMigrate = !0));
                      },
                    },
                  },
                  [t._v("\n        Migrate senders\n      ")],
                ),
                s(
                  "button",
                  {
                    staticClass: "btn btn-outlined button-cancel",
                    on: {
                      click: function (e) {
                        return (e.preventDefault(), t.showMainPage(e));
                      },
                    },
                  },
                  [t._v("Cancel")],
                ),
                t.confirmMigrate
                  ? s("div", { staticClass: "modal-overlay" }, [
                      s(
                        "div",
                        {
                          directives: [
                            {
                              name: "click-outside",
                              rawName: "v-click-outside",
                              value: t.cancelConfirmMigrate,
                              expression: "cancelConfirmMigrate",
                            },
                          ],
                          staticClass:
                            "modal-dialog modal-medium confirm-migration",
                        },
                        [
                          s("div", { staticClass: "modal-body" }, [
                            s(
                              "button",
                              {
                                staticClass: "bootbox-close-button close",
                                attrs: { type: "button" },
                                on: {
                                  click: function (e) {
                                    (e.stopPropagation(),
                                      (t.confirmMigrate = !1));
                                  },
                                },
                              },
                              [t._v("\n              ×\n            ")],
                            ),
                            s("div", { staticClass: "option-banner" }, [
                              s("h4", [t._v("Confirm migration?")]),
                              s("p", [
                                t._v(
                                  "\n                Do you wish to migrate the\n                ",
                                ),
                                s("strong", [
                                  s("span", { staticClass: "sender-count" }, [
                                    t._v(t._s(t.selectedUsernames.length)),
                                  ]),
                                  t._v(
                                    "\n                  selected " +
                                      t._s(t.senderText),
                                  ),
                                ]),
                                t._v(
                                  "\n                to the subaccount\n                ",
                                ),
                                s("strong", [
                                  t._v(
                                    t._s(t.migrateToSubaccount.name) +
                                      " (" +
                                      t._s(
                                        t.subaccountChosen
                                          ? t.migrateToSubaccount.email
                                          : "Choose a subaccount...",
                                      ) +
                                      ")",
                                  ),
                                ]),
                                t._v("?\n              "),
                              ]),
                            ]),
                            s("div", { staticClass: "modal-body-footer" }, [
                              s(
                                "button",
                                {
                                  staticClass: "btn blue bootbox-close-button",
                                  on: { click: t.handleMigrate },
                                },
                                [
                                  t._v(
                                    "\n                Confirm\n              ",
                                  ),
                                ],
                              ),
                              s(
                                "button",
                                {
                                  staticClass: "btn btn-outlined button-cancel",
                                  on: {
                                    click: function (e) {
                                      (e.stopPropagation(),
                                        (t.confirmMigrate = !1));
                                    },
                                  },
                                },
                                [
                                  t._v(
                                    "\n                Cancel\n              ",
                                  ),
                                ],
                              ),
                            ]),
                          ]),
                        ],
                      ),
                    ])
                  : t._e(),
              ]),
            ]),
            s("NewSubaccountCard", { ref: "subaccount_add_edit_card" }),
            s(
              "BasePopup",
              {
                attrs: { "is-active": t.isDisallowArchivingPopupActive },
                on: {
                  close: function (e) {
                    t.isDisallowArchivingPopupActive = !1;
                  },
                },
                scopedSlots: t._u([
                  {
                    key: "heading",
                    fn: function () {
                      return [t._v("Confirm archive disabling")];
                    },
                    proxy: !0,
                  },
                  {
                    key: "footer",
                    fn: function () {
                      return [
                        s(
                          "button",
                          {
                            staticClass: "btn blue",
                            on: { click: t.confirmDisallowArchivingPopup },
                          },
                          [t._v("\n        Disable archiving\n      ")],
                        ),
                        s(
                          "button",
                          {
                            staticClass:
                              "btn btn-outlined archiving-popup-cancel",
                            on: {
                              click: function (e) {
                                t.isDisallowArchivingPopupActive = !1;
                              },
                            },
                          },
                          [t._v("\n        Cancel\n      ")],
                        ),
                      ];
                    },
                    proxy: !0,
                  },
                ]),
              },
              [
                [
                  s("p", [
                    t._v(
                      "\n        At least one sender (SMTP user, authenticated IP address, or API key)\n        has archiving enabled in this subaccount.\n      ",
                    ),
                  ]),
                  s("p", { staticClass: "archiving-popup-warning" }, [
                    t._v(
                      "\n        If you proceed this will disable archiving for all users on the\n        subaccount.\n      ",
                    ),
                  ]),
                ],
              ],
              2,
            ),
            s(
              "BasePopup",
              {
                attrs: { "is-active": t.isDisableSMSPopupActive },
                on: {
                  close: function (e) {
                    t.isDisableSMSPopupActive = !1;
                  },
                },
                scopedSlots: t._u([
                  {
                    key: "heading",
                    fn: function () {
                      return [t._v("Confirm sms disabling")];
                    },
                    proxy: !0,
                  },
                  {
                    key: "footer",
                    fn: function () {
                      return [
                        s(
                          "button",
                          {
                            staticClass: "btn blue",
                            on: { click: t.confirmDisableSMSPopup },
                          },
                          [t._v("\n        Disable sms\n      ")],
                        ),
                        s(
                          "button",
                          {
                            staticClass:
                              "btn btn-outlined archiving-popup-cancel",
                            on: {
                              click: function (e) {
                                t.isDisableSMSPopupActive = !1;
                              },
                            },
                          },
                          [t._v("\n        Cancel\n      ")],
                        ),
                      ];
                    },
                    proxy: !0,
                  },
                ]),
              },
              [
                [
                  s("p", [
                    t._v(
                      "\n        This subaccount has at least one dedicated number for sending SMS.\n      ",
                    ),
                  ]),
                  s("p", { staticClass: "archiving-popup-warning" }, [
                    t._v(
                      "\n        If you proceed, these dedicated numbers will be deleted.\n      ",
                    ),
                  ]),
                ],
              ],
              2,
            ),
          ],
          1,
        );
      },
      B = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "options-header card--tab-list" }, [
            s("h2", { staticClass: "card--tab-title" }, [
              s("span", { staticClass: "step step-1" }),
              t._v("Which senders are going to be\n        migrated?\n      "),
            ]),
            s("div", { staticClass: "tablist-container" }, [
              s(
                "button",
                {
                  staticClass: "tab is-active",
                  attrs: { "data-tab": "tab-users" },
                },
                [t._v("SMTP Users")],
              ),
              s(
                "button",
                { staticClass: "tab", attrs: { "data-tab": "tab-authips" } },
                [t._v("Authenticated IPs")],
              ),
              s(
                "button",
                { staticClass: "tab", attrs: { "data-tab": "tab-apikeys" } },
                [t._v("API Keys")],
              ),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "checker" }, [
            s("span", { staticClass: "checkbox-faux" }, [
              s("input", { attrs: { type: "checkbox" } }),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "checker" }, [
            s("span", { staticClass: "checkbox-faux" }, [
              s("input", { attrs: { type: "checkbox" } }),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "options-header card--tab-list" }, [
            s("h2", { staticClass: "card--tab-title" }, [
              s("span", { staticClass: "step step-2" }),
              t._v("Which subaccount are they migrating\n        to?\n      "),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("p", [
            t._v(
              "\n        When you click ‘Migrate senders’ below, any selections you made above\n        will belong to the subaccount you choose.",
            ),
            s("br"),
            t._v(
              "This cannot be undone\n        without issuing a support ticket, so make sure you’ve double-checked\n        your selections.\n      ",
            ),
          ]);
        },
      ],
      H = (s("6762"), s("2fdb"), s("1157")),
      K = s.n(H),
      q = s("c1df"),
      J = s.n(q),
      F =
        (s("7f45"),
        s("6b54"),
        {
          methods: {
            s2g_objectIsFunction: function (t) {
              return "[object Function]" == Object.prototype.toString.call(t);
            },
            s2g_isEmptyString: function (t) {
              return !t;
            },
          },
        }),
      z = F,
      W = {
        mixins: [z],
        created: function () {
          this.makeRequest = function (t, e, s, i, n, a, o) {
            (void 0 !== o && null !== o) || (o = !1);
            var r = this;
            (K.a.ajax(
              END_POINTS.urls()[e] +
                "?action=" +
                encodeURIComponent(s) +
                "&CSRF_key=" +
                encodeURIComponent(HTML.csrfkey),
              {
                method: t,
                data: i,
                complete: function (t, e) {
                  if ("success" != e) {
                    o || r.$store.commit("root/DEC_RUNNING_AJAX_REQUESTS");
                    try {
                      r.s2g_objectIsFunction(a) && a(t);
                    } catch (s) {
                      console.error(
                        "encountered error in AJAXBackendMixin, err:",
                        s,
                      );
                    }
                  } else {
                    o || r.$store.commit("root/DEC_RUNNING_AJAX_REQUESTS");
                    try {
                      "error" in t.responseJSON && r.s2g_objectIsFunction(a)
                        ? a(t)
                        : r.s2g_objectIsFunction(n) && n(t);
                    } catch (s) {
                      console.error(
                        "encountered error in AJAXBackendMixin, err:",
                        s,
                      );
                    }
                  }
                },
              },
            ),
              o || r.$store.commit("root/INC_RUNNING_AJAX_REQUESTS"));
          };
        },
        methods: {
          mixinAjax_get: function (t, e, s, i, n, a) {
            return this.makeRequest("GET", t, e, s, i, n, a);
          },
          mixinAjax_post: function (t, e, s, i, n, a) {
            return this.makeRequest("POST", t, e, s, i, n, a);
          },
          mixinAjax_put: function (t, e, s, i, n, a) {
            return this.makeRequest("PUT", t, e, s, i, n, a);
          },
          mixinAjax_delete: function (t, e, s, i, n, a) {
            return this.makeRequest("DELETE", t, e, s, i, n, a);
          },
        },
      },
      Q = W,
      V = {
        data: function () {
          return {
            searchHasChanged: !1,
            columnHasChanged: !1,
            initRequest: !0,
            loadMore: !1,
          };
        },
        created: function () {
          (this.$eventBus.$on(
            "mixin-search-has-changed",
            this.$_flagSearchHasChanged,
          ),
            this.$eventBus.$on(
              "mixin-column-has-changed",
              this.$_flagColumnHasChanged,
            ),
            this.$eventBus.$on("mixin-load-more", this.$_flagLoadMore),
            this.$eventBus.$on("mixin-search-trigger", this.$_triggerSearch),
            this.$eventBus.$on(
              "mixin-download-file-triggered",
              this.$_downloadFile,
            ));
        },
        destroyed: function () {
          (this.$eventBus.$off(
            "mixin-search-has-changed",
            this.$_flagSearchHasChanged,
          ),
            this.$eventBus.$off(
              "mixin-column-has-changed",
              this.$_flagColumnHasChanged,
            ),
            this.$eventBus.$off("mixin-load-more", this.$_flagLoadMore),
            this.$eventBus.$off("mixin-search-trigger", this.$_triggerSearch),
            this.$eventBus.$off(
              "mixin-download-file-triggered",
              this.$_downloadFile,
            ));
        },
        methods: {
          $_flagSearchHasChanged: function () {
            this.searchHasChanged = !0;
          },
          $_flagColumnHasChanged: function () {
            this.columnHasChanged = !0;
          },
          $_flagLoadMore: function () {
            this.loadMore = !0;
          },
          $_triggerSearch: function () {
            if (
              (this.columnHasChanged &&
                (this.saveColumn(), (this.columnHasChanged = !1)),
              !this.searchHasChanged && !this.loadMore && !this.initRequest)
            )
              return !1;
            ((this.searchHasChanged = !1),
              this.performSearch(this.initRequest, this.loadMore),
              (this.initRequest = !1),
              (this.loadMore = !1));
          },
          $_downloadFile: function (t) {
            this.performDownloadFile(t);
          },
        },
      },
      X = V,
      Y =
        (s("7f7f"),
        s("7514"),
        Object.freeze({
          TRIGGERABLE_OPENED: "mixin-triggerable-opened",
          TRIGGERABLE_CLOSED: "mixin-triggerable-closed",
        })),
      Z = {
        created: function () {
          (K()(window).on("click.Bst", this.$_mixinTriggerableWindowClicked),
            this.$eventBus.$on(
              Y.TRIGGERABLE_OPENED,
              this.$_mixinTriggerableOpened,
            ));
        },
        mounted: function () {
          ((this.mixinTriggerable_layers = K()(this.$el).find(
            ".mixinTriggerable_layer",
          )),
            K()(this.$el).hasClass("mixinTriggerable_layer") &&
              this.mixinTriggerable_layers.push(this.$el));
        },
        destroyed: function () {
          (K()(window).off("click.Bst", this.$_mixinTriggerableWindowClicked),
            this.$eventBus.$off(
              Y.TRIGGERABLE_OPENED,
              this.$_mixinTriggerableOpened,
            ));
        },
        methods: {
          $_mixinTriggerableUpdateParent: function () {
            for (var t = 0, e = this.$parent; ; ) {
              if (
                !(
                  void 0 !== e &&
                  null !== e &&
                  void 0 !== e.mixinTriggerable_getID &&
                  t < 10
                )
              )
                break;
              (t++, (e = e.$parent));
            }
          },
          $_mixinTriggerableWindowClicked: function (t) {
            if (this.mixinTriggerable_ignoreNextWindowClick)
              this.mixinTriggerable_ignoreNextWindowClick = !1;
            else if (!this.mixinTriggerable_isModal) {
              var e = function (t) {
                  var e = K()(t)
                    .parents()
                    .filter(function (t, e) {
                      return K()(e).hasClass("mixinTriggerable_layer");
                    });
                  return e.length > 0;
                },
                s = !1;
              if (this.mixinTriggerable_isOpen)
                for (var i = 0; i < this.mixinTriggerable_layers.length; ++i) {
                  var n = K()(this.mixinTriggerable_layers[i]);
                  if (
                    0 !== n.has(t.target).length ||
                    n.is(t.target) ||
                    (!this.mixinTriggerable_closeOnParentClick &&
                      e(t.target, n))
                  ) {
                    s = !0;
                    break;
                  }
                }
              this.mixinTriggerable_isOpen &&
                !s &&
                ((this.mixinTriggerable_isOpen = !1),
                this.$_mixinTriggerableUpdateParent(
                  this.mixinTriggerable_isOpen,
                ),
                this.$eventBus.$emit(
                  Y.TRIGGERABLE_CLOSED,
                  this.mixinTriggerable_getID(),
                ));
            }
          },
          $_mixinTriggerableOpened: function (t) {
            this.mixinTriggerable_isSelf(t) ||
              this.mixinTriggerable_isModal ||
              (this.mixinTriggerable_isOpen = !1);
          },
          mixinTriggerable_getID: function () {
            return this.$vnode.key
              ? this.$options.name + "_" + this.$vnode.key
              : this.$options.name;
          },
          mixinTriggerable_isSelf: function (t) {
            return t === this.mixinTriggerable_getID();
          },
          mixinTriggerable_setModal: function (t) {
            this.mixinTriggerable_isModal = t;
          },
          mixinTriggerable_centerSelf: function () {
            var t = K()(this.$el).offset().left,
              e = Math.ceil(t),
              s = K()(this.$el).offset().top,
              i = Math.ceil(s);
            ((this.$el.style.left = e + "px"),
              (this.$el.style.top = i + "px"),
              (this.$el.style.transform = "translate(0) scale(1)"));
          },
          mixinTriggerable_toggleOpened: function (t) {
            (void 0 !== t && t.stopImmediatePropagation(),
              this.mixinTriggerable_isModal ||
                ((this.mixinTriggerable_isOpen = !this.mixinTriggerable_isOpen),
                this.$_mixinTriggerableUpdateParent(
                  this.mixinTriggerable_isOpen,
                ),
                this.mixinTriggerable_isOpen
                  ? this.$eventBus.$emit(
                      Y.TRIGGERABLE_OPENED,
                      this.mixinTriggerable_getID(),
                    )
                  : this.$eventBus.$emit(
                      Y.TRIGGERABLE_CLOSED,
                      this.mixinTriggerable_getID(),
                    )));
          },
          mixinTriggerable_forceOpen: function (t) {
            (void 0 !== t && t.stopImmediatePropagation(),
              (this.mixinTriggerable_isModal = !1));
            var e = this.mixinTriggerable_isOpen;
            ((this.mixinTriggerable_isOpen = !0),
              e ||
                (this.$_mixinTriggerableUpdateParent(
                  this.mixinTriggerable_isOpen,
                ),
                (this.mixinTriggerable_ignoreNextWindowClick = !0),
                this.$eventBus.$emit(
                  Y.TRIGGERABLE_OPENED,
                  this.mixinTriggerable_getID(),
                )));
          },
          mixinTriggerable_forceClose: function (t) {
            (void 0 !== t && t.stopImmediatePropagation(),
              (this.mixinTriggerable_isModal = !1));
            var e = this.mixinTriggerable_isOpen;
            ((this.mixinTriggerable_isOpen = !1),
              e &&
                (this.$_mixinTriggerableUpdateParent(
                  this.mixinTriggerable_isOpen,
                ),
                (this.mixinTriggerable_ignoreNextWindowClick = !0),
                this.$eventBus.$emit(
                  Y.TRIGGERABLE_CLOSED,
                  this.mixinTriggerable_getID(),
                )));
          },
        },
        props: {
          mixinTriggerable_closeOnParentClick: { type: Boolean, default: !1 },
        },
        data: function () {
          return {
            mixinTriggerable_ignoreNextWindowClick: !1,
            mixinTriggerable_layers: [],
            mixinTriggerable_isOpen: !1,
            mixinTriggerable_isModal: !1,
          };
        },
      },
      tt = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "card-header is-underlined" }, [
          s("h2", { staticClass: "card--title" }, [t._t("default")], 2),
          s("div", { staticClass: "card-functions" }, [
            s("div", { staticClass: "drop-content" }, [
              t.canAdd
                ? s(
                    "button",
                    {
                      staticClass:
                        "btn button-dropdown button-add-subaccount modal-trigger",
                      attrs: { type: "button", role: "button" },
                      on: {
                        click: function (e) {
                          return (e.preventDefault(), t.onAddClicked(e));
                        },
                      },
                    },
                    [
                      t._v("\n          Add"),
                      s("span", { staticClass: "hide-mobile" }, [
                        t._v(" subaccount"),
                      ]),
                      s("span", { staticClass: "hide-desktop" }, [
                        t._v(" new"),
                      ]),
                    ],
                  )
                : t._e(),
              s(
                "button",
                {
                  staticClass: "btn button-dropdown button-migrate",
                  attrs: {
                    type: "button",
                    role: "button",
                    disabled: t.apMetadata.disable_add,
                  },
                },
                [t._v("\n          Migrate\n        ")],
              ),
            ]),
          ]),
        ]);
      },
      et = [],
      st = {
        name: "TitleWithExportButton",
        mixins: [Z],
        props: { canAdd: Boolean },
        data: function () {
          return { initialised: !1, apMetadata: PAGE_DATA.apMetadata };
        },
        methods: {
          onAddClicked: function () {
            (this.$eventBus.$emit(u.ADD_SUBACCOUNT_CLICKED),
              this.$eventBus.$emit("updatePosition", 0),
              this.$emit("scrollToPos", 0),
              this.mixinTriggerable_forceClose());
          },
          initTitleWithExport: function () {
            this.initialised = !0;
          },
        },
      },
      it = st,
      nt = Object(I["a"])(it, tt, et, !1, null, null, null),
      at = nt.exports,
      ot = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "search" }, [
          s(
            "div",
            {
              staticClass: "dataTables_filter has-search-options",
              attrs: { id: "emails_bounces_filter" },
            },
            [
              s("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: t.primarySearchKeyword,
                    expression: "primarySearchKeyword",
                  },
                ],
                staticClass:
                  "form-control input-small input-inline mixinTriggerable_layer",
                attrs: {
                  type: "search",
                  "aria-controls": "emails_bounces",
                  id: "main-search",
                  placeholder: t.searchPlaceHolder,
                },
                domProps: { value: t.primarySearchKeyword },
                on: {
                  input: [
                    function (e) {
                      e.target.composing ||
                        (t.primarySearchKeyword = e.target.value);
                    },
                    t.mainSearchChanged,
                  ],
                  keyup: t.isEnterTyped,
                },
              }),
              t.searchOptions.length > 0
                ? s(
                    "a",
                    {
                      staticClass: "toggle-search-options",
                      attrs: { href: "javascript:void(0);" },
                      on: { click: t.mixinTriggerable_toggleOpened },
                    },
                    [s("i", { staticClass: "fa fa-angle-down" })],
                  )
                : t._e(),
              s(
                "button",
                {
                  staticClass: "btn blue btn-search",
                  attrs: {
                    type: "button",
                    role: "button",
                    disabled: t.isAjaxRunning,
                  },
                  on: { click: t.forcePerformSearch },
                },
                [
                  s("span", { staticClass: "icon-search" }),
                  s("span", { staticClass: "button-text" }, [t._v(" Search")]),
                ],
              ),
            ],
          ),
          s(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: t.mixinTriggerable_isOpen,
                  expression: "mixinTriggerable_isOpen",
                },
              ],
              staticClass: "search-options open mixinTriggerable_layer",
            },
            [
              s(
                "ul",
                { staticClass: "dropdown-menu" },
                [
                  t._l(t.searchOptions, function (e, i) {
                    return s("li", { key: i }, [
                      s("label", { staticClass: "control-label" }, [
                        t._v(t._s(e.label) + ":"),
                      ]),
                      "hasAttachment" !== i
                        ? s("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: e.value,
                                expression: "searchOption.value",
                                modifiers: { trim: !0 },
                              },
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: e.value },
                            on: {
                              input: [
                                function (s) {
                                  s.target.composing ||
                                    t.$set(e, "value", s.target.value.trim());
                                },
                                t.subSearchChanged,
                              ],
                              keyup: t.isEnterTyped,
                              blur: function (e) {
                                return t.$forceUpdate();
                              },
                            },
                          })
                        : t._e(),
                      "hasAttachment" === i
                        ? s("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.trim",
                                value: e.value,
                                expression: "searchOption.value",
                                modifiers: { trim: !0 },
                              },
                            ],
                            staticClass:
                              "form-control search-attachment-checkbox",
                            attrs: { type: "checkbox" },
                            domProps: {
                              checked: Array.isArray(e.value)
                                ? t._i(e.value, null) > -1
                                : e.value,
                            },
                            on: {
                              click: t.searchChanged,
                              change: function (s) {
                                var i = e.value,
                                  n = s.target,
                                  a = !!n.checked;
                                if (Array.isArray(i)) {
                                  var o = null,
                                    r = t._i(i, o);
                                  n.checked
                                    ? r < 0 && t.$set(e, "value", i.concat([o]))
                                    : r > -1 &&
                                      t.$set(
                                        e,
                                        "value",
                                        i.slice(0, r).concat(i.slice(r + 1)),
                                      );
                                } else t.$set(e, "value", a);
                              },
                            },
                          })
                        : t._e(),
                    ]);
                  }),
                  s("li", [
                    s(
                      "button",
                      {
                        staticClass: "btn blue btn-search",
                        attrs: {
                          role: "button",
                          type: "button",
                          disabled: t.isAjaxRunning,
                        },
                        on: { click: t.forcePerformSearch },
                      },
                      [
                        s("span", { staticClass: "icon-search" }),
                        t._v("\n          Search\n        "),
                      ],
                    ),
                  ]),
                ],
                2,
              ),
            ],
          ),
        ]);
      },
      rt = [];
    function ct(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        (e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i));
      }
      return s;
    }
    function lt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ct(Object(s), !0).forEach(function (e) {
              Object(c["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : ct(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var ut = {
        name: "SearchBox",
        mixins: [Z],
        data: function () {
          return {
            initialised: !1,
            searchOptions: this.$config.searchOptions,
            searchPlaceHolder: this.$config.searchPlaceHolder,
            mainSearch: "",
            primarySearchKeyword: "",
          };
        },
        initialised: !1,
        methods: {
          initSearchBox: function () {
            this.initialised = !0;
          },
          searchChanged: function () {
            this.$eventBus.$emit("mixin-search-has-changed");
          },
          isEnterTyped: function (t) {
            if (this.isEnter(t)) return !1;
          },
          mainSearchChanged: function () {
            this.$eventBus.$emit("mixin-search-has-changed");
            var t,
              e = /([^\W]+)\s{0,}[:|=]\s{0,}(["'])(.*?)\2/g,
              s = this.primarySearchKeyword;
            for (var i in this.searchOptions) this.searchOptions[i].value = "";
            while (null !== (t = e.exec(this.primarySearchKeyword)))
              for (var n in this.searchOptions)
                t[1] == n &&
                  ((s = s.replace(t[0], "")),
                  (this.searchOptions[n].value = t[3]));
            this.mainSearch = s.trim();
          },
          subSearchChanged: function () {
            this.$eventBus.$emit("mixin-search-has-changed");
            var t = [];
            for (var e in this.searchOptions)
              "" !== this.searchOptions[e].value &&
                null !== this.searchOptions[e].value &&
                void 0 !== this.searchOptions[e].value &&
                "hasAttachment" !== e &&
                t.push(e + ":'" + this.searchOptions[e].value + "'");
            (t.push(this.mainSearch),
              (this.primarySearchKeyword = t.join(" ")));
          },
          isEnter: function (t) {
            return (
              13 == t.keyCode &&
              !this.isAjaxRunning &&
              (this.forcePerformSearch(t), !0)
            );
          },
          forcePerformSearch: function (t) {
            (this.$eventBus.$emit("mixin-search-has-changed"),
              this.$eventBus.$emit("mixin-search-trigger"),
              this.mixinTriggerable_forceClose(t));
          },
          getMainSearch: function () {
            return this.mainSearch;
          },
        },
        computed: lt(
          {},
          Object(d["b"])({
            isAjaxRunning: v.getters.GET_IS_AJAX_RUNNING,
            isQuiteRequest: v.getters.GET_IS_QUIET_REQUEST,
          }),
        ),
      },
      dt = ut,
      ht = Object(I["a"])(dt, ot, rt, !1, null, null, null),
      pt = ht.exports,
      mt = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "table",
          {
            staticClass: "dataTable table table-striped table-hover display",
            attrs: { id: "bounce-dtable" },
          },
          [
            s("thead", [
              s(
                "tr",
                [
                  t._l(t.activeColumns, function (e) {
                    return s(
                      "th",
                      {
                        key: e.id,
                        class: { "mobile-hide": "plan" == e.id },
                        attrs: { id: "table-" + e.id },
                      },
                      [
                        t._v("\n        " + t._s(e.label)),
                        "used" === e.id
                          ? s("span", [
                              t._v("(resets " + t._s(t.rollover) + ")"),
                            ])
                          : t._e(),
                      ],
                    );
                  }),
                  s(
                    "th",
                    {
                      staticClass: "table-options",
                      attrs: { id: "table-options" },
                    },
                    [
                      s("div", { staticClass: "dropdown-container" }, [
                        s(
                          "span",
                          {
                            staticClass: "dropdown-icon-container",
                            on: { click: t.mixinTriggerable_toggleOpened },
                          },
                          [s("span", { staticClass: "dropdown-icon" })],
                        ),
                        s(
                          "ul",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: t.mixinTriggerable_isOpen,
                                expression: "mixinTriggerable_isOpen",
                              },
                            ],
                            staticClass:
                              "dropdown-menu dropdown-options column-filter is-active mixinTriggerable_layer",
                            attrs: { id: "columns" },
                          },
                          [
                            t._m(0),
                            t._l(t.columnFilters, function (e) {
                              return s(
                                "li",
                                {
                                  key: e.id,
                                  staticClass: "columns-filter",
                                  attrs: { id: "columns-filter-" + e.id },
                                  on: {
                                    click: function (s) {
                                      return t.handleColumnToggle(s, e);
                                    },
                                  },
                                },
                                [
                                  s(
                                    "div",
                                    { staticClass: "column-indicator" },
                                    [
                                      s("div", { staticClass: "checker" }, [
                                        s(
                                          "span",
                                          {
                                            staticClass: "checker-box",
                                            class: {
                                              checked: t.shownColumns[e.id],
                                            },
                                          },
                                          [
                                            s("input", {
                                              attrs: {
                                                type: "checkbox",
                                                name: "columns[]",
                                              },
                                              domProps: { value: e.id },
                                            }),
                                          ],
                                        ),
                                      ]),
                                      s(
                                        "span",
                                        {
                                          staticClass: "column-indicator-copy",
                                        },
                                        [t._v(t._s(e.label))],
                                      ),
                                    ],
                                  ),
                                ],
                              );
                            }),
                          ],
                          2,
                        ),
                      ]),
                    ],
                  ),
                ],
                2,
              ),
            ]),
            s(
              "tbody",
              [
                t._l(t.subaccountResults, function (e, i) {
                  return s(
                    "tr",
                    { key: e.record_id },
                    [
                      t._l(t.activeColumns, function (n) {
                        return s(
                          "td",
                          {
                            key: n.id,
                            staticClass: "text-nowrap",
                            class: [
                              "cell-" + n.id,
                              { " mobile-hide": "plan" == n.id },
                            ],
                          },
                          [
                            "name" === n.id
                              ? s("span", { staticClass: "text-align" }, [
                                  s(
                                    "a",
                                    {
                                      staticClass: "modal-trigger",
                                      on: {
                                        click: function (s) {
                                          (t.getPosition(),
                                            t.editSubaccount(e),
                                            t.scrollToTop());
                                        },
                                      },
                                    },
                                    [t._v(t._s(e["name"]))],
                                  ),
                                ])
                              : "logIn" === n.id
                                ? s(
                                    "button",
                                    {
                                      staticClass:
                                        "btn button-dropdown log-in-as is-loading",
                                      attrs: { type: "button", role: "button" },
                                      on: {
                                        click: function (s) {
                                          return t.loginAsSubaccount(e);
                                        },
                                      },
                                    },
                                    [
                                      t.switchingTo != e.record_id
                                        ? s("span", [t._v("Log in as")])
                                        : s("span", {
                                            staticClass: "loader-spinner",
                                          }),
                                    ],
                                  )
                                : "status" === n.id
                                  ? s("span", [
                                      s(
                                        "span",
                                        {
                                          staticClass: "tag-icon-visible",
                                          class: [
                                            t.getStatusColumnText(e, !0),
                                            {
                                              warning: t.showStatusWarning(
                                                e["status"],
                                              ),
                                            },
                                          ],
                                          attrs: { id: "sub-status" },
                                        },
                                        [
                                          t._v(
                                            "\n            " +
                                              t._s(
                                                t.getStatusColumnText(e, !1),
                                              ) +
                                              "\n            \n          ",
                                          ),
                                        ],
                                      ),
                                      t.showStatusWarning(e["status"])
                                        ? s(
                                            "span",
                                            {
                                              staticClass:
                                                "column-subaccount-tooltip",
                                            },
                                            [
                                              s("span", {
                                                staticClass: "icon-caution",
                                              }),
                                              s(
                                                "span",
                                                {
                                                  staticClass:
                                                    "subaccount-tooltip",
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.getStatusTooltip(
                                                        e["status"],
                                                      ),
                                                    ),
                                                  ),
                                                ],
                                              ),
                                            ],
                                          )
                                        : t._e(),
                                    ])
                                  : "usage" === n.id
                                    ? s("span", [
                                        s("div", { staticClass: "usage-bar" }, [
                                          s("div", {
                                            staticClass: "filler",
                                            class: {
                                              "is-rounded":
                                                t.calcUsagePercentage(e) > 98,
                                            },
                                            style:
                                              "width: calc(" +
                                              t
                                                .calcUsagePercentage(e)
                                                .toString() +
                                              "% + 2px);",
                                          }),
                                          s("div", { staticClass: "content" }, [
                                            t._v(
                                              "\n              " +
                                                t._s(
                                                  t.getUsageDisplayString(e),
                                                ) +
                                                "\n            ",
                                            ),
                                          ]),
                                        ]),
                                      ])
                                    : "plan" === n.id
                                      ? s(
                                          "span",
                                          { staticClass: "text-align" },
                                          [
                                            t._v(
                                              "\n          " +
                                                t._s(
                                                  e["plansize"]
                                                    .toString()
                                                    .replace(
                                                      /(\d)(?=(\d{3})+(?!\d))/g,
                                                      "$1,",
                                                    ),
                                                ) +
                                                "\n        ",
                                            ),
                                          ],
                                        )
                                      : "team" === n.id
                                        ? s(
                                            "div",
                                            {
                                              staticClass: "cell-team-content",
                                            },
                                            [
                                              s(
                                                "div",
                                                { staticClass: "text-align" },
                                                t._l(
                                                  e["team_members"]
                                                    ? e["team_members"].slice(
                                                        0,
                                                        6,
                                                      )
                                                    : [],
                                                  function (e) {
                                                    return s(
                                                      "span",
                                                      {
                                                        key: e.username,
                                                        class: t.memberClass(
                                                          e.username,
                                                        ),
                                                      },
                                                      [
                                                        s(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "member-initials",
                                                          },
                                                          [
                                                            t._v(
                                                              "\n                " +
                                                                t._s(
                                                                  t.getInitials(
                                                                    e,
                                                                  ),
                                                                ) +
                                                                "\n              ",
                                                            ),
                                                          ],
                                                        ),
                                                        s(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "member-details",
                                                          },
                                                          [
                                                            s(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "member-username",
                                                              },
                                                              [
                                                                t._v(
                                                                  t._s(
                                                                    e.display_team_name,
                                                                  ) +
                                                                    " \n                  ",
                                                                ),
                                                                !e.has_password &&
                                                                t.isValidEmail(
                                                                  e.username,
                                                                )
                                                                  ? s(
                                                                      "span",
                                                                      {
                                                                        staticClass:
                                                                          "invitation-indicator",
                                                                      },
                                                                      [
                                                                        t._v(
                                                                          t._s(
                                                                            e.invited
                                                                              ? "Invited"
                                                                              : "Invite expired",
                                                                          ),
                                                                        ),
                                                                      ],
                                                                    )
                                                                  : t._e(),
                                                              ],
                                                            ),
                                                            s(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "member-email",
                                                              },
                                                              [
                                                                t._v(
                                                                  t._s(
                                                                    e.username,
                                                                  ),
                                                                ),
                                                              ],
                                                            ),
                                                          ],
                                                        ),
                                                      ],
                                                    );
                                                  },
                                                ),
                                                0,
                                              ),
                                              e["team_members"] &&
                                              e["team_members"].length > 6
                                                ? s(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "cell-team-show-more",
                                                    },
                                                    [
                                                      s(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "team-more-button",
                                                          on: {
                                                            mouseover:
                                                              function (e) {
                                                                return t.handleMouseOver(
                                                                  i,
                                                                );
                                                              },
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            "+ " +
                                                              t._s(
                                                                e[
                                                                  "team_members"
                                                                ].length - 6,
                                                              ) +
                                                              " more",
                                                          ),
                                                        ],
                                                      ),
                                                      s(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "team-more-dropdown",
                                                        },
                                                        [
                                                          s(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "team-more-members",
                                                            },
                                                            t._l(
                                                              e[
                                                                "team_members"
                                                              ].slice(6),
                                                              function (e) {
                                                                return s(
                                                                  "span",
                                                                  {
                                                                    key: e.username,
                                                                    class:
                                                                      t.memberClass(
                                                                        e.username,
                                                                      ),
                                                                  },
                                                                  [
                                                                    s(
                                                                      "span",
                                                                      {
                                                                        staticClass:
                                                                          "member-icon",
                                                                      },
                                                                      [
                                                                        t._v(
                                                                          "\n                    " +
                                                                            t._s(
                                                                              t.getInitials(
                                                                                e,
                                                                              ),
                                                                            ) +
                                                                            "\n                  ",
                                                                        ),
                                                                      ],
                                                                    ),
                                                                    s(
                                                                      "span",
                                                                      {
                                                                        staticClass:
                                                                          "member-dropdown-details",
                                                                      },
                                                                      [
                                                                        s(
                                                                          "span",
                                                                          {
                                                                            staticClass:
                                                                              "member-username",
                                                                          },
                                                                          [
                                                                            t._v(
                                                                              t._s(
                                                                                e.display_team_name,
                                                                              ) +
                                                                                " \n                      ",
                                                                            ),
                                                                            !e.has_password &&
                                                                            t.isValidEmail(
                                                                              e.username,
                                                                            )
                                                                              ? s(
                                                                                  "span",
                                                                                  {
                                                                                    staticClass:
                                                                                      "invitation-indicator",
                                                                                  },
                                                                                  [
                                                                                    t._v(
                                                                                      t._s(
                                                                                        e.invited
                                                                                          ? "Invited"
                                                                                          : "Invite expired",
                                                                                      ),
                                                                                    ),
                                                                                  ],
                                                                                )
                                                                              : t._e(),
                                                                          ],
                                                                        ),
                                                                        s(
                                                                          "span",
                                                                          {
                                                                            staticClass:
                                                                              "member-email",
                                                                          },
                                                                          [
                                                                            t._v(
                                                                              t._s(
                                                                                e.username,
                                                                              ),
                                                                            ),
                                                                          ],
                                                                        ),
                                                                      ],
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
                                                  )
                                                : t._e(),
                                            ],
                                          )
                                        : "id" === n.id
                                          ? s(
                                              "span",
                                              { staticClass: "text-align" },
                                              [t._v(t._s(e["hashid"]))],
                                            )
                                          : "dedip" === n.id
                                            ? s("span", {
                                                staticClass: "text-align",
                                                domProps: {
                                                  innerHTML: t._s(
                                                    t.getDedicatedIPColumnText(
                                                      e,
                                                    ),
                                                  ),
                                                },
                                              })
                                            : "ippool" === n.id
                                              ? s("span", {
                                                  staticClass: "text-align",
                                                  domProps: {
                                                    innerHTML: t._s(
                                                      t.getIPPoolColumnText(e),
                                                    ),
                                                  },
                                                })
                                              : "archive" === n.id
                                                ? s("span", {
                                                    staticClass: "text-align",
                                                    domProps: {
                                                      innerHTML: t._s(
                                                        t.getArchiveColumnText(
                                                          e,
                                                        ),
                                                      ),
                                                    },
                                                  })
                                                : "sms" === n.id
                                                  ? s("span", {
                                                      staticClass: "text-align",
                                                      domProps: {
                                                        innerHTML: t._s(
                                                          t.getSMSColumnText(e),
                                                        ),
                                                      },
                                                    })
                                                  : "2fa" === n.id
                                                    ? s("span", {
                                                        staticClass:
                                                          "text-align",
                                                        domProps: {
                                                          innerHTML: t._s(
                                                            t.get2FAColumnText(
                                                              e,
                                                            ),
                                                          ),
                                                        },
                                                      })
                                                    : "region" === n.id
                                                      ? s("span", {
                                                          staticClass:
                                                            "text-align",
                                                          domProps: {
                                                            innerHTML: t._s(
                                                              t.getRegionColumnText(
                                                                e,
                                                              ),
                                                            ),
                                                          },
                                                        })
                                                      : s(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "text-align",
                                                          },
                                                          [t._v(t._s(e[n.id]))],
                                                        ),
                          ],
                        );
                      }),
                      s("SubAccountsToolbox", {
                        key: i,
                        attrs: { subaccount: e },
                      }),
                    ],
                    2,
                  );
                }),
                t.isAjaxRunning &&
                t.numSubaccounts > 0 &&
                t.$parent.showMoreLink
                  ? s("tr", { staticClass: "loading" }, [t._m(1)])
                  : t._e(),
                !t.isAjaxRunning &&
                t.numSubaccounts > 0 &&
                t.$parent.showMoreLink
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
                              on: { click: t.loadMoreResults },
                            },
                            [t._v("Load More Results")],
                          ),
                        ],
                      ),
                    ])
                  : t._e(),
                t.isAjaxRunning || 0 != t.numSubaccounts
                  ? t._e()
                  : s("tr", { staticClass: "no-results" }, [t._m(2)]),
              ],
              2,
            ),
          ],
        );
      },
      _t = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("li", [
            s("p", [
              s("strong", [t._v("Display optional columns")]),
              s("br"),
              t._v(
                "Choose to show optional columns (works best on large screens)",
              ),
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
                    s("span", { staticClass: "dot-circle clicked" }),
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
          return s("td", { attrs: { colspan: "100%" } }, [
            s("div", { staticClass: "table-blank" }, [
              s("div", { staticClass: "table-blank-content" }, [
                s("p", [t._v("You don't have any subaccounts yet.")]),
              ]),
            ]),
          ]);
        },
      ],
      ft =
        (s("28a5"),
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("td", { staticClass: "table-action" }, [
            s(
              "div",
              {
                staticClass: "drop-content subaccounts-popup",
                class: { "popup-active": t.mixinTriggerable_isOpen },
              },
              [
                s("a", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: t.showToolbox,
                      expression: "showToolbox",
                    },
                  ],
                  staticClass: "row-options-down toggle-popup",
                  class: { "popup-active": t.mixinTriggerable_isOpen },
                  on: { click: t.mixinTriggerable_toggleOpened },
                }),
                s(
                  "ul",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: t.mixinTriggerable_isOpen,
                        expression: "mixinTriggerable_isOpen",
                      },
                    ],
                    staticClass:
                      "dropdown-menu dropdown-options mixinTriggerable_layer is-active",
                  },
                  [
                    t.canEdit
                      ? s("li", [
                          s(
                            "a",
                            {
                              staticClass:
                                "dropdown-menu-link link-edit-details",
                              on: {
                                click: function (e) {
                                  return (
                                    e.preventDefault(),
                                    t.onEditClicked(e)
                                  );
                                },
                              },
                            },
                            [
                              s("span", { staticClass: "el-icon-pencil" }),
                              t._v(" Edit details"),
                            ],
                          ),
                        ])
                      : t._e(),
                    t.canLoginAs
                      ? s("li", [
                          s(
                            "a",
                            {
                              staticClass: "dropdown-menu-link",
                              on: {
                                click: function (e) {
                                  return (
                                    e.preventDefault(),
                                    t.onLoginAsClicked(e)
                                  );
                                },
                              },
                            },
                            [
                              s("span", { staticClass: "el-icon-key" }),
                              t._v(" Log in as subaccount"),
                            ],
                          ),
                        ])
                      : t._e(),
                    t.isClosed
                      ? s("li", [
                          s(
                            "a",
                            {
                              staticClass: "dropdown-menu-link",
                              on: {
                                click: function (e) {
                                  return (
                                    e.preventDefault(),
                                    t.onReopenClicked(e)
                                  );
                                },
                              },
                            },
                            [
                              s("span", { staticClass: "el-icon-upload" }),
                              t._v(" Reopen subaccount"),
                            ],
                          ),
                        ])
                      : t._e(),
                    t.canClose
                      ? s("li", [
                          s(
                            "a",
                            {
                              staticClass:
                                "dropdown-menu-link link-red trigger-remove",
                              on: {
                                click: function (e) {
                                  return (
                                    e.preventDefault(),
                                    t.onRemoveClicked(e)
                                  );
                                },
                              },
                            },
                            [
                              s("span", { staticClass: "icon-remove" }, [
                                t._v("×"),
                              ]),
                              t._v(" Close subaccount"),
                            ],
                          ),
                        ])
                      : t._e(),
                  ],
                ),
                s("ConfirmDeletePopup", {
                  ref: "confirm_delete_popup",
                  attrs: { subaccount: t.subaccount },
                }),
              ],
              1,
            ),
          ]);
        }),
      bt = [],
      gt = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", [
          s(
            "ul",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: t.mixinTriggerable_isOpen,
                  expression: "mixinTriggerable_isOpen",
                },
              ],
              staticClass:
                "dropdown-menu confirm-remove is-active mixinTriggerable_layer",
              class: { hide: t.isWorking },
            },
            [
              s("li", [
                s("span", { staticClass: "tooltip-title" }, [
                  t._v("Confirm closure?"),
                ]),
                t.isWorking
                  ? t._e()
                  : s(
                      "a",
                      {
                        staticClass: "table-remove",
                        on: { click: t.onConfirmCloseClicked },
                      },
                      [t._v("Close")],
                    ),
                t.isWorking
                  ? t._e()
                  : s(
                      "a",
                      {
                        staticClass: "table-remove-close",
                        on: { click: t.mixinTriggerable_forceClose },
                      },
                      [t._v("Cancel")],
                    ),
              ]),
            ],
          ),
          s("div", { staticClass: "modal-overlay" }),
        ]);
      },
      vt = [],
      Ct = {
        name: "ConfirmDeletePopup",
        mixins: [Z, Q],
        props: { subaccount: { type: Object, required: !0 } },
        data: function () {
          return { isWorking: !1, requestPoint: this.$config.requestPoint };
        },
        methods: {
          onConfirmCloseClicked: function () {
            var t = this;
            this.isWorking = !0;
            var e = {
              subaccount_member_id: this.subaccount.record_id,
              subaccount_username: this.subaccount.email,
            };
            this.mixinAjax_put(
              this.requestPoint,
              "close",
              e,
              function (e) {
                ((t.isWorking = !1),
                  HTML.set_time(e.responseJSON),
                  t.$eventBus.$emit("mixin-search-has-changed"),
                  t.$eventBus.$emit("mixin-search-trigger"),
                  t.mixinTriggerable_forceClose());
              },
              function (e) {
                ((t.isWorking = !1),
                  HTML.handleError(e.responseJSON),
                  t.mixinTriggerable_forceClose());
              },
            );
          },
        },
      },
      St = Ct,
      Et = Object(I["a"])(St, gt, vt, !1, null, null, null),
      Tt = Et.exports,
      Ot = {
        name: "SubAccountsToolbox",
        mixins: [Z],
        components: { ConfirmDeletePopup: Tt },
        props: { subaccount: { type: Object, required: !0 } },
        computed: {
          showToolbox: function () {
            return this.canEdit || this.canLoginAs || this.canClose;
          },
          canEdit: function () {
            return !0;
          },
          isArchivingEnabled: function () {
            return this.subaccount.archiving_allowed;
          },
          isSMSEnabled: function () {
            return !this.subaccount.sms_disabled_by_master;
          },
          is2FAEnforced: function () {
            return this.subaccount.enforce_2fa;
          },
          canLoginAs: function () {
            return !this.isClosed;
          },
          canClose: function () {
            return !this.isClosed && !this.isSuspended;
          },
          isClosed: function () {
            return "Closed" == this.subaccount.state;
          },
          isSuspended: function () {
            return "Suspended" == this.subaccount.state;
          },
          isInvited: function () {
            return !this.subaccount["has_password"];
          },
        },
        methods: {
          onEditClicked: function () {
            (this.$eventBus.$emit(u.SATBOX_EDIT_CLICKED, this.subaccount),
              this.mixinTriggerable_forceClose());
          },
          onLoginAsClicked: function () {
            (this.$eventBus.$emit(u.SATBOX_LOGIN_AS_CLICKED, this.subaccount),
              this.mixinTriggerable_forceClose());
          },
          onRemoveClicked: function () {
            (this.$refs.confirm_delete_popup.mixinTriggerable_forceOpen(),
              this.mixinTriggerable_forceClose());
          },
          onReopenClicked: function () {
            (this.$eventBus.$emit(u.REOPEN_SUBACCOUNT_CLICKED, this.subaccount),
              this.mixinTriggerable_forceClose());
          },
          onToggleArchivingClicked: function () {
            (this.$eventBus.$emit(u.TOGGLE_ARCHIVING_CLICKED, this.subaccount),
              this.mixinTriggerable_forceClose());
          },
          onToggle2FAClicked: function () {
            (this.$eventBus.$emit(u.TOGGLE_2FA_CLICKED, this.subaccount),
              this.mixinTriggerable_forceClose());
          },
          onToggleSMSClicked: function () {
            (this.$eventBus.$emit(u.TOGGLE_SMS_CLICKED, this.subaccount),
              this.mixinTriggerable_forceClose());
          },
          isValidEmail: function () {
            if (void 0 == this.subaccount.email) return !1;
            var t = /\S+@\S+\.\S+/;
            return t.test(this.subaccount.email);
          },
        },
      },
      wt = Ot,
      At = Object(I["a"])(wt, ft, bt, !1, null, null, null),
      xt = At.exports;
    function yt(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        (e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i));
      }
      return s;
    }
    function Pt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? yt(Object(s), !0).forEach(function (e) {
              Object(c["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : yt(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var It,
      kt,
      jt,
      Dt,
      Lt = {
        name: "SubaccountResultsDisplay",
        mixins: [Q, Z],
        components: { SubAccountsToolbox: xt },
        props: { canModify: Boolean },
        data: function () {
          return {
            subaccountResults: [],
            shownColumns: {},
            initialised: !1,
            requestPoint: this.$config.requestPoint,
            displayColumns: this.$config.displayColumns,
            regions: this.$config.regions,
            allResultsChecked: !1,
            rollover: "",
            switchingTo: 0,
            scrollPosition: 0,
            hasTeamMembers: !1,
            activeIndex: null,
          };
        },
        methods: {
          initSubaccountsResultsDisplay: function (t, e) {
            var s = this;
            ((this.rollover = t),
              (this.initialised = !0),
              this.$config.displayColumns.forEach(function (t) {
                var i = "show_subaccount_" + t["id"] + "_col";
                (void 0 != e &&
                  "app_settings" in e &&
                  i in e.app_settings &&
                  s.$set(t, "active", e.app_settings[i]),
                  s.$set(s.shownColumns, t["id"], t["active"]));
              }));
          },
          updateSubaccountsResults: function (t) {
            var e = this;
            ((this.switchingTo = 0),
              (this.subaccountResults = t),
              (this.hasTeamMembers = !1),
              this.subaccountResults.every(function (t) {
                return (
                  !(
                    null != t["team_members"] && t["team_members"].length > 0
                  ) || ((e.hasTeamMembers = !0), !1)
                );
              }),
              this.displayColumns.forEach(function (t) {
                var s = e.shownColumns[t.id];
                (!t.active && s && e.$set(t, "active", s),
                  "team" == t.id && e.$set(t, "active", e.hasTeamMembers));
              }));
          },
          handleColumnToggle: function (t, e) {
            void 0 !== t && t.stopImmediatePropagation();
            var s = this.shownColumns[e.id];
            (this.$set(this.shownColumns, e.id, !s),
              this.$set(e, "active", !s),
              this.$eventBus.$emit("mixin-column-has-changed"));
          },
          loadMoreResults: function () {
            (this.$eventBus.$emit("mixin-load-more"),
              this.$eventBus.$emit("mixin-search-trigger"));
          },
          calcUsagePercentage: function (t) {
            return (100 * t["used"]) / t["plansize"];
          },
          getArchiveColumnText: function (t) {
            return t.archiving_allowed ? "Allowed" : "Disallowed";
          },
          getSMSColumnText: function (t) {
            return t.sms_disabled_by_master ? "Disabled" : "Enabled";
          },
          get2FAColumnText: function (t) {
            return t.enforce_2fa ? "Enforced" : "Optional";
          },
          getRegionColumnText: function (t) {
            return this.regions.filter(function (e) {
              return e.id == t.region;
            })[0].label;
          },
          getStatusColumnText: function (t, e) {
            return e
              ? t["state"].toLowerCase().replace(/\s+/g, "-")
              : t["state"];
          },
          getStatusTooltip: function (t) {
            var e = "";
            switch (t) {
              case "EXPIRED_SUBACCOUNT":
                e =
                  "Note this subaccount is currently restricted from sending due to the master account reaching its email allowance.";
                break;
              case "ONHOLD_SUBACCOUNT":
                e =
                  "Note this subaccount is currently restricted from sending due to the master account's current status.";
                break;
              default:
                break;
            }
            return e;
          },
          getInitials: function (t) {
            var e = t.username;
            t.display_team_name.length > 0
              ? (e = t.display_team_name)
              : t.comment.length > 0 && (e = t.comment);
            var s = e.charAt(0).toUpperCase(),
              i = e.split(" ");
            return (i.length > 1 && (s += i.pop().charAt(0).toUpperCase()), s);
          },
          memberClass: function (t) {
            var e = "member-color-".concat(HTML.getUserColorIndex(t));
            return e;
          },
          showStatusWarning: function (t) {
            return "ONHOLD_SUBACCOUNT" == t || "EXPIRED_SUBACCOUNT" == t;
          },
          getDedicatedIPColumnText: function (t) {
            return "dedicated_ip" in t && t["dedicated_ip"] ? "Yes" : "No";
          },
          getIPPoolColumnText: function (t) {
            return "dedicated_ip" in t && t["dedicated_ip"]
              ? "None"
              : "follow_sponsor_default_ippool" in t &&
                  t["follow_sponsor_default_ippool"]
                ? "Default"
                : "poolname" in t && "" != t["poolname"]
                  ? t["poolname"]
                  : "Unknown";
          },
          getUsageDisplayString: function (t) {
            return (
              t["used"].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") +
              " / " +
              t["plansize"].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
            );
          },
          subaccountPopupClick: function (t) {
            var e = t.displaySubaccountPopup;
            (this.hideAllSubaccountPopup(),
              this.$set(t, "displaySubaccountPopup", !e));
          },
          hideAllSubaccountPopup: function () {
            var t = this;
            this.subaccountResults.forEach(function (e) {
              t.$set(e, "displaySubaccountPopup", !1);
            });
          },
          subaccountDeletePopupClick: function (t) {
            var e = t.displaySubaccountDeletePopup;
            (this.hideAllSubaccountPopup(),
              this.hideAllSubaccountDeletePopup(),
              this.$set(t, "displaySubaccountDeletePopup", !e));
          },
          hideAllSubaccountDeletePopup: function () {
            var t = this;
            this.subaccountResults.forEach(function (e) {
              t.$set(e, "displaySubaccountDeletePopup", !1);
            });
          },
          editSubaccount: function (t) {
            (this.$eventBus.$emit(u.SATBOX_EDIT_CLICKED, t),
              this.hideAllSubaccountPopup(),
              this.$emit("scrollToPos", this.scrollPosition));
          },
          loginAsSubaccount: function (t) {
            ((this.switchingTo = t.record_id),
              this.$eventBus.$emit(u.SATBOX_LOGIN_AS_CLICKED, t));
          },
          windowClicked: function (t) {
            var e = ".subaccounts-popup";
            K()(t.target).parents(e).length ||
              (this.hideAllSubaccountPopup(),
              this.hideAllSubaccountDeletePopup());
          },
          columnClick: function (t, e) {
            if ("description" === e.id) {
              void 0 !== t &&
                screen.width < 768 &&
                (t.preventDefault(), t.stopPropagation());
              var s = K()(t.target).closest(".long-description");
              s.toggleClass("more-description");
            }
          },
          getShownColumns: function () {
            return this.shownColumns;
          },
          scrollToTop: function () {
            window.scrollTo(0, 0);
          },
          getPosition: function () {
            var t = document.documentElement.scrollTop;
            this.scrollPosition = t;
          },
          isValidEmail: function (t) {
            var e = /\S+@\S+\.\S+/;
            return e.test(t);
          },
          dropdownOverflow: function () {
            var t = document.querySelectorAll(".team-more-dropdown"),
              e = document.querySelector("#bounce-dtable"),
              s = !1;
            function i(t) {
              var e = t.getBoundingClientRect();
              return (
                e.left < 0 || e.right > document.documentElement.clientWidth
              );
            }
            (t.forEach(function (t) {
              i(t)
                ? (t.classList.add("is-overflow"), (s = !0))
                : t.classList.remove("is-overflow");
            }),
              s
                ? e.classList.add("dropdown-overflow")
                : e.classList.remove("dropdown-overflow"));
          },
          handleMouseOver: function (t) {
            ((this.activeIndex =
              t + 1 < this.subaccountResults.length ? t + 1 : null),
              this.updateTableClasses(t));
          },
          isActive: function (t) {
            return this.activeIndex === t;
          },
          updateTableClasses: function () {
            for (
              var t = this.$el.querySelectorAll("tr"), e = 0;
              e < t.length;
              e++
            ) {
              var s = e === this.activeIndex;
              t[e].classList.toggle("hover-active", s);
            }
          },
        },
        computed: Pt(
          Pt(
            {
              numSubaccounts: function () {
                return this.subaccountResults.length;
              },
            },
            Object(d["b"])({
              isAjaxRunning: v.getters.GET_IS_AJAX_RUNNING,
              isQuiteRequest: v.getters.GET_IS_QUIET_REQUEST,
            }),
          ),
          {},
          {
            shouldShow: function () {
              return !!this.initialised || !this.isAjaxRunning;
            },
            activeColumns: function () {
              return this.displayColumns.filter(function (t) {
                return t.active;
              });
            },
            columnFilters: function () {
              return this.displayColumns.filter(function (t) {
                return t.filterable;
              });
            },
          },
        ),
        mounted: function () {
          (K()(".page-content-wrapper .page-content").on(
            "click.Bst",
            this.windowClicked,
          ),
            this.dropdownOverflow(),
            window.addEventListener("resize", this.dropdownOverflow),
            this.updateTableClasses(this.activeIndex));
        },
        updated: function () {
          (this.dropdownOverflow(), this.updateTableClasses(this.activeIndex));
        },
        beforeUnmount: function () {
          window.removeEventListener("resize", this.dropdownOverflow);
        },
        destroyed: function () {
          K()(window).off(
            ".page-content-wrapper .page-content",
            this.windowClicked,
          );
        },
      },
      Mt = Lt,
      $t = Object(I["a"])(Mt, mt, _t, !1, null, null, null),
      Nt = $t.exports,
      Rt = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "new-subaccount-form card hide is-fadeout" },
          [
            s("div", { staticClass: "card-content" }, [
              s(
                "form",
                { attrs: { id: "subaccounts-add" } },
                [
                  "" != t.hashid
                    ? s("div", { staticClass: "form-group" }, [
                        s("label", { staticClass: "form-group-label" }, [
                          t._v("Subaccount ID"),
                        ]),
                        s(
                          "div",
                          { staticClass: "form-group-item form-group-static" },
                          [s("span", [t._v(t._s(t.hashid))])],
                        ),
                      ])
                    : t._e(),
                  s("div", { staticClass: "form-group" }, [
                    s("label", { staticClass: "form-group-label" }, [
                      t._v("Subaccount name"),
                    ]),
                    s("div", { staticClass: "form-group-item" }, [
                      s("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.trim",
                            value: t.fullname,
                            expression: "fullname",
                            modifiers: { trim: !0 },
                          },
                        ],
                        staticClass: "form-control input-md",
                        class: { "is-invalid": t.errors.name },
                        attrs: { type: "text", autocomplete: "off" },
                        domProps: { value: t.fullname },
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              (t.fullname = e.target.value.trim());
                          },
                          blur: function (e) {
                            return t.$forceUpdate();
                          },
                        },
                      }),
                      s("span", { staticClass: "field-info" }, [
                        t._v(
                          "This is your internal reference for the subaccount.",
                        ),
                      ]),
                      s(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: t.errors.name,
                              expression: "errors.name",
                            },
                          ],
                          staticClass: "field-error",
                        },
                        [t._v(t._s(t.errorMessages.name))],
                      ),
                    ]),
                  ]),
                  t.isEdit &&
                  t.subaccount["team_members"] &&
                  t.subaccount["team_members"].length > 0
                    ? s("div", { staticClass: "form-group" }, [
                        s(
                          "label",
                          { staticClass: "form-group-label form-group-text" },
                          [t._v("Team Members")],
                        ),
                        s("div", { staticClass: "form-group-item" }, [
                          s(
                            "div",
                            { staticClass: "form-group-text" },
                            t._l(t.subaccount["team_members"], function (e) {
                              return s(
                                "span",
                                {
                                  key: e.username,
                                  class: t.memberClass(e.username),
                                },
                                [
                                  s(
                                    "span",
                                    { staticClass: "member-initials" },
                                    [
                                      t._v(
                                        "\n              " +
                                          t._s(t.getInitials(e)) +
                                          "\n            ",
                                      ),
                                    ],
                                  ),
                                  s("span", { staticClass: "member-details" }, [
                                    s(
                                      "span",
                                      { staticClass: "member-username" },
                                      [
                                        t._v(
                                          t._s(e.display_team_name) +
                                            " \n                ",
                                        ),
                                        !e.has_password &&
                                        t.isValidEmail(e.username)
                                          ? s(
                                              "span",
                                              {
                                                staticClass:
                                                  "invitation-indicator",
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    e.invited
                                                      ? "Invited"
                                                      : "Invite expired",
                                                  ),
                                                ),
                                              ],
                                            )
                                          : t._e(),
                                      ],
                                    ),
                                    s("span", { staticClass: "member-email" }, [
                                      t._v(t._s(e.username)),
                                    ]),
                                  ]),
                                ],
                              );
                            }),
                            0,
                          ),
                          s("div", { staticClass: "field-info" }, [
                            t._v(
                              "Team members for a subaccount can be changed after logging directly into the subaccount.",
                            ),
                          ]),
                        ]),
                      ])
                    : t._e(),
                  s("div", { staticClass: "form-group" }, [
                    s("label", { staticClass: "form-group-label" }, [
                      t._v("Monthly email limit"),
                    ]),
                    s(
                      "div",
                      { staticClass: "form-group-content" },
                      [
                        s("div", { staticClass: "form-group-item" }, [
                          s("div", { staticClass: "form-select-wrapper" }, [
                            s(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.plan,
                                    expression: "plan",
                                  },
                                ],
                                staticClass: "form-control input-md",
                                class: { "is-invalid": t.errors.limit },
                                attrs: { name: "" },
                                on: {
                                  change: function (e) {
                                    var s = Array.prototype.filter
                                      .call(e.target.options, function (t) {
                                        return t.selected;
                                      })
                                      .map(function (t) {
                                        var e =
                                          "_value" in t ? t._value : t.value;
                                        return e;
                                      });
                                    t.plan = e.target.multiple ? s : s[0];
                                  },
                                },
                              },
                              t._l(t.plans.no_ip, function (e) {
                                return s(
                                  "option",
                                  { key: e.record_id, domProps: { value: e } },
                                  [
                                    t._v(
                                      "\n                  " +
                                        t._s(
                                          e.number_of_relays
                                            .toString()
                                            .replace(
                                              /(\d)(?=(\d{3})+(?!\d))/g,
                                              "$1,",
                                            ),
                                        ) +
                                        "\n                ",
                                    ),
                                  ],
                                );
                              }),
                              0,
                            ),
                          ]),
                          s("span", { staticClass: "field-info" }, [
                            t._v(
                              "Your subaccount will be able to send up to this monthly limit.",
                            ),
                          ]),
                          s(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: t.errors.limit,
                                  expression: "errors.limit",
                                },
                              ],
                              staticClass: "field-error",
                            },
                            [t._v(t._s(t.errorMessages.limit))],
                          ),
                        ]),
                        s("transition", { attrs: { name: "fadeHeight" } }, [
                          t.isDedicatedIpSuggestionVisible
                            ? s(
                                "div",
                                { staticClass: "suggestion-panel-wrapper" },
                                [
                                  s(
                                    "div",
                                    { staticClass: "suggestion-panel" },
                                    [
                                      s("div", { staticClass: "icon" }, [
                                        s(
                                          "svg",
                                          {
                                            attrs: {
                                              width: "17",
                                              height: "17",
                                              viewBox: "0 0 17 17",
                                            },
                                          },
                                          [
                                            s(
                                              "g",
                                              {
                                                attrs: {
                                                  fill: "none",
                                                  "fill-rule": "evenodd",
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                },
                                              },
                                              [
                                                s(
                                                  "g",
                                                  {
                                                    attrs: {
                                                      stroke: "#828DA0",
                                                    },
                                                  },
                                                  [
                                                    s("g", [
                                                      s("g", [
                                                        s("path", {
                                                          attrs: {
                                                            fill: "#BDC3CC",
                                                            "fill-opacity":
                                                              ".501",
                                                            d: "M1.874 10.585c-.504 0-.948-.333-1.087-.817-.139-.483.06-1 .488-1.266L13.827.677c.38-.237.866-.227 1.236.025.37.253.556.7.472 1.14l-2.444 12.985c-.083.439-.418.788-.854.889-.437.101-.892-.064-1.16-.421l-3.539-4.71H1.874z",
                                                            transform:
                                                              "translate(-206.000000, -453.000000) translate(196.000000, 438.000000) translate(10.313278, 15.158730)",
                                                          },
                                                        }),
                                                        s("path", {
                                                          attrs: {
                                                            fill: "#BDC3CC",
                                                            "fill-opacity":
                                                              ".501",
                                                            d: "M7.538 10.585H5.84v3.502c0 .417.232.8.602.996.37.195.818.17 1.164-.066l2.158-1.467-2.226-2.965z",
                                                            transform:
                                                              "translate(-206.000000, -453.000000) translate(196.000000, 438.000000) translate(10.313278, 15.158730)",
                                                          },
                                                        }),
                                                        s("path", {
                                                          attrs: {
                                                            d: "M7.537 10.585L15.062 0.704",
                                                            transform:
                                                              "translate(-206.000000, -453.000000) translate(196.000000, 438.000000) translate(10.313278, 15.158730)",
                                                          },
                                                        }),
                                                      ]),
                                                    ]),
                                                  ],
                                                ),
                                              ],
                                            ),
                                          ],
                                        ),
                                      ]),
                                      s("div", { staticClass: "content" }, [
                                        s("p", [
                                          t._v(
                                            "\n                    Hey, big sender! We recommend using a ",
                                          ),
                                          s("strong", [
                                            t._v("Dedicated IP address"),
                                          ]),
                                          t._v(
                                            " with this subaccount to allow full control over its reputation.\n                    ",
                                          ),
                                          s("br"),
                                          t._v(
                                            "\n                    Include one for $19 per month?\n                  ",
                                          ),
                                        ]),
                                        s("div", { staticClass: "buttons" }, [
                                          s(
                                            "button",
                                            {
                                              staticClass: "btn blue",
                                              attrs: { type: "button" },
                                              on: {
                                                click: t.selectDedicatedIp,
                                              },
                                            },
                                            [t._v("Yes please")],
                                          ),
                                          s(
                                            "button",
                                            {
                                              staticClass: "btn btn-outlined",
                                              attrs: { type: "button" },
                                              on: {
                                                click: t.ignoreDedicatedIp,
                                              },
                                            },
                                            [t._v("No thanks")],
                                          ),
                                        ]),
                                      ]),
                                    ],
                                  ),
                                ],
                              )
                            : t._e(),
                        ]),
                      ],
                      1,
                    ),
                  ]),
                  s("div", { staticClass: "form-group inline-checkbox" }, [
                    s("label", { staticClass: "form-group-label" }, [
                      t._v("Allow archiving"),
                    ]),
                    s("div", { staticClass: "form-group-item" }, [
                      s(
                        "div",
                        {
                          staticClass: "checker",
                          on: {
                            click: function (e) {
                              (e.preventDefault(),
                                (t.allowArchiving = !t.allowArchiving));
                            },
                          },
                        },
                        [
                          s("span", {
                            staticClass: "checker-box",
                            class: { checked: t.allowArchiving },
                          }),
                        ],
                      ),
                      s(
                        "span",
                        {
                          staticClass: "inline-checkbox-desc",
                          on: {
                            click: function (e) {
                              t.allowArchiving = !t.allowArchiving;
                            },
                          },
                        },
                        [
                          t._v(
                            "\n            Choose whether the subaccount is ",
                          ),
                          s("strong", [t._v("allowed")]),
                          t._v(
                            " to enable archiving. You still need to turn on archiving for individual senders within the subaccount.\n          ",
                          ),
                        ],
                      ),
                    ]),
                  ]),
                  s("div", { staticClass: "form-group" }, [
                    s("label", { staticClass: "form-group-label push-up" }, [
                      t._v("Enable SMS"),
                    ]),
                    t.showSwitchProcessorSplash
                      ? s(
                          "div",
                          { staticClass: "form-group-content has-sub-item" },
                          [t._m(0)],
                        )
                      : t._e(),
                    t.showSwitchProcessorSplash
                      ? t._e()
                      : s(
                          "div",
                          { staticClass: "form-group-content has-sub-item" },
                          [
                            s("div", { staticClass: "form-group-item" }, [
                              s(
                                "label",
                                {
                                  staticClass:
                                    "inline-checkbox inline-height-toggler",
                                  class: { "is-checked": !t.smsDisabled },
                                  on: {
                                    click: function (e) {
                                      (e.preventDefault(),
                                        (t.smsDisabled = !t.smsDisabled));
                                    },
                                  },
                                },
                                [t._m(1)],
                              ),
                              s(
                                "span",
                                {
                                  staticClass: "inline-checkbox-desc",
                                  on: {
                                    click: function (e) {
                                      t.smsDisabled = !t.smsDisabled;
                                    },
                                  },
                                },
                                [
                                  t._v(
                                    "\n              Enable SMS messaging for the subaccount. Additional charges apply.\n            ",
                                  ),
                                ],
                              ),
                            ]),
                            s(
                              "div",
                              {
                                staticClass: "form-group-sub-item",
                                class: { "is-active": !t.smsDisabled },
                              },
                              [
                                s("h4", [t._v("Monthly SMS limit")]),
                                s(
                                  "div",
                                  { staticClass: "form-select-wrapper" },
                                  [
                                    s(
                                      "select",
                                      {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.smsLimit,
                                            expression: "smsLimit",
                                          },
                                        ],
                                        staticClass: "form-control input-md",
                                        attrs: { name: "" },
                                        on: {
                                          change: function (e) {
                                            var s = Array.prototype.filter
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
                                            t.smsLimit = e.target.multiple
                                              ? s
                                              : s[0];
                                          },
                                        },
                                      },
                                      t._l(t.smsLimitOptions, function (e) {
                                        return s(
                                          "option",
                                          { key: e, domProps: { value: e } },
                                          [
                                            t._v(
                                              "\n                  " +
                                                t._s(
                                                  e
                                                    .toString()
                                                    .replace(
                                                      /(\d)(?=(\d{3})+(?!\d))/g,
                                                      "$1,",
                                                    ),
                                                ) +
                                                "\n                ",
                                            ),
                                          ],
                                        );
                                      }),
                                      0,
                                    ),
                                  ],
                                ),
                                s("span", { staticClass: "field-info" }, [
                                  t._v(
                                    "Your subaccount will be able to send up to this monthly limit of SMS messages. \n              Their sending will also be limited by the master account's overall monthly limit.\n            ",
                                  ),
                                ]),
                              ],
                            ),
                          ],
                        ),
                  ]),
                  s("transition", { attrs: { name: "fadeHeight" } }, [
                    t.hasDedicatedIpOption && !t.isDedicatedIpSuggestionVisible
                      ? s(
                          "div",
                          { staticClass: "form-group inline-checkbox" },
                          [
                            s("label", { staticClass: "form-group-label" }, [
                              t._v("Dedicated IP"),
                            ]),
                            s("div", { staticClass: "form-group-item" }, [
                              s(
                                "div",
                                {
                                  staticClass: "checker",
                                  on: {
                                    click: function (e) {
                                      return (
                                        e.preventDefault(),
                                        t.toggleDedicatedIP(e)
                                      );
                                    },
                                  },
                                },
                                [
                                  s("span", {
                                    staticClass: "checker-box",
                                    class: { checked: t.isDedicatedIpSelected },
                                  }),
                                ],
                              ),
                              s(
                                "span",
                                {
                                  staticClass: "inline-checkbox-desc",
                                  on: { click: t.toggleDedicatedIP },
                                },
                                [
                                  t._v(
                                    "\n              Include a dedicated IP for $19 per month\n            ",
                                  ),
                                ],
                              ),
                            ]),
                          ],
                        )
                      : t._e(),
                  ]),
                  t.pools.length > 1
                    ? s("div", { staticClass: "form-group" }, [
                        s("label", { staticClass: "form-group-label" }, [
                          t._v("IP Pool"),
                        ]),
                        s("div", { staticClass: "form-group-content" }, [
                          s("div", { staticClass: "form-group-item" }, [
                            s("div", { staticClass: "form-select-wrapper" }, [
                              s(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: t.selectedPool,
                                      expression: "selectedPool",
                                    },
                                  ],
                                  staticClass: "form-control input-md",
                                  class: { disabled: t.isDedicatedIpSelected },
                                  attrs: {
                                    name: "",
                                    disabled: t.isDedicatedIpSelected,
                                  },
                                  on: {
                                    change: function (e) {
                                      var s = Array.prototype.filter
                                        .call(e.target.options, function (t) {
                                          return t.selected;
                                        })
                                        .map(function (t) {
                                          var e =
                                            "_value" in t ? t._value : t.value;
                                          return e;
                                        });
                                      t.selectedPool = e.target.multiple
                                        ? s
                                        : s[0];
                                    },
                                  },
                                },
                                [
                                  t.isDedicatedIpSelected
                                    ? s("option", { domProps: { value: -1 } })
                                    : s("option", { domProps: { value: -2 } }, [
                                        t._v(t._s(t.getDefaultText())),
                                      ]),
                                  t._l(t.pools, function (e) {
                                    return s(
                                      "option",
                                      {
                                        key: e.poolid,
                                        domProps: { value: e.poolid },
                                      },
                                      [
                                        t._v(
                                          "\n                  " +
                                            t._s(e.poolname) +
                                            "\n                ",
                                        ),
                                      ],
                                    );
                                  }),
                                ],
                                2,
                              ),
                            ]),
                            s("span", { staticClass: "field-info" }, [
                              t._v(
                                "Your subaccount will use this IP Pool for sending.",
                              ),
                            ]),
                            s("span", { staticClass: "field-info" }, [
                              t._v(
                                "Changes may take up to 5 minutes to take effect.",
                              ),
                            ]),
                          ]),
                        ]),
                      ])
                    : t._e(),
                  s("div", { staticClass: "form-group" }, [
                    s("label", { staticClass: "form-group-label push-up" }, [
                      t._v("Enforce 2FA"),
                    ]),
                    s(
                      "div",
                      { staticClass: "form-group-content has-sub-item" },
                      [
                        s("div", { staticClass: "form-group-item" }, [
                          s(
                            "label",
                            {
                              staticClass:
                                "inline-checkbox inline-height-toggler",
                              class: { "is-checked": t.enforce2FA },
                              on: {
                                click: function (e) {
                                  (e.preventDefault(),
                                    (t.enforce2FA = !t.enforce2FA));
                                },
                              },
                            },
                            [t._m(2)],
                          ),
                          s(
                            "span",
                            {
                              staticClass: "inline-checkbox-desc",
                              on: {
                                click: function (e) {
                                  t.enforce2FA = !t.enforce2FA;
                                },
                              },
                            },
                            [
                              t._v(
                                "\n              Enforce team members of this subaccount to use 2FA.\n            ",
                              ),
                            ],
                          ),
                        ]),
                      ],
                    ),
                  ]),
                  t.isEdit
                    ? t._e()
                    : s("div", { staticClass: "form-group inline-checkbox" }, [
                        s("label", { staticClass: "form-group-label" }, [
                          t._v("Verification"),
                        ]),
                        s("div", { staticClass: "form-group-item" }, [
                          s(
                            "div",
                            {
                              staticClass: "checker",
                              on: {
                                click: function (e) {
                                  (e.preventDefault(),
                                    (t.isVerified = !t.isVerified));
                                },
                              },
                            },
                            [
                              s("span", {
                                staticClass: "checker-box",
                                class: { checked: t.isVerified },
                              }),
                            ],
                          ),
                          s(
                            "span",
                            {
                              staticClass: "inline-checkbox-desc",
                              on: { click: t.handleVerifiedLabelClick },
                            },
                            [
                              t._v(
                                "\n            I verify that the new subaccount owner has agreed to our ",
                              ),
                              s(
                                "a",
                                {
                                  attrs: {
                                    href: "https://www.smtp2go.com/terms/",
                                    target: "_blank",
                                  },
                                },
                                [t._v("terms of service.")],
                              ),
                            ],
                          ),
                        ]),
                      ]),
                ],
                1,
              ),
            ]),
            s("footer", [
              t.isEdit && !t.isWorking && t.isClosed
                ? s(
                    "button",
                    {
                      staticClass: "btn pale-green",
                      on: { click: t.onReopenClicked },
                    },
                    [t._v("Reopen subaccount")],
                  )
                : t._e(),
              t.isWorking
                ? t._e()
                : s(
                    "button",
                    {
                      staticClass: "btn blue",
                      attrs: { disabled: !t.isVerified },
                      on: { click: t.onAddEditRequest },
                    },
                    [t._v(t._s(t.isEdit ? "Save" : "Add subaccount"))],
                  ),
              t.isWorking
                ? s(
                    "button",
                    { staticClass: "btn blue", attrs: { disabled: !0 } },
                    [t._v("Working...")],
                  )
                : t._e(),
              s(
                "button",
                {
                  staticClass: "btn btn-outlined button-cancel",
                  attrs: { disabled: t.isWorking },
                  on: { click: t.onCancelClicked },
                },
                [t._v("Back")],
              ),
            ]),
          ],
        );
      },
      Ut = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "span",
            { staticClass: "field-info field-info-switch-processor" },
            [
              t._v(
                "To enable SMS, you firstly need to move to our new payment processor. See here for details:\n            ",
              ),
              s(
                "a",
                {
                  attrs: {
                    target: "_blank",
                    href: "https://support.smtp2go.com/hc/en-gb/articles/28407225527449-Switch-Payment-Processors",
                  },
                },
                [
                  t._v(
                    "\n              switch payment processors\n            ",
                  ),
                ],
              ),
              t._v(".\n          "),
            ],
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "checker" }, [
            s("span", { staticClass: "checked" }, [
              s("input", { attrs: { type: "checkbox" } }),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "checker" }, [
            s("span", { staticClass: "checked" }, [
              s("input", { attrs: { type: "checkbox" } }),
            ]),
          ]);
        },
      ],
      Gt = (s("55dd"), s("bc3a")),
      Bt = s.n(Gt),
      Ht = Bt.a.create(),
      Kt = function (t) {
        (Ht.interceptors.request.use(function (e) {
          return (
            t.commit("root/INC_RUNNING_AJAX_REQUESTS"),
            t.commit("root/CLEAR_SUCCESS_MESSAGE"),
            t.commit("root/CLEAR_ERROR_MESSAGE"),
            e
          );
        }),
          Ht.interceptors.response.use(
            function (e) {
              if (
                (t.commit("root/DEC_RUNNING_AJAX_REQUESTS"),
                (e = e.data),
                "error" in e)
              )
                return Promise.reject(e.error);
              var s = e.message,
                i = e.results,
                n = e.verification;
              return Promise.resolve({
                results: i,
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
      qt = "plan/",
      Jt = {
        getters: {
          GET_IS_INITIALISED: qt + "GET_IS_INITIALISED",
          GET_PLAN_LIST: qt + "GET_PLAN_LIST",
          GET_PLAN_TIERS: qt + "GET_PLAN_TIERS",
        },
        mutations: {
          SET_IS_INITIALISED: qt + "SET_IS_INITIALISED",
          SET_PLAN_LIST: qt + "SET_PLAN_LIST",
        },
        actions: { FETCH_PLAN_LIST: qt + "FETCH_PLAN_LIST" },
      },
      Ft = f(qt, Jt),
      zt = {
        is_initialised: !1,
        plan_list: [],
        plan_tiers: {
          free: 1e3,
          starter: 1e4,
          professional: 1e5,
          corporate: 1e6,
        },
      },
      Wt =
        ((It = {}),
        Object(c["a"])(It, Ft.getters.GET_IS_INITIALISED, function (t) {
          return t.is_initialised;
        }),
        Object(c["a"])(It, Ft.getters.GET_PLAN_LIST, function (t) {
          return t.plan_list;
        }),
        Object(c["a"])(It, Ft.getters.GET_PLAN_TIERS, function (t) {
          return t.plan_tiers;
        }),
        It),
      Qt =
        ((kt = {}),
        Object(c["a"])(kt, Ft.mutations.SET_IS_INITIALISED, function (t, e) {
          t.is_initialised = e;
        }),
        Object(c["a"])(kt, Ft.mutations.SET_PLAN_LIST, function (t, e) {
          t.plan_list = e;
        }),
        kt),
      Vt = Object(c["a"])({}, Ft.actions.FETCH_PLAN_LIST, function (t) {
        return new Promise(function (e, s) {
          Ht.get(t.rootGetters[v.getters.GET_BACKEND_URL]("Change Plan", ""))
            .then(function (s) {
              var i = s.results.plans;
              (t.commit(Ft.mutations.SET_PLAN_LIST, i),
                t.commit(Ft.mutations.SET_IS_INITIALISED, !0),
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
      Xt = {
        namespaced: !0,
        state: zt,
        getters: Wt,
        mutations: Qt,
        actions: Vt,
      },
      Yt = "pool/",
      Zt = {
        getters: {
          GET_IS_INITIALISED: Yt + "GET_IS_INITIALISED",
          GET_POOL_LIST: Yt + "GET_POOL_LIST",
        },
        mutations: {
          SET_IS_INITIALISED: Yt + "SET_IS_INITIALISED",
          SET_POOL_LIST: Yt + "SET_POOL_LIST",
        },
      },
      te = f(Yt, Zt),
      ee = { is_initialised: !1, pool_list: [] },
      se =
        ((jt = {}),
        Object(c["a"])(jt, te.getters.GET_IS_INITIALISED, function (t) {
          return t.is_initialised;
        }),
        Object(c["a"])(jt, te.getters.GET_POOL_LIST, function (t) {
          return t.pool_list;
        }),
        jt),
      ie =
        ((Dt = {}),
        Object(c["a"])(Dt, te.mutations.SET_IS_INITIALISED, function (t, e) {
          t.is_initialised = e;
        }),
        Object(c["a"])(Dt, te.mutations.SET_POOL_LIST, function (t, e) {
          t.pool_list = e;
        }),
        Dt),
      ne = {},
      ae = {
        namespaced: !0,
        state: ee,
        getters: se,
        mutations: ie,
        actions: ne,
      };
    function oe(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        (e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i));
      }
      return s;
    }
    function re(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? oe(Object(s), !0).forEach(function (e) {
              Object(c["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : oe(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var ce = {
        name: "NewSubaccountCard",
        mixins: [Z, Q],
        data: function () {
          return {
            apMetadata: {},
            isVerified: !1,
            requestPoint: this.$config.requestPoint,
            isWorking: !1,
            isEdit: !1,
            subaccount: Object,
            record_id: -1,
            hashid: "",
            fullname: "",
            email: "",
            plan: Object,
            poolid: -2,
            pool_account: -1,
            follow_sponsor_default_ippool: !0,
            selectedPool: -2,
            errors: { email: !1, name: !1, limit: !1 },
            errorMessages: {},
            emailLimit: 5e3,
            smsLimitOptions: this.$config.smsLimitOptions,
            smsLimit: 1e3,
            smsDisabled: !0,
            enforce2FA: !1,
            allowArchiving: !1,
            hasDedicatedIpSuggestionAnswer: !1,
            isDedicatedIpSelected: !1,
            scrollVal: 0,
            masterSMSLimit: 50,
            showSwitchProcessorSplash: !0,
          };
        },
        created: function () {
          (this.resetErrors(),
            this.$eventBus.$on("updatePosition", this.updateValue));
        },
        methods: {
          updateValue: function (t) {
            this.scrollVal = t;
          },
          handleVerifiedLabelClick: function (t) {
            "span" === t.target.localName &&
              ((this.isVerified = !this.isVerified),
              event.stopImmediatePropagation());
          },
          initAsEdit: function (t, e, s, i) {
            ((this.isEdit = !0),
              (this.apMetadata = t),
              (this.isVerified = !0),
              (this.hasDedicatedIpSuggestionAnswer = !1),
              (this.subaccount = e),
              (this.record_id = e.record_id),
              (this.hashid = e.hashid),
              (this.fullname = e.name),
              (this.email = e.email),
              (this.smsLimit = e.sms_monthly_limit),
              (this.masterSMSLimit = s),
              this.calcSMSLimitOptions(),
              (this.smsDisabled = e.sms_disabled_by_master),
              (this.enforce2FA = e.enforce_2fa),
              (this.plan = this.getPlan(e.plan)),
              (this.poolid = e.poolid),
              (this.pool_account = e.ippool_account),
              (this.follow_sponsor_default_ippool =
                e.follow_sponsor_default_ippool),
              (this.selectedPool = e.poolid),
              this.follow_sponsor_default_ippool &&
                ((this.selectedPool = -2), (this.poolid = -1)),
              this.isDedicatedIpSelected &&
                ((this.selectedPool = -1), (this.poolid = -1)),
              (this.allowArchiving = e.archiving_allowed),
              (this.showSwitchProcessorSplash = i),
              this.resetErrors(),
              $(".page-content").removeAttr("style"));
          },
          initAsNew: function (t, e, s) {
            ((this.isEdit = !1),
              (this.isDedicatedIpSelected = !1),
              (this.apMetadata = t),
              (this.isVerified = !1),
              (this.hasDedicatedIpSuggestionAnswer = !1),
              (this.subaccount = {}),
              (this.subaccount.poolid = -2),
              (this.record_id = -1),
              (this.hashid = ""),
              (this.fullname = ""),
              (this.email = ""),
              (this.smsLimit = 10),
              (this.masterSMSLimit = e),
              this.calcSMSLimitOptions(),
              (this.smsDisabled = !0),
              (this.enforce2FA = !1),
              (this.plan = this.plans.no_ip[Object.keys(this.plans.no_ip)[0]]),
              (this.poolid = -2),
              (this.pool_account = -1),
              (this.follow_sponsor_default_ippool = !0),
              (this.selectedPool = -2),
              (this.showSwitchProcessorSplash = s),
              this.resetErrors());
          },
          resetErrors: function () {
            ((this.errors = { email: !1, name: !1, limit: !1 }),
              (this.errorMessages = {}));
          },
          selectDedicatedIp: function () {
            ((this.hasDedicatedIpSuggestionAnswer = !0),
              this.toggleDedicatedIP());
          },
          ignoreDedicatedIp: function () {
            this.hasDedicatedIpSuggestionAnswer = !0;
          },
          toggleDedicatedIP: function () {
            ((this.isDedicatedIpSelected = !this.isDedicatedIpSelected),
              this.isDedicatedIpSelected
                ? ((this.selectedPool = -1),
                  (this.follow_sponsor_default_ippool = !1),
                  (this.pool_account = -1))
                : ((this.pool_account = -1),
                  void 0 != this.subaccount.sponsor &&
                    (this.pool_account = this.subaccount.sponsor),
                  (this.follow_sponsor_default_ippool = !0),
                  void 0 != this.subaccount.follow_sponsor_default_ippool &&
                    (this.follow_sponsor_default_ippool =
                      this.subaccount.follow_sponsor_default_ippool),
                  this.follow_sponsor_default_ippool ||
                  this.subaccount.dedicated_ip
                    ? (this.selectedPool = -2)
                    : (this.selectedPool = this.subaccount.poolid)));
          },
          onAddEditRequest: function () {
            var t = this;
            ((this.isWorking = !0), (this.errors = {}));
            var e = this.plan.record_id;
            this.isDedicatedIpSelected && e + 1 in this.plans.with_ip && e++;
            var s = this.getDefaultPool(),
              i = this.apMetadata.sponsor,
              n = !0;
            this.isEdit
              ? this.isDedicatedIpSelected
                ? this.subaccount.dedicated_ip
                  ? ((s = this.subaccount.poolid),
                    (i = this.subaccount.ippool_account),
                    (n = this.subaccount.follow_sponsor_default_ippool))
                  : ((s = -1), (i = -1), (n = !1))
                : -2 == this.selectedPool
                  ? ((s = this.getDefaultPool()),
                    (i = this.apMetadata.sponsor),
                    (n = !0))
                  : ((s = this.selectedPool),
                    (i = this.apMetadata.sponsor),
                    (n = !1))
              : this.isDedicatedIpSelected
                ? ((s = -1), (i = -1), (n = !1))
                : -2 == this.selectedPool
                  ? ((s = this.getDefaultPool()),
                    (i = this.apMetadata.sponsor),
                    (n = !0))
                  : ((s = this.selectedPool),
                    (i = this.apMetadata.sponsor),
                    (n = !1));
            var a = {
                record_id: this.record_id,
                fullname: this.fullname,
                old_email: this.subaccount.email,
                new_email: this.email,
                plan: e,
                sms_monthly_limit: this.smsLimit,
                sms_disabled_by_master: this.smsDisabled,
                enforce_2fa: this.enforce2FA,
                allow_archiving: this.allowArchiving,
                ippool: s,
                ippool_account: i,
                follow_sponsor_default_ippool: n,
                region: this.region,
              },
              o = "create-subaccount";
            (this.isEdit && (o = "edit-subaccount"),
              this.mixinAjax_put(
                this.requestPoint,
                o,
                a,
                function (e) {
                  ((t.isWorking = !1),
                    HTML.set_time(e.responseJSON),
                    t.$eventBus.$emit(u.BACK_TO_MAIN_PAGE),
                    t.$eventBus.$emit("mixin-search-has-changed"),
                    t.$eventBus.$emit("mixin-search-trigger"));
                },
                function (e) {
                  ((t.isWorking = !1), t.handleError(e.responseJSON));
                },
              ));
          },
          handleError: function (t) {
            t.error.toLowerCase().includes("name")
              ? ((this.errors.name = !0), (this.errorMessages.name = t.error))
              : t.error.toLowerCase().includes("email limit")
                ? ((this.errors.limit = !0),
                  (this.errorMessages.limit = t.error))
                : t.error.toLowerCase().includes("email") ||
                    t.error.toLowerCase().includes("exists")
                  ? ((this.errors.email = !0),
                    (this.errorMessages.email = t.error))
                  : HTML.handleError(t);
          },
          onReopenClicked: function () {
            (this.$eventBus.$emit(u.REOPEN_SUBACCOUNT_CLICKED, this.subaccount),
              this.mixinTriggerable_forceClose());
          },
          getPlan: function (t) {
            return t in this.plans.no_ip
              ? ((this.isDedicatedIpSelected = !1), this.plans.no_ip[t])
              : t in this.plans.with_ip
                ? ((this.isDedicatedIpSelected = !0), this.plans.no_ip[t - 1])
                : ((this.isDedicatedIpSelected = !1),
                  {
                    has_private_ip: !1,
                    name: this.subaccount.plansize,
                    number_of_relays: this.subaccount.plansize,
                    record_id: t,
                  });
          },
          calcSMSLimitOptions: function () {
            var t = this;
            ((this.smsLimitOptions = this.$config.smsLimitOptions),
              this.smsLimitOptions.includes(this.smsLimit) ||
                this.smsLimitOptions.push(this.smsLimit),
              (this.smsLimitOptions = this.smsLimitOptions.filter(function (e) {
                return e <= t.masterSMSLimit;
              })),
              this.smsLimitOptions.sort(function (t, e) {
                return t - e;
              }));
          },
          onCancelClicked: function () {
            var t = Math.round(this.scrollVal);
            (this.$eventBus.$emit(u.BACK_TO_MAIN_PAGE),
              setTimeout(function () {
                window.scrollTo(0, t);
              }, 200));
          },
          memberClass: function (t) {
            var e = "member-color-".concat(HTML.getUserColorIndex(t));
            return e;
          },
          getInitials: function (t) {
            var e = t.username;
            t.display_team_name.length > 0
              ? (e = t.display_team_name)
              : t.comment.length > 0 && (e = t.comment);
            var s = e.charAt(0).toUpperCase(),
              i = e.split(" ");
            return (i.length > 1 && (s += i.pop().charAt(0).toUpperCase()), s);
          },
          isValidEmail: function (t) {
            var e = /\S+@\S+\.\S+/;
            return e.test(t);
          },
          getDefaultText: function () {
            var t = "Use default IP Pool";
            return (
              this.pools.forEach(function (e) {
                e.default &&
                  (t = t + " (current default is '" + e.poolname + "')");
              }),
              t
            );
          },
          getDefaultPool: function () {
            var t = -2;
            return (
              this.pools.forEach(function (e) {
                e.default && (t = e.poolid);
              }),
              t
            );
          },
        },
        computed: re(
          re(
            {},
            Object(d["b"])({
              plans: Jt.getters.GET_PLAN_LIST,
              pools: Zt.getters.GET_POOL_LIST,
            }),
          ),
          {},
          {
            isClosed: function () {
              return "Closed" == this.subaccount.state;
            },
            hasErrors: function () {
              return this.errors.email || this.errors.name || this.errors.limit;
            },
            hasDedicatedIpOption: function () {
              return (
                this.plan.number_of_relays >= 1e5 &&
                "undefined" != this.plans.with_ip &&
                Object.keys(this.plans.with_ip).length > 0
              );
            },
            isDedicatedIpSuggestionVisible: function () {
              return (
                this.plan.number_of_relays >= 5e5 &&
                this.hasDedicatedIpOption &&
                !this.isDedicatedIpSelected &&
                !this.hasDedicatedIpSuggestionAnswer
              );
            },
          },
        ),
      },
      le = ce,
      ue = (s("153a"), Object(I["a"])(le, Rt, Ut, !1, null, "d255f5f0", null)),
      de = ue.exports,
      he = function () {
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
      pe = [
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
                  s("span", { staticClass: "dot-circle clicked" }),
                ]),
              ]),
            ]),
          ]);
        },
      ];
    function me(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        (e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i));
      }
      return s;
    }
    function _e(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? me(Object(s), !0).forEach(function (e) {
              Object(c["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : me(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var fe = {
        name: "AjaxLoadingSpinner",
        computed: _e(
          {},
          Object(d["b"])({
            isAjaxRunning: v.getters.GET_IS_AJAX_RUNNING,
            isQuiteRequest: v.getters.GET_IS_QUIET_REQUEST,
          }),
        ),
      },
      be = fe,
      ge = Object(I["a"])(be, he, pe, !1, null, null, null),
      ve = ge.exports,
      Ce = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", [
          s("div", {
            staticClass: "modal-backdrop",
            class: ["fade", { in: t.isActive }],
            on: {
              click: function (e) {
                return e.target !== e.currentTarget ? null : t.close(e);
              },
            },
          }),
          s(
            "div",
            {
              staticClass: "modal-dialog modal-confirm",
              class: { "is-active": t.isActive },
            },
            [
              s(
                "div",
                { staticClass: "modal-body" },
                [
                  s(
                    "button",
                    {
                      staticClass: "bootbox-close-button close",
                      attrs: { type: "button" },
                      on: { click: t.close },
                    },
                    [t._v("×")],
                  ),
                  s("h4", [t._t("heading")], 2),
                  t._t("default"),
                ],
                2,
              ),
              t.hasFooter
                ? s("div", { staticClass: "modal-footer" }, [t._t("footer")], 2)
                : t._e(),
            ],
          ),
        ]);
      },
      Se = [],
      Ee = {
        props: { isActive: { type: Boolean, default: !1 } },
        methods: {
          close: function () {
            this.$emit("close");
          },
        },
        computed: {
          hasFooter: function () {
            return null != this.$slots.footer;
          },
        },
      },
      Te = Ee,
      Oe = (s("f1e2"), Object(I["a"])(Te, Ce, Se, !1, null, "0c7cfa3e", null)),
      we = Oe.exports;
    function Ae(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        (e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i));
      }
      return s;
    }
    function xe(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Ae(Object(s), !0).forEach(function (e) {
              Object(c["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : Ae(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var ye = {
      name: "SettingsSubaccounts",
      mixins: [Q, X, m],
      components: {
        TitleWithExportButton: at,
        SearchBox: pt,
        SubaccountsResultsDisplay: Nt,
        AjaxLoadingSpinner: ve,
        BasePopup: we,
        NewSubaccountCard: de,
      },
      data: function () {
        return {
          statesToDisplay: this.$config.statesToDisplay,
          currentState: this.$config.statesToDisplay[1],
          showModal: !1,
          rollover: "",
          isLoading: !1,
          initialised: !1,
          showMoreLink: !1,
          clearTableOnResults: !1,
          subaccountResults: [],
          activeSubaccounts: [],
          smtpUsers: [],
          authIPs: [],
          APIKeys: [],
          loadingUsers: !1,
          loadingIPs: !1,
          loadingAPIKeys: !1,
          loadingIPPools: !1,
          selectedUsernames: [],
          migrateToSubaccount: "",
          requestPoint: this.$config.requestPoint,
          fullPageLoad: !0,
          clientTimezone: null,
          columnIsSaving: !1,
          hasLongDate: !1,
          apMetadata: {},
          confirmMigrate: !1,
          isDisallowArchivingPopupActive: !1,
          disallowArchivingPopupSubaccount: null,
          isDisableSMSPopupActive: !1,
          disableSMSPopupSubaccount: null,
          newValue: 0,
          showSwitchProcessorSplash: !0,
        };
      },
      created: function () {
        var t;
        (this.mixinEventListener_register(
          ((t = {}),
          Object(c["a"])(t, u.BACK_TO_MAIN_PAGE, this.showMainPage),
          Object(c["a"])(
            t,
            u.ADD_SUBACCOUNT_CLICKED,
            this.onAddSubaccountClicked,
          ),
          Object(c["a"])(
            t,
            u.SATBOX_EDIT_CLICKED,
            this.onEditSubaccountClicked,
          ),
          Object(c["a"])(
            t,
            u.REOPEN_SUBACCOUNT_CLICKED,
            this.onReopenSubaccountClicked,
          ),
          Object(c["a"])(
            t,
            u.TOGGLE_ARCHIVING_CLICKED,
            this.onToggleArchivingClicked,
          ),
          Object(c["a"])(t, u.TOGGLE_SMS_CLICKED, this.onToggleSMSClicked),
          Object(c["a"])(t, u.TOGGLE_2FA_CLICKED, this.onToggle2FAClicked),
          Object(c["a"])(t, u.SATBOX_LOGIN_AS_CLICKED, this.onLoginAsClicked),
          Object(c["a"])(t, Y.TRIGGERABLE_CLOSED, this.checkClosed),
          t),
        ),
          this.mixinEventListener_on());
      },
      destroyed: function () {
        this.mixinEventListener_off();
      },
      computed: {
        senderText: function () {
          return 1 == this.selectedUsernames.length ? "sender" : "senders";
        },
        subaccountChosen: function () {
          return "" != this.migrateToSubaccount;
        },
        canModifySubaccounts: function () {
          return !0;
        },
        canAddSubaccounts: function () {
          return (
            void 0 != this.apMetadata &&
            "can_send_emails" in this.apMetadata &&
            this.apMetadata["can_send_emails"]
          );
        },
        masterSMSLimit: function () {
          return void 0 != this.apMetadata &&
            "master_sms_limit" in this.apMetadata
            ? this.apMetadata["master_sms_limit"]
            : 50;
        },
        shouldShow: function () {
          return !!this.initialised;
        },
        selectedUserHasArchving: function () {
          var t = this,
            e = !1,
            s = this.smtpUsers.concat(this.authIPs).concat(this.APIKeys);
          return (
            s.forEach(function (s) {
              t.selectedUsernames.includes(s.username) &&
                s.archive_enabled &&
                (e = !0);
            }),
            e
          );
        },
        validSmtpUsers: function () {
          return this.smtpUsers.filter(function (t) {
            return 0 == t.is_team_member;
          });
        },
      },
      methods: xe(
        xe(
          {},
          Object(d["c"])({
            setPlanList: Jt.mutations.SET_PLAN_LIST,
            setPoolList: Zt.mutations.SET_POOL_LIST,
          }),
        ),
        {},
        {
          initSubaccounts: function (t, e) {
            ((this.rollover = J.a.unix(t).format("MMMM Do")),
              (this.apMetadata = e),
              setTimeout(this.holdInit, 100));
          },
          onScrollPos: function (t) {
            ((this.newValue = t),
              this.$emit("scrollParent", this.newValue),
              this.$eventBus.$emit("updatePosition", this.newValue));
          },
          holdInit: function () {
            this.initialised ||
              void 0 == HTML.csrfkey ||
              (this.initComponents(),
              this.loadSubaccounts(),
              this.initMigrate());
          },
          initMigrate: function () {
            ((this.smtpUsers = []),
              (this.authIPs = []),
              (this.APIKeys = []),
              this.getActiveSubaccounts(),
              this.getSMTPUsers(),
              this.getAuthIPs(),
              this.getAPIKeys(),
              this.getIPPools(),
              (this.selectedUsernames = []),
              (this.migrateToSubaccount = ""));
            var t = document.querySelectorAll(".checker .checkbox-faux");
            t.forEach(function (t) {
              t.classList.remove("checked");
            });
          },
          initComponents: function () {
            (this.$refs.subaccountsResultsDisplay.initSubaccountsResultsDisplay(
              this.rollover,
              this.apMetadata,
            ),
              this.$refs.searchBox.initSearchBox());
          },
          loadSubaccounts: function () {
            this.$eventBus.$emit("mixin-search-trigger");
          },
          buildSearchPayload: function (t) {
            if (t)
              return (
                (this.loadMoreSearchPayload.continue_token =
                  this.continueToken),
                this.loadMoreSearchPayload
              );
            var e = {
              search_term: this.$refs.searchBox.getMainSearch(),
              state_to_display: this.currentState.id,
              shown_records: this.subaccountResults.length,
              shown_columns: JSON.stringify(
                this.$refs.subaccountsResultsDisplay.getShownColumns(),
              ),
              continue_token: "",
            };
            return ((this.loadMoreSearchPayload = e), e);
          },
          stateChanged: function (t) {
            this.currentState.id != t.id &&
              ((this.currentState = t),
              this.$eventBus.$emit("mixin-search-has-changed"),
              this.$eventBus.$emit("mixin-search-trigger"));
          },
          updateSubaccountsData: function () {
            this.$refs.subaccountsResultsDisplay.updateSubaccountsResults(
              this.subaccountResults,
            );
          },
          getActiveSubaccounts: function () {
            var t = this,
              e = {
                state_to_display: "active",
                shown_records: 0,
                page_size: -1,
                continue_token: "",
              },
              s = !0;
            this.mixinAjax_get(
              this.requestPoint,
              "",
              e,
              function (e) {
                t.activeSubaccounts = e.responseJSON.results.subaccounts;
              },
              function (t) {
                HTML.handleError(t.responseJSON);
              },
              s,
            );
          },
          getSMTPUsers: function () {
            var t = this,
              e = !0;
            ((this.loadingUsers = !0),
              this.mixinAjax_get(
                "SMTP Users",
                "load-active-users",
                "",
                function (e) {
                  ((t.smtpUsers = e.responseJSON.results),
                    (t.loadingUsers = !1));
                },
                function (e) {
                  (HTML.handleError(e.responseJSON), (t.loadingUsers = !1));
                },
                e,
              ));
          },
          getAuthIPs: function () {
            var t = this,
              e = !0;
            ((this.loadingIPs = !0),
              this.mixinAjax_get(
                "IP Authentication",
                "load-active-ips",
                "",
                function (e) {
                  ((t.authIPs = e.responseJSON.results), (t.loadingIPs = !1));
                },
                function (e) {
                  (HTML.handleError(e.responseJSON), (t.loadingIPs = !1));
                },
                e,
              ));
          },
          getAPIKeys: function () {
            var t = this,
              e = !0;
            ((this.loadingAPIKeys = !0),
              this.mixinAjax_post(
                "API Keys",
                "load-all-active-users",
                "",
                function (e) {
                  ((t.APIKeys = e.responseJSON.results.users),
                    (t.loadingAPIKeys = !1));
                },
                function (e) {
                  (HTML.handleError(e.responseJSON), (t.loadingAPIKeys = !1));
                },
                e,
              ));
          },
          getIPPools: function () {
            var t = this,
              e = !0;
            ((this.loadingIPPools = !0),
              this.mixinAjax_get(
                "Dedicated IPs",
                "",
                "",
                function (e) {
                  for (
                    var s = e.responseJSON, i = [], n = 0;
                    n < s.results.pools.length;
                    n++
                  ) {
                    var a = s.results.pools[n];
                    i.push({
                      poolname: a.poolname,
                      poolid: a.poolid,
                      default: a.default,
                    });
                  }
                  (t.setPoolList(i), (t.loadingIPPools = !1));
                },
                function (e) {
                  (HTML.handleError(e.responseJSON), (t.loadingIPPools = !1));
                },
                e,
              ));
          },
          handleSelectUser: function (t) {
            var e = this.selectedUsernames.indexOf(t);
            e > -1
              ? this.selectedUsernames.splice(e, 1)
              : this.selectedUsernames.push(t);
          },
          handleMigrate: function () {
            var t = this;
            this.confirmMigrate = !1;
            var e = {
                usernames: JSON.stringify(this.selectedUsernames),
                subaccount_member_id: this.migrateToSubaccount["record_id"],
              },
              s = "migrate";
            this.mixinAjax_put(
              this.requestPoint,
              s,
              e,
              function (e) {
                (HTML.set_time(e.responseJSON),
                  t.$eventBus.$emit("mixin-search-has-changed"),
                  t.$eventBus.$emit("mixin-search-trigger"),
                  t.initMigrate());
              },
              function (t) {
                HTML.handleError(t.responseJSON);
              },
            );
          },
          cancelConfirmMigrate: function () {
            this.confirmMigrate = !1;
          },
          performSearch: function (t, e) {
            var s = this;
            ((this.fullPageLoad = !1),
              e ||
                ((this.clearTableOnResults = !0),
                window.scroll({ top: 0, left: 0, behavior: "smooth" }),
                (this.fullPageLoad = !0)),
              this.mixinAjax_get(
                this.requestPoint,
                "",
                this.buildSearchPayload(e),
                function (e) {
                  (s.handleTableResults(e.responseJSON.results),
                    t && (s.initialised = !0),
                    s.updateSubaccountsData());
                },
                function (t) {
                  HTML.handleError(t.responseJSON);
                },
              ));
          },
          handleTableResults: function (t) {
            (this.clearTableOnResults &&
              ((this.subaccountResults = []), (this.clearTableOnResults = !1)),
              (this.showMoreLink = !!t.metadata.continue_token),
              (this.subaccountResults = this.subaccountResults.concat(
                t.subaccounts,
              )),
              this.setPlanList(t.plans),
              (this.continueToken = t.metadata.continue_token),
              (this.showSwitchProcessorSplash =
                t.metadata.show_switch_processor_splash));
          },
          confirmDisallowArchivingPopup: function () {
            var t = this,
              e = this.disallowArchivingPopupSubaccount,
              s = {
                subaccount_member_id: e.record_id,
                has_confirmed_disable: !0,
              };
            ((this.isDisallowArchivingPopupActive = !1),
              this.mixinAjax_put(
                this.requestPoint,
                "toggle-archiving",
                s,
                function (s) {
                  var i = s.responseJSON;
                  (HTML.set_time(i),
                    t.initMigrate(),
                    (e.archiving_allowed = !e.archiving_allowed));
                },
                function (t) {
                  HTML.handleError(t.responseJSON);
                },
              ));
          },
          confirmDisableSMSPopup: function () {
            var t = this.disableSMSPopupSubaccount,
              e = {
                subaccount_member_id: t.record_id,
                sms_disabled_by_master: t.sms_disabled_by_master,
                has_confirmed_disable: !0,
              };
            ((this.isDisableSMSPopupActive = !1),
              this.mixinAjax_put(
                this.requestPoint,
                "toggle-sms",
                e,
                function (e) {
                  var s = e.responseJSON;
                  (HTML.set_time(s),
                    (t.sms_disabled_by_master = !t.sms_disabled_by_master),
                    (t.sms_monthly_limit = s.results.sms_monthly_limit));
                },
                function (t) {
                  HTML.handleError(t.responseJSON);
                },
              ));
          },
          showMainPage: function () {
            var t = "Subaccounts",
              e =
                '<p>Subaccounts allow you to separate your customers\' activity from each other, and are perfect for agencies and resellers with multiple customers. See <a href = "https://support.smtp2go.com/hc/en-gb/articles/900004307303" class="external-icon" target="_BLANK"> more info</a > about subaccounts.</p >';
            (K()(".card-subaccounts").removeClass("hide"),
              K()(".sg-feature--header").addClass("is-fadeout"),
              K()(".options-list").addClass("hide"),
              K()(".options-actions").addClass("hide"),
              K()(".new-subaccount-form").addClass("hide"),
              setTimeout(function () {
                (K()(".options-list").addClass("is-fadeout"),
                  K()(".options-actions").addClass("is-fadeout"),
                  K()(".new-subaccount-form").addClass("is-fadeout"),
                  K()(".card-subaccounts").removeClass("is-fadeout"),
                  K()(".page-title-text").text(t),
                  K()(".sg-feature--header .lead-toggle").html(e),
                  K()(".page-title .icon-back").addClass("hide"),
                  K()(".title-icon").removeClass("hide"),
                  K()(".sg-feature--header").removeClass("is-fadeout"));
              }, 150));
          },
          showAddEditPage: function (t) {
            var e = "Edit subaccount",
              s =
                "<p>Change the subaccount's details and monthly email limit below.</p>";
            (t &&
              ((e = "Add new subaccount"),
              (s =
                "<p>Enter the new subaccount's details and monthly email limit below.</p>")),
              K()(".card-subaccounts").addClass("is-fadeout"),
              K()(".sg-feature--header").addClass("is-fadeout"),
              K()(".new-subaccount-form").removeClass("hide"),
              setTimeout(function () {
                (K()(".page-title-text").text(e),
                  K()(".sg-feature--header .lead-toggle").html(s),
                  K()(".page-title .icon-back").removeClass("hide"),
                  K()(".title-icon").addClass("hide"),
                  K()(".sg-feature--header").removeClass("is-fadeout"),
                  K()(".new-subaccount-form").removeClass("is-fadeout"),
                  K()(".card-subaccounts").addClass("hide"));
              }, 150));
          },
          onAddSubaccountClicked: function () {
            (this.$refs.subaccount_add_edit_card.initAsNew(
              this.apMetadata,
              this.masterSMSLimit,
              this.showSwitchProcessorSplash,
            ),
              this.showAddEditPage(!0));
          },
          onEditSubaccountClicked: function (t) {
            (this.$refs.subaccount_add_edit_card.initAsEdit(
              this.apMetadata,
              t,
              this.masterSMSLimit,
              this.showSwitchProcessorSplash,
            ),
              this.showAddEditPage(!1));
          },
          onReopenSubaccountClicked: function (t) {
            var e = this,
              s = {
                subaccount_member_id: t.record_id,
                subaccount_username: t.email,
              };
            this.mixinAjax_put(
              this.requestPoint,
              "open",
              s,
              function (t) {
                (HTML.set_time(t.responseJSON),
                  e.$eventBus.$emit("mixin-search-has-changed"),
                  e.$eventBus.$emit("mixin-search-trigger"));
              },
              function (t) {
                HTML.handleError(t.responseJSON);
              },
            );
          },
          onToggleArchivingClicked: function (t) {
            var e = this,
              s = { subaccount_member_id: t.record_id };
            this.mixinAjax_put(
              this.requestPoint,
              "toggle-archiving",
              s,
              function (s) {
                var i = s.responseJSON;
                if (
                  (HTML.set_time(i),
                  void 0 !== i.results && !0 === i.results.has_archiving_users)
                )
                  return (
                    (e.isDisallowArchivingPopupActive = !0),
                    void (e.disallowArchivingPopupSubaccount = t)
                  );
                (e.initMigrate(), (t.archiving_allowed = !t.archiving_allowed));
              },
              function (t) {
                HTML.handleError(t.responseJSON);
              },
            );
          },
          onToggleSMSClicked: function (t) {
            var e = this,
              s = {
                subaccount_member_id: t.record_id,
                sms_disabled_by_master: t.sms_disabled_by_master,
              };
            this.mixinAjax_put(
              this.requestPoint,
              "toggle-sms",
              s,
              function (s) {
                var i = s.responseJSON;
                if (
                  (HTML.set_time(i),
                  void 0 !== i.results &&
                    !0 === i.results.has_dedicated_numbers)
                )
                  return (
                    (e.isDisableSMSPopupActive = !0),
                    void (e.disableSMSPopupSubaccount = t)
                  );
                ((t.sms_disabled_by_master = !t.sms_disabled_by_master),
                  (t.sms_monthly_limit = i.results.sms_monthly_limit));
              },
              function (t) {
                HTML.handleError(t.responseJSON);
              },
            );
          },
          onToggle2FAClicked: function (t) {
            var e = {
              subaccount_member_id: t.record_id,
              enforce_2fa: t.enforce_2fa,
            };
            this.mixinAjax_put(
              this.requestPoint,
              "toggle-2fa",
              e,
              function (e) {
                var s = e.responseJSON;
                (HTML.set_time(s), (t.enforce_2fa = !t.enforce_2fa));
              },
              function (t) {
                HTML.handleError(t.responseJSON);
              },
            );
          },
          onLoginAsClicked: function (t) {
            var e = {};
            ((e.LOGIN_AS = t.record_id), (e.STACK = "STACK"));
            var s = HTML.ajax(
              "post",
              END_POINTS.urls()["Login"],
              e,
              null,
              !1,
              "Loading...",
            );
            (s.success(function (t) {
              (HTML.set_time(t, null, !0),
                (window.location = END_POINTS.fronts()["Account Summary"]));
            }),
              s.error(function () {
                this.$eventBus.$emit("mixin-search-trigger");
              }));
          },
          checkClosed: function (t) {
            "SubaccountResultsDisplay" == t && this.saveColumn();
          },
          saveColumn: function () {
            var t = this;
            if (this.columnIsSaving) return !1;
            this.columnIsSaving = !0;
            var e = !0,
              s = this.buildSearchPayload();
            this.mixinAjax_put(
              this.requestPoint,
              "save-columns",
              s,
              function () {
                t.columnIsSaving = !1;
              },
              function () {
                t.columnIsSaving = !1;
              },
              e,
            );
          },
        },
      ),
    };
    setTimeout(function () {
      var t = K()(window).height(),
        e = K()("#subaccounts").height();
      K()("#bounce-dtable-wrapper").height();
      function s() {
        t < e && K()(window).width() > 767
          ? K()(".page-content").attr(
              "style",
              "min-height: " + e + "px !important",
            )
          : K()(".page-content").removeAttr("style");
      }
      (K()(".info-splash").length || s(),
        K()(window).width() > 767 &&
          t - e < 180 &&
          K()(
            "#bounce-dtable tbody tr:last-child, #bounce-dtable tbody tr:nth-last-child(2)",
          ).addClass("dropdown-up"),
        K()(".modal-trigger, .link-edit-details").on("click", function () {
          setTimeout(function () {
            K()(".page-content").removeAttr("style");
          }, 300);
        }),
        K()(".icon-back, .button-cancel, .hide-splash").on(
          "click",
          function () {
            s();
          },
        ));
    }, 1500);
    var Pe = ye,
      Ie = (s("8e62"), Object(I["a"])(Pe, G, B, !1, null, "61513938", null)),
      ke = Ie.exports;
    function je(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        (e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i));
      }
      return s;
    }
    function De(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? je(Object(s), !0).forEach(function (e) {
              Object(c["a"])(t, e, s[e]);
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
    var Le = {
        name: "Subaccounts",
        mixins: [m],
        components: {
          InfoSplash: j,
          UpgradeSplash: U,
          SettingsSubaccounts: ke,
        },
        data: function () {
          return {
            showInfoSplash: PAGE_DATA.show_info_splash,
            showUpgradeSplash: PAGE_DATA.show_upgrade_splash,
            rolloverUnix: PAGE_DATA.rollover_unix,
            apMetadata: PAGE_DATA.apMetadata,
            scrollPosition: 0,
          };
        },
        methods: De(
          De({}, Object(d["c"])({ setCsrfKey: v.mutations.SET_CSRF_KEY })),
          {},
          {
            onBackClicked: function () {
              var t = Math.round(this.scrollPosition);
              (this.$eventBus.$emit(u.BACK_TO_MAIN_PAGE),
                setTimeout(function () {
                  window.scrollTo(0, t);
                }, 200));
            },
            onScrollParent: function (t) {
              this.scrollPosition = Math.round(t);
            },
            onScrollPos: function (t) {
              ((this.scrollPosition = Math.round(t)),
                this.$emit("scrollParent", t),
                this.$eventBus.$emit("updatePosition", t));
            },
          },
        ),
        mounted: function () {
          this.$refs.subaccounts.initSubaccounts(
            this.rolloverUnix,
            this.apMetadata,
          );
        },
        created: function () {
          var t = this;
          (this.$eventBus.$on("hide-splash", function () {
            t.showInfoSplash = !1;
          }),
            this.mixinEventListener_on());
        },
        destroyed: function () {
          (this.$eventBus.$off("hide-splash"), this.mixinEventListener_off());
        },
      },
      Me = Le,
      $e = (s("117b"), Object(I["a"])(Me, o, r, !1, null, "4b764828", null)),
      Ne = $e.exports;
    a["a"].use(d["a"]);
    var Re = new d["a"].Store({
        strict: !1,
        getters: {},
        mutations: {},
        actions: {},
        modules: { root: w, plan: Xt, pool: ae },
      }),
      Ue = Re,
      Ge = s("41d0");
    (a["a"].directive("click-outside", {
      bind: function (t, e, s) {
        ((t.clickOutsideEvent = function (i) {
          t === i.target || t.contains(i.target) || s.context[e.expression](i);
        }),
          document.body.addEventListener("click", t.clickOutsideEvent));
      },
      unbind: function (t) {
        document.body.removeEventListener("click", t.clickOutsideEvent);
      },
    }),
      (a["a"].config.productionTip = !1),
      (a["a"].config.silent = !0),
      (a["a"].prototype.$eventBus = new a["a"]()),
      "undefined" !== typeof PAGE_DATA &&
        (Ue.commit(v.mutations.SET_CSRF_KEY, PAGE_DATA.csrfkey),
        Ue.commit(v.mutations.SET_MASTER_REGION, PAGE_DATA.master_region)),
      "undefined" !== typeof END_POINTS &&
        Ue.commit(v.mutations.SET_END_POINTS, END_POINTS.urls()),
      Kt(Ue),
      (a["a"].prototype.$eventBus = new a["a"]()),
      (a["a"].prototype.$config = Ge),
      new a["a"]({
        store: Ue,
        render: function (t) {
          return t(Ne);
        },
      }).$mount("#subaccounts"));
  },
  "8e62": function (t, e, s) {
    "use strict";
    var i = s("a509"),
      n = s.n(i);
    n.a;
  },
  9672: function (t, e, s) {},
  a509: function (t, e, s) {},
  d8ab: function (t, e, s) {},
  f1e2: function (t, e, s) {
    "use strict";
    var i = s("d8ab"),
      n = s.n(i);
    n.a;
  },
});
//# sourceMappingURL=app.3301f82c.js.map
