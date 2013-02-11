function Controller() {
    function UpdateForce() {
        var locData = Alloy.Collections.Searched.models, Fixed = MakeUsable(locData);
        $.tableMain.setData(Fixed);
        $.tableMain.addEventListener("click", function(e) {
            var tempText = e.source.title;
            Alloy.Globals.Artist = tempText;
            if (alertGo) {
                alert("Searching for " + tempText);
                alertGo = !1;
            }
        });
        FixBool();
    }
    function FixBool() {
        alertGo = !0;
    }
    function MakeUsable(data) {
        var dataFixed = [];
        debugger;
        for (var x in data) {
            var ob = {
                title: data[x].attributes.Query + data[x].attributes.Time
            };
            dataFixed.push(ob);
        }
        debugger;
        return dataFixed;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.LastSearches = A$(Ti.UI.createWindow({
        title: "Searches ",
        backgroundColor: "#fff",
        id: "LastSearches"
    }), "Window", null);
    $.addTopLevelView($.__views.LastSearches);
    UpdateForce ? $.__views.LastSearches.on("focus", UpdateForce) : __defers["$.__views.LastSearches!focus!UpdateForce"] = !0;
    $.__views.tableMain = A$(Ti.UI.createTableView({
        id: "tableMain"
    }), "TableView", $.__views.LastSearches);
    $.__views.LastSearches.add($.__views.tableMain);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var alertGo = !0;
    __defers["$.__views.LastSearches!focus!UpdateForce"] && $.__views.LastSearches.on("focus", UpdateForce);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;