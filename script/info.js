// Escuchar el evento submit del formulario
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores de los campos del formulario
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let direccion = document.getElementById('direccion').value;
    let numero = document.getElementById('numero').value;
    let rut = document.getElementById('rut').value;
    let metodoPago = document.getElementById('metodo-pago').value;

    // Crear el texto para mostrar los datos ingresados
    let resultado = `
    Nombre: ${nombre}
    Apellido: ${apellido}
    Dirección: ${direccion}
    Número: ${numero}
    RUT: ${rut}
    Método de Pago: ${metodoPago}
    `;

    // Mostrar los datos en el elemento <pre id="resultado">
    document.getElementById('resultado').textContent = resultado;
});
