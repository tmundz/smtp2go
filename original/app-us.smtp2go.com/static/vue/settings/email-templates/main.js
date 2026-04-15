(function (e) {
  function t(t) {
    for (
      var s, r, o = t[0], l = t[1], c = t[2], m = 0, u = [];
      m < o.length;
      m++
    )
      ((r = o[m]),
        Object.prototype.hasOwnProperty.call(a, r) && a[r] && u.push(a[r][0]),
        (a[r] = 0));
    for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (e[s] = l[s]);
    d && d(t);
    while (u.length) u.shift()();
    return (n.push.apply(n, c || []), i());
  }
  function i() {
    for (var e, t = 0; t < n.length; t++) {
      for (var i = n[t], s = !0, o = 1; o < i.length; o++) {
        var l = i[o];
        0 !== a[l] && (s = !1);
      }
      s && (n.splice(t--, 1), (e = r((r.s = i[0]))));
    }
    return e;
  }
  var s = {},
    a = { app: 0 },
    n = [];
  function r(t) {
    if (s[t]) return s[t].exports;
    var i = (s[t] = { i: t, l: !1, exports: {} });
    return (e[t].call(i.exports, i, i.exports, r), (i.l = !0), i.exports);
  }
  ((r.m = e),
    (r.c = s),
    (r.d = function (e, t, i) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
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
      var i = Object.create(null);
      if (
        (r.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var s in e)
          r.d(
            i,
            s,
            function (t) {
              return e[t];
            }.bind(null, s),
          );
      return i;
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
  (n.push([0, "chunk-vendors"]), i());
})({
  0: function (e, t, i) {
    e.exports = i("56d7");
  },
  4678: function (e, t, i) {
    var s = {
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
    function a(e) {
      var t = n(e);
      return i(t);
    }
    function n(e) {
      if (!i.o(s, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return s[e];
    }
    ((a.keys = function () {
      return Object.keys(s);
    }),
      (a.resolve = n),
      (e.exports = a),
      (a.id = "4678"));
  },
  "56d7": function (e, t, i) {
    "use strict";
    i.r(t);
    (i("cadf"), i("551c"), i("f751"), i("097d"));
    var s,
      a,
      n = i("2b0e"),
      r = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "div",
          { attrs: { id: "email-templates-main" } },
          [
            i("LoadingBlock", {
              attrs: { isVisible: e.isAjaxRunning && !e.showSplash },
            }),
            e.showSplash ? i("info-splash") : e._e(),
            i("EmailTemplateList", {
              ref: "email_template_list",
              attrs: { isVisible: "list" == e.context },
            }),
            i(
              "section",
              {
                staticClass: "sg-feature",
                class: {
                  "is-active": "list" != e.context,
                  "picker-active": "select" == e.context,
                },
                attrs: { id: "email-templates-edit" },
              },
              [
                "select" != e.context
                  ? i(
                      "header",
                      { staticClass: "sg-feature--header has-functions" },
                      [
                        i("h3", { staticClass: "page-title" }, [
                          i("button", {
                            staticClass: "icon-back",
                            on: { click: e.listTemplates },
                          }),
                          i("span", { staticClass: "title-editor" }, [
                            e._v("Edit email template"),
                          ]),
                        ]),
                      ],
                    )
                  : e._e(),
                i("EmailTemplateSelect", {
                  ref: "email_template_select",
                  attrs: { isVisible: "select" == e.context },
                }),
                i("EmailTemplateEdit", {
                  ref: "email_template_edit",
                  attrs: { isVisible: "edit" == e.context },
                }),
              ],
              1,
            ),
            i("div", {
              staticClass: "modal-backdrop fade",
              class: { in: e.modalVisible },
              on: { click: e.modalOff },
            }),
            i(
              "div",
              {
                staticClass: "modal-dialog modal-medium confirm-exit",
                class: { "is-active": e.showChangedDialog },
                attrs: { "data-toggle-target": "confirm_exit" },
              },
              [
                i("header", { staticClass: "modal-header" }, [
                  i("h4", [e._v("Exit without saving?")]),
                  i(
                    "button",
                    {
                      staticClass: "bootbox-close-button close",
                      attrs: { type: "button" },
                      on: { click: e.modalOff },
                    },
                    [e._v("×")],
                  ),
                ]),
                i("p", [
                  e._v(
                    "Closing the editor without saving will remove all of your changes since the last save.",
                  ),
                ]),
                i("div", { staticClass: "modal-footer" }, [
                  i(
                    "button",
                    {
                      staticClass: "btn blue template-close",
                      on: { click: e.saveTemplate },
                    },
                    [e._v("Save and exit")],
                  ),
                  i(
                    "button",
                    {
                      staticClass: "btn btn-outlined template-close",
                      on: { click: e.backToList },
                    },
                    [e._v("Exit without saving")],
                  ),
                ]),
              ],
            ),
            i("EmailTemplateSendTest", {
              ref: "sendtest",
              attrs: {
                isVisible: e.sendTestModal,
                userTemplateID: e.userTemplateID,
                userName: e.apMetadata.username,
                templateVariables: e.templateVariables,
              },
            }),
            i("EmailTemplateIntegration", {
              ref: "integration",
              attrs: {
                userName: e.apMetadata.username,
                isVisible: e.integrateModal,
              },
            }),
          ],
          1,
        );
      },
      o = [],
      l = (i("8e6e"), i("ac6a"), i("456d"), i("ade3")),
      c =
        (i("0d6d"),
        Object.freeze({
          SWITCH_CONTEXT: "switch-context",
          ETTBOX_EDIT_CLICKED: "ettbox-edit-clicked",
          ETTBOX_DUPLICATE_CLICKED: "ettbox-duplicate-clicked",
          SHOW_CHANGED_DIALOG: "show-changed-dialog",
          SHOW_SEND_TEST_MODAL: "show-send-test-modal",
          SHOW_INTEGRATE_MODAL: "show-integrate-modal",
          CLOSE_ALL_MODALS: "close-all-modals",
        })),
      d = c,
      m = i("3835"),
      u =
        (i("ffc1"),
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
                    var i = Object(m["a"])(t, 2),
                      s = i[0],
                      a = i[1];
                    e.$eventBus.$on(s, a);
                  },
                ),
                (this.mixinEventListener_isOn = !0));
            },
            mixinEventListener_off: function () {
              var e = this;
              (Object.entries(this.mixinEventListener_eventMap).forEach(
                function (t) {
                  var i = Object(m["a"])(t, 2),
                    s = i[0],
                    a = i[1];
                  e.$eventBus.$off(s, a);
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
      p = u,
      h = (i("a481"), i("c46f"));
    function g(e, t) {
      return Object(h["a"])(
        t,
        function (t, i, s) {
          return (
            (t[s] = Object(h["a"])(
              i,
              function (t, i, s) {
                return ((t[s] = i.replace(e, "")), t);
              },
              {},
            )),
            t
          );
        },
        {},
      );
    }
    function _(e, t, i) {
      var s = e.indexOf("?") > -1 ? "&" : "?";
      return null !== i && void 0 !== i && i.length > 0
        ? e + s + t + "=" + encodeURIComponent(i)
        : e;
    }
    var f = "root/",
      v = {
        getters: {
          GET_IS_AJAX_RUNNING: f + "GET_IS_AJAX_RUNNING",
          GET_BACKEND_URL: f + "GET_BACKEND_URL",
          GET_END_POINTS: f + "GET_END_POINTS",
          GET_IMAGE_URLS: f + "GET_IMAGE_URLS",
          GET_SUCCESS_MESSAGE: f + "GET_SUCCESS_MESSAGE",
          GET_ERROR_MESSAGE: f + "GET_ERROR_MESSAGE",
          GET_IS_QUIET_REQUEST: f + "GET_IS_QUIET_REQUEST",
        },
        mutations: {
          SET_CSRF_KEY: f + "SET_CSRF_KEY",
          SET_END_POINTS: f + "END_POINTS",
          SET_IMAGE_URLS: f + "SET_IMAGE_URLS",
          INC_RUNNING_AJAX_REQUESTS: f + "INC_RUNNING_AJAX_REQUESTS",
          DEC_RUNNING_AJAX_REQUESTS: f + "DEC_RUNNING_AJAX_REQUESTS",
          SET_SUCCESS_MESSAGE: f + "SET_SUCCESS_MESSAGE",
          SET_ERROR_MESSAGE: f + "SET_ERROR_MESSAGE",
          CLEAR_SUCCESS_MESSAGE: f + "CLEAR_SUCCESS_MESSAGE",
          CLEAR_ERROR_MESSAGE: f + "CLEAR_ERROR_MESSAGE",
          SET_IS_QUIET_REQUEST: f + "SET_IS_QUIET_REQUEST",
        },
        actions: { UPDATE_SUCCESS_MESSAGE: f + "UPDATE_SUCCESS_MESSAGE" },
      },
      b = g(f, v),
      T = {
        running_ajax_requests: 0,
        csrf_key: "",
        end_points: {},
        image_urls: {},
        success_message: null,
        error_message: null,
        is_quiet_request: !1,
      },
      E =
        ((s = {}),
        Object(l["a"])(s, b.getters.GET_IS_AJAX_RUNNING, function (e) {
          return e.running_ajax_requests > 0;
        }),
        Object(l["a"])(s, b.getters.GET_END_POINTS, function (e) {
          return e.end_points;
        }),
        Object(l["a"])(s, b.getters.GET_BACKEND_URL, function (e) {
          return function (t, i) {
            var s = _(e.end_points[t], "action", i);
            return _(s, "CSRF_key", e.csrf_key);
          };
        }),
        Object(l["a"])(s, b.getters.GET_IMAGE_URLS, function (e) {
          return e.image_urls;
        }),
        Object(l["a"])(s, b.getters.GET_SUCCESS_MESSAGE, function (e) {
          return e.success_message;
        }),
        Object(l["a"])(s, b.getters.GET_ERROR_MESSAGE, function (e) {
          return e.error_message;
        }),
        Object(l["a"])(s, b.getters.GET_IS_QUIET_REQUEST, function (e) {
          return e.is_quiet_request;
        }),
        s),
      S =
        ((a = {}),
        Object(l["a"])(a, b.mutations.SET_CSRF_KEY, function (e, t) {
          e.csrf_key = t;
        }),
        Object(l["a"])(a, b.mutations.SET_END_POINTS, function (e, t) {
          e.end_points = t;
        }),
        Object(l["a"])(a, b.mutations.SET_IMAGE_URLS, function (e, t) {
          e.image_urls = t;
        }),
        Object(l["a"])(a, b.mutations.INC_RUNNING_AJAX_REQUESTS, function (e) {
          e.running_ajax_requests++;
        }),
        Object(l["a"])(a, b.mutations.DEC_RUNNING_AJAX_REQUESTS, function (e) {
          e.running_ajax_requests--;
        }),
        Object(l["a"])(a, b.mutations.SET_SUCCESS_MESSAGE, function (e, t) {
          e.success_message = t;
        }),
        Object(l["a"])(a, b.mutations.SET_ERROR_MESSAGE, function (e, t) {
          e.error_message = t;
        }),
        Object(l["a"])(a, b.mutations.CLEAR_SUCCESS_MESSAGE, function (e) {
          e.success_message = null;
        }),
        Object(l["a"])(a, b.mutations.CLEAR_ERROR_MESSAGE, function (e) {
          e.error_message = null;
        }),
        Object(l["a"])(a, b.mutations.SET_IS_QUIET_REQUEST, function (e, t) {
          e.is_quiet_request = t;
        }),
        a),
      C = Object(l["a"])({}, b.actions.UPDATE_SUCCESS_MESSAGE, function (e, t) {
        var i = t.success_message;
        (e.commit(b.mutations.SET_SUCCESS_MESSAGE, i),
          setTimeout(function () {
            e.commit(b.mutations.CLEAR_SUCCESS_MESSAGE);
          }, 5e3));
      }),
      y = { namespaced: !0, state: T, getters: E, mutations: S, actions: C },
      x = i("2f62"),
      O = i("1157"),
      w = i.n(O),
      j =
        (i("6b54"),
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
      k = j,
      A = {
        mixins: [k],
        created: function () {
          this.makeRequest = function (e, t, i, s, a, n, r) {
            (void 0 !== r && null !== r) || (r = !1);
            var o = this;
            (w.a.ajax(
              END_POINTS.urls()[t] +
                "?action=" +
                encodeURIComponent(i) +
                "&CSRF_key=" +
                encodeURIComponent(PAGE_DATA.csrfkey),
              {
                method: e,
                data: s,
                complete: function (e, t) {
                  if ("success" != t) {
                    r || o.$store.commit("root/DEC_RUNNING_AJAX_REQUESTS");
                    try {
                      o.s2g_objectIsFunction(n) && n(e);
                    } catch (i) {
                      console.error(
                        "encountered error in AJAXBackendMixin, err:",
                        i,
                      );
                    }
                  } else {
                    r || o.$store.commit("root/DEC_RUNNING_AJAX_REQUESTS");
                    try {
                      "error" in e.responseJSON && o.s2g_objectIsFunction(n)
                        ? n(e)
                        : o.s2g_objectIsFunction(a) && a(e);
                    } catch (i) {
                      console.error(
                        "encountered error in AJAXBackendMixin, err:",
                        i,
                      );
                    }
                  }
                },
              },
            ),
              r || o.$store.commit("root/INC_RUNNING_AJAX_REQUESTS"));
          };
        },
        methods: {
          mixinAjax_get: function (e, t, i, s, a, n) {
            return this.makeRequest("GET", e, t, i, s, a, n);
          },
          mixinAjax_post: function (e, t, i, s, a, n) {
            return this.makeRequest("POST", e, t, i, s, a, n);
          },
          mixinAjax_put: function (e, t, i, s, a, n) {
            return this.makeRequest("PUT", e, t, i, s, a, n);
          },
          mixinAjax_delete: function (e, t, i, s, a, n) {
            return this.makeRequest("DELETE", e, t, i, s, a, n);
          },
        },
      },
      I = A,
      D = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "div",
          { staticClass: "loading", class: { hide: !e.isVisible } },
          [e._m(0), i("div", { staticClass: "loading-backdrop" })],
        );
      },
      P = [
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("div", { staticClass: "load-more load-centered" }, [
            i("div", { staticClass: "loading-spinner" }, [
              i("div", { staticClass: "loader" }, [
                i("span", { staticClass: "icon-circles" }, [
                  i("span", { staticClass: "dot-circle pending" }),
                  i("span", { staticClass: "dot-circle soft-bounced" }),
                  i("span", { staticClass: "dot-circle hard-bounced" }),
                  i("span", { staticClass: "dot-circle rejected" }),
                  i("span", { staticClass: "dot-circle spam" }),
                  i("span", { staticClass: "dot-circle delivered" }),
                  i("span", { staticClass: "dot-circle unsubscribed" }),
                  i("span", { staticClass: "dot-circle unblocked" }),
                  i("span", { staticClass: "dot-circle opened" }),
                  i("span", { staticClass: "dot-circle clicked" }),
                ]),
              ]),
            ]),
          ]);
        },
      ],
      N = {
        name: "LoadingBlock",
        props: { isVisible: Boolean },
        data: function () {
          return {};
        },
      },
      $ = N,
      R = i("2877"),
      M = Object(R["a"])($, D, P, !1, null, null, null),
      L = M.exports,
      U = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "section",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: e.isVisible,
                expression: "isVisible",
              },
            ],
            staticClass: "sg-feature",
            attrs: { id: "email-templates" },
          },
          [
            i("header", { staticClass: "sg-feature--header has-functions" }, [
              i("h3", { staticClass: "page-title" }, [
                i("span", { staticClass: "title-icon" }, [
                  i(
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
                      i(
                        "linearGradient",
                        {
                          attrs: {
                            id: "a",
                            gradientUnits: "userSpaceOnUse",
                            x1: "17.2383",
                            x2: "17.2383",
                            y1: ".043945",
                            y2: "34.0439",
                          },
                        },
                        [
                          i("stop", {
                            attrs: { offset: "0", "stop-color": "#1edcc9" },
                          }),
                          i("stop", {
                            attrs: { offset: "1", "stop-color": "#1ac1a0" },
                          }),
                        ],
                        1,
                      ),
                      i("rect", {
                        attrs: {
                          fill: "url(#a)",
                          height: "34",
                          rx: "5",
                          width: "34",
                          x: ".238281",
                          y: ".043945",
                        },
                      }),
                      i(
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
                          i("path", {
                            attrs: {
                              d: "m25.4883 8.60645h-16.50002c-.75939 0-1.375.6156-1.375 1.375v15.12495c0 .7594.61561 1.375 1.375 1.375h16.50002c.7594 0 1.375-.6156 1.375-1.375v-15.12495c0-.7594-.6156-1.375-1.375-1.375z",
                            },
                          }),
                          i("path", {
                            attrs: { d: "m7.61328 12.7314h19.25002" },
                          }),
                          i("path", { attrs: { d: "m14.4883 12.7314v13.75" } }),
                          i("path", {
                            attrs: { d: "m14.4883 19.6064h12.375" },
                          }),
                        ],
                      ),
                    ],
                    1,
                  ),
                ]),
                e._v(" Templates"),
              ]),
            ]),
            i("div", { attrs: { id: "bounce-dtable-wrapper" } }, [
              i(
                "div",
                { staticClass: "card padded" },
                [
                  i("div", { staticClass: "card--tab has-functions" }, [
                    i("h2", { staticClass: "card--title" }, [
                      e._v("Manage Templates"),
                    ]),
                    i("div", { staticClass: "drop-content right top-pull" }, [
                      i(
                        "button",
                        {
                          staticClass: "button-download edit-on",
                          attrs: {
                            type: "button",
                            role: "button",
                            disabled: e.apMetadata.disable_add,
                          },
                          on: { click: e.selectTemplate },
                        },
                        [
                          e._v("\n            Add "),
                          i("span", { staticClass: "mobile-hide" }, [
                            e._v("email "),
                          ]),
                          e._v(" template\n          "),
                        ],
                      ),
                    ]),
                  ]),
                  i("SearchBox", { ref: "searchBox" }),
                  i(
                    "table",
                    {
                      staticClass:
                        "dataTable table table-striped table-hover display loading-in",
                      attrs: { id: "bounce-dtable" },
                    },
                    [
                      i("thead", [
                        i(
                          "tr",
                          [
                            e._l(e.activeColumns, function (t) {
                              return i(
                                "th",
                                { key: t.id, attrs: { id: "table-" + t.id } },
                                [
                                  e._v(
                                    "\n            " +
                                      e._s(t.label) +
                                      "\n          ",
                                  ),
                                ],
                              );
                            }),
                            i("th", { attrs: { id: "table-options" } }, [
                              i("div", { staticClass: "dropdown-container" }, [
                                i(
                                  "span",
                                  {
                                    staticClass: "dropdown-icon-container",
                                    on: {
                                      click: e.mixinTriggerable_toggleOpened,
                                    },
                                  },
                                  [i("span", { staticClass: "dropdown-icon" })],
                                ),
                                i(
                                  "ul",
                                  {
                                    staticClass:
                                      "dropdown-menu dropdown-options mixinTriggerable_layer column-filter",
                                    class: {
                                      "is-active": e.mixinTriggerable_isOpen,
                                    },
                                    attrs: { id: "columns" },
                                  },
                                  [
                                    e._m(0),
                                    e._l(e.columnFilters, function (t) {
                                      return i(
                                        "li",
                                        {
                                          key: t.id,
                                          staticClass:
                                            "columns-filter column-indicator",
                                          on: {
                                            click: function (i) {
                                              return e.handleColumnToggle(i, t);
                                            },
                                          },
                                        },
                                        [
                                          i(
                                            "div",
                                            { class: ["column-" + t.id] },
                                            [
                                              i(
                                                "div",
                                                { staticClass: "checker" },
                                                [
                                                  i(
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
                                                      i("input", {
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
                                              i(
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
                      i(
                        "tbody",
                        [
                          e._l(e.templateResults, function (t, s) {
                            return i(
                              "tr",
                              { key: t.user_template_id },
                              [
                                i(
                                  "td",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: e.isColumnActive("name"),
                                        expression: "isColumnActive('name')",
                                      },
                                    ],
                                    staticClass: "text-nowrap cell-name",
                                  },
                                  [
                                    i(
                                      "button",
                                      {
                                        staticClass: "button-link edit-on",
                                        on: {
                                          click: function (i) {
                                            return e.editTemplate(
                                              t.user_template_id,
                                            );
                                          },
                                        },
                                      },
                                      [e._v(e._s(t.template_name))],
                                    ),
                                  ],
                                ),
                                i(
                                  "td",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: e.isColumnActive("id"),
                                        expression: "isColumnActive('id')",
                                      },
                                    ],
                                    staticClass: "text-nowrap cell-id",
                                  },
                                  [
                                    i("span", { staticClass: "user-id" }, [
                                      e._v(e._s(t.user_template_id)),
                                    ]),
                                  ],
                                ),
                                i(
                                  "td",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: e.isColumnActive("subject"),
                                        expression: "isColumnActive('subject')",
                                      },
                                    ],
                                    staticClass: "text-nowrap cell-subject",
                                  },
                                  [
                                    i("span", { staticClass: "subject" }, [
                                      e._v(e._s(t.subject)),
                                    ]),
                                  ],
                                ),
                                i(
                                  "td",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: e.isColumnActive("updated"),
                                        expression: "isColumnActive('updated')",
                                      },
                                    ],
                                    staticClass: "cell-updated",
                                  },
                                  [
                                    i(
                                      "span",
                                      {
                                        staticClass: "date",
                                        class: {
                                          hide: t["date_display"].hideDate,
                                        },
                                        attrs: {
                                          title: t["date_display"].title,
                                        },
                                      },
                                      [
                                        e._v(
                                          "\n                  " +
                                            e._s(t["date_display"].date) +
                                            " \n                ",
                                        ),
                                      ],
                                    ),
                                    i(
                                      "span",
                                      {
                                        class: [
                                          t["date_display"].boldTime
                                            ? "time-large"
                                            : "time hide",
                                        ],
                                        attrs: {
                                          title: t["date_display"].title,
                                        },
                                      },
                                      [
                                        e._v(
                                          "\n                  " +
                                            e._s(t["date_display"].time) +
                                            "\n                ",
                                        ),
                                      ],
                                    ),
                                  ],
                                ),
                                i(
                                  "td",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: e.isColumnActive("tags"),
                                        expression: "isColumnActive('tags')",
                                      },
                                    ],
                                    staticClass: "text-nowrap cell-tags",
                                  },
                                  [
                                    i(
                                      "div",
                                      { staticClass: "tooltip-container" },
                                      e._l(t.tags, function (t, s) {
                                        return i(
                                          "span",
                                          {
                                            key: "tag-" + s,
                                            staticClass: "long-event-indicator",
                                            style:
                                              "background-color: " +
                                              e.getColour(t) +
                                              ";",
                                          },
                                          [
                                            e._v(
                                              "\n                  " +
                                                e._s(t.name) +
                                                "\n                ",
                                            ),
                                          ],
                                        );
                                      }),
                                      0,
                                    ),
                                  ],
                                ),
                                i("EmailTemplatesToolbox", {
                                  key: s,
                                  attrs: { template: t },
                                }),
                              ],
                              1,
                            );
                          }),
                          i(
                            "tr",
                            {
                              staticClass: "no-results",
                              class: {
                                hide: e.numTemplates >= 1 || e.isAjaxRunning,
                              },
                            },
                            [e._m(1)],
                          ),
                        ],
                        2,
                      ),
                    ],
                  ),
                ],
                1,
              ),
            ]),
          ],
        );
      },
      G = [
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("li", [
            i("p", [
              i("strong", [e._v("Display optional columns")]),
              i("br"),
              e._v("Choose to show optional columns\n                  "),
            ]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("td", { attrs: { colspan: "100%" } }, [
            i("div", { staticClass: "table-blank" }, [
              i("div", { staticClass: "table-blank-content" }, [
                i("p", [e._v("You don't have any email templates yet.")]),
              ]),
            ]),
          ]);
        },
      ],
      V = (i("7f7f"), i("c1df")),
      B = i.n(V),
      H =
        (i("7f45"),
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "div",
            {
              staticClass: "top search-grouped bar-full",
              attrs: { show: "{this.data.showSearchBar}" },
            },
            [
              i("div", { staticClass: "event-filter-container" }, [
                i("div", { staticClass: "btn-group" }, [
                  i(
                    "a",
                    {
                      staticClass: "btn btn-default btn-icon-left",
                      attrs: { id: "dropdown-options-toggler" },
                      on: { click: e.mixinTriggerable_toggleOpened },
                    },
                    [
                      i("span", { staticClass: "icon-tag-colored" }),
                      i("span", [e._v(" Tags ")]),
                      i(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: e.tagShowCount,
                              expression: "tagShowCount",
                            },
                          ],
                          staticClass: "tags-count",
                        },
                        [e._v("(" + e._s(e.tagCounts()) + ")")],
                      ),
                      i("i", { staticClass: "fa fa-angle-down" }),
                    ],
                  ),
                  i(
                    "ul",
                    {
                      staticClass:
                        "dropdown-menu dropdown-options event-filter mixinTriggerable_layer",
                      class: { "is-active": e.mixinTriggerable_isOpen },
                      attrs: { id: "tags" },
                    },
                    [
                      i("li", [
                        0 == Object.keys(e.tags).length
                          ? i("p", { staticClass: "no-tags-message" }, [
                              i("strong", [
                                e._v("No tags have been created yet."),
                              ]),
                            ])
                          : i("p", [i("strong", [e._v("Tags to display")])]),
                      ]),
                      i("li", { staticClass: "tags-list" }, [
                        i(
                          "ul",
                          [
                            0 != Object.keys(e.tags).length
                              ? i(
                                  "li",
                                  {
                                    staticClass: "indicators-filter toggle-all",
                                    on: {
                                      click: function (t) {
                                        return e.toggleAll();
                                      },
                                    },
                                  },
                                  [
                                    i(
                                      "div",
                                      {
                                        staticClass: "event-indicator default",
                                      },
                                      [
                                        i("div", { staticClass: "checker" }, [
                                          i(
                                            "span",
                                            {
                                              staticClass: "checker-box",
                                              class: { checked: e.allSelected },
                                            },
                                            [
                                              i("input", {
                                                attrs: {
                                                  type: "checkbox",
                                                  name: "toggle-all",
                                                  value: "toggle-all",
                                                },
                                              }),
                                            ],
                                          ),
                                        ]),
                                        i(
                                          "span",
                                          {
                                            staticClass:
                                              "indicator-copy toggle-copy",
                                          },
                                          [
                                            e._v(
                                              e._s(
                                                e.allSelected
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
                            e._l(e.tags, function (t, s) {
                              return i(
                                "li",
                                {
                                  key: "tag-" + s,
                                  staticClass: "indicators-filter",
                                  on: {
                                    click: function (i) {
                                      return e.toggleTag(t.name);
                                    },
                                  },
                                },
                                [
                                  i(
                                    "div",
                                    { staticClass: "event-indicator default" },
                                    [
                                      i("div", { staticClass: "checker" }, [
                                        i(
                                          "span",
                                          {
                                            staticClass: "checker-box",
                                            class: {
                                              checked: e.isSelected(t.name),
                                            },
                                            style: e.isSelected(t.name)
                                              ? "background-color: " +
                                                t.color.background +
                                                "; border-color: " +
                                                t.color.background +
                                                ";"
                                              : "",
                                          },
                                          [
                                            i("input", {
                                              attrs: {
                                                type: "checkbox",
                                                name: "events[]",
                                                value: "marketing",
                                              },
                                            }),
                                          ],
                                        ),
                                      ]),
                                      i(
                                        "span",
                                        { staticClass: "indicator-copy" },
                                        [e._v(e._s(t.name))],
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
                ]),
              ]),
              i("div", { staticClass: "search" }, [
                i(
                  "div",
                  {
                    staticClass: "dataTables_filter has-search-options",
                    attrs: { id: "emails_bounces_filter" },
                  },
                  [
                    i("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.primarySearchKeyword,
                          expression: "primarySearchKeyword",
                        },
                      ],
                      staticClass: "form-control input-small input-inline",
                      attrs: {
                        autocomplete: "off",
                        autocorrect: "off",
                        autocapitalize: "none",
                        spellcheck: "false",
                        type: "search",
                        "aria-controls": "emails_bounces",
                        id: "main-search",
                        placeholder: "Search for a template",
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
                    i("input", {
                      attrs: { type: "hidden", id: "main-search-filtered" },
                    }),
                    i(
                      "button",
                      {
                        staticClass: "btn blue btn-search",
                        attrs: { type: "button", role: "button" },
                        on: { click: e.forcePerformSearch },
                      },
                      [
                        i("span", { staticClass: "icon-search" }),
                        i("span", { staticClass: "button-text" }, [
                          e._v("Search"),
                        ]),
                      ],
                    ),
                  ],
                ),
              ]),
            ],
          );
        }),
      F = [],
      J =
        (i("6762"),
        i("2fdb"),
        i("7514"),
        Object.freeze({
          TRIGGERABLE_OPENED: "mixin-triggerable-opened",
          TRIGGERABLE_CLOSED: "mixin-triggerable-closed",
        })),
      z = {
        created: function () {
          (w()(window).on("click.Bst", this.$_mixinTriggerableWindowClicked),
            this.$eventBus.$on(
              J.TRIGGERABLE_OPENED,
              this.$_mixinTriggerableOpened,
            ));
        },
        mounted: function () {
          ((this.mixinTriggerable_layers = w()(this.$el).find(
            ".mixinTriggerable_layer",
          )),
            w()(this.$el).hasClass("mixinTriggerable_layer") &&
              this.mixinTriggerable_layers.push(this.$el));
        },
        destroyed: function () {
          (w()(window).off("click.Bst", this.$_mixinTriggerableWindowClicked),
            this.$eventBus.$off(
              J.TRIGGERABLE_OPENED,
              this.$_mixinTriggerableOpened,
            ));
        },
        methods: {
          $_mixinTriggerableUpdateParent: function () {
            for (var e = 0, t = this.$parent; ; ) {
              if (
                !(
                  void 0 !== t &&
                  null !== t &&
                  void 0 !== t.mixinTriggerable_getID &&
                  e < 10
                )
              )
                break;
              (e++, (t = t.$parent));
            }
          },
          $_mixinTriggerableWindowClicked: function (e) {
            if (this.mixinTriggerable_ignoreNextWindowClick)
              this.mixinTriggerable_ignoreNextWindowClick = !1;
            else if (!this.mixinTriggerable_isModal) {
              var t = function (e) {
                  var t = w()(e)
                    .parents()
                    .filter(function (e, t) {
                      return w()(t).hasClass("mixinTriggerable_layer");
                    });
                  return t.length > 0;
                },
                i = !1;
              if (this.mixinTriggerable_isOpen)
                for (var s = 0; s < this.mixinTriggerable_layers.length; ++s) {
                  var a = w()(this.mixinTriggerable_layers[s]);
                  if (
                    0 !== a.has(e.target).length ||
                    a.is(e.target) ||
                    (!this.mixinTriggerable_closeOnParentClick &&
                      t(e.target, a))
                  ) {
                    i = !0;
                    break;
                  }
                }
              this.mixinTriggerable_isOpen &&
                !i &&
                ((this.mixinTriggerable_isOpen = !1),
                this.$_mixinTriggerableUpdateParent(
                  this.mixinTriggerable_isOpen,
                ),
                this.$eventBus.$emit(
                  J.TRIGGERABLE_CLOSED,
                  this.mixinTriggerable_getID(),
                ));
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
            var e = w()(this.$el).offset().left,
              t = Math.ceil(e),
              i = w()(this.$el).offset().top,
              s = Math.ceil(i);
            ((this.$el.style.left = t + "px"),
              (this.$el.style.top = s + "px"),
              (this.$el.style.transform = "translate(0) scale(1)"));
          },
          mixinTriggerable_toggleOpened: function (e) {
            (void 0 !== e && e.stopImmediatePropagation(),
              this.mixinTriggerable_isModal ||
                ((this.mixinTriggerable_isOpen = !this.mixinTriggerable_isOpen),
                this.$_mixinTriggerableUpdateParent(
                  this.mixinTriggerable_isOpen,
                ),
                this.mixinTriggerable_isOpen
                  ? this.$eventBus.$emit(
                      J.TRIGGERABLE_OPENED,
                      this.mixinTriggerable_getID(),
                    )
                  : this.$eventBus.$emit(
                      J.TRIGGERABLE_CLOSED,
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
                  J.TRIGGERABLE_OPENED,
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
                  J.TRIGGERABLE_CLOSED,
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
      };
    function W(e, t) {
      var i = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        (t &&
          (s = s.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          i.push.apply(i, s));
      }
      return i;
    }
    function q(e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? W(Object(i), !0).forEach(function (t) {
              Object(l["a"])(e, t, i[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : W(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t),
                );
              });
      }
      return e;
    }
    var K = {
        name: "SearchBox",
        mixins: [z, p],
        data: function () {
          return {
            searchOptions: this.$config.searchOptions,
            searchPlaceHolder: this.$config.searchPlaceHolder,
            mainSearch: "",
            primarySearchKeyword: "",
            tags: {},
            selectedTags: [],
            allTagsSelected: !1,
            tagShowCount: !1,
          };
        },
        created: function () {
          var e = this;
          (this.mixinEventListener_register(
            Object(l["a"])({}, J.TRIGGERABLE_CLOSED, this.checkClosed),
          ),
            this.mixinEventListener_on(),
            this.$eventBus.$on("remove-template", function () {
              e.tagCounts();
            }));
        },
        destroyed: function () {
          this.mixinEventListener_off();
        },
        methods: {
          initSearchBox: function (e) {
            var t = this;
            this.tags = e;
            var i = this.selectedTags.filter(function (e) {
                return e in t.tags;
              }),
              s = 0 == i.length && 0 != this.selectedTags.length;
            ((this.selectedTags = i), s && this.forcePerformSearch());
          },
          clearSearchBox: function () {
            ((this.mainSearch = ""),
              (this.primarySearchKeyword = ""),
              (this.selectedTags = []));
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
              i = this.primarySearchKeyword;
            for (var s in this.searchOptions) this.searchOptions[s].value = "";
            while (null !== (e = t.exec(this.primarySearchKeyword)))
              for (var a in this.searchOptions)
                e[1] == a &&
                  ((i = i.replace(e[0], "")),
                  (this.searchOptions[a].value = e[3]));
            this.mainSearch = i.trim();
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
              !this.isAjaxRunning &&
              (this.forcePerformSearch(e), !0)
            );
          },
          forcePerformSearch: function (e) {
            (this.$eventBus.$emit("mixin-search-has-changed"),
              this.$eventBus.$emit("mixin-search-trigger"),
              this.mixinTriggerable_forceClose(e));
          },
          checkClosed: function (e) {
            "SearchBox" == e && this.$eventBus.$emit("mixin-search-trigger");
          },
          getMainSearch: function () {
            return this.mainSearch;
          },
          getSelectedTags: function () {
            return this.selectedTags;
          },
          isSelected: function (e) {
            return this.selectedTags.includes(e);
          },
          toggleTag: function (e) {
            (this.selectedTags.includes(e)
              ? this.selectedTags.splice(this.selectedTags.indexOf(e), 1)
              : this.selectedTags.push(e),
              this.tagCounts(),
              this.$eventBus.$emit("mixin-search-has-changed"));
          },
          toggleAll: function () {
            (this.allSelected
              ? ((this.selectedTags = []), (this.allTagsSelected = !1))
              : ((this.selectedTags = Object.keys(this.tags)),
                (this.allTagsSelected = !0)),
              this.$eventBus.$emit("mixin-search-has-changed"));
          },
          tagCounts: function () {
            var e = this.getSelectedTags().length;
            return e > 0 && !this.allSelected
              ? ((this.tagShowCount = !0), e)
              : ((this.tagShowCount = !1), "");
          },
        },
        computed: q(
          q(
            {},
            Object(x["b"])({
              isAjaxRunning: v.getters.GET_IS_AJAX_RUNNING,
              isQuiteRequest: v.getters.GET_IS_QUIET_REQUEST,
            }),
          ),
          {},
          {
            allSelected: function () {
              return this.selectedTags.length == Object.keys(this.tags).length;
            },
          },
        ),
      },
      X = K,
      Q = Object(R["a"])(X, H, F, !1, null, null, null),
      Y = Q.exports,
      Z = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i("td", { staticClass: "table-action" }, [
          i(
            "div",
            { staticClass: "drop-content" },
            [
              i("button", {
                staticClass: "table-remove-toggler",
                on: { click: e.mixinTriggerable_toggleOpened },
              }),
              i(
                "ul",
                {
                  staticClass:
                    "dropdown-menu dropdown-options mixinTriggerable_layer",
                  class: { "is-active": e.mixinTriggerable_isOpen },
                },
                [
                  i("li", [
                    i(
                      "button",
                      {
                        staticClass: "button-link edit-on",
                        attrs: { "data-name": "Name 1" },
                        on: { click: e.editTemplate },
                      },
                      [
                        i("span", { staticClass: "icon-pencil" }),
                        e._v(" Edit template\n        "),
                      ],
                    ),
                  ]),
                  i("li", [
                    i(
                      "button",
                      {
                        staticClass: "button-link",
                        on: { click: e.duplicateTemplate },
                      },
                      [
                        i("span", { staticClass: "icon-duplicate" }),
                        e._v(" Duplicate template\n        "),
                      ],
                    ),
                  ]),
                  i("li", [
                    i(
                      "button",
                      {
                        staticClass: "button-link button-remove",
                        on: { click: e.removeTemplate },
                      },
                      [
                        i("span", { staticClass: "icon-remove" }, [e._v("×")]),
                        e._v(" Remove\n        "),
                      ],
                    ),
                  ]),
                ],
              ),
              i("ConfirmDeletePopup", {
                ref: "confirm_delete_popup",
                attrs: { template: e.template },
              }),
            ],
            1,
          ),
        ]);
      },
      ee = [],
      te = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "ul",
          {
            staticClass: "dropdown-menu confirm-remove mixinTriggerable_layer",
            class: { "is-active": e.mixinTriggerable_isOpen },
          },
          [
            i("li", [
              i("span", { staticClass: "tooltip-title" }, [
                e._v("Confirm remove?"),
              ]),
              i(
                "button",
                {
                  staticClass: "button-link table-remove",
                  on: { click: e.onConfirmCloseClicked },
                },
                [e._v("\n      Remove\n    ")],
              ),
              i(
                "button",
                {
                  staticClass: "button-link table-remove-close toggle-popup",
                  on: { click: e.mixinTriggerable_forceClose },
                },
                [e._v("\n      Cancel\n    ")],
              ),
            ]),
          ],
        );
      },
      ie = [],
      se = {
        name: "ConfirmDeletePopup",
        mixins: [z, I],
        props: { template: { type: Object, required: !0 } },
        data: function () {
          return { isWorking: !1, requestPoint: this.$config.requestPoint };
        },
        methods: {
          onConfirmCloseClicked: function () {
            var e = this;
            this.isWorking = !0;
            var t = { user_template_id: this.template.user_template_id };
            this.mixinAjax_delete(
              this.requestPoint,
              "delete",
              t,
              function (t) {
                ((e.isWorking = !1),
                  HTML.set_time(t.responseJSON),
                  e.$eventBus.$emit("mixin-search-has-changed"),
                  e.$eventBus.$emit("mixin-search-trigger"),
                  e.mixinTriggerable_forceClose());
              },
              function (t) {
                ((e.isWorking = !1),
                  HTML.handleError(t.responseJSON),
                  e.mixinTriggerable_forceClose());
              },
            );
          },
        },
      },
      ae = se,
      ne = Object(R["a"])(ae, te, ie, !1, null, null, null),
      re = ne.exports,
      oe = {
        name: "EmailTemplatesToolbox",
        mixins: [z],
        components: { ConfirmDeletePopup: re },
        props: { template: { type: Object, required: !0 } },
        computed: {},
        methods: {
          editTemplate: function () {
            (this.$eventBus.$emit(
              d.ETTBOX_EDIT_CLICKED,
              this.template.user_template_id,
            ),
              this.mixinTriggerable_forceClose());
          },
          duplicateTemplate: function () {
            (this.$eventBus.$emit(
              d.ETTBOX_DUPLICATE_CLICKED,
              this.template.user_template_id,
            ),
              this.mixinTriggerable_forceClose());
          },
          removeTemplate: function () {
            (this.$refs.confirm_delete_popup.mixinTriggerable_forceOpen(),
              this.mixinTriggerable_forceClose());
          },
        },
      },
      le = oe,
      ce = Object(R["a"])(le, Z, ee, !1, null, null, null),
      de = ce.exports,
      me = {
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
      ue = me,
      pe = "tags/",
      he = {
        getters: { GET_USER_TAGS: pe + "GET_USER_TAGS" },
        mutations: { SET_USER_TAGS: pe + "SET_USER_TAGS" },
      },
      ge = g(pe, he),
      _e = { user_tags: {} },
      fe = Object(l["a"])({}, ge.getters.GET_USER_TAGS, function (e) {
        return e.user_tags;
      }),
      ve = Object(l["a"])({}, ge.mutations.SET_USER_TAGS, function (e, t) {
        e.user_tags = t;
      }),
      be = { namespaced: !0, state: _e, getters: fe, mutations: ve };
    function Te(e, t) {
      var i = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        (t &&
          (s = s.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          i.push.apply(i, s));
      }
      return i;
    }
    function Ee(e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Te(Object(i), !0).forEach(function (t) {
              Object(l["a"])(e, t, i[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : Te(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t),
                );
              });
      }
      return e;
    }
    var Se = {
        name: "EmailTemplateList",
        mixins: [z, ue, I, p],
        props: { isVisible: Boolean },
        components: { SearchBox: Y, EmailTemplatesToolbox: de },
        data: function () {
          return {
            initialised: !1,
            apMetadata: {},
            templateResults: [],
            shownColumns: {},
            columnIsSaving: !1,
            displayColumns: this.$config.displayColumns,
            requestPoint: this.$config.requestPoint,
            clientTimezone: null,
            tagColours: this.$config.tagColours,
          };
        },
        created: function () {
          var e;
          (this.mixinEventListener_register(
            ((e = {}),
            Object(l["a"])(e, d.ETTBOX_EDIT_CLICKED, this.editTemplate),
            Object(l["a"])(
              e,
              d.ETTBOX_DUPLICATE_CLICKED,
              this.duplicateTemplate,
            ),
            e),
          ),
            this.mixinEventListener_on());
        },
        methods: Ee(
          Ee({}, Object(x["c"])({ setTagList: he.mutations.SET_USER_TAGS })),
          {},
          {
            init: function (e, t) {
              var i = this;
              ((this.apMetadata = e),
                (this.initialised = !1),
                (this.templateResults = []),
                (this.clientTimezone = t),
                (void 0 !== t && null !== t && "" !== t) ||
                  (this.clientTimezone = B.a.tz.guess()),
                0 == Object.keys(this.shownColumns).length &&
                  this.$config.displayColumns.forEach(function (t) {
                    var s = "show_template_" + t["id"] + "_col";
                    (void 0 != e &&
                      "app_settings" in e &&
                      s in e.app_settings &&
                      i.$set(t, "active", e.app_settings[s]),
                      i.$set(i.shownColumns, t["id"], t["active"]));
                  }),
                this.$refs.searchBox.clearSearchBox(),
                this.loadTemplates());
            },
            loadTemplates: function () {
              (this.$eventBus.$emit("mixin-search-has-changed"),
                this.$eventBus.$emit("mixin-search-trigger"));
            },
            initComponents: function () {},
            selectTemplate: function () {
              this.$eventBus.$emit(d.SWITCH_CONTEXT, "select");
            },
            editTemplate: function (e) {
              this.$eventBus.$emit(d.SWITCH_CONTEXT, "edit", {
                userTemplateID: e,
                userTags: this.userTags,
              });
            },
            duplicateTemplate: function (e) {
              this.$eventBus.$emit(d.SWITCH_CONTEXT, "edit", {
                userTemplateID: e,
                userTags: this.userTags,
                duplicate: !0,
              });
            },
            performSearch: function (e, t) {
              var i = this;
              ((this.fullPageLoad = !1),
                t ||
                  ((this.clearTableOnResults = !0),
                  window.scroll({ top: 0, left: 0, behavior: "smooth" }),
                  (this.fullPageLoad = !0)),
                this.mixinAjax_get(
                  this.requestPoint,
                  "search",
                  this.buildSearchPayload(t),
                  function (t) {
                    (e && (i.initialised = !0),
                      (i.datestamp_format =
                        t.responseJSON.results.datestamp_format),
                      (i.templateResults = t.responseJSON.results.templates),
                      i.templateResults.forEach(function (e) {
                        e["date_display"] = i.convertUnixTS(e.last_updated);
                      }),
                      i.setTagColours(t.responseJSON.results.tags),
                      i.$refs.searchBox.initSearchBox(i.userTags));
                  },
                  function (e) {
                    HTML.handleError(e.responseJSON);
                  },
                ));
            },
            setTagColours: function (e) {
              for (var t in e)
                null == e[t].color &&
                  (e[t].color =
                    this.tagColours[
                      Math.floor(Math.random() * this.tagColours.length)
                    ]);
              this.setTagList(e);
            },
            getColour: function (e) {
              return null != e.color
                ? e.color.background
                : this.userTags[e.name].color.background;
            },
            buildSearchPayload: function (e) {
              if (e)
                return (
                  (this.loadMoreSearchPayload.continue_token =
                    this.continueToken),
                  this.loadMoreSearchPayload
                );
              var t = {
                search_term: this.$refs.searchBox.getMainSearch(),
                tags_to_display: JSON.stringify(
                  this.$refs.searchBox.getSelectedTags(),
                ),
                shown_records: this.templateResults.length,
                shown_columns: JSON.stringify(this.shownColumns),
                continue_token: "",
              };
              return ((this.loadMoreSearchPayload = t), t);
            },
            convertUnixTS: function (e) {
              var t = {
                  hideDate: !1,
                  boldTime: !1,
                  title: "",
                  date: "",
                  time: "",
                },
                i = B.a.unix(e).tz(this.clientTimezone),
                s = i.format(this.datestamp_format),
                a =
                  i.format("ddd, MMM Do, YYYY") +
                  " at " +
                  i.format("h:mm:ss A zz");
              ((t.title = a),
                (t.date = s.slice(0, s.indexOf(" "))),
                (t.time = s.slice(s.indexOf(" ") + 1)));
              var n = B()().tz(this.clientTimezone).startOf("day");
              return (
                B()().tz(this.clientTimezone).format("HH") <= 12 &&
                  (n = n.subtract(12, "h")),
                i.valueOf() > n.valueOf() &&
                  ((t.hideDate = !0), (t.boldTime = !0)),
                t
              );
            },
            handleColumnToggle: function (e, t) {
              void 0 !== e && e.stopImmediatePropagation();
              var i = this.shownColumns[t.id];
              (this.$set(this.shownColumns, t.id, !i),
                this.$set(t, "active", !i),
                this.$eventBus.$emit("mixin-column-has-changed"),
                this.saveColumn());
            },
            isColumnActive: function (e) {
              var t = !1;
              return (
                this.activeColumns.forEach(function (i) {
                  i.id == e && (t = !0);
                }),
                t
              );
            },
            saveColumn: function () {
              var e = this;
              this.columnIsSaving = !0;
              var t = !0,
                i = { shown_columns: JSON.stringify(this.shownColumns) };
              this.mixinAjax_put(
                this.requestPoint,
                "save-columns",
                i,
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
        computed: Ee(
          Ee(
            {
              numTemplates: function () {
                return this.templateResults.length;
              },
            },
            Object(x["b"])({
              isAjaxRunning: v.getters.GET_IS_AJAX_RUNNING,
              isQuiteRequest: v.getters.GET_IS_QUIET_REQUEST,
              userTags: he.getters.GET_USER_TAGS,
            }),
          ),
          {},
          {
            shouldShow: function () {
              return !!this.initialised || !this.isAjaxRunning;
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
          },
        ),
      },
      Ce = Se,
      ye = Object(R["a"])(Ce, U, G, !1, null, null, null),
      xe = ye.exports,
      Oe = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "div",
          {
            staticClass: "template-picker",
            class: { "is-active": e.isVisible && !e.isAjaxRunning },
          },
          [
            e._m(0),
            e._m(1),
            i("p", [
              e._v(
                "Code your own template or quickly get started with one of our content-ready templates below.",
              ),
            ]),
            i(
              "div",
              { staticClass: "grid-templates" },
              e._l(e.templates, function (t) {
                return i(
                  "div",
                  {
                    key: t.user_template_id,
                    staticClass: "item-template",
                    on: {
                      click: function (i) {
                        return e.createTemplate(t.user_template_id);
                      },
                    },
                  },
                  [
                    i("figure", { staticClass: "template-preview" }, [
                      i("img", { attrs: { src: t.image_link } }),
                    ]),
                    i("div", { staticClass: "template-description" }, [
                      i("div", { staticClass: "description-content" }, [
                        i("h4", [e._v(e._s(t.template_name))]),
                        i("p", [e._v(e._s(t.description))]),
                      ]),
                    ]),
                  ],
                );
              }),
              0,
            ),
            i("p", { staticClass: "templates-back" }, [
              e._v("or "),
              i(
                "button",
                {
                  staticClass: "button-link-gray",
                  on: { click: e.backToList },
                },
                [e._v("go back to view your existing Email Templates")],
              ),
              e._v("."),
            ]),
          ],
        );
      },
      we = [
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("figure", [
            i("img", {
              attrs: {
                src: "/static/smtp2go_assets/templates.png",
                width: "188",
                alt: "SMTP2GO Webhooks",
              },
            }),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("h3", { staticClass: "page-title" }, [
            i("span", { staticClass: "title-editor" }, [
              e._v("Choose a template to get started"),
            ]),
          ]);
        },
      ];
    function je(e, t) {
      var i = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        (t &&
          (s = s.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          i.push.apply(i, s));
      }
      return i;
    }
    function ke(e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? je(Object(i), !0).forEach(function (t) {
              Object(l["a"])(e, t, i[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : je(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t),
                );
              });
      }
      return e;
    }
    var Ae = {
        name: "EmailTemplateSelect",
        mixins: [I],
        props: { isVisible: Boolean },
        data: function () {
          return { templates: [], requestPoint: this.$config.requestPoint };
        },
        methods: {
          init: function () {
            ((this.templates = []), this.getTemplates());
          },
          createTemplate: function (e) {
            this.$eventBus.$emit(d.SWITCH_CONTEXT, "edit", {
              userTemplateID: e,
              new: !0,
            });
          },
          getTemplates: function () {
            var e = this;
            this.mixinAjax_get(
              this.requestPoint,
              "get-common",
              null,
              function (t) {
                e.templates = t.responseJSON.results.templates;
              },
              function (e) {
                HTML.handleError(e.responseJSON);
              },
            );
          },
          backToList: function () {
            this.$eventBus.$emit(d.SWITCH_CONTEXT, "list");
          },
        },
        computed: ke(
          {},
          Object(x["b"])({
            isAjaxRunning: v.getters.GET_IS_AJAX_RUNNING,
            isQuiteRequest: v.getters.GET_IS_QUIET_REQUEST,
          }),
        ),
      },
      Ie = Ae,
      De = Object(R["a"])(Ie, Oe, we, !1, null, null, null),
      Pe = De.exports,
      Ne = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "div",
          {
            staticClass: "template-editor card padded",
            class: { "is-active": e.isVisible },
          },
          [
            i("header", { staticClass: "template-editor-header" }, [
              i("div", { staticClass: "template-editor-label" }, [
                i("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: e.templateName,
                      expression: "templateName",
                    },
                  ],
                  staticClass: "template-name",
                  attrs: { type: "text", placeholder: "New template name" },
                  domProps: { value: e.templateName },
                  on: {
                    keydown: e.checkNameLength,
                    input: function (t) {
                      t.target.composing || (e.templateName = t.target.value);
                    },
                  },
                }),
                i(
                  "div",
                  {
                    staticClass: "label-error",
                    class: {
                      "is-active": e.hadNameError && "" == e.templateName,
                    },
                  },
                  [e._v("Template name cannot be blank")],
                ),
              ]),
              i(
                "div",
                {
                  staticClass: "form-control-container",
                  class: { "editor-preview-active": e.showHTMLPreview },
                },
                [
                  i("span", { staticClass: "control-label" }, [
                    e._v("Subject:"),
                  ]),
                  i("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: e.templateSubject,
                        expression: "templateSubject",
                      },
                    ],
                    staticClass:
                      "form-control input-small input-inline input-subject",
                    attrs: { type: "text" },
                    domProps: { value: e.templateSubject },
                    on: {
                      change: e.updateSubject,
                      input: function (t) {
                        t.target.composing ||
                          (e.templateSubject = t.target.value);
                      },
                    },
                  }),
                  i(
                    "div",
                    {
                      staticClass: "label-error",
                      class: {
                        "is-active":
                          e.hadSubjectError && "" == e.templateSubject,
                      },
                    },
                    [e._v("Subject cannot be blank")],
                  ),
                ],
              ),
              i(
                "div",
                {
                  staticClass: "form-control input-inline tags-container",
                  on: {
                    click: function (t) {
                      return (t.stopPropagation(), e.tagsClicked(t));
                    },
                  },
                },
                [
                  i("ul", { staticClass: "tags-list" }, [
                    i("li", { staticClass: "tags-active" }, [
                      i("span", { staticClass: "control-list-label" }, [
                        e._v("Tags: "),
                        i(
                          "span",
                          {
                            staticClass: "label-instructions",
                            class: { "is-active": e.showTagOptional },
                          },
                          [e._v("Optional")],
                        ),
                      ]),
                      i(
                        "ul",
                        [
                          e._l(e.template.tags, function (t, s) {
                            return i(
                              "li",
                              {
                                key: "currenttag-" + s,
                                style:
                                  "background-color: " +
                                  t.color.background +
                                  "; color: white;",
                              },
                              [
                                e._v(
                                  "\n              " +
                                    e._s(s) +
                                    " \n              ",
                                ),
                                i(
                                  "span",
                                  {
                                    staticClass: "tag-remove",
                                    style:
                                      "background-color: " +
                                      t.color.text +
                                      "; color: white;",
                                    on: {
                                      click: function (t) {
                                        return (
                                          t.stopPropagation(),
                                          e.tagDelete(s)
                                        );
                                      },
                                    },
                                  },
                                  [e._v("×")],
                                ),
                              ],
                            );
                          }),
                          i("li", { staticClass: "tags-input" }, [
                            i(
                              "label",
                              {
                                staticClass: "namefield-container",
                                attrs: { "data-value": e.newTag },
                              },
                              [
                                i("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: e.newTag,
                                      expression: "newTag",
                                    },
                                  ],
                                  ref: "name_tag",
                                  staticClass: "tags-namefield",
                                  attrs: {
                                    type: "text",
                                    size: "1",
                                    id: "name_tag",
                                  },
                                  domProps: { value: e.newTag },
                                  on: {
                                    keyup: e.displayTagLink,
                                    keydown: e.checkTagLength,
                                    input: function (t) {
                                      t.target.composing ||
                                        (e.newTag = t.target.value);
                                    },
                                  },
                                }),
                              ],
                            ),
                          ]),
                        ],
                        2,
                      ),
                    ]),
                    i("li", { staticClass: "tags-dropdown" }, [
                      i(
                        "ul",
                        {
                          staticClass: "mixinTriggerable_layer",
                          class: { "is-active": e.mixinTriggerable_isOpen },
                        },
                        [
                          i("li", [
                            "" == e.newTag
                              ? i("span", { staticClass: "tags-info" }, [
                                  e._v("Type to create a new tag…"),
                                ])
                              : e._e(),
                            "" != e.newTag
                              ? i(
                                  "span",
                                  {
                                    staticClass: "tags-info",
                                    on: {
                                      click: function (t) {
                                        return e.tagAdd(e.newTag);
                                      },
                                    },
                                  },
                                  [
                                    e._v("Create tag ‘"),
                                    i(
                                      "span",
                                      { staticClass: "button-tag-name" },
                                      [e._v(e._s(e.newTag))],
                                    ),
                                    e._v("’ with "),
                                    i("span", { staticClass: "tags-enter" }, [
                                      e._v("enter"),
                                    ]),
                                  ],
                                )
                              : e._e(),
                          ]),
                          i(
                            "div",
                            { staticClass: "tooltip-container" },
                            [
                              e._l(e.filteredUserTags, function (t) {
                                return [
                                  i("li", {
                                    key: "commontag-" + t,
                                    domProps: { innerHTML: e._s(t) },
                                    on: {
                                      click: function (i) {
                                        e.tagAdd(e.stripBold(t));
                                      },
                                    },
                                  }),
                                ];
                              }),
                            ],
                            2,
                          ),
                        ],
                      ),
                    ]),
                  ]),
                ],
              ),
            ]),
            i(
              "div",
              { staticClass: "top search-grouped bar-full" },
              [
                i("div", { staticClass: "template-tab-toggler" }, [
                  i(
                    "button",
                    {
                      staticClass: "tab-toggle-button toggle-html",
                      class: { "is-active": !e.showHTMLPreview },
                      on: { click: e.showEditor },
                    },
                    [e._v("Edit")],
                  ),
                  i(
                    "button",
                    {
                      staticClass: "tab-toggle-button toggle-preview",
                      class: { "is-active": e.showHTMLPreview },
                      on: { click: e.showPreview },
                    },
                    [e._v("Preview")],
                  ),
                ]),
                i("EmailTemplateID", {
                  ref: "template-id",
                  on: { "template-id-toggled": e.idToggled },
                }),
                e.extraOptions
                  ? i("div", { staticClass: "block-template-admin" }, [
                      i("div", { staticClass: "template-admin-description" }, [
                        i(
                          "button",
                          {
                            staticClass: "button-link-gray",
                            on: {
                              click: function (t) {
                                e.descriptionActive = !e.descriptionActive;
                              },
                            },
                          },
                          [e._v("Edit template description")],
                        ),
                        i(
                          "div",
                          {
                            staticClass: "template-admin-dropdown",
                            class: { "is-active": e.descriptionActive },
                          },
                          [
                            i("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: e.template.description,
                                  expression: "template.description",
                                },
                              ],
                              staticClass: "template-desc",
                              attrs: {
                                type: "text",
                                placeholder: "Description",
                              },
                              domProps: { value: e.template.description },
                              on: {
                                input: function (t) {
                                  t.target.composing ||
                                    e.$set(
                                      e.template,
                                      "description",
                                      t.target.value,
                                    );
                                },
                              },
                            }),
                          ],
                        ),
                      ]),
                      i("div", { staticClass: "template-admin-image" }, [
                        i(
                          "button",
                          {
                            staticClass: "button-link-gray",
                            on: {
                              click: function (t) {
                                e.imageActive = !e.imageActive;
                              },
                            },
                          },
                          [e._v("Edit template image")],
                        ),
                        i(
                          "div",
                          {
                            staticClass: "template-admin-dropdown",
                            class: { "is-active": e.imageActive },
                          },
                          [
                            i("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: e.template.image_link,
                                  expression: "template.image_link",
                                },
                              ],
                              staticClass: "template-image",
                              attrs: { type: "text", placeholder: "image_url" },
                              domProps: { value: e.template.image_link },
                              on: {
                                input: function (t) {
                                  t.target.composing ||
                                    e.$set(
                                      e.template,
                                      "image_link",
                                      t.target.value,
                                    );
                                },
                              },
                            }),
                          ],
                        ),
                      ]),
                    ])
                  : e._e(),
              ],
              1,
            ),
            i("div", { staticClass: "template-editor-content" }, [
              i(
                "div",
                {
                  staticClass: "template-main-editor",
                  class: {
                    "side-active": !e.initialised || e.showSideEditor,
                    "preview-active": e.showHTMLPreview,
                  },
                },
                [
                  i("div", { staticClass: "template-editor-togglers" }, [
                    i("div", { staticClass: "template-preview-toggler" }, [
                      i(
                        "button",
                        {
                          staticClass: "toggle-button toggle-html",
                          class: { "is-active": !e.showPlainText },
                          on: { click: e.showEditor },
                        },
                        [e._m(0)],
                      ),
                      i(
                        "button",
                        {
                          staticClass: "toggle-button toggle-text",
                          class: { "is-active": e.showPlainText },
                          on: { click: e.showPlain },
                        },
                        [e._m(1)],
                      ),
                    ]),
                    i(
                      "div",
                      {
                        staticClass: "side-editor-toggler",
                        class: {
                          "is-hidden": e.showPlainText && !e.showHTMLPreview,
                        },
                        on: { click: e.toggleSideEditor },
                      },
                      [
                        i("div", { staticClass: "checker" }, [
                          i(
                            "span",
                            {
                              staticClass: "checker-box",
                              class: { checked: e.showSideEditor },
                            },
                            [
                              i("input", {
                                attrs: {
                                  type: "checkbox",
                                  name: "toggle-all",
                                  value: "toggle-all",
                                },
                              }),
                            ],
                          ),
                        ]),
                        e._m(2),
                      ],
                    ),
                    i(
                      "div",
                      {
                        staticClass: "side-editor-notice",
                        class: {
                          "is-active": e.showPlainText && !e.showHTMLPreview,
                        },
                      },
                      [
                        e._v("Plain text versions"),
                        i("span", { staticClass: "mobile-hide" }, [
                          e._v(" are generated automatically and"),
                        ]),
                        e._v(" are not editable."),
                      ],
                    ),
                  ]),
                  i("div", {
                    staticClass: "template-editor-textarea",
                    attrs: { id: "html-editor" },
                  }),
                  i(
                    "div",
                    {
                      staticClass: "editor-preview",
                      class: { "is-active": e.showHTMLPreview && e.isVisible },
                    },
                    [
                      i("div", { staticClass: "editor-block-client" }, [
                        i("div", { staticClass: "editor-block-line" }, [
                          i("span", { staticClass: "editor-block-label" }, [
                            e._v("Subject: "),
                          ]),
                          i("span", { staticClass: "editor-label-subject" }, [
                            e._v(e._s(e.renderedSubject)),
                          ]),
                        ]),
                      ]),
                      i("iframe", {
                        ref: "preview-frame",
                        style: e.mixinTriggerable_isOpen
                          ? "pointer-events: none !important;"
                          : "",
                        attrs: {
                          id: "preview-frame",
                          sandbox: "allow-same-origin",
                        },
                        on: { load: e.previewLoaded },
                      }),
                      e.idDialogOpen
                        ? i("div", {
                            staticStyle: {
                              position: "absolute",
                              top: "0",
                              left: "0",
                              width: "100%",
                              height: "100%",
                            },
                          })
                        : e._e(),
                    ],
                  ),
                  i(
                    "div",
                    {
                      staticClass: "editor-plain-text",
                      class: { "is-active": e.showPlainText },
                      attrs: { id: "plain-text" },
                    },
                    [e._v(e._s(e.renderedText))],
                  ),
                ],
              ),
              i(
                "div",
                {
                  staticClass: "template-side-editor",
                  class: { "is-active": !e.initialised || e.showSideEditor },
                },
                [
                  i("div", {
                    staticClass: "template-editor-sidearea",
                    attrs: { id: "side-editor" },
                  }),
                ],
              ),
            ]),
            i("footer", { staticClass: "template-editor-footer" }, [
              i(
                "button",
                {
                  staticClass: "button-link-gray",
                  on: { click: e.backToList },
                },
                [e._v("Back to email templates")],
              ),
              i("div", { staticClass: "button-group" }, [
                i(
                  "span",
                  {
                    staticClass: "dialog-container",
                    class: { "is-saved": e.hasTemplateChanged },
                  },
                  [
                    i(
                      "button",
                      {
                        staticClass: "btn btn-outlined",
                        attrs: { disabled: e.hasTemplateChanged },
                        on: { click: e.sendTestClicked },
                      },
                      [
                        i("span", { staticClass: "mobile-hide" }, [
                          e._v("Send "),
                        ]),
                        e._v("test"),
                      ],
                    ),
                  ],
                ),
                i(
                  "span",
                  {
                    staticClass: "dialog-container",
                    class: { "is-saved": e.hasTemplateChanged },
                  },
                  [
                    i(
                      "button",
                      {
                        staticClass: "btn btn-outlined",
                        attrs: { disabled: e.hasTemplateChanged },
                        on: { click: e.integrateClicked },
                      },
                      [e._v("Integrate")],
                    ),
                  ],
                ),
                i(
                  "button",
                  {
                    staticClass: "btn blue",
                    class: { inactive: !e.hasTemplateChanged },
                    on: {
                      click: function (t) {
                        return e.saveTemplateClicked(!1);
                      },
                    },
                  },
                  [
                    e._v("Save"),
                    i("span", { staticClass: "mobile-hide" }, [
                      e._v(" template"),
                    ]),
                  ],
                ),
              ]),
            ]),
          ],
        );
      },
      $e = [
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("span", { staticClass: "toggle-button-text" }, [
            e._v("HTML"),
            i("span", { staticClass: "mobile-hide" }, [e._v(" Code")]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("span", { staticClass: "toggle-button-text" }, [
            i("span", { staticClass: "mobile-hide" }, [e._v("Plain ")]),
            e._v("Text"),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("span", { staticClass: "side-toggler-text" }, [
            e._v("Show "),
            i("span", { staticClass: "mobile-hide" }, [e._v("template ")]),
            e._v("variables"),
          ]);
        },
      ],
      Re =
        (i("3b2b"),
        i("55dd"),
        i("28a5"),
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("div", { staticClass: "template-id" }, [
            e._v("\n  Template ID:\n  "),
            i("div", { staticClass: "id-dropdown-container" }, [
              i(
                "span",
                {
                  staticClass: "template-id-number",
                  on: { click: e.mixinTriggerable_toggleOpened },
                },
                [e._v(e._s(e.userTemplateID))],
              ),
              i(
                "div",
                {
                  staticClass:
                    "dropdown-menu dropdown-options mixinTriggerable_layer",
                  class: { "is-active": e.mixinTriggerable_isOpen },
                },
                [
                  e._m(0),
                  i("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: e.inputUserTemplateID,
                        expression: "inputUserTemplateID",
                      },
                    ],
                    attrs: { type: "text", id: "input_id" },
                    domProps: { value: e.inputUserTemplateID },
                    on: {
                      keydown: e.checkIDLength,
                      input: function (t) {
                        t.target.composing ||
                          (e.inputUserTemplateID = t.target.value);
                      },
                    },
                  }),
                  i(
                    "div",
                    {
                      staticClass: "label-error",
                      class: {
                        "is-active":
                          e.hadIDError && "" == e.inputUserTemplateID,
                      },
                    },
                    [e._v("Template ID cannot be blank")],
                  ),
                  e._m(1),
                  i(
                    "button",
                    {
                      staticClass: "btn blue",
                      attrs: { disabled: e.hadIDError },
                      on: { click: e.saveUserID },
                    },
                    [e._v("OK")],
                  ),
                ],
              ),
            ]),
          ]);
        }),
      Me = [
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("p", [
            i("strong", [e._v("Edit Template ID")]),
            e._v(" Choose a memorable name for this\n        template ID. "),
            i(
              "a",
              {
                attrs: {
                  href: "https://support.smtp2go.com/hc/en-gb/articles/4402929434777-API-Templates",
                },
              },
              [e._v("More info")],
            ),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("p", { staticClass: "featured" }, [
            e._v("\n        Template ID must be between 5 and 24 characters."),
            i("br"),
            e._v(
              "\n        Remember to update your codebase with the new ID to avoid\n        interruptions.\n      ",
            ),
          ]);
        },
      ],
      Le = {
        name: "EmailTemplateID",
        mixins: [z],
        data: function () {
          return {
            originalUserTemplateID: "",
            userTemplateID: "",
            inputUserTemplateID: "",
            hadIDError: !1,
          };
        },
        methods: {
          init: function (e) {
            ((this.originalUserTemplateID = e),
              (this.userTemplateID = e),
              (this.inputUserTemplateID = e),
              (this.hadIDError = !1));
          },
          saveUserID: function () {
            "" != this.inputUserTemplateID
              ? this.userTemplateID != this.inputUserTemplateID
                ? ((this.userTemplateID = this.inputUserTemplateID),
                  this.mixinTriggerable_forceClose())
                : this.mixinTriggerable_forceClose()
              : (this.hadIDError = !0);
          },
          getUserTemplateID: function () {
            return this.userTemplateID;
          },
          checkIDLength: function (e) {
            8 != e.keyCode &&
              46 != e.keyCode &&
              this.inputUserTemplateID.length > 24 &&
              e.preventDefault();
          },
        },
        watch: {
          mixinTriggerable_isOpen: function () {
            (this.mixinTriggerable_isOpen ||
              ((this.hadIDError = !1),
              (this.inputUserTemplateID = this.userTemplateID)),
              this.$emit("template-id-toggled", this.mixinTriggerable_isOpen));
          },
          inputUserTemplateID: function () {
            (this.inputUserTemplateID.length < 5 && (this.hadIDError = !0),
              this.inputUserTemplateID.length > 24 &&
                (this.inputUserTemplateID = this.inputUserTemplateID.substring(
                  0,
                  24,
                )),
              this.hadIDError &&
                this.inputUserTemplateID.length >= 5 &&
                (this.hadIDError = !1));
          },
        },
      },
      Ue = Le,
      Ge = Object(R["a"])(Ue, Re, Me, !1, null, null, null),
      Ve = Ge.exports,
      Be = i("6d4f"),
      He = i("c0c4");
    function Fe(e, t) {
      var i = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        (t &&
          (s = s.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          i.push.apply(i, s));
      }
      return i;
    }
    function Je(e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Fe(Object(i), !0).forEach(function (t) {
              Object(l["a"])(e, t, i[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : Fe(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t),
                );
              });
      }
      return e;
    }
    Be["config"].set(
      "basePath",
      "/static/assets/global/plugins/ace/src-noconflict",
    );
    var ze = i("2801"),
      We = i("c2d5"),
      qe =
        (We.htmlToText,
        {
          name: "EmailTemplateEdit",
          mixins: [z, I],
          props: { isVisible: Boolean },
          components: { EmailTemplateID: Ve },
          data: function () {
            return {
              initialised: !1,
              showSideEditor: !1,
              showHTMLPreview: !0,
              showPlainText: !1,
              template: Object,
              originalTemplate: {
                name: "",
                html: "",
                variables: "",
                subject: "",
                userTemplateID: "",
                tags: {},
              },
              htmlEditor: Object,
              sideEditor: Object,
              htmlEditorChanged: !1,
              sideEditorChanged: !1,
              newTag: "",
              requestPoint: this.$config.requestPoint,
              optionDetails: Object,
              isNew: !1,
              isDuplicate: !1,
              tagColours: this.$config.tagColours,
              descriptionActive: !1,
              imageActive: !1,
              renderedSubject: "",
              username: "email@example.com",
              templateName: "",
              templateSubject: "",
              renderedText: "",
              hadNameError: !1,
              hadSubjectError: !1,
              extraOptions: !1,
              idDialogOpen: !1,
            };
          },
          mounted: function () {
            (this.initEditors(),
              (this.initialised = !0),
              ze.registerHelper("greaterThan", function (e, t) {
                var i = arguments[arguments.length - 1];
                return e > t ? i.fn(this) : i.inverse(this);
              }),
              ze.registerHelper("lessThan", function (e, t) {
                var i = arguments[arguments.length - 1];
                return e < t ? i.fn(this) : i.inverse(this);
              }),
              ze.registerHelper("eq", function (e, t) {
                return e === t;
              }),
              ze.registerHelper("equals", function (e, t) {
                var i = arguments[arguments.length - 1];
                return e === t ? i.fn(this) : i.inverse(this);
              }),
              ze.registerHelper("Equals", function (e, t) {
                var i = arguments[arguments.length - 1];
                return e === t ? i.fn(this) : i.inverse(this);
              }),
              ze.registerHelper("notEquals", function (e, t) {
                var i = arguments[arguments.length - 1];
                return e !== t ? i.fn(this) : i.inverse(this);
              }));
          },
          methods: {
            init: function (e, t) {
              ((this.username = t),
                (this.optionDetails = e),
                (this.isNew = e.new),
                (this.isDuplicate = e.duplicate),
                (this.template = Object),
                this.loadTemplate());
            },
            loadTemplate: function () {
              var e = this;
              (this.$nextTick(function () {
                window.scrollTo({ top: 0 });
              }),
                (document.getElementById("preview-frame").src = ""));
              var t = { user_template_id: this.optionDetails.userTemplateID };
              (this.isNew && (t.common = !0),
                this.mixinAjax_get(
                  this.requestPoint,
                  "get",
                  t,
                  function (t) {
                    ((e.datestamp_format =
                      t.responseJSON.results.datestamp_format),
                      (e.extraOptions = t.responseJSON.results.extra_options),
                      (e.template = t.responseJSON.results.template),
                      e.isDuplicate && (e.template.template_name += " (copy)"),
                      (e.isNew || e.isDuplicate) &&
                        (e.template.user_template_id = e.generateUserID()),
                      e.setOriginalValues(),
                      e.setEditorValues(),
                      (e.templateSubject = e.template.subject),
                      e.updateSubject(),
                      (e.templateName = e.template.template_name),
                      e.generateTextContent());
                  },
                  function (t) {
                    (HTML.handleError(t.responseJSON),
                      e.$eventBus.$emit(d.SWITCH_CONTEXT, "list"));
                  },
                ));
            },
            setOriginalValues: function () {
              ((this.originalTemplate.name = this.template.template_name),
                (this.originalTemplate.html = this.template.html_body),
                (this.originalTemplate.text = this.template.text_body),
                (this.originalTemplate.variables =
                  this.template.template_variables),
                (this.originalTemplate.subject = this.template.subject),
                (this.originalTemplate.userTemplateID =
                  this.template.user_template_id),
                this.$refs["template-id"].init(this.template.user_template_id),
                (this.originalTemplate.tags = JSON.parse(
                  JSON.stringify(this.template.tags),
                )),
                (this.htmlEditorChanged = !1),
                (this.sideEditorChanged = !1));
            },
            initEditors: function () {
              (this.mainEditorInit(), this.sideEditorInit());
            },
            mainEditorInit: function () {
              ((this.htmlEditor = Be["edit"]("html-editor")),
                this.htmlEditor.setValue("Initial value"),
                this.htmlEditor.setOptions({
                  theme: "ace/theme/twilight",
                  mode: "ace/mode/html",
                  cursorStyle: "slim",
                  showPrintMargin: 0,
                  showFoldWidgets: 1,
                  fadeFoldWidgets: 1,
                  hScrollBarAlwaysVisible: 0,
                  vScrollBarAlwaysVisible: 0,
                  fontSize: 13,
                  highlightActiveLine: 0,
                  highlightSelectedWord: 0,
                  wrap: !0,
                }),
                (this.htmlEditor.container.style.lineHeight = 1.7),
                this.htmlEditor.renderer.updateFontSize());
              var e = this.htmlEditor.getSession();
              (e.setOption("indentedSoftWrap", !1),
                e.setOption("useSoftTabs", !0),
                e.setOption("tabSize", 2),
                e.setUseWrapMode(!0),
                e.setWrapLimitRange(),
                this.htmlEditor.moveCursorTo(0, 0));
              var t = this;
              this.htmlEditor.on("change", function () {
                t.htmlEditorChanged =
                  t.originalTemplate.html != t.htmlEditor.getValue();
              });
            },
            sideEditorInit: function () {
              ((this.sideEditor = Be["edit"]("side-editor")),
                this.sideEditor.setValue("{\n}"));
              var e = this.sideEditor.getSession();
              (this.sideEditor.setOptions({
                theme: "ace/theme/twilight",
                mode: "ace/mode/json",
                cursorStyle: "slim",
                showPrintMargin: 0,
                showFoldWidgets: 1,
                fadeFoldWidgets: 1,
                showLineNumbers: 0,
                hScrollBarAlwaysVisible: 0,
                vScrollBarAlwaysVisible: 0,
                fontSize: 13,
                highlightActiveLine: 0,
                highlightSelectedWord: 0,
                wrap: !0,
              }),
                e.setOption("indentedSoftWrap", !1),
                e.setOption("useSoftTabs", !0),
                e.setOption("tabSize", 2),
                e.setUseWrapMode(!0),
                e.setWrapLimitRange(),
                (this.sideEditor.container.style.lineHeight = 1.7),
                this.sideEditor.renderer.updateFontSize());
              var t = this;
              (this.sideEditor.on("change", function () {
                (t.updatePreview(),
                  (t.sideEditorChanged =
                    t.originalTemplate.variables != t.sideEditor.getValue()));
              }),
                this.sideEditor.moveCursorTo(0, 0));
            },
            setEditorValues: function () {
              (this.htmlEditor.setValue(this.template.html_body),
                this.htmlEditor
                  .getSession()
                  .setUndoManager(new Be["UndoManager"]()),
                this.htmlEditor.moveCursorTo(0, 0),
                this.htmlEditor.scrollToLine(0, !0, !0, function () {}),
                this.sideEditor.setValue(this.template.template_variables),
                this.sideEditor
                  .getSession()
                  .setUndoManager(new Be["UndoManager"]()),
                this.sideEditor.moveCursorTo(0, 0),
                this.sideEditor.scrollToLine(0, !0, !0, function () {}),
                this.updatePreview());
            },
            toggleSideEditor: function () {
              ((this.showSideEditor = !this.showSideEditor),
                setTimeout(this.resizeMainEditor, 350),
                this.showSideEditor &&
                  (setTimeout(this.resizeSideEditor, 350),
                  setTimeout(this.resizeMainEditor, 350)));
            },
            resizeMainEditor: function () {
              this.htmlEditor.resize();
            },
            resizeSideEditor: function () {
              this.sideEditor.resize();
            },
            tagsClicked: function () {
              (this.mixinTriggerable_isOpen ||
                this.mixinTriggerable_toggleOpened(),
                this.$refs["name_tag"].focus());
            },
            displayTagLink: function (e) {
              ((13 != e.keyCode && 188 !== e.keyCode) ||
                this.tagAdd(this.newTag),
                27 == e.keyCode &&
                  (this.$refs["name_tag"].blur(),
                  (this.newTag = ""),
                  this.mixinTriggerable_forceClose()));
            },
            checkNameLength: function (e) {
              8 != e.keyCode &&
                46 != e.keyCode &&
                this.template.template_name.length > 64 &&
                e.preventDefault();
            },
            checkTagLength: function (e) {
              8 != e.keyCode &&
                46 != e.keyCode &&
                13 != e.keyCode &&
                188 != e.keyCode &&
                27 != e.keyCode &&
                this.newTag.length > 32 &&
                e.preventDefault();
            },
            tagDelete: function (e) {
              n["a"].delete(this.template.tags, e);
            },
            tagAdd: function (e) {
              var t;
              ((e = e.replace(",", "")),
              (e = this.stripBold(e.toLowerCase()).trim()),
              (this.newTag = ""),
              "" != e) &&
                this.tagUnused(e) &&
                ((t =
                  void 0 != this.userTags[e]
                    ? this.userTags[e].color
                    : this.getNewColour(e)),
                n["a"].set(this.template.tags, e, { name: e, color: t }));
            },
            tagUnused: function (e) {
              return (
                void 0 != this.template.tags && void 0 == this.template.tags[e]
              );
            },
            stripBold: function (e) {
              return e.replace("<strong>", "").replace("</strong>", "");
            },
            tagsChanged: function () {
              for (var e in this.template.tags)
                if (void 0 == this.originalTemplate.tags[e]) return !0;
              for (var t in this.originalTemplate.tags)
                if (void 0 == this.template.tags[t]) return !0;
              return !1;
            },
            saveUserID: function () {
              this.mixinTriggerable_forceClose();
            },
            showPreview: function () {
              ((document.getElementById("preview-frame").style.height = "auto"),
                (document.getElementById("html-editor").style.height = "auto"),
                (document.getElementById("side-editor").style.height = "auto"),
                (this.showHTMLPreview = !0),
                this.updatePreview(),
                this.previewLoaded());
            },
            previewLoaded: function () {
              if ("function" === typeof this.htmlEditor.resize) {
                var e =
                    this.$refs["preview-frame"].contentDocument ||
                    this.$refs["preview-frame"].contentWindow.document,
                  t = w()(e).height();
                ((document.getElementById("html-editor").style.height =
                  t + "px"),
                  (document.getElementById("side-editor").style.height =
                    t + "px"),
                  (document.getElementById("preview-frame").style.height =
                    t + "px"),
                  this.htmlEditor.resize(),
                  this.sideEditor.resize(),
                  w()("#preview-frame")
                    .contents()
                    .find("a")
                    .click(function (e) {
                      e.preventDefault();
                    }));
              }
            },
            showEditor: function () {
              ((this.showHTMLPreview = !1), (this.showPlainText = !1));
            },
            showPlain: function () {
              (this.generateTextContent(), (this.showPlainText = !0));
            },
            replaceVariables: function () {
              try {
                var e = {
                    ADD_TAGS: ["#comment", "meta", "link"],
                    ADD_ATTR: [
                      "content",
                      "property",
                      "http-equiv",
                      "charset",
                      "initial-scale",
                    ],
                    FORBID_TAGS: ["video"],
                    FORCE_BODY: !0,
                  },
                  t = He["sanitize"](this.htmlEditor.getValue(), e),
                  i = ze.compile(t),
                  s = i(this.getVariableValues());
                return He["sanitize"](s, e);
              } catch (a) {
                return (
                  "Please check your template and try again<br><br>" +
                  a.message.split("\n")[0]
                );
              }
            },
            updateSubject: function () {
              var e = "";
              void 0 != this.template &&
                void 0 != this.template.subject &&
                (e = this.template.subject);
              try {
                var t = ze.compile(e),
                  i = document.createElement("textarea");
                ((i.innerHTML = t(this.getVariableValues())),
                  (this.renderedSubject = i.textContent || i.innerText));
              } catch (s) {
                this.renderedSubject = e;
              }
            },
            getVariableValues: function () {
              var e = "{}";
              try {
                return (
                  "" != this.sideEditor.getValue() &&
                    (e = this.sideEditor.getValue()),
                  JSON.parse(e)
                );
              } catch (t) {
                return (console.log("Error parsing variable JSON"), {});
              }
            },
            generateTextContent: function () {
              var e = this,
                t = {
                  user_template_id:
                    this.$refs["template-id"].getUserTemplateID(),
                  template_variables: this.sideEditor.getValue(),
                };
              this.mixinAjax_post(
                this.requestPoint,
                "render-text",
                t,
                function (t) {
                  e.renderedText = t.responseJSON.results.rendered_text;
                },
                function (e) {
                  console.log("Error rendering text version", e.responseJSON);
                },
              );
            },
            generateUserID: function () {
              for (
                var e = "", t = "0123456789", i = t.length, s = 0;
                s < 7;
                s++
              )
                e += t.charAt(Math.floor(Math.random() * i));
              return e;
            },
            saveTemplateClicked: function (e) {
              var t = this;
              if (
                (this.$nextTick(function () {
                  window.scrollTo({ top: 0 });
                }),
                "" != this.templateName)
              )
                if ("" != this.templateSubject) {
                  this.generateTextContent();
                  var i = {
                      original_user_template_id:
                        this.originalTemplate.userTemplateID,
                      user_template_id:
                        this.$refs["template-id"].getUserTemplateID(),
                      template_name: this.template.template_name,
                      description: this.template.description,
                      image_link: this.template.image_link,
                      subject: this.template.subject,
                      html_body: this.htmlEditor.getValue(),
                      text_body: this.template.text,
                      template_variables: this.sideEditor.getValue(),
                      tags: JSON.stringify(this.template.tags),
                    },
                    s = "edit-template";
                  ((this.isNew || this.isDuplicate) && (s = "create-template"),
                    this.mixinAjax_put(
                      this.requestPoint,
                      s,
                      i,
                      function (i) {
                        ((t.isNew = !1),
                          (t.isDuplicate = !1),
                          e
                            ? t.$eventBus.$emit(d.SWITCH_CONTEXT, "list")
                            : (t.template = i.responseJSON.results.template),
                          t.setOriginalValues(),
                          HTML.set_time(i.responseJSON));
                      },
                      function (e) {
                        HTML.handleError(e.responseJSON);
                      },
                    ));
                } else this.hadSubjectError = !0;
              else this.hadNameError = !0;
            },
            backToList: function () {
              this.hasTemplateChanged
                ? this.$eventBus.$emit(d.SHOW_CHANGED_DIALOG)
                : this.$eventBus.$emit(d.SWITCH_CONTEXT, "list");
            },
            sendTestClicked: function () {
              this.$eventBus.$emit(
                d.SHOW_SEND_TEST_MODAL,
                this.originalTemplate.userTemplateID,
                this.sideEditor.getValue(),
              );
            },
            integrateClicked: function () {
              this.$eventBus.$emit(
                d.SHOW_INTEGRATE_MODAL,
                this.originalTemplate.userTemplateID,
                this.originalTemplate.name,
                this.sideEditor.getValue(),
              );
            },
            getNewColour: function (e) {
              var t = this;
              if (void 0 != this.userTags[e]) return this.userTags[e];
              var i = JSON.parse(JSON.stringify(this.tagColours));
              return (
                i.forEach(function (e, s) {
                  for (var a in ((i[s].count = 0), t.userTags))
                    e.text == t.userTags[a].color.text &&
                      (i[s].count = i[s].count + 1);
                  for (var n in t.template.tags)
                    e.text == t.template.tags[n].color.text &&
                      (i[s].count = i[s].count + 2);
                }),
                i.sort(function (e, t) {
                  return e.count - t.count;
                }),
                i[0]
              );
            },
            updatePreview: function () {
              if (this.showHTMLPreview) {
                this.updateSubject();
                var e = new Blob([this.replaceVariables()], {
                    type: "text/html",
                  }),
                  t = URL.createObjectURL(e);
                document.getElementById("preview-frame").src = t;
              }
            },
            idToggled: function (e) {
              this.idDialogOpen = e;
            },
          },
          computed: Je(
            Je(
              {},
              Object(x["b"])({
                isAjaxRunning: v.getters.GET_IS_AJAX_RUNNING,
                isQuiteRequest: v.getters.GET_IS_QUIET_REQUEST,
                userTags: he.getters.GET_USER_TAGS,
              }),
            ),
            {},
            {
              showTagOptional: function () {
                return (
                  this.template &&
                  this.template.tags &&
                  0 == this.template.tags.length &&
                  "" == this.newTag
                );
              },
              filteredUserTags: function () {
                var e = this,
                  t = this.newTag,
                  i = new RegExp(t, "gi"),
                  s = Object.keys(this.userTags)
                    .filter(function (i) {
                      return ~i.indexOf(t) && e.tagUnused(i);
                    })
                    .map(function (e) {
                      var s = HTML.escapeHTML(e);
                      return "" == t
                        ? s
                        : s.replace(i, "<strong>" + t + "</strong>");
                    });
                return 0 == s.length
                  ? Object.keys(this.userTags)
                      .filter(function (t) {
                        return e.tagUnused(t);
                      })
                      .map(function (e) {
                        return HTML.escapeHTML(e);
                      })
                  : s;
              },
              hasTemplateChanged: function () {
                return (
                  this.originalTemplate.name != this.template.template_name ||
                  this.htmlEditorChanged ||
                  this.sideEditorChanged ||
                  this.originalTemplate.subject != this.template.subject ||
                  this.originalTemplate.userTemplateID !=
                    this.$refs["template-id"].getUserTemplateID() ||
                  this.tagsChanged()
                );
              },
            },
          ),
          watch: {
            newTag: function () {
              this.newTag.length > 32 &&
                (this.newTag = this.newTag.substring(0, 32));
            },
            templateName: function () {
              (this.templateName.length > 64 &&
                (this.templateName = this.templateName.substring(0, 64)),
                this.hadNameError &&
                  "" != this.templateName &&
                  (this.hadNameError = !1),
                (this.template.template_name = this.templateName));
            },
            templateSubject: function () {
              (this.hadSubjectError &&
                "" != this.templateSubject &&
                (this.hadSubjectError = !1),
                (this.template.subject = this.templateSubject));
            },
            mixinTriggerable_isOpen: function () {
              this.mixinTriggerable_isOpen || (this.newTag = "");
            },
          },
        }),
      Ke = qe,
      Xe = Object(R["a"])(Ke, Ne, $e, !1, null, null, null),
      Qe = Xe.exports,
      Ye = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i("div", [
          i(
            "div",
            {
              staticClass: "modal-dialog modal-medium send-test modal-parent",
              class: { "is-active": e.isVisible && !e.sent },
            },
            [
              i("div", { staticClass: "modal-header" }, [
                i(
                  "button",
                  {
                    staticClass: "bootbox-close-button close",
                    attrs: { type: "button" },
                    on: { click: e.closeModal },
                  },
                  [e._v("×")],
                ),
                i("h4", { staticClass: "modal-title" }, [
                  e._v("Send a test email"),
                ]),
              ]),
              i("div", { staticClass: "modal-body" }, [
                i("div", { staticClass: "bootbox-body" }, [
                  i("div", { staticClass: "tab-pane" }, [
                    i("div", { staticClass: "form-group" }, [
                      i("label", { staticClass: "form-group-label" }, [
                        e._v("Recipient"),
                      ]),
                      i("div", { staticClass: "form-group-item" }, [
                        i("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: e.recipient,
                              expression: "recipient",
                            },
                          ],
                          staticClass: "form-control input-md",
                          attrs: { type: "email", autocomplete: "off" },
                          domProps: { value: e.recipient },
                          on: {
                            input: function (t) {
                              t.target.composing ||
                                (e.recipient = t.target.value);
                            },
                          },
                        }),
                        i(
                          "div",
                          {
                            staticClass: "label-error",
                            class: {
                              "is-active":
                                e.hadRecipientError && !e.validRecipient,
                            },
                          },
                          [e._v("Please enter an email address")],
                        ),
                      ]),
                    ]),
                    i("div", { staticClass: "form-group" }, [
                      i("label", { staticClass: "form-group-label" }, [
                        e._v("From address"),
                      ]),
                      i("div", { staticClass: "form-group-item" }, [
                        i("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: e.from,
                              expression: "from",
                            },
                          ],
                          staticClass: "form-control input-md",
                          attrs: { type: "email", autocomplete: "off" },
                          domProps: { value: e.from },
                          on: {
                            input: function (t) {
                              t.target.composing || (e.from = t.target.value);
                            },
                          },
                        }),
                        i(
                          "div",
                          {
                            staticClass: "label-error",
                            class: {
                              "is-active": e.hadFromError && !e.validFrom,
                            },
                          },
                          [e._v("Please enter an email address")],
                        ),
                        i(
                          "div",
                          {
                            staticClass: "label-error",
                            class: {
                              "is-active":
                                e.hadFromError &&
                                e.validFrom &&
                                !e.validDomain &&
                                !e.validEmail,
                            },
                          },
                          [
                            e._v("Please enter an email address from a "),
                            i(
                              "a",
                              {
                                attrs: {
                                  href: "/sending/verified_senders/",
                                  target: "_blank",
                                },
                              },
                              [e._v("verified sender")],
                            ),
                          ],
                        ),
                        e._m(0),
                      ]),
                    ]),
                    i("div", { staticClass: "form-group" }, [
                      i("label", { staticClass: "form-group-label" }, [
                        e._v("Sending Account"),
                      ]),
                      i("div", { staticClass: "form-group-item" }, [
                        i(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: e.selectedSenderAccount,
                                expression: "selectedSenderAccount",
                              },
                            ],
                            staticClass: "form-control input-md",
                            on: {
                              change: function (t) {
                                var i = Array.prototype.filter
                                  .call(t.target.options, function (e) {
                                    return e.selected;
                                  })
                                  .map(function (e) {
                                    var t = "_value" in e ? e._value : e.value;
                                    return t;
                                  });
                                e.selectedSenderAccount = t.target.multiple
                                  ? i
                                  : i[0];
                              },
                            },
                          },
                          [
                            0 == Object.keys(e.smtpUsers).length &&
                            0 == Object.keys(e.apiKeys).length
                              ? i(
                                  "option",
                                  {
                                    attrs: {
                                      disabled: "",
                                      value: "no-sender-accounts",
                                    },
                                  },
                                  [
                                    e._v(
                                      "Please add an SMTP User or API Key to send a test",
                                    ),
                                  ],
                                )
                              : e._e(),
                            Object.keys(e.smtpUsers).length > 0
                              ? i(
                                  "option",
                                  { attrs: { disabled: "", value: "" } },
                                  [e._v("SMTP Users")],
                                )
                              : e._e(),
                            e._l(e.smtpUsers, function (t, s) {
                              return i(
                                "option",
                                {
                                  key: s,
                                  staticStyle: { "padding-left": "12px" },
                                  domProps: { value: s },
                                },
                                [
                                  e._v(
                                    "\n                            " +
                                      e._s(s) +
                                      " ",
                                  ),
                                  "" != t
                                    ? i("span", [e._v("(" + e._s(t) + ")")])
                                    : e._e(),
                                ],
                              );
                            }),
                            Object.keys(e.apiKeys).length > 0
                              ? i(
                                  "option",
                                  { attrs: { disabled: "", value: "" } },
                                  [e._v("API Keys")],
                                )
                              : e._e(),
                            e._l(e.apiKeys, function (t, s) {
                              return i(
                                "option",
                                {
                                  key: s,
                                  staticStyle: { "padding-left": "12px" },
                                  domProps: { value: s },
                                },
                                [
                                  e._v(
                                    "\n                            " +
                                      e._s(s) +
                                      " ",
                                  ),
                                  "" != t
                                    ? i("span", [e._v("(" + e._s(t) + ")")])
                                    : e._e(),
                                ],
                              );
                            }),
                          ],
                          2,
                        ),
                        i(
                          "div",
                          {
                            staticClass: "label-error",
                            class: {
                              "is-active": e.hadSenderError && !e.validSender,
                            },
                          },
                          [e._v("Please select a sender account")],
                        ),
                        e._m(1),
                      ]),
                    ]),
                    e._m(2),
                  ]),
                  i("div", { staticClass: "modal-body-footer" }, [
                    i(
                      "button",
                      {
                        staticClass: "btn blue parent-close",
                        class: { "is-loading": e.isWorking },
                        on: { click: e.sendTest },
                      },
                      [
                        e._v("Send test "),
                        i("span", { staticClass: "loader-spinner" }),
                      ],
                    ),
                  ]),
                ]),
              ]),
            ],
          ),
          i(
            "div",
            {
              staticClass: "modal-dialog modal-medium modal-confirm",
              class: { "is-active": e.isVisible && e.sent },
            },
            [
              i("div", { staticClass: "modal-body" }, [
                i(
                  "button",
                  {
                    staticClass: "bootbox-close-button close",
                    attrs: { type: "button" },
                    on: { click: e.closeModal },
                  },
                  [e._v("×")],
                ),
                i("div", { staticClass: "option-banner" }, [
                  e._m(3),
                  i("h4", [e._v("Test email sent!")]),
                  i("p", [
                    e._v("Check the mailbox for "),
                    i("span", { staticClass: "test-email" }, [
                      e._v(e._s(e.recipient)),
                    ]),
                    e._v(" to review your test email."),
                  ]),
                ]),
                i("div", { staticClass: "modal-body-footer" }, [
                  i(
                    "button",
                    {
                      staticClass: "btn blue bootbox-close-button",
                      on: { click: e.closeModal },
                    },
                    [e._v("Done")],
                  ),
                ]),
              ]),
            ],
          ),
        ]);
      },
      Ze = [
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("span", { staticClass: "field-info" }, [
            e._v(
              "Enter an email address that your application is authorized to send from (an email address from a ",
            ),
            i(
              "a",
              {
                attrs: { href: "/sending/verified_senders/", target: "_blank" },
              },
              [e._v("verified sender")],
            ),
            e._v(")."),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("span", { staticClass: "field-info" }, [
            e._v("Select the "),
            i(
              "a",
              { attrs: { href: "/sending/smtp_users/", target: "_blank" } },
              [e._v("SMTP User")],
            ),
            e._v(" or "),
            i("a", { attrs: { href: "/sending/apikeys/", target: "_blank" } }, [
              e._v("API Key"),
            ]),
            e._v(" you wish to use to send the email."),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("p", { staticClass: "featured" }, [
            i("strong", [e._v("Note:")]),
            e._v(
              " Sending test emails will count against your email allowance.",
            ),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("figure", [
            i("img", {
              attrs: {
                src: "/static/smtp2go_assets/paper-plane.png",
                width: "109",
                alt: "SMTP2GO",
              },
            }),
          ]);
        },
      ],
      et = {
        name: "EmailTemplateSendTest",
        mixins: [z, I],
        props: {
          isVisible: Boolean,
          userTemplateID: String,
          templateVariables: Object,
          userName: String,
        },
        data: function () {
          return {
            appSettings: {},
            isWorking: !1,
            requestPoint: this.$config.requestPoint,
            sent: !1,
            recipient: "",
            from: "",
            validDomains: [],
            validEmails: [],
            hadRecipientError: !1,
            hadFromError: !1,
            hadSenderError: !1,
            apiKeys: {},
            smtpUsers: {},
            selectedSenderAccount: "no-sender-accounts",
          };
        },
        methods: {
          init: function (e) {
            (void 0 !== e &&
              void 0 !== e.app_settings &&
              (this.appSettings = e.app_settings),
              (this.from = this.userName),
              void 0 !== this.appSettings.template_sender_email &&
                null !== this.appSettings.template_sender_email &&
                "" !== this.appSettings.template_sender_email &&
                (this.from = this.appSettings.template_sender_email),
              (this.recipient = this.userName),
              void 0 !== this.appSettings.template_recip_email &&
                null !== this.appSettings.template_recip_email &&
                "" !== this.appSettings.template_recip_email &&
                (this.recipient = this.appSettings.template_recip_email),
              void 0 !== this.appSettings.template_sending_acct &&
                null !== this.appSettings.template_sending_acct &&
                "" !== this.appSettings.template_sending_acct &&
                (this.selectedSenderAccount =
                  this.appSettings.template_sending_acct),
              this.getSenderDomains(),
              this.getSenderAccounts());
          },
          closeModal: function () {
            this.$eventBus.$emit(d.CLOSE_ALL_MODALS);
          },
          sendTest: function () {
            var e = this,
              t = !1;
            if (
              (this.validRecipient || ((this.hadRecipientError = !0), (t = !0)),
              (this.validFrom && (this.validDomain || this.validEmail)) ||
                ((this.hadFromError = !0), (t = !0)),
              this.validSender || ((this.hadSenderError = !0), (t = !0)),
              !t)
            ) {
              this.isWorking = !0;
              var i = {
                recipient: this.recipient,
                from: this.from,
                sender_account: this.selectedSenderAccount,
                user_template_id: this.userTemplateID,
                template_variables: this.templateVariables,
              };
              this.mixinAjax_put(
                this.requestPoint,
                "test-template",
                i,
                function (t) {
                  ((e.sent = !0), (e.isWorking = !1));
                },
                function (t) {
                  ((e.isWorking = !1),
                    e.closeModal(),
                    e.$nextTick(function () {
                      window.scrollTo({ top: 0 });
                    }),
                    HTML.handleError(t.responseJSON));
                },
                !0,
              );
            }
          },
          getSenderDomains: function () {
            var e = this;
            this.mixinAjax_get(
              "Verified Senders",
              "",
              null,
              function (t) {
                var i = t.responseJSON.results;
                (null != i.domains &&
                  i.domains.forEach(function (t) {
                    t.domain.dkim_verified &&
                      t.domain.rpath_verified &&
                      e.validDomains.push(t.domain.fulldomain.toLowerCase());
                  }),
                  null != i.emails &&
                    i.emails.forEach(function (t) {
                      t.verified &&
                        e.validEmails.push(t.email_address.toLowerCase());
                    }));
              },
              function (e) {
                HTML.handleError(e.responseJSON);
              },
              !0,
            );
          },
          getSenderAccounts: function () {
            var e = this;
            (this.mixinAjax_get(
              "SMTP Users",
              "load-active-users",
              null,
              function (t) {
                (t.responseJSON.results.forEach(function (t) {
                  (t.blocked || (e.smtpUsers[t.username] = t.description),
                    void 0 !== e.appSettings.template_sending_acct &&
                      e.appSettings.template_sending_acct == t.description &&
                      (e.selectedSenderAccount = t.description));
                }),
                  "no-sender-accounts" == e.selectedSenderAccount &&
                    Object.keys(e.smtpUsers).length > 0 &&
                    (e.selectedSenderAccount = Object.keys(e.smtpUsers)[0]));
              },
              function (e) {
                HTML.handleError(e.responseJSON);
              },
              !0,
            ),
              this.mixinAjax_post(
                "API Keys",
                "load-active-users",
                null,
                function (t) {
                  (t.responseJSON.results.users.forEach(function (t) {
                    (!t.blocked &&
                      t.endpoints.includes(401) &&
                      (e.apiKeys[t.username] = t.description),
                      void 0 !== e.appSettings.template_sending_acct &&
                        e.appSettings.template_sending_acct == t.username &&
                        (e.selectedSenderAccount = t.username));
                  }),
                    "no-sender-accounts" == e.selectedSenderAccount &&
                      0 == Object.keys(e.smtpUsers).length &&
                      Object.keys(e.apiKeys).length > 0 &&
                      (e.selectedSenderAccount = Object.keys(e.apiKeys)[0]));
                },
                function (e) {
                  HTML.handleError(e.responseJSON);
                },
                !0,
              ));
          },
        },
        computed: {
          validRecipient: function () {
            var e = /\S+@\S+\.\S+/;
            return e.test(this.recipient);
          },
          validFrom: function () {
            var e = /\S+@\S+\.\S+/;
            return e.test(this.from);
          },
          validDomain: function () {
            var e = this.from.split("@").pop().toLowerCase();
            return this.validDomains.includes(e);
          },
          validEmail: function () {
            var e = this.from.toLowerCase();
            return this.validEmails.includes(e);
          },
          validSender: function () {
            return "no-sender-accounts" != this.selectedSenderAccount;
          },
        },
        watch: {
          isVisible: function () {
            if (
              !this.isVisible &&
              ((this.sent = !1),
              (this.isWorking = !1),
              (this.hadRecipientError = !1),
              (this.hadFromError = !1),
              (this.hadSenderError = !1),
              this.appSettings.template_sender_email !== this.from ||
                this.appSettings.template_recip_email !== this.recipient ||
                this.appSettings.template_sending_acct !==
                  this.selectedSenderAccount)
            ) {
              var e = {
                template_sender_email: this.from,
                template_recip_email: this.recipient,
                template_sending_acct: this.selectedSenderAccount,
              };
              this.mixinAjax_put(
                this.requestPoint,
                "update-template-test",
                e,
                function (e) {},
                function (e) {},
                !0,
              );
            }
          },
          validRecipient: function () {
            this.validRecipient &&
              this.hadRecipientError &&
              (this.hadRecipientError = !1);
          },
          validSender: function () {
            this.validSender && this.hadSender && (this.hadSenderError = !1);
          },
          validFrom: function () {
            this.validFrom &&
              (this.validDomain || this.validEmail) &&
              this.hadFromError &&
              (this.hadFromError = !1);
          },
          validDomain: function () {
            this.validFrom &&
              this.validDomain &&
              this.hadFromError &&
              (this.hadFromError = !1);
          },
          validEmail: function () {
            this.validFrom &&
              this.validEmail &&
              this.hadFromError &&
              (this.hadFromError = !1);
          },
        },
      },
      tt = et,
      it = Object(R["a"])(tt, Ye, Ze, !1, null, null, null),
      st = it.exports,
      at = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i("div", [
          i(
            "div",
            {
              staticClass: "modal-dialog modal-integration modal-parent",
              class: { "is-active": e.isVisible && !e.sending && !e.sent },
            },
            [
              i("div", { staticClass: "modal-header" }, [
                i(
                  "button",
                  {
                    staticClass: "bootbox-close-button close",
                    attrs: { type: "button" },
                    on: { click: e.closeModal },
                  },
                  [e._v("×")],
                ),
                e._m(0),
              ]),
              i("div", { staticClass: "modal-body" }, [
                e._m(1),
                i(
                  "ul",
                  { staticClass: "bootbox-tabs", attrs: { role: "tablist" } },
                  e._l(e.integrations, function (t) {
                    return i(
                      "li",
                      {
                        key: t.title,
                        staticClass: "bootbox-tabs__tab",
                        class: { active: e.activeTab == t.title },
                      },
                      [
                        i(
                          "button",
                          {
                            attrs: { role: "tab" },
                            on: {
                              click: function (i) {
                                e.activeTab = t.title;
                              },
                            },
                          },
                          [e._v(e._s(t.title))],
                        ),
                      ],
                    );
                  }),
                  0,
                ),
                i(
                  "div",
                  { staticClass: "tab-pane" },
                  e._l(e.integrations, function (t) {
                    return i("div", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: e.activeTab == t.title,
                          expression: "activeTab == integration.title",
                        },
                      ],
                      key: t.title,
                      staticClass: "tab-editor is-active",
                      attrs: { id: t.title },
                    });
                  }),
                  0,
                ),
                i("div", { staticClass: "modal-body-footer" }, [
                  i(
                    "button",
                    {
                      staticClass: "btn blue bootbox-close-button",
                      on: { click: e.closeModal },
                    },
                    [e._v("Done")],
                  ),
                ]),
              ]),
            ],
          ),
          i(
            "div",
            {
              staticClass:
                "modal-dialog modal-medium modal-parent send-integration",
              class: { "is-active": e.isVisible && e.sending && !e.sent },
            },
            [
              i("div", { staticClass: "modal-header" }, [
                i(
                  "button",
                  {
                    staticClass: "bootbox-close-button close",
                    attrs: { type: "button" },
                    on: { click: e.closeModal },
                  },
                  [e._v("×")],
                ),
                i("h4", { staticClass: "modal-title" }, [
                  e._v("Send integration code to someone"),
                ]),
              ]),
              i("div", { staticClass: "modal-body" }, [
                i("div", { staticClass: "bootbox-body" }, [
                  i("div", { staticClass: "tab-pane" }, [
                    i("p", { staticClass: "form-instructions" }, [
                      e._v(
                        "Send the integration instructions for this email template to a member of your team so they can integrate it into your infrastructure.",
                      ),
                    ]),
                    i("div", { staticClass: "form-group" }, [
                      i(
                        "label",
                        { staticClass: "form-group-label pull-right" },
                        [e._v("Recipient")],
                      ),
                      i("div", { staticClass: "form-group-item" }, [
                        i("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: e.recipient,
                              expression: "recipient",
                            },
                          ],
                          staticClass: "form-control input-md",
                          attrs: {
                            type: "email",
                            autocomplete: "off",
                            placeholder: "name@example.com",
                          },
                          domProps: { value: e.recipient },
                          on: {
                            input: function (t) {
                              t.target.composing ||
                                (e.recipient = t.target.value);
                            },
                          },
                        }),
                        i(
                          "div",
                          {
                            staticClass: "label-error",
                            class: {
                              "is-active":
                                e.hadRecipientError && !e.validRecipient,
                            },
                          },
                          [e._v("Please enter an email address")],
                        ),
                      ]),
                    ]),
                    i("div", { staticClass: "form-group" }, [
                      i("label", { staticClass: "form-group-label" }, [
                        e._v("From address"),
                      ]),
                      i("div", { staticClass: "form-group-item" }, [
                        i("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: e.from,
                              expression: "from",
                            },
                          ],
                          staticClass: "form-control input-md",
                          attrs: { type: "email", autocomplete: "off" },
                          domProps: { value: e.from },
                          on: {
                            input: function (t) {
                              t.target.composing || (e.from = t.target.value);
                            },
                          },
                        }),
                        i(
                          "div",
                          {
                            staticClass: "label-error",
                            class: {
                              "is-active": e.hadFromError && !e.validFrom,
                            },
                          },
                          [e._v("Please enter an email address")],
                        ),
                        i(
                          "div",
                          {
                            staticClass: "label-error",
                            class: {
                              "is-active":
                                e.hadFromError &&
                                e.validFrom &&
                                !e.validDomain &&
                                !e.validEmail,
                            },
                          },
                          [
                            e._v("Please enter an email address from a "),
                            i(
                              "a",
                              {
                                attrs: {
                                  href: "/sending/verified_senders/",
                                  target: "_blank",
                                },
                              },
                              [e._v("verified sender")],
                            ),
                          ],
                        ),
                        e._m(2),
                      ]),
                    ]),
                    i("div", { staticClass: "form-group" }, [
                      i("label", { staticClass: "form-group-label" }, [
                        e._v("Sending Account"),
                      ]),
                      i("div", { staticClass: "form-group-item" }, [
                        i(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: e.selectedSenderAccount,
                                expression: "selectedSenderAccount",
                              },
                            ],
                            staticClass: "form-control input-md",
                            on: {
                              change: function (t) {
                                var i = Array.prototype.filter
                                  .call(t.target.options, function (e) {
                                    return e.selected;
                                  })
                                  .map(function (e) {
                                    var t = "_value" in e ? e._value : e.value;
                                    return t;
                                  });
                                e.selectedSenderAccount = t.target.multiple
                                  ? i
                                  : i[0];
                              },
                            },
                          },
                          [
                            0 == Object.keys(e.smtpUsers).length &&
                            0 == Object.keys(e.apiKeys).length
                              ? i(
                                  "option",
                                  {
                                    attrs: {
                                      disabled: "",
                                      value: "no-sender-accounts",
                                    },
                                  },
                                  [
                                    e._v(
                                      "Please add an SMTP User or API Key to send a test",
                                    ),
                                  ],
                                )
                              : e._e(),
                            Object.keys(e.smtpUsers).length > 0
                              ? i(
                                  "option",
                                  { attrs: { disabled: "", value: "" } },
                                  [e._v("SMTP Users")],
                                )
                              : e._e(),
                            e._l(e.smtpUsers, function (t, s) {
                              return i(
                                "option",
                                {
                                  key: s,
                                  staticStyle: { "padding-left": "12px" },
                                  domProps: { value: s },
                                },
                                [
                                  e._v(
                                    "\n                            " +
                                      e._s(s) +
                                      " ",
                                  ),
                                  "" != t
                                    ? i("span", [e._v("(" + e._s(t) + ")")])
                                    : e._e(),
                                ],
                              );
                            }),
                            Object.keys(e.apiKeys).length > 0
                              ? i(
                                  "option",
                                  { attrs: { disabled: "", value: "" } },
                                  [e._v("API Keys")],
                                )
                              : e._e(),
                            e._l(e.apiKeys, function (t, s) {
                              return i(
                                "option",
                                {
                                  key: s,
                                  staticStyle: { "padding-left": "12px" },
                                  domProps: { value: s },
                                },
                                [
                                  e._v(
                                    "\n                            " +
                                      e._s(s) +
                                      " ",
                                  ),
                                  "" != t
                                    ? i("span", [e._v("(" + e._s(t) + ")")])
                                    : e._e(),
                                ],
                              );
                            }),
                          ],
                          2,
                        ),
                        e._m(3),
                      ]),
                    ]),
                    i("div", { staticClass: "form-group-flat" }, [
                      i("label", { staticClass: "form-group-label" }, [
                        e._v("Message to include with the instructions:"),
                      ]),
                      i("div", { staticClass: "form-group-item" }, [
                        i("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: e.message,
                              expression: "message",
                            },
                          ],
                          staticClass: "form-control input-md",
                          staticStyle: { resize: "none" },
                          attrs: { rows: "4" },
                          domProps: { value: e.message },
                          on: {
                            input: function (t) {
                              t.target.composing ||
                                (e.message = t.target.value);
                            },
                          },
                        }),
                      ]),
                    ]),
                    i("p", { staticClass: "form-instructions" }, [
                      e._v(
                        "Including a message lets you give them some context as to why they’re receiving this message, so it’s more likely to be acted upon.",
                      ),
                    ]),
                  ]),
                  i("div", { staticClass: "modal-body-footer" }, [
                    i(
                      "button",
                      {
                        staticClass: "btn blue parent-close",
                        class: { "is-loading": e.isWorking },
                        on: { click: e.sendIntegration },
                      },
                      [
                        e._v("Send integration instructions "),
                        i("span", { staticClass: "loader-spinner" }),
                      ],
                    ),
                  ]),
                ]),
              ]),
            ],
          ),
          i(
            "div",
            {
              staticClass: "modal-dialog modal-medium modal-confirm",
              class: { "is-active": e.isVisible && e.sent },
            },
            [
              i("div", { staticClass: "modal-body" }, [
                i(
                  "button",
                  {
                    staticClass: "bootbox-close-button close",
                    attrs: { type: "button" },
                    on: { click: e.closeModal },
                  },
                  [e._v("×")],
                ),
                i("div", { staticClass: "option-banner" }, [
                  e._m(4),
                  i("h4", [
                    e._v("Instructions sent to " + e._s(e.recipient) + "."),
                  ]),
                ]),
                i("div", { staticClass: "modal-body-footer" }, [
                  i(
                    "button",
                    {
                      staticClass: "btn blue bootbox-close-button",
                      staticStyle: { "margin-top": "8px" },
                      on: { click: e.closeModal },
                    },
                    [e._v("OK")],
                  ),
                ]),
              ]),
            ],
          ),
        ]);
      },
      nt = [
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("h4", { staticClass: "modal-title" }, [
            e._v("Integrate this "),
            i("span", { staticClass: "mobile-hide" }, [e._v("email")]),
            e._v(" template"),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("p", [
            e._v(
              "Follow the integration instructions below and pick one of the code snippets to get started.\n            ",
            ),
            i("br", { staticClass: "mobile-hide" }),
            e._v(
              "\n            Need more help? Take a look at our documentation ",
            ),
            i(
              "a",
              {
                attrs: {
                  href: "https://developers.smtp2go.com/",
                  target: "_blank",
                },
              },
              [e._v("here")],
            ),
            e._v("."),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("span", { staticClass: "field-info" }, [
            e._v(
              "Enter an email address that your application is authorized to send from (an email address from a ",
            ),
            i(
              "a",
              {
                attrs: { href: "/sending/verified_senders/", target: "_blank" },
              },
              [e._v("verified sender")],
            ),
            e._v(")."),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("span", { staticClass: "field-info" }, [
            e._v("Select the "),
            i(
              "a",
              { attrs: { href: "/sending/smtp_users/", target: "_blank" } },
              [e._v("SMTP User")],
            ),
            e._v(" or "),
            i("a", { attrs: { href: "/sending/apikeys/", target: "_blank" } }, [
              e._v("API Key"),
            ]),
            e._v(" you wish to use to send the email."),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("figure", [
            i("img", {
              attrs: {
                src: "/static/smtp2go_assets/paper-plane.png",
                width: "109",
                alt: "SMTP2GO",
              },
            }),
          ]);
        },
      ],
      rt =
        '# Send an email with curl\r\n\r\n# Copy and paste this into terminal\r\ncurl "https://api.smtp2go.com/v3/email/send" \\\r\n  -X POST \\\r\n  -H "Accept: application/json" \\\r\n  -H "Content-Type: application/json" \\\r\n  -d \'{\r\n        "api_key": "{{{ apikey }}}",\r\n        "to": ["Test Person <test@example.com>"],\r\n        "sender": "Test Persons Friend <test2@example.com>",\r\n        "template_id": "{{ templateid }}",\r\n        "template_data": {\r\n          {{#each templateVariables }}\r\n          "{{@key}}": "{{this}}"{{#if @last}}{{else}},{{/if}}\r\n          {{/each}}\r\n        },\r\n        "custom_headers": [\r\n          {\r\n            "header": "Reply-To",\r\n            "value": "Actual Person <test3@example.com>"\r\n          }\r\n        ]\r\n      }\'',
      ot =
        '# Send an email with the SMTP2GO python library\r\n\r\nfrom smtp2go.core import Smtp2goClient\r\n\r\nclient = Smtp2goClient(api_key="{{{ apikey }}}")\r\n\r\npayload = {\r\n            "sender": "dave@example.com",\r\n            "recipients": ["matt@example.com"],\r\n            "template_id": "{{ templateid }}",\r\n            "template_data": {\r\n              {{#each templateVariables }}\r\n              "{{@key}}": "{{this}}"{{#if @last}}{{else}},{{/if}}\r\n              {{/each}}\r\n            }\r\n            "custom_headers": {"Your-Custom-Headers": "Custom Values"}\r\n          }\r\n\r\nresponse = client.send(**payload)\r\n\r\nif response.success: \r\n  print(response.json)\r\nelse:\r\n  print(response.errors)',
      lt =
        '// Send an email with the SMTP2GO Go library\r\n\r\npackage main\r\n\r\nimport (\r\n\t"os"\r\n\t"fmt"\r\n\t"github.com/smtp2go-oss/smtp2go-go"\r\n)\r\n\r\nfunc main() {\r\n\r\n\temail := smtp2go.Email{\r\n\t\tFrom: "Matt <matt@example.com>",\r\n\t\tTo: []string{\r\n\t\t\t"Dave <dave@example.com>",\r\n\t\t},\r\n\t\tTemplateID: "{{ templateid }}",\r\n\t\tTemplateData: map[string]string{\r\n\t\t\t{{#each templateVariables }}\r\n\t\t\t"{{@key}}": "{{this}}",\r\n\t\t\t{{/each}}\r\n\t\t},\r\n\t}\r\n\tres, err := smtp2go.Send(&email)\r\n\tif err != nil {\r\n\t\tfmt.Println("An Error Occurred: %s", err)\r\n\t}\r\n\tfmt.Println("Sent Successfully: %s", res)\r\n}',
      ct =
        '# Send an email with the Postmark Ruby Gem\r\n\r\n# Install with Bundler:\r\ngem \'postmark\'\r\n\r\n# Require gem:\r\nrequire \'postmark\'\r\n\r\n# Create an instance of Postmark::ApiClient:\r\nclient = Postmark::ApiClient.new(\'bac24603-d5dd-4138-875f-7c984ab0989d\')\r\n\r\n# Example request\r\nclient.deliver_with_template(\r\n  {:from=>"sender@example.com",\r\n :to=>"recipient@example.com",\r\n :template_alias=>"welcome",\r\n :template_data=>\r\n  {"product_url"=>"product_url_Value",\r\n   "product_name"=>"product_name_Value",\r\n   "name"=>"name_Value",\r\n   "action_url"=>"action_url_Value",\r\n   "login_url"=>"login_url_Value",\r\n   "username"=>"username_Value",\r\n   "trial_length"=>"trial_length_Value",\r\n   "trial_start_date"=>"trial_start_date_Value",\r\n   "trial_end_date"=>"trial_end_date_Value",\r\n   "support_email"=>"support_email_Value",\r\n   "live_chat_url"=>"live_chat_url_Value",\r\n   "sender_name"=>"sender_name_Value",\r\n   "help_url"=>"help_url_Value",\r\n   "company_name"=>"company_name_Value",\r\n   "company_address"=>"company_address_Value"}}\r\n)',
      dt =
        '// Send an email with the Postmark PHP library\r\n\r\n// Install with composer from the command line:\r\ncomposer require wildbit/postmark-php\r\n\r\n<?php\r\n// Import the Postmark Client Class:\r\nrequire_once(\'./vendor/autoload.php\');\r\nuse Postmark\\PostmarkClient;\r\n\r\n$client = new PostmarkClient("bac24603-d5dd-4138-875f-7c984ab0989d");\r\n\r\n// Send an email:\r\n$sendResult = $client->sendEmailWithTemplate(\r\n  "sender@example.com",\r\n  "recipient@example.com",\r\n  22162650,\r\n  [\r\n  "product_url" => "product_url_Value",\r\n  "product_name" => "product_name_Value",\r\n  "name" => "name_Value",\r\n  "action_url" => "action_url_Value",\r\n  "login_url" => "login_url_Value",\r\n  "username" => "username_Value",\r\n  "trial_length" => "trial_length_Value",\r\n  "trial_start_date" => "trial_start_date_Value",\r\n  "trial_end_date" => "trial_end_date_Value",\r\n  "support_email" => "support_email_Value",\r\n  "live_chat_url" => "live_chat_url_Value",\r\n  "sender_name" => "sender_name_Value",\r\n  "help_url" => "help_url_Value",\r\n  "company_name" => "company_name_Value",\r\n  "company_address" => "company_address_Value",\r\n]);\r\n?>\r\n\r\n',
      mt =
        '// Send an email with the Postmark .NET library\r\n\r\n// Install with NuGet:\r\nPM> Install-Package Postmark\r\n\r\n// Import:\r\nusing PostmarkDotNet;\r\n\r\n// Send an email asynchronously:\r\nvar message = new TemplatedPostmarkMessage {\r\n  From = "sender@example.com",\r\n  To = "recipient@example.com",\r\n  TemplateAlias = "welcome",\r\n  TemplateModel = new Dictionary<string,object> {\r\n    { "product_url", "product_url_Value" },\r\n    { "product_name", "product_name_Value" },\r\n    { "name", "name_Value" },\r\n    { "action_url", "action_url_Value" },\r\n    { "login_url", "login_url_Value" },\r\n    { "username", "username_Value" },\r\n    { "trial_length", "trial_length_Value" },\r\n    { "trial_start_date", "trial_start_date_Value" },\r\n    { "trial_end_date", "trial_end_date_Value" },\r\n    { "support_email", "support_email_Value" },\r\n    { "live_chat_url", "live_chat_url_Value" },\r\n    { "sender_name", "sender_name_Value" },\r\n    { "help_url", "help_url_Value" },\r\n    { "company_name", "company_name_Value" },\r\n    { "company_address", "company_address_Value" },\r\n  },\r\n};\r\n\r\nvar client = new PostmarkClient("bac24603-d5dd-4138-875f-7c984ab0989d");\r\n\r\nvar response = await client.SendMessageAsync(message);\r\n\r\nif(response.Status != PostmarkStatus.Success) {\r\n    Console.WriteLine("Response was: " + response.Message);\r\n}',
      ut =
        '// Send an email with the Postmark.js library\r\n\r\n// Install with npm from the command line:\r\nnpm install postmark --save\r\n\r\n// Require:\r\nvar postmark = require("postmark");\r\n\r\n// Send an email:\r\nvar client = new postmark.ServerClient("bac24603-d5dd-4138-875f-7c984ab0989d");\r\n\r\nclient.sendEmailWithTemplate({\r\n  "From": "sender@example.com",\r\n  "To": "recipient@example.com",\r\n  "TemplateAlias": "welcome",\r\n  "TemplateModel": {\r\n    "product_url": "product_url_Value",\r\n    "product_name": "product_name_Value",\r\n    "name": "name_Value",\r\n    "action_url": "action_url_Value",\r\n    "login_url": "login_url_Value",\r\n    "username": "username_Value",\r\n    "trial_length": "trial_length_Value",\r\n    "trial_start_date": "trial_start_date_Value",\r\n    "trial_end_date": "trial_end_date_Value",\r\n    "support_email": "support_email_Value",\r\n    "live_chat_url": "live_chat_url_Value",\r\n    "sender_name": "sender_name_Value",\r\n    "help_url": "help_url_Value",\r\n    "company_name": "company_name_Value",\r\n    "company_address": "company_address_Value"\r\n  }\r\n});';
    Be["config"].set(
      "basePath",
      "/static/assets/global/plugins/ace/src-noconflict",
    );
    var pt = i("2801"),
      ht = {
        name: "EmailTemplateIntegration",
        mixins: [z, I],
        props: { isVisible: Boolean, userName: String },
        components: {},
        data: function () {
          return {
            integrations: this.$config.integrations,
            isWorking: !1,
            requestPoint: this.$config.requestPoint,
            sent: !1,
            sending: !1,
            activeTab: "curl",
            recipient: "",
            from: "",
            validDomains: [],
            validEmails: [],
            message: "",
            initialMessage:
              'Hi #NAME#,\nThese are the integration instructions for our new email template for "{{ templateName }}".\nLet me know if you need anything else, thanks!',
            editors: {},
            editorContent: {
              curl: rt,
              Python: ot,
              Go: lt,
              Ruby: ct,
              "C#": mt,
              PHP: dt,
              "Node.js": ut,
            },
            apiKey: "<< Insert API Key here >>",
            hadRecipientError: !1,
            hadFromError: !1,
            apiKeys: {},
            smtpUsers: {},
            selectedSenderAccount: "no-sender-accounts",
          };
        },
        methods: {
          init: function (e, t, i) {
            var s = this,
              a = pt.compile(this.initialMessage);
            ((this.message = a({ templateName: t })),
              this.integrations.forEach(function (a) {
                ((s.editors[a.title] = Be["edit"](a.title)),
                  s.editorInit(s.editors[a.title]));
                var n = "ace/mode/" + a.language,
                  r = s.editors[a.title].getSession();
                r.setMode(n);
                var o = s.editorContent[a.title],
                  l = {
                    apikey: s.apiKey,
                    templateid: e,
                    templateName: t,
                    templateVariables: JSON.parse(i),
                  },
                  c = pt.compile(o);
                (r.setValue(c(l)), r.setUndoManager(new Be["UndoManager"]()));
              }));
          },
          preLoad: function () {
            (this.getSenderDomains(), this.getSenderAccounts());
          },
          closeModal: function () {
            this.$eventBus.$emit(d.CLOSE_ALL_MODALS);
          },
          editorInit: function (e) {
            var t = {
              theme: "ace/theme/chrome",
              cursorStyle: "slim",
              readOnly: !0,
              showPrintMargin: 0,
              showFoldWidgets: 1,
              fadeFoldWidgets: 1,
              showLineNumbers: 0,
              showGutter: 0,
              hScrollBarAlwaysVisible: 0,
              vScrollBarAlwaysVisible: 0,
              fontSize: 13,
              highlightActiveLine: 0,
              highlightSelectedWord: 0,
              wrap: 80,
            };
            (e.setOptions(t),
              e.moveCursorTo(0, 0),
              e.navigateLineEnd(),
              (e.container.style.lineHeight = 1.7),
              e.renderer.updateFontSize());
          },
          sendIntegration: function () {
            var e = this,
              t = !1;
            if (
              (this.validRecipient || ((this.hadRecipientError = !0), (t = !0)),
              (this.validFrom && (this.validDomain || this.validEmail)) ||
                ((this.hadFromError = !0), (t = !0)),
              !t)
            ) {
              this.isWorking = !0;
              var i = {
                  message: HTML.escapeHTML(this.message),
                  code: HTML.escapeHTML(this.getCode()),
                },
                s = {
                  recipient: this.recipient,
                  from: this.from,
                  sender_account: this.selectedSenderAccount,
                  user_template_id: "integrateInstructions",
                  template_variables: JSON.stringify(i),
                };
              this.mixinAjax_put(
                this.requestPoint,
                "integrate-template",
                s,
                function (t) {
                  ((e.sent = !0), (e.isWorking = !1));
                },
                function (t) {
                  ((e.isWorking = !1),
                    e.closeModal(),
                    e.$nextTick(function () {
                      window.scrollTo({ top: 0 });
                    }),
                    HTML.handleError(t.responseJSON));
                },
                !0,
              );
            }
          },
          getSenderDomains: function () {
            var e = this;
            this.mixinAjax_get(
              "Verified Senders",
              "",
              null,
              function (t) {
                var i = t.responseJSON.results;
                (null != i.domains &&
                  i.domains.forEach(function (t) {
                    t.domain.dkim_verified &&
                      t.domain.rpath_verified &&
                      e.validDomains.push(t.domain.fulldomain);
                  }),
                  null != i.emails &&
                    i.emails.forEach(function (t) {
                      t.verified && e.validEmails.push(t.email_address);
                    }));
              },
              function (e) {
                HTML.handleError(e.responseJSON);
              },
              !0,
            );
          },
          getSenderAccounts: function () {
            var e = this;
            (this.mixinAjax_get(
              "SMTP Users",
              "load-active-users",
              null,
              function (t) {
                (t.responseJSON.results.forEach(function (t) {
                  "Allowed" == t.mail && (e.smtpUsers[t.username] = t.comment);
                }),
                  Object.keys(e.smtpUsers).length > 0 &&
                    (e.selectedSenderAccount = Object.keys(e.smtpUsers)[0]));
              },
              function (e) {
                HTML.handleError(e.responseJSON);
              },
              !0,
            ),
              this.mixinAjax_post(
                "API Keys",
                "load-active-users",
                null,
                function (t) {
                  (t.responseJSON.results.users.forEach(function (t) {
                    !t.blocked &&
                      t.endpoints.includes(401) &&
                      (e.apiKeys[t.username] = t.comment);
                  }),
                    0 == Object.keys(e.smtpUsers).length &&
                      Object.keys(e.apiKeys).length > 0 &&
                      (e.selectedSenderAccount = Object.keys(e.apiKeys)[0]));
                },
                function (e) {
                  HTML.handleError(e.responseJSON);
                },
                !0,
              ));
          },
          getCode: function () {
            return this.editors[this.activeTab].getValue();
          },
        },
        computed: {
          validRecipient: function () {
            var e = /\S+@\S+\.\S+/;
            return e.test(this.recipient);
          },
          validFrom: function () {
            var e = /\S+@\S+\.\S+/;
            return e.test(this.from);
          },
          validDomain: function () {
            var e = this.from.split("@").pop();
            return this.validDomains.includes(e);
          },
          validEmail: function () {
            var e = this.from;
            return this.validEmails.includes(e);
          },
        },
        watch: {
          isVisible: function () {
            (this.isVisible ||
              ((this.sending = !1), (this.sent = !1), (this.isWorking = !1)),
              this.isVisible && "" == this.from && (this.from = this.userName));
          },
          validRecipient: function () {
            this.validRecipient &&
              this.hadRecipientError &&
              (this.hadRecipientError = !1);
          },
          validFrom: function () {
            this.validFrom &&
              (this.validDomain || this.validEmail) &&
              this.hadFromError &&
              (this.hadFromError = !1);
          },
          validDomain: function () {
            this.validFrom &&
              this.validDomain &&
              this.hadFromError &&
              (this.hadFromError = !1);
          },
          validEmail: function () {
            this.validFrom &&
              this.validEmail &&
              this.hadFromError &&
              (this.hadFromError = !1);
          },
        },
      },
      gt = ht,
      _t = Object(R["a"])(gt, at, nt, !1, null, null, null),
      ft = _t.exports,
      vt = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i("div", { staticClass: "info-splash is-visible" }, [
          e._m(0),
          i("h2", [e._v("Personalise with flexible email templates")]),
          i("p", { staticClass: "lead-in" }, [
            e._v(
              "Create the right template for consistency with your email design, then use the API to send emails with your chosen template.",
            ),
          ]),
          i("p", [
            e.apMetadata.disable_add
              ? e._e()
              : i(
                  "button",
                  {
                    staticClass: "btn green hide-splash",
                    on: { click: e.continueToTemplatesClick },
                  },
                  [e._v("Get started with Email Templates")],
                ),
          ]),
        ]);
      },
      bt = [
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("figure", [
            i("img", {
              attrs: {
                src: "/static/smtp2go_assets/splash-emailtemplates.png",
                width: "268",
                alt: "SMTP2GO Email Templates",
              },
            }),
          ]);
        },
      ],
      Tt = {
        name: "InfoSplash",
        data: function () {
          return { apMetadata: PAGE_DATA.apMetadata };
        },
        methods: {
          continueToTemplatesClick: function () {
            (this.$eventBus.$emit(d.SWITCH_CONTEXT, "select"),
              this.$eventBus.$emit("hide-splash"));
          },
        },
      },
      Et = Tt,
      St = Object(R["a"])(Et, vt, bt, !1, null, null, null),
      Ct = St.exports;
    function yt(e, t) {
      var i = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        (t &&
          (s = s.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          i.push.apply(i, s));
      }
      return i;
    }
    function xt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? yt(Object(i), !0).forEach(function (t) {
              Object(l["a"])(e, t, i[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : yt(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t),
                );
              });
      }
      return e;
    }
    var Ot = {
        name: "EmailTemplates",
        mixins: [p, I],
        components: {
          EmailTemplateList: xe,
          EmailTemplateSelect: Pe,
          EmailTemplateEdit: Qe,
          EmailTemplateSendTest: st,
          EmailTemplateIntegration: ft,
          InfoSplash: Ct,
          LoadingBlock: L,
        },
        data: function () {
          return {
            showSplash: PAGE_DATA.show_splash,
            apMetadata: PAGE_DATA.apMetadata,
            clientTimezone: PAGE_DATA.clientTimezone,
            context: "list",
            showChangedDialog: !1,
            sendTestModal: !1,
            integrateModal: !1,
            userTemplateID: "",
            templateVariables: "",
          };
        },
        methods: {
          switchContext: function (e, t) {
            switch (e) {
              case "select":
                (this.$refs.email_template_select.init(),
                  (this.context = "select"));
                break;
              case "edit":
                (this.$refs.email_template_edit.init(
                  t,
                  this.apMetadata.username,
                ),
                  (this.context = "edit"));
                break;
              case "list":
              default:
                (this.$refs.email_template_list.init(
                  this.apMetadata,
                  this.clientTimezone,
                ),
                  (this.context = "list"));
                break;
            }
          },
          listTemplates: function () {
            "edit" == this.context
              ? this.$refs.email_template_edit.backToList()
              : this.backToList();
          },
          backToList: function () {
            (this.modalOff(), this.$eventBus.$emit(d.SWITCH_CONTEXT, "list"));
          },
          saveTemplate: function () {
            (this.modalOff(),
              this.$refs.email_template_edit.saveTemplateClicked(!0));
          },
          enableChangedDialog: function () {
            this.showChangedDialog = !0;
          },
          enableSendTestModal: function (e, t) {
            ((this.sendTestModal = !0),
              (this.userTemplateID = e),
              (this.templateVariables = t));
          },
          enableIntegrateModal: function (e, t, i) {
            ((this.integrateModal = !0), this.$refs.integration.init(e, t, i));
          },
          modalOff: function () {
            ((this.showChangedDialog = !1),
              (this.sendTestModal = !1),
              (this.integrateModal = !1));
          },
        },
        computed: xt(
          xt(
            {},
            Object(x["b"])({
              isAjaxRunning: v.getters.GET_IS_AJAX_RUNNING,
              isQuiteRequest: v.getters.GET_IS_QUIET_REQUEST,
            }),
          ),
          {},
          {
            modalVisible: function () {
              return (
                this.showChangedDialog ||
                this.sendTestModal ||
                this.integrateModal
              );
            },
          },
        ),
        mounted: function () {
          (this.$refs.email_template_list.init(
            this.apMetadata,
            this.clientTimezone,
          ),
            this.$refs.sendtest.init(this.apMetadata),
            this.$refs.integration.preLoad());
        },
        created: function () {
          var e,
            t = this;
          (this.mixinEventListener_register(
            ((e = {}),
            Object(l["a"])(e, d.SWITCH_CONTEXT, this.switchContext),
            Object(l["a"])(e, d.SHOW_CHANGED_DIALOG, this.enableChangedDialog),
            Object(l["a"])(e, d.SHOW_SEND_TEST_MODAL, this.enableSendTestModal),
            Object(l["a"])(
              e,
              d.SHOW_INTEGRATE_MODAL,
              this.enableIntegrateModal,
            ),
            Object(l["a"])(e, d.CLOSE_ALL_MODALS, this.modalOff),
            e),
          ),
            this.mixinEventListener_on(),
            this.$eventBus.$on("hide-splash", function () {
              t.showSplash = !1;
            }));
        },
        destroyed: function () {
          (this.mixinEventListener_off(), this.$eventBus.$off("hide-splash"));
        },
      },
      wt = Ot,
      jt = Object(R["a"])(wt, r, o, !1, null, null, null),
      kt = jt.exports;
    n["a"].use(x["a"]);
    var At = new x["a"].Store({
        strict: !1,
        getters: {},
        mutations: {},
        actions: {},
        modules: { root: y, tags: be },
      }),
      It = At,
      Dt = i("de88"),
      Pt = i("bc3a"),
      Nt = i.n(Pt),
      $t = Nt.a.create(),
      Rt = function (e) {
        ($t.interceptors.request.use(function (t) {
          return (
            e.commit("root/INC_RUNNING_AJAX_REQUESTS"),
            e.commit("root/CLEAR_SUCCESS_MESSAGE"),
            e.commit("root/CLEAR_ERROR_MESSAGE"),
            t
          );
        }),
          $t.interceptors.response.use(
            function (t) {
              if (
                (e.commit("root/DEC_RUNNING_AJAX_REQUESTS"),
                (t = t.data),
                "error" in t)
              )
                return Promise.reject(t.error);
              var i = t.message,
                s = t.results,
                a = t.verification;
              return Promise.resolve({
                results: s,
                message: i,
                verification: a,
              });
            },
            function (t) {
              return (
                e.commit("root/DEC_RUNNING_AJAX_REQUESTS"),
                Promise.reject(t)
              );
            },
          ));
      };
    ((n["a"].config.productionTip = !1),
      (n["a"].config.silent = !0),
      (n["a"].prototype.$eventBus = new n["a"]()),
      "undefined" !== typeof PAGE_DATA &&
        It.commit(v.mutations.SET_CSRF_KEY, PAGE_DATA.csrfkey),
      "undefined" !== typeof END_POINTS &&
        It.commit(v.mutations.SET_END_POINTS, END_POINTS.urls()),
      Rt(It),
      (n["a"].prototype.$eventBus = new n["a"]()),
      (n["a"].prototype.$config = Dt),
      new n["a"]({
        store: It,
        render: function (e) {
          return e(kt);
        },
      }).$mount("#email-templates"));
  },
  de88: function (e) {
    e.exports = JSON.parse(
      '{"requestPoint":"Templates","displayColumns":[{"id":"name","label":"Template name","active":true},{"id":"id","label":"Template ID","filterable":true,"active":true},{"id":"subject","label":"Subject","filterable":true,"active":true},{"id":"updated","label":"Last updated","filterable":true,"active":true},{"id":"tags","label":"Tags","filterable":true,"active":true}],"searchOptions":{},"tagColours":[{"pale":"#DEF4F8","text":"#1299ab66","background":"#57bbc9"},{"pale":"#d1edd6","text":"#36906766","background":"#3bb67f"},{"pale":"#DCDFE5","text":"#68748D66","background":"#828da0"},{"pale":"#f8e9b1","text":"#a5825066","background":"#dbb572"},{"pale":"#f2bbb5aa","text":"#b35e4f66","background":"#ef8a78"},{"pale":"#dcdfff","text":"#707be866","background":"#939dfa"},{"pale":"#c3e4f9","text":"#258cd066","background":"#32a0e8"},{"pale":"#cee7e7","text":"#6c919166","background":"#96bbbb"}],"integrations":[{"title":"curl","language":"sh"},{"title":"Python","language":"python"},{"title":"Go","language":"golang"}]}',
    );
  },
});
//# sourceMappingURL=app.b7181ea5.js.map
