$.index.open();
// 

//GetSearches = require('controllers/GetSearches') ;
//GetSearches() ; 
function AlertMe(){
	
	alert($.Ace.title) ; 
	
}

function GetSearches(){
// note , I had to depend on the examples in https://github.com/appcelerator/alloy/blob/master/test/apps/models/sql_keywords/models/fighters.js
// to get this to work , the Appcelerator documentation regarding this is incomplete at best . 	
	
//$.index.open();
// I had to modify the generated adapter type //and change it to “sql”, from : "Query:string" I think this is a bug in alloy itself ,
// trying to //run though //http://docs.appcelerator.com/titanium/latest/#!/guide/Alloy_Collection_and_Model_Objects
//  does not work currently looking at I’m assuming to get Alloy  model’s to work as 
//intended requires a bit of work in the actual (modelname) .js file  

// files 
//used to study
// so my understanding of what models are , 
// for the most part , SQL lite databases in an very easy to use format , which means for larger apps you can pass and
//save data with far less work then a traditional SQL  method 

var SearchControl = Alloy.Collections.Searched ;

SearchControl.fetch() ; 
// incase we don't have it ' 
if(SearchControl.models[0]){
var CheckAgain =  SearchControl.models[0].get('Query') ;
}

debugger ;

var Searched = Alloy.createModel('Searched', {Query : 'Searching' , Music : false}) ;
// can this be an array ?
// lets try ! 
//Searched.save()
// ok now on to getting this to 
var Searches = [] ;
for ( var x = 0  ;x < 20 ;x++ ){
	
Searches[x] = Alloy.createModel('Searched',{Query : ('Search number :' + x)})	;
SearchControl.add(Searches[x]);
Searches[x].save() ; 
}

var GotQuery = Searched.get('Query') ;
var GotMusic = Searched.get('Music'); 
// debugger ; 
/*
for( var x = 0  ;x < 20 ;x++ ){
var see = Searches[x].get('Query') ;
Ti.API.log(see) ; 	
	
}*/

SearchControl.fetch() ; 
var CheckA =  SearchControl.models[0].get('Query') ;
Ti.API.log( CheckA) ;  
debugger
//alert (GotQuery + GotMusic) ; 

}