const d = document;

export default function responsiveTester(form){

    const $form = d.getElementById(form);
    let tester;

    d.addEventListener("submit", e =>{
        //console.log($form[0].value);
        //console.log(e.target);
        //console.log($form.direccion.value);
        e.preventDefault();//evita que se procesen los datos del formulario
        if(e.target === $form){
           //tester = window.open(e.target[0].value);
           //tester = window.open($form[0].value);
           tester = window.open($form.direccion.value,
                                "tester",
                                `innerWidth = ${$form.ancho.value},
                                innerHeight = ${$form.alto.value}`);
           

        }
    })
    d.addEventListener("click", e =>{ 
        if(e.target === $form.cerrar) tester.close();
             
    })

}