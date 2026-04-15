(function (e) {
  function t(t) {
    for (
      var i, r, o = t[0], l = t[1], c = t[2], u = 0, p = [];
      u < o.length;
      u++
    )
      ((r = o[u]),
        Object.prototype.hasOwnProperty.call(n, r) && n[r] && p.push(n[r][0]),
        (n[r] = 0));
    for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i]);
    d && d(t);
    while (p.length) p.shift()();
    return (a.push.apply(a, c || []), s());
  }
  function s() {
    for (var e, t = 0; t < a.length; t++) {
      for (var s = a[t], i = !0, o = 1; o < s.length; o++) {
        var l = s[o];
        0 !== n[l] && (i = !1);
      }
      i && (a.splice(t--, 1), (e = r((r.s = s[0]))));
    }
    return e;
  }
  var i = {},
    n = { app: 0 },
    a = [];
  function r(t) {
    if (i[t]) return i[t].exports;
    var s = (i[t] = { i: t, l: !1, exports: {} });
    return (e[t].call(s.exports, s, s.exports, r), (s.l = !0), s.exports);
  }
  ((r.m = e),
    (r.c = i),
    (r.d = function (e, t, s) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s });
    }),
    (r.r = function (e) {
      ("undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var s = Object.create(null);
      if (
        (r.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          r.d(
            s,
            i,
            function (t) {
              return e[t];
            }.bind(null, i),
          );
      return s;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return (r.d(t, "a", t), t);
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = "/"));
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = o.push.bind(o);
  ((o.push = t), (o = o.slice()));
  for (var c = 0; c < o.length; c++) t(o[c]);
  var d = l;
  (a.push([0, "chunk-vendors"]), s());
})({
  0: function (e, t, s) {
    e.exports = s("56d7");
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
      var t = a(e);
      return s(t);
    }
    function a(e) {
      if (!s.o(i, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return i[e];
    }
    ((n.keys = function () {
      return Object.keys(i);
    }),
      (n.resolve = a),
      (e.exports = n),
      (n.id = "4678"));
  },
  "56d7": function (e, t, s) {
    "use strict";
    s.r(t);
    (s("cadf"), s("551c"), s("f751"), s("097d"));
    var i = s("2b0e"),
      n = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t;
        return s(
          "div",
          { attrs: { id: "suppression" } },
          [
            s("header", { staticClass: "sg-feature--header" }, [
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
                            x1: "17.5029",
                            x2: "17.5029",
                            y1: ".34021",
                            y2: "34.3402",
                          },
                        },
                        [
                          s("stop", {
                            attrs: { offset: "0", "stop-color": "#e2a466" },
                          }),
                          s("stop", {
                            attrs: { offset: "1", "stop-color": "#d29449" },
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
                          x: ".50293",
                          y: ".34021",
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
                              d: "m17.46 8.50684c1.9891 0 3.8967.79017 5.3033 2.19666 1.4065 1.4066 2.1967 3.3142 2.1967 5.3033 0 6.5834-5.7767 10.2759-7.1909 11.0834-.0943.0537-.201.0819-.3096.0819-.1085 0-.2152-.0282-.3095-.0819-1.4142-.8067-7.19004-4.5-7.19004-11.0834 0-1.9891.79014-3.8967 2.19674-5.3033 1.4065-1.40649 3.3141-2.19666 5.3033-2.19666z",
                            },
                          }),
                          s("path", {
                            attrs: {
                              d: "m17.46 19.0469c1.7259 0 3.125-1.3991 3.125-3.125s-1.3991-3.125-3.125-3.125-3.125 1.3991-3.125 3.125 1.3991 3.125 3.125 3.125z",
                            },
                          }),
                          s("path", {
                            attrs: { d: "m15.251 18.1311 4.4183-4.4183" },
                          }),
                        ],
                      ),
                    ],
                    1,
                  ),
                ]),
                e._v("\n      Suppressions\n    "),
              ]),
              s("p", [
                e._v(
                  "\n      A suppression is an email address or domain that is blocked from receiving further emails. \n      Email addresses on this page are past hard bounces (from the past 7 days), spam complaints, \n      unsubscribes, manual entries, and any added by compliance.\n    ",
                ),
              ]),
            ]),
            s("reports-suppression", { ref: "suppression" }),
          ],
          1,
        );
      },
      a = [],
      r = function () {
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
                class: { "bottom-fixed": !e.isBottomOfPage },
              },
              [
                s(
                  "TitleWithExportButton",
                  {
                    ref: "titleWithExport",
                    attrs: { canModify: e.canModifySuppressions },
                  },
                  [
                    e.searchTerm
                      ? [
                          e._v(
                            '\n        "' + e._s(e.searchTerm) + '"\n        ',
                          ),
                          s("span", { staticClass: "title-results" }, [
                            e._v(" search results ("),
                            s("span", { staticClass: "output-results" }, [
                              e._v(e._s(e.totalResults) + " total"),
                            ]),
                            e._v(")"),
                          ]),
                        ]
                      : [
                          s("span", { staticClass: "desktop-title" }, [
                            e._v("Blocked recipients"),
                          ]),
                          s("span", { staticClass: "mobile-title" }, [
                            e._v("Suppressions"),
                          ]),
                        ],
                  ],
                  2,
                ),
                s(
                  "div",
                  { staticClass: "top search-grouped bar-full" },
                  [
                    s("AllFilter", { ref: "allFilter" }),
                    s("UserFilter", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: e.shouldShow,
                          expression: "shouldShow",
                        },
                      ],
                      ref: "userFilter",
                    }),
                    s("SearchBox", { ref: "searchBox" }),
                    e.isMobile && e.canModifySuppressions
                      ? s("AddSuppression", { staticClass: "mobile-only" })
                      : e._e(),
                  ],
                  1,
                ),
                s("SuppressionResultsDisplay", {
                  ref: "suppressionResultsDisplay",
                  attrs: {
                    canModify: e.canModifySuppressions,
                    searchTerm: e.searchTerm,
                  },
                }),
                s(
                  "div",
                  {
                    key: e.version,
                    staticClass: "bottom",
                    class: [
                      { "is-fixed": !e.isBottomOfPage },
                      { "is-visible": e.isCheckedPlans },
                    ],
                  },
                  [
                    e.canModifySuppressions
                      ? s("BlockButton", { ref: "blockButton" })
                      : e._e(),
                  ],
                  1,
                ),
              ],
              1,
            ),
            e.fullPageLoad ? s("AjaxLoadingSpinner") : e._e(),
          ],
          1,
        );
      },
      o = [],
      l = (s("a481"), s("ac6a"), s("c1df")),
      c = s.n(l),
      d =
        (s("7f45"),
        {
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
        }),
      u = d,
      p = {
        methods: {
          getUnixSecsRangeByDays: function (e, t) {
            var s = c.a.tz.guess();
            try {
              void 0 !== t && null !== t && (s = c.a.tz(t).tz());
            } catch (n) {}
            var i = 0;
            return void 0 !== t
              ? (e > 0 &&
                  (i = c.a
                    .tz(s)
                    .subtract(e, "days")
                    .startOf("day")
                    .utc()
                    .unix()),
                { start: i, end: c.a.tz(s).endOf("day").utc().unix() })
              : (e > 0 &&
                  (i = c.a.utc().subtract(e, "days").startOf("day").unix()),
                { start: i, end: c.a.utc().endOf("day").unix() });
          },
          getUnixSecsRangeBetweenDates: function (e, t, s) {
            var i = c.a.tz.guess(),
              n = i;
            void 0 !== s && null !== s && (n = s);
            var a = e.clone().tz(n, !0).unix(),
              r = t.clone().tz(n, !0).unix(),
              o = { start: a, end: r };
            return o;
          },
        },
      },
      h = p,
      m = s("1157"),
      f = s.n(m),
      g =
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
      v = g,
      b = {
        mixins: [v],
        created: function () {
          this.makeRequest = function (e, t, s, i, n, a, r) {
            (void 0 !== r && null !== r) || (r = !1);
            var o = this;
            (f.a.ajax(
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
                    r || o.$store.commit("runningAjaxRequestsDecrement");
                    try {
                      o.s2g_objectIsFunction(a) && a(e);
                    } catch (s) {
                      console.error(
                        "encountered error in AJAXBackendMixin, err:",
                        s,
                      );
                    }
                  } else {
                    r || o.$store.commit("runningAjaxRequestsDecrement");
                    try {
                      "error" in e.responseJSON && o.s2g_objectIsFunction(a)
                        ? a(e)
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
              r || o.$store.commit("runningAjaxRequestsIncrement"));
          };
        },
        methods: {
          mixinAjax_get: function (e, t, s, i, n, a) {
            return this.makeRequest("GET", e, t, s, i, n, a);
          },
          mixinAjax_post: function (e, t, s, i, n, a) {
            return this.makeRequest("POST", e, t, s, i, n, a);
          },
          mixinAjax_put: function (e, t, s, i, n, a) {
            return this.makeRequest("PUT", e, t, s, i, n, a);
          },
          mixinAjax_delete: function (e, t, s, i, n, a) {
            return this.makeRequest("DELETE", e, t, s, i, n, a);
          },
        },
      },
      _ = b,
      C = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t;
        return s("div", { staticClass: "card--tab has-functions" }, [
          s("h2", { staticClass: "card--title" }, [e._t("default")], 2),
          s(
            "div",
            { staticClass: "card-functions" },
            [
              e.includeAddSuppression && !e.isMobile && e.canModify
                ? s("AddSuppression", { staticClass: "desktop-only" })
                : e._e(),
              s("ExportButton", { ref: "exportButton" }),
            ],
            1,
          ),
        ]);
      },
      y = [],
      k = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t;
        return s(
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
            staticClass: "drop-content top-pull right",
          },
          [
            s(
              "button",
              {
                staticClass: "export button-download",
                attrs: { type: "button", role: "button" },
                on: { click: e.triggerable_toggleOpened },
              },
              [e._v("\n    Export\n  ")],
            ),
            s(
              "ul",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: e.triggerable_isOpen,
                    expression: "triggerable_isOpen",
                  },
                ],
                staticClass:
                  "dropdown-menu dropdown-options is-active mixin-triggerable-layer",
                attrs: { id: "dropdown-download" },
              },
              [
                e._l(e.downloadOptions, function (t) {
                  return s("li", { key: t.id }, [
                    s(
                      "a",
                      {
                        attrs: {
                          id: "export-link",
                          href: "javascript:void(0);",
                        },
                        on: {
                          click: function (s) {
                            return e.downloadFile(s, t.id);
                          },
                        },
                      },
                      [e._v("\n        " + e._s(t.label) + "\n      ")],
                    ),
                  ]);
                }),
                e._m(0),
                e._l(e.columnFilters, function (t) {
                  return s(
                    "li",
                    {
                      key: t.id,
                      staticClass: "columns-filter desktop-hide",
                      on: {
                        click: function (s) {
                          return e.handleColumnToggle(s, t);
                        },
                      },
                    },
                    [
                      s("div", { staticClass: "column-indicator" }, [
                        s("div", { staticClass: "checker" }, [
                          s(
                            "span",
                            {
                              staticClass: "checker-box",
                              class: { checked: e.shownColumns[t.id] },
                            },
                            [s("input", { attrs: { type: "checkbox" } })],
                          ),
                        ]),
                        s("span", { staticClass: "column-indicator-copy" }, [
                          e._v(e._s(t.label)),
                        ]),
                      ]),
                    ],
                  );
                }),
              ],
              2,
            ),
          ],
        );
      },
      w = [
        function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s("li", { staticClass: "desktop-hide optional-rows" }, [
            s("strong", [e._v("Optional rows:")]),
          ]);
        },
      ],
      x =
        (s("7f7f"),
        s("7514"),
        {
          data: function () {
            return { layers: [], isOpen: !1, isMobile: !1 };
          },
          created: function () {
            (f()(".page-content-wrapper .page-content").on(
              "click.Bst",
              this.$_windowClicked,
            ),
              this.$eventBus.$on("mixin-triggerable-opened", this.$_opened));
          },
          mounted: function () {
            var e = this;
            ((this.layers = f()(this.$el).find(".mixin-triggerable-layer")),
              this.updateDevice(),
              window.addEventListener("resize", function () {
                e.updateDevice();
              }));
          },
          destroyed: function () {
            (f()(window).off(
              ".page-content-wrapper .page-content",
              this.$_windowClicked,
            ),
              this.$eventBus.$off("mixin-triggerable-opened", this.$_opened));
          },
          methods: {
            $_windowClicked: function (e) {
              for (var t = !1, s = 0; s < this.layers.length; ++s) {
                var i = f()(this.layers[s]);
                this.isOpen &&
                  (0 !== i.has(e.target).length || i.is(e.target)) &&
                  (t = !0);
              }
              (this.isOpen != t && this.$_emitEvent(t), (this.isOpen = t));
            },
            $_opened: function (e) {
              e === this.$options.name ||
              ("AllFilter" === this.$options.name &&
                ("PeriodFilter" === e || "EventFilter" === e))
                ? (this.$eventBus.$emit("mixin-global-triggerable-opened"),
                  (this.isOpen = !0))
                : (this.isOpen = !1);
            },
            $_emitEvent: function (e) {
              if (e)
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
            triggerable_toggleOpened: function (e) {
              (e.stopImmediatePropagation(),
                (this.isOpen = !this.isOpen),
                this.$_emitEvent(this.isOpen));
            },
            triggerable_toggleClose: function (e) {
              (e.stopImmediatePropagation(),
                (this.isOpen = !1),
                this.$_emitEvent(this.isOpen));
            },
            updateDevice: function () {
              screen.width < 768 ? (this.isMobile = !0) : (this.isMobile = !1);
            },
          },
          computed: {
            triggerable_isOpen: function () {
              return this.isOpen;
            },
          },
        }),
      S = x,
      j = {
        name: "ExportButton",
        mixins: [S],
        data: function () {
          return {
            downloadOptions: this.$config.downloadOptions,
            shownColumns: {},
            displayColumns: this.$config.displayColumns,
            initialised: !1,
            requestPoint: this.$config.requestPoint,
          };
        },
        methods: {
          initExportButton: function () {
            this.initialised = !0;
          },
          updateShownColumns: function (e) {
            this.shownColumns = e;
          },
          handleColumnToggle: function (e, t) {
            void 0 !== e && e.stopImmediatePropagation();
            var s = this.shownColumns[t.id];
            (this.$set(this.shownColumns, t.id, !s),
              this.$set(t, "active", !s),
              this.$eventBus.$emit("mixin-column-has-changed"));
          },
          downloadFile: function (e, t) {
            (f()(".notice.main.error").empty().removeClass("visible"),
              this.$eventBus.$emit("mixin-download-file-triggered", t),
              this.triggerable_toggleClose(e));
          },
        },
        computed: {
          shouldShow: function () {
            return (
              !!this.initialised || 0 === this.$store.state.runningAjaxRequests
            );
          },
          columnFilters: function () {
            return this.displayColumns.filter(function (e) {
              return e.filterable;
            });
          },
        },
      },
      D = j,
      O = s("2877"),
      T = Object(O["a"])(D, k, w, !1, null, null, null),
      P = T.exports,
      B = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t;
        return s("div", { staticClass: "drop-content add-suppression" }, [
          s(
            "button",
            {
              staticClass: "btn button-download",
              attrs: { type: "button", role: "button" },
              on: { click: e.triggerable_toggleOpened },
            },
            [
              e._v("\n    Add"),
              s("span", { staticClass: "hide-mobile" }, [e._v(" suppression")]),
              s("span", { staticClass: "hide-desktop" }, [e._v(" new")]),
            ],
          ),
          s(
            "ul",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: e.triggerable_isOpen,
                  expression: "triggerable_isOpen",
                },
              ],
              staticClass:
                "dropdown-menu dropdown-options is-active mixin-triggerable-layer",
              attrs: { id: "dropdown-add-suppression" },
            },
            [
              s("transition", { attrs: { name: "fade" } }, [
                e.manualBlock
                  ? s("li", { staticClass: "block-toggle block-manual" }, [
                      s("ul", [
                        s("li", [
                          s("h5", [e._v("Manually block a recipient")]),
                          s("p", [
                            e._v(
                              "Manually add a recipient email address or domain to block them from receiving any future emails.",
                            ),
                          ]),
                        ]),
                        s("li", [
                          s("div", { staticClass: "email-add" }, [
                            s("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: e.addRecipient,
                                  expression: "addRecipient",
                                },
                              ],
                              attrs: {
                                type: "text",
                                id: "email",
                                placeholder: "Email or Domain...",
                              },
                              domProps: { value: e.addRecipient },
                              on: {
                                input: function (t) {
                                  t.target.composing ||
                                    (e.addRecipient = t.target.value);
                                },
                              },
                            }),
                            s("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: e.addDescription,
                                  expression: "addDescription",
                                },
                              ],
                              attrs: {
                                type: "text",
                                id: "block_description",
                                placeholder: "Reason (optional)",
                              },
                              domProps: { value: e.addDescription },
                              on: {
                                input: function (t) {
                                  t.target.composing ||
                                    (e.addDescription = t.target.value);
                                },
                              },
                            }),
                            s("input", {
                              staticClass: "btn blue block-email",
                              attrs: { type: "button", value: "Block" },
                              on: { click: e.singleBlockClick },
                            }),
                            s(
                              "p",
                              { staticClass: "suppression-dropdown-footer" },
                              [
                                e._v("Or you can\n                "),
                                s(
                                  "a",
                                  {
                                    staticClass: "toggle-block",
                                    attrs: { href: "javascript:void(0);" },
                                    on: { click: e.toggleBlock },
                                  },
                                  [e._v(" Upload a CSV file...")],
                                ),
                              ],
                            ),
                          ]),
                        ]),
                      ]),
                    ])
                  : e._e(),
              ]),
              s("transition", { attrs: { name: "fade" } }, [
                e.manualBlock
                  ? e._e()
                  : s("li", { staticClass: "block-toggle block-csv" }, [
                      s("ul", [
                        s("li", [
                          s("h5", [e._v("Upload CSV")]),
                          s("p", [
                            e._v(
                              "\n              Block many recipients at once by uploading a CSV of emails and domains to block.\n              Note: the first column must be the email address/domain to be blocked; an optional second column containing a reason can be included.\n            ",
                            ),
                          ]),
                        ]),
                        s("li", [
                          s(
                            "div",
                            {
                              staticClass: "form-horizontal",
                              attrs: { id: "upload-csv-form" },
                            },
                            [
                              s(
                                "div",
                                { staticClass: "input-file-container" },
                                [
                                  s("input", {
                                    ref: "csvFile",
                                    attrs: {
                                      type: "file",
                                      id: "choose-csv-file",
                                    },
                                    on: { change: e.addCSVFile },
                                  }),
                                ],
                              ),
                              s("input", {
                                staticClass: "modal-upload-block btn blue",
                                attrs: {
                                  type: "button",
                                  value: "Upload and block",
                                },
                                on: { click: e.csvBlockClick },
                              }),
                              s(
                                "p",
                                { staticClass: "suppression-dropdown-footer" },
                                [
                                  e._v("Or you can\n                "),
                                  s(
                                    "a",
                                    {
                                      staticClass: "toggle-block",
                                      attrs: { href: "javascript:void(0);" },
                                      on: { click: e.toggleBlock },
                                    },
                                    [e._v("Add individually...")],
                                  ),
                                ],
                              ),
                            ],
                          ),
                        ]),
                      ]),
                    ]),
              ]),
            ],
            1,
          ),
        ]);
      },
      E = [],
      R = s("bc3a"),
      A = s.n(R),
      M = {
        name: "AddSuppression",
        mixins: [S, _],
        data: function () {
          return {
            manualBlock: !0,
            requestPoint: this.$config.requestPoint,
            addRecipient: "",
            addDescription: "",
            csvFile: "",
            screenWidth: screen.width,
            isMobile: !1,
          };
        },
        methods: {
          toggleBlock: function () {
            ((this.manualBlock = !this.manualBlock),
              this.manualBlock
                ? f()("#dropdown-add-suppression").removeClass("is-block-csv")
                : f()("#dropdown-add-suppression").addClass("is-block-csv"));
          },
          singleBlockClick: function (e) {
            var t = this,
              s = {
                add_description: this.addDescription,
                add_recipient: this.addRecipient,
              };
            (this.mixinAjax_put(
              this.requestPoint,
              "add-suppression",
              s,
              function (e) {
                (HTML.set_time(e.responseJSON),
                  t.$eventBus.$emit("mixin-search-has-changed"),
                  t.$eventBus.$emit("mixin-search-trigger"));
              },
              function (e) {
                HTML.handleError(e.responseJSON);
              },
            ),
              this.triggerable_toggleClose(e));
          },
          addCSVFile: function () {
            this.csvFile = this.$refs.csvFile.files[0];
          },
          csvBlockClick: function (e) {
            var t = this,
              s = this.csvFile.name.toLowerCase();
            if ("csv" !== s.substring(s.length - 3, s.length))
              return (
                HTML.alertUser(HTML.alertType.error, "File must be a .csv."),
                !1
              );
            var i = END_POINTS.urls()[this.requestPoint];
            ((i += "?action=add-suppression-csv"),
              (i += "&CSRF_key=" + encodeURIComponent(HTML.csrfkey)));
            var n = new FormData();
            n.append("file", this.csvFile);
            var a = { headers: { "Content-Type": "multipart/form-data" } };
            (A.a
              .post(i, n, a)
              .then(function (e) {
                (t.$store.commit("runningAjaxRequestsDecrement"),
                  "OK" === e.data.status
                    ? (t.showPopupAlert(e.data),
                      t.$eventBus.$emit("mixin-search-has-changed"),
                      t.$eventBus.$emit("mixin-search-trigger"))
                    : HTML.handleError(e.data));
              })
              .catch(function (e) {
                t.$store.commit("runningAjaxRequestsDecrement");
                var s = {};
                ((s.error =
                  "An unknown " + e + " occurred, please try again shortly."),
                  HTML.handleError(s));
              }),
              this.$store.commit("runningAjaxRequestsIncrement"),
              this.triggerable_toggleClose(e));
          },
          showPopupAlert: function (e) {
            if (
              0 === e.invalid_emails.length &&
              !e.invalid_header &&
              0 === e.duplicates_skipped &&
              0 === e.total_failed
            )
              return (HTML.set_time(e), !1);
            var t = HTML.alertType.success,
              s = f()("<p></p>"),
              i =
                e.number_of_emails_read -
                e.invalid_emails.length -
                e.total_failed;
            if (
              (e.invalid_header && i--,
              s.append(i + " email addresses added successfully."),
              e.total_failed > 0 &&
                s.append(" " + e.total_failed + " already existed."),
              e.duplicates_skipped > 0)
            ) {
              var n = this.getPluralWord(e.duplicates_skipped, "duplicate");
              s.append(" " + e.duplicates_skipped + " " + n + " skipped.");
            }
            if (
              (e.invalid_header && s.append(" 1 header row skipped."),
              e.invalid_emails.length > 0)
            ) {
              (s.append(
                " " +
                  e.invalid_emails.length +
                  " email addresses not added due to invalid format: </br>",
              ),
                (t = HTML.alertType.warning));
              var a = e.invalid_emails,
                r = f()("<span></span>").text(a.splice(0, 5).join(", "));
              if ((r.addClass("used-by used-by-suppressions"), a.length > 0)) {
                var o = f()("<span></span>").addClass("usedby-more"),
                  l = f()("<a></a>").attr("href", "javascript:void(0");
                l.text("and " + a.length + " more");
                for (
                  var c = f()("<span></span>").addClass("usedby-tooltip"),
                    d = 0;
                  d < a.length;
                  d++
                )
                  (0 != d && c.append(f()("<br>")),
                    c.append(f()("<span></span>").text(a[d])));
                (l.append(c), o.append(l), r.append(o));
              }
              s.append(r);
            }
            HTML.alertUser(t, s.text());
          },
          getPluralWord: function (e, t) {
            return e > 1 ? t + "s" : t;
          },
          updateDevice: function () {
            screen.width < 768 ? (this.isMobile = !0) : (this.isMobile = !1);
          },
        },
        mounted: function () {
          var e = this;
          (this.updateDevice(),
            window.addEventListener("resize", function () {
              e.updateDevice();
            }));
        },
      },
      F = M,
      U = Object(O["a"])(F, B, E, !1, null, null, null),
      L = U.exports,
      q = {
        name: "TitleWithExportButton",
        components: { ExportButton: P, AddSuppression: L },
        props: { canModify: Boolean },
        data: function () {
          return {
            initialised: !1,
            includeAddSuppression: this.$config.includeAddSuppression,
            isMobile: !1,
          };
        },
        methods: {
          initTitleWithExport: function () {
            (this.$refs.exportButton.initExportButton(),
              (this.initialised = !0));
          },
          updateDevice: function () {
            screen.width < 768 ? (this.isMobile = !0) : (this.isMobile = !1);
          },
        },
        mounted: function () {
          var e = this;
          (this.updateDevice(),
            window.addEventListener("resize", function () {
              e.updateDevice();
            }));
        },
      },
      H = q,
      z = Object(O["a"])(H, C, y, !1, null, null, null),
      N = z.exports,
      I = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t;
        return s(
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
            staticClass: "search",
          },
          [
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
                      value: e.primarySearchKeyword,
                      expression: "primarySearchKeyword",
                    },
                  ],
                  staticClass:
                    "form-control input-small input-inline mixin-triggerable-layer",
                  attrs: {
                    type: "search",
                    "aria-controls": "emails_bounces",
                    id: "main-search",
                    placeholder: e.searchPlaceHolder,
                  },
                  domProps: { value: e.primarySearchKeyword },
                  on: {
                    input: [
                      function (t) {
                        t.target.composing ||
                          (e.primarySearchKeyword = t.target.value);
                      },
                      e.mainSearchChanged,
                    ],
                    keyup: e.isEnterTyped,
                  },
                }),
                e.searchOptions.length > 0
                  ? s(
                      "a",
                      {
                        staticClass: "toggle-search-options",
                        attrs: { href: "javascript:void(0);" },
                        on: { click: e.triggerable_toggleOpened },
                      },
                      [s("i", { staticClass: "fa fa-angle-down" })],
                    )
                  : e._e(),
                s(
                  "button",
                  {
                    staticClass: "btn blue btn-search",
                    attrs: {
                      type: "button",
                      role: "button",
                      disabled: e.requestActive,
                    },
                    on: { click: e.forcePerformSearch },
                  },
                  [
                    s("span", { staticClass: "icon-search" }),
                    s("span", { staticClass: "button-text" }, [
                      e._v(" Search"),
                    ]),
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
                    value: e.triggerable_isOpen,
                    expression: "triggerable_isOpen",
                  },
                ],
                staticClass: "search-options open mixin-triggerable-layer",
              },
              [
                s(
                  "ul",
                  { staticClass: "dropdown-menu" },
                  [
                    e._l(e.searchOptions, function (t, i) {
                      return s("li", { key: i }, [
                        s("label", { staticClass: "control-label" }, [
                          e._v(e._s(t.label) + ":"),
                        ]),
                        "hasAttachment" !== i
                          ? s("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.trim",
                                  value: t.value,
                                  expression: "searchOption.value",
                                  modifiers: { trim: !0 },
                                },
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: t.value },
                              on: {
                                input: [
                                  function (s) {
                                    s.target.composing ||
                                      e.$set(t, "value", s.target.value.trim());
                                  },
                                  e.subSearchChanged,
                                ],
                                keyup: e.isEnterTyped,
                                blur: function (t) {
                                  return e.$forceUpdate();
                                },
                              },
                            })
                          : e._e(),
                        "hasAttachment" === i
                          ? s("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.trim",
                                  value: t.value,
                                  expression: "searchOption.value",
                                  modifiers: { trim: !0 },
                                },
                              ],
                              staticClass:
                                "form-control search-attachment-checkbox",
                              attrs: { type: "checkbox" },
                              domProps: {
                                checked: Array.isArray(t.value)
                                  ? e._i(t.value, null) > -1
                                  : t.value,
                              },
                              on: {
                                click: e.searchChanged,
                                change: function (s) {
                                  var i = t.value,
                                    n = s.target,
                                    a = !!n.checked;
                                  if (Array.isArray(i)) {
                                    var r = null,
                                      o = e._i(i, r);
                                    n.checked
                                      ? o < 0 &&
                                        e.$set(t, "value", i.concat([r]))
                                      : o > -1 &&
                                        e.$set(
                                          t,
                                          "value",
                                          i.slice(0, o).concat(i.slice(o + 1)),
                                        );
                                  } else e.$set(t, "value", a);
                                },
                              },
                            })
                          : e._e(),
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
                            disabled: e.requestActive,
                          },
                          on: { click: e.forcePerformSearch },
                        },
                        [
                          s("span", { staticClass: "icon-search" }),
                          e._v("\n          Search\n        "),
                        ],
                      ),
                    ]),
                  ],
                  2,
                ),
              ],
            ),
          ],
        );
      },
      W = [],
      J = {
        name: "SearchBox",
        mixins: [S],
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
          isEnterTyped: function (e) {
            if (this.isEnter(e)) return !1;
          },
          mainSearchChanged: function () {
            this.$eventBus.$emit("mixin-search-has-changed");
            var e,
              t = /([^\W]+)\s{0,}[:|=]\s{0,}(["'])(.*?)\2/g,
              s = this.primarySearchKeyword;
            for (var i in this.searchOptions) this.searchOptions[i].value = "";
            while (null !== (e = t.exec(this.primarySearchKeyword)))
              for (var n in this.searchOptions)
                e[1] == n &&
                  ((s = s.replace(e[0], "")),
                  (this.searchOptions[n].value = e[3]));
            this.mainSearch = s.trim();
          },
          subSearchChanged: function () {
            this.$eventBus.$emit("mixin-search-has-changed");
            var e = [];
            for (var t in this.searchOptions)
              "" !== this.searchOptions[t].value &&
                null !== this.searchOptions[t].value &&
                void 0 !== this.searchOptions[t].value &&
                "hasAttachment" !== t &&
                e.push(t + ":'" + this.searchOptions[t].value + "'");
            (e.push(this.mainSearch),
              (this.primarySearchKeyword = e.join(" ")));
          },
          isEnter: function (e) {
            return (
              13 == e.keyCode &&
              !this.requestActive &&
              (this.forcePerformSearch(e), !0)
            );
          },
          forcePerformSearch: function (e) {
            (this.$eventBus.$emit("mixin-search-has-changed"),
              this.triggerable_toggleClose(e));
          },
          getMainSearch: function () {
            return this.mainSearch;
          },
        },
        computed: {
          requestActive: function () {
            return 1 === this.$store.state.runningAjaxRequests;
          },
          shouldShow: function () {
            return !!this.initialised || !this.requestActive;
          },
        },
      },
      K = J,
      G = Object(O["a"])(K, I, W, !1, null, null, null),
      Y = G.exports,
      V = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t;
        return e.shouldShow
          ? s(
              "table",
              {
                staticClass:
                  "dataTable table table-striped table-hover display loading-in",
                class: [
                  e.visibleClass,
                  { "dropdown-active": e.globalTriggerable_isAnyDropDownOpen },
                ],
                attrs: { id: "bounce-dtable" },
              },
              [
                s("thead", [
                  s(
                    "tr",
                    [
                      e.numSuppressions > 0
                        ? s(
                            "th",
                            {
                              staticClass: "cell-record event-indicator",
                              attrs: { id: "table-checkbox" },
                            },
                            [
                              e.canModify
                                ? s(
                                    "div",
                                    {
                                      staticClass: "checker",
                                      on: { click: e.allResultsClick },
                                    },
                                    [
                                      s(
                                        "span",
                                        {
                                          class: [
                                            { checked: e.allResultsChecked },
                                            {
                                              indeterminate:
                                                e.isSomeHighlighted,
                                            },
                                          ],
                                        },
                                        [
                                          s("input", {
                                            attrs: { type: "checkbox" },
                                            domProps: {
                                              checked: {
                                                checked: e.allResultsChecked,
                                              },
                                            },
                                          }),
                                        ],
                                      ),
                                    ],
                                  )
                                : e._e(),
                            ],
                          )
                        : e._e(),
                      e._l(e.activeColumns, function (t) {
                        return s(
                          "th",
                          {
                            key: t.id,
                            class: {
                              "is-full-date":
                                e.isFullDateInResults &&
                                "date_display" === t.id,
                            },
                            attrs: { id: "table-" + t.id },
                          },
                          [
                            e._v("\n        " + e._s(t.label) + "\n        "),
                            "reason" === t.id && e.numSuppressions > 0
                              ? s("div", { staticClass: "input-icon" }, [
                                  s("i", {
                                    directives: [
                                      {
                                        name: "tooltip",
                                        rawName: "v-tooltip.top",
                                        value:
                                          "The suppression type: Hard Bounce, Spam, Unsubscribe or Manual.",
                                        expression:
                                          "'The suppression type: Hard Bounce, Spam, Unsubscribe or Manual.'",
                                        modifiers: { top: !0 },
                                      },
                                    ],
                                    staticClass: "fa fa-info-circle tooltips",
                                  }),
                                ])
                              : e._e(),
                          ],
                        );
                      }),
                      s("th", { attrs: { id: "table-options" } }, [
                        s("div", { staticClass: "dropdown-container" }, [
                          s(
                            "span",
                            {
                              staticClass: "dropdown-icon-container",
                              on: { click: e.triggerable_toggleOpened },
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
                                  value: e.triggerable_isOpen,
                                  expression: "triggerable_isOpen",
                                },
                              ],
                              staticClass:
                                "dropdown-menu dropdown-options column-filter is-active mixin-triggerable-layer",
                              attrs: { id: "columns" },
                            },
                            [
                              e._m(0),
                              e._l(e.columnFilters, function (t) {
                                return s(
                                  "li",
                                  {
                                    key: t.id,
                                    staticClass: "columns-filter",
                                    attrs: { id: "columns-filter-" + t.id },
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
                                        s("div", { staticClass: "checker" }, [
                                          s(
                                            "span",
                                            {
                                              staticClass: "checker-box",
                                              class: {
                                                checked: e.shownColumns[t.id],
                                              },
                                            },
                                            [
                                              s("input", {
                                                attrs: {
                                                  type: "checkbox",
                                                  name: "columns[]",
                                                },
                                                domProps: { value: t.id },
                                              }),
                                            ],
                                          ),
                                        ]),
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
                      ]),
                    ],
                    2,
                  ),
                ]),
                s(
                  "tbody",
                  [
                    e._l(e.suppressionResults, function (t, i) {
                      return s(
                        "tr",
                        {
                          key: i + e.componentKey,
                          staticClass: "suppression-result-wrapper",
                          on: {
                            click: function (s) {
                              return e.mobileResultClick(t);
                            },
                          },
                        },
                        [
                          s(
                            "td",
                            { staticClass: "cell-record event-indicator" },
                            [
                              "compliance" !== t.reason && e.canModify
                                ? s(
                                    "div",
                                    {
                                      staticClass: "checker",
                                      on: {
                                        click: function (s) {
                                          return (
                                            s.stopPropagation(),
                                            s.preventDefault(),
                                            e.resultClick(t)
                                          );
                                        },
                                      },
                                    },
                                    [
                                      s(
                                        "span",
                                        { class: { checked: t.checked } },
                                        [
                                          s("input", {
                                            attrs: { type: "checkbox" },
                                            domProps: {
                                              checked: { checked: t.checked },
                                            },
                                          }),
                                        ],
                                      ),
                                    ],
                                  )
                                : e._e(),
                            ],
                          ),
                          e._l(e.activeColumns, function (i) {
                            return s(
                              "td",
                              {
                                key: i.id,
                                class: [
                                  "cell-" + i.id,
                                  {
                                    "cell-hidden": !e.activeColumnsWithData(
                                      i.id,
                                      t,
                                    ),
                                  },
                                ],
                                on: {
                                  click: function (t) {
                                    return e.columnClick(t, i);
                                  },
                                },
                              },
                              [
                                "date_display" === i.id
                                  ? s(
                                      "span",
                                      { attrs: { title: t[i.id].title } },
                                      [
                                        s(
                                          "span",
                                          {
                                            staticClass: "date",
                                            class: { hide: t[i.id].hideDate },
                                          },
                                          [
                                            e._v(
                                              "\n           " +
                                                e._s(t[i.id].date) +
                                                " \n         ",
                                            ),
                                          ],
                                        ),
                                        s(
                                          "span",
                                          {
                                            class: t[i.id].boldTime
                                              ? "time-large"
                                              : "time",
                                          },
                                          [
                                            e._v(
                                              "\n           " +
                                                e._s(t[i.id].time) +
                                                "\n         ",
                                            ),
                                          ],
                                        ),
                                      ],
                                    )
                                  : "reason" === i.id
                                    ? s("span", {
                                        staticClass: "long-event-indicator",
                                        class: e.displayIconClass(t[i.id]),
                                      })
                                    : "description" === i.id
                                      ? s(
                                          "span",
                                          { attrs: { title: t.description } },
                                          [e._v(e._s(t[i.id]))],
                                        )
                                      : s("span", [e._v(e._s(t[i.id]))]),
                              ],
                            );
                          }),
                          e.canModify
                            ? s("td", { staticClass: "table-action" }, [
                                "compliance" !== t.reason
                                  ? s(
                                      "div",
                                      {
                                        staticClass:
                                          "drop-content is-active suppression-delete-popup",
                                        class: {
                                          "options-on": t.displayDeletePopup,
                                        },
                                      },
                                      [
                                        s(
                                          "a",
                                          {
                                            staticClass: "table-remove-toggler",
                                            on: {
                                              click: function (s) {
                                                return e.deletePopupClick(t);
                                              },
                                            },
                                          },
                                          [e._v("×")],
                                        ),
                                        t.displayDeletePopup
                                          ? s(
                                              "ul",
                                              {
                                                staticClass:
                                                  "dropdown-menu dropdown-options ",
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
                                                          return e.performDeleteClick(
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
                                                        "table-remove-cancel",
                                                      attrs: {
                                                        href: "javascript:void(0);",
                                                      },
                                                      on: {
                                                        click: function (s) {
                                                          return e.closeDeletePopUpClick(
                                                            t,
                                                          );
                                                        },
                                                      },
                                                    },
                                                    [e._v("Cancel")],
                                                  ),
                                                ]),
                                              ],
                                            )
                                          : e._e(),
                                      ],
                                    )
                                  : e._e(),
                                "compliance" === t.reason
                                  ? s("span", {
                                      directives: [
                                        {
                                          name: "tooltip",
                                          rawName: "v-tooltip",
                                          value: {
                                            content:
                                              "This suppression was added by us, due to a direct complaint being made.",
                                            classes: "not-deletable-popup",
                                          },
                                          expression:
                                            "{ content: 'This suppression was added by us, due to a direct complaint being made.', classes: 'not-deletable-popup'}",
                                        },
                                      ],
                                      staticClass:
                                        "tooltip-type-link not-deletable",
                                    })
                                  : e._e(),
                              ])
                            : e._e(),
                        ],
                        2,
                      );
                    }),
                    e.requestActive &&
                    e.numSuppressions > 0 &&
                    e.$parent.showMoreLink
                      ? s("tr", { staticClass: "loading" }, [e._m(1)])
                      : e._e(),
                    !e.requestActive &&
                    e.numSuppressions > 0 &&
                    e.$parent.showMoreLink
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
                                  on: { click: e.loadMoreResults },
                                },
                                [e._v("Load More Results")],
                              ),
                            ],
                          ),
                        ])
                      : e._e(),
                    e.requestActive || 0 != e.numSuppressions
                      ? e._e()
                      : s("tr", { staticClass: "no-results" }, [e._m(2)]),
                  ],
                  2,
                ),
              ],
            )
          : e._e();
      },
      X = [
        function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s("li", [
            s("p", [
              s("strong", [e._v("Display optional columns")]),
              s("br"),
              e._v(
                "Choose to show optional columns (works best on large screens)",
              ),
            ]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
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
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s("td", { attrs: { colspan: "100%" } }, [
            s("div", { staticClass: "table-blank" }, [
              s("div", { staticClass: "table-blank-content" }, [
                s("p", [e._v("You haven't blocked any recipients yet.")]),
              ]),
            ]),
          ]);
        },
      ],
      Z = s("6f56"),
      Q = s.n(Z),
      ee = {
        data: function () {
          return { isAnyDropDownOpen: !1 };
        },
        created: function () {
          (this.$eventBus.$on(
            "mixin-global-triggerable-opened",
            this.$_globalOpened,
          ),
            this.$eventBus.$on(
              "mixin-global-triggerable-closed",
              this.$_globalClosed,
            ));
        },
        destroyed: function () {
          (this.$eventBus.$off(
            "mixin-global-triggerable-opened",
            this.$_globalOpened,
          ),
            this.$eventBus.$off(
              "mixin-global-triggerable-closed",
              this.$_globalClosed,
            ));
        },
        methods: {
          $_globalOpened: function () {
            this.isAnyDropDownOpen = !0;
          },
          $_globalClosed: function () {
            this.isAnyDropDownOpen = !1;
          },
        },
        computed: {
          globalTriggerable_isAnyDropDownOpen: function () {
            return this.isAnyDropDownOpen;
          },
        },
      },
      te = ee,
      se = {
        name: "SuppressionResultsDisplay",
        mixins: [_, S, te],
        props: { canModify: Boolean, searchTerm: String },
        data: function () {
          return {
            suppressionResults: [],
            isSomeHighlighted: !1,
            shownColumns: {},
            initialised: !1,
            requestPoint: this.$config.requestPoint,
            displayColumns: this.$config.displayColumns,
            allResultsChecked: !1,
            markJSInstance: new Q.a(".cell-recipient"),
            componentKey: 0,
          };
        },
        methods: {
          activeColumnsWithData: function (e, t) {
            return (
              t.hasOwnProperty(e) &&
              void 0 !== t[e] &&
              null !== t[e] &&
              "" !== t[e]
            );
          },
          initSuppressionResultsDisplay: function () {
            this.initialised = !0;
          },
          highlightSearchTerm: function () {
            var e = this;
            this.$nextTick(function () {
              e.searchTerm && e.markJSInstance.mark(e.searchTerm);
            });
          },
          updateSuppressionResults: function (e, t) {
            var s = this;
            ((this.componentKey += 1),
              this.$nextTick(function () {
                ((s.suppressionResults = e),
                  (s.shownColumns = t),
                  s.displayColumns.forEach(function (e) {
                    var t = s.shownColumns[e.id];
                    !e.active && t && s.$set(e, "active", t);
                  }),
                  s.addLongDescriptionClass(),
                  s.highlightSearchTerm());
              }));
          },
          handleColumnToggle: function (e, t) {
            void 0 !== e && e.stopImmediatePropagation();
            var s = this.shownColumns[t.id];
            (this.$set(this.shownColumns, t.id, !s),
              this.$set(t, "active", !s),
              this.$eventBus.$emit("mixin-column-has-changed"));
          },
          loadMoreResults: function () {
            (this.$eventBus.$emit("mixin-load-more"),
              this.$eventBus.$emit("mixin-search-trigger"));
          },
          allResultsClick: function () {
            var e = this;
            ((this.allResultsChecked = !this.allResultsChecked),
              this.suppressionResults.forEach(function (t) {
                e.$set(t, "checked", e.allResultsChecked);
              }));
          },
          resultClick: function (e) {
            "compliance" != e.reason && this.$set(e, "checked", !e.checked);
          },
          mobileResultClick: function (e) {
            screen.width < 768 && this.resultClick(e);
          },
          deletePopupClick: function (e) {
            var t = e.displayDeletePopup;
            (this.hideAllDeletePopup(), this.$set(e, "displayDeletePopup", !t));
          },
          mobileDeletePopupClick: function (e) {
            screen.width < 768 && this.deletePopupClick(e);
          },
          performDeleteClick: function (e) {
            var t = [e].map(function (e) {
                var t = e.recipient,
                  s = e.reason;
                return { recipient: t, reason: s };
              }),
              s = { suppressions: t };
            (this.$set(e, "displayDeletePopup", !1),
              this.performDeleteSuppression(s));
          },
          closeDeletePopUpClick: function (e) {
            this.$set(e, "displayDeletePopup", !1);
          },
          windowClicked: function (e) {
            var t = ".suppression-delete-popup";
            (screen.width < 768 && (t = ".suppression-result-wrapper"),
              f()(e.target).parents(t).length || this.hideAllDeletePopup());
          },
          hideAllDeletePopup: function () {
            var e = this;
            this.suppressionResults.forEach(function (t) {
              e.$set(t, "displayDeletePopup", !1);
            });
          },
          displayIconClass: function (e) {
            return "compliance#suppression #bounce-dtable .not-deletable::after" ===
              e
              ? "compliance"
              : "unsubscribe" === e
                ? "unsubscribed"
                : e;
          },
          performDeleteSuppression: function (e) {
            var t = this;
            e.suppressions.forEach(function (e) {
              e["reason"] = e["reason"].replace("hard-bounced", "bounce");
            });
            var s = { suppressions_to_delete: JSON.stringify(e) };
            this.mixinAjax_put(
              this.requestPoint,
              "delete",
              s,
              function (e) {
                (HTML.set_time(e.responseJSON),
                  t.$eventBus.$emit("mixin-search-has-changed"),
                  t.$eventBus.$emit("mixin-search-trigger"));
              },
              function (e) {
                HTML.handleError(e.responseJSON);
              },
            );
          },
          columnClick: function (e, t) {
            if ("description" === t.id) {
              void 0 !== e &&
                screen.width < 768 &&
                (e.preventDefault(), e.stopPropagation());
              var s = f()(e.target).closest(".long-description");
              s.toggleClass("more-description");
            }
          },
          addLongDescriptionClass: function () {
            this.$nextTick(function () {
              f()(".cell-description").each(function (e, t) {
                (f()(t).removeClass("long-description"),
                  (t.offsetWidth < t.scrollWidth || t.offsetHeight > 20) &&
                    f()(t).addClass("long-description"));
              });
            });
          },
        },
        computed: {
          numSuppressions: function () {
            return this.suppressionResults.length;
          },
          requestActive: function () {
            return 1 === this.$store.state.runningAjaxRequests;
          },
          shouldShow: function () {
            return !!this.initialised || !this.requestActive;
          },
          visibleClass: function () {
            var e = "";
            return (
              this.columnFilters.forEach(function (t) {
                e += t.active ? t.id + "-visible " : "";
              }),
              e
            );
          },
          activeColumns: function () {
            return this.displayColumns.filter(function (e) {
              return e.active;
            });
          },
          columnFilters: function () {
            return this.displayColumns.filter(function (e) {
              return e.filterable;
            });
          },
          isFullDateInResults: function () {
            var e = !1;
            return (
              this.suppressionResults.forEach(function (t) {
                t.date_display.hideDate || (e = !0);
              }),
              e
            );
          },
          suppressionResultsLength: function () {
            var e = this.suppressionResults.length;
            return e;
          },
          suppressionResultsCheckedLength: function () {
            var e = this.suppressionResults.filter(function (e) {
              return !0 === e.checked;
            }).length;
            return e;
          },
          someHighlighted: function () {
            var e = this.suppressionResultsCheckedLength,
              t = this.suppressionResultsLength;
            return e > 0 && e < t;
          },
        },
        watch: {
          someHighlighted: function (e) {
            this.isSomeHighlighted = e;
          },
        },
        mounted: function () {
          var e = this;
          (this.$eventBus.$on("remove-selected", function () {
            var t = e.suppressionResults
                .filter(function (e) {
                  return e.checked;
                })
                .map(function (e) {
                  var t = e.recipient,
                    s = e.reason;
                  return { recipient: t, reason: s };
                }),
              s = { suppressions: t };
            e.performDeleteSuppression(s);
          }),
            this.$eventBus.$on("deselect-all", function () {
              ((e.allResultsChecked = !0), e.allResultsClick());
            }),
            window.addEventListener("resize", function () {
              e.addLongDescriptionClass();
            }),
            f()(".page-content-wrapper .page-content").on(
              "click.Bst",
              this.windowClicked,
            ));
        },
        destroyed: function () {
          (this.$eventBus.$off("remove-selected"),
            this.$eventBus.$off("deselect-all"),
            f()(window).off(
              ".page-content-wrapper .page-content",
              this.windowClicked,
            ));
        },
      },
      ie = se,
      ne = Object(O["a"])(ie, V, X, !1, null, null, null),
      ae = ne.exports,
      re = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t;
        return e.shouldShow
          ? s("div", { staticClass: "loading" }, [
              e._m(0),
              s("div", { staticClass: "loading-backdrop" }),
            ])
          : e._e();
      },
      oe = [
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
      ],
      le = {
        name: "AjaxLoadingSpinner",
        computed: {
          shouldShow: function () {
            return this.$store.state.runningAjaxRequests;
          },
        },
      },
      ce = le,
      de = Object(O["a"])(ce, re, oe, !1, null, null, null),
      ue = de.exports,
      pe = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t;
        return s(
          "div",
          { staticClass: "controls", attrs: { id: "block-button-wrapper" } },
          [
            e.displayConfirm
              ? e._e()
              : s(
                  "button",
                  {
                    staticClass: "btn red button-outlined",
                    on: { click: e.toggleRemoveStatus },
                  },
                  [e._v("Delete selected")],
                ),
            e.displayConfirm
              ? e._e()
              : s(
                  "button",
                  {
                    staticClass: "btn button-outlined",
                    on: { click: e.deselectAll },
                  },
                  [e._v("Cancel")],
                ),
            e.displayConfirm
              ? s(
                  "button",
                  {
                    staticClass: "btn red button-outlined",
                    on: { click: e.performRemoveSelected },
                  },
                  [e._v("Confirm delete")],
                )
              : e._e(),
            e.displayConfirm
              ? s(
                  "button",
                  {
                    staticClass: "btn button-outlined remove-cancel",
                    on: { click: e.toggleRemoveStatus },
                  },
                  [e._v("Cancel")],
                )
              : e._e(),
          ],
        );
      },
      he = [],
      me = {
        name: "BlockButton",
        data: function () {
          return { displayConfirm: !1 };
        },
        methods: {
          toggleRemoveStatus: function () {
            this.displayConfirm = !this.displayConfirm;
          },
          performRemoveSelected: function () {
            this.$eventBus.$emit("remove-selected");
          },
          deselectAll: function () {
            this.$eventBus.$emit("deselect-all");
          },
        },
      },
      fe = me,
      ge = Object(O["a"])(fe, pe, he, !1, null, null, null),
      ve = ge.exports,
      be = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t;
        return s("div", { staticClass: "all-filter-wrapper indicator-bars" }, [
          s("div", { staticClass: "btn-group" }, [
            s(
              "a",
              {
                staticClass: "btn btn-default btn-icon-left all-filter-btn",
                attrs: {
                  href: "javascript:void(0);",
                  id: "dropdown-options-toggler",
                },
                on: { click: e.triggerable_toggleOpened },
              },
              [
                s("i", { staticClass: "all-filter-icon" }),
                s("span", [e._v("Filters")]),
                s("i", { staticClass: "fa fa-angle-down" }),
              ],
            ),
            s(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: e.triggerable_isOpen,
                    expression: "triggerable_isOpen",
                  },
                ],
                staticClass:
                  "dropdown-menu dropdown-options all-filter is-active mixin-triggerable-layer",
                attrs: { id: "all-filters" },
              },
              [
                e._m(0),
                s("PeriodFilter", { ref: "periodFilter" }),
                s("EventFilter", { ref: "eventFilter" }),
              ],
              1,
            ),
          ]),
        ]);
      },
      _e = [
        function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s("div", { staticClass: "all-filter-description" }, [
            s("p", [
              s("strong", [e._v("Filter results")]),
              s("br"),
              e._v("Refine scope of the results using the following criteria:"),
            ]),
          ]);
        },
      ],
      Ce = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t;
        return s(
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
            staticClass: "period",
          },
          [
            s("div", { staticClass: "btn-group" }, [
              e.getSelectedPeriod()
                ? s(
                    "a",
                    {
                      staticClass: "btn btn-default btn-icon-left",
                      attrs: {
                        href: "javascript:void(0);",
                        id: "dropdown-options-toggler",
                      },
                      on: { click: e.triggerable_toggleOpened },
                    },
                    [
                      s("span", { staticClass: "icon-calendar-alt" }),
                      s(
                        "span",
                        {
                          staticClass: "mobile-title",
                          staticStyle: { display: "none" },
                        },
                        [e._v("Date range")],
                      ),
                      s("span", { staticClass: "mobile-hide" }, [
                        e._v(e._s(e.getSelectedPeriod().prefix)),
                      ]),
                      e._v(e._s(e.getSelectedPeriod().label)),
                      s("i", { staticClass: "fa fa-angle-down" }),
                    ],
                  )
                : e._e(),
              s(
                "ul",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: e.triggerable_isOpen,
                      expression: "triggerable_isOpen",
                    },
                  ],
                  staticClass:
                    "dropdown-menu dropdown-options is-active mixin-triggerable-layer",
                  attrs: { id: "period" },
                },
                [
                  e._l(e.datesToDisplay, function (t) {
                    return s(
                      "li",
                      {
                        key: t.id,
                        class: { selected: t.checked },
                        attrs: { id: t.id },
                        on: {
                          click: function (s) {
                            return e.periodChanged(t);
                          },
                        },
                      },
                      [
                        s("label", { attrs: { for: t.id } }, [
                          s("input", {
                            staticClass: "period-radio",
                            attrs: {
                              type: "radio",
                              name: "daterange",
                              id: t.id,
                            },
                            domProps: { checked: t.checked },
                          }),
                          e._v(
                            "\n                    " +
                              e._s(t.prefix) +
                              e._s(t.label) +
                              "\n                ",
                          ),
                        ]),
                        "between" === t.id
                          ? s("div", { staticClass: "date-range" }, [
                              s(
                                "div",
                                {
                                  ref: "daterangeGroup",
                                  refInFor: !0,
                                  staticClass: "daterange-group",
                                },
                                [e._m(0, !0), e._m(1, !0)],
                              ),
                            ])
                          : e._e(),
                      ],
                    );
                  }),
                  s("li", { staticClass: "dropdown-options-footer" }, [
                    s(
                      "button",
                      {
                        staticClass: "btn btn-outlined",
                        attrs: {
                          type: "button",
                          "data-trigger-on-close": "true",
                        },
                        on: { click: e.triggerable_toggleOpened },
                      },
                      [e._v("Apply")],
                    ),
                  ]),
                ],
                2,
              ),
            ]),
          ],
        );
      },
      ye = [
        function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            "div",
            {
              staticClass:
                "daterange-group__module daterange-group__module_custom",
            },
            [
              s("div", { staticClass: "daterange-group__from" }, [
                s("input", {
                  staticClass:
                    "daterange-group__base-input daterange-group__date-input",
                  attrs: { type: "text" },
                }),
                s("div", { staticClass: "daterange-group__time" }, [
                  s("div", { staticClass: "daterange-group__time-label" }, [
                    s("span", { staticClass: "daterange-group__time-icon" }),
                    s("span", { staticClass: "daterange-group__time-value" }, [
                      s("span", {
                        staticClass: "daterange-group__time-value-hours",
                      }),
                      e._v(":"),
                      s("span", {
                        staticClass: "daterange-group__time-value-minutes",
                      }),
                      e._v(" "),
                      s("span", {
                        staticClass: "daterange-group__time-value-period",
                      }),
                    ]),
                  ]),
                  s("div", { staticClass: "daterange-group__time-inputs" }, [
                    s("input", {
                      staticClass:
                        "daterange-group__base-input daterange-group__time-input daterange-group__time-input_hours",
                      attrs: { type: "text", pattern: "[0-9]" },
                    }),
                    s("input", {
                      staticClass:
                        "daterange-group__base-input daterange-group__time-input daterange-group__time-input_minutes",
                      attrs: { type: "text", pattern: "[0-9]" },
                    }),
                    s(
                      "div",
                      { staticClass: "daterange-group__time-select-wrapper" },
                      [
                        s(
                          "select",
                          {
                            staticClass:
                              "daterange-group__base-input daterange-group__time-input daterange-group__time-input_period daterange-group__time-select",
                          },
                          [
                            s("option", [e._v("AM")]),
                            s("option", [e._v("PM")]),
                          ],
                        ),
                      ],
                    ),
                  ]),
                ]),
              ]),
              s("div", { staticClass: "daterange-group__between" }, [
                s("span", [e._v("–")]),
              ]),
              s("div", { staticClass: "daterange-group__to" }, [
                s("input", {
                  staticClass:
                    "daterange-group__base-input daterange-group__date-input",
                  attrs: { type: "text" },
                }),
                s("div", { staticClass: "daterange-group__time" }, [
                  s("div", { staticClass: "daterange-group__time-label" }, [
                    s("span", { staticClass: "daterange-group__time-icon" }),
                    s("span", { staticClass: "daterange-group__time-value" }, [
                      s("span", {
                        staticClass: "daterange-group__time-value-hours",
                      }),
                      e._v(":"),
                      s("span", {
                        staticClass: "daterange-group__time-value-minutes",
                      }),
                      e._v(" "),
                      s("span", {
                        staticClass: "daterange-group__time-value-period",
                      }),
                    ]),
                  ]),
                  s("div", { staticClass: "daterange-group__time-inputs" }, [
                    s("input", {
                      staticClass:
                        "daterange-group__base-input daterange-group__time-input daterange-group__time-input_hours",
                      attrs: { type: "text", pattern: "[0-9]" },
                    }),
                    s("input", {
                      staticClass:
                        "daterange-group__base-input daterange-group__time-input daterange-group__time-input_minutes",
                      attrs: { type: "text", pattern: "[0-9]" },
                    }),
                    s(
                      "div",
                      { staticClass: "daterange-group__time-select-wrapper" },
                      [
                        s(
                          "select",
                          {
                            staticClass:
                              "daterange-group__base-input daterange-group__time-input daterange-group__time-input_period daterange-group__time-select",
                          },
                          [
                            s("option", [e._v("AM")]),
                            s("option", [e._v("PM")]),
                          ],
                        ),
                      ],
                    ),
                  ]),
                ]),
              ]),
              s(
                "button",
                {
                  staticClass: "daterange-group__time-button",
                  attrs: { type: "button" },
                },
                [e._v("Edit time of day")],
              ),
            ],
          );
        },
        function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            "div",
            {
              staticClass:
                "daterange-group__module daterange-group__module_native",
            },
            [
              s("div", { staticClass: "daterange-group__from" }, [
                s("input", {
                  staticClass: "daterange-group__base-input",
                  attrs: { type: "date" },
                }),
                s("input", {
                  staticClass: "daterange-group__base-input",
                  attrs: { type: "time" },
                }),
              ]),
              s("div", { staticClass: "daterange-group__between" }, [
                s("span", [e._v("and")]),
              ]),
              s("div", { staticClass: "daterange-group__to" }, [
                s("input", {
                  staticClass: "daterange-group__base-input",
                  attrs: { type: "date" },
                }),
                s("input", {
                  staticClass: "daterange-group__base-input",
                  attrs: { type: "time" },
                }),
              ]),
            ],
          );
        },
      ],
      ke = {
        name: "PeriodFilter",
        mixins: [S, h],
        data: function () {
          return {
            datesToDisplay: this.$config.datesToDisplay,
            betweenConf: this.$config.betweenConf,
            initialised: !1,
            startDate: new Date(),
            endDate: new Date(),
            disabledDates: { from: new Date() },
            $daterangeGroup: null,
          };
        },
        methods: {
          initPeriodFilter: function () {
            this.initialised = !0;
          },
          periodChanged: function (e) {
            var t = this;
            if (
              (this.$eventBus.$emit("mixin-search-has-changed"),
              this.datesToDisplay.forEach(function (e) {
                t.$set(e, "checked", "");
              }),
              this.$set(e, "checked", "checked"),
              "between" !== e.id)
            ) {
              var s = e.days,
                i = 0;
              (s > 0 && (i = c()().subtract(s, "days").toDate()),
                (this.startDate = i),
                (this.endDate = c()().toDate()));
            }
            ($("#period > li .radio span").removeClass("checked"),
              $("#period > li#" + e.id + " .radio span").addClass("checked"));
          },
          getSelectedPeriod: function () {
            var e = null;
            return (
              this.datesToDisplay.forEach(function (t) {
                t.checked && (e = t);
              }),
              e
            );
          },
          getSelectedBetweenFrom: function () {
            return this.startDate;
          },
          getSelectedBetweenTo: function () {
            return this.endDate;
          },
        },
        computed: {
          shouldShow: function () {
            return (
              !!this.initialised || 0 === this.$store.state.runningAjaxRequests
            );
          },
        },
        watch: {
          startDate: function (e) {
            e > this.endDate && (this.endDate = e);
          },
          endDate: function (e) {
            e < this.startDate && (this.startDate = e);
          },
          triggerable_isOpen: function (e) {
            e ||
              this.$daterangeGroup.data("daterangeGroup").hideTimeIfUnchanged();
          },
        },
        mounted: function () {
          var e = this;
          (Daterange.init(),
            (this.$daterangeGroup = $(this.$refs.daterangeGroup[0])));
          var t = this.$daterangeGroup.data("daterangeGroup");
          ((this.startDate = c()()
            .subtract(this.betweenConf.start, "days")
            .startOf("day")),
            (this.endDate = c()()
              .subtract(this.betweenConf.end, "days")
              .endOf("day")),
            t.setMaxDate(this.endDate),
            t.setStartDate(this.startDate),
            t.setEndDate(this.endDate),
            this.$daterangeGroup.on("change.daterangeGroup", function () {
              ((e.startDate = t.getStartDate()),
                (e.endDate = t.getEndDate()),
                e.periodChanged(
                  e.datesToDisplay.find(function (e) {
                    return "between" === e.id;
                  }),
                ));
            }));
        },
      },
      we = ke,
      xe = Object(O["a"])(we, Ce, ye, !1, null, null, null),
      $e = xe.exports,
      Se = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t;
        return s("div", { staticClass: "event indicator-bars" }, [
          s("div", { staticClass: "btn-group" }, [
            s(
              "a",
              {
                staticClass: "btn btn-default btn-icon-left",
                attrs: {
                  href: "javascript:void(0);",
                  id: "dropdown-options-toggler",
                },
                on: { click: e.triggerable_toggleOpened },
              },
              [
                s(
                  "span",
                  { staticClass: "icon-circles" },
                  e._l(e.eventsToDisplay, function (e) {
                    return s("span", {
                      key: e.id,
                      staticClass: "dot-circle",
                      class: [e.id, { hide: !e.active }],
                    });
                  }),
                  0,
                ),
                s("span", { staticClass: "desktop-title" }, [e._v("Filters")]),
                s(
                  "span",
                  {
                    staticClass: "mobile-title",
                    staticStyle: { display: "none" },
                  },
                  [e._v("Events")],
                ),
                s(
                  "span",
                  {
                    staticClass: "mobile-selected-label",
                    staticStyle: { display: "none" },
                  },
                  [e._v(e._s(e.selectedEventLabel))],
                ),
                s("i", { staticClass: "fa fa-angle-down" }),
              ],
            ),
            s(
              "ul",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: e.triggerable_isOpen,
                    expression: "triggerable_isOpen",
                  },
                ],
                staticClass:
                  "dropdown-menu dropdown-options event-filter is-active mixin-triggerable-layer",
                attrs: { id: "filters" },
              },
              [
                e._m(0),
                s(
                  "li",
                  {
                    staticClass: "indicators-filter toggle-all",
                    on: { click: e.allEventsClick },
                  },
                  [
                    s("div", { staticClass: "event-indicator default" }, [
                      s("div", { staticClass: "checker" }, [
                        s(
                          "span",
                          {
                            staticClass: "checker-box",
                            class: e.allEventsCheckedStatus,
                          },
                          [s("input", { attrs: { type: "checkbox" } })],
                        ),
                      ]),
                      s("span", { staticClass: "indicator-copy toggle-copy" }, [
                        e._v(e._s(e.checkboxLabel)),
                      ]),
                    ]),
                  ],
                ),
                e._l(e.eventsToDisplay, function (t) {
                  return s(
                    "li",
                    {
                      key: t.id,
                      staticClass: "indicators-filter",
                      on: {
                        click: function (s) {
                          return e.eventClick(t);
                        },
                      },
                    },
                    [
                      s(
                        "div",
                        { staticClass: "event-indicator", class: t.id },
                        [
                          s("div", { staticClass: "checker" }, [
                            s(
                              "span",
                              {
                                staticClass: "checker-box",
                                class: { checked: t.active },
                              },
                              [s("input", { attrs: { type: "checkbox" } })],
                            ),
                          ]),
                          s("span", { staticClass: "indicator-copy" }, [
                            e._v(e._s(t.label)),
                          ]),
                        ],
                      ),
                    ],
                  );
                }),
                s("li", { staticClass: "dropdown-options-footer" }, [
                  s(
                    "button",
                    {
                      staticClass: "btn btn-outlined",
                      attrs: {
                        type: "button",
                        "data-trigger-on-close": "true",
                      },
                      on: { click: e.triggerable_toggleOpened },
                    },
                    [e._v("Apply")],
                  ),
                ]),
              ],
              2,
            ),
          ]),
        ]);
      },
      je = [
        function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s("li", { staticClass: "event-filter-description" }, [
            s("p", [
              s("strong", [e._v("Filter by event")]),
              s("br"),
              e._v("Only show these events:"),
            ]),
          ]);
        },
      ],
      De = {
        name: "EventFilter",
        mixins: [S, h],
        data: function () {
          return { eventsToDisplay: this.$config.eventsToDisplay };
        },
        methods: {
          allEventsClick: function () {
            this.$eventBus.$emit("mixin-search-has-changed");
            var e = "";
            (this.allEventsCheckedStatus || (e = "checked"),
              this.updateEventsCheckStatus(e));
          },
          eventClick: function (e) {
            (this.$eventBus.$emit("mixin-search-has-changed"),
              e.active
                ? this.$set(e, "active", !1)
                : this.$set(e, "active", !0));
          },
          updateEventsCheckStatus: function (e) {
            var t = this;
            this.eventsToDisplay.forEach(function (s) {
              t.$set(s, "active", e);
            });
          },
          getSelectedEvents: function () {
            var e = this.eventsToDisplay
              .filter(function (e) {
                return e.active;
              })
              .map(function (e) {
                return e.backendId;
              });
            return (
              0 === e.length &&
                (this.updateEventsCheckStatus(!0),
                (e = this.eventsToDisplay
                  .filter(function (e) {
                    return e.active;
                  })
                  .map(function (e) {
                    return e.backendId;
                  }))),
              e
            );
          },
        },
        computed: {
          checkboxLabel: function () {
            return this.checkedEvents.length === this.eventsToDisplay.length ||
              this.checkedEvents.length > 0
              ? "Deselect All"
              : "Select All";
          },
          checkedEvents: function () {
            return this.eventsToDisplay.filter(function (e) {
              return e.active;
            });
          },
          allEventsCheckedStatus: function () {
            return this.checkedEvents.length === this.eventsToDisplay.length
              ? "checked"
              : this.checkedEvents.length > 0
                ? "indeterminate"
                : "";
          },
          selectedEventLabel: function () {
            return this.checkedEvents.length === this.eventsToDisplay.length
              ? "All"
              : this.checkedEvents.length > 1
                ? "Multiple"
                : 1 === this.checkedEvents.length
                  ? this.checkedEvents[0].label
                  : "None";
          },
        },
      },
      Oe = De,
      Te = Object(O["a"])(Oe, Se, je, !1, null, null, null),
      Pe = Te.exports,
      Be = {
        name: "AllFilter",
        mixins: [S],
        components: { PeriodFilter: $e, EventFilter: Pe },
        data: function () {
          return { eventsToDisplay: this.$config.eventsToDisplay };
        },
      },
      Ee = Be,
      Re = Object(O["a"])(Ee, be, _e, !1, null, null, null),
      Ae = Re.exports,
      Me = function () {
        var e = this,
          t = e.$createElement,
          s = e._self._c || t;
        return s(
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
            staticClass: "user-filter-container",
            attrs: { id: "userdrop" },
          },
          [
            s("div", { staticClass: "btn-group" }, [
              s(
                "a",
                {
                  staticClass: "btn btn-default btn-icon-left",
                  attrs: {
                    href: "javascript:void(0);",
                    id: "dropdown-options-toggler",
                  },
                  on: { click: e.triggerable_toggleOpened },
                },
                [
                  s("span", { staticClass: "icon-user-special" }, [
                    s("span", { staticClass: "icon-user-count" }, [
                      e._v(e._s(e.userCount()) + " "),
                    ]),
                  ]),
                  s("span", { staticClass: "desktop-hide" }, [e._v("Users")]),
                  s("i", {
                    staticClass: "fa fa-angle-down",
                    staticStyle: { margin: "0", padding: "0" },
                  }),
                ],
              ),
              s(
                "ul",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: e.triggerable_isOpen,
                      expression: "triggerable_isOpen",
                    },
                  ],
                  staticClass:
                    "dropdown-menu dropdown-options event-filter is-active mixin-triggerable-layer",
                  attrs: { id: "users" },
                },
                [
                  s("li", [
                    "Webhooks" === e.requestPoint
                      ? s("p", [
                          s("strong", [e._v("Filter by user")]),
                          s("br"),
                          e._v(
                            "Receive events for only these users:\n        ",
                          ),
                        ])
                      : e._e(),
                    "peruser_userdrop" === e.requestPoint
                      ? s("p", [
                          s("strong", [e._v("Filter by user")]),
                          s("br"),
                          e._v(
                            "Users are shown in descending order:\n        ",
                          ),
                        ])
                      : e._e(),
                    "Webhooks" === e.requestPoint &&
                    "Webhooks" !== e.requestPoint
                      ? s("p", [
                          s("strong", [e._v("Filter by user")]),
                          s("br"),
                          e._v("Only show these users:\n        "),
                        ])
                      : e._e(),
                    s(
                      "span",
                      {
                        staticClass: "dropdown-menu-close desktop-hide",
                        on: { click: e.triggerable_toggleClose },
                      },
                      [e._v("×")],
                    ),
                  ]),
                  "peruser_userdrop" !== e.requestPoint
                    ? s("li", { staticClass: "list-item-bleed" }, [
                        s("span", { staticClass: "icon-search-dark" }),
                        s("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: e.searchKeyword,
                              expression: "searchKeyword",
                            },
                          ],
                          attrs: {
                            type: "text",
                            placeholder: "Search for user",
                          },
                          domProps: { value: e.searchKeyword },
                          on: {
                            input: [
                              function (t) {
                                t.target.composing ||
                                  (e.searchKeyword = t.target.value);
                              },
                              e.userDisplayStatusChange,
                            ],
                          },
                        }),
                      ])
                    : e._e(),
                  s(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            e.displayableUsernames().length > 1 ||
                            e.topUsernames.length > 1,
                          expression:
                            "displayableUsernames().length > 1 || topUsernames.length > 1",
                        },
                      ],
                      staticClass: "users-filter users-toggle-all",
                      on: { click: e.allUsersClick },
                    },
                    [
                      s(
                        "div",
                        {
                          staticClass:
                            "filter-toggler users-filter-toggler default",
                        },
                        [
                          s("div", { staticClass: "checker" }, [
                            s(
                              "span",
                              {
                                staticClass: "checker-box",
                                class: e.allUsersCheckedStatus(),
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
                          ]),
                          s(
                            "span",
                            { staticClass: "indicator-copy toggle-copy" },
                            [e._v(e._s(e.allCheckDisplay()))],
                          ),
                        ],
                      ),
                    ],
                  ),
                  s(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            0 == e.displayableUsernames().length &&
                            0 == e.topUsernames.length,
                          expression:
                            "displayableUsernames().length == 0 && topUsernames.length == 0",
                        },
                      ],
                    },
                    [
                      s(
                        "span",
                        {
                          staticClass: "indicator-copy toggle-copy",
                          staticStyle: {
                            padding: "10px 0px",
                            "margin-left": "28px",
                          },
                        },
                        [e._v("No matching usernames")],
                      ),
                    ],
                  ),
                  s(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            e.displayableUsernames().length > 0 ||
                            e.topUsernames.length > 0,
                          expression:
                            "displayableUsernames().length > 0 || topUsernames.length > 0",
                        },
                      ],
                    },
                    [
                      s(
                        "ul",
                        {
                          staticClass: "dropdown-sublist",
                          style: e.userListHeight,
                        },
                        [
                          e._l(e.topUsernames, function (t) {
                            return s(
                              "li",
                              { key: t.username, staticClass: "users-filter" },
                              [
                                s(
                                  "div",
                                  {
                                    staticClass:
                                      "filter-toggler users-filter-toggler",
                                    on: {
                                      click: function (s) {
                                        return e.userClick(s, t);
                                      },
                                    },
                                  },
                                  [
                                    s("div", { staticClass: "checker" }, [
                                      s(
                                        "span",
                                        {
                                          staticClass: "checker-box",
                                          class: t.checked,
                                          style:
                                            "background-color: " + t.colour,
                                        },
                                        [
                                          s("input", {
                                            attrs: {
                                              type: "checkbox",
                                              name: "users[]",
                                            },
                                            domProps: { value: t.username },
                                          }),
                                        ],
                                      ),
                                    ]),
                                    s(
                                      "span",
                                      { staticStyle: { cursor: "default" } },
                                      [
                                        s("span", {
                                          domProps: {
                                            innerHTML: e._s(t.label),
                                          },
                                        }),
                                      ],
                                    ),
                                  ],
                                ),
                              ],
                            );
                          }),
                          e._l(e.displayableUsernames(), function (t) {
                            return s(
                              "li",
                              { key: t.username, staticClass: "users-filter" },
                              [
                                s(
                                  "div",
                                  {
                                    staticClass:
                                      "filter-toggler users-filter-toggler",
                                    on: {
                                      click: function (s) {
                                        return e.userClick(s, t);
                                      },
                                    },
                                  },
                                  [
                                    s("div", { staticClass: "checker" }, [
                                      s(
                                        "span",
                                        {
                                          staticClass: "checker-box",
                                          class: t.checked,
                                        },
                                        [
                                          s("input", {
                                            attrs: {
                                              type: "checkbox",
                                              name: "users[]",
                                            },
                                            domProps: { value: t.username },
                                          }),
                                        ],
                                      ),
                                    ]),
                                    s(
                                      "span",
                                      { staticStyle: { cursor: "default" } },
                                      [
                                        s("span", {
                                          domProps: {
                                            innerHTML: e._s(
                                              void 0 !== t.matchLabel
                                                ? t.matchLabel
                                                : t.label,
                                            ),
                                          },
                                        }),
                                      ],
                                    ),
                                  ],
                                ),
                              ],
                            );
                          }),
                        ],
                        2,
                      ),
                    ],
                  ),
                  s(
                    "li",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            "peruser_userdrop" == e.requestPoint &&
                            e.displayPaging,
                          expression:
                            "requestPoint == 'peruser_userdrop' && displayPaging",
                        },
                      ],
                      staticClass: "users-display-set",
                    },
                    [e._m(0), e._m(1), s("div", { staticClass: "clear-both" })],
                  ),
                  s("li", { staticClass: "dropdown-options-footer" }, [
                    s(
                      "button",
                      {
                        staticClass: "btn btn-outlined",
                        attrs: {
                          type: "button",
                          "data-trigger-on-close": "true",
                        },
                        on: { click: e.triggerable_toggleOpened },
                      },
                      [e._v("Apply")],
                    ),
                  ]),
                ],
              ),
            ]),
          ],
        );
      },
      Fe = [
        function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s("div", { staticClass: "load-users prev-users" }, [
            s(
              "a",
              {
                staticClass: "load-users-btn prev-users",
                attrs: { href: "#" },
              },
              [
                s("i", { staticClass: "fa fa-angle-left" }),
                e._v("\n            Previous 5\n          "),
              ],
            ),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s("div", { staticClass: "load-users next-users" }, [
            s(
              "a",
              {
                staticClass: "load-users-btn next-users",
                attrs: { href: "#" },
              },
              [
                e._v("\n            Next 5\n            "),
                s("i", { staticClass: "fa fa-angle-right" }),
              ],
            ),
          ]);
        },
      ],
      Ue =
        (s("3b2b"),
        s("4917"),
        {
          name: "UserFilter",
          mixins: [S, _],
          data: function () {
            return {
              topUsernames: [],
              usernames: [],
              displayPaging: !1,
              initialised: !1,
              searchKeyword: "",
              requestPoint: "Suppressions",
            };
          },
          methods: {
            initUsernames: function () {
              (this.updateUserCheckStatus("checked"),
                this.updateUserDisplayStatus());
            },
            updateUserCheckStatus: function (e) {
              var t = this;
              this.usernames.forEach(function (s) {
                t.$set(s, "checked", e);
              });
            },
            userDisplayStatusChange: function () {
              (this.$eventBus.$emit("mixin-search-has-changed"),
                this.updateUserDisplayStatus());
            },
            updateUserDisplayStatus: function () {
              var e = this,
                t = this.searchKeyword.replace(/[^a-zA-Z0-9-_ @]/g, ""),
                s = this.getSearchRegex(t);
              this.usernames.forEach(function (i) {
                var n = i.label.match(s);
                ((i.matchLabel = void 0),
                  "" === t
                    ? e.$set(i, "display", !0)
                    : n
                      ? (e.$set(i, "display", !0),
                        (i.matchLabel = i.label.replace(
                          s,
                          '<strong class="query-match">$1</strong>',
                        )))
                      : e.$set(i, "display", !1));
              });
            },
            getSearchRegex: function (e) {
              var t = null;
              return (
                "" !== e &&
                  e.length > 0 &&
                  (t = new RegExp("(" + e + ")", "gi")),
                t
              );
            },
            getUsersForSearch: function () {
              var e = [];
              return (
                this.isAllUsersChecked() ||
                  ((e = this.getCheckedUsers()),
                  0 === e.length &&
                    (this.updateUserCheckStatus("checked"),
                    (this.searchKeyword = ""),
                    this.updateUserDisplayStatus())),
                e
              );
            },
            getCheckedUsers: function () {
              var e = [];
              return (
                this.usernames.forEach(function (t) {
                  t.checked && t.display && e.push(t.username);
                }),
                e
              );
            },
            isAllUsersChecked: function () {
              var e = !0;
              return (
                !this.usernames.length > 0 ||
                  this.usernames.forEach(function (t) {
                    !t.checked && t.display && (e = !1);
                  }),
                e
              );
            },
            userCount: function () {
              var e = this.getCheckedUsers().length;
              return !this.isAllUsersChecked() && e > 0 ? e : "";
            },
            precacheUsernames: function () {
              var e = this,
                t = !0;
              if (!this.initialised) {
                var s = "archive-usernames";
                (HTML.clearError(s),
                  this.mixinAjax_get(
                    this.requestPoint,
                    "load-usernames",
                    null,
                    function (t) {
                      ((e.initialised = !0),
                        (e.usernames = e.escapeUsernamesHtml(
                          t.responseJSON.results.usernames,
                        )),
                        e.initUsernames());
                    },
                    function (e) {
                      HTML.handleError(
                        Object.assign(e.responseJSON, { errorID: s }),
                      );
                    },
                    t,
                  ));
              }
            },
            allUsersCheckedStatus: function () {
              return this.isAllUsersChecked()
                ? "checked"
                : this.partiallyChecked()
                  ? "indeterminate"
                  : "";
            },
            partiallyChecked: function () {
              var e = !1;
              return (
                this.usernames.forEach(function (t) {
                  t.checked && t.display && (e = !0);
                }),
                e
              );
            },
            userClick: function (e, t) {
              (void 0 !== e && e.stopImmediatePropagation(),
                this.$eventBus.$emit("mixin-search-has-changed"),
                t.checked
                  ? this.$set(t, "checked", "")
                  : this.$set(t, "checked", "checked"));
            },
            allUsersClick: function () {
              this.$eventBus.$emit("mixin-search-has-changed");
              var e = "";
              (this.allUsersCheckedStatus() || (e = "checked"),
                this.updateUserCheckStatus(e));
            },
            initUserFilter: function () {
              this.precacheUsernames();
            },
            allCheckDisplay: function () {
              return this.allUsersCheckedStatus()
                ? "Deselect All"
                : "Select All";
            },
            displayableUsernames: function () {
              return this.usernames.filter(function (e) {
                return e.display;
              });
            },
            escapeUsernamesHtml: function (e) {
              var t = this;
              return (
                e.forEach(function (e) {
                  ((e.label = t.escapeHtml(e.label)),
                    (e.username = t.escapeHtml(e.username)));
                }),
                e
              );
            },
            escapeHtml: function (e) {
              return e
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
            },
          },
          computed: {
            shouldShow: function () {
              return (
                !!this.initialised ||
                0 === this.$store.state.runningAjaxRequests
              );
            },
            userListHeight: function () {
              var e = window.innerHeight - 370;
              return e <= 296 ? { "max-height": e + "px" } : "";
            },
          },
        }),
      Le = Ue,
      qe = Object(O["a"])(Le, Me, Fe, !1, null, null, null),
      He = qe.exports,
      ze = {
        name: "ReportSuppression",
        mixins: [u, h, _],
        components: {
          TitleWithExportButton: N,
          SearchBox: Y,
          SuppressionResultsDisplay: ae,
          AjaxLoadingSpinner: ue,
          BlockButton: ve,
          AddSuppression: L,
          AllFilter: Ae,
          UserFilter: He,
        },
        data: function () {
          return {
            isLoading: !1,
            initialised: !1,
            showMoreLink: !1,
            clearTableOnResults: !1,
            columnsIsSaving: !1,
            tableRows: [],
            totalResults: null,
            requestedSearchTerm: null,
            searchTerm: null,
            shownColumns: {},
            requestPoint: this.$config.requestPoint,
            fullPageLoad: !0,
            actingRole: "report",
            clientTimezone: null,
            columnIsSaving: !1,
            continueToken: "",
            isBottomOfPage: !1,
            fileType: "csv",
            isMobile: !1,
            loadMoreSearchPayload: {},
            version: 0,
          };
        },
        computed: {
          canModifySuppressions: function () {
            return !0;
          },
          shouldShow: function () {
            return !!this.initialised;
          },
          isCheckedPlans: function () {
            var e = this.tableRows.filter(function (e) {
              return e.checked;
            });
            return e.length > 0;
          },
        },
        methods: {
          initSuppression: function (e, t, s) {
            ((this.actingRole = s),
              (this.clientTimezone = t),
              (void 0 !== t && null !== t && "" !== t) ||
                (this.clientTimezone = c.a.tz.guess()),
              (this.shownColumns = {
                description:
                  void 0 !== e.app_settings &&
                  e.app_settings.show_suppressions_reason_col,
                email_subject:
                  void 0 !== e.app_settings &&
                  e.app_settings.show_suppressions_subject_col,
              }),
              setTimeout(this.holdInit, 100));
          },
          holdInit: function () {
            this.initialised ||
              void 0 == HTML.csrfkey ||
              (this.initComponents(), this.loadSuppression());
          },
          initComponents: function () {
            (this.$refs.allFilter.$refs.periodFilter.initPeriodFilter(),
              this.$refs.searchBox.initSearchBox(),
              this.$refs.userFilter.initUserFilter(),
              this.$refs.suppressionResultsDisplay.initSuppressionResultsDisplay(),
              this.$refs.titleWithExport.initTitleWithExport());
          },
          loadSuppression: function () {
            this.$eventBus.$emit("mixin-search-trigger");
          },
          buildSearchPayload: function (e) {
            if (e)
              return (
                (this.loadMoreSearchPayload.continue_token =
                  this.continueToken),
                this.loadMoreSearchPayload
              );
            var t = {},
              s = this.$refs.allFilter.$refs.periodFilter.getSelectedPeriod();
            if ("between" !== s.id)
              t = this.getUnixSecsRangeByDays(s.days, this.clientTimezone);
            else {
              var i =
                  this.$refs.allFilter.$refs.periodFilter.getSelectedBetweenFrom(),
                n =
                  this.$refs.allFilter.$refs.periodFilter.getSelectedBetweenTo();
              t = this.getUnixSecsRangeBetweenDates(i, n, this.clientTimezone);
            }
            var a = {
              client_timezone: this.clientTimezone,
              unix_secs_start: t.start,
              unix_secs_end: t.end,
              recipient_search: this.$refs.searchBox.getMainSearch(),
              shown_records: this.tableRows.length,
              shown_columns: JSON.stringify(this.shownColumns),
              shown_events:
                this.$refs.allFilter.$refs.eventFilter.getSelectedEvents(),
              continue_token: "",
              file_type: this.fileType,
            };
            return (
              (a.search_usernames = this.$refs.userFilter.getUsersForSearch()),
              console.log(this.$refs.userFilter.getUsersForSearch()),
              (this.loadMoreSearchPayload = a),
              a
            );
          },
          handleTableResults: function (e) {
            var t = this;
            (this.clearTableOnResults &&
              ((this.tableRows = []), (this.clearTableOnResults = !1)),
              (this.datestamp_format = e.datestamp_format),
              (this.totalResults =
                e.metadata.records_returned.toLocaleString()),
              (this.searchTerm = this.requestedSearchTerm),
              (this.showMoreLink = !!e.metadata.continue_token),
              e.suppressions.forEach(function (e) {
                ((e["date_display"] = t.convertUnixTS(e.timestamp)),
                  (e["reason"] = e["reason"].replace(
                    "bounce",
                    "hard-bounced",
                  )));
              }),
              (this.tableRows = this.tableRows.concat(e.suppressions)),
              (this.continueToken = e.metadata.continue_token));
          },
          updateSuppressionData: function () {
            (this.$refs.suppressionResultsDisplay.updateSuppressionResults(
              this.tableRows,
              this.shownColumns,
            ),
              this.$refs.titleWithExport.$refs.exportButton.updateShownColumns(
                this.shownColumns,
              ));
          },
          performSearch: function (e, t) {
            var s = this;
            ((this.fullPageLoad = !1),
              t ||
                ((this.clearTableOnResults = !0),
                window.scroll({ top: 0, left: 0, behavior: "smooth" }),
                (this.fullPageLoad = !0)));
            var i = this.buildSearchPayload(t);
            ((this.requestedSearchTerm = i.recipient_search),
              this.mixinAjax_get(
                this.requestPoint,
                "",
                i,
                function (t) {
                  (s.handleTableResults(t.responseJSON.results),
                    e && (s.initialised = !0),
                    s.$nextTick(function () {
                      s.updateSuppressionData();
                    }),
                    (s.version += 1));
                },
                function (e) {
                  HTML.handleError(e.responseJSON);
                },
              ));
          },
          saveColumn: function () {
            var e = this;
            if (this.columnIsSaving) return !1;
            this.columnIsSaving = !0;
            var t = !0;
            this.mixinAjax_put(
              this.requestPoint,
              "save-columns",
              this.buildSearchPayload(),
              function () {
                e.columnIsSaving = !1;
              },
              function () {
                e.columnIsSaving = !1;
              },
              t,
            );
          },
          performDownloadFile: function (e) {
            ((this.fileType = e),
              this.mixinAjax_put(
                this.requestPoint,
                "download-file",
                this.buildSearchPayload(),
                function (e) {
                  (HTML.set_time(e.responseJSON),
                    window.location.replace(e.responseJSON.results.stream_url));
                },
                function (e) {
                  HTML.handleError(e.responseJSON);
                },
              ));
          },
          convertUnixTS: function (e) {
            var t = {
                hideDate: !1,
                boldTime: !1,
                title: "",
                date: "",
                time: "",
              },
              s = c.a.unix(e).tz(this.clientTimezone),
              i = s.format(this.datestamp_format),
              n =
                s.format("ddd, MMM Do, YYYY") +
                " at " +
                s.format("h:mm:ss A zz");
            ((t.title = n),
              (t.date = i.slice(0, i.indexOf(" "))),
              (t.time = i.slice(i.indexOf(" ") + 1)));
            var a = c()().tz(this.clientTimezone).startOf("day");
            return (
              c()().tz(this.clientTimezone).format("HH") <= 12 &&
                (a = a.subtract(12, "h")),
              s.valueOf() > a.valueOf() &&
                ((t.hideDate = !0), (t.boldTime = !0)),
              t
            );
          },
          updateBlockButtonLocation: function () {
            var e = document.querySelector(".dataTables_wrapper"),
              t = this.getWindowWidth() < 768 ? 112 : 63;
            window.innerHeight + window.scrollY + t >=
            document.body.offsetHeight
              ? ((this.isBottomOfPage = !0), e.classList.remove("bottom-fixed"))
              : this.isBottomOfPage &&
                window.innerHeight + window.scrollY + t <
                  document.body.offsetHeight &&
                ((this.isBottomOfPage = !1), e.classList.add("bottom-fixed"));
          },
          getWindowWidth: function () {
            return (
              window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth
            );
          },
          updateDevice: function () {
            screen.width < 768 ? (this.isMobile = !0) : (this.isMobile = !1);
          },
        },
        mounted: function () {
          var e = this;
          (this.updateDevice(),
            this.updateBlockButtonLocation(),
            window.addEventListener("resize", function () {
              e.updateDevice();
            }));
        },
        created: function () {
          window.addEventListener("scroll", this.updateBlockButtonLocation);
        },
        destroyed: function () {
          window.removeEventListener("scroll", this.updateBlockButtonLocation);
        },
        watch: {
          isCheckedPlans: function () {
            this.updateBlockButtonLocation();
          },
        },
      },
      Ne = ze,
      Ie = Object(O["a"])(Ne, r, o, !1, null, null, null),
      We = Ie.exports,
      Je = {
        name: "Suppression",
        components: { ReportsSuppression: We },
        data: function () {
          return {
            apMetadata: PAGE_DATA.apMetadata,
            clientTimezone: PAGE_DATA.clientTimezone,
            actingRole: PAGE_DATA.actingRole,
          };
        },
        computed: {},
        mounted: function () {
          this.$refs.suppression.initSuppression(
            this.apMetadata,
            this.clientTimezone,
            this.actingRole,
          );
        },
      },
      Ke = Je,
      Ge = (s("a421"), Object(O["a"])(Ke, n, a, !1, null, "0a5ef052", null)),
      Ye = Ge.exports,
      Ve = s("2f62");
    i["a"].use(Ve["a"]);
    var Xe = new Ve["a"].Store({
        state: { runningAjaxRequests: 0 },
        mutations: {
          runningAjaxRequestsIncrement: function (e) {
            e.runningAjaxRequests++;
          },
          runningAjaxRequestsDecrement: function (e) {
            e.runningAjaxRequests--;
          },
        },
        actions: {},
      }),
      Ze = s("e53f"),
      Qe = s("e37d");
    (i["a"].directive("tooltip", Qe["c"]),
      i["a"].directive("close-popover", Qe["a"]),
      i["a"].component("v-popover", Qe["b"]),
      (i["a"].config.productionTip = !1),
      (i["a"].prototype.$eventBus = new i["a"]()),
      (i["a"].prototype.$config = Ze),
      new i["a"]({
        store: Xe,
        render: function (e) {
          return e(Ye);
        },
      }).$mount("#suppression"));
  },
  "5e41": function (e, t, s) {},
  a421: function (e, t, s) {
    "use strict";
    s("5e41");
  },
  e53f: function (e) {
    e.exports = JSON.parse(
      '{"requestPoint":"Suppressions","searchPlaceHolder":"Search for a Recipient...","datesToDisplay":[{"label":"7 Days","id":"days7","days":7,"prefix":"Last "},{"label":"14 Days","id":"days14","days":14,"prefix":"Last "},{"label":"30 Days","id":"days30","days":30,"prefix":"Last "},{"label":"All Time","id":"alltime","days":-1,"checked":"checked"},{"label":"Between...","id":"between","days":0}],"betweenConf":{"show":true,"start":7,"end":0},"eventsToDisplay":[{"id":"hard-bounced","label":"Hard bounced (within 7 days)","backendId":"bounce","color":"#ad894a","active":true},{"id":"spam","label":"Marked as spam","backendId":"spam","color":"#ef8a78","active":true},{"id":"unsubscribed","label":"Recipient unsubscribed","backendId":"unsubscribe","color":"#828da0","active":true},{"id":"manual","label":"Manual block","backendId":"manual","color":"#265361","active":true},{"id":"compliance","label":"Added by compliance","backendId":"compliance","color":"#707be8","active":true}],"displayColumns":[{"id":"date_display","label":"Date","active":true},{"id":"reason","label":"Type","active":true},{"id":"recipient","label":"Recipient","active":true},{"id":"email_subject","label":"Subject","filterable":true,"active":false},{"id":"description","label":"Reason","filterable":true,"active":false}],"downloadOptions":[{"id":"csv","label":"Download list as CSV","endPoint":""},{"id":"xml","label":"Download list as XML"},{"id":"json","label":"Download list as NDJSON"}],"searchOptions":{},"includeAddSuppression":true}',
    );
  },
});
//# sourceMappingURL=app.344bb485.js.map
