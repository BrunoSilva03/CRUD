let inputTarefa = document.getElementById('txttarefa');
let inputData = document.getElementById('txtdata');
let inputHorario = document.getElementById('txthorario');
let contador = 0;
let qtdTarefas = 0;
let validado = false;

inputTarefa.addEventListener('focus', focarTarefa);
inputData.addEventListener('focus', focarData);
inputHorario.addEventListener('focus', focarHorario);

function focarTarefa() {
    inputTarefa.style.backgroundColor = "white";
}

function focarData() {
    inputData.style.backgroundColor = 'white';
    inputData.style.color = 'black';
}

function focarHorario() {
    inputHorario.style.backgroundColor = 'white';
}


function abrirFormulario() {
    window.document.getElementById('button-mais').hidden = true;
    window.document.getElementById('formu').hidden = false;
}

function limparInputs() {
    window.document.getElementById('txttarefa').value = '';
    window.document.getElementById('txtdata').value = '';
    window.document.getElementById('txthorario').value = '';
}

function cancelar() {
    
    window.document.getElementById('formu').hidden = true;
    window.document.getElementById('button-mais').hidden = false;
    limparInputs();
    focarTarefa();
    focarData();
    focarHorario();

    verificaTextoInicial();
    
}




function confirmar() {

    validarCampos();
    if(validado) {

        window.document.getElementById('formu').hidden = true;
        adicionarTarefa();
        window.document.getElementById('button-mais').hidden = false;
        limparInputs();
        verificaTextoInicial();
        verificaFooter();
    }
}

function validarCampos() {
    nomeTarefa = document.getElementById('txttarefa').value;
    dataTarefa = document.getElementById('txtdata').value;
    horarioTarefa = document.getElementById('txthorario').value;

    if(nomeTarefa == '') {
        alert('Você precisa informar o nome da tarefa!');
        inputTarefa.style.backgroundColor = "red";
        
    } else if(dataTarefa == '') {
        alert('Você precisa informar a data da tarefa!');
        inputData.style.backgroundColor = 'red';
        inputData.style.color = 'white';
    } else if (horarioTarefa == '') {
        alert('Você precisa informar o horário da tarefa!');
        inputHorario.style.backgroundColor = 'red';
    } else {
        validado = true;
    }
}

function adicionarTarefa() {
    let resultado = document.getElementById('areaLista');
    let newTarefa
    qtdTarefas++;
    contador++;

    let dataTarefaPadraoBr = dataTarefa.split('-').reverse().join('/');

    newTarefa = `
    <section class="conteudo" id="${contador}">
        <div id="icone">
            <i  id="icone_${contador}" class="mdi mdi-circle-outline"  onclick="marcarTarefa(${contador})"></i>
        </div>
        <div class="tarefa-${contador}">
            <div class="titulo-tarefa-${contador}">
                <p>${nomeTarefa}</p>
            </div>
            <div class="data-tarefa-${contador}">
                <p>${dataTarefaPadraoBr}</p>
            </div>
            <div class="horario-tarefa-${contador}">
                <p>${horarioTarefa}</p>
            </div>
            <p class="botoes-tarefa">
                <input type="button" onclick="alterarTarefa(${contador})" value="Alterar" class="botao-tarefa-update">  <i class="mdi mdi-update"></i>
                <input type="button" onclick="excluirTarefa(${contador})" value="Excluir" class="botao-tarefa-delete">  <i class="mdi mdi-delete" onclick="excluirTarefa(${contador})"></i>
            </p>
        </div>
    </section>
    `

    resultado.innerHTML += newTarefa;

    

}


function alterarTarefa(idTarefa) {

}

function marcarTarefa(idTarefa) {
    var item = document.getElementById(idTarefa);
    var classe = item.getAttribute('class')

    if(classe == 'conteudo') {

        item.classList.remove('conteudo');
        item.classList.add('feito');
        
        var icone = document.getElementById('icone_' + idTarefa);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item);
    } else {
        item.classList.remove('feito');
        item.classList.add('conteudo');

        var icone = document.getElementById('icone_' + idTarefa);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');

    }
}

function excluirTarefa(idTarefa) {
    var tarefa = window.document.getElementById(idTarefa);
    tarefa.remove();
    qtdTarefas--;
    verificaTextoInicial();
    verificaFooter();
}



function verificaTextoInicial() {
    if(qtdTarefas > 0) {
        window.document.getElementById('textoInicial').hidden = true;
    } else {
        window.document.getElementById('textoInicial').hidden = false;
    }
}

function verificaFooter() {
    if(qtdTarefas >=3) {
        window.document.getElementById('footer').style.backgroundColor = "#42d60898";
    } else {
        window.document.getElementById('footer').style.backgroundColor = "#42d608";
    }
}