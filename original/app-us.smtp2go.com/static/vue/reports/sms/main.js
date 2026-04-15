(function (t) {
  function e(e) {
    for (
      var i, r, o = e[0], c = e[1], l = e[2], d = 0, h = [];
      d < o.length;
      d++
    )
      ((r = o[d]),
        Object.prototype.hasOwnProperty.call(n, r) && n[r] && h.push(n[r][0]),
        (n[r] = 0));
    for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (t[i] = c[i]);
    u && u(e);
    while (h.length) h.shift()();
    return (a.push.apply(a, l || []), s());
  }
  function s() {
    for (var t, e = 0; e < a.length; e++) {
      for (var s = a[e], i = !0, o = 1; o < s.length; o++) {
        var c = s[o];
        0 !== n[c] && (i = !1);
      }
      i && (a.splice(e--, 1), (t = r((r.s = s[0]))));
    }
    return t;
  }
  var i = {},
    n = { app: 0 },
    a = [];
  function r(e) {
    if (i[e]) return i[e].exports;
    var s = (i[e] = { i: e, l: !1, exports: {} });
    return (t[e].call(s.exports, s, s.exports, r), (s.l = !0), s.exports);
  }
  ((r.m = t),
    (r.c = i),
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
        for (var i in t)
          r.d(
            s,
            i,
            function (e) {
              return t[e];
            }.bind(null, i),
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
  (a.push([0, "chunk-vendors"]), s());
})({
  0: function (t, e, s) {
    t.exports = s("56d7");
  },
  "07d3": function (t, e, s) {},
  "12a1": function (t, e, s) {
    "use strict";
    s("2c99");
  },
  "1c1c": function (t) {
    t.exports = JSON.parse(
      '{"requestPoint":"SMS Messaging","searchOptions":{},"headers":{"tabs":{"title":"SMS Messaging","description":"","showBack":false},"numbers":{"title":"Dedicated Numbers","description":"View your dedicated numbers or get a new dedicated number.","showBack":true},"email2sms":{"title":"Email to SMS","description":"Adjust your Email to SMS settings.","showBack":true}},"displayColumns":[{"id":"date","label":"Date","active":true,"received":true},{"id":"status","label":"Status","active":true,"received":true},{"id":"to","label":"To","filterable":true,"active":true,"received":true},{"id":"from","label":"From","filterable":true,"active":true,"received":true},{"id":"content","label":"Content","filterable":true,"active":true,"received":true},{"id":"units","label":"Units","filterable":true,"active":true,"received":false},{"id":"account_name","label":"Subaccount","filterable":true,"active":false,"received":false},{"id":"username","label":"Username","filterable":true,"active":true,"received":false}],"displaySummaryColumns":[{"id":"previousBillingPeriods","label":"Billing period","active":true},{"id":"msg_tot","label":"Total messages","filterable":true,"active":true},{"id":"sent_tot","label":"Total units","filterable":true,"active":true},{"id":"paid_tot","label":"Total cost","filterable":true,"active":true}],"displayDedicatedNumbersColumns":[{"id":"country","label":"Country","active":true},{"id":"number","label":"Number","active":true},{"id":"name","label":"Name","active":true},{"id":"cost","label":"Total Cost","filterable":true,"active":true},{"id":"capabilities","label":"Capabilities","filterable":true,"active":true},{"id":"status","label":"Status","filterable":true,"active":true},{"id":"forward_replies","label":"Forward Replies","filterable":true,"active":true}],"datesToDisplay":[{"label":"7 Days","id":"days7","days":7,"prefix":"Last "},{"label":"14 Days","id":"days14","days":14,"prefix":"Last "},{"label":"30 Days","id":"days30","days":30,"prefix":"Last ","checked":"checked"},{"label":"Between...","id":"between","days":0}],"betweenConf":{"show":true,"start":30,"end":0},"selectableCountries":[{"label":"United States","code":"US","dialCode":"+1","checked":"checked"},{"label":"United Kingdom","code":"GB","dialCode":"+44","checked":""},{"label":"Australia","code":"AU","dialCode":"+61","checked":""}],"dedicatedNumberCosts":{"US":5,"GB":10,"AU":10},"eventsToDisplay":[{"id":"sending","label":"Sending","color":"#C1C4CB","active":true,"apiCodes":["PROCESSING","ENROUTE","QUEUED","GATEWAY-RETRY"],"statusCodes":["101","102","151"]},{"id":"submitted","label":"Submitted","color":"#57BBC9","active":true,"apiCodes":["SUBMITTED"],"statusCodes":["200","210","211","212","213"]},{"id":"delivered","label":"Delivered","color":"#3bb67f","active":true,"apiCodes":["PROCESSED","DELIVERED"],"statusCodes":["220","221"]},{"id":"scheduled","label":"Scheduled","color":"#b379d3","active":true,"apiCodes":["SCHEDULED"],"statusCodes":[]},{"id":"quota-limited","label":"Held","color":"#e2b466","active":true,"apiCodes":["QUOTA-LIMITED"],"statusCodes":[]},{"id":"failed","label":"Failed","color":"#ad894a","active":true,"apiCodes":["HELD","EXPIRED","CANCELLED","FAILED","SENDING-FAILURE"],"statusCodes":["320","330","331","332","333","400","401","403","405","410","411","413","414"]},{"id":"rejected","label":"Rejected","color":"#b35e4f","active":true,"apiCodes":["REJECTED"],"statusCodes":["301","302","303","304","305","402","412"]}],"contexts":{"SPLASH":"splash","TAB":"tab","TAB_SENT":"tab-sent","TAB_RECEIVED":"tab-received","TAB_SUMMARY":"tab-summary","TAB_SETTINGS":"tab-settings","TAB_NUMBERS":"tab-numbers","TAB_RECHARGE":"tab-recharge","TAB_TOPUP":"tab-topup","TAB_EMAIL2SMS":"tab-email2sms","SETTINGS":"settings","SETTINGS_NUMBERS":"settings-numbers","SETTINGS_PURCHASE":"settings-purchase","SETTINGS_EMAIL2SMS":"settings-email2sms","SETTINGS_NUMBER_EDIT":"settings-number-edit"},"downloadOptions":[{"id":"csv","label":"Download list as CSV","endPoint":""},{"id":"xml","label":"Download list as XML"},{"id":"json","label":"Download list as NDJSON"}],"statusCodes":{"101":"Message being processed by the gateway.","102":"Message is being rerouted to a different provider after failing via the first provider.","151":"Message held for screening.","200":"Message submitted to downstream provider for delivery.","210":"Message accepted by downstream provider.","211":"Message is enroute for delivery by provider.","212":"Message submitted. Delivery pending.","213":"Message scheduled for delivery by downstream provider.","220":"Message delivered.","221":"Message delivered to the handset.","301":"Usage threshold reached. Message discarded.","302":"Destination address blocked. Message discarded.","303":"Source address blocked. Message discarded.","304":"Message dropped. Contact support.","305":"Message discarded due to duplicate detection.","320":"Message validity period has expired (prior to submission).","330":"Gateway failure.","331":"Message discarded.","332":"No available route to destination.","333":"Source address unsupported for this destination.","400":"Message failed; undeliverable.","401":"Message validity period has expired (before delivery).","402":"Message rejected by downstream provider.","403":"Message skipped by downstream provider.","405":"Message cancelled or deleted by provider.","410":"Invalid source address.","411":"Invalid destination address.","412":"Destination address blocked.","413":"SMS service unavailable on destination.","414":"Destination unreachable."}}',
    );
  },
  "2c99": function (t, e, s) {},
  "391a": function (t, e, s) {},
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
      "./ar-ps": "4c98",
      "./ar-ps.js": "4c98",
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
      "./ku-kmr": "7558",
      "./ku-kmr.js": "7558",
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
  "4c72": function (t, e, s) {
    "use strict";
    s("391a");
  },
  "56d7": function (t, e, s) {
    "use strict";
    s.r(e);
    (s("cadf"), s("551c"), s("f751"), s("097d"));
    var i = s("a026"),
      n = function () {
        var t = this,
          e = t._self._c;
        return e(
          "section",
          {
            staticClass: "page-content-section",
            class: [
              { splashOn: t.showSplash },
              {
                "verify-on":
                  t.showBarNoticeUnverified && !t.showVerificationForm,
              },
            ],
            attrs: { id: "sms" },
          },
          [
            !t.showInfoSplash || t.showUpgradeSplash || t.showSubaccountSplash
              ? t._e()
              : e("InfoSplash", {
                  ref: "sms_splash",
                  attrs: { userData: t.userData },
                }),
            !t.showUpgradeSplash || t.showSubaccountSplash || t.hasSMSAccount
              ? t._e()
              : e("UpgradeSplash", {
                  ref: "sms_upgrade_splash",
                  attrs: { hidePaymentSplash: t.hidePaymentSplash },
                }),
            t.showSubaccountSplash
              ? e("SubaccountSplash", { ref: "sms_sub_splash" })
              : t._e(),
            t.showSplash
              ? t._e()
              : [
                  e("SMSHeader", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !t.showVerificationForm,
                        expression: "!showVerificationForm",
                      },
                    ],
                    ref: "sms_header",
                    attrs: {
                      context: t.context,
                      clientPermissions: t.clientPermissions,
                      title: t.pageTitle,
                    },
                  }),
                  t.showBarNoticeQuota ? e("BarNoticeQuota") : t._e(),
                  t.showVerificationForm
                    ? t._e()
                    : e("BarNoticeGrouped", {
                        attrs: {
                          clientPermissions: t.clientPermissions,
                          context: t.context,
                        },
                      }),
                  t.showBarNoticeUsa && !t.showVerificationForm
                    ? e("BarNoticeUsa", {
                        attrs: { clientPermissions: t.clientPermissions },
                      })
                    : t._e(),
                  e("page-alert", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: t.showAlert && !t.showVerificationForm,
                        expression: "showAlert && !showVerificationForm",
                      },
                    ],
                  }),
                  e(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !t.showVerificationForm,
                          expression: "!showVerificationForm",
                        },
                      ],
                      staticClass: "sms-table-container",
                    },
                    [
                      e("SMSTabTable", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.showTabTable,
                            expression: "showTabTable",
                          },
                        ],
                        ref: "sms_tab_table",
                        attrs: {
                          context: t.context,
                          clientPermissions: t.clientPermissions,
                        },
                      }),
                      e("AjaxLoadingSpinner", {
                        attrs: { context: t.context },
                      }),
                    ],
                    1,
                  ),
                  e("SMSSettingsPage", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: t.showSettingsPage && !t.showVerificationForm,
                        expression: "showSettingsPage && !showVerificationForm",
                      },
                    ],
                    ref: "sms_settings_page",
                    attrs: { userData: t.userData, context: t.context },
                  }),
                  e("NumberVerification", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: t.showVerificationForm,
                        expression: "showVerificationForm",
                      },
                    ],
                    ref: "sms_verification",
                  }),
                ],
          ],
          2,
        );
      },
      a = [],
      r = (s("8e6e"), s("ac6a"), s("456d"), s("f559"), s("bd86")),
      o = s("c1df"),
      c = s.n(o),
      l =
        (s("7f45"),
        s("0d6d"),
        Object.freeze({
          CREATE_ACCOUNT: "create-account",
          SWITCH_CONTEXT: "switch-context",
          CLEAR_POLLING: "clear-polling",
          GO_BACK: "go-back",
          LOAD_AVAILABLE_NUMBERS: "load-available-numbers",
          AVAILABLE_LOADING_DONE: "available-loading-done",
          SET_SHOW_BAR_NOTICE: "set-show-bar-notice",
          CLOSE_ALL_FILTER: "close-all-filter",
          SMSTBOX_RESEND_CLICKED: "sms-toolbox-resend",
          SMSTBOX_FORWARD_CLICKED: "sms-toolbox-forward",
          SHOW_VERIFICATION_FORM: "show-verification-form",
          VERIFICATION_SUBMITTED: "verification-submitted",
          HIDE_USA_BANNER: "hide-usa-banner",
        })),
      u = l,
      d = s("2f62"),
      h = s("1157"),
      m = s.n(h),
      p =
        (s("6b54"),
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
      _ = p,
      g = {
        mixins: [_],
        created: function () {
          this.makeRequest = function (t, e, s, i, n, a, r) {
            (void 0 !== r && null !== r) || (r = !1);
            var o = this;
            (m.a.ajax(
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
                    r || o.$store.commit("root/DEC_RUNNING_AJAX_REQUESTS");
                    try {
                      o.s2g_objectIsFunction(a) && a(t);
                    } catch (s) {
                      console.error(
                        "encountered error in AJAXBackendMixin, err:",
                        s,
                      );
                    }
                  } else {
                    r || o.$store.commit("root/DEC_RUNNING_AJAX_REQUESTS");
                    try {
                      "error" in t.responseJSON && o.s2g_objectIsFunction(a)
                        ? a(t)
                        : o.s2g_objectIsFunction(n) && n(t);
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
              r || o.$store.commit("root/INC_RUNNING_AJAX_REQUESTS"));
          };
        },
        methods: {
          mixinAjax_get: function (t, e, s, i, n, a) {
            return this.makeRequest("GET", t, e, s, i, n, a);
          },
          mixinAjax_post: function (t, e, s, i, n, a) {
            return this.makeRequest("POST", t, e, s, i, n, a);
          },
          mixinAjax_patch: function (t, e, s, i, n, a) {
            return this.makeRequest("PATCH", t, e, s, i, n, a);
          },
          mixinAjax_put: function (t, e, s, i, n, a) {
            return this.makeRequest("PUT", t, e, s, i, n, a);
          },
          mixinAjax_delete: function (t, e, s, i, n, a) {
            return this.makeRequest("DELETE", t, e, s, i, n, a);
          },
        },
      },
      f = g,
      b = s("768b"),
      v =
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
                    var s = Object(b["a"])(e, 2),
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
                  var s = Object(b["a"])(e, 2),
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
      S = v,
      C = {
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
            if (!this.searchHasChanged && !this.loadMore && !this.initRequest)
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
      E = C,
      T = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          {
            staticClass: "splash-process-container",
            class: [
              { "is-two-active": t.stepTwoActive },
              { "is-three-active": t.stepThreeActive },
              { "is-four-active": t.stepFourActive },
              { "is-five-active": t.stepFiveActive },
            ],
          },
          [
            e("transition", { attrs: { name: "sms-splash-main" } }, [
              t.stepOneActive
                ? e(
                    "div",
                    { staticClass: "info-splash is-visible sms-splash-step-1" },
                    [
                      e("figure", [
                        e("img", {
                          attrs: {
                            src: "/static/smtp2go_assets/splash-sms.png",
                            width: "268",
                            alt: "SMTP2GO SMS",
                          },
                        }),
                      ]),
                      e("h2", [t._v("Send SMS messages.")]),
                      "report" == t.userData.acting_role
                        ? [
                            e("p", { staticClass: "lead-in" }, [
                              t._v(
                                "Contact an Owner or Admin of your account to set up SMS sending. ",
                              ),
                              e("br"),
                              t._v(
                                "Each SMS costs a particular amount depending on the country of the recipient. See ",
                              ),
                              e(
                                "a",
                                {
                                  attrs: {
                                    href: "https://support.smtp2go.com/hc/en-gb/articles/6352101968409",
                                    target: "_blank",
                                  },
                                },
                                [t._v("more information")],
                              ),
                              t._v(" about SMS sending."),
                            ]),
                            e("p"),
                          ]
                        : t.notChargebee
                          ? [
                              e("p", { staticClass: "lead-in" }, [
                                t._v(
                                  "\n          Click below to set up your account for SMS sending.",
                                ),
                                e("br", { staticClass: "mobile-hide" }),
                                t._v(
                                  "\n          Each SMS costs a particular amount depending on the country of the recipient.\n          See ",
                                ),
                                e(
                                  "a",
                                  {
                                    attrs: {
                                      href: "https://support.smtp2go.com/hc/en-gb/articles/6352101968409",
                                      target: "_blank",
                                    },
                                  },
                                  [t._v("more information")],
                                ),
                                t._v(" about SMS sending.\n        "),
                              ]),
                              e("div", { staticClass: "notice-splash" }, [
                                e("div", { staticClass: "notice-splash-icon" }),
                                e(
                                  "p",
                                  { staticClass: "notice-splash-content" },
                                  [
                                    e("strong", [t._v("Important note")]),
                                    e("br"),
                                    t._v(
                                      "\n            This paid feature requires that you firstly move to our new payment processor. You can do this by clicking the ‘Start process’ button below, and then ",
                                    ),
                                    e(
                                      "a",
                                      {
                                        attrs: {
                                          target: "_blank",
                                          href: "https://support.smtp2go.com/hc/en-gb/articles/28407225527449-Switch-Payment-Processors",
                                        },
                                      },
                                      [t._v("following these instructions")],
                                    ),
                                    t._v(".  \n          "),
                                  ],
                                ),
                              ]),
                              e(
                                "a",
                                {
                                  staticClass: "green btn start-process",
                                  attrs: { href: "/account/changeplan/" },
                                },
                                [
                                  t._v("Start process"),
                                  e("span", { staticClass: "button-icon" }, [
                                    t._v("+"),
                                  ]),
                                ],
                              ),
                            ]
                          : [
                              e("p", { staticClass: "lead-in" }, [
                                t._v(
                                  "Click below to set up your account for SMS sending. ",
                                ),
                                e("br"),
                                t._v(
                                  "Each SMS costs a particular amount depending on the country of the recipient. See ",
                                ),
                                e(
                                  "a",
                                  {
                                    attrs: {
                                      href: "https://support.smtp2go.com/hc/en-gb/articles/6352101968409",
                                      target: "_blank",
                                    },
                                  },
                                  [t._v("more information")],
                                ),
                                t._v(" about SMS sending."),
                              ]),
                              t.isMasterAccount
                                ? e("div", { staticClass: "notice-splash" }, [
                                    e("div", {
                                      staticClass: "notice-splash-icon",
                                    }),
                                    e(
                                      "p",
                                      { staticClass: "notice-splash-content" },
                                      [
                                        e("strong", [t._v("Important note")]),
                                        e("br"),
                                        t._v(
                                          "\n            If you are setting up SMS sending for a subaccount, this must be done directly within the subaccount's App (not here).\n          ",
                                        ),
                                      ],
                                    ),
                                  ])
                                : t._e(),
                              e("p", [
                                e(
                                  "button",
                                  {
                                    staticClass: "btn green hide-splash",
                                    on: { click: t.createSMSAccountClick },
                                  },
                                  [t._v("Continue")],
                                ),
                              ]),
                            ],
                    ],
                    2,
                  )
                : t._e(),
            ]),
            t.stepTwoActive
              ? e("div", { staticClass: "sms-splash-step splash-step-2" }, [
                  e("header", { class: { "is-active": t.stepTwoAnimate } }, [
                    e("h3", [
                      t._v(
                        "Would you like to send SMS Messages from a dedicated number?",
                      ),
                    ]),
                    e("p", { staticClass: "lead-in" }, [
                      t._v(
                        "Sending messages from the same phone number every time helps your customers know the SMS message is from you.",
                      ),
                    ]),
                  ]),
                  e("div", { staticClass: "splash-table-panel" }, [
                    e("div", { staticClass: "card card-region" }, [
                      t._m(0),
                      e(
                        "div",
                        {
                          staticClass: "region",
                          class: { "is-selected": "US" === t.selectedCountry },
                          on: {
                            click: function (e) {
                              return t.toggleCountrySelection("US");
                            },
                          },
                        },
                        [
                          t._m(1),
                          e("span", { staticClass: "region-price" }, [
                            t._v(t._s(t.getNumberCost("US"))),
                          ]),
                        ],
                      ),
                      e(
                        "div",
                        {
                          staticClass: "region",
                          class: { "is-selected": "GB" === t.selectedCountry },
                          on: {
                            click: function (e) {
                              return t.toggleCountrySelection("GB");
                            },
                          },
                        },
                        [
                          t._m(2),
                          e("span", { staticClass: "region-price" }, [
                            t._v(t._s(t.getNumberCost("GB"))),
                          ]),
                        ],
                      ),
                      e(
                        "div",
                        {
                          staticClass: "region",
                          class: { "is-selected": "AU" === t.selectedCountry },
                          on: {
                            click: function (e) {
                              return t.toggleCountrySelection("AU");
                            },
                          },
                        },
                        [
                          t._m(3),
                          e("span", { staticClass: "region-price" }, [
                            t._v(t._s(t.getNumberCost("AU"))),
                          ]),
                        ],
                      ),
                      e(
                        "div",
                        {
                          staticClass: "region",
                          class: {
                            "is-selected": "shared" === t.selectedCountry,
                          },
                          on: {
                            click: function (e) {
                              return t.toggleCountrySelection("shared");
                            },
                          },
                        },
                        [
                          t._m(4),
                          e("span", { staticClass: "region-price" }, [
                            t._v(t._s(t.getNumberCost("shared"))),
                          ]),
                        ],
                      ),
                    ]),
                    e("div", { staticClass: "table-footer" }, [
                      e(
                        "button",
                        {
                          staticClass: "btn green hide-splash",
                          attrs: { disabled: "" === this.selectedCountry },
                          on: {
                            click: function (e) {
                              return t.selectCountry();
                            },
                          },
                        },
                        [t._v("Continue")],
                      ),
                      e("span", { staticClass: "footer-info-text right" }, [
                        t._v("Prices in USD"),
                      ]),
                    ]),
                  ]),
                ])
              : t._e(),
            t.stepThreeActive
              ? e("div", { staticClass: "sms-splash-step splash-step-3" }, [
                  e("header", { class: { "is-active": t.stepThreeAnimate } }, [
                    e("h3", [t._v("Great choice! Pick your SMS number below")]),
                    e("p", { staticClass: "lead-in" }, [
                      t._v(
                        "Choose a number you'd like to activate in your account.",
                      ),
                    ]),
                  ]),
                  e(
                    "div",
                    {
                      staticClass: "splash-table-panel",
                      class: { "is-active": t.stepThreeAnimate },
                    },
                    [
                      e(
                        "div",
                        {
                          staticClass:
                            "table-container-topBar top search-grouped bar-full",
                        },
                        [
                          e("SearchBox", {
                            ref: "numberSearchBox",
                            attrs: { id: "splash-number-search" },
                          }),
                        ],
                        1,
                      ),
                      e(
                        "div",
                        {
                          staticClass: "table-container-content",
                          class: { "is-spinner": t.gettingNumbers },
                        },
                        [
                          e(
                            "div",
                            {
                              staticClass: "table-wrapper",
                              class: { "no-numbers": t.noNumbersFound },
                            },
                            [
                              e("table", { staticClass: "data-table" }, [
                                t._m(5),
                                e(
                                  "tbody",
                                  [
                                    t._l(t.numbers, function (s) {
                                      return e("tr", { key: s.id }, [
                                        e("td", [
                                          e(
                                            "label",
                                            {
                                              attrs: { for: s.id },
                                              on: {
                                                click: function (e) {
                                                  return (
                                                    e.preventDefault(),
                                                    t.selectNumber(s)
                                                  );
                                                },
                                              },
                                            },
                                            [
                                              e(
                                                "div",
                                                { staticClass: "radio" },
                                                [
                                                  e(
                                                    "span",
                                                    {
                                                      class: {
                                                        checked:
                                                          t.isNumberChecked(
                                                            s.id,
                                                          ),
                                                      },
                                                    },
                                                    [
                                                      e("input", {
                                                        attrs: {
                                                          type: "radio",
                                                          name: "number",
                                                          id: s.id,
                                                        },
                                                        domProps: {
                                                          value: s.id,
                                                        },
                                                      }),
                                                    ],
                                                  ),
                                                ],
                                              ),
                                              t._v(
                                                t._s(
                                                  t.getDisplayPhone(
                                                    s.phone_number,
                                                  ),
                                                ) + "\n                    ",
                                              ),
                                            ],
                                          ),
                                        ]),
                                        e(
                                          "td",
                                          [
                                            t._l(s.capabilities, function (s) {
                                              return [
                                                "mms" == s.toLowerCase() ||
                                                "sms" == s.toLowerCase()
                                                  ? e("span", {
                                                      key: s,
                                                      staticClass:
                                                        "long-event-indicator",
                                                      class: s.toLowerCase(),
                                                    })
                                                  : t._e(),
                                              ];
                                            }),
                                          ],
                                          2,
                                        ),
                                        e("td", [
                                          t._v(
                                            t._s(t.getNumberCost(s.country)),
                                          ),
                                        ]),
                                      ]);
                                    }),
                                    t.noNumbersFound
                                      ? e("tr", [
                                          e(
                                            "td",
                                            {
                                              staticClass: "no-results",
                                              attrs: { colspan: "3" },
                                            },
                                            [
                                              t._v(
                                                "No numbers found. Please try a different search or contact support.",
                                              ),
                                            ],
                                          ),
                                        ])
                                      : t._e(),
                                  ],
                                  2,
                                ),
                              ]),
                            ],
                          ),
                          e("div", { staticClass: "table-footer" }, [
                            e(
                              "button",
                              {
                                staticClass: "btn green hide-splash",
                                attrs: { disabled: 0 === t.numbers.length },
                                on: { click: t.gotoSplashFour },
                              },
                              [
                                t._v(
                                  "\n            Continue with this number\n            ",
                                ),
                              ],
                            ),
                            e(
                              "button",
                              {
                                staticClass: "btn button-outlined",
                                on: { click: t.gotoSplashTwo },
                              },
                              [t._v("\n              Go back\n            ")],
                            ),
                            e(
                              "span",
                              { staticClass: "footer-info-text right" },
                              [t._v("Prices in USD")],
                            ),
                          ]),
                          t.gettingNumbers
                            ? e(
                                "div",
                                { staticClass: "table-loading-overlay" },
                                [t._m(6)],
                              )
                            : t._e(),
                        ],
                      ),
                    ],
                  ),
                ])
              : t._e(),
            t.stepFourActive
              ? e("div", { staticClass: "sms-splash-step splash-step-4" }, [
                  e("header", { class: { "is-active": t.stepFourAnimate } }, [
                    e("h3", [t._v("What shall we call this number?")]),
                    e("p", { staticClass: "lead-in" }, [
                      t._v(
                        "Enter a descriptive name for your dedicated number.",
                      ),
                    ]),
                    e("p", [
                      e("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: t.label,
                            expression: "label",
                          },
                        ],
                        attrs: {
                          type: "text",
                          placeholder: "My Unnamed SMS Number",
                        },
                        domProps: { value: t.label },
                        on: {
                          keyup: t.isEnterTyped,
                          input: function (e) {
                            e.target.composing || (t.label = e.target.value);
                          },
                        },
                      }),
                      e("br"),
                      e(
                        "button",
                        {
                          staticClass: "btn green hide-splash",
                          on: { click: t.gotoSplashFive },
                        },
                        [t._v("Continue with this name")],
                      ),
                      e(
                        "button",
                        {
                          staticClass: "btn button-outlined",
                          on: {
                            click: function (e) {
                              return t.gotoSplashThree(t.selectedCountry);
                            },
                          },
                        },
                        [t._v("\n            Go back\n          ")],
                      ),
                    ]),
                  ]),
                  t._m(7),
                ])
              : t._e(),
            t.stepFiveActive
              ? e(
                  "div",
                  { staticClass: "sms-splash-step splash-step-success" },
                  [
                    e("header", { class: { "is-active": t.stepFiveAnimate } }, [
                      t._m(8),
                      e("h3", [t._v("Super! Setting up your account")]),
                      t._m(9),
                    ]),
                  ],
                )
              : t._e(),
          ],
          1,
        );
      },
      y = [
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "region-title" }, [
            e("h4", [t._v("Select dedicated number type")]),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("span", { staticClass: "region-name" }, [
            e("span", { staticClass: "region-flag flag-us" }, [
              e("img", {
                attrs: {
                  src: "/static/smtp2go_assets/flag-us.png",
                  alt: "US",
                  width: "24",
                },
              }),
            ]),
            t._v("\n              United States\n              "),
            e("span", { staticClass: "region-info" }, [
              t._v("(Required for sending to US & Canada)"),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("span", { staticClass: "region-name" }, [
            e("span", { staticClass: "region-flag flag-us" }, [
              e("img", {
                attrs: {
                  src: "/static/smtp2go_assets/flag-uk.png",
                  alt: "GB",
                  width: "24",
                },
              }),
            ]),
            t._v("\n              United Kingdom\n            "),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("span", { staticClass: "region-name" }, [
            e("span", { staticClass: "region-flag flag-us" }, [
              e("img", {
                attrs: {
                  src: "/static/smtp2go_assets/flag-au.png",
                  alt: "AU",
                  width: "24",
                },
              }),
            ]),
            t._v("\n              Australia\n            "),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("span", { staticClass: "region-name" }, [
            e("span", { staticClass: "region-flag flag-shared" }, [
              e("img", {
                attrs: {
                  src: "/static/smtp2go_assets/flag-shared.png",
                  alt: "Shared",
                  width: "24",
                },
              }),
            ]),
            t._v("\n              Or use a shared number\n            "),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("thead", [
            e("tr", [
              e("th", [e("span", [t._v("Number")])]),
              e("th", [e("span", [t._v("Sending Capabilities")])]),
              e("th", [e("span", [t._v("Price")])]),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "loading is-animatable is-visible" }, [
            e("div", { staticClass: "load-more load-centered" }, [
              e("div", { staticClass: "loading-spinner" }, [
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
              ]),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "table-footer" }, [
            e("h4", { staticClass: "footer-info-title" }, [
              t._v("Continue to complete your purchase"),
            ]),
            e("p", { staticClass: "footer-info-text" }, [
              t._v(
                "Your billing details on file will be charged the appropriate amount for your new dedicated number. ",
              ),
              e("br"),
              t._v("If you pay manually, an invoice will be created."),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "loading is-animatable is-visible" }, [
            e("div", { staticClass: "load-more load-centered" }, [
              e("div", { staticClass: "loading-spinner" }, [
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
              ]),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("p", { staticClass: "lead-in" }, [
            t._v("\n           Your text messaging number will be ready "),
            e("br"),
            t._v("for you in a sec.\n        "),
          ]);
        },
      ],
      w =
        (s("5df3"),
        s("1c4c"),
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "search" }, [
            e(
              "div",
              {
                staticClass: "dataTables_filter has-search-options",
                attrs: { id: "emails_bounces_filter" },
              },
              [
                e("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: t.primarySearchKeyword,
                      expression: "primarySearchKeyword",
                    },
                  ],
                  staticClass: "form-control input-small input-inline",
                  attrs: {
                    type: "search",
                    "aria-controls": "emails_bounces",
                    id: "main-search",
                    placeholder: t.placeholder,
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
                  ? e(
                      "a",
                      {
                        staticClass: "toggle-search-options",
                        attrs: { href: "javascript:void(0);" },
                        on: { click: t.mixinTriggerable_toggleOpened },
                      },
                      [e("i", { staticClass: "fa fa-angle-down" })],
                    )
                  : t._e(),
                e(
                  "button",
                  {
                    staticClass: "btn blue btn-search",
                    attrs: {
                      type: "button",
                      role: "button",
                      disabled: t.requestActive,
                    },
                    on: { click: t.forcePerformSearch },
                  },
                  [
                    e("span", { staticClass: "icon-search" }),
                    e("span", { staticClass: "button-text" }, [
                      t._v(" Search"),
                    ]),
                  ],
                ),
              ],
            ),
            e(
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
                staticClass: "search-options open",
              },
              [
                e(
                  "ul",
                  { staticClass: "dropdown-menu" },
                  [
                    t._l(t.searchOptions, function (s, i) {
                      return e("li", { key: i }, [
                        e("label", { staticClass: "control-label" }, [
                          t._v(t._s(s.label) + ":"),
                        ]),
                        "hasAttachment" !== i
                          ? e("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.trim",
                                  value: s.value,
                                  expression: "searchOption.value",
                                  modifiers: { trim: !0 },
                                },
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text" },
                              domProps: { value: s.value },
                              on: {
                                input: [
                                  function (e) {
                                    e.target.composing ||
                                      t.$set(s, "value", e.target.value.trim());
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
                          ? e("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.trim",
                                  value: s.value,
                                  expression: "searchOption.value",
                                  modifiers: { trim: !0 },
                                },
                              ],
                              staticClass:
                                "form-control search-attachment-checkbox",
                              attrs: { type: "checkbox" },
                              domProps: {
                                checked: Array.isArray(s.value)
                                  ? t._i(s.value, null) > -1
                                  : s.value,
                              },
                              on: {
                                click: t.searchChanged,
                                change: function (e) {
                                  var i = s.value,
                                    n = e.target,
                                    a = !!n.checked;
                                  if (Array.isArray(i)) {
                                    var r = null,
                                      o = t._i(i, r);
                                    n.checked
                                      ? o < 0 &&
                                        t.$set(s, "value", i.concat([r]))
                                      : o > -1 &&
                                        t.$set(
                                          s,
                                          "value",
                                          i.slice(0, o).concat(i.slice(o + 1)),
                                        );
                                  } else t.$set(s, "value", a);
                                },
                              },
                            })
                          : t._e(),
                      ]);
                    }),
                    e("li", [
                      e(
                        "button",
                        {
                          staticClass: "btn blue btn-search",
                          attrs: {
                            role: "button",
                            type: "button",
                            disabled: t.requestActive,
                          },
                          on: { click: t.forcePerformSearch },
                        },
                        [
                          e("span", { staticClass: "icon-search" }),
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
        }),
      x = [],
      N =
        (s("a481"),
        s("7f7f"),
        s("7514"),
        Object.freeze({
          TRIGGERABLE_OPENED: "mixin-triggerable-opened",
          TRIGGERABLE_CLOSED: "mixin-triggerable-closed",
        })),
      A = {
        created: function () {
          (m()(window).on("click.Bst", this.$_mixinTriggerableWindowClicked),
            this.$eventBus.$on(
              N.TRIGGERABLE_OPENED,
              this.$_mixinTriggerableOpened,
            ));
        },
        mounted: function () {
          ((this.mixinTriggerable_layers = m()(this.$el).find(
            ".mixinTriggerable_layer",
          )),
            m()(this.$el).hasClass("mixinTriggerable_layer") &&
              this.mixinTriggerable_layers.push(this.$el));
        },
        destroyed: function () {
          (m()(window).off("click.Bst", this.$_mixinTriggerableWindowClicked),
            this.$eventBus.$off(
              N.TRIGGERABLE_OPENED,
              this.$_mixinTriggerableOpened,
            ));
        },
        methods: {
          $_mixinTriggerableUpdateParent: function (t) {
            for (var e = 0, s = this.$parent; ; ) {
              if (
                !(
                  void 0 !== s &&
                  null !== s &&
                  void 0 !== s.mixinTriggerable_getID &&
                  e < 10
                )
              )
                break;
              ((s.mixinTriggerable_isModal = t), e++, (s = s.$parent));
            }
          },
          $_mixinTriggerableWindowClicked: function (t) {
            if (this.mixinTriggerable_ignoreNextWindowClick)
              this.mixinTriggerable_ignoreNextWindowClick = !1;
            else if (!this.mixinTriggerable_isModal) {
              var e = function (t) {
                  var e = m()(t)
                    .parents()
                    .filter(function (t, e) {
                      return m()(e).hasClass("mixinTriggerable_layer");
                    });
                  return e.length > 0;
                },
                s = function (t) {
                  var e = m()(t)
                    .parents()
                    .filter(function (t, e) {
                      return (
                        m()(e).hasClass("table-condensed") ||
                        m()(e).hasClass("daterangepicker")
                      );
                    });
                  return e.length > 0;
                },
                i = !1;
              if (this.mixinTriggerable_isOpen)
                for (var n = 0; n < this.mixinTriggerable_layers.length; ++n) {
                  var a = m()(this.mixinTriggerable_layers[n]);
                  if (
                    0 !== a.has(t.target).length ||
                    a.is(t.target) ||
                    (!this.mixinTriggerable_closeOnParentClick &&
                      e(t.target, a)) ||
                    s(t.target, a)
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
                  N.TRIGGERABLE_CLOSED,
                  this.mixinTriggerable_getID(),
                ),
                ("EventFilter" !== this.mixinTriggerable_getID() &&
                  "PeriodFilter" !== this.mixinTriggerable_getID()) ||
                  this.$parent.mixinTriggerable_forceClose());
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
            var t = m()(this.$el).offset().left,
              e = Math.ceil(t),
              s = m()(this.$el).offset().top,
              i = Math.ceil(s);
            ((this.$el.style.left = e + "px"),
              (this.$el.style.top = i + "px"),
              (this.$el.style.transform = "translate(0) scale(1)"));
          },
          mixinTriggerable_toggleOpened: function (t) {
            (void 0 !== t && t.stopImmediatePropagation(),
              (this.mixinTriggerable_isModal &&
                "AllFilter" !== this.mixinTriggerable_getID()) ||
                ((this.mixinTriggerable_isOpen = !this.mixinTriggerable_isOpen),
                this.$_mixinTriggerableUpdateParent(
                  this.mixinTriggerable_isOpen,
                ),
                this.mixinTriggerable_isOpen
                  ? this.$eventBus.$emit(
                      N.TRIGGERABLE_OPENED,
                      this.mixinTriggerable_getID(),
                    )
                  : this.$eventBus.$emit(
                      N.TRIGGERABLE_CLOSED,
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
                  N.TRIGGERABLE_OPENED,
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
                  N.TRIGGERABLE_CLOSED,
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
      O = {
        name: "SearchBox",
        mixins: [A],
        data: function () {
          return {
            initialised: !1,
            searchOptions: this.$config.searchOptions,
            mainSearch: "",
            primarySearchKeyword: "",
            placeholder: "Search for content, to or from...",
          };
        },
        initialised: !1,
        methods: {
          initSearchBox: function (t) {
            ((this.placeholder = t), (this.initialised = !0));
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
              !this.requestActive &&
              (this.forcePerformSearch(t), !0)
            );
          },
          forcePerformSearch: function () {
            (this.$eventBus.$emit("mixin-search-has-changed"),
              this.$eventBus.$emit("mixin-search-trigger"),
              this.mixinTriggerable_forceClose());
          },
          getMainSearch: function () {
            return this.mainSearch;
          },
          resetSearch: function () {
            ((this.primarySearchKeyword = ""), (this.mainSearch = ""));
          },
        },
        computed: {
          requestActive: function () {
            return 1 === this.$store.state.runningAjaxRequests;
          },
        },
      },
      I = O,
      M = s("2877"),
      k = Object(M["a"])(I, w, x, !1, null, null, null),
      D = k.exports,
      j = s("6abe"),
      R = s.n(j),
      B = {
        name: "InfoSplash",
        mixins: [f, A, S],
        components: { SearchBox: D },
        props: { userData: Object },
        created: function () {
          (this.mixinEventListener_register(
            Object(r["a"])({}, N.TRIGGERABLE_CLOSED, this.checkClosed),
          ),
            this.mixinEventListener_on());
        },
        destroyed: function () {
          (this.mixinEventListener_off(),
            this._splashObserver &&
              this._splashObservers.forEach(function (t) {
                return t.disconnect();
              }));
        },
        mounted: function () {
          (this.getNumbersForSplash("US", !0),
            this.getNumbersForSplash("GB", !0),
            this.getNumbersForSplash("AU", !0),
            this.updatePageContentClass());
          var t = document.querySelector(".notice-special"),
            e = document.querySelector(".page-content");
          (t &&
            !t.classList.contains("hide") &&
            e &&
            e.classList.add("has-special-notice"),
            this.observeSplashVisibility());
        },
        data: function () {
          return {
            requestPoint: this.$config.requestPoint,
            selectableCountries: this.$config.selectableCountries,
            dedicatedNumberCosts: this.$config.dedicatedNumberCosts,
            stepOneActive: !0,
            stepTwoActive: !1,
            stepTwoAnimate: !1,
            stepThreeActive: !1,
            stepThreeAnimate: !1,
            waitingForNumbers: !1,
            stepFourActive: !1,
            stepFourAnimate: !1,
            stepFiveActive: !1,
            stepFiveAnimate: !1,
            numbers: [],
            countryNumbers: { US: [], GB: [], AU: [] },
            gettingCountryNumbers: { US: !1, GB: !1, AU: !1 },
            country: {},
            selectedCountry: "",
            pagesize: "5",
            selectedNumber: {},
            label: "",
            noNumbersFound: !1,
            gettingNumbers: !1,
            searchActive: !1,
            isMasterAccount: PAGE_DATA.is_master,
            notChargebee: PAGE_DATA.show_switch_processor_splash,
          };
        },
        methods: {
          createSMSAccountClick: function () {
            ((this.stepOneActive = !1),
              (this.stepTwoActive = !0),
              (this.noNumbersFound = !1),
              this.$set(this, "stepTwoAnimate", !0));
          },
          toggleCountrySelection: function (t) {
            this.selectedCountry === t
              ? (this.selectedCountry = "")
              : (this.selectedCountry = t);
          },
          selectCountry: function () {
            "shared" === this.selectedCountry
              ? ((this.selectedNumber = {}), this.gotoSplashFive())
              : this.gotoSplashThree(this.selectedCountry);
          },
          gotoSplashTwo: function () {
            var t = this;
            ((this.stepThreeActive = !1),
              (this.stepThreeAnimate = !1),
              setTimeout(function () {
                (t.$set(t, "stepTwoAnimate", !0),
                  (t.stepTwoActive = !0),
                  t.updatePageContentClass());
              }, 10));
          },
          gotoSplashThree: function (t) {
            var e = this;
            (console.log("gotoSplashThree: ", t),
              t &&
                ((this.stepTwoAnimate = !1),
                setTimeout(function () {
                  ((e.gettingNumbers = !0),
                    (e.stepTwoActive = !1),
                    (e.stepFourActive = !1),
                    (e.stepThreeActive = !0),
                    (e.waitingForNumbers = !0),
                    e.selectableCountries.forEach(function (s) {
                      s.code === t
                        ? ((s.checked = "checked"), (e.country = s))
                        : (s.checked = "");
                    }),
                    0 === e.countryNumbers[t].length
                      ? setTimeout(e.performSplashNumberSearch(), 50)
                      : ((e.numbers = e.countryNumbers[t]),
                        (e.selectedNumber = e.numbers[0]),
                        setTimeout(function () {
                          ((e.gettingNumbers = !1),
                            e.$refs.numberSearchBox.initSearchBox(
                              "Search for numbers containing...",
                            ),
                            e.$set(e, "stepThreeAnimate", !0),
                            (e.waitingForNumbers = !1));
                        }, 100)));
                }, 300)));
          },
          gotoSplashFour: function () {
            var t = this;
            ((this.stepThreeActive = !1),
              (this.stepThreeAnimate = !1),
              (this.stepFourActive = !0),
              setTimeout(function () {
                t.$set(t, "stepFourAnimate", !0);
              }, 100));
          },
          gotoSplashFive: function () {
            var t = this;
            ((this.stepOneActive = !1),
              (this.stepTwoActive = !1),
              (this.stepThreeActive = !1),
              (this.stepFourActive = !1),
              (this.stepFourAnimate = !1),
              (this.stepFiveActive = !0),
              this.$eventBus.$emit(
                u.CREATE_ACCOUNT,
                this.selectedNumber,
                this.label,
              ),
              setTimeout(function () {
                t.$set(t, "stepFiveAnimate", !0);
              }, 100));
          },
          isSplashVisible: function () {
            var t = document.querySelector(".splash-process-container");
            return t && "none" !== t.style.display;
          },
          performSplashNumberSearch: function () {
            ((this.searchActive = !0),
              this.getNumbersForSplash(this.country.code));
          },
          getNumbersForSplash: function (t) {
            var e = this,
              s =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              i = !0;
            ((this.gettingNumbers = !s),
              (this.noNumbersFound = !1),
              (this.gettingCountryNumbers[t] = !0));
            var n = "";
            s ||
              (this.$refs.numberSearchBox.getMainSearch().startsWith("+") &&
                this.selectableCountries.forEach(function (t) {
                  e.$refs.numberSearchBox
                    .getMainSearch()
                    .startsWith(t.dialCode) && (e.country = t);
                }),
              (n = this.$refs.numberSearchBox.getMainSearch()));
            var a = { matching: n, country: t, pagesize: this.pagesize };
            this.mixinAjax_get(
              this.requestPoint,
              "available-numbers",
              a,
              function (s) {
                ((e.countryNumbers[t] = s.responseJSON.results.numbers),
                  (e.gettingCountryNumbers[t] = !1),
                  (e.searchActive = !1),
                  e.country.code === t &&
                    ((e.numbers = e.countryNumbers[t]),
                    0 == e.numbers.length
                      ? ((e.selectedNumber = {}),
                        (e.numbers = []),
                        (e.noNumbersFound = !0))
                      : (e.selectedNumber = e.numbers[0]),
                    (e.gettingNumbers = !1),
                    e.$refs.numberSearchBox.initSearchBox(
                      "Search for numbers containing...",
                    )));
              },
              function (s) {
                ((e.selectedNumber = {}),
                  (e.numbers = []),
                  HTML.handleError(s.responseJSON),
                  (e.gettingNumbers = !1),
                  (e.gettingCountryNumbers[t] = !1),
                  (e.searchActive = !1));
              },
              i,
            );
          },
          getDisplayPhone: function (t) {
            var e = R.a.PhoneNumberUtil.getInstance(),
              s = R.a.PhoneNumberFormat,
              i = e.parse(t);
            return e.format(i, s.INTERNATIONAL);
          },
          selectNumber: function (t) {
            this.selectedNumber = t;
          },
          isNumberChecked: function (t) {
            return this.selectedNumber.id && t == this.selectedNumber.id;
          },
          isCountryChecked: function (t) {
            return t == this.country.code;
          },
          checkClosed: function (t) {
            "InfoSplash" == t && this.$eventBus.$emit("mixin-search-trigger");
          },
          isEnterTyped: function (t) {
            return (
              13 == t.keyCode && this.stepFourActive && this.gotoSplashFive(),
              !1
            );
          },
          getNumberCost: function (t) {
            if ("shared" === t) return "Free";
            var e = this.dedicatedNumberCosts[t] * this.userData.plan_duration,
              s = "month";
            return (
              3 === this.userData.plan_duration
                ? (s = "quarter")
                : 12 === this.userData.plan_duration && (s = "year"),
              "$" + e + "/" + s
            );
          },
          updatePageContentClass: function () {
            var t = document.querySelector(".page-content");
            t &&
              (this.isMasterAccount && !this.stepTwoActive
                ? t.classList.add("has-master-notice")
                : t.classList.remove("has-master-notice"),
              this.notChargebee
                ? t.classList.add("has-payment-notice")
                : t.classList.remove("has-payment-notice"));
          },
          observeSplashVisibility: function () {
            var t = this,
              e = document.querySelectorAll(".splash-process-container"),
              s = document.querySelector(".page-content");
            if (s && 0 !== e.length) {
              var i = function () {
                var t = Array.from(e).some(function (t) {
                  return "none" !== getComputedStyle(t).display;
                });
                t
                  ? s.classList.add("splash-active")
                  : s.classList.remove("splash-active");
              };
              (i(),
                (this._splashObservers = []),
                e.forEach(function (e) {
                  var s = new MutationObserver(i);
                  (s.observe(e, { attributes: !0, attributeFilter: ["style"] }),
                    t._splashObservers.push(s));
                }));
            }
          },
        },
        watch: {
          isMasterAccount: "updatePageContentClass",
          notChargebee: "updatePageContentClass",
          gettingNumbers: function (t) {
            !t &&
              this.waitingForNumbers &&
              (this.$set(this, "stepThreeAnimate", !0),
              (this.waitingForNumbers = !1));
          },
        },
      },
      U = B,
      P = (s("8b60"), Object(M["a"])(U, T, y, !1, null, null, null)),
      G = P.exports,
      L = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "splash-process-container" },
          [
            e("transition", { attrs: { name: "sms-splash-main" } }, [
              e(
                "div",
                { staticClass: "info-splash is-visible sms-splash-step-1" },
                [
                  e("figure", [
                    e("img", {
                      attrs: {
                        src: "/static/smtp2go_assets/splash-sms.png",
                        width: "268",
                        alt: "SMTP2GO SMS",
                      },
                    }),
                  ]),
                  e("h2", [t._v("Send SMS messages.")]),
                  t.hidePaymentSplash
                    ? t._e()
                    : e("p", { staticClass: "lead-in" }, [
                        t._v("This feature is available to "),
                        e("a", { attrs: { href: "/account/changeplan/" } }, [
                          t._v("paid accounts."),
                        ]),
                      ]),
                  t.hidePaymentSplash
                    ? t._e()
                    : e("p", { staticClass: "lead-in" }, [
                        e(
                          "a",
                          {
                            staticClass: "btn green",
                            attrs: { href: "/account/changeplan/" },
                          },
                          [t._v("Click here to upgrade your plan")],
                        ),
                      ]),
                  t.hidePaymentSplash
                    ? e("p", { staticClass: "lead-in" }, [
                        t._v(
                          "Attention: There appears to be unusual activity or an unusually high number of bounces or spam complaints generated\n        from the emails being sent through your account. As a precautionary measure we have had to suspend the account and notify you\n        so that you can make sure you are following the ",
                        ),
                        e(
                          "a",
                          {
                            attrs: {
                              href: "http://www.smtp2go.com/terms",
                              target: "_BLANK",
                            },
                          },
                          [t._v("terms of service")],
                        ),
                        t._v(
                          ",\n        especially the provision that prohibits the sending of any unsolicited emails.\n        ",
                        ),
                        e("br"),
                        e("br"),
                        t._v(
                          "\n        If you feel that this message is in error, please ",
                        ),
                        e(
                          "a",
                          {
                            attrs: {
                              href: "http://www.smtp2go.com/contact",
                              target: "_BLANK",
                            },
                          },
                          [t._v("contact us")],
                        ),
                        t._v(" as soon as possible.\n      "),
                      ])
                    : t._e(),
                ],
              ),
            ]),
          ],
          1,
        );
      },
      F = [],
      H = { name: "UpgradeSplash", props: { hidePaymentSplash: Boolean } },
      q = H,
      z = Object(M["a"])(q, L, F, !1, null, null, null),
      V = z.exports,
      J = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "splash-process-container" },
          [
            e("transition", { attrs: { name: "sms-splash-main" } }, [
              e(
                "div",
                { staticClass: "info-splash is-visible sms-splash-step-1" },
                [
                  e("figure", [
                    e("img", {
                      attrs: {
                        src: "/static/smtp2go_assets/splash-sms.png",
                        width: "268",
                        alt: "SMTP2GO SMS",
                      },
                    }),
                  ]),
                  e("h2", [t._v("Send SMS messages.")]),
                  e("p", { staticClass: "lead-in" }, [
                    t._v(
                      "SMS Messaging is not currently enabled for your account.",
                    ),
                  ]),
                  e("p", { staticClass: "lead-in" }, [
                    t._v(
                      "Contact your account's administrator to request this to be enabled (this involves additional charges).",
                    ),
                  ]),
                ],
              ),
            ]),
          ],
          1,
        );
      },
      Y = [],
      W = { name: "SubaccountSplash" },
      Q = W,
      X = Object(M["a"])(Q, J, Y, !1, null, null, null),
      K = X.exports,
      Z = function () {
        var t = this,
          e = t._self._c;
        return e(
          "section",
          { staticClass: "section-datatable sms-datatable-tabs" },
          [
            e("div", { staticClass: "card--tab-list" }, [
              e("div", { staticClass: "sms-tabs tablist-container" }, [
                e(
                  "button",
                  {
                    staticClass: "tab",
                    class: { "is-active": t.showSent },
                    attrs: { disabled: t.showSent },
                    on: {
                      click: function (e) {
                        return t.switchContext(t.contexts.TAB_SENT);
                      },
                    },
                  },
                  [t._v("Sent")],
                ),
                e(
                  "button",
                  {
                    staticClass: "tab",
                    class: { "is-active": t.showReceived },
                    attrs: { disabled: t.showReceived },
                    on: {
                      click: function (e) {
                        return t.switchContext(t.contexts.TAB_RECEIVED);
                      },
                    },
                  },
                  [t._v("Received")],
                ),
                e(
                  "button",
                  {
                    staticClass: "tab",
                    class: { "is-active": t.showSummary },
                    attrs: { disabled: t.showSummary },
                    on: {
                      click: function (e) {
                        return t.switchContext(t.contexts.TAB_SUMMARY);
                      },
                    },
                  },
                  [t._v("Summary")],
                ),
              ]),
            ]),
            e("SMSSentTable", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: t.showSent,
                  expression: "showSent",
                },
              ],
              ref: "sms_sent_table",
              attrs: { clientPermissions: t.clientPermissions },
            }),
            e("SMSReceivedTable", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: t.showReceived,
                  expression: "showReceived",
                },
              ],
              ref: "sms_received_table",
            }),
            e("SMSSummaryTable", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: t.showSummary,
                  expression: "showSummary",
                },
              ],
              ref: "sms_summary_section",
              attrs: { clientPermissions: t.clientPermissions },
            }),
          ],
          1,
        );
      },
      tt = [],
      et = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "table-panel sent-table-panel" },
          [
            e("div", { staticClass: "table-container-header" }, [
              e(
                "div",
                { staticClass: "table-container-actions" },
                [
                  t.needsUpgrade || (t.prepayActive && !t.hasBalance)
                    ? t._e()
                    : e(
                        "button",
                        {
                          staticClass: "button button-secondary",
                          on: {
                            click: function (e) {
                              return t.sendTestMessage();
                            },
                          },
                        },
                        [
                          e("span", {
                            staticClass: "svg-icon-wrapper icon-send",
                          }),
                          e("span", { staticClass: "hide-875" }, [
                            t._v(" Send a"),
                          ]),
                          e("span", { staticClass: "capital-875" }, [
                            t._v(" test message"),
                          ]),
                        ],
                      ),
                  e(
                    "button",
                    {
                      staticClass: "button button-secondary",
                      on: {
                        click: function (e) {
                          t.showInstructions = !t.showInstructions;
                        },
                      },
                    },
                    [
                      e("span", {
                        staticClass: "svg-icon-wrapper icon-instructions",
                      }),
                      t._v(" Setup"),
                      e("span", { staticClass: "hide-875" }, [
                        t._v(" instructions"),
                      ]),
                    ],
                  ),
                  e("ExportButton", { ref: "exportButton" }),
                ],
                1,
              ),
            ]),
            e(
              "div",
              {
                staticClass:
                  "table-container-topBar top search-grouped bar-full",
              },
              [
                e("AllFilter", { ref: "allFilter" }),
                e("SearchBox", { ref: "searchBox" }),
              ],
              1,
            ),
            e("div", { staticClass: "table-info" }, [
              e("p", { attrs: { id: "limitText" } }, [t._v("---")]),
              t.prepayActive
                ? e(
                    "p",
                    {
                      class: [
                        "top-grouped-message reports-table",
                        { "is-highlighted": t.prepayBalance < 10 },
                        { "not-clickable": !t.clientPermissions },
                      ],
                      on: {
                        click: function (e) {
                          t.clientPermissions && t.goToTopup();
                        },
                      },
                    },
                    [
                      e(
                        "svg",
                        {
                          staticClass: "regular",
                          attrs: {
                            width: "15",
                            height: "16",
                            viewBox: "0 0 15 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                          },
                        },
                        [
                          e("path", {
                            attrs: {
                              d: "M13.3906 11.625V13.4375C13.3906 13.6779 13.2951 13.9084 13.1252 14.0783C12.9552 14.2483 12.7247 14.3438 12.4844 14.3438H2.0625C1.70197 14.3438 1.35621 14.2005 1.10128 13.9456C0.846344 13.6907 0.703125 13.3449 0.703125 12.9844V3.01563C0.703125 2.6551 0.846344 2.30933 1.10128 2.0544C1.35621 1.79947 1.70197 1.65625 2.0625 1.65625H11.5781C11.8185 1.65625 12.049 1.75173 12.2189 1.92168C12.3889 2.09164 12.4844 2.32215 12.4844 2.5625V3.92188",
                              stroke: "#818DA0",
                              "stroke-width": "1.25",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                            },
                          }),
                          e("path", {
                            attrs: {
                              d: "M13.3906 11.625C13.631 11.625 13.8615 11.5295 14.0314 11.3596C14.2014 11.1896 14.2969 10.9591 14.2969 10.7188V8C14.2969 7.75965 14.2014 7.52914 14.0314 7.35918C13.8615 7.18923 13.631 7.09375 13.3906 7.09375H11.125C10.5241 7.09375 9.94785 7.33245 9.52296 7.75734C9.09807 8.18222 8.85938 8.75849 8.85938 9.35938C8.85938 9.96026 9.09807 10.5365 9.52296 10.9614C9.94785 11.3863 10.5241 11.625 11.125 11.625H13.3906Z",
                              stroke: "#818DA0",
                              "stroke-width": "1.25",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                            },
                          }),
                          e("path", {
                            attrs: {
                              d: "M11.125 8.64062C11.2672 8.64062 11.4061 8.68278 11.5243 8.76176C11.6425 8.84073 11.7346 8.95299 11.789 9.08432C11.8434 9.21566 11.8577 9.36017 11.8299 9.4996C11.8022 9.63902 11.7338 9.76709 11.6332 9.86761C11.5327 9.96813 11.4046 10.0366 11.2652 10.0643C11.1258 10.092 10.9813 10.0778 10.8499 10.0234C10.7186 9.96901 10.6064 9.87689 10.5274 9.75869C10.4484 9.64049 10.4062 9.50153 10.4062 9.35938C10.4062 9.16875 10.482 8.98593 10.6168 8.85114C10.7516 8.71635 10.9344 8.64062 11.125 8.64062Z",
                              fill: "#818DA0",
                            },
                          }),
                          e("path", {
                            attrs: {
                              d: "M13.3902 7.09375V4.82813C13.3902 4.58778 13.2947 4.35727 13.1247 4.18731C12.9548 4.01736 12.7243 3.92188 12.4839 3.92188H3.64798C3.45127 3.93113 3.25587 3.88545 3.08365 3.78995C2.91143 3.69445 2.76919 3.5529 2.67285 3.38115",
                              stroke: "#818DA0",
                              "stroke-width": "1.25",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                            },
                          }),
                        ],
                      ),
                      e(
                        "svg",
                        {
                          staticClass: "highlighted",
                          attrs: {
                            width: "15",
                            height: "16",
                            viewBox: "0 0 15 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                          },
                        },
                        [
                          e("path", {
                            attrs: {
                              d: "M13.3906 11.625V13.4375C13.3906 13.6779 13.2951 13.9084 13.1252 14.0783C12.9552 14.2483 12.7247 14.3438 12.4844 14.3438H2.0625C1.70197 14.3438 1.35621 14.2005 1.10128 13.9456C0.846344 13.6907 0.703125 13.3449 0.703125 12.9844V3.01563C0.703125 2.6551 0.846344 2.30933 1.10128 2.0544C1.35621 1.79947 1.70197 1.65625 2.0625 1.65625H11.5781C11.8185 1.65625 12.049 1.75173 12.2189 1.92168C12.3889 2.09164 12.4844 2.32215 12.4844 2.5625V3.92188",
                              stroke: "#B87163",
                              "stroke-width": "1.25",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                            },
                          }),
                          e("path", {
                            attrs: {
                              d: "M13.3906 11.625C13.631 11.625 13.8615 11.5295 14.0314 11.3596C14.2014 11.1896 14.2969 10.9591 14.2969 10.7188V8C14.2969 7.75965 14.2014 7.52914 14.0314 7.35918C13.8615 7.18923 13.631 7.09375 13.3906 7.09375H11.125C10.5241 7.09375 9.94785 7.33245 9.52296 7.75734C9.09807 8.18222 8.85938 8.75849 8.85938 9.35938C8.85938 9.96026 9.09807 10.5365 9.52296 10.9614C9.94785 11.3863 10.5241 11.625 11.125 11.625H13.3906Z",
                              stroke: "#B87163",
                              "stroke-width": "1.25",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                            },
                          }),
                          e("path", {
                            attrs: {
                              d: "M11.125 8.64062C11.2672 8.64062 11.4061 8.68278 11.5243 8.76176C11.6425 8.84073 11.7346 8.95299 11.789 9.08432C11.8434 9.21566 11.8577 9.36017 11.8299 9.4996C11.8022 9.63902 11.7338 9.76709 11.6332 9.86761C11.5327 9.96813 11.4046 10.0366 11.2652 10.0643C11.1258 10.092 10.9813 10.0778 10.8499 10.0234C10.7186 9.96901 10.6064 9.87689 10.5274 9.75869C10.4484 9.64049 10.4062 9.50153 10.4062 9.35938C10.4062 9.16875 10.482 8.98593 10.6168 8.85114C10.7516 8.71635 10.9344 8.64062 11.125 8.64062Z",
                              fill: "#B87163",
                            },
                          }),
                          e("path", {
                            attrs: {
                              d: "M13.3902 7.09375V4.82813C13.3902 4.58778 13.2947 4.35727 13.1247 4.18731C12.9548 4.01736 12.7243 3.92188 12.4839 3.92188H3.64798C3.45127 3.93113 3.25587 3.88545 3.08365 3.78995C2.91143 3.69445 2.76919 3.5529 2.67285 3.38115",
                              stroke: "#B87163",
                              "stroke-width": "1.25",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                            },
                          }),
                        ],
                      ),
                      t._v(
                        "\n        Balance: $" +
                          t._s(t.prepayBalanceDisplay) +
                          "\n    ",
                      ),
                    ],
                  )
                : t._e(),
            ]),
            e("div", { staticClass: "table-container-content" }, [
              e("div", [
                e(
                  "table",
                  {
                    staticClass:
                      "data-table table-striped table-hover display from-visible table-left",
                  },
                  [
                    e("thead", [
                      e(
                        "tr",
                        t._l(t.activeColumns, function (s) {
                          return e(
                            "th",
                            { key: s.id, attrs: { id: "table-sms-" + s.id } },
                            [e("span", [t._v(t._s(s.label))])],
                          );
                        }),
                        0,
                      ),
                    ]),
                    t.showBlankTable
                      ? t._e()
                      : e(
                          "tbody",
                          [
                            t._l(t.messages, function (s) {
                              return e(
                                "tr",
                                {
                                  key: s.message_sequence,
                                  attrs: { "data-order-target": "0" },
                                },
                                [
                                  e(
                                    "td",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: t.isColumnActive("date"),
                                          expression: "isColumnActive('date')",
                                        },
                                      ],
                                      staticClass: "msg-time",
                                      attrs: {
                                        title: t.formatLocalizedTimestamp(
                                          t.convertToLocal(
                                            s["delivered_timestamp"],
                                          ),
                                        ),
                                      },
                                    },
                                    [
                                      t.isToday(s["delivered_timestamp"])
                                        ? [
                                            t._v(
                                              "\n                " +
                                                t._s(s["date_display"].time) +
                                                "\n              ",
                                            ),
                                          ]
                                        : [
                                            t._v(
                                              "\n                " +
                                                t._s(s["date_display"].date),
                                            ),
                                            e("span", [
                                              t._v(
                                                t._s(s["date_display"].time),
                                              ),
                                            ]),
                                          ],
                                    ],
                                    2,
                                  ),
                                  e(
                                    "td",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: t.isColumnActive("status"),
                                          expression:
                                            "isColumnActive('status')",
                                        },
                                      ],
                                      staticClass: "msg-status",
                                    },
                                    [
                                      e(
                                        "span",
                                        {
                                          staticClass: "long-event-indicator",
                                          style:
                                            "background-color:" +
                                            t.determineStatusColor(s.status),
                                          attrs: {
                                            title: t.findStatusTitle(s),
                                          },
                                        },
                                        [
                                          t._v(
                                            t._s(t.categoriseStatus(s.status)),
                                          ),
                                        ],
                                      ),
                                      t.showCanadaTooltip(s)
                                        ? e(
                                            "span",
                                            {
                                              staticClass: "column-sms-tooltip",
                                            },
                                            [
                                              e("span", {
                                                staticClass: "icon-caution",
                                              }),
                                              e(
                                                "span",
                                                { staticClass: "sms-tooltip" },
                                                [
                                                  t._v(
                                                    "Until your dedicated number has been verified, sending to Canada is unfortunately blocked by Canadian SMS carriers.",
                                                  ),
                                                ],
                                              ),
                                            ],
                                          )
                                        : t._e(),
                                    ],
                                  ),
                                  e(
                                    "td",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: t.isColumnActive("to"),
                                          expression: "isColumnActive('to')",
                                        },
                                      ],
                                      staticClass: "msg-to mark-sent-search",
                                    },
                                    [
                                      t._v(
                                        t._s(
                                          t.getDisplayPhone(
                                            s.destination_address,
                                          ),
                                        ),
                                      ),
                                    ],
                                  ),
                                  e(
                                    "td",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: t.isColumnActive("from"),
                                          expression: "isColumnActive('from')",
                                        },
                                      ],
                                      staticClass: "msg-from mark-sent-search",
                                    },
                                    [t._v(t._s(t.getSourceAddress(s)))],
                                  ),
                                  e(
                                    "td",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: t.isColumnActive("content"),
                                          expression:
                                            "isColumnActive('content')",
                                        },
                                      ],
                                      ref: "msgContainer" + s.message_sequence,
                                      refInFor: !0,
                                      staticClass:
                                        "msg-content mark-sent-search",
                                      class: {
                                        "msg-overflowed":
                                          t.isOverflowed[s.message_sequence],
                                      },
                                    },
                                    [
                                      e(
                                        "span",
                                        {
                                          ref: "msgText" + s.message_sequence,
                                          refInFor: !0,
                                          staticClass: "msg-text",
                                        },
                                        [t._v(t._s(s.content))],
                                      ),
                                      e(
                                        "span",
                                        { staticClass: "message-full-tooltip" },
                                        [
                                          t._v(t._s(s.content) + " "),
                                          e(
                                            "span",
                                            {
                                              staticClass:
                                                "copied-confirmation",
                                            },
                                            [t._v("Copied to clipboard")],
                                          ),
                                        ],
                                      ),
                                    ],
                                  ),
                                  e(
                                    "td",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: t.isColumnActive("units"),
                                          expression: "isColumnActive('units')",
                                        },
                                      ],
                                      staticClass: "msg-units mark-sent-search",
                                      attrs: { title: s.units },
                                    },
                                    [t._v(t._s(s.units))],
                                  ),
                                  e(
                                    "td",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            t.isColumnActive("account_name"),
                                          expression:
                                            "isColumnActive('account_name')",
                                        },
                                      ],
                                      staticClass:
                                        "msg-account_name mark-sent-search",
                                      attrs: { title: s.account_name },
                                    },
                                    [t._v(t._s(s.account_name))],
                                  ),
                                  e(
                                    "td",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: t.isColumnActive("username"),
                                          expression:
                                            "isColumnActive('username')",
                                        },
                                      ],
                                      staticClass:
                                        "msg-username mark-sent-search",
                                      attrs: { title: s.username },
                                    },
                                    [t._v(t._s(s.username))],
                                  ),
                                  e(
                                    "td",
                                    {
                                      staticClass: "desktop-hide cell-toolbox",
                                    },
                                    [
                                      e("sms-toolbox", {
                                        attrs: { message: s },
                                      }),
                                    ],
                                    1,
                                  ),
                                ],
                              );
                            }),
                            t.initialLoadingComplete && t.shouldShowLoadMore
                              ? e("TableLoadMore", {
                                  attrs: { isLoading: t.isLoading },
                                  on: {
                                    "load-more-clicked": function (e) {
                                      return t.performSMSSearch(!1, !0, !1);
                                    },
                                  },
                                })
                              : t._e(),
                          ],
                          2,
                        ),
                  ],
                ),
                t.showBlankTable && t.hasBalance
                  ? e("div", { staticClass: "table-blank" }, [
                      t.isDefaultSearch
                        ? e("div", { staticClass: "table-blank-content" }, [
                            e("p", [
                              t.hasSent
                                ? e("span", [
                                    t._v(
                                      "No SMS messages sent in the last 30 days",
                                    ),
                                  ])
                                : e("span", [t._v("No SMS messages sent yet")]),
                            ]),
                            e("div", { staticClass: "buttons-container" }, [
                              e(
                                "button",
                                {
                                  staticClass: "btn blue",
                                  on: {
                                    click: function (e) {
                                      return t.sendTestMessage();
                                    },
                                  },
                                },
                                [
                                  e("span", {
                                    staticClass:
                                      "svg-icon-wrapper icon-send-white",
                                  }),
                                  t._v(" Send a test message"),
                                ],
                              ),
                              e("span", {}, [t._v("or")]),
                              e(
                                "button",
                                {
                                  staticClass: "button button-secondary",
                                  on: {
                                    click: function (e) {
                                      t.showInstructions = !t.showInstructions;
                                    },
                                  },
                                },
                                [
                                  e("span", {
                                    staticClass:
                                      "svg-icon-wrapper icon-instructions",
                                  }),
                                  t._v(" Setup instructions"),
                                ],
                              ),
                            ]),
                          ])
                        : e("div", { staticClass: "table-blank-content" }, [
                            e("p", [t._v("No SMS messages found.")]),
                          ]),
                    ])
                  : t._e(),
                t.showBlankTable && !t.hasBalance
                  ? e("div", { staticClass: "table-blank" }, [
                      t.isDefaultSearch && t.clientPermissions
                        ? e("div", { staticClass: "table-blank-content" }, [
                            t._m(0),
                            e(
                              "div",
                              { staticClass: "buttons-container sent-table" },
                              [
                                e(
                                  "button",
                                  {
                                    staticClass: "btn blue",
                                    on: {
                                      click: function (e) {
                                        return t.goToTopup();
                                      },
                                    },
                                  },
                                  [
                                    e("span", {
                                      staticClass:
                                        "svg-icon-wrapper icon-send-white",
                                    }),
                                    t._v(" Top up balance"),
                                  ],
                                ),
                              ],
                            ),
                          ])
                        : t.isDefaultSearch && !t.clientPermissions
                          ? e("div", { staticClass: "table-blank-content" }, [
                              t._m(1),
                            ])
                          : e("div", { staticClass: "table-blank-content" }, [
                              e("p", [t._v("No SMS messages found.")]),
                            ]),
                    ])
                  : t._e(),
              ]),
              t.showBlankTable
                ? t._e()
                : e(
                    "div",
                    { staticClass: "table-actions-column mobile-hide" },
                    [
                      e("div", { attrs: { id: "table-options" } }, [
                        e("div", { staticClass: "dropdown-container" }, [
                          e(
                            "span",
                            {
                              staticClass: "dropdown-icon-container",
                              class: { "is-active": t.mixinTriggerable_isOpen },
                              attrs: {
                                "data-toggle-trigger": "columns-summary",
                                "data-trigger-on-close": "true",
                              },
                              on: { click: t.mixinTriggerable_toggleOpened },
                            },
                            [e("span", { staticClass: "dropdown-icon" })],
                          ),
                          e(
                            "ul",
                            {
                              staticClass:
                                "dropdown-menu dropdown-options column-filter mixinTriggerable_layer",
                              class: { visible: t.mixinTriggerable_isOpen },
                              attrs: {
                                id: "columns",
                                "data-toggle-target": "columns-summary",
                              },
                            },
                            [
                              t._m(2),
                              t._l(t.columnFilters, function (s) {
                                return e(
                                  "li",
                                  {
                                    key: s.id,
                                    staticClass: "columns-filter",
                                    attrs: { id: "columns-filter-" + s.id },
                                    on: {
                                      click: function (e) {
                                        return t.handleColumnToggle(e, s);
                                      },
                                    },
                                  },
                                  [
                                    e(
                                      "div",
                                      { staticClass: "column-indicator" },
                                      [
                                        e("div", { staticClass: "checker" }, [
                                          e(
                                            "span",
                                            {
                                              staticClass: "checker-box",
                                              class: {
                                                checked: t.shownColumns[s.id],
                                              },
                                            },
                                            [
                                              e("input", {
                                                attrs: {
                                                  type: "checkbox",
                                                  name: "columns[]",
                                                },
                                                domProps: { value: s.id },
                                              }),
                                            ],
                                          ),
                                        ]),
                                        e(
                                          "span",
                                          {
                                            staticClass:
                                              "column-indicator-copy",
                                          },
                                          [t._v(t._s(s.label))],
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
                      e(
                        "div",
                        { staticClass: "table-row-dropdown" },
                        t._l(t.messages, function (t) {
                          return e("sms-toolbox", {
                            key: t.message_sequence,
                            attrs: { message: t },
                          });
                        }),
                        1,
                      ),
                    ],
                  ),
            ]),
            e("SMSSendModal", { ref: "sendModal" }),
            e(
              "transition",
              { attrs: { name: "fade", mode: "out-in" } },
              [
                t.showInstructions
                  ? e("SmsInstructionsModal", {
                      on: { childClose: t.instructionsClose },
                    })
                  : t._e(),
              ],
              1,
            ),
          ],
          1,
        );
      },
      st = [
        function () {
          var t = this,
            e = t._self._c;
          return e("p", [
            e("span", [
              t._v(
                "To start sending SMS messages, firstly top up your balance.",
              ),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("p", [
            e("span", [
              t._v(
                "To start sending SMS messages, firstly top up your balance (a team member with permission is required).",
              ),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("li", [
            e("p", [
              e("strong", [t._v("Display optional columns")]),
              e("br"),
              t._v(
                "Choose to show\n                optional columns\n              ",
              ),
            ]),
          ]);
        },
      ],
      it = (s("6762"), s("2fdb"), s("6c37"), s("48c0"), s("6f56")),
      nt = s.n(it),
      at = {
        methods: {
          getUnixSecsRangeByDays: function (t, e) {
            var s = c.a.tz.guess(),
              i = c.a.tz(s);
            void 0 !== e && null !== e && (i = c.a.tz(e));
            var n = 60 * i._offset,
              a = 0;
            return (
              t > 0 &&
                (a = c.a.utc().subtract(t, "days").startOf("day").unix() + n),
              { start: a, end: c.a.utc().endOf("day").unix() + n }
            );
          },
          getUnixSecsRangeBetweenDates: function (t, e, s) {
            var i = c.a.tz.guess(),
              n = i;
            void 0 !== s && null !== s && (n = s);
            var a = t.clone().tz(n, !0).unix(),
              r = e.clone().tz(n, !0).unix(),
              o = { start: a, end: r };
            return o;
          },
        },
      },
      rt = at,
      ot = s("c46f");
    function ct(t, e) {
      return Object(ot["reduce"])(
        e,
        function (e, s, i) {
          return (
            (e[i] = Object(ot["reduce"])(
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
    function lt(t, e, s) {
      var i = t.indexOf("?") > -1 ? "&" : "?";
      return null !== s && void 0 !== s && s.length > 0
        ? t + i + e + "=" + encodeURIComponent(s)
        : t;
    }
    var ut = "loading/",
      dt = {
        getters: {
          GET_SHOW_SENT_LOADING: ut + "GET_SHOW_SENT_LOADING",
          GET_SHOW_RECEIVED_LOADING: ut + "GET_SHOW_RECEIVED_LOADING",
          GET_SHOW_SUMMARY_LOADING: ut + "GET_SHOW_SUMMARY_LOADING",
          GET_SHOW_SETTINGS_LOADING: ut + "GET_SHOW_SETTINGS_LOADING",
        },
        mutations: {
          SET_SHOW_SENT_LOADING: ut + "SET_SHOW_SENT_LOADING",
          SET_SHOW_RECEIVED_LOADING: ut + "SET_SHOW_RECEIVED_LOADING",
          SET_SHOW_SUMMARY_LOADING: ut + "SET_SHOW_SUMMARY_LOADING",
          SET_SHOW_SETTINGS_LOADING: ut + "SET_SHOW_SETTINGS_LOADING",
        },
      },
      ht = ct(ut, dt),
      mt = {
        show_sent_loading: !1,
        show_received_loading: !1,
        show_summary_loading: !1,
        show_settings_loading: !1,
      },
      pt = Object(r["a"])(
        Object(r["a"])(
          Object(r["a"])(
            Object(r["a"])({}, ht.getters.GET_SHOW_SENT_LOADING, function (t) {
              return t.show_sent_loading;
            }),
            ht.getters.GET_SHOW_RECEIVED_LOADING,
            function (t) {
              return t.show_received_loading;
            },
          ),
          ht.getters.GET_SHOW_SUMMARY_LOADING,
          function (t) {
            return t.show_summary_loading;
          },
        ),
        ht.getters.GET_SHOW_SETTINGS_LOADING,
        function (t) {
          return t.show_settings_loading;
        },
      ),
      _t = Object(r["a"])(
        Object(r["a"])(
          Object(r["a"])(
            Object(r["a"])(
              {},
              ht.mutations.SET_SHOW_SENT_LOADING,
              function (t, e) {
                t.show_sent_loading = e;
              },
            ),
            ht.mutations.SET_SHOW_RECEIVED_LOADING,
            function (t, e) {
              t.show_received_loading = e;
            },
          ),
          ht.mutations.SET_SHOW_SUMMARY_LOADING,
          function (t, e) {
            t.show_summary_loading = e;
          },
        ),
        ht.mutations.SET_SHOW_SETTINGS_LOADING,
        function (t, e) {
          t.show_settings_loading = e;
        },
      ),
      gt = { namespaced: !0, state: mt, getters: pt, mutations: _t },
      ft = "root/",
      bt = {
        getters: {
          GET_IS_AJAX_RUNNING: ft + "GET_IS_AJAX_RUNNING",
          GET_BACKEND_URL: ft + "GET_BACKEND_URL",
          GET_END_POINTS: ft + "GET_END_POINTS",
          GET_IMAGE_URLS: ft + "GET_IMAGE_URLS",
          GET_SUCCESS_MESSAGE: ft + "GET_SUCCESS_MESSAGE",
          GET_ERROR_MESSAGE: ft + "GET_ERROR_MESSAGE",
          GET_IS_QUIET_REQUEST: ft + "GET_IS_QUIET_REQUEST",
        },
        mutations: {
          SET_CSRF_KEY: ft + "SET_CSRF_KEY",
          SET_END_POINTS: ft + "END_POINTS",
          SET_IMAGE_URLS: ft + "SET_IMAGE_URLS",
          INC_RUNNING_AJAX_REQUESTS: ft + "INC_RUNNING_AJAX_REQUESTS",
          DEC_RUNNING_AJAX_REQUESTS: ft + "DEC_RUNNING_AJAX_REQUESTS",
          SET_SUCCESS_MESSAGE: ft + "SET_SUCCESS_MESSAGE",
          SET_ERROR_MESSAGE: ft + "SET_ERROR_MESSAGE",
          CLEAR_SUCCESS_MESSAGE: ft + "CLEAR_SUCCESS_MESSAGE",
          CLEAR_ERROR_MESSAGE: ft + "CLEAR_ERROR_MESSAGE",
          SET_IS_QUIET_REQUEST: ft + "SET_IS_QUIET_REQUEST",
        },
        actions: { UPDATE_SUCCESS_MESSAGE: ft + "UPDATE_SUCCESS_MESSAGE" },
      },
      vt = ct(ft, bt),
      St = {
        running_ajax_requests: 0,
        csrf_key: "",
        end_points: {},
        image_urls: {},
        success_message: null,
        error_message: null,
        is_quiet_request: !1,
      },
      Ct = Object(r["a"])(
        Object(r["a"])(
          Object(r["a"])(
            Object(r["a"])(
              Object(r["a"])(
                Object(r["a"])(
                  Object(r["a"])(
                    {},
                    vt.getters.GET_IS_AJAX_RUNNING,
                    function (t) {
                      return t.running_ajax_requests > 0;
                    },
                  ),
                  vt.getters.GET_END_POINTS,
                  function (t) {
                    return t.end_points;
                  },
                ),
                vt.getters.GET_BACKEND_URL,
                function (t) {
                  return function (e, s) {
                    var i = lt(t.end_points[e], "action", s);
                    return lt(i, "CSRF_key", t.csrf_key);
                  };
                },
              ),
              vt.getters.GET_IMAGE_URLS,
              function (t) {
                return t.image_urls;
              },
            ),
            vt.getters.GET_SUCCESS_MESSAGE,
            function (t) {
              return t.success_message;
            },
          ),
          vt.getters.GET_ERROR_MESSAGE,
          function (t) {
            return t.error_message;
          },
        ),
        vt.getters.GET_IS_QUIET_REQUEST,
        function (t) {
          return t.is_quiet_request;
        },
      ),
      Et = Object(r["a"])(
        Object(r["a"])(
          Object(r["a"])(
            Object(r["a"])(
              Object(r["a"])(
                Object(r["a"])(
                  Object(r["a"])(
                    Object(r["a"])(
                      Object(r["a"])(
                        Object(r["a"])(
                          {},
                          vt.mutations.SET_CSRF_KEY,
                          function (t, e) {
                            t.csrf_key = e;
                          },
                        ),
                        vt.mutations.SET_END_POINTS,
                        function (t, e) {
                          t.end_points = e;
                        },
                      ),
                      vt.mutations.SET_IMAGE_URLS,
                      function (t, e) {
                        t.image_urls = e;
                      },
                    ),
                    vt.mutations.INC_RUNNING_AJAX_REQUESTS,
                    function (t) {
                      t.running_ajax_requests++;
                    },
                  ),
                  vt.mutations.DEC_RUNNING_AJAX_REQUESTS,
                  function (t) {
                    t.running_ajax_requests--;
                  },
                ),
                vt.mutations.SET_SUCCESS_MESSAGE,
                function (t, e) {
                  t.success_message = e;
                },
              ),
              vt.mutations.SET_ERROR_MESSAGE,
              function (t, e) {
                t.error_message = e;
              },
            ),
            vt.mutations.CLEAR_SUCCESS_MESSAGE,
            function (t) {
              t.success_message = null;
            },
          ),
          vt.mutations.CLEAR_ERROR_MESSAGE,
          function (t) {
            t.error_message = null;
          },
        ),
        vt.mutations.SET_IS_QUIET_REQUEST,
        function (t, e) {
          t.is_quiet_request = e;
        },
      ),
      Tt = Object(r["a"])(
        {},
        vt.actions.UPDATE_SUCCESS_MESSAGE,
        function (t, e) {
          var s = e.success_message;
          (t.commit(vt.mutations.SET_SUCCESS_MESSAGE, s),
            setTimeout(function () {
              t.commit(vt.mutations.CLEAR_SUCCESS_MESSAGE);
            }, 5e3));
        },
      ),
      yt = {
        namespaced: !0,
        state: St,
        getters: Ct,
        mutations: Et,
        actions: Tt,
      },
      wt = s("bc3a"),
      xt = s.n(wt),
      Nt = xt.a.create(),
      At = function (t) {
        (Nt.interceptors.request.use(function (e) {
          return (
            t.commit("root/INC_RUNNING_AJAX_REQUESTS"),
            t.commit("root/CLEAR_SUCCESS_MESSAGE"),
            t.commit("root/CLEAR_ERROR_MESSAGE"),
            e
          );
        }),
          Nt.interceptors.response.use(
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
      Ot = s("2e18"),
      It = s.n(Ot),
      Mt = "numbers/",
      kt = {
        getters: {
          GET_IS_INITIALISED: Mt + "GET_IS_INITIALISED",
          GET_IS_FETCHING: Mt + "GET_IS_FETCHING",
          GET_IS_SAVING: Mt + "GET_IS_SAVING",
          GET_USER_NUMBERS: Mt + "GET_USER_NUMBERS",
          GET_NUMBER_EDITING: Mt + "GET_NUMBER_EDITING",
          GET_HAS_US_NUMBER: Mt + "GET_HAS_US_NUMBER",
          GET_HAS_UNVERIFIED_US_NUMBER: Mt + "GET_HAS_UNVERIFIED_US_NUMBER",
          GET_HAS_PENDING_US_NUMBER: Mt + "GET_HAS_PENDING_US_NUMBER",
        },
        mutations: {
          SET_USER_NUMBERS: Mt + "SET_USER_NUMBERS",
          SET_NUMBER_EDITING: Mt + "SET_NUMBER_EDITING",
          SET_IS_FETCHING: Mt + "SET_IS_FETCHING",
          SET_IS_SAVING: Mt + "SET_IS_SAVING",
        },
        actions: { FETCH_USER_NUMBERS: Mt + "FETCH_USER_NUMBERS" },
      },
      Dt = ct(Mt, kt),
      jt = {
        is_initialised: !1,
        fetching: !1,
        saving: !1,
        user_numbers: [],
        number_editing: null,
        has_us_number: !1,
        has_unverified_us_number: !1,
        has_pending_us_number: !1,
      },
      Rt = Object(r["a"])(
        Object(r["a"])(
          Object(r["a"])(
            Object(r["a"])(
              Object(r["a"])(
                Object(r["a"])(
                  Object(r["a"])(
                    Object(r["a"])(
                      {},
                      Dt.getters.GET_IS_INITIALISED,
                      function (t) {
                        return t.is_initialised;
                      },
                    ),
                    Dt.getters.GET_IS_FETCHING,
                    function (t) {
                      return t.fetching;
                    },
                  ),
                  Dt.getters.GET_IS_SAVING,
                  function (t) {
                    return t.saving;
                  },
                ),
                Dt.getters.GET_USER_NUMBERS,
                function (t) {
                  return t.user_numbers;
                },
              ),
              Dt.getters.GET_NUMBER_EDITING,
              function (t) {
                return t.number_editing;
              },
            ),
            Dt.getters.GET_HAS_US_NUMBER,
            function (t) {
              return t.has_us_number;
            },
          ),
          Dt.getters.GET_HAS_UNVERIFIED_US_NUMBER,
          function (t) {
            return t.has_unverified_us_number;
          },
        ),
        Dt.getters.GET_HAS_PENDING_US_NUMBER,
        function (t) {
          return t.has_pending_us_number;
        },
      ),
      Bt = Object(r["a"])(
        Object(r["a"])(
          Object(r["a"])(
            Object(r["a"])({}, Dt.mutations.SET_USER_NUMBERS, function (t, e) {
              var s = e,
                i = R.a.PhoneNumberUtil.getInstance(),
                n = R.a.PhoneNumberFormat;
              ((t.has_us_number = !1),
                (t.has_unverified_us_number = !1),
                (t.has_pending_us_number = !1),
                s.forEach(function (e) {
                  e.verification_status = "NA";
                  var s = i.parse(e.number.phone_number),
                    a = It.a.alpha2ToAlpha3(e.number.country);
                  ("US" == e.number.country &&
                    ((t.has_us_number = !0),
                    "UNVERIFIED" == e.number.status ||
                    "PENDING" == e.number.status
                      ? 0 == Object.keys(e.verification).length
                        ? ((e.verification_status = "NQ"),
                          (t.has_unverified_us_number = !0))
                        : ((t.has_pending_us_number = !0),
                          (e.verification_status = "PENDING"),
                          void 0 !== e.verification.sent &&
                            e.verification.sent > e.verification.created &&
                            (e.verification_status = "SENT"),
                          (void 0 === e.verification.reason &&
                            void 0 === e.verification.details) ||
                            ((e.verification_status = "REJECTED"),
                            (t.has_unverified_us_number = !0)))
                      : (e.verification_status = "VERIFIED")),
                    (e.display = {
                      country: a,
                      country_code: s.getCountryCode(),
                      national: i.format(s, n.NATIONAL),
                      full: i.format(s, n.INTERNATIONAL),
                      label: e.assignment.label,
                    }));
                }),
                (t.user_numbers = s),
                (t.is_initialised = !0));
            }),
            Dt.mutations.SET_NUMBER_EDITING,
            function (t, e) {
              t.number_editing = e;
            },
          ),
          Dt.mutations.SET_IS_FETCHING,
          function (t, e) {
            t.fetching = e;
          },
        ),
        Dt.mutations.SET_IS_SAVING,
        function (t, e) {
          t.saving = e;
        },
      ),
      Ut = Object(r["a"])({}, Dt.actions.FETCH_USER_NUMBERS, function (t, e) {
        return new Promise(function (s, i) {
          (t.commit(Dt.mutations.SET_IS_FETCHING, !0),
            e && t.commit("root/SET_IS_QUIET_REQUEST", !0, { root: !0 }),
            Nt.get(
              t.rootGetters[bt.getters.GET_BACKEND_URL](
                "SMS Messaging",
                "dedicated-numbers",
              ),
            )
              .then(function (e) {
                (t.commit(Dt.mutations.SET_USER_NUMBERS, e.results.numbers),
                  s(e));
              })
              .catch(function (e) {
                (t.commit(
                  "root/SET_ERROR_MESSAGE",
                  "Oops, something went wrong. Please try again.",
                  { root: !0 },
                ),
                  i(e));
              })
              .finally(function () {
                (e && t.commit("root/SET_IS_QUIET_REQUEST", !1, { root: !0 }),
                  t.commit(Dt.mutations.SET_IS_FETCHING, !1));
              }));
        });
      }),
      Pt = {
        namespaced: !0,
        state: jt,
        getters: Rt,
        mutations: Bt,
        actions: Ut,
      },
      $t = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "table-action" }, [
          e(
            "div",
            {
              staticClass: "drop-content sms-popup",
              class: { "popup-active": t.mixinTriggerable_isOpen },
            },
            [
              e("a", {
                staticClass:
                  "table-remove-toggler toggle-popup mixinTriggerable_layer",
                class: { "is-active": t.mixinTriggerable_isOpen },
                on: { click: t.mixinTriggerable_toggleOpened },
              }),
              e(
                "ul",
                {
                  staticClass: "dropdown-menu dropdown-options",
                  class: { visible: t.mixinTriggerable_isOpen },
                },
                [
                  t.canResend
                    ? e("li", [
                        e(
                          "a",
                          {
                            staticClass: "table-repeat",
                            on: {
                              click: function (e) {
                                return (
                                  e.preventDefault(),
                                  t.onResendClicked.apply(null, arguments)
                                );
                              },
                            },
                          },
                          [
                            e("span", { staticClass: "icon-resend" }),
                            t._v(" Resend"),
                          ],
                        ),
                      ])
                    : t._e(),
                  t.canForward
                    ? e("li", [
                        e(
                          "a",
                          {
                            staticClass: "table-repeat",
                            on: {
                              click: function (e) {
                                return (
                                  e.preventDefault(),
                                  t.onForwardClicked.apply(null, arguments)
                                );
                              },
                            },
                          },
                          [
                            e("span", { staticClass: "icon-forward" }),
                            t._v(" Forward"),
                          ],
                        ),
                      ])
                    : t._e(),
                ],
              ),
            ],
          ),
        ]);
      },
      Gt = [],
      Lt = {
        name: "SMSToolbox",
        mixins: [A],
        components: {},
        props: { message: { type: Object, required: !0 } },
        computed: {
          canResend: function () {
            return !0;
          },
          canForward: function () {
            return !0;
          },
        },
        methods: {
          onResendClicked: function () {
            (this.$eventBus.$emit(u.SMSTBOX_RESEND_CLICKED, this.message),
              this.mixinTriggerable_forceClose());
          },
          onForwardClicked: function () {
            (this.$eventBus.$emit(u.SMSTBOX_FORWARD_CLICKED, this.message),
              this.mixinTriggerable_forceClose());
          },
        },
      },
      Ft = Lt,
      Ht = Object(M["a"])(Ft, $t, Gt, !1, null, null, null),
      qt = Ht.exports,
      zt = function () {
        var t = this,
          e = t._self._c;
        return e("div", [
          e("div", {
            staticClass: "modal-backdrop",
            class: { in: t.showModal || t.showSentModal },
            on: {
              click: function (e) {
                return t.hideModals();
              },
            },
          }),
          e(
            "div",
            {
              staticClass: "modal-dialog modal-medium send-test modal-parent",
              class: { "is-active": t.showModal },
            },
            [
              e("div", { staticClass: "modal-header" }, [
                e(
                  "button",
                  {
                    staticClass: "bootbox-close-button close",
                    attrs: { type: "button" },
                    on: {
                      click: function (e) {
                        return t.setShowModal(!1);
                      },
                    },
                  },
                  [t._v("×")],
                ),
                e("h4", { staticClass: "modal-title" }, [
                  t._v("Send a message"),
                ]),
              ]),
              e("div", { staticClass: "modal-body" }, [
                e("div", { staticClass: "bootbox-body" }, [
                  e("div", { staticClass: "modal-lead-text" }, [
                    e(
                      "div",
                      { staticClass: "modal-lead-content" },
                      [
                        "forward" == t.context
                          ? [
                              t._v(
                                "Send an SMS message. Messages are billed at the normal rate. ",
                              ),
                            ]
                          : "reply" == t.context
                            ? [
                                t._v(
                                  "Reply to an SMS message. Messages are billed at the normal rate. ",
                                ),
                              ]
                            : "resend" == t.context
                              ? [
                                  t._v(
                                    "Resend an SMS message. Messages are billed at the normal rate. ",
                                  ),
                                ]
                              : [
                                  t._v(
                                    "Test your SMS messaging setup to make sure it's all working as intended. Test messages are billed as regular messages. See ",
                                  ),
                                ],
                        e("RatesDropdown", {
                          attrs: {
                            displayText: "SMS messaging rates",
                            fullStop: ".",
                          },
                        }),
                      ],
                      2,
                    ),
                  ]),
                  e("div", { staticClass: "tab-pane" }, [
                    e(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !t.isReplying,
                            expression: "!isReplying",
                          },
                        ],
                        staticClass: "form-group",
                      },
                      [
                        e("label", { staticClass: "form-group-label" }, [
                          t._v("From number"),
                        ]),
                        e("div", { staticClass: "form-group-item" }, [
                          e(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.fromNumber,
                                  expression: "fromNumber",
                                },
                              ],
                              staticClass: "form-control input-md",
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
                                  t.fromNumber = e.target.multiple ? s : s[0];
                                },
                              },
                            },
                            [
                              e("option", { attrs: { value: "shared" } }, [
                                t._v("Use Shared Numbers Pool"),
                              ]),
                              t._l(t.numbers, function (s) {
                                return e(
                                  "option",
                                  {
                                    key: s.number.id,
                                    domProps: { value: s.number.phone_number },
                                  },
                                  [
                                    t._v(
                                      "\n                  " +
                                        t._s(s.display.country) +
                                        " " +
                                        t._s(s.display.full) +
                                        "\n                ",
                                    ),
                                  ],
                                );
                              }),
                              t.gettingNumbers
                                ? e("option", { attrs: { disabled: "" } }, [
                                    t._v(
                                      "Loading Numbers ...\n                ",
                                    ),
                                  ])
                                : t._e(),
                            ],
                            2,
                          ),
                          e(
                            "div",
                            {
                              staticClass: "label-error",
                              class: { "is-active": t.hadUSError },
                            },
                            [
                              t._v(
                                "Use a USA number to send to the US/Canada.",
                              ),
                            ],
                          ),
                          e("span", { staticClass: "field-info" }, [
                            t._v(
                              "If the recipient's country is different to your selected number's country, a shared number in the recipient's country will be used for sending. A USA dedicated number is required for sending to the US or Canada.",
                            ),
                          ]),
                        ]),
                      ],
                    ),
                    e("div", { staticClass: "form-group" }, [
                      e("label", { staticClass: "form-group-label" }, [
                        t._v("To number"),
                      ]),
                      e("div", { staticClass: "form-group-item" }, [
                        e("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.toNumber,
                              expression: "toNumber",
                            },
                          ],
                          staticClass: "form-control input-md",
                          attrs: {
                            type: "tel",
                            autocomplete: "off",
                            placeholder: "+12126647665",
                          },
                          domProps: { value: t.toNumber },
                          on: {
                            input: function (e) {
                              e.target.composing ||
                                (t.toNumber = e.target.value);
                            },
                          },
                        }),
                      ]),
                    ]),
                    e("div", { staticClass: "form-group" }, [
                      e("label", { staticClass: "form-group-label" }, [
                        t._v("Message text"),
                      ]),
                      e("div", { staticClass: "form-group-item" }, [
                        e("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.msgText,
                              expression: "msgText",
                            },
                          ],
                          staticClass: "form-control input-md",
                          attrs: {
                            rows: "3",
                            placeholder: "Enter message text",
                            maxlength: t.msgTextMax,
                          },
                          domProps: { value: t.msgText },
                          on: {
                            input: function (e) {
                              e.target.composing ||
                                (t.msgText = e.target.value);
                            },
                          },
                        }),
                        e(
                          "div",
                          {
                            staticClass: "label-error",
                            class: {
                              "is-active": t.hadTextError && !t.validText,
                            },
                          },
                          [t._v("Message cannot be blank.")],
                        ),
                        e(
                          "span",
                          {
                            staticClass: "field-info",
                            staticStyle: {
                              display: "block",
                              "text-align": "right",
                            },
                          },
                          [t._v(t._s(t.unitsString))],
                        ),
                      ]),
                    ]),
                  ]),
                  e("div", { staticClass: "modal-body-footer" }, [
                    e(
                      "button",
                      {
                        staticClass: "btn blue parent-close",
                        class: { "is-loading": t.isSending },
                        attrs: { disabled: t.shouldDisableButton },
                        on: { click: t.sendMessage },
                      },
                      [
                        t._v("Send message"),
                        e("span", { staticClass: "loader-spinner" }),
                      ],
                    ),
                  ]),
                ]),
              ]),
            ],
          ),
          e(
            "div",
            {
              staticClass: "modal-dialog modal-medium modal-confirm",
              class: { "is-active": t.showSentModal },
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
                        t.showSentModal = !1;
                      },
                    },
                  },
                  [t._v("×")],
                ),
                e("div", { staticClass: "option-banner" }, [
                  t._m(0),
                  e("h4", [t._v("Message sent!")]),
                  e("p", [
                    t._v("Check the inbox of phone number  "),
                    e("span", { staticClass: "test-email" }, [
                      t._v(t._s(t.toNumber)),
                    ]),
                    t._v(
                      " to review your test message. Your test record will appear in the report shortly.",
                    ),
                  ]),
                ]),
                e("div", { staticClass: "modal-body-footer" }, [
                  e(
                    "button",
                    {
                      staticClass: "button button-secondary",
                      on: {
                        click: function (e) {
                          return t.sendAnother();
                        },
                      },
                    },
                    [t._v("Send another")],
                  ),
                  e(
                    "button",
                    {
                      staticClass: "btn blue bootbox-close-button",
                      on: {
                        click: function (e) {
                          t.showSentModal = !1;
                        },
                      },
                    },
                    [t._v("Done")],
                  ),
                ]),
              ]),
            ],
          ),
        ]);
      },
      Vt = [
        function () {
          var t = this,
            e = t._self._c;
          return e("figure", [
            e("img", {
              attrs: {
                src: "/static/smtp2go_assets/paper-plane.png",
                width: "109",
                alt: "SMTP2GO",
              },
            }),
          ]);
        },
      ],
      Jt = (s("3b2b"), "settings/"),
      Yt = {
        getters: {
          GET_IS_SMS_EMAIL_SETTINGS_INITIALISED:
            Jt + "GET_IS_SMS_EMAIL_SETTINGS_INITIALISED",
          GET_USER_SMS_EMAIL_SETTINGS: Jt + "GET_USER_SMS_EMAIL_SETTINGS",
          GET_IS_SMS_GEN_SETTINGS_INITIALISED:
            Jt + "GET_IS_SMS_GEN_SETTINGS_INITIALISED",
          GET_USER_SMS_GEN_SETTINGS: Jt + "GET_USER_SMS_GEN_SETTINGS",
        },
        mutations: {
          SET_USER_SMS_EMAIL_SETTINGS: Jt + "SET_USER_SMS_EMAIL_SETTINGS",
          SET_IS_FETCHING_SMS_EMAIL_SETTINGS:
            Jt + "SET_IS_FETCHING_SMS_EMAIL_SETTINGS",
          SET_USER_SMS_GEN_SETTINGS: Jt + "SET_USER_SMS_GEN_SETTINGS",
          SET_IS_FETCHING_SMS_GEN_SETTINGS:
            Jt + "SET_IS_FETCHING_SMS_GEN_SETTINGS",
        },
        actions: {
          FETCH_USER_SMS_EMAIL_SETTINGS: Jt + "FETCH_USER_SMS_EMAIL_SETTINGS",
          FETCH_USER_SMS_GEN_SETTINGS: Jt + "FETCH_USER_SMS_GEN_SETTINGS",
        },
      },
      Wt = ct(Jt, Yt),
      Qt = {
        is_sms_email_settings_initialised: !1,
        is_fetching_email_settings: !1,
        user_sms_email_settings: [],
        is_sms_gen_settings_initialised: !1,
        is_fetching_gen_settings: !1,
        user_sms_gen_settings: [],
      },
      Xt = Object(r["a"])(
        Object(r["a"])(
          Object(r["a"])(
            Object(r["a"])(
              {},
              Wt.getters.GET_IS_SMS_EMAIL_SETTINGS_INITIALISED,
              function (t) {
                return t.is_sms_email_settings_initialised;
              },
            ),
            Wt.getters.GET_USER_SMS_EMAIL_SETTINGS,
            function (t) {
              return t.user_sms_email_settings;
            },
          ),
          Wt.getters.GET_IS_SMS_GEN_SETTINGS_INITIALISED,
          function (t) {
            return t.is_sms_gen_settings_initialised;
          },
        ),
        Wt.getters.GET_USER_SMS_GEN_SETTINGS,
        function (t) {
          return t.user_sms_gen_settings;
        },
      ),
      Kt = Object(r["a"])(
        Object(r["a"])(
          Object(r["a"])(
            Object(r["a"])(
              {},
              Wt.mutations.SET_USER_SMS_EMAIL_SETTINGS,
              function (t, e) {
                ((t.user_sms_email_settings = e),
                  (t.is_sms_email_settings_initialised = !0));
              },
            ),
            Wt.mutations.SET_USER_SMS_GEN_SETTINGS,
            function (t, e) {
              ((t.user_sms_gen_settings = e),
                (t.is_sms_gen_settings_initialised = !0));
            },
          ),
          Wt.mutations.SET_IS_FETCHING_SMS_EMAIL_SETTINGS,
          function (t, e) {
            t.is_fetching_email_settings = e;
          },
        ),
        Wt.mutations.SET_IS_FETCHING_SMS_GEN_SETTINGS,
        function (t, e) {
          t.is_fetching_gen_settings = e;
        },
      ),
      Zt = Object(r["a"])(
        Object(r["a"])(
          {},
          Wt.actions.FETCH_USER_SMS_EMAIL_SETTINGS,
          function (t, e) {
            if (!Qt.is_fetching_email_settings)
              return new Promise(function (s, i) {
                (t.commit(Wt.mutations.SET_IS_FETCHING_SMS_EMAIL_SETTINGS, !0),
                  e && t.commit("root/SET_IS_QUIET_REQUEST", !0, { root: !0 }),
                  Nt.get(
                    t.rootGetters[bt.getters.GET_BACKEND_URL](
                      "SMS Messaging",
                      "email-settings",
                    ),
                  )
                    .then(function (e) {
                      (t.commit(
                        Wt.mutations.SET_USER_SMS_EMAIL_SETTINGS,
                        e.results,
                      ),
                        s(e));
                    })
                    .catch(function (e) {
                      (t.commit(
                        "root/SET_ERROR_MESSAGE",
                        "Oops, something went wrong. Please try again.",
                        { root: !0 },
                      ),
                        i(e));
                    })
                    .finally(function () {
                      (e &&
                        t.commit("root/SET_IS_QUIET_REQUEST", !1, { root: !0 }),
                        t.commit(
                          Wt.mutations.SET_IS_FETCHING_SMS_EMAIL_SETTINGS,
                          !1,
                        ));
                    }));
              });
          },
        ),
        Wt.actions.FETCH_USER_SMS_GEN_SETTINGS,
        function (t, e) {
          if (!Qt.is_fetching_gen_settings)
            return new Promise(function (s, i) {
              (t.commit(Wt.mutations.SET_IS_FETCHING_SMS_GEN_SETTINGS, !0),
                e && t.commit("root/SET_IS_QUIET_REQUEST", !0, { root: !0 }),
                Nt.get(
                  t.rootGetters[bt.getters.GET_BACKEND_URL](
                    "SMS Messaging",
                    "send-settings",
                  ),
                )
                  .then(function (e) {
                    (t.commit(
                      Wt.mutations.SET_USER_SMS_GEN_SETTINGS,
                      e.results.send_settings,
                    ),
                      s(e));
                  })
                  .catch(function (e) {
                    (t.commit(
                      "root/SET_ERROR_MESSAGE",
                      "Oops, something went wrong. Please try again.",
                      { root: !0 },
                    ),
                      i(e));
                  })
                  .finally(function () {
                    (e &&
                      t.commit("root/SET_IS_QUIET_REQUEST", !1, { root: !0 }),
                      t.commit(
                        Wt.mutations.SET_IS_FETCHING_SMS_GEN_SETTINGS,
                        !1,
                      ));
                  }));
            });
        },
      ),
      te = {
        namespaced: !0,
        state: Qt,
        getters: Xt,
        mutations: Kt,
        actions: Zt,
      },
      ee = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          {
            staticClass: "rates-dropdown-container sms-popup",
            class: { "popup-active": t.mixinTriggerable_isOpen },
          },
          [
            e(
              "button",
              {
                staticClass: "button-link",
                on: { click: t.mixinTriggerable_toggleOpened },
              },
              [t._v("\n    " + t._s(t.displayText))],
            ),
            t._v(t._s(t.fullStop) + "\n  "),
            e(
              "ul",
              {
                staticClass: "dropdown-rates mixinTriggerable_layer",
                class: { "is-open": t.mixinTriggerable_isOpen },
              },
              [
                t._m(0),
                t._m(1),
                t._m(2),
                t._m(3),
                t._m(4),
                t._m(5),
                t._m(6),
                t._m(7),
              ],
            ),
          ],
        );
      },
      se = [
        function () {
          var t = this,
            e = t._self._c;
          return e("li", [
            e("span", { staticClass: "rates-flag flag-us" }, [
              e("img", {
                attrs: {
                  src: "/static/smtp2go_assets/flag-us.png",
                  alt: "US",
                  width: "24",
                },
              }),
            ]),
            e("span", [
              t._v("United States"),
              e("span", { staticClass: "rates-note" }, [
                t._v("(excluding US territories)"),
              ]),
            ]),
            e("span", { staticClass: "rates-rate" }, [t._v("$0.012")]),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("li", [
            e("span", { staticClass: "rates-flag flag-ca" }, [
              e("img", {
                attrs: {
                  src: "/static/smtp2go_assets/flag-ca.png",
                  alt: "US",
                  width: "24",
                },
              }),
            ]),
            e("span", [t._v("Canada")]),
            e("span", { staticClass: "rates-rate" }, [t._v("$0.016")]),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("li", [
            e("span", { staticClass: "rates-flag flag-uk" }, [
              e("img", {
                attrs: {
                  src: "/static/smtp2go_assets/flag-uk.png",
                  alt: "US",
                  width: "24",
                },
              }),
            ]),
            t._v("United Kingdom"),
            e("span", { staticClass: "rates-rate" }, [t._v("$0.06")]),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("li", [
            e("span", { staticClass: "rates-flag flag-ie" }, [
              e("img", {
                attrs: {
                  src: "/static/smtp2go_assets/flag-ie.png",
                  alt: "IE",
                  width: "24",
                },
              }),
            ]),
            t._v("Ireland"),
            e("span", { staticClass: "rates-rate" }, [t._v("$0.08")]),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("li", [
            e("span", { staticClass: "rates-flag flag-au" }, [
              e("img", {
                attrs: {
                  src: "/static/smtp2go_assets/flag-au.png",
                  alt: "AU",
                  width: "24",
                },
              }),
            ]),
            t._v("Australia / NZ"),
            e("span", { staticClass: "rates-rate" }, [t._v("$0.07")]),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("li", [
            e("span", { staticClass: "rates-flag flag-il" }, [
              e("img", {
                attrs: {
                  src: "/static/smtp2go_assets/flag-il.png",
                  alt: "IL",
                  width: "24",
                },
              }),
            ]),
            t._v("Israel"),
            e("span", { staticClass: "rates-rate" }, [t._v("$0.34")]),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("li", [
            e("span", { staticClass: "rates-flag flag-else" }, [
              e("img", {
                attrs: {
                  src: "/static/smtp2go_assets/flag-else.png",
                  alt: "US",
                  width: "24",
                },
              }),
            ]),
            t._v("Everywhere else"),
            e("span", { staticClass: "rates-rate" }, [t._v("$0.12")]),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("li", [
            e("span", { staticClass: "rates-flag flag-mms" }, [
              e("img", {
                attrs: {
                  src: "/static/smtp2go_assets/flag-mms.png",
                  alt: "MMS",
                  width: "24",
                },
              }),
            ]),
            t._v("MMS"),
            e("span", { staticClass: "rates-rate" }, [t._v("$0.05")]),
          ]);
        },
      ],
      ie = {
        name: "RatesDropdown",
        mixins: [A],
        props: { displayText: String, fullStop: String },
        components: {},
        data: function () {
          return {};
        },
        methods: {},
        computed: {},
      },
      ne = ie,
      ae = Object(M["a"])(ne, ee, se, !1, null, null, null),
      re = ae.exports;
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
    function ce(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? oe(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
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
    var le = {
        name: "SMSSendModal",
        mixins: [f, A],
        components: { RatesDropdown: re },
        data: function () {
          return {
            requestPoint: this.$config.requestPoint,
            showModal: !1,
            isReplying: !1,
            showSentModal: !1,
            toNumber: "",
            toParsed: "",
            fromNumber: "shared",
            msgText: "",
            hadToError: !1,
            hadTextError: !1,
            hadUSError: !1,
            sendingToUS: !1,
            isSending: !1,
            phoneUtil: R.a.PhoneNumberUtil.getInstance(),
            PNF: R.a.PhoneNumberFormat,
            context: "test",
            msgTextMax: 765,
            unitsString: "Units: 1",
          };
        },
        methods: {
          init: function (t, e) {
            if (
              (this.numbersInitialised ||
                this.gettingNumbers ||
                this.$store.dispatch(kt.actions.FETCH_USER_NUMBERS, !0),
              this.genSettingsInitialised ||
                this.$store.dispatch(
                  Yt.actions.FETCH_USER_SMS_GEN_SETTINGS,
                  !0,
                ),
              (this.context = t),
              (this.msgText = ""),
              this.setDefaultFrom(),
              (this.toNumber = ""),
              (this.toParsed = ""),
              (this.isSending = !1),
              null != e)
            ) {
              switch (t) {
                case "forward":
                  ((this.isReplying = !1),
                    (this.msgText = e.content),
                    (this.fromNumber = e.source_address));
                  break;
                case "resend":
                  ((this.isReplying = !1),
                    (this.msgText = e.content),
                    (this.toNumber = e.destination_address),
                    (this.toParsed = e.destination_address),
                    (this.fromNumber = e.source_address));
                  break;
                case "reply":
                  ((this.isReplying = !0),
                    (this.fromNumber = e.destination_address),
                    (this.toNumber = e.source_address),
                    (this.toParsed = e.source_address));
                  break;
                default:
                  this.isReplying = !1;
                  break;
              }
              for (var s = !1, i = 0; i < this.numbers.length; i++)
                if (this.numbers[i].number.phone_number == this.fromNumber) {
                  s = !0;
                  break;
                }
              0 == s && (this.fromNumber = "shared");
            }
            ((this.hadToError = !1),
              (this.hadTextError = !1),
              (this.hadUSError = !1),
              (this.sendingToUS = !1),
              (this.showModal = !0));
          },
          isGsmCompliant: function (t) {
            var e = new RegExp(
              "^[A-Za-z0-9 \\r\\n@£$¥èéùìòÇØøÅåΔ_ΦΓΛΩΠΨΣΘΞÆæßÉ!\"#$%&'()*+,\\-./:;<=>?¡ÄÖÑÜ§¿äöñüà^{}\\\\\\[~\\]|€]*$",
            );
            return e.test(t);
          },
          setDefaultFrom: function () {
            ((this.fromNumber = "shared"),
              this.genSettings["default_sender_req"] &&
                (this.fromNumber = this.genSettings["default_sender_req"]));
          },
          sendMessage: function () {
            var t,
              e = this,
              s = !0,
              i = !1;
            (this.validText || ((this.hadTextError = !0), (i = !0)),
            this.checkUSNumberOk() || ((this.hadUSError = !0), (i = !0)),
            i) ||
              ((this.isSending = !0),
              (t =
                "" == this.toParsed
                  ? {
                      to_number: this.toNumber,
                      msg_text: this.msgText,
                      from_number: this.fromNumber,
                    }
                  : {
                      to_number: this.toParsed,
                      msg_text: this.msgText,
                      from_number: this.fromNumber,
                    }),
              this.mixinAjax_post(
                this.requestPoint,
                "send-sms",
                t,
                function () {
                  (e.setShowModal(!1),
                    (e.showSentModal = !0),
                    e.$eventBus.$emit("mixin-search-has-changed"),
                    (e.isSending = !1));
                },
                function (t) {
                  (HTML.handleError(t.responseJSON), (e.isSending = !1));
                },
                s,
              ));
          },
          sendAnother: function () {
            (this.setShowModal(!0), (this.showSentModal = !1));
          },
          hideModals: function () {
            (this.setShowModal(!1), (this.showSentModal = !1));
          },
          setShowModal: function (t) {
            this.showModal = t;
          },
          checkUSNumberOk: function () {
            var t = !1;
            if (this.sendingToUS) {
              if ("shared" != this.fromNumber) {
                var e = this.phoneUtil.parse(this.fromNumber);
                1 == e.getCountryCode() && (t = !0);
              }
            } else t = !0;
            return t;
          },
        },
        computed: ce(
          ce(
            {},
            Object(d["b"])({
              numbers: kt.getters.GET_USER_NUMBERS,
              numbersInitialised: kt.getters.GET_IS_INITIALISED,
              genSettings: Yt.getters.GET_USER_SMS_GEN_SETTINGS,
              genSettingsInitialised:
                Yt.getters.GET_IS_SMS_GEN_SETTINGS_INITIALISED,
              gettingNumbers: kt.getters.GET_IS_FETCHING,
            }),
          ),
          {},
          {
            validText: function () {
              return "" != this.msgText;
            },
            shouldDisableButton: function () {
              return (
                this.isSending || this.invalidNumber || 0 == this.msgText.length
              );
            },
            invalidNumber: function () {
              var t = /^[1-9](?!.*[\s-]{2})[\d\s-]{4,17}$/,
                e = /^\+[1-9](?!.*[\s-]{2})[\d\s-]{4,17}$/;
              return !t.test(this.toNumber) && !e.test(this.toNumber);
            },
          },
        ),
        watch: {
          fromNumber: function () {
            this.sendingToUS && (this.hadUSError = !this.checkUSNumberOk());
          },
          toNumber: function (t) {
            try {
              var e = this.phoneUtil.parse(t);
              ((this.toParsed = this.phoneUtil.format(e, this.PNF.E164)),
                1 == e.getCountryCode()
                  ? (this.sendingToUS = !0)
                  : ((this.sendingToUS = !1), (this.hadUSError = !1)));
            } catch (s) {
              ((this.toParsed = ""), (this.hadUSError = !1));
            }
          },
          validText: function () {
            this.validText && this.hadTextError && (this.hadTextError = !1);
          },
          genSettings: function () {
            this.setDefaultFrom();
          },
          msgText: function () {
            var t = 0;
            ((t = this.isGsmCompliant(this.msgText) ? 765 : 335),
              (this.msgTextMax = t),
              this.msgText.length > this.msgTextMax &&
                (this.msgText = this.msgText.substring(0, this.msgTextMax)));
            var e = 0;
            ((e = this.isGsmCompliant(this.msgText)
              ? this.msgText.length > 160
                ? Math.ceil(this.msgText.length / 153)
                : 1
              : this.msgText.length > 70
                ? Math.ceil(this.msgText.length / 67)
                : 1),
              (this.unitsString = "Units: ".concat(e)));
          },
        },
      },
      ue = le,
      de = Object(M["a"])(ue, zt, Vt, !1, null, null, null),
      he = de.exports,
      me = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "base-modal fade in" }, [
          e("div", { staticClass: "modal-dialog instructions" }, [
            e("div", { staticClass: "modal-header" }, [
              e(
                "button",
                {
                  staticClass: "bootbox-close-button close",
                  attrs: { type: "button" },
                  on: { click: t.close },
                },
                [t._v("×")],
              ),
              e("h4", { staticClass: "modal-title" }, [
                t._v("SMS Setup Instructions"),
              ]),
            ]),
            e("div", { staticClass: "modal-body" }, [
              e("div", { staticClass: "bootbox-body" }, [
                t._m(0),
                t._m(1),
                e("div", { staticClass: "modal-body-footer" }, [
                  e(
                    "button",
                    {
                      staticClass: "btn blue",
                      attrs: { type: "button", role: "button" },
                      on: { click: t.close },
                    },
                    [t._v("\n            Okay\n          ")],
                  ),
                ]),
              ]),
            ]),
          ]),
          e("div", {
            staticClass: "modal-backdrop fade in",
            on: { click: t.close },
          }),
        ]);
      },
      pe = [
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "modal-lead" }, [
            e("p", [
              t._v(
                "\n            You can send SMS messages using two different methods:\n          ",
              ),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "tab-pane" }, [
            e("div", { staticClass: "content-block" }, [
              e("h5", [t._v("Send using Email to SMS")]),
              e("ol", [
                e("li", [t._v("Compose a new email.")]),
                e("li", [
                  t._v(
                    "Enter the SMS number as the recipient (including the country code), followed by @sms.smtp2go.com e.g. 15126436337@sms.smtp2go.com \n                ",
                  ),
                  e("br"),
                  t._v(
                    "e.g. when sending to the USA, include the country code 1 at the start.",
                  ),
                ]),
                e("li", [
                  t._v(
                    "Add the content of your message to the subject and/or body of the email.",
                  ),
                ]),
                e("li", [
                  t._v("Send the email "),
                  e("u", [t._v("using your SMTP2GO account.")]),
                  t._v(
                    " This is so we can be sure the email is coming from you.",
                  ),
                ]),
                e("li", [t._v("Get SMS replies in your email inbox!")]),
              ]),
            ]),
            e("div", { staticClass: "content-block" }, [
              e("h5", [t._v("Send using the API")]),
              e("p", [
                t._v(
                  "More advanced users may prefer sending SMS messages via our API. ",
                ),
                e("br"),
                e(
                  "a",
                  {
                    attrs: {
                      href: "https://developers.smtp2go.com/reference/send-sms",
                      target: "_blank",
                    },
                  },
                  [t._v("Details of our SMS API are available here.")],
                ),
              ]),
            ]),
          ]);
        },
      ],
      _e = {
        name: "instructions-modal",
        methods: {
          close: function () {
            this.$emit("childClose");
          },
        },
      },
      ge = _e,
      fe = (s("d31e"), Object(M["a"])(ge, me, pe, !1, null, "7273f4f6", null)),
      be = fe.exports,
      ve = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "all-filter-wrapper" }, [
          e("div", { staticClass: "btn-group" }, [
            e(
              "a",
              {
                staticClass: "btn btn-default btn-icon-left all-filter-btn",
                attrs: {
                  href: "javascript:void(0);",
                  id: "dropdown-options-toggler",
                },
                on: { click: t.mixinTriggerable_toggleOpened },
              },
              [
                e("i", { staticClass: "all-filter-icon" }),
                e("span", [t._v("Filters")]),
                e("i", { staticClass: "fa fa-angle-down" }),
              ],
            ),
            e(
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
                staticClass:
                  "dropdown-menu dropdown-options all-filter is-active mixinTriggerable_layer",
                attrs: { id: "all-filters" },
              },
              [
                t._m(0),
                e("PeriodFilter", { ref: "periodFilter" }),
                e("EventFilter", { ref: "eventFilter" }),
                e("SubaccountFilter", { ref: "subaccountFilter" }),
              ],
              1,
            ),
          ]),
        ]);
      },
      Se = [
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "all-filter-description" }, [
            e("p", [
              e("strong", [t._v("Filter results")]),
              e("br"),
              t._v("Refine scope of the results using the following criteria:"),
            ]),
          ]);
        },
      ],
      Ce = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "period" }, [
          e("div", { staticClass: "btn-group" }, [
            t.getSelectedPeriod()
              ? e(
                  "a",
                  {
                    staticClass: "btn btn-default btn-icon-left",
                    attrs: {
                      href: "javascript:void(0);",
                      id: "dropdown-options-toggler",
                    },
                    on: { click: t.mixinTriggerable_toggleOpened },
                  },
                  [
                    e("span", { staticClass: "icon-calendar-alt" }),
                    e(
                      "span",
                      {
                        staticClass: "mobile-title",
                        staticStyle: { display: "none" },
                      },
                      [t._v("Date range")],
                    ),
                    e("span", { staticClass: "mobile-hide" }, [
                      t._v(t._s(t.getSelectedPeriod().prefix)),
                    ]),
                    t._v(t._s(t.getSelectedPeriod().label)),
                    e("i", { staticClass: "fa fa-angle-down" }),
                  ],
                )
              : t._e(),
            e(
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
                  "dropdown-menu dropdown-options is-active mixinTriggerable_layer",
                attrs: { id: "period" },
              },
              [
                t._l(t.datesToDisplay, function (s) {
                  return e(
                    "li",
                    {
                      key: s.id,
                      class: { selected: s.checked },
                      attrs: { id: s.id },
                      on: {
                        click: function (e) {
                          return t.periodChanged(s);
                        },
                      },
                    },
                    [
                      e("label", { attrs: { for: s.id } }, [
                        e("input", {
                          staticClass: "period-radio",
                          attrs: { type: "radio", name: "daterange", id: s.id },
                          domProps: { checked: s.checked },
                        }),
                        t._v(
                          "\n                    " +
                            t._s(s.prefix) +
                            t._s(s.label) +
                            "\n                ",
                        ),
                      ]),
                      "between" === s.id
                        ? e("div", { staticClass: "date-range" }, [
                            e(
                              "div",
                              {
                                ref: "daterangeGroup",
                                refInFor: !0,
                                staticClass: "daterange-group",
                              },
                              [t._m(0, !0), t._m(1, !0)],
                            ),
                          ])
                        : t._e(),
                    ],
                  );
                }),
                e("li", { staticClass: "dropdown-options-footer" }, [
                  e(
                    "button",
                    {
                      staticClass: "btn btn-outlined",
                      attrs: {
                        type: "button",
                        "data-trigger-on-close": "true",
                      },
                      on: { click: t.applyChanges },
                    },
                    [t._v("Apply")],
                  ),
                ]),
              ],
              2,
            ),
          ]),
        ]);
      },
      Ee = [
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            {
              staticClass:
                "daterange-group__module daterange-group__module_custom",
            },
            [
              e("div", { staticClass: "daterange-group__from" }, [
                e("input", {
                  staticClass:
                    "daterange-group__base-input daterange-group__date-input",
                  attrs: { type: "text" },
                }),
                e("div", { staticClass: "daterange-group__time" }, [
                  e("div", { staticClass: "daterange-group__time-label" }, [
                    e("span", { staticClass: "daterange-group__time-icon" }),
                    e("span", { staticClass: "daterange-group__time-value" }, [
                      e("span", {
                        staticClass: "daterange-group__time-value-hours",
                      }),
                      t._v(":"),
                      e("span", {
                        staticClass: "daterange-group__time-value-minutes",
                      }),
                      t._v(" "),
                      e("span", {
                        staticClass: "daterange-group__time-value-period",
                      }),
                    ]),
                  ]),
                  e("div", { staticClass: "daterange-group__time-inputs" }, [
                    e("input", {
                      staticClass:
                        "daterange-group__base-input daterange-group__time-input daterange-group__time-input_hours",
                      attrs: { type: "text", pattern: "[0-9]" },
                    }),
                    e("input", {
                      staticClass:
                        "daterange-group__base-input daterange-group__time-input daterange-group__time-input_minutes",
                      attrs: { type: "text", pattern: "[0-9]" },
                    }),
                    e(
                      "div",
                      { staticClass: "daterange-group__time-select-wrapper" },
                      [
                        e(
                          "select",
                          {
                            staticClass:
                              "daterange-group__base-input daterange-group__time-input daterange-group__time-input_period daterange-group__time-select",
                          },
                          [
                            e("option", [t._v("AM")]),
                            e("option", [t._v("PM")]),
                          ],
                        ),
                      ],
                    ),
                  ]),
                ]),
              ]),
              e("div", { staticClass: "daterange-group__between" }, [
                e("span", [t._v("–")]),
              ]),
              e("div", { staticClass: "daterange-group__to" }, [
                e("input", {
                  staticClass:
                    "daterange-group__base-input daterange-group__date-input",
                  attrs: { type: "text" },
                }),
                e("div", { staticClass: "daterange-group__time" }, [
                  e("div", { staticClass: "daterange-group__time-label" }, [
                    e("span", { staticClass: "daterange-group__time-icon" }),
                    e("span", { staticClass: "daterange-group__time-value" }, [
                      e("span", {
                        staticClass: "daterange-group__time-value-hours",
                      }),
                      t._v(":"),
                      e("span", {
                        staticClass: "daterange-group__time-value-minutes",
                      }),
                      t._v(" "),
                      e("span", {
                        staticClass: "daterange-group__time-value-period",
                      }),
                    ]),
                  ]),
                  e("div", { staticClass: "daterange-group__time-inputs" }, [
                    e("input", {
                      staticClass:
                        "daterange-group__base-input daterange-group__time-input daterange-group__time-input_hours",
                      attrs: { type: "text", pattern: "[0-9]" },
                    }),
                    e("input", {
                      staticClass:
                        "daterange-group__base-input daterange-group__time-input daterange-group__time-input_minutes",
                      attrs: { type: "text", pattern: "[0-9]" },
                    }),
                    e(
                      "div",
                      { staticClass: "daterange-group__time-select-wrapper" },
                      [
                        e(
                          "select",
                          {
                            staticClass:
                              "daterange-group__base-input daterange-group__time-input daterange-group__time-input_period daterange-group__time-select",
                          },
                          [
                            e("option", [t._v("AM")]),
                            e("option", [t._v("PM")]),
                          ],
                        ),
                      ],
                    ),
                  ]),
                ]),
              ]),
              e(
                "button",
                {
                  staticClass: "daterange-group__time-button",
                  attrs: { type: "button" },
                },
                [t._v("Edit time of day")],
              ),
            ],
          );
        },
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            {
              staticClass:
                "daterange-group__module daterange-group__module_native",
            },
            [
              e("div", { staticClass: "daterange-group__from" }, [
                e("input", {
                  staticClass: "daterange-group__base-input",
                  attrs: { type: "date" },
                }),
                e("input", {
                  staticClass: "daterange-group__base-input",
                  attrs: { type: "time" },
                }),
              ]),
              e("div", { staticClass: "daterange-group__between" }, [
                e("span", [t._v("and")]),
              ]),
              e("div", { staticClass: "daterange-group__to" }, [
                e("input", {
                  staticClass: "daterange-group__base-input",
                  attrs: { type: "date" },
                }),
                e("input", {
                  staticClass: "daterange-group__base-input",
                  attrs: { type: "time" },
                }),
              ]),
            ],
          );
        },
      ],
      Te = {
        name: "PeriodFilter",
        mixins: [A, rt, S],
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
        created: function () {
          (this.mixinEventListener_register(
            Object(r["a"])({}, N.TRIGGERABLE_CLOSED, this.checkClosed),
          ),
            this.mixinEventListener_on());
        },
        destroyed: function () {
          this.mixinEventListener_off();
        },
        methods: {
          initPeriodFilter: function () {
            this.initialised = !0;
          },
          periodChanged: function (t) {
            var e = this;
            if (
              (this.$eventBus.$emit("mixin-search-has-changed"),
              this.datesToDisplay.forEach(function (t) {
                e.$set(t, "checked", "");
              }),
              this.$set(t, "checked", "checked"),
              "between" !== t.id)
            ) {
              var s = t.days,
                i = 0;
              (s > 0 && (i = c()().subtract(s, "days").toDate()),
                (this.startDate = i),
                (this.endDate = c()().toDate()));
            }
            ($("#period > li .radio span").removeClass("checked"),
              $("#period > li#" + t.id + " .radio span").addClass("checked"));
          },
          getSelectedPeriod: function () {
            var t = null;
            return (
              this.datesToDisplay.forEach(function (e) {
                e.checked && (t = e);
              }),
              t
            );
          },
          isDefaultSelected: function () {
            var t = !1;
            return (
              this.datesToDisplay.forEach(function (e) {
                "days30" === e.id && "checked" === e.checked && (t = !0);
              }),
              t
            );
          },
          resetSearch: function () {
            var t = this;
            this.datesToDisplay.forEach(function (e) {
              "days30" === e.id && t.periodChanged(e);
            });
          },
          getSelectedBetweenFrom: function () {
            return this.startDate;
          },
          getSelectedBetweenTo: function () {
            return this.endDate;
          },
          applyChanges: function () {
            (this.$eventBus.$emit("mixin-search-has-changed"),
              this.mixinTriggerable_forceClose(),
              this.$eventBus.$emit(u.CLOSE_ALL_FILTER));
          },
          checkClosed: function (t) {
            "PeriodFilter" == t && this.$eventBus.$emit("mixin-search-trigger");
          },
        },
        computed: {},
        watch: {
          startDate: function (t) {
            t > this.endDate && (this.endDate = t);
          },
          endDate: function (t) {
            t < this.startDate && (this.startDate = t);
          },
          mixinTriggerable_isOpen: function (t) {
            t ||
              this.$daterangeGroup.data("daterangeGroup").hideTimeIfUnchanged();
          },
        },
        mounted: function () {
          var t = this;
          (Daterange.init(),
            (this.$daterangeGroup = $(this.$refs.daterangeGroup[0])));
          var e = this.$daterangeGroup.data("daterangeGroup");
          ((this.startDate = c()()
            .subtract(this.betweenConf.start, "days")
            .startOf("day")),
            (this.endDate = c()()
              .subtract(this.betweenConf.end, "days")
              .endOf("day")),
            e.setMaxDate(this.endDate),
            e.setStartDate(this.startDate),
            e.setEndDate(this.endDate),
            this.$daterangeGroup.on("change.daterangeGroup", function () {
              ((t.startDate = e.getStartDate()),
                (t.endDate = e.getEndDate()),
                t.periodChanged(
                  t.datesToDisplay.find(function (t) {
                    return "between" === t.id;
                  }),
                ));
            }));
        },
      },
      ye = Te,
      we = Object(M["a"])(ye, Ce, Ee, !1, null, null, null),
      xe = we.exports,
      Ne = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "event indicator-bars" }, [
          e("div", { staticClass: "btn-group" }, [
            e(
              "a",
              {
                staticClass: "btn btn-default btn-icon-left",
                attrs: {
                  href: "javascript:void(0);",
                  id: "dropdown-options-toggler",
                },
                on: { click: t.mixinTriggerable_toggleOpened },
              },
              [
                e(
                  "span",
                  { staticClass: "icon-circles" },
                  [
                    t._l(t.eventsToDisplay, function (t) {
                      return [
                        e("span", {
                          key: t.id,
                          staticClass: "dot-circle",
                          class: [t.id, { hide: !t.active }],
                          style: { "--bgColor": t.color },
                        }),
                      ];
                    }),
                  ],
                  2,
                ),
                e("span", { staticClass: "desktop-title" }, [t._v("Filters")]),
                e(
                  "span",
                  {
                    staticClass: "mobile-title",
                    staticStyle: { display: "none" },
                  },
                  [t._v("Status")],
                ),
                e(
                  "span",
                  {
                    staticClass: "mobile-selected-label",
                    staticStyle: { display: "none" },
                  },
                  [t._v(t._s(t.selectedEventLabel))],
                ),
                e("i", { staticClass: "fa fa-angle-down" }),
              ],
            ),
            e(
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
                  "dropdown-menu dropdown-options event-filter is-active mixinTriggerable_layer mobile-status",
                attrs: { id: "filters" },
              },
              [
                t._m(0),
                e(
                  "li",
                  {
                    staticClass: "indicators-filter toggle-all",
                    on: { click: t.allEventsClick },
                  },
                  [
                    e("div", { staticClass: "event-indicator default" }, [
                      e("div", { staticClass: "checker" }, [
                        e(
                          "span",
                          {
                            staticClass: "checker-box",
                            class: t.allEventsCheckedStatus,
                          },
                          [e("input", { attrs: { type: "checkbox" } })],
                        ),
                      ]),
                      e("span", { staticClass: "indicator-copy toggle-copy" }, [
                        t._v(t._s(t.checkboxLabel)),
                      ]),
                    ]),
                  ],
                ),
                t._l(t.eventsToDisplay, function (s) {
                  return e(
                    "li",
                    {
                      key: s.id,
                      staticClass: "indicators-filter",
                      on: {
                        click: function (e) {
                          return (e.stopPropagation(), t.eventClick(s));
                        },
                      },
                    },
                    [
                      e(
                        "div",
                        { staticClass: "event-indicator", class: s.id },
                        [
                          e("div", { staticClass: "checker" }, [
                            e(
                              "span",
                              {
                                staticClass: "checker-box",
                                class: { checked: s.active },
                                style: s.active
                                  ? "background-color: " +
                                    s.color +
                                    "; border-color: " +
                                    s.color +
                                    ";"
                                  : "",
                              },
                              [e("input", { attrs: { type: "checkbox" } })],
                            ),
                          ]),
                          e("span", { staticClass: "indicator-copy" }, [
                            t._v(t._s(s.label)),
                          ]),
                        ],
                      ),
                    ],
                  );
                }),
                e("li", { staticClass: "dropdown-options-footer" }, [
                  e(
                    "button",
                    {
                      staticClass: "btn btn-outlined",
                      attrs: {
                        type: "button",
                        "data-trigger-on-close": "true",
                      },
                      on: {
                        click: function (e) {
                          return t.applyChanges();
                        },
                      },
                    },
                    [t._v("Apply")],
                  ),
                ]),
              ],
              2,
            ),
          ]),
        ]);
      },
      Ae = [
        function () {
          var t = this,
            e = t._self._c;
          return e("li", { staticClass: "event-filter-description" }, [
            e("p", [
              e("strong", [t._v("Filter by status")]),
              e("br"),
              t._v("Only show these statuses:"),
            ]),
          ]);
        },
      ],
      Oe = s("75fc"),
      Ie = {
        name: "EventFilter",
        mixins: [A, S, rt],
        data: function () {
          return { eventsToDisplay: this.$config.eventsToDisplay };
        },
        created: function () {
          (this.mixinEventListener_register(
            Object(r["a"])({}, N.TRIGGERABLE_CLOSED, this.checkClosed),
          ),
            this.mixinEventListener_on());
        },
        destroyed: function () {
          this.mixinEventListener_off();
        },
        methods: {
          allEventsClick: function () {
            this.$eventBus.$emit("mixin-search-has-changed");
            var t = "";
            (this.allEventsCheckedStatus || (t = "checked"),
              this.updateEventsCheckStatus(t));
          },
          eventClick: function (t) {
            (t.active ? this.$set(t, "active", !1) : this.$set(t, "active", !0),
              this.$eventBus.$emit("mixin-search-has-changed"));
          },
          updateEventsCheckStatus: function (t) {
            var e = this;
            this.eventsToDisplay.forEach(function (s) {
              e.$set(s, "active", t);
            });
          },
          getSelectedEvents: function () {
            var t = this.findSelectedEvents();
            return (
              0 === t.length &&
                (this.updateEventsCheckStatus(!0),
                (t = this.findSelectedEvents())),
              t
            );
          },
          findSelectedEvents: function () {
            var t = [];
            return (
              this.eventsToDisplay
                .filter(function (t) {
                  return t.active;
                })
                .forEach(function (e) {
                  t.push.apply(t, Object(Oe["a"])(e.apiCodes));
                }),
              t
            );
          },
          applyChanges: function () {
            (this.$eventBus.$emit("mixin-search-has-changed"),
              this.mixinTriggerable_forceClose(),
              this.$eventBus.$emit(u.CLOSE_ALL_FILTER));
          },
          checkClosed: function (t) {
            "EventFilter" == t && this.$eventBus.$emit("mixin-search-trigger");
          },
          isDefaultSelected: function () {
            return this.checkedEvents.length === this.eventsToDisplay.length;
          },
          resetSearch: function () {
            this.updateEventsCheckStatus(!0);
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
            return this.eventsToDisplay.filter(function (t) {
              return t.active;
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
      Me = Ie,
      ke = Object(M["a"])(Me, Ne, Ae, !1, null, null, null),
      De = ke.exports,
      je = function () {
        var t = this,
          e = t._self._c;
        return t.allItemsToDisplay.length > 1
          ? e("div", { staticClass: "event indicator-bars" }, [
              e("div", { staticClass: "btn-group" }, [
                e(
                  "a",
                  {
                    staticClass: "btn btn-default btn-icon-left",
                    attrs: {
                      href: "javascript:void(0);",
                      id: "dropdown-options-toggler",
                    },
                    on: { click: t.mixinTriggerable_toggleOpened },
                  },
                  [
                    e("span", { staticClass: "subaccount-icon" }),
                    e(
                      "span",
                      { staticClass: "desktop-title icon-user-count" },
                      [t._v(t._s(t.selectedItemLabel))],
                    ),
                    e(
                      "span",
                      {
                        staticClass: "mobile-title",
                        staticStyle: { display: "none" },
                      },
                      [t._v("Subaccount")],
                    ),
                    e(
                      "span",
                      {
                        staticClass: "mobile-selected-label",
                        staticStyle: { display: "none" },
                      },
                      [t._v(t._s(t.selectedItemLabel))],
                    ),
                    e("i", { staticClass: "fa fa-angle-down" }),
                  ],
                ),
                e(
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
                      "dropdown-menu dropdown-options event-filter is-active mixinTriggerable_layer",
                    attrs: { id: "filters" },
                  },
                  [
                    t._m(0),
                    e("li", { staticClass: "list-item-bleed" }, [
                      e("span", { staticClass: "icon-search-dark" }),
                      e("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: t.searchQuery,
                            expression: "searchQuery",
                          },
                        ],
                        attrs: {
                          autocomplete: "off",
                          autocorrect: "off",
                          autocapitalize: "none",
                          spellcheck: "false",
                          type: "text",
                          id: "search-subaccounts",
                          name: "search-subaccounts",
                          placeholder: "Search for subaccount",
                        },
                        domProps: { value: t.searchQuery },
                        on: {
                          input: [
                            function (e) {
                              e.target.composing ||
                                (t.searchQuery = e.target.value);
                            },
                            function (e) {
                              return t.searchSubaccounts(e.target.value);
                            },
                          ],
                        },
                      }),
                    ]),
                    0 == t.filteredItems.length
                      ? e("li", [
                          e(
                            "span",
                            {
                              staticClass: "indicator-copy toggle-copy",
                              staticStyle: {
                                padding: "10px 0px",
                                "margin-left": "28px",
                              },
                            },
                            [t._v("No matching subaccounts")],
                          ),
                        ])
                      : t._e(),
                    t.filteredItems.length > 1
                      ? e(
                          "li",
                          {
                            staticClass: "indicators-filter toggle-all",
                            on: { click: t.allItemsClick },
                          },
                          [
                            e(
                              "div",
                              { staticClass: "event-indicator default" },
                              [
                                e("div", { staticClass: "checker" }, [
                                  e(
                                    "span",
                                    {
                                      staticClass: "checker-box",
                                      class: t.allItemsCheckedStatus,
                                    },
                                    [
                                      e("input", {
                                        attrs: { type: "checkbox" },
                                      }),
                                    ],
                                  ),
                                ]),
                                e(
                                  "span",
                                  { staticClass: "indicator-copy toggle-copy" },
                                  [t._v(t._s(t.checkboxLabel))],
                                ),
                              ],
                            ),
                          ],
                        )
                      : t._e(),
                    t.filteredItems.length > 0
                      ? e(
                          "ul",
                          {
                            staticClass: "dropdown-sublist",
                            staticStyle: { "max-height": "196px" },
                          },
                          t._l(t.filteredItems, function (s) {
                            return e(
                              "li",
                              {
                                key: s.value,
                                staticClass: "indicators-filter",
                                on: {
                                  click: function (e) {
                                    return (
                                      e.stopPropagation(),
                                      t.itemClick(s)
                                    );
                                  },
                                },
                              },
                              [
                                e(
                                  "div",
                                  {
                                    staticClass: "event-indicator",
                                    class: s.value,
                                  },
                                  [
                                    e("div", { staticClass: "checker" }, [
                                      e(
                                        "span",
                                        {
                                          staticClass: "checker-box",
                                          class: { checked: s.active },
                                        },
                                        [
                                          e("input", {
                                            attrs: { type: "checkbox" },
                                          }),
                                        ],
                                      ),
                                    ]),
                                    "Master Account" == s.label
                                      ? e(
                                          "span",
                                          { staticClass: "indicator-copy" },
                                          [e("em", [t._v(t._s(s.label))])],
                                        )
                                      : e(
                                          "span",
                                          { staticClass: "indicator-copy" },
                                          [t._v(t._s(s.label))],
                                        ),
                                  ],
                                ),
                              ],
                            );
                          }),
                          0,
                        )
                      : t._e(),
                    e("li", { staticClass: "dropdown-options-footer" }, [
                      e(
                        "button",
                        {
                          staticClass: "btn btn-outlined",
                          attrs: {
                            type: "button",
                            "data-trigger-on-close": "true",
                          },
                          on: {
                            click: function (e) {
                              return t.applyChanges();
                            },
                          },
                        },
                        [t._v("\n          Apply\n        ")],
                      ),
                    ]),
                  ],
                ),
              ]),
            ])
          : t._e();
      },
      Re = [
        function () {
          var t = this,
            e = t._self._c;
          return e("li", { staticClass: "subaccount-filter-description" }, [
            e("p", [
              e("strong", [t._v("Filter by Subaccount")]),
              e("br"),
              t._v("Only show these\n          subaccounts:\n        "),
            ]),
          ]);
        },
      ],
      Be =
        (s("55dd"),
        {
          name: "SubaccountFilter",
          mixins: [A, S, rt],
          data: function () {
            var t = [];
            if (PAGE_DATA.is_master) {
              var e = {
                  label: "Master Account",
                  value: PAGE_DATA ? PAGE_DATA.user_data.accountID : 0,
                  active: !0,
                },
                s = [];
              PAGE_DATA &&
                PAGE_DATA.user_data &&
                Array.isArray(PAGE_DATA.user_data.subaccounts) &&
                (s = PAGE_DATA.user_data.subaccounts.filter(function (t) {
                  return !t.sms_disabled_by_master;
                }));
              var i = s.map(function (t) {
                return { label: t.name, value: t.record_id, active: !0 };
              });
              ((i = i.sort(function (t, e) {
                return t.label.localeCompare(e.label);
              })),
                (t = [e].concat(i)));
            }
            return { allItemsToDisplay: t, searchQuery: "", matchedItems: t };
          },
          created: function () {
            (this.mixinEventListener_register(
              Object(r["a"])({}, N.TRIGGERABLE_CLOSED, this.checkClosed),
            ),
              this.mixinEventListener_on());
          },
          destroyed: function () {
            this.mixinEventListener_off();
          },
          methods: {
            allItemsClick: function () {
              this.$eventBus.$emit("mixin-search-has-changed");
              var t = "";
              (this.allItemsCheckedStatus || (t = "checked"),
                this.updateItemsCheckStatus(t));
            },
            itemClick: function (t) {
              (t.active
                ? this.$set(t, "active", !1)
                : this.$set(t, "active", !0),
                this.$eventBus.$emit("mixin-search-has-changed"));
            },
            updateItemsCheckStatus: function (t) {
              var e = this;
              this.allItemsToDisplay.forEach(function (s) {
                e.$set(s, "active", t);
              });
            },
            getSelectedItems: function () {
              var t = this.findSelectedItems();
              return (
                0 === t.length &&
                  (this.updateItemsCheckStatus(!0),
                  (t = this.findSelectedItems())),
                t
              );
            },
            findSelectedItems: function () {
              var t = [];
              return (
                this.filteredItems
                  .filter(function (t) {
                    return t.active;
                  })
                  .forEach(function (e) {
                    t.push(e.value);
                  }),
                t
              );
            },
            applyChanges: function () {
              (this.$eventBus.$emit("mixin-search-has-changed"),
                this.mixinTriggerable_forceClose(),
                this.$eventBus.$emit("close-all-filter"));
            },
            checkClosed: function (t) {
              "SubaccountFilter" == t &&
                this.$eventBus.$emit("mixin-search-trigger");
            },
            isDefaultSelected: function () {
              return this.checkedItems.length === this.allItemsToDisplay.length;
            },
            resetSearch: function () {
              this.updateItemsCheckStatus(!0);
            },
            searchSubaccounts: function (t) {
              if (((this.searchQuery = t.toLowerCase()), this.searchQuery)) {
                var e = new RegExp("(" + this.searchQuery + ")", "gi");
                this.matchedItems = this.allItemsToDisplay.filter(function (t) {
                  return e.test(t.label.toLowerCase());
                });
              } else this.matchedItems = this.allItemsToDisplay;
            },
          },
          computed: {
            checkboxLabel: function () {
              return this.checkedItems.length ===
                this.allItemsToDisplay.length || this.checkedItems.length > 0
                ? "Deselect All"
                : "Select All";
            },
            checkedItems: function () {
              return this.filteredItems.filter(function (t) {
                return t.active;
              });
            },
            allItemsCheckedStatus: function () {
              return this.checkedItems.length === this.allItemsToDisplay.length
                ? "checked"
                : this.checkedItems.length > 0
                  ? "indeterminate"
                  : "";
            },
            selectedItemLabel: function () {
              return this.checkedItems.length >= 1 &&
                this.checkedItems.length < this.allItemsToDisplay.length
                ? this.checkedItems.length
                : "";
            },
            filteredItems: function () {
              return this.searchQuery
                ? this.matchedItems
                : this.allItemsToDisplay;
            },
          },
        }),
      Ue = Be,
      Pe = (s("5956"), Object(M["a"])(Ue, je, Re, !1, null, "6766291e", null)),
      $e = Pe.exports,
      Ge = {
        name: "AllFilter",
        mixins: [A, S],
        components: { PeriodFilter: xe, EventFilter: De, SubaccountFilter: $e },
        data: function () {
          return { eventsToDisplay: this.$config.eventsToDisplay };
        },
        created: function () {
          (this.mixinEventListener_register(
            Object(r["a"])({}, u.CLOSE_ALL_FILTER, this.closeAllFilters),
          ),
            this.mixinEventListener_on());
        },
        destroyed: function () {
          this.mixinEventListener_off();
        },
        methods: {
          closeAllFilters: function () {
            this.mixinTriggerable_forceClose();
          },
        },
      },
      Le = Ge,
      Fe = Object(M["a"])(Le, ve, Se, !1, null, null, null),
      He = Fe.exports,
      qe = function () {
        var t = this,
          e = t._self._c;
        return e(
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
            staticClass: "drop-content top-pull right",
          },
          [
            e(
              "button",
              {
                staticClass: "export button-download button button-secondary",
                attrs: { type: "button", role: "button" },
                on: { click: t.mixinTriggerable_toggleOpened },
              },
              [t._v("\n    Export\n  ")],
            ),
            e(
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
                  "dropdown-menu dropdown-options is-active mixinTriggerable_layer",
                attrs: { id: "dropdown-download" },
              },
              [
                t._l(t.downloadOptions, function (s) {
                  return e("li", { key: s.id }, [
                    e(
                      "a",
                      {
                        attrs: {
                          id: "export-link",
                          href: "javascript:void(0);",
                        },
                        on: {
                          click: function (e) {
                            return t.downloadFile(e, s.id);
                          },
                        },
                      },
                      [t._v("\n        " + t._s(s.label) + "\n      ")],
                    ),
                  ]);
                }),
                t._m(0),
                t._l(t.columnFilters, function (s) {
                  return e(
                    "li",
                    {
                      key: s.id,
                      staticClass: "columns-filter desktop-hide",
                      on: {
                        click: function (e) {
                          return t.handleColumnToggle(e, s);
                        },
                      },
                    },
                    [
                      e("div", { staticClass: "column-indicator" }, [
                        e("div", { staticClass: "checker" }, [
                          e(
                            "span",
                            {
                              staticClass: "checker-box",
                              class: { checked: t.shownColumns[s.id] },
                            },
                            [e("input", { attrs: { type: "checkbox" } })],
                          ),
                        ]),
                        e("span", { staticClass: "column-indicator-copy" }, [
                          t._v(t._s(s.label)),
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
      ze = [
        function () {
          var t = this,
            e = t._self._c;
          return e("li", { staticClass: "desktop-hide optional-rows" }, [
            e("strong", [t._v("Optional rows:")]),
          ]);
        },
      ],
      Ve = {
        name: "ExportButton",
        mixins: [f, A],
        data: function () {
          return {
            downloadOptions: this.$config.downloadOptions,
            shownColumns: {},
            displayColumns: this.$config.displayColumns,
            columnIsSaving: !1,
            initialised: !1,
            requestPoint: this.$config.requestPoint,
            context: "sent",
          };
        },
        methods: {
          initExportButton: function (t, e) {
            var s = this;
            ((this.initialised = !0),
              (this.context = e),
              (this.displayColumns = this.$config.displayColumns),
              "summary" == e &&
                (this.displayColumns = this.$config.displaySummaryColumns),
              this.displayColumns.forEach(function (e) {
                var i = "show_sms_" + e["id"] + "_col";
                (void 0 != t &&
                  "app_settings" in t &&
                  i in t.app_settings &&
                  s.$set(e, "active", t.app_settings[i]),
                  s.$set(s.shownColumns, e["id"], e["active"]));
              }));
          },
          handleColumnToggle: function (t, e) {
            void 0 !== t && t.stopImmediatePropagation();
            var s = this.shownColumns[e.id];
            (this.$set(this.shownColumns, e.id, !s),
              this.$set(e, "active", !s),
              this.$eventBus.$emit("mixin-column-has-changed"),
              this.saveColumn());
          },
          saveColumn: function () {
            var t = this;
            this.columnIsSaving = !0;
            var e = !0,
              s = {
                shown_columns: JSON.stringify(this.shownColumns),
                table: this.context,
              };
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
          downloadFile: function (t, e) {
            (m()(".notice.main.error").empty().removeClass("visible"),
              this.$eventBus.$emit("mixin-download-file-triggered", e),
              this.mixinTriggerable_forceClose());
          },
        },
        computed: {
          shouldShow: function () {
            return (
              !!this.initialised || 0 === this.$store.state.runningAjaxRequests
            );
          },
          columnFilters: function () {
            return this.displayColumns.filter(function (t) {
              return t.filterable;
            });
          },
        },
      },
      Je = Ve,
      Ye = Object(M["a"])(Je, qe, ze, !1, null, null, null),
      We = Ye.exports;
    function Qe() {
      for (
        var t = document.getElementsByClassName("message-full-tooltip"), e = 0;
        e < t.length;
        e++
      ) {
        var s = t[e];
        Xe(s);
      }
    }
    function Xe(t) {
      var e = !1;
      (t.addEventListener("mousedown", function () {
        e = !0;
      }),
        t.addEventListener("mouseup", function () {
          if (e) {
            e = !1;
            var s = window.getSelection(),
              i = s.toString().trim();
            if (s.containsNode(t, !0) && !i) {
              var n = t.childNodes[0].textContent;
              navigator.clipboard.writeText(n).then(function () {
                (t.classList.add("highlight"),
                  setTimeout(function () {
                    t.classList.remove("highlight");
                  }, 2e3));
              });
            }
          }
        }));
    }
    function Ke() {
      Qe();
    }
    var Ze = function () {
        var t = this,
          e = t._self._c;
        return e(
          "tr",
          { class: { "row-load-more": !t.isLoading, loading: t.isLoading } },
          [
            e(
              "td",
              {
                staticClass: "load-more load-centered",
                attrs: { colspan: "100%" },
              },
              [
                t.isLoading
                  ? e("div", { staticClass: "loading-spinner" }, [
                      e("div", { staticClass: "loader" }),
                    ])
                  : e(
                      "button",
                      {
                        staticClass: "btn btn-outlined btn-sm",
                        attrs: { type: "button" },
                        on: {
                          click: function (e) {
                            return (
                              e.stopPropagation(),
                              t.handleLoadMoreClick.apply(null, arguments)
                            );
                          },
                        },
                      },
                      [t._v("Load More Results")],
                    ),
              ],
            ),
          ],
        );
      },
      ts = [],
      es = {
        name: "LoadMore",
        props: { isLoading: { type: Boolean, required: !0 } },
        methods: {
          handleLoadMoreClick: function () {
            this.$emit("load-more-clicked");
          },
        },
      },
      ss = es,
      is = (s("cf0b"), Object(M["a"])(ss, Ze, ts, !1, null, "452c2f15", null)),
      ns = is.exports;
    function as(t, e) {
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
    function rs(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? as(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : as(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var os = {
        name: "SMSSentTable",
        props: { clientPermissions: Boolean },
        mixins: [f, rt, A, S],
        components: {
          SearchBox: D,
          SmsToolbox: qt,
          SMSSendModal: he,
          SmsInstructionsModal: be,
          AllFilter: He,
          ExportButton: We,
          TableLoadMore: ns,
        },
        data: function () {
          return {
            requestPoint: this.$config.requestPoint,
            displayColumns: this.$config.displayColumns,
            statusCodes: this.$config.statusCodes,
            columnIsSaving: !1,
            shownColumns: {},
            showBlankTable: !1,
            messages: [],
            lastUid: 0,
            isLoading: !1,
            clearTableOnResults: !1,
            datestamp_format: Object,
            clientTimezone: null,
            initRequest: !1,
            refreshing: !1,
            firstLoad: !0,
            polling: null,
            isDefaultSearch: !0,
            hasSent: !1,
            phoneUtil: R.a.PhoneNumberUtil.getInstance(),
            PNF: R.a.PhoneNumberFormat,
            quota: "-",
            sentThisMonth: "-",
            markJSInstance: new nt.a(".mark-sent-search"),
            searchTerm: null,
            showInstructions: !1,
            activeSearchCount: 0,
            isOverflowed: {},
            initialLoadingComplete: !1,
            datestyle_display: "",
            needsUpgrade: !1,
            prepayActive: !1,
            prepayBalance: 0,
            prepayBalanceDisplay: "--",
          };
        },
        created: function () {
          (this.mixinEventListener_register(
            Object(r["a"])(
              Object(r["a"])(
                Object(r["a"])(
                  {},
                  u.SMSTBOX_RESEND_CLICKED,
                  this.resendMessage,
                ),
                u.SMSTBOX_FORWARD_CLICKED,
                this.forwardMessage,
              ),
              u.CLEAR_POLLING,
              this.clearPolling,
            ),
          ),
            this.mixinEventListener_on());
        },
        mounted: function () {
          (this.checkOverflow(),
            window.addEventListener("resize", this.checkOverflow),
            Ke());
        },
        updated: function () {
          (Ke(), this.checkOverflow());
        },
        destroyed: function () {
          (window.removeEventListener("resize", this.checkOverflow),
            this.mixinEventListener_off());
        },
        methods: rs(
          rs(
            {},
            Object(d["c"])({ setLoading: dt.mutations.SET_SHOW_SENT_LOADING }),
          ),
          {},
          {
            init: function (t, e, s) {
              var i = this;
              ((this.needsUpgrade = s),
                void 0 != e &&
                  "app_settings" in e &&
                  "sms_has_sent" in e.app_settings &&
                  (this.hasSent = e.app_settings["sms_has_sent"]),
                (this.prepayActive = e.app_settings["prepay_is_active"]),
                console.log(e.app_settings["sms_prepay_balance"]),
                (this.prepayBalance = parseFloat(
                  e.app_settings["sms_prepay_balance"],
                )),
                (this.prepayBalanceDisplay = this.prepayBalance.toFixed(2)),
                console.log(this.prepayBalanceDisplay),
                this.setHasSentZeroClass(!this.hasSent),
                (this.clientTimezone = t),
                (void 0 !== t && null !== t && "" !== t) ||
                  (this.clientTimezone = c.a.tz.guess()),
                this.$refs.exportButton.initExportButton(e, "sent"),
                this.$config.displayColumns.forEach(function (t) {
                  var s = "show_sms_" + t["id"] + "_col";
                  (void 0 != e &&
                    "app_settings" in e &&
                    s in e.app_settings &&
                    i.$set(t, "active", e.app_settings[s]),
                    i.$set(i.shownColumns, t["id"], t["active"]));
                }),
                (this.datestyle_display = e.app_settings.datestyle_display),
                this.getBillingSummary());
            },
            emitQuotaChanges: function () {
              this.$eventBus.$emit(
                "update-quota-sentThisMonth",
                parseInt(this.quota[0], 10),
                parseInt(this.sentThisMonth.replace(/\D/g, ""), 10),
              );
            },
            isToday: function (t) {
              var e = c()().startOf("day"),
                s = c()(t);
              return s.isSame(e, "day");
            },
            highlightSearchTerm: function () {
              (this.markJSInstance.unmark(),
                this.searchTerm && this.markJSInstance.mark(this.searchTerm));
            },
            instructionsClose: function () {
              this.showInstructions = !1;
            },
            switchTo: function () {
              (this.checkOverflow(),
                this.$eventBus.$emit("mixin-search-trigger"));
            },
            clearPolling: function () {
              clearInterval(this.polling);
            },
            buildSearchPayload: function () {
              this.searchTerm = this.$refs.searchBox.getMainSearch();
              var t = {},
                e = this.$refs.allFilter.$refs.periodFilter.getSelectedPeriod();
              if ("between" !== e.id)
                ((t.start = c.a.utc().subtract(e.days, "days").unix()),
                  (t.end = c.a.utc().unix()));
              else {
                var s =
                    this.$refs.allFilter.$refs.periodFilter.getSelectedBetweenFrom(),
                  i =
                    this.$refs.allFilter.$refs.periodFilter.getSelectedBetweenTo();
                t = this.getUnixSecsRangeBetweenDates(
                  s,
                  i,
                  this.clientTimezone,
                );
              }
              var n = {
                client_timezone: this.clientTimezone,
                unix_secs_start: t.start,
                unix_secs_end: t.end,
                keyword: this.$refs.searchBox.getMainSearch(),
                row_limit: 100,
                last_uid: this.lastUid,
                search_term: this.$refs.searchBox.getMainSearch(),
                shown_records: this.messages.length,
                shown_columns: JSON.stringify(this.shownColumns),
                statuses:
                  this.$refs.allFilter.$refs.eventFilter.getSelectedEvents(),
                subaccounts: this.$refs.allFilter.$refs.subaccountFilter
                  ? this.$refs.allFilter.$refs.subaccountFilter.getSelectedItems()
                  : [],
                continue_token: "",
                file_type: this.fileType,
                export_type: "sent",
              };
              return ((this.loadMoreSearchPayload = n), n);
            },
            performSMSSearch: function (t, e, s) {
              var i = this;
              (t ? this.setLoading(!0) : this.setLoading(!1),
                (this.fullPageLoad = !1),
                (this.initRequest = t),
                s ||
                  (this.activeSearchCount++,
                  e
                    ? (this.isLoading = !0)
                    : ((this.clearTableOnResults = !0),
                      window.scroll({ top: 0, left: 0, behavior: "smooth" }),
                      (this.fullPageLoad = !0),
                      (this.lastUid = 0),
                      this.setLoading(!0))),
                this.mixinAjax_get(
                  this.requestPoint,
                  "",
                  this.buildSearchPayload(),
                  function (t) {
                    ((i.isLoading = !1),
                      s || i.activeSearchCount--,
                      (i.datestamp_format =
                        t.responseJSON.results.datestamp_format),
                      i.clearTableOnResults &&
                        ((i.messages = []), (i.clearTableOnResults = !1)),
                      t.responseJSON.results.messages.forEach(function (t) {
                        var e = i.convertToLocal(t["delivered_timestamp"]),
                          s = "DD/MM/YYYY";
                        ("mdy" == i.datestyle_display
                          ? (s = "MM/DD/YYYY")
                          : "ymd" == i.datestyle_display && (s = "YYYY/MM/DD"),
                          (t["date_display"] = {
                            date: e.format(s),
                            time: e.format("h:mm:ss A"),
                          }),
                          t.content &&
                            t.content.length > 500 &&
                            (t.content = t.content.substring(0, 500) + "..."),
                          (!t.units || (t.units && 0 == t.units)) &&
                            (t.units = "-"),
                          i.messages.push(t));
                      }),
                      0 == i.messages.length
                        ? (i.setIsDefaultSearch(),
                          (i.showBlankTable = !0),
                          i.setHasSentZeroClass(!0))
                        : ((i.showBlankTable = !1), i.setHasSentZeroClass(!1)),
                      0 == i.activeSearchCount && i.setLoading(!1),
                      0 != i.messages.length &&
                        (i.lastUid = i.messages.reduce(function (t, e) {
                          return e.message_sequence < t
                            ? e.message_sequence
                            : t;
                        }, i.messages[0].message_sequence)),
                      i.highlightSearchTerm(),
                      (i.initialLoadingComplete = !0));
                  },
                  function (t) {
                    ((i.isLoading = !1),
                      s ||
                        (i.activeSearchCount--,
                        (i.messages = []),
                        HTML.handleError(t.responseJSON),
                        0 == i.activeSearchCount && i.setLoading(!1)));
                  },
                  !0,
                ));
            },
            reloadSummaryText: function () {
              var t = this.quota
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                  .fontcolor("#555753")
                  .bold(),
                e = this.sentThisMonth.fontcolor("#555753").bold();
              ("10" ==
              this.quota.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                ? (document.getElementById("limitText").innerHTML =
                    "Your current SMS send limit is " +
                    t +
                    " per month, until your account is fully activated (" +
                    e +
                    " sent this calendar month).")
                : (document.getElementById("limitText").innerHTML =
                    "Your current SMS send limit is " +
                    t +
                    " per month (" +
                    e +
                    " sent this calendar month). Contact us if you need to increase this limit."),
                this.emitQuotaChanges());
            },
            getBillingSummary: function () {
              var t = this,
                e = { unix_secs_start: 0, unix_secs_end: 0 };
              this.mixinAjax_get(
                this.requestPoint,
                "billing-summary",
                e,
                function (e) {
                  ((t.billingSummary = e.responseJSON.results.summary),
                    t.getQuotaSummary());
                },
                function (t) {
                  HTML.handleError(t.responseJSON);
                },
                !0,
              );
            },
            getQuotaSummary: function () {
              var t = this;
              this.mixinAjax_get(
                this.requestPoint,
                "check-remaining-quota",
                null,
                function (e) {
                  ((t.quota = e.responseJSON.results.quotaSummary.total_quota),
                    (t.sentThisMonth = (
                      e.responseJSON.results.quotaSummary.total_quota -
                      e.responseJSON.results.quotaSummary.remaining_quota
                    )
                      .toString()
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")),
                    t.reloadSummaryText());
                },
                function (t) {
                  HTML.handleError(t.responseJSON);
                },
                !0,
              );
            },
            sendTestMessage: function () {
              var t = "test";
              this.$refs.sendModal.init(t, null);
            },
            resendMessage: function (t) {
              var e = "resend",
                s = t;
              this.$refs.sendModal.init(e, s);
            },
            forwardMessage: function (t) {
              var e = "forward",
                s = t;
              this.$refs.sendModal.init(e, s);
            },
            handleColumnToggle: function (t, e) {
              void 0 !== t && t.stopImmediatePropagation();
              var s = this.shownColumns[e.id];
              (this.$set(this.shownColumns, e.id, !s),
                this.$set(e, "active", !s),
                this.$eventBus.$emit("mixin-column-has-changed"),
                this.saveColumn());
            },
            isColumnActive: function (t) {
              var e = !1;
              return (
                this.activeColumns.forEach(function (s) {
                  s.id == t && (e = !0);
                }),
                e
              );
            },
            saveColumn: function () {
              var t = this;
              this.columnIsSaving = !0;
              var e = !0,
                s = { shown_columns: JSON.stringify(this.shownColumns) };
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
            setHasSentZeroClass: function (t) {
              var e = $(".page-container");
              t
                ? e.addClass("sent-visible-0")
                : e.removeClass("sent-visible-0");
            },
            performDownloadFile: function (t) {
              ((this.fileType = t),
                this.mixinAjax_put(
                  this.requestPoint,
                  "download-file",
                  this.buildSearchPayload(),
                  function (t) {
                    (HTML.set_time(t.responseJSON),
                      window.location.replace(
                        t.responseJSON.results.stream_url,
                      ));
                  },
                  function (t) {
                    HTML.handleError(t.responseJSON);
                  },
                ));
            },
            getSourceAddress: function (t) {
              return "shared" == t.source_address
                ? "Shared Pool"
                : t.source_address
                  ? this.getDisplayPhone(t.source_address)
                  : t.metadata &&
                      t.metadata.sender &&
                      "shared" != t.metadata.sender
                    ? this.getDisplayPhone(t.metadata.sender)
                    : "Shared Pool";
            },
            getDisplayPhone: function (t) {
              var e = t;
              try {
                var s = this.phoneUtil.parse(t);
                e = this.phoneUtil.format(s, this.PNF.INTERNATIONAL);
              } catch (i) {
                e = t;
              }
              return e;
            },
            getDisplayStatusCode: function (t) {
              return t in this.statusCodes ? this.statusCodes[t] : t;
            },
            categoriseStatus: function (t) {
              t = t.toUpperCase();
              var e = "Unknown";
              return (
                this.$config.eventsToDisplay.forEach(function (s) {
                  s.apiCodes.includes(t) && (e = s.label);
                }),
                e
              );
            },
            findStatusTitle: function (t) {
              t.status = t.status.toUpperCase();
              var e = "Unknown";
              return (
                this.$config.eventsToDisplay.forEach(function (s) {
                  (s.apiCodes.includes(t.status) && (e = s.label),
                    "SENDING-FAILURE" == t.status &&
                      (e =
                        1 == t.failure_reason
                          ? "There has been an unknown technical error. Please contact the SMTP2Go support team."
                          : 2 == t.failure_reason
                            ? "Account not authorized to send. Only authorized accounts on a paid plan are allowed to access SMS functionality. Make sure you have an authorized account on a paid plan."
                            : 3 == t.failure_reason
                              ? "Your message content is empty."
                              : 4 == t.failure_reason
                                ? "Destination number not valid. Please check that you entered the destination numbers correctly. Enter the SMS number as the recipient, followed by @sms.smtp2go.com, e.g. 15126436337@sms.smtp2go.com or +15126436337@sms.smtp2go.com."
                                : 5 == t.failure_reason
                                  ? "Account not authorized to send. Only authorized accounts on a paid plan are allowed to access SMS functionality. Make sure you have an authorized account on a paid plan."
                                  : 6 == t.failure_reason
                                    ? "You don't have a valid SMS account. Your account may have been suspended. Please contact the SMTP2GO support team if you think this is an error."
                                    : 7 == t.failure_reason
                                      ? "You have exceeded your monthly SMS sending limit: Please contact the SMTP2GO support team to increase this limit."
                                      : 8 == t.failure_reason
                                        ? "Your message was rejected by the network. Ensure the recipient number is valid and that you are adhering to content guidelines. If sending to the USA or Canada, ensure you have a dedicated USA number in your account and it has been approved."
                                        : 9 == t.failure_reason
                                          ? "Your message has exceeded the maximum number of characters allowed. Please review the maximum limit by logging into your account: Sending > SMS Messaging > Settings > Email-to-SMS > Change Settings."
                                          : 10 == t.failure_reason
                                            ? "Your message has exceeded your prepay balance. Please top up your account: Sending > SMS Messaging > Settings > Top Up."
                                            : "There has been an unknown technical error. Please contact the SMTP2Go support team."));
                }),
                e
              );
            },
            determineStatusColor: function (t) {
              t = t.toUpperCase();
              var e = "#707be8";
              return (
                this.$config.eventsToDisplay.forEach(function (s) {
                  s.apiCodes.includes(t) && (e = s.color);
                }),
                e
              );
            },
            convertToLocal: function (t) {
              var e = c()(t, c.a.ISO_8601),
                s = this.clientTimezone || c.a.tz.guess();
              return e.tz(s);
            },
            formatLocalizedTimestamp: function (t) {
              var e = t.format("ddd"),
                s = t.format("MMM"),
                i = t.format("Do"),
                n = t.format("YYYY"),
                a = t.format("h:mm:ss A"),
                r = t.format("z"),
                o = e + ", " + s + " " + i + ", " + n + " at " + a + " " + r;
              return o;
            },
            convertTS: function (t) {
              var e = {
                  hideDate: !1,
                  boldTime: !1,
                  title: "",
                  date: "",
                  time: "",
                },
                s = c()(t).tz(this.clientTimezone),
                i = s.format(this.datestamp_format),
                n =
                  s.format("ddd, MMM Do, YYYY") +
                  " at " +
                  s.format("h:mm:ss A zz");
              ((e.title = n),
                (e.date = i.slice(0, i.indexOf(" "))),
                (e.time = i.slice(i.indexOf(" ") + 1)));
              var a = c()().tz(this.clientTimezone).startOf("day");
              return (
                c()().tz(this.clientTimezone).format("HH") <= 12 &&
                  (a = a.subtract(12, "h")),
                s.valueOf() > a.valueOf() &&
                  ((e.hideDate = !0), (e.boldTime = !0)),
                e
              );
            },
            resetSearch: function () {
              (this.$refs.searchBox.resetSearch(),
                this.$refs.allFilter.$refs.eventFilter.resetSearch(),
                this.$refs.allFilter.$refs.periodFilter.resetSearch(),
                this.$eventBus.$emit("mixin-search-has-changed"),
                this.$eventBus.$emit("mixin-search-trigger"));
            },
            setIsDefaultSearch: function () {
              this.isDefaultSearch =
                "" === this.$refs.searchBox.getMainSearch() &&
                this.$refs.allFilter.$refs.eventFilter.isDefaultSelected() &&
                this.$refs.allFilter.$refs.periodFilter.isDefaultSelected();
            },
            getStatus: function (t) {
              var e = {
                id: "unknown",
                label: "Unknown",
                color: "#707be8",
                apiCodes: [],
                statusCodes: [],
              };
              return (
                this.$config.eventsToDisplay.forEach(function (s) {
                  s.statusCodes.includes(t) && (e = s);
                }),
                e
              );
            },
            checkOverflow: function () {
              var t = this;
              this.$nextTick(function () {
                t.messages.forEach(function (e) {
                  var s = t.$refs["msgContainer" + e.message_sequence],
                    i = t.$refs["msgText" + e.message_sequence];
                  if (s && s[0] && i && i[0]) {
                    var n = s[0].offsetWidth,
                      a = i[0].scrollWidth;
                    t.$set(t.isOverflowed, e.message_sequence, a > n);
                  }
                });
              });
            },
            showCanadaTooltip: function (t) {
              var e = !1;
              if (
                "331" === t.status_code &&
                "CA" === t.destination_address_country &&
                "shared" !== t.metadata.sender
              ) {
                var s = !1;
                (this.numbers.forEach(function (i) {
                  i.number.phone_number === t.metadata.sender &&
                    ((s = !0),
                    "VERIFIED" !== i.verification_status && (e = !0));
                }),
                  s || (e = !0));
              }
              return e;
            },
            goToTopup: function () {
              window.location.href = "/sending/sms_settings/#topup";
            },
          },
        ),
        computed: rs(
          rs(
            {},
            Object(d["b"])({
              numbersInitialised: kt.getters.GET_IS_INITIALISED,
              hasUSNumber: kt.getters.GET_HAS_US_NUMBER,
              numbers: kt.getters.GET_USER_NUMBERS,
            }),
          ),
          {},
          {
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
            shouldShowLoadMore: function () {
              return this.messages.length % 100 === 0;
            },
            hasBalance: function () {
              return !this.prepayActive || this.prepayBalance > 0;
            },
          },
        ),
        watch: {
          messages: {
            handler: function () {
              this.checkOverflow();
            },
            deep: !0,
            immediate: !0,
          },
        },
      },
      cs = os,
      ls = (s("69bd"), Object(M["a"])(cs, et, st, !1, null, "5589f76c", null)),
      us = ls.exports,
      ds = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "table-panel received-table-panel" },
          [
            e("div", { staticClass: "table-container-header" }, [
              e(
                "div",
                { staticClass: "table-container-actions" },
                [e("ExportButton", { ref: "exportButton" })],
                1,
              ),
            ]),
            e(
              "div",
              {
                staticClass:
                  "table-container-topBar top search-grouped bar-full",
              },
              [e("SearchBox", { ref: "searchBox" })],
              1,
            ),
            e("div", { staticClass: "table-container-content" }, [
              e("div", [
                e("table", { staticClass: "data-table" }, [
                  e("thead", [
                    e(
                      "tr",
                      t._l(t.activeColumns, function (s) {
                        return e(
                          "th",
                          { key: s.id, attrs: { id: "table-sms-" + s.id } },
                          [e("span", [t._v(t._s(s.label))])],
                        );
                      }),
                      0,
                    ),
                  ]),
                  t.showBlankTable
                    ? t._e()
                    : e(
                        "tbody",
                        t._l(t.messages, function (s) {
                          return e(
                            "tr",
                            { key: s.id, attrs: { "data-order-target": "0" } },
                            [
                              e(
                                "td",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: t.isColumnActive("date"),
                                      expression: "isColumnActive('date')",
                                    },
                                  ],
                                  staticClass: "msg-time",
                                  attrs: { title: s["date_display"].title },
                                },
                                [
                                  s["date_display"].boldTime
                                    ? [
                                        t._v(
                                          "\n                " +
                                            t._s(s["date_display"].time) +
                                            "\n              ",
                                        ),
                                      ]
                                    : [
                                        t._v(
                                          "\n                " +
                                            t._s(s["date_display"].date),
                                        ),
                                        e("span", [
                                          t._v(t._s(s["date_display"].time)),
                                        ]),
                                      ],
                                ],
                                2,
                              ),
                              e(
                                "td",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: t.isColumnActive("status"),
                                      expression: "isColumnActive('status')",
                                    },
                                  ],
                                  staticClass: "msg-status",
                                },
                                [
                                  e("span", {
                                    staticClass: "long-event-indicator",
                                    class: s.format.toLowerCase(),
                                  }),
                                ],
                              ),
                              e(
                                "td",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: t.isColumnActive("to"),
                                      expression: "isColumnActive('to')",
                                    },
                                  ],
                                  staticClass: "msg-to mark-rcvd-search",
                                },
                                [
                                  t._v(
                                    t._s(
                                      t.getDisplayPhone(s.destination_address),
                                    ),
                                  ),
                                ],
                              ),
                              e(
                                "td",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: t.isColumnActive("from"),
                                      expression: "isColumnActive('from')",
                                    },
                                  ],
                                  staticClass: "msg-from mark-rcvd-search",
                                },
                                [
                                  t._v(
                                    t._s(
                                      s.source_address
                                        ? t.getDisplayPhone(s.source_address)
                                        : "Shared Pool",
                                    ),
                                  ),
                                ],
                              ),
                              e(
                                "td",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: t.isColumnActive("content"),
                                      expression: "isColumnActive('content')",
                                    },
                                  ],
                                  ref: "msgContainer" + s.id,
                                  refInFor: !0,
                                  staticClass: "msg-content mark-rcvd-search",
                                  class: {
                                    "msg-overflowed": t.isOverflowed[s.id],
                                  },
                                },
                                [
                                  e(
                                    "span",
                                    {
                                      ref: "msgText" + s.id,
                                      refInFor: !0,
                                      staticClass: "msg-text",
                                    },
                                    [t._v(t._s(s.content))],
                                  ),
                                  e(
                                    "span",
                                    { staticClass: "message-full-tooltip" },
                                    [
                                      t._v(t._s(s.content) + " "),
                                      e(
                                        "span",
                                        { staticClass: "copied-confirmation" },
                                        [t._v("Copied to clipboard")],
                                      ),
                                    ],
                                  ),
                                ],
                              ),
                              e(
                                "td",
                                { staticClass: "desktop-hide cell-toolbox" },
                                [
                                  e(
                                    "button",
                                    {
                                      staticClass: "button-reply",
                                      on: {
                                        click: function (e) {
                                          return t.quickReply(s);
                                        },
                                      },
                                    },
                                    [t._v("Quick reply")],
                                  ),
                                ],
                              ),
                            ],
                          );
                        }),
                        0,
                      ),
                ]),
                t.showBlankTable
                  ? e("div", { staticClass: "table-blank" }, [t._m(0)])
                  : t._e(),
              ]),
              t.showBlankTable
                ? t._e()
                : e(
                    "div",
                    { staticClass: "table-actions-column mobile-hide" },
                    [
                      e("div", { attrs: { id: "table-options" } }, [
                        e("div", { staticClass: "dropdown-container" }, [
                          e(
                            "span",
                            {
                              staticClass: "dropdown-icon-container",
                              class: { "is-active": t.mixinTriggerable_isOpen },
                              attrs: {
                                "data-toggle-trigger": "columns-summary",
                                "data-trigger-on-close": "true",
                              },
                              on: { click: t.mixinTriggerable_toggleOpened },
                            },
                            [e("span", { staticClass: "dropdown-icon" })],
                          ),
                          e(
                            "ul",
                            {
                              staticClass:
                                "dropdown-menu dropdown-options column-filter mixinTriggerable_layer",
                              class: { visible: t.mixinTriggerable_isOpen },
                              attrs: {
                                id: "columns",
                                "data-toggle-target": "columns-summary",
                              },
                            },
                            [
                              t._m(1),
                              t._l(t.columnFilters, function (s) {
                                return e(
                                  "li",
                                  {
                                    key: s.id,
                                    staticClass: "columns-filter",
                                    attrs: { id: "columns-filter-" + s.id },
                                    on: {
                                      click: function (e) {
                                        return t.handleColumnToggle(e, s);
                                      },
                                    },
                                  },
                                  [
                                    e(
                                      "div",
                                      { staticClass: "column-indicator" },
                                      [
                                        e("div", { staticClass: "checker" }, [
                                          e(
                                            "span",
                                            {
                                              staticClass: "checker-box",
                                              class: {
                                                checked: t.shownColumns[s.id],
                                              },
                                            },
                                            [
                                              e("input", {
                                                attrs: {
                                                  type: "checkbox",
                                                  name: "columns[]",
                                                },
                                                domProps: { value: s.id },
                                              }),
                                            ],
                                          ),
                                        ]),
                                        e(
                                          "span",
                                          {
                                            staticClass:
                                              "column-indicator-copy",
                                          },
                                          [t._v(t._s(s.label))],
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
                      e(
                        "div",
                        { staticClass: "table-row-dropdown" },
                        t._l(t.messages, function (s) {
                          return e(
                            "div",
                            { key: s.id, staticClass: "table-action" },
                            [
                              e(
                                "button",
                                {
                                  staticClass: "button-reply",
                                  on: {
                                    click: function (e) {
                                      return t.quickReply(s);
                                    },
                                  },
                                },
                                [t._v("Quick reply")],
                              ),
                            ],
                          );
                        }),
                        0,
                      ),
                    ],
                  ),
            ]),
            e("SMSSendModal", { ref: "sendModal" }),
          ],
          1,
        );
      },
      hs = [
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "table-blank-content" }, [
            e("p", [t._v("No SMS messages found."), e("br")]),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("li", [
            e("p", [
              e("strong", [t._v("Display optional columns")]),
              e("br"),
              t._v(
                "Choose to show\n                optional columns\n              ",
              ),
            ]),
          ]);
        },
      ];
    function ms(t, e) {
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
    function ps(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ms(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
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
    var _s = {
        name: "SMSReceivedTable",
        mixins: [f, rt, A, S],
        components: { SearchBox: D, ExportButton: We, SMSSendModal: he },
        data: function () {
          return {
            requestPoint: this.$config.requestPoint,
            displayColumns: this.$config.displayColumns.filter(function (t) {
              return t.received;
            }),
            columnIsSaving: !1,
            shownColumns: {},
            showBlankTable: !1,
            messages: [],
            datestamp_format: Object,
            clientTimezone: null,
            firstLoad: !0,
            refreshing: !1,
            polling: null,
            isDefaultSearch: !0,
            phoneUtil: R.a.PhoneNumberUtil.getInstance(),
            PNF: R.a.PhoneNumberFormat,
            markJSInstance: new nt.a(".mark-rcvd-search"),
            searchTerm: null,
            isOverflowed: {},
            prepayActive: !1,
            prepayBalance: 0,
            prepayBalanceDisplay: "--",
          };
        },
        created: function () {
          (this.mixinEventListener_register(
            Object(r["a"])({}, u.CLEAR_POLLING, this.clearPolling),
          ),
            this.mixinEventListener_on());
        },
        mounted: function () {
          (window.addEventListener("resize", this.checkOverflow),
            this.checkOverflow(),
            Ke());
        },
        updated: function () {
          (Ke(), this.checkOverflow());
        },
        destroyed: function () {
          (window.removeEventListener("resize", this.checkOverflow),
            this.mixinEventListener_off());
        },
        methods: ps(
          ps(
            {},
            Object(d["c"])({
              setLoading: dt.mutations.SET_SHOW_RECEIVED_LOADING,
            }),
          ),
          {},
          {
            init: function (t, e) {
              var s = this;
              ((this.clientTimezone = t),
                (this.prepayActive = e.app_settings["prepay_is_active"]),
                (this.prepayBalance = parseFloat(
                  e.app_settings["sms_prepay_balance"],
                )),
                (this.prepayBalanceDisplay = this.prepayBalance.toFixed(2)),
                this.$refs.exportButton.initExportButton(e, "received"),
                this.$config.displayColumns.forEach(function (t) {
                  var i = "show_sms_" + t["id"] + "_col";
                  (void 0 != e &&
                    "app_settings" in e &&
                    i in e.app_settings &&
                    s.$set(t, "active", e.app_settings[i]),
                    s.$set(s.shownColumns, t["id"], t["active"]));
                }),
                this.performSMSSearch(!0, !1));
            },
            highlightSearchTerm: function () {
              (this.markJSInstance.unmark(),
                this.searchTerm && this.markJSInstance.mark(this.searchTerm));
            },
            switchTo: function () {
              var t = this;
              (this.checkOverflow(),
                this.$eventBus.$emit("mixin-search-trigger"),
                (this.polling = setInterval(function () {
                  t.triggerSearch();
                }, 3e4)));
            },
            clearPolling: function () {
              clearInterval(this.polling);
            },
            buildSearchPayload: function (t) {
              if (((this.searchTerm = this.$refs.searchBox.getMainSearch()), t))
                return (
                  (this.loadMoreSearchPayload.continue_token =
                    this.continueToken),
                  this.loadMoreSearchPayload
                );
              var e = {};
              ((e.start = c.a.utc().subtract(30, "days").unix()),
                (e.end = c.a.utc().unix()));
              var s = {
                client_timezone: this.clientTimezone,
                unix_secs_start: e.start,
                unix_secs_end: e.end,
                search_term: this.$refs.searchBox.getMainSearch(),
                shown_records: this.messages.length,
                shown_columns: JSON.stringify(this.shownColumns),
                continue_token: "",
                file_type: this.fileType,
                export_type: "received",
              };
              return ((this.loadMoreSearchPayload = s), s);
            },
            performSMSSearch: function (t, e) {
              var s = this;
              ((this.fullPageLoad = !1),
                e ||
                  ((this.clearTableOnResults = !0),
                  this.firstLoad &&
                    (window.scroll({ top: 0, left: 0, behavior: "smooth" }),
                    (this.firstLoad = !1)),
                  (this.fullPageLoad = !0)),
                this.refreshing || this.setLoading(!0),
                this.mixinAjax_get(
                  this.requestPoint,
                  "received",
                  this.buildSearchPayload(e),
                  function (t) {
                    ((s.datestamp_format =
                      t.responseJSON.results.datestamp_format),
                      (s.messages = t.responseJSON.results.messages),
                      s.messages.forEach(function (t) {
                        t["date_display"] = s.convertTS(t.timestamp);
                      }),
                      0 == s.messages.length
                        ? (s.setIsDefaultSearch(), (s.showBlankTable = !0))
                        : (s.showBlankTable = !1),
                      (s.refreshing = !1),
                      s.setLoading(!1),
                      s.highlightSearchTerm());
                  },
                  function (t) {
                    ((s.messages = []),
                      HTML.handleError(t.responseJSON),
                      (s.refreshing = !1),
                      s.setLoading(!1));
                  },
                  !0,
                ));
            },
            triggerSearch: function () {
              ((this.refreshing = !0),
                this.$eventBus.$emit("mixin-search-has-changed"),
                this.$eventBus.$emit("mixin-search-trigger"));
            },
            quickReply: function (t) {
              var e = "reply",
                s = t;
              this.$refs.sendModal.init(e, s);
            },
            handleColumnToggle: function (t, e) {
              void 0 !== t && t.stopImmediatePropagation();
              var s = this.shownColumns[e.id];
              (this.$set(this.shownColumns, e.id, !s),
                this.$set(e, "active", !s),
                this.$eventBus.$emit("mixin-column-has-changed"),
                this.saveColumn());
            },
            isColumnActive: function (t) {
              var e = !1;
              return (
                this.activeColumns.forEach(function (s) {
                  s.id == t && (e = !0);
                }),
                e
              );
            },
            saveColumn: function () {
              var t = this;
              this.columnIsSaving = !0;
              var e = !0,
                s = { shown_columns: JSON.stringify(this.shownColumns) };
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
            performDownloadFile: function (t) {
              ((this.fileType = t),
                this.mixinAjax_put(
                  this.requestPoint,
                  "download-file",
                  this.buildSearchPayload(),
                  function (t) {
                    (HTML.set_time(t.responseJSON),
                      window.location.replace(
                        t.responseJSON.results.stream_url,
                      ));
                  },
                  function (t) {
                    HTML.handleError(t.responseJSON);
                  },
                ));
            },
            getDisplayPhone: function (t) {
              var e = t;
              try {
                var s = this.phoneUtil.parse(t);
                e = this.phoneUtil.format(s, this.PNF.INTERNATIONAL);
              } catch (i) {
                e = t;
              }
              return e;
            },
            convertTS: function (t) {
              var e = {
                  hideDate: !1,
                  boldTime: !1,
                  title: "",
                  date: "",
                  time: "",
                },
                s = c()(t).tz(this.clientTimezone),
                i = s.format(this.datestamp_format),
                n =
                  s.format("ddd, MMM Do, YYYY") +
                  " at " +
                  s.format("h:mm:ss A zz");
              ((e.title = n),
                (e.date = i.slice(0, i.indexOf(" "))),
                (e.time = i.slice(i.indexOf(" ") + 1)));
              var a,
                r = { hour: 12, minute: 0 };
              return (
                (a =
                  Date.today().setTimeToNow().getTime() >
                  Date.today().set(r).getTime()
                    ? Date.today()
                    : Date.today().set(r).addDays(-1)),
                s.valueOf() > a.getTime() && (e.hideDate = !0),
                s.valueOf() > a.getTime() && (e.boldTime = !0),
                e
              );
            },
            resetSearch: function () {
              (this.$refs.searchBox.resetSearch(),
                this.$eventBus.$emit("mixin-search-has-changed"),
                this.$eventBus.$emit("mixin-search-trigger"));
            },
            setIsDefaultSearch: function () {
              this.isDefaultSearch =
                "" === this.$refs.searchBox.getMainSearch();
            },
            checkOverflow: function () {
              var t = this;
              this.$nextTick(function () {
                t.messages.forEach(function (e) {
                  var s = t.$refs["msgContainer" + e.id],
                    i = t.$refs["msgText" + e.id];
                  if (s && s[0] && i && i[0]) {
                    var n = s[0].offsetWidth,
                      a = i[0].scrollWidth;
                    t.$set(t.isOverflowed, e.id, a > n);
                  }
                });
              });
            },
          },
        ),
        watch: {
          messages: {
            handler: function () {
              this.checkOverflow();
            },
            deep: !0,
            immediate: !0,
          },
        },
        computed: {
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
      },
      gs = _s,
      fs = Object(M["a"])(gs, ds, hs, !1, null, null, null),
      bs = fs.exports,
      vs = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "table-panel grid-table-panel summary-table-panel" },
          [
            e("div", { staticClass: "table-container-header" }, [
              e(
                "div",
                { staticClass: "table-container-actions" },
                [e("ExportButton", { ref: "exportButton" })],
                1,
              ),
            ]),
            t.showFilterBar
              ? e(
                  "div",
                  {
                    staticClass:
                      "table-container-topBar top search-grouped bar-full",
                  },
                  [e("SummaryFilter", { ref: "summaryFilter" })],
                  1,
                )
              : t._e(),
            e("div", { staticClass: "table-infobox-container" }, [
              t.prepayActive
                ? e("div", { staticClass: "sms-infobox box-featured" }, [
                    e("div", { staticClass: "sms-infobox-number" }, [
                      t._v("$" + t._s(t.remainingBalance)),
                    ]),
                    e("div", { staticClass: "sms-infobox-info" }, [
                      t._v("Remaining balance"),
                    ]),
                    t.clientPermissions
                      ? e("div", [
                          t.autoRecharge
                            ? e("span", [
                                e(
                                  "a",
                                  {
                                    attrs: {
                                      href: "/sending/sms_settings/#recharge",
                                    },
                                  },
                                  [t._v("Edit auto-recharge")],
                                ),
                              ])
                            : e("span", [
                                e(
                                  "button",
                                  {
                                    staticClass: "button button-link",
                                    on: {
                                      click: function (e) {
                                        return t.topupNow();
                                      },
                                    },
                                  },
                                  [t._v("Top up")],
                                ),
                                e("span", { staticClass: "info-text" }, [
                                  t._v(" or "),
                                ]),
                                e(
                                  "a",
                                  {
                                    attrs: {
                                      href: "/sending/sms_settings/#recharge",
                                    },
                                  },
                                  [t._v("enable auto-recharge")],
                                ),
                              ]),
                        ])
                      : t._e(),
                  ])
                : t._e(),
              e("div", { staticClass: "sms-infobox" }, [
                e("div", { staticClass: "sms-infobox-number" }, [
                  t._v(t._s(t.unitsToday)),
                ]),
                e("div", { staticClass: "sms-infobox-info" }, [
                  t._v("Sent today (units)"),
                ]),
              ]),
              e("div", { staticClass: "sms-infobox" }, [
                e("div", { staticClass: "sms-infobox-number" }, [
                  t._v(t._s(t.unitsThisMonth)),
                ]),
                e("div", { staticClass: "sms-infobox-info" }, [
                  t._v("Sent this billing month"),
                ]),
              ]),
              e(
                "div",
                { staticClass: "sms-infobox" },
                [
                  e("div", { staticClass: "sms-infobox-number" }, [
                    t._v("$" + t._s(t.totalCost)),
                  ]),
                  e("div", { staticClass: "sms-infobox-info" }, [
                    t._v(
                      "\n        " +
                        t._s(t.billingPeriodStart) +
                        " - " +
                        t._s(t.billingPeriodEnd) +
                        "\n      ",
                    ),
                  ]),
                  e("RatesDropdown", {
                    attrs: { displayText: "See messaging rates" },
                  }),
                ],
                1,
              ),
            ]),
            t.showDetails
              ? e("SummaryDetails", {
                  attrs: { details: t.currentDetails },
                  on: { close: t.closeDetails },
                })
              : t._e(),
            t.billingHistory.length > 0
              ? e(
                  "div",
                  { staticClass: "table-container-content full-width" },
                  [
                    e("div", [
                      e("table", { staticClass: "data-table table-summary" }, [
                        t.showBlankTable
                          ? t._e()
                          : e("thead", [
                              e(
                                "tr",
                                t._l(t.displayColumns, function (s) {
                                  return e(
                                    "th",
                                    {
                                      key: s.id,
                                      attrs: { id: "table-sms-" + s.id },
                                    },
                                    [e("span", [t._v(t._s(s.label))])],
                                  );
                                }),
                                0,
                              ),
                            ]),
                        t.showBlankTable
                          ? t._e()
                          : e(
                              "tbody",
                              [
                                t._l(t.billingHistoryToShow, function (s) {
                                  return e("tr", { key: s.billing_start }, [
                                    e(
                                      "td",
                                      { staticClass: "summary-period" },
                                      [
                                        null === s.breakdown ||
                                        0 == s.breakdown.length
                                          ? [
                                              e(
                                                "span",
                                                {
                                                  staticClass: "date-start",
                                                  attrs: {
                                                    title: t.getFullDisplay(
                                                      s.billing_start,
                                                    ),
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.getPeriodDisplay(
                                                        s.billing_start,
                                                      ),
                                                    ),
                                                  ),
                                                ],
                                              ),
                                              t._v(
                                                "\n                -\n                ",
                                              ),
                                              e(
                                                "span",
                                                {
                                                  staticClass: "date-end",
                                                  attrs: {
                                                    title: t.getFullDisplay(
                                                      s.billing_end,
                                                    ),
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.getPeriodDisplay(
                                                        s.billing_end,
                                                      ),
                                                    ),
                                                  ),
                                                ],
                                              ),
                                            ]
                                          : e(
                                              "a",
                                              {
                                                on: {
                                                  click: function (e) {
                                                    return t.toggleDetailsVisibility(
                                                      s,
                                                    );
                                                  },
                                                },
                                              },
                                              [
                                                e(
                                                  "span",
                                                  {
                                                    staticClass: "date-start",
                                                    attrs: {
                                                      title: t.getFullDisplay(
                                                        s.billing_start,
                                                      ),
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      t._s(
                                                        t.getPeriodDisplay(
                                                          s.billing_start,
                                                        ),
                                                      ),
                                                    ),
                                                  ],
                                                ),
                                                t._v(
                                                  "\n                -\n                ",
                                                ),
                                                e(
                                                  "span",
                                                  {
                                                    staticClass: "date-end",
                                                    attrs: {
                                                      title: t.getFullDisplay(
                                                        s.billing_end,
                                                      ),
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      t._s(
                                                        t.getPeriodDisplay(
                                                          s.billing_end,
                                                        ),
                                                      ),
                                                    ),
                                                  ],
                                                ),
                                              ],
                                            ),
                                      ],
                                      2,
                                    ),
                                    e("td", { staticClass: "summary-sent" }, [
                                      e(
                                        "span",
                                        { staticClass: "summary-msg-total" },
                                        [
                                          t._v(
                                            t._s(
                                              s.total_sent
                                                .toString()
                                                .replace(
                                                  /(\d)(?=(\d{3})+(?!\d))/g,
                                                  "$1,",
                                                ),
                                            ),
                                          ),
                                        ],
                                      ),
                                    ]),
                                    e("td", { staticClass: "summary-sent" }, [
                                      e(
                                        "span",
                                        { staticClass: "summary-sent-total" },
                                        [
                                          t._v(
                                            t._s(
                                              t
                                                .getHistoryTotal(s)
                                                .toString()
                                                .replace(
                                                  /(\d)(?=(\d{3})+(?!\d))/g,
                                                  "$1,",
                                                ),
                                            ),
                                          ),
                                        ],
                                      ),
                                    ]),
                                    e("td", { staticClass: "summary-paid" }, [
                                      e(
                                        "span",
                                        { staticClass: "summary-paid-value" },
                                        [
                                          t._v(
                                            "$" +
                                              t._s(
                                                s.total_cost
                                                  .toFixed(2)
                                                  .replace(
                                                    /(\d)(?=(\d{3})+(?!\d))/g,
                                                    "$1,",
                                                  ),
                                              ),
                                          ),
                                        ],
                                      ),
                                    ]),
                                  ]);
                                }),
                                t.moreToShow
                                  ? [
                                      t.isLoading
                                        ? e("tr", { staticClass: "loading" }, [
                                            t._m(1),
                                          ])
                                        : e(
                                            "tr",
                                            {
                                              staticClass: "row-load-more",
                                              on: { click: t.loadMore },
                                            },
                                            [t._m(0)],
                                          ),
                                    ]
                                  : t._e(),
                              ],
                              2,
                            ),
                      ]),
                    ]),
                  ],
                )
              : t._e(),
          ],
          1,
        );
      },
      Ss = [
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "td",
            {
              staticClass: "load-more load-centered",
              attrs: { colspan: "100%" },
            },
            [
              e("div", { staticClass: "loading-button-container" }, [
                e(
                  "button",
                  {
                    staticClass: "btn btn-outlined btn-sm",
                    attrs: { type: "button" },
                  },
                  [
                    t._v(
                      "\n                    Load More Results\n                  ",
                    ),
                  ],
                ),
              ]),
            ],
          );
        },
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "td",
            {
              staticClass: "load-more load-centered",
              attrs: { colspan: "100%" },
            },
            [
              e("div", { staticClass: "loading-spinner" }, [
                e("div", { staticClass: "loader" }),
              ]),
            ],
          );
        },
      ],
      Cs = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          {
            staticClass: "bootbox modal fade in",
            attrs: { id: "smsSummaryDetails" },
          },
          [
            e("div", { staticClass: "modal-dialog summary-details" }, [
              e("div", { staticClass: "modal-content" }, [
                e("div", { staticClass: "modal-header" }, [
                  e("h4", { staticClass: "modal-title" }, [
                    t._v(
                      "SMS sending " +
                        t._s(t.details.start) +
                        " — " +
                        t._s(t.details.end),
                    ),
                  ]),
                  e(
                    "button",
                    {
                      staticClass: "bootbox-close-button close",
                      attrs: { type: "button" },
                      on: {
                        click: function (e) {
                          return t.$emit("close");
                        },
                      },
                    },
                    [t._v("×")],
                  ),
                ]),
                e("div", { staticClass: "modal-body" }, [
                  e("table", [
                    t._m(0),
                    e(
                      "tbody",
                      t._l(t.formattedDetails, function (s) {
                        return e("tr", { key: s.countryName }, [
                          e("td", [
                            e("span", { staticClass: "country-container" }, [
                              e("span", {
                                class: "icon-flag ".concat(s.flagClass),
                              }),
                              e("span", [t._v(t._s(s.country_name))]),
                            ]),
                          ]),
                          e("td", [
                            e("span", { staticClass: "country-code" }, [
                              t._v(t._s(s.country_code)),
                            ]),
                          ]),
                          e("td", { staticClass: "country-sent" }, [
                            t._v(t._s(s.totalMessages)),
                          ]),
                          e("td", { staticClass: "country-sent" }, [
                            t._v(t._s(s.totalUnits)),
                          ]),
                          e("td", { staticClass: "country-paid" }, [
                            t._v("$"),
                            e("span", [t._v(t._s(s.totalCost))]),
                          ]),
                        ]);
                      }),
                      0,
                    ),
                  ]),
                ]),
                e("div", { staticClass: "modal-footer" }, [
                  e("table", [
                    e("tbody", [
                      e("tr", [
                        e(
                          "td",
                          {
                            staticClass: "footer-totals",
                            attrs: { colspan: "2" },
                          },
                          [t._v("Totals")],
                        ),
                        e("td", { staticClass: "summary-sent" }, [
                          e("span", { staticClass: "summary-msg-total" }, [
                            t._v(
                              t._s(
                                t.details.totalMessages
                                  .toString()
                                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
                              ),
                            ),
                          ]),
                        ]),
                        e("td", { staticClass: "summary-sent" }, [
                          e("span", { staticClass: "summary-sent-total" }, [
                            t._v(
                              t._s(
                                t.details.totalUnits
                                  .toString()
                                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
                              ),
                            ),
                          ]),
                        ]),
                        e("td", { staticClass: "summary-paid" }, [
                          e("span", { staticClass: "summary-paid-value" }, [
                            t._v(
                              "$" +
                                t._s(
                                  t.details.totalCost.replace(
                                    /(\d)(?=(\d{3})+(?!\d))/g,
                                    "$1,",
                                  ),
                                ),
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            e("div", {
              staticClass: "modal-backdrop fade in",
              on: {
                click: function (e) {
                  return t.$emit("close");
                },
              },
            }),
          ],
        );
      },
      Es = [
        function () {
          var t = this,
            e = t._self._c;
          return e("thead", [
            e("tr", [
              e("th", [t._v("Country")]),
              e("th", [t._v("Code")]),
              e("th", { staticClass: "country-sent" }, [t._v("Messages")]),
              e("th", { staticClass: "country-sent" }, [t._v("Units")]),
              e("th", { staticClass: "country-paid" }, [t._v("Cost")]),
            ]),
          ]);
        },
      ],
      Ts = (s("28a5"), s("a9b7")),
      ys = {
        name: "SummaryDetails",
        props: { details: Object },
        computed: {
          formattedDetails: function () {
            var t = this;
            return this.details && this.details.breakdownSorted
              ? this.details.breakdownSorted.map(function (e) {
                  return {
                    flagClass: "is-".concat(e.country.toLowerCase()),
                    country_code: "+".concat(
                      t.getCountryCallingCode(e.country),
                    ),
                    country_name: t.getCountryName(e.country),
                    totalMessages: e.sent
                      .toString()
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
                    totalUnits: e.units
                      .toString()
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
                    totalCost: e.cost
                      .toFixed(2)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
                  };
                })
              : [];
          },
        },
        mounted: function () {
          (this.checkTableHeight(),
            window.addEventListener("resize", this.checkTableHeight));
        },
        beforeDestroy: function () {
          window.removeEventListener("resize", this.checkTableHeight);
        },
        methods: {
          getCountryName: function (t) {
            if ("XX" === t.toUpperCase()) return "Unrecognized";
            if ("ZZ" === t.toUpperCase()) return "Unknown";
            var e = c.a.tz.countries().find(function (e) {
              var s = c.a.tz.zonesForCountry(e);
              return s.some(function (e) {
                return e.split("/")[1].toLowerCase() === t.toLowerCase();
              });
            });
            if (!e) {
              var s = Ts["countries"][t.toUpperCase()];
              return s ? s.name : t;
            }
            return e;
          },
          getCountryCallingCode: function (t) {
            var e = R.a.PhoneNumberUtil.getInstance(),
              s = "XX";
            try {
              var i = e.parseAndKeepRawInput("123-456-789", t);
              s = i.getCountryCode();
            } catch (n) {}
            return s;
          },
          checkTableHeight: function () {
            var t = this;
            this.$nextTick(function () {
              var e = t.$el.querySelector("#smsSummaryDetails .modal-body"),
                s = e.querySelector("#smsSummaryDetails .modal-body table"),
                i = t.$el.querySelector("#smsSummaryDetails .modal-footer");
              s.offsetHeight > e.offsetHeight
                ? i.classList.add("is-push")
                : i.classList.remove("is-push");
            });
          },
        },
      },
      ws = ys,
      xs = (s("ffaa"), Object(M["a"])(ws, Cs, Es, !1, null, "c3fb6fb8", null)),
      Ns = xs.exports,
      As = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "all-filter-wrapper" }, [
          e("div", { staticClass: "btn-group" }, [
            e(
              "div",
              {
                staticClass:
                  "dropdown-menu dropdown-options all-filter is-active",
                attrs: { id: "summary-filters" },
              },
              [e("SubaccountFilter", { ref: "subaccountFilter" })],
              1,
            ),
          ]),
        ]);
      },
      Os = [],
      Is = {
        name: "SummaryFilter",
        mixins: [A, S],
        components: { SubaccountFilter: $e },
        data: function () {
          return { eventsToDisplay: this.$config.eventsToDisplay };
        },
        created: function () {
          (this.mixinEventListener_register(
            Object(r["a"])({}, u.CLOSE_ALL_FILTER, this.closeAllFilters),
          ),
            this.mixinEventListener_on());
        },
        destroyed: function () {
          this.mixinEventListener_off();
        },
        methods: {
          closeAllFilters: function () {
            this.mixinTriggerable_forceClose();
          },
        },
      },
      Ms = Is,
      ks = Object(M["a"])(Ms, As, Os, !1, null, null, null),
      Ds = ks.exports;
    function js(t, e) {
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
    function Rs(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? js(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : js(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var Bs = {
        name: "SMSSummaryTable",
        props: { clientPermissions: Boolean },
        mixins: [f, rt, A, S],
        components: {
          ExportButton: We,
          RatesDropdown: re,
          SummaryDetails: Ns,
          SummaryFilter: Ds,
        },
        data: function () {
          return {
            apMetadata: {},
            requestPoint: this.$config.requestPoint,
            displayColumns: this.$config.displaySummaryColumns,
            showBlankTable: !0,
            datestamp_format: Object,
            clientTimezone: null,
            billingSummary: {},
            billingHistory: {},
            historyToShow: 10,
            billingPeriodStart: "--",
            billingPeriodEnd: "--",
            sentThisMonth: "--",
            unitsThisMonth: "--",
            sentToday: "--",
            unitsToday: "--",
            remainingBalance: "--",
            totalCost: "--",
            refreshing: !1,
            polling: null,
            showDetails: !1,
            currentDetails: {},
            isLoading: !1,
            prepayActive: !1,
            autoRecharge: !1,
            prepayBalance: 0,
            prepayBalanceDisplay: "--",
          };
        },
        created: function () {},
        destroyed: function () {},
        watch: {
          clientTimezone: function () {
            this.init(this.clientTimezone, this.apMetadata);
          },
        },
        methods: Rs(
          Rs(
            {},
            Object(d["c"])({
              setLoading: dt.mutations.SET_SHOW_SUMMARY_LOADING,
            }),
          ),
          {},
          {
            init: function (t, e) {
              ((this.clientTimezone = t),
                (void 0 !== t && null !== t && "" !== t) ||
                  (this.clientTimezone = c.a.tz.guess()),
                (this.apMetadata = e),
                (this.prepayBalance = parseFloat(
                  e.app_settings["sms_prepay_balance"],
                )),
                (this.prepayBalanceDisplay = this.prepayBalance.toFixed(2)),
                this.$refs.exportButton.initExportButton(e, "summary"),
                (this.prepayActive =
                  e &&
                  e.hasOwnProperty("app_settings") &&
                  e["app_settings"].hasOwnProperty("prepay_is_active") &&
                  e["app_settings"].prepay_is_active),
                (this.autoRecharge =
                  e &&
                  e.hasOwnProperty("app_settings") &&
                  e["app_settings"].hasOwnProperty("prepay_auto_topup") &&
                  e["app_settings"].prepay_auto_topup),
                this.getBillingSummary(!0, !0));
            },
            switchTo: function () {},
            triggerRefreshFromEvent: function () {
              (this.setLoading(!0), this.getBillingSummary(!0, !0, !0));
            },
            getBillingSummary: function () {
              var t = this,
                e =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0],
                s =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                i =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                n = {
                  unix_secs_start: 0,
                  unix_secs_end: 0,
                  time_zone: this.clientTimezone,
                  subaccounts: this.getSelectedSubaccounts(),
                };
              (s && this.setLoading(!0),
                (this.refreshing && !i) ||
                  ((this.refreshing = !0),
                  this.mixinAjax_get(
                    this.requestPoint,
                    "billing-summary",
                    n,
                    function (e) {
                      ((t.datestamp_format =
                        e.responseJSON.results.datestamp_format),
                        (t.billingSummary = e.responseJSON.results.summary));
                      var s = 0;
                      (t.billingSummary.total_mms_sent &&
                        (s = t.billingSummary.total_mms_sent),
                        (t.sentToday = t.billingSummary.sent_today
                          .toString()
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")),
                        (t.unitsToday = t.billingSummary.units_today
                          .toString()
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")),
                        (t.sentThisMonth = t.billingSummary.total_sent
                          .toString()
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")),
                        (t.unitsThisMonth = (t.billingSummary.total_units + s)
                          .toString()
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")),
                        (t.totalCost = t.billingSummary.total_cost
                          .toFixed(2)
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")),
                        (t.billingPeriodStart = t.getPeriodDisplay(
                          t.billingSummary.billing_period.unix_start,
                        )),
                        (t.billingPeriodEnd = t.getPeriodDisplay(
                          t.billingSummary.billing_period.unix_end,
                        )),
                        (t.billingHistory = e.responseJSON.results.history),
                        (t.remainingBalance =
                          e.responseJSON.results.prepay_balance
                            .toFixed(2)
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")));
                      var i = {
                        billing_date: t.billingSummary.billing_period.unix_end,
                        billing_start:
                          t.billingSummary.billing_period.unix_start,
                        billing_end: t.billingSummary.billing_period.unix_end,
                        total_sent: t.billingSummary.total_sent + s,
                        total_units: t.billingSummary.total_units + s,
                        total_cost: t.billingSummary.total_cost,
                        breakdown: t.billingSummary.countries,
                      };
                      (t.billingHistory.unshift(i),
                        t.billingHistory.forEach(function (t) {
                          null != t.breakdown &&
                            t.breakdown.length > 0 &&
                            (t.breakdownSorted = t.breakdown
                              .sort(function (t, e) {
                                return e.units - t.units;
                              })
                              .filter(function (t) {
                                return t.units > 0 || t.sent > 0;
                              }));
                        }),
                        (t.showBlankTable = !1),
                        (t.refreshing = !1),
                        t.setLoading(!1));
                    },
                    function (s) {
                      (e && HTML.handleError(s.responseJSON),
                        (t.refreshing = !1),
                        t.setLoading(!1));
                    },
                    !0,
                  )));
            },
            getPeriodDisplay: function (t) {
              return c.a.unix(t).format("MMM D, YYYY");
            },
            getFullDisplay: function (t) {
              return c.a.unix(t).format("MMM D, YYYY h:mm A");
            },
            performDownloadFile: function (t) {
              this.fileType = t;
              var e = {
                shown_columns: JSON.stringify(this.displayColumns),
                file_type: this.fileType,
                export_type: "summary",
              };
              this.mixinAjax_put(
                this.requestPoint,
                "download-file",
                e,
                function (t) {
                  (HTML.set_time(t.responseJSON),
                    window.location.replace(t.responseJSON.results.stream_url));
                },
                function (t) {
                  HTML.handleError(t.responseJSON);
                },
              );
            },
            getHistoryTotal: function (t) {
              var e = 0;
              return (
                "breakdown" in t &&
                  null != t.breakdown &&
                  t.breakdown.forEach(function (t) {
                    void 0 != t.units ? (e += t.units) : (e += t.sent);
                  }),
                e
              );
            },
            toggleDetailsVisibility: function (t) {
              ((this.currentDetails = Rs(
                Rs({}, t),
                {},
                {
                  start: this.getPeriodDisplay(t.billing_start),
                  end: this.getPeriodDisplay(t.billing_end),
                  totalMessages: t.total_sent,
                  totalUnits: this.getHistoryTotal(t),
                  totalCost: t.total_cost.toFixed(2),
                },
              )),
                (this.showDetails = !0));
            },
            closeDetails: function () {
              this.showDetails = !1;
            },
            loadMore: function () {
              this.historyToShow += 10;
            },
            getSelectedSubaccounts: function () {
              return this.$refs.summaryFilter &&
                this.$refs.summaryFilter.$refs.subaccountFilter
                ? this.$refs.summaryFilter.$refs.subaccountFilter.getSelectedItems()
                : [];
            },
            topupNow: function () {
              window.location.href = "/sending/sms_settings/#topup";
            },
          },
        ),
        computed: {
          moreToShow: function () {
            return this.historyToShow < this.billingHistory.length;
          },
          billingHistoryToShow: function () {
            return this.billingHistory.slice(0, this.historyToShow);
          },
          showFilterBar: function () {
            return (
              PAGE_DATA.is_master &&
              PAGE_DATA.user_data.subaccounts &&
              PAGE_DATA.user_data.subaccounts.length > 0
            );
          },
        },
      },
      Us = Bs,
      Ps = (s("6576"), Object(M["a"])(Us, vs, Ss, !1, null, "3a3448d9", null)),
      $s = Ps.exports,
      Gs = {
        name: "SMSTabTable",
        props: { context: String, clientPermissions: Boolean },
        mixins: [],
        components: {
          SMSSentTable: us,
          SMSReceivedTable: bs,
          SMSSummaryTable: $s,
        },
        data: function () {
          return {
            contexts: this.$config.contexts,
            requestPoint: this.$config.requestPoint,
            apMetadata: PAGE_DATA.apMetadata,
            clientTimezone: PAGE_DATA.clientTimezone,
          };
        },
        methods: {
          init: function (t, e, s) {
            ((this.clientTimezone = t),
              (this.apMetadata = e),
              this.$refs.sms_sent_table.init(
                this.clientTimezone,
                this.apMetadata,
                s,
              ),
              this.$refs.sms_received_table.init(
                this.clientTimezone,
                this.apMetadata,
              ),
              this.$refs.sms_summary_section.init(
                this.clientTimezone,
                this.apMetadata,
              ));
          },
          switchTo: function () {
            switch (this.context) {
              case this.contexts.TAB_SENT:
                this.$refs.sms_sent_table.switchTo();
                break;
              case this.contexts.TAB_RECEIVED:
                this.$refs.sms_received_table.switchTo();
                break;
              case this.contexts.TAB_SUMMARY:
                this.$refs.sms_summary_section.switchTo();
                break;
              default:
                break;
            }
          },
          switchContext: function (t) {
            this.$eventBus.$emit(u.SWITCH_CONTEXT, t);
          },
          performSMSSearch: function (t, e) {
            switch (this.context) {
              case this.contexts.TAB_SENT:
                this.$refs.sms_sent_table.performSMSSearch(t, e, !1);
                break;
              case this.contexts.TAB_RECEIVED:
                this.$refs.sms_received_table.performSMSSearch(t, e);
                break;
              default:
                break;
            }
          },
          performDownloadFile: function (t) {
            switch (this.context) {
              case this.contexts.TAB_SENT:
                this.$refs.sms_sent_table.performDownloadFile(t);
                break;
              case this.contexts.TAB_RECEIVED:
                this.$refs.sms_received_table.performDownloadFile(t);
                break;
              case this.contexts.TAB_SUMMARY:
                this.$refs.sms_summary_section.performDownloadFile(t);
                break;
              default:
                break;
            }
          },
        },
        computed: {
          showSent: function () {
            return this.context == this.contexts.TAB_SENT;
          },
          showReceived: function () {
            return this.context == this.contexts.TAB_RECEIVED;
          },
          showSummary: function () {
            return this.context == this.contexts.TAB_SUMMARY;
          },
        },
      },
      Ls = Gs,
      Fs = Object(M["a"])(Ls, Z, tt, !1, null, null, null),
      Hs = Fs.exports,
      qs = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          [
            e("NumberEdit", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: t.showNumberEdit,
                  expression: "showNumberEdit",
                },
              ],
              ref: "number_edit",
              attrs: { userData: t.userData },
            }),
            e("sms-purchase", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: t.showSmsPurchase,
                  expression: "showSmsPurchase",
                },
              ],
              ref: "sms_purchase",
              attrs: { userData: t.userData, context: t.context },
            }),
          ],
          1,
        );
      },
      zs = [],
      Vs = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "number-edit-grid" }, [
          t.numberEditing
            ? e("div", { staticClass: "table-panel settings-table-panel" }, [
                t._m(0),
                e("div", { staticClass: "tab-content" }, [
                  e("div", { staticClass: "content-row" }, [
                    e("h4", { staticClass: "row-title" }, [t._v("Number")]),
                    e("div", { staticClass: "text-content" }, [
                      e(
                        "div",
                        {
                          staticClass: "number-display",
                          on: {
                            click: function (e) {
                              (e.preventDefault(),
                                (t.smsEnabled = !t.smsEnabled));
                            },
                          },
                        },
                        [
                          e("span", { staticClass: "country-container" }, [
                            e("span", {
                              class: t.getCountryFlagClass(
                                t.numberEditing.number.country,
                              ),
                            }),
                            e("span", { staticClass: "number-country-code" }, [
                              t._v(
                                "+" +
                                  t._s(t.numberEditing.display.country_code),
                              ),
                            ]),
                          ]),
                          e("input", {
                            staticClass: "form-control number-input",
                            attrs: { type: "text", disabled: "" },
                            domProps: {
                              value: "".concat(
                                t.numberEditing.display.national,
                              ),
                            },
                          }),
                        ],
                      ),
                      e("p", { staticClass: "field-info" }, [
                        t._v(
                          "\n            The dedicated number cannot be changed. You can remove existing\n            numbers or add\n            ",
                        ),
                        e(
                          "a",
                          {
                            attrs: { href: "#" },
                            on: {
                              click: function (e) {
                                return (
                                  e.preventDefault(),
                                  t.goToNumberListPage()
                                );
                              },
                            },
                          },
                          [t._v("new dedicated numbers.")],
                        ),
                      ]),
                    ]),
                  ]),
                  e("div", { staticClass: "content-row" }, [
                    e("h4", { staticClass: "row-title" }, [
                      t._v("Number name"),
                    ]),
                    e("div", { staticClass: "text-content" }, [
                      e("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: t.numberName,
                            expression: "numberName",
                          },
                        ],
                        staticClass: "form-control input-md number-name",
                        attrs: {
                          placeholder: "e.g. 'Marketing number'",
                          type: "text",
                          autocomplete: "off",
                        },
                        domProps: { value: t.numberName },
                        on: {
                          input: function (e) {
                            e.target.composing ||
                              (t.numberName = e.target.value);
                          },
                        },
                      }),
                      e("p", { staticClass: "field-info" }, [
                        t._v(
                          "\n            This is an administrative name for your number. It is not visible\n            to recipients.\n          ",
                        ),
                      ]),
                    ]),
                  ]),
                  e("div", { staticClass: "content-row" }, [
                    e("h4", { staticClass: "row-title" }, [
                      t._v("Forward replies"),
                    ]),
                    e(
                      "div",
                      { staticClass: "text-content forward-replies-block" },
                      [
                        e("div", { staticClass: "form-select-wrapper" }, [
                          e(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.forwardingAddressOptionValue,
                                  expression: "forwardingAddressOptionValue",
                                },
                              ],
                              staticClass: "form-control input-md",
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
                                  t.forwardingAddressOptionValue = e.target
                                    .multiple
                                    ? s
                                    : s[0];
                                },
                              },
                            },
                            t._l(t.forwardingAddressOptions, function (s) {
                              return e(
                                "option",
                                { key: s.value, domProps: { value: s.value } },
                                [
                                  t._v(
                                    "\n                " +
                                      t._s(s.label) +
                                      "\n              ",
                                  ),
                                ],
                              );
                            }),
                            0,
                          ),
                        ]),
                        e("p", { staticClass: "field-info" }, [
                          t._v(
                            "\n            Optionally specify a custom email address to receive replies for this dedicated number. The default email from ",
                          ),
                          e(
                            "a",
                            {
                              attrs: { href: "#" },
                              on: {
                                click: function (e) {
                                  return (
                                    e.preventDefault(),
                                    t.goToSmsSettingsPage()
                                  );
                                },
                              },
                            },
                            [t._v("SMS Settings")],
                          ),
                          t._v(" is used otherwise.\n          "),
                        ]),
                        e(
                          "div",
                          {
                            class: [
                              "content-row",
                              {
                                "is-custom":
                                  "custom" === t.forwardingAddressOptionValue,
                              },
                            ],
                          },
                          [
                            e("div", { staticClass: "input-wrapper" }, [
                              e("h5", [t._v("Custom forward replies address")]),
                              e("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.forwardingAddress,
                                    expression: "forwardingAddress",
                                  },
                                ],
                                staticClass: "form-control input-md",
                                attrs: {
                                  placeholder: "email@company.com",
                                  type: "text",
                                  autocomplete: "off",
                                },
                                domProps: { value: t.forwardingAddress },
                                on: {
                                  input: function (e) {
                                    e.target.composing ||
                                      (t.forwardingAddress = e.target.value);
                                  },
                                },
                              }),
                              t._m(1),
                            ]),
                          ],
                        ),
                      ],
                    ),
                  ]),
                  e("div", { staticClass: "table-footer" }, [
                    e(
                      "button",
                      {
                        staticClass: "btn blue hide-splash",
                        class: { "is-loading": t.isSaving },
                        attrs: { disabled: t.saveButtonDisabled },
                        on: {
                          click: function (e) {
                            return t.save();
                          },
                        },
                      },
                      [
                        t._v("\n          Save changes "),
                        e("span", { staticClass: "loader-spinner" }),
                      ],
                    ),
                    e(
                      "button",
                      {
                        staticClass: "button-outlined",
                        attrs: { role: "button", type: "button" },
                        on: {
                          click: function (e) {
                            return t.cancel();
                          },
                        },
                      },
                      [t._v("\n          Back\n        ")],
                    ),
                    e(
                      "div",
                      {
                        staticClass: "remove-button-container",
                        class: { "show-confirm": t.showConfirmRemove },
                      },
                      [
                        e(
                          "button",
                          {
                            staticClass: "button-outlined danger",
                            class: {
                              "show-confirm": t.showConfirmRemove,
                              "is-loading": t.isDeleting,
                            },
                            attrs: {
                              role: "button",
                              type: "button",
                              id: "button-delete",
                            },
                            on: {
                              click: function (e) {
                                return t.removeBtnClicked();
                              },
                            },
                          },
                          [
                            t._v(
                              "\n          " +
                                t._s(
                                  t.showConfirmRemove
                                    ? t.isDeleting
                                      ? "Deleting"
                                      : "Confirm"
                                    : "Remove",
                                ) +
                                "\n           ",
                            ),
                            e("span", { staticClass: "delete-loader-spinner" }),
                          ],
                        ),
                        e(
                          "button",
                          {
                            staticClass: "button-outlined",
                            class: { "is-hidden ": !t.showConfirmRemove },
                            attrs: {
                              role: "button",
                              type: "button",
                              id: "btn-cancel-delete",
                            },
                            on: {
                              click: function (e) {
                                t.showConfirmRemove = !1;
                              },
                            },
                          },
                          [t._v("\n            Cancel\n          ")],
                        ),
                      ],
                    ),
                  ]),
                ]),
              ])
            : t._e(),
        ]);
      },
      Js = [
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "table-container-header" }, [
            e("div", { staticClass: "table-container-heading" }, [
              e("h5", [t._v("Dedicated number settings")]),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("p", { staticClass: "field-info" }, [
            t._v(
              "\n                This address must be a verified single sender or use a ",
            ),
            e("a", { attrs: { href: "/sending/verified_senders/" } }, [
              t._v("verified sender"),
            ]),
            t._v(" domain.\n              "),
          ]);
        },
      ];
    function Ys(t, e) {
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
    function Ws(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Ys(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : Ys(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var Qs = {
        name: "NumberEdit",
        mixins: [f],
        components: {},
        data: function () {
          return {
            contexts: this.$config.contexts,
            requestPoint: this.$config.requestPoint,
            originalForwardingAddress: "",
            forwardingAddress: "",
            originalForwardingAddressOptionValue: "",
            forwardingAddressOptionValue: "",
            forwardingAddressOptions: [],
            numberName: "",
            isTagEdit: !1,
            isSaving: !1,
            isDeleting: !1,
            verifiedSenders: [],
            verifiedDomains: [],
            showConfirmRemove: !1,
            mockDelete: !1,
          };
        },
        methods: Ws(
          Ws(
            {},
            Object(d["c"])({
              setSettings: Yt.mutations.SET_USER_SMS_EMAIL_SETTINGS,
              setNumbers: kt.mutations.SET_USER_NUMBERS,
            }),
          ),
          {},
          {
            init: function () {
              ((this.verifiedSenders = this.settings["verified_senders"]),
                (this.verifiedDomains = this.settings["verified_domains"]),
                (this.isSaving = !1),
                (this.isDeleting = !1),
                (this.showConfirmRemove = !1),
                this.settingsInitialised
                  ? this.setValues()
                  : this.$store.dispatch(
                      Yt.actions.FETCH_USER_SMS_EMAIL_SETTINGS,
                      !0,
                    ));
            },
            setValues: function () {
              (document
                .getElementById("user-error-alert")
                .classList.remove("visible"),
                this.numberEditing &&
                  (this.numberEditing.meta &&
                  this.numberEditing.meta.forward_replies &&
                  this.numberEditing.meta.forward_replies.length > 0
                    ? ((this.originalForwardingAddress =
                        this.numberEditing.meta.forward_replies[0]),
                      (this.forwardingAddress = this.originalForwardingAddress))
                    : ((this.originalForwardingAddress = ""),
                      (this.forwardingAddress = ""))),
                "" === this.forwardingAddress
                  ? (this.originalForwardingAddressOptionValue = "default")
                  : "off" === this.forwardingAddress
                    ? (this.originalForwardingAddressOptionValue = "off")
                    : (this.originalForwardingAddressOptionValue = "custom"),
                (this.forwardingAddressOptionValue =
                  this.originalForwardingAddressOptionValue));
              var t =
                  this.settings &&
                  this.settings["forwarding_address"] &&
                  "" !== this.settings["forwarding_address"]
                    ? " (" + this.settings["forwarding_address"] + ")"
                    : " (Off)",
                e = "Default" + t;
              ((this.forwardingAddressOptions = [
                { label: e, value: "default" },
                { label: "Custom", value: "custom" },
                { label: "Off", value: "off" },
              ]),
                (this.numberName = this.numberEditing
                  ? this.numberEditing.display.label
                  : ""));
            },
            goToNumberListPage: function () {
              this.$eventBus.$emit(u.SWITCH_CONTEXT, this.contexts.TAB_NUMBERS);
            },
            goToSmsSettingsPage: function () {
              this.$eventBus.$emit(u.SWITCH_CONTEXT, this.contexts.SETTINGS);
            },
            save: function () {
              var t = this;
              document
                .getElementById("user-error-alert")
                .classList.remove("visible");
              var e = {
                  number_id: this.numberEditing.assignment.number_id,
                  label: this.numberName,
                },
                s = !1;
              if ("default" === this.forwardingAddressOptionValue)
                ((e.meta = Object.assign({}, this.numberEditing.meta)),
                  (e.meta.forward_replies = []),
                  (this.isSaving = !0));
              else if ("off" === this.forwardingAddressOptionValue)
                ((e.meta = Object.assign({}, this.numberEditing.meta)),
                  (e.meta.forward_replies = ["off"]),
                  (this.isSaving = !0));
              else {
                var i =
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!i.test(String(this.forwardingAddress).toLowerCase())) {
                  var n = {
                    error: "Forward replies recipient is invalid.",
                    status: "ERROR",
                  };
                  return (HTML.handleError(n), void (this.isSaving = !1));
                }
                if (
                  !this.verifiedSenders.includes(this.forwardingAddress) &&
                  !this.verifiedDomains.includes(
                    this.forwardingAddress.split("@")[1],
                  )
                ) {
                  var a = {
                    error: "Forward replies recipient is unverified.",
                    status: "ERROR",
                  };
                  return (HTML.handleError(a), void (this.isSaving = !1));
                }
                this.isSaving = !0;
                var r = Object.assign({}, this.numberEditing.meta);
                ((r.forward_replies = [this.forwardingAddress]), (e.meta = r));
              }
              this.mixinAjax_put(
                this.requestPoint,
                "patch-number",
                e,
                function (e) {
                  ((t.isSaving = !1),
                    t.$store
                      .dispatch(kt.actions.FETCH_USER_NUMBERS, !1)
                      .then(function () {
                        (HTML.set_time(e.responseJSON),
                          t.$eventBus.$emit(
                            u.SWITCH_CONTEXT,
                            t.contexts.TAB_NUMBERS,
                          ));
                      }));
                },
                function (e) {
                  (HTML.handleError(e.responseJSON), (t.isSaving = !1));
                },
                s,
              );
            },
            cancel: function () {
              this.$eventBus.$emit(u.SWITCH_CONTEXT, this.contexts.TAB_NUMBERS);
            },
            getCountryFlagClass: function (t) {
              return "icon-flag is-".concat(t.toLowerCase());
            },
            removeBtnClicked: function () {
              this.showConfirmRemove
                ? this.mockDelete
                  ? this.doRemoveNumberMock()
                  : this.doRemoveNumber()
                : (this.showConfirmRemove = !0);
            },
            doRemoveNumberMock: function () {
              var t = this;
              ((this.isDeleting = !0),
                setTimeout(function () {
                  ((t.isDeleting = !1),
                    t.goToNumberListPage(),
                    HTML.set_time("Deleted the number successfully."));
                }, 4e3));
            },
            doRemoveNumber: function () {
              var t = this,
                e = !1;
              this.isDeleting = !0;
              var s = { number_id: this.numberEditing.assignment.number_id };
              this.mixinAjax_delete(
                this.requestPoint,
                "delete-number",
                s,
                function (e) {
                  t.$store
                    .dispatch(kt.actions.FETCH_USER_NUMBERS, !1)
                    .then(function () {
                      ((t.isDeleting = !1),
                        HTML.set_time(e.responseJSON),
                        t.goToNumberListPage());
                    });
                },
                function (e) {
                  ((t.isDeleting = !1), HTML.handleError(e.responseJSON));
                },
                e,
              );
            },
          },
        ),
        computed: Ws(
          {
            saveButtonDisabled: function () {
              return (
                ("custom" === this.forwardingAddressOptionValue &&
                  "" === this.forwardingAddress) ||
                this.nothingChanged
              );
            },
            nothingChanged: function () {
              return (
                this.forwardingAddress === this.originalForwardingAddress &&
                this.numberName === this.numberEditing.display.label &&
                this.originalForwardingAddressOptionValue ===
                  this.forwardingAddressOptionValue
              );
            },
          },
          Object(d["b"])({
            settings: Yt.getters.GET_USER_SMS_EMAIL_SETTINGS,
            settingsInitialised:
              Yt.getters.GET_IS_SMS_EMAIL_SETTINGS_INITIALISED,
            numberEditing: kt.getters.GET_NUMBER_EDITING,
          }),
        ),
        watch: {
          settings: function () {
            this.setValues();
          },
          numberEditing: function () {
            this.setValues();
          },
          forwardingAddressOptionValue: function (t) {
            "custom" === t &&
              "off" === this.forwardingAddress &&
              ((this.originalForwardingAddress = ""),
              (this.forwardingAddress = ""));
          },
        },
      },
      Xs = Qs,
      Ks = (s("d6eb"), Object(M["a"])(Xs, Vs, Js, !1, null, "03b727cf", null)),
      Zs = Ks.exports,
      ti = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "table-panel purchase-table-panel" },
          [
            t.fetchingNumbers && this.context == t.contexts.SETTINGS_PURCHASE
              ? e("AjaxLoadingSpinner", { attrs: { context: "FORCED" } })
              : t._e(),
            t._m(0),
            e(
              "div",
              {
                staticClass:
                  "table-container-topBar top search-grouped bar-full",
              },
              [
                e("div", { staticClass: "country-dropdown" }, [
                  e("div", { staticClass: "btn-group" }, [
                    e(
                      "a",
                      {
                        staticClass: "btn btn-default",
                        attrs: { id: "dropdown-options-toggler" },
                        on: { click: t.mixinTriggerable_toggleOpened },
                      },
                      [
                        t._v(t._s(t.country.label)),
                        e("i", { staticClass: "fa fa-angle-down" }),
                      ],
                    ),
                    e(
                      "ul",
                      {
                        staticClass:
                          "dropdown-menu dropdown-options mixinTriggerable_layer",
                        class: { "is-active": t.mixinTriggerable_isOpen },
                        attrs: { id: "countries" },
                      },
                      [
                        t._l(t.selectableCountries, function (s) {
                          return e(
                            "li",
                            {
                              key: s.code,
                              class: { selected: s.checked },
                              attrs: { id: s.code },
                              on: {
                                click: function (e) {
                                  return t.selectCountry(s);
                                },
                              },
                            },
                            [
                              e("label", { attrs: { for: s.code } }, [
                                e("input", {
                                  staticClass: "radio-countries",
                                  attrs: {
                                    type: "radio",
                                    name: "country",
                                    id: s.code,
                                  },
                                  domProps: { checked: s.checked },
                                }),
                                t._v(
                                  "\n              " +
                                    t._s(s.label) +
                                    " (" +
                                    t._s(s.dialCode) +
                                    ")\n            ",
                                ),
                              ]),
                            ],
                          );
                        }),
                        e("li", { staticClass: "dropdown-options-footer" }, [
                          e(
                            "button",
                            {
                              staticClass: "btn btn-outlined",
                              attrs: { type: "button" },
                              on: {
                                click: function (e) {
                                  return t.applyChanges();
                                },
                              },
                            },
                            [t._v("Apply")],
                          ),
                        ]),
                      ],
                      2,
                    ),
                  ]),
                ]),
                e("SearchBox", {
                  ref: "numberSearchBox",
                  attrs: { id: "number-search" },
                }),
              ],
              1,
            ),
            e("div", { staticClass: "table-container-content" }, [
              e("div", { staticClass: "table-wrapper" }, [
                e("table", { staticClass: "data-table" }, [
                  t._m(1),
                  e(
                    "tbody",
                    [
                      t._l(t.numbers, function (s) {
                        return e("tr", { key: s.id }, [
                          e("td", [
                            e(
                              "label",
                              {
                                attrs: { for: s.id },
                                on: {
                                  click: function (e) {
                                    return (
                                      e.preventDefault(),
                                      t.selectNumber(s)
                                    );
                                  },
                                },
                              },
                              [
                                e("div", { staticClass: "radio" }, [
                                  e(
                                    "span",
                                    {
                                      class: {
                                        checked: t.isNumberChecked(s.id),
                                      },
                                    },
                                    [
                                      e("input", {
                                        attrs: {
                                          type: "radio",
                                          name: "number",
                                          id: s.id,
                                        },
                                        domProps: { value: s.id },
                                      }),
                                    ],
                                  ),
                                ]),
                                t._v(
                                  t._s(t.getDisplayPhone(s.phone_number)) +
                                    "\n              ",
                                ),
                              ],
                            ),
                          ]),
                          e("td", [
                            s.capabilities
                              .map(function (t) {
                                return t.toLowerCase();
                              })
                              .includes("sms")
                              ? e("span", {
                                  staticClass: "long-event-indicator sms",
                                })
                              : t._e(),
                            s.capabilities
                              .map(function (t) {
                                return t.toLowerCase();
                              })
                              .includes("mms")
                              ? e("span", {
                                  staticClass: "long-event-indicator mms",
                                })
                              : t._e(),
                          ]),
                          e("td", [t._v(t._s(t.getNumberCost(s.country)))]),
                        ]);
                      }),
                      t.noNumbersFound
                        ? e("tr", [
                            e(
                              "td",
                              {
                                staticClass: "no-results",
                                attrs: { colspan: "3" },
                              },
                              [
                                t._v(
                                  "No numbers found. Please try a different search or contact support.",
                                ),
                              ],
                            ),
                          ])
                        : t._e(),
                      t.fetchingNumbers
                        ? e("tr", [
                            e(
                              "td",
                              {
                                staticClass: "no-results",
                                attrs: { colspan: "3" },
                              },
                              [t._v("Fetching numbers...")],
                            ),
                          ])
                        : t._e(),
                    ],
                    2,
                  ),
                ]),
              ]),
              0 != t.numbers.length
                ? e("div", { staticClass: "table-footer" }, [
                    e("div", { staticClass: "purchase-details" }, [
                      e("h4", [t._v("Dedicated number name")]),
                      e("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: t.label,
                            expression: "label",
                          },
                        ],
                        attrs: {
                          type: "text",
                          placeholder:
                            "Enter an administrative name for your dedicated number",
                        },
                        domProps: { value: t.label },
                        on: {
                          keyup: t.checkForEnter,
                          input: function (e) {
                            e.target.composing || (t.label = e.target.value);
                          },
                        },
                      }),
                    ]),
                    "US" == this.country.code
                      ? e("div", { staticClass: "notice-container" }, [t._m(2)])
                      : t._e(),
                    e(
                      "button",
                      {
                        staticClass: "btn blue hide-splash",
                        class: { "is-loading": t.activatingNumber },
                        attrs: { disabled: t.activatingNumber },
                        on: {
                          click: function (e) {
                            return t.assignNumber();
                          },
                        },
                      },
                      [
                        t._v("\n        Activate number"),
                        e("span", { staticClass: "loader-spinner" }),
                      ],
                    ),
                    e(
                      "button",
                      {
                        staticClass: "btn button-dropdown",
                        on: {
                          click: function (e) {
                            return t.goBack();
                          },
                        },
                      },
                      [t._v("Back")],
                    ),
                    e("span", { staticClass: "footer-info-text right" }, [
                      t._v("Prices in USD"),
                    ]),
                  ])
                : t._e(),
            ]),
          ],
          1,
        );
      },
      ei = [
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "table-container-header" }, [
            e("div", { staticClass: "table-container-heading" }, [
              e("h5", [t._v("Available numbers")]),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("thead", [
            e("tr", [
              e("th", [e("span", [t._v("Number")])]),
              e("th", [e("span", [t._v("Sending Capabilities")])]),
              e("th", [e("span", [t._v("Price")])]),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "bar-notice is-active is-info" }, [
            e("p", [
              e("span", { staticClass: "notice-icon" }),
              e("span", { staticClass: "bar-notice-message" }, [
                t._v(
                  "We recommend waiting until your dedicated number is verified before sending. Verification requires completing a 15 minute questionnaire. Your answers will be reviewed by mobile carriers in the USA, which normally take fewer than 7 days to complete the process (but can take up to 4 weeks).\n              ",
                ),
                e("br"),
                t._v(
                  "Sending to the USA/Canada is blocked until your dedicated number is verified.\n            ",
                ),
              ]),
            ]),
          ]);
        },
      ],
      si = function () {
        var t = this,
          e = t._self._c;
        return t.showLoading
          ? e("div", { staticClass: "loading" }, [
              t._m(0),
              e("div", { staticClass: "loading-backdrop" }),
            ])
          : t._e();
      },
      ii = [
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "load-more load-centered" }, [
            e("div", { staticClass: "loading-spinner" }, [
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
            ]),
          ]);
        },
      ];
    function ni(t, e) {
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
    function ai(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ni(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : ni(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var ri = {
        name: "AjaxLoadingSpinner",
        props: { context: String },
        data: function () {
          return { contexts: this.$config.contexts };
        },
        computed: ai(
          ai(
            {},
            Object(d["b"])({
              isAjaxRunning: bt.getters.GET_IS_AJAX_RUNNING,
              isQuietRequest: bt.getters.GET_IS_QUIET_REQUEST,
              showSentLoading: dt.getters.GET_SHOW_SENT_LOADING,
              showReceivedLoading: dt.getters.GET_SHOW_RECEIVED_LOADING,
              showSummaryLoading: dt.getters.GET_SHOW_SUMMARY_LOADING,
            }),
          ),
          {},
          {
            showLoading: function () {
              switch (this.context) {
                case "FORCED":
                  return !0;
                case this.contexts.TAB_SENT:
                  return this.showSentLoading;
                case this.contexts.TAB_RECEIVED:
                  return this.showReceivedLoading;
                case this.contexts.TAB_SUMMARY:
                  return this.showSummaryLoading;
                case this.contexts.TAB_NUMBERS:
                  return !1;
                case this.contexts.SETTINGS_PURCHASE:
                  return !1;
                default:
                  return this.isAjaxRunning && !this.isQuietRequest;
              }
            },
          },
        ),
      },
      oi = ri,
      ci = Object(M["a"])(oi, si, ii, !1, null, null, null),
      li = ci.exports;
    function ui(t, e) {
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
    function di(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ui(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : ui(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var hi = {
        name: "smsPurchase",
        mixins: [f, A, S],
        data: function () {
          return {
            contexts: this.$config.contexts,
            requestPoint: this.$config.requestPoint,
            selectableCountries: this.$config.selectableCountries,
            dedicatedNumberCosts: this.$config.dedicatedNumberCosts,
            showDetails: !1,
            numbers: [],
            country: {},
            pagesize: "10",
            showBlankTable: !1,
            selectedNumber: {},
            label: "",
            noNumbersFound: !1,
            activatingNumber: !1,
            fetchingNumbers: !1,
          };
        },
        components: { SearchBox: D, AjaxLoadingSpinner: li },
        props: { userData: Object, context: String },
        created: function () {
          (this.mixinEventListener_register(
            Object(r["a"])({}, N.TRIGGERABLE_CLOSED, this.checkClosed),
          ),
            this.mixinEventListener_on());
        },
        destroyed: function () {
          this.mixinEventListener_off();
        },
        methods: di(
          di({}, Object(d["c"])({ setNumbers: kt.mutations.SET_USER_NUMBERS })),
          {},
          {
            init: function () {
              var t = this;
              (this.$refs.numberSearchBox.initSearchBox(
                "Search for numbers containing...",
              ),
                (this.showDetails = !1),
                (this.numbers = []),
                (this.selectedNumber = {}),
                (this.label = ""),
                (this.noNumbersFound = !1),
                setTimeout(this.holdInit, 100),
                this.selectableCountries.forEach(function (e) {
                  "checked" === e.checked && (t.country = e);
                }));
            },
            holdInit: function () {
              (this.$eventBus.$emit("mixin-search-has-changed"),
                this.$eventBus.$emit("mixin-search-trigger"));
            },
            performNumberSearch: function (t) {
              var e = this;
              ((this.noNumbersFound = !1),
                (this.fetchingNumbers = !0),
                this.$refs.numberSearchBox.getMainSearch().startsWith("+") &&
                  this.selectableCountries.forEach(function (t) {
                    e.$refs.numberSearchBox
                      .getMainSearch()
                      .startsWith(t.dialCode) && (e.country = t);
                  }));
              var s = {
                matching: this.$refs.numberSearchBox.getMainSearch(),
                country: this.country.code,
                pagesize: this.pagesize,
              };
              this.mixinAjax_get(
                this.requestPoint,
                "available-numbers",
                s,
                function (t) {
                  ((e.numbers = t.responseJSON.results.numbers),
                    0 == e.numbers.length
                      ? (e.noNumbersFound = !0)
                      : (e.selectedNumber = e.numbers[0]),
                    e.$eventBus.$emit(u.AVAILABLE_LOADING_DONE),
                    (e.fetchingNumbers = !1));
                },
                function (t) {
                  (HTML.handleError(t.responseJSON), (e.fetchingNumbers = !1));
                },
                t,
              );
            },
            checkForEnter: function (t) {
              13 == t.keyCode && this.assignNumber();
            },
            assignNumber: function () {
              var t = this,
                e = !0;
              this.activatingNumber = !0;
              var s = {
                number: this.selectedNumber.phone_number,
                country: this.selectedNumber.country,
                number_id: this.selectedNumber.id,
                label: this.label,
              };
              this.mixinAjax_post(
                this.requestPoint,
                "assign-number",
                s,
                function (e) {
                  t.$store
                    .dispatch(kt.actions.FETCH_USER_NUMBERS, !1)
                    .then(function () {
                      (HTML.set_time(e.responseJSON),
                        (t.activatingNumber = !1),
                        t.goBack());
                    });
                },
                function (e) {
                  (HTML.handleError(e.responseJSON), (t.activatingNumber = !1));
                },
                e,
              );
            },
            getDisplayPhone: function (t) {
              var e = R.a.PhoneNumberUtil.getInstance(),
                s = R.a.PhoneNumberFormat,
                i = e.parse(t);
              return e.format(i, s.INTERNATIONAL);
            },
            selectNumber: function (t) {
              this.selectedNumber = t;
            },
            isNumberChecked: function (t) {
              return this.selectedNumber.id && t == this.selectedNumber.id;
            },
            selectCountry: function (t) {
              var e = this;
              (this.selectableCountries.forEach(function (t) {
                e.$set(t, "checked", "");
              }),
                this.$set(t, "checked", "checked"),
                (this.country = t),
                $("#countries > li .radio span").removeClass("checked"),
                $("#countries > li#" + t.code + " .radio span").addClass(
                  "checked",
                ),
                this.$eventBus.$emit("mixin-search-has-changed"));
            },
            applyChanges: function () {
              ((this.numbers = []),
                (this.selectedNumber = {}),
                this.$eventBus.$emit("mixin-search-has-changed"),
                this.mixinTriggerable_forceClose());
            },
            checkClosed: function (t) {
              "smsPurchase" == t &&
                this.$eventBus.$emit("mixin-search-trigger");
            },
            goBack: function () {
              this.$eventBus.$emit(u.GO_BACK);
            },
            getNumberCost: function (t) {
              if ("shared" === t) return "Free";
              var e =
                  this.dedicatedNumberCosts[t] * this.userData.plan_duration,
                s = "month";
              return (
                3 === this.userData.plan_duration
                  ? (s = "quarter")
                  : 12 === this.userData.plan_duration && (s = "year"),
                "$" + e + "/" + s
              );
            },
          },
        ),
      },
      mi = hi,
      pi = Object(M["a"])(mi, ti, ei, !1, null, null, null),
      _i = pi.exports,
      gi = {
        name: "SMSSettingsPage",
        mixins: [S],
        props: { context: String, userData: Object },
        components: { smsPurchase: _i, NumberEdit: Zs },
        data: function () {
          return { contexts: this.$config.contexts, apMetadata: {} };
        },
        created: function () {
          (this.mixinEventListener_register(
            Object(r["a"])({}, u.LOAD_AVAILABLE_NUMBERS, this.loadAvailable),
          ),
            this.mixinEventListener_on());
        },
        methods: {
          init: function (t, e) {
            ((this.apMetadata = e),
              this.showEmails && this.$refs.sms_email.init(),
              this.showNumberEdit && this.$refs.number_edit.init());
          },
          doSearch: function () {
            this.$refs.sms_purchase.performNumberSearch(
              !this.context == this.contexts.SETTINGS_PURCHASE,
            );
          },
          loadAvailable: function () {
            this.$refs.sms_purchase.init();
          },
        },
        computed: {
          showNumberEdit: function () {
            return this.context == this.contexts.SETTINGS_NUMBER_EDIT;
          },
          showEmails: function () {
            return this.context == this.contexts.SETTINGS_EMAIL2SMS;
          },
          showSmsPurchase: function () {
            return this.context == this.contexts.SETTINGS_PURCHASE;
          },
        },
      },
      fi = gi,
      bi = Object(M["a"])(fi, qs, zs, !1, null, null, null),
      vi = bi.exports,
      Si = function () {
        var t = this,
          e = t._self._c;
        return e("header", { staticClass: "page-content-header" }, [
          e("h3", { staticClass: "page-title" }, [
            t.page.showBack
              ? t._e()
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
                            attrs: { offset: "0", "stop-color": "#52b3ee" },
                          }),
                          e("stop", {
                            attrs: { offset: "1", "stop-color": "#3ca4e3" },
                          }),
                        ],
                        1,
                      ),
                      e("linearGradient", {
                        attrs: {
                          id: "b",
                          gradientUnits: "userSpaceOnUse",
                          x1: "17.7822",
                          x2: "17.7822",
                          "xlink:href": "#a",
                          y1: ".946777",
                          y2: "34.9468",
                        },
                      }),
                      e("linearGradient", {
                        attrs: {
                          id: "c",
                          gradientUnits: "userSpaceOnUse",
                          x1: "10",
                          x2: "10",
                          "xlink:href": "#a",
                          y1: "0",
                          y2: "20",
                        },
                      }),
                      e("rect", {
                        attrs: {
                          fill: "url(#b)",
                          height: "34",
                          rx: "5",
                          width: "34",
                          x: ".782227",
                          y: ".946777",
                        },
                      }),
                      e("path", {
                        attrs: {
                          d: "m0 0h20v20h-20z",
                          fill: "url(#c)",
                          transform: "translate(8.25 7.98047)",
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
                              d: "m17.0366 10.0131c.153.1695.34.305.5487.3977.2087.0928.4345.1407.6629.1407s.4543-.0479.663-.1407c.2087-.0927.3956-.2282.5487-.3977l.7833-.86837c.2261-.2494.5238-.42281.8522-.4965.3285-.07368.6717-.04403.9826.08489s.5744.35082.7544.63529c.1799.28447.2676.61762.2508.95379l-.06 1.1667c-.0118.2282.0244.4564.1063.6698.082.2133.2078.4071.3694.5687.1617.1616.3554.2874.5687.3694.2134.0819.4416.1181.6698.1063l1.1667-.06c.3371-.018.6714.069.957.249.2856.1799.5084.444.6377.7558s.1588.656.0844.9853c-.0745.3292-.2491.6273-.5.8532l-.8683.7833c-.1695.1531-.305.34-.3978.5487-.0927.2087-.1407.4346-.1407.663s.048.4542.1407.663c.0928.2087.2283.3956.3978.5487l.8683.7833c.2504.2259.4247.5237.499.8526.0742.329.0448.6728-.0842.9843-.1291.3116-.3514.5755-.6365.7555-.2851.1801-.619.2674-.9558.2501l-1.1666-.06c-.2282-.0116-.4563.0248-.6695.1068-.2132.0821-.4069.2079-.5684.3695-.1616.1615-.2874.3552-.3695.5684-.082.2132-.1184.4413-.1068.6695l.06 1.1666c.0174.3368-.07.6706-.25.9557-.1801.2852-.444.5075-.7556.6366-.3115.129-.6553.1584-.9842.0842-.329-.0743-.6268-.2486-.8527-.499l-.7833-.8683c-.1531-.1695-.34-.305-.5487-.3978-.2087-.0927-.4346-.1407-.663-.1407s-.4542.048-.663.1407c-.2087.0928-.3956.2283-.5487.3978l-.7858.8692c-.2259.2503-.5237.4246-.8526.4989-.329.0743-.6728.0448-.9843-.0842-.3116-.1291-.5755-.3514-.7555-.6365-.1801-.2851-.2674-.619-.2501-.9557l.06-1.1667c.0115-.2281-.025-.4562-.1071-.6693-.0821-.2132-.2079-.4068-.3695-.5683-.1615-.1615-.3551-.2874-.5682-.3695-.2132-.0821-.4412-.1185-.6694-.1071l-1.1666.06c-.3358.016-.66836-.0721-.9522-.2522-.28385-.1802-.50517-.4435-.63372-.7542-.12855-.3106-.15808-.6533-.08453-.9814.07354-.328.24656-.6253.49543-.8513l.86832-.7834c.1695-.153.305-.34.3978-.5487.0927-.2087.1407-.4345.1407-.6629s-.048-.4543-.1407-.663c-.0928-.2087-.2283-.3956-.3978-.5487l-.86832-.7833c-.25071-.2258-.4253-.5238-.49975-.8528-.07446-.3291-.04512-.6732.08397-.9849.1291-.3117.3516-.5758.63692-.7559.28531-.1801.61938-.2673.95638-.2498l1.1666.06c.2286.0118.457-.0246.6706-.1068s.4075-.2083.5692-.3702c.1617-.162.2875-.3561.3694-.5698s.1179-.4422.1058-.6707l-.06-1.1666c-.0161-.33591.0719-.66857.2519-.95255.1801-.28399.4434-.50545.7541-.63411s.6535-.15825.9816-.08473c.3281.07353.6256.24658.8516.49552z",
                            },
                          }),
                          e("path", {
                            attrs: {
                              d: "m18.2485 22.9812c2.7615 0 5-2.2386 5-5s-2.2385-5-5-5c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5z",
                            },
                          }),
                        ],
                      ),
                    ],
                    1,
                  ),
                ]),
            t.page.showBack
              ? e("button", {
                  staticClass: "icon-back",
                  on: { click: t.goBack },
                })
              : t._e(),
            t._v("\n    " + t._s(t.title) + "\n  "),
          ]),
          "" != t.page.description
            ? e("p", [
                e("span", {
                  domProps: { innerHTML: t._s(t.page.description) },
                }),
              ])
            : t._e(),
          t.isTabTable
            ? e(
                "div",
                { staticClass: "info-messaging" },
                [
                  t._m(0),
                  e("RatesDropdown", {
                    attrs: {
                      displayText: "SMS messaging rates",
                      fullStop: ".",
                    },
                  }),
                  e(
                    "p",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: t.clientPermissions,
                          expression: "clientPermissions",
                        },
                      ],
                    },
                    [
                      t._v("Configure how SMS messages are sent on the "),
                      e("a", { attrs: { href: "/sending/sms_settings" } }, [
                        t._v("SMS Settings"),
                      ]),
                      t._v(" page."),
                    ],
                  ),
                ],
                1,
              )
            : t._e(),
        ]);
      },
      Ci = [
        function () {
          var t = this,
            e = t._self._c;
          return e("p", [
            t._v(
              "SMS messaging gives you the ability to send and receive SMS messages via email. ",
            ),
            e("br", { staticClass: "desktop-hide" }),
            e(
              "a",
              {
                staticClass: "external-icon",
                attrs: {
                  href: "https://support.smtp2go.com/hc/en-gb/articles/6352101968409",
                  target: "_blank",
                },
              },
              [t._v("Learn more")],
            ),
            t._v(" or see "),
          ]);
        },
      ],
      Ei = {
        name: "SMSHeader",
        mixins: [f, A],
        props: { context: String, title: String, clientPermissions: Boolean },
        components: { RatesDropdown: re },
        data: function () {
          return {
            contexts: this.$config.contexts,
            headers: this.$config.headers,
            showBack: !1,
            page: { title: "", description: "", showBack: !1 },
            requestPoint: this.$config.requestPoint,
            datestamp_format: Object,
            firstLoad: !0,
            showRates: !1,
          };
        },
        methods: {
          init: function () {
            switch (((this.firstLoad = !1), this.context)) {
              case this.contexts.TAB_SENT:
              case this.contexts.TAB_RECEIVED:
              case this.contexts.TAB_SUMMARY:
              case this.contexts.TAB_SETTINGS:
              case this.contexts.TAB_NUMBERS:
              case this.contexts.TAB_RECHARGE:
              case this.contexts.TAB_TOPUP:
              case this.contexts.TAB_EMAIL2SMS:
                this.page = this.headers["tabs"];
                break;
              case this.contexts.SETTINGS_NUMBERS:
              case this.contexts.SETTINGS_PURCHASE:
                this.page = this.headers["numbers"];
                break;
              case this.contexts.SETTINGS_EMAIL2SMS:
                this.page = this.headers["email2sms"];
                break;
              default:
                break;
            }
          },
          goBack: function () {
            this.$eventBus.$emit(u.GO_BACK);
          },
        },
        computed: {
          isTabTable: function () {
            return this.context.startsWith(this.contexts.TAB);
          },
        },
      },
      Ti = Ei,
      yi = Object(M["a"])(Ti, Si, Ci, !1, null, null, null),
      wi = yi.exports,
      xi = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          {
            staticClass: "page-alert",
            class: { success: t.isSuccess, error: !t.isSuccess },
          },
          [
            e("span", { staticClass: "page-alert-icon" }, [
              t.isSuccess
                ? e(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                      },
                    },
                    [
                      e("rect", {
                        attrs: { fill: "none", width: "16", height: "16" },
                      }),
                      e("path", {
                        attrs: {
                          fill: "none",
                          stroke: "#009364",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "1.5px",
                          d: "M12.948,3.99,8.41,8.535c-.39-.4-1.773-1.929-1.773-1.929",
                          transform: "translate(-1.792 1.738)",
                        },
                      }),
                    ],
                  )
                : t._e(),
              t.isSuccess
                ? t._e()
                : e(
                    "svg",
                    {
                      attrs: {
                        height: "1792",
                        viewBox: "0 0 1792 1792",
                        width: "1792",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                    },
                    [
                      e("path", {
                        attrs: {
                          fill: "#b35e4f",
                          d: "M896 128q209 0 385.5 103t279.5 279.5 103 385.5-103 385.5-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103zm128 1247v-190q0-14-9-23.5t-22-9.5h-192q-13 0-23 10t-10 23v190q0 13 10 23t23 10h192q13 0 22-9.5t9-23.5zm-2-344l18-621q0-12-10-18-10-8-24-8h-220q-14 0-24 8-10 6-10 18l17 621q0 10 10 17.5t24 7.5h185q14 0 23.5-7.5t10.5-17.5z",
                        },
                      }),
                    ],
                  ),
            ]),
            e("p", { staticClass: "page-alert-message" }, [
              t._v(
                "\n    Your SMS Messaging number has been successfully added to your account.\n  ",
              ),
            ]),
          ],
        );
      },
      Ni = [],
      Ai = {
        name: "pageAlert",
        data: function () {
          return { isSuccess: !0 };
        },
      },
      Oi = Ai,
      Ii = (s("4c72"), Object(M["a"])(Oi, xi, Ni, !1, null, null, null)),
      Mi = Ii.exports,
      ki = function () {
        var t = this,
          e = t._self._c;
        return t.showNotice
          ? e(
              "div",
              { staticClass: "bar-notice notice-top is-info is-grouped" },
              [
                t._l(t.numbers, function (s) {
                  return e(
                    "p",
                    {
                      key: s.number.id,
                      class:
                        "PENDING" === s.verification_status ||
                        "SENT" === s.verification_status ||
                        (void 0 !== s.verification.details &&
                          "" !== s.verification.details)
                          ? ""
                          : "has-icon",
                    },
                    [
                      ["NQ", "PENDING", "REJECTED", "SENT"].includes(
                        s.verification_status,
                      )
                        ? e("span", {
                            class: [
                              "PENDING" === s.verification_status ||
                              "SENT" === s.verification_status
                                ? "info-icon"
                                : "notice-icon",
                              "REJECTED" === s.verification_status
                                ? "hide"
                                : "",
                            ],
                          })
                        : t._e(),
                      "NQ" === s.verification_status
                        ? e("span", { staticClass: "bar-notice-message" }, [
                            t.context !== t.contexts.TAB_NUMBERS
                              ? e("div", [
                                  e("strong", [t._v("Action required:")]),
                                  t._v(
                                    " You need to request approval for your USA dedicated number to prevent messages being blocked.",
                                  ),
                                  e("br"),
                                  e("br"),
                                ])
                              : e("div", [
                                  e("strong", [t._v("Action required:")]),
                                  t._v(
                                    " To request approval for your USA dedicated number, click the 'Verify' button next to your number. ",
                                  ),
                                  e("br"),
                                  t._v(
                                    "You'll need to complete a short questionnaire, which should take around 15 minutes.",
                                  ),
                                  e("br"),
                                ]),
                            t.clientPermissions
                              ? t._e()
                              : e("div", [
                                  t._v(
                                    "To request approval for your USA dedicated number, you can make this request through one of your team members with permission to do so.",
                                  ),
                                ]),
                          ])
                        : "PENDING" === s.verification_status
                          ? e("span", { staticClass: "bar-notice-message" }, [
                              e("strong", [
                                t._v(
                                  "Your questionnaire for " +
                                    t._s(s.display.full) +
                                    " was submitted to our team for review on " +
                                    t._s(
                                      t.getDateFormat(s.verification.created),
                                    ) +
                                    ".",
                                ),
                              ]),
                              t._m(0, !0),
                            ])
                          : "REJECTED" === s.verification_status
                            ? e(
                                "span",
                                {
                                  staticClass:
                                    "bar-notice-message notice-column",
                                },
                                [
                                  e(
                                    "span",
                                    { staticClass: "outer-notice-wrapper" },
                                    [
                                      "REJECTED" === s.verification_status
                                        ? e("span", {
                                            staticClass: "notice-icon",
                                          })
                                        : t._e(),
                                      e(
                                        "span",
                                        { staticClass: "bar-notice-message" },
                                        [
                                          e("strong", [
                                            t._v("Action required:"),
                                          ]),
                                          t._v(
                                            " Your questionnaire for " +
                                              t._s(s.display.full) +
                                              " needs to be resubmitted \n          ",
                                          ),
                                          void 0 !== s.verification.details &&
                                          "" !== s.verification.details
                                            ? e("span", [
                                                t._v(
                                                  " \n            with the following further information:\n          ",
                                                ),
                                              ])
                                            : t._e(),
                                        ],
                                      ),
                                    ],
                                  ),
                                  e(
                                    "span",
                                    {
                                      staticClass: "inner-notice-wrapper",
                                      staticStyle: {
                                        "white-space": "pre-line",
                                      },
                                    },
                                    [
                                      void 0 !== s.verification.details &&
                                      "" !== s.verification.details
                                        ? e(
                                            "span",
                                            { staticClass: "bar-notice-inner" },
                                            [
                                              t._v(
                                                t._s(s.verification.details) +
                                                  "\n          ",
                                              ),
                                              void 0 !==
                                                s.verification.sub_details &&
                                              "" !== s.verification.sub_details
                                                ? e("span", [
                                                    e("p", [
                                                      e("br"),
                                                      t._v(
                                                        "\n              " +
                                                          t._s(
                                                            s.verification
                                                              .sub_details,
                                                          ) +
                                                          "\n            ",
                                                      ),
                                                    ]),
                                                  ])
                                                : t._e(),
                                            ],
                                          )
                                        : t._e(),
                                    ],
                                  ),
                                  t.clientPermissions
                                    ? t._e()
                                    : e("div", [
                                        t._v(
                                          "To resubmit your questionnaire, you can make this request through one of your team members with permission to do so.",
                                        ),
                                      ]),
                                ],
                              )
                            : "SENT" === s.verification_status
                              ? e(
                                  "span",
                                  { staticClass: "bar-notice-message" },
                                  [
                                    e("strong", [
                                      t._v(
                                        "Your questionnaire for " +
                                          t._s(s.display.full) +
                                          " has been forwarded to mobile carriers in the USA on " +
                                          t._s(
                                            t.getDateFormat(
                                              s.verification.sent,
                                            ),
                                          ) +
                                          " for review.",
                                      ),
                                    ]),
                                    e("br"),
                                    t._v(
                                      "This process usually takes fewer than 7 days, but can take up to 4 weeks.\n      ",
                                    ),
                                    t._m(1, !0),
                                  ],
                                )
                              : t._e(),
                    ],
                  );
                }),
                t.showNoticeButton
                  ? e("div", { staticClass: "notice-footer" }, [
                      t.showNoticeButton
                        ? e(
                            "button",
                            {
                              staticClass: "button-outlined",
                              on: { click: t.manageNumbers },
                            },
                            [t._v("Manage dedicated numbers")],
                          )
                        : t._e(),
                    ])
                  : t._e(),
              ],
              2,
            )
          : t._e();
      },
      Di = [
        function () {
          var t = this,
            e = t._self._c;
          return e("ul", [
            e("li", [
              t._v(
                "Sending to the USA/Canada is blocked until your dedicated number is verified.",
              ),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t._self._c;
          return e("ul", [
            e("li", [
              t._v(
                "We recommend waiting until your USA dedicated number is verified before sending (to ensure a high delivery rate).",
              ),
            ]),
            e("li", [
              t._v(
                "Sending to the USA/Canada is blocked until your dedicated number is verified.",
              ),
            ]),
          ]);
        },
      ];
    function ji(t, e) {
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
    function Ri(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ji(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : ji(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var Bi = {
        name: "BarNoticeGrouped",
        props: { context: String, clientPermissions: Boolean },
        data: function () {
          return { contexts: this.$config.contexts };
        },
        created: function () {
          this.numbersInitialised ||
            this.gettingNumbers ||
            this.$store.dispatch(kt.actions.FETCH_USER_NUMBERS, !0);
        },
        methods: {
          manageNumbers: function () {
            switch (this.context) {
              case this.contexts.TAB_SETTINGS:
              case this.contexts.TAB_NUMBERS:
              case this.contexts.TAB_EMAIL2SMS:
              case this.contexts.TAB_RECHARGE:
              case this.contexts.TAB_TOPUP:
                this.$eventBus.$emit(
                  u.SWITCH_CONTEXT,
                  this.contexts.TAB_NUMBERS,
                );
                break;
              default:
                window.location.href = "/sending/sms_settings/#dedicated";
                break;
            }
          },
          getDateFormat: function (t) {
            return c.a.unix(t).format("MMMM Do, YYYY");
          },
        },
        computed: Ri(
          Ri(
            {},
            Object(d["b"])({
              gettingNumbers: kt.getters.GET_IS_FETCHING,
              numbersInitialised: kt.getters.GET_IS_INITIALISED,
              numbers: kt.getters.GET_USER_NUMBERS,
              hasUSNumber: kt.getters.GET_HAS_US_NUMBER,
              hasUnverifiedUSNumber: kt.getters.GET_HAS_UNVERIFIED_US_NUMBER,
              hasPendingUSNumber: kt.getters.GET_HAS_PENDING_US_NUMBER,
            }),
          ),
          {},
          {
            showNotice: function () {
              return (
                this.numbersInitialised &&
                (this.hasUnverifiedUSNumber || this.hasPendingUSNumber)
              );
            },
            showNoticeButton: function () {
              return (
                "tab-numbers" !== this.context && this.hasUnverifiedUSNumber
              );
            },
          },
        ),
      },
      Ui = Bi,
      Pi = Object(M["a"])(Ui, ki, Di, !1, null, null, null),
      $i = Pi.exports,
      Gi = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "bar-notice notice-top is-info" },
          [
            e("p", [
              e("span", { staticClass: "notice-icon" }),
              e(
                "span",
                { staticClass: "bar-notice-message notice-country-specific" },
                [
                  e("strong", [t._v("Sending SMS messages to North America?")]),
                  e("div", [
                    t._v(
                      "Mobile carriers require all senders to register a USA dedicated number before sending to the USA/Canada.",
                    ),
                  ]),
                  t.clientPermissions
                    ? e(
                        "button",
                        {
                          staticClass: "button-outlined",
                          on: { click: t.registerNumber },
                        },
                        [t._v("Register a dedicated number")],
                      )
                    : t._e(),
                  t.clientPermissions
                    ? e(
                        "button",
                        {
                          staticClass: "button-outlined",
                          attrs: { role: "button", type: "button" },
                          on: {
                            click: function (e) {
                              t.showDialog = !t.showDialog;
                            },
                          },
                        },
                        [t._v("Dismiss")],
                      )
                    : t._e(),
                  t.clientPermissions
                    ? t._e()
                    : e("div", [
                        t._v(
                          "To add a dedicated number, you can make this request through one of your team members with permission to do so.",
                        ),
                      ]),
                ],
              ),
            ]),
            e("Transition", { attrs: { name: "fade", mode: "out-in" } }, [
              t.showDialog
                ? e("div", { staticClass: "transition-container" }, [
                    e("div", {
                      staticClass: "modal-backdrop fade in",
                      on: {
                        click: function (e) {
                          t.showDialog = !t.showDialog;
                        },
                      },
                    }),
                    e(
                      "div",
                      {
                        staticClass:
                          "modal-dialog modal-medium confirm-exit is-active",
                      },
                      [
                        e("header", { staticClass: "modal-header" }, [
                          e("h4", [t._v("Are you sure?")]),
                          e(
                            "button",
                            {
                              staticClass: "bootbox-close-button close",
                              attrs: { type: "button" },
                              on: {
                                click: function (e) {
                                  t.showDialog = !t.showDialog;
                                },
                              },
                            },
                            [t._v("×")],
                          ),
                        ]),
                        e("p", [
                          t._v(
                            "If you don't register a dedicated USA number, new carrier requirements will prevent you from ever sending messages to the USA or Canada",
                          ),
                        ]),
                        e("div", { staticClass: "modal-footer" }, [
                          e(
                            "button",
                            {
                              staticClass: "btn blue",
                              on: { click: t.confirmDismiss },
                            },
                            [t._v("I understand")],
                          ),
                          e(
                            "button",
                            {
                              staticClass: "btn btn-outlined template-close",
                              on: {
                                click: function (e) {
                                  t.showDialog = !t.showDialog;
                                },
                              },
                            },
                            [t._v("Back")],
                          ),
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
      Li = [],
      Fi = {
        name: "BarNoticeUsa",
        mixins: [f],
        props: { context: String, clientPermissions: Boolean },
        data: function () {
          return {
            requestPoint: this.$config.requestPoint,
            contexts: this.$config.contexts,
            showDialog: !1,
          };
        },
        methods: {
          registerNumber: function () {
            window.location.href = "/sending/sms_settings/#dedicated";
          },
          confirmDismiss: function () {
            (this.mixinAjax_post(
              this.requestPoint,
              "hide-usa-banner",
              null,
              function () {},
              function () {},
              !0,
            ),
              (this.showDialog = !this.showDialog),
              this.$eventBus.$emit(u.HIDE_USA_BANNER));
          },
        },
      },
      Hi = Fi,
      qi = (s("5f2b"), Object(M["a"])(Hi, Gi, Li, !1, null, "02a4e042", null)),
      zi = qi.exports,
      Vi = function () {
        var t = this;
        t._self._c;
        return t._m(0);
      },
      Ji = [
        function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "bar-notice notice-top is-info" }, [
            e("p", [
              e("span", { staticClass: "notice-icon" }),
              e("span", { staticClass: "bar-notice-message" }, [
                e("strong", [
                  t._v("You have reached your temporary SMS sending limit."),
                ]),
                e("div", [
                  t._v(
                    "No action is required. This limit is in place to mitigate excessive sending by rogue scripts and spam outbreaks. Our team will review your traffic and increase your sending limit shortly. Your messages will be held in the meantime. If you have any questions or concerns please submit a support ticket.",
                  ),
                ]),
              ]),
            ]),
          ]);
        },
      ],
      Yi = {
        name: "BarNoticeQuota",
        mixins: [f],
        props: { context: String },
        data: function () {
          return {
            requestPoint: this.$config.requestPoint,
            contexts: this.$config.contexts,
            showDialog: !1,
          };
        },
        methods: {},
      },
      Wi = Yi,
      Qi = (s("7aff"), Object(M["a"])(Wi, Vi, Ji, !1, null, "60614314", null)),
      Xi = Qi.exports,
      Ki = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "sms-verification" },
          [
            t.isLoading
              ? e("AjaxLoadingSpinner", { attrs: { context: "FORCED" } })
              : t._e(),
            e("header", { staticClass: "page-content-header" }, [
              e("h3", { staticClass: "page-title" }, [
                e("button", {
                  staticClass: "icon-back",
                  on: { click: t.closeForm },
                }),
                t.isSubmitted
                  ? e("span", [t._v("Submission successful!")])
                  : e("span", [t._v("Verify your number")]),
              ]),
              e("p", [
                t.isSubmitted
                  ? e("span", [
                      t._v("Thanks! We have received your submission."),
                    ])
                  : e("span", [
                      t._v(
                        "\n      Please complete the questionnaire below to fully activate your dedicated USA number.\n      ",
                      ),
                      e("br"),
                      t._v(
                        "Your answers will be reviewed by mobile carriers in the USA, which normally take fewer than 7 days to complete the process (but can take up to 4 weeks).\n      ",
                      ),
                    ]),
              ]),
            ]),
            e("div", {
              class: { hide: t.isSubmitted },
              attrs: { id: "form", "data-paperform-id": "sms-verify" },
            }),
          ],
          1,
        );
      },
      Zi = [],
      tn = {
        name: "NumberVerification",
        mixins: [f],
        components: { AjaxLoadingSpinner: li },
        data: function () {
          return {
            requestPoint: this.$config.requestPoint,
            isLoading: !0,
            hasLoaded: !1,
            isSubmitted: !1,
            number: Object,
          };
        },
        methods: {
          embedTypeform: function (t, e, s) {
            var i = this;
            ((this.number = t), this.hasLoaded || (this.isLoading = !0));
            var n = {
                "547od": this.number.number.phone_number,
                "2iln2": e.accountID,
                "3d1cq": e.email,
                "589ba": s,
              },
              a = e.username.split(" ");
            if (((n["b86qa"] = a[0]), a.length > 1)) {
              var r = a.slice(1).join(" ");
              n["4ad69"] = r;
            }
            var o = e.tfn_subs[this.number.number.phone_number],
              c = [];
            if (null !== o && void 0 !== o)
              for (var l in o)
                if ("address" === l) {
                  var u = o[l],
                    d = [
                      u.country,
                      u.postcode,
                      u.state,
                      u.suburb,
                      "".concat(u.streetNumber, " ").concat(u.street).trim(),
                    ].join(",");
                  n["485mo"] = d;
                } else if ("6osqp" === l) {
                  var h = o[l].split(",").map(function (t) {
                    return t.trim();
                  });
                  c = h.map(function (t) {
                    return { "6osqp": t };
                  });
                } else n[l] = o[l];
            var m = [].concat(
                Object(Oe["a"])(
                  Object.entries(n).map(function (t) {
                    var e = Object(b["a"])(t, 2),
                      s = e[0],
                      i = e[1];
                    return { key: s, value: i };
                  }),
                ),
                Object(Oe["a"])(
                  c.map(function (t) {
                    var e = Object.entries(t),
                      s = Object(b["a"])(e, 1),
                      i = Object(b["a"])(s[0], 2),
                      n = i[0],
                      a = i[1];
                    return { key: n, value: a };
                  }),
                ),
              ),
              p = m
                .map(function (t) {
                  var e = t.key,
                    s = t.value;
                  return ""
                    .concat(encodeURIComponent(e), "=")
                    .concat(encodeURIComponent(s));
                })
                .join("&"),
              _ = document.querySelector("[data-paperform-id='sms-verify']");
            _.setAttribute("prefill", p);
            var g = document.createElement("script");
            (g.setAttribute("src", "https://paperform.co/__embed.min.js"),
              document.body.appendChild(g));
            var f = this;
            (window.addEventListener("PaperformSubmission", function (t) {
              f.formSubmitted(t.detail);
            }),
              (this.typeformModal = !0),
              this.hasLoaded ||
                setTimeout(function () {
                  ((i.isLoading = !1), (i.hasLoaded = !0));
                }, 2500));
          },
          formSubmitted: function (t) {
            var e = this;
            (this.$eventBus.$emit(u.SHOW_VERIFICATION_FORM, !1),
              this.$eventBus.$emit(u.VERIFICATION_SUBMITTED),
              (this.isSubmitted = !0),
              (s = {
                submission_id: t.submission_id,
                form_id: t.form_id,
                submission: JSON.stringify(t.data),
              }),
              this.mixinAjax_post(
                this.requestPoint,
                "store-tfn-request",
                s,
                function () {},
                function () {
                  e.isSubmitted = !1;
                },
                !0,
              ),
              void 0 == this.number.assignment.metadata &&
                (this.number.assignment.metadata = {}),
              (this.number.assignment.metadata.verification_status =
                "submitted"));
            var s = {
              number_id: this.number.assignment.number_id,
              label: this.number.assignment.label,
              metadata: JSON.stringify(this.number.assignment.metadata),
            };
            this.mixinAjax_put(
              this.requestPoint,
              "patch-number",
              s,
              function () {
                e.$store.dispatch(kt.actions.FETCH_USER_NUMBERS, !0);
              },
              function () {},
              !0,
            );
          },
          closeForm: function () {
            this.$eventBus.$emit(u.SHOW_VERIFICATION_FORM, !1);
          },
        },
      },
      en = tn,
      sn = (s("12a1"), Object(M["a"])(en, Ki, Zi, !1, null, null, null)),
      nn = sn.exports;
    function an(t, e) {
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
    function rn(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? an(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : an(Object(s)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(s, e),
                );
              });
      }
      return t;
    }
    var on = {
        name: "SMS",
        mixins: [f, S, E],
        components: {
          InfoSplash: G,
          UpgradeSplash: V,
          SubaccountSplash: K,
          SMSTabTable: Hs,
          SMSSettingsPage: vi,
          SMSHeader: wi,
          pageAlert: Mi,
          AjaxLoadingSpinner: li,
          BarNoticeGrouped: $i,
          BarNoticeUsa: zi,
          BarNoticeQuota: Xi,
          NumberVerification: nn,
        },
        data: function () {
          return {
            contexts: this.$config.contexts,
            requestPoint: this.$config.requestPoint,
            apMetadata: PAGE_DATA.apMetadata,
            clientTimezone: PAGE_DATA.clientTimezone,
            showInfoSplash: PAGE_DATA.show_info_splash,
            showUpgradeSplash: PAGE_DATA.show_upgrade_splash,
            hidePaymentSplash: PAGE_DATA.hide_payment_splash,
            showSubaccountSplash: PAGE_DATA.show_subaccount_splash,
            smsAccount: PAGE_DATA.sms_account,
            userData: PAGE_DATA.user_data,
            showAlert: !1,
            context: "",
            showNoticeUsa: !0,
            showVerificationForm: !1,
            questionnaireDates: {},
            smsQuota: "-",
            smsSentThisMonth: "-",
            showBarNoticeQuota: !1,
            pageTitle: "SMS Messaging",
            clientPermissions: !1,
          };
        },
        mounted: function () {
          (this.showSplash
            ? (this.context = this.contexts.SPLASH)
            : (this.init(), (this.context = this.contexts.TAB_SENT)),
            this.switchContext(this.context),
            this.$eventBus.$on(
              "update-quota-sentThisMonth",
              this.handleQuotaChanges,
            ));
        },
        created: function () {
          (this.mixinEventListener_register(
            Object(r["a"])(
              Object(r["a"])(
                Object(r["a"])(
                  Object(r["a"])(
                    Object(r["a"])({}, u.CREATE_ACCOUNT, this.createSMSAccount),
                    u.SWITCH_CONTEXT,
                    this.switchContext,
                  ),
                  u.SHOW_VERIFICATION_FORM,
                  this.switchVerificationForm,
                ),
                u.HIDE_USA_BANNER,
                this.hideUSABanner,
              ),
              u.GO_BACK,
              this.goBack,
            ),
          ),
            this.mixinEventListener_on());
        },
        destroyed: function () {
          this.mixinEventListener_off();
        },
        methods: {
          init: function () {
            ((void 0 !== this.clientTimezone &&
              null !== this.clientTimezone &&
              "" !== this.clientTimezone) ||
              (this.clientTimezone = c.a.tz.guess()),
              this.showSplash ||
                ((this.showNoticeUsa =
                  this.apMetadata["app_settings"]["show_sms_usa_banner"]),
                this.initChildren()),
              this.numbersInitialised ||
                this.gettingNumbers ||
                this.$store.dispatch(kt.actions.FETCH_USER_NUMBERS, !0),
              this.getClientPermissions());
          },
          getClientPermissions: function () {
            var t = this,
              e = {};
            this.mixinAjax_get(
              this.requestPoint,
              "get-client-permissions",
              e,
              function (e) {
                1 == e.responseJSON.results.client_permissions
                  ? (t.clientPermissions = !0)
                  : (t.clientPermissions = !1);
              },
              function (t) {
                HTML.handleError(t.responseJSON);
              },
              !0,
            );
          },
          handleQuotaChanges: function (t, e) {
            ((this.smsQuota = t),
              (this.smsSentThisMonth = e),
              (this.showBarNoticeQuota =
                !this.accountBanned && this.smsSentThisMonth >= this.smsQuota));
          },
          initChildren: function () {
            (this.$refs.sms_tab_table.init(
              this.clientTimezone,
              this.apMetadata,
              this.showUpgradeSplash,
            ),
              this.$refs.sms_settings_page.init(
                this.clientTimezone,
                this.apMetadata,
              ));
          },
          createSMSAccount: function (t, e) {
            var s = this,
              i = { client_timezone: c.a.tz.guess() },
              n = !0;
            this.mixinAjax_post(
              this.requestPoint,
              "create",
              i,
              function (i) {
                ((s.showInfoSplash = !1),
                  (s.apMetadata = i.responseJSON.results.metadata),
                  (s.smsAccount = s.apMetadata["sms_account"]),
                  s.$nextTick(function () {
                    s.initChildren();
                  }),
                  s.switchContext(s.contexts.TAB_SENT),
                  "id" in t
                    ? s.assignNumber(t, e, !0)
                    : (window.location.href = "/sending/sms_settings/#topup"));
              },
              function (t) {
                (HTML.handleError(t.responseJSON),
                  (s.showInfoSplash = !1),
                  (s.showSmsTable = !0));
              },
              n,
            );
          },
          assignNumber: function (t, e) {
            var s =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              i = !1,
              n = {
                number: t.phone_number,
                country: t.country,
                number_id: t.id,
                label: e,
              };
            this.mixinAjax_post(
              this.requestPoint,
              "assign-number",
              n,
              function (t) {
                (HTML.set_time(t.responseJSON),
                  s && (window.location.href = "/sending/sms_settings/#topup"));
              },
              function (t) {
                HTML.handleError(t.responseJSON);
              },
              i,
            );
          },
          switchContext: function (t) {
            var e = this;
            ((this.context = t),
              this.$eventBus.$emit(u.CLEAR_POLLING),
              this.$nextTick(function () {
                switch ((e.showSplash || e.$refs.sms_header.init(), t)) {
                  case e.contexts.SPLASH:
                    break;
                  case e.contexts.TAB_SENT:
                  case e.contexts.TAB_RECEIVED:
                  case e.contexts.TAB_SUMMARY:
                  case e.contexts.TAB_SETTINGS:
                  case e.contexts.TAB_NUMBERS:
                  case e.contexts.TAB_RECHARGE:
                  case e.contexts.TAB_TOPUP:
                  case e.contexts.TAB_EMAIL2SMS:
                    e.$refs.sms_tab_table.switchTo(
                      e.clientTimezone,
                      e.apMetadata,
                    );
                    break;
                  case e.contexts.SETTINGS_PURCHASE:
                  case e.contexts.SETTINGS_EMAIL2SMS:
                  case e.contexts.SETTINGS_NUMBER_EDIT:
                    e.$refs.sms_settings_page.init(
                      e.clientTimezone,
                      e.apMetadata,
                    );
                    break;
                  default:
                    e.$eventBus.$emit(u.SWITCH_CONTEXT, e.contexts.TAB_SENT);
                    break;
                }
              }));
          },
          goBack: function () {
            if (this.showSettingsPage) {
              if (
                (this.context == this.contexts.SETTINGS_NUMBERS ||
                  this.context == this.contexts.SETTINGS_PURCHASE) &&
                this.$refs.sms_settings_page.$refs.sms_numbers
                  .showSmsPurchase &&
                this.numbers.length > 0
              )
                return;
              if (this.context == this.contexts.SETTINGS_NUMBER_EDIT)
                return void this.switchContext(this.contexts.TAB_NUMBERS);
              this.switchContext(this.contexts.TAB_SENT);
            }
          },
          performSearch: function (t, e) {
            this.showInfoSplash
              ? this.$refs.sms_splash.performSplashNumberSearch()
              : this.showTabSummary
                ? this.$refs.sms_tab_table.$refs.sms_summary_section.triggerRefreshFromEvent()
                : this.showTabTable
                  ? this.$refs.sms_tab_table.performSMSSearch(t, e)
                  : this.showSettingsPage &&
                    this.$refs.sms_settings_page.doSearch();
          },
          performDownloadFile: function (t) {
            this.$refs.sms_tab_table.performDownloadFile(t);
          },
          switchVerificationForm: function (t, e) {
            t
              ? (this.$refs.sms_verification.embedTypeform(
                  e,
                  this.userData,
                  this.smsAccount,
                ),
                (this.showVerificationForm = !0))
              : (this.showVerificationForm = !1);
          },
          hideUSABanner: function () {
            this.showNoticeUsa = !1;
          },
        },
        computed: rn(
          rn(
            {},
            Object(d["b"])({
              numbersInitialised: kt.getters.GET_IS_INITIALISED,
              hasUSNumber: kt.getters.GET_HAS_US_NUMBER,
              numbers: kt.getters.GET_USER_NUMBERS,
              hasUnverifiedUSNumber: kt.getters.GET_HAS_UNVERIFIED_US_NUMBER,
              hasPendingUSNumber: kt.getters.GET_HAS_PENDING_US_NUMBER,
              gettingNumbers: kt.getters.GET_IS_FETCHING,
            }),
          ),
          {},
          {
            accountBanned: function () {
              return this.userData["sms_banned"];
            },
            showBarNoticeGrouped: function () {
              return (
                !this.accountBanned &&
                this.numbersInitialised &&
                this.hasUnverifiedUSNumber
              );
            },
            showBarNotice: function () {
              return (
                !this.accountBanned &&
                this.numbersInitialised &&
                this.hasUnverifiedUSNumber &&
                this.context == this.contexts.TAB_NUMBERS
              );
            },
            showBarNoticeUsa: function () {
              return (
                !this.accountBanned &&
                this.showNoticeUsa &&
                this.numbersInitialised &&
                !this.hasUSNumber
              );
            },
            showBarNoticeSubmitted: function () {
              return (
                !this.accountBanned &&
                this.numbersInitialised &&
                (this.hasPendingUSNumber || this.hasUnverifiedUSNumber)
              );
            },
            showBarNoticeUnverified: function () {
              return (
                !this.accountBanned &&
                this.numbersInitialised &&
                this.hasUnverifiedUSNumber &&
                this.context != this.contexts.TAB_NUMBERS
              );
            },
            showSplash: function () {
              return (
                this.showInfoSplash ||
                (this.showUpgradeSplash && !this.hasSMSAccount)
              );
            },
            showTabTable: function () {
              return this.context.startsWith(this.contexts.TAB);
            },
            showTabSummary: function () {
              return this.context.startsWith(this.contexts.TAB_SUMMARY);
            },
            showSettingsPage: function () {
              return this.context.startsWith(this.contexts.SETTINGS);
            },
            hasSMSAccount: function () {
              return (
                null !== this.smsAccount &&
                void 0 !== this.smsAccount &&
                "" !== this.smsAccount
              );
            },
          },
        ),
      },
      cn = on,
      ln = (s("6288"), Object(M["a"])(cn, n, a, !1, null, "680ff25b", null)),
      un = ln.exports;
    i["a"].use(d["a"]);
    var dn = new d["a"].Store({
        strict: !1,
        getters: {},
        mutations: {},
        actions: {},
        modules: { root: yt, numbers: Pt, settings: te, loading: gt },
      }),
      hn = dn,
      mn = s("1c1c"),
      pn = s("e37d");
    (i["a"].directive("tooltip", pn["c"]),
      i["a"].directive("close-popover", pn["a"]),
      i["a"].component("v-popover", pn["b"]),
      (i["a"].config.productionTip = !1),
      (i["a"].prototype.$eventBus = new i["a"]()),
      (i["a"].prototype.$config = mn),
      "undefined" !== typeof PAGE_DATA &&
        hn.commit(bt.mutations.SET_CSRF_KEY, PAGE_DATA.csrfkey),
      "undefined" !== typeof IMAGE_URLS &&
        hn.commit(bt.mutations.SET_IMAGE_URLS, IMAGE_URLS),
      "undefined" !== typeof END_POINTS &&
        hn.commit(bt.mutations.SET_END_POINTS, END_POINTS.urls()),
      At(hn),
      new i["a"]({
        store: hn,
        render: function (t) {
          return t(un);
        },
      }).$mount("#sms"));
  },
  5956: function (t, e, s) {
    "use strict";
    s("a7b6");
  },
  5982: function (t, e, s) {},
  "5bd4": function (t, e, s) {},
  "5bf5": function (t, e, s) {},
  "5f2b": function (t, e, s) {
    "use strict";
    s("a2b5");
  },
  6288: function (t, e, s) {
    "use strict";
    s("ef72");
  },
  6576: function (t, e, s) {
    "use strict";
    s("ff15");
  },
  "69bd": function (t, e, s) {
    "use strict";
    s("70b2");
  },
  "70b2": function (t, e, s) {},
  "7aff": function (t, e, s) {
    "use strict";
    s("5bd4");
  },
  "8b60": function (t, e, s) {
    "use strict";
    s("07d3");
  },
  a2b5: function (t, e, s) {},
  a7b6: function (t, e, s) {},
  b070: function (t, e, s) {},
  cf0b: function (t, e, s) {
    "use strict";
    s("5bf5");
  },
  d31e: function (t, e, s) {
    "use strict";
    s("ea59");
  },
  d6eb: function (t, e, s) {
    "use strict";
    s("b070");
  },
  ea59: function (t, e, s) {},
  ef72: function (t, e, s) {},
  ff15: function (t, e, s) {},
  ffaa: function (t, e, s) {
    "use strict";
    s("5982");
  },
});
//# sourceMappingURL=app.e4eff5ca.js.map
