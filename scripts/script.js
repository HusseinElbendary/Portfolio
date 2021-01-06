var audio = document.getElementById("autoplay");
var audioButton = document.getElementById("playButton");
var arrow=document.getElementById("arrow");
var songPannel=document.getElementById("songPanel");
var timeOut;
hideSong();

audio.pause();
// var t;
// var pausePose;
function toggleMusic()
{
	arrow.style.transition=" opacity 1.5s";
	arrow.style.opacity = '0';
	if(audio.paused)
	{
		audio.play();
		audio.volume=0.2;


		audioButton.style.animation= " rotation 8s infinite linear ";
		// t=performance.now();
		// console.log(t);

	}
	else{
		audio.pause();
		audioButton.style.animation= "none";
		// pausePose=(performance.now()-t)*360/8000;
		
		// audioButton.style.transform="rotate("+pausePose +"deg)";
		// audioButton.style.transition="tranform 5s";
		// audioButton.style.transform="rotate(0deg)";

	}
}
function showSong()
{
// songPannel.innerText="Celeste OST: Resurrections";

if(window.innerWidth>625){
songPannel.style.padding="2px  5px 38px  254px";
songPannel.style.marginTop= "13px";

timeOut=setTimeout(function() {
	songPannel.style.transition="none";
	songPannel.innerText="Celeste OST: Resurrections";
	songPannel.style.padding="2px  5px 2px  60px"; }
	,4000);
}
}
function hideSong()
{
	clearTimeout(timeOut);
	songPannel.style.padding="2px  5px 38px  254px";
	songPannel.innerText="";
	timeOut=setTimeout(function() {
		songPannel.style.transition="padding 4s, margin-top 4s"
		songPannel.style.padding="0px";
		songPannel.style.marginTop= "35px";
	 }
	,15);
	
}
audioButton.addEventListener("click",toggleMusic);
audioButton.addEventListener("mouseenter",showSong);
audioButton.addEventListener("mouseleave",hideSong);
