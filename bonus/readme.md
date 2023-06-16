Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.


1-Creo una variabile vuota in data (random_email)
2-In mounted assegno alla variabile creata la proprietà "response" dell'oggetto data dell'API di Boolean
3-Inserisco nel DOM un tag <ul> e in cui , dentro i baffi, ci sarà la variabile random_email
4-Creo una funzione che genera 10 email partendo sempre dall'Api di Boolean
5-Pusho il risultato in un array vuoto
6-inserisco nel tag li la direttiva v-for 