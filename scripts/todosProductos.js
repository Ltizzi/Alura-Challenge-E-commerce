import { renderNav } from "./nav.js";
import { productos } from "./objProductos.js";
import { crearProducto, productoService } from "./productos.js";

const lista = document.querySelector(".catalogo__lista");
const error = document.querySelector(".search-invalid");
const url = new URL(window.location);
const checkParams =
  url.searchParams.has("categoria") || url.searchParams.has("search");

const renderCatalogo = () => {
  renderNav("no");
  if (checkParams == false) {
    console.log(checkParams);
    poblarCatalogo();
  } else {
    if (checkParams && hasParam("categoria")) {
      poblarCatalogo("categoria");
    }
    if (checkParams && hasParam("search")) {
      poblarCatalogo("search");
    }
  }
  // renderFooter();
};

const hasParam = (param) => {
  return url.searchParams.has(param);
};

const poblarCatalogo = (params) => {
  if (!params) {
    productos.forEach((producto) => {
      lista.appendChild(crearProducto(producto.id));
    });
  }
  if (params == "categoria") {
    var prods = fetchData();
    prods.forEach((prod) => {
      lista.appendChild(crearProducto(prod.id));
    });
  }
  if (params == "search") {
    var prod = fetchData();
    lista.appendChild(crearProducto(prod.id));
  }
};

const fetchData = () => {
  const rubro = url.searchParams.get("categoria") || null;
  const search = url.searchParams.get("search") || null;
  if (rubro) {
    var productosByRubro = productoService.getAllProductsByType(rubro);
    if (productosByRubro) {
      return productosByRubro;
    } else {
      error.classList.remove("hide");
      setTimeout(error.classList.add("hide"), 3000);
    }
  }
  if (search) {
    productos.forEach((prod) => {
      if (search === producto.nombre) {
        producto = prod;
        return producto;
      } else {
        error.classList.remove("hide");
        setTimeout(error.classList.add("hide"), 3000);
      }
    });
  }
};

renderCatalogo();
