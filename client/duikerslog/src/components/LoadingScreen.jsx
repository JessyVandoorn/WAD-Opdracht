import React from "react";
import '../css/index.css';
// import ReactLoading from 'react-loading';

const LoadingScreen = () => {
    return(
        <section className="height sectionEmpty">
            <p className="blackBar">Alles is aan het inladen voor de beste ervaring</p>
            {/* <ReactLoading type="bars" color="#FCC141" /> */}
        </section>
    )
};

export default LoadingScreen;