import { IMezzo } from "./imezzo";
import { Mezzo } from "./imezzo";

export interface ICitta {
    nomeCitta: string;
    mezziDisponibili: IMezzo[];

    aggiungiMezzo(mezzo: IMezzo): void;
}


// Implementazione dell'interfaccia ICitta tramite la classe Citta

export class Citta implements ICitta {
    nomeCitta: string;
    mezziDisponibili: Mezzo[] = [];
    
    constructor(nomeCitta: string) {
        this.nomeCitta = nomeCitta;
    }

    aggiungiMezzo(mezzo: Mezzo): void {
        if (mezzo.abbinato === true) {
            console.log(`Il mezzo con ID ${mezzo.ID} è già registrato nel sistema`);
        } else {
            this.mezziDisponibili.push(mezzo);
            mezzo.abbinato = true;
            console.log(`Il mezzo con ID ${mezzo.ID} è stato assegnato correttamente alla città di ${this.nomeCitta}`);
        }
    }
}