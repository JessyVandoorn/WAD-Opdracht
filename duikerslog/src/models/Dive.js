import {observable, decorate} from "mobx";
import uniqid from "uniqid";

class Dive {
    constructor(Locatie, Diepte, Datum, Temperatuur, Buddy, luchtStart, luchtEind){
        this.Locatie = Locatie;
        this.Datum = Datum;
        this.Diepte = Diepte;
        this.Temperatuur = Temperatuur;
        this.Buddy = Buddy;
        this.luchtStart = luchtStart;
        this.luchtEind = luchtEind;
        this.id = uniqid();
    }
}

decorate(Dive, {
    Locatie: observable,
    Datum: observable,
    Diepte: observable,
    Temperatuur: observable,
    Buddy: observable,
    luchtStart: observable,
    luchtEind: observable
  });

export default Dive;
