import React, { Component, useRef } from 'react';
import { render } from 'react-dom';
import './CandidatesHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop-47)

class CandidatesHeader extends Component {
  constructor(props) {
    super(props);
    this.carouselRef = React.createRef();
  }

  render() {
    return(
      <div className='candidates-header-container'>
        <div className='candidates-header'>
          <div className='candidates-text-container'>
            <h2 className='title-text-banner'>
              Candidates
            </h2>
            <div className='main-text-candidates'>
              <p className='main-text-candidates-emphasis'>
                We want you to be part of our team!
              </p>
              Every year, we recruit new members that...
            </div>
          </div>
          <div class='scroll-container'>
            <p className='main-text-candidates-emphasis'>
              Are you a candidate?
              <br />
              Join us!
              <br />
              <a onClick={()=>scrollToRef(this.carouselRef)} className='icon'>
                <div className='scroll-icon-container'>
                  <FontAwesomeIcon icon={ faChevronDown } size='1x' />
                </div>
              </a>
            </p>
          </div>
        </div>
        <div className='carousel-ref' ref={ this.carouselRef }>
          Hello world!
        </div>
      </div>
    );
  }
}

export default CandidatesHeader;
