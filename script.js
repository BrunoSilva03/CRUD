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
}


function confirmar() {
    alert('Você confirmou');
    nomeTarefa = document.getElementById('txttarefa').value;
    dataTarefa = document.getElementById('txtdata').value;
    horarioTarefa = document.getElementById('txthorario').value;

    if(nomeTarefa == '') {
        alert('Você precisa informar o nome da tarefa!')
    } else {

        
        textoInicial = document.getElementById('textoInicial');
        textoInicial.innerHTML = nomeTarefa;
        document.getElementById('textoInicial').hidden = false;
    }
}