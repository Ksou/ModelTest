function AddButton (){
$.Win.setRightNavButton(null 	
);	
$.Win.title = 'Videos about :' + Alloy.Globals.Artist ; 



// first lets get all this in a json feed ! 


//YoutubeJson = require('YoutubeJson') ;
var SearchString =  Alloy.Globals.Artist ; 
debugger ; 
YoutubeJson(SearchString,TableCreate) ;  



}
function TableCreate (data){
//var	data = VideoFix(dataUntreated) ; 
	
	for( var x = 0  ;x < data.data.items.length ;x++ ){
		data.data.items[x].rightImage = data.data.items[x].thumbnail.sqDefault ; 
	}
	//debugger ; 
	var TableVideos = Ti.UI.createTableView({
		data : data.data.items 
		
	});
	
	// shouldnt have to do this...

	/*for( var x in TableVideos.data){
	x.rightImage = data.data.items[x].thumbnail.sqDefault ; 	
		
	}*/
	
	$.Win.add(TableVideos) ; 
	for(var G = 0  ;G < data.data.items.length ;G++ ){
//	TableVideos.data[x].rightImage = data.data.items[x].thumbnail.sqDefault ; 	
	// just print the name 
	// I can't access the individual rows this way ?!
	// its saying my length is one ?! 
	// alloy bug ???!!!
	Ti.API.log(TableVideos.data.length) ; 
	Ti.API.log(TableVideos.data[G].title) ;	
	// ? 
	}
	debugger ; 
	TableVideos.addEventListener('click',function(e){
	alert(data.data.items[e.index].title) ; 	
	
	if(data.data.items[e.index].accessControl.embed = 'allowed'){
		VideoPlay(data.data.items[e.index].id ) ; 
	} else { alert('Cant Play this video ')}
	
	}); 
}
function VideoFix(data){

// Array Remove - By John Resig (MIT Licensed)
// made by the Jquey guy !
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};
	
	for(x in data){
	if(x.accessControl.embed =! 'allowed')
	data.remove(x);
	// no need to show videos we can't play 
	//data[x].title = data[x].text ; 		
		
	}
	return data ; 
	
	
	
}


function VideoPlay (ID){
//	var ID = '6E9WU9TGrec' ;
var webView = Ti.UI.createWebView({
  url: 'http://www.youtube.com/embed/' + ID + '?autoplay=1&autohide=1&cc_load_policy=0&color=white&controls=0&fs=0&iv_load_policy=3&modestbranding=1&rel=0&showinfo=0'
});
	
	$.Win.add(webView); 
	$.Win.setRightNavButton(
$.Inbox 	
);	
	//$.Inbox.visible = true ; 
	$.Inbox.addEventListener('click' , function(){
	$.Win.remove(webView) ;
	//$.Inbox.removeEventLister('click') ;
	 $.Win.setRightNavButton(null) ; 
	 }
);
	debugger ; // get the video URL and add a 
}




function YoutubeJson(search,callback){
	// make sure we only get music , set category to music 
var url = 'https://gdata.youtube.com/feeds/api/videos?v=2&alt=jsonc&category=Music&q='+ search ; 
var xhr = Ti.Network.createHTTPClient()	 ; 
xhr.open("GET", url);
xhr.send();
xhr.onload = function(e){

Ti.API.log(this.responseText) ; 	
	debugger ; 
var Json = JSON.parse(this.responseText) ; 

callback(Json) ; 
}
	
	
	
}
