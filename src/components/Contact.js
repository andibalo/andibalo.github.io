import React, { useState } from 'react'
import { Container, Box, Grid, Typography, Divider, Button, Fade } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import RoomIcon from '@material-ui/icons/Room';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress';

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
    contactHeader: {
        '& .header': {
            color: 'white',
            fontFamily: 'Raleway',
            fontWeight: '600'
        },
        '& .subHeader': {
            color: '#0F87E6',
            fontFamily: 'Raleway',
            fontWeight: '600'
        },
        [theme.breakpoints.down(815)]: {
            display: 'flex',
            justifyContent: 'center',
            '& div > *': {
                textAlign: 'center'
            }
        }
    },
    contactWrapper: {
        [theme.breakpoints.down(815)]: {
            flexBasis: "100%",
            maxWidth: '100%'
        }
    },
    formWrapper: {
        [theme.breakpoints.down(815)]: {
            flexBasis: "100%",
            maxWidth: '100%'
        }
    },
    contactDivider: {
        height: '15px',
        backgroundColor: '#80807A',
        width: '30%',
        marginTop: theme.spacing(1),
        [theme.breakpoints.down(815)]: {
            width: '60%',
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    },
    contactInfo: {
        marginTop: theme.spacing(5)
    },
    contactIconContainer: {
        display: 'flex',
        alignItems: 'center'

    },
    contactIcon: {
        color: '#0F87E6',

    },
    contactDesc: {
        color: ' #fff',
        fontFamily: 'Raleway',
        display: 'flex',
        alignItems: 'center'
    },
    submitBtn: {
        backgroundColor: '#0F87E6',
        color: '#fff',
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
        borderRadius: 0,
        '&:hover': {
            backgroundColor: '#0e73c3'
        },
        [theme.breakpoints.down(815)]: {
            width: '100%',

        }
    },
    btnLoading: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.3)'
        },
    },
    alertMsg: {
        display: "inline",
        marginLeft: theme.spacing(2),
        fontFamily: 'Raleway',
        fontWeight: '600',
        [theme.breakpoints.down(815)]: {
            marginLeft: '0',
            marginTop: theme.spacing(2),
            display: 'block',
            position: 'absolute'
        }
    }

}))

const Contact = () => {

    const [serverState, setServerState] = useState({
        submitting: null,
        status: null
    })

    const [fade, setFade] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const { name, email, message } = formData
    const { submitting, status } = serverState

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

        //console.log(formData)
    }

    const setAlert = (ok) => {
        setFade(true)
        setTimeout(() => setFade(false), 2000)
    }

    const handleServerResult = (ok) => {
        setFormData({
            name: '',
            email: '',
            message: ''
        })


        setServerState({
            ...serverState,
            submitting: null,
            status: ok
        })

        setAlert()

    }

    const handleSubmit = async (e, formData) => {
        e.preventDefault()


        console.log('formdata', formData)

        try {

            setServerState({
                ...serverState,
                submitting: true
            })

            await axios.post('https://getform.io/f/ef960de5-543e-47fc-b790-ef5906e02516', formData)

            handleServerResult(true)
        } catch (error) {

            console.log(error)

            handleServerResult(false)
        }
    }

    const classes = useStyles()

    return (
        <Box id="contact" className={classes.sectionWrapper}>

            <Container >
                <Typography variant="h4" component="h4" align="center" className={classes.sectionHeader}>Get <span>In Touch</span></Typography>

                <Grid container spacing={5}>
                    <Grid item xs={5} className={classes.contactWrapper}>
                        <Box className={classes.contactHeader}>
                            <div>
                                <Typography variant="h5" component="h5" className="header">Got a project in mind?</Typography>
                                <Typography variant="h5" component="h5" className="subHeader">Feel free to contact me</Typography>
                                <Divider className={classes.contactDivider} />
                            </div>
                        </Box>
                        <Grid container className={classes.contactInfo}>
                            <Grid item xs={2} className={classes.contactIconContainer}>
                                <RoomIcon fontSize="large" className={classes.contactIcon} />
                            </Grid>
                            <Grid item xs={10} className={classes.contactDesc}>
                                <div>
                                    <Typography variant="body1" component="p">Sukapura, Jakarta, Kota Jakarta Utara, - 14140</Typography>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container className={classes.contactInfo}>
                            <Grid item xs={2} className={classes.contactIconContainer}>
                                <EmailIcon fontSize="large" className={classes.contactIcon} />
                            </Grid>
                            <Grid item xs={10} className={classes.contactDesc}>
                                <div>
                                    <Typography variant="body1" component="p">andibalo213@gmail.com</Typography>
                                </div>

                            </Grid>
                        </Grid>
                        <Grid container className={classes.contactInfo}>
                            <Grid item xs={2} className={classes.contactIconContainer}>
                                <PhoneIcon fontSize="large" className={classes.contactIcon} />
                            </Grid>
                            <Grid item xs={10} className={classes.contactDesc}>
                                <div>
                                    <Typography variant="body1" component="p">0852 2606 2116</Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={7} className={classes.formWrapper}>
                        <form onSubmit={e => handleSubmit(e, { name, email, message })}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        name="name"
                                        label="Name"
                                        type="text"
                                        variant="filled"
                                        style={{ backgroundColor: '#fff' }}
                                        onChange={e => handleChange(e)}
                                        value={name}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        name="email"
                                        fullWidth
                                        label="Email"
                                        type="email"
                                        variant="filled"
                                        style={{ backgroundColor: '#fff' }}
                                        onChange={e => handleChange(e)}
                                        value={email}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        name="message"
                                        label="Message"
                                        type="text"
                                        multiline
                                        rows={8}
                                        variant="filled"
                                        style={{ backgroundColor: '#fff' }}
                                        onChange={e => handleChange(e)}
                                        value={message}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <Button type="submit" variant="contained" className={`${classes.submitBtn} ${submitting && classes.btnLoading}`} >
                                        Send
                                        {submitting && <CircularProgress style={{ position: 'absolute', color: "#0F87E6", width: '30px', height: '30px' }} />}
                                    </Button>

                                    <Fade in={fade}>
                                        <Typography className={classes.alertMsg} style={{ color: status ? '#4caf50' : '#f44336' }}>{status ? "Thanks for the message! I'll get back to you shortly." : "Something went wrong, please try again later."}</Typography>
                                    </Fade>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Container>

        </Box>

    )
}


export default Contact
