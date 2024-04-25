// DOM액세스 타이밍에 처리 실행
// DOMContentLoaded: 페이지가 표시되는 시점에 수행하겠다!
// 'load' : 페이지 내 모든 리스트 (사진, 사운드, 동영상 등) 로딩이 된 후 발생
// window.addEventListener('DOMContentLoaded', () => { 

//     const boxNum = document
//                 .querySelectorAll('.container .box')
//                 .length

//     console.log(`box 요소의 개수는 ${boxNum}입니다.`);
// })





const boxNum = document
                .querySelectorAll('.container .box')
                .length
console.log(`box 요소의 개수는 ${boxNum}입니다.`);



