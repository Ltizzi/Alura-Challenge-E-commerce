const footer = document.querySelector(".footer");

// const templateFooter = () => {
//   return `    <section class="home__contacto">
//     <div class="home__contacto-logo">
//       <img src="assets/Logo.png" alt="" />
//     </div>
//     <div class="home__contacto-list">
//       <ul class="footer__list">
//       <div class="home__contacto-logo-2">
//       <img src="assets/Logo.png" alt="" />
//     </div>
//         <li class="footer__list-item">Quienes somos</li>
//         <li class="footer__list-item">Politica de privacidad</li>
//         <li class="footer__list-item">Programa de fidelidad</li>
//         <li class="footer__list-item">Nuestras tiendas</li>
//         <li class="footer__list-item">Quiero ser franquiciado</li>
//         <li class="footer__list-item">Anuncie aquí</li>
//       </ul>
//     </div>
//     <div class="home__contacto-form">
//       <form action="" class="contacto__form">
//         <h3 class="contacto__form-title">Hable con nosotros</h3>
//         <div class="input-container">
//             <input
//             type="text"
//             class="contacto__form-nombre"
//             placeholder="nombre"
//             required
//             minLength=1
//             maxLength=40
//             data-tipo="name"
//           />
//           <span class="input-message-error"></span>
//         </div>

//         <div class="input-container">
//               <input
//               class="contacto__mensaje"
//               type="text"

//               required
//               minLength=1
//               maxLength=120
//               data-tipo="mensaje"
//             />
//             <span class="input-message-error"></span>
//         </div>

//         <input
//           type="submit"
//           class="btn-blue contacto__submit"
//           value="Enviar mensaje"
//         />
//       </form>
//     </div>
//   </section>
//   <section class="footer__footer">
//     <p class="footer__by">Desarrollado por Leonardo Terlizzi</p>
//     <p class="footer__year">2022</p>
//   </section>`;
// };

export const renderFooter = () => {
  footer.innerHTML = templateFooter();
};
