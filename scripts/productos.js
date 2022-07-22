const productos_1 = document.querySelector("#productos_1");
const productos_2 = document.querySelector("#productos_2");
const productos_3 = document.querySelector("#productos_3");

export const starwars = [
  "star-wars",
  "star-wars2",
  "star-wars3",
  "star-wars4",
  "star-wars5",
  "star-wars6",
];

export const nombres_starwars = [
  "Cenicero Stormtrooper",
  "Adorno Vader",
  "Arte Yoda",
  "Arte Stormtrooper",
  "Muñeco Grogu",
  "Arte Kylo Ren",
];

export const precios_starwars = [
  "10.00",
  "20.00",
  "30.00",
  "40.00",
  "50.00",
  "60.00",
];

export const consolas = [
  "console",
  "console2",
  "console3",
  "console4",
  "console5",
  "console6",
];

export const nombres_consolas = [
  "Xbox gamepad",
  "PS 5",
  "Nintendo mini",
  "Nintendo Switch",
  "Xbox One",
  "Gameboy retro",
];

export const precios_consolas = [
  "10.00",
  "20.00",
  "30.00",
  "40.00",
  "50.00",
  "60.00",
];

export const diversos = [
  "diversos",
  "diversos2",
  "diversos3",
  "diversos4",
  "diversos5",
  "diversos6",
];

export const nombres_diversos = [
  "Remera Atari",
  "Remera Nes",
  "Muñeco Sonic",
  "Alarm clock",
  "VR",
  "Pikachu",
];

export const precios_diversos = [
  "10.00",
  "20.00",
  "30.00",
  "40.00",
  "50.00",
  "60.00",
];

export const crearProducto = (id, precio, nombre) => {
  const producto = document.createElement("div");
  producto.classList.add("producto");

  producto.innerHTML = `<div class="producto__foto">
  <img src="./assets/${id}.png" alt="" />
</div>
<div class="producto__data" id="${id}">
  <p class="producto__nombre">${nombre}</p>
  <p class="producto__precio">${precio}</p>
  <a class="producto__ver" href="#">Ver producto</a>
</div>`;
  return producto;
};

export const insertarProductos = () => {
  productos_1.appendChild(
    generarRowTemplate(starwars, precios_starwars, nombres_starwars)
  );

  productos_2.appendChild(
    generarRowTemplate(consolas, precios_consolas, nombres_consolas)
  );

  productos_3.appendChild(
    generarRowTemplate(diversos, precios_diversos, nombres_diversos)
  );
};

const generarRowTemplate = (rubro, precios, nombres) => {
  let row = document.createElement("div");
  row.classList.add("home__productos-cards");
  for (let i = 0; i <= 5; i++) {
    // template += crearProducto(rubro[i], precios[i]);
    row.appendChild(crearProducto(rubro[i], precios[i], nombres[i]));
  }
  console.log(row);
  return row;
};
