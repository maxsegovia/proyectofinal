import React, { Component } from 'react';
import './gallery.css';

class Gallery extends Component {
    render() {
        return (
            <div className="site-main site-main-react page-spacing">
                <div className="section-padding" />
                <div className="container-fluid no-padding">
                    <div className="section-header">
                        <h3>GALERÍA DE FOTOS</h3>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="stockphoto img-1" />
                            </div>
                            <div className="col-md-3">
                                <div className="stockphoto img-2" />
                            </div>
                            <div className="col-md-3">
                                <div className="stockphoto img-3" />
                            </div>
                            <div className="col-md-3">
                                <div className="stockphoto img-4" />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="stockphoto img-5" />
                            </div>
                            <div className="col-md-3">
                                <div className="stockphoto img-6" />
                            </div>
                            <div className="col-md-3">
                                <div className="stockphoto img-7" />
                            </div>
                        </div>
                    </div>
                    <div className="section-padding" />
                </div>
            </div>
        );
    }
}

export { Gallery };
