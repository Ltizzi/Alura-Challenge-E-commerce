import { renderNav } from "./nav.js";
import { renderFooter } from "./footer.js";
import { productos } from "./objProductos.js";
import { crearProducto } from "./productos.js";

const lista = document.querySelector(".catalogo__lista");

console.log(productos);

const renderCatalogo = () => {
  renderNav("no");
  poblarCatalogo();
  renderFooter();
};

const poblarCatalogo = () => {
  productos.forEach((producto) => {
    lista.appendChild(crearProducto(producto.id));
  });
};

renderCatalogo();
