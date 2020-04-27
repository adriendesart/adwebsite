export const isVisible=(id_element)=>{
    let visibility;
	let visibleSquare = {xMin: 0, xMax: 0, yMin: 0, yMax: 0}, visibleElement = {xMin: 0, xMax: 0, yMin: 0, yMax: 0};
	let source = document.getElementById(id_element), sourceParent = source.offsetParent;
	let total = {height: false, width: false}, partiel = {height: false, width: false};
	visibleSquare.xMin = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
	visibleSquare.xMax = window.pageXOffset + window.innerWidth || document.documentElement.scrollLeft + document.documentElement.clientWidth || document.body.scrollLeft + document.body.clientWidth;
	visibleSquare.yMin = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	visibleSquare.yMax = window.pageYOffset + window.innerHeight || document.documentElement.scrollTop + document.documentElement.clientHeight || document.body.scrollTop + document.body.clientHeight;
	visibleElement.xMin = source.offsetLeft;
	visibleElement.yMin = source.offsetTop;
	while(sourceParent) {
		visibleElement.xMin += sourceParent.offsetLeft;
		visibleElement.yMin += sourceParent.offsetTop;
		sourceParent = sourceParent.offsetParent;
	}
	visibleElement.xMax = visibleElement.xMin + source.offsetWidth;
	visibleElement.yMax = visibleElement.yMin + source.offsetHeight;
	if(visibleSquare.xMin <= visibleElement.xMin && visibleSquare.xMax >= visibleElement.xMax){
		total.width = true;
	}
	else if(!(visibleSquare.xMax < visibleElement.xMin || visibleSquare.xMin > visibleElement.xMax)){
		partiel.width = true;
	}
	if(visibleSquare.yMin <= visibleElement.yMin && visibleSquare.yMax >= visibleElement.yMax){
		total.height = true;
	}
	else if(!(visibleSquare.yMax < visibleElement.yMin || visibleSquare.yMin > visibleElement.yMax)){
		partiel.height = true;
    }
    
	if(total.width && total.height){
		visibility="complete";
	}
	else if(total.width && partiel.height){
		visibility="partialHeight";
	}
	else if(total.height && partiel.width){
		visibility="partialWidth";
	}
	else if(partiel.height && partiel.width){
		visibility="partial";
	}
	else{
		visibility="unvisible";
    }
    return visibility;
}