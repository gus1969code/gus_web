const d = document;

export default function slider() {
  const $nextBtn = d.querySelector(".slider-btn .next"),
    $prevBtn = d.querySelector(".slider-btn .prev"),
    $slider = d.querySelectorAll(".slider-slide");

  let i = 0;

  /*d.addEventListener("click", (e) => {
    if (e.target === $nextBtn) {
      if (i + 1 < $slider.length) {
        $slider[i].classList.remove("active");
        $slider[i + 1].classList.add("active");
        i++;
      } else {
        if (i + 1 === $slider.length) {
          $slider[i].classList.remove("active");
          $slider[0].classList.add("active");
          i = 0;
        }
      }

      e.preventDefault();
    }
    if (e.target === $prevBtn) {
      if (i > 0) {
        $slider[i].classList.remove("active");
        $slider[i - 1].classList.add("active");
        i--;
      } else {
        if (i === 0) {
          $slider[i].classList.remove("active");
          $slider[$slider.length - 1].classList.add("active");
          i = $slider.length - 1;
        }
      }
      e.preventDefault();
    }
  });*/
d.addEventListener("click", (e) => {
  if (e.target === $prevBtn) {
    e.preventDefault();
    $slider[i].classList.remove("active");
    i--;
    if(i < 0){
      i = $slider.length -1;
    }
    $slider[i].classList.add("active");
 };
 
 if (e.target === $nextBtn) {
    e.preventDefault();
    $slider[i].classList.remove("active");
    i++;
    if(i >= $slider.length){
    i = 0;      
    }  
    $slider[i].classList.add("active");
 };

});

}
