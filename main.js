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
    'peso' : 5
    },
    {
    'nome' : 'Bmx',
    'peso' : 6
    },
    {
    'nome' : 'Bici elettrica',
    'peso' : 7
    },{
    'nome' : 'Fat bike',
    'peso' : 8
    },
    ];

// Stampo l'array di bici
console.log(bici);

// Ciclo tutte le bici e loro proprietà
for (var i = 0; i < bici.length; i++) {
    var biciCorrente= bici[i];
    console.log(biciCorrente);
// Stampare a schermo la bici con peso minore.
    if (biciCorrente["peso"] < 6) {
        console.log("peso minore");
    }

}


})
