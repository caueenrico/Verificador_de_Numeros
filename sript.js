var num = document.getElementById('txtnum')
var lista = document.getElementById('flista')
var clear = document.getElementById('limpar')
var res = document.getElementById('res')
var valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && ! inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('numero invalido ou Já adicionado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0 ){
        window.alert('Adicione valores')
    }else{
        var txt = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0 
        var media = 0 
        for (var pos in valores){
            soma += valores[pos]
            if(valores [pos]>maior){
                maior = valores[pos]
            }else if (valores[pos]<menor){
                menor = valores[pos]
            }
        }
        
        res.innerHTML += `<p>Ao todo temos ${txt} número(s) cadastrado(s)<p>`
        res.innerHTML += `<p>O maior número é ${maior}<p>`
        res.innerHTML += `<p>O menor número é ${menor}<p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}<p>`
        res.innerHTML += `<p>A média de todos os valores é ${soma / txt}<p>`
        res.innerHTML +=''
    }

}