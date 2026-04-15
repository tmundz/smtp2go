//Do URL stuff here.
var END_POINTS = (function () {
  return {
    fronts: function () {
      var fronts = {};
      fronts["Login"] = "/login/";
      fronts["Dashboard"] = "/dashboard/main/";
      fronts["in"] = "/dashboard/main/";
      return fronts;
    },
    urls: function () {
      var urls = {};
      urls["Login"] = "/api/login/";
      return urls;
    },
  };
})();
