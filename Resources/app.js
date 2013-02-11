var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.Artist = "DJ Krush";

Alloy.Collections.Searched = Alloy.createCollection("Searched");

Alloy.Globals.OS = Ti.Platform.osname;

Alloy.createController("index");