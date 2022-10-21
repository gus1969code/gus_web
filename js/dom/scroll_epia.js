const d = document;

export default function scrollSpy(){
const $sections = d.querySelectorAll("section[data-scroll-spy]");

const cb = (entries)=>{
//console.log("entries", entries);

entries.forEach(entry =>{
   // console,console.log("entry",entry);
const id = entry.target.getAttribute("id");
//console.log("id_de_target",id);
   if(entry.isIntersecting){
d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
}else{
    d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
}

})
} 
    const observer = new IntersectionObserver(cb, {
//root
//rootMargin: "-250px"// Esto hace que se achique el foco de deteccion, para que no marque mas de una
threshold: 0.5 //esto haace que se actue con un % de visivilidad; 
                //0(es elal minimo pedazo),
                // 0.5(la mitad del elemento),
                // 1 (el 100% del elemento)
                // (0.5, 0.75) colocando dos valores, representa un intervalo
    });
//console.log(observer);
    $sections.forEach(el => observer.observe(el));


}  