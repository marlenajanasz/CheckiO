//create a function that gets an array and returns a tuple with 3 elements:
//the first, third and second element from the last for the given array

//1 - best solution

const easyUnpack = els => [els[0], els[2], els[els.length - 2]];

//2 - my solution

function easyUnpack(arr){
	let newArr = [];
	newArr.push(arr[0], arr[2], arr[arr.length-2]);
	return newArr;
}


