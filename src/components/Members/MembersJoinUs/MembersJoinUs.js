import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class MembersJoinUs extends Component {
  render() {
    return (
      <div className='members-join-us'>
        <div className='container-legend'>
          <p className='members-join-us-description'>
            Interested in working with us?
          </p>
          <Button href="/contact#candidates" className='members-join-us-button'>
            <div className='members-join-us-button-contain'>
              <h2 className='members-join-us-button-text'>
                Join the team!
              </h2>
            </div>
          </Button>
        </div>
      </div>
    );
  }
}

export default MembersJoinUs;
