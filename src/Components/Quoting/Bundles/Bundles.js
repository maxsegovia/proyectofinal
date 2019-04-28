import React, { Component } from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Line } from 'rc-progress';
import Form from '../common/Form';
import './quote.css';

class Bundles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fishBowls: [],
            selectedFishBowl: null,
            water: [],
            selectedWater: null,
            bundle: [],
            selectedBundle: null,
            preview: null,
            name: '',
            email: '',
            phone: '',
            step: 0,
            progress: "10",
        };
    }

    componentDidMount() {
        //get fishBowls
        axios.get(`http://127.0.0.1:8000/api/materials/tanks`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK"
            }
        }).then(response  => response.data.map(fishBowls => this.setState({ fishBowls: [...this.state.fishBowls, fishBowls] })));
    }

    componentWillMount() {
        let session = (Math.random() + 1).toString(36);
        this.setState({ session });
        const headers = {
            "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK",
            "Content-Type": "application/json",
        };

        const body = {
            "uid": session,
        };

        axios.post(`http://127.0.0.1:8000/api/session/create`, body, {headers}).then(response  => response.data);
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

    updateSession(index) {
        const headers = {
                "Content-Type": "application/json",
                "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK"
        };

        let body;

        if (index == 0) {
            body = {
                "uid": this.state.session,
                "water_id": null,
                "package": null,
                "floor_id": null,
                "decoration_id": null,
                "ornament_id": null,
                "fish_id": null,
            };
        }
        else if (index == 1) {
            body = {
                "uid": this.state.session,
                "package": null,
                "floor_id": null,
                "decoration_id": null,
                "ornament_id": null,
                "fish_id": null,
            };
        }

        axios.put(`http://127.0.0.1:8000/api/session/update`, body, {headers}).then(response  => response.data);
    }

    changeSelectedFishBowl(item) {
        const headers = {
                "Content-Type": "application/json",
                "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK"
        };
        const body = {
            "uid": this.state.session,
            "tank_id": item.id,
        };

        axios.put(`http://127.0.0.1:8000/api/session/update`, body, {headers}).then(response  => response.data);

        if (this.state.selectedFishBowl) {
            if (this.state.selectedFishBowl !== item) {
                this.setState({ selectedFishBowl: item });
            }
        }
        this.setState({ selectedFishBowl: item });
    }

    changeSelectedWater(item) {
        const headers = {
                "Content-Type": "application/json",
                "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK"
        };

        const body = {
            "uid": this.state.session,
            "water_id": item.id,
        };

        axios.put(`http://127.0.0.1:8000/api/session/update`, body, {headers}).then(response  => response.data);

        if (this.state.selectedWater) {
            if (this.state.selectedWater !== item) {
                this.setState({ selectedWater: item });
            }
        }
        this.setState({ selectedWater: item });
    }

    changeSelectedBundle(item) {
        const headers = {
                "Content-Type": "application/json",
                "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK"
        };

        const body = {
            "uid": this.state.session,
            "package": item.id,
            "floor_id": item.floor_id,
            "decoration_id": item.decoration_id,
            "ornament_id": item.ornament_id_1,
            "fish_id": item.fish_id,
        };

        axios.put(`http://127.0.0.1:8000/api/session/update`, body, {headers}).then(response  => response.data);

        if (this.state.selectedBundle) {
            if (this.state.selectedBundle !== item) {
                this.setState({ selectedBundle: item });
            }
        }
        this.setState({ selectedBundle: item });
    }

    async checkIfSelected() {
        switch (this.state.step) {
            case 0:
                if (this.state.selectedFishBowl) {
                    //get fishBowls
                    axios.get(`http://127.0.0.1:8000/api/materials/basic_materials/${this.state.session}/water`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK"
                        }
                    }).then(response  => {
                        this.setState({ step: this.state.step + 1, progress: "30", water: response.data });
                    });
                }
                else {
                    alert('Debes seleccionar una pecera para continuar.');
                }
                break;
            case 1:
                if (this.state.selectedWater) {
                    //get fishBowls
                    axios.get(`http://127.0.0.1:8000/api/packages/${this.state.session}`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK"
                        }
                    }).then(response  => {this.setState({ step: this.state.step + 1, progress: "50", bundle: response.data });} );
                }
                else {
                    alert('Debes seleccionar un tipo de agua para continuar.');
                }
                break;
            case 2:
                if (this.state.selectedBundle) {
                    //get fishBowls
                    axios.get(`http://127.0.0.1:8000/api/session/show/${this.state.session}`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK"
                        }
                    }).then(response  => this.setState({ step: this.state.step + 1, progress: "70", preview: response.data[0] }) );
                }
                else {
                    alert('Debes seleccionar un paquete para continuar.');
                }
                break;
            case 3:
                if (this.state.name != '' && this.state.email != '' && this.state.phone != '') {
                    const headers = {
                            "Content-Type": "application/json",
                            "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK"
                    };

                    const body = {
                        "uid": this.state.session,
                        "first_name": this.state.name.split(" ")[0],
                        "last_name": this.state.name.split(" ")[1],
                        "email": this.state.email,
                        "phone_number": this.state.phone
                    };
                    //get fishBowls
                    await axios.post(`http://127.0.0.1:8000/api/client_info`, body, {headers}).then(response  => this.setState({ step: this.state.step + 1, progress: "100" }));
                    await axios.get(`http://127.0.0.1:8000/api/session/confirm/${this.state.session}`, {headers}).then(response  => response.data);
                }
                else {
                    alert('Debes completar todos los campos.');
                }
                break;
        }
    }

    returnStep() {
        switch (this.state.step) {
            case 1:
                if (this.state.selectedWater) {
                    this.setState({ step: this.state.step - 1, selectedWater: null, progress: "10" });
                }
                else {
                    this.setState({ step: this.state.step - 1, progress: "10" });
                }
                break;
            case 2:
                if (this.state.selectedBundle) {
                    this.setState({ step: this.state.step - 1, selectedBundle: null, progress: "30" });
                }
                else {
                    this.setState({ step: this.state.step - 1, progress: "30" });
                }
                break;
            case 3:
                if (this.state.selectedBundle) {
                    this.setState({ step: this.state.step - 1, progress: "50" });
                }
                else {
                    this.setState({ step: this.state.step - 1, progress: "50" });
                }
                break;
            case 4:
                if (this.state.selectedBundle) {
                    this.setState({ step: this.state.step - 1 });
                }
                else {
                    this.setState({ step: this.state.step - 1 });
                }
                break;
        }
    }

    renderItemDescription(item) {
        if (item.description) {
            return item.description.map(product => {
                return (
                    <p key={product}> {product} </p>
                )
            })
        }
    }

    renderStep() {
        switch (this.state.step) {
            case 0:
                if (this.state.fishBowls) {
                    return this.state.fishBowls.map((item, i) => {
                        return (
                            <div key={i} className="item-product" onClick={() => this.changeSelectedFishBowl(item)}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src={item.preview} alt={item.name}/>
                                    </div>
                                    <div className="col-md-6" id="tank-description">
                                        <p className="item-title"><strong>{item.name}</strong></p>
                                        <p><strong>Capacidad:</strong> {item.capacity} lt</p>
                                        <p><strong>Altura:</strong> {item.height} cm</p>
                                        <p><strong>Largo:</strong> {item.width} cm</p>
                                        <p><strong>Ancho:</strong> {item.depth} cm</p>
                                    </div>
                                </div>
                            </div>
                        );
                    });
                }
                return null;
                break;
            case 1:
                return this.state.water.map((item, i) => {
                    return (
                        <div key={i} className="item-product single-line" onClick={() => this.changeSelectedWater(item)}>
                            <div className="row">
                                    <img src={item.preview} alt={item.name}/>
                                <div className="col-md-12">
                                    <div className="section-header">
                                        <h3 className="single-line">{item.name}</h3>
                                    </div>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    );
                });
                break;
            case 2:
                if (this.state.bundle) {
                    return this.state.bundle.map((item, i) => {
                        return (
                            <div key={i} className="item-bundle" onClick={() => this.changeSelectedBundle(item)}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="item-title"><strong>{item.name}</strong></p>
                                        {this.renderItemDescription(item)}
                                    </div>
                                    <div className="col-md-12">
                                        <img src={item.floor_url} alt="suelo" style={{ position: 'absolute' }}/>
                                        <img src={item.decoration_url} alt="adorno" style={{ position: 'absolute' }}/>
                                        <img src={item.ornament_url} alt="adorno2" style={{ position: 'absolute' }}/>
                                        <img src={item.fish_url} alt="peces" style={{ position: 'absolute' }}/>
                                    </div>

                                </div>
                            </div>
                        );
                    });
                }
                return null;
                break;
            case 3:
                if (this.state.preview) {
                    return (
                        <div>
                            <Form
                                name={this.state.name}
                                email={this.state.email}
                                phone={this.state.phone}
                                onChangeName={this.onChangeName}
                                onChangeEmail={this.onChangeEmail}
                                onChangePhone={this.onChangePhone}
                            />
                        </div>
                    );
                }
                return null;
                break;
            case 4:
                if (this.state.preview) {
                    return (
                        <div className="item-product">
                            <p className="item-title"><strong>Venta: </strong>{this.state.preview.sale}</p>
                            <p className="item-title"><strong>Mantenimiento: </strong>{this.state.preview.maintenance}</p>
                            <p className="item-title"><strong>Renta: </strong>{this.state.preview.rent}</p>
                        </div>
                    );
                }
                return null;
                break;
            default:
                break;
        }
    }

    renderLabel() {
        switch (this.state.step) {
            case 0:
                return 'ELIGE TU PECERA';
            case 1:
                return 'ELIGE EL AGUA';
            case 2:
                return 'ELIGE UN PAQUETE';
            case 3:
                return 'FORMULARIO';
            case 4:
                return 'RESUMEN';
            default:
                break;
        }
    }

    renderProducts() {
        // <img className="selectedProduct" src={this.state.selectedWater.image[this.state.selectedFishBowl.code]} />
        if (this.state.selectedWater && this.state.selectedFishBowl && this.state.selectedBundle && this.state.step >= 2) {
            return (
                <div>
                    <img className="selectedProduct" src={this.state.selectedWater.img} />
                    <img className="selectedProduct" src={this.state.selectedFishBowl.img} />
                    <img className="selectedProduct" src={this.state.selectedBundle.floor_url} />
                    <img className="selectedProduct" src={this.state.selectedBundle.decoration_url} />
                    <img className="selectedProduct" src={this.state.selectedBundle.ornament_url} />
                    <img className="selectedProduct" src={this.state.selectedBundle.fish_url} />
                </div>
            );
        }
        else if (this.state.selectedWater && this.state.selectedFishBowl && this.state.step >= 1) {
            return (
                <div>
                    <img className="selectedProduct" src={this.state.selectedWater.img} />
                    <img className="selectedProduct" src={this.state.selectedFishBowl.img} />
                </div>
            );
        }
        else if (this.state.selectedFishBowl && this.state.step >= 0) {
            return(
                <img className="selectedProduct" src={this.state.selectedFishBowl.img} />
            );
        }
        return (
            <p className="non-selected-label">Selecciona para visualizar</p>
        );
    }

    renderButtons() {
        if (this.state.step == 0) {
            return (
                <div className="nav-buttons">
                    <button id="next-button" className="button" onClick={this.props.onReturn}><i className="fa fa-arrow-left"></i> Regresar</button>
                    <button id="next-button" className="button" onClick={() => this.checkIfSelected()}>Siguiente <i className="fa fa-arrow-right"></i></button>
                </div>
            );
        }
        else if (this.state.step == 3) {
            return (
                <div className="nav-buttons">
                    <button id="back-button" className="button" onClick={() => this.returnStep()}><i className="fa fa-arrow-left"></i> Regresar</button>
                    <button id="next-button" className="button" onClick={() => this.checkIfSelected()}>Cotizar <i className="fa fa-arrow-right"></i></button>
                </div>
            );
        }
        else if (this.state.step == 4) {
            return (
                <div className="nav-buttons">
                    <button id="back-button" className="button" onClick={this.props.onReturn}><i className="fa fa-arrow-left"></i> Regresar</button>
                </div>
            );
        }
        else if (this.state.step > 0) {
            return (
                <div className="nav-buttons">
                    <button id="back-button" className="button" onClick={() => this.returnStep()}><i className="fa fa-arrow-left"></i> Regresar</button>
                    <button id="next-button" className="button" onClick={() => this.checkIfSelected()}>Siguiente <i className="fa fa-arrow-right"></i></button>
                </div>
            );
        }
    }

    renderItems() {
        if (this.state.step != 4) {
            return (
                <div className="itemContainer">
                    <div className="section-header">
                        <h3>{this.renderLabel()}</h3>
                    </div>
                    <div>
                        {this.renderStep()}
                    </div>
                </div>
            );
        }
        return (
            <div className="previewContainer">
                <div className="section-header">
                    <h3>RESUMEN</h3>
                </div>
                <ul className="previewItems">
                    <li id="tank">Pecera: {this.state.selectedFishBowl.name}</li>
                    <li id="water">{this.state.selectedWater.name}</li>
                    <li id="bundle">Paquete: {this.state.selectedBundle.name}</li>
                </ul>
                <div className="row previewInfo">
                    <div className="col-md-12 previewSale">
                        <div className="section-header">
                            <h3>Venta</h3>
                        </div>
                        <p>Inversión inicial de ${parseInt(this.state.preview.sale).toLocaleString('en')} + ${parseInt(this.state.preview.maintenance).toLocaleString('en')} de mantenimiento mensuales.</p>
                        <ul>
                            <li>Se incluye reposición de peces aumentando el 10% de la mensualidad</li>
                        </ul>
                    </div>
                    <div className="col-md-12 previewRent">
                        <div className="section-header">
                            <h3>Renta</h3>
                        </div>
                        <p>${parseInt(this.state.preview.rent).toLocaleString('en')} de mensualidad que incluye mantenimiento.</p>
                        <ul>
                            <li>Traslado de Acuario (otro piso, otro espacio, cambio de lugar)</li>
                            <li>Reposición de Equipo</li>
                            <li>Reposición de Peces</li>
                        </ul>
                    </div>
                    <div className="col-md-12" />
                    <div className="col-md-12 previewBoth">
                        <div className="section-header">
                            <h3>Además incluye: </h3>
                        </div>
                        <ul>
                            <li>Mueble</li>
                            <li>Acuario con Equipo de Filtración, Tapa e Iluminación</li>
                            <li>Decoración</li>
                            <li>Peces</li>
                            <li>Alimento</li>
                            <li>Visita cada 15 días</li>
                            <li>Garantizamos el equilibrio biológico del acuario</li>
                            <li>Visita de emergencia por teléfono o si es necesario de manera física</li>
                        </ul>
                        <p>* Precios sujetos a confirmación</p>
                    </div>
                </div>
            </div>
        );
    }

    render () {
        // <Line percent={this.state.progress} strokeWidth="2" strokeColor="#feb005" trailColor="rgba(0,0,0,0)" style={{ position: 'absolute', top: 100, left: '30%', width: 400, zIndex: 0 }} />
        return (
            <main className="site-main site-main-react">
                <div className="container-fluid no-padding">
                    <div className="container">
                        <div className="section-header1 row">
                            <div className="col-md-12">
                                <Tabs className="tabContainer" selectedTabClassName="tab-selected" selectedIndex={this.state.step}
                                onSelect={(index) => {
                                    if (index < this.state.step) {
                                        if (index == 0) {
                                            this.updateSession(index);
                                            this.setState({
                                                selectedWater: null,
                                                selectedBundle: null,
                                                step: index
                                            });
                                        }
                                        else if (index == 1) {
                                            this.updateSession(index);
                                            this.setState({
                                                selectedBundle: null,
                                                step: index
                                            });
                                        }
                                        else if (index == 2) {
                                            this.setState({ step: index });
                                        }
                                        else if (index == 3) {
                                            this.setState({ step: index });
                                        }

                                    }
                                }}>
                                    <TabList>
                                        <Tab className="tabs">1</Tab>
                                        <Tab className="tabs">2</Tab>
                                        <Tab className="tabs">3</Tab>
                                        <Tab className="tabs">4</Tab>
                                        <Tab className="tabs">5</Tab>
                                    </TabList>
                                    <TabPanel>
                                    </TabPanel>
                                    <TabPanel>
                                    </TabPanel>
                                    <TabPanel>
                                    </TabPanel>
                                    <TabPanel>
                                    </TabPanel>
                                    <TabPanel>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                        {this.renderButtons()}
                        <div className="row builder">
                            <div className="col-md-4">
                                {this.renderItems()}
                            </div>
                            <div className="col-md-8">
                                <div className="productContainer">
                                    {this.renderProducts()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Bundles;
