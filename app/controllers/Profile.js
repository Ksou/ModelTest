// changed to About
function WikiChange(){
	SearchLog() ; 
var FixedArist = Alloy.Globals.Artist.replace(" ","_") ; 	
debugger ; 
$.Wiki.setUrl('http://en.m.wikipedia.org/wiki/' + FixedArist) ;	
$.Win.title = 'Wiki for : ' + Alloy.Globals.Artist ; 	
	// load the wikipeda page for that artist( assuming it exist )
	
var url = $.Wiki.url ;
// check to see if we got a site 
var xhr = Ti.Network.createHTTPClient({
onload : function(e){
Ti.API.log(this.responseText) ; 	

//Figure(this.responseText) ; 
}	
	
});
//xhr.open("GET",url) ;
//xhr.send() ; 

}
function Figure(webText){
	var result = webText.indexOf("Wikipedia does not have an article with this exact name.") ;
	if(result =! -1){
	alert( ' No Wiki') ; 	
		
	};
Ti.API.log(result) ; 
// search for did not and if that exist assume we couldn't get a wiki page  	
	
}

function SearchLog (){
/*
for(var x = 0 ; x <  Alloy.Collections.Searched.models.length ; x++){
 Alloy.Collections.Searched.destroy( Alloy.Collections.Searched.models[x]) ; 	
}
 */
 Alloy.Collections.Searched.reset(); 
	
	var SearchControl = Alloy.Collections.Searched ;
//	SearchControl.reset() ; 


var  Search = Alloy.createModel('Searched',{Query : (Alloy.Globals.Artist)})	;
SearchControl.add(Search);
Search.save() ;

SearchControl.fetch() ; 

var ASAP =  SearchControl.models[SearchControl.length - 1].get('Query') ;
debugger ; 
Ti.API.log( ASAP ) ;	
	
}
