let inputTarefa = document.getElementById('txttarefa');
let inputData = document.getElementById('txtdata');
let inputHorario = document.getElementById('txthorario');
let contador = 0;
let qtdTarefas = 0;

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
    window.document.getElementById('formu').hidden = true;
    adicionarTarefa();
    window.document.getElementById('button-mais').hidden = false;
    limparInputs();
    verificaTextoInicial();
    verificaFooter();
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
    }
}

function adicionarTarefa() {
    let resultado = document.getElementById('areaLista');
    let newTarefa
    qtdTarefas++;
    contador++;

    let dataTarefaPadraoBr = dataTarefa.split('-').reverse().join('/');

    newTarefa = `
    <section class="conteudo"
        <div id="icone">
            <i class="mdi mdi-circle-outline"></i>
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
        </div>
    </section>
    `

    resultado.innerHTML += newTarefa;

    

}

function verificaTextoInicial() {
    if(qtdTarefas > 0) {
        window.document.getElementById('textoInicial').hidden = true;
    } else {
        window.document.getElementById('textoInicial').hidden = false;
    }
}

function verificaFooter() {
    if(qtdTarefas >=4) {
        window.document.getElementById('footer').style.backgroundColor = "#42d60898";
    } else {
        window.document.getElementById('footer').style.backgroundColor = "#42d608";
    }
}