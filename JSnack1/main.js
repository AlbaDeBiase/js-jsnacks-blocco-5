// JSnack1:
// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
// nome e peso.
// Stampare a schermo la bici con peso minore.



// creo un array di oggetti che descrivono una bici

$(document).ready(function() {

    var bici =
    [
    {
    'nome' : 'Mountain bike',
    'peso' : '5kg'
    },
    {
    'nome' : 'Bmx',
    'peso' : '6kg'
    },
    {
    'nome' : 'Bici elettrica',
    'peso' : '7kg'
    },{
    'nome' : 'Fat bike',
    'peso' : '8kg'
    },
    ];

// Stampo l'array di bici
console.log(bici);

// Ciclo tutte le bici e loro proprietà
for (var i = 0; i < bici.length; i++) {
    var biciCorrente= bici[i];
    console.log(biciCorrente);
}



})
