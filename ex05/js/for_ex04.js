// 다중 for문

for (i=1;i<=25; i++) {
    //console.log(`${i} `)
    document.write('*')
}
document.write("<hr>")

for (i=1;i<=5;i++) {
    for (j=1; j<=5; j++){
        document.write('*')
    }
    document.write("<br>")
}

document.write("<hr>")

for (i=1;i<=5;i++) {
    for (j=1; j<=i; j++){
        document.write('*')
    }
    document.write("<br>")
}