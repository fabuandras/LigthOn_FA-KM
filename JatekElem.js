export default class JatekElem {
    constructor(index, initialState) {
        this.index = index; // Pozíció a játéktérben
        this.allapot = kezdetiAllapot; // Kezdeti állapot
        this.elem = document.createElement("div");
        this.elem.classList.add("lampa");
        this.frissitSzint(); // Háttérszín frissítése
        this.elem.addEventListener("click", () => this.kattintas());
    }

    frissitSzint() {
        this.elem.style.backgroundColor = this.allapot ? "yellow" : "gray";
    }

    kattintas() {
        const esemeny = new CustomEvent("allapotValtozas", {
            detail: { index: this.index }
        });
        window.dispatchEvent(esemeny); // Esemény küldése
    }

    allapotValtas() {
        this.allapot = !this.allapot;
        this.frissitSzint(); // Szín frissítése állapot alapján
    }
}
