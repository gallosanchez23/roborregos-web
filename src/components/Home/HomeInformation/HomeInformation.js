import React, { Component } from 'react';
import './HomeInformation.css';

class HomeInformation extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
          <div className='home-information-container-all'>
            <div className='home-information-container home-information-container-left home-information-container-competitions'>
              <div className='home-information-circle'>
              </div>
              <div className='home-information-text'>
                <div className='home-information-title'>
                    High-Performance Team
                </div>
                <div className='home-information-simple'>
                    We participate in different national and international competitions for autonomous robots such as Mexico's TMR (Torneo Mexicano de Robótica), RoboCup, and IEEE LARC (Latin American Robotics Competition). As a team, want to demonstrate the potential of Mexico in the development and innovation of technology.
                </div>
              </div>
            </div>
            <div className='home-information-container home-information-container-right home-information-container-social'>
              <div className='home-information-circle'>
              </div>
              <div className='home-information-text'>
                <div className='home-information-title'>
                  Social Projects
                </div>
                <div className='home-information-simple'>
                  We like to share everything we’ve learned with the community, giving free classes, workshops and participating in webinars where we can talk and teach about all the technologies we’ve used and all the experiences we’ve had that inspire us.
                </div>
              </div>
            </div>
            <div className='home-information-container home-information-container-left home-information-container-events'>
              <div className='home-information-circle'>
              </div>
              <div className='home-information-text'>
                <div className='home-information-title'>
                  Events & Outreach
                </div>
                <div className='home-information-simple'>
                  We participate in congresses and events such as INCMty, Conexión Tec, The International Congress of Mechatronics - Automatization and Technology, Semana i and many more.
                </div>
              </div>
            </div>
            <div className='home-information-container home-information-container-right home-information-container-students'>
              <div className='home-information-circle'>
              </div>
              <div className='home-information-text'>
                <div className='home-information-title'>
                  Student Community
                </div>
                <div className='home-information-simple'>
                To reach our community, we give free workshops about useful technologies such as: ROS, Git and Machine Learning, as well as our annual biggest event: Candidates, where the team gives weekly classes of basic programming, mechanics and electronics for anyone in the university interested, and organize a robotics tournament to get new members.
                </div>
              </div>
            </div>
          </div>
    );

  }
}

export default HomeInformation;
