import React from 'react'
import './css/AboutPage.css';
import aboutus from '../assets/aboutus.jpg'

import CardMedia from '@material-ui/core/CardMedia';

class AboutPage extends React.Component {
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
          <CardMedia className="about-us-image" image={aboutus} title="about us"></CardMedia>
        </div>
      </React.Fragment>
    )
  }
}

export default AboutPage;