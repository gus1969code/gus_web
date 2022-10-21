const d = document,
  n = navigator,
  w = window;

export default function webCam(id) {
  const $video = d.getElementById(id);

  //console.log(n.mediaDevices.getUserMedia);
  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: false, audio: true })
      .then((strem) => {
         // console.log(strem);
          $video.srcObjet = strem;
          $video.play();
      })
      .catch((err) => {
          $video.insertAdjacentHTML("beforebegin", `<p>Sucedio el siguiente error: <mark>${err} </mark></p>`);
        console.log(`Sucedio el siguiente error: ${err}`);
      });
  }
}
