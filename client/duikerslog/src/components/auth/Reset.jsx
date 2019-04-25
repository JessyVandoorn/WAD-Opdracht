import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import '../../css/index.css';

import * as validation from '../../lib/validation.js';

class Reset extends Component {

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
        const { email } = this.state;
        try {
            const user = await firebase
                .auth()
                .sendPasswordResetEmail(email)
                .then(() => {
                    console.log(email);
                    this.props.history.push("/Login");
                })
                .catch(error => {
                    this.setState({ feedback: error.message });
                });
        } catch (error) {
            console.log(error);
        }
    }


    render() {
        const { email, feedback } = this.state;
        return (
            <section className="inloggen">
                <div>
                    <h2 className="inlog-title">Wachtwoord resetten</h2>
                    <form onSubmit={this.handleSubmit} className="form-login" ref={$form => this.handleValidation($form)}>
                        <p className='error'></p>
                        <p className="auth-feedback">{feedback}</p>
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
                        <div className="button-next button-next--primary" >
                            <input type="submit" value="Wachtwoord resetten" />
                            <i className="arrow right"></i>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default Reset;