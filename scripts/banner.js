const banner = document.querySelector(".home__banner");

const bannerTemplate = (title, subtitle, boton) => {
  return `<div class="home__banner-inside">
    <h2 class="home__banner-title">${title}</h2>
    <h5 class="home__banner-subtitle">
      ${subtitle}
    </h5>
    <button class="btn-blue home__banner-btn">${boton}</button>
  </div>`;
};

export const bannerCreator = (title, subtitle, boton, image) => {
  banner.innerHTML = bannerTemplate(title, subtitle, boton);
  banner.style.background = `url("../assets/${image}")`;
};
