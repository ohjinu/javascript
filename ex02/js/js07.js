/* 체중 상태 알아보기:
철수의 신장: 180
철수의 체중: 74

적정 체중 = (본인 신장 - 100) * 0.9

적정체중 72인 경우
 * 결과 판별: 적정 체중 2초과
 */

let Height,
    Weight,
    Name
Name = prompt("이름:", "")
Height = prompt("신장:", "0")
Weight = prompt("체중:", "0")

let Result = (Height - 100) * 0.9

/* console.log(Name)
console.log("신장 = " + Height + "cm")
console.log("체중 = " +
 * Weight + "kg")
console.log("적정 체중 = " + Result + "kg")
 */

document.write(`당신의 이름은 + ${Name} + 입니다`)
document.write("<p>신장 : " + Height + "cm</p>")
document.write("<p>체중 : " + Weight + "kg</p>")
document.write("<p>적정 체중 : " + Result + "kg</p>")
// (조건식) ? 참인경우 : (조건식2) ? 참 : 거짓
console.log(
    (Weight > Result)
        ? (Weight - Result) + "초과"
        : (Weight < Result)
            ? (Result - Weight) + "미달"
            : "정상"
)