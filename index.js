const ampla = document.getElementById("ampla")
const padrao = document.getElementById("padrao")
const compacto = document.getElementById("compacto")
const cardProjeto = document.querySelectorAll(".cardProjeto")
const imgProjeto = document.querySelectorAll(".imgContainer")
const videoContent = document.querySelectorAll(".videoContent")

ampla.addEventListener('click', () => {
    if (ampla) {
        imgProjeto.forEach((e) => {
            e.style.height = '280px'
        })
        
        cardProjeto.forEach((e) => {
            e.style.width = '570px'
        })
        videoContent.forEach((e) => {
            e.style.width = '100%'
            e.style.height = 'auto' 
        })
    }
})

padrao.addEventListener('click', () => {
    if (padrao) {
        imgProjeto.forEach((e) => {
            e.style.height = '200px'
        })
        
        cardProjeto.forEach((e) => {
            e.style.width = '400px'
        })
        videoContent.forEach((e) => {
            e.style.width = '100%'
            e.style.height = 'auto' 
        })
    }
})

compacto.addEventListener('click', () => {
    if (compacto) {
        imgProjeto.forEach((e) => {
            e.style.height = '160px'
        })
        
        cardProjeto.forEach((e) => {
            e.style.width = '295px'
        })
        videoContent.forEach((e) => {
            e.style.height = '100%' 
        })
    }
})