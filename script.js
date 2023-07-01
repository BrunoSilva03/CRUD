let inputTarefa = document.getElementById('txttarefa');
let inputData = document.getElementById('txtdata');
let inputHorario = document.getElementById('txthorario');
let inputTarefaUpdate = document.getElementById('txttarefa-update');
let inputDataUpdate = document.getElementById('txtdata-update');
let inputHorarioUpdate = document.getElementById('txthorario-update');
let btnConfirmar = document.getElementById('button-confirmar');
let btnConfirmarUpdate = document.getElementById('button-confirmar-update');
let contador = 0;
let qtdTarefas = 0;
let validado = false;
let formPraUpdate = false;
let idUpdate = null;
/*
var txttarefa = window.document.getElementById('txttarefa').value;
var txtdata = window.document.getElementById('txtdata').value;
var txthorario = window.document.getElementById('txthorario').value;
*/

//FORMULÁRIO DE INSERIR TAREFA
inputTarefa.addEventListener('focus', focarTarefa);
inputTarefa.addEventListener('keyup', function(event) {
    //Se teclou ENTER (13)
    if(event.keyCode === 13) {
        event.preventDefault();
        inputData.focus();
    }
})

//FORMULÁRIO PARA ALTERAR TAREFA;
inputTarefaUpdate.addEventListener('focus', focarTarefaUpdate);
inputTarefaUpdate.addEventListener('keyup', function(event) {
    if(event.keyCode === 13) {
        event.preventDefault();
        inputDataUpdate.focus();
    }
})

inputData.addEventListener('focus', focarData);
inputData.addEventListener('keyup', function(event) {
    if(event.keyCode === 13) {
        event.preventDefault();
        inputHorario.focus();
    }
})

inputDataUpdate.addEventListener('focus', focarDataUpdate);
inputDataUpdate.addEventListener('keyup', function(event) {
    if(event.keyCode === 13) {
        event.preventDefault();
        inputHorarioUpdate.focus();
    }
})

inputHorario.addEventListener('focus', focarHorario);
inputHorario.addEventListener('keyup', function(event) {
    if(event.keyCode === 13) {
        event.preventDefault();
        btnConfirmar.click();
    }
})


inputHorarioUpdate.addEventListener('focus', focarHorarioUpdate);
inputHorarioUpdate.addEventListener('keyup', function(event) {
    if(event.keyCode === 13) {
        event.preventDefault();
        btnConfirmarUpdate.click();
    }
})


function focarTarefa() {
    inputTarefa.style.backgroundColor = "white";
}

function focarTarefaUpdate() {
    inputTarefaUpdate.style.backgroundColor = 'white';
}

function focarData() {
    inputData.style.backgroundColor = 'white';
    inputData.style.color = 'black';
}

function focarDataUpdate() {
    inputDataUpdate.style.backgroundColor = 'white';
    inputDataUpdate.style.color = 'black';
}

function focarHorario() {
    inputHorario.style.backgroundColor = 'white';
}

function focarHorarioUpdate() {
    inputHorarioUpdate.style.backgroundColor = 'white';
}


function abrirFormulario() {
    window.document.getElementById('button-mais').hidden = true;
    window.document.getElementById('formu').hidden = false;
    inputTarefa.focus();
}

function abrirFormularioPraUpdate() {
    window.document.getElementById('button-mais').hidden = true;
    window.document.getElementById('formu-update').hidden = false;
    inputTarefaUpdate.focus();
}

function limparInputs() {
    window.document.getElementById('txttarefa').value = '';
    window.document.getElementById('txtdata').value = '';
    window.document.getElementById('txthorario').value = '';
    window.document.getElementById('txttarefa-update').value = '';
    window.document.getElementById('txtdata-update').value = '';
    window.document.getElementById('txthorario-update').value = '';
}


function cancelar() {

    
    window.document.getElementById('formu').hidden = true;
    window.document.getElementById('formu-update').hidden = true;
    window.document.getElementById('button-mais').hidden = false;
    limparInputs();
    focarTarefa();
    focarTarefaUpdate();
    focarData();
    focarDataUpdate();
    focarHorario();
    focarHorarioUpdate();

    verificaTextoInicial();

}




function confirmar() {

        validarCampos();
        if (validado) {

            window.document.getElementById('formu').hidden = true;

            adicionarTarefa();
            window.document.getElementById('button-mais').hidden = false;
            limparInputs();
            verificaTextoInicial();
            verificaFooter();
        }

}

function confirmarPraUpdate() {
    
    var txttarefa = document.getElementById('txttarefa-update').value;
    var txtdata = document.getElementById('txtdata-update').value;
    var txthorario = document.getElementById('txthorario-update').value;
    
    
    if (txttarefa == '' && (txtdata == '' || txtdata == null)  && txthorario == '') {
        cancelar();
    } else {
        validarCamposPraUpdate(txttarefa, txtdata, txthorario, idUpdate);
        darUpdate(idUpdate, txttarefa, txtdata, txthorario);
    }
}

function validarCampos() {
    nomeTarefa = document.getElementById('txttarefa').value;
    dataTarefa = document.getElementById('txtdata').value;
    horarioTarefa = document.getElementById('txthorario').value;

    if (nomeTarefa == '') {
        alert('Você precisa informar o nome da tarefa!');
        inputTarefa.style.backgroundColor = "red";

    } else if (dataTarefa == '') {
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

//Revisar
function validarCamposPraUpdate(txttarefa, txtdata, txthorario, idTarefa) {
alert('entrou no validar campos pra update');
    //Se tem tarefa
    if(txttarefa != '') {

        //Não tem data nem horário
        if(txtdata == '' && txthorario == '') {
            txtdata = `data_${idTarefa}`;
            txthorario = `horario_${idTarefa}`;

            //tem data mas não tem horário
        } else if(txtdata != '' && txthorario == '') {
            txthorario = `horario_${idTarefa}`;


            //Não tem data, mas tem horário
        }else if(txtdata == '' && txthorario != '') {
            txtdata = `data_${idTarefa}`;
        }

        //Não tem tarefa mas tem data
    } else if(txtdata != '') {
        txttarefa = `nome_${idTarefa}`;

        //Não tem horário
        if(txthorario == '') {
            txthorario = `horario_${idTarefa}`
        }
    }

    //Mas uma vez
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
                <p id="nome_${contador}">${nomeTarefa}</p>
            </div>
            <div class="data-tarefa-${contador}">
                <p id="data_${contador}">${dataTarefaPadraoBr}</p>
            </div>
            <div class="horario-tarefa-${contador}">
                <p id="horario_${contador}">${horarioTarefa}</p>
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


function adicionarTarefaUpdate(idTarefa) {
    var tarefaUpdate = document.getElementById('txttarefa').value;
    var dataUpdate = document.getElementById('txtdata').value;
    var horarioUpdate = document.getElementById('txthorario').value;

    var dataUptdPadraoBr = dataUpdate.split('-').reverse().join('/');

    let resultadoUpdate = document.getElementById('areaLista');
    let novaTarefaUpdate;
    qtdTarefas++;

    novaTarefaUpdate = `
    <section class="conteudo" id="${idTarefa}">
        <div id="icone">
            <i  id="icone_${idTarefa}" class="mdi mdi-circle-outline"  onclick="marcarTarefa(${idTarefa})"></i>
        </div>
        <div class="tarefa-${idTarefa}">
            <div class="titulo-tarefa-${idTarefa}">
                <p>${tarefaUpdate}</p>
            </div>
            <div class="data-tarefa-${idTarefa}">
                <p>${dataUptdPadraoBr}</p>
            </div>
            <div class="horario-tarefa-${idTarefa}">
                <p>${horarioUpdate}</p>
            </div>
            <p class="botoes-tarefa">
                <input type="button" onclick="alterarTarefa(${idTarefa})" value="Alterar" class="botao-tarefa-update">  <i class="mdi mdi-update"></i>
                <input type="button" onclick="excluirTarefa(${idTarefa})" value="Excluir" class="botao-tarefa-delete">  <i class="mdi mdi-delete" onclick="excluirTarefa(${idTarefa})"></i>
            </p>
        </div>
    </section>
    `

    resultadoUpdate.innerHTML += novaTarefaUpdate;
}

function alterarTarefa(idTarefa) {
    var itemNovaTarefa = document.getElementById(idTarefa);
    formPraUpdate = true;
    idUpdate = idTarefa;
    abrirFormularioPraUpdate();
    //confirmarPraUpdate(idTarefa);

}

function darUpdate(idTarefa) {

    excluirTarefa(idTarefa);
    //adicionarTarefaUpdate(idTarefa);

}

function marcarTarefa(idTarefa) {
    var item = document.getElementById(idTarefa);
    var icone = document.getElementById('icone_' + idTarefa);
    var classe = item.getAttribute('class');

    if (classe == 'conteudo') {

        item.classList.remove('conteudo');
        item.classList.add('feito');

        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item);
    } else {
        item.classList.remove('feito');
        item.classList.add('conteudo');

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
    if (qtdTarefas > 0) {
        window.document.getElementById('textoInicial').hidden = true;
    } else {
        window.document.getElementById('textoInicial').hidden = false;
    }
}

function verificaFooter() {
    if (qtdTarefas >= 3) {
        window.document.getElementById('footer').style.backgroundColor = "#42d60898";
    } else {
        window.document.getElementById('footer').style.backgroundColor = "#42d608";
    }
}