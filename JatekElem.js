export default class JatekElem {
    constructor(index, initialState) {
        this.index = index;
        this.allapot = kezdetiAllapot;
        this.elem.classList.add("lampa");
        this.frissitSzint();
        this.elem.addEventListener("click", () => this.kattintas());
    }

}
