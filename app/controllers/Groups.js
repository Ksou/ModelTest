function TwitterGet (){
	
	var screen_name = 'DJKRUSHofficial' ;
// uses old v1 API , 1.1 requires Oauth 
$.Win.title = 'Tweets about :' + Alloy.Globals.Artist;
var searchAble = Alloy.Globals.Artist.replace(' ','%20')


//http://search.twitter.com/search.json?q=blue%20angels&rpp=5&include_entities=true&result_type=mixed
var TweetUrl = "http://search.twitter.com/search.json?q=" +  searchAble + "&rpp=5&include_entities=true&result_type=mixed" ; 

var xhr = Ti.Network.createHTTPClient(); 
//xhr.open("GET","http://api.twitter.com/1/statuses/user_timeline.json?screen_name="+screen_name) ; 
xhr.open("GET", TweetUrl) ; 
xhr.send() ; 
debugger ; 
xhr.onload= function (){
	
var TweetFull =  JSON.parse(this.responseText) ;	
var Tweets = TweetFull.results ; 
 debugger ; 
try{	
var TweetsView = Ti.UI.createTableView({
	
//data : Tweets 	
	
});	


debugger ; 
var DataUse = TweetFix(Tweets) ;
$.Twitter.visible = false ; 

TweetsView.setData(DataUse) ; 
TweetsView.addEventListener('click',function(e){
	
alert(e.source.title) ; 	
});
$.Win.add(TweetsView) ; 
}

catch(err){
	debugger ; 
	Ti.API.log('couldnt get tweets , reverting to webview ' + err) ; 
	
}


}

}

function TweetFix(data){
	
	for(x in data){
	data[x].title = data[x].text ; 		
		
	}
	return data ; 
	
	
	
}
