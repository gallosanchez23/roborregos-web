// @flow
import React from 'react'
import placeholder from '../../../../images/placeholder-rectangle.png'
import './HomeSingleSponsor.css'

type Sponsor = {
  name: string,
  img_path: string,
  link: string
};

type Props = {
  sponsor: Sponsor
};

const HomeSingleSponsor = (props: Props) => {
  const tryRequire = (img_path: string) => {
    try {
      return require(`images/sponsors/${img_path}`) // eslint-disable-line import/no-dynamic-require, global-require
    } catch (err) {
      return placeholder
    }
  }
  const { sponsor } = props
  return (
    <a href={sponsor.link} className="single-sponsor">
      <img
        className="sponsor-image"
        src={tryRequire(sponsor.img_path)}
        alt={sponsor.name}
      />
      <div className="img-filter" />
    </a>
  )
}

export default HomeSingleSponsor
