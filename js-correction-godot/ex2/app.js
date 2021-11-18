//Index = ID de l'article à afficher
var index = 0;

//creation des dots
articles.forEach((element, key) => {
    let dot = document.createElement('div')
        dot.className = "dot"
        dot.id = key
        dotsContainer.appendChild(dot)
})

//affectation des clicks
let dots = document.querySelectorAll(".dot")

dots.forEach(dot => {
    dot.onclick = (event) => {
        index = parseInt(event.target.id)
        updateDots()
        initArticles()
    }
})

//Met en evidence le point correspondant a la slide actuelle
const updateDots = () => {
    dots.forEach((dot, key) => {
        if(key === index) {
            dot.style.transform = "scale3d(1.1,1.1,1)"
        }
        else {
            dot.style.transform = "none"
        }
    })
}

//Avancer au slide suivant
const nextPage = () => {
    if (index === articles.length - 1) index = 0
    else ++index

    initArticles()
    updateDots()
}

//Retourner au slide precedent
const previousPage = () => {
    if (index === 0) index = articles.length - 1
    else --index

    initArticles()
    updateDots()
}

initArticles()
nextPageButton.onclick = nextPage
previousPageButton.onclick = previousPage

//BONUS 2
setInterval(() => {
    nextPage()
}, 7000);

//BONUS 3
document.onkeydown = (event) => {
    if(event.keyCode === 32) {
        index = 0;
        initArticles()
        updateDots()
    }
    
}