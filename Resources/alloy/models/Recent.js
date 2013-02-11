exports.definition = {
    config: {
        columns: {
            name: "string",
            captured: "integer",
            url: "string",
            capturedLat: "real",
            capturedLong: "real"
        },
        defaults: {
            name: "",
            captured: 0,
            url: "",
            capturedLat: "",
            capturedLong: ""
        },
        adapter: {
            type: "sql",
            collection_name: "recent"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("recent", exports.definition, []);

collection = Alloy.C("recent", exports.definition, model);

exports.Model = model;

exports.Collection = collection;