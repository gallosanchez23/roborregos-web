import React, {Component} from 'react';
import MembersGrid from './MembersGrid/MembersGrid.js';
import MembersHeader from './MembersHeader/MembersHeader.js';
import MembersJoinUs from './MembersJoinUs/MembersJoinUs.js';
import Footer from 'components/Footer/Footer.js';
import './Members.css';

/** Component class of Members page. */
class Members extends Component {
  /**
 * Class constructor
 * @param {list} props List of member data.
 */
  constructor(props) {
    super(props);
    this.members = props.membersData.members;
  }

  /**
 * Renders Responsive view of Member's body page.
 * @return {renderized_component} Heder, grid, join us section and footer.
 */
  render() {
    document.title = 'RoBorregos | Members';
    const inactive = this.members.filter((member) =>
      member.status === 'inactive').sort((a, b) => b.id - a.id);
    const active = this.members.filter((member) =>
      member.status === 'active' ||
      member.status === 'comitee').sort((a, b) => a.id - b.id);

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
