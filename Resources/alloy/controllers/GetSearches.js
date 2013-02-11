function Controller() {
    function GetSearches() {
        var Searched = Alloy.createModel("Searched", {
            Query: "Searching",
            Music: !1
        }), Searches = [];
        for (var x = 0; x < 20; x++) {
            Searches[x] = Alloy.createModel("Searched", {
                Query: "Search number :" + x
            });
            Searches[x].save();
        }
        var GotQuery = Searched.get("Query"), GotMusic = Searched.get("Music");
        debugger;
        for (var x = 0; x < 20; x++) {
            var see = Searches[x].get("Query");
            Ti.API.log(see);
        }
        alert(GotQuery + GotMusic);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    module.exports = GetSearches;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;