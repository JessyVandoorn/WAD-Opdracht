import {observable, decorate} from "mobx";
import uniqid from "uniqid";

class Dive {
    constructor(datum, locatie, diepte, temperatuur, buddy, luchtStart, luchtEind){
        this.locatie = locatie;
        this.datum = datum;
        this.diepte = diepte;
        this.temperatuur = temperatuur;
        this.buddy = buddy;
        this.luchtStart = luchtStart;
        this.luchtEind = luchtEind;
        this.id = uniqid();
    }
}

decorate(Dive, {
    locatie: observable,
    datum: observable,
    diepte: observable,
    temperatuur: observable,
    buddy: observable,
    luchtStart: observable,
    luchtEind: observable
  });

export default Dive;
