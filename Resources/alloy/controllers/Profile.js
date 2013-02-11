function Controller() {
    function WikiChange() {
        var ResetMe = Alloy.Collections.Searched;
        Alloy.Globals.Artist == "Reset" && ResetMe._reset();
        debugger;
        SearchLog();
        var FixedArist = Alloy.Globals.Artist.replace(" ", "_");
        debugger;
        $.Wiki.setUrl("http://en.m.wikipedia.org/wiki/" + FixedArist);
        $.Win.title = "Wiki for : " + Alloy.Globals.Artist;
        var url = $.Wiki.url, xhr = Ti.Network.createHTTPClient({
            onload: function(e) {
                Ti.API.log(this.responseText);
            }
        });
    }
    function Figure(webText) {
        var result = webText.indexOf("Wikipedia does not have an article with this exact name.");
        (result = !1) && alert(" No Wiki");
        Ti.API.log(result);
    }
    function SearchLog() {
        var SearchControl = Alloy.Collections.Searched, Search = Alloy.createModel("Searched", {
            Query: Alloy.Globals.Artist
        });
        SearchControl.add(Search);
        Search.save();
        Ti.API.log(" START DATA ---------------------------------------");
        for (var x in SearchControl.models) {
            var show = SearchControl.models[x].get("Query");
            Ti.API.log(show + "is :" + x);
        }
        Ti.API.log("END DATA ------------------------------------------");
        var ASAP = SearchControl.models[SearchControl.length - 1].get("Query");
        debugger;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.Win = A$(Ti.UI.createWindow({
        title: "About",
        backgroundColor: "#fff",
        barColor: "blue",
        id: "Win"
    }), "Window", null);
    $.addTopLevelView($.__views.Win);
    WikiChange ? $.__views.Win.on("focus", WikiChange) : __defers["$.__views.Win!focus!WikiChange"] = !0;
    $.__views.Wiki = A$(Ti.UI.createWebView({
        id: "Wiki"
    }), "WebView", $.__views.Win);
    $.__views.Win.add($.__views.Wiki);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.Win!focus!WikiChange"] && $.__views.Win.on("focus", WikiChange);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;