import { clientService } from "./controller.js";
import { productos } from "./objProductos.js";

const table = document.querySelector("[data-table]");
const modal = document.querySelector(".modal__container");
const delBtn = document.querySelector(".modal__button--confirm");
const cancelDel = document.querySelector(".modal__button--cancel");

let idPorBorrar = 0;

const createNewLine = (nombre, categoria, id) => {
  const linea = document.createElement("tr");
  const content = `
    <td class="td" data-td>${nombre}</td>
    <td>${categoria}</td>
    <td>
      <ul class="table-control">
        <li>
          <a href="editarProducto.html?id=${id}">Editar</a>
        </li>
        <li><button id="${id}">Delete</button></li>
      </ul>
    </td>`;

  linea.innerHTML = content;
  const btn = linea.querySelector("button");
  idPorBorrar = btn.id;
  btn.addEventListener("click", () => {
    modal.classList.remove("modal__close");
  });

  return linea;
};

delBtn.addEventListener("click", async () => {
  const id = idPorBorrar;
  try {
    await clientService.borrarProducto(id);
    window.location.href = "exito.html";
  } catch (error) {
    console.log("Error borrando el producto");
  }
});

cancelDel.addEventListener("click", () => {
  modal.classList.add("modal__close");
});

const renderTable = () => {
  productos.forEach((producto) => {
    var linea = createNewLine(producto.nombre, producto.categoria, producto.id);
    table.appendChild(linea);
  });
};

renderTable();
