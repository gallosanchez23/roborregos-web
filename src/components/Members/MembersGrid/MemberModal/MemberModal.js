import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Icon from '@material-ui/core/Icon';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import placeholder from 'images/placeholder-rectangle.png';
import { MEDIUM_WIDTH } from 'constants.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import './MemberModal.css';
import color from '@material-ui/core/colors/amber';

class MemberModal extends Component {
	constructor(props) {
		super(props);

		this.tryRequire = this.tryRequire.bind(this);
		this.memberFullName = this.memberFullName.bind(this);
		this.largeView = this.largeView.bind(this);
		this.smallView = this.smallView.bind(this);
		this.updateSizeView = this.updateSizeView.bind(this);
		this.generateDataButtons = this.generateDataButtons.bind(this);
		this.keyFunction = this.keyFunction.bind(this);

		this.member = props.member;
		this.handleHideModal = props.onHide;

		this.state = {
			show_large: (window.innerWidth >= MEDIUM_WIDTH)?true:false,
		}
	}

	keyFunction(event){
		if(event.keyCode === 27) {
			this.setState({
				handleHideModal: true
			});
		}
	}

	componentDidMount() {
		document.addEventListener("keydown", this.escFunction, false);
		window.addEventListener('resize', this.updateSizeView);
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

	updateSizeView(){
		this.setState({
			show_large: (window.innerWidth >= MEDIUM_WIDTH)?true:false,
		});
	}

	generateDataButtons(){
		var class_name = "";
		var icon_size = 0;
		if(this.state.show_large){
			class_name="member-modal-btn";
			icon_size = [30, 35, 38];
		}else{
			class_name="icon-small";
			icon_size = [20, 22, 23];
		}
		return (
			<p className='data-buttons'>
			{
				(this.member.github !== "") ?
					(
					<div>
						<Button href={ this.member.github } className={class_name}>
							<Icon className='fab fa-github fa-fw' style={{ fontSize: icon_size[0] }} />
							<span className='member-username'>
								{ this.member.github_user }
							</span>
						</Button>
						<br></br>
					</div>): null 
			}
			{
				(this.member.linkedin !== "") ?
					(<div>
						<Button href={ this.member.linkedin } className={class_name}>
							<LinkedInIcon style={{ fontSize: icon_size[1] }} />
							<span className='member-username'>
								LinkedIn
							</span>
						</Button>
						<br></br>
					</div>):null
			}
			{
				(this.member.resume_link !== "") ?
					(
					<div>
						<Button href={ this.member.resume_link } className={class_name}>
							<FontAwesomeIcon icon={faFilePdf} style={{ fontSize: icon_size[2], paddingLeft: "0.7vw" }} />
							<span className='member-username'>
								Resume
							</span>
						</Button>	
					</div>
					):null
			}
			</p>
		);
	}

	largeView() {
		return (
			<div className='member-modal-container'>
				<div className='container-helper'>
					<Row className='justify-content-sm-center main-modal-row'>
						<Col lg='3' className='image-col'>
							<div className='image-cropper'>
								<img
									className='modal-member-image'
									src={ this.tryRequire(this.member.id + ".jpg") }
									alt={ this.memberFullName() }
								/>
							</div>
						</Col>
						<Col lg='5' className='information-col'>
							<div className='information-container'>
								<Row noGutters>
									<Col xs='11'>
									</Col>
									<Col xs='1'>
										<IconButton className='closing-btn' onClick={ this.handleHideModal }>
											<CloseIcon />
										</IconButton>
									</Col>
								</Row>
								<Row noGutters>
									<div className="member-titles">
										<h2>
											{ this.memberFullName() }
										</h2>
										<strong> { this.member.role } </strong>
									</div>
								</Row>
								<Row noGutters>
									<p className="member-data">
										{ this.member.description }
									</p>
								</Row>
								{ this.generateDataButtons() }
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
						<Row noGutters className='image-col-small'>
							<div className='image-cropper'>
								<img
									className='modal-member-image'
									src={ this.tryRequire(this.member.id + ".jpg") }
									alt={ this.memberFullName() }
								/>
							</div>
						</Row>
						<div className='description-small'>
							<Row noGutters>
								<div className="member-titles">
									<h2 className='name-small'>
										{ this.memberFullName() }
									</h2>
									<strong> { this.member.role } </strong>
								</div>
							</Row>
							<Row noGutters>
								<p className="member-data">
									{ this.member.description }
								</p>
							</Row>
							{ this.generateDataButtons() }
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