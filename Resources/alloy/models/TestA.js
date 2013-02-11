exports.definition = {
    config: {
        columns: {
            A: "string"
        },
        adapter: {
            type: "A:string",
            collection_name: "TestA"
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

model = Alloy.M("TestA", exports.definition, []);

collection = Alloy.C("TestA", exports.definition, model);

exports.Model = model;

exports.Collection = collection;