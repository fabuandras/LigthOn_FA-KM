import Jatekter from "./Jatekter.js";
//import InfoBox from "./InfoBox.js";

const jatekterElem = document.querySelector(".jatekter");
const jatekter = new Jatekter(jatekterElem);
    
document.querySelector(".ujJatek").addEventListener("click", () => {
    jatekter.ujJatek();
});