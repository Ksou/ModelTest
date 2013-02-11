/**
 * @author Sam S.
 */
// this just saves the last few search strings 

function SearchLog (){


	
	var SearchControl = Alloy.Collections.Searched ;
var  Search = Alloy.createModel('Searched',{Query : (Alloy.Globals.Artist)})	;
SearchControl.add(Search);
Search.save() ;

SearchControl.fetch() ; 

var ASAP =  SearchControl.models[0].get('Query') ;

Ti.API.log( ASAP ) ;	
	
}
 module.exports = SearchLog ; 