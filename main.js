let minute = 05;
let second = 59;
let minute2 = 05;
let second2 = 59;
var Bminute = document.getElementById("minute2");
var Bsecond = document.getElementById("second2");
var firstminute = document.getElementById("minute");
var firstsecond = document.getElementById("second");
var startbutton = document.getElementById("start");
var pausebutton = document.getElementById("pause");
var resetbutton = document.getElementById("reset");
var resumebutton = document.getElementById("resume");
var Abutton = document.getElementById("aBtn");
var Bbutton = document.getElementById("bBtn"); 
var interval;
var intervalb;


function startfunction()
{

second--;

if(second <= 9)
{
	firstsecond.innerHTML =  "0" + second;
	
	
}
if(second > 9)
{
	
	firstsecond.innerHTML = second;
}
if(second==0){
	minute--;
	firstminute.innerHTML = "0" + minute;
	second =59;
	firstsecond.innerHTML = second;
}
if(minute<=00){
	
	clearInterval(startfunction);
	firstminute.innerHTML = "00";
	firstsecond.innerHTML = "00";
}

}


startbutton.addEventListener("click", function()
{
	
	interval = setInterval(startfunction,1000);
});


function Abuttonfunction()
{

second2--;

if(second2 <= 9)
{
	Bsecond.innerHTML =  "0" + second2;
	
	
}
if(second2 > 9)
{
	
	Bsecond.innerHTML = second2;
}
if(second2==0){
	minute2--;
	Bminute.innerHTML = "0" + minute2;
	second2 =59;
	Bsecond.innerHTML = second2;
}
if(minute2<=00){
	
	clearInterval(Abuttonfunction);
	Bminute.innerHTML = "00";
	Bsecond.innerHTML = "00";
}
}


Abutton.addEventListener("click", function()
{
	
	intervalb = setInterval(Abuttonfunction,1000);
	
	clearInterval(interval);
	
});



Bbutton.addEventListener("click", function()
{
	

	clearInterval(intervalb);
	
	interval = setInterval(startfunction,1000);
	
});

resumebutton.onclick = function()
{

interval = setInterval(startfunction,1000);


}


pausebutton.onclick = function(){
	
	clearInterval(interval);
    clearInterval(intervalb);  	
     
};


resetbutton.onclick = function(){
	
	clearInterval(interval);
	
	minute = 05;
	firstminute.innerHTML = "05";
	
	second = 59;
	firstsecond.innerHTML = "59";
	
	clearInterval(intervalb);
	
	minute2 = 05;
	Bminute.innerHTML = "05";
	
	second2 = 59;
	Bsecond.innerHTML = "59";
	
};