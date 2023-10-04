// Practica07.js

// Función para crear el formulario y sus elementos
function crearFormulario() {
    // Crear el formulario
    const formulario = document.createElement("form");
    formulario.setAttribute("action", "");
    formulario.setAttribute("method", "post");
    formulario.setAttribute("id", "FORMULARIO");
  
    // Crear el primer fieldset
    const fieldset1 = document.createElement("fieldset");
    const legend1 = document.createElement("legend");
    legend1.textContent = "Información Personal";
    fieldset1.appendChild(legend1);
  
    // Crear elementos de entrada y etiquetas para el primer fieldset
    const labelNombre = document.createElement("label");
    labelNombre.setAttribute("for", "user");
    labelNombre.textContent = "Nombre:";
    const inputNombre = document.createElement("input");
    inputNombre.setAttribute("type", "text");
    inputNombre.setAttribute("id", "user");
    inputNombre.setAttribute("name", "user");
  
    const labelCorreo = document.createElement("label");
    labelCorreo.setAttribute("for", "correo");
    labelCorreo.textContent = "Correo Electronico:";
    const inputCorreo = document.createElement("input");
    inputCorreo.setAttribute("type", "text");
    inputCorreo.setAttribute("id", "correo");
    inputCorreo.setAttribute("name", "correo");
  
    fieldset1.appendChild(labelNombre);
    fieldset1.appendChild(inputNombre);
    fieldset1.appendChild(labelCorreo);
    fieldset1.appendChild(inputCorreo);
  
    // Crear el segundo fieldset
    const fieldset2 = document.createElement("fieldset");
    const legend2 = document.createElement("legend");
    legend2.textContent = "Información de contacto";
    fieldset2.appendChild(legend2);
  
    // Crear elementos de entrada y etiquetas para el segundo fieldset
    const labelDireccion = document.createElement("label");
    labelDireccion.setAttribute("for", "dirección");
    labelDireccion.textContent = "Dirección:";
    const inputDireccion = document.createElement("input");
    inputDireccion.setAttribute("type", "text");
    inputDireccion.setAttribute("id", "dirección");
    inputDireccion.setAttribute("name", "direccion");
  
    const labelCiudad = document.createElement("label");
    labelCiudad.setAttribute("for", "ciudad");
    labelCiudad.textContent = "Ciudad:";
    const inputCiudad = document.createElement("input");
    inputCiudad.setAttribute("type", "text");
    inputCiudad.setAttribute("id", "ciudad");
    inputCiudad.setAttribute("name", "ciudad");
  
    const inputSubmit = document.createElement("input");
    inputSubmit.setAttribute("type", "submit");
    inputSubmit.setAttribute("value", "Enviar");
  
    fieldset2.appendChild(labelDireccion);
    fieldset2.appendChild(inputDireccion);
    fieldset2.appendChild(labelCiudad);
    fieldset2.appendChild(inputCiudad);
    fieldset2.appendChild(inputSubmit);
  
    // Agregar los fieldsets al formulario
    formulario.appendChild(fieldset1);
    formulario.appendChild(fieldset2);
  
    return formulario;
  }
  
  // Función para inicializar la aplicación
  function iniciarApp() {
    // Obtener el elemento body
    const body = document.body;
  
    // Crear un título h1
    const titulo = document.createElement("h1");
    titulo.textContent = "Inicio de sesión";
  
    // Crear el formulario
    const formulario = crearFormulario();
  
    // Agregar el título y el formulario al body
    body.appendChild(titulo);
    body.appendChild(formulario);
  }
  
  // Llamar a la función de inicio cuando se cargue la página
  window.addEventListener("load", iniciarApp);