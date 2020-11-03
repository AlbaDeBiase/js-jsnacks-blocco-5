// JSnack2: Creare un array di nomi e chiedere all'utente due numeri.
// Creare un nuovo array con i valori che si trovano in una posizione compresa tra i due numeri inseriti dall'utente.





$(document).ready(function() {
// creo un array di nomi
        var nomi = ['Alba', 'Dario', 'Isabella','Maria'];

    // console.log(nomi);
// chiedo all'utente 2 numeri
        var numero1 = parseInt(prompt('Inserisci un numero'));
        var numero2 = parseInt(prompt('Inserisci un altro numero'));

        console.log(numero1);
        console.log(numero2);

// se la posizione corrente si trova tra numero 1 e numero 2 stampo e inserisco in nuovo array.
        var nuovoArray= [0,1,2,3];
        i=0;
    for (var i = 0; i < nomi.length; i++) {
        nomi[i];
        console.log(nomi);
}
        var posizioneCorrente = numero1 && numero2;
        posizioneCorrente.push(nuovoArray);
        console.log(nuovoArray);


})
