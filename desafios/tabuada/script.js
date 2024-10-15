function gerarTabuada() {
    let txtnumber = document.querySelector('#txtnumber')
    let select = document.querySelector('select')
    if(txtnumber.value == '') {
        alert('Adicione um número válido')
    } else {
        select.innerHTML = ''
        let number = Number(txtnumber.value)
        for(let multi = 0; multi <= 10; multi++) {
            let opção = document.createElement('option')
            opção.innerHTML = `${number} x ${multi} = ${number*multi}`
            select.appendChild(opção)
            }
        txtnumber.value = ''
    }
}