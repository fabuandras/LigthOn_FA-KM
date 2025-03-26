import JatekElem from "./JatekElem.js";

export default class JatekTer {
    #lista = [false, true, false, false, false, false, false, false, true];
    //false: le van kapcsolva a lámpa
    //true: fel van kapcsolva a lámpa
    constructor(szuloElem) {
        this.szuloElem = szuloElem;
        this.megjelenit();
        this.kivalasztEsemenykezelo();
    }

    kivalasztEsemenykezelo() {
        window.addEventListener("kivalaszt", (event) => {
            let index = event.detail;
            this.#lista[index] = !this.#lista[index];
            this.megjelenit();
        });
    }

    megjelenit() {
        this.szuloElem.innerHTML = "";
        for (let index = 0; index < this.#lista.length; index++) {
            new JatekElem(
                this.#lista[index],
                index,
                this.szuloElem
            );
        }
    }
}