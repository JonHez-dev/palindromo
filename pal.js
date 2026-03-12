function palindromo(num){
let invertido = 0;
  let og=num;
  
  while(num>0){
    res = num%10;
    num = num-res;
    num = num/10;
    invertido = (invertido*10)+res;
  }
  if(invertido==og){
    return true;
  }else{
    return false;
  }
  console.log(invertido);
}

palindromo(21);