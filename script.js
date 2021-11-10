var num = document.getElementById('numtxt');
var valores = [];
var lista = document.getElementById('selentr');
var res = document.getElementById('res');  
var maiorNum = 0;
var menorNum = 100;
var soma = 0

function adicionar(){    
    //Testa se é um número válido(true) e se está na lista(false)
    if(eNum(num.value) && !naLista(num.value, valores)){
    

    var item = document.createElement('option'); 
    valores.push(Number(num.value))
    item.text = `O número ${Number(num.value)} foi adicionado.`;
    lista.appendChild(item);
   
    
    if( Number(num.value) > maiorNum){
        maiorNum = Number(num.value);
    }
    if(Number(num.value) < menorNum){
        menorNum = Number(num.value);
    }
    soma += Number(num.value);
    
    } else {

       window.alert('Valor inválido ou já encontrado na lista');

    }
}

function eNum(n){
    if( Number(n) > 0 && Number(n) < 100){
        return true;
    } else{
        return false;
    }
}

function naLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    } else{
        return false;
    }

}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!');
    } else{
        res.innerHTML = `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maiorNum}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menorNum}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${soma/valores.length}.</p>`
        res.innerHTML += `<p>Os valores em ordem crescente: ${valores.sort()}.</p>`
    }
}
