// @flow
import React from 'react'
import './SupportUsTypes.css'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import donate from '../../../images/SupportUs/donate.PNG'
import sponsorship from '../../../images/SupportUs/sponsorship.PNG'
import gifts from '../../../images/SupportUs/gifts.PNG'

function SupportUsTypes() {
  const supportUsTypes = [
    {
      title: ['Donación', 'Donate'],
      description: ['¡Dando un monto anónimamente puedes proporcionarnos los recursos para desarrollar tecnología e ir a competir!',
        'By donating anonymously you can provide us with the necessary resources to develop technology and compete!'],
      img: donate,
      color: '#CB6CE6',
    },
    {
      title: ['Patrocinio', 'Sponsorship'],
      description: ['¡Ayúdanos a desarrollar robots y llegar a las competencias, mostrando el nombre de tu empresa en nuestras camisas!',
        'Help us develop robots and compete by collaborating with us, showing your company name on our shirts!'],
      img: sponsorship,
      color: '#FFDE59',
    },
    {
      title: ['Regalos', 'Gifts'],
      description: ['Desde boletos de avión hasta materiales mecánicos, software y componentes electrónicos, estos bienes y servicios son vitales para que podamos desarrollar nuevas tecnologías.',
        'From airline tickets to mechanical materials, software, and electronic components, these goods and services are vital for developing new technologies.'],
      img: gifts,
      color: '#FF914D',
    },
  ]

  /**
  Function to scroll down the window view towards the end of the component.
  */
  const scrollToInfo = () => {
    window.scrollBy(0, window.innerHeight * 2 - (85 * 1) - window.scrollY)
  }

  return (
    <div className="supportUs-container">
      <Row className="supportUs-types">
        {
              supportUsTypes.map((support_type, index) => (
                <>
                  <Col lg={4} xs={12} className="type-container">
                    <Row>
                      <Col lg={{ span: 12, order: 'first' }} xs={{ order: index % 2, span: 6 }}>
                        <Row>
                          <img src={support_type.img} alt="not found" className="supportUs-image" />
                        </Row>
                        <Row style={{ color: support_type.color }} className="supportUs-title">
                          {support_type.title[0]}
                        </Row>
                      </Col>
                      <Col lg={12} xs={6} className="supportUs-description">
                        {support_type.description[0]}
                      </Col>
                    </Row>
                  </Col>
                </>
              ))
          }
      </Row>
      <div className="see-packages-button">
        <p>
          See packages
        </p>
        <FontAwesomeIcon
          onClick={scrollToInfo}
          icon={faAngleDown}
          style={{ color: '#FFDE59', fontSize: '30px', padding: 0 }}
        />
      </div>
    </div>
  )
}

export default SupportUsTypes
