import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class ContactHeader extends Component {
	render() {
		return(
			<div className='contact-header'>
				<div className='container-legend'>
					<h2>
                        ¿Te gustaría apoyar el desarrollo de RoBorregos? ¡Únete a nuestro equipo de patrocinadores!
					</h2>
                    <div className= 'contact-button'>
                        <Button href="mailto:A01570056@itesm.mx" color= "inherit" variant="outlined" size="large">
                        ¡Contáctanos!
                        </Button>
                    </div>
			    </div>
			</div>
		);
	}
}

export default ContactHeader;