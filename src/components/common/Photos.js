import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';

const styles = (theme) => ({
  photo: (props) => ({
    width: props.photoWidth,
    height: props.photoHeight,
    maxWidth: "100vw",
    maxHeight: "100vh",
    borderRadius: "7px",
    transition: "width 0.3s, height 0.3s"
  }),
  bigPhoto: (props) => ({
    width: props.photoWidth + 500,
    height: props.photoHeight + 300,
    maxWidth: "100vw",
    maxHeight: "100vh",
    transition: "width 0.5s, height 0.5s",
    borderRadius: "7px",
  })
})

class Photo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const photoClass = this.props.bigPhotoId == this.props.id ? this.props.classes.bigPhoto : this.props.classes.photo
    return (
      <Card className="m-1 wrap-container" data-aos="fade-up" data-aos-duration="1000" onClick={() => this.props.handleClick(this.props.id)}>
        <CardMedia
          className={photoClass}
          image={this.props.src}
          title={this.props.description}
        />
      </Card>
    )
  }
}

class PhotoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bigPhotoId: undefined
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(photoId) {
    this.setState({
      bigPhotoId: photoId
    })
  }

  render() {
    let photos = null
    if (Array.isArray(this.props.photos) && this.props.photos.length > 0) {
      photos = this.props.photos.map((element) => {
        return (
          <Photo 
            src={element.src} 
            alt={element.description} 
            classes={this.props.classes} 
            key={element.id} 
            id={element.id} 
            handleClick={this.handleClick}
            bigPhotoId={this.state.bigPhotoId}
          ></Photo>
        )
      })
    }
    return photos
  }
}

class Photos extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes } = this.props
    return (
      <div className="full-width full-height d-flex flex-wrap justify-center">
        <PhotoList photos={this.props.photos} photoHeight={this.props.photoHeight} photoWidth={this.props.photoWidth} classes={classes}></PhotoList>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Photos);