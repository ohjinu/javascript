
// 1. html 요소 JS와 연결

var _try = document.querySelector('#try')
var _btnCheck = document.querySelector('#check')
var _reset = document.querySelector('#reset')
var _display = document.querySelector('#display')
var _counter = document.querySelector('#counter')

//컴 숫자 발생 1-100발생 무작위

var rnd = Math.ceil(Math.random()*100)
console.log('컴퓨터가 발생한 숫자:',rnd)

/*
// 2. 이벤트 등록하기
// 확인 버튼에 이벤트 등록하기
_btnCheck.addEventListener('click',()=>{
    // var userNum = _try.value
    // alert(`사용자가 입력한 수 ${userNum}`)
    finding()
})
*/

_btnCheck.addEventListener('click', finding)

//숫자 입역란에서 enter키 이벤트 등록
_try.addEventListener('keypress',(e)=>{
    if (e.keyCode == 13) {
        // var userNum = _try.value
        // alert(`사용자가 입력한 수: ${userNum}`)
        finding()
    }
    
})
var counter = 0
 
//입력받은 수자에 대한 조건 처리하는 함수
function finding() {
    var userNum = _try.value
    // alert(`사용자가 입력한 수: ${userNum}`)

    counter++
    if(userNum >=1 && userNum <= 100) {
        if (rnd==userNum){
            _display.innerHTML= " <h1>맞혔습니다. </h1>"
        } else if (rnd<userNum) {
            _display.innerHTML= " <h1>down </h1>"
        } else {
            _display.innerHTML= " <h1>up </h1>"
        }
        _counter.innerHTML="시도 횟수: "+counter+"회"
    }else {
        alert("1과 100사이의 숫자 입력하시오")
    }
}


// 다시버튼 클릭시 수행함수
function fun_reset() {
    window.location.reload()
}