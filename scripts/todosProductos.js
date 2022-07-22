import { renderNav } from "./nav.js";
import { renderFooter } from "./footer.js";

const lista = document.querySelector(".catalogo__lista");

const starwars = [
  "star-wars",
  "star-wars2",
  "star-wars3",
  "star-wars4",
  "star-wars5",
  "star-wars6",
];

const nombres_starwars = [
  "Cenicero Stormtrooper",
  "Adorno Vader",
  "Arte Yoda",
  "Arte Stormtrooper",
  "Muñeco Grogu",
  "Arte Kylo Ren",
];

const precios_starwars = ["10.00", "20.00", "30.00", "40.00", "50.00", "60.00"];

const consolas = [
  "console",
  "console2",
  "console3",
  "console4",
  "console5",
  "console6",
];

const nombres_consolas = [
  "Xbox gamepad",
  "PS 5",
  "Nintendo mini",
  "Nintendo Switch",
  "Xbox One",
  "Gameboy retro",
];

const precios_consolas = ["10.00", "20.00", "30.00", "40.00", "50.00", "60.00"];

const diversos = [
  "diversos",
  "diversos2",
  "diversos3",
  "diversos4",
  "diversos5",
  "diversos6",
];

const nombres_diversos = [
  "Remera Atari",
  "Remera Nes",
  "Muñeco Sonic",
  "Alarm clock",
  "VR",
  "Pikachu",
];

const precios_diversos = ["10.00", "20.00", "30.00", "40.00", "50.00", "60.00"];

const renderCatalogo = () => {
  renderNav("no");
  poblarCatalogo(starwars, precios_starwars, nombres_starwars);
  poblarCatalogo(consolas, precios_consolas, nombres_consolas);
  poblarCatalogo(diversos, precios_diversos, nombres_diversos);
  renderFooter();
};

const poblarCatalogo = (id, precio, nombre) => {
  for (let i = 0; i < id.length; i++) {
    lista.appendChild(crearProducto(id[i], precio[i], nombre[i]));
  }
};

const crearProducto = (id, precio, nombre) => {
  const producto = document.createElement("div");
  producto.classList.add("producto");

  producto.innerHTML = `<div class="producto__foto">
    <img src="./assets/${id}.png" alt="" />
  </div>
  <div class="producto__data" id="${id}">
    <p class="producto__nombre">${nombre}</p>
    <p class="producto__precio">${precio}</p>
    <p class="producto__id">${id}</p>
  </div>`;
  return producto;
};

renderCatalogo();
