// This view uses Matrial-UI elements
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Icon from '@material-ui/core/Icon';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import IconButton from '@material-ui/core/IconButton';
import placeholder from 'images/placeholder-rectangle.png';
import { MEDIUM_WIDTH } from 'constants.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

class MemberModal extends Component {
	constructor(props) {
		super(props);

		this.tryRequire = this.tryRequire.bind(this);
		this.memberFullName = this.memberFullName.bind(this);
		this.largeView = this.largeView.bind(this);
		this.smallView = this.smallView.bind(this);
		this.updateSizeView = this.updateSizeView.bind(this);

		this.member = props.member;
		this.handleHideModal = props.onHide;

		this.state = {
			show_large: (window.innerWidth >= MEDIUM_WIDTH)?true:false,
		}
	}

	tryRequire(img_path) {
		try {
			return require('images/members/' + img_path);
		} catch (err) {
			return placeholder;
		}
	}

	memberFullName() {
		return this.member.name + ' ' + this.member.lastname;
	}

	componentDidMount() {
		window.addEventListener('resize', this.updateSizeView);
	}

	updateSizeView(){
		this.setState({
			show_large: (window.innerWidth >= MEDIUM_WIDTH)?true:false,
		});
	}

	largeView() {
		return (
			<div className='member-modal-container'>
				<div className='container-helper'>
					<Row className='justify-content-sm-center main-modal-row'>
						<Col xs='8' lg='3' className='image-col'>
							<div className='image-cropper'>
								<img
									className='modal-member-image'
									src={ this.tryRequire(this.member.id + ".jpg") }
									alt={ this.memberFullName() }
								/>
							</div>
						</Col>
						<Col xs='9' lg='5' className='information-col'>
							<div className='information-container'>
								<Row noGutters={ true }>
									<Col xs='11'>
									</Col>
									<Col xs='1'>
										<IconButton className='member-modal-btn' onClick={ this.handleHideModal }>
											<CloseIcon />
										</IconButton>
									</Col>
								</Row>
								<Row noGutters={ true }>
									<Col>
										<h2>
											{ this.memberFullName() }
										</h2>
									</Col>
								</Row>

								<p>
									<strong>
										{ this.member.role }
									</strong>
									<br/>
									<br/>
									{ this.member.description }
								</p>
								<br></br>
								<p>
									<Button href={ this.member.github } className='member-modal-btn'>
										<Icon className='fab fa-github fa-fw' />
										<span className='member-username'>
											{ this.member.github_user }
										</span>
									</Button>
									<br></br>
									<Button href={ this.member.linkedin } className='member-modal-btn'>
										<LinkedInIcon />
										<span className='member-username'>
											LinkedIn
										</span>
									</Button>
									<br></br>
									<Button href={ this.member.resume_link } className='member-modal-btn'>
										<FontAwesomeIcon icon={faFilePdf} />
										<span className='member-username'>
											Resume
										</span>
									</Button>
								</p>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		);
	}

	smallView() {
		return (
			<div className='member-modal-container'>
				<div className='container-helper'>
					<Row className='main-modal-row'>
						<div className='close-button'>
							<Col>
								<IconButton className='icon-small' onClick={ this.handleHideModal }>
									<CloseIcon />
								</IconButton>
							</Col>
						</div>
						<div className='information-col'>
							<Col xs={12} className='image-col'>
								<div className='image-cropper'>
									<img
										className='modal-member-image'
										src={ this.tryRequire(this.member.id + ".jpg") }
										alt={ this.memberFullName() }
									/>
								</div>
							</Col>
						</div>
						<div className='description-small'>
							<Col xs={12}>
								<Row noGutters={ true }>
									<Col className='name-small'>
										<h2>
											{ this.memberFullName() }
										</h2>
									</Col>
								</Row>
								<p>
									<strong>
										{ this.member.role }
									</strong>
								</p>
							</Col>
							<Col sm={12}>
								<p>
									{this.member.description}
								</p>
								<p>
									<Button href={ this.member.github } className='icon-small'>
										<Icon className='fab fa-github fa-fw' />
										<span className='member-username'>
											{ this.member.github_user }
										</span>
									</Button>
									<br></br>
									<Button href={ this.member.linkedin } className='icon-small'>
										<LinkedInIcon />
										<span className='member-username'>
											LinkedIn
										</span>
									</Button>
									<br></br>
									<Button href={ this.member.resume_link } className='icon-small'>
										<FontAwesomeIcon icon={faFilePdf} />
										<span className='member-username'>
											Resume
										</span>
									</Button>
								</p>
							</Col>
						</div>
					</Row>
				</div>
			</div>
		);
	}

	render() {
		if(this.state.show_large){
			return this.largeView();
		}else{
			return this.smallView();
		}
	}
}

export default MemberModal;