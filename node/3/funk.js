// const value = require('./var')
// const odd = value.odd;
// const even =value.odd;
// console.log;(value);


const {odd,even} =require('./var') //구조분해 할당


function checkOddOrEven(number) {
    if (number % 2) {
        return odd;
    }else {
        return even;
    }
}

module.exports = checkOddOrEven;
   
 //다른데서 받은애를 다시 넘길 수 있다ㄴ