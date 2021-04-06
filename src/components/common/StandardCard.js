import React from 'react';
import PropTypes from 'prop-types';
import { isReactComponent } from '../../services/reactDetectionHelper'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const styles = (theme) => ({
  root: (props) => ({
    maxWidth: props.maxWidth,
    minWidth: props.minWidth,
    width: props.width
  }),
  media: {
    height: (props) => props.mediaHeight,
  },
})

const useStyles = makeStyles(styles)

function ConditialCardMedia(props) {
  const classes = useStyles(props)

  if(props.logo) {
    return (
      <CardMedia
        className={classes.media}
        image={props.logo}
        title={props.title}
      />
    );
  } else {
    return null
  }
}

function ConditionalActions(props) {
  const classes = useStyles(props)
  let result = null

  if (Array.isArray(props.actions)) {
    const actions = props.actions.map((element) => {
      const size = element.size ? element.size : 'small'
      const color = element.color ? element.color : props.buttonsColor
      const ariaLabel = element.ariaLabel ? element.ariaLabel : ''

      if(element.text && !element.icon) {
        return (
          <Button size={size} color={color} key={element.id}>
            {element.text}
          </Button>
        );
      } else if (!element.text && element.icon) {
        return (
          <IconButton
            color={color}
            aria-label={ariaLabel}
            key={element.id}
            size={size}
          >
            {element.icon}
          </IconButton>
        );
      } else {
        return (
          <Button
            color={color}
            startIcon={element.icon}
            key={element.id}
          >
            {element.text}
          </Button>
        )
      }
    })

    result = (
      <CardActions>
        {actions}
      </CardActions>
    );
  } else if (isReactComponent(props.actions)) {
    result = props.actions
  }

  return result
}


class StandardCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes } = this.props

    return (
      <Card className={classes.root}>
        <CardActionArea>
          <ConditialCardMedia
            logo={this.props.logo}
            title={this.props.title}
            mediaHeight={this.props.mediaHeight}
          ></ConditialCardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <ConditionalActions actions={this.props.actions}></ConditionalActions>
      </Card>
    );
  }
}

StandardCard.propTypes = {
  buttonsColor: PropTypes.string,
}

StandardCard.defaultProps = {
  buttonsColor: 'primary',
  title: 'Titolo',
  description: 'Descrizione',
  maxWidth: 345,
  minWidth: 300,
  width: 300,
  mediaHeight: "300px",
  actions: []
}

export default withStyles(styles, { withTheme: true })(StandardCard);