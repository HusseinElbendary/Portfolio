var audio = document.getElementById("autoplay");
var audioButton = document.getElementById("playButton");
var arrow=document.getElementById("arrow");
var songPannel=document.getElementById("songPanel");
var socialMedia=document.getElementsByClassName("socialMedia");
var navLinks=document.getElementsByClassName("navLinks");
var listItem1=document.getElementById("listItem1");
var listItem2=document.getElementById("listItem2");


var timeOut;
hideSong();
FooterSize();
headerSize();


audio.pause();
// var t;
// var pausePose;
function headerHoverEnter(e){
	if(e.target.id==="listItem1")
	{
		if(window.innerWidth<575)
		{
			listItem1.style.fontSize="2.3rem";
		}
		else{
		listItem1.style.fontSize="4rem";}
		listItem1.style.color="#ED6868";
	}
	else if(e.target.id==="listItem2"){
		if(window.innerWidth<575)
		{
			listItem2.style.fontSize="2.3rem";
		}
		else{
		listItem2.style.fontSize="4rem";}
		listItem2.style.color="#ED6868";
	}
	
}

function headerHoverleave(e){
	if(e.target.id==="listItem1")
	{
		if(window.innerWidth<575)
		{
			listItem1.style.fontSize="2rem";
		}
		else{
		listItem1.style.fontSize="3rem";}
		listItem1.style.color="black";
	}
	else if(e.target.id==="listItem2"){
		if(window.innerWidth<575)
		{
			listItem2.style.fontSize="2rem";
		}
		else{
		listItem2.style.fontSize="3rem";}
		listItem2.style.color="black";
	}
	
}

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

function FooterSize(){
	if(window.innerWidth<575)
	 {
	 	for(var i=0;i<4;i++)
	 	{
	 	socialMedia[i].style.width="40px";
	 	}
	 }
	 else{
	 	for(var i=0;i<4;i++)
	 	{
	 	socialMedia[i].style.width="75px";
	 	}
	 }
}

function headerSize(){
	if(window.innerWidth<575)
	{
		// navLinks[0].style.fontSize="2rem";
		listItem1.style.fontSize="2rem";
		listItem2.style.fontSize="2rem";
	}
	else{
		// navLinks[0].style.fontSize="3rem";
		listItem1.style.fontSize="3rem";
		listItem2.style.fontSize="3rem";
	}

}

function resizeElements()
{
	FooterSize();
	headerSize();

}

audioButton.addEventListener("click",toggleMusic);
audioButton.addEventListener("mouseenter",showSong);
audioButton.addEventListener("mouseleave",hideSong);
listItem1.addEventListener("mouseenter",headerHoverEnter);
listItem2.addEventListener("mouseenter",headerHoverEnter);
listItem1.addEventListener("mouseleave",headerHoverleave);
listItem2.addEventListener("mouseleave",headerHoverleave);
window.addEventListener("resize",resizeElements);