let num = [5,8,4,6]
num.sort()
num.push(1)
console.log(num)
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O nosso primeiro valor do vetor é ${num[0]}`)

for(var pos = 0; pos<num.length; pos++) {
    console.log(num[pos])
}