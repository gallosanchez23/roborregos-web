import React, { Component } from 'react';
import placeholder from 'images/placeholder-rectangle.png';

class HomeSingleSponsor extends Component {
	constructor(props) {
		super(props);

		this.tryRequire = this.tryRequire.bind(this);

		this.sponsor = props.sponsor;
	}

	tryRequire(img_path) {
		try {
			return require('images/sponsors/' + img_path);
		} catch (err) {
			return placeholder;
		}
	}

	render() {
		return(
			<a href={this.sponsor.link} className='single-sponsor'>
				<img
					className='sponsor-image'
					src={ this.tryRequire(this.sponsor.img_path) }
					alt={ this.sponsor.name }
				/>
				<div className='img-filter'></div>
			</a>
		);
	}
}

export default HomeSingleSponsor;