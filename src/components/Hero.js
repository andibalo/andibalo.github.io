import React from 'react'
import Header from './header'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import CV from '../documents/AndiBaloCV.pdf'
import { scroller } from 'react-scroll'
import { Container, Box, Grid, IconButton, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles(theme => ({

    heroWrapper: {
        height: "100vh",
    },
    logoWrapper: {
        '& .logo': {
            width: "500px !important",
            [theme.breakpoints.down(560)]: {
                display: 'none !important'
            }
        },
        '& .logoMobile': {
            display: 'none !important',
            width: "350px !important",
            [theme.breakpoints.down(560)]: {
                display: 'block !important'
            }
        }
    },
    heroInner: {
        flex: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    heroIcons: {
        display: "flex",
        marginTop: "auto",
        marginBottom: theme.spacing(5)
    },
    headerName: {
        fontFamily: 'Raleway',
        color: "#fff",
        fontWeight: "600",
        [theme.breakpoints.down(560)]: {
            fontSize: '2.5rem'
        }
    },
    subHeader: {
        fontFamily: 'Raleway',
        color: "#0F87E6",
        fontWeight: "500",
        '& span': {
            color: "#fff",
            fontWeight: '400'
        },
        [theme.breakpoints.down(560)]: {

            textAlign: 'center',
            '& span': {
                display: 'block'
            }
        }
    },
    cvBtn: {
        marginRight: theme.spacing(2),
        backgroundColor: '#0F87E6',
        borderRadius: 0,
        border: '1px solid #0F87E6',
        '&:hover': {
            backgroundColor: '#0e73c3'
        },
        [theme.breakpoints.down(560)]: {
            padding: '8px 16px'
        }
    },
    learnMoreBtn: {
        color: '#80807A',
        borderColor: '#80807A',
        borderRadius: 0,
        '&:hover': {
            borderColor: '#656563'
        },
        [theme.breakpoints.down(560)]: {
            padding: '8px 16px'
        }
    },
    heroIcons: {
        position: 'absolute',
        bottom: '0',
        left: '50%',
        transform: "translateX(-50%)",
        paddingBottom: theme.spacing(5)
    },
    heroIcon: {
        fill: '#252526'
    },
    IconButton: {
        backgroundColor: 'white',
        margin: theme.spacing(0, 1),
        padding: "6px",
        "&:hover": {
            backgroundColor: '#dcdcdb'
        }
    }
}))

const Hero = ({ logo }) => {
    const data = useStaticQuery(graphql`
    query {
        logoMobile: file(relativePath: { eq: "logonew.png" }) {
        childImageSharp {
            fixed(width: 250) {
            ...GatsbyImageSharpFixed
            }
        }
        }
    }
    `)



    const classes = useStyles()

    const iconClick = (link) => {
        window.open(link, '_blank')
    }

    const scrollToTarget = (e) => {

        //console.log(e.currentTarget)
        scroller.scrollTo(e.currentTarget.dataset.target, {
            duration: 500,
            smooth: true
        })
    }

    return (
        <Box display="flex" flexDirection="column" className={classes.heroWrapper} id="home">
            <Header />
            <Container className={classes.heroInner}>
                <Grid direction="column" justify="center" alignItems="center" container spacing={2}>
                    <Grid item className={classes.logoWrapper}>
                        <Img className="logo" fixed={logo} />
                        <Img className="logoMobile" fixed={data.logoMobile.childImageSharp.fixed} />
                    </Grid>
                    <Grid item >
                        <Typography variant="h3" component="h3" className={classes.headerName}>Andi Usman Balo</Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="h5" component="h5" className={classes.subHeader}>Full Stack Developer <span>Based In Indonesia</span></Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" size="large" color="primary" endIcon={<GetAppIcon />} className={classes.cvBtn} href={CV} download="Andi Balo CV.pdf">
                            Download CV
                        </Button>
                        <Button variant="outlined" size="large" color="primary" data-target="about" className={classes.learnMoreBtn} onClick={e => scrollToTarget(e)}>
                            Learn More
                        </Button>
                    </Grid>
                </Grid>
            </Container>
            <Box display="flex" justifyContent="center" className={classes.heroIcons}>
                <IconButton className={classes.IconButton} onClick={e => iconClick('https://www.linkedin.com/in/andi-balo-284707182/')} >
                    <LinkedInIcon className={classes.heroIcon} />
                </IconButton>
                <IconButton className={classes.IconButton} onClick={e => iconClick('https://github.com/andibalo')}>
                    <GitHubIcon className={classes.heroIcon} />
                </IconButton>
                <IconButton className={classes.IconButton} onClick={e => iconClick('https://www.instagram.com/andibalo213/')}>
                    <InstagramIcon className={classes.heroIcon} />
                </IconButton>
            </Box>
        </Box>

    )
}


export default Hero
