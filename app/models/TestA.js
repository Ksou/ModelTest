exports.definition = {
	
	config: {
		"columns": {
			"A":"string"
		},
		"adapter": {
			"type": "A:string",
			"collection_name": "TestA"
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

