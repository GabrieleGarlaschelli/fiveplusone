import './App.css';
import 'aos/dist/aos.css';
import 'fontsource-roboto';
import {Component} from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import Aos from 'aos'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

// my components
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import loader from './services/loader';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#eddd00",
    },
    secondary: {
      main: "#5c5c5c",
    },
    transparent: {
      main: "transparent",
    }
  },
});

const styles = {
  whiteText: {
    color: "#fafafa"
  }
}

function HomeButton() {
  let history = useHistory();

  function goToHome() {
    if (loader.isLoading()) {
      console.log('already navigating')
      return;
    } else {
      history.push('/');
    }
  }

  return (
    <Button onClick={goToHome} style={styles.whiteText} className="text-decoration-none">
      Home
    </Button>
  );
}

function AboutButton() {
  let history = useHistory();

  function goToAbout() {
    if (loader.isLoading()) {
      console.log('already navigating')
      return;
    } else {
      history.push('/about');
    }
  }

  return (
    <Button onClick={goToAbout} style={styles.whiteText} className="text-decoration-none">
      About
    </Button>
  );
}

function ShopButton() {
  let history = useHistory();

  function goToShop() {
    if (loader.isLoading()) {
      console.log('already navigating')
      return;
    } else {
      history.push('/shop');
    }
  }

  return (
    <Button onClick={goToShop} style={styles.whiteText} className="text-decoration-none">
      Shop
    </Button>
  );
}

function MusicButton() {
  let history = useHistory();

  function goToMusic() {
    if (loader.isLoading()) {
      console.log('already navigating')
      return;
    } else {
      history.push('/music');
    }
  }

  return (
    <Button onClick={goToMusic} style={styles.whiteText} className="text-decoration-none">
      Music
    </Button>
  );
}

class App extends Component {

  componentDidMount() {
    window.onscroll = function () {
      let appbar = document.getElementById("appbar");

      if (window.pageYOffset > 0) {
        appbar.classList.add("app-bar-filled");
        appbar.classList.remove("transparent");
      } else {
        appbar.classList.remove("app-bar-filled");
        appbar.classList.add("transparent");
      }
    }

    window.onload = function() {
      Aos.init()
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <AppBar position="fixed" elevation={0} className="transparent" id="appbar">
              <Toolbar>
                <IconButton
                  edge="start"
                  color="secondary"
                  aria-label="Open navigation"
                  className="hide-on-tablet-and-up"
                >
                  <MenuIcon style={styles.whiteText} />
                </IconButton>
                <span className="view-on-tablet-and-up">
                  <HomeButton></HomeButton>
                </span>
                <span className="view-on-tablet-and-up">
                  <AboutButton></AboutButton>
                </span>
                <span className="view-on-tablet-and-up">
                  <ShopButton></ShopButton>
                </span>
                <span className="view-on-tablet-and-up">
                  <MusicButton></MusicButton>
                </span>
                <div className="full-width white-text">
                  <div className="floating-right loader"></div>
                </div>
              </Toolbar>
            </AppBar>

            <Switch>
              <Route exact path="/">
                <HomePage></HomePage>
              </Route>
              <Route path="/about">
                <AboutPage></AboutPage>
              </Route>
              <Route path="/shop">
                shop
            </Route>
              <Route path="/music">
                music
            </Route>
            </Switch>
          </Router>
          <footer className="footer">
            &copy; Copyright 2021, FivePlusOne, All Right Reserved
          </footer>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
