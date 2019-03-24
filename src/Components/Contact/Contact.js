import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Contact extends Component {
    render () {
        // 	<div className="map-canvas" id="map-canvas-contact" data-lat="19.433555" data-lng="-99.172938" data-string="<div className='map-content'>
        // 	<p><i><img src='images/icon/location-ic.png' alt='Dirección' /></i>Gutemberg 47-A, Verónic Anzúres, 11300. CDMX, México</p>
        // 	<p><i><img src='images/icon/phone-ic.png' alt='Teléfono' /></i><a href='tel:+525563930808'>+52 (55) 6393 0808</a></p>
        // </div>" data-zoom="18"></div>
        return (
            <main className="site-main page-spacing">
        		<div className="page-banner contact-banner container-fluid no-padding">
        			<div className="page-banner-content">
        				<div className="container">
        					<h3>Contáctanos</h3>
        					<p>¿Dudas? ¡Ponte en contacto con nuestros expertos!</p>
        				</div>
        			</div>
        			<div className="banner-content container-fluid no-padding">
        				<div className="container">
        					<h4 className="pull-left">Dirección</h4>
        				</div>
        			</div>
        		</div>
        		<div className="contact-us container-fluid no-padding">
        			<div className="map container-fluid no-padding">
                        <div className="map-canvas" id="map-canvas-contact">
                            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.510099940134!2d-99.17513368564478!3d19.43356198688378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8b49ca7f27d%3A0xb0654b427fbc58b9!2sMipecera!5e0!3m2!1ses-419!2smx!4v1540507548259" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen />
                        </div>
        			</div>
        			<div className="section-padding"></div>
        			<div className="container">
        				<div className="section-header">
        					<h3>Mándanos un mensaje</h3>
        					<p>Nuestros expertos se pondrán en contacto contigo a la brevedad</p>
        				</div>
        				<form className="contact-form">
        					<div className="row">
        						<div className="form-group col-md-6">
        							<input type="text" name="contact-name" className="form-control" id="input_name" placeholder="Nombre completo *" required/>
        						</div>
        						<div className="form-group col-md-6">
        							<input type="email" name="contact-email" className="form-control" id="input_email" placeholder="Correo Electrónico *" required/>
        						</div>
        						<div className="form-group col-md-6">
        							<input type="text" name="contact-phone" className="form-control" id="input_phone" placeholder="Telefono *" required />
        						</div>
        						<div className="form-group col-md-6">
        							<input type="text" name="contact-subject" className="form-control" id="input_subject" placeholder="Asunto *" required />
        						</div>
        						<div className="form-group col-md-12">
        							<textarea className="form-control" rows="5" name="contact-message" id="textarea_message" placeholder="Mensaje *"></textarea>
        						</div>
        						<div className="form-group">
        							<input type="submit" title="Enviar Mensaje"  value="Enviar Mensaje" id="btn_submit" name="post" />
        						</div>
        						<div id="alert-msg" className="alert-msg"></div>
        					</div>
        				</form>
        			</div>
        			<div className="section-padding"></div>
        		</div>
        	</main>
        );
    }
}

export { Contact };
