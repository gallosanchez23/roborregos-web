// @flow
import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import {
  faCode, faMicrochip, faCog, faBullhorn,
} from '@fortawesome/free-solid-svg-icons'
import placeholder from '../../../../../images/placeholder-rectangle.png'
import './OpenPositionCard.css'

type Position = {
  id: string,
  title: string,
  shortDescription: string,
  path: string
};

type Props = {
  position: Position,
  onClick: (position: Position) => void
};

const tryRequireImg = (img_path: string) => {
  try {
    // $FlowFixMe
    return require(`../../../../../images/candidates/roles/${img_path}`) // eslint-disable-line import/no-dynamic-require, global-require
  } catch (err) {
    return placeholder
  }
}

class OpenPositionCard extends Component<Props> {
  position: Position;

  constructor(props: Props) {
    super(props)
    this.position = props.position
  }

  clicked = () => {
    const { onClick } = this.props
    const pos = this.position
    onClick(pos)
  }

  tryRequire = (id: string) => {
    switch (parseInt(id, 10)) {
      case 1:
        return faCode
      case 2:
        return faMicrochip
      case 3:
        return faCog
      default:
        return faBullhorn
    }
  }

  render() {
    return (
      <Card
        className="candidates-open-positions-card"
        key={this.position.id}
        onClick={this.clicked}
      >
        <Card.Img
          src={tryRequireImg(this.position.path)}
          alt="Card image"
          className="candidates-card-img"
        />
        <Card.ImgOverlay className="card-info-body">
          <Card.Body className="candidates-card-text">
            <Card.Title className="candidates-card-title">
              {this.position.title}
            </Card.Title>
            <Card.Text className="candidates-card-text">
              {this.position.shortDescription}
            </Card.Text>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
    )
  }
}

export default OpenPositionCard
