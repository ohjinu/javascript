//입력한 숫자가 양수, 0, 음수 판별
var number = prompt("숫자 입력:",0)
console.log(number)

if (number > 0)
    document.write("양수")
else if (number = 0)
    document.write("영")
else
    document.write("음수")

/*
// 메시지 창: alert("메시지")
// alert("메시지 창 입니다.")

// 입력 창: prompt("메시지", "값")
// 판별 여부 창 : confirm ("메시지")
// 확인버튼 : true, 취소버튼: false
var isOk = confirm("정말로 회원을 탈퇴하겠습니까?")
console.log(isOk)

if (isOk) {
    document.write("탈퇴 처리 하였습니다.")
} else {
    document.write("탈퇴 취소 하였습니다.")
}
*/


/*
// 입력한 숫자가 3의 배수이고 6의 배수인 숫자 판별하기
var num = prompt("숫자 입력:", 0)

console.log(num, num/3, num%3)

if (num % 3 == 0 && num % 6 == 0)
    document.write(`${num}은 3의 배수이고 6의 배수 입니다.`)
else
    document.write(`${num}은 3의 배수이면서 6의 배수가 아닙니다.`)
*/


// 수련회 주제 찬양