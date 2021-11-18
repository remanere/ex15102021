//Place dans le body un article parmis ceux de la base de données
const initArticles = () => {
    let finalHTML = ""

    articlesContainer.style.width = `${articles.length * 100}vw`

    //Gestion du décalage pour placer sur la bonne slide correspondant à l'index
    articlesContainer.style.transform = `translate3d(-${index*100}vw,0,0)`

    articles.forEach((element, key) => {
        finalHTML += `
        <article>
            <h1>${element.title}</h1>
            <p>${element.description}</p>
            <img src="${element.src}" alt="mon image"/>
        </article>
        `
    });

    articlesContainer.innerHTML = finalHTML
}