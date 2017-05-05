
var tl,nl;
var currentpos="home";
function homes(){
	if(currentpos!="home"){
		var menu = document.getElementById("menu");
		var timeline=document.getElementById("centerTimeline");
		menu.appendChild( nl );
		timeline.appendChild( tl );
		currentpos="home";
	}
}
function abouts(){
	if(currentpos!="about"){
		nl = document.getElementsByClassName("nav-left")[0];
		nl.parentNode.removeChild(nl);
		tl = document.getElementById("timeline");
		tl.parentNode.removeChild(tl);
		currentpos="about";
	}
	
}
window.onload= function(){
	var link=window.location.href.split('?');
	history.pushState('a', "yummy", link[0]);
	var queryString = decodeURIComponent(window.location.search);
	queryString = queryString.substring(1);
	console.log(link);
	if(queryString=="about"){
		document.getElementById("about").click();
		console.log((window.location.search));
	}
};