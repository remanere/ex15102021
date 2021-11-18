//Index = ID de l'article à afficher
var index = 0;

const updateArticle = () => {
    //Mise à jour de l'index de l'article acutel pour avoir le suivant
    if (index === articles.length - 1) 
        index = 0;
    else
        index++

    //Mise a jour du rendu de l'article avec le nouvel index
    addArticle(index)
}

addArticle(0)
nextPageButton.onclick = updateArticle