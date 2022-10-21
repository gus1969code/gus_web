const d = document;
let x = 0,
  y = 0;
export function shortcut(e) {
  if (e.key === "a" && e.altKey) {
    alert("Has lanzado un alerta con el teclado");
  }
  if (e.key === "c" && e.altKey) {
    confirm("Has lanzado un alerta con el teclado");
  }
  if (e.key === "p" && e.altKey) {
    prompt("Has lanzado un alerta con el teclado");
  }
}

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitBall = $ball.getBoundingClientRect(),
    limitStage = $stage.getBoundingClientRect();

  //  console.log(limitBall, limitStage);

  switch (e.keyCode) {
    case 37:
      if (limitStage.left < limitBall.left) {
        if (limitBall.left - limitStage.left >= 10) {
          x -= 10;
        } else {
          x = x - (limitBall.left - limitStage.left);
        }
      }

      e.preventDefault();
      break;
    case 38:
      //console.log(limitBall.top , limitStage.top);
      if (limitBall.top > limitStage.top) {
        if (limitBall.top - limitStage.top >= 10) {
          y -= 10;
        } else {
          y = y - (limitBall.top - limitStage.top);
        }
        e.preventDefault();
      }
   
      break;
    case 39:
      //console.log(limitBall.right , limitStage.right);
      if (limitBall.right < limitStage.right) {
        if (limitStage.right - limitBall.right >= 10) {
          x += 10;
        } else {
          x = x + (limitStage.right - limitBall.right);
        }
      }
      e.preventDefault();

      break;
    case 40:
      if (limitBall.bottom < limitStage.bottom) {
        if (limitStage.bottom - limitBall.bottom >= 10) {
          y += 10;
        } else {
          y = y + (limitStage.bottom - limitBall.bottom);
        }
        e.preventDefault();
      }
      

      break;
    default:
      break;
  }
  $ball.style.transform = ` translate(${x}px, ${y}px)`;
}
