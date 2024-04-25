// 문자열 길이
console.log("홍길동은 부산에 있습니다.".length)
console.log(" 홍길동은 부산에 있습니다.".length)

// textarea 영역
let textarea = document.querySelector('#textarea')
let str_len = document.querySelector('.str_len')

// 이벤트 핸들러 구성
// 텍스트에 입력할 때마다 함수를 수행: onKeyUp()
textarea.addEventListener('keyup', onKeyUp) // '이벤트 종료', '수행할 함수'

// 수행할 함수 정의
function onKeyUp () {
    str_len.innerText = textarea.value.length
}

// 공백 자르기

console.log('hello !'.length, ' hello ! '.trim().length)
const str1 = "Javascript good!!"
// 첫번째 위치 : 0번
console.log(str1.indexOf('Javascript'))
console.log(str1.indexOf('script'))
console.log(str1.indexOf('python')) // 없으면 -1 반환

if (str1.indexOf('python') < 0) 
    console.log('python문자열을 포함하고 있지 않습니다.')
else 
    console.log('찾고자 하는 문자열을 포함하고 있습니다.')
    console.log(str1.indexOf('a',3)) // 특정 인덱스번호 부터 검색


//정규 식 표현

console.log(str1.search(/Javascript/)) // 검색 성공: index 번호
console.log(str1.search(/Html/)) // 검색 실패


console.log(str1.includes('Javascript')) // 검색 성공여부: true/false
console.log(str1.includes('HTML'))

console.log('startsWith()', str1.startsWith('Ja')) // 문자열 시작 확인
console.log('startsWith()', str1.startsWith('HTML'))
console.log('endsWith()', str1.endsWith('!!'))
console.log('endsWith()', str1.endsWith('HTML'))

// 특정위치에 있는 문자열 추출
console.log('Javascript'.charAt(5))

//--------------------------//
/*HTML 요소와 javascript 연결*/
//--------------------------//
// 검색어
const searchWordText = document.querySelector('#search-word-input')
//지역리스트: button요소만 그룹핑(배열구조)
const prefectureList = document.querySelectorAll('#prefecture-list  button') // button이 여러개면 querySelector에 All을 붙혀야 함
// 문자가 입력될 때마다 데이터 체크 작업 실행
searchWordText.addEventListener('keyup', () => {

    //alert('keyup 이벤트 발생했습니다.')

    // 입력한 검색어
    const searchWord = searchWordText.value
    // console.log('입력한 문자: '+searchWord)
    
    // 리스트 루프 처리 => button요소를 하나씩 읽어옴
    prefectureList.forEach( (btn) => {

        // 검색어가 없으면 모든 요소 표시
        if (searchWord=='' || !searchWord) {
            console.log('검색어가 없음.')
        }
        btn.classList.add('hide')
        /*
        // 요소.classList => class 추가, 삭제, 수정 .add(), .remove(), .toggle(),...
        btn.classList.remove('btn') //button요소에 'hide'클래스를 추가
        console.log(btn)
        */

        const prefectureName = btn.dataset.name
        const phonetic = btn.dataset.phonetic
        console.log(btn,prefectureName,phonetic)

        // 검색어와 첫번쨰 글자 일치 여부에 따라 hide 클래스 사용
        if (searchWord.charAt(0) == prefectureName.charAt(0) ||
            searchWord.charAt(0) == phonetic.charAt(0) ) {
                //검색어와 첫글자가 일치하는 경우
            btn.classList.remove('hide')
        } else {
                //검색어와 첫글자가 일치하지 않는 경우
            btn.classList.add('hide')
        }
    } )

    
    // prefectureList.forEach( () => {
    //     if (!searchWord || searchWord=''){
    //     }
    // });
})

/*
// 변수, 배열구조, 객체구조
// forEach()
const data = [10, 20, 30] // data => data[0], data[1], data[2]

console.log('---배열읽기1')
console.log(data[0])
console.log(data[1])
console.log(data[2])


console.log('---배열읽기2')
for (i=0; i<data.length; i++) {
    console.log(data[i]) // data[i] = data[0], data[1], data[2]
}

console.log('---배열읽기3:배열객체.forEach(함수식)')
// 배열 객체.forEach (배열객체 안에있는 데이터를 순차적으로 읽어서 처리)

data.forEach ( (item) => {
    console.log(item)
})
*/
