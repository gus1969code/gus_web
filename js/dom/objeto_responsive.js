const d = document, 
w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent){
let brekpoint = w.matchMedia(mq);
//console.log(brekpoint.matches);
const responsive=(e)=>{ 

    if(e.matches){
        d.getElementById(id).innerHTML = desktopContent;
    }else{
        d.getElementById(id).innerHTML = mobileContent;
    }
  //  console.log(e);
    //console.log(e.matches);
};
brekpoint.addListener(responsive);
responsive(brekpoint);
};