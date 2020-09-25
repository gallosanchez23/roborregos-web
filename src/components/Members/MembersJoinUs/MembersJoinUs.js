import React, { Component } from 'react';
import './MembersJoinUs.css';

class MembersJoinUs extends Component {
  handleClick = () => {
    window.location.href = 'candidates';
    this.scrollToBottom();
  }

  render() {
    return (
      <div className='members-join-us'>
        <button 
          onClick={this.handleClick} 
          className='members-join-us-button members-join-us-button-contain members-join-us-button-text'>
              Join the Team
        </button>
      </div>
    );
  }
}

export default MembersJoinUs;
