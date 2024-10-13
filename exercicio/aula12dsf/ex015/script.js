function trocarCor() {
    var sex = document.getElementsByName('sex');
    if (sex[0].checked) {
        document.body.style.backgroundColor = '#0d00ff';
    } else if (sex[1].checked) {
        document.body.style.backgroundColor = '#fe3a5b';
    }
}
    var sex = document.getElementsByName('sex');
    sex[0].addEventListener('change', trocarCor);
    sex[1].addEventListener('change', trocarCor);
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano || fano.value <= 1900) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            gênero = 'Homem'
            
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'modelo/bebem.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'modelo/jovemm.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'modelo/adultom.png')
            } else {
                img.setAttribute('src', 'modelo/idosom.png')
            }
        } else if (sex[1].checked) {
            gênero = 'Mulher'
            
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'modelo/bebef.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'modelo/jovemf.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'modelo/adultof.png')
            } else {
                img.setAttribute('src', 'modelo/veiasafada.png')
            }
        }

        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
