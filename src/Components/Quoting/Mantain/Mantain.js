import React, { Component } from 'react';
import axios from 'axios';
// import '../../Contact/Contact.css';
import Form from '../common/Form';
import './mantain.css';

class Mantain extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <form className="contact-form">
                    <div className="row">
                        <div className="form-group col-md-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <h3>Selecciona el tipo de Agua de tu Pecera: </h3><br /><br />
                                    <div className="row radio-buttons">
                                        <div className="col-md-6">
                                            <label>
                                                <input type="radio" name="contact-name" className="form-control" value='sweet' checked={this.props.water==='sweet'} onChange={this.props.onChangeWater} />
                                                <p>Dulce</p>
                                                <img src={require('../images/buttons/BotonDulce.jpeg')}  alt="water photo" />
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <label>
                                                <input type="radio" name="contact-name" className="form-control" value='salty' checked={this.props.water==='salty'} onChange={this.props.onChangeWater} />
                                                <p>Salada</p>
                                                <img src={require('../images/buttons/BotonSalada.jpeg')} alt="water photo" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <h3>Ingresa la capacidad de tu Pecera en Litros: </h3><br /><br />
                                <div className="col-md-6">
                                    <input type="number" name="contact-liters" className="form-control" id="input_liters" value={this.props.liters} onChange={this.props.onChangeLiters} placeholder="Litros de la Pecera *" required/>
                                    <h3>Ingresa tus Datos: </h3>
                                    <Form
                                        name={this.props.name}
                                        email={this.props.email}
                                        phone={this.props.phone}
                                        onChangeName={this.props.onChangeName}
                                        onChangeEmail={this.props.onChangeEmail}
                                        onChangePhone={this.props.onChangePhone}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Mantain;
