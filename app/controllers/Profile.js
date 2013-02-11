// changed to About
function WikiChange(){
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
xhr.open("GET",url) ;
xhr.send() ; 

}
function Figure(webText){
	var result = webText.indexOf("Wikipedia does not have an article with this exact name.") ;
	if(result =! -1){
	alert( ' No Wiki') ; 	
		
	};
Ti.API.log(result) ; 
// search for did not and if that exist assume we couldn't get a wiki page  	
	
}
