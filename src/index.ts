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











