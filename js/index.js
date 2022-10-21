import scrollTopBotton from "./dom/boton_scroll.js";
import slider from "./dom/carrusel.js";
import countdown from "./dom/cuenta_regresiva.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import serchFilters from "./dom/filtro_busqueda.js";
import getGeolocation from "./dom/geolocalizacion.js";
import hanburgerMenu from "./dom/menu_amburguesa.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba-responsive.js";
import { digitalClok, alarm } from "./dom/reloj.js";
import scrollSpy from "./dom/scroll_epia.js";
import draw from "./dom/sorteo.js";
import { shortcut, moveBall } from "./dom/teclado.js";
import darkTheme from "./dom/tema_oscuro.js";
import contactFormValidation from "./dom/validaciones_formulario.js";
import smartVideo from "./dom/video_inteligente.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  const $alarm = d.createElement("audio");
  hanburgerMenu(".panel-btn", ".panel", ".enlace");
  digitalClok("#reloj", "#activar_reloj", "#desactivar_reloj");
  alarm("assets/alerta-nuclear.mp3", "#activar_alarma", "#desactivar_alarma");

  countdown("countdown", "Sep 16, 2022 09:42:00", "Hoy es tu cumpleaños...😎");

  scrollTopBotton(".scroll-top-btn");
  responsiveMedia("youtube",
                  "(min-width: 1024px)",
                  `<a href="https://www.youtube.com/watch?v=HlhZ0XZHHaw" target= "blank" rel="noopener">Ver video</a>`,
                  `<iframe width="560" height="315" src="https://www.youtube.com/embed/HlhZ0XZHHaw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
  responsiveMedia("gmaps",
                  "(min-width: 1024px)",
                  `<a href="https://goo.gl/maps/K3haN8UCHECkvjSq6" target= "blank" rel="noopener">Ver mapa</a>`,
                  `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28713.72888661593!2d-54.58665445!3d-25.89526525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f6e5919ccff671%3A0x21d7d507814dd468!2sSalto%20Urugua-%C3%AD!5e0!3m2!1ses-419!2sar!4v1663844134454!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam");
  getGeolocation("geolocation");
  serchFilters(".card-filter", ".card");
  draw("#winner-btn",".player")
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidation();
});

d.addEventListener("keydown", (e) => {
  shortcut(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();