function Controller() {
    function ArtistLog() {
        Alloy.Globals.Artist = $.Artist.value;
    }
    function ModelTest() {
        var Recent = Alloy.createModel("recent", {
            name: $.Artist.value
        }), check = Recent.get("name");
        Recent.save();
        Recent.fetch();
        var RecentFull = [], All = Recent.get("columns");
        for (var x in Recent.get("columns")) RecentFull.push(x.name);
        for (var r in RecentFull) Ti.API.log(r);
        debugger;
        Ti.API.log(check);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.Win = A$(Ti.UI.createWindow({
        title: "Search",
        backgroundColor: "#fff",
        id: "Win"
    }), "Window", null);
    $.addTopLevelView($.__views.Win);
    $.__views.__alloyId7 = A$(Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Search here",
        top: "120dp",
        id: "__alloyId7"
    }), "Label", $.__views.Win);
    $.__views.Win.add($.__views.__alloyId7);
    $.__views.Artist = A$(Ti.UI.createTextField({
        hintText: "Topic",
        id: "Artist"
    }), "TextField", $.__views.Win);
    $.__views.Win.add($.__views.Artist);
    ArtistLog ? $.__views.Artist.on("change", ArtistLog) : __defers["$.__views.Artist!change!ArtistLog"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.Artist!change!ArtistLog"] && $.__views.Artist.on("change", ArtistLog);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;