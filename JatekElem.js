export default class JatekElem {
    constructor(index, initialState) {
        this.index = index;
        this.allapot = kezdetiAllapot;
        this.elem = document.createElement("div");
        this.elem.classList.add("lampa");
        this.frissitSzint();
        this.elem.addEventListener("click", () => this.kattintas());
    }

    frissitSzint() {
        this.elem.style.backgroundColor = this.allapot ? "yellow" : "gray";
    }

    kattintas() {
        const esemeny = new CustomEvent("allapotValtozas", {
            detail: { index: this.index }
        });
        window.dispatchEvent(esemeny);
    }

    allapotValtas() {
        this.allapot = !this.allapot;
        this.frissitSzint();
    }
}
