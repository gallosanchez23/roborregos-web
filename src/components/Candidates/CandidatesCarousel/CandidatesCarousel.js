// @flow
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { XSMALL_WIDTH } from '../../../constants'
import CarouselLearn1 from '../../../images/candidates/carousel_learn/learn1.jpg'
import CarouselLearn2 from '../../../images/candidates/carousel_learn/learn2.jpg'
import CarouselLearn3 from '../../../images/candidates/carousel_learn/learn3.jpg'
import CarouselLearn4 from '../../../images/candidates/carousel_learn/learn4.jpg'
import CarouselHack1 from '../../../images/candidates/carousel_hack/hack1.jpg'
import CarouselHack2 from '../../../images/candidates/carousel_hack/hack2.jpg'
import CarouselHack3 from '../../../images/candidates/carousel_hack/hack3.jpg'
import CarouselSucceed1 from '../../../images/candidates/carousel_succeed/succeed1.jpg'
import CarouselSucceed2 from '../../../images/candidates/carousel_succeed/succeed2.jpg'
import CarouselSucceed3 from '../../../images/candidates/carousel_succeed/succeed3.jpg'
import CarouselSucceed4 from '../../../images/candidates/carousel_succeed/succeed4.jpg'

import './CandidatesCarousel.css'

const gridSlidesFullView = [
  <div>
    <h1 className="Carousel-text-titles"> Learn </h1>
    <Grid className="grid-background" container spacing={1}>
      <Grid item xs={4}>
        <img
          className="candidates-header-img candidates-learn-height"
          src={CarouselLearn1}
          alt="first"
        />
      </Grid>
      <Grid item xs={8}>
        <img
          className="candidates-header-img candidates-learn-height"
          src={CarouselLearn2}
          alt="second"
        />
      </Grid>
      <Grid item xs={4}>
        <img
          className="candidates-header-img candidates-learn-height"
          src={CarouselLearn3}
          alt="third"
        />
      </Grid>
      <Grid item xs={8}>
        <img
          className="candidates-header-img candidates-learn-height"
          src={CarouselLearn4}
          alt="fourth"
        />
      </Grid>
    </Grid>
  </div>,
  <div>
    <h1 className="Carousel-text-titles"> Hack </h1>
    <Grid className="grid-background" container spacing={1}>
      <Grid item xs={6}>
        <img
          className="candidates-header-img"
          src={CarouselHack1}
          alt="first"
        />
      </Grid>
      <Grid item xs={6}>
        <Grid item xs={12} style={{ marginBottom: '8px' }}>
          <img
            className="candidates-header-img candidates-learn-height"
            src={CarouselHack2}
            alt="second"
          />
        </Grid>
        <Grid item xs={12}>
          <img
            className="candidates-header-img candidates-learn-height"
            src={CarouselHack3}
            alt="third"
          />
        </Grid>
      </Grid>
    </Grid>
  </div>,
  <div>
    <h1 className="Carousel-text-titles"> Succeed </h1>
    <Grid className="grid-background" container spacing={1}>
      <Grid item xs={8}>
        <img
          className="candidates-header-img candidates-succeed-height"
          src={CarouselSucceed1}
          alt="first"
        />
      </Grid>
      <Grid item xs={4}>
        <img
          className="candidates-header-img candidates-succeed-height"
          src={CarouselSucceed2}
          alt="first"
        />
      </Grid>
      <Grid item xs={4}>
        <img
          className="candidates-header-img candidates-succeed-long-height"
          src={CarouselSucceed3}
          alt="second"
        />
      </Grid>
      <Grid item xs={8}>
        <img
          className="candidates-header-img candidates-succeed-long-height"
          src={CarouselSucceed4}
          alt="third"
        />
      </Grid>
    </Grid>
  </div>,
]

const gridSlidesSmallView = [
  <div>
    <h1 className="Carousel-text-titles"> Learn </h1>
    <Grid className="grid-background" container spacing={2}>
      <Grid item xs={12}>
        <img
          className="candidates-header-img candidates-learn-height"
          src={CarouselLearn2}
          alt="second"
        />
      </Grid>
      <Grid xs={12} container spacing={1}>
        <Grid item xs={12}>
          <img
            className="candidates-header-img candidates-succeed-sm-height"
            src={CarouselLearn3}
            alt="third"
          />
        </Grid>
        <Grid item xs={12} style={{ paddingBottom: '8px' }}>
          <img
            className="candidates-header-img candidates-succeed-sm-height"
            src={CarouselLearn4}
            alt="fourth"
          />
        </Grid>
      </Grid>
    </Grid>
  </div>,
  <div>
    <h1 className="Carousel-text-titles"> Hack </h1>
    <Grid className="grid-background" container spacing={1}>
      <Grid item xs={12} container>
        <Grid item xs={6} style={{ paddingRight: '8px' }}>
          <img
            className="candidates-header-img candidates-learn-height"
            src={CarouselHack2}
            alt="first"
          />
        </Grid>
        <Grid item xs={6}>
          <img
            className="candidates-header-img candidates-learn-height"
            src={CarouselHack3}
            alt="second"
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <img
          className="candidates-header-img candidates-learn-height"
          src={CarouselHack1}
          alt="third"
        />
      </Grid>
    </Grid>
  </div>,
  <div>
    <h1 className="Carousel-text-titles"> Succeed </h1>
    <Grid className="grid-background" container spacing={1}>
      <Grid item xs={12}>
        <img
          className="candidates-header-img candidates-succeed-sm-height"
          src={CarouselSucceed2}
          alt="first"
        />
      </Grid>
      <Grid item xs={12}>
        <img
          className="candidates-header-img candidates-succeed-sm-height"
          src={CarouselSucceed3}
          alt="first"
        />
      </Grid>
      <Grid item xs={12}>
        <img
          className="candidates-header-img candidates-succeed-sm-height"
          src={CarouselSucceed4}
          alt="second"
        />
      </Grid>
      <Grid item xs={12}>
        <img
          className="candidates-header-img candidates-succeed-sm-height"
          src={CarouselSucceed1}
          alt="third"
        />
      </Grid>
    </Grid>
  </div>,
]

const useStyles = makeStyles((theme) => ({
  customHoverFocus: {
    '&:hover, .Carousel-button-8, .Carousel-buttonVisible-10': { backgroundColor: 'black', opacity: '1 !important' },
  },
}))

function CandidatesCarousel() {
  const classes = useStyles()

  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })

  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <Carousel
      navButtonsAlwaysVisible
      autoPlay={false}
      navButtonsProps={{
        className: classes.customHoverFocus,
      }}
    >
      { (dimensions.width <= XSMALL_WIDTH
        ? gridSlidesSmallView.map((element) => element)
        : gridSlidesFullView.map((element) => element)) }
    </Carousel>
  )
}

export default CandidatesCarousel
