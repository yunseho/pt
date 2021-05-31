//함수 축약하기

//기본형 1
function add1(x , y) {
    return x + y;
}

//function을 화살표 함수로 변경
const add2 = (x , y) => {
    return x + y;
}

//화살표 함수 다음 {}나오면 {}와 return 생략가능
const add3 = (x , y) =>  x + y;


//return값이 헤갈릴수있어서 괄호로 묶음
const add3 = (x , y) =>  (x + y);






//기본형 2
function not1(x) {
    return !x;
}
//function 생략후 => 로변경
//{}이후나오는 return값 생략
//return값은 괄호로 표시가능
//매개변수가 하나면 괄호생략가능  x부분
const not1 = x => !x;
const not1 = x => (!x);







//기본형 3
const obj = (x,y) => {
    return {x:x ,y:y}
}

//리턴값 생략
const obj = (x,y) => {
    return {x ,y}
}

//{}와 return이 =>이후 바로 나오면 생략가능
//이경우 {x ,y} 의 {}를 엔진이 해석 못함
//그래서 객체리턴시 ()를 넣어줘야함
const obj = (x,y) => ({x ,y})



//화살표 함수

var relationship1 ={
    name:'zero',
    friends: ['nero','hero','xero']
}