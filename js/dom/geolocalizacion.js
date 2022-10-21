const d = document,
    w = window,
    n = navigator;



export default function getGeolocation(id){

const $id = d.getElementById(id),
 option = {

    enableHighAccuracy: true,
    timeout: 5000,
    maximunAge: 0
 };

const succes = (position) => {

    const coords = position.coords;
    $id.innerHTML =
    `<p>Tu posicion actual es:</p>
    <ul>
        <li>Latitud: <b>${coords.latitude}</b> </li>
        <li>Longitud: <b>${coords.longitude} </b></li>
        <li>Precision : <b>${coords.accuracy} </b>metros</li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" target="_blank rel = "noopener">Ver en google.map</a> 

    `;
//console.log(position);

};

const error = (err) =>{

    $id.innerHTML = `<p><mark>Error: ${err.code} : ${err.message}</mark> </p>`;
    console.log(`Error: ${err.code} : ${err.message}`);
};

 n.geolocation.getCurrentPosition(succes, error, option);

};