var alertGo  = true ; 
function UpdateForce(){
//var alertGo ; 
var locData = Alloy.Collections.Searched.models; 

var Fixed =   MakeUsable(locData) ;

$.tableMain.setData(Fixed) ;


$.tableMain.addEventListener('click',function(e){
	var tempText = e.source.title ;
Alloy.Globals.Artist = tempText ;	
	//var tempText = Alloy.Globals.Artist  ; 
if(alertGo)
{
	//alertGo = true ; 
alert('Searching for ' + tempText) ; 	
alertGo = false ; 
}	

}

) ; 

FixBool() ; 
}

function FixBool(){
	
alertGo = true ; 	
}

function MakeUsable(data){
var dataFixed = []	 ;
//var dataFixed = 	data.toJSON() ;
	debugger ;
	for( var x in data){
	var ob =  {title : data[x].attributes.Query   };//new Object ;	
	//	ob.title = data[x].attributes.Query ; 
		 
	dataFixed.push(ob) ; 
	}
	debugger ; 
	return dataFixed ; 


}
