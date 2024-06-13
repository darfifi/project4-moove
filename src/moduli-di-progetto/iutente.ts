import { ICitta } from "./icitta";
import { IMezzo } from "./imezzo";
import { CartaPagamento } from "./carta-pagamento";
import { Citta } from "./icitta";
import { Mezzo } from "./imezzo";

export interface IUtente {
    nome: string;
    cognome: string;
    email: string;
    citta: ICitta;
    mezzo: IMezzo | null;
    cartaDiPagamento: CartaPagamento | null;
    metodoPagamentoValido: boolean;

    inserisciMetodoPagamento(carta: CartaPagamento): void;
    visualizzaMezzi(): void;
    prenotaMezzo(mezzo: IMezzo, tipoNoleggio: string): void;
    rilasciaMezzo(): void;
}

// Implementazione dell'interfaccia IUtente tramite la classe Utente

export class Utente implements IUtente {
    nome: string;
    cognome: string;
    email: string;
    citta: Citta;
    mezzo: Mezzo | null = null;
    cartaDiPagamento: CartaPagamento | null = null;
    metodoPagamentoValido: boolean = false;
    

    constructor(nome: string, cognome: string, email: string, citta: Citta) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.citta = citta;
    }

    inserisciMetodoPagamento(carta: CartaPagamento): void {
        if (carta.verifica()) {
            this.metodoPagamentoValido = true;
            this.cartaDiPagamento = carta;
            console.log(`la carta ${carta.numeroCarta} è stata inserita correttamente`);
            console.log(`Buon divertimento con i servizi Moove!`)
        } else {
            console.log(`La carta ${carta.numeroCarta} è scaduta. Per favore inserisci una nuova carta.`);
        }        
    }

    visualizzaMezzi(): void {
        console.log(`Benvenuto ${this.nome}, qui di seguito trovi la lista mezzi della città di ${this.citta.nomeCitta}`);
        console.log(this.citta.mezziDisponibili);
    }

    prenotaMezzo(mezzo: Mezzo, tipoNoleggio: string): void {

        if (this.metodoPagamentoValido && this.cartaDiPagamento?.verifica() && mezzo.stato == 'disponibile') {
            mezzo.assegnaUtente(this);
            this.mezzo = mezzo;
            let dataNoleggio: Date = new Date();
            let scadenza: Date;
            console.log(`Il mezzo ${mezzo.tipo} con ID ${mezzo.ID} è stato assegnato all'utente ${this.nome} ${this.cognome}`);
            console.log(`Data ed ora inzio noleggio: ${dataNoleggio}`);
            console.log(`Tipologia noleggio: ${tipoNoleggio}`);
            switch (tipoNoleggio) {
                case 'mensile': 
                    scadenza = new Date(dataNoleggio.getTime() + 30 * 24 * 60 * 60 * 1000);
                    console.log(`Scadenza noleggio: ${scadenza}`)
                    break;
                case 'settimanale':
                    scadenza = new Date(dataNoleggio.getTime() + 7 * 24 * 60 * 60 * 1000);
                    console.log(`Scadenza noleggio: ${scadenza}`)
                    break;
                case 'giornaliero':
                    scadenza = new Date(dataNoleggio.getTime() + 1 * 24 * 60 * 60 * 1000);
                    console.log(`Scadenza noleggio: ${scadenza}`)
                    break;
                default:
                    break;
            }
        } else {
            if (this.metodoPagamentoValido) { 
                console.log(`Ciao ${this.nome}, il mezzo richiesto è già impegnato! Prova con un altro`);
            } else {
                if (this.cartaDiPagamento) {
                    console.log(`Attenzione! La carta di pagamento registrata è scaduta. Cambiare carta per favore`)
                } else {
                    console.log(`Ciao ${this.nome}, manca purtroppo l'informazione sul pagamento!`);
                    console.log(`Inserisci per favore un metodo di pagamento valido, grazie.`);
                }  
            }
        }
    }

    rilasciaMezzo(): void {
        if(!this.mezzo) {
            console.log(`Ciao ${this.nome}, non hai nessun mezzo da rilasciare! Grazie`);
        } else {
            this.mezzo.stato = 'disponibile';
            this.mezzo = null;
            console.log(`Grazie ${this.nome} per aver usufruito del nostro servizio.`)
            console.log(`Torna a trovarci presto su Moove!`);
        }
    }
}


