import React, { Component } from "react";
import '../css/index.css';
import { Link } from "react-router-dom";

class NotFound extends Component {

    render = () => {
        return (
            <section className="notfound">
                <h2 className="notfound-title">Oops...</h2>
                <p className="notfound-content">Het lijkt dat je verdwaald bent. We kunnen de pagina niet vinden waar je naar op zoek bent.</p>
                <p className="button-next button-next--primary"><Link to="/Home">Ga naar de homepagina <i className="arrow right"></i></Link></p>
            </section>
        )
    }
};

export default NotFound;