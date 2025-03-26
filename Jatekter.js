import JatekElem from "./JatekElem.js";

export default class JatekTer {
    #lista=[" ", "", " ", " ", " ", " ", " ", " ", ""];
    constructor(szuloElem) {
        this.szuloElem = szuloElem;
        this.megjelenit();
        this.kivalasztEsemenykezelo();
    }

    megjelenit() {
        this.szuloElem.innerHTML = "";
        
    }
}