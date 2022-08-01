import { clientService } from "./controller.js";
import { productoService } from "./productos.js";

const submit = document.querySelector(".agregar__form-btn");
const header = document.querySelector(".edit__producto");

const fetchData = () => {
  const url = new URL(window.location);
  const id = parseInt(url.searchParams.get("id"));
  let producto = productoService.getProdById(id);

  return producto;
};

const renderEditor = () => {
  var prod = fetchData();
  header.innerHTML = `
  <h2>Editar Producto</h2>
  <ul>
  <li>Nombre:${prod.nombre}</li>
    <li>Id:${prod.id}</li>
    <li>Precio:${prod.precio}</li>
    <li>Categoria:${prod.categoria}</li>
    <li>Descripcion:${prod.descripcion}</li>
  </ul>
  `;
};

const editProduct = async (event) => {
  event.preventDefault();
  var producto = fetchData();
  var id = producto.id;
  let nombre = document.querySelector("#nombre").value;
  let precio = document.querySelector("#precio").value;
  let picture = document.querySelector("#picture").value;
  let about = document.querySelector("#descripcion").value;
  let categoria = document.querySelector("#categoria").value;
  try {
    await clientService.editarProducto(
      id,
      nombre || producto.nombre,
      precio || producto.precio,
      about || producto.descripcion,
      categoria || producto.categoria,
      picture || producto.picture
    );
    //window.location.href = "exito.html";
  } catch (error) {
    console.log(error);
  }

  nombre = "";
  precio = "";
  picture = "";
  about = "";
  categoria = "";
};

renderEditor();

submit.addEventListener("click", editProduct);
