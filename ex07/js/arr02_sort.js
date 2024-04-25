const arr = [2, 1, 3, 10]
const arr2 = arr.concat() // 복사

const arr3 = [5, 2, 1]

console.log(arr)
console.log(arr2)

arr3.sort() // 오름차순
console.log(arr3)
// arr3.reverse() // 내림차순
// console.log(arr3)

// 숫자일경우
arr.sort (function(a, b) {
    return a - b
})
arr2.sort(function (a, b) {
    return b - a
})

//문자일 경우
const arr_str = ["김길순", "홍길동", "여우"]
arr_str.sort() // 오름차순
console.log(arr_str)

// console.log(arr_str)

// arr_str.sort (function(a, b) {  // 내림차순
//     if (a>b) return -1
//     if (a<b) return 1
//     if (a=b) return 0
// })


// 데이터
const userDataList = [
    {id:2, name:'곰'},
    {id:10, name:'여우'},
    {id:4, name:'사자'},
    {id:29, name:'기린'},
    {id:101, name:'호랑이'}
]

// 데이터 표시
function updateList() {
    let ul_html = ``

    for (const data of userDataList) {
        console.log(data)

        ul_html += `<li>${data.id} : ${data.name}</li>`
    }

    document.querySelector('.result').innerHTML = ul_html
}

// 오름차순 정렬
function sortByAsc(){
    userDataList.sort((a, b) => a.id - b.id)
    // for (const data of userDataList) {
    //     console.log(data)
    // }
    updateList()
}
// 내림차순 정렬
function sortByDesc(){
    userDataList.sort((a, b) => b.id - a.id)
    // for (const data of userDataList) {
    //     console.log(data)
    // }
    updateList()
}

// 정렬 버튼 이벤트 등록
document.querySelector('.asc').addEventListener('click', () => {
    sortByAsc()
})
document.querySelector('.desc').addEventListener('click', () => {
    sortByDesc()
})


console.log("--sort(), reverse(): 유니코드 기준으로 정렬")