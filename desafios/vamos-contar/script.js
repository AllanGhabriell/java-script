function contar() {
    let inicio = document.querySelector('#inicio')
    let fim = document.querySelector('#fim')
    let passo = document.querySelector('#passo')
    let res = document.querySelector('#res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('tudo errado')
    } else {
        res.innerHTML = ''
        let f = Number(fim.value)
        let p = Number(passo.value)
        for(let i = Number(inicio.value);i<f;i += p) {
            let conta = document.createElement('span')
            res.appendChild(conta)
            conta.innerHTML = `${i}👉`
            
        }
        res.innerText += `\u{1F3C1}`
    }
}