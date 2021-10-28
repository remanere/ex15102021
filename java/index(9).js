let notes = [8,9];
let nom   = ['mounir',  'julia'];
let age   = [22,11];
let adresse = ['rkrkrk', 'tktktk'];

/////////////////////////////////////////

// clé (unique) : valeur
// objet
let personne1 = {
    "nom" : "mounir",
    "note" : 8,
    "age" : 22,
    "adresse" : 'rkrkrk'
}

let personne2 = {
    "nom" : 'julia',
    "note" : 9,
    "age" : 11,
    "adresse" : "tktktkt"
}

// tableau d'objet
let etudiants = [personne1, personne2];

// afficher les noms des étudiants
// i-- => i -1
// i++ => i +1
let somme = 0;  // 0 car add                0 + 8 + 9
                // 1 car multiplication     1 * 8 * 9
for ( let i = 0; i < etudiants.length  ; i++){
    // etudiants[i] : 1 etudiant
    somme = somme + etudiants[i].note;
}

