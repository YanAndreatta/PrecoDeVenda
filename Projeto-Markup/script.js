let numF = document.querySelector('input#txtN');
let numV = document.querySelector('input#txtN2');
let fat = document.querySelector('input#txtF');
let precoM = document.querySelector('input#txtN3');
let lucro = document.querySelector('input#txtN4');
let listaDF = document.getElementById('listaDF');
let listaDV = document.querySelector('select#listaDV');
let res1 = document.querySelector('div#res1');
let res2 = document.querySelector('div#res2');
let res3 = document.querySelector('div#res3');
let valoresF = [];
let valoresV = [];

function isNumero(n) { // verifica se o valor digitado no input é um número aceito
    if (Number(n) > 0) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {  // verifica se o valor está dentro do Array
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function listarVetores(vet, list, num) {
    if (isNumero(num.value)) {
        vet.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Dispesa ${num.value}`;
        list.appendChild(item);
    } else {
        window.alert('Digite um valor válido');
    }
    num.value = '';
    num.focus();
}

function adicionarF() {
    if (isNumero(numF.value)) {
        valoresF.push(Number(numF.value));
        let item = document.createElement('option');
        item.text = `Dispesa R$${numF.value} adicionado`;
        listaDF.appendChild(item);
    } else {
        window.alert('Digite um valor válido');
    }

    numF.value = '';
    numF.focus();
}

function somarVet(vet1, vet2) {   // Soma os valores dos vetores
    if (vet1.length === 0) {
        return window.alert('Adicione pelo menos uma despesa fixa');
    } else if (vet2.length === 0) {
        return window.alert('Adicione pelo menos uma despesa variável');
    } else {
        let somaVt1 = 0;
        for (let pos in vet1) {
            somaVt1 += vet1[pos];
        }
        let somaVt2 = 0
        for (let pos in vet2) {
            somaVt2 += vet2[pos];
        }
        let somaTot = (somaVt1 / fat.value) * 100 + somaVt2;
        res1.innerHTML = `${(somaVt1 / fat.value) * 100}%`;
        res2.innerHTML = `${somaVt2}%`;
        return somaTot;
    }
}

function adicionarF() {
    listarVetores(valoresF, listaDF, numF);
}

function adicionarV() {
    listarVetores(valoresV, listaDV, numV);
}

function calcular() {
    let num = somarVet(valoresF, valoresV);
    if (num.length === 0) {
        res3.innerHTML = '';
    } else {
        let precoTot = precoM.value / (1 - ((num + Number(lucro.value)) / 100));
        res3.innerHTML = `${precoTot.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
    }
}
