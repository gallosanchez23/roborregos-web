// @flow
import React, { Component } from 'react'
import MembersGrid from './MembersGrid/MembersGrid'
import MembersJoinUs from './MembersJoinUs/MembersJoinUs'
import HeaderBanner from '../Shared/HeaderBanner/HeaderBanner'

type Member = {
  id: number,
  name: string,
  lastname: string,
  github: string,
  github_user: string,
  linkedin: string,
  resume_link: string,
  description: string,
  class: string,
  semesters: string,
  subtitle: string,
  status: string,
  role: string
};

type MembersData = {
  members: Array<Member>
};

type Props = {
  membersData: MembersData
};

/** Component class of Members page. */
class Members extends Component <Props> {
  members: Array<Member>;

  headerTitle = 'Members'

  headerMainText = ['RoBorrego’s community is made by students with different skills in robotics, logistics and networking, all joined with a passion for exploring new technologies and sharing their knowledge with everybody.']

  headerSubText = ['Scroll down and meet the us!']

  /**
 * Class constructor
 * @param {list} props: List of member data.
 */
  constructor(props: Props) {
    super(props)
    this.members = props.membersData.members
  }

  /**
 * Renders Responsive view of Member's body page.
 * @return {renderized_component} Heder, grid, join us section and footer.
 */
  render() {
    document.title = 'RoBorregos | Members'
    const inactive = this.members.filter((member) => member.status === 'inactive').sort((a, b) => b.id - a.id)
    const active = this.members.filter((member) => member.status === 'active'
      || member.status === 'comitee').sort((a, b) => a.id - b.id)
    return (
      // Warning: data-testid="members-container" prop was removed, add it if needed
      <>
        <HeaderBanner
          title={this.headerTitle}
          mainText={this.headerMainText}
          subText={this.headerSubText}
          bgColorScheme={{ primary: '#005E69E6', secondary: '#141213E6' }}
          iconColorScheme={{ primary: '#00FFFA', secondary: '#C43F65' }}
        />
        <MembersGrid active_members={active} inactive_members={inactive} />
        <MembersJoinUs />
      </>
    )
  }
}

export default Members
