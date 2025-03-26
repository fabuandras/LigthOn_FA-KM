import JatekElem from "./JatekElem.js";

export default class Jatekter {
    #lista = [];
    constructor(szuloElem, infoBox) {
        this.szuloElem = szuloElem;
        this.infoBox = infoBox;
        this.ujJatek();
        this.esemenykezelo();
    }

    ujJatek() {
        this.#lista = [];
        for (let i = 0; i < 9; i++) {
            this.#lista.push(true); // Minden lámpa fel van kapcsolva
        }
        this.megjelenit();
        this.infoBox.frissit(this.#lista);
    }

    esemenykezelo() {
        window.addEventListener("kattint", (event) => {
            let index = event.detail;
            this.#lista[index] = !this.#lista[index];
            this.megjelenit();
            this.infoBox.frissit(this.#lista);
        });
    }

    megjelenit() {
        this.szuloElem.innerHTML = "";
        for (let index = 0; index < this.#lista.length; index++) {
            new JatekElem(this.#lista[index], index, this.szuloElem);
        }
    }
}