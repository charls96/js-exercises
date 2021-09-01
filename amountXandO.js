/*Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. The string can contain any char.*/ 

function XO(str) {
    let strLower = str.toLowerCase();
    let counterX = 0;
    let counterO = 0;
    for (let i = 0; i < strLower.length; i++) {
        if (strLower.charAt(i) == 'x'){
            counterX++;
        }
        else if (strLower.charAt(i) == 'o'){
            counterO++;
        }
        
    }
    if(counterX == counterO){
        return true;
    }
    else if (counterX == 0 && counterO == 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(XO("ooxx"));

/*function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}*/