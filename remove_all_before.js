//my solution

function removeAllBefore(arr, val){
	if (arr.indexOf(val)>=0){
		return arr.splice(arr.indexOf(val));
	} else return arr;
}

//best solution

function removeAllBefore(arr, val){
  return arr.slice(Math.max(0, arr.indexOf(val)));
}

//used methods:

/* 
1.The slice() method returns a shallow copy of a portion of a typed array into a new typed array object.
In this case, only begin parameter has been used, which is a zero-based index at which to begin extraction.

2.The Math.max() function returns the largest of the zero or more numbers given as input parameters. 

3. The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
Here used just for removing elements.
*/
