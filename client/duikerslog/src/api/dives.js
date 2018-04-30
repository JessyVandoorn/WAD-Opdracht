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

    remove = dive => {
        return fetch(`${this.url}/${dive.id}`, this.getOptions(`delete`))
      .then(r => r.json())
      .catch(err => console.error(err));
    }

    getOptions = (method, body = null) => {
        const options = {
          method: method.toUpperCase(),
          headers: {
            "content-type": `application/json`
          }
        };
        if (body) {
          options.body = JSON.stringify(body);
        }
        return options;
      };
}

export default Api;