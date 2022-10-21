const d = document,
  w = window;
export default function smartVideo() {
  const $videos = d.querySelectorAll("video[data-smart-video]");

  const cb = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }
      w.addEventListener("visibilitychange", (e) => {
        d.visibilityState === "visible"
          ? entry.target.play()
          : entry.target.pause();
      });
    });
  };
  /*creo el observador*/
  const observer = new IntersectionObserver(cb, { threshold: 0.5 });
  /*{threshold:0.5}     esto hace que comience a reproducirse al 50% de la visivilidad*/

  /*a que elementos aplico el observador*/

  $videos.forEach((el) => observer.observe(el));
}
