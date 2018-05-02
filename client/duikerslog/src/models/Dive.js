import uniqid from "uniqid";

class Dive {
    

    constructor(datum, locatie, diepte, temperatuur, buddy, luchtStart, luchtEind, id = null){
        this.locatie = locatie;
        this.datum = datum;
        this.diepte = diepte;
        this.temperatuur = temperatuur;
        this.buddy = buddy;
        this.luchtStart = luchtStart;
        this.luchtEind = luchtEind;
        this.id = id;
    }
}

export default Dive;
