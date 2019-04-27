import React, { Component } from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Plant from './Plant';
import Rock from './Rock';
import Decoration from './Decoration';
import Fish from './Fish';
import Target from './Target';
import FishTarget from './FishTarget';
import './quote.css';
import './plants.css';
import './rocks.css';
import './decorations.css';
import './fish.css';
import './target-container.css';
import './fish-target-container.css';

class Quoting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fishBowls: [],
            selectedFishBowl: null,
            water: [],
            selectedWater: null,
            floor: [],
            selectedFloor: null,
            products: [],
            plant: [],
            rock: [],
            decoration: [],
            fish: [],
            step: 0,
            setTarget: [],
            setFishTarget: [],
            selectedPlants: [],
            selectedRocks: [],
            selectedDecorations: [],
            selectedFish: [],
        };
    }

    componentWillMount() {
        //get fishBowls
        axios.get(`http://api.mipecera.kimosolutions.com/api/step/1`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK"
            }
        }).then(response  => response.data.map(fishBowls => this.setState({ fishBowls: [...this.state.fishBowls, fishBowls] })));

        //get water
        axios.get(`http://api.mipecera.kimosolutions.com/api/step/2`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK"
            }
        }).then(response  => response.data.map(water => this.setState({ water: [...this.state.water, water] })));

        //get floor
        axios.get(`http://api.mipecera.kimosolutions.com/api/step/3`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK"
            }
        }).then(response  => response.data.map(floor => this.setState({ floor: [...this.state.floor, floor] })));

        //get plants
        axios.get(`http://api.mipecera.kimosolutions.com/api/step/4`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK"
            }
        }).then(response  => response.data.map(plant => this.setState({ plant: [...this.state.plant, plant] })));

        //get rocks
        axios.get(`http://api.mipecera.kimosolutions.com/api/step/5`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK"
            }
        }).then(response  => response.data.map(rock => this.setState({ rock: [...this.state.rock, rock] })));

        //get decorations
        axios.get(`http://api.mipecera.kimosolutions.com/api/step/6`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK"
            }
        }).then(response  => response.data.map(decoration => this.setState({ decoration: [...this.state.decoration, decoration] })));

        //get fish
        axios.get(`http://api.mipecera.kimosolutions.com/api/step/7`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "&yBR31Z6a8jgppw6oK9si|If~nLiT{xdq)JeHS@qO/I<~7bxG(Uv25cih4m4bsK"
            }
        }).then(response  => response.data.map(fish => this.setState({ fish: [...this.state.fish, fish] })));
    }

    setPlants(item) {
        this.setState({ selectedPlants: [...this.state.selectedPlants, item] });
    }

    setRocks(item) {
        this.setState({ selectedRocks: [...this.state.selectedRocks, item] });
    }

    setDecorations(item) {
        this.setState({ selectedDecorations: [...this.state.selectedDecorations, item] });
    }

    setFish(item) {
        this.setState({ selectedFish: [...this.state.selectedFish, item] });
    }

    setDroppedProducts(item) {
        this.setState({ setTarget: [...this.state.setTarget, item] });
    }

    setDroppedFish(item) {
        this.setState({ setFishTarget: [...this.state.setFishTarget, item] });
    }

    changeSelectedFishBowl(item) {
        if (this.state.selectedFishBowl) {
            if (this.state.selectedFishBowl !== item) {
                this.setState({ selectedFishBowl: item });
            }
        }
        this.setState({ selectedFishBowl: item });
    }

    changeSelectedWater(item) {
        if (this.state.selectedWater) {
            if (this.state.selectedWater !== item) {
                this.setState({ selectedWater: item });
            }
        }
        this.setState({ selectedWater: item });
    }

    changeSelectedFloor(item) {
        if (this.state.selectedFloor) {
            if (this.state.selectedFloor !== item) {
                this.setState({ selectedFloor: item });
            }
        }
        this.setState({ selectedFloor: item });
    }

    checkIfSelected() {
        switch (this.state.step) {
            case 0:
                if (this.state.selectedFishBowl) {
                    this.setState({ step: this.state.step + 1, products: [...this.state.products, this.state.selectedFishBowl] })
                }
                else {
                    alert('Debes seleccionar una pecera para continuar.');
                }
                break;
            case 1:
                if (this.state.selectedWater) {
                    this.setState({ step: this.state.step + 1, products: [...this.state.products, this.state.selectedWater] })
                }
                else {
                    alert('Debes seleccionar un tipo de agua para continuar.');
                }
                break;
            case 2:
                if (this.state.selectedFloor) {
                    this.setState({ step: this.state.step + 1, products: [...this.state.products, this.state.selectedFloor] })
                }
                else {
                    alert('Debes seleccionar un tipo de suelo para continuar.');
                }
                break;
            case 3:
                if (this.state.selectedFloor) {
                    this.setState({ step: this.state.step + 1, products: [...this.state.products, this.state.selectedPlants] })
                }
                else {
                    alert('Debes seleccionar un tipo de suelo para continuar.');
                }
                break;
            case 4:
                if (this.state.selectedFloor) {
                    this.setState({ step: this.state.step + 1, products: [...this.state.products, this.state.selectedRocks] })
                }
                else {
                    alert('Debes seleccionar un tipo de suelo para continuar.');
                }
                break;
            case 5:
                if (this.state.selectedFloor) {
                    this.setState({ step: this.state.step + 1, products: [...this.state.products, this.state.selectedDecorations] })
                }
                else {
                    alert('Debes seleccionar un tipo de suelo para continuar.');
                }
                break;
            case 6:
                if (this.state.selectedFloor) {
                    this.setState({ step: this.state.step + 1, products: [...this.state.products, this.state.selectedFish] })
                }
                else {
                    alert('Debes seleccionar un tipo de suelo para continuar.');
                }
                break;
        }
    }

    returnStep() {
        switch (this.state.step) {
            case 1:
                if (this.state.selectedWater) {
                    this.setState({ step: this.state.step - 1, selectedWater: null });
                    this.state.products.pop();
                }
                else {
                    this.setState({ step: this.state.step - 1 });
                    this.state.products.pop();
                }
                break;
            case 2:
                if (this.state.selectedFloor) {
                    this.setState({ step: this.state.step - 1, selectedFloor: null })
                    this.state.products.pop();
                }
                else {
                    this.setState({ step: this.state.step - 1 });
                    this.state.products.pop();
                }
                break;
            case 3:
                if (this.state.selectedFloor) {
                    this.setState({ step: this.state.step - 1, setTarget: [], selectedPlants: [] });
                    this.state.products.pop();
                }
                else {
                    this.setState({ step: this.state.step - 1, setTarget: [], selectedPlants: [] });
                    this.state.products.pop();
                }
                break;
            case 4:
                if (this.state.selectedFloor) {
                    this.setState({ step: this.state.step - 1, selectedRocks: [] });
                    this.state.products.pop();
                    for (let i = 0; i < this.state.selectedRocks.length; i++) {
                        this.state.setTarget.pop();
                    }
                }
                else {
                    for (let i = 0; i < this.state.selectedRocks.length; i++) {
                        this.state.setTarget.pop();
                    }
                    this.setState({ step: this.state.step - 1, selectedRocks: [] });
                    this.state.products.pop();
                }
                break;
            case 5:
                if (this.state.selectedFloor) {
                    for (let i = 0; i < this.state.selectedDecorations.length; i++) {
                        this.state.setTarget.pop();
                    }
                    this.setState({ step: this.state.step - 1, selectedDecorations: [] });
                    this.state.products.pop();
                }
                else {
                    for (let i = 0; i < this.state.selectedDecorations.length; i++) {
                        this.state.setTarget.pop();
                    }
                    this.setState({ step: this.state.step - 1, selectedDecorations: [] });
                    this.state.products.pop();
                }
                break;
            case 6:
                if (this.state.selectedFloor) {
                    this.setState({ step: this.state.step - 1, selectedFish: [], setFishTarget: [] });
                    this.state.products.pop();
                }
                else {
                    this.setState({ step: this.state.step - 1, selectedDecorations: [], setFishTarget: [] });
                    this.state.products.pop();
                }
                break;
            case 7:
                if (this.state.selectedFloor) {
                    this.setState({ step: this.state.step - 1 });
                }
                break;
        }
    }

    renderStep() {
        switch (this.state.step) {
            case 0:
                if (this.state.fishBowls) {
                    return this.state.fishBowls.map(item => {
                        return (
                            <div className="item-product" onClick={() => this.changeSelectedFishBowl(item)}>
                                <p className="item-title"><strong>{item.code}</strong></p>
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src={item.image} alt={item.code}/>
                                    </div>
                                    <div className="col-md-7">
                                        <p><strong>Capacidad:</strong> {item.capacity} cm</p>
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
                return this.state.water.map(item => {
                    return (
                        <div className="item-product" onClick={() => this.changeSelectedWater(item)}>
                            <p className="item-title"><strong>{item.type}</strong></p>
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={item.image['EA-80']} alt={item.type}/>
                                </div>
                                <div className="col-md-6">
                                    <p><strong>{item.type}</strong></p>
                                </div>
                            </div>
                        </div>
                    );
                });
                break;
            case 2:
                if (this.state.floor) {
                    return this.state.floor.filter(item => item.water_type == this.state.selectedWater.type).map(item => {
                        return (
                            <div className="item-product" onClick={() => this.changeSelectedFloor(item)}>
                                <p className="item-title"><strong>{item.name}</strong></p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src={item.image['EA-100']} alt={item.id}/>
                                    </div>
                                    <div className="col-md-6">
                                        <p><strong>{item.name}</strong></p>
                                    </div>
                                </div>
                            </div>
                        );
                    });
                }
                return null;
                break;
            case 3:
                if (this.state.plant) {
                    return this.state.plant.map(item => {
                        return (
                            <Plant key={item.id} item={item} handleDrop={() => this.setPlants(item)}/>
                        );
                    });
                }
                return null;
                break;
            case 4:
                if (this.state.rock) {
                    return this.state.rock.map(item => {
                        return (
                            <Rock key={item.id} item={item} handleDrop={() => this.setRocks(item)}/>
                        );
                    });
                }
                return null;
                break;
            case 5:
                if (this.state.decoration) {
                    return this.state.decoration.map(item => {
                        return (
                            <Decoration key={item.id} item={item} handleDrop={() => this.setDecorations(item)}/>
                        );
                    });
                }
                return null;
                break;
            case 6:
                if (this.state.fish) {
                    return this.state.fish.map(item => {
                        return (
                            <Fish key={item.name} item={item} handleDrop={() => this.setFish(item)} />
                        );
                    });
                }
                return null;
                break;
            case 7:
                if (this.state.products) {
                    const item = this.state.products;
                    let plants = this.state.products[3];
                    let rocks = this.state.products[4];
                    let decorations = this.state.products[5];
                    let fish = this.state.products[6];

                    plants = plants.map(plant =>
                        <div className="item-product">
                            <p className="item-title"><strong>{plant.name}</strong></p>
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={plant.image[0]} alt={plant.name}/>
                                </div>
                                <div className="col-md-6">
                                    <p><strong>{plant.name}</strong></p>
                                </div>
                            </div>
                        </div>
                    );

                    rocks = rocks.map(rock =>
                        <div className="item-product">
                            <p className="item-title"><strong>{rock.name}</strong></p>
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={rock.image[0]} alt={rock.name}/>
                                </div>
                                <div className="col-md-6">
                                    <p><strong>{rock.name}</strong></p>
                                </div>
                            </div>
                        </div>
                    );

                    decorations = decorations.map(decoration =>
                        <div className="item-product">
                            <p className="item-title"><strong>{decoration.name}</strong></p>
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={decoration.image[0]} alt={decoration.name}/>
                                </div>
                                <div className="col-md-6">
                                    <p><strong>{decoration.name}</strong></p>
                                </div>
                            </div>
                        </div>
                    );

                    fish = fish.map(_fish =>
                        <div className="item-product">
                            <p className="item-title"><strong>{_fish.name}</strong></p>
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={_fish.image['80x80']} alt={_fish.name}/>
                                </div>
                                <div className="col-md-6">
                                    <p><strong>{_fish.name}</strong></p>
                                </div>
                            </div>
                        </div>
                    );

                    return (
                        <div>
                            <div className="item-product">
                                <p className="item-title"><strong>{item[0].code}</strong></p>
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src={item[0].image} alt={item[0].code}/>
                                    </div>
                                    <div className="col-md-7">
                                        <p><strong>Capacidad:</strong> {item[0].capacity} cm</p>
                                        <p><strong>Altura:</strong> {item[0].height} cm</p>
                                        <p><strong>Largo:</strong> {item[0].width} cm</p>
                                        <p><strong>Ancho:</strong> {item[0].depth} cm</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item-product">
                                <p className="item-title"><strong>{item[1].type}</strong></p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src={item[1].image['EA-100']} alt={item[1].type}/>
                                    </div>
                                    <div className="col-md-6">
                                        <p><strong>{item[1].type}</strong></p>
                                    </div>
                                </div>
                            </div>
                            <div className="item-product" onClick={() => this.changeSelectedFloor(item)}>
                                <p className="item-title"><strong>{item[2].name}</strong></p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src={item[2].image['EA-100']} alt={item[2].id}/>
                                    </div>
                                    <div className="col-md-6">
                                        <p><strong>{item[2].name}</strong></p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {plants}
                            </div>
                            <div>
                                {rocks}
                            </div>
                            <div>
                                {decorations}
                            </div>
                            <div>
                                {fish}
                            </div>
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
                break;
            case 1:
                return 'ELIGE EL AGUA';
                break;
            case 2:
                return 'ELIGE EL SUELO';
                break;
            case 3:
                return 'ELIGE LAS PLANTAS';
                break;
            case 4:
                return 'ELIGE LAS ROCAS';
                break;
            case 5:
                return 'ELIGE LOS ADORNOS';
                break;
            case 6:
                return 'ELIGE LOS PECES';
                break;
            case 7:
                return 'RESUMEN';
                break;
            default:
                break;
        }
    }

    renderProducts() {
        if (this.state.selectedWater && this.state.selectedFishBowl && this.state.selectedFloor) {
            return (
                <div>
                    <img className="selectedProduct" src={this.state.selectedWater.image[this.state.selectedFishBowl.code]} />
                    <img className="selectedProduct" src={this.state.selectedFishBowl.image} />
                    <img className="selectedProduct" src={this.state.selectedFloor.image[this.state.selectedFishBowl.code]} />
                </div>
            );
        }
        else if (this.state.selectedWater && this.state.selectedFishBowl) {
            return (
                <div>
                    <img className="selectedProduct" src={this.state.selectedWater.image[this.state.selectedFishBowl.code]} />
                    <img className="selectedProduct" src={this.state.selectedFishBowl.image} />
                </div>
            );
        }
        else if (this.state.selectedFishBowl) {
            return(
                <img className="selectedProduct" src={this.state.selectedFishBowl.image} />
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
                    <button id="next-button" className="button" onClick={() => this.checkIfSelected()}>Siguiente <i className="fa fa-arrow-right"></i></button>
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
        else if (this.state.step == 7) {
            return (
                <div className="nav-buttons">
                    <button id="back-button" className="button" onClick={() => this.returnStep()}><i className="fa fa-arrow-left"></i> Regresar</button>
                </div>
            );
        }
    }

    renderTarget(i) {
        let item = null;
        let items = [];

        if (this.state.setTarget.length > 0) {
            if (this.state.selectedPlants.length > 0 && this.state.selectedRocks.length > 0 && this.state.selectedDecorations.length > 0) {
                this.state.selectedPlants.map(plant => items.push(plant));
                this.state.selectedRocks.map(rock => items.push(rock));
                this.state.selectedDecorations.map(decoration => items.push(decoration));
            }
            else if (this.state.selectedPlants.length > 0 && this.state.selectedRocks.length > 0) {
                this.state.selectedPlants.map(plant => items.push(plant));
                this.state.selectedRocks.map(rock => items.push(rock));
            }
            else if (this.state.selectedPlants.length > 0) {
                this.state.selectedPlants.map(plant => items.push(plant));
            }

            if (this.state.setTarget.length === items.length) {
                if (this.state.setTarget.includes(i)) {
                    switch (items[this.state.setTarget.indexOf(i)].type) {
                        case 1:
                            switch (this.state.selectedFishBowl.code) {
                                case 'EA-80':
                                    item = <img className="plants-EA-80" src={items[this.state.setTarget.indexOf(i)].image[0]} alt={items[this.state.setTarget.indexOf(i)].name} />;
                                    break;
                                case 'EA-100':
                                    item = <img className="plants-EA-100" src={items[this.state.setTarget.indexOf(i)].image[0]} alt={items[this.state.setTarget.indexOf(i)].name} />;
                                    break;
                                case 'EA-120':
                                    item = <img className="plants-EA-120" src={items[this.state.setTarget.indexOf(i)].image[0]} alt={items[this.state.setTarget.indexOf(i)].name} />;
                                    break;
                                case 'EA-150':
                                    item = <img className="plants-EA-150" src={items[this.state.setTarget.indexOf(i)].image[0]} alt={items[this.state.setTarget.indexOf(i)].name} />;
                                    break;
                                case 'MT-50':
                                    item = <img className="plants-MT-50" src={items[this.state.setTarget.indexOf(i)].image[0]} alt={items[this.state.setTarget.indexOf(i)].name} />;
                                    break;
                                case 'ZDT-815':
                                    item = <img className="plants-ZDT-815" src={items[this.state.setTarget.indexOf(i)].image[0]} alt={items[this.state.setTarget.indexOf(i)].name} />;
                                    break;
                            }
                            break;
                        case 2:
                            switch (this.state.selectedFishBowl.code) {
                                case 'EA-80':
                                    item = <img className="rocks-EA-80" src={items[this.state.setTarget.indexOf(i)].image[0]} alt={items[this.state.setTarget.indexOf(i)].name} />;
                                    break;
                                case 'EA-100':
                                    item = <img className="rocks-EA-100" src={items[this.state.setTarget.indexOf(i)].image[0]} alt={items[this.state.setTarget.indexOf(i)].name} />;
                                    break;
                                case 'EA-120':
                                    item = <img className="rocks-EA-120" src={items[this.state.setTarget.indexOf(i)].image[0]} alt={items[this.state.setTarget.indexOf(i)].name} />;
                                    break;
                                case 'EA-150':
                                    item = <img className="rocks-EA-150" src={items[this.state.setTarget.indexOf(i)].image[0]} alt={items[this.state.setTarget.indexOf(i)].name} />;
                                    break;
                                case 'MT-50':
                                    item = <img className="rocks-MT-50" src={items[this.state.setTarget.indexOf(i)].image[0]} alt={items[this.state.setTarget.indexOf(i)].name} />;
                                    break;
                                case 'ZDT-815':
                                    item = <img className="rocks-ZDT-815" src={items[this.state.setTarget.indexOf(i)].image[0]} alt={items[this.state.setTarget.indexOf(i)].name} />;
                                    break;
                            }
                            break;
                        case 3:
                            switch (this.state.selectedFishBowl.code) {
                                case 'EA-80':
                                    switch (items[this.state.setTarget.indexOf(i)].size) {
                                        case 'CH':
                                            item = <img className="decorations-EA-80-CH" src={items[this.state.setTarget.indexOf(i)].image[0]} alt={items[this.state.setTarget.indexOf(i)].name} />;
                                            break;
                                        case 'M':
                                            break;
                                        case 'G':
                                            break;
                                        default:
                                            item = <img className="decorations-EA-80-CH" src={items[this.state.setTarget.indexOf(i)].image[0]} alt={items[this.state.setTarget.indexOf(i)].name} />;
                                            break;
                                    }
                                    break;
                                case 'EA-100':
                                    switch (items[this.state.setTarget.indexOf(i)].size) {
                                        case 'CH':
                                            item = <img className="decorations-EA-100-CH" src={items[this.state.setTarget.indexOf(i)].image[0]} alt={items[this.state.setTarget.indexOf(i)].name} />;
                                            break;
                                        case 'M':
                                            break;
                                        case 'G':
                                            break;
                                        default:
                                            item = <img className="decorations-EA-100-CH" src={items[this.state.setTarget.indexOf(i)].image[0]} alt={items[this.state.setTarget.indexOf(i)].name} />;
                                            break;
                                    }
                                    break;
                                case 'EA-120':
                                    switch (items[this.state.setTarget.indexOf(i)].size) {
                                        case 'CH':
                                            item = <img className="decorations-EA-120-CH" src={items[this.state.setTarget.indexOf(i)].image[0]} alt={items[this.state.setTarget.indexOf(i)].name} />;
                                            break;
                                        case 'M':
                                            break;
                                        case 'G':
                                            break;
                                        default:
                                            item = <img className="decorations-EA-120-CH" src={items[this.state.setTarget.indexOf(i)].image[0]} alt={items[this.state.setTarget.indexOf(i)].name} />;
                                            break;
                                    }
                                    break;
                                case 'EA-150':
                                    switch (items[this.state.setTarget.indexOf(i)].size) {
                                        case 'CH':
                                            item = <img className="decorations-EA-150-CH" src={items[this.state.setTarget.indexOf(i)].image[0]} alt={items[this.state.setTarget.indexOf(i)].name} />;
                                            break;
                                        case 'M':
                                            break;
                                        case 'G':
                                            break;
                                        default:
                                            item = <img className="decorations-EA-150-CH" src={items[this.state.setTarget.indexOf(i)].image[0]} alt={items[this.state.setTarget.indexOf(i)].name} />;
                                            break;
                                    }
                                    break;
                                case 'MT-50':
                                    switch (items[this.state.setTarget.indexOf(i)].size) {
                                        case 'CH':
                                            item = <img className="decorations-MT-50-CH" src={items[this.state.setTarget.indexOf(i)].image[0]} alt={items[this.state.setTarget.indexOf(i)].name} />;
                                            break;
                                        case 'M':
                                            break;
                                        case 'G':
                                            break;
                                        default:
                                            item = <img className="decorations-MT-50-CH" src={items[this.state.setTarget.indexOf(i)].image[0]} alt={items[this.state.setTarget.indexOf(i)].name} />;
                                            break;
                                    }
                                    break;
                                case 'ZDT-815':
                                    switch (items[this.state.setTarget.indexOf(i)].size) {
                                        case 'CH':
                                            item = <img className="decorations-ZDT-815-CH" src={items[this.state.setTarget.indexOf(i)].image[0]} alt={items[this.state.setTarget.indexOf(i)].name} />;
                                            break;
                                        case 'M':
                                            break;
                                        case 'G':
                                            break;
                                        default:
                                            item = <img className="decorations-ZDT-815-CH" src={items[this.state.setTarget.indexOf(i)].image[0]} alt={items[this.state.setTarget.indexOf(i)].name} />;
                                            break;
                                    }
                                    break;
                            }
                            break;
                    }
                }
            }
        }

        return (
            <div key={i}>
                <Target id={i} handleTargetDrop={(i) => this.setDroppedProducts(i)}>
                    {item}
                </Target>
            </div>
        );
    }

    renderFishTarget(i) {
        let item = null;

        if (this.state.setFishTarget.length > 0 && this.state.selectedFish.length > 0 && this.state.setFishTarget.length === this.state.selectedFish.length) {
            if (this.state.setFishTarget.includes(i)) {
                switch (this.state.selectedFishBowl.code) {
                    case 'EA-80':
                        switch (this.state.selectedFish[this.state.setFishTarget.indexOf(i)].size) {
                            case 'CH':
                                item = <img className="fish-EA-80-CH" src={this.state.selectedFish[this.state.setFishTarget.indexOf(i)].image['80x80']} alt={this.state.selectedFish[this.state.setFishTarget.indexOf(i)].name} />;
                                break;
                            case 'M':
                                break;
                            case 'G':
                                break;
                            default:
                                item = <img className="fish-EA-80-CH" src={this.state.selectedFish[this.state.setFishTarget.indexOf(i)].image['80x80']} alt={this.state.selectedFish[this.state.setFishTarget.indexOf(i)].name} />;
                                break;
                        }
                        break;
                    case 'EA-100':
                        switch (this.state.selectedFish[this.state.setFishTarget.indexOf(i)].size) {
                            case 'CH':
                                item = <img className="fish-EA-100-CH" src={this.state.selectedFish[this.state.setFishTarget.indexOf(i)].image['80x80']} alt={this.state.selectedFish[this.state.setFishTarget.indexOf(i)].name} />;
                                break;
                            case 'M':
                                break;
                            case 'G':
                                break;
                            default:
                                item = <img className="fish-EA-100-CH" src={this.state.selectedFish[this.state.setFishTarget.indexOf(i)].image['80x80']} alt={this.state.selectedFish[this.state.setFishTarget.indexOf(i)].name} />;
                                break;
                        }
                        break;
                    case 'EA-120':
                        switch (this.state.selectedFish[this.state.setFishTarget.indexOf(i)].size) {
                            case 'CH':
                                item = <img className="fish-EA-120-CH" src={this.state.selectedFish[this.state.setFishTarget.indexOf(i)].image['80x80']} alt={this.state.selectedFish[this.state.setFishTarget.indexOf(i)].name} />;
                                break;
                            case 'M':
                                break;
                            case 'G':
                                break;
                            default:
                                item = <img className="fish-EA-120-CH" src={this.state.selectedFish[this.state.setFishTarget.indexOf(i)].image['80x80']} alt={this.state.selectedFish[this.state.setFishTarget.indexOf(i)].name} />;
                                break;
                        }
                        break;
                    case 'EA-150':
                        switch (this.state.selectedFish[this.state.setFishTarget.indexOf(i)].size) {
                            case 'CH':
                                item = <img className="fish-EA-150-CH" src={this.state.selectedFish[this.state.setFishTarget.indexOf(i)].image['80x80']} alt={this.state.selectedFish[this.state.setFishTarget.indexOf(i)].name} />;
                                break;
                            case 'M':
                                break;
                            case 'G':
                                break;
                            default:
                                item = <img className="fish-EA-150-CH" src={this.state.selectedFish[this.state.setFishTarget.indexOf(i)].image['80x80']} alt={this.state.selectedFish[this.state.setFishTarget.indexOf(i)].name} />;
                                break;
                        }
                        break;
                    case 'MT-50':
                        switch (this.state.selectedFish[this.state.setFishTarget.indexOf(i)].size) {
                            case 'CH':
                                item = <img className="fish-MT-50-CH" src={this.state.selectedFish[this.state.setFishTarget.indexOf(i)].image['80x80']} alt={this.state.selectedFish[this.state.setFishTarget.indexOf(i)].name} />;
                                break;
                            case 'M':
                                break;
                            case 'G':
                                break;
                            default:
                                item = <img className="fish-MT-50-CH" src={this.state.selectedFish[this.state.setFishTarget.indexOf(i)].image['80x80']} alt={this.state.selectedFish[this.state.setFishTarget.indexOf(i)].name} />;
                                break;
                        }
                        break;
                    case 'ZDT-815':
                        switch (this.state.selectedFish[this.state.setFishTarget.indexOf(i)].size) {
                            case 'CH':
                                item = <img className="fish-ZDT-815-CH" src={this.state.selectedFish[this.state.setFishTarget.indexOf(i)].image['80x80']} alt={this.state.selectedFish[this.state.setFishTarget.indexOf(i)].name} />;
                                break;
                            case 'M':
                                break;
                            case 'G':
                                break;
                            default:
                                item = <img className="fish-ZDT-815-CH" src={this.state.selectedFish[this.state.setFishTarget.indexOf(i)].image['80x80']} alt={this.state.selectedFish[this.state.setFishTarget.indexOf(i)].name} />;
                                break;
                        }
                        break;
                }
            }
        }

        return (
            <div key={i}>
                <FishTarget id={i} handleTargetDrop={(i) => this.setDroppedFish(i)}>
                    {item}
                </FishTarget>
            </div>
        );
    }

    renderTargetContainer() {
        const targets = [];

        if (this.state.selectedFishBowl) {
            switch (this.state.selectedFishBowl.code) {
                case 'EA-80':
                    for (let i = 0; i < 23; i++) { //EA-*
                        targets.push(this.renderTarget(i));
                    }
                    return (
                        <div className="drag-n-drop-container-EA-80">
                            {targets}
                        </div>
                    );
                    break;
                case 'EA-100':
                    for (let i = 0; i < 25; i++) { //EA-*
                        targets.push(this.renderTarget(i));
                    }
                    return (
                        <div className="drag-n-drop-container-EA-100">
                            {targets}
                        </div>
                    );
                    break;
                case 'EA-120':
                    for (let i = 0; i < 25; i++) { //EA-*
                        targets.push(this.renderTarget(i));
                    }
                    return (
                        <div className="drag-n-drop-container-EA-120">
                            {targets}
                        </div>
                    );
                    break;
                case 'EA-150':
                    for (let i = 0; i < 25; i++) { //EA-*
                        targets.push(this.renderTarget(i));
                    }
                    return (
                        <div className="drag-n-drop-container-EA-150">
                            {targets}
                        </div>
                    );
                    break;
                case 'MT-50':
                    for (let i = 0; i < 10; i++) { //MT-50
                        targets.push(this.renderTarget(i));
                    }
                    return (
                        <div className="drag-n-drop-container-MT-50">
                            {targets}
                        </div>
                    );
                    break;
                case 'ZDT-815':
                    for (let i = 0; i < 25; i++) { //ZDT-815
                        targets.push(this.renderTarget(i));
                    }
                    return (
                        <div className="drag-n-drop-container-ZDT-815">
                            {targets}
                        </div>
                    );
                    break;
            }
        }
    }

    renderFishTargetContainer() {
        const fishTargets = [];

        if (this.state.selectedFishBowl) {
            switch (this.state.selectedFishBowl.code) {
                case 'EA-80':
                    for (let i = 0; i < 81; i++) { //EA-80
                        fishTargets.push(this.renderFishTarget(i));
                    }
                    return (
                        <div className="drag-n-drop-container-fish-EA-80">
                            {fishTargets}
                        </div>
                    );
                    break;
                case 'EA-100':
                    for (let i = 0; i < 90; i++) { //EA-100
                        fishTargets.push(this.renderFishTarget(i));
                    }
                    return (
                        <div className="drag-n-drop-container-fish-EA-100">
                            {fishTargets}
                        </div>
                    );
                    break;
                case 'EA-120':
                    for (let i = 0; i < 80; i++) { //EA-120
                        fishTargets.push(this.renderFishTarget(i));
                    }
                    return (
                        <div className="drag-n-drop-container-fish-EA-120">
                            {fishTargets}
                        </div>
                    );
                    break;
                case 'EA-150':
                    for (let i = 0; i < 70; i++) { //EA-150
                        fishTargets.push(this.renderFishTarget(i));
                    }
                    return (
                        <div className="drag-n-drop-container-fish-EA-150">
                            {fishTargets}
                        </div>
                    );
                    break;
                case 'MT-50':
                    for (let i = 0; i < 45; i++) { //MT-50
                        fishTargets.push(this.renderFishTarget(i));
                    }
                    return (
                        <div className="drag-n-drop-container-fish-MT-50">
                            {fishTargets}
                        </div>
                    );
                    break;
                case 'ZDT-815':
                    for (let i = 0; i < 90; i++) { //ZDT-815
                        fishTargets.push(this.renderFishTarget(i));
                    }
                    return (
                        <div className="drag-n-drop-container-fish-ZDT-815">
                            {fishTargets}
                        </div>
                    );
                    break;
            }
        }
    }

    render () {
        return (
            <main className="site-main site-main-react page-spacing">
                <div className="container-fluid no-padding">
                    <div className="container">
                        <div className="section-header">
                            <Tabs className="tabContainer" selectedTabClassName="tab-selected" selectedIndex={this.state.step}>
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
                        <div className="row">
                            <div className="col-md-4">
                                <div className="itemContainer">
                                    <h2>{this.renderLabel()}:</h2>
                                    <div>
                                        {this.renderStep()}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="productContainer">
                                    {this.renderProducts()}
                                    {this.renderTargetContainer()}
                                    {this.renderFishTargetContainer()}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-padding"></div>
                </div>
                <div className="container-fluid no-padding">
                    <div className="container">
                        <div className="section-header">
                            <div className="nav-buttons">
                                {this.renderButtons()}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default DragDropContext(HTML5Backend)(Quoting);
