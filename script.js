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