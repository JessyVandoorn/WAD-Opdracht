import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import '../../css/index.css';
import { Link } from 'react-router-dom';

import * as validation from '../../lib/validation.js';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  handleValidation = $form => {
    if ($form) {
      $form.noValidate = true;
      $form.addEventListener(`submit`, validation.handleSubmitForm);
      validation.addValidationListeners([...$form.elements]);
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => {
          this.setState({ feedback: error.message });
        });
      if (user) {
        this.props.history.push("/Account");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { email, password, feedback } = this.state;
    return (
      <section className="inloggen">
        <div>
          <h2 className="inlog-title">Inloggen</h2>
          <form onSubmit={this.handleSubmit} className="form-login" ref={$form => this.handleValidation($form)}>
          <p className='error'></p>
            <p className="form-error">{feedback}</p>
            <div className="input-field">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                name="email"
                onChange={e => this.setState({ email: e.target.value })}
                value={email}
                required
                placeholder="email@email.com"
              />
              <p className="form-error"></p>
            </div>

            <div className="input-field">
              <label htmlFor="password">Paswoord</label>
              <input
                id="password"
                type="password"
                name="password"
                required
                placeholder="Paswoord"
                onChange={e => this.setState({ password: e.target.value })}
                value={password}
              />
              <p className="form-error"></p>
              <p className="paswoordvergeten"><Link to="/Reset">Paswoord vergeten?</Link></p>
            </div>

            <div className="button-next button-next--primary" >
                <input type="submit" value="Inloggen" /> <i className="arrow right"></i>
            </div>
          </form>
          <p>Nog geen account? Registreer je <Link to="/Register" className="directlink">hier.</Link></p>
        </div>
      </section>
    );
  }
}

export default Login;
