// 문서를 객체화 시킨 모델 (HTML)
 /*
 문서 객체를 선택
 - 1개 선택
    - document.getElimentById (아이디)
    - document.getSelector (선택자)
 - 여러 개 선택
    - document.getElimentByClassName (클래스)
    - document.getElimentByName (태그이름)
    - document.getElimentByAll (선택자)
 */

//background-color -> backgroundColor / font-size -> fontSize


// let header = document.getElementById ('header')
//아이디 선택자 설정
// var header = document.getElementById('header')  }<= (이 두가지를 주로 사용)
// var header = document.querySelector('#header')  }

// var header = document.querySelector ('h1') (첫번째놈만.. 의미 없음...)


// *querySelectorAll를 써서 그룹이 된다? ==> % 바로 배열구조가 된다고 생각 %
var header = document.querySelectorAll ("h1") // 집합(배열구조)  
//header[0], header[1],...

for (i=0; i<header.length; i++) {
    header[i].innerHTML = '태그 선택자입니다.'
    header[i].style.color = 'orange'
    header[i].style.backgroundColor = 'black'
}





