class Api {
    url = 'http://http://localhost:4000/dives';

    create = content => {
        return fetch(this.url, {
            method: 'POST',
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify({ content })
        })
        .then(r => r.json());
    }
}

export default Api;