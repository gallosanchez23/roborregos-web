import React, { Component } from 'react';
import placeholder from 'images/placeholder-rectangle.png';

class HomeSingleSponsor extends Component {
	constructor(props) {
		super(props);

		this.imgNameFormat = this.imgNameFormat.bind(this);
		this.tryRequire = this.tryRequire.bind(this);

		this.sponsor = props.sponsor;
	}

	imgNameFormat(img_path) {
		var dot_index = img_path.indexOf('.');
		return img_path.substring(0, dot_index) + '_white' + img_path.substring(dot_index)
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
			<div className='single-sponsor'>
				<img
					className='sponsor-image'
					src={ this.tryRequire(this.imgNameFormat(this.sponsor.img_path)) }
					onMouseOver={e => (e.currentTarget.src = this.tryRequire(this.sponsor.img_path))}
       		onMouseOut={e => (e.currentTarget.src = this.tryRequire(this.imgNameFormat(this.sponsor.img_path)))}
					alt={ this.sponsor.name }
				/>
			</div>
		);
	}
}

export default HomeSingleSponsor;