class Dive {
    constructor(value){
        this.Locatie = value[1];
        this.Datum = value[0];
        this.Diepte = value[2];
        this.Temperatuur = value[3];
        this.Buddy = value[4];
        this.luchtStart = value[5];
        this.luchtEind = value[6];
        this.created = Date.now();
    }
}

export default Dive;
