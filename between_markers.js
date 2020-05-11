function betweenMarkers(text, begin, end){
 	let firstIndex = text.indexOf(begin);
 	let lastIndex = text.indexOf(end);
 	
 	function checkConditionOne(){
 		if((begin !== end) && (firstIndex < lastIndex)){
 			return true;
 		}
 	}
 	function checkConditionTwo(){
 		if((begin.length === 1) && (end.length === 1)){
 			return true;
 		}
 	}
 	function checkConditionThree(){
 		//if((firstIndex >=0) && (lastIndex>=0)){
 		if((text.includes(begin)) && (text.includes(end))){
 			return true;
 		}		
 	}
 	
 	if (checkConditionOne() && checkConditionTwo() && checkConditionThree()){
 		return text.substring((firstIndex+1), lastIndex);
 	}
 }
//slice method; just returns substring between two given markers, without meeting 3 conditions

function betweenMarkers(text, begin, end) {
  return text.slice(text.indexOf(begin) + 1, text.indexOf(end));
}
