
const welcomeMessage = document.getElementById('welcomeMessage');
const btnEliminar = document.getElementById('btnEliminar');


document.addEventListener('DOMContentLoaded', (_event) => {
    
    const nombre = localStorage.getItem('nombre');

    if (nombre) {
        welcomeMessage.textContent = `Hola ${nombre} bienvenido/a de nuevo`;
    } else {
        welcomeMessage.textContent = 'Hola, por favor ve a index y coloca tu nombre';
    }

    
    btnEliminar.addEventListener('click', function() {
        localStorage.removeItem('nombre');
        alert("Nombre eliminado");
        window.location.reload(); 
    });
});
