let valores = [1,2,3,4,6,8,4,2]
// valores.sort()
// console.log(valores)

/* for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
let pos = valores.indexOf(4)
if(pos == -1){
    console.log('Seu valor não foi encontrado')
} else {
console.log(`O valor está na posição ${pos}`)
}