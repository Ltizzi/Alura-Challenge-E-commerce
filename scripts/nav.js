const nav = document.querySelector(".navbar");

export const renderNav = (log) => {
  if (log === "log") nav.innerHTML = navTemplate();
  else nav.innerHTML = navTemplateSinLog();
};

const navTemplate = () => {
  return `<ul class="nav-list">
    <li class="nav-item">
    <a href="index.html" class="nav__home">  <img
    src="./assets/Logo.png"
    alt="Logo AluraGeek"
    title="Ir a home"
    class="nav-icon"
  /></a>
    
    </li>
    <li class="nav-item">
      <form action="" class="nav-form">
        <input
          type="text"
          class="nav-search"
          placeholder="¿Qué desea buscar?"
        />
        <button class="btn-light nav-search-btn">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </li>
  </ul>
  <a href="./login.html" class="nav__login"><button class="btn nav-btn">Login</button></a>
  <button class="btn-light nav-search-btn-2">
  <i class="fa-solid fa-magnifying-glass"></i>
</button>`;
};

const navTemplateSinLog = () => {
  return `<ul class="nav-list">
      <li class="nav-item">
      
      <a href="index.html" class="nav__home">  <img
      src="./assets/Logo.png"
      alt="Logo AluraGeek"
      title="Ir a home"
      class="nav-icon"
    /></a>
      </li>
      <li class="nav-item">
        <form action="" class="nav-form">
          <input
            type="text"
            class="nav-search"
            placeholder="¿Qué desea buscar?"
          />
          <button class="btn-light nav-search-btn">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </li>
    </ul>
    <button class="btn nav-btn" style="display:none;"><a href="./login.html" class="nav__login">Login</a></button>`;
};
