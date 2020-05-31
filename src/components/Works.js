import React, { useState } from 'react'

import { useStaticQuery, graphql } from "gatsby"
import GatsbyImg from 'gatsby-image'

import { Container, Box, Grid, Typography, Button, ButtonGroup, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { SRLWrapper } from "simple-react-lightbox";
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';

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
        width: "600px",
        maxWidth: "100%",


        [theme.breakpoints.down(768)]: {
            minHeight: '100px'
        }
    },
    buttonGroup: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        '& button': {
            backgroundColor: '#0F87E6',
            "&:hover": {
                backgroundColor: '#0e73c3'
            }
        }
    },
    imgIcon: {
        position: "absolute",

        right: "16px",
        zIndex: "999",
        background: "#dcdcdc",
        bottom: "16px",
        display: "flex",
        alignItems: "center",
        borderRadius: '5px',
        padding: theme.spacing(0.5),
    },
    expandIcon: {
        position: "absolute",
        left: "16px",
        zIndex: "999",
        fontSize: '2rem',
        color: 'white',

        bottom: "16px",
        transition: 'all 0.2s',
        '&:hover': {
            transform: 'scale(1.2)',
            color: '#0F87E6'
        },
        '&:focus': {
            transform: 'scale(1.2)',
            color: '#0F87E6'
        }
    },
    modalCloseBtn: {
        color: '#0F87E6'
    }
}))

const Works = () => {

    const data = useStaticQuery(graphql`
    query {
        allPrismicPortfolio {
          edges {
            node {
              id
              type
              data {
                images {
                  image1 {
                    fluid(maxWidth: 1000, maxHeight: 800) {
                        ...GatsbyPrismicImageFluid
                      }
                    alt
                  }
               
                }
                description {
                  text
                }
                title {
                  text
                }
                subtitle {
                  text
                }
                demo_link {
                    target
                    url
                }
                source_code {
                    target
                    url
                }
              }
            }
          }
        }
      }
      
  `)
    console.log(data)


    const [workData, setWorkData] = useState({
        works: [],
        selectedWork: null
    })

    const { works, selectedWork } = workData

    const [open, setOpen] = useState(false);

    const classes = useStyles()

    const handleWorkBtn = (viewDemo, targetLink) => {

        if (viewDemo) {
            window.open(targetLink, '_blank')
        } else {
            window.open(targetLink, '_blank')
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

        console.log(data.allPrismicPortfolio.edges[selectedWork])

        const { title, description, demo_link, source_code } = data.allPrismicPortfolio.edges[selectedWork].node.data

        return (
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title" style={{ textAlign: "center" }}>{title.text || "Title"}</DialogTitle>
                    <DialogContent>
                        <SRLWrapper >
                            {data.allPrismicPortfolio.edges[selectedWork].node.data.images.map((image, index) => {

                                return (
                                    <div style={{ position: 'relative', cursor: 'pointer' }} >
                                        {index === 0 && (<AspectRatioIcon className={classes.expandIcon} />)}

                                        {index === 0 && data.allPrismicPortfolio.edges[selectedWork].node.data.images.length > 1 && (
                                            <Paper className={classes.imgIcon} >
                                                <PhotoLibraryIcon style={{ marginRight: '8px' }} />
                                                <span style={{ fontFamily: "Raleway", fontWeight: "600" }}>{data.allPrismicPortfolio.edges[selectedWork].node.data.images.length}</span>
                                            </Paper>
                                        )}

                                        <GatsbyImg key={index} fluid={image.image1.fluid} alt={image.image1.alt ? image.image1.alt : ''} className={index === 0 ? classes.modalImg : ' '} style={index > 0 ? { visibility: "hidden", position: "absolute" } : {}} />
                                    </div>



                                )
                            })}


                        </SRLWrapper>

                        <Box display="flex" justifyContent="center">
                            <ButtonGroup variant="contained" color="primary" className={classes.buttonGroup}>
                                <Button disabled={demo_link.url ? false : true} onClick={e => handleWorkBtn(true, demo_link.url)}>Demo</Button>
                                <Button disabled={source_code.url ? false : true} onClick={e => handleWorkBtn(false, source_code.url)}>Source Code</Button>
                            </ButtonGroup>
                        </Box>
                        <DialogContentText id="alert-dialog-description">
                            {description.text || "Title"}
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
                        {data.allPrismicPortfolio.edges.map((work, index) => {

                            //console.log(work)
                            return (

                                <GridListTile key={index} cols={work.node.cols || 1} className={classes.gridTile} onClick={e => handleClickOpen(e)} >
                                    <Box data-work={index} display="flex" justifyContent="center" alignItems="center" className={classes.gridOverlay} >
                                        <div style={{ pointerEvents: "none" }}>
                                            {work.node.data.title.text && (
                                                <Typography variant="h5" component="h5" align="center" className="projectHeader">
                                                    {work.node.data.title.text}
                                                </Typography>
                                            )}

                                            {work.node.data.description.text &&
                                                (<Typography variant="body1" component="p" align="center" className="projectSubheader" >
                                                    {work.node.data.subtitle.text}
                                                </Typography>)
                                            }
                                        </div>
                                    </Box>
                                    <GatsbyImg key={index} fluid={work.node.data.images[0].image1.fluid} alt="test" />


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