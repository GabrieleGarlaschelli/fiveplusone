import React from 'react'
import logo from '../fiveplusone.jpeg';
import friendOfMine from '../assets/friendOfMine.jpg'

import spotifyLogo from '../assets/spotify.png'
import dezeerLogo from '../assets/deezer.png'
import applemusicLogo from '../assets/applemusic.png'
import amazonmusicLogo from '../assets/amazonmusic.png'

import feed1 from '../assets/feed/feed_1.jpeg'
import feed2 from '../assets/feed/feed_2.jpeg'
import feed3 from '../assets/feed/feed_3.jpeg'
import feed4 from '../assets/feed/feed_4.jpeg'

import './css/HomePage.css';
import StandardCard from './common/StandardCard'
import Photos from './common/Photos'
import { Typography } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

class HomePage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    const { classes } = this.props

    return (
      <React.Fragment>
        <div className="background-div-black d-flex justify-center align-center">
          <img className="logo-image loaded" src={logo} alt="FivePlusOne logo"></img>
        </div>
        <div className="background-div-white flex-wrap">
          <div className="adapting-half-screen-width d-flex justify-center align-center">
            <div data-aos="fade-right" data-aos-duration="1000" className="wrap-container m-2">
              <StandardCard 
                buttonsColor="secondary" 
                logo={friendOfMine} 
                maxWidth="90vw" 
                minWidth={200}
                title="Friend of mine"
                description="FivePlusOne"
                actions={[
                  { id: 1, icon: <ShareIcon size="small"></ShareIcon>, size: 'small'},
                  { id: 2, icon: <MusicNoteIcon></MusicNoteIcon>, size: 'small' }
                ]}
              ></StandardCard>
            </div>
          </div>
          <div className="adapting-half-screen-width d-flex justify-center align-center flex-wrap view-on-tablet-and-up">
            <Typography 
              data-aos="fade-left"
              data-aos-duration="1000"
              variant="h4"
              className="full-width mb-3"
            >
              Friend Of Mine
            </Typography>
            <div
              data-aos="fade-left"
              data-aos-duration="3000"
              className="font-thin"
            >10th April 2021, copyright to FivePlusOne</div>
            <div
              className="full-width mt-3 d-flex justify-center align-center"
            >
              <div className="wrap-container">
                <img src={spotifyLogo} data-aos="fade-up" data-aos-duration="1000" className="digital-store-logo mx-2"></img>
                <img src={dezeerLogo} data-aos="fade-up" data-aos-duration="1200" className="digital-store-logo mx-2"></img>
                <img src={applemusicLogo} data-aos="fade-up" data-aos-duration="1500" className="digital-store-logo mx-2"></img>
                <img src={amazonmusicLogo} data-aos="fade-up" data-aos-duration="2000" className="digital-store-logo mx-2"></img>
              </div>
            </div>
          </div>
        </div>
        <hr className="horizontal-divider" />
        <div className="background-div-white d-flex justify-center align-center">
          <Photos
            photos={[
              { id: 1, src: feed1, description: 'jacopo bass' },
              { id: 2, src: feed2, description: 'production' },
              { id: 3, src: feed3, description: 'flavio' },
              { id: 4, src: feed4, description: 'shooting1' }
            ]}
            photoWidth={300}
            photoHeight={300}
          ></Photos>
        </div>
      </React.Fragment>
    )
  }
}

export default HomePage