import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Header, Loading, Footer } from './Common';
import { Home } from './Home';
import { Gallery } from './Gallery';
import './index.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOption: 0,
        };
    }

    renderContent() {
        switch (this.state.menuOption) {
            case 0:
                return (
                    <Home />
                );
            case 1:
                return (
                    <p>Hola!</p>
                );
            case 2:
                return (
                    <Gallery />
                );
            case 3:
                return (
                    <p>Hola!</p>
                );
            case 4:
                return (
                    <div className="container page-spacing" style={{ marginTop: 30 }}>
                        <div className="section-header" style={{ marginBottom: -30 }}>
                            <h3>Aviso de Privacidad</h3>
                        </div>
                        <p>Aquí va el aviso de privacidad</p>
                    </div>
                );
            default:
                break;
        }
    }

    render () {
        return (
            <div>
                <header className="header container-fluid no-padding">
                    <div className="menu-block container-fluid no-pdding">
                        <div className="container">
                            <nav className="navbar ow-navigation">
                                <a id="nav-logo-1" className="navbar-brand" href="index.html" title="Logo"><img src={require('./Common/images/logo.png')} alt="Logo" style={{ width: 200, height: 80 }} /></a>
                                <div className="navbar-header">
                                    <button id="openCloseNav" type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>
                                <div id="navbar" className="navbar-collapse collapse">
                                    <a id="nav-logo-2" className="navbar-brand" href="index.html" title="Logo"><img src={require('./Common/images/logo.png')} alt="Logo" style={{ width: 200, height: 80 }} /></a>
                                    <ul className="nav navbar-nav">
                                        <Tabs className="nav-tabContainer" selectedTabClassName="nav-tab-selected" selectedIndex={this.state.menuOption} onSelect={(index) => { this.setState({ menuOption: index }); }}>
                                            <TabList>
                                                <Tab className="nav-tabs-react"><a>INICIO</a></Tab>
                                                <Tab className="nav-tabs-react"><a>CREA TU PECERA</a></Tab>
                                                <Tab className="nav-tabs-react"><a>GALERÍA</a></Tab>
                                                <Tab className="nav-tabs-react"><a>CONTACTO</a></Tab>
                                            </TabList>
                                            <TabPanel>
                                            </TabPanel>
                                            <TabPanel>
                                            </TabPanel>
                                            <TabPanel>
                                            </TabPanel>
                                            <TabPanel>
                                            </TabPanel>
                                        </Tabs>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
                {this.renderContent()}
                <Footer/>
            </div>
        );
    }
}

export default App;
