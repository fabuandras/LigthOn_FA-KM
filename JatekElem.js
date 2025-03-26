export class JatekElem {
    #adat;
    #index;
    constructor(adat, index, szuloElem) {
        this.#adat = adat;
        this.#index = index;
        this.szuloElem = szuloElem;
        console.log(this.szuloElem)
        this.megjelenit()
        this.esemenyKezelo()
    }
    megjelenit(){
        let html=`<div class="jatekter">${this.#adat}</div>`
        this.szuloElem.insertAdjacentHTML("beforeend",html)
    }
    esemenyKezelo(){
        this.elem = document.querySelector(".jatekter:first-child")
        this.elem.addEventListener("click",()=> {
            console.log(this.#index)
            const ce = new CustomEvent("kattint",{detail:this.#index})
            window.dispatchEvent(ce)
        })
    }
}
