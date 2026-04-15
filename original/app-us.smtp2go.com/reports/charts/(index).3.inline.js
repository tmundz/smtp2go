var END_POINTS = (function () {
  var api = null;
  var frontend = null;
  var url_end_points = {};
  var fronts_end_points = {};
  return {
    urls: function () {
      url_end_points["Account Summary"] = "/api/dashboard/main/";
      url_end_points["Edit Account DPA"] = "/api/dashboard/edit_account/dpa";
      url_end_points["Confirm Plan"] = "";
      url_end_points["Complate Paypal"] = "";
      url_end_points["Cancel Paypal"] = "";
      url_end_points["Latest Invoice Redirect"] = "";
      url_end_points["Billing History"] = "/api/dashboard/get_billing_history/";
      url_end_points["Billing Details New"] = "/api/dashboard/billing_details/";
      url_end_points["Invoice Details"] = "/api/dasboard/invoice/";
      url_end_points["Summary"] = "/api/reports/summary/";
      url_end_points["Activity"] = "/api/reports/activity/";
      url_end_points["Charts"] = "/api/reports/charts/";
      url_end_points["Archives"] = "/api/reports/archive/";
      url_end_points["Suppressions"] = "/api/reports/suppression/";
      url_end_points["Data Exports"] = "/api/reports/data-exports/";
      url_end_points["SMS Messaging"] = "/api/sms";
      url_end_points["Reports Delivery"] = "/api/reports/delivery/";
      url_end_points["Tool Applications"] = "/api/available_applications/";
      url_end_points["SMTP Users"] = "/api/settings/smtp_users/";
      url_end_points["IP Authentication"] = "";
      url_end_points["API Keys"] = "/api/settings/api_users/";
      url_end_points["Verified Senders"] = "/api/settings/verified_senders/";
      url_end_points["SMS Settings"] = "/api/sms";
      url_end_points["Display Settings"] = "/api/settings/data_format/";
      url_end_points["Sending Options"] = "/api/settings/sendingoptions/";
      url_end_points["Dedicated IPs"] = "/api/settings/dedicatedips/";
      url_end_points["Webhooks"] = "/api/settings/webhooks/";
      url_end_points["Templates"] = "/api/settings/templates/";
      url_end_points["Subaccounts"] = "/api/settings/subaccounts/";
      url_end_points["IP Allowlist"] = "/api/settings/ipallowlist/";
      url_end_points["Authentication"] = "/api/settings/authentication/list/";
      url_end_points["WebhookProcs"] = "/api/settings/webhooks/processing/";
      url_end_points["Unsubscribe Options"] = "/api/settings/unsubscribe/";
      url_end_points["Footer"] = "/api/settings/footer/";
      url_end_points["Archive Settings"] = "/api/settings/archives/";
      url_end_points["bounce_suppress"] =
        "/api/settings/settings_bounce_suppress/";
      url_end_points["Edit Team"] = "/api/settings/team/";
      url_end_points["Two-Factor Auth"] = "/api/settings/two_factor_auth/";
      url_end_points["Billing Details"] = "/api/dashboard/update_billing/";
      url_end_points["Change Plan"] = "/api/dashboard/changeplan/";
      url_end_points["Login"] = "/api/login/";
      url_end_points["Two-factor Authentication"] = "/login/2fa/";
      url_end_points["VLD Authentication"] = "/login-vld";
      url_end_points["Logout"] = "/logout/";
      url_end_points["End Points"] = "/end-points/";
      url_end_points["Dashboard"] = "/api/dashboard/main/";
      url_end_points["Onboarding"] = "/onboarding/";
      url_end_points["Close"] = "/api/account/close/";
      url_end_points["Onboarding - Change Plan"] = "/onboarding/changeplan/";
      url_end_points["Onboarding - Confirm Plan"] = "/onboarding/confirmplan/";

      if (api != null) return api;
      return url_end_points;
    },
    fronts: function () {
      fronts_end_points["Account Summary"] = "/dashboard/main/";
      fronts_end_points["Edit Account DPA"] = "/dashboard/editaccount/dpa";
      fronts_end_points["Confirm Plan"] = "/account/confirmplan/";
      fronts_end_points["Complate Paypal"] = "/dashboard/complete_paypal/";
      fronts_end_points["Cancel Paypal"] = "/dashboard/cancel_paypal/";
      fronts_end_points["Latest Invoice Redirect"] =
        "/dashboard/latest-invoice-redirect/";
      fronts_end_points["Billing History"] = "/dashboard/updatebilling/";
      fronts_end_points["Billing Details New"] = "/dashboard/updatebilling/";
      fronts_end_points["Summary"] = "/reports/summary/";
      fronts_end_points["Activity"] = "/reports/activity/";
      fronts_end_points["Charts"] = "/reports/charts/";
      fronts_end_points["Archives"] = "/reports/archive/";
      fronts_end_points["Email Testing"] = "/email-testing/";
      fronts_end_points["Suppressions"] = "/reports/suppressions/";
      fronts_end_points["Data Exports"] = "/reports/data-exports/";
      fronts_end_points["SMS Messaging"] = "/reports/sms/";
      fronts_end_points["SMTP Users"] = "/sending/smtp_users/";
      fronts_end_points["IP Authentication"] = "/sending/ipauth/";
      fronts_end_points["API Keys"] = "/sending/apikeys/";
      fronts_end_points["Verified Senders"] = "/sending/verified_senders/";
      fronts_end_points["SMS Settings"] = "/sending/sms_settings/";
      fronts_end_points["Display Settings"] = "/settings/display/";
      fronts_end_points["Sending Options"] = "/settings/sendingoptions/";
      fronts_end_points["Dedicated IPs"] = "/settings/dedicatedips/";
      fronts_end_points["Webhooks"] = "/settings/webhooks/";
      fronts_end_points["Templates"] = "/settings/templates/";
      fronts_end_points["Subaccounts"] = "/settings/subaccounts/";
      fronts_end_points["Integrations"] = "/settings/integrations/";
      fronts_end_points["IP Allowlist"] = "";
      fronts_end_points["Edit Team"] = "/account/team/";
      fronts_end_points["Two-Factor Auth"] = "/account/2fa/";
      fronts_end_points["Billing Details"] = "/account/updatebilling/";
      fronts_end_points["Change Plan"] = "/account/changeplan/";
      fronts_end_points["Login"] = "/login/";
      fronts_end_points["Two-factor Authentication"] = "/login/2fa/";
      fronts_end_points["VLD Authentication"] = "/login-vld";
      fronts_end_points["Dashboard"] = "/dashboard/";
      fronts_end_points["Support"] = "/support-zdsso/";
      fronts_end_points["Email Test Spam Result"] = "/email-testing/result/";
      fronts_end_points["Zendesk Chat Auth"] = "/zdesk_chat_auth";
      fronts_end_points["Zendesk Chat Pin"] = "/zdesk_chat_pin";
      fronts_end_points["Close"] = "/account/close/";
      fronts_end_points["Onboarding - Change Plan"] = "/onboarding/changeplan/";
      fronts_end_points["Onboarding - Confirm Plan"] =
        "/onboarding/confirmplan/";

      if (frontend != null) return frontend;
      return fronts_end_points;
    },
    load: function () {
      var request = HTML.ajax("GET", "/end-points/");
      request.success(function (data) {
        api = {};
        frontend = {};
        $.each(data["results"], function (nav_title, options) {
          if (options.hasOwnProperty("items")) {
            $.each(options["items"], function (link_title, link_options) {
              if (link_options["frontend"] != null) {
                frontend[link_title] = link_options["frontend"];
              }
              if (link_options["backend"] != null) {
                api[link_title] = link_options["backend"];
              }
            });
          }
        });
      });
    },
  };
})();
