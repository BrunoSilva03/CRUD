let inputTarefa = document.getElementById('txttarefa');
let inputData = document.getElementById('txtdata');
let inputHorario = document.getElementById('txthorario');

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
    window.document.getElementById('textoInicial').hidden = true;
    window.document.getElementById('button-mais').hidden = true;
    window.document.getElementById('formu').hidden = false;
}


function cancelar() {
    
    window.document.getElementById('formu').hidden = true;
    window.document.getElementById('button-mais').hidden = false;
    window.document.getElementById('txttarefa').value = '';
    window.document.getElementById('txtdata').value = '';
    window.document.getElementById('txthorario').value = '';
    focarTarefa();
    focarData();
    focarHorario();
}


function confirmar() {
    validarCampos();
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