import Dive from '../models/Dive';
import {decorate, observable, action, computed} from 'mobx';

class Store {

    dives = [];
    places = [];

    constructor(){
        this.addDive(new Dive("15 oktober", "Todi", "10", "24", "Jeroen", "300", "100"));
        this.addDive(new Dive("6 augustus", "Grote Hegge", "10", "22", "Jean-Claude", "300", "100"));
        this.addDive(new Dive("6 mei", "Oesterhaven", "10", "20", "Gilles", "300", "100"));
    }

    addDive = dive => {
        this.dives.push(dive);
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
        console.log(data);
        this.places = data;
    }

}

decorate(Store, {
    dives: observable,
    addDive: action,
    parsePlaces: action,
    url: computed
});

const store = new Store();
export default store;