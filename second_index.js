//my solution

function secondIndex(str, ind){
  let result = str.indexOf(ind, str.indexOf(ind)+1);  
  if(result < 0){  
      return undefined;
    }
    else {
      return result;
    }
 
//the conditional (ternary) operator

function secondIndex(str, ind){
  let result = str.indexOf(ind, str.indexOf(ind)+1);  
  return result < 0 ? undefined : result;
}


//best solution

let secondIndex = (t, s) => t.replace(s, '').indexOf(s) + 1 || undefined;


















