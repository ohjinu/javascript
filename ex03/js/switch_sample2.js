let jumsu = prompt('점수 입력:', 0)
console.log(jumsu, jumsu/10, Math.floor(jumsu/10))

switch (Math.floor(jumsu/10)) {
    case 10:
    case 9:
        document.write(`${jumsu}점은 A학점`)
        break;
    case 8:
        document.write(`${jumsu}점은 B학점`)
        break;
    case 7:
        document.write(`${jumsu}점은 C학점`)
        break;
    case 6:
        document.write(`${jumsu}점은 D학점`)
        break;
    default:
        document.write(`${jumsu}점은 F학점`)
        break;
}




/*
// 변수 선언 키워드 : var, ES6(2015)이후 let, const

const myFruit = '사과'

switch (myFruit) {
    case '귤':
    case '사과':
        console.log('사과 혹은 귤 입니다.')
        break;
    case '배':
        console.log('배 입니다.')
        break;
    default:
        console.log('기타 과일')
}
*/