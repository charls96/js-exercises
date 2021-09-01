/*This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt" */

function accum(s) {
    let sSplit = s.split('');
    let str = "";

    for (let i = 0; i < sSplit.length; i++) {
        str = str+sSplit[i].toUpperCase()+sSplit[i].toLowerCase().repeat(i);
        if(i != sSplit.length-1){
            str = str+"-";
        }
    }
    return str;
}

console.log(accum("ZpglnRxqenU"));

/*function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
} */