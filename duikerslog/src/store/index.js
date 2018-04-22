import Dive from '../models/Dive';
import {decorate, observable, action} from 'mobx';

class Store {

    dives = [];

    constructor(){
        this.addDive(new Dive("15 oktober", "Todi", "10", "24", "Jeroen", "300", "100"));
        this.addDive(new Dive("6 augustus", "Grote Hegge", "10", "22", "Jean-Claude", "300", "100"));
        this.addDive(new Dive("6 mei", "Oesterhaven", "10", "20", "Gilles", "300", "100"));
    }

    addDive = dive => {
        this.dives.push(dive);
    }

}

decorate(Store, {
    dives: observable,
    addDive: action
});

const store = new Store();
export default store;