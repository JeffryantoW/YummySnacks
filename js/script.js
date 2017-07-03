var header;
var isFirefox = typeof InstallTrigger !== 'undefined';

if (!isFirefox){
	alert('For better experience, Please open this website with mozilla firefox!');
}

$(document).ready(function(){
	header = window.location.hash;
	if (header == '#biscuit') {
		$('#biscuit-wrapper').css({
			'display': 'inline',
		});
		$('#crackers-wrapper').css({
			'display': 'none',
		});
		$('#chips-wrapper').css({
			'display': 'none',
		});
	}
	if (header == '#crackers') {
		$('#crackers-wrapper').css({
			'display': 'inline',
		});
		$('#biscuit-wrapper').css({
			'display': 'none',
		});
		$('#chips-wrapper').css({
			'display': 'none',
		});
	}
	if (header == '#chips') {
		$('#crackers-wrapper').css({
			'display': 'none',
		});
		$('#biscuit-wrapper').css({
			'display': 'none',
		});
		$('#chips-wrapper').css({
			'display': 'inline',
		});
	}
});
function openSnacks(param){

	header = window.location.hash;
	console.log(header);
	if (param == 'biscuit') {
		$('#biscuit-wrapper').css({
			'display': 'inline',
		});
		$('#crackers-wrapper').css({
			'display': 'none',
		});
		$('#chips-wrapper').css({
			'display': 'none',
		});
	}
	if (param == 'crackers'){
		$('#crackers-wrapper').css({
			'display': 'inline',
		});
		$('#biscuit-wrapper').css({
			'display': 'none',
		});
		$('#chips-wrapper').css({
			'display': 'none',
		});
	}

	if (param == 'chips'){
		$('#crackers-wrapper').css({
			'display': 'none',
		});
		$('#biscuit-wrapper').css({
			'display': 'none',
		});
		$('#chips-wrapper').css({
			'display': 'inline',
		});
	}

}
var checker = true;
function popMenu() {
	if(checker){
		$('.nav-responsive').css({
			'display': 'block'
		});
		checker = false;
	}
	else{
		$('.nav-responsive').css({
			'display': 'none'
		});
		checker = true;
	}

}


