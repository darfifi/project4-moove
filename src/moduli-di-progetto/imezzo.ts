import { IUtente } from "./iutente";

export interface IMezzo { 
    tipo: string;
    ID: string;
    stato: string;
    abbinato: boolean;
    
    assegnaUtente(utente: IUtente): void;
}

// Implementazione dell'interfaccia IMezzo tramite la classe Mezzo

export class Mezzo implements IMezzo {
    tipo: string;
    ID: string;
    stato: string = 'disponibile'; // La proprietà stato è inizialmente settata a disponibile
    abbinato: boolean = false; // Questa proprietà ci dice se il mezzo è stato abbinato o meno ad una città specifica

    constructor(tipo: string, ID: string) {
        this.tipo = tipo;
        this.ID = ID;
    }

    assegnaUtente(utente: IUtente): void {
        this.stato = 'impegnato';
        console.log(`Utente ${utente.nome} ${utente.cognome} assegnato a mezzo ${this.ID}`);
    }
}







