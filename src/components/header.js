import PropTypes from "prop-types"
import React from "react"

import { Link, animateScroll as scroll, scroller } from 'react-scroll'
import { Box, Container, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import WorkIcon from '@material-ui/icons/Work';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';

const useStyles = makeStyles(theme => ({
  navWrapper: {
    position: "absolute",
    width: "100%",
    [theme.breakpoints.down(768)]: {
      display: 'none'
    }
  },
  nav: {
    display: "inline-block",
    padding: theme.spacing(5, 0)
  },
  navitemActive: {
    padding: theme.spacing(0, 3),
    fontFamily: "Open Sans",
    textDecoration: "none",
    color: '#0F87E6',
    fontWeight: "600",
    cursor: 'pointer'
  },
  navitem: {
    padding: theme.spacing(0, 3),
    fontFamily: "Open Sans",
    textDecoration: "none",
    color: '#80807A',
    fontWeight: "600",
    cursor: 'pointer',
    '&:hover': {
      color: '#fff'
    }
  },
  mobileNav: {
    color: 'white',
    display: 'none',

    [theme.breakpoints.down(768)]: {
      display: 'inline-block',
    }
  }
}
)
)

const Header = ({ siteTitle }) => {

  console.log(scroll)
  const classes = useStyles()

  const [drawerOpen, setDrawerOpen] = React.useState(false)

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerOpen(open);
  };

  const scrollToTarget = (e) => {

    console.log(e.currentTarget)
    scroller.scrollTo(e.currentTarget.dataset.target, {
      duration: 1000,
      smooth: true
    })
  }

  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button data-target="home" onClick={e => scrollToTarget(e)}>
          <ListItemIcon >
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button data-target="about" onClick={e => scrollToTarget(e)}>
          <ListItemIcon>
            <FaceIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button data-target="works" onClick={e => scrollToTarget(e)}>
          <ListItemIcon>
            <ArtTrackIcon />
          </ListItemIcon>
          <ListItemText primary="Portfolio" />
        </ListItem>
        <ListItem button data-target="experience" onClick={e => scrollToTarget(e)}>
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Experience" />
        </ListItem>
        <ListItem button data-target="contact" onClick={e => scrollToTarget(e)}>
          <ListItemIcon>
            <PermContactCalendarIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>


    </div>
  );

  return (
    <React.Fragment>
      <Box display="flex" justifyContent="center" className={classes.navWrapper}>

        <div className={classes.nav}>
          <Link to="home" smooth={true} duration={500} className={classes.navitemActive}>Home</Link>
          <Link to="about" smooth={true} duration={500} className={classes.navitem}>About</Link>
          <Link to="works" smooth={true} duration={500} className={classes.navitem}>Portfolio</Link>
          <Link to="experience" smooth={true} duration={500} className={classes.navitem}>Experience</Link>
          <Link to="contact" smooth={true} duration={500} className={classes.navitem}>Contact</Link>
        </div>

      </Box>
      <Container style={{ position: 'absolute', top: '20px' }}>
        <IconButton className={classes.mobileNav} onClick={toggleDrawer(true)}>
          <MenuIcon style={{ fontSize: '2em' }} />
        </IconButton>
      </Container>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </React.Fragment>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
