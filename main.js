
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
        if (evento.code == 'Tab') {
            listaDeTeclas[contador].classList.remove('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}


/*
function tocaSomClap () {
    document.querySelector('#som_tecla_clap').play();
}
*/

//WHILE
/* 
let contador = 0;

while (contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];
    //const idAudio = '#som_' + instrumento;
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    contador += 1;
}
*/