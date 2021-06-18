// @flow
import React from 'react'
import Grid from '@material-ui/core/Grid'
import './CandidatesLinks.css'
import roborregosLogo from '../../../images/white_logo.png'
import facebookLogo from '../../../images/candidates/facebook-logo.png'
import instagramLogo from '../../../images/candidates/instagram-logo.png'

function CandidatesLinks() {
  return (
    <div className="images">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item sm={12} className="classes-section-alignment">
          <div>
            <h className="message-us">
              Message Us!
            </h>
          </div>
        </Grid>
        <Grid item sm={4} className="center-logo">
          <br />
          <img
            className="facebook-logo"
            src={facebookLogo}
            alt="facebook-logo"
          />
          <br />
        </Grid>
        <Grid item sm={4} className="center-logo">
          <br />
          <img
            className="roborregos-logo"
            src={roborregosLogo}
            alt="RoBorregos-logo"
          />
          <br />
        </Grid>
        <Grid item sm={4} className="center-logo">
          <br />
          <img
            className="instagram-logo"
            src={instagramLogo}
            alt="instagram-logo"
          />
          <br />
        </Grid>
        <Grid item sm={4} className="center-logo">
          <div>
            <h className="caption">
              RoBorregos
            </h>
          </div>
        </Grid>
        <Grid item sm={4} className="center-logo" />
        <Grid item sm={4} className="center-logo">
          <div>
            <h className="caption">
              @roborregos
            </h>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CandidatesLinks
