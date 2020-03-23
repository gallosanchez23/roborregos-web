import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

class AboutHeader extends Component{

    render() {
        return(
            <Row className="justify-content-sm-center">
					<h2 className= "about-header-title">
						Our Story
					</h2>
            </Row>
        );
    }
}

export default AboutHeader;