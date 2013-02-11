exports.definition = {
	// primary file used for study , Ether drop in models folder , or create new model with the name 
	// Searched and then retreve it 
	config: {
		"columns": {
			"Query":"string",
			"Music":"boolean",
			"Art":"boolean",
		//	"Time":"datetime",
			"WikiFound":"boolean" 
			//"SearchedID" :'INTEGER PRIMARY KEY AUTOINCREMENT'
		},
			"defaults": {
			"Query":"Q",
			"Music": false,
			"Art": false,
		//	"Time":"datetime",
			"WikiFound": false
		},
		
		"adapter": {
			// does not work out of the box 
			// defaults to
			"type": "sql",
			"collection_name": "Searched" ,
		//	"idAttribute": "SearchedID" 
			//"idAttrivute"
		}
	},		

	extendModel: function(Model) {		
		_.extend(Model.prototype, {
						
			// extended functions go here

		}); // end extend
		
		return Model;
	},
	
	
	extendCollection: function(Collection) {		
		_.extend(Collection.prototype, {
			
			// extended functions go here			
			
		}); // end extend
		
		return Collection;
	}
		
}

