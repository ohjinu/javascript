
/*
단일 기억장소 : 일반변수

복수 기억장소 : 배열구조, 객체수조
n개의 기억장소 => n-1의 인덱스 번호 표시

- 배열구조 => "[데이터1,...]"표시
- 객체구조 => "{'key': value}"표시
*/

const myArray = ['펭귄', '고래', '참치']
console.log(myArray)
// 배열구조 데이터 보기
myArray[0] = '100'
 console.log(myArray[0])
 console.log(myArray[1])
 console.log(myArray[2])

 const myObj = { id:20, name: '홍길동'}
 console.log(myObj)
 myObj.id = 10
 console.log(myObj.id)
 console.log(myObj['id'])
 console.log(myObj.name)
 console.log(myObj['name'])
