// 1. 리터럴
console.log('hello');
console.log("hello");
console.log("hello")


console.log("2");
console.log("2022-02-22"); //문자
console.log(2022-02-22); //숫자. 뺄셈

// 2. 변수
// 변수 종류 : var, let, const

var num = 123
var greeting = 'hi'

console.log(num)
console.log(greeting)

var x = 2
var y = '2'


console.log(x+x)
console.log(y+y)

// 3. javascript 이스케이프 시퀀스 (\)

console.log('it\'s a book')
console.log('it\'s a book')
console.log("New York is called \"The Big Apple\" ")
console.log('hello /n world')


// 4. 변수 3가지 종류 비교 (var let const)
// Block Scope 블록범위(지역범위){} vs Global Scope 전역범위


// 4-1. var
// var : 과거에 사용, 현재는 let이나 const 권함
// var hoisting (move declaration from bottom to top)

{ age = 10 
var age}
console.log(age) 

// 4-2. let
let globalName = 'global' // let을 ()밖에서 선언할 경우 대괄호 안과 밖에서 모두 선언 가능
{
    console.log(globalName);

    let name = '홍길동'; // 변수 선언과 동시에 데이터를 할당=정의 함

    console.log(name)

    // let name = 'lisa'; --> 오류발생 
    // let을 붙이게 되면 새로운 변수를 생성하는 것이기에 변수명 중복을 허용하지 않는다.

    name = 'lisa';
    

    console.log(name)
}

console.log(globalName) 
// console.log(name) 출력 안되는 현상 발생 -> 
// {} 안에 변수 선언 하면 ( ) 범위안에서만 출력가능하다.
// 대괄호 밖에서 출력시 오류 발생

// 4-3. const 상수 (constants)

const daysInWeek = 7;
console.log('일주일은 몇일인가? 답 : ' + daysInWeek +'일')
console.log(`일주일은 몇일인가? 답 :  ${daysInWeek}일`) // 주의 : 역따옴표 (tab키위 물결표시)