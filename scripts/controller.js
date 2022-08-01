const listaProductos = () => {
  return fetch("https://ltizzi-alura-geek.herokuapp.com/api/producto/ver").then(
    (respuesta) => {
      return respuesta.json();
    }
  );
};

const crearProducto = (nombre, precio, descripcion, categoria, picture) => {
  return fetch("https://ltizzi-alura-geek.herokuapp.com/api/producto/new", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      nombre: nombre,
      precio: precio,
      descripcion: descripcion,
      categoria: categoria,
      picture: picture,
    }),
  });
};

const editarProducto = (
  id,
  nombre,
  precio,
  descripcion,
  categoria,
  picture
) => {
  return fetch(
    `https://ltizzi-alura-geek.herokuapp.com/api/producto/update?id=${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        nombre: nombre,
        precio: precio,
        descripcion: descripcion,
        categoria: categoria,
        picture: picture,
      }),
    }
  )
    .then((response) => response)
    .catch((err) => console.log(err));
};

const borrarProducto = (id) => {
  return fetch(
    `https://ltizzi-alura-geek.herokuapp.com/api/producto/delete?id=${id}`,
    {
      method: "DELETE",
    }
  );
};

export const clientService = {
  listaProductos,
  crearProducto,
  editarProducto,
  borrarProducto,
};
