var num = document.getElementById('txtn')
var seltab = document.getElementById('seltab')
function tabuada() {
    if (num.value.length == 0) {
        alert('Digite algo!')
    } else {
        var n = Number(num.value)
        seltab.innerText = ''
        for (var c = 1;c<=10;c++) {
        var option = document.createElement('option')
        seltab.appendChild(option)
        option.innerText = `${n} x ${c} = ${n*c}`
        }
    }
}