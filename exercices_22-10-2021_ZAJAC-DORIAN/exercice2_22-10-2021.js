function check(){

    let prenom = document.getElementById("prenom").value;

    let nom = document.getElementById("nom").value;

    let age = document.getElementById("age").value;

    let txtResultat = document.getElementById("txtResultat");

//vérification des champs texte si NULL 

        if (prenom == 0){

            txtResultat.innerHTML = "Merci de saisir votre prénom";

            return;

        }if (nom == 0){

            txtResultat.innerHTML = "Merci de saisir votre nom";

            return;

        }if (age == 0){

            txtResultat.innerHTML = "Merci de saisir votre âge";

            return;

//vérification des termes rentré dans les champs textes

        }if (((parseFloat(age) == parseInt(age)) && !isNaN(age)) == false){

            txtResultat.innerHTML = "merci de saisir des chiffres";

            return;

//vérification du nom SI plus de 2 caractères 

        }if (nom.length <= 2){

            txtResultat.innerHTML = "merci de saisir un nom de plus de 2 caractères";

            return;

//vérification de l'âge

        }if (age < 0){

            txtResultat.innerHTML = "merci de saisir un âge non null";

            return;
 
        }if (age < 18){

            window.alert("Vous avez moins de 18 ans et rempli toutes les conditions, BRAVO !");

            return;

        }else{

            txtResultat.innerHTML = "Vous avez plus de 18 ans";

            return;
        }

};