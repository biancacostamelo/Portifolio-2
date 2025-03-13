const ampla = document.getElementById("ampla");
const padrao = document.getElementById("padrao");
const compacto = document.getElementById("compacto");
const display = document.getElementById("display");
const cardProjeto = document.querySelectorAll(".cardProjeto");
const imgContainer = document.querySelectorAll(".imgContainer");
const videoContent = document.querySelectorAll(".videoContent");

ampla.addEventListener("click", () => {
  imgContainer.forEach((e) => {
    e.style.height = "280px";
  });

  cardProjeto.forEach((e) => {
    e.style.width = "60%";
  });
  videoContent.forEach((e) => {
    e.style.width = "100%";
    e.style.height = "auto";
  });
  display.style.justifyContent = "center"
});

padrao.addEventListener("click", () => {
  imgContainer.forEach((e) => {
    e.style.height = "200px";
  });

  cardProjeto.forEach((e) => {
    e.style.width = "400px";
  });
  videoContent.forEach((e) => {
    e.style.width = "100%";
    e.style.height = "auto";
  });
  display.style.justifyContent = "center"
});

compacto.addEventListener("click", () => {
  imgContainer.forEach((e) => {
    e.style.height = "160px";
  });

  cardProjeto.forEach((e) => {
    e.style.width = "320px";
  });
  videoContent.forEach((e) => {
    e.style.height = "100%";
  });
  display.style.justifyContent = "space-around"
});

function mudarTheme() {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");
}

function enviar(e){
  alert('aaa')
}
