import { renderNav } from "./nav.js";
import { clientService } from "./controller.js";

const submit = document.querySelector(".agregar__form-btn");

const renderDom = () => {
  renderNav();
  // renderFooter();
};

const addProduct = async (event) => {
  event.preventDefault();
  let nombre = document.querySelector("#nombre").value;
  let precio = document.querySelector("#precio").value;
  let picture = document.querySelector("#picture").value;
  let about = document.querySelector("#descripcion").value;
  let categoria = document.querySelector("#categoria").value;
  try {
    await clientService.crearProducto(
      nombre,
      precio,
      about,
      categoria,
      picture
    );
    window.location.href = "exito.html";
  } catch (error) {
    console.log(error);
  }

  nombre = "";
  precio = "";
  picture = "";
  about = "";
  categoria = "";
};

renderDom();

submit.addEventListener("click", addProduct);
