exports.definition = {
    config: {
        adapter: {
            type: "localStorage",
            collection_name: "Names",
            name: "string"
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

model = Alloy.M("names", exports.definition, []);

collection = Alloy.C("names", exports.definition, model);

exports.Model = model;

exports.Collection = collection;