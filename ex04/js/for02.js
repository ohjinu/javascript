// 다중 for문 구구단 => 다중 for html에서 테이블 구조 만들기<table><tr><td> let num1 = 100
// console.log(num1) num1 += 100 console.log(num1)


let count = 0
let table_str = "<table border=1 width=200>"

for (let i = 1; i <= 5; i++) {
    table_str += "<tr>"

    for (let j = 1; j <= 5; j++) {
        // table_str += "<td>"
        // table_str += ++count
        // table_str += "</td>"
        table_str += `<td>${++count}</td>`
    }
    table_str += "</tr>"
}
table_str += "</table>"

document.write(table_str)
console.log(table_str)

/*
//단을 입력하면 단에 대한 곱을 출력
let dan = prompt("단 입력:", 2)
console.log(dan)
document.write(dan + "단<br>")
    for(let i=1; i<=9; i++) {
        document.write(`${dan}x${i}=${dan * i}<br>`)
    }
*/

/*
for (let i = 2; i <= 9; i++) {
    document.write(`<h3> ${i}단 </h3>`)
    document.write("<hr>")

    for (let j = 2; j <= 9; j++) {
        document.write(`${i}x${j}=${i * j}<br>`)
    }
}
*/

/*
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i, j)

    } // inner for
} // outer for
*/