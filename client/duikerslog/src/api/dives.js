class Api {
    url = 'http://localhost:4000/dives';

    getAll = () => {
        return fetch(`${this.url}`).then(r => r.json());
      };

    create = (datum, locatie, diepte, temperatuur, buddy, luchtStart, luchtEind) => {
        return fetch(this.url, {
            method: 'POST',
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify({ datum, locatie, diepte, temperatuur, buddy, luchtStart, luchtEind })
        })
        .then(r => r.json());
    }
}

export default Api;