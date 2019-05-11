import {decorate, observable} from 'mobx';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

class Store {

    places = [];
    currentUser = null;

    constructor() {
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
            .then(response => 
              response.json())
            .then(this.parsePlaces);
    }

    parsePlaces = data => {
      console.log(data.sites);
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