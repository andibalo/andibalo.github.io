import React from 'react'
import { Container, Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ExperienceVertical from './ExperienceVertical'

const useStyles = makeStyles(theme => ({
    sectionWrapper: {
        padding: theme.spacing(10, 0),
        backgroundColor: '#333332'
    },
    sectionHeader: {
        color: '#80807A',
        fontFamily: 'Open Sans',
        fontWeight: '500',
        '& span': {
            color: '#0F87E6'
        },
        marginBottom: theme.spacing(5)
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    expNodeActive: {
        backgroundColor: '#255275 !important',
        '& div:first-child': {
            background: '#1772BA !important',
        },
        '& div:last-child': {
            background: '#0F87E6 !important',
        }
    },
    expNode: {
        position: "relative",
        width: "70px",
        height: "70px",
        borderRadius: "50%",
        backgroundColor: '#7E7E7E',
        zIndex: 3,
        '& div:first-child': {
            position: 'absolute',
            width: "100%",
            height: '100%',
            borderRadius: "50%",
            background: '#CECECE',
            transform: 'scale(0.9)'
        },
        '& div:last-child': {
            position: 'absolute',
            width: "100%",
            height: '100%',
            borderRadius: "50%",
            background: '#FFFFFF',
            transform: 'scale(0.8)'
        }
    },
    nodeDesc: {
        marginTop: theme.spacing(2),
        '& h6': {
            color: '#0F87E6',
            fontWeight: '600'
        },
        '& .expCompany': {
            color: '#7B7B75'
        },
        '& > *': {
            textAlign: "center"
        }
    },
    expDate: {
        fontWeight: '500',
        color: 'white'
    },
    expDescription: {
        marginTop: theme.spacing(10)
    },
    nodeLine: {
        position: 'absolute',
        background: '#7C7C77',
        width: "70%",
        left: '50%',
        transform: 'translateX(-50%)',
        top: '43px',
        height: '2px'
    },
    verticalTimeline: {
        display: 'none',
        [theme.breakpoints.down(769)]: {
            display: 'block'
        }
    },
    horizontalTimeline: {
        [theme.breakpoints.down(769)]: {
            display: 'none'
        }
    },
    expBox: {
        marginTop: theme.spacing(4),
        position: 'relative',
        backgroundColor: '#80807A',
        padding: theme.spacing(4),
        maxWidth: "350px",
        '& .boxTriangle': {
            position: 'absolute',
            width: "0",
            height: '0',
            borderStyle: "solid",
            borderWidth: "0 20px 20px 20px",
            borderColor: "transparent transparent #80807A transparent",
            top: '-19px',
            left: '50%',
            transform: 'translateX(-50%)'
        },
        '&.active': {
            backgroundColor: '#0F87E6',
            '& .boxTriangle': {
                borderColor: "transparent transparent #0F87E6 transparent",
            }
        }
    }
}))

const Experience = () => {

    const classes = useStyles()






    return (
        <Box id="experience" className={classes.sectionWrapper}>

            <Container >
                <Typography variant="h4" component="h4" align="center" className={classes.sectionHeader}>My <span>Experience</span></Typography>

                <Grid container spacing={2} style={{ position: 'relative' }} className={classes.horizontalTimeline}>
                    <hr className={classes.nodeLine} />
                    <Grid item xs={4} >
                        <Box display="flex" justifyContent="center">
                            <div className={classes.expNode} >
                                <div />
                                <div />
                            </div>
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <div>
                                <div>
                                    <div className={classes.nodeDesc}>
                                        <Typography variant="h6" component="h6">
                                            Insurance Specialist
                                        </Typography>
                                        <Typography variant="body1" component="p" className="expCompany">
                                            Futuready
                                        </Typography>
                                        <Typography variant="body1" component="p" className={classes.expDate}>
                                            Feb 2019 - May 2019
                                        </Typography>
                                    </div>
                                </div>

                                <Box className={classes.expBox}>
                                    <div className="boxTriangle" />
                                    <Typography variant="body1" component="p">
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                        praesentium voluptatum deleniti atque corrupti quos dolores
                                    </Typography>
                                </Box>
                            </div>

                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box display="flex" justifyContent="center">
                            <div className={classes.expNode} >
                                <div />
                                <div />
                            </div>
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <div >
                                <div className={classes.nodeDesc}>
                                    <Typography variant="h6" component="h6">
                                        Web Dev Instructor
                                    </Typography>
                                    <Typography variant="body1" component="p" className="expCompany">
                                        BinaryKiddo
                                    </Typography>
                                    <Typography variant="body1" component="p" className={classes.expDate}>
                                        Sep 2019 - Feb 2020
                                    </Typography>
                                </div>

                                <Box className={classes.expBox}>
                                    <div className="boxTriangle" />
                                    <Typography variant="body1" component="p">
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                        praesentium voluptatum deleniti atque corrupti quos dolores
                                    </Typography>
                                </Box>
                            </div>

                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box display="flex" justifyContent="center">
                            <div className={`${classes.expNode} ${classes.expNodeActive}`} >
                                <div />
                                <div />
                            </div>
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <div >
                                <div className={classes.nodeDesc}>
                                    <Typography variant="h6" component="h6">
                                        Web Developer
                                    </Typography>
                                    <Typography variant="body1" component="p" className="expCompany">
                                        Dorado
                                    </Typography>
                                    <Typography variant="body1" component="p" className={classes.expDate}>
                                        Jan 2020 - Present
                                    </Typography>
                                </div>

                                <Box className={`${classes.expBox} active`}>
                                    <div className="boxTriangle" />
                                    <Typography variant="body1" component="p">
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                        praesentium voluptatum deleniti atque corrupti quos dolores
                                    </Typography>
                                </Box>
                            </div>

                        </Box>
                    </Grid>
                </Grid>

                <div className={classes.verticalTimeline}>
                    <ExperienceVertical />
                </div>

            </Container>
        </Box>

    )
}


export default Experience
