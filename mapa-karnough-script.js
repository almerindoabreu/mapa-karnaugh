/* ***** variaveis ***** */

var qtdColunas = 4;
var qtdLinhas = 16;
var tabelaVerdade = [];
var quantidadeVariaveis = qtdColunas;

/* ***** main ***** */

indexarTabelaVerdade();

/* ***** eventos ***** */

$(document).on('click', '.btn-change-bin', function() {
    var id = this.id;
    var result = id.split('-')
    result = result[3];
    
    var text = document.getElementById("truth-table-4" + result).textContent;

    /** verificar e trocar o resultado da tabela */
    if (text === "1"){
        text = 0;
    }else{
        text = 1;
    }
    document.getElementById("truth-table-4" + result).innerHTML = text + '<button id="' + id +'" class="btn-change-bin"><i class="ion-arrow-swap"></i></button>';
 });


document.querySelector('.btn-add-input').addEventListener('click', function() {
    if(quantidadeVariaveis < 4) {
        quantidadeVariaveis +=1;
    }

    configurarTabelaVerdade(quantidadeVariaveis);
});

document.querySelector('.btn-subtract-input').addEventListener('click', function() {
    if(quantidadeVariaveis > 2) {
        quantidadeVariaveis -=1;
    }

    configurarTabelaVerdade(quantidadeVariaveis);
});

/* ***** funções auxiliares ***** */

function configurarTabelaVerdade(quantidadeVariaveis){
    tabelaVerdadeAllUp();
    if (quantidadeVariaveis === 2){
        for (var i = 0; i <= qtdLinhas; i++){
            var link = document.getElementById('truth-table-'+ tabelaVerdade[2][i]);
            link.style.visibility = 'hidden';
            var link = document.getElementById('truth-table-'+ tabelaVerdade[3][i]);
            link.style.visibility = 'hidden';
            tabelaVerdadeDesabilitarLinhas(quantidadeVariaveis);
        }
    }else if(quantidadeVariaveis === 3) {
        for (var i = 0; i <= qtdLinhas; i++){
            var link = document.getElementById('truth-table-'+ tabelaVerdade[3][i]);
            link.style.visibility = 'hidden';

            tabelaVerdadeDesabilitarLinhas(quantidadeVariaveis);
        }
    }
}

function tabelaVerdadeAllUp(){
    for (var x = 0; x <= qtdColunas; x++){
        for (var y = 0; y <= qtdLinhas; y++){
            var link = document.getElementById('truth-table-'+ tabelaVerdade[x][y]);
            link.style.visibility = 'visible';
        }
    }
}

function tabelaVerdadeDesabilitarLinhas(quantidadeVariaveis){
    for (var x = 0; x <= qtdColunas; x++){
        for (var y = 16; y > Math.pow(2, quantidadeVariaveis); y--){
            var link = document.getElementById('truth-table-'+ tabelaVerdade[x][y]);
            link.style.visibility = 'hidden';
        }
    }
}

function indexarTabelaVerdade(){
    for (var y = 0; y <= qtdColunas; y++){
        var coluna = [];
        for(var x = 0; x <= qtdLinhas; x++){
            coluna[x] = ""+ y + "" + x;
        }
        tabelaVerdade[y] = coluna;
    }
}

