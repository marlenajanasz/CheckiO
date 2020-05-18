
function digitsMultip(nr){
  let str = nr.toString();
  let multip = 1;

  
  for (let i=0; i<str.length; i++){
      if(str[i] != 0){
        multip = multip * str[i];
      }
       
  }
  return multip;
}
 

