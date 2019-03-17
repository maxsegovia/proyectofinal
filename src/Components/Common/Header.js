import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <header className="header-main container-fluid no-padding">
                <div className="top-header container-fluid no-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-6 social">
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-6 add-to-cart">
                                <ul>
                                    <li><a href="https://www.facebook.com/Rentamarine" title="¡Síguenos en Facebook!"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="mailto:operaciones@pecerasgratis.com" title="¡Contáctanos por correo electrónico!"><i className="fa fa-envelope"></i></a></li>
                                </ul>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12 logo-block">
                                <a href="index.html" title="Logo"><img src={require('./images/logo.png')} alt="Logo" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export { Header };
