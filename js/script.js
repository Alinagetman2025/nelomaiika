document.addEventListener("DOMContentLoaded", function () {
  // let возраст = prompt("Сколько тебе лет?");
  // let вБудущем = возраст + 5;
  // alert("Через 5 лет тебе будет " + вБудущем);

  // alert("Приветстуем на сайте! НЕЛОМАЙКА!");

  let bgButton1 = document.querySelector(".bgButton-1");
  bgButton1.addEventListener("click", () => {
    document.body.style.backgroundColor = "#3DB70C";
  });

  let bgButton2 = document.querySelector(".bgButton-2");
  bgButton2.addEventListener("click", () => {
    document.body.style.backgroundColor = "#F7EAD6";
  });

  let bgButton3 = document.querySelector(".bgButton-3");
  bgButton3.addEventListener("click", () => {
    document.body.style.backgroundColor = "#1E1E1E";
  });

  let whimsy = document.querySelectorAll(".whimsical");
  whimsy.forEach((whim) => {
    whim.addEventListener("click", () => {
      whim.classList.toggle("purple");
    });
  });

  onclick = "this.innerText = '˚₊ · ͟͟͞͞➳❥'";
  document.querySelector(".clickkk").addEventListener("click", () => {
    let demo = document.querySelector(".clickkk");
    if (demo.innerHTML === "₊ · ͟͟͞͞➳❥") {
      demo.innerHTML = " ͟͟͞͞➳❥₊ ·";
    } else if (demo.innerHTML === " ͟͟͞͞➳❥₊ ·") {
      demo.innerHTML = "❥₊ · ͟͟͞͞➳";
    } else {
      demo.innerHTML = "₊ · ͟͟͞͞➳❥";
    }
  });
});
let включено = true;
function переключить() {
  if (включено) {
    лампа.innerText = "img.001";
    включено = false;
  } else {
    лампа.innerText = "img.002";
    включено = true;
  }
}
document.querySelector("body").addEventListener("index", eyeball);

function eyeball() {
  let eyes = document.querySelectorAll(".eye");
  eyes.forEach((eye) => {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotate = radian * (180 / Math.PI) * -1 + 270;
    eye.style.transform = `rotate(${rotate}deg)`;
  });
}
