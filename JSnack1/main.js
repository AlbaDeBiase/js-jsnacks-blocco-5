// JSnack1:
// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
// nome e peso.
// Stampare a schermo la bici con peso minore.



// creo un array di oggetti che descrivono una bici

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
    'peso' : 6
    },
    {
    'nome' : 'Bmx',
    'peso' : 5
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
// console.log(bici);

// definisco il paso minimo in una variabile
    var pesoMinimo = bici[0].peso;
// mi salvo un indice che tiene traccia del peso minore
    var indice = 0;
// Ciclo tutte le bici e loro proprietà
    for (var i = 0; i < bici.length; i++) {
// salvo la bici corrente in una variabile
        var biciCorrente= bici[i];
        var biciPeso = biciCorrente.peso;
// confronto con il peso minimo
        if (biciPeso < pesoMinimo) {
        pesoMinimo = biciPeso;
// salvo l'indice
        indice= i;

        }
}

// Stampare a schermo la bici con peso minore.
console.log(bici[indice].nome)
console.log(bici[indice].peso)



// devo comparare la bici corrente alla posizione uno e salvare una variabile con cui comparo le altre

})
