// changed to About
function WikiChange(){
var resetAll = false ;
var ResetMe =	 Alloy.Collections.Searched; 
if(Alloy.Globals.Artist == 'Reset' ){
// only putting in reset resets the artist  
ResetMe._reset () ; 
resetAll = true ; 
}
//ResetMe.update() ; 
debugger ; 

	SearchLog(resetAll) ; 

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

function SearchLog (reset){
/*
for(var x = 0 ; x <  Alloy.Collections.Searched.models.length ; x++){
 Alloy.Collections.Searched.destroy( Alloy.Collections.Searched.models[x]) ; 	
}
 */

	
	var SearchControl = Alloy.Collections.Searched ;
	SearchControl.fetch() ; 
	if(reset){
	SearchControl.reset () ; 
	}
	debugger ; 

var  Search = Alloy.createModel('Searched',{Query : (Alloy.Globals.Artist)})	;
SearchControl.add(Search);
Search.save() ;

//SearchControl.fetch() ; 
Ti.API.log(' START DATA ---------------------------------------') ;
for( var x in SearchControl.models){
var show = SearchControl.models[x].get('Query')
	Ti.API.log(show + ' is :' + x) ; 
}
Ti.API.log('END DATA ------------------------------------------') ;
var ASAP =  SearchControl.models[SearchControl.length - 1].get('Query') ;
debugger ; 
//Ti.API.log( ASAP ) ;	
	
}
