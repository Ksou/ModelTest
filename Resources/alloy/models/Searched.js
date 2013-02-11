exports.definition = {
    config: {
        columns: {
            Query: "string",
            Music: "boolean",
            Art: "boolean",
            WikiFound: "boolean"
        },
        defaults: {
            Query: "Q",
            Music: !1,
            Art: !1,
            WikiFound: !1
        },
        adapter: {
            type: "sql",
            collection_name: "Searched"
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

model = Alloy.M("Searched", exports.definition, []);

collection = Alloy.C("Searched", exports.definition, model);

exports.Model = model;

exports.Collection = collection;