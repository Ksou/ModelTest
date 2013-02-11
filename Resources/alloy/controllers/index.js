function Controller() {
    function AlertMe() {
        alert($.Ace.title);
    }
    function GetSearches() {
        var SearchControl = Alloy.Collections.Searched;
        SearchControl.fetch();
        if (SearchControl.models[0]) var CheckAgain = SearchControl.models[0].get("Query");
        debugger;
        var Searched = Alloy.createModel("Searched", {
            Query: "Searching",
            Music: !1
        }), Searches = [];
        for (var x = 0; x < 20; x++) {
            Searches[x] = Alloy.createModel("Searched", {
                Query: "Search number :" + x
            });
            SearchControl.add(Searches[x]);
            Searches[x].save();
        }
        var GotQuery = Searched.get("Query"), GotMusic = Searched.get("Music");
        SearchControl.fetch();
        var CheckA = SearchControl.models[0].get("Query");
        Ti.API.log(CheckA);
        debugger;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.index = A$(Ti.UI.createTabGroup({
        id: "index"
    }), "TabGroup", null);
    $.__views.__alloyId1 = Alloy.createController("Home", {
        id: "__alloyId1"
    });
    $.__views.HomeA = A$(Ti.UI.createTab({
        title: "Videos",
        icon: "images/TabBarHome.png",
        window: $.__views.__alloyId1.getViewEx({
            recurse: !0
        }),
        id: "HomeA"
    }), "Tab", null);
    $.__views.index.addTab($.__views.HomeA);
    $.__views.__alloyId2 = Alloy.createController("Groups", {
        id: "__alloyId2"
    });
    $.__views.Groups = A$(Ti.UI.createTab({
        icon: "images/TabBarGroups.png",
        window: $.__views.__alloyId2.getViewEx({
            recurse: !0
        }),
        id: "Groups",
        title: "Twitter"
    }), "Tab", null);
    $.__views.index.addTab($.__views.Groups);
    $.__views.__alloyId3 = Alloy.createController("Profile", {
        id: "__alloyId3"
    });
    $.__views.Profile = A$(Ti.UI.createTab({
        icon: "images/TabBarProfile.png",
        window: $.__views.__alloyId3.getViewEx({
            recurse: !0
        }),
        id: "Profile",
        title: "About"
    }), "Tab", null);
    $.__views.index.addTab($.__views.Profile);
    $.__views.__alloyId4 = Alloy.createController("Settings", {
        id: "__alloyId4"
    });
    $.__views.Settings = A$(Ti.UI.createTab({
        title: "Search",
        icon: "images/TabBarSettings.png",
        window: $.__views.__alloyId4.getViewEx({
            recurse: !0
        }),
        id: "Settings"
    }), "Tab", null);
    $.__views.index.addTab($.__views.Settings);
    $.__views.__alloyId5 = Alloy.createController("LastSearches", {
        id: "__alloyId5"
    });
    $.__views.Searches = A$(Ti.UI.createTab({
        window: $.__views.__alloyId5.getViewEx({
            recurse: !0
        }),
        id: "Searches",
        title: "Searches"
    }), "Tab", null);
    $.__views.index.addTab($.__views.Searches);
    $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;