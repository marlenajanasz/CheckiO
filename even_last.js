
//my solution

function evenNum(array){
let sum = 0;
	if(array.length>0){
		for(let i=0; i<array.length; i++){
			if(i % 2 == 0){
			 sum += (array[i]);
			} 
		}
		return sum * array[array.length-1];
	} else if(array.length === 0){
		return 0;
	}
}
evenNum([0, 1, 2, 3, 4]);

//best solution

const evenLast = (data) => {
    let sum = 0;
    for(let i=0; i < data.length; i+=2)
        sum += data[i];

    return sum * data[data.length-1] || 0; 
}

