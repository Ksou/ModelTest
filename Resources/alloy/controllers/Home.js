function Controller() {
    function AddButton() {
        $.Win.setRightNavButton(null);
        $.Win.title = "Videos about :" + Alloy.Globals.Artist;
        var SearchString = Alloy.Globals.Artist;
        debugger;
        YoutubeJson(SearchString, TableCreate);
    }
    function TableCreate(data) {
        for (var x = 0; x < data.data.items.length; x++) data.data.items[x].rightImage = data.data.items[x].thumbnail.sqDefault;
        var TableVideos = Ti.UI.createTableView({
            data: data.data.items
        });
        $.Win.add(TableVideos);
        for (var G = 0; G < data.data.items.length; G++) {
            Ti.API.log(TableVideos.data.length);
            Ti.API.log(TableVideos.data[G].title);
        }
        debugger;
        TableVideos.addEventListener("click", function(e) {
            alert(data.data.items[e.index].title);
            (data.data.items[e.index].accessControl.embed = "allowed") ? VideoPlay(data.data.items[e.index].id) : alert("Cant Play this video ");
        });
    }
    function VideoFix(data) {
        Array.prototype.remove = function(from, to) {
            var rest = this.slice((to || from) + 1 || this.length);
            this.length = from < 0 ? this.length + from : from;
            return this.push.apply(this, rest);
        };
        for (x in data) (x.accessControl.embed = !1) && data.remove(x);
        return data;
    }
    function VideoPlay(ID) {
        var webView = Ti.UI.createWebView({
            url: "http://www.youtube.com/embed/" + ID + "?autoplay=1&autohide=1&cc_load_policy=0&color=white&controls=0&fs=0&iv_load_policy=3&modestbranding=1&rel=0&showinfo=0"
        });
        $.Win.add(webView);
        $.Win.setRightNavButton($.Inbox);
        $.Inbox.addEventListener("click", function() {
            $.Win.remove(webView);
            $.Win.setRightNavButton(null);
        });
        debugger;
    }
    function YoutubeJson(search, callback) {
        var url = "https://gdata.youtube.com/feeds/api/videos?v=2&alt=jsonc&category=Music&q=" + search, xhr = Ti.Network.createHTTPClient();
        xhr.open("GET", url);
        xhr.send();
        xhr.onload = function(e) {
            Ti.API.log(this.responseText);
            debugger;
            var Json = JSON.parse(this.responseText);
            callback(Json);
        };
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.Win = A$(Ti.UI.createWindow({
        title: "Video",
        backgroundColor: "#fff",
        barColor: "blue",
        backgroundImage: "images/appBg.png",
        id: "Win"
    }), "Window", null);
    $.addTopLevelView($.__views.Win);
    AddButton ? $.__views.Win.on("focus", AddButton) : __defers["$.__views.Win!focus!AddButton"] = !0;
    $.__views.Inbox = A$(Ti.UI.createButton({
        title: " Close",
        visible: "false",
        width: 35,
        id: "Inbox"
    }), "Button", $.__views.Win);
    $.__views.Win.add($.__views.Inbox);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.Win!focus!AddButton"] && $.__views.Win.on("focus", AddButton);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;