import React from 'react'

import { Container, Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import WebIcon from '@material-ui/icons/Web';
import StorageIcon from '@material-ui/icons/Storage';
const useStyles = makeStyles(theme => ({

    aboutWrapper: {
        padding: theme.spacing(10, 0),
        backgroundColor: '#333332'
    },
    aboutHeader: {
        color: '#80807A',
        fontFamily: 'Open Sans',
        fontWeight: '500',
        '& span': {
            color: '#0F87E6'
        },
        marginBottom: theme.spacing(5)
    },
    aboutGrid: {
        [theme.breakpoints.down(768)]: {
            flexBasis: '100%',
            maxWidth: '100%'
        }
    },
    aboutDesc: {
        color: '#fff',
        fontFamily: 'Raleway',
        [theme.breakpoints.down(768)]: {
            marginTop: theme.spacing(3)
        }
    },
    skillHeader: {
        color: '#0F87E6',
        fontWeight: '500'
    },
    backend: {
        marginTop: theme.spacing(5),
        [theme.breakpoints.down(768)]: {
            marginTop: theme.spacing(2)
        },
        [theme.breakpoints.down(460)]: {
            marginTop: theme.spacing(4)
        }
    },
    feIcon: {
        fill: '#fff',
        fontSize: "2rem"
    },

    iconWrapperGrid: {
        background: "#0F87E6",
        //marginRight: theme.spacing(2),
        height: "60px",
        width: "60px",
        display: 'flex',
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",

    },
    skillIconWrapper: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        [theme.breakpoints.down(460)]: {
            justifyContent: 'center',
            maxWidth: "100%",
            flexBasis: '100%'
        }
    },
    skillListWrapper: {
        [theme.breakpoints.down(460)]: {
            textAlign: 'center',
            maxWidth: "100%",
            flexBasis: '100%'
        }
    }
}))

const About = () => {

    const classes = useStyles()
    return (
        <Box className={classes.aboutWrapper} id="about">

            <Container className={classes.aboutInner}>
                <Typography variant="h4" component="h4" align="center" className={classes.aboutHeader}><span>About</span> Me</Typography>
                <Grid container spacing={5}>
                    <Grid item xs={6} className={classes.aboutGrid} >
                        <Box display="flex" alignItems="center">
                            <div>

                                <Grid container spacing={2}>
                                    <Grid item xs={2} className={classes.skillIconWrapper}  >
                                        <div className={classes.iconWrapperGrid}>
                                            <WebIcon className={classes.feIcon} />
                                        </div>
                                    </Grid>
                                    <Grid item xs={10} className={classes.skillListWrapper}>
                                        <Typography variant="h5" component="h5" className={classes.skillHeader}>
                                            Frontend
                                        </Typography>
                                        <Typography variant="body1" component="p">
                                            HTML, CSS, Bootstrap, Javascript/jQuery, React.js, Redux, Material-UI
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2} className={classes.backend}>
                                    <Grid item className={classes.skillIconWrapper} xs={2} >
                                        <div className={classes.iconWrapperGrid}>
                                            <StorageIcon className={classes.feIcon} />
                                        </div>
                                    </Grid>
                                    <Grid item xs={10} className={classes.skillListWrapper}>
                                        <Typography variant="h5" component="h5" className={classes.skillHeader}>
                                            Backend
                                        </Typography>
                                        <Typography variant="body1" component="p">
                                            Node.js, Express.js, MongoDB, Mongoose
                                        </Typography>
                                    </Grid>
                                </Grid>

                            </div>
                        </Box>


                    </Grid>

                    <Grid item xs={6} className={classes.aboutGrid}>
                        <Box display="flex" alignItems="center" style={{ height: "100%" }}>
                            <Typography variant="body1" component="p" className={classes.aboutDesc}>
                                {"I am mostly a self-taught developer and my favourite stack to use is the MERN ( MongoDB, Express, React, Node ) stack. I started my dev journey in early 2019 and have been loving it since! Currently pursuing my Computer Science degree in Multimedia Nusantara University."}
                            </Typography>
                        </Box>

                    </Grid>
                </Grid>
            </Container>

        </Box>
    )
}

export default About