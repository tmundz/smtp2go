(function (e) {
  function t(t) {
    for (
      var i, a, o = t[0], c = t[1], u = t[2], d = 0, _ = [];
      d < o.length;
      d++
    )
      ((a = o[d]),
        Object.prototype.hasOwnProperty.call(n, a) && n[a] && _.push(n[a][0]),
        (n[a] = 0));
    for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (e[i] = c[i]);
    l && l(t);
    while (_.length) _.shift()();
    return (r.push.apply(r, u || []), s());
  }
  function s() {
    for (var e, t = 0; t < r.length; t++) {
      for (var s = r[t], i = !0, o = 1; o < s.length; o++) {
        var c = s[o];
        0 !== n[c] && (i = !1);
      }
      i && (r.splice(t--, 1), (e = a((a.s = s[0]))));
    }
    return e;
  }
  var i = {},
    n = { app: 0 },
    r = [];
  function a(t) {
    if (i[t]) return i[t].exports;
    var s = (i[t] = { i: t, l: !1, exports: {} });
    return (e[t].call(s.exports, s, s.exports, a), (s.l = !0), s.exports);
  }
  ((a.m = e),
    (a.c = i),
    (a.d = function (e, t, s) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s });
    }),
    (a.r = function (e) {
      ("undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (a.t = function (e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var s = Object.create(null);
      if (
        (a.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          a.d(
            s,
            i,
            function (t) {
              return e[t];
            }.bind(null, i),
          );
      return s;
    }),
    (a.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return (a.d(t, "a", t), t);
    }),
    (a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = "/"));
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = o.push.bind(o);
  ((o.push = t), (o = o.slice()));
  for (var u = 0; u < o.length; u++) t(o[u]);
  var l = c;
  (r.push([0, "chunk-vendors"]), s());
})({
  0: function (e, t, s) {
    e.exports = s("56d7");
  },
  "24ab": function (e) {
    e.exports = JSON.parse(
      '{"requestPoint":"Data Exports","displayColumns":[{"id":"date","label":"Date"},{"id":"byte","label":"Size"},{"id":"format","label":"Format"},{"id":"description","label":"Description"},{"id":"download","label":""}],"exportDisplayColumns":[{"id":"name","label":"Name","active":true},{"id":"origin","label":"Page","filterable":true,"active":true},{"id":"frequency","label":"Frequency","filterable":true,"active":true},{"id":"format","label":"Format","filterable":true,"active":true},{"id":"recipients","label":"Recipients","filterable":true,"active":true},{"id":"author","label":"Author","filterable":true,"active":true}]}',
    );
  },
  "39ff": function (e, t, s) {
    "use strict";
    s("fa39");
  },
  4236: function (e, t, s) {
    "use strict";
    s("8700");
  },
  4678: function (e, t, s) {
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
    function n(e) {
      var t = r(e);
      return s(t);
    }
    function r(e) {
      if (!s.o(i, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return i[e];
    }
    ((n.keys = function () {
      return Object.keys(i);
    }),
      (n.resolve = r),
      (e.exports = n),
      (n.id = "4678"));
  },
  "56d7": function (e, t, s) {
    "use strict";
    s.r(t);
    (s("cadf"), s("551c"), s("f751"), s("097d"));
    var i,
      n,
      r = s("2b0e"),
      a = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t;
        return s(
          "div",
          {
            class: { "splash-on": e.showSplash },
            attrs: { id: "data-exports" },
          },
          [
            e.showSplash ? s("info-splash") : e._e(),
            s("reports-data-exports", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !e.showSplash,
                  expression: "!showSplash",
                },
              ],
              ref: "dataExports",
            }),
          ],
          1,
        );
      },
      o = [],
      c = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t;
        return s("div", { staticClass: "info-splash is-visible" }, [
          e._m(0),
          s("h2", [e._v("Export data from your account.")]),
          s("p", { staticClass: "lead-in" }, [
            e._v(
              "View exports you have generated, or schedule regular reports to be sent.",
            ),
          ]),
          s("p", [
            s(
              "button",
              {
                staticClass: "btn green hide-splash",
                on: { click: e.continueToReportClick },
              },
              [e._v("Continue")],
            ),
          ]),
        ]);
      },
      u = [
        function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s("figure", [
            s("img", {
              attrs: {
                src: "/static/smtp2go_assets/splash-dataexports.png",
                width: "268",
                alt: "SMTP2GO Webhooks",
              },
            }),
          ]);
        },
      ],
      l = {
        name: "InfoSplash",
        methods: {
          continueToReportClick: function () {
            this.$eventBus.$emit("hide-splash");
          },
        },
      },
      d = l,
      _ = (s("f767"), s("2877")),
      E = Object(_["a"])(d, c, u, !1, null, "454dc0a1", null),
      p = E.exports,
      h = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t;
        return s(
          "div",
          {
            staticClass: "col-lg-12 col-md-12 col-sm-12 col-xs-12",
            attrs: { id: "bounce-dtable-wrapper" },
          },
          [
            s("DisplayMessage"),
            s("header", { staticClass: "page-content-header" }, [
              s("h3", { staticClass: "page-title" }, [
                e.displayEdit
                  ? s("span", [
                      s("button", {
                        staticClass: "icon-back",
                        on: { click: e.closeEdit },
                      }),
                      e.isAdd
                        ? s("span", [e._v("Add ")])
                        : s("span", [e._v("Edit ")]),
                      e._v("a\n        scheduled email report\n      "),
                    ])
                  : s("span", [
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
                                  x1: "17.7236",
                                  x2: "17.7236",
                                  y1: ".709229",
                                  y2: "34.7092",
                                },
                              },
                              [
                                s("stop", {
                                  attrs: {
                                    offset: "0",
                                    "stop-color": "#e2a466",
                                  },
                                }),
                                s("stop", {
                                  attrs: {
                                    offset: "1",
                                    "stop-color": "#d29449",
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
                                x: ".723633",
                                y: ".709229",
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
                                  attrs: { d: "m18.1123 19.0394v7.5" },
                                }),
                                s("path", {
                                  attrs: {
                                    d: "m21.2373 24.4144-3.125 3.125-3.125-3.125",
                                  },
                                }),
                                s("path", {
                                  attrs: {
                                    d: "m21.8624 21.2894h1.5625c.6374.0011 1.2661-.1478 1.8353-.4347.5691-.2868 1.0628-.7036 1.4411-1.2165.3784-.513.6307-1.1078.7366-1.7363s.0624-1.2731-.1269-1.8817c-.1894-.6086-.5192-1.1642-.963-1.6217s-.9889-.8042-1.5915-1.012c-.6025-.2079-1.2455-.271-1.8769-.1844-.6315.0867-1.2337.3207-1.758.6831-.214-1.1392-.7406-2.1965-1.5209-3.0537-.7803-.85715-1.7837-1.48043-2.8979-1.80014s-2.2954-.32326-3.4115-.01025-2.1231.93024-2.9086 1.78269c-.7855.8525-1.31842 1.9066-1.53924 3.0445-.22082 1.138-.12083 2.3149.2888 3.3993s1.11274 2.0335 2.03084 2.7412c.918.7077 2.0147 1.1462 3.1677 1.2664",
                                  },
                                }),
                              ],
                            ),
                          ],
                          1,
                        ),
                      ]),
                      e._v("\n        Data Exports\n      "),
                    ]),
              ]),
              s("div", { staticClass: "info-messaging" }, [
                e.displayEdit
                  ? s("p", { staticStyle: { "max-width": "720px" } }, [
                      e._v(
                        "\n        The scheduled report with include data as it appears on the page you select below.\n      ",
                      ),
                    ])
                  : s("p", { staticStyle: { "max-width": "550px" } }, [
                      e._v(
                        "\n        Manage and download exported data requested from elsewhere in the App.",
                      ),
                      s("br"),
                      e._v(
                        "\n        Or create and manage up to ten scheduled email reports to your team members.\n      ",
                      ),
                    ]),
              ]),
            ]),
            s("div", { staticClass: "modal-container" }, [
              s(
                "div",
                {
                  staticClass: "modal-dialog modal-medium confirm-exit",
                  class: { "is-active": e.displayClosePopup },
                },
                [
                  s("header", { staticClass: "modal-header" }, [
                    s("h4", [e._v("Exit without saving?")]),
                    s(
                      "button",
                      {
                        staticClass: "bootbox-close-button close",
                        attrs: { type: "button" },
                        on: {
                          click: function (t) {
                            (e.setIsSaved(!0), e.setCloseAction(!1));
                          },
                        },
                      },
                      [e._v("\n          ×\n        ")],
                    ),
                  ]),
                  s("p", [
                    e._v(
                      "\n        Closing the editor without saving will remove all of your changes\n        since the last save.\n      ",
                    ),
                  ]),
                  s("div", { staticClass: "modal-footer" }, [
                    s(
                      "button",
                      {
                        staticClass: "btn blue template-close",
                        class: { "is-saving": e.isAjaxRunning },
                        on: {
                          click: function (t) {
                            return e.saveSchedule();
                          },
                        },
                      },
                      [
                        e._v("\n          Save and exit\n          "),
                        s("div", { staticClass: "is-saving-spinner" }),
                      ],
                    ),
                    s(
                      "button",
                      {
                        staticClass: "btn btn-outlined template-close",
                        on: {
                          click: function () {
                            (e.setIsSaved(!0),
                              e.setDisplayEdit(!1),
                              e.setCloseAction(!1));
                          },
                        },
                      },
                      [e._v("\n          Exit without saving\n        ")],
                    ),
                  ]),
                ],
              ),
              s("div", {
                staticClass: "modal-backdrop fade",
                class: { in: e.displayClosePopup },
                on: {
                  click: function (t) {
                    (e.setIsSaved(!0), e.setCloseAction(!1));
                  },
                },
              }),
            ]),
            s(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: e.shouldShow,
                    expression: "shouldShow",
                  },
                ],
                staticClass: "card padded dataTables_wrapper",
                class: { "reports-active": e.reportsActive },
              },
              [
                e.displayEdit
                  ? e._e()
                  : s("div", { staticClass: "card-top" }, [
                      s("div", { staticClass: "card--tab-list" }, [
                        s(
                          "div",
                          { staticClass: "sms-tabs tablist-container" },
                          [
                            s(
                              "button",
                              {
                                staticClass: "tab",
                                class: { "is-active": e.exportsActive },
                                attrs: { disabled: e.exportsActive },
                                on: { click: e.showExports },
                              },
                              [e._v("\n            Data exports\n          ")],
                            ),
                            s(
                              "button",
                              {
                                staticClass: "tab",
                                class: { "is-active": e.reportsActive },
                                attrs: { disabled: e.reportsActive },
                                on: { click: e.showReports },
                              },
                              [
                                e._v(
                                  "\n            Scheduled reports\n          ",
                                ),
                              ],
                            ),
                          ],
                        ),
                      ]),
                      s(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: e.reportsActive,
                              expression: "reportsActive",
                            },
                          ],
                          staticClass: "container-functions",
                        },
                        [
                          e.allowScheduledExport
                            ? s(
                                "button",
                                {
                                  staticClass: "btn button-outlined",
                                  class: e.disableCreate,
                                  attrs: { type: "button", role: "button" },
                                  on: { click: e.addReport },
                                },
                                [
                                  e._v(
                                    "\n          Add scheduled report\n        ",
                                  ),
                                ],
                              )
                            : e._e(),
                        ],
                      ),
                    ]),
                s("DataExportsResultsDisplay", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: e.exportsActive && !e.displayEdit,
                      expression: "exportsActive && !displayEdit",
                    },
                  ],
                  ref: "dataExportsResultsDisplay",
                }),
                s("ScheduledResultsDisplay", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: e.reportsActive && !e.displayEdit,
                      expression: "reportsActive && !displayEdit",
                    },
                  ],
                  ref: "scheduledResultsDisplay",
                }),
                s("ScheduledEdit", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: e.displayEdit,
                      expression: "displayEdit",
                    },
                  ],
                  ref: "scheduledEdit",
                }),
              ],
              1,
            ),
            e.fullPageLoad ? s("AjaxLoadingSpinner") : e._e(),
          ],
          1,
        );
      },
      m = [],
      f = (s("8e6e"), s("456d"), s("ac6a"), s("55dd"), s("bd86")),
      v = (s("7f7f"), s("7514"), s("0d6d"), s("1157")),
      T = s.n(v),
      g = Object.freeze({
        TRIGGERABLE_OPENED: "mixin-triggerable-opened",
        TRIGGERABLE_CLOSED: "mixin-triggerable-closed",
      }),
      S = {
        created: function () {
          (T()(window).on("click.Bst", this.$_mixinTriggerableWindowClicked),
            this.$eventBus.$on(
              g.TRIGGERABLE_OPENED,
              this.$_mixinTriggerableOpened,
            ));
        },
        mounted: function () {
          ((this.mixinTriggerable_layers = T()(this.$el).find(
            ".mixinTriggerable_layer",
          )),
            T()(this.$el).hasClass("mixinTriggerable_layer") &&
              this.mixinTriggerable_layers.push(this.$el));
        },
        destroyed: function () {
          (T()(window).off("click.Bst", this.$_mixinTriggerableWindowClicked),
            this.$eventBus.$off(
              g.TRIGGERABLE_OPENED,
              this.$_mixinTriggerableOpened,
            ));
        },
        methods: {
          $_mixinTriggerableUpdateParent: function (e) {
            for (var t = 0, s = this.$parent; ; ) {
              if (
                !(
                  void 0 !== s &&
                  null !== s &&
                  void 0 !== s.mixinTriggerable_getID &&
                  t < 10
                )
              )
                break;
              ((s.mixinTriggerable_isModal = e), t++, (s = s.$parent));
            }
          },
          $_mixinTriggerableWindowClicked: function (e) {
            if (this.mixinTriggerable_ignoreNextWindowClick)
              this.mixinTriggerable_ignoreNextWindowClick = !1;
            else if (!this.mixinTriggerable_isModal) {
              var t = function (e) {
                  var t = T()(e)
                    .parents()
                    .filter(function (e, t) {
                      return T()(t).hasClass("mixinTriggerable_layer");
                    });
                  return t.length > 0;
                },
                s = !1;
              if (this.mixinTriggerable_isOpen)
                for (var i = 0; i < this.mixinTriggerable_layers.length; ++i) {
                  var n = T()(this.mixinTriggerable_layers[i]);
                  if (
                    0 !== n.has(e.target).length ||
                    n.is(e.target) ||
                    (!this.mixinTriggerable_closeOnParentClick &&
                      t(e.target, n))
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
                  g.TRIGGERABLE_CLOSED,
                  this.mixinTriggerable_getID(),
                ),
                ("EventFilter" !== this.mixinTriggerable_getID() &&
                  "PeriodFilter" !== this.mixinTriggerable_getID()) ||
                  this.$parent.mixinTriggerable_forceClose());
            }
          },
          $_mixinTriggerableOpened: function (e) {
            this.mixinTriggerable_isSelf(e) ||
              this.mixinTriggerable_isModal ||
              (this.mixinTriggerable_isOpen = !1);
          },
          mixinTriggerable_getID: function () {
            return this.$vnode.key
              ? this.$options.name + "_" + this.$vnode.key
              : this.$options.name;
          },
          mixinTriggerable_isSelf: function (e) {
            return e === this.mixinTriggerable_getID();
          },
          mixinTriggerable_setModal: function (e) {
            this.mixinTriggerable_isModal = e;
          },
          mixinTriggerable_centerSelf: function () {
            var e = T()(this.$el).offset().left,
              t = Math.ceil(e),
              s = T()(this.$el).offset().top,
              i = Math.ceil(s);
            ((this.$el.style.left = t + "px"),
              (this.$el.style.top = i + "px"),
              (this.$el.style.transform = "translate(0) scale(1)"));
          },
          mixinTriggerable_toggleOpened: function (e) {
            (void 0 !== e && e.stopImmediatePropagation(),
              (this.mixinTriggerable_isModal &&
                "AllFilter" !== this.mixinTriggerable_getID()) ||
                ((this.mixinTriggerable_isOpen = !this.mixinTriggerable_isOpen),
                this.$_mixinTriggerableUpdateParent(
                  this.mixinTriggerable_isOpen,
                ),
                this.mixinTriggerable_isOpen
                  ? this.$eventBus.$emit(
                      g.TRIGGERABLE_OPENED,
                      this.mixinTriggerable_getID(),
                    )
                  : this.$eventBus.$emit(
                      g.TRIGGERABLE_CLOSED,
                      this.mixinTriggerable_getID(),
                    )));
          },
          mixinTriggerable_forceOpen: function (e) {
            (void 0 !== e && e.stopImmediatePropagation(),
              (this.mixinTriggerable_isModal = !1));
            var t = this.mixinTriggerable_isOpen;
            ((this.mixinTriggerable_isOpen = !0),
              t ||
                (this.$_mixinTriggerableUpdateParent(
                  this.mixinTriggerable_isOpen,
                ),
                (this.mixinTriggerable_ignoreNextWindowClick = !0),
                this.$eventBus.$emit(
                  g.TRIGGERABLE_OPENED,
                  this.mixinTriggerable_getID(),
                )));
          },
          mixinTriggerable_forceClose: function (e) {
            (void 0 !== e && e.stopImmediatePropagation(),
              (this.mixinTriggerable_isModal = !1));
            var t = this.mixinTriggerable_isOpen;
            ((this.mixinTriggerable_isOpen = !1),
              t &&
                (this.$_mixinTriggerableUpdateParent(
                  this.mixinTriggerable_isOpen,
                ),
                (this.mixinTriggerable_ignoreNextWindowClick = !0),
                this.$eventBus.$emit(
                  g.TRIGGERABLE_CLOSED,
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
      b = s("768b"),
      C =
        (s("ffc1"),
        {
          methods: {
            mixinEventListener_register: function (e) {
              this.mixinEventListener_eventMap = e;
            },
            mixinEventListener_on: function () {
              var e = this;
              this.mixinEventListener_isOn ||
                (Object.entries(this.mixinEventListener_eventMap).forEach(
                  function (t) {
                    var s = Object(b["a"])(t, 2),
                      i = s[0],
                      n = s[1];
                    e.$eventBus.$on(i, n);
                  },
                ),
                (this.mixinEventListener_isOn = !0));
            },
            mixinEventListener_off: function () {
              var e = this;
              (Object.entries(this.mixinEventListener_eventMap).forEach(
                function (t) {
                  var s = Object(b["a"])(t, 2),
                    i = s[0],
                    n = s[1];
                  e.$eventBus.$off(i, n);
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
      D = C,
      A = s("c1df"),
      y = s.n(A),
      I =
        (s("7f45"),
        {
          methods: {
            getUnixSecsRangeByDays: function (e, t) {
              var s = y.a.tz.guess(),
                i = y.a.tz(s);
              void 0 !== t && null !== t && (i = y.a.tz(t));
              var n = 60 * i._offset,
                r = 0;
              return (
                e > 0 &&
                  (r = y.a.utc().subtract(e, "days").startOf("day").unix() + n),
                { start: r, end: y.a.utc().endOf("day").unix() + n }
              );
            },
            getUnixSecsRangeBetweenDates: function (e, t, s) {
              var i = y.a.tz.guess(),
                n = y.a.tz(i);
              void 0 !== s && null !== s && (n = y.a.tz(s));
              var r = 60 * n._offset,
                a = y.a.utc(e, "YYYY-MM-DD").startOf("day").unix() - r,
                o = y.a.utc(t, "YYYY-MM-DD").endOf("day").unix() - r,
                c = { start: a, end: o };
              return c;
            },
          },
        }),
      O = I,
      w = s("2f62"),
      U = (s("3b2b"), s("20d6"), s("6762"), s("2fdb"), s("a481"), s("c46f"));
    function R(e, t) {
      return Object(U["a"])(
        t,
        function (t, s, i) {
          return (
            (t[i] = Object(U["a"])(
              s,
              function (t, s, i) {
                return ((t[i] = s.replace(e, "")), t);
              },
              {},
            )),
            t
          );
        },
        {},
      );
    }
    function k(e, t, s) {
      var i = e.indexOf("?") > -1 ? "&" : "?";
      return null !== s && void 0 !== s && s.length > 0
        ? e + i + t + "=" + encodeURIComponent(s)
        : e;
    }
    var x,
      j,
      N,
      G = "root/",
      P = {
        getters: {
          GET_IS_AJAX_RUNNING: G + "GET_IS_AJAX_RUNNING",
          GET_BACKEND_URL: G + "GET_BACKEND_URL",
          GET_END_POINTS: G + "GET_END_POINTS",
          GET_IMAGE_URLS: G + "GET_IMAGE_URLS",
          GET_SUCCESS_MESSAGE: G + "GET_SUCCESS_MESSAGE",
          GET_ERROR_MESSAGE: G + "GET_ERROR_MESSAGE",
          GET_IS_QUIET_REQUEST: G + "GET_IS_QUIET_REQUEST",
        },
        mutations: {
          SET_CSRF_KEY: G + "SET_CSRF_KEY",
          SET_END_POINTS: G + "END_POINTS",
          SET_IMAGE_URLS: G + "SET_IMAGE_URLS",
          INC_RUNNING_AJAX_REQUESTS: G + "INC_RUNNING_AJAX_REQUESTS",
          DEC_RUNNING_AJAX_REQUESTS: G + "DEC_RUNNING_AJAX_REQUESTS",
          SET_SUCCESS_MESSAGE: G + "SET_SUCCESS_MESSAGE",
          SET_ERROR_MESSAGE: G + "SET_ERROR_MESSAGE",
          CLEAR_SUCCESS_MESSAGE: G + "CLEAR_SUCCESS_MESSAGE",
          CLEAR_ERROR_MESSAGE: G + "CLEAR_ERROR_MESSAGE",
          SET_IS_QUIET_REQUEST: G + "SET_IS_QUIET_REQUEST",
        },
        actions: { UPDATE_SUCCESS_MESSAGE: G + "UPDATE_SUCCESS_MESSAGE" },
      },
      L = R(G, P),
      M = {
        running_ajax_requests: 0,
        csrf_key: "",
        end_points: {},
        image_urls: {},
        success_message: null,
        error_message: null,
        is_quiet_request: !1,
      },
      $ =
        ((i = {}),
        Object(f["a"])(i, L.getters.GET_IS_AJAX_RUNNING, function (e) {
          return e.running_ajax_requests > 0;
        }),
        Object(f["a"])(i, L.getters.GET_END_POINTS, function (e) {
          return e.end_points;
        }),
        Object(f["a"])(i, L.getters.GET_BACKEND_URL, function (e) {
          return function (t, s) {
            var i = k(e.end_points[t], "action", s);
            return k(i, "CSRF_key", e.csrf_key);
          };
        }),
        Object(f["a"])(i, L.getters.GET_IMAGE_URLS, function (e) {
          return e.image_urls;
        }),
        Object(f["a"])(i, L.getters.GET_SUCCESS_MESSAGE, function (e) {
          return e.success_message;
        }),
        Object(f["a"])(i, L.getters.GET_ERROR_MESSAGE, function (e) {
          return e.error_message;
        }),
        Object(f["a"])(i, L.getters.GET_IS_QUIET_REQUEST, function (e) {
          return e.is_quiet_request;
        }),
        i),
      F =
        ((n = {}),
        Object(f["a"])(n, L.mutations.SET_CSRF_KEY, function (e, t) {
          e.csrf_key = t;
        }),
        Object(f["a"])(n, L.mutations.SET_END_POINTS, function (e, t) {
          e.end_points = t;
        }),
        Object(f["a"])(n, L.mutations.SET_IMAGE_URLS, function (e, t) {
          e.image_urls = t;
        }),
        Object(f["a"])(n, L.mutations.INC_RUNNING_AJAX_REQUESTS, function (e) {
          e.running_ajax_requests++;
        }),
        Object(f["a"])(n, L.mutations.DEC_RUNNING_AJAX_REQUESTS, function (e) {
          e.running_ajax_requests--;
        }),
        Object(f["a"])(n, L.mutations.SET_SUCCESS_MESSAGE, function (e, t) {
          e.success_message = t;
        }),
        Object(f["a"])(n, L.mutations.SET_ERROR_MESSAGE, function (e, t) {
          e.error_message = t;
        }),
        Object(f["a"])(n, L.mutations.CLEAR_SUCCESS_MESSAGE, function (e) {
          e.success_message = null;
        }),
        Object(f["a"])(n, L.mutations.CLEAR_ERROR_MESSAGE, function (e) {
          e.error_message = null;
        }),
        Object(f["a"])(n, L.mutations.SET_IS_QUIET_REQUEST, function (e, t) {
          e.is_quiet_request = t;
        }),
        n),
      B = Object(f["a"])({}, L.actions.UPDATE_SUCCESS_MESSAGE, function (e, t) {
        var s = t.success_message;
        (e.commit(L.mutations.SET_SUCCESS_MESSAGE, s),
          setTimeout(function () {
            e.commit(L.mutations.CLEAR_SUCCESS_MESSAGE);
          }, 5e3));
      }),
      H = { namespaced: !0, state: M, getters: $, mutations: F, actions: B },
      Y = s("bc3a"),
      q = s.n(Y),
      V = q.a.create(),
      z = function (e) {
        (V.interceptors.request.use(function (t) {
          return (
            e.commit("root/INC_RUNNING_AJAX_REQUESTS"),
            e.commit("root/CLEAR_SUCCESS_MESSAGE"),
            e.commit("root/CLEAR_ERROR_MESSAGE"),
            t
          );
        }),
          V.interceptors.response.use(
            function (t) {
              if (
                (e.commit("root/DEC_RUNNING_AJAX_REQUESTS"),
                (t = t.data),
                "error" in t)
              )
                return Promise.reject(t.error);
              var s = t.message,
                i = t.results,
                n = t.verification;
              return Promise.resolve({
                results: i,
                message: s,
                verification: n,
              });
            },
            function (t) {
              return (
                e.commit("root/DEC_RUNNING_AJAX_REQUESTS"),
                Promise.reject(t)
              );
            },
          ));
      },
      Q = "dataexport/",
      W = {
        getters: {
          GET_EDIT_ID: Q + "GET_EDIT_ID",
          GET_EDIT_ORIGIN: Q + "GET_EDIT_ORIGIN",
          GET_EDIT_SUMMARY_GROUP_BY: Q + "GET_EDIT_SUMMARY_GROUP_BY",
          GET_EDIT_NAME: Q + "GET_EDIT_NAME",
          GET_EDIT_ACTIVITY_EVENTS: Q + "GET_EDIT_ACTIVITY_EVENTS",
          GET_EDIT_SUPPRESSION_EVENTS: Q + "GET_EDIT_SUPPRESSION_EVENTS",
          GET_EDIT_FREQUENCY: Q + "GET_EDIT_FREQUENCY",
          GET_EDIT_DATATYPE: Q + "GET_EDIT_DATATYPE",
          GET_EDIT_RECIPIENTS: Q + "GET_EDIT_RECIPIENTS",
          GET_EDIT_SUBACCOUNTS: Q + "GET_EDIT_SUBACCOUNTS",
          GET_EDIT_USERNAMES: Q + "GET_EDIT_USERNAMES",
          GET_EDIT_INCLUDE_SUBACCOUNTS_FUTURE:
            Q + "GET_EDIT_INCLUDE_SUBACCOUNTS_FUTURE",
          GET_EDIT_INCLUDE_USERNAMES_FUTURE:
            Q + "GET_EDIT_INCLUDE_USERNAMES_FUTURE",
          GET_EDIT_OPTIONAL_ATTACHMENT: Q + "GET_EDIT_OPTIONAL_ATTACHMENT",
          GET_ACTIVE_MEMBERS: Q + "GET_ACTIVE_MEMBERS",
          GET_IS_SAVED: Q + "GET_IS_SAVED",
          GET_IS_CREATE: Q + "GET_IS_CREATE",
          GET_DISPLAY_EDIT: Q + "GET_DISPLAY_EDIT",
          GET_CLOSE_ACTION: Q + "GET_CLOSE_ACTION",
          GET_ALLOW_SCHEDULED_EXPORT: Q + "GET_ALLOW_SCHEDULED_EXPORT",
          GET_USERNAME: Q + "GET_USERNAME",
          GET_CAN_DELETE_ANY: Q + "GET_CAN_DELETE_ANY",
          GET_ACTING_ROLE_LEVEL: Q + "GET_ACTING_ROLE_LEVEL",
          GET_IS_ADD: Q + "GET_IS_ADD",
          GET_ACTIVE_MEMBER_NAMES: Q + "GET_ACTIVE_MEMBER_NAMES",
          GET_USERNAMES: Q + "GET_USERNAMES",
          GET_SUBACCOUNTS: Q + "GET_SUBACCOUNTS",
          GET_HIDE_PAYMENT_SPLASH: Q + "GET_HIDE_PAYMENT_SPLASH",
        },
        mutations: {
          SET_EDIT_ID: Q + "SET_EDIT_ID",
          SET_EDIT_ORIGIN: Q + "SET_EDIT_ORIGIN",
          SET_EDIT_SUMMARY_GROUP_BY: Q + "SET_EDIT_SUMMARY_GROUP_BY",
          SET_EDIT_NAME: Q + "SET_EDIT_NAME",
          SET_EDIT_EVENTS: Q + "SET_EDIT_EVENTS",
          TOGGLE_EDIT_ACTIVITY_EVENT: Q + "TOGGLE_EDIT_ACTIVITY_EVENT",
          TOGGLE_EDIT_SUPPRESSION_EVENT: Q + "TOGGLE_EDIT_SUPPRESSION_EVENT",
          SET_EDIT_FREQUENCY: Q + "SET_EDIT_FREQUENCY",
          SET_EDIT_DATATYPE: Q + "SET_EDIT_DATATYPE",
          SET_EDIT_RECIPIENTS: Q + "SET_EDIT_RECIPIENTS",
          PUSH_EDIT_RECIPIENTS: Q + "PUSH_EDIT_RECIPIENTS",
          REMOVE_EDIT_RECIPIENTS: Q + "REMOVE_EDIT_RECIPIENTS",
          SET_EDIT_USERNAMES: Q + "SET_EDIT_USERNAMES",
          SET_EDIT_INCLUDE_SUBACCOUNTS_FUTURE:
            Q + "SET_EDIT_INCLUDE_SUBACCOUNTS_FUTURE",
          SET_EDIT_INCLUDE_USERNAMES_FUTURE:
            Q + "SET_EDIT_INCLUDE_USERNAMES_FUTURE",
          SET_EDIT_OPTIONAL_ATTACHMENT: Q + "SET_EDIT_OPTIONAL_ATTACHMENT",
          TOGGLE_EDIT_USERNAME: Q + "TOGGLE_EDIT_USERNAME",
          TOGGLE_EDIT_SMTP_USERS: Q + "TOGGLE_EDIT_SMTP_USERS",
          TOGGLE_EDIT_IP_USERS: Q + "TOGGLE_EDIT_IP_USERS",
          TOGGLE_EDIT_API_USERS: Q + "TOGGLE_EDIT_API_USERS",
          TOGGLE_EDIT_USERS: Q + "TOGGLE_EDIT_USERS",
          SET_EDIT_SUBACCOUNTS: Q + "SET_EDIT_SUBACCOUNTS",
          TOGGLE_EDIT_SUBACCOUNT: Q + "TOGGLE_EDIT_SUBACCOUNT",
          SET_ACTIVE_MEMBERS: Q + "SET_ACTIVE_MEMBERS",
          SET_IS_SAVED: Q + "SET_IS_SAVED",
          SET_IS_CREATE: Q + "SET_IS_CREATE",
          SET_DISPLAY_EDIT: Q + "SET_DISPLAY_EDIT",
          SET_CLOSE_ACTION: Q + "SET_CLOSE_ACTION",
          SET_ALLOW_SCHEDULED_EXPORT: Q + "SET_ALLOW_SCHEDULED_EXPORT",
          SET_USERNAME: Q + "SET_USERNAME",
          SET_CAN_DELETE_ANY: Q + "SET_CAN_DELETE_ANY",
          SET_ACTING_ROLE_LEVEL: Q + "SET_ACTING_ROLE_LEVEL",
          SET_IS_ADD: Q + "SET_IS_ADD",
          SET_ACTIVE_MEMBER_NAMES: Q + "SET_ACTIVE_MEMBER_NAMES",
          SET_USERNAMES: Q + "SET_USERNAMES",
          SET_SUBACCOUNTS: Q + "SET_SUBACCOUNTS",
          SET_HIDE_PAYMENT_SPLASH: Q + "SET_HIDE_PAYMENT_SPLASH",
          SELECT_ALL: Q + "SELECT_ALL",
        },
        actions: {
          FETCH_USERNAMES: Q + "FETCH_USERNAMES",
          CREATE_SCHEDULE: Q + "CREATE_SCHEDULE",
          UPDATE_SCHEDULE: Q + "UPDATE_SCHEDULE",
        },
      },
      J = R(Q, W),
      X = [
        { id: "pending", title: "Email processed", checked: !0 },
        { id: "soft-bounced", title: "Soft Bounced", checked: !0 },
        { id: "hard-bounced", title: "Hard Bounced", checked: !0 },
        { id: "rejected", title: "Rejected", checked: !0 },
        { id: "spam", title: "Marked as spam", checked: !0 },
        { id: "delivered", title: "Delivered to recipient", checked: !0 },
        { id: "unsubscribed", title: "Recipient unsubscribed", checked: !0 },
        { id: "unblocked", title: "Recipient resubscribed", checked: !0 },
        { id: "opened", title: "Opened by recipient", checked: !0 },
        { id: "clicked", title: "Link clicked by recipient", checked: !0 },
      ],
      K = [
        { id: "bounce", title: "Hard bounced", checked: !0 },
        { id: "spam", title: "Marked as spam", checked: !0 },
        { id: "unsubscribed", title: "Recipient unsubscribed", checked: !0 },
        { id: "manual", title: "Manual block", checked: !0 },
        { id: "compliance", title: "Added by compliance", checked: !0 },
      ],
      Z = {
        edit_id: "",
        edit_origin: "",
        edit_summary_group_by: "",
        edit_name: "",
        edit_activity_events: [],
        edit_suppression_events: [],
        edit_frequency: "",
        edit_datatype: "",
        edit_recipients: [],
        edit_usernames: [],
        edit_subaccounts: [],
        edit_include_usernames_future: !0,
        edit_include_subaccounts_future: !0,
        edit_optional_attachment: !1,
        active_members: [],
        is_saved: !0,
        is_create: !1,
        display_edit: !1,
        close_action: !1,
        allow_scheduled_export: !1,
        username: "",
        can_delete_any: !1,
        hide_payment_splash: !1,
        acting_role_level: "",
        is_add: !1,
        active_member_names: {},
        usernames: [],
        subaccounts: [],
      },
      ee =
        ((x = {}),
        Object(f["a"])(x, J.getters.GET_EDIT_ID, function (e) {
          return e.edit_id;
        }),
        Object(f["a"])(x, J.getters.GET_EDIT_ORIGIN, function (e) {
          return e.edit_origin;
        }),
        Object(f["a"])(x, J.getters.GET_EDIT_SUMMARY_GROUP_BY, function (e) {
          return e.edit_summary_group_by;
        }),
        Object(f["a"])(x, J.getters.GET_EDIT_NAME, function (e) {
          return e.edit_name;
        }),
        Object(f["a"])(x, J.getters.GET_EDIT_ACTIVITY_EVENTS, function (e) {
          return e.edit_activity_events;
        }),
        Object(f["a"])(x, J.getters.GET_EDIT_SUPPRESSION_EVENTS, function (e) {
          return e.edit_suppression_events;
        }),
        Object(f["a"])(x, J.getters.GET_EDIT_FREQUENCY, function (e) {
          return e.edit_frequency;
        }),
        Object(f["a"])(x, J.getters.GET_EDIT_DATATYPE, function (e) {
          return e.edit_datatype;
        }),
        Object(f["a"])(x, J.getters.GET_EDIT_RECIPIENTS, function (e) {
          return e.edit_recipients;
        }),
        Object(f["a"])(x, J.getters.GET_EDIT_USERNAMES, function (e) {
          return e.edit_usernames;
        }),
        Object(f["a"])(x, J.getters.GET_EDIT_SUBACCOUNTS, function (e) {
          return e.edit_subaccounts;
        }),
        Object(f["a"])(
          x,
          J.getters.GET_EDIT_INCLUDE_USERNAMES_FUTURE,
          function (e) {
            return e.edit_include_usernames_future;
          },
        ),
        Object(f["a"])(x, J.getters.GET_EDIT_OPTIONAL_ATTACHMENT, function (e) {
          return e.edit_optional_attachment;
        }),
        Object(f["a"])(
          x,
          J.getters.GET_EDIT_INCLUDE_SUBACCOUNTS_FUTURE,
          function (e) {
            return e.edit_include_subaccounts_future;
          },
        ),
        Object(f["a"])(x, J.getters.GET_ACTIVE_MEMBERS, function (e) {
          return e.active_members;
        }),
        Object(f["a"])(x, J.getters.GET_IS_SAVED, function (e) {
          return (
            0 === e.edit_name.length ||
            0 === e.edit_usernames.length ||
            0 === e.edit_subaccounts.length ||
            0 === e.edit_recipients.length ||
            ("activity" == e.edit_origin &&
              0 === e.edit_activity_events.length) ||
            ("suppressions" == e.edit_origin &&
              0 === e.edit_suppression_events.length) ||
            e.is_saved
          );
        }),
        Object(f["a"])(x, J.getters.GET_IS_CREATE, function (e) {
          return e.is_create;
        }),
        Object(f["a"])(x, J.getters.GET_DISPLAY_EDIT, function (e) {
          return e.display_edit;
        }),
        Object(f["a"])(x, J.getters.GET_CLOSE_ACTION, function (e) {
          return e.close_action;
        }),
        Object(f["a"])(x, J.getters.GET_ALLOW_SCHEDULED_EXPORT, function (e) {
          return e.allow_scheduled_export;
        }),
        Object(f["a"])(x, J.getters.GET_USERNAME, function (e) {
          return e.username;
        }),
        Object(f["a"])(x, J.getters.GET_CAN_DELETE_ANY, function (e) {
          return e.can_delete_any;
        }),
        Object(f["a"])(x, J.getters.GET_ACTING_ROLE_LEVEL, function (e) {
          return e.acting_role_level;
        }),
        Object(f["a"])(x, J.getters.GET_IS_ADD, function (e) {
          return e.is_add;
        }),
        Object(f["a"])(x, J.getters.GET_ACTIVE_MEMBER_NAMES, function (e) {
          return e.active_member_names;
        }),
        Object(f["a"])(x, J.getters.GET_USERNAMES, function (e) {
          return e.usernames;
        }),
        Object(f["a"])(x, J.getters.GET_SUBACCOUNTS, function (e) {
          return e.subaccounts;
        }),
        Object(f["a"])(x, J.getters.GET_HIDE_PAYMENT_SPLASH, function (e) {
          return e.hide_payment_splash;
        }),
        x),
      te =
        ((j = {}),
        Object(f["a"])(j, J.mutations.SET_EDIT_ID, function (e, t) {
          e.edit_id = t;
        }),
        Object(f["a"])(j, J.mutations.SET_EDIT_ORIGIN, function (e, t) {
          ((e.edit_origin = t), (e.is_saved = !1));
        }),
        Object(f["a"])(
          j,
          J.mutations.SET_EDIT_SUMMARY_GROUP_BY,
          function (e, t) {
            ((e.edit_summary_group_by = t), (e.is_saved = !1));
          },
        ),
        Object(f["a"])(j, J.mutations.SET_EDIT_NAME, function (e, t) {
          ((e.edit_name = t), (e.is_saved = !1));
        }),
        Object(f["a"])(j, J.mutations.SET_EDIT_EVENTS, function (e, t) {
          void 0 == t || null == t
            ? ((e.edit_activity_events = X), (e.edit_suppression_events = K))
            : "activity" == e.edit_origin
              ? ((e.edit_suppression_events = K),
                (e.edit_activity_events = []),
                X.forEach(function (s) {
                  ((s.checked = t.includes(s.id)),
                    e.edit_activity_events.push(s));
                }))
              : "suppressions" == e.edit_origin &&
                ((e.edit_activity_events = X),
                (e.edit_suppression_events = []),
                K.forEach(function (s) {
                  ((s.checked = t.includes(s.id)),
                    e.edit_suppression_events.push(s));
                }));
        }),
        Object(f["a"])(
          j,
          J.mutations.TOGGLE_EDIT_ACTIVITY_EVENT,
          function (e, t) {
            if (null == t) {
              var s = !0;
              (e.edit_activity_events.forEach(function (e) {
                e.checked || (s = !1);
              }),
                e.edit_activity_events.forEach(function (t, i) {
                  ((t.checked = !s), r["a"].set(e.edit_activity_events, i, t));
                }));
            } else {
              var i = e.edit_activity_events.findIndex(function (e) {
                  return e.id == t.id;
                }),
                n = e.edit_activity_events[i];
              ((n.checked = !e.edit_activity_events[i].checked),
                r["a"].set(e.edit_activity_events, i, n));
            }
            e.is_saved = !1;
          },
        ),
        Object(f["a"])(
          j,
          J.mutations.TOGGLE_EDIT_SUPPRESSION_EVENT,
          function (e, t) {
            if (null == t) {
              var s = !0;
              (e.edit_suppression_events.forEach(function (e) {
                e.checked || (s = !1);
              }),
                e.edit_suppression_events.forEach(function (t, i) {
                  ((t.checked = !s),
                    r["a"].set(e.edit_suppression_events, i, t));
                }));
            } else {
              var i = e.edit_suppression_events.findIndex(function (e) {
                  return e.id == t.id;
                }),
                n = e.edit_suppression_events[i];
              ((n.checked = !e.edit_suppression_events[i].checked),
                r["a"].set(e.edit_suppression_events, i, n));
            }
            e.is_saved = !1;
          },
        ),
        Object(f["a"])(j, J.mutations.SET_EDIT_FREQUENCY, function (e, t) {
          ((e.edit_frequency = t), (e.is_saved = !1));
        }),
        Object(f["a"])(j, J.mutations.SET_EDIT_DATATYPE, function (e, t) {
          ((e.edit_datatype = t), (e.is_saved = !1));
        }),
        Object(f["a"])(j, J.mutations.SET_EDIT_RECIPIENTS, function (e, t) {
          e.edit_recipients = void 0 == t || null == t ? [] : t.slice();
        }),
        Object(f["a"])(j, J.mutations.PUSH_EDIT_RECIPIENTS, function (e, t) {
          e.edit_recipients.length < 50 &&
            (e.edit_recipients.push(t), (e.is_saved = !1));
        }),
        Object(f["a"])(j, J.mutations.REMOVE_EDIT_RECIPIENTS, function (e, t) {
          (e.edit_recipients.splice(t, 1), (e.is_saved = !1));
        }),
        Object(f["a"])(j, J.mutations.SET_EDIT_USERNAMES, function (e, t) {
          void 0 == t || null == t || 0 == t.length
            ? ((e.edit_usernames = []),
              e.usernames.forEach(function (t) {
                ((t.checked = !0), e.edit_usernames.push(t));
              }))
            : ((e.edit_usernames = []),
              e.usernames.forEach(function (s) {
                ((s.checked = t.includes(s.username)),
                  e.edit_usernames.push(s));
              }));
        }),
        Object(f["a"])(
          j,
          J.mutations.SET_EDIT_INCLUDE_USERNAMES_FUTURE,
          function (e, t) {
            e.edit_include_usernames_future = t;
          },
        ),
        Object(f["a"])(
          j,
          J.mutations.SET_EDIT_OPTIONAL_ATTACHMENT,
          function (e, t) {
            e.edit_optional_attachment = t;
          },
        ),
        Object(f["a"])(
          j,
          J.mutations.SET_EDIT_INCLUDE_SUBACCOUNTS_FUTURE,
          function (e, t) {
            e.edit_include_subaccounts_future = t;
          },
        ),
        Object(f["a"])(j, J.mutations.TOGGLE_EDIT_USERNAME, function (e, t) {
          var s = e.edit_usernames.findIndex(function (e) {
              return e.username == t.username;
            }),
            i = e.edit_usernames[s];
          ((i.checked = !e.edit_usernames[s].checked),
            r["a"].set(e.edit_usernames, s, i),
            (e.is_saved = !1));
        }),
        Object(f["a"])(j, J.mutations.TOGGLE_EDIT_SMTP_USERS, function (e) {
          var t = new RegExp(/^api-|^(?:[0-9]{1,3}\.){3}[0-9]{1,3}/),
            s = !0;
          (e.edit_usernames.forEach(function (e) {
            t.test(e.username) || e.checked || (s = !1);
          }),
            e.edit_usernames.forEach(function (i, n) {
              t.test(i.username) ||
                ((i.checked = !s), r["a"].set(e.edit_usernames, n, i));
            }),
            (e.is_saved = !1));
        }),
        Object(f["a"])(j, J.mutations.TOGGLE_EDIT_IP_USERS, function (e) {
          var t = new RegExp(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}/),
            s = !0;
          (e.edit_usernames.forEach(function (e) {
            t.test(e.username) && !e.checked && (s = !1);
          }),
            e.edit_usernames.forEach(function (i, n) {
              t.test(i.username) &&
                ((i.checked = !s), r["a"].set(e.edit_usernames, n, i));
            }),
            (e.is_saved = !1));
        }),
        Object(f["a"])(j, J.mutations.TOGGLE_EDIT_API_USERS, function (e) {
          var t = new RegExp(/^api-/),
            s = !0;
          (e.edit_usernames.forEach(function (e) {
            t.test(e.username) && !e.checked && (s = !1);
          }),
            e.edit_usernames.forEach(function (i, n) {
              t.test(i.username) &&
                ((i.checked = !s), r["a"].set(e.edit_usernames, n, i));
            }),
            (e.is_saved = !1));
        }),
        Object(f["a"])(j, J.mutations.TOGGLE_EDIT_USERS, function (e) {
          var t = !0;
          (e.edit_usernames.forEach(function (e) {
            e.checked || (t = !1);
          }),
            e.edit_usernames.forEach(function (s, i) {
              ((s.checked = !t), r["a"].set(e.edit_usernames, i, s));
            }),
            (e.is_saved = !1));
        }),
        Object(f["a"])(j, J.mutations.SET_EDIT_SUBACCOUNTS, function (e, t) {
          void 0 == t || null == t || 0 == t.length
            ? ((e.edit_subaccounts = []),
              e.subaccounts.forEach(function (t) {
                ((t.checked = !0), e.edit_subaccounts.push(t));
              }))
            : ((e.edit_subaccounts = []),
              e.subaccounts.forEach(function (s) {
                ((s.checked = t.includes(s.record_id)),
                  e.edit_subaccounts.push(s));
              }));
        }),
        Object(f["a"])(j, J.mutations.TOGGLE_EDIT_SUBACCOUNT, function (e, t) {
          if (null == t) {
            var s = !0;
            (e.edit_subaccounts.forEach(function (e) {
              e.checked || (s = !1);
            }),
              e.edit_subaccounts.forEach(function (t, i) {
                ((t.checked = !s), r["a"].set(e.edit_subaccounts, i, t));
              }));
          } else {
            var i = e.edit_subaccounts.findIndex(function (e) {
                return e.record_id == t.record_id;
              }),
              n = e.edit_subaccounts[i];
            ((n.checked = !e.edit_subaccounts[i].checked),
              r["a"].set(e.edit_subaccounts, i, n));
          }
          e.is_saved = !1;
        }),
        Object(f["a"])(j, J.mutations.SET_ACTIVE_MEMBERS, function (e, t) {
          e.active_members = t;
        }),
        Object(f["a"])(j, J.mutations.SET_IS_SAVED, function (e, t) {
          e.is_saved = t;
        }),
        Object(f["a"])(j, J.mutations.SET_IS_CREATE, function (e, t) {
          e.is_create = t;
        }),
        Object(f["a"])(j, J.mutations.SET_DISPLAY_EDIT, function (e, t) {
          e.display_edit = t;
        }),
        Object(f["a"])(j, J.mutations.SET_CLOSE_ACTION, function (e, t) {
          e.close_action = t;
        }),
        Object(f["a"])(
          j,
          J.mutations.SET_ALLOW_SCHEDULED_EXPORT,
          function (e, t) {
            e.allow_scheduled_export = t;
          },
        ),
        Object(f["a"])(j, J.mutations.SET_USERNAME, function (e, t) {
          e.username = t;
        }),
        Object(f["a"])(j, J.mutations.SET_CAN_DELETE_ANY, function (e, t) {
          e.can_delete_any = t;
        }),
        Object(f["a"])(j, J.mutations.SET_ACTING_ROLE_LEVEL, function (e, t) {
          e.acting_role_level = t;
        }),
        Object(f["a"])(j, J.mutations.SET_IS_ADD, function (e, t) {
          e.is_add = t;
        }),
        Object(f["a"])(j, J.mutations.SET_ACTIVE_MEMBER_NAMES, function (e, t) {
          e.active_member_names = t;
        }),
        Object(f["a"])(j, J.mutations.SET_USERNAMES, function (e, t) {
          e.usernames = t;
        }),
        Object(f["a"])(j, J.mutations.SET_SUBACCOUNTS, function (e, t) {
          e.subaccounts = t;
        }),
        Object(f["a"])(j, J.mutations.SET_HIDE_PAYMENT_SPLASH, function (e, t) {
          e.hide_payment_splash = t;
        }),
        Object(f["a"])(j, J.mutations.SELECT_ALL, function (e) {
          (e.edit_usernames.forEach(function (t, s) {
            ((t.checked = !0), r["a"].set(e.edit_usernames, s, t));
          }),
            e.edit_subaccounts.forEach(function (t, s) {
              ((t.checked = !0), r["a"].set(e.edit_subaccounts, s, t));
            }),
            (e.edit_include_usernames_future = !0),
            (e.edit_include_subaccounts_future = !0));
        }),
        j),
      se =
        ((N = {}),
        Object(f["a"])(N, J.actions.FETCH_USERNAMES, function (e) {
          return new Promise(function (t, s) {
            V.post(
              e.rootGetters[P.getters.GET_BACKEND_URL](
                "Data Exports",
                "load-username",
              ),
            )
              .then(function (s) {
                (e.commit(J.mutations.SET_USERNAMES, s.results.usernames),
                  e.commit(J.mutations.SET_SUBACCOUNTS, s.results.subaccounts),
                  t(s));
              })
              .catch(function (t) {
                (e.commit("root/SET_ERROR_MESSAGE", t, { root: !0 }), s(t));
              });
          });
        }),
        Object(f["a"])(N, J.actions.CREATE_SCHEDULE, function (e) {
          return new Promise(function (t, s) {
            V.post(
              e.rootGetters[P.getters.GET_BACKEND_URL](
                "Data Exports",
                "create-schedule",
              ),
              {
                origin: e.getters.GET_EDIT_ORIGIN,
                summary_group_by: e.getters.GET_EDIT_SUMMARY_GROUP_BY,
                name: e.getters.GET_EDIT_NAME,
                activity_events: e.getters.GET_EDIT_ACTIVITY_EVENTS,
                suppression_events: e.getters.GET_EDIT_SUPPRESSION_EVENTS,
                usernames: e.getters.GET_EDIT_USERNAMES,
                subaccounts: e.getters.GET_EDIT_SUBACCOUNTS,
                frequency: e.getters.GET_EDIT_FREQUENCY,
                datatype: e.getters.GET_EDIT_DATATYPE,
                recipients: e.getters.GET_EDIT_RECIPIENTS,
                usernames_include_future:
                  e.getters.GET_EDIT_INCLUDE_USERNAMES_FUTURE,
                subaccounts_include_future:
                  e.getters.GET_EDIT_INCLUDE_SUBACCOUNTS_FUTURE,
                optional_attachment: e.getters.GET_EDIT_OPTIONAL_ATTACHMENT,
              },
            )
              .then(function () {
                return t(
                  e.dispatch(
                    "root/UPDATE_SUCCESS_MESSAGE",
                    {
                      success_message:
                        "Successfully created scheduled email report.",
                    },
                    { root: !0 },
                  ),
                );
              })
              .catch(function (t) {
                (e.commit("root/SET_ERROR_MESSAGE", t, { root: !0 }), s(t));
              });
          });
        }),
        Object(f["a"])(N, J.actions.UPDATE_SCHEDULE, function (e) {
          return new Promise(function (t, s) {
            V.put(
              e.rootGetters[P.getters.GET_BACKEND_URL](
                "Data Exports",
                "update-schedule",
              ),
              {
                id: e.getters.GET_EDIT_ID,
                origin: e.getters.GET_EDIT_ORIGIN,
                summary_group_by: e.getters.GET_EDIT_SUMMARY_GROUP_BY,
                name: e.getters.GET_EDIT_NAME,
                activity_events: e.getters.GET_EDIT_ACTIVITY_EVENTS,
                suppression_events: e.getters.GET_EDIT_SUPPRESSION_EVENTS,
                usernames: e.getters.GET_EDIT_USERNAMES,
                subaccounts: e.getters.GET_EDIT_SUBACCOUNTS,
                frequency: e.getters.GET_EDIT_FREQUENCY,
                datatype: e.getters.GET_EDIT_DATATYPE,
                recipients: e.getters.GET_EDIT_RECIPIENTS,
                usernames_include_future:
                  e.getters.GET_EDIT_INCLUDE_USERNAMES_FUTURE,
                subaccounts_include_future:
                  e.getters.GET_EDIT_INCLUDE_SUBACCOUNTS_FUTURE,
                optional_attachment: e.getters.GET_EDIT_OPTIONAL_ATTACHMENT,
              },
            )
              .then(function () {
                return t(
                  e.dispatch(
                    "root/UPDATE_SUCCESS_MESSAGE",
                    {
                      success_message:
                        "Successfully updated scheduled email report.",
                    },
                    { root: !0 },
                  ),
                );
              })
              .catch(function (t) {
                (e.commit("root/SET_ERROR_MESSAGE", t, { root: !0 }), s(t));
              });
          });
        }),
        N),
      ie = {
        namespaced: !0,
        state: Z,
        getters: ee,
        mutations: te,
        actions: se,
      },
      ne =
        (s("6b54"),
        {
          methods: {
            s2g_objectIsFunction: function (e) {
              return "[object Function]" == Object.prototype.toString.call(e);
            },
            s2g_isEmptyString: function (e) {
              return !e;
            },
          },
        }),
      re = ne,
      ae = {
        mixins: [re],
        created: function () {
          this.makeRequest = function (e, t, s, i, n, r, a) {
            (void 0 !== a && null !== a) || (a = !1);
            var o = this;
            (T.a.ajax(
              END_POINTS.urls()[t] +
                "?action=" +
                encodeURIComponent(s) +
                "&CSRF_key=" +
                encodeURIComponent(HTML.csrfkey),
              {
                method: e,
                data: i,
                complete: function (e, t) {
                  if ("success" != t) {
                    a || o.$store.commit("runningAjaxRequestsDecrement");
                    try {
                      o.s2g_objectIsFunction(r) && r(e);
                    } catch (s) {
                      console.error(
                        "encountered error in AJAXBackendMixin, err:",
                        s,
                      );
                    }
                  } else {
                    a || o.$store.commit("runningAjaxRequestsDecrement");
                    try {
                      "error" in e.responseJSON && o.s2g_objectIsFunction(r)
                        ? r(e)
                        : o.s2g_objectIsFunction(n) && n(e);
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
              a || o.$store.commit("runningAjaxRequestsIncrement"));
          };
        },
        methods: {
          mixinAjax_get: function (e, t, s, i, n, r) {
            return this.makeRequest("GET", e, t, s, i, n, r);
          },
          mixinAjax_post: function (e, t, s, i, n, r) {
            return this.makeRequest("POST", e, t, s, i, n, r);
          },
          mixinAjax_put: function (e, t, s, i, n, r) {
            return this.makeRequest("PUT", e, t, s, i, n, r);
          },
          mixinAjax_delete: function (e, t, s, i, n, r) {
            return this.makeRequest("DELETE", e, t, s, i, n, r);
          },
        },
      },
      oe = ae,
      ce = {
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
          $_downloadFile: function (e) {
            this.performDownloadFile(e);
          },
        },
      },
      ue = ce,
      le = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t;
        return s("div", { staticClass: "tab-container" }, [
          e.shouldShow
            ? s(
                "table",
                {
                  staticClass:
                    "dataTable table table-striped table-hover display loading-in",
                  class: { "no-results": 0 == e.numDataExports },
                  attrs: { id: "bounce-dtable" },
                },
                [
                  s("thead", { class: { "has-long-date": e.hasLongDate } }, [
                    s(
                      "tr",
                      e._l(e.displayColumns, function (t) {
                        return s("th", { key: t.id, class: "table-" + t.id }, [
                          e._v(e._s(t.label)),
                        ]);
                      }),
                      0,
                    ),
                  ]),
                  s(
                    "tbody",
                    [
                      e._l(e.dataExportsResults, function (t, i) {
                        return s(
                          "tr",
                          {
                            key: i,
                            staticClass: "data-exports-result-wrapper",
                            class: "format-" + t.datatype,
                          },
                          e._l(e.displayColumns, function (i) {
                            return s(
                              "td",
                              { key: i.id, class: "cell-" + i.id },
                              [
                                "date" === i.id
                                  ? s(
                                      "span",
                                      { attrs: { title: t[i.id].title } },
                                      [
                                        t[i.id].date
                                          ? s("span", { staticClass: "date" }, [
                                              e._v(e._s(t[i.id].date) + " "),
                                            ])
                                          : e._e(),
                                        s(
                                          "span",
                                          { class: t[i.id].timeClass },
                                          [e._v(e._s(t[i.id].time))],
                                        ),
                                      ],
                                    )
                                  : "download" === i.id
                                    ? s(
                                        "div",
                                        { staticClass: "data-exports-popup" },
                                        [
                                          s("a", {
                                            staticClass: "row-options-toggle",
                                            on: {
                                              click: function (s) {
                                                return e.popupClick(t);
                                              },
                                            },
                                          }),
                                          t.displayPopup
                                            ? s(
                                                "ul",
                                                { staticClass: "row-options" },
                                                [
                                                  e.showDownload(t)
                                                    ? s(
                                                        "li",
                                                        {
                                                          staticClass:
                                                            "download",
                                                        },
                                                        [
                                                          s(
                                                            "a",
                                                            {
                                                              attrs: {
                                                                href: t.download_url,
                                                              },
                                                              on: {
                                                                click:
                                                                  e.hideAllPopup,
                                                              },
                                                            },
                                                            [
                                                              s("span", {
                                                                staticClass:
                                                                  "icon-download",
                                                              }),
                                                              s("span", [
                                                                e._v(
                                                                  "Download",
                                                                ),
                                                              ]),
                                                            ],
                                                          ),
                                                        ],
                                                      )
                                                    : e._e(),
                                                  e.showRetry(t)
                                                    ? s(
                                                        "li",
                                                        {
                                                          staticClass: "retry",
                                                          on: {
                                                            click: function (
                                                              s,
                                                            ) {
                                                              return e.markForRetry(
                                                                t,
                                                              );
                                                            },
                                                          },
                                                        },
                                                        [e._m(0, !0)],
                                                      )
                                                    : e._e(),
                                                  e._m(1, !0),
                                                ],
                                              )
                                            : e._e(),
                                          s(
                                            "ul",
                                            {
                                              staticClass:
                                                "dropdown-menu confirm-remove",
                                            },
                                            [
                                              s("li", [
                                                s(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "tooltip-title",
                                                  },
                                                  [e._v("Confirm remove?")],
                                                ),
                                                s(
                                                  "a",
                                                  {
                                                    staticClass: "table-remove",
                                                    attrs: {
                                                      href: "javascript:void(0);",
                                                    },
                                                    on: {
                                                      click: function (s) {
                                                        return e.deleteExport(
                                                          t,
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [e._v("Remove")],
                                                ),
                                                s(
                                                  "a",
                                                  {
                                                    staticClass:
                                                      "table-remove-close toggle-popup",
                                                    on: {
                                                      click: e.hideAllPopup,
                                                    },
                                                  },
                                                  [e._v("Cancel")],
                                                ),
                                              ]),
                                            ],
                                          ),
                                          t.displayPopup
                                            ? s("div", {
                                                staticClass:
                                                  "mobile-only-backdrop",
                                                on: { click: e.hideAllPopup },
                                              })
                                            : e._e(),
                                        ],
                                      )
                                    : s("span", [e._v(e._s(t[i.id]))]),
                              ],
                            );
                          }),
                          0,
                        );
                      }),
                      e.requestActive || 0 != e.numDataExports
                        ? e._e()
                        : s("tr", { staticClass: "no-results" }, [e._m(2)]),
                    ],
                    2,
                  ),
                ],
              )
            : e._e(),
        ]);
      },
      de = [
        function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s("a", [
            s("span", { staticClass: "icon-retry" }),
            s("span", [e._v("Retry")]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s("li", { staticClass: "delete" }, [
            s("a", { staticClass: "trigger-remove" }, [
              s("span", { staticClass: "icon-remove" }, [e._v("×")]),
              s("span", [e._v("Remove")]),
            ]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s("td", { attrs: { colspan: "100%" } }, [
            s("div", { staticClass: "table-blank" }, [
              s("div", { staticClass: "table-blank-content" }, [
                s("p", [e._v("You don't have any exports.\n              ")]),
              ]),
            ]),
          ]);
        },
      ],
      _e = {
        name: "DataExportsResultsDisplay",
        mixins: [oe],
        data: function () {
          return {
            dataExportsResults: [],
            initialised: !1,
            requestPoint: this.$config.requestPoint,
            displayColumns: this.$config.displayColumns,
            hasLongDate: !1,
            id: null,
          };
        },
        methods: {
          markForRetry: function (e) {
            var t = this,
              s = { id: e.id };
            (this.hideAllPopup(),
              T()(".notice.main.error").empty().removeClass("visible"),
              this.mixinAjax_put(
                this.requestPoint,
                "retry",
                s,
                function (e) {
                  (HTML.set_time(e.responseJSON),
                    t.$eventBus.$emit("mixin-search-has-changed"),
                    t.$eventBus.$emit("mixin-search-trigger"));
                },
                function (e) {
                  HTML.handleError(e.responseJSON);
                },
              ));
          },
          showRetry: function (e) {
            return !(
              ("zip" !== e.datatype && "tar" !== e.datatype) ||
              !e.failed
            );
          },
          showDownload: function (e) {
            return !!(
              ("zip" !== e.datatype && "tar" !== e.datatype) ||
              e.completed
            );
          },
          initDataExportsResultsDisplay: function (e) {
            ((this.id = e), (this.initialised = !0));
          },
          updateDataExportsResults: function (e, t) {
            ((this.dataExportsResults = e),
              (this.hasLongDate = t),
              null !== this.id && this.forceDownload());
          },
          forceDownload: function () {
            for (var e = 0; e < this.dataExportsResults.length; e++)
              if (this.dataExportsResults[e].id === this.id) {
                var t = document.createElement("a");
                ((t.href = this.dataExportsResults[e].download_url),
                  document.body.appendChild(t),
                  t.click(),
                  document.body.removeChild(t),
                  (this.id = null));
                break;
              }
          },
          deleteExport: function (e) {
            var t = this,
              s = { id: e.id };
            (this.hideAllPopup(),
              T()(".notice.main.error").empty().removeClass("visible"),
              this.mixinAjax_delete(
                this.requestPoint,
                "",
                s,
                function (e) {
                  (HTML.set_time(e.responseJSON),
                    t.$eventBus.$emit("mixin-search-has-changed"),
                    t.$eventBus.$emit("mixin-search-trigger"));
                },
                function (e) {
                  HTML.handleError(e.responseJSON);
                },
              ));
          },
          popupClick: function (e) {
            var t = e.displayPopup;
            (this.hideAllPopup(), this.$set(e, "displayPopup", !t));
          },
          hideAllPopup: function () {
            var e = this;
            this.dataExportsResults.forEach(function (t) {
              e.$set(t, "displayPopup", !1);
            });
          },
          windowClicked: function (e) {
            var t = ".data-exports-popup";
            (screen.width < 768 && (t = ".data-exports-result-wrapper"),
              T()(e.target).parents(t).length ||
                (this.hideAllPopup(),
                T()(".data-exports-popup").removeClass("popup-on")));
          },
        },
        computed: {
          numDataExports: function () {
            return this.dataExportsResults.length;
          },
          requestActive: function () {
            return 1 === this.$store.state.runningAjaxRequests;
          },
          shouldShow: function () {
            return !!this.initialised || !this.requestActive;
          },
          isFullDateInResults: function () {
            var e = !1;
            return (
              this.dataExportsResults.forEach(function (t) {
                t.date_display.hideDate || (e = !0);
              }),
              e
            );
          },
        },
        mounted: function () {
          T()(".page-content-wrapper .page-content").on(
            "click.Bst",
            this.windowClicked,
          );
        },
      };
    (T()(document).on("click", ".row-options-toggle", function () {
      (T()(this).parents(".data-exports-popup").toggleClass("popup-on"),
        T()(".row-options").hasClass("is-active")
          ? setTimeout(function () {
              (T()(this).removeClass("popup-active"),
                T()(".row-options").removeClass("is-active"));
            }, 10)
          : setTimeout(function () {
              (T()(this).addClass("popup-active"),
                T()(".row-options").addClass("is-active"));
            }, 10));
    }),
      T()(document).on("click", ".trigger-remove", function () {
        (T()(".row-options").removeClass("is-active"),
          T()(this)
            .parents(".data-exports-popup")
            .find(".confirm-remove")
            .addClass("is-activated"));
      }));
    var Ee = _e,
      pe = Object(_["a"])(Ee, le, de, !1, null, null, null),
      he = pe.exports,
      me = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t;
        return s(
          "div",
          { staticClass: "tab-container" },
          [
            e.allowScheduledExport ? e._e() : s("TabSplash"),
            e.allowScheduledExport
              ? s(
                  "table",
                  {
                    staticClass:
                      "dataTable table table-striped table-hover display loading-in",
                    class: {
                      "no-results": e.noResults,
                      "format-only": e.isFormatOnly,
                    },
                    attrs: { id: "table-reports" },
                  },
                  [
                    s("thead", [
                      s(
                        "tr",
                        [
                          e._l(e.activeColumns, function (t) {
                            return s(
                              "th",
                              { key: t.id, class: "table-" + t.id },
                              [
                                e._v(
                                  "\n          " + e._s(t.label) + "\n        ",
                                ),
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
                                    attrs: {
                                      "data-toggle-trigger": "columns-summary",
                                      "data-trigger-on-close": "true",
                                    },
                                    on: {
                                      click: e.mixinTriggerable_toggleOpened,
                                    },
                                  },
                                  [s("span", { staticClass: "dropdown-icon" })],
                                ),
                                s(
                                  "ul",
                                  {
                                    staticClass:
                                      "dropdown-menu dropdown-options column-filter mixinTriggerable_layer",
                                    class: {
                                      visible: e.mixinTriggerable_isOpen,
                                    },
                                    attrs: {
                                      id: "columns",
                                      "data-toggle-target": "columns-summary",
                                    },
                                  },
                                  [
                                    e._m(0),
                                    e._l(e.columnFilters, function (t) {
                                      return s(
                                        "li",
                                        {
                                          key: t.id,
                                          staticClass: "columns-filter",
                                          attrs: {
                                            id: "columns-filter-" + t.id,
                                          },
                                          on: {
                                            click: function (s) {
                                              return e.handleColumnToggle(s, t);
                                            },
                                          },
                                        },
                                        [
                                          s(
                                            "div",
                                            { staticClass: "column-indicator" },
                                            [
                                              s(
                                                "div",
                                                { staticClass: "checker" },
                                                [
                                                  s(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "checker-box",
                                                      class: {
                                                        checked:
                                                          e.shownColumns[t.id],
                                                      },
                                                    },
                                                    [
                                                      s("input", {
                                                        attrs: {
                                                          type: "checkbox",
                                                          name: "columns[]",
                                                        },
                                                        domProps: {
                                                          value: t.id,
                                                        },
                                                      }),
                                                    ],
                                                  ),
                                                ],
                                              ),
                                              s(
                                                "span",
                                                {
                                                  staticClass:
                                                    "column-indicator-copy",
                                                },
                                                [e._v(e._s(t.label))],
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
                        e._l(e.scheduledResults, function (t) {
                          return s(
                            "tr",
                            { key: t.id, class: "format-" + t.datatype },
                            [
                              s("td", { staticClass: "table-name" }, [
                                e.canDeleteAny || e.username == t.author
                                  ? s(
                                      "button",
                                      {
                                        staticClass: "button-link",
                                        on: {
                                          click: function (s) {
                                            return e.toggleReport(t);
                                          },
                                        },
                                      },
                                      [
                                        e._v(
                                          "\n            " +
                                            e._s(t.description) +
                                            "\n          ",
                                        ),
                                      ],
                                    )
                                  : s("span", [e._v(e._s(t.description))]),
                              ]),
                              s(
                                "td",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: e.isColumnActive("origin"),
                                      expression: "isColumnActive('origin')",
                                    },
                                  ],
                                  staticClass: "cell-origin",
                                },
                                [
                                  e._v(
                                    "\n          " +
                                      e._s(
                                        t.origin.replace(
                                          "summary-overview",
                                          "summary breakdown",
                                        ),
                                      ) +
                                      "\n        ",
                                  ),
                                ],
                              ),
                              s(
                                "td",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: e.isColumnActive("frequency"),
                                      expression: "isColumnActive('frequency')",
                                    },
                                  ],
                                  staticClass: "cell-frequency",
                                },
                                [
                                  e._v(
                                    "\n          " +
                                      e._s(
                                        e.displayFrequency(
                                          t.schedule_report_frequency,
                                        ),
                                      ) +
                                      "\n        ",
                                  ),
                                ],
                              ),
                              s(
                                "td",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: e.isColumnActive("format"),
                                      expression: "isColumnActive('format')",
                                    },
                                  ],
                                  staticClass: "cell-format",
                                },
                                [
                                  s("span", [
                                    e._v(e._s(e.displayDataType(t.datatype))),
                                  ]),
                                ],
                              ),
                              s(
                                "td",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: e.isColumnActive("recipients"),
                                      expression:
                                        "isColumnActive('recipients')",
                                    },
                                  ],
                                  staticClass:
                                    "text-nowrap cell-recipients cell-team",
                                },
                                [
                                  s(
                                    "div",
                                    { staticClass: "cell-team-content" },
                                    [
                                      s(
                                        "div",
                                        { staticClass: "text-align" },
                                        e._l(
                                          t.scheduled_export_recipients,
                                          function (t) {
                                            return s(
                                              "span",
                                              {
                                                key: t,
                                                class:
                                                  e.getRecipientColourClass(t),
                                              },
                                              [
                                                s(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "member-initials",
                                                  },
                                                  [
                                                    e._v(
                                                      "\n                  " +
                                                        e._s(
                                                          e.getRecipientInitial(
                                                            t,
                                                          ),
                                                        ) +
                                                        "\n                ",
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
                                                        e._v(
                                                          e._s(
                                                            e.getRecipientName(
                                                              t,
                                                            ),
                                                          ),
                                                        ),
                                                      ],
                                                    ),
                                                    s(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "member-email",
                                                      },
                                                      [
                                                        e._v(
                                                          e._s(
                                                            e.getRecipientAddress(
                                                              t,
                                                            ),
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
                              ),
                              s(
                                "td",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: e.isColumnActive("author"),
                                      expression: "isColumnActive('author')",
                                    },
                                  ],
                                  staticClass: "cell-author",
                                },
                                [s("span", [e._v(e._s(t.author))])],
                              ),
                              s(
                                "td",
                                {
                                  staticClass:
                                    "cell-tools dropdown-action-cell",
                                },
                                [
                                  e.canDeleteAny || e.username == t.author
                                    ? s(
                                        "div",
                                        {
                                          staticClass:
                                            "drop-content row-delete-popup",
                                        },
                                        [
                                          s(
                                            "a",
                                            {
                                              staticClass:
                                                "dropdown-action-toggler table-remove-toggler row-remove-toggler",
                                            },
                                            [e._v("×")],
                                          ),
                                          s(
                                            "ul",
                                            {
                                              staticClass:
                                                "dropdown-menu dropdown-options",
                                            },
                                            [
                                              s("li", [
                                                s(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "tooltip-confirm-title",
                                                  },
                                                  [e._v("Confirm remove?")],
                                                ),
                                                s(
                                                  "a",
                                                  {
                                                    staticClass:
                                                      "table-remove confirm",
                                                    attrs: {
                                                      href: "javascript:void(0);",
                                                    },
                                                    on: {
                                                      click: function (s) {
                                                        return e.deleteExport(
                                                          t.id,
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [s("span", [e._v("Remove")])],
                                                ),
                                                s(
                                                  "a",
                                                  {
                                                    staticClass:
                                                      "dropdown-action-toggler table-remove-cancel",
                                                    attrs: { href: "#" },
                                                  },
                                                  [e._v("Cancel")],
                                                ),
                                              ]),
                                            ],
                                          ),
                                        ],
                                      )
                                    : e._e(),
                                ],
                              ),
                            ],
                          );
                        }),
                        0 == e.numDataExports
                          ? s("tr", { staticClass: "no-results" }, [e._m(1)])
                          : e._e(),
                      ],
                      2,
                    ),
                  ],
                )
              : e._e(),
          ],
          1,
        );
      },
      fe = [
        function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s("li", [
            s("p", [
              s("strong", [e._v("Display optional columns")]),
              s("br"),
              e._v(
                "Choose to show\n                  optional columns\n                ",
              ),
            ]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s("td", { attrs: { colspan: "100%" } }, [
            s("div", { staticClass: "table-blank" }, [
              s("div", { staticClass: "table-blank-content" }, [
                s("p", [e._v("You don't have any reports saved.")]),
              ]),
            ]),
          ]);
        },
      ],
      ve = (s("4917"), s("28a5"), s("92d7")),
      Te = s.n(ve),
      ge = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t;
        return s("div", { staticClass: "tab-splash-container" }, [
          s("div", { staticClass: "tab-splash" }, [
            e._m(0),
            s("div", { staticClass: "tab-splash-content" }, [
              s("div", { staticClass: "content-label" }, [
                e._v("Available to paid accounts"),
              ]),
              s("h3", [
                e._v("Automatic email-based reports of your account data"),
              ]),
              s("p", [
                e._v(
                  "Track your SMTP2GO account activity right from your inbox. Choose your page source and events you’d like to track, then send automated reports to email recipients of your choosing.",
                ),
              ]),
              e.hidePaymentSplash
                ? e._e()
                : s(
                    "a",
                    {
                      staticClass: "green btn",
                      attrs: { href: "/account/changeplan/" },
                    },
                    [
                      e._v("See Upgrade Options"),
                      s("span", { staticClass: "button-icon" }, [e._v("+")]),
                    ],
                  ),
            ]),
          ]),
        ]);
      },
      Se = [
        function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s("figure", [
            s("img", {
              attrs: {
                src: "/static/smtp2go_assets/splash-tab-dataexports.png",
                alt: "SMTP2GO",
                width: "295",
              },
            }),
          ]);
        },
      ];
    function be(e, t) {
      var s = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        (t &&
          (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          s.push.apply(s, i));
      }
      return s;
    }
    function Ce(e) {
      for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? be(Object(s), !0).forEach(function (t) {
              Object(f["a"])(e, t, s[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
            : be(Object(s)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(s, t),
                );
              });
      }
      return e;
    }
    var De = {
        name: "TabSplash",
        computed: Ce(
          {},
          Object(w["c"])({
            hidePaymentSplash: W.getters.GET_HIDE_PAYMENT_SPLASH,
          }),
        ),
      },
      Ae = De,
      ye = Object(_["a"])(Ae, ge, Se, !1, null, null, null),
      Ie = ye.exports;
    function Oe(e, t) {
      var s = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        (t &&
          (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          s.push.apply(s, i));
      }
      return s;
    }
    function we(e) {
      for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Oe(Object(s), !0).forEach(function (t) {
              Object(f["a"])(e, t, s[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
            : Oe(Object(s)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(s, t),
                );
              });
      }
      return e;
    }
    var Ue = {
      name: "ScheduledResultsDisplay",
      mixins: [oe, S],
      components: { TabSplash: Ie },
      data: function () {
        return {
          noResults: !1,
          scheduledResults: [],
          requestPoint: this.$config.requestPoint,
          displayColumns: this.$config.exportDisplayColumns,
          shownColumns: {},
          isFormatOnly: !1,
        };
      },
      computed: we(
        we(
          {},
          Object(w["c"])({
            allowScheduledExport: W.getters.GET_ALLOW_SCHEDULED_EXPORT,
            username: W.getters.GET_USERNAME,
            canDeleteAny: W.getters.GET_CAN_DELETE_ANY,
            activeMemberNames: W.getters.GET_ACTIVE_MEMBER_NAMES,
          }),
        ),
        {},
        {
          numDataExports: function () {
            return this.scheduledResults.length;
          },
          columnFilters: function () {
            return this.displayColumns.filter(function (e) {
              return e.filterable;
            });
          },
          activeColumns: function () {
            return this.displayColumns.filter(function (e) {
              return e.active;
            });
          },
        },
      ),
      methods: we(
        we(
          {},
          Object(w["d"])({
            setEditId: W.mutations.SET_EDIT_ID,
            setEditOrigin: W.mutations.SET_EDIT_ORIGIN,
            setEditSummaryGroupBy: W.mutations.SET_EDIT_SUMMARY_GROUP_BY,
            setEditName: W.mutations.SET_EDIT_NAME,
            setEditEvents: W.mutations.SET_EDIT_EVENTS,
            setEditUsernames: W.mutations.SET_EDIT_USERNAMES,
            setEditSubaccounts: W.mutations.SET_EDIT_SUBACCOUNTS,
            setEditFrequency: W.mutations.SET_EDIT_FREQUENCY,
            setEditDatatype: W.mutations.SET_EDIT_DATATYPE,
            setEditRecipients: W.mutations.SET_EDIT_RECIPIENTS,
            setIncludeUsernamesFuture:
              W.mutations.SET_EDIT_INCLUDE_USERNAMES_FUTURE,
            setIncludeSubaccountsFuture:
              W.mutations.SET_EDIT_INCLUDE_SUBACCOUNTS_FUTURE,
            setEditOptionalAttachment: W.mutations.SET_EDIT_OPTIONAL_ATTACHMENT,
            setIsSaved: W.mutations.SET_IS_SAVED,
            setIsCreate: W.mutations.SET_IS_CREATE,
            setDisplayEdit: W.mutations.SET_DISPLAY_EDIT,
            setIsAdd: W.mutations.SET_IS_ADD,
          }),
        ),
        {},
        {
          updateScheuldedResults: function (e) {
            (e.forEach(function (e) {
              e.description = Te.a.decode(e.description);
            }),
              (this.scheduledResults = e),
              0 == e.length && (this.noResults = !0));
          },
          toggleReport: function (e) {
            (this.setEditId(e.id), this.setEditOrigin(e.origin));
            var t = e.summary_group_by;
            (void 0 == t && (t = "auth"),
              this.setEditSummaryGroupBy(t),
              this.setEditName(e.description),
              this.setEditFrequency(e.schedule_report_frequency),
              this.setEditDatatype(e.datatype),
              this.setEditRecipients(e.scheduled_export_recipients),
              this.setEditEvents(),
              void 0 != e.filter_events &&
                e.filter_events.length > 0 &&
                this.setEditEvents(e.filter_events),
              void 0 != e.events &&
                e.events.length > 0 &&
                this.setEditEvents(e.events),
              this.setEditUsernames(e.usernames),
              this.setEditSubaccounts(e.subaccounts),
              this.setIsCreate(!1),
              this.setIsSaved(!0),
              this.setDisplayEdit(!0),
              this.setIsAdd(!1),
              this.setIncludeUsernamesFuture(
                void 0 == e.usernames || 0 == e.usernames.length,
              ),
              this.setIncludeSubaccountsFuture(
                void 0 == e.subaccounts || 0 == e.subaccounts.length,
              ),
              this.setEditOptionalAttachment(e.optional_attachment));
          },
          windowClicked: function (e) {
            var t = ".dropdown-action-cell";
            (screen.width < 768 && (t = ".row-delete-result-wrapper"),
              T()(e.target).parents(t).length ||
                T()(".dropdown-menu").removeClass("is-active"));
          },
          displayFrequency: function (e) {
            switch (e) {
              case "1 day":
                return "Daily";
              case "7 days":
                return "Weekly";
              case "1 mon":
                return "Monthly";
              default:
                return "";
            }
          },
          displayDataType: function (e) {
            return "json" == e ? "ndjson" : e;
          },
          deleteExport: function (e) {
            var t = this,
              s = { id: e };
            (T()(".notice.main.error").empty().removeClass("visible"),
              T()(".dropdown-menu.dropdown-options.is-active").removeClass(
                "is-active",
              ),
              this.mixinAjax_delete(
                this.requestPoint,
                "delete-schedule",
                s,
                function () {
                  (HTML.set_time({
                    message: "Successfully deleted scheduled report",
                    message_class: "success",
                    status: "OK",
                  }),
                    t.$eventBus.$emit("mixin-search-has-changed"),
                    t.$eventBus.$emit("mixin-search-trigger"));
                },
                function (e) {
                  HTML.handleError(e.responseJSON);
                },
              ));
          },
          buildDescription: function (e) {
            var t,
              s = "";
            if (
              (void 0 != e.events && e.events.length > 0 && (t = e.events),
              void 0 != e.filter_events &&
                e.filter_events.length > 0 &&
                (t = e.filter_events),
              void 0 != t && t.length > 0)
            ) {
              var i = t.map(function (e) {
                var t = e.split("-").map(function (e) {
                  return e.charAt(0).toUpperCase() + e.slice(1);
                });
                return t.join(" ");
              });
              s = i.join(", ") + "; ";
            }
            return (
              void 0 != e.scheduled_export_recipients &&
                e.scheduled_export_recipients.length > 0 &&
                (s += e.scheduled_export_recipients.join(", ")),
              s
            );
          },
          getRecipientName: function (e) {
            var t = this.activeMemberNames[e];
            return null != t ? this.activeMemberNames[e].name : "";
          },
          getRecipientInitial: function (e) {
            return this.getRecipientName(e)
              .match(/(\b\S)?/g)
              .join("")
              .match(/(^\S|\S$)?/g)
              .join("")
              .toUpperCase();
          },
          getRecipientColourClass: function (e) {
            var t = this.activeMemberNames[e];
            return null != t
              ? "member-color-" + this.activeMemberNames[e].colour_id
              : "";
          },
          getRecipientAddress: function (e) {
            return null != this.activeMemberNames[e] ? e : "";
          },
          handleColumnToggle: function (e, t) {
            void 0 !== e && e.stopImmediatePropagation();
            var s = this.shownColumns[t.id];
            (this.$set(this.shownColumns, t.id, !s),
              this.$set(t, "active", !s),
              this.checkIfFormatOnly(),
              this.$eventBus.$emit("mixin-column-has-changed"),
              this.saveColumn());
          },
          checkIfFormatOnly: function () {
            var e = this,
              t = this.columnFilters.filter(function (t) {
                return e.shownColumns[t.id];
              }).length;
            this.isFormatOnly = 1 === t && this.shownColumns["format"];
          },
          isColumnActive: function (e) {
            var t = !1;
            return (
              this.activeColumns.forEach(function (s) {
                s.id == e && (t = !0);
              }),
              t
            );
          },
          saveColumn: function () {
            var e = this;
            this.columnIsSaving = !0;
            var t = !0,
              s = { shown_columns: JSON.stringify(this.shownColumns) };
            this.mixinAjax_put(
              this.requestPoint,
              "save-columns",
              s,
              function () {
                e.columnIsSaving = !1;
              },
              function () {
                e.columnIsSaving = !1;
              },
              t,
            );
          },
        },
      ),
      mounted: function () {
        var e = this;
        (T()(".page-content-wrapper .page-content").on(
          "click.Bst",
          this.windowClicked,
        ),
          this.$config.exportDisplayColumns.forEach(function (t) {
            var s = "show_data_export_" + t["id"] + "_col";
            (void 0 != PAGE_DATA.apMetadata &&
              "app_settings" in PAGE_DATA.apMetadata &&
              s in PAGE_DATA.apMetadata.app_settings &&
              e.$set(t, "active", PAGE_DATA.apMetadata.app_settings[s]),
              e.$set(e.shownColumns, t["id"], t["active"]));
          }),
          this.checkIfFormatOnly());
      },
    };
    T()(document).on("click", ".dropdown-action-toggler", function () {
      var e = T()(this);
      (e.parents(".dropdown-action-cell").toggleClass("popup-on"),
        T()(".dropdown-options").hasClass("is-active")
          ? setTimeout(function () {
              (e.removeClass("popup-active"),
                T()(".dropdown-options").removeClass("is-active"));
            }, 10)
          : setTimeout(function () {
              (e.addClass("popup-active"),
                e
                  .parents(".dropdown-action-cell")
                  .find(".dropdown-options")
                  .addClass("is-active"));
            }, 10));
    });
    var Re = Ue,
      ke = (s("4236"), Object(_["a"])(Re, me, fe, !1, null, "11b46214", null)),
      xe = ke.exports,
      je = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t;
        return s(
          "div",
          { staticClass: "report-add", attrs: { id: "scheduled_report" } },
          [
            s("div", { staticClass: "card-content" }, [
              s("form", { attrs: { id: "reports-edit" } }, [
                s("div", { staticClass: "form-group" }, [
                  s("label", { staticClass: "form-group-label" }, [
                    e._v("Page source"),
                  ]),
                  s("div", { staticClass: "form-group-content" }, [
                    s("div", { staticClass: "form-group-item" }, [
                      s(
                        "div",
                        { staticClass: "form-select-wrapper wrapper-small" },
                        [
                          s(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: e.origin,
                                  expression: "origin",
                                },
                              ],
                              staticClass: "form-control input-small",
                              on: {
                                change: [
                                  function (t) {
                                    var s = Array.prototype.filter
                                      .call(t.target.options, function (e) {
                                        return e.selected;
                                      })
                                      .map(function (e) {
                                        var t =
                                          "_value" in e ? e._value : e.value;
                                        return t;
                                      });
                                    e.origin = t.target.multiple ? s : s[0];
                                  },
                                  function (t) {
                                    return e.selectAll();
                                  },
                                ],
                              },
                            },
                            e._l(e.pageOptions, function (t) {
                              return s(
                                "option",
                                { key: t.value, domProps: { value: t.value } },
                                [
                                  e._v(
                                    "\n                  " +
                                      e._s(t.label) +
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
                        e._v(
                          "Report data will appear as it is displayed on the selected\n              page.",
                        ),
                      ]),
                      s("span", {
                        staticClass: "field-error",
                        staticStyle: { display: "none" },
                      }),
                    ]),
                  ]),
                ]),
                s("div", { staticClass: "form-group" }, [
                  s("label", { staticClass: "form-group-label" }, [
                    e._v("Name"),
                  ]),
                  s("div", { staticClass: "form-group-item" }, [
                    s("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.name,
                          expression: "name",
                        },
                      ],
                      staticClass: "form-control input-md",
                      attrs: {
                        type: "text",
                        placeholder: "Report name",
                        autocomplete: "off",
                      },
                      domProps: { value: e.name },
                      on: {
                        input: function (t) {
                          t.target.composing || (e.name = t.target.value);
                        },
                      },
                    }),
                    s("span", { staticClass: "field-info" }, [
                      e._v(
                        "Give your report a descriptive name to help you locate it from\n            your list of scheduled reports.",
                      ),
                    ]),
                    s(
                      "span",
                      {
                        staticClass: "field-error",
                        staticStyle: { display: "none" },
                      },
                      [e._v("error test")],
                    ),
                  ]),
                ]),
                "summary" == e.selectedOrigin
                  ? s("div", { staticClass: "form-group" }, [
                      s("label", { staticClass: "form-group-label" }, [
                        e._v("Filter"),
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
                                    value: e.summaryGroupBy,
                                    expression: "summaryGroupBy",
                                  },
                                ],
                                staticClass: "form-control input-md",
                                on: {
                                  change: [
                                    function (t) {
                                      var s = Array.prototype.filter
                                        .call(t.target.options, function (e) {
                                          return e.selected;
                                        })
                                        .map(function (e) {
                                          var t =
                                            "_value" in e ? e._value : e.value;
                                          return t;
                                        });
                                      e.summaryGroupBy = t.target.multiple
                                        ? s
                                        : s[0];
                                    },
                                    function (t) {
                                      return e.selectAll();
                                    },
                                  ],
                                },
                              },
                              e._l(e.summaryGroupByActiveOptions, function (t) {
                                return s(
                                  "option",
                                  {
                                    key: t.value,
                                    domProps: { value: t.value },
                                  },
                                  [
                                    e._v(
                                      "\n                  " +
                                        e._s(t.label) +
                                        "\n                ",
                                    ),
                                  ],
                                );
                              }),
                              0,
                            ),
                          ]),
                          s("span", {
                            staticClass: "field-error",
                            staticStyle: { display: "none" },
                          }),
                        ]),
                      ]),
                    ])
                  : e._e(),
                "activity" == e.selectedOrigin ||
                "suppressions" == e.selectedOrigin
                  ? s("div", { staticClass: "form-group" }, [
                      s("label", { staticClass: "form-group-label" }, [
                        e._v("Events to include"),
                      ]),
                      s("div", { staticClass: "form-group-item" }, [
                        s(
                          "div",
                          {
                            ref: "eventsDropdownContainer",
                            staticClass:
                              "labels-dropdown-container labels-events",
                            on: {
                              focusout: function (t) {
                                return e.handleDropdownFocusOut("event");
                              },
                            },
                          },
                          [
                            s("div", { staticClass: "labels-list" }, [
                              s(
                                "ul",
                                {
                                  staticClass:
                                    "labels-active form-select-wrapper",
                                  class: { "is-focus": e.isEventsFocused },
                                  attrs: { tabindex: "0" },
                                  on: {
                                    focus: function (t) {
                                      e.isEventsFocused = !0;
                                    },
                                    blur: function (t) {
                                      e.isEventsFocused = !1;
                                    },
                                    keyup: [
                                      function (t) {
                                        return !t.type.indexOf("key") &&
                                          e._k(
                                            t.keyCode,
                                            "enter",
                                            13,
                                            t.key,
                                            "Enter",
                                          )
                                          ? null
                                          : e.toggleDropdown(t);
                                      },
                                      function (t) {
                                        return !t.type.indexOf("key") &&
                                          e._k(t.keyCode, "down", 40, t.key, [
                                            "Down",
                                            "ArrowDown",
                                          ])
                                          ? null
                                          : e.openDropdown("event");
                                      },
                                    ],
                                  },
                                },
                                [
                                  e._l(e.selectedEvents, function (t) {
                                    return s("li", { key: t.id }, [
                                      s(
                                        "span",
                                        {
                                          class: [
                                            "item-label",
                                            "long-event-indicator",
                                            t.id,
                                          ],
                                        },
                                        [
                                          s(
                                            "span",
                                            {
                                              staticClass: "item-delete",
                                              on: {
                                                click: function (s) {
                                                  return e.toggleEventDelete(t);
                                                },
                                              },
                                            },
                                            [e._v("×")],
                                          ),
                                        ],
                                      ),
                                    ]);
                                  }),
                                  0 === e.selectedEvents.length
                                    ? s(
                                        "li",
                                        { staticClass: "dropdown-placeholder" },
                                        [
                                          e._v(
                                            "\n                  All events\n                ",
                                          ),
                                        ],
                                      )
                                    : e._e(),
                                  s("li", {
                                    staticClass: "dropdown-hotspot",
                                    on: { click: e.toggleDropdown },
                                  }),
                                ],
                                2,
                              ),
                              s(
                                "ul",
                                {
                                  ref: "dropdown",
                                  staticClass:
                                    "labels-dropdown labels-checkbox",
                                  class: {
                                    "is-active": e.eventsDropdownActive,
                                  },
                                  on: { click: e.handleClickInsideDropdown },
                                },
                                [
                                  s(
                                    "li",
                                    {
                                      staticClass:
                                        "indicators-filter toggle-all",
                                      attrs: {
                                        tabindex: e.eventsDropdownActive
                                          ? "0"
                                          : "-1",
                                      },
                                      on: {
                                        click: function (t) {
                                          return e.toggleAllEvents();
                                        },
                                      },
                                    },
                                    [
                                      s(
                                        "div",
                                        {
                                          staticClass:
                                            "event-indicator default",
                                        },
                                        [
                                          s("div", { staticClass: "checker" }, [
                                            s(
                                              "span",
                                              {
                                                staticClass: "checker-box",
                                                class: e.eventsCheckboxState,
                                              },
                                              [
                                                s("input", {
                                                  attrs: {
                                                    type: "checkbox",
                                                    name: "toggle-all",
                                                    value: "toggle-all",
                                                  },
                                                }),
                                              ],
                                            ),
                                          ]),
                                          s(
                                            "span",
                                            {
                                              staticClass:
                                                "indicator-copy toggle-copy",
                                            },
                                            [
                                              e._v(
                                                e._s(
                                                  "checked" ===
                                                    e.eventsCheckboxState
                                                    ? "Deselect all"
                                                    : "Select all",
                                                ),
                                              ),
                                            ],
                                          ),
                                        ],
                                      ),
                                    ],
                                  ),
                                  e._l(e.editEvents, function (t) {
                                    return s(
                                      "li",
                                      {
                                        key: t.id,
                                        ref: "dropdownItem",
                                        refInFor: !0,
                                        attrs: {
                                          tabindex: e.eventsDropdownActive
                                            ? "0"
                                            : "-1",
                                        },
                                        on: {
                                          click: function (s) {
                                            return e.toggleEvent(t);
                                          },
                                          keydown: function (s) {
                                            return !s.type.indexOf("key") &&
                                              e._k(
                                                s.keyCode,
                                                "enter",
                                                13,
                                                s.key,
                                                "Enter",
                                              )
                                              ? null
                                              : e.toggleEvent(t);
                                          },
                                        },
                                      },
                                      [
                                        s(
                                          "div",
                                          { class: "event-indicator " + t.id },
                                          [
                                            s(
                                              "div",
                                              { staticClass: "checker" },
                                              [
                                                s(
                                                  "span",
                                                  {
                                                    class: {
                                                      "checker-box": !0,
                                                      checked: t.checked,
                                                    },
                                                  },
                                                  [
                                                    s("input", {
                                                      attrs: {
                                                        type: "checkbox",
                                                      },
                                                      domProps: { value: t.id },
                                                    }),
                                                  ],
                                                ),
                                              ],
                                            ),
                                            s("span", [
                                              e._v(
                                                "\n                      " +
                                                  e._s(t.title) +
                                                  "\n                    ",
                                              ),
                                            ]),
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
                        s("span", { staticClass: "field-info" }, [
                          e._v(
                            "Select the events to be included in this scheduled report.",
                          ),
                        ]),
                      ]),
                    ])
                  : e._e(),
                "activity" == e.selectedOrigin ||
                ("summary" == e.selectedOrigin &&
                  "auth" == e.selectedSummaryGroupBy)
                  ? s("div", { staticClass: "form-group" }, [
                      s("label", { staticClass: "form-group-label" }, [
                        e._v(e._s(e.subaccountsLabel)),
                      ]),
                      s("div", { staticClass: "form-group-item" }, [
                        s(
                          "div",
                          {
                            ref: "usersDropdownContainer",
                            staticClass:
                              "form-control input-inline labels-dropdown-container tags-email",
                            class: [
                              { "is-focus": e.isUsersFocused },
                              {
                                "is-warning":
                                  0 === e.selectedUsersCount &&
                                  !e.usersDropdownActive,
                              },
                            ],
                            attrs: { tabindex: "0" },
                            on: {
                              focus: function (t) {
                                e.isUsersFocused = !0;
                              },
                              blur: function (t) {
                                e.isUsersFocused = !1;
                              },
                              focusout: function (t) {
                                return e.handleDropdownFocusOut("user");
                              },
                              keyup: [
                                function (t) {
                                  return !t.type.indexOf("key") &&
                                    e._k(t.keyCode, "enter", 13, t.key, "Enter")
                                    ? null
                                    : e.toggleUsersDropdown(t);
                                },
                                function (t) {
                                  return !t.type.indexOf("key") &&
                                    e._k(t.keyCode, "down", 40, t.key, [
                                      "Down",
                                      "ArrowDown",
                                    ])
                                    ? null
                                    : e.openDropdown("user");
                                },
                              ],
                            },
                          },
                          [
                            s("div", { staticClass: "users-list" }, [
                              s("div", {
                                staticClass: "caret-fixed",
                                class: {
                                  "scroll-push": e.usersCaretFixedScrollPush,
                                },
                              }),
                              s(
                                "ul",
                                {
                                  staticClass:
                                    "form-select-wrapper recipients-active",
                                },
                                [
                                  s(
                                    "li",
                                    { staticClass: "dropdown-placeholder" },
                                    [e._v(e._s(e.userSelectionText))],
                                  ),
                                  s("li", {
                                    staticClass: "dropdown-hotspot",
                                    on: { click: e.toggleUsersDropdown },
                                  }),
                                ],
                              ),
                              e.selectedUsernames.length > 0
                                ? s(
                                    "ul",
                                    {
                                      ref: "usersDropdown",
                                      staticClass:
                                        "labels-dropdown labels-checkbox",
                                      class: {
                                        "is-active": e.usersDropdownActive,
                                      },
                                      on: {
                                        click: e.handleClickInsideUsersDropdown,
                                      },
                                    },
                                    [
                                      e._m(0),
                                      e.selectedSubaccounts.length > 1
                                        ? s(
                                            "li",
                                            {
                                              staticClass:
                                                "indicators-filter toggle-all toggle-global",
                                              on: { click: e.toggleAllUsers },
                                            },
                                            [
                                              s(
                                                "div",
                                                {
                                                  staticClass:
                                                    "event-indicator default",
                                                },
                                                [
                                                  s(
                                                    "div",
                                                    { staticClass: "checker" },
                                                    [
                                                      s(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "checker-box",
                                                          class:
                                                            e.overallUsersCheckboxState,
                                                        },
                                                        [
                                                          s("input", {
                                                            attrs: {
                                                              type: "checkbox",
                                                              name: "toggle-all",
                                                              value:
                                                                "toggle-all",
                                                            },
                                                          }),
                                                        ],
                                                      ),
                                                    ],
                                                  ),
                                                  s(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "indicator-copy toggle-copy",
                                                    },
                                                    [
                                                      e._v(
                                                        e._s(
                                                          "checked" ===
                                                            e.overallUsersCheckboxState
                                                            ? "Deselect all"
                                                            : "Select all",
                                                        ),
                                                      ),
                                                    ],
                                                  ),
                                                ],
                                              ),
                                            ],
                                          )
                                        : e._e(),
                                      e._l(e.selectedSubaccounts, function (t) {
                                        return s("li", { key: t.record_id }, [
                                          s(
                                            "ul",
                                            [
                                              s(
                                                "li",
                                                {
                                                  class: {
                                                    "indicators-filter-main":
                                                      !0,
                                                    "indicators-filter": !0,
                                                    selected: t.checked,
                                                  },
                                                  attrs: {
                                                    tabindex:
                                                      e.usersDropdownActive
                                                        ? "0"
                                                        : "-1",
                                                  },
                                                  on: {
                                                    click: function (s) {
                                                      return e.toggleSubaccount(
                                                        t,
                                                      );
                                                    },
                                                    keydown: function (s) {
                                                      return !s.type.indexOf(
                                                        "key",
                                                      ) &&
                                                        e._k(
                                                          s.keyCode,
                                                          "enter",
                                                          13,
                                                          s.key,
                                                          "Enter",
                                                        )
                                                        ? null
                                                        : e.toggleSubaccount(t);
                                                    },
                                                  },
                                                },
                                                [
                                                  s(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "event-indicator default",
                                                    },
                                                    [
                                                      s(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "checker",
                                                        },
                                                        [
                                                          s(
                                                            "span",
                                                            {
                                                              class: {
                                                                "checker-box":
                                                                  !0,
                                                                checked:
                                                                  "checked" ===
                                                                  e.subaccountCheckboxState(
                                                                    t,
                                                                  ),
                                                                indeterminate:
                                                                  "indeterminate" ===
                                                                  e.subaccountCheckboxState(
                                                                    t,
                                                                  ),
                                                              },
                                                            },
                                                            [
                                                              s("input", {
                                                                attrs: {
                                                                  type: "checkbox",
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    t.record_id,
                                                                },
                                                              }),
                                                            ],
                                                          ),
                                                        ],
                                                      ),
                                                      s("span", [
                                                        e.selectedSubaccounts
                                                          .length > 1
                                                          ? s("span", [
                                                              e._v(
                                                                e._s(t.name),
                                                              ),
                                                            ])
                                                          : s("span", [
                                                              e._v(
                                                                "Select All",
                                                              ),
                                                            ]),
                                                      ]),
                                                    ],
                                                  ),
                                                  e.hasNoUsers(t.record_id)
                                                    ? s(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "indicators-filter-info",
                                                        },
                                                        [
                                                          s("em", [
                                                            e._v(
                                                              "No users currently in this subaccount",
                                                            ),
                                                          ]),
                                                        ],
                                                      )
                                                    : e._e(),
                                                ],
                                              ),
                                              e._l(
                                                e.smtpUsersFiltered(
                                                  t.record_id,
                                                ),
                                                function (t) {
                                                  return s(
                                                    "li",
                                                    {
                                                      key: t.username,
                                                      ref: "SMTPUsersDropdownItem",
                                                      refInFor: !0,
                                                      class: {
                                                        "indicators-filter": !0,
                                                        selected: t.checked,
                                                      },
                                                      attrs: {
                                                        tabindex:
                                                          e.usersDropdownActive
                                                            ? "0"
                                                            : "-1",
                                                      },
                                                      on: {
                                                        click: function (s) {
                                                          return e.toggleUsername(
                                                            t,
                                                          );
                                                        },
                                                        keydown: function (s) {
                                                          return !s.type.indexOf(
                                                            "key",
                                                          ) &&
                                                            e._k(
                                                              s.keyCode,
                                                              "enter",
                                                              13,
                                                              s.key,
                                                              "Enter",
                                                            )
                                                            ? null
                                                            : e.toggleUsername(
                                                                t,
                                                              );
                                                        },
                                                      },
                                                    },
                                                    [
                                                      s(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "event-indicator default",
                                                        },
                                                        [
                                                          s(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "checker",
                                                            },
                                                            [
                                                              s(
                                                                "span",
                                                                {
                                                                  class: {
                                                                    "checker-box":
                                                                      !0,
                                                                    checked:
                                                                      t.checked,
                                                                  },
                                                                },
                                                                [
                                                                  s("input", {
                                                                    attrs: {
                                                                      type: "checkbox",
                                                                    },
                                                                    domProps: {
                                                                      value:
                                                                        t.username,
                                                                    },
                                                                  }),
                                                                ],
                                                              ),
                                                            ],
                                                          ),
                                                          s("span", [
                                                            e._v(
                                                              "\n                          " +
                                                                e._s(t.label) +
                                                                "\n                        ",
                                                            ),
                                                          ]),
                                                        ],
                                                      ),
                                                    ],
                                                  );
                                                },
                                              ),
                                              e._l(
                                                e.ipUsersFiltered(t.record_id),
                                                function (t) {
                                                  return s(
                                                    "li",
                                                    {
                                                      key: t.username,
                                                      ref: "IPsDropdownItem",
                                                      refInFor: !0,
                                                      class: {
                                                        "indicators-filter": !0,
                                                        selected: t.checked,
                                                      },
                                                      attrs: {
                                                        tabindex:
                                                          e.usersDropdownActive
                                                            ? "0"
                                                            : "-1",
                                                      },
                                                      on: {
                                                        click: function (s) {
                                                          return e.toggleUsername(
                                                            t,
                                                          );
                                                        },
                                                        keydown: function (s) {
                                                          return !s.type.indexOf(
                                                            "key",
                                                          ) &&
                                                            e._k(
                                                              s.keyCode,
                                                              "enter",
                                                              13,
                                                              s.key,
                                                              "Enter",
                                                            )
                                                            ? null
                                                            : e.toggleUsername(
                                                                t,
                                                              );
                                                        },
                                                      },
                                                    },
                                                    [
                                                      s(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "event-indicator default",
                                                        },
                                                        [
                                                          s(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "checker",
                                                            },
                                                            [
                                                              s(
                                                                "span",
                                                                {
                                                                  class: {
                                                                    "checker-box":
                                                                      !0,
                                                                    checked:
                                                                      t.checked,
                                                                  },
                                                                },
                                                                [
                                                                  s("input", {
                                                                    attrs: {
                                                                      type: "checkbox",
                                                                    },
                                                                    domProps: {
                                                                      value:
                                                                        t.username,
                                                                    },
                                                                  }),
                                                                ],
                                                              ),
                                                            ],
                                                          ),
                                                          s("span", [
                                                            e._v(
                                                              "\n                          " +
                                                                e._s(t.label) +
                                                                "\n                        ",
                                                            ),
                                                          ]),
                                                        ],
                                                      ),
                                                    ],
                                                  );
                                                },
                                              ),
                                              e._l(
                                                e.apiUsersFiltered(t.record_id),
                                                function (t) {
                                                  return s(
                                                    "li",
                                                    {
                                                      key: t.username,
                                                      ref: "APIKeysDropdownItem",
                                                      refInFor: !0,
                                                      class: {
                                                        "indicators-filter": !0,
                                                        selected: t.checked,
                                                      },
                                                      attrs: {
                                                        tabindex:
                                                          e.usersDropdownActive
                                                            ? "0"
                                                            : "-1",
                                                      },
                                                      on: {
                                                        click: function (s) {
                                                          return e.toggleUsername(
                                                            t,
                                                          );
                                                        },
                                                        keydown: function (s) {
                                                          return !s.type.indexOf(
                                                            "key",
                                                          ) &&
                                                            e._k(
                                                              s.keyCode,
                                                              "enter",
                                                              13,
                                                              s.key,
                                                              "Enter",
                                                            )
                                                            ? null
                                                            : e.toggleUsername(
                                                                t,
                                                              );
                                                        },
                                                      },
                                                    },
                                                    [
                                                      s(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "event-indicator default",
                                                        },
                                                        [
                                                          s(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "checker",
                                                            },
                                                            [
                                                              s(
                                                                "span",
                                                                {
                                                                  class: {
                                                                    "checker-box":
                                                                      !0,
                                                                    checked:
                                                                      t.checked,
                                                                  },
                                                                },
                                                                [
                                                                  s("input", {
                                                                    attrs: {
                                                                      type: "checkbox",
                                                                    },
                                                                    domProps: {
                                                                      value:
                                                                        t.username,
                                                                    },
                                                                  }),
                                                                ],
                                                              ),
                                                            ],
                                                          ),
                                                          s("span", [
                                                            e._v(
                                                              "\n                          " +
                                                                e._s(t.label) +
                                                                "\n                        ",
                                                            ),
                                                          ]),
                                                        ],
                                                      ),
                                                    ],
                                                  );
                                                },
                                              ),
                                            ],
                                            2,
                                          ),
                                        ]);
                                      }),
                                    ],
                                    2,
                                  )
                                : e._e(),
                            ]),
                          ],
                        ),
                        s("span", { staticClass: "field-info" }, [
                          e._v("\n            Select the"),
                          e.selectedSubaccounts.length > 1
                            ? s("span", [e._v(" subaccounts and")])
                            : e._e(),
                          e._v(
                            " users to be included in this scheduled report.\n          ",
                          ),
                        ]),
                        s("div", { staticClass: "form-group-options" }, [
                          e.selectedSubaccounts.length > 1
                            ? s(
                                "div",
                                {
                                  staticClass: "event-indicator default",
                                  class: { disabled: !e.allSubaccountsChecked },
                                  on: {
                                    click: function (t) {
                                      e.subaccountsIncludeFuture =
                                        !e.subaccountsIncludeFuture;
                                    },
                                  },
                                },
                                [
                                  s("div", { staticClass: "checker" }, [
                                    s(
                                      "span",
                                      {
                                        class: {
                                          "checker-box": !0,
                                          checked:
                                            e.allSubaccountsChecked &&
                                            e.subaccountsIncludeFuture,
                                        },
                                      },
                                      [
                                        s("input", {
                                          attrs: { type: "checkbox" },
                                        }),
                                      ],
                                    ),
                                  ]),
                                  s("span", { staticClass: "indicator-copy" }, [
                                    e._v(
                                      "\n                Automatically include future subaccounts\n              ",
                                    ),
                                  ]),
                                ],
                              )
                            : e._e(),
                          s(
                            "div",
                            {
                              staticClass: "event-indicator default",
                              class: { disabled: !e.allUsersChecked },
                              on: {
                                click: function (t) {
                                  e.usernamesIncludeFuture =
                                    !e.usernamesIncludeFuture;
                                },
                              },
                            },
                            [
                              s("div", { staticClass: "checker" }, [
                                s(
                                  "span",
                                  {
                                    class: {
                                      "checker-box": !0,
                                      checked:
                                        e.allUsersChecked &&
                                        e.usernamesIncludeFuture,
                                    },
                                  },
                                  [s("input", { attrs: { type: "checkbox" } })],
                                ),
                              ]),
                              s("span", { staticClass: "indicator-copy" }, [
                                e._v(
                                  "\n                Automatically include future users\n              ",
                                ),
                              ]),
                            ],
                          ),
                        ]),
                        s("span", {
                          staticClass: "field-error",
                          staticStyle: { display: "none" },
                        }),
                      ]),
                    ])
                  : e._e(),
                e.selectedSubaccounts.length > 1 &&
                "summary" == e.selectedOrigin &&
                "auth" != e.selectedSummaryGroupBy &&
                "subaccount" != e.selectedSummaryGroupBy
                  ? s("div", { staticClass: "form-group" }, [
                      s("label", { staticClass: "form-group-label" }, [
                        e._v("Subaccounts"),
                      ]),
                      s("div", { staticClass: "form-group-item" }, [
                        s(
                          "div",
                          {
                            ref: "usersDropdownContainer",
                            staticClass:
                              "form-control input-inline labels-dropdown-container tags-email",
                            class: [
                              { "is-focus": e.isUsersFocused },
                              {
                                "is-warning":
                                  0 ===
                                    e.selectedSubaccounts.filter(function (e) {
                                      return e.checked;
                                    }).length && !e.usersDropdownActive,
                              },
                            ],
                            attrs: { tabindex: "0" },
                            on: {
                              focus: function (t) {
                                e.isUsersFocused = !0;
                              },
                              blur: function (t) {
                                e.isUsersFocused = !1;
                              },
                              focusout: function (t) {
                                return e.handleDropdownFocusOut("user");
                              },
                              keyup: [
                                function (t) {
                                  return !t.type.indexOf("key") &&
                                    e._k(t.keyCode, "enter", 13, t.key, "Enter")
                                    ? null
                                    : e.toggleUsersDropdown(t);
                                },
                                function (t) {
                                  return !t.type.indexOf("key") &&
                                    e._k(t.keyCode, "down", 40, t.key, [
                                      "Down",
                                      "ArrowDown",
                                    ])
                                    ? null
                                    : e.openDropdown("user");
                                },
                              ],
                            },
                          },
                          [
                            s("div", { staticClass: "users-list" }, [
                              s("div", {
                                staticClass: "caret-fixed",
                                class: {
                                  "scroll-push": e.usersCaretFixedScrollPush,
                                },
                              }),
                              s(
                                "ul",
                                {
                                  staticClass:
                                    "form-select-wrapper recipients-active",
                                },
                                [
                                  s(
                                    "li",
                                    { staticClass: "dropdown-placeholder" },
                                    [e._v(e._s(e.subaccountSelectionText))],
                                  ),
                                  s("li", {
                                    staticClass: "dropdown-hotspot",
                                    on: { click: e.toggleUsersDropdown },
                                  }),
                                ],
                              ),
                              s(
                                "ul",
                                {
                                  ref: "usersDropdown",
                                  staticClass:
                                    "labels-dropdown labels-checkbox",
                                  class: { "is-active": e.usersDropdownActive },
                                  on: {
                                    click: e.handleClickInsideUsersDropdown,
                                  },
                                },
                                [
                                  e._m(1),
                                  s(
                                    "li",
                                    {
                                      staticClass: "indicators-filter",
                                      on: { click: e.toggleAllUsers },
                                    },
                                    [
                                      s(
                                        "div",
                                        {
                                          staticClass:
                                            "event-indicator default",
                                        },
                                        [
                                          s("div", { staticClass: "checker" }, [
                                            s(
                                              "span",
                                              {
                                                staticClass: "checker-box",
                                                class:
                                                  e.overallUsersCheckboxState,
                                              },
                                              [
                                                s("input", {
                                                  attrs: {
                                                    type: "checkbox",
                                                    name: "toggle-all",
                                                    value: "toggle-all",
                                                  },
                                                }),
                                              ],
                                            ),
                                          ]),
                                          s(
                                            "span",
                                            {
                                              staticClass:
                                                "indicator-copy toggle-copy",
                                            },
                                            [
                                              e._v(
                                                e._s(
                                                  "checked" ===
                                                    e.overallUsersCheckboxState
                                                    ? "Deselect all"
                                                    : "Select all",
                                                ),
                                              ),
                                            ],
                                          ),
                                        ],
                                      ),
                                    ],
                                  ),
                                  e._l(e.selectedSubaccounts, function (t) {
                                    return s(
                                      "li",
                                      {
                                        key: t.record_id,
                                        class: {
                                          "indicators-filter-main": !0,
                                          "indicators-filter": !0,
                                          selected: t.checked,
                                        },
                                        attrs: {
                                          tabindex: e.usersDropdownActive
                                            ? "0"
                                            : "-1",
                                        },
                                        on: {
                                          click: function (s) {
                                            return e.toggleSubaccount(t);
                                          },
                                          keydown: function (s) {
                                            return !s.type.indexOf("key") &&
                                              e._k(
                                                s.keyCode,
                                                "enter",
                                                13,
                                                s.key,
                                                "Enter",
                                              )
                                              ? null
                                              : e.toggleSubaccount(t);
                                          },
                                        },
                                      },
                                      [
                                        s(
                                          "div",
                                          {
                                            staticClass:
                                              "event-indicator default",
                                          },
                                          [
                                            s(
                                              "div",
                                              { staticClass: "checker" },
                                              [
                                                s(
                                                  "span",
                                                  {
                                                    class: {
                                                      "checker-box": !0,
                                                      checked: t.checked,
                                                    },
                                                  },
                                                  [
                                                    s("input", {
                                                      attrs: {
                                                        type: "checkbox",
                                                      },
                                                      domProps: {
                                                        value: t.record_id,
                                                      },
                                                    }),
                                                  ],
                                                ),
                                              ],
                                            ),
                                            s("span", [
                                              s("span", [e._v(e._s(t.name))]),
                                            ]),
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
                        s("span", { staticClass: "field-info" }, [
                          e._v(
                            "\n            Select the subaccounts to be included in this scheduled report.\n          ",
                          ),
                        ]),
                        s("div", { staticClass: "form-group-options" }, [
                          e.selectedSubaccounts.length > 1
                            ? s(
                                "div",
                                {
                                  staticClass: "event-indicator default",
                                  class: { disabled: !e.allSubaccountsChecked },
                                  on: {
                                    click: function (t) {
                                      e.subaccountsIncludeFuture =
                                        !e.subaccountsIncludeFuture;
                                    },
                                  },
                                },
                                [
                                  s("div", { staticClass: "checker" }, [
                                    s(
                                      "span",
                                      {
                                        class: {
                                          "checker-box": !0,
                                          checked:
                                            e.allSubaccountsChecked &&
                                            e.subaccountsIncludeFuture,
                                        },
                                      },
                                      [
                                        s("input", {
                                          attrs: { type: "checkbox" },
                                        }),
                                      ],
                                    ),
                                  ]),
                                  s("span", { staticClass: "indicator-copy" }, [
                                    e._v(
                                      "\n                Automatically include future subaccounts\n              ",
                                    ),
                                  ]),
                                ],
                              )
                            : e._e(),
                        ]),
                        s("span", {
                          staticClass: "field-error",
                          staticStyle: { display: "none" },
                        }),
                      ]),
                    ])
                  : e._e(),
                s("div", { staticClass: "form-group" }, [
                  s("label", { staticClass: "form-group-label" }, [
                    e._v("Recipients"),
                  ]),
                  s("div", { staticClass: "form-group-item" }, [
                    s(
                      "div",
                      {
                        ref: "recipientsDropdownContainer",
                        staticClass:
                          "form-control input-inline labels-dropdown-container tags-email",
                        class: { "is-focus": e.isFocused },
                        attrs: { tabindex: "0" },
                        on: {
                          focus: function (t) {
                            e.isFocused = !0;
                          },
                          blur: function (t) {
                            e.isFocused = !1;
                          },
                          focusout: function (t) {
                            return e.handleDropdownFocusOut("recipient");
                          },
                          keyup: [
                            function (t) {
                              return !t.type.indexOf("key") &&
                                e._k(t.keyCode, "enter", 13, t.key, "Enter")
                                ? null
                                : e.toggleRecipientsDropdown(t);
                            },
                            function (t) {
                              return !t.type.indexOf("key") &&
                                e._k(t.keyCode, "down", 40, t.key, [
                                  "Down",
                                  "ArrowDown",
                                ])
                                ? null
                                : e.openDropdown("recipient");
                            },
                          ],
                        },
                      },
                      [
                        s("div", { staticClass: "recipients-list" }, [
                          s(
                            "ul",
                            {
                              staticClass:
                                "form-select-wrapper recipients-active",
                            },
                            [
                              e._l(e.recipients, function (t, i) {
                                return s("li", { key: t }, [
                                  s(
                                    "span",
                                    {
                                      staticClass:
                                        "long-event-indicator item-label recipient",
                                    },
                                    [
                                      e._v(
                                        "\n                    " +
                                          e._s(t) +
                                          "\n                    ",
                                      ),
                                      s(
                                        "span",
                                        {
                                          staticClass: "item-delete",
                                          on: {
                                            click: function (t) {
                                              return e.removeRecipient(i);
                                            },
                                          },
                                        },
                                        [e._v("×")],
                                      ),
                                    ],
                                  ),
                                ]);
                              }),
                              s("li", {
                                staticClass: "dropdown-hotspot",
                                on: { click: e.toggleRecipientsDropdown },
                              }),
                            ],
                            2,
                          ),
                          s(
                            "ul",
                            {
                              ref: "recipientsDropdown",
                              staticClass: "labels-dropdown",
                              class: {
                                "is-active": e.recipientsDropdownActive,
                              },
                              on: {
                                click: e.handleClickInsideRecipientsDropdown,
                              },
                            },
                            e._l(e.displayTeamMembers, function (t) {
                              return s(
                                "li",
                                {
                                  key: t,
                                  ref: "recipientsDropdownItem",
                                  refInFor: !0,
                                  attrs: {
                                    tabindex: e.recipientsDropdownActive
                                      ? "0"
                                      : "-1",
                                  },
                                  on: {
                                    click: function (s) {
                                      return e.addRecipient(t);
                                    },
                                    keydown: function (s) {
                                      return !s.type.indexOf("key") &&
                                        e._k(
                                          s.keyCode,
                                          "enter",
                                          13,
                                          s.key,
                                          "Enter",
                                        )
                                        ? null
                                        : e.addRecipient(t);
                                    },
                                  },
                                },
                                [
                                  e._v(
                                    "\n                  " +
                                      e._s(t) +
                                      "\n                ",
                                  ),
                                ],
                              );
                            }),
                            0,
                          ),
                        ]),
                      ],
                    ),
                    s("span", { staticClass: "field-info" }, [
                      e._v("\n            Choose from\n            "),
                      s(
                        "span",
                        { staticClass: "tooltip-container tooltip-up" },
                        [
                          s(
                            "span",
                            { class: { "field-info-tooltip": e.isNotOwner } },
                            [e._v("available team members")],
                          ),
                          e.isNotOwner
                            ? s("span", { staticClass: "tooltip-baloon" }, [
                                e._v(
                                  "You can only add team members with a specific level (" +
                                    e._s(e.actingRoleLevel) +
                                    ") or below to scheduled reports. If you'd like to include\n                team members with a higher level, the report must be created\n                by someone with that particular level.",
                                ),
                              ])
                            : e._e(),
                        ],
                      ),
                      e._v(
                        "\n            who will receive this scheduled report at the frequency specified\n            below.\n          ",
                      ),
                    ]),
                    s("span", {
                      staticClass: "field-error",
                      staticStyle: { display: "none" },
                    }),
                  ]),
                ]),
                s("div", { staticClass: "form-group" }, [
                  s("label", { staticClass: "form-group-label" }, [
                    e._v("Frequency"),
                  ]),
                  s("div", { staticClass: "form-group-content" }, [
                    s("div", { staticClass: "form-group-item" }, [
                      s(
                        "div",
                        { staticClass: "form-select-wrapper wrapper-small" },
                        [
                          s(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: e.frequency,
                                  expression: "frequency",
                                },
                              ],
                              staticClass: "form-control input-small",
                              on: {
                                change: function (t) {
                                  var s = Array.prototype.filter
                                    .call(t.target.options, function (e) {
                                      return e.selected;
                                    })
                                    .map(function (e) {
                                      var t =
                                        "_value" in e ? e._value : e.value;
                                      return t;
                                    });
                                  e.frequency = t.target.multiple ? s : s[0];
                                },
                              },
                            },
                            [
                              s("option", { attrs: { value: "1 day" } }, [
                                e._v("Daily"),
                              ]),
                              s("option", { attrs: { value: "7 days" } }, [
                                e._v("Weekly"),
                              ]),
                              s("option", { attrs: { value: "1 mon" } }, [
                                e._v("Monthly"),
                              ]),
                            ],
                          ),
                        ],
                      ),
                      s("span", { staticClass: "field-info" }, [
                        e._v(
                          "\n              Based on your selection, a new report will send\n              ",
                        ),
                        s("span", { staticClass: "info-highlight" }, [
                          e._v(
                            "\n                " +
                              e._s(e.frequencyText) +
                              ", around 00:30:00 UTC" +
                              e._s(e.scheduleTime) +
                              ",\n                and include data from the previous" +
                              e._s(e.frequencySize) +
                              ".",
                          ),
                        ]),
                      ]),
                      s("span", {
                        staticClass: "field-error",
                        staticStyle: { display: "none" },
                      }),
                    ]),
                  ]),
                ]),
                s("div", { staticClass: "form-group" }, [
                  s("label", { staticClass: "form-group-label" }, [
                    e._v("Data format"),
                  ]),
                  s("div", { staticClass: "form-group-content" }, [
                    s("div", { staticClass: "form-group-item" }, [
                      s(
                        "div",
                        { staticClass: "form-select-wrapper wrapper-small" },
                        [
                          s(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: e.datatype,
                                  expression: "datatype",
                                },
                              ],
                              staticClass: "form-control input-small",
                              on: {
                                change: function (t) {
                                  var s = Array.prototype.filter
                                    .call(t.target.options, function (e) {
                                      return e.selected;
                                    })
                                    .map(function (e) {
                                      var t =
                                        "_value" in e ? e._value : e.value;
                                      return t;
                                    });
                                  e.datatype = t.target.multiple ? s : s[0];
                                },
                              },
                            },
                            [
                              s("option", { attrs: { value: "csv" } }, [
                                e._v("CSV"),
                              ]),
                              s("option", { attrs: { value: "xml" } }, [
                                e._v("XML"),
                              ]),
                              s("option", { attrs: { value: "json" } }, [
                                e._v("NDJSON"),
                              ]),
                            ],
                          ),
                        ],
                      ),
                      s("span", { staticClass: "field-info" }, [
                        e._v("Choose the data format for your report."),
                      ]),
                      s("span", {
                        staticClass: "field-error",
                        staticStyle: { display: "none" },
                      }),
                    ]),
                  ]),
                ]),
                s("div", { staticClass: "form-group" }, [
                  s("label", { staticClass: "form-group-label" }, [
                    e._v("Attachment"),
                  ]),
                  s("div", { staticClass: "form-group-content" }, [
                    s("div", { staticClass: "form-group-item" }, [
                      s("div", { staticClass: "wrapper-small" }, [
                        s(
                          "div",
                          {
                            staticClass: "event-indicator default",
                            on: {
                              click: function (t) {
                                e.optionalAttachment = !e.optionalAttachment;
                              },
                            },
                          },
                          [
                            s("div", { staticClass: "checker" }, [
                              s(
                                "span",
                                {
                                  class: {
                                    "checker-box": !0,
                                    checked: e.optionalAttachment,
                                  },
                                },
                                [s("input", { attrs: { type: "checkbox" } })],
                              ),
                            ]),
                            s(
                              "span",
                              { staticClass: "field-info indicator-copy" },
                              [
                                e._v(
                                  "The exported file will also be attached to the report email.",
                                ),
                              ],
                            ),
                          ],
                        ),
                      ]),
                      s("span", {
                        staticClass: "field-error",
                        staticStyle: { display: "none" },
                      }),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            s("footer", [
              s(
                "button",
                {
                  staticClass: "btn blue",
                  class: {
                    disabled:
                      0 === e.selectedUsersCount ||
                      0 === e.name.length ||
                      0 === e.recipients.length,
                  },
                  on: {
                    click: function (t) {
                      return e.updateSchedule();
                    },
                  },
                },
                [e._v("Save")],
              ),
              s(
                "button",
                {
                  staticClass: "btn btn-outlined button-cancel",
                  on: {
                    click: function (t) {
                      e.isSaved
                        ? (e.setDisplayEdit(!1), e.setCloseAction(!1))
                        : e.setCloseAction(!0);
                    },
                  },
                },
                [e._v("\n      Back\n    ")],
              ),
            ]),
          ],
        );
      },
      Ne = [
        function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s("li", { staticClass: "labels-dropdown-search" }, [
            s("strong", [e._v("Select users to include")]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s("li", { staticClass: "labels-dropdown-search" }, [
            s("strong", [e._v("Select subaccounts to include")]),
          ]);
        },
      ],
      Ge = s("75fc");
    function Pe(e, t) {
      var s = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        (t &&
          (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          s.push.apply(s, i));
      }
      return s;
    }
    function Le(e) {
      for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Pe(Object(s), !0).forEach(function (t) {
              Object(f["a"])(e, t, s[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
            : Pe(Object(s)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(s, t),
                );
              });
      }
      return e;
    }
    var Me = {
        name: "DataReportsEdit",
        data: function () {
          return {
            selectedPageOption: "",
            showPageChangeWarning: !1,
            pageOptions: [
              { value: "summary", label: "Summary" },
              { value: "activity", label: "Activity" },
              { value: "suppressions", label: "Suppressions" },
            ],
            summaryGroupByOptions: [
              { value: "auth", label: "By Username" },
              { value: "domain", label: "By Sender Domain" },
              { value: "sender", label: "By Sender Email" },
              { value: "subaccount", label: "By Subaccount" },
            ],
            eventsDropdownActive: !1,
            subaccountsDropdownActive: !1,
            recipientsDropdownActive: !1,
            usersDropdownActive: !1,
            clickedWithinDropdown: !1,
            clickedWithinUsersDropdown: !1,
            clickedWithinSubaccountsDropdown: !1,
            isFocused: !1,
            isEventsFocused: !1,
            isSubaccountsFocused: !1,
            isUsersFocused: !1,
            ignoreFocusOut: !1,
            usersCaretFixedScrollPush: !1,
            subaccountsCaretFixedScrollPush: !1,
            smtpRegex: new RegExp(/^api-|^(?:[0-9]{1,3}\.){3}[0-9]{1,3}/),
            ipRegex: new RegExp(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}/),
            apiRegex: new RegExp(/^api-/),
          };
        },
        computed: Le(
          Le(
            {},
            Object(w["c"])({
              selectedOrigin: W.getters.GET_EDIT_ORIGIN,
              selectedSummaryGroupBy: W.getters.GET_EDIT_SUMMARY_GROUP_BY,
              selectedActivityEvents: W.getters.GET_EDIT_ACTIVITY_EVENTS,
              selectedSuppressionEvents: W.getters.GET_EDIT_SUPPRESSION_EVENTS,
              selectedRecipients: W.getters.GET_EDIT_RECIPIENTS,
              selectedUsernames: W.getters.GET_EDIT_USERNAMES,
              selectedSubaccounts: W.getters.GET_EDIT_SUBACCOUNTS,
              activeMembers: W.getters.GET_ACTIVE_MEMBERS,
              isCreate: W.getters.GET_IS_CREATE,
              displayEdit: W.getters.GET_DISPLAY_EDIT,
              isSaved: W.getters.GET_IS_SAVED,
              actingRoleLevel: W.getters.GET_ACTING_ROLE_LEVEL,
              subaccounts: W.getters.GET_SUBACCOUNTS,
              optionalAttachment: W.getters.GET_EDIT_OPTIONAL_ATTACHMENT,
            }),
          ),
          {},
          {
            selectedUsersCount: function () {
              return this.selectedUsernames.reduce(function (e, t) {
                return e + (t.checked ? 1 : 0);
              }, 0);
            },
            origin: {
              get: function () {
                return this.$store.getters[W.getters.GET_EDIT_ORIGIN];
              },
              set: function (e) {
                this.$store.commit(W.mutations.SET_EDIT_ORIGIN, e);
              },
            },
            summaryGroupBy: {
              get: function () {
                return this.$store.getters[W.getters.GET_EDIT_SUMMARY_GROUP_BY];
              },
              set: function (e) {
                this.$store.commit(W.mutations.SET_EDIT_SUMMARY_GROUP_BY, e);
              },
            },
            name: {
              get: function () {
                return this.$store.getters[W.getters.GET_EDIT_NAME];
              },
              set: function (e) {
                this.$store.commit(W.mutations.SET_EDIT_NAME, e);
              },
            },
            frequency: {
              get: function () {
                var e = this.$store.getters[W.getters.GET_EDIT_FREQUENCY];
                return e || "1 day";
              },
              set: function (e) {
                this.$store.commit(W.mutations.SET_EDIT_FREQUENCY, e);
              },
            },
            frequencySize: function () {
              switch (this.frequency) {
                case "1 day":
                  return " day";
                case "7 days":
                  return " week";
                case "1 mon":
                  return " month";
                default:
                  return "";
              }
            },
            frequencyText: function () {
              switch (this.frequency) {
                case "1 day":
                  return "daily";
                case "7 days":
                  return "weekly";
                case "1 mon":
                  return "monthly";
                default:
                  return "";
              }
            },
            scheduleTime: function () {
              switch (this.frequency) {
                case "1 day":
                  return "";
                case "7 days":
                  return " every Monday";
                case "1 mon":
                  return " on the 1st of each month";
                default:
                  return "";
              }
            },
            datatype: {
              get: function () {
                return this.$store.getters[W.getters.GET_EDIT_DATATYPE];
              },
              set: function (e) {
                this.$store.commit(W.mutations.SET_EDIT_DATATYPE, e);
              },
            },
            recipients: {
              get: function () {
                return this.$store.getters[W.getters.GET_EDIT_RECIPIENTS];
              },
              set: function (e) {
                this.$store.commit(W.mutations.SET_EDIT_RECIPIENTS, e);
              },
            },
            usernamesIncludeFuture: {
              get: function () {
                return this.$store.getters[
                  W.getters.GET_EDIT_INCLUDE_USERNAMES_FUTURE
                ];
              },
              set: function (e) {
                this.$store.commit(
                  W.mutations.SET_EDIT_INCLUDE_USERNAMES_FUTURE,
                  e,
                );
              },
            },
            optionalAttachment: {
              get: function () {
                return this.$store.getters[
                  W.getters.GET_EDIT_OPTIONAL_ATTACHMENT
                ];
              },
              set: function (e) {
                this.$store.commit(W.mutations.SET_EDIT_OPTIONAL_ATTACHMENT, e);
              },
            },
            subaccountsIncludeFuture: {
              get: function () {
                return this.$store.getters[
                  W.getters.GET_EDIT_INCLUDE_SUBACCOUNTS_FUTURE
                ];
              },
              set: function (e) {
                this.$store.commit(
                  W.mutations.SET_EDIT_INCLUDE_SUBACCOUNTS_FUTURE,
                  e,
                );
              },
            },
            displayTeamMembers: function () {
              var e = this;
              return this.activeMembers.filter(function (t) {
                return -1 === e.selectedRecipients.indexOf(t);
              });
            },
            isNotOwner: function () {
              return "Owner" != this.actingRoleLevel;
            },
            editEvents: function () {
              return "activity" == this.selectedOrigin
                ? this.selectedActivityEvents
                : "suppressions" == this.selectedOrigin
                  ? this.selectedSuppressionEvents
                  : null;
            },
            selectedEvents: function () {
              var e = this.editEvents.filter(function (e) {
                return e.checked;
              });
              return e.length == this.editEvents.length ? [] : e;
            },
            allUsersChecked: function () {
              var e = this;
              return (
                this.selectedUsernames.filter(function (t) {
                  return e.selectedSubaccountsList.includes(t.owner);
                }).length == this.selectedUsersCount
              );
            },
            overallUsersCheckboxState: function () {
              var e = [].concat(
                  Object(Ge["a"])(this.smtpUsers),
                  Object(Ge["a"])(this.ipUsers),
                  Object(Ge["a"])(this.apiUsers),
                ),
                t = this.selectedSubaccounts,
                s =
                  e.length > 0 &&
                  e.every(function (e) {
                    return e.checked;
                  }),
                i = t.every(function (e) {
                  return e.checked;
                });
              return s && i
                ? "checked"
                : e.some(function (e) {
                      return e.checked;
                    }) ||
                    t.some(function (e) {
                      return e.checked;
                    })
                  ? "indeterminate"
                  : "";
            },
            allSubaccountsChecked: function () {
              return (
                this.selectedSubaccounts.length > 1 &&
                this.selectedSubaccounts.every(function (e) {
                  return e.checked;
                })
              );
            },
            selectedDisplayUsers: function () {
              var e = this.selectedUsernames.filter(function (e) {
                return e.checked;
              });
              return e.length == this.selectedUsernames.length ? [] : e;
            },
            eventsCheckboxState: function () {
              var e = !0,
                t = !0;
              return (
                "activity" == this.selectedOrigin
                  ? this.selectedActivityEvents.forEach(function (s) {
                      s.checked ? (t = !1) : (e = !1);
                    })
                  : "suppressions" == this.selectedOrigin &&
                    this.selectedSuppressionEvents.forEach(function (s) {
                      s.checked ? (t = !1) : (e = !1);
                    }),
                e ? "checked" : t ? "" : "indeterminate"
              );
            },
            subaccountsLabel: function () {
              return this.selectedSubaccounts.length > 1
                ? "Subaccounts and users"
                : "Users";
            },
            selectedSubaccountsList: function () {
              return this.selectedSubaccounts
                .filter(function (e) {
                  return e.checked;
                })
                .map(function (e) {
                  return e.record_id;
                });
            },
            smtpUsers: function () {
              var e = this;
              return this.selectedUsernames.filter(function (t) {
                return !e.smtpRegex.test(t.username);
              });
            },
            ipUsers: function () {
              var e = this;
              return this.selectedUsernames.filter(function (t) {
                return e.ipRegex.test(t.username);
              });
            },
            apiUsers: function () {
              var e = this;
              return this.selectedUsernames.filter(function (t) {
                return e.apiRegex.test(t.username);
              });
            },
            checkedSmtpUsers: function () {
              var e = this,
                t = this.selectedUsernames.filter(function (t) {
                  return (
                    t.checked &&
                    !e.smtpRegex.test(t.username) &&
                    e.selectedSubaccountsList.includes(t.owner)
                  );
                });
              return t;
            },
            checkedIpUsers: function () {
              var e = this;
              return this.selectedUsernames.filter(function (t) {
                return (
                  t.checked &&
                  e.ipRegex.test(t.username) &&
                  e.selectedSubaccountsList.includes(t.owner)
                );
              });
            },
            checkedApiUsers: function () {
              var e = this;
              return this.selectedUsernames.filter(function (t) {
                return (
                  t.checked &&
                  e.apiRegex.test(t.username) &&
                  e.selectedSubaccountsList.includes(t.owner)
                );
              });
            },
            smtpUsersCheckboxState: function () {
              return 0 == this.checkedSmtpUsers.length
                ? ""
                : this.checkedSmtpUsers.length == this.smtpUsers.length
                  ? "checked"
                  : "indeterminate";
            },
            ipsCheckboxState: function () {
              return 0 == this.checkedIpUsers.length
                ? ""
                : this.checkedIpUsers.length == this.ipUsers.length
                  ? "checked"
                  : "indeterminate";
            },
            apiKeysCheckboxState: function () {
              return 0 == this.checkedApiUsers.length
                ? ""
                : this.checkedApiUsers.length == this.apiUsers.length
                  ? "checked"
                  : "indeterminate";
            },
            subaccountsCheckboxState: function () {
              var e = this.selectedSubaccounts.filter(function (e) {
                return e.checked;
              });
              return 0 == e.length
                ? ""
                : e.length == this.subaccounts.length
                  ? "checked"
                  : "indeterminate";
            },
            userSelectionText: function () {
              var e =
                  this.smtpUsers.length +
                  this.ipUsers.length +
                  this.apiUsers.length,
                t = this.selectedUsersCount,
                s = t === e;
              return 0 === t
                ? "No users selected"
                : s
                  ? "All users selected"
                  : 1 === t
                    ? "1 user selected"
                    : "".concat(t, " users selected");
            },
            subaccountSelectionText: function () {
              var e = this.selectedSubaccounts.filter(function (e) {
                  return e.checked;
                }).length,
                t = e === this.selectedSubaccounts.length;
              return 0 === e
                ? "No subaccounts selected"
                : t
                  ? "All subaccounts selected"
                  : 1 === e
                    ? "1 subaccount selected"
                    : "".concat(e, " subaccounts selected");
            },
            summaryGroupByActiveOptions: function () {
              return this.subaccounts.length <= 1
                ? this.summaryGroupByOptions.filter(function (e) {
                    return "subaccount" !== e.value;
                  })
                : this.summaryGroupByOptions;
            },
          },
        ),
        methods: Le(
          Le(
            {},
            Object(w["d"])({
              toggleEditActivityEvent: W.mutations.TOGGLE_EDIT_ACTIVITY_EVENT,
              toggleEditSuppressionEvent:
                W.mutations.TOGGLE_EDIT_SUPPRESSION_EVENT,
              pushEditRecipients: W.mutations.PUSH_EDIT_RECIPIENTS,
              removeEditRecipients: W.mutations.REMOVE_EDIT_RECIPIENTS,
              toggleEditUsername: W.mutations.TOGGLE_EDIT_USERNAME,
              toggleEditSubaccount: W.mutations.TOGGLE_EDIT_SUBACCOUNT,
              setIsSaved: W.mutations.SET_IS_SAVED,
              setDisplayEdit: W.mutations.SET_DISPLAY_EDIT,
              setCloseAction: W.mutations.SET_CLOSE_ACTION,
              setEditEvents: W.mutations.SET_EDIT_EVENTS,
              setEditSubaccounts: W.mutations.SET_EDIT_SUBACCOUNTS,
              toggleEditSmtpUsers: W.mutations.TOGGLE_EDIT_SMTP_USERS,
              toggleEditIpUsers: W.mutations.TOGGLE_EDIT_IP_USERS,
              toggleEditApiUsers: W.mutations.TOGGLE_EDIT_API_USERS,
              toggleEditUsers: W.mutations.TOGGLE_EDIT_USERS,
              selectAll: W.mutations.SELECT_ALL,
            }),
          ),
          {},
          {
            addRecipient: function (e) {
              (this.pushEditRecipients(e),
                (this.recipientsDropdownActive = !1));
            },
            removeRecipient: function (e) {
              this.removeEditRecipients(e, 1);
            },
            toggleDropdown: function (e) {
              ((this.eventsDropdownActive = !this.eventsDropdownActive),
                e.stopPropagation());
            },
            toggleRecipientsDropdown: function (e) {
              ((this.recipientsDropdownActive = !this.recipientsDropdownActive),
                e.stopPropagation());
            },
            toggleSubaccountsDropdown: function (e) {
              ((this.subaccountsDropdownActive =
                !this.subaccountsDropdownActive),
                e.stopPropagation());
            },
            toggleUsersDropdown: function (e) {
              ((this.usersDropdownActive = !this.usersDropdownActive),
                e.stopPropagation());
            },
            handleClickInsideDropdown: function () {
              var e = this;
              ((this.clickedWithinDropdown = !0),
                (this.ignoreFocusOut = !0),
                setTimeout(function () {
                  e.ignoreFocusOut = !1;
                }, 200));
            },
            handleClickInsideRecipientsDropdown: function () {
              this.clickedWithinDropdown = !0;
            },
            handleClickInsideSubaccountsDropdown: function () {
              var e = this;
              ((this.clickedWithinSubaccountsDropdown = !0),
                (this.ignoreFocusOut = !0),
                setTimeout(function () {
                  e.ignoreFocusOut = !1;
                }, 200));
            },
            handleClickInsideUsersDropdown: function () {
              var e = this;
              ((this.clickedWithinUsersDropdown = !0),
                (this.ignoreFocusOut = !0),
                setTimeout(function () {
                  e.ignoreFocusOut = !1;
                }, 200));
            },
            handleClickOutsideDropdowns: function (e) {
              this.ignoreFocusOut ||
                (!this.clickedWithinDropdown &&
                  this.eventsDropdownActive &&
                  this.$el.querySelector(".labels-dropdown") &&
                  !this.$el
                    .querySelector(".labels-dropdown")
                    .contains(e.target) &&
                  (this.eventsDropdownActive = !1),
                !this.clickedWithinDropdown &&
                  this.recipientsDropdownActive &&
                  this.$el.querySelector(".labels-dropdown") &&
                  !this.$el
                    .querySelector(".labels-dropdown")
                    .contains(e.target) &&
                  (this.recipientsDropdownActive = !1),
                !this.clickedWithinSubaccountsDropdown &&
                  this.subaccountsDropdownActive &&
                  this.$el.querySelector(".labels-dropdown") &&
                  !this.$el
                    .querySelector(".labels-dropdown")
                    .contains(e.target) &&
                  (this.subaccountsDropdownActive = !1),
                !this.clickedWithinUsersDropdown &&
                  this.usersDropdownActive &&
                  this.$el.querySelector(".labels-dropdown") &&
                  !this.$el
                    .querySelector(".labels-dropdown")
                    .contains(e.target) &&
                  (this.usersDropdownActive = !1),
                (this.clickedWithinDropdown = !1));
            },
            updateSchedule: function () {
              var e = this,
                t = W.actions.UPDATE_SCHEDULE;
              (this.isCreate && (t = W.actions.CREATE_SCHEDULE),
                this.$store.dispatch(t).then(function () {
                  (e.$eventBus.$emit("mixin-search-has-changed"),
                    e.$eventBus.$emit("mixin-search-trigger"),
                    e.setDisplayEdit(!1),
                    e.setIsSaved(!0));
                }));
            },
            handleDropdownFocusOut: function (e) {
              var t = this;
              this.ignoreFocusOut ||
                setTimeout(function () {
                  var s;
                  ((s =
                    "event" === e
                      ? t.$refs.eventsDropdownContainer
                      : "subaccount" === e
                        ? t.$refs.subaccountsDropdownContainer
                        : "user" === e
                          ? t.$refs.usersDropdownContainer
                          : t.$refs.recipientsDropdownContainer),
                    s &&
                      !s.contains(document.activeElement) &&
                      ("event" === e
                        ? (t.eventsDropdownActive = !1)
                        : "subaccount" === e
                          ? (t.subaccountsDropdownActive = !1)
                          : "user" === e
                            ? (t.usersDropdownActive = !1)
                            : (t.recipientsDropdownActive = !1)));
                }, 100);
            },
            openDropdown: function (e) {
              "event" === e
                ? ((this.eventsDropdownActive = !0),
                  (this.currentEventIndex = 0))
                : "subaccount" === e
                  ? ((this.subaccountsDropdownActive = !0),
                    (this.currentEventIndex = 0))
                  : "user" === e
                    ? ((this.usersDropdownActive = !0),
                      (this.currentEventIndex = 0))
                    : ((this.recipientsDropdownActive = !0),
                      (this.currentEventIndex = 0));
            },
            preventArrowKeyScroll: function (e) {
              ["ArrowUp", "ArrowDown"].includes(e.code) && e.preventDefault();
            },
            toggleAllEvents: function () {
              var e = this;
              ("activity" == this.selectedOrigin
                ? this.toggleEditActivityEvent()
                : "suppressions" == this.selectedOrigin &&
                  this.toggleEditSuppressionEvent(),
                (this.eventsDropdownActive = !0),
                (this.ignoreFocusOut = !0),
                setTimeout(function () {
                  e.ignoreFocusOut = !1;
                }, 200));
            },
            toggleEvent: function (e) {
              var t = this;
              ("activity" == this.selectedOrigin
                ? this.toggleEditActivityEvent(e)
                : "suppressions" == this.selectedOrigin &&
                  this.toggleEditSuppressionEvent(e),
                (this.eventsDropdownActive = !0),
                (this.ignoreFocusOut = !0),
                setTimeout(function () {
                  t.ignoreFocusOut = !1;
                }, 200));
            },
            toggleEventDelete: function (e) {
              var t = this;
              ("activity" == this.selectedOrigin
                ? this.toggleEditActivityEvent(e)
                : "suppressions" == this.selectedOrigin &&
                  this.toggleEditSuppressionEvent(e),
                (this.ignoreFocusOut = !0),
                setTimeout(function () {
                  t.ignoreFocusOut = !1;
                }, 200));
            },
            toggleUsername: function (e) {
              var t = this;
              (this.toggleEditUsername(e),
                (this.usersDropdownActive = !0),
                (this.ignoreFocusOut = !0),
                setTimeout(function () {
                  t.ignoreFocusOut = !1;
                }, 200),
                this.adjustDropdownHotspotHeight("usersDropdownContainer"));
            },
            toggleAllSmtpUsers: function () {
              var e = this;
              (this.toggleEditSmtpUsers(),
                (this.usersDropdownActive = !0),
                (this.ignoreFocusOut = !0),
                setTimeout(function () {
                  e.ignoreFocusOut = !1;
                }, 200),
                this.adjustDropdownHotspotHeight("usersDropdownContainer"));
            },
            toggleAllIpUsers: function () {
              var e = this;
              (this.toggleEditIpUsers(),
                (this.usersDropdownActive = !0),
                (this.ignoreFocusOut = !0),
                setTimeout(function () {
                  e.ignoreFocusOut = !1;
                }, 200),
                this.adjustDropdownHotspotHeight("usersDropdownContainer"));
            },
            toggleAllApiUsers: function () {
              var e = this;
              (this.toggleEditApiUsers(),
                (this.usersDropdownActive = !0),
                (this.ignoreFocusOut = !0),
                setTimeout(function () {
                  e.ignoreFocusOut = !1;
                }, 200),
                this.adjustDropdownHotspotHeight("usersDropdownContainer"));
            },
            toggleAllUsers: function () {
              var e = this,
                t = "checked" !== this.overallUsersCheckboxState;
              this.selectedSubaccounts.forEach(function (s) {
                s.checked !== t &&
                  e.toggleEditSubaccount(Le(Le({}, s), {}, { checked: t }));
              });
              var s = [].concat(
                Object(Ge["a"])(this.smtpUsers),
                Object(Ge["a"])(this.ipUsers),
                Object(Ge["a"])(this.apiUsers),
              );
              (s.forEach(function (s) {
                s.checked !== t &&
                  e.toggleEditUsername(Le(Le({}, s), {}, { checked: t }));
              }),
                (this.usersDropdownActive = !0),
                (this.ignoreFocusOut = !0),
                setTimeout(function () {
                  e.ignoreFocusOut = !1;
                }, 200),
                this.adjustDropdownHotspotHeight("usersDropdownContainer"));
            },
            toggleSubaccount: function (e) {
              var t = this;
              (console.log("Current state:", e.checked),
                (this.usersDropdownActive = !0));
              var s = !e.checked;
              this.toggleEditSubaccount(Le(Le({}, e), {}, { checked: s }));
              var i = [].concat(
                Object(Ge["a"])(this.smtpUsersFiltered(e.record_id)),
                Object(Ge["a"])(this.ipUsersFiltered(e.record_id)),
                Object(Ge["a"])(this.apiUsersFiltered(e.record_id)),
              );
              (console.log("Total users:", i.length),
                console.log(
                  "All users selected before toggle:",
                  i.every(function (e) {
                    return e.checked;
                  }),
                ),
                console.log("Target state:", s),
                i.forEach(function (e) {
                  e.checked !== s &&
                    t.toggleEditUsername(Le(Le({}, e), {}, { checked: s }));
                }),
                e.checked !== s &&
                  this.toggleEditSubaccount(Le(Le({}, e), {}, { checked: s })),
                (this.ignoreFocusOut = !0),
                setTimeout(function () {
                  t.ignoreFocusOut = !1;
                }, 200),
                this.adjustDropdownHotspotHeight(
                  "subaccountsDropdownContainer",
                ));
            },
            subaccountCheckboxState: function (e) {
              var t = [].concat(
                Object(Ge["a"])(this.smtpUsersFiltered(e.record_id)),
                Object(Ge["a"])(this.ipUsersFiltered(e.record_id)),
                Object(Ge["a"])(this.apiUsersFiltered(e.record_id)),
              );
              if (0 === t.length) return e.checked ? "checked" : "";
              var s = t.every(function (e) {
                  return e.checked;
                }),
                i = t.some(function (e) {
                  return e.checked;
                });
              return s ? "checked" : i ? "indeterminate" : "";
            },
            hasNoUsers: function (e) {
              var t = this.smtpUsersFiltered(e),
                s = this.ipUsersFiltered(e),
                i = this.apiUsersFiltered(e);
              return 0 === t.length && 0 === s.length && 0 === i.length;
            },
            adjustDropdownHotspotHeight: function (e) {
              var t = this;
              this.$nextTick(function () {
                var s = t.$refs[e];
                if (s) {
                  var i = s.querySelector(".form-select-wrapper");
                  if (i) {
                    var n = i.style.maxHeight;
                    i.style.maxHeight = "none";
                    var r = i.offsetHeight,
                      a = r - 1 + "px",
                      o = i.querySelector(".dropdown-hotspot");
                    (o && (o.style.height = a),
                      r > 206
                        ? "usersDropdownContainer" === e
                          ? (t.usersCaretFixedScrollPush = !0)
                          : "subaccountsDropdownContainer" === e &&
                            (t.subaccountsCaretFixedScrollPush = !0)
                        : "usersDropdownContainer" === e
                          ? (t.usersCaretFixedScrollPush = !1)
                          : "subaccountsDropdownContainer" === e &&
                            (t.subaccountsCaretFixedScrollPush = !1),
                      (i.style.maxHeight = n));
                  }
                }
              });
            },
            smtpUsersFiltered: function (e) {
              return this.smtpUsers.filter(function (t) {
                return t.owner === e;
              });
            },
            ipUsersFiltered: function (e) {
              return this.ipUsers.filter(function (t) {
                return t.owner === e;
              });
            },
            apiUsersFiltered: function (e) {
              return this.apiUsers.filter(function (t) {
                return t.owner === e;
              });
            },
          },
        ),
        watch: {
          isFocused: function (e) {
            e
              ? window.addEventListener(
                  "keydown",
                  this.preventArrowKeyScroll,
                  !1,
                )
              : window.removeEventListener(
                  "keydown",
                  this.preventArrowKeyScroll,
                  !1,
                );
          },
          isEventsFocused: function (e) {
            e
              ? window.addEventListener(
                  "keydown",
                  this.preventArrowKeyScroll,
                  !1,
                )
              : window.removeEventListener(
                  "keydown",
                  this.preventArrowKeyScroll,
                  !1,
                );
          },
          isSubaccountsFocused: function (e) {
            e
              ? window.addEventListener(
                  "keydown",
                  this.preventArrowKeyScroll,
                  !1,
                )
              : window.removeEventListener(
                  "keydown",
                  this.preventArrowKeyScroll,
                  !1,
                );
          },
          isUsersFocused: function (e) {
            e
              ? window.addEventListener(
                  "keydown",
                  this.preventArrowKeyScroll,
                  !1,
                )
              : window.removeEventListener(
                  "keydown",
                  this.preventArrowKeyScroll,
                  !1,
                );
          },
        },
        mounted: function () {
          (document.addEventListener("click", this.handleClickOutsideDropdowns),
            this.adjustDropdownHotspotHeight("usersDropdownContainer"),
            this.adjustDropdownHotspotHeight("subaccountsDropdownContainer"));
        },
        beforeDestroy: function () {
          (window.removeEventListener(
            "keydown",
            this.preventArrowKeyScroll,
            !1,
          ),
            document.removeEventListener(
              "click",
              this.handleClickOutsideDropdowns,
            ));
        },
      },
      $e = Me,
      Fe = Object(_["a"])($e, je, Ne, !1, null, null, null),
      Be = Fe.exports,
      He = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t;
        return e.shouldShow || e.isAjaxActive
          ? s("div", { staticClass: "loading" }, [
              e._m(0),
              s("div", { staticClass: "loading-backdrop" }),
            ])
          : e._e();
      },
      Ye = [
        function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
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
    function qe(e, t) {
      var s = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        (t &&
          (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          s.push.apply(s, i));
      }
      return s;
    }
    function Ve(e) {
      for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? qe(Object(s), !0).forEach(function (t) {
              Object(f["a"])(e, t, s[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
            : qe(Object(s)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(s, t),
                );
              });
      }
      return e;
    }
    var ze = {
        name: "AjaxLoadingSpinner",
        computed: Ve(
          Ve(
            {},
            Object(w["c"])({ isAjaxActive: P.getters.GET_IS_AJAX_RUNNING }),
          ),
          {},
          {
            shouldShow: function () {
              return this.$store.state.runningAjaxRequests;
            },
          },
        ),
      },
      Qe = ze,
      We = Object(_["a"])(Qe, He, Ye, !1, null, null, null),
      Je = We.exports,
      Xe = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t;
        return s("div", [
          s(
            "div",
            {
              staticClass: "bar-notice  success",
              class: { "is-active": e.successMessage },
              attrs: { id: "user-alert" },
            },
            [
              s("span", { staticClass: "notice-icon" }),
              s("span", { staticClass: "notice-message-text" }, [
                e._v(e._s(e.successMessage)),
              ]),
              s(
                "span",
                {
                  staticClass: "button-close",
                  on: {
                    click: function (t) {
                      return e.clearSuccessMessage();
                    },
                  },
                },
                [e._v("×")],
              ),
            ],
          ),
          s(
            "div",
            {
              staticClass: "bar-notice error",
              class: { visible: e.errorMessage },
              attrs: { id: "user-error-alert" },
            },
            [
              s("span", { staticClass: "notice-icon" }),
              s("span", { staticClass: "notice-message-text" }, [
                e._v(e._s(e.errorMessage)),
              ]),
              s(
                "span",
                {
                  staticClass: "button-close",
                  on: {
                    click: function (t) {
                      return e.clearErrorMessage();
                    },
                  },
                },
                [e._v("×")],
              ),
            ],
          ),
        ]);
      },
      Ke = [];
    function Ze(e, t) {
      var s = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        (t &&
          (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          s.push.apply(s, i));
      }
      return s;
    }
    function et(e) {
      for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Ze(Object(s), !0).forEach(function (t) {
              Object(f["a"])(e, t, s[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
            : Ze(Object(s)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(s, t),
                );
              });
      }
      return e;
    }
    var tt = {
        name: "DisplayMessage",
        mixins: [],
        data: function () {
          return {};
        },
        computed: et(
          {},
          Object(w["c"])({
            successMessage: P.getters.GET_SUCCESS_MESSAGE,
            errorMessage: P.getters.GET_ERROR_MESSAGE,
          }),
        ),
        methods: et(
          {},
          Object(w["d"])({
            clearSuccessMessage: P.mutations.CLEAR_SUCCESS_MESSAGE,
            clearErrorMessage: P.mutations.CLEAR_ERROR_MESSAGE,
          }),
        ),
      },
      st = tt,
      it = (s("39ff"), Object(_["a"])(st, Xe, Ke, !1, null, "0d7734d7", null)),
      nt = it.exports;
    function rt(e, t) {
      var s = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        (t &&
          (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          s.push.apply(s, i));
      }
      return s;
    }
    function at(e) {
      for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? rt(Object(s), !0).forEach(function (t) {
              Object(f["a"])(e, t, s[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
            : rt(Object(s)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(s, t),
                );
              });
      }
      return e;
    }
    var ot = {
        name: "ReportDataExports",
        mixins: [S, D, O, oe, ue],
        components: {
          ScheduledEdit: Be,
          DataExportsResultsDisplay: he,
          ScheduledResultsDisplay: xe,
          AjaxLoadingSpinner: Je,
          DisplayMessage: nt,
        },
        data: function () {
          return {
            isLoading: !1,
            initialised: !1,
            tableRows: [],
            scheduledTableRows: [],
            requestPoint: this.$config.requestPoint,
            fullPageLoad: !0,
            clientTimezone: null,
            hasLongDate: !1,
            exportsActive: !0,
            reportsActive: !1,
            pagesFilterActive: !1,
            recipientsFilterActive: !1,
            id: null,
          };
        },
        created: function () {
          (this.mixinEventListener_register(
            Object(f["a"])({}, g.TRIGGERABLE_CLOSED, this.checkClosed),
          ),
            this.mixinEventListener_on());
        },
        destroyed: function () {
          this.mixinEventListener_off();
        },
        computed: at(
          at(
            {},
            Object(w["c"])({
              isSaved: W.getters.GET_IS_SAVED,
              isCreate: W.getters.GET_IS_CREATE,
              isAjaxRunning: P.getters.GET_IS_AJAX_RUNNING,
              displayEdit: W.getters.GET_DISPLAY_EDIT,
              closeAction: W.getters.GET_CLOSE_ACTION,
              allowScheduledExport: W.getters.GET_ALLOW_SCHEDULED_EXPORT,
              isAdd: W.getters.GET_IS_ADD,
            }),
          ),
          {},
          {
            shouldShow: function () {
              return !!this.initialised;
            },
            displayClosePopup: function () {
              return !this.isSaved && this.closeAction;
            },
            disableCreate: function () {
              var e = this.scheduledTableRows.length;
              return e >= 10 ? "disabled" : "";
            },
          },
        ),
        methods: at(
          at(
            at(
              {},
              Object(w["d"])({
                setEditId: W.mutations.SET_EDIT_ID,
                setEditOrigin: W.mutations.SET_EDIT_ORIGIN,
                setEditSummaryGroupBy: W.mutations.SET_EDIT_SUMMARY_GROUP_BY,
                setEditName: W.mutations.SET_EDIT_NAME,
                setEditEvents: W.mutations.SET_EDIT_EVENTS,
                setEditUsernames: W.mutations.SET_EDIT_USERNAMES,
                setEditSubaccounts: W.mutations.SET_EDIT_SUBACCOUNTS,
                setEditFrequency: W.mutations.SET_EDIT_FREQUENCY,
                setEditDatatype: W.mutations.SET_EDIT_DATATYPE,
                setEditRecipients: W.mutations.SET_EDIT_RECIPIENTS,
                setActiveMembers: W.mutations.SET_ACTIVE_MEMBERS,
                setIsSaved: W.mutations.SET_IS_SAVED,
                setIsCreate: W.mutations.SET_IS_CREATE,
                setDisplayEdit: W.mutations.SET_DISPLAY_EDIT,
                setCloseAction: W.mutations.SET_CLOSE_ACTION,
                setAllowScheduledExport: W.mutations.SET_ALLOW_SCHEDULED_EXPORT,
                setUsername: W.mutations.SET_USERNAME,
                setCanDeleteAny: W.mutations.SET_CAN_DELETE_ANY,
                setActingRoleLevel: W.mutations.SET_ACTING_ROLE_LEVEL,
                setIsAdd: W.mutations.SET_IS_ADD,
                setActiveMemberNames: W.mutations.SET_ACTIVE_MEMBER_NAMES,
                setIncludeUsernamesFuture:
                  W.mutations.SET_EDIT_INCLUDE_USERNAMES_FUTURE,
                setIncludeSubaccountsFuture:
                  W.mutations.SET_EDIT_INCLUDE_SUBACCOUNTS_FUTURE,
                setHidePaymentSplash: W.mutations.SET_HIDE_PAYMENT_SPLASH,
              }),
            ),
            Object(w["b"])({ fetchUsernames: W.actions.FETCH_USERNAMES }),
          ),
          {},
          {
            addReport: function () {
              (this.setEditId(""),
                this.setEditOrigin("summary"),
                this.setEditSummaryGroupBy("auth"),
                this.setEditName(""),
                this.setEditEvents(),
                this.setEditUsernames(),
                this.setEditSubaccounts(),
                this.setEditFrequency("1 day"),
                this.setEditDatatype("csv"),
                this.setEditRecipients(),
                this.setIsSaved(!0),
                this.setIsCreate(!0),
                this.setIsAdd(!0),
                this.setDisplayEdit(!0),
                this.setIncludeUsernamesFuture(!0),
                this.setIncludeSubaccountsFuture(!0));
            },
            initDataExports: function (e) {
              ((this.id = e), setTimeout(this.holdInit, 100));
            },
            holdInit: function () {
              this.initialised ||
                void 0 == HTML.csrfkey ||
                (this.initComponents(),
                this.loadDataExports(),
                this.fetchUsernames());
            },
            initComponents: function () {
              this.$refs.dataExportsResultsDisplay.initDataExportsResultsDisplay(
                this.id,
              );
            },
            loadDataExports: function () {
              this.$eventBus.$emit("mixin-search-trigger");
            },
            showExports: function () {
              ((this.exportsActive = !0), (this.reportsActive = !1));
            },
            showReports: function () {
              ((this.exportsActive = !1), (this.reportsActive = !0));
            },
            closeEdit: function () {
              this.isSaved
                ? (this.setDisplayEdit(!1), this.setCloseAction(!1))
                : this.setCloseAction(!0);
            },
            buildSearchPayload: function () {
              var e = {
                client_timezone: this.clientTimezone
                  ? this.clientTimezone
                  : y.a.tz.guess(),
              };
              return e;
            },
            updateDataExportsData: function () {
              (this.$refs.dataExportsResultsDisplay.updateDataExportsResults(
                this.tableRows,
                this.hasLongDate,
              ),
                this.$refs.scheduledResultsDisplay.updateScheuldedResults(
                  this.scheduledTableRows,
                ),
                this.$refs.scheduledEdit.adjustDropdownHotspotHeight(
                  "usersDropdownContainer",
                ),
                this.$refs.scheduledEdit.adjustDropdownHotspotHeight(
                  "subaccountsDropdownContainer",
                ));
            },
            performSearch: function (e, t) {
              var s = this;
              ((this.fullPageLoad = !1),
                t ||
                  ((this.clearTableOnResults = !0),
                  window.scroll({ top: 0, left: 0, behavior: "smooth" }),
                  (this.fullPageLoad = !0)),
                this.mixinAjax_get(
                  this.requestPoint,
                  "",
                  this.buildSearchPayload(t),
                  function (t) {
                    (s.handleTableResults(t.responseJSON.results),
                      e && (s.initialised = !0),
                      s.updateDataExportsData());
                  },
                  function (e) {
                    HTML.handleError(e.responseJSON);
                  },
                ));
            },
            handleTableResults: function (e) {
              ((this.tableRows = []),
                void 0 === e.client_timezone ||
                null === e.client_timezone ||
                "" === e.client_timezone
                  ? (this.clientTimezone = y.a.tz.guess())
                  : (this.clientTimezone = e.client_timezone),
                (this.tableRows = this.formatToDisplay(e.exports)),
                this.tableRows.sort(function (e, t) {
                  return t.added.unix_secs_ms - e.added.unix_secs_ms;
                }),
                (this.scheduledTableRows = e.scheduled_data_exports),
                this.setActiveMembers(e.active_members),
                this.setActiveMemberNames(e.active_member_names),
                this.setAllowScheduledExport(e.allow_scheduled_export),
                this.setUsername(e.username),
                this.setCanDeleteAny(e.can_delete_any),
                this.setActingRoleLevel(e.acting_role_label),
                this.setHidePaymentSplash(e.hide_payment_splash));
            },
            formatToDisplay: function (e) {
              var t = this;
              return (
                (this.hasLongDate = !1),
                e.forEach(function (e) {
                  ((e.date = t.formatDate(e)),
                    (e.byte = t.formatFileSize(e)),
                    (e.format = t.formatFileType(e.datatype)),
                    (e.description = t.formatDescription(e)));
                }),
                e
              );
            },
            formatDate: function (e) {
              var t = e.added,
                s = {};
              s.title = t.local_formatted.full;
              var i = t.local_formatted.pretty;
              return (
                (s.time = i.slice(i.indexOf(" ") + 1)),
                (s.timeClass = "time-large"),
                t.is_before_lunchtime_yesterday &&
                  ((this.hasLongDate = !0),
                  (s.date = i.slice(0, i.indexOf(" "))),
                  (s.timeClass = "time")),
                s
              );
            },
            formatFileSize: function (e) {
              var t = e.byte_count,
                s = ["B", "KB", "MB", "GB", "TB"];
              if (0 === t || null === t || e.failed) return "-";
              var i = parseInt(Math.floor(Math.log(t) / Math.log(1024)), 10);
              return 0 === i
                ? t + " " + s[i]
                : (t / Math.pow(1024, i)).toFixed(1) + " " + s[i];
            },
            formatFileType: function (e) {
              return "json" === e
                ? "NDJSON"
                : "xls" === e
                  ? "XLSX"
                  : e.toUpperCase();
            },
            formatDescription: function (e) {
              if (!e.completed && !e.failed)
                return "tar" === e.datatype || "zip" === e.datatype
                  ? e.description + " - Queued"
                  : e.description;
              if (e.failed)
                return e.description + " - An unexpected error occurred";
              var t = e.description + " - ";
              return (
                (t += e.truncated ? "first " : ""),
                (t += HTML.format_number(e.row_count) + " results"),
                t
              );
            },
            saveSchedule: function () {
              var e = this,
                t = W.actions.UPDATE_SCHEDULE;
              (this.isCreate && (t = W.actions.CREATE_SCHEDULE),
                this.$store.dispatch(t).then(function () {
                  (e.$eventBus.$emit("mixin-search-has-changed"),
                    e.$eventBus.$emit("mixin-search-trigger"),
                    e.setDisplayEdit(!1),
                    e.setIsSaved(!0),
                    e.setCloseAction(!1));
                }));
            },
          },
        ),
      },
      ct = ot,
      ut = (s("fd77"), Object(_["a"])(ct, h, m, !1, null, "241bb818", null)),
      lt = ut.exports,
      dt = {
        name: "DataExports",
        components: { InfoSplash: p, ReportsDataExports: lt },
        data: function () {
          return { showSplash: PAGE_DATA.show_splash, id: PAGE_DATA.id };
        },
        mounted: function () {
          (this.$refs.dataExports.initDataExports(this.id),
            document.body.classList.add("page-data-exports"));
        },
        created: function () {
          var e = this;
          this.$eventBus.$on("hide-splash", function () {
            e.showSplash = !1;
          });
        },
        destroyed: function () {
          this.$eventBus.$off("hide-splash");
        },
      },
      _t = dt,
      Et = (s("dea2"), Object(_["a"])(_t, a, o, !1, null, "1f0bca69", null)),
      pt = Et.exports;
    r["a"].use(w["a"]);
    var ht = new w["a"].Store({
        strict: !1,
        state: { runningAjaxRequests: 0 },
        getters: {},
        mutations: {
          runningAjaxRequestsIncrement: function (e) {
            e.runningAjaxRequests++;
          },
          runningAjaxRequestsDecrement: function (e) {
            e.runningAjaxRequests--;
          },
        },
        actions: {},
        modules: { root: H, dataexport: ie },
      }),
      mt = ht,
      ft = s("24ab"),
      vt = s("e37d");
    (r["a"].directive("tooltip", vt["c"]),
      r["a"].directive("close-popover", vt["a"]),
      r["a"].component("v-popover", vt["b"]),
      (r["a"].config.productionTip = !1),
      (r["a"].prototype.$eventBus = new r["a"]()),
      (r["a"].prototype.$config = ft),
      "undefined" !== typeof PAGE_DATA &&
        mt.commit(P.mutations.SET_CSRF_KEY, PAGE_DATA.csrfkey),
      "undefined" !== typeof IMAGE_URLS &&
        mt.commit(P.mutations.SET_IMAGE_URLS, IMAGE_URLS),
      "undefined" !== typeof END_POINTS &&
        mt.commit(P.mutations.SET_END_POINTS, END_POINTS.urls()),
      z(mt),
      new r["a"]({
        store: mt,
        render: function (e) {
          return e(pt);
        },
      }).$mount("#data-exports"));
  },
  "6d29": function (e, t, s) {},
  8700: function (e, t, s) {},
  9552: function (e, t, s) {},
  dea2: function (e, t, s) {
    "use strict";
    s("6d29");
  },
  e3c9: function (e, t, s) {},
  f767: function (e, t, s) {
    "use strict";
    s("e3c9");
  },
  fa39: function (e, t, s) {},
  fd77: function (e, t, s) {
    "use strict";
    s("9552");
  },
});
//# sourceMappingURL=app.b2aa750f.js.map
