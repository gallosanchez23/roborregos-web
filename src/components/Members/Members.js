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
    const inactive = this.members.filter(member => member.status == "inactive");
    const active = this.members.filter(member => member.status == "active" || member.status == "comitee");

    return (
      <div className='members-container'>
        <MembersHeader />
        <MembersGrid members={ active} title="" />
        <MembersGrid members={ inactive } title="RoBorregos Legacy" />
        <MembersJoinUs />
        <Footer />
      </div>
    );
  }
}

export default Members;
