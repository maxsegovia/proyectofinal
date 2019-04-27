import React, { Component } from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Form from '../common/Form';
import './quote.css';

class Build extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fishBowls: [],
            selectedFishBowl: null,
            water: [],
            selectedWater: null,
            floor: [],
            selectedFloor: null,
            decorationBundle: [],
            selectedDecorationBundle: null,
            ornamentBundle: [],
            selectedOrnamentBundle: null,
            fishBundle: [],
            selectedFishBundle: null,
            preview: null,
            name: '',
            email: '',
            phone: '',
            step: 0,
        };
    }

    componentDidMount() {
        //get fishBowls
        axios.get(`http://api.pecerasgratis.com/api/materials/tanks`, {
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

        axios.post(`http://api.pecerasgratis.com/api/session/create`, body, {headers}).then(response  => response.data);
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

    updateSession1(index) {
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
        else if (index == 2) {
            body = {
                "uid": this.state.session,
                "package": null,
                "decoration_id": null,
                "ornament_id": null,
                "fish_id": null,
            };
        }
        else if (index == 3) {
            body = {
                "uid": this.state.session,
                "package": null,
                "ornament_id": null,
                "fish_id": null,
            };
        }
        else if (index == 4) {
            body = {
                "uid": this.state.session,
                "package": null,
                "fish_id": null,
            };
        }

        axios.put(`http://api.pecerasgratis.com/api/session/update`, body, {headers}).then(response  => response.data);
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

        axios.put(`http://api.pecerasgratis.com/api/session/update`, body, {headers}).then(response  => response.data);

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

        axios.put(`http://api.pecerasgratis.com/api/session/update`, body, {headers}).then(response  => response.data);

        if (this.state.selectedWater) {
            if (this.state.selectedWater !== item) {
                this.setState({ selectedWater: item });
            }
        }
        this.setState({ selectedWater: item });
    }

    changeSelectedFloor(item) {
        const headers = {
                "Content-Type": "application/json",
                "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK"
        };

        const body = {
            "uid": this.state.session,
            "floor_id": item.id,
        };

        axios.put(`http://api.pecerasgratis.com/api/session/update`, body, {headers}).then(response  => response.data);

        if (this.state.selectedFloor) {
            if (this.state.selectedFloor !== item) {
                this.setState({ selectedFloor: item });
            }
        }
        this.setState({ selectedFloor: item });
    }

    changeSelectedDecorationBundle(item) {
        const headers = {
                "Content-Type": "application/json",
                "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK"
        };

        const body = {
            "uid": this.state.session,
            "decoration_id": item.id,
        };

        axios.put(`http://api.pecerasgratis.com/api/session/update`, body, {headers}).then(response  => response.data);

        if (this.state.selectedDecorationBundle) {
            if (this.state.selectedDecorationBundle !== item) {
                this.setState({ selectedDecorationBundle: item });
            }
        }
        this.setState({ selectedDecorationBundle: item });
    }

    changeSelectedOrnamentBundle(item) {
        const headers = {
                "Content-Type": "application/json",
                "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK"
        };

        const body = {
            "uid": this.state.session,
            "ornament_id": item.ornament_id,
        };

        axios.put(`http://api.pecerasgratis.com/api/session/update`, body, {headers}).then(response  => response.data);

        if (this.state.selectedOrnamentBundle) {
            if (this.state.selectedOrnamentBundle !== item) {
                this.setState({ selectedOrnamentBundle: item });
            }
        }
        this.setState({ selectedOrnamentBundle: item });
    }

    changeSelectedFishBundle(item) {
        const headers = {
                "Content-Type": "application/json",
                "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK"
        };

        const body = {
            "uid": this.state.session,
            "fish_id": item.id,
        };

        axios.put(`http://api.pecerasgratis.com/api/session/update`, body, {headers}).then(response  => response.data);

        if (this.state.selectedFishBundle) {
            if (this.state.selectedFishBundle !== item) {
                this.setState({ selectedFishBundle: item });
            }
        }
        this.setState({ selectedFishBundle: item });
    }

    updateSession() {
        const headers = {
                "Content-Type": "application/json",
                "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK"
        };

        const body = {
            "uid": this.state.session,
            "floor_id": this.state.selectedFloor.id,
            "decoration_id": this.state.selectedDecorationBundle.id
        };

        axios.put(`http://api.pecerasgratis.com/api/session/update`, body, {headers}).then(response  => response.data);
    }

    async checkIfSelected() {
        switch (this.state.step) {
            case 0:
                if (this.state.selectedFishBowl) {
                    //get fishBowls
                    axios.get(`http://api.pecerasgratis.com/api/materials/basic_materials/${this.state.session}/water`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK"
                        }
                    }).then(response  => {
                        this.setState({ step: this.state.step + 1, water: response.data });
                    });
                }
                else {
                    alert('Debes seleccionar una pecera para continuar.');
                }
                break;
            case 1:
                if (this.state.selectedWater) {
                    //get fishBowls
                    axios.get(`http://api.pecerasgratis.com/api/materials/basic_materials/${this.state.session}/floor`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK"
                        }
                    }).then(response  => {
                        if (this.state.selectedWater.id == 2) {
                            axios.get(`http://api.pecerasgratis.com/api/materials/decoration/${this.state.session}`, {
                                headers: {
                                    "Content-Type": "application/json",
                                    "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK"
                                }
                            }).then(response2  => {
                                axios.get(`http://api.pecerasgratis.com/api/materials/ornament/${this.state.session}`, {
                                    headers: {
                                        "Content-Type": "application/json",
                                        "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK"
                                    }
                                }).then(response3  => {this.setState({ step: this.state.step + 3, selectedFloor: response.data[0], selectedDecorationBundle: response2.data[0], ornamentBundle: response3.data });});
                            } );
                        }
                        else {
                            this.setState({ step: this.state.step + 1, floor: response.data });
                        }
                    });
                }
                else {
                    alert('Debes seleccionar un tipo de agua para continuar.');
                }
                break;
            case 2:
                if (this.state.selectedFloor) {
                    if (this.state.selectedWater.id == 2) {
                        this.updateSession();
                    }
                    //get fishBowls
                    axios.get(`http://api.pecerasgratis.com/api/materials/decoration/${this.state.session}`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK"
                        }
                    }).then(response  => this.setState({ step: this.state.step + 1, decorationBundle: response.data }) );
                }
                else {
                    alert('Debes seleccionar un suelo para continuar.');
                }
                break;
            case 3:
                if (this.state.selectedDecorationBundle) {
                    //get fishBowls
                    axios.get(`http://api.pecerasgratis.com/api/materials/ornament/${this.state.session}`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK"
                        }
                    }).then(response  => {
                        this.setState({ step: this.state.step + 1, ornamentBundle: response.data });
                    });
                }
                else {
                    alert('Debes seleccionar un paquete de Items para continuar.');
                }
                break;
            case 4:
                if (this.state.selectedOrnamentBundle) {
                    if (this.state.selectedWater.id == 2) {
                        this.updateSession();
                    }
                    //get fishBowls
                    axios.get(`http://api.pecerasgratis.com/api/materials/fish/${this.state.session}`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK"
                        }
                    }).then(response  => {this.setState({ step: this.state.step + 1, fishBundle: response.data }); });
                }
                else {
                    alert('Debes seleccionar un paquete de Adornos para continuar.');
                }
                break;
            case 5:
                if (this.state.selectedFishBundle) {
                    //get fishBowls
                    axios.get(`http://api.pecerasgratis.com/api/session/show/${this.state.session}`, {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK"
                        }
                    }).then(response  => this.setState({ step: this.state.step + 1, preview: response.data[0] }) );
                }
                else {
                    alert('Debes seleccionar un paquete de Peces para continuar.');
                }
                break;
            case 6:
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
                    await axios.post(`http://api.pecerasgratis.com/api/client_info`, body, {headers}).then(response  => this.setState({ step: this.state.step + 1 }));
                    await axios.get(`http://api.pecerasgratis.com/api/session/confirm/${this.state.session}`, {headers}).then(response  => response.data);
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
                    this.setState({ step: this.state.step - 1, selectedWater: null });
                }
                else {
                    this.setState({ step: this.state.step - 1 });
                }
                break;
            case 2:
                if (this.state.selectedFloor) {
                    this.setState({ step: this.state.step - 1, selectedFloor: null });
                }
                else {
                    this.setState({ step: this.state.step - 1 });
                }
                break;
            case 3:
                if (this.state.selectedDecorationBundle) {
                    if (this.state.selectedWater.id == 2) {
                        this.setState({ step: this.state.step - 2, selectedDecorationBundle: null, selectedFloor: null });
                    }
                    else {
                        this.setState({ step: this.state.step - 1, selectedDecorationBundle: null });
                    }
                }
                else {
                    if (this.state.selectedWater.id == 2) {
                        this.setState({ step: this.state.step - 2 });
                    }
                    else {
                        this.setState({ step: this.state.step - 1 });
                    }
                }
                break;
            case 4:
                if (this.state.selectedOrnamentBundle) {
                    if (this.state.selectedWater.id == 2) {
                        this.setState({ step: this.state.step - 3, selectedOrnamentBundle: null, selectedFloor: null, selectedDecorationBundle: null });
                    }
                    else
                    {
                        this.setState({ step: this.state.step - 1, selectedOrnamentBundle: null });
                    }
                }
                else {
                    if (this.state.selectedWater.id == 2) {
                        this.setState({ step: this.state.step - 3, selectedDecorationBundle: null, selectedFloor: null });
                    }
                    else {
                        this.setState({ step: this.state.step - 1 });
                    }
                }
                break;
            case 5:
                if (this.state.selectedFishBundle) {
                    this.setState({ step: this.state.step - 1, selectedFishBundle: null });
                }
                else {
                    this.setState({ step: this.state.step - 1 });
                }
                break;
            case 6:
                if (this.state.selectedFishBundle) {
                    this.setState({ step: this.state.step - 1 });
                }
                else {
                    this.setState({ step: this.state.step - 1 });
                }
                break;
            case 7:
                if (this.state.selectedFishBundle) {
                    this.setState({ step: this.state.step - 1 });
                }
                else {
                    this.setState({ step: this.state.step - 1 });
                }
                break;
        }
    }

    renderFishDescription(item) {
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
                                    <div className="col-md-6 item-description" id="tank-description">
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
                return this.state.floor.map((item, i) => {
                    return (
                        <div key={i} className="item-product single-line" onClick={() => this.changeSelectedFloor(item)}>
                            <div className="row">
                                    <img src={item.preview} alt={item.name}/>
                                <div className="col-md-12">
                                    <div className="section-header">
                                        <h3 className="single-line">{item.name}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                });
                break;
            case 3:
                if (this.state.decorationBundle) {
                    return this.state.decorationBundle.map((item, i) => {
                        return (
                            <div key={i} className="item-product single-line" onClick={() => this.changeSelectedDecorationBundle(item)}>
                                <div className="row">
                                        <img src={item.preview} alt={item.id}/>
                                    <div className="col-md-12">
                                        <div className="section-header">
                                            <h3 className="single-line">{item.name}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    });
                }
                return null;
                break;
            case 4:
                if (this.state.ornamentBundle) {
                    return this.state.ornamentBundle.map((item, i) => {
                        return (
                            <div key={i} className="item-product single-line" onClick={() => this.changeSelectedOrnamentBundle(item)}>
                                <div className="row">
                                        <img src={item.preview} alt={item.id}/>
                                    <div className="col-md-12">
                                        <div className="section-header">
                                            <h3 className="single-line">{item.name}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    });
                }
                return null;
                break;
            case 5:
                if (this.state.fishBundle) {
                    return this.state.fishBundle.map((item, i) => {
                        return (
                            <div key={i} className="item-product" onClick={() => this.changeSelectedFishBundle(item)}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src={item.preview} alt={item.id}/>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="item-title"><strong>{item.name}</strong></p>
                                        {this.renderFishDescription(item)}
                                    </div>
                                </div>
                            </div>
                        );
                    });
                }
                return null;
                break;
            case 6:
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
            case 7:
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
                return 'ELIGE UN SUELO';
            case 3:
                return 'ELIGE UN PAQUETE DE PLANTAS';
            case 4:
                return 'ELIGE UN PAQUETE DE ADORNOS';
            case 5:
                return 'ELIGE UN PAQUETE DE PECES';
            case 6:
                return 'FORMULARIO';
            case 7:
                return 'RESUMEN';
            default:
                break;
        }
    }

    renderProducts() {
        // <img className="selectedProduct" src={this.state.selectedWater.image[this.state.selectedFishBowl.code]} />
        if (this.state.selectedWater && this.state.selectedFloor && this.state.selectedFishBowl && this.state.selectedDecorationBundle && this.state.selectedOrnamentBundle && this.state.selectedFishBundle && this.state.step >= 5) {
            if (this.state.selectedWater.id == 2) {
                return (
                    <div>
                        <img className="selectedProduct" src={this.state.selectedWater.img} />
                        <img className="selectedProduct" src={this.state.selectedFishBowl.img} />
                        <img className="selectedProduct" src={this.state.selectedDecorationBundle.img} />
                        <img className="selectedProduct" src={this.state.selectedOrnamentBundle.img} />
                        <img className="selectedProduct" src={this.state.selectedFishBundle.img} />
                        <img className="selectedProduct" src={this.state.selectedWater.img} style={{ opacity: 0.2 }} />
                    </div>
                );
            }
            return (
                <div>
                    <img className="selectedProduct" src={this.state.selectedWater.img} />
                    <img className="selectedProduct" src={this.state.selectedFishBowl.img} />
                    <img className="selectedProduct" src={this.state.selectedFloor.img} />
                    <img className="selectedProduct" src={this.state.selectedDecorationBundle.img} />
                    <img className="selectedProduct" src={this.state.selectedOrnamentBundle.img} />
                    <img className="selectedProduct" src={this.state.selectedFishBundle.img} />
                    <img className="selectedProduct" src={this.state.selectedWater.img} style={{ opacity: 0.2 }} />
                </div>
            );
        }
        else if (this.state.selectedWater && this.state.selectedFloor && this.state.selectedFishBowl && this.state.selectedDecorationBundle && this.state.selectedOrnamentBundle && this.state.step >= 4) {
            if (this.state.selectedWater.id == 2) {
                return (
                    <div>
                        <img className="selectedProduct" src={this.state.selectedWater.img} />
                        <img className="selectedProduct" src={this.state.selectedFishBowl.img} />
                        <img className="selectedProduct" src={this.state.selectedDecorationBundle.img} />
                        <img className="selectedProduct" src={this.state.selectedOrnamentBundle.img} />
                    </div>
                );
            }
            return (
                <div>
                    <img className="selectedProduct" src={this.state.selectedWater.img} />
                    <img className="selectedProduct" src={this.state.selectedFishBowl.img} />
                    <img className="selectedProduct" src={this.state.selectedFloor.img} />
                    <img className="selectedProduct" src={this.state.selectedDecorationBundle.img} />
                    <img className="selectedProduct" src={this.state.selectedOrnamentBundle.img} />
                </div>
            );
        }
        else if (this.state.selectedWater && this.state.selectedFloor && this.state.selectedFishBowl && this.state.selectedDecorationBundle && this.state.step >= 3) {
            if (this.state.selectedWater.id == 2) {
                return (
                    <div>
                        <img className="selectedProduct" src={this.state.selectedWater.img} />
                        <img className="selectedProduct" src={this.state.selectedFishBowl.img} />
                        <img className="selectedProduct" src={this.state.selectedDecorationBundle.img} />
                    </div>
                );
            }
            return (
                <div>
                    <img className="selectedProduct" src={this.state.selectedWater.img} />
                    <img className="selectedProduct" src={this.state.selectedFishBowl.img} />
                    <img className="selectedProduct" src={this.state.selectedFloor.img} />
                    <img className="selectedProduct" src={this.state.selectedDecorationBundle.img} />
                </div>
            );
        }
        else if (this.state.selectedWater && this.state.selectedFishBowl && this.state.selectedFloor && this.state.step >= 2) {
            if (this.state.selectedWater.id == 2) {
                return (
                    <div>
                        <img className="selectedProduct" src={this.state.selectedWater.img} />
                        <img className="selectedProduct" src={this.state.selectedFishBowl.img} />
                    </div>
                );
            }
            return (
                <div>
                    <img className="selectedProduct" src={this.state.selectedWater.img} />
                    <img className="selectedProduct" src={this.state.selectedFishBowl.img} />
                    <img className="selectedProduct" src={this.state.selectedFloor.img} />
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
        else if (this.state.step == 6) {
            return (
                <div className="nav-buttons">
                    <button id="back-button" className="button" onClick={() => this.returnStep()}><i className="fa fa-arrow-left"></i> Regresar</button>
                    <button id="next-button" className="button" onClick={() => this.checkIfSelected()}>Cotizar <i className="fa fa-arrow-right"></i></button>
                </div>
            );
        }
        else if (this.state.step == 7) {
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

    renderPreviewItems() {
        if (this.state.selectedWater.id == 2) {
            return (
                <ul className="previewItems">
                    <li id="tank">Pecera: {this.state.selectedFishBowl.name}</li>
                    <li id="water">{this.state.selectedWater.name}</li>
                    <li id="water">Suelo: {this.state.selectedFloor.name}</li>
                    <li id="decoration">Adorno: {this.state.selectedOrnamentBundle.name}</li>
                    <li id="fish">Paquete de Peces: {this.state.selectedFishBundle.name}</li>
                </ul>
            );
        }
        return (
            <ul className="previewItems">
                <li id="tank">Pecera: {this.state.selectedFishBowl.name}</li>
                <li id="water">{this.state.selectedWater.name}</li>
                <li id="water">Suelo: {this.state.selectedFloor.name}</li>
                <li id="decoration">Decoración: {this.state.selectedDecorationBundle.name}</li>
                <li id="decoration">Adorno: {this.state.selectedOrnamentBundle.name}</li>
                <li id="fish">Paquete de Peces: {this.state.selectedFishBundle.name}</li>
            </ul>
        );
    }

    renderItems() {
        if (this.state.step != 7) {
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
                {this.renderPreviewItems()}
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
                            <h3>Además incluye:</h3>
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
        return (
            <main className="site-main site-main-react">
                <div className="container-fluid no-padding">
                    <div className="container">
                        <div className="section-header1 row">
                            <div className="col-md-12">
                                <Tabs className="tabContainer" selectedTabClassName="tab-selected" selectedIndex={this.state.step}
                                    onSelect={(index) => {
                                        if (index < this.state.step) {
                                            if (this.state.selectedWater) {
                                                if ((this.state.selectedWater.id == 2) && (this.state.step >= 4)) {
                                                    if (index >= 4) {
                                                        if (index == 4) {
                                                            this.updateSession1(index);
                                                            this.setState({
                                                                selectedOrnamentBundle: null,
                                                                selectedFishBundle: null,
                                                                step: index
                                                            });
                                                        }
                                                        else if (index == 5) {
                                                            this.updateSession1(index);
                                                            this.setState({
                                                                selectedFishBundle: null,
                                                                step: index
                                                            });
                                                        }
                                                        else if (index == 6) {
                                                            this.setState({ step: index });
                                                        }
                                                    }
                                                    else {
                                                        if (index > 1 && index < 4) {
                                                            alert('Para agua salada no es posible elegir este paso. Te regresaremos al paso 2.');
                                                            if (index == 0) {
                                                                this.updateSession1(index);
                                                                this.setState({
                                                                    selectedWater: null,
                                                                    selectedFloor: null,
                                                                    selectedDecorationBundle: null,
                                                                    selectedOrnamentBundle: null,
                                                                    selectedFishBundle: null,
                                                                    step: index
                                                                });
                                                            }
                                                            else if (index == 1) {
                                                                this.updateSession1(index);
                                                                this.setState({
                                                                    selectedFloor: null,
                                                                    selectedDecorationBundle: null,
                                                                    selectedOrnamentBundle: null,
                                                                    selectedFishBundle: null,
                                                                    step: index
                                                                });
                                                            }
                                                        }
                                                    }
                                                }
                                                else {
                                                    if (index == 0) {
                                                        this.updateSession1(index);
                                                        this.setState({
                                                            selectedWater: null,
                                                            selectedFloor: null,
                                                            selectedDecorationBundle: null,
                                                            selectedOrnamentBundle: null,
                                                            selectedFishBundle: null,
                                                            step: index
                                                        });
                                                    }
                                                    else if (index == 1) {
                                                        this.updateSession1(index);
                                                        this.setState({
                                                            selectedFloor: null,
                                                            selectedDecorationBundle: null,
                                                            selectedOrnamentBundle: null,
                                                            selectedFishBundle: null,
                                                            step: index
                                                        });
                                                    }
                                                    else if (index == 2) {
                                                        this.updateSession1(index);
                                                        this.setState({
                                                            selectedDecorationBundle: null,
                                                            selectedOrnamentBundle: null,
                                                            selectedFishBundle: null,
                                                            step: index
                                                        });
                                                    }
                                                    else if (index == 3) {
                                                        this.updateSession1(index);
                                                        this.setState({
                                                            selectedOrnamentBundle: null,
                                                            selectedFishBundle: null,
                                                            step: index
                                                        });
                                                    }
                                                    else if (index == 4) {
                                                        this.updateSession1(index);
                                                        this.setState({
                                                            selectedFishBundle: null,
                                                            step: index
                                                        });
                                                    }
                                                    else if (index == 5) {
                                                        this.setState({ step: index });
                                                    }
                                                    else if (index == 6) {
                                                        this.setState({ step: index });
                                                    }
                                                }
                                            }
                                            else {
                                                if (index == 0) {
                                                    this.updateSession1(index);
                                                    this.setState({
                                                        selectedWater: null,
                                                        selectedFloor: null,
                                                        selectedDecorationBundle: null,
                                                        selectedOrnamentBundle: null,
                                                        selectedFishBundle: null,
                                                        step: index
                                                    });
                                                }
                                                else if (index == 1) {
                                                    this.updateSession1(index);
                                                    this.setState({
                                                        selectedFloor: null,
                                                        selectedDecorationBundle: null,
                                                        selectedOrnamentBundle: null,
                                                        selectedFishBundle: null,
                                                        step: index
                                                    });
                                                }
                                                else if (index == 2) {
                                                    this.updateSession1(index);
                                                    this.setState({
                                                        selectedDecorationBundle: null,
                                                        selectedOrnamentBundle: null,
                                                        selectedFishBundle: null,
                                                        step: index
                                                    });
                                                }
                                                else if (index == 3) {
                                                    this.updateSession1(index);
                                                    this.setState({
                                                        selectedOrnamentBundle: null,
                                                        selectedFishBundle: null,
                                                        step: index
                                                    });
                                                }
                                                else if (index == 4) {
                                                    this.updateSession1(index);
                                                    this.setState({
                                                        selectedFishBundle: null,
                                                        step: index
                                                    });
                                                }
                                                else if (index == 5) {
                                                    this.setState({ step: index });
                                                }
                                                else if (index == 6) {
                                                    this.setState({ step: index });
                                                }
                                            }
                                        }
                                    }}>
                                    <TabList>
                                        <Tab className="tabs">1</Tab>
                                        <Tab className="tabs">2</Tab>
                                        <Tab className="tabs">3</Tab>
                                        <Tab className="tabs">4</Tab>
                                        <Tab className="tabs">5</Tab>
                                        <Tab className="tabs">6</Tab>
                                        <Tab className="tabs">7</Tab>
                                        <Tab className="tabs">8</Tab>
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

export default Build;
