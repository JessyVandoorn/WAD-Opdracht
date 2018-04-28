import Api from "../api/dives.js";
import Dive from '../models/Dive';
import {decorate, observable} from 'mobx';

class Store {

    duiken = [];
    places = [];

    constructor(){
        this.fetchFromApi();
        this.api = new Api();
    }

    add = value => {
        this.api.create(value).then(dive => this._add(dive));
    }

    _add = dive => {
        const {datum, locatie, diepte, temperatuur, buddy, luchtStart, luchtEind, _id} = dive;
        this.duiken.push(new Dive(datum, locatie, diepte, temperatuur, buddy, luchtStart, luchtEind, _id));
    }

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