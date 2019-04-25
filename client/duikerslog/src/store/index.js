import {decorate, observable} from 'mobx';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

class Store {

    places = [];
    currentUser = null;

    constructor(){
        this.fetchFromApi();
        const config = {
            apiKey: "AIzaSyBuvE-v8Ix-9mevB2Mg19ZeZ9UJla7rTm0",
            authDomain: "duikapp.firebaseapp.com",
            databaseURL: "https://duikapp.firebaseio.com",
            projectId: "duikapp",
            storageBucket: "",
            messagingSenderId: "298198164929"
          };

          const app = firebase.initializeApp(config);
          this.provider = new firebase.auth.FacebookAuthProvider();
    }
    errorData = err => console.log(err);

    addPlace = item => {
        this.places.push(item);
    }

    checkUser = user => {
        if (user) {
          this.authenticated = true;
          this.currentUser = user;
        } else {
          this.authenticated = false;
          this.currentUser = null;
        }
      }
    
      login = d => {
        const {email, password, history, form} = d;
    
        try {
          firebase.auth().signInWithEmailAndPassword(email, password).catch(err => {
            err
              ? form.querySelector(`.error`).textContent = err.code === `auth/wrong-password`
                ? `Je email en/of wachtwoord zijn niet correct`
                : ``
              : history.push('/Account');
          });
        } catch (e) {
          console.log(e);
        }
      }

      register = d => {
        const {username, email, password, history, form} = d;
    
        try {
          firebase.auth().createUserWithEmailAndPassword(email, password).then(authUser => this.setUsername(username)).catch(
            err => err
              ? form.querySelector(`.error`).textContent = err.code === `auth/email-already-in-use`
                ? `Dit emailadres is al in gebruik`
                : ``
              : history.push('/Account'));
        } catch (e) {
          console.log(e);
        }
      }
    
      logout = history => firebase.auth().signOut().catch(
        err => err
          ? console.log(err)
          : history.push('/Account'));

    get url(){
        return '/data/evenementen.json';
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