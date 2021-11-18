//Place dans le body un article parmis ceux de la base de données
const addArticle = articleId => {
    if(articleId >= articles.length) {
        console.error("ERROR: nous sommes sortis du tableau!")
        return
    }

    articlesContainer.innerHTML = `
    <article>
        <h1>${articles[articleId].title}</h1>
        <p>${articles[articleId].description}</p>
        <img src="${articles[articleId].src}" alt="mon image"/>
    </article>
`
}