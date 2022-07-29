const inputs = document.querySelectorAll("input");

function validar(input) {
  console.log("asdasd");
  const tipoDeInput = input.dataset.tipo; //poner data-tipo
  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }

  //añadir cambio de estilos
  if (input.validity.valid) {
    input.classList.remove("form-input-invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.classList.add("form-input-invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarError(tipoDeInput, input);
  }
}

const tipoErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const mensajesDeError = {
  email: {
    valueMissing: "Este campo no puede estar vacío",
    typeMismatch: "Ingrese un correo válido",
  },
  password: {
    valueMissing: "Este campo no puede estar vacío",
    customError: "Contraseña inválida",
  },

  picture: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "Ingrese una URL válida",
  },
  categoria: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "Ingrese una categoría válida",
  },
  nombre: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "Ingrese un nombre válido (Máximo 20 caracteres)",
  },
  precio: {
    valueMissing: "Este campo no puede estar vacío",
    typeMismatch: "sólo puede ingresar numeros y punto decimal",
    patternMismatch: "Ingrese un preico válido (ej: 12.99)",
  },
  descripcion: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "Este campo no puede tener más de 150 caracteres",
  },

  name: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "El nombre debe tener un máximo de 40 caracteres",
  },
  mensaje: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "El mensaje debe tener un máximo de 120 caracteres",
  },
};

const validadores = {
  password: (input) => validarPassword(input),
};

const mostrarError = (tipoInput, input) => {
  let mensaje = "";
  tipoErrores.forEach((error) => {
    if (input.validity[error]) {
      console.log(error);
      console.log(input.validity[error]);
      console.log(mensajesDeError[tipoInput][error]);
      mensaje = mensajesDeError[tipoInput][error];
    }
  });
  return mensaje;
};

const validarPassword = (input) => {
  const password = "password123";
  let mensaje = "";
  if (password !== input.value) {
    mensaje = "Contraseña incorrecta";
  }
  input.setCustomValidity(mensaje);
};

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    validar(input.target);
  });
});
