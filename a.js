const add = document.getElementById("#add");

function somar() {
  const div = document.querySelector("div");
  const total = +div.innerText + 1;
  div.innerText = total;
  if (total < 10) {
    div.innerText = total;
  } else {
    div.innerText = "nao e possivel adicionar mais"
  }
}
if (add) {
  add.addEventListener("click", somar);
}
