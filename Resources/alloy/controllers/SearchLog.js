function Controller() {
    function SearchLog() {
        var SearchControl = Alloy.Collections.Searched, Search = Alloy.createModel("Searched", {
            Query: Alloy.Globals.Artist
        });
        SearchControl.add(Search);
        Search.save();
        SearchControl.fetch();
        var ASAP = SearchControl.models[0].get("Query");
        Ti.API.log(ASAP);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    module.exports = SearchLog;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;