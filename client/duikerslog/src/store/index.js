import Api from "../api/dives.js";
import Dive from '../models/Dive';
import {decorate, observable} from 'mobx';

class Store {

    dives = [];
    places = [];

    constructor(){
        // this.addDive(new Dive("15 oktober", "Todi", "10", "24", "Jeroen", "300", "100"));
        // this.addDive(new Dive("6 augustus", "Grote Hegge", "10", "22", "Jean-Claude", "300", "100"));
        // this.addDive(new Dive("6 mei", "Oesterhaven", "10", "20", "Gilles", "300", "100"));
        // this.fetchFromApi();
        this.api = new Api();
    }

    add = value => {
        this.api.create(value).then(dive => this._add(dive));
    }

    _dive = dive => {
        const {Datum, Locatie, Diepte, Temperatuur, Buddy, luchtStart, luchtEind} = dive;
        this.dives.push(new Dive(Datum, Locatie, Diepte, Temperatuur, Buddy, luchtStart, luchtEind));
    }

    // addDive = dive => {
    //     this.dives.push(dive);
    //     console.log(dive);
    // }

    addPlace = item => {
        this.places.push(item);
    }

    // get url(){
    //     return '/data/divePlaces.json';
    // }

    // fetchFromApi(){
    //     fetch(this.url)
    //         .then(response => response.json())
    //         .then(this.parsePlaces);
    // }

    // parsePlaces = data => {
    //     data.sites.forEach(item => {
    //         this.addPlace(item);
    //     })
    // }

}

decorate(Store, {
    dives: observable,
    Datum: observable,
    Locatie: observable,
    Temperatuur: observable,
    Diept: observable,
    Buddy: observable,
    luchtStart: observable,
    luchtEind: observable
});

const store = new Store();
export default store;