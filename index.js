const ampla = document.getElementById("ampla");
const padrao = document.getElementById("padrao");
const compacto = document.getElementById("compacto");
const cardProjeto = document.querySelectorAll(".cardProjeto");
const imgContainer = document.querySelectorAll(".imgContainer");
const videoContent = document.querySelectorAll(".videoContent");

ampla.addEventListener("click", () => {
  imgContainer.forEach((e) => {
    e.style.height = "280px";
  });

  cardProjeto.forEach((e) => {
    e.style.width = "50%";
  });
  videoContent.forEach((e) => {
    e.style.width = "100%";
    e.style.height = "auto";
  });
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
});

compacto.addEventListener("click", () => {
  imgContainer.forEach((e) => {
    e.style.height = "160px";
  });

  cardProjeto.forEach((e) => {
    e.style.width = "295px";
  });
  videoContent.forEach((e) => {
    e.style.height = "100%";
  });
});

function mudarTheme() {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");
}

function enviar(e){
  alert('aaa')
}
