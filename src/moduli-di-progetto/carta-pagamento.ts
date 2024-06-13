// Definizione della classe CartaPagamento 

export class CartaPagamento {
    numeroCarta: number;
    scadenza: Date;

    constructor(numeroCarta: number, scadenza: Date) {
        this.numeroCarta = numeroCarta;
        this.scadenza = scadenza;
    }

    verifica(): boolean { // Il metodo restituisce un valore booleano e verifica con un semplice confronto di date la scadenza della carta di pagamento
        if (this.scadenza > new Date()) {
            return true;
        }
        return false;
    }
}