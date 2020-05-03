//create a function that gets an array and returns a tuple with 3 elements:
//the first, third and second element from the last for the given array
//1

const easyUnpack = els => [els[0], els[2], els[els.length - 2]];


easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]); // tu zwraca 8 x indeks 0 -> [1, 1, 1, 1, 1, 1, 1, 1]

//2

function easyUnpack(arr){
	let newArr = [];
	newArr.push(arr[0], arr[2], arr[arr.length-2]);
	return newArr;
}

easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]);

//3 - wersja z 1) tylko nie strzałkowo

function easyUnpack(els){
	console.log([els[0], els[2], els[els.length-2]]);
}

easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]);

// You should return a given string in reverse order
function backwardString(str){
	let arr = [];
	for(let i=str.length-1; i>=0; i--){
		arr.push(str[i]);	
	}
return arr.join("");
}
backwardString("val");
