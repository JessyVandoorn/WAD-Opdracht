import {decorate, observable} from 'mobx';

class Store {

    places = [];

    constructor(){
        this.fetchFromApi();
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
    places: observable
});

const store = new Store();
export default store;