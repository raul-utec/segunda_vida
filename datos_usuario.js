document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('user-data-form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const nombre = document.getElementById('nombre').value;
      const apellidos = document.getElementById('apellidos').value;
      const celular = document.getElementById('celular').value;
      const dni = document.getElementById('dni').value;
      const direccion = document.getElementById('direccion').value;
  
      // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos al servidor o almacenándolos localmente
      console.log({
        nombre,
        apellidos,
        celular,
        dni,
        direccion
      });
  
      alert('Datos enviados correctamente');
    });
  });
  