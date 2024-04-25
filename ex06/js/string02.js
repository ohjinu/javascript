// 문자열 다루기 : 위치 지정하여 선택하기

console.log('javascript'.slice(0, 4)) // 0 ~ n-1
console.log('javascript'.slice(0))
console.log('javascript'.slice(4)) // n 이후
console.log('javascript'.substring(0, 4))
console.log('javascript'.substring(0))

// 시작 > 마지막 : 음수 인식
console.log('javascript'.slice(3, -1))
console.log('javascript'.substring(3, -1)) // (3,0)
console.log('javascript'.substr(4, 6)) // (시작번호,개수)

// 문자열 변환
console.log('image1.png'.replace('1.png', '2.png'))
const inputText = '홍길동\n홍 \\ \'길순' // "\t, \n, "
console.log(inputText)
console.log(inputText.replace('\n', ''))
var name = '홍길동 홍길순 동길이 동길동'

// var name1 = name.replace(' ','')
// var name2 = name.replace(' ',',')

var name1 = name.replaceAll(' ', '')
var name2 = name.replaceAll(' ', ',')

console.log(name)
console.log(name1)
console.log(name2)

var tel = "010-1234-7899"
console.log(tel)
var tel_number = tel.replace(/-/g, '') // 정규식 표현
console.log(tel_number)

// 예문
/*
텍스트 영역에 입력한 전화번호의 하이픈(-)을 제거한
내용을 표시하기
*/

document.querySelector('#sendBtn').addEventListener('click', () => {
    // html에서 tel input 요소의 값 읽기
    const tel = document.querySelector('#tel').value
    console.log(tel)

    // 전화번호에서 '-'제거
    const tel_number = tel.replace(/-/g, '') // '-' 기호 제거
    alert(`전화번호는 ${tel_number}입니다.`)
    console.log(`전화번호는 ${tel_number}입니다.`)
})