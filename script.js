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
    limparInputs();
    window.document.getElementById('button-mais').hidden = true;
    window.document.getElementById('formu-update').hidden = false;
    inputTarefaUpdate.focus();
}

function fecharFormularioUpdate() {
    window.document.getElementById('formu-update').hidden = true;
    window.document.getElementById('button-mais').hidden = false;
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

function alterarTarefa(idTarefa) {
    var itemNovaTarefa = document.getElementById(idTarefa);
    formPraUpdate = true;
    idUpdate = idTarefa;
    abrirFormularioPraUpdate();
    //confirmarPraUpdate(idTarefa);

}

function darUpdate(idUpdate, txttarefa, txtdata, txthorario) {

    excluirTarefa(idUpdate);
    qtdTarefas++;
    verificaTextoInicial();
    adicionarTarefaUpdate(idUpdate, txttarefa, txtdata, txthorario);

}

function confirmarPraUpdate() {
    fecharFormularioUpdate();

   

    var txttarefa = document.getElementById('txttarefa-update').value;
    var txtdata = document.getElementById('txtdata-update').value;
    var txthorario = document.getElementById('txthorario-update').value;
    
    //CAPTURANDO O QUE ESTÁ ESCRITO DENTRO DOS PARÁGRAFOS !IMPORTANTE!!!!!
    var tarefinha = document.querySelector(`#nome_${idUpdate}`).innerHTML;
    var datinha = document.querySelector(`#data_${idUpdate}`).innerHTML;
    var horarinho = document.querySelector(`#horario_${idUpdate}`).innerHTML;

    if (txttarefa == '' && (txtdata == '' || txtdata == null)  && txthorario == '') {
        cancelar();
    } else {
        
        
        let antigaTarefa = tarefinha;
        let antigaData = datinha;
        let antigoHorario = horarinho;
        validarCamposPraUpdate(txttarefa, txtdata, txthorario, idUpdate, antigaTarefa, antigaData, antigoHorario);
        
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


function validarCamposPraUpdate(txttarefa, txtdata, txthorario, idUpdate, antigaTarefa, antigaData, antigoHorario) {
    //Se tem tarefa
    if(txttarefa != '') {

        //Não tem data nem horário
        if(txtdata == '' && txthorario == '') {
            txtdata = antigaData;
            txthorario = antigoHorario;

            //tem data mas não tem horário
        } else if(txtdata != '' && txthorario == '') {
            txthorario = antigoHorario;


            //Não tem data, mas tem horário
        }else if(txtdata == '' && txthorario != '') {
            txtdata = antigaData;
        }

        //Não tem tarefa mas tem data
    } else if(txtdata != '') {
        txttarefa = antigaTarefa;

        //Não tem horário
        if(txthorario == '') {
            txthorario = antigoHorario;
        }
        //Não tem tarefa nem data mas tem horário
    } else if(txthorario != '') {
        txttarefa = antigaTarefa;
        txtdata = antigaData;
    }

    darUpdate(idUpdate, txttarefa, txtdata, txthorario);


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


function adicionarTarefaUpdate(idUpdate, txttarefa, txtdata, txthorario) {
    /*
    var tarefaUpdate = document.getElementById('txttarefa').value;
    var dataUpdate = document.getElementById('txtdata').value;
    var horarioUpdate = document.getElementById('txthorario').value;
    */

    var dataUptdPadraoBr = txtdata.split('-').reverse().join('/');

    let resultadoUpdate = document.getElementById('areaLista');
    let novaTarefaUpdate;

    novaTarefaUpdate = `
    <section class="conteudo" id="${idUpdate}">
        <div id="icone">
            <i  id="icone_${idUpdate}" class="mdi mdi-circle-outline"  onclick="marcarTarefa(${idUpdate})"></i>
        </div>
        <div class="tarefa-${idUpdate}">
            <div class="titulo-tarefa-${idUpdate}">
                <p id="nome_${idUpdate}">${txttarefa}</p>
            </div>
            <div class="data-tarefa-${idUpdate}">
                <p id="data_${idUpdate}">${dataUptdPadraoBr}</p>
            </div>
            <div class="horario-tarefa-${idUpdate}">
                <p id="horario_${idUpdate}">${txthorario}</p>
            </div>
            <p class="botoes-tarefa">
                <input type="button" onclick="alterarTarefa(${idUpdate})" value="Alterar" class="botao-tarefa-update">  <i class="mdi mdi-update"></i>
                <input type="button" onclick="excluirTarefa(${idUpdate})" value="Excluir" class="botao-tarefa-delete">  <i class="mdi mdi-delete" onclick="excluirTarefa(${idUpdate})"></i>
            </p>
        </div>
    </section>
    `

    resultadoUpdate.innerHTML += novaTarefaUpdate;
    alert('Tarefa atualizada com Sucesso!!!');
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