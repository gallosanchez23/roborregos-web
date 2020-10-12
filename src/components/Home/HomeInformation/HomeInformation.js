// @flow
import React, { Component } from 'react'
import './HomeInformation.css'

type Props = {

};

class HomeInformation extends Component {
  constructor(props: Props) {
    super(props)

    this.competitions = React.createRef()
    this.social = React.createRef()
    this.events = React.createRef()
    this.students = React.createRef()

    this.handleScrollEvent = this.handleScrollEvent.bind(this)
    this.listenScrollEvent = this.listenScrollEvent.bind(this)
    this.isElementVisible = this.isElementVisible.bind(this)

    this.state = {
      competitions_visible: false,
      social_visible: false,
      events_visible: false,
      students_visible: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent, true)
  }

  isElementVisible = (element: ref) => {
    const viewTop = window.pageYOffset
    const viewBottom = viewTop + window.innerHeight
    const top = element.offsetTop
    const bottom = top + element.clientHeight
    const compareTop = bottom
    const compareBottom = top
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop))
  }

  handleScrollEvent(element: ref) {
    const { [`${element.id}_visible`]: isVisible } = this.state
    if (!element) {
      return
    }
    if (this.isElementVisible(element) || isVisible) {
      this.setState({ [`${element.id}_visible`]: true })
    } else {
      this.setState({ [`${element.id}_visible`]: false })
    }
  }

  listenScrollEvent() {
    this.handleScrollEvent(this.competitions.current)
    this.handleScrollEvent(this.social.current)
    this.handleScrollEvent(this.events.current)
    this.handleScrollEvent(this.students.current)
  }

  render() {
    const {
      competitions_visible, social_visible, events_visible, students_visible,
    } = this.state
    return (
      <div className="home-information-container-all">
        <div id="competitions" ref={this.competitions} className={`home-information-container home-information-container-left home-information-container-competitions ${competitions_visible ? 'isVisible' : ''} `}>
          <div className="home-information-container-layer">
            <div className="home-information-circle" />
            <div className="home-information-text">
              <div className="home-information-title">
                High-Performance Team
              </div>
              <div className="home-information-simple">
                We participate in different national and international competitions for autonomous
                robots such as Mexico&apos;s TMR (Torneo Mexicano de Robótica), RoboCup, and IEEE
                LARC (Latin American Robotics Competition). As a team, we want to demonstrate the
                potential of Mexico in the development and innovation&nbsp;of&nbsp;technology.
              </div>
            </div>
          </div>
        </div>
        <div id="social" ref={this.social} className={`home-information-container home-information-container-right home-information-container-down home-information-container-social ${social_visible ? 'isVisible' : ''} `}>
          <div className="home-information-container-layer">
            <div className="home-information-circle" />
            <div className="home-information-text">
              <div className="home-information-title">
                Social Projects
              </div>
              <div className="home-information-simple">
                We like to share everything we’ve learned with the community, giving free classes,
                workshops and participating in webinars where we can talk and teach about all the
                technologies we’ve used and all the experiences we’ve had that&nbsp;inspire&nbsp;us.
              </div>
            </div>
          </div>
        </div>
        <div id="events" ref={this.events} className={`home-information-container home-information-container-left home-information-container-down home-information-container-events ${events_visible ? 'isVisible' : ''} `}>
          <div className="home-information-container-layer">
            <div className="home-information-circle" />
            <div className="home-information-text">
              <div className="home-information-title">
                Events & Outreach
              </div>
              <div className="home-information-simple">
                We participate in congresses and events such as INCMty, Conexión Tec, The
                International Congress of Mechatronics - Automatization and Technology, Semana i
                and&nbsp;many&nbsp;more.
              </div>
            </div>
          </div>
        </div>
        <div id="students" ref={this.students} className={`home-information-container home-information-container-right home-information-container-students ${students_visible ? 'isVisible' : ''} `}>
          <div className="home-information-container-layer">
            <div className="home-information-circle" />
            <div className="home-information-text">
              <div className="home-information-title">
                Student Community
              </div>
              <div className="home-information-simple">
                To reach our community, we give free workshops about useful technologies such as:
                ROS, Git and Machine Learning, as well as our annual biggest event: Candidates,
                where the team gives weekly classes of basic programming, mechanics and electronics
                for anyone in the university interested, and organize a robotics tournament to get
                new&nbsp;members.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeInformation
