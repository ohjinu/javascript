// 1-10까지의 짝수의 합과 홀수의 합을 구하는 프로그램 작성


// 기억장소 확보
// 숫자 생성
// 짝수 홀수 판별 누적
var odd_sum = 0,
    even_sum = 0

for (i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log("짝수:" + i)

        even_sum += i
    } else {
        console.log("홀수:" + i)

        odd_sum += i
    }
}

console.log(`짝수의 합:${even_sum}, 홀수의 합:${odd_sum}`)