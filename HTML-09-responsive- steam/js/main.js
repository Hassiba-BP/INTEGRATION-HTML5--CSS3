window.onload = function(){
	

	var addEvent = function(nodeObject){
		nodeObject.addEventListener("click",function(){
			this.parentNode.classList.toggle('active');
		},false);
	}

	var init = function(){
		addEvent(document.getElementById('btnMenu'));
	}

	init();
}