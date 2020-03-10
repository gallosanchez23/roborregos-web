// This view uses Matrial-UI elements
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import {Description,Email,Close} from '@material-ui/icons';
import placeholder from 'images/placeholder-rectangle.png';

class MemberModal extends Component {
	constructor(props) {
		super(props);

		this.tryRequireImg = this.tryRequireImg.bind(this);
		this.tryRequireResume = this.tryRequireResume.bind(this);
		this.memberFullName = this.memberFullName.bind(this);
		this.memberEmail = this.memberEmail.bind(this);

		this.member = props.member;
		this.handleHideModal = props.onHide;
	}

	tryRequireImg(img_path) {
		try {
			return require('images/members/' + img_path);
		} catch (err) {
			return placeholder;
		}
	}
	
	tryRequireResume(doc_path){
		try {
			return require('data/resumes/' + doc_path);
		} catch (err) {
			return ;	
		}
	}
	memberEmail(email){
		return email.substring(0, email.indexOf('@'));
	}
	memberFullName() {
		return this.member.name + ' ' + this.member.lastname;
	}

	render() {
		return (
			<div className='member-modal-container'>
				<div className='container-helper'>
					<Row className='d-flex justify-content-center main-modal-row'>

						<Col xs='8' sm='6' md='5' lg='4' className='image-col'>
							<div className='image-cropper'>
								<img
									className='modal-member-image'
									src={ this.tryRequireImg(this.member.img) }
									alt={ this.memberFullName() }
								/>
							</div>
						</Col>

						<Col xs='8' sm='7' md='6' lg='5' className='information-col'>
							<div className='information-container'>
								<Row noGutters={ true }>
									<Col xs='11'>
										<h2>
											{ this.memberFullName() }
										</h2>
									</Col>
									<Col xs='1'>
										<IconButton className='member-modal-btn' onClick={ this.handleHideModal }>
											<Close />
										</IconButton>
									</Col>
								</Row>

								<p>
									<strong>
										{ this.member.role }
									</strong>
									<br/>
									<br/>
									{ this.member.description }
									<br/>
									<br/>
									<div class="button-container">
										<Button href={ this.member.github } target='_blank' className='member-modal-btn'>
											<Icon className='fab fa-github fa-fw' />
											<span className='member-username'>
												{ this.member.github_user }
											</span>
										</Button>
										<Button href={ this.member.linkedin } target='_blank' className='member-modal-btn'>
											<Icon className='fab fa-linkedin fa-fw' />
											<span className='member-username'>
												{ this.memberFullName() }
											</span>
										</Button>
										<Button href={ this.tryRequireResume(this.member.resume) } target='_blank' className='member-modal-btn'>
											<Description className='fab fa fa-file fa-fw' />
											<span className='member-username'>
												{ this.memberFullName() }
											</span>
										</Button>
										<Button href={ 'mailto:'+this.member.email } className='member-modal-btn'>
											<Email className='fab fa fa-fw' />
											<span className='member-username'>
												{ this.memberEmail	(this.member.email) }
											</span>
										</Button>
									</div>
								</p>
							</div>
						</Col>

					</Row>
				</div>
			</div>
		);
	}
}

export default MemberModal;