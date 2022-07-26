import { productos } from "./objProductos.js";

const productos_1 = document.querySelector("#productos_1");
const productos_2 = document.querySelector("#productos_2");
const productos_3 = document.querySelector("#productos_3");

// console.log(productos);

//del array de objetos devuelve  un producto especifico por id
export const getProdById = (id) => {
  var prod = {};
  productos.forEach((producto) => {
    if (producto.id === id) {
      prod = producto;
    }
  });
  return prod;
};

//devuelve un array de productos de una misma caategoria
const getProductosByType = (rubro) => {
  let productosByRubro = [];
  productos.forEach((producto) => {
    if (producto.categoria === rubro) {
      productosByRubro.push(producto);
    }
  });
  return productosByRubro;
};

//a partir de la id, genera el template de un producto
export const crearProducto = (id) => {
  const objProd = getProdById(id);
  const producto = document.createElement("div");
  producto.classList.add("producto");

  producto.innerHTML = `<div class="producto__foto">
  <img src="./assets/${objProd.picture}" alt="imagen del producto ${objProd.nombre}" class="producto__foto-pic" />
</div>
<div class="producto__data" id="${objProd.id}">
  <p class="producto__nombre">${objProd.nombre}</p>
  <p class="producto__precio">$${objProd.precio}</p>
  <a class="producto__ver" href="./producto.html?id=${objProd.id}">Ver producto</a>
</div>`;
  return producto;
};

//inserta en el dom los elementos generados
export const insertarProductos = () => {
  productos_1.appendChild(generarRowTemplate("Star Wars"));

  productos_2.appendChild(generarRowTemplate("Consolas"));

  productos_3.appendChild(generarRowTemplate("Diversos"));
};

//genera el row de productos por categoría
export const generarRowTemplate = (rubro) => {
  let productos = getProductosByType(rubro);
  let row = document.createElement("div");
  row.classList.add("home__productos-cards");
  productos.forEach((producto) => {
    var id = producto.id;
    row.appendChild(crearProducto(id));
  });

  return row;
};
