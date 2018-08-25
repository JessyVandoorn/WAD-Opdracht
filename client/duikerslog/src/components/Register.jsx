import React from 'react';
import {observer} from "mobx-react";
import {Link} from 'react-router-dom';
// import * as routes from '../lib/routes.js';
import * as validation from '../lib/validation.js';
import PropTypes from 'prop-types';

const Register = ({store, history}) => {
  const {register, currentUser} = store;

  const handleRegister = e => {
    e.preventDefault();
    register({
      email: e.target.email.value,
      password: e.target.password.value,
      username: e.target.name.value,
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
      {/* <img className='form-img' width='394' height='417' alt='Schilderij met de toren van babel' src='./assets/svg/mondriaan.svg'/>
      {currentUser ? history.push(routes.ACCOUNT) : <div  className='form-container-div'> */}
        <h2 className='subtitle-small'>Registreren</h2>
        <form onSubmit={e => handleRegister(e)} ref={$form => handleValidation($form)} className='form-container'>
          <p className='error'></p>
          <div className='form-item'>
            <label className='label' htmlFor='name'>Naam</label>
            <p className='form-error'></p>
            <input className='input' type='name' name='name' id='name' placeholder='Name' required />
          </div>
          <div className='form-item'>
            <label className='label' htmlFor='email'>Email</label>
            <p className='form-error'></p>
            <input className='input' type='email' name='email' id='email' placeholder='E-mail address' required />
          </div>
          <div className='form-item'>
            <label className='label' htmlFor='password'>Paswoord</label>
            <p className='form-error'></p>
            <input className='input' type='password' name='password' placeholder='Password' id='password' minLength='6' required />
          </div>
          <input className='btn btn-arrow btn-form' type='submit' value='Registreren' />
        </form>
        <aside className='changeregister'>
          <h3>Al een account?</h3>
          <Link className='href' to='/Login'>Inloggen</Link>
        </aside>
      {/* </div>} */}
    </section>
  );
};

Register.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default observer(Register);