const d = document,
ls = localStorage;
export default function darkTheme(btn, classDark) {
  const $themeBtn = d.querySelector(btn),
    $selectors =
      d.querySelectorAll(
        "[data-dark]"
      ); /*Esto es para seleccionar elementos que contengan este atributo*/
  //console.log($selectors);

  let moon = "🌙",
    sun = "☀️";

  const lightMode = () => {
    $themeBtn.textContent = moon;
    $selectors.forEach((el) => el.classList.remove(classDark));
    ls.setItem("theme", "light");
  };
  const darkMode = () => {
    $themeBtn.textContent = sun;
    $selectors.forEach((el) => el.classList.add(classDark));
    ls.setItem("theme", "dark");
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($themeBtn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });
  d.addEventListener("DOMContentLoaded", (e) => {

    if(ls.getItem("theme") === null) ls.setItem("theme", "light");
    if(ls.getItem("theme") === "light") lightMode();
    if(ls.getItem("theme") === "dark") darkMode();
    // alert("hola desde contentloaded");
  });
}
