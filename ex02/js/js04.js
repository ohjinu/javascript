/*
데이터 값에 이름을 지정하여 사용할 경우
수정불가능한 상수를 사용할 경우
const 변수는 초기화 생략이 불가능하다.
*/

// 변수 선언 => var 변수,... / let 변수,...

const myString = '홍길동'
// myString = '홍길순' --> const는 다른 변수가 들어가면 안됨
console.log('myString = ', myString)