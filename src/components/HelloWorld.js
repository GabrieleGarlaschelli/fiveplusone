import React from 'react'
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    color: 'black',
    background: 'white',
  },
})

class HelloWorld extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes } = this.props
    return (
      <React.Fragment>
        <div className={classes.darkRoot} >{this.props.message}</div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles, { withTheme: true })(HelloWorld);