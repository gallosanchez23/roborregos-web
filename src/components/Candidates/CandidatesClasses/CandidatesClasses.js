// @flow
import React from 'react'
import Grid from '@material-ui/core/Grid'
import './CandidatesClasses.css'
import youtubeLogo from '../../../images/candidates/youtube-logo.png'

function CandidatesClasses() {
  return (
    <div className="video-containers">
      <Grid
        container
        className="justify-content-md-center classes-main-row"
        spacing={2}
        // justify="space-around"
        alignItems="center"
      >
        <Grid item xs={4} className="classes-section-alignment">
          <div>
            <h className="learn-with-us">
              Learn with us on
            </h>
            <img
              className="youtube-logo"
              src={youtubeLogo}
              alt="youtube-logo"
            />
            <p className="caption-phrase">
              And be prepared to take the challenge!
            </p>
          </div>
        </Grid>
        <Grid item xs={5} className="classes-section-alignment">
          <iframe
            className="central-playlist"
            src="https://www.youtube.com/embed/videoseries?list=PLbuFimxJ80Ynff7bdQjdIO7uKH1vZ-Jne"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Grid>
        <Grid item xs={3}>
          <Grid item xs={12}>
            <iframe
              className="secondary-playlist"
              src="https://www.youtube.com/embed/videoseries?list=PLbuFimxJ80Yn97HhHeuvBvN47Z7cGHAI9"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Grid>
          <Grid item xs={12}>
            <iframe
              className="secondary-playlist"
              src="https://www.youtube.com/embed/videoseries?list=PLbuFimxJ80YksGyBqJRjT6_nY0yWKpuzI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default CandidatesClasses
