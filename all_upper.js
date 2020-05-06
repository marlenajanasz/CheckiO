//my solution

function isAllUpper(str){

let isUpper;

	if((str === '') || (str.length ===0)){
		isUpper = true;
	} else {
		for (let i=0; i<str.length; i++){
				if(str[i]===str[i].toUpperCase()){
					isUpper = true;
				} else {
					isUpper = false;
				}
			}
		}
	
	return isUpper;

}

//best solution

function isAllUpper(text){
  return text === text.toUpperCase();
}

//arrow function

const isAllUpper = text => return text === text.toUpperCase();