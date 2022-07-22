import { renderFooter } from "./footer.js";
import { renderNav } from "./nav.js";

const login = document.querySelector(".login");

const loginTemplate = () => {
  return `<h3 class="login__title">Iniciar Sesion</h3>
    <form action="" class="login__form">
      <input
        type="email"
        class="login__form-input"
        placeholder="Escriba su correo electrónico"
      />
      <input
        type="password"
        class="login__form-input"
        placeholder="Escriba su contraseña"
      />
      <input type="submit" value="Entrar" class="btn-blue login__form-submit" />
    </form>`;
};

const renderLogin = () => {
  renderNav("no");
  login.innerHTML = loginTemplate();
  renderFooter();
};

renderLogin();
