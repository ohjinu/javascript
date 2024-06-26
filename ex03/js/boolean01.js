// 결과값을 표시하는 대상 => 콘솔창, HTML태그로 표시
// 진위 여부 판별 : boolean타입 => true/false


console.log("값이 있을 경우 판별")
const userName = '홍길동'
if (userName) {
    console.log("값여부 판별: ",userName, Boolean(userName))
}
console.log("0=>",Boolean(0))
console.log("1=>",Boolean(1))
console.log("-1=>",Boolean(-1))
console.log("!0=>",!Boolean(0)) // false -> true (!(not)을 붙혀서)
console.log("!!0=>",!!Boolean(0)) // false -> true (!!)
console.log('홍길동', !'홍길동')
console.log(24, !24)
console.log([1,2,3], ![1,2,3]) //앞은 값, 뒤는 판별 값 | !를 붙히면 Boolean

const flg = 'javascript'.includes('a') // 포함여부 판별
console.log("a포함여부", flg)

if (flg)
 console.log('문자가 있습니다.')



var userName2 // 기억장소만 확보, 값이 없는 상태
console.log("userName2 판별: ", Boolean(userName2))

userName2='길순이' // 기억장소 확보, 값이 있는 상태
console.log("userName2 판별: ", Boolean(userName2))


console.log("==비교연산자  결과: true/false")
const a = 10
const b = 20

console.log(a > b) // 관계(비교) 연산의 결과 true/false
document.write(a < b)

