import { bannerCreator } from "./banner.js";
import { insertarProductos } from "./productos.js";

bannerCreator(
  "Febrero Promocional",
  "Productos seleccionados con 33% de descuento",
  "Ver Consolas",
  "banner-image.png"
);

insertarProductos();
// insertarProductos("consolas");
// insertarProductos("diversos");
