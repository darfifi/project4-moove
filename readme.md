
DESCRIZIONE GENERALE

Progetto interamente realizzato in Typescript, non è prevista l'implementaizone di una interfaccia utente realizzata in HTML/CSS. 
Il deploy del progetto viene pertanto effettuato su Codepen al seguente link dal quale poter provare la funzionalità dello stesso:

https://codepen.io/darfifi/pen/BaedOyy?editors=0011

Lo scopo del progetto è quello di modellare la gestione di un sistema di prenotazione di mezzi elettrici per la micromobilità in una determinata città dove
è presente il serivio offerto dalla società Moove.

Il progetto è fortemente orientato agli oggetti e fortemente tipizzato come previsto dall'utilizzo di Typescript. 

FUNZIONAMENTO

Un generico utente, registrato al servizio fornito da Moove, può effettuare le seguenti operazioni:

    - inserire un metodo di pagamento (è previsto l'inserimento di una carta di pagamento)
    - visualizzare la lista di tutti i mezzi disponibili nella città in cui si trova
    - prenotare un mezzo specifico
    - rilasciare un mezzo

All'atto della prenotazione verrà verificato se la carta di credito associata è valida oppure è scaduta. Inoltre viene effettuata una verifica se il mezzo è disponibile o impegnato. 
Qualora ci sia il via libera alla prenotazione lo stato del mezzo verrà passato da libero ad occupato. Viene inoltre registrata la data ed ora di prenotazione e, sulla base del tipo di noleggio scelto dal cliente verrà visualizzata a schermo anche la scadenza del noleggio. 
Nel momento in cui il mezzo viene rilasciato dall'utente vengono nell'ordine effettuate le seguenti operazioni:

    - passaggio di stato da occupato a libero
     

IMPLEMENTAZIONE

E' prevista la definizione di alcune interfacce principali su cui si basa l'interscambio dei dati e sono:

    - ICitta - per la modellazione appunto della generica città dove presente il servizio
    - IMezzo - per la modellazione del generico mezzo a disposizione dell'utente
    - IUtente - per la modellazione dell'utente che intende usufruire del servizio

A fronte delle interfacce sono state create ed implementate le rispettive classi

    - Citta
    - Mezzo
    - Utente

Inoltre è stata definita una classe estremamente semplificata che modella le carte di pagamento (CartaPagamento)

Per il progetto è stato utilizzato lo strumento webpack per avere un unico file bundle.ts da caricare su codepen mentre su github è possibile visionare la struttura logica dello stesso.
E' stata creata nello specifica una cartella di progetto src ed al suo interno il file index.ts (entry point del progetto) ed una sottocartella 'moduli-di-progetto' dove sono stati inseriti appunto i moduli relativi alle varie interfacce/classi.

Nella cartella 'dist' all'interno della root directory si trova invece il file assemblato che è stato pubblicato su codepen.
La cartella 'dist' è stata esclusa dalla pubblicazione su github così come la cartella 'node_modules'

Nel file index.js si è proceduto con la definizione di alcune istanze Citta, Utente e Mezzo, nello specifico:


    /* Definizione mezzi */

    const mezzo1 = new Mezzo('biciletta', 'B-0001');
    const mezzo2 = new Mezzo('biciletta', 'B-0002');
    const mezzo3 = new Mezzo('biciletta', 'B-0003');
    const mezzo4 = new Mezzo('biciletta', 'B-0004');
    const mezzo5 = new Mezzo('biciletta', 'B-0005');

    const mezzo6 = new Mezzo('monopattino', 'M-0001');
    const mezzo7 = new Mezzo('monopattino', 'M-0002');
    const mezzo8 = new Mezzo('monopattino', 'M-0003');
    const mezzo9 = new Mezzo('monopattino', 'M-0004');
    const mezzo10 = new Mezzo('monopattino', 'M-0005');

    const mezzo11 = new Mezzo('scooter', 'S-0001');
    const mezzo12 = new Mezzo('scooter', 'S-0002');
    const mezzo13 = new Mezzo('scooter', 'S-0003');
    const mezzo14 = new Mezzo('scooter', 'S-0004');
    const mezzo15 = new Mezzo('scooter', 'S-0005');

    /* Definizione città */

    const londra = new Citta('Londra');
    const berlino = new Citta('Berlino');
    const barcellona = new Citta('Barcellona');
    

    /* Definizione utenti */

    const utente1 = new Utente('Dario', 'Fresi', 'dario.fresi@gmail.com', londra);
    const utente2 = new Utente('Paolo', 'Rossi', 'paolo.rossi@gmail.com', londra);
    const utente3 = new Utente('Franco', 'Bianchi', 'franco.bianchi@gmail.com', barcellona);

La prova di funzionamento invece è stata realizzata direttamente su codepen per dare maggiore chiarezza sull'utilizzo dei vari metodi.
Ogni operazione è comunque preceduta da una descrizione breve.
