import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { Mutation } from "react-apollo";
import ADD_DIVE from "../graphql/addDive";
import GET_ALLDIVES from "../graphql/getAllDives";

class AddDive extends Component {


   datum = null;
   locatie = null;
   diepte = null;
   temperatuur = null;
   buddy = null;
   start = null;
   eind = null;

   redirect = () => {
     console.log(this.props);
    this.props.history.push(`/Duikerslog`);
  }

  render =() => {
    return (
      <Mutation
        mutation={ADD_DIVE}
        update={(cache, {data: {addDive}}) => {
          if(cache.data.data.allDives){
            const data = cache.readQuery({
              query: GET_ALLDIVES
            });
            data.allDives.push(addDive);
            cache.writeQuery({
              query: GET_ALLDIVES,
              data
            });
            console.log(data.allDives);
          }
         
        }}
      >
      {(addDive) => (
        <form onSubmit={
          (e) => {
            e.preventDefault();
            if(this.datum.value){
              addDive({variables: {datum: this.datum.value, locatie: this.locatie.value, diepte: parseInt(this.diepte.value, 10), temperatuur: parseInt(this.temperatuur.value, 10), buddy: this.buddy.value, luchtStart:parseInt(this.start.value, 10), luchtEind: parseInt(this.eind.value, 10)}});
              this.redirect();
            }
          }
        }>
          <div>
            <label htmlFor="">Datum</label>
            <input type="text" className="input-content" autoFocus ref={field => this.datum = field} />
          </div>
          <div>
            <label htmlFor="">Locatie</label>
            <input type="text" className="input-content" autoFocus ref={field => this.locatie = field} />
          </div>
          <div>
            <label htmlFor="">Diepte</label>
            <input className="input-content" type="number"  autoFocus ref={field => this.diepte = field} />
          </div>
          <div>
            <label htmlFor="">Temperatuur</label>
            <input className="input-content" type="number"  autoFocus ref={field => this.temperatuur = field} />
          </div>
          <div>
            <label htmlFor="">Buddy</label>
            <input type="text" className="input-content" autoFocus ref={field => this.buddy = field} />
          </div>
          <div>
            <label htmlFor="">Lucht Start</label>
            <input className="input-content" type="number"  autoFocus ref={field => this.start = field} />
          </div>
          <div>
            <label htmlFor="">Lucht Eind</label>
            <input className="input-content" type="number"  autoFocus ref={field => this.eind = field} />
          </div>
            <input className="button" type="submit" value="Submit" />
          </form>
        )
      }
    </Mutation>
    )
  }
 
}

AddDive.propTypes =  {
  history: PropTypes.object.isRequired
}

export default withRouter(AddDive);

