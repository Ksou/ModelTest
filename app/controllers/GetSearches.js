/**
 * @author Sam S.
 */
function GetSearches(){
//$.index.open();
// creating a collection causes an exception , I had to modify the generated adapter type //and change it to “sql”, from : "Query:string" I think this is a bug in alloy itself , trying to //run though //http://docs.appcelerator.com/titanium/latest/#!/guide/Alloy_Collection_and_Model_Obje//cts  does not work currently looking at I’m assuming to get Alloy  model’s to work as //intended requires a bit of work in the actual (modelname) .js file  

// files 
//used to study
var Searched = Alloy.createModel('Searched', {Query : 'Searching' , Music : false}) ;
// can this be an array ?
// lets try ! 
//Searched.save()
var Searches = [] ;
for ( var x = 0  ;x < 20 ;x++ ){
	
Searches[x] = Alloy.createModel('Searched',{Query : ('Search number :' + x)})	;
Searches[x].save() ;
}

var GotQuery = Searched.get('Query') ;
var GotMusic = Searched.get('Music'); 
debugger ; 
for( var x = 0  ;x < 20 ;x++ ){
	var see = Searches[x].get('Query') ;
Ti.API.log(see) ; 	
	
}
alert (GotQuery + GotMusic) ; 

}
module.exports = GetSearches ; 