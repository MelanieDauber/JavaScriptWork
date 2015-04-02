function tag(name,elem){
	return (elem||document).getElementsByTagName(name);
}

function id(name){
	return document.getElementById(name);
}

function bind(evt,elem, handler){
	var e = (elem.addEventListener) ? evt : 'on' + evt;

	if(elem.addEventListener){
		//W3C DOM
		elem.addEventListener(e,handler,false);
	} else if(elem.attachEvent){
		// IE DOM
		elem.attachEvent(e,handler);
	} else {
		// Legacy DOM
		if(elem[e]){
			var old_func = elem[e];
			elem[e] = function(){
				old_func();
				handler();
			}
		} else {
			elem[e] = handler;
		}
	}

}
