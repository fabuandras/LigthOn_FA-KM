export class Lampa {
    constructor(index, szuloElem) {
        this.adat = index;
        this.allapot = Math.random() < 0.2;
        this.szuloElem = szuloElem;

        this.htmlElem = document.createElement("div");
        this.htmlElem.className = "lampa";
        this.szuloElem.appendChild(this.htmlElem);

        this.megjelenit();
        this.esemenyKezelo();
    }

    megjelenit() {
        this.htmlElem.style.backgroundColor = this.allapot ? "yellow" : "gray";
    }

    esemenyKezelo() {
        this.htmlElem.addEventListener("click", () => {
            const esemeny = new CustomEvent("lampaKattintas", { detail: this.adat });
            window.dispatchEvent(esemeny);
        });
    }
}