// You should return a given string in reverse order
function backwardString(str){
	let arr = [];
	for(let i=str.length-1; i>=0; i--){
		arr.push(str[i]);	
	}
console.log(arr.join("")) ;
}
backwardString("val");