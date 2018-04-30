import Api from "../api/dives.js";
import Dive from '../models/Dive.js';
import {decorate, observable} from 'mobx';

class Store {

    dives = [];
    places = [];

    constructor(){
        this.fetchFromApi();
        this.api = new Api();
        this.api.getAll().then(dives => this._add(...dives));
    }

    add = (datum, locatie, diepte, temperatuur, buddy, luchtStart, luchtEind) => {
        // const {datum, locatie, diepte, temperatuur, buddy, luchtStart, luchtEind} = value;
        this.api.create(datum, locatie, diepte, temperatuur, buddy, luchtStart, luchtEind).then(dive => this._add(dive));
    }

    _add = (...dives) => {
        dives.forEach(dive => {
            const {datum, locatie, diepte, temperatuur, buddy, luchtStart, luchtEind, _id} = dive;
            this.dives.push(new Dive(datum, locatie, diepte, temperatuur, buddy, luchtStart, luchtEind, _id));
        })
    }

    remove = dive => {
        this.api.remove(dive).then(() => this._remove(dive));
      };
    
      _remove = dive => {
        this.dives.remove(dive);
      };

    addPlace = item => {
        this.places.push(item);
    }

    get url(){
        return '/data/divePlaces.json';
    }

    fetchFromApi(){
        fetch(this.url)
            .then(response => response.json())
            .then(this.parsePlaces);
    }

    parsePlaces = data => {
        data.sites.forEach(item => {
            this.addPlace(item);
        })
    }

}

decorate(Store, {
    dives: observable,
    datum: observable,
    locatie: observable,
    temperatuur: observable,
    diepte: observable,
    buddy: observable,
    luchtStart: observable,
    luchtEind: observable
});

const store = new Store();
export default store;