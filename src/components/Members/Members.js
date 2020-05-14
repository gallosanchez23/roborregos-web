import React, { Component } from 'react';
import MembersGrid from './MembersGrid/MembersGrid.js';
import MembersHeader from './MembersHeader/MembersHeader.js';
import MembersJoinUs from './MembersJoinUs/MembersJoinUs.js';
import Footer from 'components/Footer/Footer.js';
import './Members.css';

class Members extends Component {
  constructor(props) {
    super(props);

    this.members = props.membersData.members;
  }

  render() {
    document.title = 'RoBorregos | Members';
    const inactive = this.members.filter(member => member.status === 'inactive').sort((a, b) => b.id - a.id);
    const active = this.members.filter(member => member.status === 'active' || member.status === 'comitee').sort((a, b) => a.id - b.id);

    return (
      <div className='members-container'>
        <MembersHeader />
        <MembersGrid active_members={ active } inactive_members={ inactive } />
        <MembersJoinUs />
        <Footer />
      </div>
    );
  }
}

export default Members;
