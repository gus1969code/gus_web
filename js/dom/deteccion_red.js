const d = document,
    w = window,
    n = navigator;
export default function networkStatus(){


const $div = d.createElement("div");

const onLine =()=>{  

if(n.onLine){

    $div.textContent = "Coneccion Reestablecida";
    $div.classList.add("online");
    $div.classList.remove("offline");
    


  }else{
    $div.textContent = "Coneccion Perdida";
    $div.classList.add("offline");
    $div.classList.remove("online");
    
};
d.body.insertAdjacentElement("afterbegin", $div);   
setTimeout(()=>{d.body.removeChild($div)}, 2000);


};
w.addEventListener("online", (e) => {onLine()});
w.addEventListener("offline", (e) => {onLine()});
 
}