/* Your task is to make a function that can take any non-negative integer as an argument and return it with
 its digits in descending order. Essentially, rearrange the digits to create the highest possible number. */

function descendingOrder(n) {
  let nString = String(n);
  let nArray = Array.from(nString);
  nArray.sort();
  nArray.reverse();
  let nString2 = nArray.join('');
  return parseInt(nString2);
}

console.log(descendingOrder(42145));


/*function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}*/