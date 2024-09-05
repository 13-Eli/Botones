const txtNombre = document.getElementById('txtNombre');
const btnGuardar = document.getElementById('btnGuardar');
const alertValidaciones = document.getElementById('alertValidaciones');


document.addEventListener('DOMContentLoaded', (_event) => {
    btnGuardar.addEventListener('click', function(event) {
        event.preventDefault(); 

        
        if (alertValidaciones) {
            alertValidaciones.innerHTML = "";
            alertValidaciones.style.display = "none";
        }

        
        if (txtNombre.value.length < 3) {
            if (alertValidaciones) {
                alertValidaciones.innerHTML = "El nombre no es correcto.";
                alertValidaciones.style.display = "block";
            }
            return false;
        }

    
        localStorage.setItem("nombre", txtNombre.value);
        alert("Nombre guardado");
        window.location.href = 'welcome.html'; 
    });
});
