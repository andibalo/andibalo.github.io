import React, { useState } from 'react'

import { useStaticQuery, graphql } from "gatsby"
import GatsbyImg from 'gatsby-image'

import { Container, Box, Grid, Typography, Button, ButtonGroup } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
    sectionWrapper: {
        padding: theme.spacing(10, 0),
        backgroundColor: '#252526'
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
        maxWidth: "100%",

    },
    gridTile: {
        marginBottom: 'initial',
        cursor: 'pointer',
        position: 'relative',
        '&:hover div': {
            opacity: '1'
        },
        [theme.breakpoints.down(1230)]: {
            width: '50% !important',
            height: 'auto !important',
            maxHeight: '250px'
        },
        [theme.breakpoints.down(768)]: {
            width: '100% !important',
            maxHeight: '350px'
        }
    },
    gridImg: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    },
    gridOverlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        zIndex: '9',
        backgroundColor: 'rgba(15, 135, 230,0.9)',
        opacity: '0',
        transition: 'all 0.3s',
        '& .projectHeader': {
            fontWeight: '600',
            color: '#fff',
            fontFamily: 'Open Sans'
        },
        '& .projectSubheader': {

            color: '#d2d2d2',

        },
    },
    modalImg: {
        minHeight: "250px",
        width: "100%",
        objectFit: "cover",
        marginBottom: theme.spacing(2),
        [theme.breakpoints.down(768)]: {
            minHeight: '100px'
        }
    },
    buttonGroup: {
        marginBottom: theme.spacing(2),
        '& button': {
            backgroundColor: '#0F87E6',
            "&:hover": {
                backgroundColor: '#0e73c3'
            }
        }
    },
    modalCloseBtn: {
        color: '#0F87E6'
    }
}))

const Works = () => {
    const data = useStaticQuery(graphql`
    query {
        allPortfolioCard {
          nodes {
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            subtitle
            description
            demo
            sourcecode
            cols
          }
        }
      }
  `)


    //console.log(data.allPortfolioCard.nodes)

    const [workData, setWorkData] = useState({
        works: [],
        selectedWork: null
    })

    const { works, selectedWork } = workData

    const [open, setOpen] = useState(false);

    const classes = useStyles()

    const handleWorkBtn = (viewDemo, demoLink, sourceCodeLink) => {

        if (viewDemo) {

            window.open(demoLink, '_blank')
        } else {
            window.open(sourceCodeLink, '_blank')
        }
    }

    const handleClickOpen = (e) => {

        setWorkData({
            ...workData,
            selectedWork: e.target.dataset.work
        })

        //console.log(workData)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const renderModal = () => {

        //console.log(works[selectedWork])

        const { title, description, image, demo, sourcecode } = data.allPortfolioCard.nodes[selectedWork]

        return (
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title" style={{ textAlign: "center" }}>{title || "Title"}</DialogTitle>
                    <DialogContent>
                        <GatsbyImg fluid={image.childImageSharp.fluid} alt={title} className={classes.modalImg} />
                        <Box display="flex" justifyContent="center">
                            <ButtonGroup variant="contained" color="primary" className={classes.buttonGroup}>
                                <Button disabled={demo ? false : true} onClick={e => handleWorkBtn(true, demo, sourcecode)}>Demo</Button>
                                <Button disabled={demo ? false : true} onClick={e => handleWorkBtn(false, demo, sourcecode)}>Source Code</Button>
                            </ButtonGroup>
                        </Box>
                        <DialogContentText id="alert-dialog-description">
                            {description || "Title"}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} className={classes.modalCloseBtn}>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }



    return (
        <Box id="works" className={classes.sectionWrapper}>
            <Container >
                <Typography variant="h4" component="h4" align="center" className={classes.sectionHeader}>My <span>Works</span></Typography>

                <Grid container justify="center">
                    <GridList className={classes.gridList} cols={3} spacing={5} style={{ width: "100%" }} >
                        {data.allPortfolioCard.nodes.map((work, index) => {

                            //console.log(work)
                            return (

                                <GridListTile key={index} cols={work.cols || 1} className={classes.gridTile} onClick={e => handleClickOpen(e)} >
                                    <Box data-work={index} display="flex" justifyContent="center" alignItems="center" className={classes.gridOverlay} >
                                        <div style={{ pointerEvents: "none" }}>
                                            {work.title && (
                                                <Typography variant="h5" component="h5" align="center" className="projectHeader">
                                                    {work.title}
                                                </Typography>
                                            )}

                                            {work.subtitle &&
                                                (<Typography variant="body1" component="p" align="center" className="projectSubheader" >
                                                    {work.subtitle}
                                                </Typography>)
                                            }
                                        </div>
                                    </Box>
                                    <GatsbyImg fluid={work.image.childImageSharp.fluid} alt={work.title} />
                                </GridListTile>
                            )
                        })}
                    </GridList>
                </Grid>
                {selectedWork && renderModal()}
            </Container>

        </Box>

    )
}


export default Works
