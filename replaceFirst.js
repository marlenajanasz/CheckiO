//my solution

function replaceFirst(arr){
	if(arr.length > 1){
		arr.push(arr[0]);
		arr.shift(arr[0]);
		return arr;
	} else{
		return arr;
	}
}

//best solution

function replaceFirst(arr) {
    return arr.length && arr.push(arr.shift()), arr; //operator przecinka w prosty sposób oblicza dwa operandy i zwraca wartość drugiego operanda
}
