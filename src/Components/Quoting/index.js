import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from 'axios';
import Build from './Build/Quoting';
import Bundles from './Bundles/Bundles';
import Mantain from './Mantain/Mantain';
import './Quoting.css';
import './index.css';

class Quoting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: 0,
            name: '',
            phone: '',
            email: '',
            liters: '',
            session: '',
            preview: null,
            tanks: null,
            water: 'sweet',
        };
    }

    onChangeWater = e => {
        this.setState({ water: e.target.value });
    }

    onChangeLiters = e => {
        this.setState({ liters: e.target.value });
    }

    onChangeName = e => {
        this.setState({ name: e.target.value });
    }

    onChangeEmail = e => {
        this.setState({ email: e.target.value });
    }

    onChangePhone = e => {
        this.setState({ phone: e.target.value });
    }

    async updateData() {
        if (this.state.water != '' && this.state.liters != '') {
            const headers = {
                "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK",
                "Content-Type": "application/json",
            };

            const body_1 = {
                "liters": this.state.liters,
                "water_type": this.state.water
            };

            if (this.state.name != '' && this.state.email != '' && this.state.phone != '') {
                await axios.post(`http://127.0.0.1:8000/api/rent-price`, body_1, {headers}).then(async response  => {
                    this.setState({ preview: response.data, menu: 5 });
                    const body_2 = {
                        "uid": response.data.uid,
                        "first_name": this.state.name.split(" ")[0],
                        "last_name": this.state.name.split(" ")[1],
                        "email": this.state.email,
                        "phone_number": this.state.phone
                    };
                    await axios.post(`http://127.0.0.1:8000/api/client_info`, body_2, {headers}).then(response  => response.data);
                    await axios.get(`http://127.0.0.1:8000/api/session/confirm/${response.data.uid}`, {headers}).then(response  => response.data);
                });
            }
            else {
                alert('Debes completar todos los campos.');
            }
        }
        else {
            alert('Debes completar todos los campos.');
        }
    }

    hasNumber(myString) {
        return /\d/.test(myString);
    }

    renderMessage() {
        if (!this.hasNumber(this.state.preview.maintenance)) {
            return (
                <p>{this.state.preview.maintenance}</p>
            )
        }
        return (
            <p>${parseInt(this.state.preview.maintenance).toLocaleString('en')} de mensualidad.</p>
        )
    }

    renderContent() {
        switch(this.state.menu) {
            case 0:
                return (
                    <div id="accessories-section" className="accessories-section">
                        <div className="section-padding"></div>
                        <div className="accessories-img-box col-md-10">
                            <div className="tab-content">
            					<div role="tabpanel" className="tab-pane active" id="wheels">
            						<div className="accessories-img img1"></div>
            					</div>
                            </div>
                        </div>
                        <div className="col-md-12 accessories-tab-box background">
                            <div className="container page-spacing">
                            <div className="section-header">
                                <h3>ELIGE TU PECERA</h3>
                                <p>Selecciona el tipo de servicio</p>
                            </div>
                            <div className="row">
                                <div className="col-md-2" />
                                <div className="col-md-4">
                                    <div className="quoting-button" id="tengoPecera" onClick={() => this.setState({ menu: 1 })}>
                                        <p>TENGO MI PECERA</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="quoting-button" id="quieroPecera" onClick={() => this.setState({ menu: 2 })}>
                                        <p>ARMAR MI PECERA</p>
                                    </div>
                                </div>
                                <div className="col-md-2" />
                            </div>
                            </div>
                        </div>
                        <div className="section-padding"></div>
                    </div>
                );
                break;
            case 1:
                return (
                    <div id="accessories-section" className="accessories-section container-fluid no-padding">
                        <div className="section-padding"></div>
                        <div className="accessories-img-box col-md-10">
                            <div className="tab-content">
            					<div role="tabpanel" className="tab-pane active" id="wheels">
            						<div className="accessories-img img1"></div>
            					</div>
                            </div>
                        </div>
                        <div className="col-md-7 accessories-tab-box background">
                            <div className="container page-spacing">
                                <div className="back-button" onClick={() => this.setState({ menu: 0, water: '', liters: '' })}>
                                    <i className="fa fa-arrow-left"></i> Regresar
                                </div>
                                <div className="section-header">
                                    <h3>ELIGE TU PECERA</h3>
                                    <p>Selecciona el tipo de servicio</p>
                                </div>
                                <Mantain
                                    ref='child'
                                    email={this.state.email}
                                    name={this.state.name}
                                    phone={this.state.phone}
                                    liters={this.state.liters}
                                    water={this.state.water}
                                    onChangeWater={this.onChangeWater}
                                    onChangeLiters={this.onChangeLiters}
                                    onChangeName={this.onChangeName}
                                    onChangeEmail={this.onChangeEmail}
                                    onChangePhone={this.onChangePhone}
                                />
                                <div className="form-group">
                                    <input type="submit" title="Cotizar Mantenimiento" value="Cotizar Mantenimiento" id="btn_submit" name="post" className="sendButton" onClick={() => this.updateData()} />
                                </div>
                            </div>
                        </div>
                        <div className="section-padding"></div>
                    </div>
                );
                break;
            case 2:
                return (
                    <div id="accessories-section" className="accessories-section">
                        <div className="section-padding"></div>
                        <div className="accessories-img-box col-md-10">
                            <div className="tab-content">
            					<div role="tabpanel" className="tab-pane active" id="wheels">
            						<div className="accessories-img img1"></div>
            					</div>
                            </div>
                        </div>
                        <div className="col-md-7 accessories-tab-box background">
                            <div className="container page-spacing">
                                <div className="back-button" onClick={() => this.setState({ menu: 0 })}>
                                    <i className="fa fa-arrow-left"></i> Regresar
                                </div>
                                <div className="section-header">
                                    <h3>ELIGE TU PECERA</h3>
                                    <p>Selecciona el tipo de servicio</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-2" />
                                    <div className="col-md-4" >
                                        <div className="quoting-button" id="paquetes" onClick={() => this.setState({ menu: 3 })}>
                                            <p>SELECCIONAR PAQUETES</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4" >
                                        <div className="quoting-button" id="configurar" onClick={() => this.setState({ menu: 4 })}>
                                            <p>CONFIGURAR MI PECERA</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-md-2" />
                                </div>
                            </div>
                            <div className="container page-spacing">
                        </div>
                        <div className="section-padding"></div>
                    </div>
                );
                break;
            case 3:
                return (
                    <div id="accessories-section" className="accessories-section container-fluid no-padding">
                        <div className="section-padding"></div>
                        <div className="accessories-img-box col-md-10">
                            <div className="tab-content">
            					<div role="tabpanel" className="tab-pane active" id="wheels">
            						<div className="accessories-img img1"></div>
            					</div>
                            </div>
                        </div>
                        <div className="col-md-7 accessories-tab-box background">
                            <div className="container page-spacing">
                                <div>
                                    <Bundles onReturn={() => this.setState({ menu: 2 })}/>
                                </div>
                            </div>
                        </div>
                        <div className="section-padding"></div>
                    </div>
                );
                break;
            case 4:
                return (
                    <div id="accessories-section" className="accessories-section container-fluid no-padding">
                        <div className="section-padding"></div>
                        <div className="accessories-img-box col-md-10">
                            <div className="tab-content">
            					<div role="tabpanel" className="tab-pane active" id="wheels">
            						<div className="accessories-img img1"></div>
            					</div>
                            </div>
                        </div>
                        <div className="col-md-7 accessories-tab-box background">
                            <div className="container page-spacing">
                                <div>
                                    <Build onReturn={() => this.setState({ menu: 2 })}/>
                                </div>
                            </div>
                        </div>
                        <div className="section-padding"></div>
                    </div>
                );
                break;
            case 5:
                return (
                    <div id="accessories-section" className="accessories-section container-fluid no-padding">
                        <div className="section-padding"></div>
                        <div className="accessories-img-box col-md-10">
                            <div className="tab-content">
            					<div role="tabpanel" className="tab-pane active" id="wheels">
            						<div className="accessories-img img1"></div>
            					</div>
                            </div>
                        </div>
                        <div className="col-md-7 accessories-tab-box background">
                            <div className="back-button" onClick={() => this.setState({ menu: 1 })}>
                                <i className="fa fa-arrow-left"></i> Regresar
                            </div>
                            <div className="section-header">
                                <h3>Resumen</h3>
                                <p>El costo de mantenimiento se muestra a continuación</p>
                            </div>
                            <div>
                                <ul>
                                    <li id="tank">Litros: {this.state.liters}</li>
                                    <li id="water">{this.state.water == 'sweet' ? 'Agua Dulce' : 'Agua Salada'}</li>
                                </ul>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="section-header">
                                            <h3>Mantenimiento</h3>
                                            {this.renderMessage()}
                                        </div>
                                        <div className="section-header">
                                            <h3>Además Incluye:</h3>
                                        </div>
                                        <ul>
                                            <li>Visita cada 15 días</li>
                                            <li>Garantizamos el equilibrio biológico del acuario</li>
                                            <li>Visita de emergencia por teléfono o si es necesario de manera física</li>
                                        </ul>
                                        <p>* Precios sujetos a confirmación</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-padding"></div>
                    </div>
                );
                break;
        }
    }

    render () {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default Quoting;
