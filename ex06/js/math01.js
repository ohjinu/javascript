// 수학 개체

console.log(Math.abs(1), Math.abs(-1)) // 절대값 반환
console.log(Math.max(10, 50, 90, 100)) // 큰 숫자
console.log(Math.min(10, 50, 90, 100)) // 작은 숫자

console.log(Math.round(10.54), Math.round(10.44)) // 소숫점 반올림
console.log(Math.floor(10.54), Math.ceil(10.54), Math.trunc(10.54)) // 자리 내림과 올림, 소숫점 이하 버림
console.log(Math.PI) //파이값

console.log(Math.pow(10,3)) // 10의 세제곱
console.log(Math.sqrt(4)) // 루트값

console.log('---------') // 난수
for (i = 1; i <= 10; i++) {
    console.log(Math.ceil(Math.random() * 3))
}

var arr_str = ['홍길순', '길순이','동길이','강감찬','이순신']
console.log(arr_str)

var rn = Math.floor(Math.random() * 5) //0 ~ 4 사이 난수 발생
console.log(arr_str[rn])