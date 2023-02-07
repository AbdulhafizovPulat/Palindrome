const elForm = document.querySelector("#form");
const elInput = document.querySelector("#input");
const elText = document.querySelector("#info");

function checked(son) {
  let numb = son.length;
  elText.className = "";

  if (son.length % 2 == 0) {
    for (let i = 0; i < son.length / 2; i++) {
      switch (true) {
        case son[i] == son[--numb]:
          elText.textContent = "Polindrom";
          elText.className = "success";
          break;

        default:
          elText.textContent = "Polindrom emas";
          elText.className = "text-danger";
          break;
      }
    }
  } else {
    for (let i = 0; i < Math.floor(son.length / 2); i++) {
      switch (true) {
        case son[i] == son[--numb]:
          elText.textContent = "Polindrom";
          elText.className = "success";
          break;

        default:
          elText.textContent = "Polindrom emas";
          elText.className = "text-danger";
          break;
      }
    }
  }
}

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const array = elInput.value.split("");

  checked(array);
});
