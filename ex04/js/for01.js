/*
for(초기치; 조건식; 증감치) {
    반복처리 할 내용
}
*/

let num1 = 5
console.log(num1==5)
console.log(Boolean(num1=10))
console.log('------')

for (let i = 1; i <= 10; i++) {
    if (i == 5) 
        break;
    console.log("반복구간", i)
}

for (let i = 1; i <= 10; i++) {
    if (i % 3 == 0) 
        continue; // 5를 건너 뛰고 실행
    console.log("반복처리구간", i)
}