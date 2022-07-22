import { bannerCreator } from "./banner.js";
import { insertarProductos } from "./productos.js";
import { renderFooter } from "./footer.js";
import { renderNav } from "./nav.js";

const renderHome = () => {
  renderNav("log");
  bannerCreator(
    "Febrero Promocional",
    "Productos seleccionados con 33% de descuento",
    "Ver Consolas",
    "banner-image.png"
  );

  insertarProductos();
  renderFooter();
};

renderHome();
