let buttons = document.getElementsByClassName("AQ-button");
let texts = document.getElementsByClassName("AQ-text-from-button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", toggleText);
}

function toggleText() {
  let text = this.nextElementSibling;

  let button = this.classList.toggle("AQ-active-botton"); // Міняю колір кнопки

  text.classList.toggle("visible"); // Перемикаю видимість тексту

  for (let i = 0; i < texts.length; i++) {
    if (texts[i] !== text) {
      texts[i].classList.remove("visible"); // Скриваю інші тексти
      buttons[i].classList.remove("AQ-active-botton"); // Прибираю колір кнопки
    }
  }
}
