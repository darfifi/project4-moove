import { Citta } from "./moduli-di-progetto/icitta";
import { Mezzo } from "./moduli-di-progetto/imezzo";
import { Utente } from "./moduli-di-progetto/iutente";
import { CartaPagamento } from "./moduli-di-progetto/carta-pagamento";

// COSTRUZIONE ISTANZE PER PROVA PROGETTO

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


// PROVA DI FUNZIONAMENTO 

    console.log('Aggiungo alcuni mezzi alla città di Londra')
    console.log('');

    // Aggiunta di mezzi ad una città a scelta

    londra.aggiungiMezzo(mezzo1);
    londra.aggiungiMezzo(mezzo2);
    londra.aggiungiMezzo(mezzo6);
    londra.aggiungiMezzo(mezzo7);
    londra.aggiungiMezzo(mezzo11);
    londra.aggiungiMezzo(mezzo12);

    console.log('');
    console.log(`L'utente1 visualizza la lista dei mezzi assegnati alla città`);

    console.log('');
    utente1.visualizzaMezzi();

    console.log('');
    console.log('utente1 (Dario) prova a prenotare un mezzo senza aver inserito un metodo di pagaemnto valido');

    console.log('');
    utente1.prenotaMezzo(mezzo1, 'mensile');

    console.log('');
    console.log('Ora utente1 registra un metodo di pagaemnto non valido (scaduto) e prenota il mezzo1');

    utente1.inserisciMetodoPagamento(new CartaPagamento(1111222233334444, new Date(2020, 3)));
    console.log('');
    utente1.prenotaMezzo(mezzo1, 'mensile');

    console.log('');
    console.log('Ora utente1 inserisce un metodo di pagaemnto valido e riprova con la prenotazione del mezzo1');

    utente1.inserisciMetodoPagamento(new CartaPagamento(1111333355557777, new Date(2027, 3)));
    console.log('');
    utente1.prenotaMezzo(mezzo1, 'mensile');

    console.log('');
    console.log(`L'utente2 registra una carta di credito e prova a prenotare il mezzo1 già prenotato da utente1`);

    utente2.inserisciMetodoPagamento(new CartaPagamento(7777999900001111, new Date(2030, 9)));
    console.log('');
    utente2.prenotaMezzo(mezzo1, 'mensile');

    console.log('');
    console.log('utente 2 visualizza la lista aggiornata dei mezzi assegnati alla città');

    utente2.visualizzaMezzi();

    console.log('');
    console.log(`L'utente1 rilascia il mezzo a sua disposizione`);

    utente1.rilasciaMezzo();

    console.log('');
    console.log(`L'utente 2 richiede nuovamente la lista dei mezzi per controllare se il mezzo1 è adesso disponibile`);

    utente2.visualizzaMezzi();








