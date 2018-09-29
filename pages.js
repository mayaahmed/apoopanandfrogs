
 var indexDiv = document.getElementById("navId");
 var btn = document.getElementById("toggleButton");
btn.innerHTML = "&#8594";

indexDiv.style.left = "-255px";

function toggle(){
	indexDiv.style.height = window.innerHeight - 60+"px";
	if(indexDiv.style.left == "-255px"){
		indexDiv.style.left = "0px";
        btn.innerHTML = "&#8592";
	} else {
		indexDiv.style.left = "-255px";
        btn.innerHTML = "&#8594";
	}
}


