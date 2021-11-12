window.onload = function () {
  const btnPrev = document.querySelector(".btn-prev");
  const btnNext = document.querySelector(".btn-next");
  const rowSlide = document.querySelector(".row_10");
  const slidePro = document.querySelector(".slide-pro");
  const slideItems = document.querySelector(".slide-item");
  const slideItemsW = document.querySelector(".col_2");
  // const slideItemWidth = slideItemsW.offsetWidth;

  let positionX = 0;
  let index = 0;
  btnNext &&
    btnNext.addEventListener("click", function () {
      changeSlide(1);
    });
  btnPrev &&
    btnPrev.addEventListener("click", function () {
      changeSlide(-1);
    });

  function changeSlide(direction) {
    if (direction === 1) {
      if (index >= 5) {
        index = 5;
        btnNext.style = "visibility: hidden;";
        return;
      }
      positionX = positionX - 242;
      slidePro.style = `transform: translateX(${positionX}px)`;
      console.log(index);
      index++;
    } else if (direction === -1) {
      btnNext.style = "visibility: none;";

      if (index <= 0) {
        index = 0;
        return;
      }
      positionX = positionX + 242;
      slidePro.style = `transform: translateX(${positionX}px)`;
      console.log(index);
      index--;
    }
  }
};
