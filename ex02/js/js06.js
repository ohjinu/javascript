/*
연산식:
산술식 =>
이항연산: +, -, *, /, %(나머지), **(제곱)
다항연산: ++, --
관계연산: >, >=, <, <=, !=, ==(같음)
        :관계연산의 결과는 true, false
논리연산: !(NOT),
         &&(AND): 모든 조건이 true => true,
         ||(OR): 모든 조건이 false => false
         ^(XOR): 모든 조건이 true이거나 false이면 => false
    NOT - AND - OR 순서


삼항 연산자: 조건식 ? true 경우처리 : false인 경우 처리

복합형 대입연산자
+=, -=, *=, /=, %=
*/

let num5 = 100
console.log(num5)
num5 += 100
console.log(num5)
num5 -= 10
console.log(num5)

console.log(10>2 ? "10은 2보다 크다": 1000)
console.log("!(NOT)=>", (5 > 2), !(5 > 2))
console.log("&&(AND)=>", 5 > 2 && 5 > 3 && 5 > 1)
console.log("||(OR)=>", 5 < 2 || 5 < 3 || 5 > 1)
console.log("^(XOR)=>", true ^ false) // 0(false), 1(true)

console.log(5 > 2)
console.log(5 < 2)
console.log(5 != 2)
console.log(5 == 2)
console.log("5==5", 5 == 5)
console.log("5=='5'", 5 == '5')
console.log("5==='5'", 5 === '5')

// 1. 기억장소 초기화
let num1 = 10,
    num2 = 3
let add,
    sub,
    mul,
    div,
    mod,
    pow

// 2. 계산처리
add = num1 + num2
sub = num1 - num2
mul = num1 * num2

div = num1 / num2
mod = num1 % num2
pow = num1 ** num2

console.log(add, sub, mul, div, mod, pow)

let num3 = 10
console.log("num3=" + num3++)
console.log(num3)
