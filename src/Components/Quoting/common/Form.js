import React, { Component } from 'react';
// import '../../Contact/Contact.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="contact-us">
                <form className="contact-form">
                    <div className="row">
                        <div className="form-group col-sm-12">
                            <input type="text" name="contact-name" id="input_name" className="form-control" placeholder="Nombre completo *" value={this.props.name} onChange={this.props.onChangeName} required/>
                        </div>
                        <div className="form-group col-sm-12">
                            <input type="email" name="contact-email" id="input_email" className="form-control" placeholder="Correo Electrónico *" value={this.props.email} onChange={this.props.onChangeEmail} required/>
                        </div>
                        <div className="form-group col-sm-12">
                            <input type="text" name="contact-phone" id="input_phone" className="form-control" placeholder="Telefono *" value={this.props.phone} onChange={this.props.onChangePhone} required />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
