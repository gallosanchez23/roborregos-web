import React, { Component } from 'react';
import Footer from 'components/Footer/Footer';
import './Candidates.css';

class Candidates extends Component {
  render() {
    document.title = 'RoBorregos | Candidates';

    return (
      <div className='candidates-container'>
        <Footer />
      </div>
    );
  }
}

export default Candidates;
