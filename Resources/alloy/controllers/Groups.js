function Controller() {
    function TwitterGet() {
        var screen_name = "DJKRUSHofficial";
        $.Win.title = "Tweets about :" + Alloy.Globals.Artist;
        var searchAble = Alloy.Globals.Artist.replace(" ", "%20"), TweetUrl = "http://search.twitter.com/search.json?q=" + searchAble + "&rpp=5&include_entities=true&result_type=mixed", xhr = Ti.Network.createHTTPClient();
        xhr.open("GET", TweetUrl);
        xhr.send();
        debugger;
        xhr.onload = function() {
            var TweetFull = JSON.parse(this.responseText), Tweets = TweetFull.results;
            debugger;
            try {
                var TweetsView = Ti.UI.createTableView({});
                debugger;
                var DataUse = TweetFix(Tweets);
                $.Twitter.visible = !1;
                TweetsView.setData(DataUse);
                $.Win.add(TweetsView);
            } catch (err) {
                debugger;
                Ti.API.log("couldnt get tweets , reverting to webview " + err);
            }
        };
    }
    function TweetFix(data) {
        for (x in data) data[x].title = data[x].text;
        return data;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.Win = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        barColor: "Gray",
        id: "Win"
    }), "Window", null);
    $.addTopLevelView($.__views.Win);
    TwitterGet ? $.__views.Win.on("focus", TwitterGet) : __defers["$.__views.Win!focus!TwitterGet"] = !0;
    $.__views.Twitter = A$(Ti.UI.createWebView({
        url: "https://twitter.com/DJKRUSHofficial",
        id: "Twitter",
        visible: "false"
    }), "WebView", $.__views.Win);
    $.__views.Win.add($.__views.Twitter);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.Win!focus!TwitterGet"] && $.__views.Win.on("focus", TwitterGet);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;