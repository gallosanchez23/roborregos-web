// This view uses Matrial-UI elements
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import placeholder from 'images/placeholder-rectangle.png';

class MemberModal extends Component {
	constructor(props) {
		super(props);

		this.tryRequireImg = this.tryRequireImg.bind(this);
		this.tryRequireResume = this.tryRequireResume.bind(this);
		this.memberFullName = this.memberFullName.bind(this);
		this.emailUser = this.emailUser.bind(this);

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
	
	tryRequireResume(doc_path) {
		try {
			return require('data/resumes/' + doc_path);
		} catch (err) {
			return placeholder;
		}
	}
	emailUser(email){
		return email.substring(0,email.indexOf("@"));
	}
	memberFullName() {
		return this.member.name + ' ' + this.member.lastname;
	}

	render() {
		return (
			<div className='member-modal-container'>
				<div className='container-helper'>
					<Row className='justify-content-sm-center main-modal-row'>

						<Col xs='8' lg='3' className='image-col'>
							<div className='image-cropper'>
								<img
									className='modal-member-image'
									src={ this.tryRequireImg(this.member.img) }
									alt={ this.memberFullName() }
								/>
							</div>
						</Col>

						<Col xs='9' lg='5' className='information-col'>
							<div className='information-container'>
								<Row noGutters={ true }>
									<Col xs='11'>
										<h2>
											{ this.memberFullName() }
										</h2>
									</Col>
									<Col xs='1'>
										<IconButton className='member-modal-btn' onClick={ this.handleHideModal }>
											<CloseIcon />
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
									<Button href={ this.member.github } target="_blank" className='member-modal-btn'>
										<Icon className='fab fa-github fa-fw' />
										<span className='member-username'>
											{ this.member.github_user }
										</span>
									</Button>
									<Button href={ this.member.linkedin } target="_blank" className='member-modal-btn'>
										<Icon className='fab fa-linkedin fa-fw' />
										<span className='member-username'>
											{ this.memberFullName() }
										</span>
									</Button>
									<Button href={ this.tryRequireResume(this.member.resume) } target="_blank" className='member-modal-btn'>
										<Icon className='fab fa fa-file fa-fw' />
										<span className='member-username'>
											{ this.memberFullName() }
										</span>
									</Button>
									<Button href={ 'mailto:'+this.member.email } className='member-modal-btn'>
										<Icon className='fab fa fa-envelope fa-fw' />
										<span className='member-username'>
											{ this.emailUser(this.member.email) }
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
}

export default MemberModal;