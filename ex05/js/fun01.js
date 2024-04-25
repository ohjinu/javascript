// 독립된 단위 프로그램

// 함수 호출
// numberPrint()
// numberPrint2(10,15)
// numberPrint2(1,2)
// numberPrint2(100,103)

let result = sum(100,200)
console.log(result)


// 함수 정의
// 1. 인자가 없는 함수
function numberPrint() {
    for (i=1;i<=3;i++) {
        console.log(i)
    }
}

// 2. 인자가 있는 함수
function numberPrint2(start, end) {
    for (i=start;i<=end;i++) {
        console.log(i)
    }
}

// 3. 인자가 있고, 반환값이 있는 함수
function sum(num1, num2) {
    return (num1+num2)
}




// 4. 가변 인자
function calcSum(...values){ // 배열구조 => values[0], values[1]...
    for (const value of values){ // values 값들을 순차적으로 하나씩 끄집어내 value에 저장
        console.log(value)
    }
}

calcSum(10)
calcSum(10,20)
calcSum(10,20,30)
calcSum(10,20,30,40)