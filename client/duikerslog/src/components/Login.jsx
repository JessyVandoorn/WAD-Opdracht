import React from 'react';
import {observer} from "mobx-react";
import {Link} from 'react-router-dom';
// import * as routes from '../lib/routes.js';
import * as validation from '../lib/validation.js';
import PropTypes from 'prop-types';

const Login = ({store, history}) => {
  const {login, currentUser, loginFB} = store;

  const handleLogin = e => {
    e.preventDefault();

    login({
      email: e.target.email.value,
      password: e.target.password.value,
      history: history,
      form: e.target
    });
  };

  const handleValidation = $form => {
    if ($form) {
      $form.noValidate = true;
      $form.addEventListener(`submit`, validation.handleSubmitForm);
      validation.addValidationListeners([...$form.elements]);
    }
  };

  return (
    <section className='section-form'>
      {/* <img className='form-img' width='394' height='417' alt='Schilderij met de toren van babel' src='./assets/svg/babel.svg'/> */}
      {currentUser ? history.push('/Account') : <div className='form-container-div'> 
        <h2 className='subtitle-small'>Inloggen</h2>
        <form className='form-container' onSubmit={e => handleLogin(e)} ref={$form => handleValidation($form)}>
          <p className='error'></p>
          <div className='form-item'>
            <label className='label' htmlFor='email'>E-mailadres</label>
            <p className='form-error'></p>
            <input className='input' type='email' name='email' placeholder='Typ hier je e-mailadres' id='email' required/>
          </div>
          <div className='form-item'>
            <label className='label' htmlFor='password'>Wachtwoord</label>
            <p className='form-error'></p>
            <input className='input' type='password' name='password' placeholder='Typ hier je wachtwoord' id='password' required/>
          </div>
          <input className='btn btn-arrow btn-form' type='submit' value='Inloggen' />
        </form>
        <p className='of'>of</p>
        {/* <button className='btn btn-form btn-fb' onClick={() => loginFB()}><img width='44' height='24' alt='Facebook logo' src='./assets/svg/fb.svg'/><span>Inloggen met facebook</span></button> */}
        <aside className='changeregister'>
          <h3>Nog geen account?</h3>
          <Link className='href' to='/Register'>Registreren</Link>
        </aside>
  </div> }
    </section>
  );
};

Login.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default observer(Login);