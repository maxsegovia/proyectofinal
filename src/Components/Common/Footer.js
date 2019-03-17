import React, { Component } from 'react';
import axios from 'axios';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailInput: '',
            showMessage: false,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ emailInput: event.target.value });
    }

    renderLabel() {
        if (this.state.showMessage && this.state.emailInput) {
            return (
                <div class="alert alert-success"><label>¡Gracias por suscribirte! Te enviaremos correo con nuestras novedades.</label></div>
            );
        }
    }

    render() {
        const headers = {
                "Content-Type": "application/json",
                "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK"
        };
        return (
            <footer className="footer-main container-fluid no-padding">
                <div className="container">
                    <div className="footer-bottom col-md-12 col-sm-12 col-xs-12 no-padding">
                        <div className="row">
                            <div className="col-md-5 col-sm-5 col-xs-6 copyright">
                                <p>&copy; Rentamarine 2018. Todos los derechos reservados. </p>
                            </div>
                            <div className="col-md-7 col-sm-7 col-xs-6">
                                <p className="avisoDePrivacidad" style={{ color: 'white', textAlign: 'right'}} onClick={this.props.onClickAviso}>Aviso de Privacidad</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export { Footer };
