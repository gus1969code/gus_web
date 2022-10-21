const d = document;
export default function countdown(id, limitDate, finalMessage) {
  const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();

  let countdownTempo = setInterval(() => {
    let now = new Date().getTime(),
      limitTime = countdownDate - now,
      dias = Math.trunc(limitTime / (1000 * 60 * 60 * 24)),
      horas = ("0" + Math.trunc((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2),
      min = ("0" + Math.trunc(((limitTime % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) / (1000 * 60))).slice(-2),
      seg = ("0" + Math.trunc((((limitTime % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) %(1000 * 60)) / 1000)).slice(-2);

    //console.log(countdownDate - now);
    $countdown.innerHTML = `<h3>Falta: ${dias} Dias ${horas} Horas ${min} Minutos  ${seg} Segundos</h3>`;
    if (limitTime < 0) {
      clearInterval(countdownTempo);
      $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
    }
  }, 1000);
}
