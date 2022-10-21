const d = document,
  w = window,
  n = navigator;

export default function draw(btn, selector) {
  const getWinenr = (selector) => {
    const $players = d.querySelectorAll(selector),
      random = Math.floor(Math.random() * $players.length),
      winner = $players[random];
    return `El ganador es ${winner.textContent}`;
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getWinenr(selector);
      alert(result);
      console.log(result);
    }
  });

  const getWinenrComent = (selector) => {
    const $players = d.querySelectorAll(selector),
      random = Math.floor(Math.random() * $players.length),
      winner = $players[random];
    return `El ganador es ${winner.textContent}`;
  };
}
