
let txtNom = document.getElementById("txtNom");
let txtNote = document.getElementById("txtNote");
let btnAdd = document.getElementById("btnAdd");
let bouton = document.getElementById("bouton");
let listEtudiants = document.getElementById("listEtudiants");

let etudiants = []; 


btnAdd.addEventListener("click", function () {
    
    if (txtNom.value.trim() == "" || txtNote.value.trim() == ""){
        alert("Merci de remplir l'ensemble des champs");
        return ;
    }

   
    let etudiant = {
        "nom" : txtNom.value.trim(),
        "note" : parseInt(txtNote.value.trim())
    }

    
    etudiants.push(etudiant);

    listEtudiants.innerHTML = "";
    for (let i = 0; i < etudiants.length ; i++){
        listEtudiants.innerHTML = listEtudiants.innerHTML + "<li><strong>"+etudiants[i].nom+"</strong> "+ etudiants[i].note+"</li>";
    }

    txtNom.value = "";
    txtNote.value = "";

    txtNom.focus();

});


bouton.addEventListener("click",function(){

    let max = etudiants[0];
    

    for (let i = 1; i < etudiants.length; i++) {

        if (etudiants[i].note > max.note) {

            max = etudiants[i];
        }
    }

    alert("le nom de l'étudiant est : " + max.nom + " " + " avec la note : " + max.note);

});



