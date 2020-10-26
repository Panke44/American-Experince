'use strict';
function showMore1(){
	let text = document.getElementById("showMore1");
	let button = document.getElementById("btnShowMore1");

	if(!text.style.display || text.style.display == "none"){
		text.style.display="block";
		button.value="Less";
	} else{
		text.style.display= "none";
		button.value="More";
	}
}

function showMore2(){
	let text = document.getElementById("showMore2");
	let button = document.getElementById("btnShowMore2");

	if(!text.style.display || text.style.display == "none"){
		text.style.display="block";
		button.value="Less"
	} else{
		text.style.display= "none";
		button.value="More";
	}
}
