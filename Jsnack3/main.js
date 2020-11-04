// JSnack3: A partire da un array di oggetti,
// creare una copia dell'array e aggiungere ai singoli elementi dell'array una nuova proprietà "position"
// che contiene una lettera casuale.




$(document).ready(function() {

var abitazioni = [
{
'nome':'villa',
'colore' : 'blu',
'superficie' : 110
},
{
'nome':'attico',
'colore' : 'verde',
'superficie' : 160
},
{
'nome':'loft',
'colore' : 'rosa',
'superficie' : 130
},
{
'nome':'mansarda',
'colore' : 'giallo',
'superficie' : 80
}
];

// console.log(abitazioni);

// Creo un array copia-vuoto
var copiaAbitazioni=[];

// scorro l'array abitazioni e recupero l'elemento corrente
for (var i = 0; i < abitazioni.length; i++) {

        var abitazione_corrente = abitazioni[i];


// Creo un nuovo oggetto con gli stessi valori dell'abitazione corrente
        var abitazione_copia = {
                    nome: abitazione_corrente['nome'],
                    codice: abitazione_corrente['colore'],
                    prezzo: abitazione_corrente['superficie'],
                    position: getRandomChar()
                };
// inserisco nell'array copiato, il nuovo elemento
                copiaAbitazioni.push(abitazione_copia);
                   }

                   console.log('Elenco abitazioni principale');
                   console.log(abitazioni);
                   console.log('Elenco abitazioni copia');
                   console.log(copiaAbitazioni);
               });

               // funzione che estrae una lettera casuale dall'alfabeto
               function getRandomChar() {
                   var alfabeto = 'abcdefghijklmnopqrstuvwxyz';
                   // scelgo un numero casuale tra 0 e 25 => questo è l'indice del carattere casuale
                   var posizione = getRndInteger(0, 25);
                   // recupero la lettera dell'alfabeto corrispondente
                   var lettera_casuale = alfabeto.charAt(posizione);
                   return lettera_casuale;
               }

               // funzione che estrae un numero casuale tra min e max
               function getRndInteger(min, max) {
                   return Math.floor(Math.random() * (max - min + 1) ) + min;
               }
