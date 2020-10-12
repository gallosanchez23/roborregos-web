// @flow
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import HomeSingleSponsor from './HomeSingleSponsor/HomeSingleSponsor'
import './HomeSponsors.css'

type Sponsor = {
  name: string,
  img_path: string,
  link: string
};

type Props = {
 sponsors: Array<Sponsor>
};

const HomeSponsors = (props: Props) => {
  const { sponsors } = props
  return (
    <div className="home-sponsors-container">
      <div className="container-helper">
        <Row className="justify-content-sm-center">
          <Col sm="10">
            <h3>
              Sponsors
            </h3>
            <Row className="justify-content-sm-center">
              { sponsors.map((sponsor: Sponsor, index: number) => (
                <Col xs="6" sm="4" md="2" key={index} className="sponsor-col">
                  <HomeSingleSponsor
                    sponsor={sponsor}
                  />
                </Col>
              )) }
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default HomeSponsors
