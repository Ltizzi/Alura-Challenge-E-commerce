import { renderNav } from "./nav.js";
import { productos } from "./objProductos.js";
import { crearProducto, productoService } from "./productos.js";

const lista = document.querySelector(".catalogo__lista");
const errorMsg = document.querySelector("#search-invalid");

const navSearch = document.querySelector(".nav-search");
const btnNavSearch = document.querySelector(".nav-search-btn");

const url = new URL(window.location);
const checkParams =
  url.searchParams.has("categoria") || url.searchParams.has("search");

const renderCatalogo = () => {
  if (!checkParams) {
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
    mostrarTodos();
  }
  if (params == "categoria") {
    var prods = fetchData();
    prods.forEach((prod) => {
      lista.appendChild(crearProducto(prod.id));
    });
  }
  if (params == "search") {
    fetchData();
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
      mostrarError();
      setTimeout(ocultarError, 3000);
    }
  }
  if (search) {
    var target = search.toString().toLowerCase();
    buscarItems(target);
  }
};

const mostrarTodos = () => {
  productos.forEach((producto) => {
    lista.appendChild(crearProducto(producto.id));
  });
};

const mostrarError = () => {
  errorMsg.classList.remove("hide");
};

const ocultarError = () => {
  errorMsg.classList.add("hide");
  productos.forEach((producto) => {
    lista.appendChild(crearProducto(producto.id));
  });
};

const buscarItems = (target) => {
  var matches = 0;
  productos.forEach((prod) => {
    var nombre = prod.nombre.toString().toLowerCase();
    var categoria = prod.categoria.toString().toLowerCase();
    var about = prod.descripcion.toString().toLowerCase();
    if (
      nombre.includes(target) ||
      categoria.includes(target) ||
      about.includes(target)
    ) {
      lista.appendChild(crearProducto(prod.id));
      matches++;
    }
  });
  if (matches == 0) {
    mostrarError();
    setTimeout(ocultarError, 3000);
  }
};

const buscarItemsLight = (target) => {
  var matches = 0;
  productos.forEach((prod) => {
    var nombre = prod.nombre.toString().toLowerCase();
    var categoria = prod.categoria.toString().toLowerCase();
    var about = prod.descripcion.toString().toLowerCase();
    if (
      nombre.includes(target) ||
      categoria.includes(target) ||
      about.includes(target)
    ) {
      lista.appendChild(crearProducto(prod.id));
      matches++;
    }
  });
  if (matches == 0) {
    mostrarError();
  }
};

const eventHandler = (event) => {
  errorMsg.classList.add("hide");
  if (event.key === "Enter") {
    lista.innerHTML = "";
    event.preventDefault();
    let busqueda = event.target.value;
    buscarItemsLight(busqueda);
  }
};

navSearch.addEventListener("keypress", (event) => eventHandler(event));

btnNavSearch.addEventListener("click", (event) => eventHandler(event));

renderCatalogo();
