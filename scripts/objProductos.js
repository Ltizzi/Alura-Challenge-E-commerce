import { clientService } from "./controller.js";

export let productos = [];

let productos2 = [
  {
    id: 1,
    nombre: "Taza Stormtrooper",
    precio: 11.99,
    descripcion:
      "Un cenicero simple para depositar tus cenizas en la cabeza del Imperio",
    categoria: "Star Wars",
    picture: "./assets/star-wars.png",
  },
  {
    id: 2,
    nombre: "Adorno Vader",
    precio: 8.49,
    descripcion: "Adornos cabezones de figuras del Imperio",
    categoria: "Star Wars",
    picture: "./assets/star-wars2.png",
  },
  {
    id: 3,
    nombre: "Arte Yoda",
    precio: 24.99,
    descripcion:
      "Cuadro naranja con el maestro Yoda. Para adornar tu cuarto y espantar futuras novias",
    categoria: "Star Wars",
    picture: "./assets/star-wars3.png",
  },
  {
    id: 4,
    nombre: "Arte Stormtrooper",
    precio: 29.99,
    descripcion:
      "Espero que el que cuelgue este cuadro tenga más punteria que el retratado",
    categoria: "Star Wars",
    picture: "./assets/star-wars4.png",
  },
  {
    id: 5,
    nombre: "Muñeco Grogu",
    precio: 44.99,
    descripcion:
      "Baby Yoda. La gran figura de El Mandalorian. Le parece tierno hasta a tu vieja",
    categoria: "Star Wars",
    picture: "./assets/star-wars5.png",
  },
  {
    id: 6,
    nombre: "Arte Kylo Ren",
    precio: 26.99,
    descripcion: "Solo apto para emos fans de star wars",
    categoria: "Star Wars",
    picture: "./assets/star-wars6.png",
  },
  {
    id: 7,
    nombre: "Xbox gamepad",
    precio: 49.99,
    descripcion:
      "Un clásico de la consola y de la PC. Mucho más lindo que el de la PS",
    categoria: "Consolas",
    picture: "./assets/console.png",
  },
  {
    id: 8,
    nombre: "Playstation 5",
    precio: 539.99,
    descripcion: "Consola de última generación de Sony.",
    categoria: "Consolas",
    picture: "./assets/console2.png",
  },
  {
    id: 9,
    nombre: "NES mini",
    precio: 119.99,
    descripcion:
      "Recreación actual de la clásica consola de 8bits. Con todos los clásicos integrados, HDMI y USB",
    categoria: "Consolas",
    picture: "./assets/console3.png",
  },
  {
    id: 10,
    nombre: "Nintendo Switch",
    precio: 359.99,
    descripcion:
      "La última consola de Nintendo: juga portatil o conectado a la tele",
    categoria: "Consolas",
    picture: "./assets/console4.png",
  },
  {
    id: 11,
    nombre: "Xbox One",
    precio: 489.99,
    descripcion: "Consola de última generación de Microsoft.",
    categoria: "Consolas",
    picture: "./assets/console5.png",
  },
  {
    id: 12,
    nombre: "Gameboy Retro",
    precio: 124.99,
    descripcion: "Consola portatil con la que jugaba tu papito",
    categoria: "Consolas",
    picture: "./assets/console6.png",
  },
  {
    id: 13,
    nombre: "Remera Atari",
    precio: 35.99,
    descripcion:
      "Remera de la consola retro Atari con caracteres orientales. Todos los talles.",
    categoria: "Diversos",
    picture: "./assets/diversos.png",
  },
  {
    id: 14,
    nombre: "Remera NES",
    precio: 35.99,
    descripcion: "Remera del joystick de la consola Nes. Todos los talles",
    categoria: "Diversos",
    picture: "./assets/diversos2.png",
  },
  {
    id: 15,
    nombre: "Muñeco Sonic",
    precio: 5.75,
    descripcion:
      "Muñeco miniatura de personajes de Sonic El Erizo. NO son rápidos.",
    categoria: "Diversos",
    picture: "./assets/diversos3.png",
  },
  {
    id: 16,
    nombre: "Reloj retro",
    precio: 24.99,
    descripcion:
      "Los relojes alarma que viste en volver al futuro, el día de la marmota y otros",
    categoria: "Diversos",
    picture: "./assets/diversos4.png",
  },
  {
    id: 17,
    nombre: "VR",
    precio: 399.99,
    descripcion:
      "No entendemos si son los anteojos o la remera de los muppets, como sea este producto es top",
    categoria: "Diversos",
    picture: "./assets/diversos5.png",
  },
  {
    id: 18,
    nombre: "Peluche Pikachu",
    precio: 6.99,
    descripcion:
      "Peluche pokemon de varios tipos. El attack trueno viene por separado",
    categoria: "Diversos",
    picture: "./assets/diversos6.png",
  },
];

productos = await clientService.listaProductos();

while (!productos) {
  if (localStorage.getItem("productos")) {
    productos = localStorage.getItem("productos");
  } else {
    productos = productos2;
  }
}

localStorage.setItem("productos", productos);
