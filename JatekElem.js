export default class JatekElem {
    constructor(adat, index, szuloElem) {
        this.adat = adat;
        this.index = index;
        this.szuloElem = szuloElem;
        this.elem = document.createElement("div");
        this.elem.classList.add("lampa");
        this.megjelenit();
        this.esemenyKezelo();
    }

    megjelenit() {
        this.elem.style.backgroundColor = this.adat ? "yellow" : "green";
        this.szuloElem.appendChild(this.elem);
    }

    esemenyKezelo() {
        this.elem.addEventListener("click", () => {
            window.dispatchEvent(new CustomEvent("kattint", { detail: this.index }));
        });
    }
}