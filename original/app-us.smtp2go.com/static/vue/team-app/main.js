(function (e) {
  function t(t) {
    for (
      var n, r, o = t[0], c = t[1], l = t[2], _ = 0, u = [];
      _ < o.length;
      _++
    )
      ((r = o[_]),
        Object.prototype.hasOwnProperty.call(s, r) && s[r] && u.push(s[r][0]),
        (s[r] = 0));
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
    m && m(t);
    while (u.length) u.shift()();
    return (a.push.apply(a, l || []), i());
  }
  function i() {
    for (var e, t = 0; t < a.length; t++) {
      for (var i = a[t], n = !0, o = 1; o < i.length; o++) {
        var c = i[o];
        0 !== s[c] && (n = !1);
      }
      n && (a.splice(t--, 1), (e = r((r.s = i[0]))));
    }
    return e;
  }
  var n = {},
    s = { app: 0 },
    a = [];
  function r(t) {
    if (n[t]) return n[t].exports;
    var i = (n[t] = { i: t, l: !1, exports: {} });
    return (e[t].call(i.exports, i, i.exports, r), (i.l = !0), i.exports);
  }
  ((r.m = e),
    (r.c = n),
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
        for (var n in e)
          r.d(
            i,
            n,
            function (t) {
              return e[t];
            }.bind(null, n),
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
    c = o.push.bind(o);
  ((o.push = t), (o = o.slice()));
  for (var l = 0; l < o.length; l++) t(o[l]);
  var m = c;
  (a.push([0, "chunk-vendors"]), i());
})({
  0: function (e, t, i) {
    e.exports = i("56d7");
  },
  "0bbf": function (e, t, i) {
    "use strict";
    var n = i("5d08"),
      s = i.n(n);
    s.a;
  },
  "109e": function (e, t, i) {
    "use strict";
    var n = i("d837"),
      s = i.n(n);
    s.a;
  },
  "2f87": function (e, t, i) {
    "use strict";
    var n = i("e3a0"),
      s = i.n(n);
    s.a;
  },
  "41d9": function (e, t, i) {
    "use strict";
    var n = i("e429"),
      s = i.n(n);
    s.a;
  },
  5400: function (e, t, i) {},
  "56d7": function (e, t, i) {
    "use strict";
    i.r(t);
    (i("cadf"), i("551c"), i("f751"), i("097d"));
    var n,
      s,
      a = i("2b0e"),
      r = i("2b27"),
      o = i.n(r),
      c = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "div",
          { attrs: { id: "app" } },
          [
            i("simple-confirm-modal", { ref: "simple_confirm_modal" }),
            i(
              "section",
              {
                staticClass: "sg-feature is-overview",
                attrs: { id: "team-members" },
              },
              [
                i(
                  "header",
                  {
                    staticClass: "sg-feature--header",
                    class: { "is-invite": e.addNewMember },
                  },
                  [
                    i("h3", { staticClass: "page-title" }, [
                      e.addNewMember
                        ? i("span", [
                            i("button", {
                              staticClass: "icon-back",
                              on: { click: e.cancelInviteMember },
                            }),
                            e._v("Add Team Member"),
                          ])
                        : e.editMember
                          ? i("span", [
                              i("button", {
                                staticClass: "icon-back",
                                on: { click: e.cancelEditMember },
                              }),
                              e._v("Edit Team Member"),
                            ])
                          : i("span", { staticClass: "team-members-icon" }, [
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
                                      "xmlns:xlink":
                                        "http://www.w3.org/1999/xlink",
                                    },
                                  },
                                  [
                                    i(
                                      "linearGradient",
                                      {
                                        attrs: {
                                          id: "a",
                                          gradientUnits: "userSpaceOnUse",
                                          x1: "17.0576",
                                          x2: "17.0576",
                                          y1: ".251953",
                                          y2: "34.252",
                                        },
                                      },
                                      [
                                        i("stop", {
                                          attrs: {
                                            offset: "0",
                                            "stop-color": "#82d868",
                                          },
                                        }),
                                        i("stop", {
                                          attrs: {
                                            offset: "1",
                                            "stop-color": "#62b560",
                                          },
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
                                        x: ".057617",
                                        y: ".251953",
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
                                            d: "m24.5576 27.127h-13.125c-.4973 0-.9742-.1976-1.3258-.5492-.35164-.3517-.54918-.8286-.54918-1.3258",
                                          },
                                        }),
                                        i("path", {
                                          attrs: {
                                            d: "m12.0576 8.37695c-.663 0-1.2989.2634-1.7677.73224-.46889.46884-.73228 1.10471-.73228 1.76781v14.375c0-.4973.19754-.9742.54918-1.3259.3516-.3516.8285-.5491 1.3258-.5491h11.875c.3315 0 .6495-.1317.8839-.3662.2344-.2344.3661-.5523.3661-.8838v-12.50005c0-.33152-.1317-.64946-.3661-.88388s-.5524-.36612-.8839-.36612z",
                                          },
                                        }),
                                        i("path", {
                                          attrs: { d: "m23.3076 27.127v-3.75" },
                                        }),
                                        i("path", {
                                          attrs: {
                                            d: "m17.0576 16.502c1.2081 0 2.1875-.9794 2.1875-2.1875 0-1.2082-.9794-2.1875-2.1875-2.1875s-2.1875.9793-2.1875 2.1875c0 1.2081.9794 2.1875 2.1875 2.1875z",
                                          },
                                        }),
                                        i("path", {
                                          attrs: {
                                            d: "m13.3076 20.877c0-.9946.3951-1.9484 1.0984-2.6517.7032-.7033 1.6571-1.0983 2.6516-1.0983.9946 0 1.9484.395 2.6517 1.0983.7032.7033 1.0983 1.6571 1.0983 2.6517",
                                          },
                                        }),
                                      ],
                                    ),
                                  ],
                                  1,
                                ),
                              ]),
                              e._v(" Team Members\n          "),
                            ]),
                    ]),
                    i("p", [
                      "report" === e.actingRole ||
                      e.addNewMember ||
                      e.editMember
                        ? e._e()
                        : i("span", [
                            e._v(
                              "Add a team member to enable someone to have login access to the SMTP2GO app.",
                            ),
                          ]),
                      "report" !== e.actingRole ||
                      e.addNewMember ||
                      e.editMember
                        ? e._e()
                        : i("span", [
                            i("br"),
                            i("em", [
                              e._v(
                                "Due to your level of access, this page only shows your username.",
                              ),
                            ]),
                          ]),
                      "admin" !== e.actingRole || e.addNewMember || e.editMember
                        ? e._e()
                        : i("span", [
                            i("br"),
                            i("em", [
                              e._v(
                                "This page only shows team members up to and including your own level of access.",
                              ),
                            ]),
                          ]),
                      e.addNewMember
                        ? i("span", [
                            e._v(
                              "Enter a new team member’s details below. An email invitation will be sent to allow them to complete the process.",
                            ),
                          ])
                        : e._e(),
                      e.editMember
                        ? i("span", [
                            e._v("Edit the team member’s details below."),
                          ])
                        : e._e(),
                    ]),
                  ],
                ),
                e.addNewMember ? i("AddTeamMember") : e._e(),
                i("edit-team-member", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: e.editMember,
                      expression: "editMember",
                    },
                  ],
                  ref: "edit_team_member",
                  on: { closeEditMember: e.cancelEditMember },
                }),
                i(
                  "article",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !e.addNewMember && !e.editMember,
                        expression: "!addNewMember && !editMember",
                      },
                    ],
                    staticClass: "team-overview",
                  },
                  [
                    i(
                      "div",
                      {
                        staticClass: "card padded",
                        attrs: { id: "team-overview" },
                      },
                      [
                        i("div", { staticClass: "card--tab has-functions" }, [
                          i("h2", { staticClass: "card--title" }, [
                            e._v("Manage Team Members"),
                          ]),
                          i("div", { staticClass: "card-functions" }, [
                            "report" !== e.actingRole
                              ? i(
                                  "button",
                                  {
                                    staticClass: "btn button-dropdown",
                                    attrs: {
                                      type: "button",
                                      role: "button",
                                      disabled: e.disableAdd || e.needsUpgrade,
                                    },
                                    on: { click: e.inviteMember },
                                  },
                                  [
                                    e._v("Add "),
                                    i("span", { staticClass: "mobile-hide" }, [
                                      e._v("team member"),
                                    ]),
                                    i("span", { staticClass: "desktop-hide" }, [
                                      e._v("new"),
                                    ]),
                                  ],
                                )
                              : e._e(),
                          ]),
                        ]),
                        i("div", {
                          staticClass:
                            "top search-grouped bar-full placeholder",
                        }),
                        e.needsUpgrade || e.showRemaining
                          ? i("UpgradeNotice")
                          : e._e(),
                        i("member-list"),
                        "report" !== e.actingRole
                          ? i("update-organisation")
                          : e._e(),
                        e.showLoadingSpinner ? i("AjaxLoadingSpinner") : e._e(),
                      ],
                      1,
                    ),
                  ],
                ),
              ],
              1,
            ),
          ],
          1,
        );
      },
      l = [],
      m = (i("8e6e"), i("ac6a"), i("456d"), i("a481"), i("bd86")),
      _ = i("2f62"),
      u = (i("28a5"), i("17fb"));
    function d(e, t) {
      return Object(u["reduce"])(
        t,
        function (t, i, n) {
          return (
            (t[n] = Object(u["reduce"])(
              i,
              function (t, i, n) {
                return ((t[n] = i.replace(e, "")), t);
              },
              {},
            )),
            t
          );
        },
        {},
      );
    }
    var E,
      f,
      p,
      h = "root/",
      b = {
        getters: {
          GET_IS_AJAX_RUNNING: h + "GET_IS_AJAX_RUNNING",
          GET_BACKEND_URL: h + "GET_BACKEND_URL",
        },
        mutations: {
          SET_CSRF_KEY: h + "SET_CSRF_KEY",
          SET_END_POINTS: h + "END_POINTS",
          INC_RUNNING_AJAX_REQUESTS: h + "INC_RUNNING_AJAX_REQUESTS",
          DEC_RUNNING_AJAX_REQUESTS: h + "DEC_RUNNING_AJAX_REQUESTS",
        },
      },
      v = d(h, b),
      g = { running_ajax_requests: 0, csrf_key: "", end_points: {} },
      T =
        ((n = {}),
        Object(m["a"])(n, v.getters.GET_IS_AJAX_RUNNING, function (e) {
          return e.running_ajax_requests > 0;
        }),
        Object(m["a"])(n, v.getters.GET_BACKEND_URL, function (e) {
          return function (t, i) {
            return "" !== i
              ? e.end_points[t] + "?action=" + i + "&CSRF_key=" + e.csrf_key
              : e.end_points[t] + "?CSRF_key=" + e.csrf_key;
          };
        }),
        n),
      w =
        ((s = {}),
        Object(m["a"])(s, v.mutations.SET_CSRF_KEY, function (e, t) {
          e.csrf_key = t;
        }),
        Object(m["a"])(s, v.mutations.SET_END_POINTS, function (e, t) {
          e.end_points = t;
        }),
        Object(m["a"])(s, v.mutations.INC_RUNNING_AJAX_REQUESTS, function (e) {
          e.running_ajax_requests++;
        }),
        Object(m["a"])(s, v.mutations.DEC_RUNNING_AJAX_REQUESTS, function (e) {
          e.running_ajax_requests--;
        }),
        s),
      A = {},
      C = { namespaced: !0, state: g, getters: T, mutations: w, actions: A },
      M = i("bc3a"),
      O = i.n(M),
      D = O.a.create(),
      S = function (e) {
        (D.interceptors.request.use(function (t) {
          return (e.commit("root/INC_RUNNING_AJAX_REQUESTS"), t);
        }),
          D.interceptors.response.use(
            function (t) {
              if (
                (e.commit("root/DEC_RUNNING_AJAX_REQUESTS"),
                (t = t.data),
                "error" in t)
              )
                return (
                  "bad_edit_token" === t.error &&
                    (e.commit("team/SET_EDIT_TOKEN", null),
                    (t.error =
                      "An unexpected error occurred, please try again.")),
                  Promise.reject(t.error)
                );
              var i = t.message,
                n = t.results;
              return Promise.resolve({ results: n, message: i });
            },
            function (t) {
              return (
                e.commit("root/DEC_RUNNING_AJAX_REQUESTS"),
                Promise.reject(t)
              );
            },
          ));
      },
      R = "team/",
      y = {
        getters: {
          GET_TEAM_MEMBERS: R + "GET_TEAM_MEMBERS",
          GET_EDIT_TOKEN: R + "GET_EDIT_TOKEN",
          GET_ACTING_ROLE: R + "GET_ACTING_ROLE",
          GET_OWNER_COUNT: R + "GET_OWNER_COUNT",
          GET_IS_2FA_ENFORCED: R + "GET_IS_2FA_ENFORCED",
          GET_IS_SUBACCOUNT: R + "GET_IS_SUBACCOUNT",
          GET_NEEDS_UPGRADE: R + "GET_NEEDS_UPGRADE",
          GET_SHOW_REMAINING: R + "GET_SHOW_REMAINING",
          GET_DISABLE_ADD: R + "GET_DISABLE_ADD",
        },
        mutations: {
          SET_ORGANISATION_NAME: R + "SET_ORGANISATION_NAME",
          SET_ACTING_ROLE: R + "SET_ACTING_ROLE",
          SET_TEAM_MEMBERS: R + "SET_TEAM_MEMBERS",
          ADD_TEAM_MEMBER: R + "ADD_TEAM_MEMBER",
          UPDATE_TEAM_MEMBER: R + "UPDATE_TEAM_MEMBER",
          REMOVE_TEAM_MEMBER: R + "REMOVE_TEAM_MEMBER",
          ENABLE_2FA: R + "ENABLE_2FA",
          DISABLE_2FA: R + "DISABLE_2FA",
          SET_IS_NEW_OWNER: R + "SET_IS_NEW_OWNER",
          SET_TOTP_KEY: R + "SET_TOTP_KEY",
          SET_TOTP_SECRET_KEY: R + "SET_TOTP_SECRET_KEY",
          SET_EDIT_TOKEN: R + "SET_EDIT_TOKEN",
          SET_IS_EDIT_TOKEN_VALID: R + "IS_EDIT_TOKEN_VALID",
          SET_IS_2FA_ENFORCED: R + "SET_IS_2FA_ENFORCED",
          SET_IS_SUBACCOUNT: R + "SET_IS_SUBACCOUNT",
          SET_NEEDS_UPGRADE: R + "SET_NEEDS_UPGRADE",
          SET_SHOW_REMAINING: R + "SET_SHOW_REMAINING",
          SET_DISABLE_ADD: R + "SET_DISABLE_ADD",
        },
        actions: {
          FETCH_EDIT_TOKEN: R + "FETCH_EDIT_TOKEN",
          FETCH_TEAM_MEMBERS: R + "FETCH_TEAM_MEMBERS",
          INVITE_TEAM_MEMBER: R + "INVITE_TEAM_MEMBER",
          UPDATE_ORGANISATION_NAME: R + "UPDATE_ORGANISATION_NAME",
          REMOVE_TEAM_MEMBER: R + "REMOVE_TEAM_MEMBER",
          REINVITE_TEAM_MEMBER: R + "REINVITE_TEAM_MEMBER",
          ENABLE_2FA: R + "ENABLE_2FA",
          DISABLE_2FA: R + "DISABLE_2FA",
          UPDATE_TEAM_MEMBER: R + "UPDATE_TEAM_MEMBER",
        },
      },
      N = d(R, y),
      I = {
        edit_token: null,
        is_edit_token_valid: !1,
        team_members: [],
        totp_key: null,
        totp_secret_key: null,
        organisation_name: null,
        is_2fa_enforced: !1,
        is_subaccount: !1,
        acting_role: null,
        needs_upgrade: !1,
        show_remaining: !1,
        disable_add: !1,
      },
      x =
        ((E = {}),
        Object(m["a"])(E, N.getters.GET_TEAM_MEMBERS, function (e) {
          return e.team_members;
        }),
        Object(m["a"])(E, N.getters.GET_NEEDS_UPGRADE, function (e) {
          return e.needs_upgrade;
        }),
        Object(m["a"])(E, N.getters.GET_SHOW_REMAINING, function (e) {
          return e.show_remaining;
        }),
        Object(m["a"])(E, N.getters.GET_EDIT_TOKEN, function (e) {
          return e.edit_token;
        }),
        Object(m["a"])(E, N.getters.GET_ACTING_ROLE, function (e) {
          return e.acting_role;
        }),
        Object(m["a"])(E, N.getters.GET_OWNER_COUNT, function (e) {
          return e.team_members.filter(function (e) {
            return "owner" === e.role.svalue;
          }).length;
        }),
        Object(m["a"])(E, N.getters.GET_IS_2FA_ENFORCED, function (e) {
          return e.is_2fa_enforced;
        }),
        Object(m["a"])(E, N.getters.GET_IS_SUBACCOUNT, function (e) {
          return e.is_subaccount;
        }),
        Object(m["a"])(E, N.getters.GET_DISABLE_ADD, function (e) {
          return e.disable_add;
        }),
        E),
      k =
        ((f = {}),
        Object(m["a"])(f, N.mutations.SET_ORGANISATION_NAME, function (e, t) {
          e.organisation_name = t;
        }),
        Object(m["a"])(f, N.mutations.SET_ACTING_ROLE, function (e, t) {
          e.acting_role = t;
        }),
        Object(m["a"])(f, N.mutations.SET_TEAM_MEMBERS, function (e, t) {
          e.team_members = t;
        }),
        Object(m["a"])(f, N.mutations.SET_NEEDS_UPGRADE, function (e, t) {
          e.needs_upgrade = t;
        }),
        Object(m["a"])(f, N.mutations.SET_SHOW_REMAINING, function (e, t) {
          e.show_remaining = t;
        }),
        Object(m["a"])(f, N.mutations.ADD_TEAM_MEMBER, function (e, t) {
          e.team_members.push(t);
        }),
        Object(m["a"])(f, N.mutations.UPDATE_TEAM_MEMBER, function (e, t) {
          var i = t.old_hash_id,
            n = t.team_member;
          e.team_members.forEach(function (t, s) {
            t.hash_id !== i || a["a"].set(e.team_members, s, n);
          });
        }),
        Object(m["a"])(f, N.mutations.REMOVE_TEAM_MEMBER, function (e, t) {
          e.team_members.forEach(function (i, n) {
            i.hash_id !== t || e.team_members.splice(n, 1);
          });
        }),
        Object(m["a"])(f, N.mutations.SET_IS_NEW_OWNER, function (e, t) {
          var i = t.hash_id,
            n = t.is_new_owner;
          e.team_members.forEach(function (e) {
            e.hash_id !== i || a["a"].set(e, "is_new_owner", n);
          });
        }),
        Object(m["a"])(f, N.mutations.ENABLE_2FA, function (e, t) {
          var i = t.hash_id,
            n = t.totp_secret_key;
          e.team_members.forEach(function (e) {
            e.hash_id !== i || a["a"].set(e, "totp_secret_key", n);
          });
        }),
        Object(m["a"])(f, N.mutations.DISABLE_2FA, function (e, t) {
          e.team_members.forEach(function (e) {
            if (e.hash_id === t)
              return (
                a["a"].set(e, "totp_secret_key", null),
                void a["a"].set(e, "sms_auth_number", null)
              );
          });
        }),
        Object(m["a"])(f, N.mutations.SET_TOTP_KEY, function (e, t) {
          e.totp_key = t;
        }),
        Object(m["a"])(f, N.mutations.SET_TOTP_SECRET_KEY, function (e, t) {
          e.totp_secret_key = t;
        }),
        Object(m["a"])(f, N.mutations.SET_EDIT_TOKEN, function (e, t) {
          e.edit_token = t;
        }),
        Object(m["a"])(f, N.mutations.SET_IS_EDIT_TOKEN_VALID, function (e, t) {
          e.is_edit_token_valid = t;
        }),
        Object(m["a"])(f, N.mutations.SET_IS_2FA_ENFORCED, function (e, t) {
          e.is_2fa_enforced = t;
        }),
        Object(m["a"])(f, N.mutations.SET_IS_SUBACCOUNT, function (e, t) {
          e.is_subaccount = t;
        }),
        Object(m["a"])(f, N.mutations.SET_DISABLE_ADD, function (e, t) {
          e.disable_add = t;
        }),
        f),
      B =
        ((p = {}),
        Object(m["a"])(p, N.actions.FETCH_EDIT_TOKEN, function (e, t) {
          if (e.getters[N.getters.GET_EDIT_TOKEN])
            try {
              var i = e.getters[N.getters.GET_EDIT_TOKEN].split(".");
              if (3 === i.length) {
                var n = atob(i[1]);
                if (((n = JSON.parse(n)), n.exp < Date.now()))
                  return (
                    e.commit(N.mutations.SET_IS_EDIT_TOKEN_VALID, !0),
                    e.getters[N.getters.IS_EDIT_TOKEN_VALID],
                    Promise.resolve()
                  );
              }
            } catch (s) {}
          return new Promise(function (i, n) {
            D.post(
              e.rootGetters[b.getters.GET_BACKEND_URL](
                "Edit Team",
                "get_edit_token",
              ),
              { password: t, edit_token: e.getters[N.getters.GET_EDIT_TOKEN] },
            )
              .then(function (t) {
                t.results.token
                  ? (e.commit(N.mutations.SET_EDIT_TOKEN, t.results.token),
                    e.commit(N.mutations.SET_IS_EDIT_TOKEN_VALID, !0),
                    e.getters[N.getters.IS_EDIT_TOKEN_VALID],
                    i(t))
                  : n();
              })
              .catch(function (t) {
                (e.commit(N.mutations.SET_IS_EDIT_TOKEN_VALID, !1),
                  e.getters[N.getters.IS_EDIT_TOKEN_VALID],
                  n(t));
              });
          });
        }),
        Object(m["a"])(p, N.actions.FETCH_TEAM_MEMBERS, function (e) {
          return new Promise(function (t, i) {
            D.get(e.rootGetters[b.getters.GET_BACKEND_URL]("Edit Team", ""))
              .then(function (i) {
                (e.commit(N.mutations.SET_TEAM_MEMBERS, i.results.team_members),
                  e.commit(N.mutations.SET_TOTP_KEY, i.results.totp_key),
                  e.commit(
                    N.mutations.SET_TOTP_SECRET_KEY,
                    i.results.totp_secret_key,
                  ),
                  e.commit(
                    N.mutations.SET_NEEDS_UPGRADE,
                    i.results.needs_upgrade,
                  ),
                  e.commit(
                    N.mutations.SET_SHOW_REMAINING,
                    i.results.show_remaining,
                  ),
                  e.commit(N.mutations.SET_DISABLE_ADD, i.results.disable_add),
                  t(i));
              })
              .catch(function (e) {
                return i(e);
              });
          });
        }),
        Object(m["a"])(p, N.actions.INVITE_TEAM_MEMBER, function (e, t) {
          var i = t.username,
            n = t.role,
            s = t.account_management_notification,
            a = t.weekly_summary_notification;
          return new Promise(function (t, r) {
            D.post(
              e.rootGetters[b.getters.GET_BACKEND_URL]("Edit Team", "invite"),
              {
                username: i,
                role: n,
                account_management_notification: s,
                weekly_summary_notification: a,
              },
            )
              .then(function (i) {
                (e.commit(N.mutations.ADD_TEAM_MEMBER, i.results.team_member),
                  e.state.team_members.length >= 2 &&
                    e.state.show_remaining &&
                    e.commit(N.mutations.SET_NEEDS_UPGRADE, !0),
                  t(i));
              })
              .catch(function (e) {
                return r(e);
              });
          });
        }),
        Object(m["a"])(p, N.actions.UPDATE_ORGANISATION_NAME, function (e, t) {
          return new Promise(function (i, n) {
            D.post(
              e.rootGetters[b.getters.GET_BACKEND_URL](
                "Edit Team",
                "change-orgname",
              ),
              { organisation_name: t },
            )
              .then(function (t) {
                (e.commit(
                  N.mutations.SET_ORGANISATION_NAME,
                  t.results.organisation_name,
                ),
                  i(t));
              })
              .catch(function (e) {
                return n(e);
              });
          });
        }),
        Object(m["a"])(p, N.actions.REMOVE_TEAM_MEMBER, function (e, t) {
          return new Promise(function (i, n) {
            D.post(
              e.rootGetters[b.getters.GET_BACKEND_URL](
                "Edit Team",
                "delete-member",
              ),
              { username: t.username, edit_token: e.getters.GET_EDIT_TOKEN },
            )
              .then(function (t) {
                (e.commit(
                  N.mutations.REMOVE_TEAM_MEMBER,
                  t.results.team_member.hash_id,
                ),
                  e.state.team_members.length < 2 &&
                    e.state.show_remaining &&
                    e.commit(N.mutations.SET_NEEDS_UPGRADE, !1),
                  i(t));
              })
              .catch(function (e) {
                return n(e);
              });
          });
        }),
        Object(m["a"])(p, N.actions.REINVITE_TEAM_MEMBER, function (e, t) {
          return D.post(
            e.rootGetters[b.getters.GET_BACKEND_URL]("Edit Team", "reinvite"),
            { username: t, edit_token: e.getters.GET_EDIT_TOKEN },
          );
        }),
        Object(m["a"])(p, N.actions.ENABLE_2FA, function (e, t) {
          var i = t.team_member,
            n = t.authcode;
          return new Promise(function (t, s) {
            D.post(
              e.rootGetters[b.getters.GET_BACKEND_URL](
                "Edit Team",
                "enable_2fa",
              ),
              {
                edit_token: e.getters.GET_EDIT_TOKEN,
                totp_secret_key: e.state.totp_secret_key,
                two_factor_auth_code: n,
              },
            )
              .then(function (n) {
                (e.commit(N.mutations.ENABLE_2FA, {
                  hash_id: i.hash_id,
                  totp_secret_key: e.state.totp_secret_key,
                }),
                  t(n));
              })
              .catch(function (e) {
                return s(e);
              });
          });
        }),
        Object(m["a"])(p, N.actions.DISABLE_2FA, function (e, t) {
          var i = t.team_member;
          return new Promise(function (t, n) {
            D.post(
              e.rootGetters[b.getters.GET_BACKEND_URL](
                "Edit Team",
                "force_disable_2fa",
              ),
              {
                edit_token: e.getters.GET_EDIT_TOKEN,
                totp_secret_key: e.state.totp_secret_key,
                team_member: i,
              },
            )
              .then(function (n) {
                (e.commit(N.mutations.DISABLE_2FA, i.hash_id), t(n));
              })
              .catch(function (e) {
                return n(e);
              });
          });
        }),
        Object(m["a"])(p, N.actions.UPDATE_TEAM_MEMBER, function (e, t) {
          var i = t.team_member,
            n = t.old_username,
            s = t.new_username,
            a = t.fullname,
            r = t.role,
            o = t.notification_level,
            c = t.new_password,
            l = t.con_password,
            m = t.account_management_notification,
            _ = t.weekly_summary_notification;
          return new Promise(function (t, u) {
            D.post(
              e.rootGetters[b.getters.GET_BACKEND_URL](
                "Edit Team",
                "update_member",
              ),
              {
                edit_token: e.getters.GET_EDIT_TOKEN,
                old_username: n,
                new_username: s,
                fullname: a,
                role: r,
                notification_level: o,
                new_password: c,
                con_password: l,
                account_management_notification: m,
                weekly_summary_notification: _,
              },
            )
              .then(function (n) {
                (e.commit(N.mutations.UPDATE_TEAM_MEMBER, {
                  old_hash_id: i.hash_id,
                  team_member: n.results.team_member,
                }),
                  t(n));
              })
              .catch(function (e) {
                return u(e);
              });
          });
        }),
        p),
      L = { namespaced: !0, state: I, getters: x, mutations: k, actions: B },
      P =
        (i("0d6d"),
        Object.freeze({
          MTBOX_EDIT_CLICKED: "mtbox-edit-clicked",
          MTBOX_REINVITE_CLICKED: "mtbox-reinvite-clicked",
          MTBOX_TRANSFER_CLICKED: "mtbox-transfer-clicked",
          MTBOX_REMOVE_CLICKED: "mtbox-remove-clicked",
          INVITE_TEAM_MEMBER_REQUEST: "invite-team-member-request",
          INVITE_TEAM_MEMBER_SUCCEEDED: "invite-team-member-succeeded",
          INVITE_TEAM_MEMBER_FAILED: "invite-team-member-failed",
          REINVITE_TEAM_MEMBER_REQUEST: "reinvite-team-member-request",
          REINVITE_TEAM_MEMBER_SUCCEEDED: "reinvite-team-member-succeeded",
          REINVITE_TEAM_MEMBER_FAILED: "reinvite-team-member-failed",
          UPDATE_ORGANISATION_REQUEST: "update-organisation-request",
          UPDATE_ORGANISATION_SUCCEEDED: "update-organisation-succeeded",
          UPDATE_ORGANISATION_FAILED: "update-organisation-failed",
          EDIT_TEAM_MEMBER_REQUEST: "edit-team-member-request",
          EDIT_TEAM_MEMBER_SUCCEEDED: "edit-team-member-succeeded",
          EDIT_TEAM_MEMBER_FAILED: "edit-team-member-failed",
          UPDATE_TEAM_MEMBER_REQUEST: "update-team-member-request",
          UPDATE_TEAM_MEMBER_SUCCEEDED: "update-team-member-succeeded",
          UPDATE_TEAM_MEMBER_FAILED: "update-team-member-failed",
          DISABLE_2FA_REQUEST: "disable-2fa-request",
          DISABLE_2FA_SUCCEEDED: "disable-2fa-succeeded",
          DISABLE_2FA_FAILED: "disable-2fa-failed",
          ENTER_PASSWORD_REQUEST: "enter-password-request",
          ENTER_PASSWORD_SUCCEEDED: "enter-password-succeeded",
          ENTER_PASSWORD_FAILED: "enter-password-failed",
          REMOVE_TEAM_MEMBER_SUCCEEDED: "remove-member-succeeded",
          REMOVE_TEAM_MEMBER_FAILED: "remove-member-failed",
          ROLE_CHANGED: "role-changed",
          WORKING_STATE_CHANGED: "working-state-changed",
        })),
      $ = P,
      U = i("1157"),
      j = i.n(U),
      F = {
        methods: {
          mixinAlerts_clear: function () {
            G();
          },
          mixinAlerts_info: function (e) {
            K(e);
          },
          mixinAlerts_success: function (e) {
            W(e);
          },
          mixinAlerts_warn: function (e) {
            H(e);
          },
          mixinAlerts_error: function (e) {
            V(e);
          },
        },
      };
    function G() {
      var e = j()("#user-alert");
      (e.removeClass(), e.empty());
    }
    function K(e) {
      (G(), e && HTML.alertUser("info", e));
    }
    function W(e) {
      (G(), e && HTML.alertUser("success", e));
    }
    function H(e) {
      (G(), e && HTML.alertUser("warning", e));
    }
    function V(e) {
      (G(), e && HTML.alertUser("error", e));
    }
    var z = F,
      q = i("768b"),
      X =
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
                    var i = Object(q["a"])(t, 2),
                      n = i[0],
                      s = i[1];
                    e.$eventBus.$on(n, s);
                  },
                ),
                (this.mixinEventListener_isOn = !0));
            },
            mixinEventListener_off: function () {
              var e = this;
              (Object.entries(this.mixinEventListener_eventMap).forEach(
                function (t) {
                  var i = Object(q["a"])(t, 2),
                    n = i[0],
                    s = i[1];
                  e.$eventBus.$off(n, s);
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
      Q = X,
      J = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "div",
          {
            staticClass:
              "edit-user-form card has-tabs details-open unsubscribe-footer-disabled advanced-bounces-off",
          },
          [
            e._m(0),
            i("div", { staticClass: "content-body" }, [
              i(
                "form",
                {
                  attrs: {
                    role: "form",
                    id: "invite-form",
                    novalidate: "true",
                    autocomplete: "off",
                  },
                  on: {
                    submit: function (t) {
                      return (t.preventDefault(), e.inviteTeamMember(t));
                    },
                  },
                },
                [
                  i("div", { staticClass: "card" }, [
                    i(
                      "div",
                      {
                        staticClass: "card-content",
                        attrs: { role: "tabpanel" },
                      },
                      [
                        i("div", { staticClass: "form-group" }, [
                          i("label", { staticClass: "form-group-label" }, [
                            e._v("Email address"),
                          ]),
                          i("div", { staticClass: "form-group-item" }, [
                            i("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: e.username,
                                  expression: "username",
                                },
                              ],
                              staticClass: "form-control input-md",
                              staticStyle: { "line-height": "2.5" },
                              attrs: {
                                type: "text",
                                autocomplete: "off",
                                placeholder: "email@company.com",
                                readonly: e.isSaving,
                              },
                              domProps: { value: e.username },
                              on: {
                                input: function (t) {
                                  t.target.composing ||
                                    (e.username = t.target.value);
                                },
                              },
                            }),
                            i("span", { staticClass: "field-info" }, [
                              e._v(
                                "Your team member's email address they will use to log in. Their invitation will also be sent to this address.",
                              ),
                            ]),
                          ]),
                        ]),
                        i("div", { staticClass: "form-group" }, [
                          i("label", { staticClass: "form-group-label" }, [
                            e._v("Permission level"),
                          ]),
                          i(
                            "div",
                            { staticClass: "form-group-item item-split" },
                            [
                              i("role-dropdown", {
                                ref: "role_dropdown",
                                attrs: { disabled: e.isSaving },
                              }),
                              i("span", { staticClass: "field-info" }, [
                                e._v(
                                  "The level of access this team member will have in your account.",
                                ),
                              ]),
                              e.is_subaccount ? i("br") : e._e(),
                              e.is_subaccount
                                ? i("span", { staticClass: "field-info" }, [
                                    e._v(
                                      "As your account doesn't handle billing directly, Owners and Admins have the same permissions.",
                                    ),
                                  ])
                                : e._e(),
                            ],
                            1,
                          ),
                        ]),
                        i(
                          "div",
                          { staticClass: "form-group group-notifications" },
                          [
                            i("label", { staticClass: "form-group-label" }, [
                              e._v("Notifications"),
                            ]),
                            i("div", { attrs: { id: "user-notifications" } }, [
                              i("dl", [
                                i(
                                  "dt",
                                  {
                                    class: {
                                      "is-disabled": e.isReportRoleSelected(),
                                    },
                                    on: {
                                      click: function (t) {
                                        (t.preventDefault(),
                                          (e.account_management_notification =
                                            !e.account_management_notification));
                                      },
                                    },
                                  },
                                  [
                                    i(
                                      "div",
                                      {
                                        staticClass: "checker",
                                        class: {
                                          "is-focus":
                                            e.accountManagementFocused,
                                        },
                                      },
                                      [
                                        i(
                                          "span",
                                          {
                                            staticClass: "checker-box",
                                            class: [
                                              e.account_management_notification
                                                ? "checked"
                                                : "",
                                            ],
                                          },
                                          [
                                            i("input", {
                                              attrs: {
                                                type: "checkbox",
                                                disabled:
                                                  e.isReportRoleSelected(),
                                              },
                                              on: {
                                                focus: function (t) {
                                                  e.accountManagementFocused =
                                                    !0;
                                                },
                                                blur: function (t) {
                                                  e.accountManagementFocused =
                                                    !1;
                                                },
                                              },
                                            }),
                                          ],
                                        ),
                                      ],
                                    ),
                                    i("span", [e._v("Account management")]),
                                  ],
                                ),
                                i(
                                  "dd",
                                  {
                                    class: {
                                      "is-disabled": e.isReportRoleSelected(),
                                    },
                                  },
                                  [
                                    e._v(
                                      "Receive emails about account management and usage alerts.",
                                    ),
                                  ],
                                ),
                                i(
                                  "dt",
                                  {
                                    on: {
                                      click: function (t) {
                                        (t.preventDefault(),
                                          (e.weekly_summary_notification =
                                            !e.weekly_summary_notification));
                                      },
                                    },
                                  },
                                  [
                                    i(
                                      "div",
                                      {
                                        staticClass: "checker",
                                        class: {
                                          "is-focus": e.weeklySummaryFocused,
                                        },
                                      },
                                      [
                                        i(
                                          "span",
                                          {
                                            staticClass: "checker-box",
                                            class: [
                                              e.weekly_summary_notification
                                                ? "checked"
                                                : "",
                                            ],
                                          },
                                          [
                                            i("input", {
                                              attrs: { type: "checkbox" },
                                              on: {
                                                focus: function (t) {
                                                  e.weeklySummaryFocused = !0;
                                                },
                                                blur: function (t) {
                                                  e.weeklySummaryFocused = !1;
                                                },
                                              },
                                            }),
                                          ],
                                        ),
                                      ],
                                    ),
                                    i("span", [e._v("Weekly summary")]),
                                  ],
                                ),
                                i("dd", [
                                  e._v(
                                    "Receive weekly summary emails regarding this account.",
                                  ),
                                ]),
                              ]),
                            ]),
                          ],
                        ),
                      ],
                    ),
                  ]),
                  i("div", { staticClass: "card-footer" }, [
                    i("button", {
                      staticClass: "btn blue",
                      class: [
                        !e.canSubmitForm || e.isSaving ? "disabled" : "",
                        e.isSaving ? "spinner-button" : "",
                      ],
                      attrs: { type: "submit" },
                      domProps: { innerHTML: e._s(e.inviteButtonText) },
                    }),
                    i(
                      "button",
                      {
                        staticClass: "btn button-dropdown",
                        attrs: { role: "button", type: "button" },
                        on: { click: e.cancelAddMember },
                      },
                      [e._v("Cancel")],
                    ),
                  ]),
                ],
              ),
            ]),
          ],
        );
      },
      Y = [
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("div", { staticClass: "card--tab has-functions" }, [
            i("h2", { staticClass: "card--title" }, [
              i("span", [e._v("Configure new team member")]),
            ]),
          ]);
        },
      ],
      Z =
        (i("4917"),
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("div", { staticClass: "users-app-dropdown-wrapper" }, [
            i(
              "a",
              {
                staticClass: "users-app-dropdown input-inline input-team",
                class: { "is-active": e.mixinTriggerable_isOpen },
                attrs: { href: "#" },
                on: {
                  click: function (t) {
                    return (t.preventDefault(), e.toggleDropDown(t));
                  },
                  focus: e.addKeyboardListeners,
                  blur: e.removeKeyboardListeners,
                },
              },
              [
                i("span", { staticClass: "selected-default" }, [
                  e._v(e._s(e.role.label)),
                ]),
                i("span", { staticClass: "selected-mobile-top" }, [
                  e._v(e._s(e.role.label)),
                ]),
                i("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: e.role,
                      expression: "role",
                    },
                  ],
                  attrs: { type: "hidden" },
                  domProps: { value: e.role },
                  on: {
                    input: function (t) {
                      t.target.composing || (e.role = t.target.value);
                    },
                  },
                }),
              ],
            ),
            i(
              "ul",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: e.mixinTriggerable_isOpen,
                    expression: "mixinTriggerable_isOpen",
                  },
                ],
                staticClass:
                  "users-app-dropdown--options mixinTriggerable_layer",
              },
              [
                e._m(0),
                e._l(e.shownRoles, function (t, n) {
                  return i(
                    "li",
                    {
                      key: t.id,
                      class: [t.id, { "is-selected": e.isSelectedRole(t) }],
                    },
                    [
                      i(
                        "a",
                        {
                          on: {
                            click: function (t) {
                              return (t.preventDefault(), e.selectRole(t, n));
                            },
                          },
                        },
                        [
                          i(
                            "div",
                            {
                              staticClass: "mobile-checkbox",
                              class: "role-id-" + n,
                            },
                            [
                              i("input", {
                                attrs: { type: "radio", name: "selected-role" },
                                domProps: { checked: e.isRoleChecked(n) },
                              }),
                            ],
                          ),
                          i("h6", [e._v(e._s(t.label))]),
                          i("p", [e._v(e._s(t.text))]),
                        ],
                      ),
                    ],
                  );
                }),
              ],
              2,
            ),
            i("div", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: e.mixinTriggerable_isOpen,
                  expression: "mixinTriggerable_isOpen",
                },
              ],
              staticClass: "mobile-only-dropdown-backdrop",
            }),
          ]);
        }),
      ee = [
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("li", { staticClass: "only-mobile" }, [
            i("div", { staticClass: "mobile-role-dropdown-title" }, [
              e._v("Team member role"),
            ]),
            i("p", { staticClass: "mobile-role-dropdown-content" }, [
              e._v("What access should they have?"),
            ]),
          ]);
        },
      ],
      te =
        (i("7f7f"),
        i("7514"),
        Object.freeze({
          TRIGGERABLE_OPENED: "mixin-triggerable-opened",
          TRIGGERABLE_CLOSED: "mixin-triggerable-closed",
        })),
      ie = {
        created: function () {
          (j()(window).on("click.Bst", this.$_mixinTriggerableWindowClicked),
            this.$eventBus.$on(
              te.TRIGGERABLE_OPENED,
              this.$_mixinTriggerableOpened,
            ));
        },
        mounted: function () {
          ((this.mixinTriggerable_layers = j()(this.$el).find(
            ".mixinTriggerable_layer",
          )),
            j()(this.$el).hasClass("mixinTriggerable_layer") &&
              this.mixinTriggerable_layers.push(this.$el));
        },
        destroyed: function () {
          (j()(window).off("click.Bst", this.$_mixinTriggerableWindowClicked),
            this.$eventBus.$off(
              te.TRIGGERABLE_OPENED,
              this.$_mixinTriggerableOpened,
            ));
        },
        methods: {
          $_mixinTriggerableUpdateParent: function (e) {
            for (var t = 0, i = this.$parent; ; ) {
              if (
                !(
                  void 0 !== i &&
                  null !== i &&
                  void 0 !== i.mixinTriggerable_getID &&
                  t < 10
                )
              )
                break;
              ((i.mixinTriggerable_isModal = e), t++, (i = i.$parent));
            }
          },
          $_mixinTriggerableWindowClicked: function (e) {
            if (this.mixinTriggerable_ignoreNextWindowClick)
              this.mixinTriggerable_ignoreNextWindowClick = !1;
            else if (!this.mixinTriggerable_isModal) {
              var t = function (e) {
                  var t = j()(e)
                    .parents()
                    .filter(function (e, t) {
                      return j()(t).hasClass("mixinTriggerable_layer");
                    });
                  return t.length > 0;
                },
                i = !1;
              if (this.mixinTriggerable_isOpen)
                for (var n = 0; n < this.mixinTriggerable_layers.length; ++n) {
                  var s = j()(this.mixinTriggerable_layers[n]);
                  if (
                    0 !== s.has(e.target).length ||
                    s.is(e.target) ||
                    (!this.mixinTriggerable_closeOnParentClick &&
                      t(e.target, s))
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
                  te.TRIGGERABLE_CLOSED,
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
            var e = j()(this.$el).offset().left,
              t = Math.ceil(e),
              i = j()(this.$el).offset().top,
              n = Math.ceil(i);
            ((this.$el.style.left = t + "px"),
              (this.$el.style.top = n + "px"),
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
                      te.TRIGGERABLE_OPENED,
                      this.mixinTriggerable_getID(),
                    )
                  : this.$eventBus.$emit(
                      te.TRIGGERABLE_CLOSED,
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
                  te.TRIGGERABLE_OPENED,
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
                  te.TRIGGERABLE_CLOSED,
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
      ne = {
        name: "role-dropdown",
        mixins: [ie],
        props: { disabled: { type: Boolean, required: !1 } },
        methods: {
          toggleDropDown: function (e) {
            this.mixinTriggerable_toggleOpened(e);
          },
          addKeyboardListeners: function () {
            window.addEventListener("keydown", this.handleKeydown);
          },
          removeKeyboardListeners: function () {
            window.removeEventListener("keydown", this.handleKeydown);
          },
          handleKeydown: function (e) {
            " " === e.key || 32 === e.keyCode || "Space" === e.code
              ? (e.preventDefault(),
                this.mixinTriggerable_isOpen
                  ? (this.selectRole(null, this.roleIdx),
                    (this.mixinTriggerable_isOpen = !1))
                  : this.toggleDropDown())
              : "Enter" === e.key
                ? (e.preventDefault(),
                  this.mixinTriggerable_isOpen
                    ? (this.selectRole(null, this.roleIdx),
                      (this.mixinTriggerable_isOpen = !1))
                    : this.toggleDropDown())
                : this.mixinTriggerable_isOpen &&
                  ("ArrowDown" === e.key
                    ? (this.roleIdx =
                        (this.roleIdx + 1) % this.shownRoles.length)
                    : "ArrowUp" === e.key
                      ? (this.roleIdx =
                          (this.roleIdx - 1 + this.shownRoles.length) %
                          this.shownRoles.length)
                      : "Tab" === e.key &&
                        (e.preventDefault(),
                        (this.roleIdx =
                          (this.roleIdx + 1) % this.shownRoles.length)));
          },
          selectRole: function (e, t) {
            ((this.roleIdx = t),
              j()(
                "#invite-form .users-app-dropdown--options .mobile-checkbox .radio span",
              ).removeClass("checked"),
              j()(
                "#invite-form .users-app-dropdown--options .mobile-checkbox.role-id-" +
                  t +
                  " .radio span",
              ).addClass("checked"),
              this.$eventBus.$emit(
                $.ROLE_CHANGED,
                this.shownRoles[this.roleIdx],
              ),
              screen.width > 767 && this.mixinTriggerable_forceClose());
          },
          setRole: function (e) {
            for (var t = 0; t < this.shownRoles.length; ++t)
              if (this.shownRoles[t].id == e) {
                this.roleIdx = t;
                break;
              }
          },
          isRoleChecked: function (e) {
            return e === this.roleIdx ? "checked" : "";
          },
          isReportRoleSelected: function () {
            return 2 === this.roleIdx;
          },
          isSelectedRole: function (e) {
            return this.role && this.role.label === e.label;
          },
        },
        computed: {
          role: function () {
            return this.shownRoles[this.roleIdx];
          },
          shownRoles: function () {
            var e = "owner" === this.$store.state.team.acting_role;
            return this.roles.filter(function (t) {
              return "owner" !== t.id || e;
            });
          },
        },
        data: function () {
          return {
            roles: [
              { id: "owner", label: "Owner", text: "Full Access" },
              { id: "admin", label: "Admin", text: "Full Access (No Billing)" },
              { id: "report", label: "Reports", text: "Reports Only" },
            ],
            roleIdx: 0,
          };
        },
      },
      se = ne,
      ae = i("2877"),
      re = Object(ae["a"])(se, Z, ee, !1, null, null, null),
      oe = re.exports;
    function ce(e, t) {
      var i = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          i.push.apply(i, n));
      }
      return i;
    }
    function le(e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ce(i, !0).forEach(function (t) {
              Object(m["a"])(e, t, i[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : ce(i).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t),
                );
              });
      }
      return e;
    }
    var me = {
        name: "add-team-member",
        mixins: [z, Q],
        components: { RoleDropdown: oe },
        data: function () {
          return {
            isSaving: !1,
            username: "",
            account_management_notification: !0,
            weekly_summary_notification: !0,
            accountManagementFocused: !1,
            weeklySummaryFocused: !1,
          };
        },
        created: function () {
          var e;
          (this.mixinEventListener_register(
            ((e = {}),
            Object(m["a"])(
              e,
              $.INVITE_TEAM_MEMBER_SUCCEEDED,
              this.onTeamMemberInviteSucceeded,
            ),
            Object(m["a"])(
              e,
              $.INVITE_TEAM_MEMBER_FAILED,
              this.onTeamMemberInviteFailed,
            ),
            Object(m["a"])(e, $.ROLE_CHANGED, this.onRoleChanged),
            e),
          ),
            this.mixinEventListener_on());
        },
        destroyed: function () {
          this.mixinEventListener_off();
        },
        computed: le({}, Object(_["c"])("team", ["is_subaccount"]), {
          canSubmitForm: function () {
            return (
              "" !== this.username &&
              "" !== this.$refs.role_dropdown.role.id &&
              !!this.username.match(/^.{1,}@.{1,}\..{1,}$/) &&
              !this.$store.getters[b.getters.GET_IS_AJAX_RUNNING]
            );
          },
          inviteButtonText: function () {
            return this.isSaving
              ? "Inviting"
              : 'Invite<span class="hide-mobile"> team member</span>';
          },
        }),
        methods: {
          onRoleChanged: function (e) {
            this.account_management_notification =
              "owner" === e.id || "admin" === e.id;
          },
          inviteTeamMember: function () {
            (this.$refs.role_dropdown.mixinTriggerable_forceClose(),
              this.canSubmitForm &&
                ("" !== this.username
                  ? ((this.isSaving = !0),
                    this.$eventBus.$emit(
                      $.INVITE_TEAM_MEMBER_REQUEST,
                      this.username,
                      this.$refs.role_dropdown.role.id,
                      this.account_management_notification,
                      this.weekly_summary_notification,
                    ))
                  : this.mixinAlerts_error("Username must not be empty")));
          },
          onTeamMemberInviteSucceeded: function () {
            ((this.isSaving = !1),
              (this.username = ""),
              this.cancelAddMember());
          },
          onTeamMemberInviteFailed: function () {
            this.isSaving = !1;
          },
          isReportRoleSelected: function () {
            return (
              void 0 !== this.$refs.role_dropdown &&
              "report" === this.$refs.role_dropdown.role.id
            );
          },
          toggleChecked: function (e) {
            var t = e.currentTarget,
              i = t.querySelector("input");
            (t.classList.toggle("checked"), (i.checked = !i.checked));
          },
          cancelAddMember: function () {
            this.$eventBus.$emit("closeAddNewMember");
          },
        },
      },
      _e = me,
      ue = (i("6056"), Object(ae["a"])(_e, J, Y, !1, null, null, null)),
      de = ue.exports,
      Ee = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i("table", { attrs: { id: "team-list" } }, [
          i("thead", [
            i("th", [e._v("Username")]),
            e.showFullnameCol ? i("th", [e._v("Full name")]) : e._e(),
            i("th", [e._v("Type")]),
            i("th", [e._v("Notifications")]),
            i("th", [e._v("2 Factor Auth")]),
            i("th"),
          ]),
          i(
            "tbody",
            e._l(e.teamMembers, function (t, n) {
              return i(
                "tr",
                { key: t.record_id },
                [
                  t.is_acting_user
                    ? i("td", { staticClass: "member-email" }, [
                        e.disableAdd
                          ? e._e()
                          : i(
                              "a",
                              {
                                on: {
                                  click: function (i) {
                                    return (
                                      i.preventDefault(),
                                      e.editTeamMember(t)
                                    );
                                  },
                                },
                              },
                              [
                                e._v(e._s(t.username)),
                                i("span", {
                                  domProps: {
                                    innerHTML: e._s(e.getUserStatus(t)),
                                  },
                                }),
                              ],
                            ),
                        e.disableAdd
                          ? i("span", [
                              e._v(e._s(t.username)),
                              i("span", {
                                domProps: {
                                  innerHTML: e._s(e.getUserStatus(t)),
                                },
                              }),
                            ])
                          : e._e(),
                      ])
                    : e._e(),
                  !t.is_acting_user &&
                  t.has_password &&
                  "owner" === t.acting_role.svalue
                    ? i("td", { staticClass: "non-acting-member" }, [
                        e.disableAdd
                          ? e._e()
                          : i(
                              "a",
                              {
                                on: {
                                  click: function (i) {
                                    return (
                                      i.preventDefault(),
                                      e.editTeamMember(t)
                                    );
                                  },
                                },
                              },
                              [
                                e._v(e._s(t.username)),
                                i("span", {
                                  domProps: {
                                    innerHTML: e._s(e.getUserStatus(t)),
                                  },
                                }),
                              ],
                            ),
                        e.disableAdd
                          ? i("span", [
                              e._v(e._s(t.username)),
                              i("span", {
                                domProps: {
                                  innerHTML: e._s(e.getUserStatus(t)),
                                },
                              }),
                            ])
                          : e._e(),
                      ])
                    : e._e(),
                  t.is_acting_user ||
                  (t.has_password && "owner" === t.acting_role.svalue)
                    ? e._e()
                    : i("td", { staticClass: "invited-name" }, [
                        e._v(e._s(t.username)),
                        i("span", {
                          domProps: { innerHTML: e._s(e.getUserStatus(t)) },
                        }),
                      ]),
                  e.showFullnameCol
                    ? i("td", { staticClass: "member-name" }, [
                        e._v(e._s(t.fullname)),
                      ])
                    : e._e(),
                  i("td", {
                    staticClass: "member-type",
                    domProps: { innerHTML: e._s(e.getMemberType(t)) },
                  }),
                  t.account_management_notification ||
                  t.weekly_summary_notification
                    ? i("td", { staticClass: "status-icon" }, [
                        i("span", { staticClass: "label green" }, [
                          i("span", { staticClass: "mobile-label" }, [
                            e._v("Notifications"),
                          ]),
                          e._v("Enabled "),
                          t.account_management_notification &&
                          t.weekly_summary_notification
                            ? i("span", [e._v("(2)")])
                            : e._e(),
                        ]),
                      ])
                    : e._e(),
                  t.account_management_notification ||
                  t.weekly_summary_notification
                    ? e._e()
                    : i("td", { staticClass: "status-icon" }, [e._m(0, !0)]),
                  t.totp_secret_key || t.sms_auth_number
                    ? i("td", { staticClass: "status-icon secret-key" }, [
                        e._m(1, !0),
                      ])
                    : e._e(),
                  t.totp_secret_key || t.sms_auth_number
                    ? e._e()
                    : i("td", { staticClass: "status-icon secret-key" }, [
                        e._m(2, !0),
                      ]),
                  e.disableAdd
                    ? e._e()
                    : i("member-list-toolbox", {
                        key: n,
                        attrs: { "team-member": t },
                      }),
                ],
                1,
              );
            }),
            0,
          ),
        ]);
      },
      fe = [
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("span", { staticClass: "label disabled" }, [
            i("span", { staticClass: "mobile-label" }, [e._v("Notifications")]),
            e._v("Disabled\n        "),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("span", { staticClass: "label green" }, [
            i("span", { staticClass: "mobile-label" }, [e._v("2FA")]),
            e._v("Enabled\n        "),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("span", { staticClass: "label disabled" }, [
            i("span", { staticClass: "mobile-label" }, [e._v("2FA")]),
            e._v("Disabled\n        "),
          ]);
        },
      ],
      pe = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i("td", { staticClass: "row-option" }, [
          i("a", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: e.showToolbox,
                expression: "showToolbox",
              },
            ],
            staticClass: "row-options-toggle",
            class: { "is-open": e.mixinTriggerable_isOpen },
            on: {
              click: function (t) {
                return (t.preventDefault(), e.mixinTriggerable_toggleOpened(t));
              },
            },
          }),
          i(
            "ul",
            {
              staticClass:
                "row-options mixinTriggerable_layer member-option-popup",
              class: { "is-open": e.mixinTriggerable_isOpen },
            },
            [
              i("li", { staticClass: "mobile-only-option-title" }, [
                e._v("\n      " + e._s(e.teamMember.username) + "\n    "),
              ]),
              e.canEdit
                ? i("li", { staticClass: "edit" }, [
                    i(
                      "a",
                      {
                        on: {
                          click: function (t) {
                            return (t.preventDefault(), e.onEditClicked(t));
                          },
                        },
                      },
                      [
                        i(
                          "svg",
                          {
                            staticStyle: {
                              position: "absolute",
                              margin: "9px 0 0 7px",
                              width: "10px",
                            },
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 7.94 7.94",
                            },
                          },
                          [
                            i("g", { attrs: { id: "Layer_2-2" } }, [
                              i("path", {
                                staticClass: "cls-1",
                                attrs: {
                                  d: "M5.525 1.07l1.35 1.35L1.87 7.425.52 6.075zM6.592-.003l1.35 1.35-.742.743L5.85.74zM1.52 7.78L.17 6.42 0 7.94l1.52-.16z",
                                },
                              }),
                            ]),
                          ],
                        ),
                        i("span", { staticClass: "rhs-edit" }, [
                          e._v("Edit team member"),
                        ]),
                      ],
                    ),
                  ])
                : e._e(),
              e.canDisable2FA
                ? i("li", { staticClass: "2fa e2fa" }, [
                    i("a", { attrs: { href: "/account/2fa" } }, [
                      i(
                        "svg",
                        {
                          staticStyle: {
                            position: "absolute",
                            margin: "9px 0 0 7px",
                            width: "12px",
                          },
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                          },
                        },
                        [
                          i("path", {
                            staticClass: "heroicon-ui",
                            attrs: {
                              d: "M9 10h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8c0-1.1.9-2 2-2h2V7a5 5 0 1110 0 1 1 0 01-2 0 3 3 0 00-6 0v3zm-4 2v8h14v-8H5zm7 2a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1z",
                            },
                          }),
                        ],
                      ),
                      i("span", { staticClass: "rhs-disable2fac" }, [
                        e._v("Edit 2 factor auth"),
                      ]),
                    ]),
                  ])
                : e._e(),
              e.canEnable2FA
                ? i("li", { staticClass: "2fa e2fa" }, [
                    i("a", { attrs: { href: "/account/2fa" } }, [
                      i(
                        "svg",
                        {
                          staticStyle: {
                            position: "absolute",
                            margin: "9px 0 0 7px",
                            width: "12px",
                          },
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                          },
                        },
                        [
                          i("path", {
                            staticClass: "heroicon-ui",
                            attrs: {
                              d: "M7 10V7a5 5 0 1110 0v3h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8c0-1.1.9-2 2-2h2zm2 0h6V7a3 3 0 00-6 0v3zm-4 2v8h14v-8H5zm7 2a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1z",
                            },
                          }),
                        ],
                      ),
                      i("span", { staticClass: "rhs-enable2fac" }, [
                        e._v("Enable 2 factor auth"),
                      ]),
                    ]),
                  ])
                : e._e(),
              e.canReinvite
                ? i("li", { staticClass: "reinvite" }, [
                    i(
                      "a",
                      {
                        on: {
                          click: function (t) {
                            return (t.preventDefault(), e.onReinviteClicked(t));
                          },
                        },
                      },
                      [
                        i(
                          "svg",
                          {
                            staticStyle: {
                              position: "absolute",
                              margin: "9px 0 0 7px",
                              width: "9px",
                            },
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 7.56 8.65",
                            },
                          },
                          [
                            i("path", {
                              staticClass: "cls-1",
                              attrs: {
                                d: "M6.31 4.88A2.53 2.53 0 1 1 3.7 2.35v1l1.87-1.63L3.7 0v1.1a3.78 3.78 0 1 0 3.86 3.78z",
                                id: "Layer_2-2",
                              },
                            }),
                          ],
                        ),
                        i("span", { staticClass: "rhs-reinvite" }, [
                          e._v("Resend invite"),
                        ]),
                      ],
                    ),
                  ])
                : e._e(),
              e.canRemove
                ? i("li", { staticClass: "remove" }, [
                    i(
                      "a",
                      {
                        on: {
                          click: function (t) {
                            return (t.preventDefault(), e.onRemoveClicked(t));
                          },
                        },
                      },
                      [
                        i("span", { staticClass: "icon-remove" }, [e._v("×")]),
                        i("span", [e._v("Remove")]),
                      ],
                    ),
                  ])
                : e._e(),
            ],
          ),
          e.mixinTriggerable_isOpen
            ? i("div", { staticClass: "mobile-only-backdrop" })
            : e._e(),
        ]);
      },
      he = [],
      be = {
        name: "member-list-toolbox",
        mixins: [ie],
        props: { teamMember: { type: Object, required: !0 } },
        computed: {
          showToolbox: function () {
            return (
              this.canEdit ||
              this.canDisable2FA ||
              this.canEnable2FA ||
              this.canReinvite ||
              this.canRemove
            );
          },
          canEdit: function () {
            return (
              !(
                "owner" !== this.teamMember.acting_role.svalue ||
                !this.teamMember.has_password
              ) || this.teamMember.is_acting_user
            );
          },
          canDisable2FA: function () {
            return (
              this.teamMember.is_acting_user &&
              (this.teamMember.totp_secret_key ||
                this.teamMember.sms_auth_number)
            );
          },
          canEnable2FA: function () {
            return (
              this.teamMember.is_acting_user &&
              !this.teamMember.totp_secret_key &&
              !this.teamMember.sms_auth_number
            );
          },
          canReinvite: function () {
            return (
              this.teamMember.role.ivalue <=
                this.teamMember.acting_role.ivalue &&
              !this.teamMember.is_acting_user &&
              !this.teamMember.has_password
            );
          },
          canRemove: function () {
            return "owner" === this.teamMember.acting_role.svalue
              ? !this.teamMember.is_acting_user ||
                  1 !== this.$store.getters[y.getters.GET_OWNER_COUNT]
              : this.teamMember.is_acting_user;
          },
        },
        methods: {
          onEditClicked: function () {
            (this.$eventBus.$emit($.MTBOX_EDIT_CLICKED, this.teamMember),
              this.mixinTriggerable_forceClose());
          },
          onReinviteClicked: function () {
            (this.$eventBus.$emit($.MTBOX_REINVITE_CLICKED, this.teamMember),
              this.mixinTriggerable_forceClose());
          },
          onRemoveClicked: function () {
            (this.$eventBus.$emit($.MTBOX_REMOVE_CLICKED, this.teamMember),
              this.mixinTriggerable_forceClose());
          },
        },
      },
      ve = be,
      ge = Object(ae["a"])(ve, pe, he, !1, null, null, null),
      Te = ge.exports;
    function we(e, t) {
      var i = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          i.push.apply(i, n));
      }
      return i;
    }
    function Ae(e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? we(i, !0).forEach(function (t) {
              Object(m["a"])(e, t, i[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : we(i).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t),
                );
              });
      }
      return e;
    }
    var Ce = {
        name: "member-list",
        components: { MemberListToolbox: Te },
        computed: Ae(
          {},
          Object(_["b"])({
            teamMembers: y.getters.GET_TEAM_MEMBERS,
            disableAdd: y.getters.GET_DISABLE_ADD,
          }),
          {
            showFullnameCol: function () {
              var e = !1;
              return (
                this.teamMembers.forEach(function (t) {
                  t.fullname && (e = !0);
                }),
                e
              );
            },
          },
        ),
        methods: {
          getUserStatus: function (e) {
            return e.is_acting_user
              ? " <em>(logged in)</em>"
              : e.has_password
                ? void 0
                : " <em>(invited)</em>";
          },
          getMemberType: function (e) {
            var t = "";
            return (
              "report" === e.role.svalue
                ? (t = "Reports")
                : "admin" === e.role.svalue
                  ? (t = "Admin")
                  : "owner" === e.role.svalue && (t = "Owner"),
              e.is_new_owner && (t += " <em>(Owner pending)</em>"),
              t
            );
          },
          editTeamMember: function (e) {
            screen.width >= 768 &&
              this.$eventBus.$emit($.MTBOX_EDIT_CLICKED, e);
          },
        },
      },
      Me = Ce,
      Oe = Object(ae["a"])(Me, Ee, fe, !1, null, null, null),
      De = Oe.exports,
      Se = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i("div", { class: { "is-upgrade": e.needsUpgrade } }, [
          !e.needsUpgrade && e.showRemaining
            ? i("div", { staticClass: "table-info" }, [
                i("p", [
                  i("span", { staticClass: "mobile-hide" }, [
                    e._v("You have "),
                  ]),
                  i("strong", [
                    e._v(e._s(e.remaining) + " "),
                    i("span", { staticClass: "mobile-hide" }, [
                      e._v("team member"),
                    ]),
                    e._v(" invite"),
                    e.remaining > 1 ? i("span", [e._v("s")]) : e._e(),
                  ]),
                  e._v(" remaining on the free plan. "),
                  e._m(0),
                  e._m(1),
                ]),
              ])
            : e._e(),
          e.needsUpgrade
            ? i("div", { staticClass: "bar-notice is-info" }, [
                e._m(2),
                i(
                  "a",
                  {
                    staticClass: "button-outlined",
                    attrs: { href: "/account/changeplan/" },
                  },
                  [e._v("Upgrade options")],
                ),
              ])
            : e._e(),
        ]);
      },
      Re = [
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("span", { staticClass: "mobile-hide" }, [
            e._v("Try out an "),
            i("a", { attrs: { href: "/account/changeplan/" } }, [
              e._v("upgraded plan"),
            ]),
            e._v(" for unlimited team members."),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("span", { staticClass: "desktop-hide" }, [
            i("a", { attrs: { href: "/account/changeplan/" } }, [
              e._v("Upgrade?"),
            ]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("p", [
            i("span", { staticClass: "notice-icon" }),
            i("span", { staticClass: "bar-notice-message" }, [
              i("span", { staticClass: "bar-notice-title" }, [
                e._v("Need more team members? "),
              ]),
              i("span", { staticClass: "bar-notice-text" }, [
                e._v("Try out an "),
                i("a", { attrs: { href: "/account/changeplan/" } }, [
                  e._v("upgraded plan"),
                ]),
                e._v(" for unlimited team members."),
              ]),
            ]),
          ]);
        },
      ];
    function ye(e, t) {
      var i = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          i.push.apply(i, n));
      }
      return i;
    }
    function Ne(e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ye(i, !0).forEach(function (t) {
              Object(m["a"])(e, t, i[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : ye(i).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t),
                );
              });
      }
      return e;
    }
    var Ie = {
        name: "UpgradeNotice",
        computed: Ne(
          {},
          Object(_["b"])({
            teamMembers: y.getters.GET_TEAM_MEMBERS,
            needsUpgrade: y.getters.GET_NEEDS_UPGRADE,
            showRemaining: y.getters.GET_SHOW_REMAINING,
          }),
          {
            remaining: function () {
              return this.showRemaining
                ? this.teamMembers.length >= 2
                  ? 0
                  : 2 - this.teamMembers.length
                : 0;
            },
          },
        ),
      },
      xe = Ie,
      ke = (i("41d9"), Object(ae["a"])(xe, Se, Re, !1, null, "7b021f66", null)),
      Be = ke.exports,
      Le = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "div",
          { staticClass: "card--fyi", attrs: { id: "orgname-section" } },
          [
            e.showTitle
              ? i("h5", [
                  e._v("Organization name: " + e._s(e.organisation_name)),
                ])
              : e._e(),
            e.showTitle
              ? i("p", [e._v("Your company, business or organization name.")])
              : e._e(),
            i(
              "form",
              {
                staticClass: "card--add",
                attrs: { id: "orgname-form" },
                on: {
                  submit: function (e) {
                    e.preventDefault();
                  },
                },
              },
              [
                i(
                  "div",
                  {
                    staticClass: "rate-limit rate-limit-defaults",
                    class: { "is-closed": !e.isEditing },
                  },
                  [
                    e.isEditing
                      ? i("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: e.new_orgname,
                              expression: "new_orgname",
                            },
                          ],
                          staticClass: "input-orgname",
                          attrs: {
                            type: "text",
                            "data-lpignore": "true",
                            autocomplete: "off",
                            readonly: e.isSaving,
                          },
                          domProps: { value: e.new_orgname },
                          on: {
                            keyup: function (t) {
                              return !t.type.indexOf("key") &&
                                e._k(t.keyCode, "enter", 13, t.key, "Enter")
                                ? null
                                : (t.preventDefault(), e.save(t));
                            },
                            input: function (t) {
                              t.target.composing ||
                                (e.new_orgname = t.target.value);
                            },
                          },
                        })
                      : e._e(),
                    e.isEditing || e.isSaving
                      ? i(
                          "button",
                          {
                            staticClass: "btn blue",
                            class: [
                              e.isSaving || !e.canSave ? "disabled" : "",
                              e.isSaving ? "spinner-button" : "",
                            ],
                            on: {
                              click: function (t) {
                                return (t.preventDefault(), e.save(t));
                              },
                            },
                          },
                          [e._v(e._s(e.isSaving ? "Saving" : "Save"))],
                        )
                      : e._e(),
                    e.isEditing && !e.isSaving
                      ? i(
                          "button",
                          {
                            staticClass: "btn grey",
                            class: { disabled: e.isSaving },
                            on: {
                              click: function (t) {
                                return (t.preventDefault(), e.cancelEditing(t));
                              },
                            },
                          },
                          [e._v("Cancel")],
                        )
                      : e._e(),
                    e.isEditing || e.isSaving
                      ? e._e()
                      : i(
                          "button",
                          {
                            staticClass: "btn grey",
                            attrs: { disabled: e.disableAdd },
                            on: {
                              click: function (t) {
                                return (t.preventDefault(), e.startEditing(t));
                              },
                            },
                          },
                          [
                            e._v(
                              e._s(
                                e.showTitle
                                  ? "Change Organization Name"
                                  : "Add Organization Name",
                              ),
                            ),
                          ],
                        ),
                  ],
                ),
              ],
            ),
          ],
        );
      },
      Pe = [];
    function $e(e, t) {
      var i = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          i.push.apply(i, n));
      }
      return i;
    }
    function Ue(e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? $e(i, !0).forEach(function (t) {
              Object(m["a"])(e, t, i[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : $e(i).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t),
                );
              });
      }
      return e;
    }
    var je = {
        name: "update-organisation",
        mixins: [Q],
        data: function () {
          return { new_orgname: "", isEditing: !1, isSaving: !1 };
        },
        computed: Ue(
          {},
          Object(_["c"])({
            organisation_name: function (e) {
              return e.team.organisation_name;
            },
            disableAdd: function (e) {
              return e.team.disable_add;
            },
          }),
          {
            canSave: function () {
              return (
                !this.isSaving &&
                !this.$store.getters[b.getters.GET_IS_AJAX_RUNNING]
              );
            },
            showTitle: function () {
              return !!this.organisation_name;
            },
          },
        ),
        created: function () {
          var e;
          (this.mixinEventListener_register(
            ((e = {}),
            Object(m["a"])(
              e,
              $.UPDATE_ORGANISATION_SUCCEEDED,
              this.onUpdateOrganisationSucceeded,
            ),
            Object(m["a"])(
              e,
              $.UPDATE_ORGANISATION_FAILED,
              this.onUpdateOrganisationFailed,
            ),
            e),
          ),
            this.mixinEventListener_on());
        },
        destroyed: function () {
          this.mixinEventListener_off();
        },
        methods: {
          startEditing: function () {
            ((this.new_orgname = this.organisation_name),
              (this.isEditing = !0));
          },
          cancelEditing: function () {
            ((this.new_orgname = this.organisation_name),
              (this.isEditing = !1));
          },
          save: function () {
            if (!this.isSaving) {
              if (this.organisation_name == this.new_orgname)
                return ((this.isSaving = !1), void (this.isEditing = !1));
              ((this.isSaving = !0),
                this.$eventBus.$emit(
                  $.UPDATE_ORGANISATION_REQUEST,
                  this.new_orgname,
                ));
            }
          },
          onUpdateOrganisationSucceeded: function () {
            ((this.isSaving = !1), (this.isEditing = !1));
          },
          onUpdateOrganisationFailed: function () {
            ((this.isSaving = !1), (this.isEditing = !1));
          },
        },
      },
      Fe = je,
      Ge = (i("0bbf"), Object(ae["a"])(Fe, Le, Pe, !1, null, "7309301a", null)),
      Ke = Ge.exports,
      We = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "div",
          {
            staticClass: "card edit-user-form",
            class: {
              "is-force-disable": e.showForceDisable,
              "is-tab-2fa": e.is2FATab,
            },
          },
          [
            e.is_edit_token_valid
              ? i("div", { staticClass: "card--tab-list" }, [
                  i(
                    "a",
                    {
                      staticClass: "tab",
                      class: { active: "overview" === e.selectedTab },
                      attrs: { role: "tab" },
                      on: {
                        click: function (t) {
                          return (t.preventDefault(), e.changeTab("overview"));
                        },
                      },
                    },
                    [e._v("Overview")],
                  ),
                  i(
                    "a",
                    {
                      staticClass: "tab",
                      class: { active: "password" === e.selectedTab },
                      attrs: { role: "tab" },
                      on: {
                        click: function (t) {
                          return (t.preventDefault(), e.changeTab("password"));
                        },
                      },
                    },
                    [e._v("Password")],
                  ),
                  i(
                    "a",
                    {
                      staticClass: "tab",
                      class: { active: "twofactorauth" === e.selectedTab },
                      attrs: { role: "tab" },
                      on: {
                        click: function (t) {
                          return (
                            t.preventDefault(),
                            e.changeTab("twofactorauth")
                          );
                        },
                      },
                    },
                    [
                      i("span", { staticClass: "show-large" }, [
                        e._v("2 Factor Auth"),
                      ]),
                      i("span", { staticClass: "show-small" }, [e._v("2FA")]),
                    ],
                  ),
                ])
              : e._e(),
            i("enter-password-overlay", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !e.is_edit_token_valid,
                  expression: "!is_edit_token_valid",
                },
              ],
            }),
            i(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: e.is_edit_token_valid,
                    expression: "is_edit_token_valid",
                  },
                ],
                staticClass: "edit-member-content",
              },
              [
                i(
                  "div",
                  {
                    staticClass: "content-body",
                    class: [e.getOpenClass, { "is-overflow": e.tabOverflow }],
                  },
                  [
                    i(
                      "form",
                      {
                        staticClass: "form-horizontal",
                        attrs: { id: "team-member", name: "team-member" },
                        on: {
                          submit: function (e) {
                            e.preventDefault();
                          },
                        },
                      },
                      [
                        i(
                          "div",
                          { staticClass: "tab-content" },
                          [
                            i("transition", { attrs: { name: "fade" } }, [
                              i(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: "overview" === e.selectedTab,
                                      expression: "selectedTab === 'overview'",
                                    },
                                  ],
                                  staticClass:
                                    "tab-pane user-tab-overview active",
                                  class: {
                                    "is-active": "overview" === e.selectedTab,
                                  },
                                  attrs: { id: "overview", role: "tabpanel" },
                                },
                                [
                                  i("div", { staticClass: "form-group" }, [
                                    i(
                                      "label",
                                      { staticClass: "form-group-label" },
                                      [e._v("Email Address")],
                                    ),
                                    e.showIfActive
                                      ? i(
                                          "div",
                                          { staticClass: "form-group-item" },
                                          [
                                            i("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: e.username,
                                                  expression: "username",
                                                },
                                              ],
                                              staticClass:
                                                "form-control input-md",
                                              attrs: {
                                                autocomplete: "off",
                                                type: "text",
                                              },
                                              domProps: { value: e.username },
                                              on: {
                                                input: function (t) {
                                                  t.target.composing ||
                                                    (e.username =
                                                      t.target.value);
                                                },
                                              },
                                            }),
                                            i(
                                              "span",
                                              { staticClass: "error-text" },
                                              [e._v("Error text here")],
                                            ),
                                          ],
                                        )
                                      : i(
                                          "div",
                                          { staticClass: "form-group-item" },
                                          [
                                            i(
                                              "span",
                                              {
                                                staticClass:
                                                  "inline-checkbox-desc",
                                                staticStyle: {
                                                  top: "7px",
                                                  "font-weight": "600",
                                                },
                                              },
                                              [e._v(e._s(e.username))],
                                            ),
                                          ],
                                        ),
                                  ]),
                                  i("div", { staticClass: "form-group" }, [
                                    i(
                                      "label",
                                      { staticClass: "form-group-label" },
                                      [e._v("Full Name")],
                                    ),
                                    i(
                                      "div",
                                      { staticClass: "form-group-item" },
                                      [
                                        i("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: e.fullname,
                                              expression: "fullname",
                                            },
                                          ],
                                          staticClass: "form-control input-md",
                                          attrs: {
                                            autocomplete: "off",
                                            type: "text",
                                          },
                                          domProps: { value: e.fullname },
                                          on: {
                                            input: function (t) {
                                              t.target.composing ||
                                                (e.fullname = t.target.value);
                                            },
                                          },
                                        }),
                                        i(
                                          "span",
                                          { staticClass: "error-text" },
                                          [e._v("Error text here")],
                                        ),
                                      ],
                                    ),
                                  ]),
                                  i(
                                    "div",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: e.showRole,
                                          expression: "showRole",
                                        },
                                      ],
                                      staticClass: "form-group",
                                    },
                                    [
                                      i(
                                        "label",
                                        { staticClass: "form-group-label" },
                                        [e._v("Role")],
                                      ),
                                      i(
                                        "div",
                                        { staticClass: "form-group-item" },
                                        [
                                          i("role-dropdown", {
                                            ref: "role_dropdown",
                                          }),
                                        ],
                                        1,
                                      ),
                                    ],
                                  ),
                                  i("div", { staticClass: "form-group" }, [
                                    i(
                                      "label",
                                      {
                                        staticClass: "form-group-label pull-up",
                                      },
                                      [e._v("Notifications")],
                                    ),
                                    i(
                                      "div",
                                      { attrs: { id: "user-notifications" } },
                                      [
                                        i("dl", [
                                          i(
                                            "dt",
                                            {
                                              class: {
                                                "is-disabled":
                                                  "report" == e.currentRole,
                                              },
                                              on: {
                                                click: function (t) {
                                                  (t.preventDefault(),
                                                    (e.account_management_notification =
                                                      !e.account_management_notification));
                                                },
                                              },
                                            },
                                            [
                                              i(
                                                "div",
                                                {
                                                  staticClass: "checker",
                                                  class: {
                                                    "is-focus":
                                                      e.accountManagementFocused,
                                                  },
                                                },
                                                [
                                                  i(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "checker-box",
                                                      class: [
                                                        e.account_management_notification
                                                          ? "checked"
                                                          : "",
                                                      ],
                                                    },
                                                    [
                                                      i("input", {
                                                        attrs: {
                                                          type: "checkbox",
                                                          disabled:
                                                            "report" ==
                                                            e.currentRole,
                                                        },
                                                        on: {
                                                          focus: function (t) {
                                                            e.accountManagementFocused =
                                                              !0;
                                                          },
                                                          blur: function (t) {
                                                            e.accountManagementFocused =
                                                              !1;
                                                          },
                                                        },
                                                      }),
                                                    ],
                                                  ),
                                                ],
                                              ),
                                              i("span", [
                                                e._v("Account management"),
                                              ]),
                                            ],
                                          ),
                                          i(
                                            "dd",
                                            {
                                              class: {
                                                "is-disabled":
                                                  "report" == e.currentRole,
                                              },
                                            },
                                            [
                                              e._v(
                                                "\n                      Receive emails about account management and usage\n                      alerts.\n                    ",
                                              ),
                                            ],
                                          ),
                                          i(
                                            "dt",
                                            {
                                              on: {
                                                click: function (t) {
                                                  (t.preventDefault(),
                                                    (e.weekly_summary_notification =
                                                      !e.weekly_summary_notification));
                                                },
                                              },
                                            },
                                            [
                                              i(
                                                "div",
                                                {
                                                  staticClass: "checker",
                                                  class: {
                                                    "is-focus":
                                                      e.weeklySummaryFocused,
                                                  },
                                                },
                                                [
                                                  i(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "checker-box",
                                                      class: [
                                                        e.weekly_summary_notification
                                                          ? "checked"
                                                          : "",
                                                      ],
                                                    },
                                                    [
                                                      i("input", {
                                                        attrs: {
                                                          type: "checkbox",
                                                        },
                                                        on: {
                                                          focus: function (t) {
                                                            e.weeklySummaryFocused =
                                                              !0;
                                                          },
                                                          blur: function (t) {
                                                            e.weeklySummaryFocused =
                                                              !1;
                                                          },
                                                        },
                                                      }),
                                                    ],
                                                  ),
                                                ],
                                              ),
                                              i("span", [
                                                e._v("Weekly summary"),
                                              ]),
                                            ],
                                          ),
                                          i("dd", [
                                            e._v(
                                              "\n                      Receive weekly summary emails regarding this account.\n                    ",
                                            ),
                                          ]),
                                        ]),
                                      ],
                                    ),
                                  ]),
                                ],
                              ),
                            ]),
                            i("transition", { attrs: { name: "fade" } }, [
                              i(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: "password" === e.selectedTab,
                                      expression: "selectedTab === 'password'",
                                    },
                                  ],
                                  staticClass: "tab-pane user-tab-password",
                                  class: {
                                    "is-active": "password" === e.selectedTab,
                                  },
                                  attrs: { id: "password", role: "tabpanel" },
                                },
                                [
                                  i(
                                    "div",
                                    { staticClass: "bar-control full-width" },
                                    [
                                      i("p", [
                                        i("span", {
                                          staticClass: "control-icon",
                                        }),
                                        e._v(
                                          "Use the fields below to\n                  change the password. The current password won't be displayed\n                  on the page for security reasons.\n                ",
                                        ),
                                      ]),
                                    ],
                                  ),
                                  i("div", { staticClass: "form-group" }, [
                                    i(
                                      "label",
                                      { staticClass: "form-group-label" },
                                      [e._v("New Password")],
                                    ),
                                    i(
                                      "div",
                                      { staticClass: "form-group-item" },
                                      [
                                        "checkbox" ===
                                        [
                                          e.showNewPassword
                                            ? "text"
                                            : "password",
                                        ]
                                          ? i("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: e.new_password,
                                                  expression: "new_password",
                                                },
                                              ],
                                              staticClass:
                                                "form-control input-md input-password",
                                              attrs: {
                                                autocomplete: "off",
                                                type: "checkbox",
                                              },
                                              domProps: {
                                                checked: Array.isArray(
                                                  e.new_password,
                                                )
                                                  ? e._i(e.new_password, null) >
                                                    -1
                                                  : e.new_password,
                                              },
                                              on: {
                                                change: function (t) {
                                                  var i = e.new_password,
                                                    n = t.target,
                                                    s = !!n.checked;
                                                  if (Array.isArray(i)) {
                                                    var a = null,
                                                      r = e._i(i, a);
                                                    n.checked
                                                      ? r < 0 &&
                                                        (e.new_password =
                                                          i.concat([a]))
                                                      : r > -1 &&
                                                        (e.new_password = i
                                                          .slice(0, r)
                                                          .concat(
                                                            i.slice(r + 1),
                                                          ));
                                                  } else e.new_password = s;
                                                },
                                              },
                                            })
                                          : "radio" ===
                                              [
                                                e.showNewPassword
                                                  ? "text"
                                                  : "password",
                                              ]
                                            ? i("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: e.new_password,
                                                    expression: "new_password",
                                                  },
                                                ],
                                                staticClass:
                                                  "form-control input-md input-password",
                                                attrs: {
                                                  autocomplete: "off",
                                                  type: "radio",
                                                },
                                                domProps: {
                                                  checked: e._q(
                                                    e.new_password,
                                                    null,
                                                  ),
                                                },
                                                on: {
                                                  change: function (t) {
                                                    e.new_password = null;
                                                  },
                                                },
                                              })
                                            : i("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: e.new_password,
                                                    expression: "new_password",
                                                  },
                                                ],
                                                staticClass:
                                                  "form-control input-md input-password",
                                                attrs: {
                                                  autocomplete: "off",
                                                  type: [
                                                    e.showNewPassword
                                                      ? "text"
                                                      : "password",
                                                  ],
                                                },
                                                domProps: {
                                                  value: e.new_password,
                                                },
                                                on: {
                                                  input: function (t) {
                                                    t.target.composing ||
                                                      (e.new_password =
                                                        t.target.value);
                                                  },
                                                },
                                              }),
                                        i(
                                          "a",
                                          {
                                            staticClass: "password-show-hide",
                                            class: [
                                              e.showNewPassword
                                                ? "is-shown"
                                                : "is-hidden",
                                            ],
                                            on: {
                                              click: function (t) {
                                                (t.preventDefault(),
                                                  (e.showNewPassword =
                                                    !e.showNewPassword));
                                              },
                                            },
                                          },
                                          [
                                            i(
                                              "svg",
                                              {
                                                attrs: {
                                                  xmlns:
                                                    "http://www.w3.org/2000/svg",
                                                  viewBox: "0 0 13 10",
                                                  "enable-background":
                                                    "new 0 0 13 10",
                                                },
                                              },
                                              [
                                                i("path", {
                                                  attrs: {
                                                    fill: "#828da0",
                                                    d: "M12.9 4.9c-1.2 1.2-2.3 2.5-3.5 3.5-1.8 1.6-4.5 1.4-6.2-.3L.1 5l.3-.3 2.8-2.8c2-2 4.8-2 6.8 0 .9 1 1.9 2 2.9 3zm-11.2 0c1 1 1.8 1.9 2.7 2.8 1.3 1.1 3.2 1 4.5-.2l1.6-1.6c.3-.3.6-.6.9-.8-.9-.9-1.7-1.9-2.6-2.7-1.1-1-2.8-1.1-4.1-.3-.4.2-.6.5-.9.7L1.7 4.9zM6.5 2.6c1.3 0 2.4 1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4C5.1 7.4 4 6.3 4 5c.1-1.4 1.2-2.4 2.5-2.4zm0 1.5c0 .5.3.9.8.9s.9-.3.9-.8-.3-.9-.8-.9-.9.3-.9.8z",
                                                  },
                                                }),
                                              ],
                                            ),
                                          ],
                                        ),
                                      ],
                                    ),
                                  ]),
                                  i("div", { staticClass: "form-group" }, [
                                    i(
                                      "label",
                                      { staticClass: "form-group-label" },
                                      [e._v("Confirm New")],
                                    ),
                                    i(
                                      "div",
                                      { staticClass: "form-group-item" },
                                      [
                                        "checkbox" ===
                                        [
                                          e.showConPassword
                                            ? "text"
                                            : "password",
                                        ]
                                          ? i("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: e.con_password,
                                                  expression: "con_password",
                                                },
                                              ],
                                              staticClass:
                                                "form-control input-md input-password",
                                              attrs: {
                                                autocomplete: "off",
                                                type: "checkbox",
                                              },
                                              domProps: {
                                                checked: Array.isArray(
                                                  e.con_password,
                                                )
                                                  ? e._i(e.con_password, null) >
                                                    -1
                                                  : e.con_password,
                                              },
                                              on: {
                                                change: function (t) {
                                                  var i = e.con_password,
                                                    n = t.target,
                                                    s = !!n.checked;
                                                  if (Array.isArray(i)) {
                                                    var a = null,
                                                      r = e._i(i, a);
                                                    n.checked
                                                      ? r < 0 &&
                                                        (e.con_password =
                                                          i.concat([a]))
                                                      : r > -1 &&
                                                        (e.con_password = i
                                                          .slice(0, r)
                                                          .concat(
                                                            i.slice(r + 1),
                                                          ));
                                                  } else e.con_password = s;
                                                },
                                              },
                                            })
                                          : "radio" ===
                                              [
                                                e.showConPassword
                                                  ? "text"
                                                  : "password",
                                              ]
                                            ? i("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: e.con_password,
                                                    expression: "con_password",
                                                  },
                                                ],
                                                staticClass:
                                                  "form-control input-md input-password",
                                                attrs: {
                                                  autocomplete: "off",
                                                  type: "radio",
                                                },
                                                domProps: {
                                                  checked: e._q(
                                                    e.con_password,
                                                    null,
                                                  ),
                                                },
                                                on: {
                                                  change: function (t) {
                                                    e.con_password = null;
                                                  },
                                                },
                                              })
                                            : i("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: e.con_password,
                                                    expression: "con_password",
                                                  },
                                                ],
                                                staticClass:
                                                  "form-control input-md input-password",
                                                attrs: {
                                                  autocomplete: "off",
                                                  type: [
                                                    e.showConPassword
                                                      ? "text"
                                                      : "password",
                                                  ],
                                                },
                                                domProps: {
                                                  value: e.con_password,
                                                },
                                                on: {
                                                  input: function (t) {
                                                    t.target.composing ||
                                                      (e.con_password =
                                                        t.target.value);
                                                  },
                                                },
                                              }),
                                        i(
                                          "a",
                                          {
                                            staticClass: "password-show-hide",
                                            class: [
                                              e.showConPassword
                                                ? "is-shown"
                                                : "is-hidden",
                                            ],
                                            on: {
                                              click: function (t) {
                                                (t.preventDefault(),
                                                  (e.showConPassword =
                                                    !e.showConPassword));
                                              },
                                            },
                                          },
                                          [
                                            i(
                                              "svg",
                                              {
                                                attrs: {
                                                  xmlns:
                                                    "http://www.w3.org/2000/svg",
                                                  viewBox: "0 0 13 10",
                                                  "enable-background":
                                                    "new 0 0 13 10",
                                                },
                                              },
                                              [
                                                i("path", {
                                                  attrs: {
                                                    fill: "#828da0",
                                                    d: "M12.9 4.9c-1.2 1.2-2.3 2.5-3.5 3.5-1.8 1.6-4.5 1.4-6.2-.3L.1 5l.3-.3 2.8-2.8c2-2 4.8-2 6.8 0 .9 1 1.9 2 2.9 3zm-11.2 0c1 1 1.8 1.9 2.7 2.8 1.3 1.1 3.2 1 4.5-.2l1.6-1.6c.3-.3.6-.6.9-.8-.9-.9-1.7-1.9-2.6-2.7-1.1-1-2.8-1.1-4.1-.3-.4.2-.6.5-.9.7L1.7 4.9zM6.5 2.6c1.3 0 2.4 1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4C5.1 7.4 4 6.3 4 5c.1-1.4 1.2-2.4 2.5-2.4zm0 1.5c0 .5.3.9.8.9s.9-.3.9-.8-.3-.9-.8-.9-.9.3-.9.8z",
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
                            ]),
                            i("transition", { attrs: { name: "fade" } }, [
                              i(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: "twofactorauth" === e.selectedTab,
                                      expression:
                                        "selectedTab === 'twofactorauth'",
                                    },
                                  ],
                                  staticClass: "tab-pane user-tab-2fa active",
                                  class: {
                                    "is-active":
                                      "twofactorauth" === e.selectedTab,
                                  },
                                  attrs: {
                                    id: "twofactorauth",
                                    role: "tabpanel",
                                  },
                                },
                                [
                                  i("div", { staticClass: "form-group" }, [
                                    i(
                                      "label",
                                      { staticClass: "form-group-label" },
                                      [e._v("Status")],
                                    ),
                                    i(
                                      "div",
                                      { staticClass: "form-group-item" },
                                      [
                                        i(
                                          "div",
                                          {
                                            staticClass: "bar-control",
                                            class: {
                                              "is-enforced": e.is2FAEnabled,
                                            },
                                          },
                                          [
                                            e.is2FAEnabled
                                              ? i("p", [
                                                  i("span", {
                                                    staticClass: "control-icon",
                                                  }),
                                                  e._v(
                                                    "2FA is\n                      currently ",
                                                  ),
                                                  i("strong", [
                                                    e._v("enabled"),
                                                  ]),
                                                  i("span", [
                                                    e._v(" using "),
                                                    e.app2FA
                                                      ? i("span", [
                                                          e._v(
                                                            "App Authentication",
                                                          ),
                                                        ])
                                                      : i("span", [
                                                          e._v(
                                                            "SMS Authentication",
                                                          ),
                                                        ]),
                                                    e._v("."),
                                                  ]),
                                                ])
                                              : i("p", [
                                                  i("span", {
                                                    staticClass: "control-icon",
                                                  }),
                                                  e._v(
                                                    "Two-factor\n                      authentication is\n                      currently ",
                                                  ),
                                                  i("strong", [
                                                    e._v("disabled"),
                                                  ]),
                                                  e._v(
                                                    ".\n                    ",
                                                  ),
                                                ]),
                                          ],
                                        ),
                                        e.is2FAEnabled || e.showIfActive
                                          ? e._e()
                                          : i(
                                              "p",
                                              { staticClass: "info-text" },
                                              [
                                                e._v(
                                                  "\n                    It can be enabled directly by the team member.\n                  ",
                                                ),
                                              ],
                                            ),
                                        !e.is2FAEnabled && e.showIfActive
                                          ? i(
                                              "p",
                                              { staticClass: "info-text" },
                                              [
                                                e._v(
                                                  "\n                    Two-factor authentication adds an extra layer of security\n                    to your account in case your password is compromised. You\n                    can choose App Authentication, SMS Authentication, or\n                    both.\n                  ",
                                                ),
                                              ],
                                            )
                                          : e._e(),
                                        !e.is2FAEnabled && e.showIfActive
                                          ? i(
                                              "p",
                                              { staticClass: "info-text" },
                                              [
                                                i(
                                                  "a",
                                                  {
                                                    on: {
                                                      click: function (t) {
                                                        return (
                                                          t.preventDefault(),
                                                          e.goto2FAPage(t)
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [
                                                    e._v(
                                                      "Change your two-factor authentication settings",
                                                    ),
                                                  ],
                                                ),
                                              ],
                                            )
                                          : e._e(),
                                      ],
                                    ),
                                  ]),
                                  e.showForceDisable ? i("hr") : e._e(),
                                  e.showForceDisable
                                    ? i("div", { staticClass: "form-group" }, [
                                        i(
                                          "label",
                                          { staticClass: "form-group-label" },
                                          [e._v("Disable 2FA")],
                                        ),
                                        i(
                                          "div",
                                          { staticClass: "form-group-item" },
                                          [
                                            i(
                                              "button",
                                              {
                                                staticClass: "button-outlined",
                                                class: {
                                                  "is-working":
                                                    e.isDisabling2FA,
                                                },
                                                on: {
                                                  click: function (t) {
                                                    return (
                                                      t.preventDefault(),
                                                      e.forceDisable2FA(t)
                                                    );
                                                  },
                                                },
                                              },
                                              [
                                                e._v(
                                                  "\n                    Disable 2FA for this team member\n                    ",
                                                ),
                                                i(
                                                  "span",
                                                  {
                                                    staticClass: "icon-working",
                                                  },
                                                  [
                                                    i(
                                                      "svg",
                                                      {
                                                        staticClass:
                                                          "Loader_icon_1k4ls",
                                                        attrs: {
                                                          width: "16",
                                                          height: "16",
                                                          viewBox: "0 0 16 16",
                                                          fill: "none",
                                                          xmlns:
                                                            "http://www.w3.org/2000/svg",
                                                        },
                                                      },
                                                      [
                                                        i("path", {
                                                          attrs: {
                                                            d: "M8 3.25C8.69036 3.25 9.25 2.69036 9.25 2C9.25 1.30964 8.69036 0.75 8 0.75C7.30964 0.75 6.75 1.30964 6.75 2C6.75 2.69036 7.30964 3.25 8 3.25Z",
                                                            fill: "#12BECB",
                                                          },
                                                        }),
                                                        i("path", {
                                                          attrs: {
                                                            d: "M2 9.25C2.69036 9.25 3.25 8.69036 3.25 8C3.25 7.30964 2.69036 6.75 2 6.75C1.30964 6.75 0.75 7.30964 0.75 8C0.75 8.69036 1.30964 9.25 2 9.25Z",
                                                            fill: "#E2B466",
                                                          },
                                                        }),
                                                        i("path", {
                                                          attrs: {
                                                            d: "M4 5.25C4.69036 5.25 5.25 4.69036 5.25 4C5.25 3.30964 4.69036 2.75 4 2.75C3.30964 2.75 2.75 3.30964 2.75 4C2.75 4.69036 3.30964 5.25 4 5.25Z",
                                                            fill: "#DAE0E3",
                                                          },
                                                        }),
                                                        i("path", {
                                                          attrs: {
                                                            d: "M4 13.25C4.69036 13.25 5.25 12.6904 5.25 12C5.25 11.3096 4.69036 10.75 4 10.75C3.30964 10.75 2.75 11.3096 2.75 12C2.75 12.6904 3.30964 13.25 4 13.25Z",
                                                            fill: "#425157",
                                                          },
                                                        }),
                                                        i("path", {
                                                          attrs: {
                                                            d: "M12 5.25C12.6904 5.25 13.25 4.69036 13.25 4C13.25 3.30964 12.6904 2.75 12 2.75C11.3096 2.75 10.75 3.30964 10.75 4C10.75 4.69036 11.3096 5.25 12 5.25Z",
                                                            fill: "#00BA7A",
                                                          },
                                                        }),
                                                        i("path", {
                                                          attrs: {
                                                            d: "M12 13.25C12.6904 13.25 13.25 12.6904 13.25 12C13.25 11.3096 12.6904 10.75 12 10.75C11.3096 10.75 10.75 11.3096 10.75 12C10.75 12.6904 11.3096 13.25 12 13.25Z",
                                                            fill: "#B35E4E",
                                                          },
                                                        }),
                                                        i("path", {
                                                          attrs: {
                                                            d: "M14 9.25C14.6904 9.25 15.25 8.69036 15.25 8C15.25 7.30964 14.6904 6.75 14 6.75C13.3096 6.75 12.75 7.30964 12.75 8C12.75 8.69036 13.3096 9.25 14 9.25Z",
                                                            fill: "#EE8A77",
                                                          },
                                                        }),
                                                        i("path", {
                                                          attrs: {
                                                            d: "M8 15.25C8.69036 15.25 9.25 14.6904 9.25 14C9.25 13.3096 8.69036 12.75 8 12.75C7.30964 12.75 6.75 13.3096 6.75 14C6.75 14.6904 7.30964 15.25 8 15.25Z",
                                                            fill: "#818DA0",
                                                          },
                                                        }),
                                                      ],
                                                    ),
                                                  ],
                                                ),
                                              ],
                                            ),
                                            i(
                                              "p",
                                              { staticClass: "info-text" },
                                              [
                                                e._v(
                                                  "\n                    This is useful if a team member has locked themselves out\n                    of their account, perhaps losing their authentication\n                    device or changing their SMS number.\n                  ",
                                                ),
                                              ],
                                            ),
                                          ],
                                        ),
                                      ])
                                    : e._e(),
                                ],
                              ),
                            ]),
                          ],
                          1,
                        ),
                        i("div", { staticClass: "card-footer" }, [
                          i(
                            "button",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "twofactorauth" !== e.selectedTab,
                                  expression: "selectedTab !== 'twofactorauth'",
                                },
                              ],
                              staticClass: "btn blue",
                              class: [
                                e.mixinTriggerable_isModal ? "disabled" : "",
                                e.isWorking ? "spinner-button" : "",
                              ],
                              on: {
                                click: function (t) {
                                  return (
                                    t.preventDefault(),
                                    e.onConfirmClicked(t)
                                  );
                                },
                              },
                            },
                            [
                              e._v(
                                "\n            " +
                                  e._s(e.isWorking ? "Saving" : "Save") +
                                  "\n          ",
                              ),
                            ],
                          ),
                          i(
                            "button",
                            {
                              staticClass: "btn button-dropdown",
                              on: {
                                click: function (t) {
                                  return (
                                    t.preventDefault(),
                                    e.onCancelClicked(t)
                                  );
                                },
                              },
                            },
                            [e._v("\n            Back\n          ")],
                          ),
                        ]),
                      ],
                    ),
                  ],
                ),
              ],
            ),
          ],
          1,
        );
      },
      He = [],
      Ve = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i("div", { staticClass: "modal-password-overlay" }, [
          i(
            "form",
            {
              on: {
                submit: function (e) {
                  e.preventDefault();
                },
              },
            },
            [
              i("div", { staticClass: "password-overlay-content" }, [
                i("h4", [e._v("Enter your password to continue")]),
                i("div", { staticClass: "password-input-wrapper" }, [
                  i("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: e.password,
                        expression: "password",
                      },
                    ],
                    ref: "password",
                    staticClass: "password-field",
                    attrs: {
                      type: "password",
                      autocomplete: "off",
                      "data-1password": "off",
                      "data-1p-ignore": "true",
                      "data-lpignore": "true",
                    },
                    domProps: { value: e.password },
                    on: {
                      keyup: function (t) {
                        return !t.type.indexOf("key") &&
                          e._k(t.keyCode, "enter", 13, t.key, "Enter")
                          ? null
                          : (t.preventDefault(), e.verify(t));
                      },
                      input: function (t) {
                        t.target.composing || (e.password = t.target.value);
                      },
                    },
                  }),
                  i("span", { staticClass: "error-text" }, [
                    e._v("Entered password was incorrect"),
                  ]),
                  i("button", {
                    staticClass: "btn blue",
                    class: [e.isWorking ? "disabled spinner-button" : ""],
                    on: { click: e.verify },
                  }),
                ]),
              ]),
            ],
          ),
        ]);
      },
      ze = [],
      qe = {
        name: "enter-password-overlay",
        mixins: [Q],
        data: function () {
          return { isWorking: !1, password: "" };
        },
        computed: {},
        created: function () {
          var e;
          (this.mixinEventListener_register(
            ((e = {}),
            Object(m["a"])(
              e,
              $.ENTER_PASSWORD_SUCCEEDED,
              this.onEnterPasswordSucceeded,
            ),
            Object(m["a"])(
              e,
              $.ENTER_PASSWORD_FAILED,
              this.onEnterPasswordFailed,
            ),
            Object(m["a"])(e, te.TRIGGERABLE_CLOSED, this.onTriggerableClosed),
            e),
          ),
            this.mixinEventListener_on());
        },
        mounted: function () {
          ((this.isWorking = !1),
            (this.password = ""),
            this.$refs.password.focus());
        },
        destroyed: function () {
          this.mixinEventListener_off();
        },
        methods: {
          verify: function () {
            var e = this;
            (j()(this.$el).removeClass("has_errors"),
              (this.isWorking = !0),
              this.$eventBus.$emit(
                $.WORKING_STATE_CHANGED,
                this.$options.name,
                !0,
              ),
              this.$store
                .dispatch(y.actions.FETCH_EDIT_TOKEN, this.password)
                .then(function () {
                  e.$eventBus.$emit($.ENTER_PASSWORD_SUCCEEDED);
                })
                .catch(function () {
                  e.$eventBus.$emit($.ENTER_PASSWORD_FAILED);
                }));
          },
          onTriggerableClosed: function (e) {
            "edit-team-member" === e &&
              ((this.password = ""), j()(this.$el).removeClass("has_errors"));
          },
          onEnterPasswordSucceeded: function () {
            ((this.password = ""),
              (this.isWorking = !1),
              this.$eventBus.$emit(
                $.WORKING_STATE_CHANGED,
                this.$options.name,
                !1,
              ));
          },
          onEnterPasswordFailed: function () {
            ((this.password = ""),
              (this.isWorking = !1),
              j()(this.$el).addClass("has_errors"),
              this.$eventBus.$emit(
                $.WORKING_STATE_CHANGED,
                this.$options.name,
                !1,
              ));
          },
        },
      },
      Xe = qe,
      Qe =
        (i("f244"),
        i("a37a"),
        Object(ae["a"])(Xe, Ve, ze, !1, null, "1c2ea145", null)),
      Je = Qe.exports;
    function Ye(e, t) {
      var i = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          i.push.apply(i, n));
      }
      return i;
    }
    function Ze(e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Ye(i, !0).forEach(function (t) {
              Object(m["a"])(e, t, i[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : Ye(i).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t),
                );
              });
      }
      return e;
    }
    var et = {
        name: "edit-team-member",
        mixins: [ie, Q],
        components: { RoleDropdown: oe, EnterPasswordOverlay: Je },
        data: function () {
          return {
            teamMember: null,
            isWorking: !1,
            selectedTab: "overview",
            record_id: "",
            username: "",
            fullname: "",
            notification_level: 0,
            new_password: "",
            con_password: "",
            nLevel1: !1,
            nLevel2: !1,
            nLevel4: !1,
            nLevel8: !1,
            showNewPassword: !1,
            showConPassword: !1,
            showRole: !0,
            currentRole: null,
            app2FA: !1,
            sms2FA: !1,
            is2FAEnabled: !1,
            isDisabling2FA: !1,
            is2FATab: !1,
            tabOverflow: !0,
            isOnlyNotifiedOwner: !0,
            is2FAEnforced: !1,
            account_management_notification: !1,
            weekly_summary_notification: !1,
            accountManagementFocused: !1,
            weeklySummaryFocused: !1,
          };
        },
        computed: Ze({}, Object(_["c"])("team", ["is_edit_token_valid"]), {
          showForceDisable: function () {
            return (
              console.log(this.teamMember),
              null !== this.teamMember &&
                !this.teamMember.is_acting_user &&
                "owner" === this.teamMember.acting_role.svalue &&
                ("enabled" === this.teamMember.totp_secret_key ||
                  "enabled" === this.teamMember.sms_auth_number)
            );
          },
          showIfActive: function () {
            return null !== this.teamMember && this.teamMember.is_acting_user;
          },
          editingRole: function () {
            return null !== this.teamMember ? this.teamMember.role.svalue : "";
          },
          getOpenClass: function () {
            return "overview" === this.selectedTab
              ? "overview-open"
              : "password" === this.selectedTab
                ? "password-open"
                : "twofactorauth" === this.selectedTab
                  ? this.showForceDisable
                    ? "twofactorauth-open-with-disable"
                    : "twofactorauth-open"
                  : "";
          },
        }),
        watch: {
          is_edit_token_valid: function (e) {
            var t = this;
            e &&
              this.$nextTick(function () {
                t.adjustTabContentHeight();
              });
          },
        },
        created: function () {
          var e;
          (this.mixinEventListener_register(
            ((e = {}),
            Object(m["a"])(
              e,
              $.UPDATE_TEAM_MEMBER_SUCCEEDED,
              this.onUpdateTeamMemberSucceeded,
            ),
            Object(m["a"])(
              e,
              $.UPDATE_TEAM_MEMBER_FAILED,
              this.onUpdateTeamMemberFailed,
            ),
            Object(m["a"])(e, $.ROLE_CHANGED, this.onRoleChanged),
            Object(m["a"])(
              e,
              $.DISABLE_2FA_SUCCEEDED,
              this.onDisable2FASucceeded,
            ),
            Object(m["a"])(e, $.DISABLE_2FA_FAILED, this.onDisable2FAFailed),
            e),
          ),
            this.mixinEventListener_on());
        },
        mounted: function () {
          (this.mixinTriggerable_centerSelf(), this.adjustTabContentHeight());
        },
        destroyed: function () {
          this.mixinEventListener_off();
        },
        methods: {
          onDisable2FASucceeded: function () {
            ((this.isWorking = !1),
              (this.sms2FA = !1),
              (this.app2FA = !1),
              (this.is2FAEnabled = !1),
              (this.isDisabling2FA = !1),
              this.onCancelClicked());
          },
          onDisable2FAFailed: function () {
            this.isDisabling2FA = !1;
          },
          forceDisable2FA: function () {
            ((this.isDisabling2FA = !0),
              this.$eventBus.$emit($.DISABLE_2FA_REQUEST, this.teamMember));
          },
          onRoleChanged: function (e) {
            ((this.currentRole = e.id),
              (this.account_management_notification =
                "owner" === e.id || "admin" === e.id));
          },
          onCancelClicked: function () {
            this.$eventBus.$emit("closeEditMember");
          },
          adjustTabContentHeight: function () {
            this.$nextTick(function () {
              var e = j()(".tab-pane.is-active").outerHeight(!0);
              j()(".tab-content").height(e);
            });
          },
          changeTab: function (e) {
            var t = this;
            ((this.selectedTab = e),
              "overview" === e && this.showRole
                ? (this.$nextTick(function () {
                    t.$refs.role_dropdown.setRole(t.currentRole);
                  }),
                  setTimeout(function () {
                    return (t.tabOverflow = !1);
                  }, 500))
                : (this.tabOverflow = !0),
              (this.is2FATab = "twofactorauth" === e),
              this.adjustTabContentHeight());
          },
          setTeamMember: function (e) {
            var t = this;
            ((this.app2FA = !1),
              (this.sms2FA = !1),
              (this.is2FAEnabled = !1),
              (this.isDisabling2FA = !1),
              (this.selectedTab = "overview"),
              (this.new_password = ""),
              (this.con_password = ""),
              setTimeout(function () {
                return (t.tabOverflow = !1);
              }, 500),
              (this.teamMember = e),
              (this.hash_id = e.hash_id),
              (this.username = e.username),
              (this.fullname = e.fullname),
              (this.account_management_notification =
                e.account_management_notification),
              (this.weekly_summary_notification =
                e.weekly_summary_notification),
              void 0 !== e.sms_auth_number && null !== e.sms_auth_number
                ? (this.sms2FA = !0)
                : void 0 !== e.totp_secret_key &&
                  null !== e.totp_secret_key &&
                  (this.app2FA = !0),
              (this.is2FAEnabled = this.sms2FA || this.app2FA),
              (this.showRole = "report" !== this.$store.state.team.acting_role),
              (this.showRole =
                ("owner" !== e.role.svalue ||
                  1 !== this.$store.getters[y.getters.GET_OWNER_COUNT]) &&
                this.showRole),
              (this.is2FAEnforced =
                this.$store.getters[y.getters.GET_IS_2FA_ENFORCED]),
              (this.currentRole = e.role.svalue),
              this.showRole &&
                this.$nextTick(function () {
                  t.$refs.role_dropdown.setRole(t.currentRole);
                }),
              (this.notification_level = e.notification_level),
              (this.nLevel1 = 0 !== (1 & this.notification_level)),
              (this.nLevel2 = 0 !== (2 & this.notification_level)),
              (this.nLevel4 = 0 !== (4 & this.notification_level)),
              (this.nLevel8 = 0 !== (8 & this.notification_level)),
              this.adjustTabContentHeight());
          },
          toggleChecked: function (e) {
            var t = e.currentTarget,
              i = t.querySelector("input");
            (t.classList.toggle("checked"), (i.checked = !i.checked));
          },
          enableNotificationLevel: function (e) {
            (1 === e
              ? (this.nLevel1 = !this.nLevel1)
              : 2 === e
                ? (this.nLevel2 = !this.nLevel2)
                : 4 === e
                  ? (this.nLevel4 = !this.nLevel4)
                  : 8 === e && (this.nLevel8 = !this.nLevel8),
              (this.notification_level = 0),
              this.nLevel1 && (this.notification_level |= 1),
              this.nLevel2 && (this.notification_level |= 2),
              this.nLevel4 && (this.notification_level |= 4),
              this.nLevel8 && (this.notification_level |= 8),
              0 !== (1 & this.notification_level)
                ? (this.notification_level = 15)
                : (this.notification_level = 0));
          },
          onConfirmClicked: function () {
            ("overview" === this.selectedTab &&
              ((this.isWorking = !0),
              this.$eventBus.$emit(
                $.UPDATE_TEAM_MEMBER_REQUEST,
                this.teamMember,
                this.username,
                this.fullname,
                this.currentRole,
                this.notification_level,
                "",
                "",
                this.account_management_notification,
                this.weekly_summary_notification,
              )),
              "password" === this.selectedTab &&
                ((this.isWorking = !0),
                this.$eventBus.$emit(
                  $.UPDATE_TEAM_MEMBER_REQUEST,
                  this.teamMember,
                  this.teamMember.username,
                  this.teamMember.fullname,
                  this.teamMember.role.svalue,
                  this.teamMember.notification_level,
                  this.new_password,
                  this.con_password,
                  this.teamMember.account_management_notification,
                  this.teamMember.weekly_summary_notification,
                )));
          },
          onUpdateTeamMemberSucceeded: function () {
            this.isWorking = !1;
          },
          onUpdateTeamMemberFailed: function () {
            this.isWorking = !1;
          },
          goto2FAPage: function () {
            window.location = "/account/2fa";
          },
        },
      },
      tt = et,
      it = (i("109e"), Object(ae["a"])(tt, We, He, !1, null, "0a9904bb", null)),
      nt = it.exports,
      st = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "div",
          {
            staticClass: "modal-small mixinTriggerable_layer",
            class: { "is-visible": e.mixinTriggerable_isOpen },
          },
          [
            i("h4", { domProps: { innerHTML: e._s(e.title) } }),
            i("p", { domProps: { innerHTML: e._s(e.message) } }),
            i(
              "div",
              {
                staticClass: "modal-body-footer",
                class: [
                  null !== e.confirmCallback && null !== e.cancelCallback
                    ? "two"
                    : "one",
                ],
              },
              [
                i(
                  "button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: null !== e.confirmCallback,
                        expression: "confirmCallback !== null",
                      },
                    ],
                    staticClass: "btn blue",
                    class: [e.isWorking ? "disabled spinner-button" : ""],
                    on: {
                      click: function (t) {
                        return (t.preventDefault(), e.onConfirmClicked(t));
                      },
                    },
                  },
                  [e._v(e._s(e.confirmLabel))],
                ),
                i(
                  "button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: null !== e.cancelCallback,
                        expression: "cancelCallback !== null",
                      },
                    ],
                    staticClass: "btn grey",
                    class: [e.isWorking ? "disabled" : ""],
                    on: {
                      click: function (t) {
                        return (t.preventDefault(), e.onCancelClicked(t));
                      },
                    },
                  },
                  [e._v(e._s(e.cancelLabel))],
                ),
              ],
            ),
          ],
        );
      },
      at = [],
      rt = {
        name: "simple-confirm-modal",
        mixins: [ie, Q],
        data: function () {
          return {
            isWorking: !1,
            title: "",
            message: "",
            confirmCallback: null,
            cancelCallback: null,
            confirmLabel: "Confirm",
            cancelLabel: "Cancel",
          };
        },
        created: function () {
          var e;
          (this.mixinEventListener_register(
            ((e = {}),
            Object(m["a"])(e, te.TRIGGERABLE_OPENED, this.onTriggerableOpened),
            Object(m["a"])(e, te.TRIGGERABLE_CLOSED, this.onTriggerableClosed),
            e),
          ),
            this.mixinEventListener_on());
        },
        mounted: function () {
          this.mixinTriggerable_centerSelf();
        },
        destroyed: function () {
          this.mixinEventListener_off();
        },
        methods: {
          close: function () {
            this.mixinTriggerable_forceClose();
          },
          show: function (e, t, i, n, s, a) {
            ((this.isWorking = !1),
              (this.title = e),
              (this.message = t),
              void 0 === i && (i = null),
              void 0 === n && (n = null),
              void 0 !== s && (this.confirmLabel = s),
              void 0 !== a && (this.cancelLabel = a),
              (this.confirmCallback = i),
              (this.cancelCallback = n),
              this.mixinTriggerable_forceOpen());
          },
          onConfirmClicked: function () {
            (this.mixinTriggerable_setModal(!0),
              (this.isWorking = !0),
              null !== this.confirmCallback && this.confirmCallback());
          },
          onCancelClicked: function () {
            this.isWorking ||
              (null !== this.cancelCallback && this.cancelCallback());
          },
          onTriggerableOpened: function (e) {
            this.mixinTriggerable_isSelf(e) &&
              (j()(".modal-backdrop").remove(),
              j()('<div class="modal-backdrop fade in" />').appendTo(
                document.body,
              ));
          },
          onTriggerableClosed: function (e) {
            this.mixinTriggerable_isSelf(e) &&
              ((this.isWorking = !1), j()(".modal-backdrop").remove());
          },
        },
      },
      ot = rt,
      ct = (i("2f87"), Object(ae["a"])(ot, st, at, !1, null, "85edfbd2", null)),
      lt = ct.exports,
      mt = function () {
        var e = this,
          t = e.$createElement;
        e._self._c;
        return e._m(0);
      },
      _t = [
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("div", { staticClass: "loading" }, [
            i("div", { staticClass: "load-more load-centered" }, [
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
            ]),
            i("div", { staticClass: "loading-backdrop" }),
          ]);
        },
      ],
      ut = { name: "AjaxLoadingSpinner" },
      dt = ut,
      Et = (i("6ae1"), Object(ae["a"])(dt, mt, _t, !1, null, "4e19a2b4", null)),
      ft = Et.exports;
    function pt(e, t) {
      var i = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          i.push.apply(i, n));
      }
      return i;
    }
    function ht(e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? pt(i, !0).forEach(function (t) {
              Object(m["a"])(e, t, i[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : pt(i).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t),
                );
              });
      }
      return e;
    }
    var bt = {
        name: "app",
        mixins: [z, Q],
        components: {
          AddTeamMember: de,
          MemberList: De,
          UpgradeNotice: Be,
          UpdateOrganisation: Ke,
          EditTeamMember: nt,
          SimpleConfirmModal: lt,
          AjaxLoadingSpinner: ft,
        },
        computed: ht(
          {},
          Object(_["c"])({
            teamMembers: function (e) {
              return e.team.team_members;
            },
            actingRole: function (e) {
              return e.team.acting_role;
            },
            needsUpgrade: function (e) {
              return e.team.needs_upgrade;
            },
            showRemaining: function (e) {
              return e.team.show_remaining;
            },
            disableAdd: function (e) {
              return e.team.disable_add;
            },
          }),
          {
            hideInviteButton: function () {
              return (
                "report" === this.actingRole ||
                !!this.needsUpgrade ||
                !!(this.showRemaining && this.teamMembers.length > 2)
              );
            },
          },
        ),
        data: function () {
          return {
            edit_token_callback: null,
            showLoadingSpinner: !1,
            addNewMember: !1,
            editMember: !1,
          };
        },
        created: function () {
          var e;
          (this.mixinEventListener_register(
            ((e = {}),
            Object(m["a"])(
              e,
              $.MTBOX_EDIT_CLICKED,
              this.onEditTeamMemberClicked,
            ),
            Object(m["a"])(
              e,
              $.MTBOX_ENABLE_2FA_CLICKED,
              this.onEnable2FAClicked,
            ),
            Object(m["a"])(
              e,
              $.MTBOX_REMOVE_CLICKED,
              this.onRemoveTeamMemberClicked,
            ),
            Object(m["a"])(
              e,
              $.MTBOX_REINVITE_CLICKED,
              this.onReinviteTeamMemberClicked,
            ),
            Object(m["a"])(
              e,
              $.INVITE_TEAM_MEMBER_REQUEST,
              this.onInviteTeamMemberRequest,
            ),
            Object(m["a"])(
              e,
              $.UPDATE_ORGANISATION_REQUEST,
              this.onUpdateOrganisationRequest,
            ),
            Object(m["a"])(e, $.DISABLE_2FA_REQUEST, this.onDisable2FARequest),
            Object(m["a"])(
              e,
              $.UPDATE_TEAM_MEMBER_REQUEST,
              this.onUpdateTeamMemberRequest,
            ),
            e),
          ),
            this.mixinEventListener_on(),
            this.$eventBus.$on("closeEditMember", this.cancelEditMember));
        },
        beforeDestroy: function () {
          (this.$eventBus.$off("closeEditMember", this.cancelEditMember),
            this.$eventBus.$off("closeAddNewMember", this.cancelInviteMember));
        },
        destroyed: function () {
          this.mixinEventListener_off();
        },
        mounted: function () {
          var e = this;
          ((this.showLoadingSpinner = !0),
            this.$store
              .dispatch(y.actions.FETCH_TEAM_MEMBERS)
              .catch(function () {
                e.showLoadingSpinner = !1;
              })
              .then(function () {
                e.showLoadingSpinner = !1;
              }),
            this.$eventBus.$on("closeAddNewMember", this.cancelInviteMember));
        },
        methods: {
          onInviteTeamMemberRequest: function (e, t, i, n) {
            var s = this;
            this.$store
              .dispatch(y.actions.INVITE_TEAM_MEMBER, {
                username: e,
                role: t,
                account_management_notification: i,
                weekly_summary_notification: n,
              })
              .then(function (e) {
                (s.mixinAlerts_success(s.escapeHtml(e.message)),
                  s.$eventBus.$emit(
                    $.INVITE_TEAM_MEMBER_SUCCEEDED,
                    e.results.team_member,
                  ));
              })
              .catch(function (e) {
                (s.mixinAlerts_error(e),
                  s.$eventBus.$emit($.INVITE_TEAM_MEMBER_FAILED));
              });
          },
          onReinviteTeamMemberClicked: function (e) {
            var t = this;
            this.$refs.simple_confirm_modal.show(
              "Confirm send reinvite email?",
              "Are you sure you want to resend the invite email to <strong>" +
                this.escapeHtml(e.username) +
                "</strong>?<br />",
              function () {
                t.$store
                  .dispatch(y.actions.REINVITE_TEAM_MEMBER, e.username)
                  .then(function (e) {
                    (t.mixinAlerts_success(t.escapeHtml(e.message)),
                      t.$refs.simple_confirm_modal.close(),
                      t.$eventBus.$emit($.REINVITE_TEAM_MEMBER_SUCCEEDED));
                  })
                  .catch(function (e) {
                    (t.$refs.simple_confirm_modal.close(),
                      t.mixinAlerts_error(e),
                      t.$eventBus.$emit($.REINVITE_TEAM_MEMBER_FAILED));
                  });
              },
              function () {
                t.$refs.simple_confirm_modal.close();
              },
            );
          },
          onUpdateOrganisationRequest: function (e) {
            var t = this;
            this.$store
              .dispatch(y.actions.UPDATE_ORGANISATION_NAME, e)
              .then(function (e) {
                (t.mixinAlerts_success(t.escapeHtml(e.message)),
                  t.$eventBus.$emit(
                    $.UPDATE_ORGANISATION_SUCCEEDED,
                    e.results.organisation_name,
                  ));
              })
              .catch(function (e) {
                (t.mixinAlerts_error(e),
                  t.$eventBus.$emit($.UPDATE_ORGANISATION_FAILED));
              });
          },
          onEditTeamMemberClicked: function (e) {
            (console.log(this.$refs.edit_team_member),
              this.$refs.edit_team_member
                ? (this.$refs.edit_team_member.setTeamMember(e),
                  (this.editMember = !0))
                : console.error("edit_team_member ref not available"));
          },
          cancelEditMember: function () {
            this.editMember = !1;
          },
          onDisable2FARequest: function (e) {
            var t = this;
            this.$store
              .dispatch(y.actions.DISABLE_2FA, { team_member: e })
              .then(function (e) {
                (t.mixinAlerts_success(e.message),
                  t.$eventBus.$emit($.DISABLE_2FA_SUCCEEDED));
              })
              .catch(function (e) {
                (t.mixinAlerts_error(e),
                  t.$eventBus.$emit($.DISABLE_2FA_FAILED));
              });
          },
          onUpdateTeamMemberRequest: function (e, t, i, n, s, a, r, o, c) {
            var l = this;
            this.$store
              .dispatch(y.actions.UPDATE_TEAM_MEMBER, {
                old_username: e.username,
                new_username: t,
                team_member: e,
                fullname: i,
                role: n,
                notification_level: s,
                new_password: a,
                con_password: r,
                account_management_notification: o,
                weekly_summary_notification: c,
              })
              .then(function (e) {
                (l.mixinAlerts_success(l.escapeHtml(e.message)),
                  l.$eventBus.$emit($.UPDATE_TEAM_MEMBER_SUCCEEDED),
                  e.results.changed_email &&
                    l.$refs.simple_confirm_modal.show(
                      "Information",
                      "A verification email was sent to <br /><br /><strong>" +
                        l.escapeHtml(t) +
                        "</strong> <br /><br />Please confirm your new email address by clicking the link in this email.",
                      function () {
                        l.$refs.simple_confirm_modal.close();
                      },
                      null,
                      "OK",
                    ));
              })
              .catch(function (e) {
                (l.mixinAlerts_error(e),
                  l.$eventBus.$emit($.UPDATE_TEAM_MEMBER_FAILED));
              });
          },
          onRemoveTeamMemberClicked: function (e) {
            var t = this;
            this.$refs.simple_confirm_modal.show(
              "Are you sure?",
              "Do you really want to remove<br /><strong>" +
                this.escapeHtml(e.username) +
                "</strong><br /> from your account?",
              function () {
                t.$store
                  .dispatch(y.actions.REMOVE_TEAM_MEMBER, e)
                  .then(function (e) {
                    (t.mixinAlerts_success(t.escapeHtml(e.message)),
                      t.$refs.simple_confirm_modal.close(),
                      t.$eventBus.$emit($.REMOVE_TEAM_MEMBER_SUCCEEDED),
                      null !== e.results.redirect &&
                        (t.$cookies.remove("session"),
                        t.$cookies.remove("login_id"),
                        (window.location = e.results.redirect)));
                  })
                  .catch(function (e) {
                    (t.mixinAlerts_error(e),
                      t.$refs.simple_confirm_modal.close(),
                      t.$eventBus.$emit($.REMOVE_TEAM_MEMBER_FAILED));
                  });
              },
              function () {
                t.$refs.simple_confirm_modal.close();
              },
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
          inviteMember: function () {
            this.addNewMember = !0;
          },
          cancelInviteMember: function () {
            this.addNewMember = !1;
          },
        },
      },
      vt = bt,
      gt =
        (i("7d77"),
        i("5a51"),
        Object(ae["a"])(vt, c, l, !1, null, "3b864ff9", null)),
      Tt = gt.exports;
    a["a"].use(_["a"]);
    var wt = new _["a"].Store({
        strict: !1,
        getters: {},
        mutations: {},
        actions: {},
        modules: { root: C, team: L },
      }),
      At = wt;
    (a["a"].use(o.a),
      (a["a"].config.productionTip = !1),
      (a["a"].prototype.$eventBus = new a["a"]()),
      At.commit(b.mutations.SET_CSRF_KEY, PAGE_DATA.csrfkey),
      At.commit(b.mutations.SET_END_POINTS, END_POINTS.urls()),
      At.commit(y.mutations.SET_ORGANISATION_NAME, PAGE_DATA.organisation),
      At.commit(y.mutations.SET_IS_2FA_ENFORCED, PAGE_DATA.is_2fa_enforced),
      At.commit(y.mutations.SET_ACTING_ROLE, PAGE_DATA.acting_role),
      At.commit(y.mutations.SET_IS_SUBACCOUNT, PAGE_DATA.is_subaccount),
      S(At),
      new a["a"]({
        store: At,
        render: function (e) {
          return e(Tt);
        },
      }).$mount("#app"));
  },
  "5a51": function (e, t, i) {
    "use strict";
    var n = i("873b"),
      s = i.n(n);
    s.a;
  },
  "5d08": function (e, t, i) {},
  6056: function (e, t, i) {
    "use strict";
    var n = i("a875"),
      s = i.n(n);
    s.a;
  },
  "6ae1": function (e, t, i) {
    "use strict";
    var n = i("758f"),
      s = i.n(n);
    s.a;
  },
  "758f": function (e, t, i) {},
  "75f9": function (e, t, i) {},
  "7d77": function (e, t, i) {
    "use strict";
    var n = i("a325"),
      s = i.n(n);
    s.a;
  },
  "873b": function (e, t, i) {},
  a325: function (e, t, i) {},
  a37a: function (e, t, i) {
    "use strict";
    var n = i("5400"),
      s = i.n(n);
    s.a;
  },
  a875: function (e, t, i) {},
  d837: function (e, t, i) {},
  e3a0: function (e, t, i) {},
  e429: function (e, t, i) {},
  f244: function (e, t, i) {
    "use strict";
    var n = i("75f9"),
      s = i.n(n);
    s.a;
  },
});
//# sourceMappingURL=app.9371a13d.js.map
