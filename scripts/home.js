// import { bannerCreator } from "./banner.js";
import { insertarProductos } from "./productos.js";
// import { renderFooter } from "./footer.js";
// import { renderNav } from "./nav.js";

const verConsolas = document.getElementById("btn-banner") || null;
const navSearch = document.querySelector(".nav-search");
const btnNavSearch = document.querySelector(".nav-search-btn");

const renderHome = () => {
  // renderNav("log");
  // bannerCreator(
  //   "Febrero Promocional",
  //   "Productos seleccionados con 33% de descuento",
  //   "Ver Consolas",
  //   "banner-image.png"
  // );

  insertarProductos();
  // renderFooter();
};
if (verConsolas) {
  verConsolas.addEventListener("click", () => {
    window.location.href = "catalogo.html?categoria=Consolas";
  });
}

btnNavSearch.addEventListener("click", (event) => {
  event.preventDefault();
  let data = navSearch.value;
  window.location.href = `catalogo.html?search=${data}`;
});

navSearch.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    var itemToSearch = event.target.value;
    window.location.href = `catalogo.html?search=${itemToSearch}`;
  }
});

renderHome();
