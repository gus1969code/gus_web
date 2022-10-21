const d = document;

export default function contactFormValidation() {
  const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required]");

  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form [required]")) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;
      //console.log(e,$input, $input.name);

      if (pattern && $input.value !== "") {
        let regex = new RegExp(
          pattern
        ); /*Asi se edefinre un a exprecion regular*/

        return !regex.exec($input.value)
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
      if (!pattern) {
        return $input.value === ""
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }

      // console.log($input.dataset.pattern);
    }
  });

  d.addEventListener("submit", (e) => {
    //e.preventDefault();
    //alert("Enviando desde el formulario");

    const $loader = d.querySelector(".contat-form-loader"),
      $response = d.querySelector(".contact-form-response");
    $loader.classList.remove("none");
    setTimeout(() => {
      $loader.classList.add("none");
      $response.classList.remove("none");
      $form.reset(); //Esto borrra los datos del formulario (se limpia)

      //Despues de tres segundos desaparece "Los datos fueronenviado"
      setTimeout(() => {
        $response.classList.add("none");
      }, 3000);
    }, 3000);
  });
}
