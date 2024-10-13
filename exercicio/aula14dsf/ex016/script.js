function contador () {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Preencha todos os dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        
        if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.innerText += `${c} \u{1F449}`
            }
        } else {
            for (var c = i; c >= f; c -= p) {
                res.innerText += `${c} \u{1F449}`
            }
        }
        res.innerText += `\u{1F3C1}`
    }
}