let id = "hong1234"
let pwd = "112233"

let user_id = prompt("아이디:", "")
let user_pwd = prompt("비밀번호:", "")

if (id == user_id) {
    if (pwd == user_pwd) {
        document.write(`${user_id}님 반갑습니다.`)
    } else {
        alert("비밀번호가 일지하지 않습니다.")
        location.reload();
    }
} else {
    alert("아이디가 일지하지 않습니다.")
    location.reload();
}