const {odd,even} =require('./var')
const checkNumber = require('./funk')

function checkStringOddOrEven(str) {
    if (str.length %2 ) {
        return odd;
    }else{
        return even;
    }
}

console.log(checkNumber(10));
console.trace(checkStringOddOrEven('hello'));