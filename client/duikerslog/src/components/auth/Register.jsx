import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { Mutation } from "react-apollo";
import REGISTER from "../../graphql/register";
import { Link } from 'react-router-dom';

import * as validation from '../../lib/validation.js';

class Register extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { feedback: null };
  }

  handleValidation = $form => {
    if ($form) {
      $form.noValidate = true;
      $form.addEventListener(`submit`, validation.handleSubmitForm);
      validation.addValidationListeners([...$form.elements]);
    }
  };


  handleSubmit = async (e, register) => {
    e.preventDefault();
    e.persist();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const auth = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(error => {
          this.setState({ feedback: error.message });
        });
      const user =  register({
        variables: { 
          name: e.target.name.value, 
          authid: auth.user.uid, 
          email: e.target.email.value, 
        }
      });
      if (user) {
        this.props.history.push("/");
      }
    } catch (error) {
      console.log(error.code, error.message);
    }
  };

  render() {
    // const { feedback } = this.state;
    return (
      <div className="registreren">
        <h2 className="register-title">Registreren</h2>
        <Mutation mutation={REGISTER}>
          {register => (
            <form onSubmit={e => this.handleSubmit(e, register)} className="form-register" ref={$form => this.handleValidation($form)}>
            <p className='error'></p>
              {/* <p className="form-error">{feedback}</p> */}

              <div className="input-field">
                <label htmlFor="name">Naam</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Jouw naam"
                />
                <p className="form-error"></p>
              </div>

              

              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email@email.com"
                  required
                />
                <p className="form-error"></p>
              </div>

              <div className="input-field">
                <label htmlFor="password">Paswoord</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Paswoord"
                  required
                />
                <p className="form-error"></p>
              </div>

              

                  

              <div className="button-next button-next--primary" >
                <input type="submit" value="Registreren" /> <i className="arrow right"></i>
              </div>
              <p className="forminfo">Heb je al een account? Log je <Link to="/Login" className="directlink">hier</Link> in.</p>
            </form>
          )}
        </Mutation>
      </div>
    );
  }
}

export default Register;