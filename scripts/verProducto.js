import { renderFooter } from "./footer.js";
import { renderNav } from "./nav.js";
import { productos } from "./objProductos.js";
import { productoService } from "./productos.js";

const fetchData = () => {
  const url = new URL(window.location);
  const id = parseInt(url.searchParams.get("id"));
  let producto = productoService.getProdById(id);

  return producto;
};

const renderProductoDetalle = () => {
  const prodDom = document.querySelector(".producto__detalle");
  let producto = fetchData();
  prodDom.innerHTML = `   <img src="${producto.picture}" alt="Imagen del producto" class="producto__detale-pic"/>
  <div class="producto__detalle-txt">
    <h2 class="producto__detale-title">${producto.nombre}</h2>
    <p class="producto__detalle-precio">$${producto.precio}</p>
    <p class="producto__detalle-parrafo">${producto.descripcion}</p>
  </div>`;
};

const renderRelacionados = () => {
  const prodSimil = document.querySelector("#productos_simil");
  let producto = fetchData();
  prodSimil.appendChild(productoService.generarRowTemplate(producto.categoria));
};

const renderVerProducto = () => {
  const titulo = document.querySelector(".title");
  let prod = fetchData();
  titulo.innerHTML = `AluraGeek |  ${prod.nombre}`;
  renderNav();
  renderProductoDetalle();
  renderRelacionados();
  renderFooter();
};

renderVerProducto();

// const getProdById = (id) => {
//   var prod = {};
//   productos.forEach((producto) => {
//     if (producto.id == id) {
//       prod = producto;
//     }
//   });

//   return prod;
// };

// const getProductosByType = (rubro) => {
//   let productosByRubro = [];
//   productos.forEach((producto) => {
//     if (producto.categoria === rubro) {
//       productosByRubro.push(producto);
//     }
//   });
//   return productosByRubro;
// };

// const crearProducto = (id) => {
//   const objProd = getProdById(id);
//   const producto = document.createElement("div");
//   producto.classList.add("producto");

//   producto.innerHTML = `<div class="producto__foto">
//     <img src="${objProd.picture}" alt="imagen del producto ${objProd.nombre}" class="producto__foto-pic" />
//   </div>
//   <div class="producto__data" id="${objProd.id}">
//     <p class="producto__nombre">${objProd.nombre}</p>
//     <p class="producto__precio">$${objProd.precio}</p>
//     <a class="producto__ver" href="./producto.html?id=${objProd.id}">Ver producto</a>
//   </div>`;
//   return producto;
// };

// const generarRowTemplate = (rubro) => {
//   let productos = getProductosByType(rubro);
//   let row = document.createElement("div");
//   row.classList.add("home__productos-cards");
//   productos.forEach((producto) => {
//     var id = producto.id;
//     row.appendChild(crearProducto(id));
//   });

//   return row;
// };
