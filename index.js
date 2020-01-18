document.getElementById('love-story-head').addEventListener('click',function(){
	document.getElementById('love-story-body').classList.remove('mobile-hide');
	//document.getElementsByTagName('body')[0].style.position = 'fixed';
});

document.getElementById('love-story-body').addEventListener('click',function(){
	document.getElementById('love-story-body').classList.add('mobile-hide');
	//document.getElementsByTagName('body')[0].style.position = 'static';
});