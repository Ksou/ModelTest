function ArtistLog(){
	
	
	Alloy.Globals.Artist = $.Artist.value ;  

}
function ModelTest() {
	
  var Recent = Alloy.createModel("recent", {
        name : $.Artist.value,
       // captured : false
    });
    var check = Recent.get('name') ;
	Recent.save() ; 
	Recent.fetch();
	var RecentFull = [] ; 
	//var arrayRecent 
	
	
	var All =  Recent.get('columns') ;
	for( var x in Recent.get('columns')){
		
	RecentFull.push(x.name) ; 	
	
	} 
	for ( var r in RecentFull){
		
		Ti.API.log(r) ; 
	}
	
	debugger ;
	Ti.API.log( check) ; 
	
}
